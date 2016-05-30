// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23881_23895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23882_23896 = null;
var count__23883_23897 = (0);
var i__23884_23898 = (0);
while(true){
if((i__23884_23898 < count__23883_23897)){
var f_23899 = cljs.core._nth.call(null,chunk__23882_23896,i__23884_23898);
cljs.core.println.call(null,"  ",f_23899);

var G__23900 = seq__23881_23895;
var G__23901 = chunk__23882_23896;
var G__23902 = count__23883_23897;
var G__23903 = (i__23884_23898 + (1));
seq__23881_23895 = G__23900;
chunk__23882_23896 = G__23901;
count__23883_23897 = G__23902;
i__23884_23898 = G__23903;
continue;
} else {
var temp__4657__auto___23904 = cljs.core.seq.call(null,seq__23881_23895);
if(temp__4657__auto___23904){
var seq__23881_23905__$1 = temp__4657__auto___23904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23881_23905__$1)){
var c__15606__auto___23906 = cljs.core.chunk_first.call(null,seq__23881_23905__$1);
var G__23907 = cljs.core.chunk_rest.call(null,seq__23881_23905__$1);
var G__23908 = c__15606__auto___23906;
var G__23909 = cljs.core.count.call(null,c__15606__auto___23906);
var G__23910 = (0);
seq__23881_23895 = G__23907;
chunk__23882_23896 = G__23908;
count__23883_23897 = G__23909;
i__23884_23898 = G__23910;
continue;
} else {
var f_23911 = cljs.core.first.call(null,seq__23881_23905__$1);
cljs.core.println.call(null,"  ",f_23911);

var G__23912 = cljs.core.next.call(null,seq__23881_23905__$1);
var G__23913 = null;
var G__23914 = (0);
var G__23915 = (0);
seq__23881_23895 = G__23912;
chunk__23882_23896 = G__23913;
count__23883_23897 = G__23914;
i__23884_23898 = G__23915;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23916 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__14803__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23916);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23916)))?cljs.core.second.call(null,arglists_23916):arglists_23916));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23886 = null;
var count__23887 = (0);
var i__23888 = (0);
while(true){
if((i__23888 < count__23887)){
var vec__23889 = cljs.core._nth.call(null,chunk__23886,i__23888);
var name = cljs.core.nth.call(null,vec__23889,(0),null);
var map__23890 = cljs.core.nth.call(null,vec__23889,(1),null);
var map__23890__$1 = ((((!((map__23890 == null)))?((((map__23890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890):map__23890);
var doc = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23917 = seq__23885;
var G__23918 = chunk__23886;
var G__23919 = count__23887;
var G__23920 = (i__23888 + (1));
seq__23885 = G__23917;
chunk__23886 = G__23918;
count__23887 = G__23919;
i__23888 = G__23920;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23885);
if(temp__4657__auto__){
var seq__23885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23885__$1)){
var c__15606__auto__ = cljs.core.chunk_first.call(null,seq__23885__$1);
var G__23921 = cljs.core.chunk_rest.call(null,seq__23885__$1);
var G__23922 = c__15606__auto__;
var G__23923 = cljs.core.count.call(null,c__15606__auto__);
var G__23924 = (0);
seq__23885 = G__23921;
chunk__23886 = G__23922;
count__23887 = G__23923;
i__23888 = G__23924;
continue;
} else {
var vec__23892 = cljs.core.first.call(null,seq__23885__$1);
var name = cljs.core.nth.call(null,vec__23892,(0),null);
var map__23893 = cljs.core.nth.call(null,vec__23892,(1),null);
var map__23893__$1 = ((((!((map__23893 == null)))?((((map__23893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23893):map__23893);
var doc = cljs.core.get.call(null,map__23893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23925 = cljs.core.next.call(null,seq__23885__$1);
var G__23926 = null;
var G__23927 = (0);
var G__23928 = (0);
seq__23885 = G__23925;
chunk__23886 = G__23926;
count__23887 = G__23927;
i__23888 = G__23928;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map