// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__17875_17879 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__17876_17880 = null;
var count__17877_17881 = (0);
var i__17878_17882 = (0);
while(true){
if((i__17878_17882 < count__17877_17881)){
var k_17883 = cljs.core._nth.call(null,chunk__17876_17880,i__17878_17882);
var v_17884 = (b[k_17883]);
(a[k_17883] = v_17884);

var G__17885 = seq__17875_17879;
var G__17886 = chunk__17876_17880;
var G__17887 = count__17877_17881;
var G__17888 = (i__17878_17882 + (1));
seq__17875_17879 = G__17885;
chunk__17876_17880 = G__17886;
count__17877_17881 = G__17887;
i__17878_17882 = G__17888;
continue;
} else {
var temp__4657__auto___17889 = cljs.core.seq.call(null,seq__17875_17879);
if(temp__4657__auto___17889){
var seq__17875_17890__$1 = temp__4657__auto___17889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17875_17890__$1)){
var c__15606__auto___17891 = cljs.core.chunk_first.call(null,seq__17875_17890__$1);
var G__17892 = cljs.core.chunk_rest.call(null,seq__17875_17890__$1);
var G__17893 = c__15606__auto___17891;
var G__17894 = cljs.core.count.call(null,c__15606__auto___17891);
var G__17895 = (0);
seq__17875_17879 = G__17892;
chunk__17876_17880 = G__17893;
count__17877_17881 = G__17894;
i__17878_17882 = G__17895;
continue;
} else {
var k_17896 = cljs.core.first.call(null,seq__17875_17890__$1);
var v_17897 = (b[k_17896]);
(a[k_17896] = v_17897);

var G__17898 = cljs.core.next.call(null,seq__17875_17890__$1);
var G__17899 = null;
var G__17900 = (0);
var G__17901 = (0);
seq__17875_17879 = G__17898;
chunk__17876_17880 = G__17899;
count__17877_17881 = G__17900;
i__17878_17882 = G__17901;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args17902 = [];
var len__15861__auto___17905 = arguments.length;
var i__15862__auto___17906 = (0);
while(true){
if((i__15862__auto___17906 < len__15861__auto___17905)){
args17902.push((arguments[i__15862__auto___17906]));

var G__17907 = (i__15862__auto___17906 + (1));
i__15862__auto___17906 = G__17907;
continue;
} else {
}
break;
}

var G__17904 = args17902.length;
switch (G__17904) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17902.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__17909 = (i + (2));
var G__17910 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__17909;
ret = G__17910;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17911_17915 = cljs.core.seq.call(null,v);
var chunk__17912_17916 = null;
var count__17913_17917 = (0);
var i__17914_17918 = (0);
while(true){
if((i__17914_17918 < count__17913_17917)){
var x_17919 = cljs.core._nth.call(null,chunk__17912_17916,i__17914_17918);
ret.push(x_17919);

var G__17920 = seq__17911_17915;
var G__17921 = chunk__17912_17916;
var G__17922 = count__17913_17917;
var G__17923 = (i__17914_17918 + (1));
seq__17911_17915 = G__17920;
chunk__17912_17916 = G__17921;
count__17913_17917 = G__17922;
i__17914_17918 = G__17923;
continue;
} else {
var temp__4657__auto___17924 = cljs.core.seq.call(null,seq__17911_17915);
if(temp__4657__auto___17924){
var seq__17911_17925__$1 = temp__4657__auto___17924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17911_17925__$1)){
var c__15606__auto___17926 = cljs.core.chunk_first.call(null,seq__17911_17925__$1);
var G__17927 = cljs.core.chunk_rest.call(null,seq__17911_17925__$1);
var G__17928 = c__15606__auto___17926;
var G__17929 = cljs.core.count.call(null,c__15606__auto___17926);
var G__17930 = (0);
seq__17911_17915 = G__17927;
chunk__17912_17916 = G__17928;
count__17913_17917 = G__17929;
i__17914_17918 = G__17930;
continue;
} else {
var x_17931 = cljs.core.first.call(null,seq__17911_17925__$1);
ret.push(x_17931);

var G__17932 = cljs.core.next.call(null,seq__17911_17925__$1);
var G__17933 = null;
var G__17934 = (0);
var G__17935 = (0);
seq__17911_17915 = G__17932;
chunk__17912_17916 = G__17933;
count__17913_17917 = G__17934;
i__17914_17918 = G__17935;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17936_17940 = cljs.core.seq.call(null,v);
var chunk__17937_17941 = null;
var count__17938_17942 = (0);
var i__17939_17943 = (0);
while(true){
if((i__17939_17943 < count__17938_17942)){
var x_17944 = cljs.core._nth.call(null,chunk__17937_17941,i__17939_17943);
ret.push(x_17944);

var G__17945 = seq__17936_17940;
var G__17946 = chunk__17937_17941;
var G__17947 = count__17938_17942;
var G__17948 = (i__17939_17943 + (1));
seq__17936_17940 = G__17945;
chunk__17937_17941 = G__17946;
count__17938_17942 = G__17947;
i__17939_17943 = G__17948;
continue;
} else {
var temp__4657__auto___17949 = cljs.core.seq.call(null,seq__17936_17940);
if(temp__4657__auto___17949){
var seq__17936_17950__$1 = temp__4657__auto___17949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17936_17950__$1)){
var c__15606__auto___17951 = cljs.core.chunk_first.call(null,seq__17936_17950__$1);
var G__17952 = cljs.core.chunk_rest.call(null,seq__17936_17950__$1);
var G__17953 = c__15606__auto___17951;
var G__17954 = cljs.core.count.call(null,c__15606__auto___17951);
var G__17955 = (0);
seq__17936_17940 = G__17952;
chunk__17937_17941 = G__17953;
count__17938_17942 = G__17954;
i__17939_17943 = G__17955;
continue;
} else {
var x_17956 = cljs.core.first.call(null,seq__17936_17950__$1);
ret.push(x_17956);

var G__17957 = cljs.core.next.call(null,seq__17936_17950__$1);
var G__17958 = null;
var G__17959 = (0);
var G__17960 = (0);
seq__17936_17940 = G__17957;
chunk__17937_17941 = G__17958;
count__17938_17942 = G__17959;
i__17939_17943 = G__17960;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17961_17965 = cljs.core.seq.call(null,v);
var chunk__17962_17966 = null;
var count__17963_17967 = (0);
var i__17964_17968 = (0);
while(true){
if((i__17964_17968 < count__17963_17967)){
var x_17969 = cljs.core._nth.call(null,chunk__17962_17966,i__17964_17968);
ret.push(x_17969);

var G__17970 = seq__17961_17965;
var G__17971 = chunk__17962_17966;
var G__17972 = count__17963_17967;
var G__17973 = (i__17964_17968 + (1));
seq__17961_17965 = G__17970;
chunk__17962_17966 = G__17971;
count__17963_17967 = G__17972;
i__17964_17968 = G__17973;
continue;
} else {
var temp__4657__auto___17974 = cljs.core.seq.call(null,seq__17961_17965);
if(temp__4657__auto___17974){
var seq__17961_17975__$1 = temp__4657__auto___17974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17961_17975__$1)){
var c__15606__auto___17976 = cljs.core.chunk_first.call(null,seq__17961_17975__$1);
var G__17977 = cljs.core.chunk_rest.call(null,seq__17961_17975__$1);
var G__17978 = c__15606__auto___17976;
var G__17979 = cljs.core.count.call(null,c__15606__auto___17976);
var G__17980 = (0);
seq__17961_17965 = G__17977;
chunk__17962_17966 = G__17978;
count__17963_17967 = G__17979;
i__17964_17968 = G__17980;
continue;
} else {
var x_17981 = cljs.core.first.call(null,seq__17961_17975__$1);
ret.push(x_17981);

var G__17982 = cljs.core.next.call(null,seq__17961_17975__$1);
var G__17983 = null;
var G__17984 = (0);
var G__17985 = (0);
seq__17961_17965 = G__17982;
chunk__17962_17966 = G__17983;
count__17963_17967 = G__17984;
i__17964_17968 = G__17985;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args17986 = [];
var len__15861__auto___17997 = arguments.length;
var i__15862__auto___17998 = (0);
while(true){
if((i__15862__auto___17998 < len__15861__auto___17997)){
args17986.push((arguments[i__15862__auto___17998]));

var G__17999 = (i__15862__auto___17998 + (1));
i__15862__auto___17998 = G__17999;
continue;
} else {
}
break;
}

var G__17988 = args17986.length;
switch (G__17988) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17986.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__17989 = obj;
G__17989.push(kfn.call(null,k),vfn.call(null,v));

return G__17989;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17990 = cljs.core.clone.call(null,handlers);
x17990.forEach = ((function (x17990,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__17991 = cljs.core.seq.call(null,coll);
var chunk__17992 = null;
var count__17993 = (0);
var i__17994 = (0);
while(true){
if((i__17994 < count__17993)){
var vec__17995 = cljs.core._nth.call(null,chunk__17992,i__17994);
var k = cljs.core.nth.call(null,vec__17995,(0),null);
var v = cljs.core.nth.call(null,vec__17995,(1),null);
f.call(null,v,k);

var G__18001 = seq__17991;
var G__18002 = chunk__17992;
var G__18003 = count__17993;
var G__18004 = (i__17994 + (1));
seq__17991 = G__18001;
chunk__17992 = G__18002;
count__17993 = G__18003;
i__17994 = G__18004;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17991);
if(temp__4657__auto__){
var seq__17991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17991__$1)){
var c__15606__auto__ = cljs.core.chunk_first.call(null,seq__17991__$1);
var G__18005 = cljs.core.chunk_rest.call(null,seq__17991__$1);
var G__18006 = c__15606__auto__;
var G__18007 = cljs.core.count.call(null,c__15606__auto__);
var G__18008 = (0);
seq__17991 = G__18005;
chunk__17992 = G__18006;
count__17993 = G__18007;
i__17994 = G__18008;
continue;
} else {
var vec__17996 = cljs.core.first.call(null,seq__17991__$1);
var k = cljs.core.nth.call(null,vec__17996,(0),null);
var v = cljs.core.nth.call(null,vec__17996,(1),null);
f.call(null,v,k);

var G__18009 = cljs.core.next.call(null,seq__17991__$1);
var G__18010 = null;
var G__18011 = (0);
var G__18012 = (0);
seq__17991 = G__18009;
chunk__17992 = G__18010;
count__17993 = G__18011;
i__17994 = G__18012;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17990,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x17990;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18013 = [];
var len__15861__auto___18019 = arguments.length;
var i__15862__auto___18020 = (0);
while(true){
if((i__15862__auto___18020 < len__15861__auto___18019)){
args18013.push((arguments[i__15862__auto___18020]));

var G__18021 = (i__15862__auto___18020 + (1));
i__15862__auto___18020 = G__18021;
continue;
} else {
}
break;
}

var G__18015 = args18013.length;
switch (G__18015) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18013.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18016 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18017){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18017 = meta18017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18018,meta18017__$1){
var self__ = this;
var _18018__$1 = this;
return (new cognitect.transit.t_cognitect$transit18016(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18017__$1));
});

cognitect.transit.t_cognitect$transit18016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18018){
var self__ = this;
var _18018__$1 = this;
return self__.meta18017;
});

cognitect.transit.t_cognitect$transit18016.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18016.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18016.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18016.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18017","meta18017",-2057817182,null)], null);
});

cognitect.transit.t_cognitect$transit18016.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18016.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18016";

cognitect.transit.t_cognitect$transit18016.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cognitect.transit/t_cognitect$transit18016");
});

cognitect.transit.__GT_t_cognitect$transit18016 = (function cognitect$transit$__GT_t_cognitect$transit18016(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18017){
return (new cognitect.transit.t_cognitect$transit18016(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18017));
});

}

return (new cognitect.transit.t_cognitect$transit18016(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__14803__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map