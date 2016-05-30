// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__14803__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__14803__auto__){
return or__14803__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__14803__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22857_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22857_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22862 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22863 = null;
var count__22864 = (0);
var i__22865 = (0);
while(true){
if((i__22865 < count__22864)){
var n = cljs.core._nth.call(null,chunk__22863,i__22865);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22866 = seq__22862;
var G__22867 = chunk__22863;
var G__22868 = count__22864;
var G__22869 = (i__22865 + (1));
seq__22862 = G__22866;
chunk__22863 = G__22867;
count__22864 = G__22868;
i__22865 = G__22869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22862);
if(temp__4657__auto__){
var seq__22862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22862__$1)){
var c__15606__auto__ = cljs.core.chunk_first.call(null,seq__22862__$1);
var G__22870 = cljs.core.chunk_rest.call(null,seq__22862__$1);
var G__22871 = c__15606__auto__;
var G__22872 = cljs.core.count.call(null,c__15606__auto__);
var G__22873 = (0);
seq__22862 = G__22870;
chunk__22863 = G__22871;
count__22864 = G__22872;
i__22865 = G__22873;
continue;
} else {
var n = cljs.core.first.call(null,seq__22862__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22874 = cljs.core.next.call(null,seq__22862__$1);
var G__22875 = null;
var G__22876 = (0);
var G__22877 = (0);
seq__22862 = G__22874;
chunk__22863 = G__22875;
count__22864 = G__22876;
i__22865 = G__22877;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22916_22923 = cljs.core.seq.call(null,deps);
var chunk__22917_22924 = null;
var count__22918_22925 = (0);
var i__22919_22926 = (0);
while(true){
if((i__22919_22926 < count__22918_22925)){
var dep_22927 = cljs.core._nth.call(null,chunk__22917_22924,i__22919_22926);
topo_sort_helper_STAR_.call(null,dep_22927,(depth + (1)),state);

var G__22928 = seq__22916_22923;
var G__22929 = chunk__22917_22924;
var G__22930 = count__22918_22925;
var G__22931 = (i__22919_22926 + (1));
seq__22916_22923 = G__22928;
chunk__22917_22924 = G__22929;
count__22918_22925 = G__22930;
i__22919_22926 = G__22931;
continue;
} else {
var temp__4657__auto___22932 = cljs.core.seq.call(null,seq__22916_22923);
if(temp__4657__auto___22932){
var seq__22916_22933__$1 = temp__4657__auto___22932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22916_22933__$1)){
var c__15606__auto___22934 = cljs.core.chunk_first.call(null,seq__22916_22933__$1);
var G__22935 = cljs.core.chunk_rest.call(null,seq__22916_22933__$1);
var G__22936 = c__15606__auto___22934;
var G__22937 = cljs.core.count.call(null,c__15606__auto___22934);
var G__22938 = (0);
seq__22916_22923 = G__22935;
chunk__22917_22924 = G__22936;
count__22918_22925 = G__22937;
i__22919_22926 = G__22938;
continue;
} else {
var dep_22939 = cljs.core.first.call(null,seq__22916_22933__$1);
topo_sort_helper_STAR_.call(null,dep_22939,(depth + (1)),state);

var G__22940 = cljs.core.next.call(null,seq__22916_22933__$1);
var G__22941 = null;
var G__22942 = (0);
var G__22943 = (0);
seq__22916_22923 = G__22940;
chunk__22917_22924 = G__22941;
count__22918_22925 = G__22942;
i__22919_22926 = G__22943;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22920){
var vec__22922 = p__22920;
var x = cljs.core.nth.call(null,vec__22922,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22922,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22922,x,xs,get_deps__$1){
return (function (p1__22878_SHARP_){
return clojure.set.difference.call(null,p1__22878_SHARP_,x);
});})(vec__22922,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22956 = cljs.core.seq.call(null,provides);
var chunk__22957 = null;
var count__22958 = (0);
var i__22959 = (0);
while(true){
if((i__22959 < count__22958)){
var prov = cljs.core._nth.call(null,chunk__22957,i__22959);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22960_22968 = cljs.core.seq.call(null,requires);
var chunk__22961_22969 = null;
var count__22962_22970 = (0);
var i__22963_22971 = (0);
while(true){
if((i__22963_22971 < count__22962_22970)){
var req_22972 = cljs.core._nth.call(null,chunk__22961_22969,i__22963_22971);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22972,prov);

var G__22973 = seq__22960_22968;
var G__22974 = chunk__22961_22969;
var G__22975 = count__22962_22970;
var G__22976 = (i__22963_22971 + (1));
seq__22960_22968 = G__22973;
chunk__22961_22969 = G__22974;
count__22962_22970 = G__22975;
i__22963_22971 = G__22976;
continue;
} else {
var temp__4657__auto___22977 = cljs.core.seq.call(null,seq__22960_22968);
if(temp__4657__auto___22977){
var seq__22960_22978__$1 = temp__4657__auto___22977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22960_22978__$1)){
var c__15606__auto___22979 = cljs.core.chunk_first.call(null,seq__22960_22978__$1);
var G__22980 = cljs.core.chunk_rest.call(null,seq__22960_22978__$1);
var G__22981 = c__15606__auto___22979;
var G__22982 = cljs.core.count.call(null,c__15606__auto___22979);
var G__22983 = (0);
seq__22960_22968 = G__22980;
chunk__22961_22969 = G__22981;
count__22962_22970 = G__22982;
i__22963_22971 = G__22983;
continue;
} else {
var req_22984 = cljs.core.first.call(null,seq__22960_22978__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22984,prov);

var G__22985 = cljs.core.next.call(null,seq__22960_22978__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__22960_22968 = G__22985;
chunk__22961_22969 = G__22986;
count__22962_22970 = G__22987;
i__22963_22971 = G__22988;
continue;
}
} else {
}
}
break;
}

var G__22989 = seq__22956;
var G__22990 = chunk__22957;
var G__22991 = count__22958;
var G__22992 = (i__22959 + (1));
seq__22956 = G__22989;
chunk__22957 = G__22990;
count__22958 = G__22991;
i__22959 = G__22992;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22956);
if(temp__4657__auto__){
var seq__22956__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22956__$1)){
var c__15606__auto__ = cljs.core.chunk_first.call(null,seq__22956__$1);
var G__22993 = cljs.core.chunk_rest.call(null,seq__22956__$1);
var G__22994 = c__15606__auto__;
var G__22995 = cljs.core.count.call(null,c__15606__auto__);
var G__22996 = (0);
seq__22956 = G__22993;
chunk__22957 = G__22994;
count__22958 = G__22995;
i__22959 = G__22996;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22956__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22964_22997 = cljs.core.seq.call(null,requires);
var chunk__22965_22998 = null;
var count__22966_22999 = (0);
var i__22967_23000 = (0);
while(true){
if((i__22967_23000 < count__22966_22999)){
var req_23001 = cljs.core._nth.call(null,chunk__22965_22998,i__22967_23000);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23001,prov);

var G__23002 = seq__22964_22997;
var G__23003 = chunk__22965_22998;
var G__23004 = count__22966_22999;
var G__23005 = (i__22967_23000 + (1));
seq__22964_22997 = G__23002;
chunk__22965_22998 = G__23003;
count__22966_22999 = G__23004;
i__22967_23000 = G__23005;
continue;
} else {
var temp__4657__auto___23006__$1 = cljs.core.seq.call(null,seq__22964_22997);
if(temp__4657__auto___23006__$1){
var seq__22964_23007__$1 = temp__4657__auto___23006__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22964_23007__$1)){
var c__15606__auto___23008 = cljs.core.chunk_first.call(null,seq__22964_23007__$1);
var G__23009 = cljs.core.chunk_rest.call(null,seq__22964_23007__$1);
var G__23010 = c__15606__auto___23008;
var G__23011 = cljs.core.count.call(null,c__15606__auto___23008);
var G__23012 = (0);
seq__22964_22997 = G__23009;
chunk__22965_22998 = G__23010;
count__22966_22999 = G__23011;
i__22967_23000 = G__23012;
continue;
} else {
var req_23013 = cljs.core.first.call(null,seq__22964_23007__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23013,prov);

var G__23014 = cljs.core.next.call(null,seq__22964_23007__$1);
var G__23015 = null;
var G__23016 = (0);
var G__23017 = (0);
seq__22964_22997 = G__23014;
chunk__22965_22998 = G__23015;
count__22966_22999 = G__23016;
i__22967_23000 = G__23017;
continue;
}
} else {
}
}
break;
}

var G__23018 = cljs.core.next.call(null,seq__22956__$1);
var G__23019 = null;
var G__23020 = (0);
var G__23021 = (0);
seq__22956 = G__23018;
chunk__22957 = G__23019;
count__22958 = G__23020;
i__22959 = G__23021;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23026_23030 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23027_23031 = null;
var count__23028_23032 = (0);
var i__23029_23033 = (0);
while(true){
if((i__23029_23033 < count__23028_23032)){
var ns_23034 = cljs.core._nth.call(null,chunk__23027_23031,i__23029_23033);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23034);

var G__23035 = seq__23026_23030;
var G__23036 = chunk__23027_23031;
var G__23037 = count__23028_23032;
var G__23038 = (i__23029_23033 + (1));
seq__23026_23030 = G__23035;
chunk__23027_23031 = G__23036;
count__23028_23032 = G__23037;
i__23029_23033 = G__23038;
continue;
} else {
var temp__4657__auto___23039 = cljs.core.seq.call(null,seq__23026_23030);
if(temp__4657__auto___23039){
var seq__23026_23040__$1 = temp__4657__auto___23039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23026_23040__$1)){
var c__15606__auto___23041 = cljs.core.chunk_first.call(null,seq__23026_23040__$1);
var G__23042 = cljs.core.chunk_rest.call(null,seq__23026_23040__$1);
var G__23043 = c__15606__auto___23041;
var G__23044 = cljs.core.count.call(null,c__15606__auto___23041);
var G__23045 = (0);
seq__23026_23030 = G__23042;
chunk__23027_23031 = G__23043;
count__23028_23032 = G__23044;
i__23029_23033 = G__23045;
continue;
} else {
var ns_23046 = cljs.core.first.call(null,seq__23026_23040__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23046);

var G__23047 = cljs.core.next.call(null,seq__23026_23040__$1);
var G__23048 = null;
var G__23049 = (0);
var G__23050 = (0);
seq__23026_23030 = G__23047;
chunk__23027_23031 = G__23048;
count__23028_23032 = G__23049;
i__23029_23033 = G__23050;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__14803__auto__ = goog.require__;
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23051__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23052__i = 0, G__23052__a = new Array(arguments.length -  0);
while (G__23052__i < G__23052__a.length) {G__23052__a[G__23052__i] = arguments[G__23052__i + 0]; ++G__23052__i;}
  args = new cljs.core.IndexedSeq(G__23052__a,0);
} 
return G__23051__delegate.call(this,args);};
G__23051.cljs$lang$maxFixedArity = 0;
G__23051.cljs$lang$applyTo = (function (arglist__23053){
var args = cljs.core.seq(arglist__23053);
return G__23051__delegate(args);
});
G__23051.cljs$core$IFn$_invoke$arity$variadic = G__23051__delegate;
return G__23051;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23055 = cljs.core._EQ_;
var expr__23056 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23055.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23056))){
var path_parts = ((function (pred__23055,expr__23056){
return (function (p1__23054_SHARP_){
return clojure.string.split.call(null,p1__23054_SHARP_,/[\/\\]/);
});})(pred__23055,expr__23056))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23055,expr__23056){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23058){if((e23058 instanceof Error)){
var e = e23058;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23058;

}
}})());
});
;})(path_parts,sep,root,pred__23055,expr__23056))
} else {
if(cljs.core.truth_(pred__23055.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23056))){
return ((function (pred__23055,expr__23056){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23055,expr__23056){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23055,expr__23056))
);

return deferred.addErrback(((function (deferred,pred__23055,expr__23056){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23055,expr__23056))
);
});
;})(pred__23055,expr__23056))
} else {
return ((function (pred__23055,expr__23056){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23055,expr__23056))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23059,callback){
var map__23062 = p__23059;
var map__23062__$1 = ((((!((map__23062 == null)))?((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23062):map__23062);
var file_msg = map__23062__$1;
var request_url = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23062,map__23062__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23062,map__23062__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_23086){
var state_val_23087 = (state_23086[(1)]);
if((state_val_23087 === (7))){
var inst_23082 = (state_23086[(2)]);
var state_23086__$1 = state_23086;
var statearr_23088_23108 = state_23086__$1;
(statearr_23088_23108[(2)] = inst_23082);

(statearr_23088_23108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (1))){
var state_23086__$1 = state_23086;
var statearr_23089_23109 = state_23086__$1;
(statearr_23089_23109[(2)] = null);

(statearr_23089_23109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (4))){
var inst_23066 = (state_23086[(7)]);
var inst_23066__$1 = (state_23086[(2)]);
var state_23086__$1 = (function (){var statearr_23090 = state_23086;
(statearr_23090[(7)] = inst_23066__$1);

return statearr_23090;
})();
if(cljs.core.truth_(inst_23066__$1)){
var statearr_23091_23110 = state_23086__$1;
(statearr_23091_23110[(1)] = (5));

} else {
var statearr_23092_23111 = state_23086__$1;
(statearr_23092_23111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (6))){
var state_23086__$1 = state_23086;
var statearr_23093_23112 = state_23086__$1;
(statearr_23093_23112[(2)] = null);

(statearr_23093_23112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (3))){
var inst_23084 = (state_23086[(2)]);
var state_23086__$1 = state_23086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23086__$1,inst_23084);
} else {
if((state_val_23087 === (2))){
var state_23086__$1 = state_23086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23086__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23087 === (11))){
var inst_23078 = (state_23086[(2)]);
var state_23086__$1 = (function (){var statearr_23094 = state_23086;
(statearr_23094[(8)] = inst_23078);

return statearr_23094;
})();
var statearr_23095_23113 = state_23086__$1;
(statearr_23095_23113[(2)] = null);

(statearr_23095_23113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (9))){
var inst_23070 = (state_23086[(9)]);
var inst_23072 = (state_23086[(10)]);
var inst_23074 = inst_23072.call(null,inst_23070);
var state_23086__$1 = state_23086;
var statearr_23096_23114 = state_23086__$1;
(statearr_23096_23114[(2)] = inst_23074);

(statearr_23096_23114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (5))){
var inst_23066 = (state_23086[(7)]);
var inst_23068 = figwheel.client.file_reloading.blocking_load.call(null,inst_23066);
var state_23086__$1 = state_23086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23086__$1,(8),inst_23068);
} else {
if((state_val_23087 === (10))){
var inst_23070 = (state_23086[(9)]);
var inst_23076 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23070);
var state_23086__$1 = state_23086;
var statearr_23097_23115 = state_23086__$1;
(statearr_23097_23115[(2)] = inst_23076);

(statearr_23097_23115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (8))){
var inst_23066 = (state_23086[(7)]);
var inst_23072 = (state_23086[(10)]);
var inst_23070 = (state_23086[(2)]);
var inst_23071 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23072__$1 = cljs.core.get.call(null,inst_23071,inst_23066);
var state_23086__$1 = (function (){var statearr_23098 = state_23086;
(statearr_23098[(9)] = inst_23070);

(statearr_23098[(10)] = inst_23072__$1);

return statearr_23098;
})();
if(cljs.core.truth_(inst_23072__$1)){
var statearr_23099_23116 = state_23086__$1;
(statearr_23099_23116[(1)] = (9));

} else {
var statearr_23100_23117 = state_23086__$1;
(statearr_23100_23117[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19852__auto__ = null;
var figwheel$client$file_reloading$state_machine__19852__auto____0 = (function (){
var statearr_23104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23104[(0)] = figwheel$client$file_reloading$state_machine__19852__auto__);

(statearr_23104[(1)] = (1));

return statearr_23104;
});
var figwheel$client$file_reloading$state_machine__19852__auto____1 = (function (state_23086){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_23086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e23105){if((e23105 instanceof Object)){
var ex__19855__auto__ = e23105;
var statearr_23106_23118 = state_23086;
(statearr_23106_23118[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23119 = state_23086;
state_23086 = G__23119;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19852__auto__ = function(state_23086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19852__auto____1.call(this,state_23086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19852__auto____0;
figwheel$client$file_reloading$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19852__auto____1;
return figwheel$client$file_reloading$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_23107 = f__19964__auto__.call(null);
(statearr_23107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_23107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23120,callback){
var map__23123 = p__23120;
var map__23123__$1 = ((((!((map__23123 == null)))?((((map__23123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23123):map__23123);
var file_msg = map__23123__$1;
var namespace = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23123,map__23123__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23123,map__23123__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23125){
var map__23128 = p__23125;
var map__23128__$1 = ((((!((map__23128 == null)))?((((map__23128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23128):map__23128);
var file_msg = map__23128__$1;
var namespace = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__14791__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__14791__auto__){
var or__14803__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
var or__14803__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__14803__auto____$1)){
return or__14803__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__14791__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23130,callback){
var map__23133 = p__23130;
var map__23133__$1 = ((((!((map__23133 == null)))?((((map__23133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23133):map__23133);
var file_msg = map__23133__$1;
var request_url = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19963__auto___23221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___23221,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___23221,out){
return (function (state_23203){
var state_val_23204 = (state_23203[(1)]);
if((state_val_23204 === (1))){
var inst_23181 = cljs.core.nth.call(null,files,(0),null);
var inst_23182 = cljs.core.nthnext.call(null,files,(1));
var inst_23183 = files;
var state_23203__$1 = (function (){var statearr_23205 = state_23203;
(statearr_23205[(7)] = inst_23182);

(statearr_23205[(8)] = inst_23183);

(statearr_23205[(9)] = inst_23181);

return statearr_23205;
})();
var statearr_23206_23222 = state_23203__$1;
(statearr_23206_23222[(2)] = null);

(statearr_23206_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (2))){
var inst_23183 = (state_23203[(8)]);
var inst_23186 = (state_23203[(10)]);
var inst_23186__$1 = cljs.core.nth.call(null,inst_23183,(0),null);
var inst_23187 = cljs.core.nthnext.call(null,inst_23183,(1));
var inst_23188 = (inst_23186__$1 == null);
var inst_23189 = cljs.core.not.call(null,inst_23188);
var state_23203__$1 = (function (){var statearr_23207 = state_23203;
(statearr_23207[(11)] = inst_23187);

(statearr_23207[(10)] = inst_23186__$1);

return statearr_23207;
})();
if(inst_23189){
var statearr_23208_23223 = state_23203__$1;
(statearr_23208_23223[(1)] = (4));

} else {
var statearr_23209_23224 = state_23203__$1;
(statearr_23209_23224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (3))){
var inst_23201 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23203__$1,inst_23201);
} else {
if((state_val_23204 === (4))){
var inst_23186 = (state_23203[(10)]);
var inst_23191 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23186);
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23203__$1,(7),inst_23191);
} else {
if((state_val_23204 === (5))){
var inst_23197 = cljs.core.async.close_BANG_.call(null,out);
var state_23203__$1 = state_23203;
var statearr_23210_23225 = state_23203__$1;
(statearr_23210_23225[(2)] = inst_23197);

(statearr_23210_23225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (6))){
var inst_23199 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
var statearr_23211_23226 = state_23203__$1;
(statearr_23211_23226[(2)] = inst_23199);

(statearr_23211_23226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (7))){
var inst_23187 = (state_23203[(11)]);
var inst_23193 = (state_23203[(2)]);
var inst_23194 = cljs.core.async.put_BANG_.call(null,out,inst_23193);
var inst_23183 = inst_23187;
var state_23203__$1 = (function (){var statearr_23212 = state_23203;
(statearr_23212[(12)] = inst_23194);

(statearr_23212[(8)] = inst_23183);

return statearr_23212;
})();
var statearr_23213_23227 = state_23203__$1;
(statearr_23213_23227[(2)] = null);

(statearr_23213_23227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19963__auto___23221,out))
;
return ((function (switch__19851__auto__,c__19963__auto___23221,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____0 = (function (){
var statearr_23217 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23217[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__);

(statearr_23217[(1)] = (1));

return statearr_23217;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____1 = (function (state_23203){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_23203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e23218){if((e23218 instanceof Object)){
var ex__19855__auto__ = e23218;
var statearr_23219_23228 = state_23203;
(statearr_23219_23228[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23229 = state_23203;
state_23203 = G__23229;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__ = function(state_23203){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____1.call(this,state_23203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___23221,out))
})();
var state__19965__auto__ = (function (){var statearr_23220 = f__19964__auto__.call(null);
(statearr_23220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___23221);

return statearr_23220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___23221,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23230,opts){
var map__23234 = p__23230;
var map__23234__$1 = ((((!((map__23234 == null)))?((((map__23234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23234):map__23234);
var eval_body__$1 = cljs.core.get.call(null,map__23234__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__14791__auto__ = eval_body__$1;
if(cljs.core.truth_(and__14791__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__14791__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23236){var e = e23236;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23237_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23237_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23242){
var vec__23243 = p__23242;
var k = cljs.core.nth.call(null,vec__23243,(0),null);
var v = cljs.core.nth.call(null,vec__23243,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23244){
var vec__23245 = p__23244;
var k = cljs.core.nth.call(null,vec__23245,(0),null);
var v = cljs.core.nth.call(null,vec__23245,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23249,p__23250){
var map__23497 = p__23249;
var map__23497__$1 = ((((!((map__23497 == null)))?((((map__23497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497):map__23497);
var opts = map__23497__$1;
var before_jsload = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23498 = p__23250;
var map__23498__$1 = ((((!((map__23498 == null)))?((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var msg = map__23498__$1;
var files = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23651){
var state_val_23652 = (state_23651[(1)]);
if((state_val_23652 === (7))){
var inst_23514 = (state_23651[(7)]);
var inst_23512 = (state_23651[(8)]);
var inst_23515 = (state_23651[(9)]);
var inst_23513 = (state_23651[(10)]);
var inst_23520 = cljs.core._nth.call(null,inst_23513,inst_23515);
var inst_23521 = figwheel.client.file_reloading.eval_body.call(null,inst_23520,opts);
var inst_23522 = (inst_23515 + (1));
var tmp23653 = inst_23514;
var tmp23654 = inst_23512;
var tmp23655 = inst_23513;
var inst_23512__$1 = tmp23654;
var inst_23513__$1 = tmp23655;
var inst_23514__$1 = tmp23653;
var inst_23515__$1 = inst_23522;
var state_23651__$1 = (function (){var statearr_23656 = state_23651;
(statearr_23656[(7)] = inst_23514__$1);

(statearr_23656[(8)] = inst_23512__$1);

(statearr_23656[(9)] = inst_23515__$1);

(statearr_23656[(11)] = inst_23521);

(statearr_23656[(10)] = inst_23513__$1);

return statearr_23656;
})();
var statearr_23657_23743 = state_23651__$1;
(statearr_23657_23743[(2)] = null);

(statearr_23657_23743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (20))){
var inst_23555 = (state_23651[(12)]);
var inst_23563 = figwheel.client.file_reloading.sort_files.call(null,inst_23555);
var state_23651__$1 = state_23651;
var statearr_23658_23744 = state_23651__$1;
(statearr_23658_23744[(2)] = inst_23563);

(statearr_23658_23744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (27))){
var state_23651__$1 = state_23651;
var statearr_23659_23745 = state_23651__$1;
(statearr_23659_23745[(2)] = null);

(statearr_23659_23745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (1))){
var inst_23504 = (state_23651[(13)]);
var inst_23501 = before_jsload.call(null,files);
var inst_23502 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23503 = (function (){return ((function (inst_23504,inst_23501,inst_23502,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23246_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23246_SHARP_);
});
;})(inst_23504,inst_23501,inst_23502,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23504__$1 = cljs.core.filter.call(null,inst_23503,files);
var inst_23505 = cljs.core.not_empty.call(null,inst_23504__$1);
var state_23651__$1 = (function (){var statearr_23660 = state_23651;
(statearr_23660[(14)] = inst_23501);

(statearr_23660[(15)] = inst_23502);

(statearr_23660[(13)] = inst_23504__$1);

return statearr_23660;
})();
if(cljs.core.truth_(inst_23505)){
var statearr_23661_23746 = state_23651__$1;
(statearr_23661_23746[(1)] = (2));

} else {
var statearr_23662_23747 = state_23651__$1;
(statearr_23662_23747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (24))){
var state_23651__$1 = state_23651;
var statearr_23663_23748 = state_23651__$1;
(statearr_23663_23748[(2)] = null);

(statearr_23663_23748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (39))){
var inst_23605 = (state_23651[(16)]);
var state_23651__$1 = state_23651;
var statearr_23664_23749 = state_23651__$1;
(statearr_23664_23749[(2)] = inst_23605);

(statearr_23664_23749[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (46))){
var inst_23646 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23665_23750 = state_23651__$1;
(statearr_23665_23750[(2)] = inst_23646);

(statearr_23665_23750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (4))){
var inst_23549 = (state_23651[(2)]);
var inst_23550 = cljs.core.List.EMPTY;
var inst_23551 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23550);
var inst_23552 = (function (){return ((function (inst_23549,inst_23550,inst_23551,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23247_SHARP_){
var and__14791__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23247_SHARP_);
if(cljs.core.truth_(and__14791__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23247_SHARP_));
} else {
return and__14791__auto__;
}
});
;})(inst_23549,inst_23550,inst_23551,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23553 = cljs.core.filter.call(null,inst_23552,files);
var inst_23554 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23555 = cljs.core.concat.call(null,inst_23553,inst_23554);
var state_23651__$1 = (function (){var statearr_23666 = state_23651;
(statearr_23666[(17)] = inst_23549);

(statearr_23666[(12)] = inst_23555);

(statearr_23666[(18)] = inst_23551);

return statearr_23666;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23667_23751 = state_23651__$1;
(statearr_23667_23751[(1)] = (16));

} else {
var statearr_23668_23752 = state_23651__$1;
(statearr_23668_23752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (15))){
var inst_23539 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23669_23753 = state_23651__$1;
(statearr_23669_23753[(2)] = inst_23539);

(statearr_23669_23753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (21))){
var inst_23565 = (state_23651[(19)]);
var inst_23565__$1 = (state_23651[(2)]);
var inst_23566 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23565__$1);
var state_23651__$1 = (function (){var statearr_23670 = state_23651;
(statearr_23670[(19)] = inst_23565__$1);

return statearr_23670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(22),inst_23566);
} else {
if((state_val_23652 === (31))){
var inst_23649 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23651__$1,inst_23649);
} else {
if((state_val_23652 === (32))){
var inst_23605 = (state_23651[(16)]);
var inst_23610 = inst_23605.cljs$lang$protocol_mask$partition0$;
var inst_23611 = (inst_23610 & (64));
var inst_23612 = inst_23605.cljs$core$ISeq$;
var inst_23613 = (inst_23611) || (inst_23612);
var state_23651__$1 = state_23651;
if(cljs.core.truth_(inst_23613)){
var statearr_23671_23754 = state_23651__$1;
(statearr_23671_23754[(1)] = (35));

} else {
var statearr_23672_23755 = state_23651__$1;
(statearr_23672_23755[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (40))){
var inst_23626 = (state_23651[(20)]);
var inst_23625 = (state_23651[(2)]);
var inst_23626__$1 = cljs.core.get.call(null,inst_23625,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23627 = cljs.core.get.call(null,inst_23625,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23628 = cljs.core.not_empty.call(null,inst_23626__$1);
var state_23651__$1 = (function (){var statearr_23673 = state_23651;
(statearr_23673[(20)] = inst_23626__$1);

(statearr_23673[(21)] = inst_23627);

return statearr_23673;
})();
if(cljs.core.truth_(inst_23628)){
var statearr_23674_23756 = state_23651__$1;
(statearr_23674_23756[(1)] = (41));

} else {
var statearr_23675_23757 = state_23651__$1;
(statearr_23675_23757[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (33))){
var state_23651__$1 = state_23651;
var statearr_23676_23758 = state_23651__$1;
(statearr_23676_23758[(2)] = false);

(statearr_23676_23758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (13))){
var inst_23525 = (state_23651[(22)]);
var inst_23529 = cljs.core.chunk_first.call(null,inst_23525);
var inst_23530 = cljs.core.chunk_rest.call(null,inst_23525);
var inst_23531 = cljs.core.count.call(null,inst_23529);
var inst_23512 = inst_23530;
var inst_23513 = inst_23529;
var inst_23514 = inst_23531;
var inst_23515 = (0);
var state_23651__$1 = (function (){var statearr_23677 = state_23651;
(statearr_23677[(7)] = inst_23514);

(statearr_23677[(8)] = inst_23512);

(statearr_23677[(9)] = inst_23515);

(statearr_23677[(10)] = inst_23513);

return statearr_23677;
})();
var statearr_23678_23759 = state_23651__$1;
(statearr_23678_23759[(2)] = null);

(statearr_23678_23759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (22))){
var inst_23568 = (state_23651[(23)]);
var inst_23573 = (state_23651[(24)]);
var inst_23569 = (state_23651[(25)]);
var inst_23565 = (state_23651[(19)]);
var inst_23568__$1 = (state_23651[(2)]);
var inst_23569__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23568__$1);
var inst_23570 = (function (){var all_files = inst_23565;
var res_SINGLEQUOTE_ = inst_23568__$1;
var res = inst_23569__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23568,inst_23573,inst_23569,inst_23565,inst_23568__$1,inst_23569__$1,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23248_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23248_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23568,inst_23573,inst_23569,inst_23565,inst_23568__$1,inst_23569__$1,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23571 = cljs.core.filter.call(null,inst_23570,inst_23568__$1);
var inst_23572 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23573__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23572);
var inst_23574 = cljs.core.not_empty.call(null,inst_23573__$1);
var state_23651__$1 = (function (){var statearr_23679 = state_23651;
(statearr_23679[(26)] = inst_23571);

(statearr_23679[(23)] = inst_23568__$1);

(statearr_23679[(24)] = inst_23573__$1);

(statearr_23679[(25)] = inst_23569__$1);

return statearr_23679;
})();
if(cljs.core.truth_(inst_23574)){
var statearr_23680_23760 = state_23651__$1;
(statearr_23680_23760[(1)] = (23));

} else {
var statearr_23681_23761 = state_23651__$1;
(statearr_23681_23761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (36))){
var state_23651__$1 = state_23651;
var statearr_23682_23762 = state_23651__$1;
(statearr_23682_23762[(2)] = false);

(statearr_23682_23762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (41))){
var inst_23626 = (state_23651[(20)]);
var inst_23630 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23631 = cljs.core.map.call(null,inst_23630,inst_23626);
var inst_23632 = cljs.core.pr_str.call(null,inst_23631);
var inst_23633 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23632)].join('');
var inst_23634 = figwheel.client.utils.log.call(null,inst_23633);
var state_23651__$1 = state_23651;
var statearr_23683_23763 = state_23651__$1;
(statearr_23683_23763[(2)] = inst_23634);

(statearr_23683_23763[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (43))){
var inst_23627 = (state_23651[(21)]);
var inst_23637 = (state_23651[(2)]);
var inst_23638 = cljs.core.not_empty.call(null,inst_23627);
var state_23651__$1 = (function (){var statearr_23684 = state_23651;
(statearr_23684[(27)] = inst_23637);

return statearr_23684;
})();
if(cljs.core.truth_(inst_23638)){
var statearr_23685_23764 = state_23651__$1;
(statearr_23685_23764[(1)] = (44));

} else {
var statearr_23686_23765 = state_23651__$1;
(statearr_23686_23765[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (29))){
var inst_23571 = (state_23651[(26)]);
var inst_23568 = (state_23651[(23)]);
var inst_23573 = (state_23651[(24)]);
var inst_23569 = (state_23651[(25)]);
var inst_23605 = (state_23651[(16)]);
var inst_23565 = (state_23651[(19)]);
var inst_23601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23604 = (function (){var all_files = inst_23565;
var res_SINGLEQUOTE_ = inst_23568;
var res = inst_23569;
var files_not_loaded = inst_23571;
var dependencies_that_loaded = inst_23573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23605,inst_23565,inst_23601,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23603){
var map__23687 = p__23603;
var map__23687__$1 = ((((!((map__23687 == null)))?((((map__23687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23687):map__23687);
var namespace = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23605,inst_23565,inst_23601,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23605__$1 = cljs.core.group_by.call(null,inst_23604,inst_23571);
var inst_23607 = (inst_23605__$1 == null);
var inst_23608 = cljs.core.not.call(null,inst_23607);
var state_23651__$1 = (function (){var statearr_23689 = state_23651;
(statearr_23689[(28)] = inst_23601);

(statearr_23689[(16)] = inst_23605__$1);

return statearr_23689;
})();
if(inst_23608){
var statearr_23690_23766 = state_23651__$1;
(statearr_23690_23766[(1)] = (32));

} else {
var statearr_23691_23767 = state_23651__$1;
(statearr_23691_23767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (44))){
var inst_23627 = (state_23651[(21)]);
var inst_23640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23627);
var inst_23641 = cljs.core.pr_str.call(null,inst_23640);
var inst_23642 = [cljs.core.str("not required: "),cljs.core.str(inst_23641)].join('');
var inst_23643 = figwheel.client.utils.log.call(null,inst_23642);
var state_23651__$1 = state_23651;
var statearr_23692_23768 = state_23651__$1;
(statearr_23692_23768[(2)] = inst_23643);

(statearr_23692_23768[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (6))){
var inst_23546 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23693_23769 = state_23651__$1;
(statearr_23693_23769[(2)] = inst_23546);

(statearr_23693_23769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (28))){
var inst_23571 = (state_23651[(26)]);
var inst_23598 = (state_23651[(2)]);
var inst_23599 = cljs.core.not_empty.call(null,inst_23571);
var state_23651__$1 = (function (){var statearr_23694 = state_23651;
(statearr_23694[(29)] = inst_23598);

return statearr_23694;
})();
if(cljs.core.truth_(inst_23599)){
var statearr_23695_23770 = state_23651__$1;
(statearr_23695_23770[(1)] = (29));

} else {
var statearr_23696_23771 = state_23651__$1;
(statearr_23696_23771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (25))){
var inst_23569 = (state_23651[(25)]);
var inst_23585 = (state_23651[(2)]);
var inst_23586 = cljs.core.not_empty.call(null,inst_23569);
var state_23651__$1 = (function (){var statearr_23697 = state_23651;
(statearr_23697[(30)] = inst_23585);

return statearr_23697;
})();
if(cljs.core.truth_(inst_23586)){
var statearr_23698_23772 = state_23651__$1;
(statearr_23698_23772[(1)] = (26));

} else {
var statearr_23699_23773 = state_23651__$1;
(statearr_23699_23773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (34))){
var inst_23620 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
if(cljs.core.truth_(inst_23620)){
var statearr_23700_23774 = state_23651__$1;
(statearr_23700_23774[(1)] = (38));

} else {
var statearr_23701_23775 = state_23651__$1;
(statearr_23701_23775[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (17))){
var state_23651__$1 = state_23651;
var statearr_23702_23776 = state_23651__$1;
(statearr_23702_23776[(2)] = recompile_dependents);

(statearr_23702_23776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (3))){
var state_23651__$1 = state_23651;
var statearr_23703_23777 = state_23651__$1;
(statearr_23703_23777[(2)] = null);

(statearr_23703_23777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (12))){
var inst_23542 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23704_23778 = state_23651__$1;
(statearr_23704_23778[(2)] = inst_23542);

(statearr_23704_23778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (2))){
var inst_23504 = (state_23651[(13)]);
var inst_23511 = cljs.core.seq.call(null,inst_23504);
var inst_23512 = inst_23511;
var inst_23513 = null;
var inst_23514 = (0);
var inst_23515 = (0);
var state_23651__$1 = (function (){var statearr_23705 = state_23651;
(statearr_23705[(7)] = inst_23514);

(statearr_23705[(8)] = inst_23512);

(statearr_23705[(9)] = inst_23515);

(statearr_23705[(10)] = inst_23513);

return statearr_23705;
})();
var statearr_23706_23779 = state_23651__$1;
(statearr_23706_23779[(2)] = null);

(statearr_23706_23779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (23))){
var inst_23571 = (state_23651[(26)]);
var inst_23568 = (state_23651[(23)]);
var inst_23573 = (state_23651[(24)]);
var inst_23569 = (state_23651[(25)]);
var inst_23565 = (state_23651[(19)]);
var inst_23576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23578 = (function (){var all_files = inst_23565;
var res_SINGLEQUOTE_ = inst_23568;
var res = inst_23569;
var files_not_loaded = inst_23571;
var dependencies_that_loaded = inst_23573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23576,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23577){
var map__23707 = p__23577;
var map__23707__$1 = ((((!((map__23707 == null)))?((((map__23707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var request_url = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23576,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23579 = cljs.core.reverse.call(null,inst_23573);
var inst_23580 = cljs.core.map.call(null,inst_23578,inst_23579);
var inst_23581 = cljs.core.pr_str.call(null,inst_23580);
var inst_23582 = figwheel.client.utils.log.call(null,inst_23581);
var state_23651__$1 = (function (){var statearr_23709 = state_23651;
(statearr_23709[(31)] = inst_23576);

return statearr_23709;
})();
var statearr_23710_23780 = state_23651__$1;
(statearr_23710_23780[(2)] = inst_23582);

(statearr_23710_23780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (35))){
var state_23651__$1 = state_23651;
var statearr_23711_23781 = state_23651__$1;
(statearr_23711_23781[(2)] = true);

(statearr_23711_23781[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (19))){
var inst_23555 = (state_23651[(12)]);
var inst_23561 = figwheel.client.file_reloading.expand_files.call(null,inst_23555);
var state_23651__$1 = state_23651;
var statearr_23712_23782 = state_23651__$1;
(statearr_23712_23782[(2)] = inst_23561);

(statearr_23712_23782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (11))){
var state_23651__$1 = state_23651;
var statearr_23713_23783 = state_23651__$1;
(statearr_23713_23783[(2)] = null);

(statearr_23713_23783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (9))){
var inst_23544 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23714_23784 = state_23651__$1;
(statearr_23714_23784[(2)] = inst_23544);

(statearr_23714_23784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (5))){
var inst_23514 = (state_23651[(7)]);
var inst_23515 = (state_23651[(9)]);
var inst_23517 = (inst_23515 < inst_23514);
var inst_23518 = inst_23517;
var state_23651__$1 = state_23651;
if(cljs.core.truth_(inst_23518)){
var statearr_23715_23785 = state_23651__$1;
(statearr_23715_23785[(1)] = (7));

} else {
var statearr_23716_23786 = state_23651__$1;
(statearr_23716_23786[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (14))){
var inst_23525 = (state_23651[(22)]);
var inst_23534 = cljs.core.first.call(null,inst_23525);
var inst_23535 = figwheel.client.file_reloading.eval_body.call(null,inst_23534,opts);
var inst_23536 = cljs.core.next.call(null,inst_23525);
var inst_23512 = inst_23536;
var inst_23513 = null;
var inst_23514 = (0);
var inst_23515 = (0);
var state_23651__$1 = (function (){var statearr_23717 = state_23651;
(statearr_23717[(7)] = inst_23514);

(statearr_23717[(8)] = inst_23512);

(statearr_23717[(32)] = inst_23535);

(statearr_23717[(9)] = inst_23515);

(statearr_23717[(10)] = inst_23513);

return statearr_23717;
})();
var statearr_23718_23787 = state_23651__$1;
(statearr_23718_23787[(2)] = null);

(statearr_23718_23787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (45))){
var state_23651__$1 = state_23651;
var statearr_23719_23788 = state_23651__$1;
(statearr_23719_23788[(2)] = null);

(statearr_23719_23788[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (26))){
var inst_23571 = (state_23651[(26)]);
var inst_23568 = (state_23651[(23)]);
var inst_23573 = (state_23651[(24)]);
var inst_23569 = (state_23651[(25)]);
var inst_23565 = (state_23651[(19)]);
var inst_23588 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23590 = (function (){var all_files = inst_23565;
var res_SINGLEQUOTE_ = inst_23568;
var res = inst_23569;
var files_not_loaded = inst_23571;
var dependencies_that_loaded = inst_23573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23588,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23589){
var map__23720 = p__23589;
var map__23720__$1 = ((((!((map__23720 == null)))?((((map__23720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23720):map__23720);
var namespace = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23588,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23591 = cljs.core.map.call(null,inst_23590,inst_23569);
var inst_23592 = cljs.core.pr_str.call(null,inst_23591);
var inst_23593 = figwheel.client.utils.log.call(null,inst_23592);
var inst_23594 = (function (){var all_files = inst_23565;
var res_SINGLEQUOTE_ = inst_23568;
var res = inst_23569;
var files_not_loaded = inst_23571;
var dependencies_that_loaded = inst_23573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23588,inst_23590,inst_23591,inst_23592,inst_23593,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23571,inst_23568,inst_23573,inst_23569,inst_23565,inst_23588,inst_23590,inst_23591,inst_23592,inst_23593,state_val_23652,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23595 = setTimeout(inst_23594,(10));
var state_23651__$1 = (function (){var statearr_23722 = state_23651;
(statearr_23722[(33)] = inst_23588);

(statearr_23722[(34)] = inst_23593);

return statearr_23722;
})();
var statearr_23723_23789 = state_23651__$1;
(statearr_23723_23789[(2)] = inst_23595);

(statearr_23723_23789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (16))){
var state_23651__$1 = state_23651;
var statearr_23724_23790 = state_23651__$1;
(statearr_23724_23790[(2)] = reload_dependents);

(statearr_23724_23790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (38))){
var inst_23605 = (state_23651[(16)]);
var inst_23622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23605);
var state_23651__$1 = state_23651;
var statearr_23725_23791 = state_23651__$1;
(statearr_23725_23791[(2)] = inst_23622);

(statearr_23725_23791[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (30))){
var state_23651__$1 = state_23651;
var statearr_23726_23792 = state_23651__$1;
(statearr_23726_23792[(2)] = null);

(statearr_23726_23792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (10))){
var inst_23525 = (state_23651[(22)]);
var inst_23527 = cljs.core.chunked_seq_QMARK_.call(null,inst_23525);
var state_23651__$1 = state_23651;
if(inst_23527){
var statearr_23727_23793 = state_23651__$1;
(statearr_23727_23793[(1)] = (13));

} else {
var statearr_23728_23794 = state_23651__$1;
(statearr_23728_23794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (18))){
var inst_23559 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
if(cljs.core.truth_(inst_23559)){
var statearr_23729_23795 = state_23651__$1;
(statearr_23729_23795[(1)] = (19));

} else {
var statearr_23730_23796 = state_23651__$1;
(statearr_23730_23796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (42))){
var state_23651__$1 = state_23651;
var statearr_23731_23797 = state_23651__$1;
(statearr_23731_23797[(2)] = null);

(statearr_23731_23797[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (37))){
var inst_23617 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23732_23798 = state_23651__$1;
(statearr_23732_23798[(2)] = inst_23617);

(statearr_23732_23798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (8))){
var inst_23512 = (state_23651[(8)]);
var inst_23525 = (state_23651[(22)]);
var inst_23525__$1 = cljs.core.seq.call(null,inst_23512);
var state_23651__$1 = (function (){var statearr_23733 = state_23651;
(statearr_23733[(22)] = inst_23525__$1);

return statearr_23733;
})();
if(inst_23525__$1){
var statearr_23734_23799 = state_23651__$1;
(statearr_23734_23799[(1)] = (10));

} else {
var statearr_23735_23800 = state_23651__$1;
(statearr_23735_23800[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19851__auto__,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____0 = (function (){
var statearr_23739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23739[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__);

(statearr_23739[(1)] = (1));

return statearr_23739;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____1 = (function (state_23651){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_23651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e23740){if((e23740 instanceof Object)){
var ex__19855__auto__ = e23740;
var statearr_23741_23801 = state_23651;
(statearr_23741_23801[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23802 = state_23651;
state_23651 = G__23802;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__ = function(state_23651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____1.call(this,state_23651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19965__auto__ = (function (){var statearr_23742 = f__19964__auto__.call(null);
(statearr_23742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_23742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__,map__23497,map__23497__$1,opts,before_jsload,on_jsload,reload_dependents,map__23498,map__23498__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19963__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23805,link){
var map__23808 = p__23805;
var map__23808__$1 = ((((!((map__23808 == null)))?((((map__23808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23808):map__23808);
var file = cljs.core.get.call(null,map__23808__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__23808,map__23808__$1,file){
return (function (p1__23803_SHARP_,p2__23804_SHARP_){
if(cljs.core._EQ_.call(null,p1__23803_SHARP_,p2__23804_SHARP_)){
return p1__23803_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__23808,map__23808__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23814){
var map__23815 = p__23814;
var map__23815__$1 = ((((!((map__23815 == null)))?((((map__23815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);
var match_length = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23810_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23810_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23817 = [];
var len__15861__auto___23820 = arguments.length;
var i__15862__auto___23821 = (0);
while(true){
if((i__15862__auto___23821 < len__15861__auto___23820)){
args23817.push((arguments[i__15862__auto___23821]));

var G__23822 = (i__15862__auto___23821 + (1));
i__15862__auto___23821 = G__23822;
continue;
} else {
}
break;
}

var G__23819 = args23817.length;
switch (G__23819) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23817.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23824_SHARP_,p2__23825_SHARP_){
return cljs.core.assoc.call(null,p1__23824_SHARP_,cljs.core.get.call(null,p2__23825_SHARP_,key),p2__23825_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23826){
var map__23829 = p__23826;
var map__23829__$1 = ((((!((map__23829 == null)))?((((map__23829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23829):map__23829);
var f_data = map__23829__$1;
var file = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23831,files_msg){
var map__23838 = p__23831;
var map__23838__$1 = ((((!((map__23838 == null)))?((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var opts = map__23838__$1;
var on_cssload = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23840_23844 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23841_23845 = null;
var count__23842_23846 = (0);
var i__23843_23847 = (0);
while(true){
if((i__23843_23847 < count__23842_23846)){
var f_23848 = cljs.core._nth.call(null,chunk__23841_23845,i__23843_23847);
figwheel.client.file_reloading.reload_css_file.call(null,f_23848);

var G__23849 = seq__23840_23844;
var G__23850 = chunk__23841_23845;
var G__23851 = count__23842_23846;
var G__23852 = (i__23843_23847 + (1));
seq__23840_23844 = G__23849;
chunk__23841_23845 = G__23850;
count__23842_23846 = G__23851;
i__23843_23847 = G__23852;
continue;
} else {
var temp__4657__auto___23853 = cljs.core.seq.call(null,seq__23840_23844);
if(temp__4657__auto___23853){
var seq__23840_23854__$1 = temp__4657__auto___23853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23840_23854__$1)){
var c__15606__auto___23855 = cljs.core.chunk_first.call(null,seq__23840_23854__$1);
var G__23856 = cljs.core.chunk_rest.call(null,seq__23840_23854__$1);
var G__23857 = c__15606__auto___23855;
var G__23858 = cljs.core.count.call(null,c__15606__auto___23855);
var G__23859 = (0);
seq__23840_23844 = G__23856;
chunk__23841_23845 = G__23857;
count__23842_23846 = G__23858;
i__23843_23847 = G__23859;
continue;
} else {
var f_23860 = cljs.core.first.call(null,seq__23840_23854__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23860);

var G__23861 = cljs.core.next.call(null,seq__23840_23854__$1);
var G__23862 = null;
var G__23863 = (0);
var G__23864 = (0);
seq__23840_23844 = G__23861;
chunk__23841_23845 = G__23862;
count__23842_23846 = G__23863;
i__23843_23847 = G__23864;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23838,map__23838__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23838,map__23838__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map