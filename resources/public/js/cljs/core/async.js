// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20008 = [];
var len__15861__auto___20014 = arguments.length;
var i__15862__auto___20015 = (0);
while(true){
if((i__15862__auto___20015 < len__15861__auto___20014)){
args20008.push((arguments[i__15862__auto___20015]));

var G__20016 = (i__15862__auto___20015 + (1));
i__15862__auto___20015 = G__20016;
continue;
} else {
}
break;
}

var G__20010 = args20008.length;
switch (G__20010) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20008.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20011 = (function (f,blockable,meta20012){
this.f = f;
this.blockable = blockable;
this.meta20012 = meta20012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20013,meta20012__$1){
var self__ = this;
var _20013__$1 = this;
return (new cljs.core.async.t_cljs$core$async20011(self__.f,self__.blockable,meta20012__$1));
});

cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20013){
var self__ = this;
var _20013__$1 = this;
return self__.meta20012;
});

cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20012","meta20012",1641772645,null)], null);
});

cljs.core.async.t_cljs$core$async20011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20011";

cljs.core.async.t_cljs$core$async20011.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async20011");
});

cljs.core.async.__GT_t_cljs$core$async20011 = (function cljs$core$async$__GT_t_cljs$core$async20011(f__$1,blockable__$1,meta20012){
return (new cljs.core.async.t_cljs$core$async20011(f__$1,blockable__$1,meta20012));
});

}

return (new cljs.core.async.t_cljs$core$async20011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20020 = [];
var len__15861__auto___20023 = arguments.length;
var i__15862__auto___20024 = (0);
while(true){
if((i__15862__auto___20024 < len__15861__auto___20023)){
args20020.push((arguments[i__15862__auto___20024]));

var G__20025 = (i__15862__auto___20024 + (1));
i__15862__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var G__20022 = args20020.length;
switch (G__20022) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20020.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20027 = [];
var len__15861__auto___20030 = arguments.length;
var i__15862__auto___20031 = (0);
while(true){
if((i__15862__auto___20031 < len__15861__auto___20030)){
args20027.push((arguments[i__15862__auto___20031]));

var G__20032 = (i__15862__auto___20031 + (1));
i__15862__auto___20031 = G__20032;
continue;
} else {
}
break;
}

var G__20029 = args20027.length;
switch (G__20029) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20027.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20034 = [];
var len__15861__auto___20037 = arguments.length;
var i__15862__auto___20038 = (0);
while(true){
if((i__15862__auto___20038 < len__15861__auto___20037)){
args20034.push((arguments[i__15862__auto___20038]));

var G__20039 = (i__15862__auto___20038 + (1));
i__15862__auto___20038 = G__20039;
continue;
} else {
}
break;
}

var G__20036 = args20034.length;
switch (G__20036) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20034.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20041 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20041);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20041,ret){
return (function (){
return fn1.call(null,val_20041);
});})(val_20041,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20042 = [];
var len__15861__auto___20045 = arguments.length;
var i__15862__auto___20046 = (0);
while(true){
if((i__15862__auto___20046 < len__15861__auto___20045)){
args20042.push((arguments[i__15862__auto___20046]));

var G__20047 = (i__15862__auto___20046 + (1));
i__15862__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var G__20044 = args20042.length;
switch (G__20044) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20042.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__15706__auto___20049 = n;
var x_20050 = (0);
while(true){
if((x_20050 < n__15706__auto___20049)){
(a[x_20050] = (0));

var G__20051 = (x_20050 + (1));
x_20050 = G__20051;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20052 = (i + (1));
i = G__20052;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20056 = (function (alt_flag,flag,meta20057){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20057 = meta20057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20058,meta20057__$1){
var self__ = this;
var _20058__$1 = this;
return (new cljs.core.async.t_cljs$core$async20056(self__.alt_flag,self__.flag,meta20057__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20058){
var self__ = this;
var _20058__$1 = this;
return self__.meta20057;
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20057","meta20057",-26715911,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20056";

cljs.core.async.t_cljs$core$async20056.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async20056");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20056 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20056(alt_flag__$1,flag__$1,meta20057){
return (new cljs.core.async.t_cljs$core$async20056(alt_flag__$1,flag__$1,meta20057));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20056(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20062 = (function (alt_handler,flag,cb,meta20063){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20063 = meta20063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20064,meta20063__$1){
var self__ = this;
var _20064__$1 = this;
return (new cljs.core.async.t_cljs$core$async20062(self__.alt_handler,self__.flag,self__.cb,meta20063__$1));
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20064){
var self__ = this;
var _20064__$1 = this;
return self__.meta20063;
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20063","meta20063",160196750,null)], null);
});

cljs.core.async.t_cljs$core$async20062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20062";

cljs.core.async.t_cljs$core$async20062.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async20062");
});

cljs.core.async.__GT_t_cljs$core$async20062 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20062(alt_handler__$1,flag__$1,cb__$1,meta20063){
return (new cljs.core.async.t_cljs$core$async20062(alt_handler__$1,flag__$1,cb__$1,meta20063));
});

}

return (new cljs.core.async.t_cljs$core$async20062(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20065_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20065_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20066_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20066_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14803__auto__ = wport;
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20067 = (i + (1));
i = G__20067;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14803__auto__ = ret;
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__14791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14791__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14791__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__15868__auto__ = [];
var len__15861__auto___20073 = arguments.length;
var i__15862__auto___20074 = (0);
while(true){
if((i__15862__auto___20074 < len__15861__auto___20073)){
args__15868__auto__.push((arguments[i__15862__auto___20074]));

var G__20075 = (i__15862__auto___20074 + (1));
i__15862__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var argseq__15869__auto__ = ((((1) < args__15868__auto__.length))?(new cljs.core.IndexedSeq(args__15868__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15869__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20070){
var map__20071 = p__20070;
var map__20071__$1 = ((((!((map__20071 == null)))?((((map__20071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20071):map__20071);
var opts = map__20071__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20068){
var G__20069 = cljs.core.first.call(null,seq20068);
var seq20068__$1 = cljs.core.next.call(null,seq20068);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20069,seq20068__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20076 = [];
var len__15861__auto___20126 = arguments.length;
var i__15862__auto___20127 = (0);
while(true){
if((i__15862__auto___20127 < len__15861__auto___20126)){
args20076.push((arguments[i__15862__auto___20127]));

var G__20128 = (i__15862__auto___20127 + (1));
i__15862__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var G__20078 = args20076.length;
switch (G__20078) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20076.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19963__auto___20130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___20130){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___20130){
return (function (state_20102){
var state_val_20103 = (state_20102[(1)]);
if((state_val_20103 === (7))){
var inst_20098 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20104_20131 = state_20102__$1;
(statearr_20104_20131[(2)] = inst_20098);

(statearr_20104_20131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (1))){
var state_20102__$1 = state_20102;
var statearr_20105_20132 = state_20102__$1;
(statearr_20105_20132[(2)] = null);

(statearr_20105_20132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (4))){
var inst_20081 = (state_20102[(7)]);
var inst_20081__$1 = (state_20102[(2)]);
var inst_20082 = (inst_20081__$1 == null);
var state_20102__$1 = (function (){var statearr_20106 = state_20102;
(statearr_20106[(7)] = inst_20081__$1);

return statearr_20106;
})();
if(cljs.core.truth_(inst_20082)){
var statearr_20107_20133 = state_20102__$1;
(statearr_20107_20133[(1)] = (5));

} else {
var statearr_20108_20134 = state_20102__$1;
(statearr_20108_20134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (13))){
var state_20102__$1 = state_20102;
var statearr_20109_20135 = state_20102__$1;
(statearr_20109_20135[(2)] = null);

(statearr_20109_20135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (6))){
var inst_20081 = (state_20102[(7)]);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20102__$1,(11),to,inst_20081);
} else {
if((state_val_20103 === (3))){
var inst_20100 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20102__$1,inst_20100);
} else {
if((state_val_20103 === (12))){
var state_20102__$1 = state_20102;
var statearr_20110_20136 = state_20102__$1;
(statearr_20110_20136[(2)] = null);

(statearr_20110_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (2))){
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20102__$1,(4),from);
} else {
if((state_val_20103 === (11))){
var inst_20091 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20091)){
var statearr_20111_20137 = state_20102__$1;
(statearr_20111_20137[(1)] = (12));

} else {
var statearr_20112_20138 = state_20102__$1;
(statearr_20112_20138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (9))){
var state_20102__$1 = state_20102;
var statearr_20113_20139 = state_20102__$1;
(statearr_20113_20139[(2)] = null);

(statearr_20113_20139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (5))){
var state_20102__$1 = state_20102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20114_20140 = state_20102__$1;
(statearr_20114_20140[(1)] = (8));

} else {
var statearr_20115_20141 = state_20102__$1;
(statearr_20115_20141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (14))){
var inst_20096 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20116_20142 = state_20102__$1;
(statearr_20116_20142[(2)] = inst_20096);

(statearr_20116_20142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (10))){
var inst_20088 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20117_20143 = state_20102__$1;
(statearr_20117_20143[(2)] = inst_20088);

(statearr_20117_20143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20103 === (8))){
var inst_20085 = cljs.core.async.close_BANG_.call(null,to);
var state_20102__$1 = state_20102;
var statearr_20118_20144 = state_20102__$1;
(statearr_20118_20144[(2)] = inst_20085);

(statearr_20118_20144[(1)] = (10));


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
});})(c__19963__auto___20130))
;
return ((function (switch__19851__auto__,c__19963__auto___20130){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_20122 = [null,null,null,null,null,null,null,null];
(statearr_20122[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_20122[(1)] = (1));

return statearr_20122;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_20102){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20123){if((e20123 instanceof Object)){
var ex__19855__auto__ = e20123;
var statearr_20124_20145 = state_20102;
(statearr_20124_20145[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20146 = state_20102;
state_20102 = G__20146;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_20102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_20102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___20130))
})();
var state__19965__auto__ = (function (){var statearr_20125 = f__19964__auto__.call(null);
(statearr_20125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20130);

return statearr_20125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___20130))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20330){
var vec__20331 = p__20330;
var v = cljs.core.nth.call(null,vec__20331,(0),null);
var p = cljs.core.nth.call(null,vec__20331,(1),null);
var job = vec__20331;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19963__auto___20513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results){
return (function (state_20336){
var state_val_20337 = (state_20336[(1)]);
if((state_val_20337 === (1))){
var state_20336__$1 = state_20336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20336__$1,(2),res,v);
} else {
if((state_val_20337 === (2))){
var inst_20333 = (state_20336[(2)]);
var inst_20334 = cljs.core.async.close_BANG_.call(null,res);
var state_20336__$1 = (function (){var statearr_20338 = state_20336;
(statearr_20338[(7)] = inst_20333);

return statearr_20338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20336__$1,inst_20334);
} else {
return null;
}
}
});})(c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results))
;
return ((function (switch__19851__auto__,c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_20342 = [null,null,null,null,null,null,null,null];
(statearr_20342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__);

(statearr_20342[(1)] = (1));

return statearr_20342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1 = (function (state_20336){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20343){if((e20343 instanceof Object)){
var ex__19855__auto__ = e20343;
var statearr_20344_20514 = state_20336;
(statearr_20344_20514[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20515 = state_20336;
state_20336 = G__20515;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = function(state_20336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1.call(this,state_20336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results))
})();
var state__19965__auto__ = (function (){var statearr_20345 = f__19964__auto__.call(null);
(statearr_20345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20513);

return statearr_20345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___20513,res,vec__20331,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20346){
var vec__20347 = p__20346;
var v = cljs.core.nth.call(null,vec__20347,(0),null);
var p = cljs.core.nth.call(null,vec__20347,(1),null);
var job = vec__20347;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__15706__auto___20516 = n;
var __20517 = (0);
while(true){
if((__20517 < n__15706__auto___20516)){
var G__20348_20518 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20348_20518) {
case "compute":
var c__19963__auto___20520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20517,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (__20517,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function (state_20361){
var state_val_20362 = (state_20361[(1)]);
if((state_val_20362 === (1))){
var state_20361__$1 = state_20361;
var statearr_20363_20521 = state_20361__$1;
(statearr_20363_20521[(2)] = null);

(statearr_20363_20521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (2))){
var state_20361__$1 = state_20361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20361__$1,(4),jobs);
} else {
if((state_val_20362 === (3))){
var inst_20359 = (state_20361[(2)]);
var state_20361__$1 = state_20361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20361__$1,inst_20359);
} else {
if((state_val_20362 === (4))){
var inst_20351 = (state_20361[(2)]);
var inst_20352 = process.call(null,inst_20351);
var state_20361__$1 = state_20361;
if(cljs.core.truth_(inst_20352)){
var statearr_20364_20522 = state_20361__$1;
(statearr_20364_20522[(1)] = (5));

} else {
var statearr_20365_20523 = state_20361__$1;
(statearr_20365_20523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (5))){
var state_20361__$1 = state_20361;
var statearr_20366_20524 = state_20361__$1;
(statearr_20366_20524[(2)] = null);

(statearr_20366_20524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (6))){
var state_20361__$1 = state_20361;
var statearr_20367_20525 = state_20361__$1;
(statearr_20367_20525[(2)] = null);

(statearr_20367_20525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (7))){
var inst_20357 = (state_20361[(2)]);
var state_20361__$1 = state_20361;
var statearr_20368_20526 = state_20361__$1;
(statearr_20368_20526[(2)] = inst_20357);

(statearr_20368_20526[(1)] = (3));


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
});})(__20517,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
;
return ((function (__20517,switch__19851__auto__,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_20372 = [null,null,null,null,null,null,null];
(statearr_20372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__);

(statearr_20372[(1)] = (1));

return statearr_20372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1 = (function (state_20361){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20373){if((e20373 instanceof Object)){
var ex__19855__auto__ = e20373;
var statearr_20374_20527 = state_20361;
(statearr_20374_20527[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20528 = state_20361;
state_20361 = G__20528;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = function(state_20361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1.call(this,state_20361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__;
})()
;})(__20517,switch__19851__auto__,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
})();
var state__19965__auto__ = (function (){var statearr_20375 = f__19964__auto__.call(null);
(statearr_20375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20520);

return statearr_20375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(__20517,c__19963__auto___20520,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
);


break;
case "async":
var c__19963__auto___20529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20517,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (__20517,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function (state_20388){
var state_val_20389 = (state_20388[(1)]);
if((state_val_20389 === (1))){
var state_20388__$1 = state_20388;
var statearr_20390_20530 = state_20388__$1;
(statearr_20390_20530[(2)] = null);

(statearr_20390_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (2))){
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20388__$1,(4),jobs);
} else {
if((state_val_20389 === (3))){
var inst_20386 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20388__$1,inst_20386);
} else {
if((state_val_20389 === (4))){
var inst_20378 = (state_20388[(2)]);
var inst_20379 = async.call(null,inst_20378);
var state_20388__$1 = state_20388;
if(cljs.core.truth_(inst_20379)){
var statearr_20391_20531 = state_20388__$1;
(statearr_20391_20531[(1)] = (5));

} else {
var statearr_20392_20532 = state_20388__$1;
(statearr_20392_20532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (5))){
var state_20388__$1 = state_20388;
var statearr_20393_20533 = state_20388__$1;
(statearr_20393_20533[(2)] = null);

(statearr_20393_20533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (6))){
var state_20388__$1 = state_20388;
var statearr_20394_20534 = state_20388__$1;
(statearr_20394_20534[(2)] = null);

(statearr_20394_20534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (7))){
var inst_20384 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
var statearr_20395_20535 = state_20388__$1;
(statearr_20395_20535[(2)] = inst_20384);

(statearr_20395_20535[(1)] = (3));


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
});})(__20517,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
;
return ((function (__20517,switch__19851__auto__,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_20399 = [null,null,null,null,null,null,null];
(statearr_20399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__);

(statearr_20399[(1)] = (1));

return statearr_20399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1 = (function (state_20388){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20400){if((e20400 instanceof Object)){
var ex__19855__auto__ = e20400;
var statearr_20401_20536 = state_20388;
(statearr_20401_20536[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20537 = state_20388;
state_20388 = G__20537;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = function(state_20388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1.call(this,state_20388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__;
})()
;})(__20517,switch__19851__auto__,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
})();
var state__19965__auto__ = (function (){var statearr_20402 = f__19964__auto__.call(null);
(statearr_20402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20529);

return statearr_20402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(__20517,c__19963__auto___20529,G__20348_20518,n__15706__auto___20516,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20538 = (__20517 + (1));
__20517 = G__20538;
continue;
} else {
}
break;
}

var c__19963__auto___20539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___20539,jobs,results,process,async){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___20539,jobs,results,process,async){
return (function (state_20424){
var state_val_20425 = (state_20424[(1)]);
if((state_val_20425 === (1))){
var state_20424__$1 = state_20424;
var statearr_20426_20540 = state_20424__$1;
(statearr_20426_20540[(2)] = null);

(statearr_20426_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20425 === (2))){
var state_20424__$1 = state_20424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20424__$1,(4),from);
} else {
if((state_val_20425 === (3))){
var inst_20422 = (state_20424[(2)]);
var state_20424__$1 = state_20424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20424__$1,inst_20422);
} else {
if((state_val_20425 === (4))){
var inst_20405 = (state_20424[(7)]);
var inst_20405__$1 = (state_20424[(2)]);
var inst_20406 = (inst_20405__$1 == null);
var state_20424__$1 = (function (){var statearr_20427 = state_20424;
(statearr_20427[(7)] = inst_20405__$1);

return statearr_20427;
})();
if(cljs.core.truth_(inst_20406)){
var statearr_20428_20541 = state_20424__$1;
(statearr_20428_20541[(1)] = (5));

} else {
var statearr_20429_20542 = state_20424__$1;
(statearr_20429_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20425 === (5))){
var inst_20408 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20424__$1 = state_20424;
var statearr_20430_20543 = state_20424__$1;
(statearr_20430_20543[(2)] = inst_20408);

(statearr_20430_20543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20425 === (6))){
var inst_20410 = (state_20424[(8)]);
var inst_20405 = (state_20424[(7)]);
var inst_20410__$1 = cljs.core.async.chan.call(null,(1));
var inst_20411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20412 = [inst_20405,inst_20410__$1];
var inst_20413 = (new cljs.core.PersistentVector(null,2,(5),inst_20411,inst_20412,null));
var state_20424__$1 = (function (){var statearr_20431 = state_20424;
(statearr_20431[(8)] = inst_20410__$1);

return statearr_20431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20424__$1,(8),jobs,inst_20413);
} else {
if((state_val_20425 === (7))){
var inst_20420 = (state_20424[(2)]);
var state_20424__$1 = state_20424;
var statearr_20432_20544 = state_20424__$1;
(statearr_20432_20544[(2)] = inst_20420);

(statearr_20432_20544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20425 === (8))){
var inst_20410 = (state_20424[(8)]);
var inst_20415 = (state_20424[(2)]);
var state_20424__$1 = (function (){var statearr_20433 = state_20424;
(statearr_20433[(9)] = inst_20415);

return statearr_20433;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20424__$1,(9),results,inst_20410);
} else {
if((state_val_20425 === (9))){
var inst_20417 = (state_20424[(2)]);
var state_20424__$1 = (function (){var statearr_20434 = state_20424;
(statearr_20434[(10)] = inst_20417);

return statearr_20434;
})();
var statearr_20435_20545 = state_20424__$1;
(statearr_20435_20545[(2)] = null);

(statearr_20435_20545[(1)] = (2));


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
});})(c__19963__auto___20539,jobs,results,process,async))
;
return ((function (switch__19851__auto__,c__19963__auto___20539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_20439 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__);

(statearr_20439[(1)] = (1));

return statearr_20439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1 = (function (state_20424){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20440){if((e20440 instanceof Object)){
var ex__19855__auto__ = e20440;
var statearr_20441_20546 = state_20424;
(statearr_20441_20546[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20547 = state_20424;
state_20424 = G__20547;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = function(state_20424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1.call(this,state_20424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___20539,jobs,results,process,async))
})();
var state__19965__auto__ = (function (){var statearr_20442 = f__19964__auto__.call(null);
(statearr_20442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20539);

return statearr_20442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___20539,jobs,results,process,async))
);


var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__,jobs,results,process,async){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__,jobs,results,process,async){
return (function (state_20480){
var state_val_20481 = (state_20480[(1)]);
if((state_val_20481 === (7))){
var inst_20476 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20482_20548 = state_20480__$1;
(statearr_20482_20548[(2)] = inst_20476);

(statearr_20482_20548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (20))){
var state_20480__$1 = state_20480;
var statearr_20483_20549 = state_20480__$1;
(statearr_20483_20549[(2)] = null);

(statearr_20483_20549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (1))){
var state_20480__$1 = state_20480;
var statearr_20484_20550 = state_20480__$1;
(statearr_20484_20550[(2)] = null);

(statearr_20484_20550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (4))){
var inst_20445 = (state_20480[(7)]);
var inst_20445__$1 = (state_20480[(2)]);
var inst_20446 = (inst_20445__$1 == null);
var state_20480__$1 = (function (){var statearr_20485 = state_20480;
(statearr_20485[(7)] = inst_20445__$1);

return statearr_20485;
})();
if(cljs.core.truth_(inst_20446)){
var statearr_20486_20551 = state_20480__$1;
(statearr_20486_20551[(1)] = (5));

} else {
var statearr_20487_20552 = state_20480__$1;
(statearr_20487_20552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (15))){
var inst_20458 = (state_20480[(8)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20480__$1,(18),to,inst_20458);
} else {
if((state_val_20481 === (21))){
var inst_20471 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20488_20553 = state_20480__$1;
(statearr_20488_20553[(2)] = inst_20471);

(statearr_20488_20553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (13))){
var inst_20473 = (state_20480[(2)]);
var state_20480__$1 = (function (){var statearr_20489 = state_20480;
(statearr_20489[(9)] = inst_20473);

return statearr_20489;
})();
var statearr_20490_20554 = state_20480__$1;
(statearr_20490_20554[(2)] = null);

(statearr_20490_20554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (6))){
var inst_20445 = (state_20480[(7)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20480__$1,(11),inst_20445);
} else {
if((state_val_20481 === (17))){
var inst_20466 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
if(cljs.core.truth_(inst_20466)){
var statearr_20491_20555 = state_20480__$1;
(statearr_20491_20555[(1)] = (19));

} else {
var statearr_20492_20556 = state_20480__$1;
(statearr_20492_20556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (3))){
var inst_20478 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20480__$1,inst_20478);
} else {
if((state_val_20481 === (12))){
var inst_20455 = (state_20480[(10)]);
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20480__$1,(14),inst_20455);
} else {
if((state_val_20481 === (2))){
var state_20480__$1 = state_20480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20480__$1,(4),results);
} else {
if((state_val_20481 === (19))){
var state_20480__$1 = state_20480;
var statearr_20493_20557 = state_20480__$1;
(statearr_20493_20557[(2)] = null);

(statearr_20493_20557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (11))){
var inst_20455 = (state_20480[(2)]);
var state_20480__$1 = (function (){var statearr_20494 = state_20480;
(statearr_20494[(10)] = inst_20455);

return statearr_20494;
})();
var statearr_20495_20558 = state_20480__$1;
(statearr_20495_20558[(2)] = null);

(statearr_20495_20558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (9))){
var state_20480__$1 = state_20480;
var statearr_20496_20559 = state_20480__$1;
(statearr_20496_20559[(2)] = null);

(statearr_20496_20559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (5))){
var state_20480__$1 = state_20480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20497_20560 = state_20480__$1;
(statearr_20497_20560[(1)] = (8));

} else {
var statearr_20498_20561 = state_20480__$1;
(statearr_20498_20561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (14))){
var inst_20460 = (state_20480[(11)]);
var inst_20458 = (state_20480[(8)]);
var inst_20458__$1 = (state_20480[(2)]);
var inst_20459 = (inst_20458__$1 == null);
var inst_20460__$1 = cljs.core.not.call(null,inst_20459);
var state_20480__$1 = (function (){var statearr_20499 = state_20480;
(statearr_20499[(11)] = inst_20460__$1);

(statearr_20499[(8)] = inst_20458__$1);

return statearr_20499;
})();
if(inst_20460__$1){
var statearr_20500_20562 = state_20480__$1;
(statearr_20500_20562[(1)] = (15));

} else {
var statearr_20501_20563 = state_20480__$1;
(statearr_20501_20563[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (16))){
var inst_20460 = (state_20480[(11)]);
var state_20480__$1 = state_20480;
var statearr_20502_20564 = state_20480__$1;
(statearr_20502_20564[(2)] = inst_20460);

(statearr_20502_20564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (10))){
var inst_20452 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20503_20565 = state_20480__$1;
(statearr_20503_20565[(2)] = inst_20452);

(statearr_20503_20565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (18))){
var inst_20463 = (state_20480[(2)]);
var state_20480__$1 = state_20480;
var statearr_20504_20566 = state_20480__$1;
(statearr_20504_20566[(2)] = inst_20463);

(statearr_20504_20566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20481 === (8))){
var inst_20449 = cljs.core.async.close_BANG_.call(null,to);
var state_20480__$1 = state_20480;
var statearr_20505_20567 = state_20480__$1;
(statearr_20505_20567[(2)] = inst_20449);

(statearr_20505_20567[(1)] = (10));


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
});})(c__19963__auto__,jobs,results,process,async))
;
return ((function (switch__19851__auto__,c__19963__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_20509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__);

(statearr_20509[(1)] = (1));

return statearr_20509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1 = (function (state_20480){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20510){if((e20510 instanceof Object)){
var ex__19855__auto__ = e20510;
var statearr_20511_20568 = state_20480;
(statearr_20511_20568[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20569 = state_20480;
state_20480 = G__20569;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__ = function(state_20480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1.call(this,state_20480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__,jobs,results,process,async))
})();
var state__19965__auto__ = (function (){var statearr_20512 = f__19964__auto__.call(null);
(statearr_20512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_20512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__,jobs,results,process,async))
);

return c__19963__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20570 = [];
var len__15861__auto___20573 = arguments.length;
var i__15862__auto___20574 = (0);
while(true){
if((i__15862__auto___20574 < len__15861__auto___20573)){
args20570.push((arguments[i__15862__auto___20574]));

var G__20575 = (i__15862__auto___20574 + (1));
i__15862__auto___20574 = G__20575;
continue;
} else {
}
break;
}

var G__20572 = args20570.length;
switch (G__20572) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20570.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20577 = [];
var len__15861__auto___20580 = arguments.length;
var i__15862__auto___20581 = (0);
while(true){
if((i__15862__auto___20581 < len__15861__auto___20580)){
args20577.push((arguments[i__15862__auto___20581]));

var G__20582 = (i__15862__auto___20581 + (1));
i__15862__auto___20581 = G__20582;
continue;
} else {
}
break;
}

var G__20579 = args20577.length;
switch (G__20579) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20577.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20584 = [];
var len__15861__auto___20637 = arguments.length;
var i__15862__auto___20638 = (0);
while(true){
if((i__15862__auto___20638 < len__15861__auto___20637)){
args20584.push((arguments[i__15862__auto___20638]));

var G__20639 = (i__15862__auto___20638 + (1));
i__15862__auto___20638 = G__20639;
continue;
} else {
}
break;
}

var G__20586 = args20584.length;
switch (G__20586) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20584.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19963__auto___20641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___20641,tc,fc){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___20641,tc,fc){
return (function (state_20612){
var state_val_20613 = (state_20612[(1)]);
if((state_val_20613 === (7))){
var inst_20608 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20614_20642 = state_20612__$1;
(statearr_20614_20642[(2)] = inst_20608);

(statearr_20614_20642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (1))){
var state_20612__$1 = state_20612;
var statearr_20615_20643 = state_20612__$1;
(statearr_20615_20643[(2)] = null);

(statearr_20615_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (4))){
var inst_20589 = (state_20612[(7)]);
var inst_20589__$1 = (state_20612[(2)]);
var inst_20590 = (inst_20589__$1 == null);
var state_20612__$1 = (function (){var statearr_20616 = state_20612;
(statearr_20616[(7)] = inst_20589__$1);

return statearr_20616;
})();
if(cljs.core.truth_(inst_20590)){
var statearr_20617_20644 = state_20612__$1;
(statearr_20617_20644[(1)] = (5));

} else {
var statearr_20618_20645 = state_20612__$1;
(statearr_20618_20645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (13))){
var state_20612__$1 = state_20612;
var statearr_20619_20646 = state_20612__$1;
(statearr_20619_20646[(2)] = null);

(statearr_20619_20646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (6))){
var inst_20589 = (state_20612[(7)]);
var inst_20595 = p.call(null,inst_20589);
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20595)){
var statearr_20620_20647 = state_20612__$1;
(statearr_20620_20647[(1)] = (9));

} else {
var statearr_20621_20648 = state_20612__$1;
(statearr_20621_20648[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (3))){
var inst_20610 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20612__$1,inst_20610);
} else {
if((state_val_20613 === (12))){
var state_20612__$1 = state_20612;
var statearr_20622_20649 = state_20612__$1;
(statearr_20622_20649[(2)] = null);

(statearr_20622_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (2))){
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20612__$1,(4),ch);
} else {
if((state_val_20613 === (11))){
var inst_20589 = (state_20612[(7)]);
var inst_20599 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20612__$1,(8),inst_20599,inst_20589);
} else {
if((state_val_20613 === (9))){
var state_20612__$1 = state_20612;
var statearr_20623_20650 = state_20612__$1;
(statearr_20623_20650[(2)] = tc);

(statearr_20623_20650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (5))){
var inst_20592 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20593 = cljs.core.async.close_BANG_.call(null,fc);
var state_20612__$1 = (function (){var statearr_20624 = state_20612;
(statearr_20624[(8)] = inst_20592);

return statearr_20624;
})();
var statearr_20625_20651 = state_20612__$1;
(statearr_20625_20651[(2)] = inst_20593);

(statearr_20625_20651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (14))){
var inst_20606 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20626_20652 = state_20612__$1;
(statearr_20626_20652[(2)] = inst_20606);

(statearr_20626_20652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (10))){
var state_20612__$1 = state_20612;
var statearr_20627_20653 = state_20612__$1;
(statearr_20627_20653[(2)] = fc);

(statearr_20627_20653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (8))){
var inst_20601 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20601)){
var statearr_20628_20654 = state_20612__$1;
(statearr_20628_20654[(1)] = (12));

} else {
var statearr_20629_20655 = state_20612__$1;
(statearr_20629_20655[(1)] = (13));

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
});})(c__19963__auto___20641,tc,fc))
;
return ((function (switch__19851__auto__,c__19963__auto___20641,tc,fc){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_20633 = [null,null,null,null,null,null,null,null,null];
(statearr_20633[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_20633[(1)] = (1));

return statearr_20633;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_20612){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20634){if((e20634 instanceof Object)){
var ex__19855__auto__ = e20634;
var statearr_20635_20656 = state_20612;
(statearr_20635_20656[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20657 = state_20612;
state_20612 = G__20657;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_20612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_20612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___20641,tc,fc))
})();
var state__19965__auto__ = (function (){var statearr_20636 = f__19964__auto__.call(null);
(statearr_20636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___20641);

return statearr_20636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___20641,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_20721){
var state_val_20722 = (state_20721[(1)]);
if((state_val_20722 === (7))){
var inst_20717 = (state_20721[(2)]);
var state_20721__$1 = state_20721;
var statearr_20723_20744 = state_20721__$1;
(statearr_20723_20744[(2)] = inst_20717);

(statearr_20723_20744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (1))){
var inst_20701 = init;
var state_20721__$1 = (function (){var statearr_20724 = state_20721;
(statearr_20724[(7)] = inst_20701);

return statearr_20724;
})();
var statearr_20725_20745 = state_20721__$1;
(statearr_20725_20745[(2)] = null);

(statearr_20725_20745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (4))){
var inst_20704 = (state_20721[(8)]);
var inst_20704__$1 = (state_20721[(2)]);
var inst_20705 = (inst_20704__$1 == null);
var state_20721__$1 = (function (){var statearr_20726 = state_20721;
(statearr_20726[(8)] = inst_20704__$1);

return statearr_20726;
})();
if(cljs.core.truth_(inst_20705)){
var statearr_20727_20746 = state_20721__$1;
(statearr_20727_20746[(1)] = (5));

} else {
var statearr_20728_20747 = state_20721__$1;
(statearr_20728_20747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (6))){
var inst_20708 = (state_20721[(9)]);
var inst_20704 = (state_20721[(8)]);
var inst_20701 = (state_20721[(7)]);
var inst_20708__$1 = f.call(null,inst_20701,inst_20704);
var inst_20709 = cljs.core.reduced_QMARK_.call(null,inst_20708__$1);
var state_20721__$1 = (function (){var statearr_20729 = state_20721;
(statearr_20729[(9)] = inst_20708__$1);

return statearr_20729;
})();
if(inst_20709){
var statearr_20730_20748 = state_20721__$1;
(statearr_20730_20748[(1)] = (8));

} else {
var statearr_20731_20749 = state_20721__$1;
(statearr_20731_20749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (3))){
var inst_20719 = (state_20721[(2)]);
var state_20721__$1 = state_20721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20721__$1,inst_20719);
} else {
if((state_val_20722 === (2))){
var state_20721__$1 = state_20721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20721__$1,(4),ch);
} else {
if((state_val_20722 === (9))){
var inst_20708 = (state_20721[(9)]);
var inst_20701 = inst_20708;
var state_20721__$1 = (function (){var statearr_20732 = state_20721;
(statearr_20732[(7)] = inst_20701);

return statearr_20732;
})();
var statearr_20733_20750 = state_20721__$1;
(statearr_20733_20750[(2)] = null);

(statearr_20733_20750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (5))){
var inst_20701 = (state_20721[(7)]);
var state_20721__$1 = state_20721;
var statearr_20734_20751 = state_20721__$1;
(statearr_20734_20751[(2)] = inst_20701);

(statearr_20734_20751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (10))){
var inst_20715 = (state_20721[(2)]);
var state_20721__$1 = state_20721;
var statearr_20735_20752 = state_20721__$1;
(statearr_20735_20752[(2)] = inst_20715);

(statearr_20735_20752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20722 === (8))){
var inst_20708 = (state_20721[(9)]);
var inst_20711 = cljs.core.deref.call(null,inst_20708);
var state_20721__$1 = state_20721;
var statearr_20736_20753 = state_20721__$1;
(statearr_20736_20753[(2)] = inst_20711);

(statearr_20736_20753[(1)] = (10));


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
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19852__auto____0 = (function (){
var statearr_20740 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20740[(0)] = cljs$core$async$reduce_$_state_machine__19852__auto__);

(statearr_20740[(1)] = (1));

return statearr_20740;
});
var cljs$core$async$reduce_$_state_machine__19852__auto____1 = (function (state_20721){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20741){if((e20741 instanceof Object)){
var ex__19855__auto__ = e20741;
var statearr_20742_20754 = state_20721;
(statearr_20742_20754[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20755 = state_20721;
state_20721 = G__20755;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19852__auto__ = function(state_20721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19852__auto____1.call(this,state_20721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19852__auto____0;
cljs$core$async$reduce_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19852__auto____1;
return cljs$core$async$reduce_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_20743 = f__19964__auto__.call(null);
(statearr_20743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_20743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20756 = [];
var len__15861__auto___20808 = arguments.length;
var i__15862__auto___20809 = (0);
while(true){
if((i__15862__auto___20809 < len__15861__auto___20808)){
args20756.push((arguments[i__15862__auto___20809]));

var G__20810 = (i__15862__auto___20809 + (1));
i__15862__auto___20809 = G__20810;
continue;
} else {
}
break;
}

var G__20758 = args20756.length;
switch (G__20758) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20756.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_20783){
var state_val_20784 = (state_20783[(1)]);
if((state_val_20784 === (7))){
var inst_20765 = (state_20783[(2)]);
var state_20783__$1 = state_20783;
var statearr_20785_20812 = state_20783__$1;
(statearr_20785_20812[(2)] = inst_20765);

(statearr_20785_20812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (1))){
var inst_20759 = cljs.core.seq.call(null,coll);
var inst_20760 = inst_20759;
var state_20783__$1 = (function (){var statearr_20786 = state_20783;
(statearr_20786[(7)] = inst_20760);

return statearr_20786;
})();
var statearr_20787_20813 = state_20783__$1;
(statearr_20787_20813[(2)] = null);

(statearr_20787_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (4))){
var inst_20760 = (state_20783[(7)]);
var inst_20763 = cljs.core.first.call(null,inst_20760);
var state_20783__$1 = state_20783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20783__$1,(7),ch,inst_20763);
} else {
if((state_val_20784 === (13))){
var inst_20777 = (state_20783[(2)]);
var state_20783__$1 = state_20783;
var statearr_20788_20814 = state_20783__$1;
(statearr_20788_20814[(2)] = inst_20777);

(statearr_20788_20814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (6))){
var inst_20768 = (state_20783[(2)]);
var state_20783__$1 = state_20783;
if(cljs.core.truth_(inst_20768)){
var statearr_20789_20815 = state_20783__$1;
(statearr_20789_20815[(1)] = (8));

} else {
var statearr_20790_20816 = state_20783__$1;
(statearr_20790_20816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (3))){
var inst_20781 = (state_20783[(2)]);
var state_20783__$1 = state_20783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20783__$1,inst_20781);
} else {
if((state_val_20784 === (12))){
var state_20783__$1 = state_20783;
var statearr_20791_20817 = state_20783__$1;
(statearr_20791_20817[(2)] = null);

(statearr_20791_20817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (2))){
var inst_20760 = (state_20783[(7)]);
var state_20783__$1 = state_20783;
if(cljs.core.truth_(inst_20760)){
var statearr_20792_20818 = state_20783__$1;
(statearr_20792_20818[(1)] = (4));

} else {
var statearr_20793_20819 = state_20783__$1;
(statearr_20793_20819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (11))){
var inst_20774 = cljs.core.async.close_BANG_.call(null,ch);
var state_20783__$1 = state_20783;
var statearr_20794_20820 = state_20783__$1;
(statearr_20794_20820[(2)] = inst_20774);

(statearr_20794_20820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (9))){
var state_20783__$1 = state_20783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20795_20821 = state_20783__$1;
(statearr_20795_20821[(1)] = (11));

} else {
var statearr_20796_20822 = state_20783__$1;
(statearr_20796_20822[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (5))){
var inst_20760 = (state_20783[(7)]);
var state_20783__$1 = state_20783;
var statearr_20797_20823 = state_20783__$1;
(statearr_20797_20823[(2)] = inst_20760);

(statearr_20797_20823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (10))){
var inst_20779 = (state_20783[(2)]);
var state_20783__$1 = state_20783;
var statearr_20798_20824 = state_20783__$1;
(statearr_20798_20824[(2)] = inst_20779);

(statearr_20798_20824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20784 === (8))){
var inst_20760 = (state_20783[(7)]);
var inst_20770 = cljs.core.next.call(null,inst_20760);
var inst_20760__$1 = inst_20770;
var state_20783__$1 = (function (){var statearr_20799 = state_20783;
(statearr_20799[(7)] = inst_20760__$1);

return statearr_20799;
})();
var statearr_20800_20825 = state_20783__$1;
(statearr_20800_20825[(2)] = null);

(statearr_20800_20825[(1)] = (2));


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
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_20804 = [null,null,null,null,null,null,null,null];
(statearr_20804[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_20804[(1)] = (1));

return statearr_20804;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_20783){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_20783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e20805){if((e20805 instanceof Object)){
var ex__19855__auto__ = e20805;
var statearr_20806_20826 = state_20783;
(statearr_20806_20826[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20783;
state_20783 = G__20827;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_20783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_20783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_20807 = f__19964__auto__.call(null);
(statearr_20807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_20807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15458__auto__ = (((_ == null))?null:_);
var m__15459__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,_);
} else {
var m__15459__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__15459__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,ch);
} else {
var m__15459__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m);
} else {
var m__15459__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21049 = (function (mult,ch,cs,meta21050){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21050 = meta21050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21051,meta21050__$1){
var self__ = this;
var _21051__$1 = this;
return (new cljs.core.async.t_cljs$core$async21049(self__.mult,self__.ch,self__.cs,meta21050__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21051){
var self__ = this;
var _21051__$1 = this;
return self__.meta21050;
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21050","meta21050",1552566944,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21049";

cljs.core.async.t_cljs$core$async21049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async21049");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21049 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21049(mult__$1,ch__$1,cs__$1,meta21050){
return (new cljs.core.async.t_cljs$core$async21049(mult__$1,ch__$1,cs__$1,meta21050));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21049(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19963__auto___21270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___21270,cs,m,dchan,dctr,done){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___21270,cs,m,dchan,dctr,done){
return (function (state_21182){
var state_val_21183 = (state_21182[(1)]);
if((state_val_21183 === (7))){
var inst_21178 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21184_21271 = state_21182__$1;
(statearr_21184_21271[(2)] = inst_21178);

(statearr_21184_21271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (20))){
var inst_21083 = (state_21182[(7)]);
var inst_21093 = cljs.core.first.call(null,inst_21083);
var inst_21094 = cljs.core.nth.call(null,inst_21093,(0),null);
var inst_21095 = cljs.core.nth.call(null,inst_21093,(1),null);
var state_21182__$1 = (function (){var statearr_21185 = state_21182;
(statearr_21185[(8)] = inst_21094);

return statearr_21185;
})();
if(cljs.core.truth_(inst_21095)){
var statearr_21186_21272 = state_21182__$1;
(statearr_21186_21272[(1)] = (22));

} else {
var statearr_21187_21273 = state_21182__$1;
(statearr_21187_21273[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (27))){
var inst_21054 = (state_21182[(9)]);
var inst_21125 = (state_21182[(10)]);
var inst_21123 = (state_21182[(11)]);
var inst_21130 = (state_21182[(12)]);
var inst_21130__$1 = cljs.core._nth.call(null,inst_21123,inst_21125);
var inst_21131 = cljs.core.async.put_BANG_.call(null,inst_21130__$1,inst_21054,done);
var state_21182__$1 = (function (){var statearr_21188 = state_21182;
(statearr_21188[(12)] = inst_21130__$1);

return statearr_21188;
})();
if(cljs.core.truth_(inst_21131)){
var statearr_21189_21274 = state_21182__$1;
(statearr_21189_21274[(1)] = (30));

} else {
var statearr_21190_21275 = state_21182__$1;
(statearr_21190_21275[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (1))){
var state_21182__$1 = state_21182;
var statearr_21191_21276 = state_21182__$1;
(statearr_21191_21276[(2)] = null);

(statearr_21191_21276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (24))){
var inst_21083 = (state_21182[(7)]);
var inst_21100 = (state_21182[(2)]);
var inst_21101 = cljs.core.next.call(null,inst_21083);
var inst_21063 = inst_21101;
var inst_21064 = null;
var inst_21065 = (0);
var inst_21066 = (0);
var state_21182__$1 = (function (){var statearr_21192 = state_21182;
(statearr_21192[(13)] = inst_21064);

(statearr_21192[(14)] = inst_21063);

(statearr_21192[(15)] = inst_21066);

(statearr_21192[(16)] = inst_21065);

(statearr_21192[(17)] = inst_21100);

return statearr_21192;
})();
var statearr_21193_21277 = state_21182__$1;
(statearr_21193_21277[(2)] = null);

(statearr_21193_21277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (39))){
var state_21182__$1 = state_21182;
var statearr_21197_21278 = state_21182__$1;
(statearr_21197_21278[(2)] = null);

(statearr_21197_21278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (4))){
var inst_21054 = (state_21182[(9)]);
var inst_21054__$1 = (state_21182[(2)]);
var inst_21055 = (inst_21054__$1 == null);
var state_21182__$1 = (function (){var statearr_21198 = state_21182;
(statearr_21198[(9)] = inst_21054__$1);

return statearr_21198;
})();
if(cljs.core.truth_(inst_21055)){
var statearr_21199_21279 = state_21182__$1;
(statearr_21199_21279[(1)] = (5));

} else {
var statearr_21200_21280 = state_21182__$1;
(statearr_21200_21280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (15))){
var inst_21064 = (state_21182[(13)]);
var inst_21063 = (state_21182[(14)]);
var inst_21066 = (state_21182[(15)]);
var inst_21065 = (state_21182[(16)]);
var inst_21079 = (state_21182[(2)]);
var inst_21080 = (inst_21066 + (1));
var tmp21194 = inst_21064;
var tmp21195 = inst_21063;
var tmp21196 = inst_21065;
var inst_21063__$1 = tmp21195;
var inst_21064__$1 = tmp21194;
var inst_21065__$1 = tmp21196;
var inst_21066__$1 = inst_21080;
var state_21182__$1 = (function (){var statearr_21201 = state_21182;
(statearr_21201[(18)] = inst_21079);

(statearr_21201[(13)] = inst_21064__$1);

(statearr_21201[(14)] = inst_21063__$1);

(statearr_21201[(15)] = inst_21066__$1);

(statearr_21201[(16)] = inst_21065__$1);

return statearr_21201;
})();
var statearr_21202_21281 = state_21182__$1;
(statearr_21202_21281[(2)] = null);

(statearr_21202_21281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (21))){
var inst_21104 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21206_21282 = state_21182__$1;
(statearr_21206_21282[(2)] = inst_21104);

(statearr_21206_21282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (31))){
var inst_21130 = (state_21182[(12)]);
var inst_21134 = done.call(null,null);
var inst_21135 = cljs.core.async.untap_STAR_.call(null,m,inst_21130);
var state_21182__$1 = (function (){var statearr_21207 = state_21182;
(statearr_21207[(19)] = inst_21134);

return statearr_21207;
})();
var statearr_21208_21283 = state_21182__$1;
(statearr_21208_21283[(2)] = inst_21135);

(statearr_21208_21283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (32))){
var inst_21125 = (state_21182[(10)]);
var inst_21123 = (state_21182[(11)]);
var inst_21122 = (state_21182[(20)]);
var inst_21124 = (state_21182[(21)]);
var inst_21137 = (state_21182[(2)]);
var inst_21138 = (inst_21125 + (1));
var tmp21203 = inst_21123;
var tmp21204 = inst_21122;
var tmp21205 = inst_21124;
var inst_21122__$1 = tmp21204;
var inst_21123__$1 = tmp21203;
var inst_21124__$1 = tmp21205;
var inst_21125__$1 = inst_21138;
var state_21182__$1 = (function (){var statearr_21209 = state_21182;
(statearr_21209[(22)] = inst_21137);

(statearr_21209[(10)] = inst_21125__$1);

(statearr_21209[(11)] = inst_21123__$1);

(statearr_21209[(20)] = inst_21122__$1);

(statearr_21209[(21)] = inst_21124__$1);

return statearr_21209;
})();
var statearr_21210_21284 = state_21182__$1;
(statearr_21210_21284[(2)] = null);

(statearr_21210_21284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (40))){
var inst_21150 = (state_21182[(23)]);
var inst_21154 = done.call(null,null);
var inst_21155 = cljs.core.async.untap_STAR_.call(null,m,inst_21150);
var state_21182__$1 = (function (){var statearr_21211 = state_21182;
(statearr_21211[(24)] = inst_21154);

return statearr_21211;
})();
var statearr_21212_21285 = state_21182__$1;
(statearr_21212_21285[(2)] = inst_21155);

(statearr_21212_21285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (33))){
var inst_21141 = (state_21182[(25)]);
var inst_21143 = cljs.core.chunked_seq_QMARK_.call(null,inst_21141);
var state_21182__$1 = state_21182;
if(inst_21143){
var statearr_21213_21286 = state_21182__$1;
(statearr_21213_21286[(1)] = (36));

} else {
var statearr_21214_21287 = state_21182__$1;
(statearr_21214_21287[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (13))){
var inst_21073 = (state_21182[(26)]);
var inst_21076 = cljs.core.async.close_BANG_.call(null,inst_21073);
var state_21182__$1 = state_21182;
var statearr_21215_21288 = state_21182__$1;
(statearr_21215_21288[(2)] = inst_21076);

(statearr_21215_21288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (22))){
var inst_21094 = (state_21182[(8)]);
var inst_21097 = cljs.core.async.close_BANG_.call(null,inst_21094);
var state_21182__$1 = state_21182;
var statearr_21216_21289 = state_21182__$1;
(statearr_21216_21289[(2)] = inst_21097);

(statearr_21216_21289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (36))){
var inst_21141 = (state_21182[(25)]);
var inst_21145 = cljs.core.chunk_first.call(null,inst_21141);
var inst_21146 = cljs.core.chunk_rest.call(null,inst_21141);
var inst_21147 = cljs.core.count.call(null,inst_21145);
var inst_21122 = inst_21146;
var inst_21123 = inst_21145;
var inst_21124 = inst_21147;
var inst_21125 = (0);
var state_21182__$1 = (function (){var statearr_21217 = state_21182;
(statearr_21217[(10)] = inst_21125);

(statearr_21217[(11)] = inst_21123);

(statearr_21217[(20)] = inst_21122);

(statearr_21217[(21)] = inst_21124);

return statearr_21217;
})();
var statearr_21218_21290 = state_21182__$1;
(statearr_21218_21290[(2)] = null);

(statearr_21218_21290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (41))){
var inst_21141 = (state_21182[(25)]);
var inst_21157 = (state_21182[(2)]);
var inst_21158 = cljs.core.next.call(null,inst_21141);
var inst_21122 = inst_21158;
var inst_21123 = null;
var inst_21124 = (0);
var inst_21125 = (0);
var state_21182__$1 = (function (){var statearr_21219 = state_21182;
(statearr_21219[(10)] = inst_21125);

(statearr_21219[(27)] = inst_21157);

(statearr_21219[(11)] = inst_21123);

(statearr_21219[(20)] = inst_21122);

(statearr_21219[(21)] = inst_21124);

return statearr_21219;
})();
var statearr_21220_21291 = state_21182__$1;
(statearr_21220_21291[(2)] = null);

(statearr_21220_21291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (43))){
var state_21182__$1 = state_21182;
var statearr_21221_21292 = state_21182__$1;
(statearr_21221_21292[(2)] = null);

(statearr_21221_21292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (29))){
var inst_21166 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21222_21293 = state_21182__$1;
(statearr_21222_21293[(2)] = inst_21166);

(statearr_21222_21293[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (44))){
var inst_21175 = (state_21182[(2)]);
var state_21182__$1 = (function (){var statearr_21223 = state_21182;
(statearr_21223[(28)] = inst_21175);

return statearr_21223;
})();
var statearr_21224_21294 = state_21182__$1;
(statearr_21224_21294[(2)] = null);

(statearr_21224_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (6))){
var inst_21114 = (state_21182[(29)]);
var inst_21113 = cljs.core.deref.call(null,cs);
var inst_21114__$1 = cljs.core.keys.call(null,inst_21113);
var inst_21115 = cljs.core.count.call(null,inst_21114__$1);
var inst_21116 = cljs.core.reset_BANG_.call(null,dctr,inst_21115);
var inst_21121 = cljs.core.seq.call(null,inst_21114__$1);
var inst_21122 = inst_21121;
var inst_21123 = null;
var inst_21124 = (0);
var inst_21125 = (0);
var state_21182__$1 = (function (){var statearr_21225 = state_21182;
(statearr_21225[(10)] = inst_21125);

(statearr_21225[(11)] = inst_21123);

(statearr_21225[(20)] = inst_21122);

(statearr_21225[(21)] = inst_21124);

(statearr_21225[(30)] = inst_21116);

(statearr_21225[(29)] = inst_21114__$1);

return statearr_21225;
})();
var statearr_21226_21295 = state_21182__$1;
(statearr_21226_21295[(2)] = null);

(statearr_21226_21295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (28))){
var inst_21141 = (state_21182[(25)]);
var inst_21122 = (state_21182[(20)]);
var inst_21141__$1 = cljs.core.seq.call(null,inst_21122);
var state_21182__$1 = (function (){var statearr_21227 = state_21182;
(statearr_21227[(25)] = inst_21141__$1);

return statearr_21227;
})();
if(inst_21141__$1){
var statearr_21228_21296 = state_21182__$1;
(statearr_21228_21296[(1)] = (33));

} else {
var statearr_21229_21297 = state_21182__$1;
(statearr_21229_21297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (25))){
var inst_21125 = (state_21182[(10)]);
var inst_21124 = (state_21182[(21)]);
var inst_21127 = (inst_21125 < inst_21124);
var inst_21128 = inst_21127;
var state_21182__$1 = state_21182;
if(cljs.core.truth_(inst_21128)){
var statearr_21230_21298 = state_21182__$1;
(statearr_21230_21298[(1)] = (27));

} else {
var statearr_21231_21299 = state_21182__$1;
(statearr_21231_21299[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (34))){
var state_21182__$1 = state_21182;
var statearr_21232_21300 = state_21182__$1;
(statearr_21232_21300[(2)] = null);

(statearr_21232_21300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (17))){
var state_21182__$1 = state_21182;
var statearr_21233_21301 = state_21182__$1;
(statearr_21233_21301[(2)] = null);

(statearr_21233_21301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (3))){
var inst_21180 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21182__$1,inst_21180);
} else {
if((state_val_21183 === (12))){
var inst_21109 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21234_21302 = state_21182__$1;
(statearr_21234_21302[(2)] = inst_21109);

(statearr_21234_21302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (2))){
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21182__$1,(4),ch);
} else {
if((state_val_21183 === (23))){
var state_21182__$1 = state_21182;
var statearr_21235_21303 = state_21182__$1;
(statearr_21235_21303[(2)] = null);

(statearr_21235_21303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (35))){
var inst_21164 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21236_21304 = state_21182__$1;
(statearr_21236_21304[(2)] = inst_21164);

(statearr_21236_21304[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (19))){
var inst_21083 = (state_21182[(7)]);
var inst_21087 = cljs.core.chunk_first.call(null,inst_21083);
var inst_21088 = cljs.core.chunk_rest.call(null,inst_21083);
var inst_21089 = cljs.core.count.call(null,inst_21087);
var inst_21063 = inst_21088;
var inst_21064 = inst_21087;
var inst_21065 = inst_21089;
var inst_21066 = (0);
var state_21182__$1 = (function (){var statearr_21237 = state_21182;
(statearr_21237[(13)] = inst_21064);

(statearr_21237[(14)] = inst_21063);

(statearr_21237[(15)] = inst_21066);

(statearr_21237[(16)] = inst_21065);

return statearr_21237;
})();
var statearr_21238_21305 = state_21182__$1;
(statearr_21238_21305[(2)] = null);

(statearr_21238_21305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (11))){
var inst_21063 = (state_21182[(14)]);
var inst_21083 = (state_21182[(7)]);
var inst_21083__$1 = cljs.core.seq.call(null,inst_21063);
var state_21182__$1 = (function (){var statearr_21239 = state_21182;
(statearr_21239[(7)] = inst_21083__$1);

return statearr_21239;
})();
if(inst_21083__$1){
var statearr_21240_21306 = state_21182__$1;
(statearr_21240_21306[(1)] = (16));

} else {
var statearr_21241_21307 = state_21182__$1;
(statearr_21241_21307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (9))){
var inst_21111 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21242_21308 = state_21182__$1;
(statearr_21242_21308[(2)] = inst_21111);

(statearr_21242_21308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (5))){
var inst_21061 = cljs.core.deref.call(null,cs);
var inst_21062 = cljs.core.seq.call(null,inst_21061);
var inst_21063 = inst_21062;
var inst_21064 = null;
var inst_21065 = (0);
var inst_21066 = (0);
var state_21182__$1 = (function (){var statearr_21243 = state_21182;
(statearr_21243[(13)] = inst_21064);

(statearr_21243[(14)] = inst_21063);

(statearr_21243[(15)] = inst_21066);

(statearr_21243[(16)] = inst_21065);

return statearr_21243;
})();
var statearr_21244_21309 = state_21182__$1;
(statearr_21244_21309[(2)] = null);

(statearr_21244_21309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (14))){
var state_21182__$1 = state_21182;
var statearr_21245_21310 = state_21182__$1;
(statearr_21245_21310[(2)] = null);

(statearr_21245_21310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (45))){
var inst_21172 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21246_21311 = state_21182__$1;
(statearr_21246_21311[(2)] = inst_21172);

(statearr_21246_21311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (26))){
var inst_21114 = (state_21182[(29)]);
var inst_21168 = (state_21182[(2)]);
var inst_21169 = cljs.core.seq.call(null,inst_21114);
var state_21182__$1 = (function (){var statearr_21247 = state_21182;
(statearr_21247[(31)] = inst_21168);

return statearr_21247;
})();
if(inst_21169){
var statearr_21248_21312 = state_21182__$1;
(statearr_21248_21312[(1)] = (42));

} else {
var statearr_21249_21313 = state_21182__$1;
(statearr_21249_21313[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (16))){
var inst_21083 = (state_21182[(7)]);
var inst_21085 = cljs.core.chunked_seq_QMARK_.call(null,inst_21083);
var state_21182__$1 = state_21182;
if(inst_21085){
var statearr_21250_21314 = state_21182__$1;
(statearr_21250_21314[(1)] = (19));

} else {
var statearr_21251_21315 = state_21182__$1;
(statearr_21251_21315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (38))){
var inst_21161 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21252_21316 = state_21182__$1;
(statearr_21252_21316[(2)] = inst_21161);

(statearr_21252_21316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (30))){
var state_21182__$1 = state_21182;
var statearr_21253_21317 = state_21182__$1;
(statearr_21253_21317[(2)] = null);

(statearr_21253_21317[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (10))){
var inst_21064 = (state_21182[(13)]);
var inst_21066 = (state_21182[(15)]);
var inst_21072 = cljs.core._nth.call(null,inst_21064,inst_21066);
var inst_21073 = cljs.core.nth.call(null,inst_21072,(0),null);
var inst_21074 = cljs.core.nth.call(null,inst_21072,(1),null);
var state_21182__$1 = (function (){var statearr_21254 = state_21182;
(statearr_21254[(26)] = inst_21073);

return statearr_21254;
})();
if(cljs.core.truth_(inst_21074)){
var statearr_21255_21318 = state_21182__$1;
(statearr_21255_21318[(1)] = (13));

} else {
var statearr_21256_21319 = state_21182__$1;
(statearr_21256_21319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (18))){
var inst_21107 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21257_21320 = state_21182__$1;
(statearr_21257_21320[(2)] = inst_21107);

(statearr_21257_21320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (42))){
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21182__$1,(45),dchan);
} else {
if((state_val_21183 === (37))){
var inst_21141 = (state_21182[(25)]);
var inst_21054 = (state_21182[(9)]);
var inst_21150 = (state_21182[(23)]);
var inst_21150__$1 = cljs.core.first.call(null,inst_21141);
var inst_21151 = cljs.core.async.put_BANG_.call(null,inst_21150__$1,inst_21054,done);
var state_21182__$1 = (function (){var statearr_21258 = state_21182;
(statearr_21258[(23)] = inst_21150__$1);

return statearr_21258;
})();
if(cljs.core.truth_(inst_21151)){
var statearr_21259_21321 = state_21182__$1;
(statearr_21259_21321[(1)] = (39));

} else {
var statearr_21260_21322 = state_21182__$1;
(statearr_21260_21322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (8))){
var inst_21066 = (state_21182[(15)]);
var inst_21065 = (state_21182[(16)]);
var inst_21068 = (inst_21066 < inst_21065);
var inst_21069 = inst_21068;
var state_21182__$1 = state_21182;
if(cljs.core.truth_(inst_21069)){
var statearr_21261_21323 = state_21182__$1;
(statearr_21261_21323[(1)] = (10));

} else {
var statearr_21262_21324 = state_21182__$1;
(statearr_21262_21324[(1)] = (11));

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
});})(c__19963__auto___21270,cs,m,dchan,dctr,done))
;
return ((function (switch__19851__auto__,c__19963__auto___21270,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19852__auto__ = null;
var cljs$core$async$mult_$_state_machine__19852__auto____0 = (function (){
var statearr_21266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21266[(0)] = cljs$core$async$mult_$_state_machine__19852__auto__);

(statearr_21266[(1)] = (1));

return statearr_21266;
});
var cljs$core$async$mult_$_state_machine__19852__auto____1 = (function (state_21182){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_21182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e21267){if((e21267 instanceof Object)){
var ex__19855__auto__ = e21267;
var statearr_21268_21325 = state_21182;
(statearr_21268_21325[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21326 = state_21182;
state_21182 = G__21326;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19852__auto__ = function(state_21182){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19852__auto____1.call(this,state_21182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19852__auto____0;
cljs$core$async$mult_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19852__auto____1;
return cljs$core$async$mult_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___21270,cs,m,dchan,dctr,done))
})();
var state__19965__auto__ = (function (){var statearr_21269 = f__19964__auto__.call(null);
(statearr_21269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___21270);

return statearr_21269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___21270,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21327 = [];
var len__15861__auto___21330 = arguments.length;
var i__15862__auto___21331 = (0);
while(true){
if((i__15862__auto___21331 < len__15861__auto___21330)){
args21327.push((arguments[i__15862__auto___21331]));

var G__21332 = (i__15862__auto___21331 + (1));
i__15862__auto___21331 = G__21332;
continue;
} else {
}
break;
}

var G__21329 = args21327.length;
switch (G__21329) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21327.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,ch);
} else {
var m__15459__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,ch);
} else {
var m__15459__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m);
} else {
var m__15459__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,state_map);
} else {
var m__15459__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15458__auto__ = (((m == null))?null:m);
var m__15459__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,m,mode);
} else {
var m__15459__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__15868__auto__ = [];
var len__15861__auto___21344 = arguments.length;
var i__15862__auto___21345 = (0);
while(true){
if((i__15862__auto___21345 < len__15861__auto___21344)){
args__15868__auto__.push((arguments[i__15862__auto___21345]));

var G__21346 = (i__15862__auto___21345 + (1));
i__15862__auto___21345 = G__21346;
continue;
} else {
}
break;
}

var argseq__15869__auto__ = ((((3) < args__15868__auto__.length))?(new cljs.core.IndexedSeq(args__15868__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15869__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21338){
var map__21339 = p__21338;
var map__21339__$1 = ((((!((map__21339 == null)))?((((map__21339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);
var opts = map__21339__$1;
var statearr_21341_21347 = state;
(statearr_21341_21347[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21339,map__21339__$1,opts){
return (function (val){
var statearr_21342_21348 = state;
(statearr_21342_21348[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21339,map__21339__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21343_21349 = state;
(statearr_21343_21349[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21334){
var G__21335 = cljs.core.first.call(null,seq21334);
var seq21334__$1 = cljs.core.next.call(null,seq21334);
var G__21336 = cljs.core.first.call(null,seq21334__$1);
var seq21334__$2 = cljs.core.next.call(null,seq21334__$1);
var G__21337 = cljs.core.first.call(null,seq21334__$2);
var seq21334__$3 = cljs.core.next.call(null,seq21334__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21335,G__21336,G__21337,seq21334__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21513 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21514){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21514 = meta21514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21515,meta21514__$1){
var self__ = this;
var _21515__$1 = this;
return (new cljs.core.async.t_cljs$core$async21513(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21514__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21515){
var self__ = this;
var _21515__$1 = this;
return self__.meta21514;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21514","meta21514",2027699421,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21513";

cljs.core.async.t_cljs$core$async21513.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async21513");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21513 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21513(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21514){
return (new cljs.core.async.t_cljs$core$async21513(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21514));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21513(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19963__auto___21676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21613){
var state_val_21614 = (state_21613[(1)]);
if((state_val_21614 === (7))){
var inst_21531 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
var statearr_21615_21677 = state_21613__$1;
(statearr_21615_21677[(2)] = inst_21531);

(statearr_21615_21677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (20))){
var inst_21543 = (state_21613[(7)]);
var state_21613__$1 = state_21613;
var statearr_21616_21678 = state_21613__$1;
(statearr_21616_21678[(2)] = inst_21543);

(statearr_21616_21678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (27))){
var state_21613__$1 = state_21613;
var statearr_21617_21679 = state_21613__$1;
(statearr_21617_21679[(2)] = null);

(statearr_21617_21679[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (1))){
var inst_21519 = (state_21613[(8)]);
var inst_21519__$1 = calc_state.call(null);
var inst_21521 = (inst_21519__$1 == null);
var inst_21522 = cljs.core.not.call(null,inst_21521);
var state_21613__$1 = (function (){var statearr_21618 = state_21613;
(statearr_21618[(8)] = inst_21519__$1);

return statearr_21618;
})();
if(inst_21522){
var statearr_21619_21680 = state_21613__$1;
(statearr_21619_21680[(1)] = (2));

} else {
var statearr_21620_21681 = state_21613__$1;
(statearr_21620_21681[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (24))){
var inst_21587 = (state_21613[(9)]);
var inst_21573 = (state_21613[(10)]);
var inst_21566 = (state_21613[(11)]);
var inst_21587__$1 = inst_21566.call(null,inst_21573);
var state_21613__$1 = (function (){var statearr_21621 = state_21613;
(statearr_21621[(9)] = inst_21587__$1);

return statearr_21621;
})();
if(cljs.core.truth_(inst_21587__$1)){
var statearr_21622_21682 = state_21613__$1;
(statearr_21622_21682[(1)] = (29));

} else {
var statearr_21623_21683 = state_21613__$1;
(statearr_21623_21683[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (4))){
var inst_21534 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21534)){
var statearr_21624_21684 = state_21613__$1;
(statearr_21624_21684[(1)] = (8));

} else {
var statearr_21625_21685 = state_21613__$1;
(statearr_21625_21685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (15))){
var inst_21560 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21560)){
var statearr_21626_21686 = state_21613__$1;
(statearr_21626_21686[(1)] = (19));

} else {
var statearr_21627_21687 = state_21613__$1;
(statearr_21627_21687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (21))){
var inst_21565 = (state_21613[(12)]);
var inst_21565__$1 = (state_21613[(2)]);
var inst_21566 = cljs.core.get.call(null,inst_21565__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21567 = cljs.core.get.call(null,inst_21565__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21568 = cljs.core.get.call(null,inst_21565__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21613__$1 = (function (){var statearr_21628 = state_21613;
(statearr_21628[(12)] = inst_21565__$1);

(statearr_21628[(13)] = inst_21567);

(statearr_21628[(11)] = inst_21566);

return statearr_21628;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21613__$1,(22),inst_21568);
} else {
if((state_val_21614 === (31))){
var inst_21595 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21595)){
var statearr_21629_21688 = state_21613__$1;
(statearr_21629_21688[(1)] = (32));

} else {
var statearr_21630_21689 = state_21613__$1;
(statearr_21630_21689[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (32))){
var inst_21572 = (state_21613[(14)]);
var state_21613__$1 = state_21613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21613__$1,(35),out,inst_21572);
} else {
if((state_val_21614 === (33))){
var inst_21565 = (state_21613[(12)]);
var inst_21543 = inst_21565;
var state_21613__$1 = (function (){var statearr_21631 = state_21613;
(statearr_21631[(7)] = inst_21543);

return statearr_21631;
})();
var statearr_21632_21690 = state_21613__$1;
(statearr_21632_21690[(2)] = null);

(statearr_21632_21690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (13))){
var inst_21543 = (state_21613[(7)]);
var inst_21550 = inst_21543.cljs$lang$protocol_mask$partition0$;
var inst_21551 = (inst_21550 & (64));
var inst_21552 = inst_21543.cljs$core$ISeq$;
var inst_21553 = (inst_21551) || (inst_21552);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21553)){
var statearr_21633_21691 = state_21613__$1;
(statearr_21633_21691[(1)] = (16));

} else {
var statearr_21634_21692 = state_21613__$1;
(statearr_21634_21692[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (22))){
var inst_21572 = (state_21613[(14)]);
var inst_21573 = (state_21613[(10)]);
var inst_21571 = (state_21613[(2)]);
var inst_21572__$1 = cljs.core.nth.call(null,inst_21571,(0),null);
var inst_21573__$1 = cljs.core.nth.call(null,inst_21571,(1),null);
var inst_21574 = (inst_21572__$1 == null);
var inst_21575 = cljs.core._EQ_.call(null,inst_21573__$1,change);
var inst_21576 = (inst_21574) || (inst_21575);
var state_21613__$1 = (function (){var statearr_21635 = state_21613;
(statearr_21635[(14)] = inst_21572__$1);

(statearr_21635[(10)] = inst_21573__$1);

return statearr_21635;
})();
if(cljs.core.truth_(inst_21576)){
var statearr_21636_21693 = state_21613__$1;
(statearr_21636_21693[(1)] = (23));

} else {
var statearr_21637_21694 = state_21613__$1;
(statearr_21637_21694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (36))){
var inst_21565 = (state_21613[(12)]);
var inst_21543 = inst_21565;
var state_21613__$1 = (function (){var statearr_21638 = state_21613;
(statearr_21638[(7)] = inst_21543);

return statearr_21638;
})();
var statearr_21639_21695 = state_21613__$1;
(statearr_21639_21695[(2)] = null);

(statearr_21639_21695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (29))){
var inst_21587 = (state_21613[(9)]);
var state_21613__$1 = state_21613;
var statearr_21640_21696 = state_21613__$1;
(statearr_21640_21696[(2)] = inst_21587);

(statearr_21640_21696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (6))){
var state_21613__$1 = state_21613;
var statearr_21641_21697 = state_21613__$1;
(statearr_21641_21697[(2)] = false);

(statearr_21641_21697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (28))){
var inst_21583 = (state_21613[(2)]);
var inst_21584 = calc_state.call(null);
var inst_21543 = inst_21584;
var state_21613__$1 = (function (){var statearr_21642 = state_21613;
(statearr_21642[(7)] = inst_21543);

(statearr_21642[(15)] = inst_21583);

return statearr_21642;
})();
var statearr_21643_21698 = state_21613__$1;
(statearr_21643_21698[(2)] = null);

(statearr_21643_21698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (25))){
var inst_21609 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
var statearr_21644_21699 = state_21613__$1;
(statearr_21644_21699[(2)] = inst_21609);

(statearr_21644_21699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (34))){
var inst_21607 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
var statearr_21645_21700 = state_21613__$1;
(statearr_21645_21700[(2)] = inst_21607);

(statearr_21645_21700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (17))){
var state_21613__$1 = state_21613;
var statearr_21646_21701 = state_21613__$1;
(statearr_21646_21701[(2)] = false);

(statearr_21646_21701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (3))){
var state_21613__$1 = state_21613;
var statearr_21647_21702 = state_21613__$1;
(statearr_21647_21702[(2)] = false);

(statearr_21647_21702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (12))){
var inst_21611 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21613__$1,inst_21611);
} else {
if((state_val_21614 === (2))){
var inst_21519 = (state_21613[(8)]);
var inst_21524 = inst_21519.cljs$lang$protocol_mask$partition0$;
var inst_21525 = (inst_21524 & (64));
var inst_21526 = inst_21519.cljs$core$ISeq$;
var inst_21527 = (inst_21525) || (inst_21526);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21527)){
var statearr_21648_21703 = state_21613__$1;
(statearr_21648_21703[(1)] = (5));

} else {
var statearr_21649_21704 = state_21613__$1;
(statearr_21649_21704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (23))){
var inst_21572 = (state_21613[(14)]);
var inst_21578 = (inst_21572 == null);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21578)){
var statearr_21650_21705 = state_21613__$1;
(statearr_21650_21705[(1)] = (26));

} else {
var statearr_21651_21706 = state_21613__$1;
(statearr_21651_21706[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (35))){
var inst_21598 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
if(cljs.core.truth_(inst_21598)){
var statearr_21652_21707 = state_21613__$1;
(statearr_21652_21707[(1)] = (36));

} else {
var statearr_21653_21708 = state_21613__$1;
(statearr_21653_21708[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (19))){
var inst_21543 = (state_21613[(7)]);
var inst_21562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21543);
var state_21613__$1 = state_21613;
var statearr_21654_21709 = state_21613__$1;
(statearr_21654_21709[(2)] = inst_21562);

(statearr_21654_21709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (11))){
var inst_21543 = (state_21613[(7)]);
var inst_21547 = (inst_21543 == null);
var inst_21548 = cljs.core.not.call(null,inst_21547);
var state_21613__$1 = state_21613;
if(inst_21548){
var statearr_21655_21710 = state_21613__$1;
(statearr_21655_21710[(1)] = (13));

} else {
var statearr_21656_21711 = state_21613__$1;
(statearr_21656_21711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (9))){
var inst_21519 = (state_21613[(8)]);
var state_21613__$1 = state_21613;
var statearr_21657_21712 = state_21613__$1;
(statearr_21657_21712[(2)] = inst_21519);

(statearr_21657_21712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (5))){
var state_21613__$1 = state_21613;
var statearr_21658_21713 = state_21613__$1;
(statearr_21658_21713[(2)] = true);

(statearr_21658_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (14))){
var state_21613__$1 = state_21613;
var statearr_21659_21714 = state_21613__$1;
(statearr_21659_21714[(2)] = false);

(statearr_21659_21714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (26))){
var inst_21573 = (state_21613[(10)]);
var inst_21580 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21573);
var state_21613__$1 = state_21613;
var statearr_21660_21715 = state_21613__$1;
(statearr_21660_21715[(2)] = inst_21580);

(statearr_21660_21715[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (16))){
var state_21613__$1 = state_21613;
var statearr_21661_21716 = state_21613__$1;
(statearr_21661_21716[(2)] = true);

(statearr_21661_21716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (38))){
var inst_21603 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
var statearr_21662_21717 = state_21613__$1;
(statearr_21662_21717[(2)] = inst_21603);

(statearr_21662_21717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (30))){
var inst_21573 = (state_21613[(10)]);
var inst_21567 = (state_21613[(13)]);
var inst_21566 = (state_21613[(11)]);
var inst_21590 = cljs.core.empty_QMARK_.call(null,inst_21566);
var inst_21591 = inst_21567.call(null,inst_21573);
var inst_21592 = cljs.core.not.call(null,inst_21591);
var inst_21593 = (inst_21590) && (inst_21592);
var state_21613__$1 = state_21613;
var statearr_21663_21718 = state_21613__$1;
(statearr_21663_21718[(2)] = inst_21593);

(statearr_21663_21718[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (10))){
var inst_21519 = (state_21613[(8)]);
var inst_21539 = (state_21613[(2)]);
var inst_21540 = cljs.core.get.call(null,inst_21539,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21541 = cljs.core.get.call(null,inst_21539,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21542 = cljs.core.get.call(null,inst_21539,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21543 = inst_21519;
var state_21613__$1 = (function (){var statearr_21664 = state_21613;
(statearr_21664[(16)] = inst_21542);

(statearr_21664[(7)] = inst_21543);

(statearr_21664[(17)] = inst_21540);

(statearr_21664[(18)] = inst_21541);

return statearr_21664;
})();
var statearr_21665_21719 = state_21613__$1;
(statearr_21665_21719[(2)] = null);

(statearr_21665_21719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (18))){
var inst_21557 = (state_21613[(2)]);
var state_21613__$1 = state_21613;
var statearr_21666_21720 = state_21613__$1;
(statearr_21666_21720[(2)] = inst_21557);

(statearr_21666_21720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (37))){
var state_21613__$1 = state_21613;
var statearr_21667_21721 = state_21613__$1;
(statearr_21667_21721[(2)] = null);

(statearr_21667_21721[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21614 === (8))){
var inst_21519 = (state_21613[(8)]);
var inst_21536 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21519);
var state_21613__$1 = state_21613;
var statearr_21668_21722 = state_21613__$1;
(statearr_21668_21722[(2)] = inst_21536);

(statearr_21668_21722[(1)] = (10));


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
});})(c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19851__auto__,c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19852__auto__ = null;
var cljs$core$async$mix_$_state_machine__19852__auto____0 = (function (){
var statearr_21672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21672[(0)] = cljs$core$async$mix_$_state_machine__19852__auto__);

(statearr_21672[(1)] = (1));

return statearr_21672;
});
var cljs$core$async$mix_$_state_machine__19852__auto____1 = (function (state_21613){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_21613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e21673){if((e21673 instanceof Object)){
var ex__19855__auto__ = e21673;
var statearr_21674_21723 = state_21613;
(statearr_21674_21723[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21724 = state_21613;
state_21613 = G__21724;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19852__auto__ = function(state_21613){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19852__auto____1.call(this,state_21613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19852__auto____0;
cljs$core$async$mix_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19852__auto____1;
return cljs$core$async$mix_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19965__auto__ = (function (){var statearr_21675 = f__19964__auto__.call(null);
(statearr_21675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___21676);

return statearr_21675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___21676,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15458__auto__ = (((p == null))?null:p);
var m__15459__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__15459__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15458__auto__ = (((p == null))?null:p);
var m__15459__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,p,v,ch);
} else {
var m__15459__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21725 = [];
var len__15861__auto___21728 = arguments.length;
var i__15862__auto___21729 = (0);
while(true){
if((i__15862__auto___21729 < len__15861__auto___21728)){
args21725.push((arguments[i__15862__auto___21729]));

var G__21730 = (i__15862__auto___21729 + (1));
i__15862__auto___21729 = G__21730;
continue;
} else {
}
break;
}

var G__21727 = args21725.length;
switch (G__21727) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21725.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15458__auto__ = (((p == null))?null:p);
var m__15459__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,p);
} else {
var m__15459__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15458__auto__ = (((p == null))?null:p);
var m__15459__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15458__auto__)]);
if(!((m__15459__auto__ == null))){
return m__15459__auto__.call(null,p,v);
} else {
var m__15459__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15459__auto____$1 == null))){
return m__15459__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21733 = [];
var len__15861__auto___21858 = arguments.length;
var i__15862__auto___21859 = (0);
while(true){
if((i__15862__auto___21859 < len__15861__auto___21858)){
args21733.push((arguments[i__15862__auto___21859]));

var G__21860 = (i__15862__auto___21859 + (1));
i__15862__auto___21859 = G__21860;
continue;
} else {
}
break;
}

var G__21735 = args21733.length;
switch (G__21735) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21733.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__14803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14803__auto__,mults){
return (function (p1__21732_SHARP_){
if(cljs.core.truth_(p1__21732_SHARP_.call(null,topic))){
return p1__21732_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21732_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14803__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21736 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21737){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21737 = meta21737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21738,meta21737__$1){
var self__ = this;
var _21738__$1 = this;
return (new cljs.core.async.t_cljs$core$async21736(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21737__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21738){
var self__ = this;
var _21738__$1 = this;
return self__.meta21737;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21737","meta21737",1395095630,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21736";

cljs.core.async.t_cljs$core$async21736.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async21736");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21736 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21736(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21737){
return (new cljs.core.async.t_cljs$core$async21736(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21737));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21736(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19963__auto___21862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___21862,mults,ensure_mult,p){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___21862,mults,ensure_mult,p){
return (function (state_21810){
var state_val_21811 = (state_21810[(1)]);
if((state_val_21811 === (7))){
var inst_21806 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21812_21863 = state_21810__$1;
(statearr_21812_21863[(2)] = inst_21806);

(statearr_21812_21863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (20))){
var state_21810__$1 = state_21810;
var statearr_21813_21864 = state_21810__$1;
(statearr_21813_21864[(2)] = null);

(statearr_21813_21864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (1))){
var state_21810__$1 = state_21810;
var statearr_21814_21865 = state_21810__$1;
(statearr_21814_21865[(2)] = null);

(statearr_21814_21865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (24))){
var inst_21789 = (state_21810[(7)]);
var inst_21798 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21789);
var state_21810__$1 = state_21810;
var statearr_21815_21866 = state_21810__$1;
(statearr_21815_21866[(2)] = inst_21798);

(statearr_21815_21866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (4))){
var inst_21741 = (state_21810[(8)]);
var inst_21741__$1 = (state_21810[(2)]);
var inst_21742 = (inst_21741__$1 == null);
var state_21810__$1 = (function (){var statearr_21816 = state_21810;
(statearr_21816[(8)] = inst_21741__$1);

return statearr_21816;
})();
if(cljs.core.truth_(inst_21742)){
var statearr_21817_21867 = state_21810__$1;
(statearr_21817_21867[(1)] = (5));

} else {
var statearr_21818_21868 = state_21810__$1;
(statearr_21818_21868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (15))){
var inst_21783 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21819_21869 = state_21810__$1;
(statearr_21819_21869[(2)] = inst_21783);

(statearr_21819_21869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (21))){
var inst_21803 = (state_21810[(2)]);
var state_21810__$1 = (function (){var statearr_21820 = state_21810;
(statearr_21820[(9)] = inst_21803);

return statearr_21820;
})();
var statearr_21821_21870 = state_21810__$1;
(statearr_21821_21870[(2)] = null);

(statearr_21821_21870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (13))){
var inst_21765 = (state_21810[(10)]);
var inst_21767 = cljs.core.chunked_seq_QMARK_.call(null,inst_21765);
var state_21810__$1 = state_21810;
if(inst_21767){
var statearr_21822_21871 = state_21810__$1;
(statearr_21822_21871[(1)] = (16));

} else {
var statearr_21823_21872 = state_21810__$1;
(statearr_21823_21872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (22))){
var inst_21795 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
if(cljs.core.truth_(inst_21795)){
var statearr_21824_21873 = state_21810__$1;
(statearr_21824_21873[(1)] = (23));

} else {
var statearr_21825_21874 = state_21810__$1;
(statearr_21825_21874[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (6))){
var inst_21789 = (state_21810[(7)]);
var inst_21791 = (state_21810[(11)]);
var inst_21741 = (state_21810[(8)]);
var inst_21789__$1 = topic_fn.call(null,inst_21741);
var inst_21790 = cljs.core.deref.call(null,mults);
var inst_21791__$1 = cljs.core.get.call(null,inst_21790,inst_21789__$1);
var state_21810__$1 = (function (){var statearr_21826 = state_21810;
(statearr_21826[(7)] = inst_21789__$1);

(statearr_21826[(11)] = inst_21791__$1);

return statearr_21826;
})();
if(cljs.core.truth_(inst_21791__$1)){
var statearr_21827_21875 = state_21810__$1;
(statearr_21827_21875[(1)] = (19));

} else {
var statearr_21828_21876 = state_21810__$1;
(statearr_21828_21876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (25))){
var inst_21800 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21829_21877 = state_21810__$1;
(statearr_21829_21877[(2)] = inst_21800);

(statearr_21829_21877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (17))){
var inst_21765 = (state_21810[(10)]);
var inst_21774 = cljs.core.first.call(null,inst_21765);
var inst_21775 = cljs.core.async.muxch_STAR_.call(null,inst_21774);
var inst_21776 = cljs.core.async.close_BANG_.call(null,inst_21775);
var inst_21777 = cljs.core.next.call(null,inst_21765);
var inst_21751 = inst_21777;
var inst_21752 = null;
var inst_21753 = (0);
var inst_21754 = (0);
var state_21810__$1 = (function (){var statearr_21830 = state_21810;
(statearr_21830[(12)] = inst_21776);

(statearr_21830[(13)] = inst_21752);

(statearr_21830[(14)] = inst_21751);

(statearr_21830[(15)] = inst_21753);

(statearr_21830[(16)] = inst_21754);

return statearr_21830;
})();
var statearr_21831_21878 = state_21810__$1;
(statearr_21831_21878[(2)] = null);

(statearr_21831_21878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (3))){
var inst_21808 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21810__$1,inst_21808);
} else {
if((state_val_21811 === (12))){
var inst_21785 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21832_21879 = state_21810__$1;
(statearr_21832_21879[(2)] = inst_21785);

(statearr_21832_21879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (2))){
var state_21810__$1 = state_21810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21810__$1,(4),ch);
} else {
if((state_val_21811 === (23))){
var state_21810__$1 = state_21810;
var statearr_21833_21880 = state_21810__$1;
(statearr_21833_21880[(2)] = null);

(statearr_21833_21880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (19))){
var inst_21791 = (state_21810[(11)]);
var inst_21741 = (state_21810[(8)]);
var inst_21793 = cljs.core.async.muxch_STAR_.call(null,inst_21791);
var state_21810__$1 = state_21810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21810__$1,(22),inst_21793,inst_21741);
} else {
if((state_val_21811 === (11))){
var inst_21751 = (state_21810[(14)]);
var inst_21765 = (state_21810[(10)]);
var inst_21765__$1 = cljs.core.seq.call(null,inst_21751);
var state_21810__$1 = (function (){var statearr_21834 = state_21810;
(statearr_21834[(10)] = inst_21765__$1);

return statearr_21834;
})();
if(inst_21765__$1){
var statearr_21835_21881 = state_21810__$1;
(statearr_21835_21881[(1)] = (13));

} else {
var statearr_21836_21882 = state_21810__$1;
(statearr_21836_21882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (9))){
var inst_21787 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21837_21883 = state_21810__$1;
(statearr_21837_21883[(2)] = inst_21787);

(statearr_21837_21883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (5))){
var inst_21748 = cljs.core.deref.call(null,mults);
var inst_21749 = cljs.core.vals.call(null,inst_21748);
var inst_21750 = cljs.core.seq.call(null,inst_21749);
var inst_21751 = inst_21750;
var inst_21752 = null;
var inst_21753 = (0);
var inst_21754 = (0);
var state_21810__$1 = (function (){var statearr_21838 = state_21810;
(statearr_21838[(13)] = inst_21752);

(statearr_21838[(14)] = inst_21751);

(statearr_21838[(15)] = inst_21753);

(statearr_21838[(16)] = inst_21754);

return statearr_21838;
})();
var statearr_21839_21884 = state_21810__$1;
(statearr_21839_21884[(2)] = null);

(statearr_21839_21884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (14))){
var state_21810__$1 = state_21810;
var statearr_21843_21885 = state_21810__$1;
(statearr_21843_21885[(2)] = null);

(statearr_21843_21885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (16))){
var inst_21765 = (state_21810[(10)]);
var inst_21769 = cljs.core.chunk_first.call(null,inst_21765);
var inst_21770 = cljs.core.chunk_rest.call(null,inst_21765);
var inst_21771 = cljs.core.count.call(null,inst_21769);
var inst_21751 = inst_21770;
var inst_21752 = inst_21769;
var inst_21753 = inst_21771;
var inst_21754 = (0);
var state_21810__$1 = (function (){var statearr_21844 = state_21810;
(statearr_21844[(13)] = inst_21752);

(statearr_21844[(14)] = inst_21751);

(statearr_21844[(15)] = inst_21753);

(statearr_21844[(16)] = inst_21754);

return statearr_21844;
})();
var statearr_21845_21886 = state_21810__$1;
(statearr_21845_21886[(2)] = null);

(statearr_21845_21886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (10))){
var inst_21752 = (state_21810[(13)]);
var inst_21751 = (state_21810[(14)]);
var inst_21753 = (state_21810[(15)]);
var inst_21754 = (state_21810[(16)]);
var inst_21759 = cljs.core._nth.call(null,inst_21752,inst_21754);
var inst_21760 = cljs.core.async.muxch_STAR_.call(null,inst_21759);
var inst_21761 = cljs.core.async.close_BANG_.call(null,inst_21760);
var inst_21762 = (inst_21754 + (1));
var tmp21840 = inst_21752;
var tmp21841 = inst_21751;
var tmp21842 = inst_21753;
var inst_21751__$1 = tmp21841;
var inst_21752__$1 = tmp21840;
var inst_21753__$1 = tmp21842;
var inst_21754__$1 = inst_21762;
var state_21810__$1 = (function (){var statearr_21846 = state_21810;
(statearr_21846[(13)] = inst_21752__$1);

(statearr_21846[(14)] = inst_21751__$1);

(statearr_21846[(15)] = inst_21753__$1);

(statearr_21846[(17)] = inst_21761);

(statearr_21846[(16)] = inst_21754__$1);

return statearr_21846;
})();
var statearr_21847_21887 = state_21810__$1;
(statearr_21847_21887[(2)] = null);

(statearr_21847_21887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (18))){
var inst_21780 = (state_21810[(2)]);
var state_21810__$1 = state_21810;
var statearr_21848_21888 = state_21810__$1;
(statearr_21848_21888[(2)] = inst_21780);

(statearr_21848_21888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21811 === (8))){
var inst_21753 = (state_21810[(15)]);
var inst_21754 = (state_21810[(16)]);
var inst_21756 = (inst_21754 < inst_21753);
var inst_21757 = inst_21756;
var state_21810__$1 = state_21810;
if(cljs.core.truth_(inst_21757)){
var statearr_21849_21889 = state_21810__$1;
(statearr_21849_21889[(1)] = (10));

} else {
var statearr_21850_21890 = state_21810__$1;
(statearr_21850_21890[(1)] = (11));

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
});})(c__19963__auto___21862,mults,ensure_mult,p))
;
return ((function (switch__19851__auto__,c__19963__auto___21862,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_21854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21854[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_21854[(1)] = (1));

return statearr_21854;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_21810){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_21810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e21855){if((e21855 instanceof Object)){
var ex__19855__auto__ = e21855;
var statearr_21856_21891 = state_21810;
(statearr_21856_21891[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21892 = state_21810;
state_21810 = G__21892;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_21810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_21810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___21862,mults,ensure_mult,p))
})();
var state__19965__auto__ = (function (){var statearr_21857 = f__19964__auto__.call(null);
(statearr_21857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___21862);

return statearr_21857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___21862,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21893 = [];
var len__15861__auto___21896 = arguments.length;
var i__15862__auto___21897 = (0);
while(true){
if((i__15862__auto___21897 < len__15861__auto___21896)){
args21893.push((arguments[i__15862__auto___21897]));

var G__21898 = (i__15862__auto___21897 + (1));
i__15862__auto___21897 = G__21898;
continue;
} else {
}
break;
}

var G__21895 = args21893.length;
switch (G__21895) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21893.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21900 = [];
var len__15861__auto___21903 = arguments.length;
var i__15862__auto___21904 = (0);
while(true){
if((i__15862__auto___21904 < len__15861__auto___21903)){
args21900.push((arguments[i__15862__auto___21904]));

var G__21905 = (i__15862__auto___21904 + (1));
i__15862__auto___21904 = G__21905;
continue;
} else {
}
break;
}

var G__21902 = args21900.length;
switch (G__21902) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21900.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21907 = [];
var len__15861__auto___21978 = arguments.length;
var i__15862__auto___21979 = (0);
while(true){
if((i__15862__auto___21979 < len__15861__auto___21978)){
args21907.push((arguments[i__15862__auto___21979]));

var G__21980 = (i__15862__auto___21979 + (1));
i__15862__auto___21979 = G__21980;
continue;
} else {
}
break;
}

var G__21909 = args21907.length;
switch (G__21909) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21907.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19963__auto___21982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21948){
var state_val_21949 = (state_21948[(1)]);
if((state_val_21949 === (7))){
var state_21948__$1 = state_21948;
var statearr_21950_21983 = state_21948__$1;
(statearr_21950_21983[(2)] = null);

(statearr_21950_21983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (1))){
var state_21948__$1 = state_21948;
var statearr_21951_21984 = state_21948__$1;
(statearr_21951_21984[(2)] = null);

(statearr_21951_21984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (4))){
var inst_21912 = (state_21948[(7)]);
var inst_21914 = (inst_21912 < cnt);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21914)){
var statearr_21952_21985 = state_21948__$1;
(statearr_21952_21985[(1)] = (6));

} else {
var statearr_21953_21986 = state_21948__$1;
(statearr_21953_21986[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (15))){
var inst_21944 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21954_21987 = state_21948__$1;
(statearr_21954_21987[(2)] = inst_21944);

(statearr_21954_21987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (13))){
var inst_21937 = cljs.core.async.close_BANG_.call(null,out);
var state_21948__$1 = state_21948;
var statearr_21955_21988 = state_21948__$1;
(statearr_21955_21988[(2)] = inst_21937);

(statearr_21955_21988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (6))){
var state_21948__$1 = state_21948;
var statearr_21956_21989 = state_21948__$1;
(statearr_21956_21989[(2)] = null);

(statearr_21956_21989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (3))){
var inst_21946 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21948__$1,inst_21946);
} else {
if((state_val_21949 === (12))){
var inst_21934 = (state_21948[(8)]);
var inst_21934__$1 = (state_21948[(2)]);
var inst_21935 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21934__$1);
var state_21948__$1 = (function (){var statearr_21957 = state_21948;
(statearr_21957[(8)] = inst_21934__$1);

return statearr_21957;
})();
if(cljs.core.truth_(inst_21935)){
var statearr_21958_21990 = state_21948__$1;
(statearr_21958_21990[(1)] = (13));

} else {
var statearr_21959_21991 = state_21948__$1;
(statearr_21959_21991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (2))){
var inst_21911 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21912 = (0);
var state_21948__$1 = (function (){var statearr_21960 = state_21948;
(statearr_21960[(9)] = inst_21911);

(statearr_21960[(7)] = inst_21912);

return statearr_21960;
})();
var statearr_21961_21992 = state_21948__$1;
(statearr_21961_21992[(2)] = null);

(statearr_21961_21992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (11))){
var inst_21912 = (state_21948[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21948,(10),Object,null,(9));
var inst_21921 = chs__$1.call(null,inst_21912);
var inst_21922 = done.call(null,inst_21912);
var inst_21923 = cljs.core.async.take_BANG_.call(null,inst_21921,inst_21922);
var state_21948__$1 = state_21948;
var statearr_21962_21993 = state_21948__$1;
(statearr_21962_21993[(2)] = inst_21923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21948__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (9))){
var inst_21912 = (state_21948[(7)]);
var inst_21925 = (state_21948[(2)]);
var inst_21926 = (inst_21912 + (1));
var inst_21912__$1 = inst_21926;
var state_21948__$1 = (function (){var statearr_21963 = state_21948;
(statearr_21963[(7)] = inst_21912__$1);

(statearr_21963[(10)] = inst_21925);

return statearr_21963;
})();
var statearr_21964_21994 = state_21948__$1;
(statearr_21964_21994[(2)] = null);

(statearr_21964_21994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (5))){
var inst_21932 = (state_21948[(2)]);
var state_21948__$1 = (function (){var statearr_21965 = state_21948;
(statearr_21965[(11)] = inst_21932);

return statearr_21965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21948__$1,(12),dchan);
} else {
if((state_val_21949 === (14))){
var inst_21934 = (state_21948[(8)]);
var inst_21939 = cljs.core.apply.call(null,f,inst_21934);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21948__$1,(16),out,inst_21939);
} else {
if((state_val_21949 === (16))){
var inst_21941 = (state_21948[(2)]);
var state_21948__$1 = (function (){var statearr_21966 = state_21948;
(statearr_21966[(12)] = inst_21941);

return statearr_21966;
})();
var statearr_21967_21995 = state_21948__$1;
(statearr_21967_21995[(2)] = null);

(statearr_21967_21995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (10))){
var inst_21916 = (state_21948[(2)]);
var inst_21917 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21948__$1 = (function (){var statearr_21968 = state_21948;
(statearr_21968[(13)] = inst_21916);

return statearr_21968;
})();
var statearr_21969_21996 = state_21948__$1;
(statearr_21969_21996[(2)] = inst_21917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21948__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (8))){
var inst_21930 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21970_21997 = state_21948__$1;
(statearr_21970_21997[(2)] = inst_21930);

(statearr_21970_21997[(1)] = (5));


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
});})(c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19851__auto__,c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_21974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21974[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_21974[(1)] = (1));

return statearr_21974;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_21948){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_21948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e21975){if((e21975 instanceof Object)){
var ex__19855__auto__ = e21975;
var statearr_21976_21998 = state_21948;
(statearr_21976_21998[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21999 = state_21948;
state_21948 = G__21999;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_21948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_21948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19965__auto__ = (function (){var statearr_21977 = f__19964__auto__.call(null);
(statearr_21977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___21982);

return statearr_21977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___21982,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22001 = [];
var len__15861__auto___22057 = arguments.length;
var i__15862__auto___22058 = (0);
while(true){
if((i__15862__auto___22058 < len__15861__auto___22057)){
args22001.push((arguments[i__15862__auto___22058]));

var G__22059 = (i__15862__auto___22058 + (1));
i__15862__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var G__22003 = args22001.length;
switch (G__22003) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22001.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22061,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22061,out){
return (function (state_22033){
var state_val_22034 = (state_22033[(1)]);
if((state_val_22034 === (7))){
var inst_22013 = (state_22033[(7)]);
var inst_22012 = (state_22033[(8)]);
var inst_22012__$1 = (state_22033[(2)]);
var inst_22013__$1 = cljs.core.nth.call(null,inst_22012__$1,(0),null);
var inst_22014 = cljs.core.nth.call(null,inst_22012__$1,(1),null);
var inst_22015 = (inst_22013__$1 == null);
var state_22033__$1 = (function (){var statearr_22035 = state_22033;
(statearr_22035[(7)] = inst_22013__$1);

(statearr_22035[(8)] = inst_22012__$1);

(statearr_22035[(9)] = inst_22014);

return statearr_22035;
})();
if(cljs.core.truth_(inst_22015)){
var statearr_22036_22062 = state_22033__$1;
(statearr_22036_22062[(1)] = (8));

} else {
var statearr_22037_22063 = state_22033__$1;
(statearr_22037_22063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (1))){
var inst_22004 = cljs.core.vec.call(null,chs);
var inst_22005 = inst_22004;
var state_22033__$1 = (function (){var statearr_22038 = state_22033;
(statearr_22038[(10)] = inst_22005);

return statearr_22038;
})();
var statearr_22039_22064 = state_22033__$1;
(statearr_22039_22064[(2)] = null);

(statearr_22039_22064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (4))){
var inst_22005 = (state_22033[(10)]);
var state_22033__$1 = state_22033;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22033__$1,(7),inst_22005);
} else {
if((state_val_22034 === (6))){
var inst_22029 = (state_22033[(2)]);
var state_22033__$1 = state_22033;
var statearr_22040_22065 = state_22033__$1;
(statearr_22040_22065[(2)] = inst_22029);

(statearr_22040_22065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (3))){
var inst_22031 = (state_22033[(2)]);
var state_22033__$1 = state_22033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22033__$1,inst_22031);
} else {
if((state_val_22034 === (2))){
var inst_22005 = (state_22033[(10)]);
var inst_22007 = cljs.core.count.call(null,inst_22005);
var inst_22008 = (inst_22007 > (0));
var state_22033__$1 = state_22033;
if(cljs.core.truth_(inst_22008)){
var statearr_22042_22066 = state_22033__$1;
(statearr_22042_22066[(1)] = (4));

} else {
var statearr_22043_22067 = state_22033__$1;
(statearr_22043_22067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (11))){
var inst_22005 = (state_22033[(10)]);
var inst_22022 = (state_22033[(2)]);
var tmp22041 = inst_22005;
var inst_22005__$1 = tmp22041;
var state_22033__$1 = (function (){var statearr_22044 = state_22033;
(statearr_22044[(11)] = inst_22022);

(statearr_22044[(10)] = inst_22005__$1);

return statearr_22044;
})();
var statearr_22045_22068 = state_22033__$1;
(statearr_22045_22068[(2)] = null);

(statearr_22045_22068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (9))){
var inst_22013 = (state_22033[(7)]);
var state_22033__$1 = state_22033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22033__$1,(11),out,inst_22013);
} else {
if((state_val_22034 === (5))){
var inst_22027 = cljs.core.async.close_BANG_.call(null,out);
var state_22033__$1 = state_22033;
var statearr_22046_22069 = state_22033__$1;
(statearr_22046_22069[(2)] = inst_22027);

(statearr_22046_22069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (10))){
var inst_22025 = (state_22033[(2)]);
var state_22033__$1 = state_22033;
var statearr_22047_22070 = state_22033__$1;
(statearr_22047_22070[(2)] = inst_22025);

(statearr_22047_22070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22034 === (8))){
var inst_22013 = (state_22033[(7)]);
var inst_22012 = (state_22033[(8)]);
var inst_22005 = (state_22033[(10)]);
var inst_22014 = (state_22033[(9)]);
var inst_22017 = (function (){var cs = inst_22005;
var vec__22010 = inst_22012;
var v = inst_22013;
var c = inst_22014;
return ((function (cs,vec__22010,v,c,inst_22013,inst_22012,inst_22005,inst_22014,state_val_22034,c__19963__auto___22061,out){
return (function (p1__22000_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22000_SHARP_);
});
;})(cs,vec__22010,v,c,inst_22013,inst_22012,inst_22005,inst_22014,state_val_22034,c__19963__auto___22061,out))
})();
var inst_22018 = cljs.core.filterv.call(null,inst_22017,inst_22005);
var inst_22005__$1 = inst_22018;
var state_22033__$1 = (function (){var statearr_22048 = state_22033;
(statearr_22048[(10)] = inst_22005__$1);

return statearr_22048;
})();
var statearr_22049_22071 = state_22033__$1;
(statearr_22049_22071[(2)] = null);

(statearr_22049_22071[(1)] = (2));


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
});})(c__19963__auto___22061,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22061,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22053[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22053[(1)] = (1));

return statearr_22053;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22033){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22054){if((e22054 instanceof Object)){
var ex__19855__auto__ = e22054;
var statearr_22055_22072 = state_22033;
(statearr_22055_22072[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22073 = state_22033;
state_22033 = G__22073;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22061,out))
})();
var state__19965__auto__ = (function (){var statearr_22056 = f__19964__auto__.call(null);
(statearr_22056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22061);

return statearr_22056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22061,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22074 = [];
var len__15861__auto___22123 = arguments.length;
var i__15862__auto___22124 = (0);
while(true){
if((i__15862__auto___22124 < len__15861__auto___22123)){
args22074.push((arguments[i__15862__auto___22124]));

var G__22125 = (i__15862__auto___22124 + (1));
i__15862__auto___22124 = G__22125;
continue;
} else {
}
break;
}

var G__22076 = args22074.length;
switch (G__22076) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22074.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22127,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22127,out){
return (function (state_22100){
var state_val_22101 = (state_22100[(1)]);
if((state_val_22101 === (7))){
var inst_22082 = (state_22100[(7)]);
var inst_22082__$1 = (state_22100[(2)]);
var inst_22083 = (inst_22082__$1 == null);
var inst_22084 = cljs.core.not.call(null,inst_22083);
var state_22100__$1 = (function (){var statearr_22102 = state_22100;
(statearr_22102[(7)] = inst_22082__$1);

return statearr_22102;
})();
if(inst_22084){
var statearr_22103_22128 = state_22100__$1;
(statearr_22103_22128[(1)] = (8));

} else {
var statearr_22104_22129 = state_22100__$1;
(statearr_22104_22129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (1))){
var inst_22077 = (0);
var state_22100__$1 = (function (){var statearr_22105 = state_22100;
(statearr_22105[(8)] = inst_22077);

return statearr_22105;
})();
var statearr_22106_22130 = state_22100__$1;
(statearr_22106_22130[(2)] = null);

(statearr_22106_22130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (4))){
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22100__$1,(7),ch);
} else {
if((state_val_22101 === (6))){
var inst_22095 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22107_22131 = state_22100__$1;
(statearr_22107_22131[(2)] = inst_22095);

(statearr_22107_22131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (3))){
var inst_22097 = (state_22100[(2)]);
var inst_22098 = cljs.core.async.close_BANG_.call(null,out);
var state_22100__$1 = (function (){var statearr_22108 = state_22100;
(statearr_22108[(9)] = inst_22097);

return statearr_22108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22100__$1,inst_22098);
} else {
if((state_val_22101 === (2))){
var inst_22077 = (state_22100[(8)]);
var inst_22079 = (inst_22077 < n);
var state_22100__$1 = state_22100;
if(cljs.core.truth_(inst_22079)){
var statearr_22109_22132 = state_22100__$1;
(statearr_22109_22132[(1)] = (4));

} else {
var statearr_22110_22133 = state_22100__$1;
(statearr_22110_22133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (11))){
var inst_22077 = (state_22100[(8)]);
var inst_22087 = (state_22100[(2)]);
var inst_22088 = (inst_22077 + (1));
var inst_22077__$1 = inst_22088;
var state_22100__$1 = (function (){var statearr_22111 = state_22100;
(statearr_22111[(8)] = inst_22077__$1);

(statearr_22111[(10)] = inst_22087);

return statearr_22111;
})();
var statearr_22112_22134 = state_22100__$1;
(statearr_22112_22134[(2)] = null);

(statearr_22112_22134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (9))){
var state_22100__$1 = state_22100;
var statearr_22113_22135 = state_22100__$1;
(statearr_22113_22135[(2)] = null);

(statearr_22113_22135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (5))){
var state_22100__$1 = state_22100;
var statearr_22114_22136 = state_22100__$1;
(statearr_22114_22136[(2)] = null);

(statearr_22114_22136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (10))){
var inst_22092 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22115_22137 = state_22100__$1;
(statearr_22115_22137[(2)] = inst_22092);

(statearr_22115_22137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (8))){
var inst_22082 = (state_22100[(7)]);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(11),out,inst_22082);
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
});})(c__19963__auto___22127,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22127,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22119[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22119[(1)] = (1));

return statearr_22119;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22100){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22120){if((e22120 instanceof Object)){
var ex__19855__auto__ = e22120;
var statearr_22121_22138 = state_22100;
(statearr_22121_22138[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22139 = state_22100;
state_22100 = G__22139;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22127,out))
})();
var state__19965__auto__ = (function (){var statearr_22122 = f__19964__auto__.call(null);
(statearr_22122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22127);

return statearr_22122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22127,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22147 = (function (map_LT_,f,ch,meta22148){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22148 = meta22148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22149,meta22148__$1){
var self__ = this;
var _22149__$1 = this;
return (new cljs.core.async.t_cljs$core$async22147(self__.map_LT_,self__.f,self__.ch,meta22148__$1));
});

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22149){
var self__ = this;
var _22149__$1 = this;
return self__.meta22148;
});

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22150 = (function (map_LT_,f,ch,meta22148,_,fn1,meta22151){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22148 = meta22148;
this._ = _;
this.fn1 = fn1;
this.meta22151 = meta22151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22152,meta22151__$1){
var self__ = this;
var _22152__$1 = this;
return (new cljs.core.async.t_cljs$core$async22150(self__.map_LT_,self__.f,self__.ch,self__.meta22148,self__._,self__.fn1,meta22151__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22152){
var self__ = this;
var _22152__$1 = this;
return self__.meta22151;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22140_SHARP_){
return f1.call(null,(((p1__22140_SHARP_ == null))?null:self__.f.call(null,p1__22140_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22148","meta22148",-2058441240,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22147","cljs.core.async/t_cljs$core$async22147",1611099476,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22151","meta22151",1068839044,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22150";

cljs.core.async.t_cljs$core$async22150.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async22150");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22150 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22150(map_LT___$1,f__$1,ch__$1,meta22148__$1,___$2,fn1__$1,meta22151){
return (new cljs.core.async.t_cljs$core$async22150(map_LT___$1,f__$1,ch__$1,meta22148__$1,___$2,fn1__$1,meta22151));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22150(self__.map_LT_,self__.f,self__.ch,self__.meta22148,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14791__auto__ = ret;
if(cljs.core.truth_(and__14791__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14791__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22148","meta22148",-2058441240,null)], null);
});

cljs.core.async.t_cljs$core$async22147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22147";

cljs.core.async.t_cljs$core$async22147.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async22147");
});

cljs.core.async.__GT_t_cljs$core$async22147 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22147(map_LT___$1,f__$1,ch__$1,meta22148){
return (new cljs.core.async.t_cljs$core$async22147(map_LT___$1,f__$1,ch__$1,meta22148));
});

}

return (new cljs.core.async.t_cljs$core$async22147(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22156 = (function (map_GT_,f,ch,meta22157){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22157 = meta22157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22158,meta22157__$1){
var self__ = this;
var _22158__$1 = this;
return (new cljs.core.async.t_cljs$core$async22156(self__.map_GT_,self__.f,self__.ch,meta22157__$1));
});

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22158){
var self__ = this;
var _22158__$1 = this;
return self__.meta22157;
});

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22157","meta22157",280999590,null)], null);
});

cljs.core.async.t_cljs$core$async22156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22156";

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async22156");
});

cljs.core.async.__GT_t_cljs$core$async22156 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22156(map_GT___$1,f__$1,ch__$1,meta22157){
return (new cljs.core.async.t_cljs$core$async22156(map_GT___$1,f__$1,ch__$1,meta22157));
});

}

return (new cljs.core.async.t_cljs$core$async22156(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22162 = (function (filter_GT_,p,ch,meta22163){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22163 = meta22163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22164,meta22163__$1){
var self__ = this;
var _22164__$1 = this;
return (new cljs.core.async.t_cljs$core$async22162(self__.filter_GT_,self__.p,self__.ch,meta22163__$1));
});

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22164){
var self__ = this;
var _22164__$1 = this;
return self__.meta22163;
});

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22163","meta22163",-1374307516,null)], null);
});

cljs.core.async.t_cljs$core$async22162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22162";

cljs.core.async.t_cljs$core$async22162.cljs$lang$ctorPrWriter = (function (this__15401__auto__,writer__15402__auto__,opt__15403__auto__){
return cljs.core._write.call(null,writer__15402__auto__,"cljs.core.async/t_cljs$core$async22162");
});

cljs.core.async.__GT_t_cljs$core$async22162 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22162(filter_GT___$1,p__$1,ch__$1,meta22163){
return (new cljs.core.async.t_cljs$core$async22162(filter_GT___$1,p__$1,ch__$1,meta22163));
});

}

return (new cljs.core.async.t_cljs$core$async22162(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22165 = [];
var len__15861__auto___22209 = arguments.length;
var i__15862__auto___22210 = (0);
while(true){
if((i__15862__auto___22210 < len__15861__auto___22209)){
args22165.push((arguments[i__15862__auto___22210]));

var G__22211 = (i__15862__auto___22210 + (1));
i__15862__auto___22210 = G__22211;
continue;
} else {
}
break;
}

var G__22167 = args22165.length;
switch (G__22167) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22165.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22213,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22213,out){
return (function (state_22188){
var state_val_22189 = (state_22188[(1)]);
if((state_val_22189 === (7))){
var inst_22184 = (state_22188[(2)]);
var state_22188__$1 = state_22188;
var statearr_22190_22214 = state_22188__$1;
(statearr_22190_22214[(2)] = inst_22184);

(statearr_22190_22214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (1))){
var state_22188__$1 = state_22188;
var statearr_22191_22215 = state_22188__$1;
(statearr_22191_22215[(2)] = null);

(statearr_22191_22215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (4))){
var inst_22170 = (state_22188[(7)]);
var inst_22170__$1 = (state_22188[(2)]);
var inst_22171 = (inst_22170__$1 == null);
var state_22188__$1 = (function (){var statearr_22192 = state_22188;
(statearr_22192[(7)] = inst_22170__$1);

return statearr_22192;
})();
if(cljs.core.truth_(inst_22171)){
var statearr_22193_22216 = state_22188__$1;
(statearr_22193_22216[(1)] = (5));

} else {
var statearr_22194_22217 = state_22188__$1;
(statearr_22194_22217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (6))){
var inst_22170 = (state_22188[(7)]);
var inst_22175 = p.call(null,inst_22170);
var state_22188__$1 = state_22188;
if(cljs.core.truth_(inst_22175)){
var statearr_22195_22218 = state_22188__$1;
(statearr_22195_22218[(1)] = (8));

} else {
var statearr_22196_22219 = state_22188__$1;
(statearr_22196_22219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (3))){
var inst_22186 = (state_22188[(2)]);
var state_22188__$1 = state_22188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22188__$1,inst_22186);
} else {
if((state_val_22189 === (2))){
var state_22188__$1 = state_22188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22188__$1,(4),ch);
} else {
if((state_val_22189 === (11))){
var inst_22178 = (state_22188[(2)]);
var state_22188__$1 = state_22188;
var statearr_22197_22220 = state_22188__$1;
(statearr_22197_22220[(2)] = inst_22178);

(statearr_22197_22220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (9))){
var state_22188__$1 = state_22188;
var statearr_22198_22221 = state_22188__$1;
(statearr_22198_22221[(2)] = null);

(statearr_22198_22221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (5))){
var inst_22173 = cljs.core.async.close_BANG_.call(null,out);
var state_22188__$1 = state_22188;
var statearr_22199_22222 = state_22188__$1;
(statearr_22199_22222[(2)] = inst_22173);

(statearr_22199_22222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (10))){
var inst_22181 = (state_22188[(2)]);
var state_22188__$1 = (function (){var statearr_22200 = state_22188;
(statearr_22200[(8)] = inst_22181);

return statearr_22200;
})();
var statearr_22201_22223 = state_22188__$1;
(statearr_22201_22223[(2)] = null);

(statearr_22201_22223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22189 === (8))){
var inst_22170 = (state_22188[(7)]);
var state_22188__$1 = state_22188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22188__$1,(11),out,inst_22170);
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
});})(c__19963__auto___22213,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22213,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22205 = [null,null,null,null,null,null,null,null,null];
(statearr_22205[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22205[(1)] = (1));

return statearr_22205;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22188){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22206){if((e22206 instanceof Object)){
var ex__19855__auto__ = e22206;
var statearr_22207_22224 = state_22188;
(statearr_22207_22224[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22225 = state_22188;
state_22188 = G__22225;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22213,out))
})();
var state__19965__auto__ = (function (){var statearr_22208 = f__19964__auto__.call(null);
(statearr_22208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22213);

return statearr_22208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22213,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22226 = [];
var len__15861__auto___22229 = arguments.length;
var i__15862__auto___22230 = (0);
while(true){
if((i__15862__auto___22230 < len__15861__auto___22229)){
args22226.push((arguments[i__15862__auto___22230]));

var G__22231 = (i__15862__auto___22230 + (1));
i__15862__auto___22230 = G__22231;
continue;
} else {
}
break;
}

var G__22228 = args22226.length;
switch (G__22228) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22226.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_22398){
var state_val_22399 = (state_22398[(1)]);
if((state_val_22399 === (7))){
var inst_22394 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22400_22441 = state_22398__$1;
(statearr_22400_22441[(2)] = inst_22394);

(statearr_22400_22441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (20))){
var inst_22364 = (state_22398[(7)]);
var inst_22375 = (state_22398[(2)]);
var inst_22376 = cljs.core.next.call(null,inst_22364);
var inst_22350 = inst_22376;
var inst_22351 = null;
var inst_22352 = (0);
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22401 = state_22398;
(statearr_22401[(8)] = inst_22351);

(statearr_22401[(9)] = inst_22350);

(statearr_22401[(10)] = inst_22375);

(statearr_22401[(11)] = inst_22353);

(statearr_22401[(12)] = inst_22352);

return statearr_22401;
})();
var statearr_22402_22442 = state_22398__$1;
(statearr_22402_22442[(2)] = null);

(statearr_22402_22442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (1))){
var state_22398__$1 = state_22398;
var statearr_22403_22443 = state_22398__$1;
(statearr_22403_22443[(2)] = null);

(statearr_22403_22443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (4))){
var inst_22339 = (state_22398[(13)]);
var inst_22339__$1 = (state_22398[(2)]);
var inst_22340 = (inst_22339__$1 == null);
var state_22398__$1 = (function (){var statearr_22404 = state_22398;
(statearr_22404[(13)] = inst_22339__$1);

return statearr_22404;
})();
if(cljs.core.truth_(inst_22340)){
var statearr_22405_22444 = state_22398__$1;
(statearr_22405_22444[(1)] = (5));

} else {
var statearr_22406_22445 = state_22398__$1;
(statearr_22406_22445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (15))){
var state_22398__$1 = state_22398;
var statearr_22410_22446 = state_22398__$1;
(statearr_22410_22446[(2)] = null);

(statearr_22410_22446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (21))){
var state_22398__$1 = state_22398;
var statearr_22411_22447 = state_22398__$1;
(statearr_22411_22447[(2)] = null);

(statearr_22411_22447[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (13))){
var inst_22351 = (state_22398[(8)]);
var inst_22350 = (state_22398[(9)]);
var inst_22353 = (state_22398[(11)]);
var inst_22352 = (state_22398[(12)]);
var inst_22360 = (state_22398[(2)]);
var inst_22361 = (inst_22353 + (1));
var tmp22407 = inst_22351;
var tmp22408 = inst_22350;
var tmp22409 = inst_22352;
var inst_22350__$1 = tmp22408;
var inst_22351__$1 = tmp22407;
var inst_22352__$1 = tmp22409;
var inst_22353__$1 = inst_22361;
var state_22398__$1 = (function (){var statearr_22412 = state_22398;
(statearr_22412[(8)] = inst_22351__$1);

(statearr_22412[(9)] = inst_22350__$1);

(statearr_22412[(14)] = inst_22360);

(statearr_22412[(11)] = inst_22353__$1);

(statearr_22412[(12)] = inst_22352__$1);

return statearr_22412;
})();
var statearr_22413_22448 = state_22398__$1;
(statearr_22413_22448[(2)] = null);

(statearr_22413_22448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (22))){
var state_22398__$1 = state_22398;
var statearr_22414_22449 = state_22398__$1;
(statearr_22414_22449[(2)] = null);

(statearr_22414_22449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (6))){
var inst_22339 = (state_22398[(13)]);
var inst_22348 = f.call(null,inst_22339);
var inst_22349 = cljs.core.seq.call(null,inst_22348);
var inst_22350 = inst_22349;
var inst_22351 = null;
var inst_22352 = (0);
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22415 = state_22398;
(statearr_22415[(8)] = inst_22351);

(statearr_22415[(9)] = inst_22350);

(statearr_22415[(11)] = inst_22353);

(statearr_22415[(12)] = inst_22352);

return statearr_22415;
})();
var statearr_22416_22450 = state_22398__$1;
(statearr_22416_22450[(2)] = null);

(statearr_22416_22450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (17))){
var inst_22364 = (state_22398[(7)]);
var inst_22368 = cljs.core.chunk_first.call(null,inst_22364);
var inst_22369 = cljs.core.chunk_rest.call(null,inst_22364);
var inst_22370 = cljs.core.count.call(null,inst_22368);
var inst_22350 = inst_22369;
var inst_22351 = inst_22368;
var inst_22352 = inst_22370;
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22417 = state_22398;
(statearr_22417[(8)] = inst_22351);

(statearr_22417[(9)] = inst_22350);

(statearr_22417[(11)] = inst_22353);

(statearr_22417[(12)] = inst_22352);

return statearr_22417;
})();
var statearr_22418_22451 = state_22398__$1;
(statearr_22418_22451[(2)] = null);

(statearr_22418_22451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (3))){
var inst_22396 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22398__$1,inst_22396);
} else {
if((state_val_22399 === (12))){
var inst_22384 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22419_22452 = state_22398__$1;
(statearr_22419_22452[(2)] = inst_22384);

(statearr_22419_22452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (2))){
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22398__$1,(4),in$);
} else {
if((state_val_22399 === (23))){
var inst_22392 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22420_22453 = state_22398__$1;
(statearr_22420_22453[(2)] = inst_22392);

(statearr_22420_22453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (19))){
var inst_22379 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22421_22454 = state_22398__$1;
(statearr_22421_22454[(2)] = inst_22379);

(statearr_22421_22454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (11))){
var inst_22350 = (state_22398[(9)]);
var inst_22364 = (state_22398[(7)]);
var inst_22364__$1 = cljs.core.seq.call(null,inst_22350);
var state_22398__$1 = (function (){var statearr_22422 = state_22398;
(statearr_22422[(7)] = inst_22364__$1);

return statearr_22422;
})();
if(inst_22364__$1){
var statearr_22423_22455 = state_22398__$1;
(statearr_22423_22455[(1)] = (14));

} else {
var statearr_22424_22456 = state_22398__$1;
(statearr_22424_22456[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (9))){
var inst_22386 = (state_22398[(2)]);
var inst_22387 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22398__$1 = (function (){var statearr_22425 = state_22398;
(statearr_22425[(15)] = inst_22386);

return statearr_22425;
})();
if(cljs.core.truth_(inst_22387)){
var statearr_22426_22457 = state_22398__$1;
(statearr_22426_22457[(1)] = (21));

} else {
var statearr_22427_22458 = state_22398__$1;
(statearr_22427_22458[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (5))){
var inst_22342 = cljs.core.async.close_BANG_.call(null,out);
var state_22398__$1 = state_22398;
var statearr_22428_22459 = state_22398__$1;
(statearr_22428_22459[(2)] = inst_22342);

(statearr_22428_22459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (14))){
var inst_22364 = (state_22398[(7)]);
var inst_22366 = cljs.core.chunked_seq_QMARK_.call(null,inst_22364);
var state_22398__$1 = state_22398;
if(inst_22366){
var statearr_22429_22460 = state_22398__$1;
(statearr_22429_22460[(1)] = (17));

} else {
var statearr_22430_22461 = state_22398__$1;
(statearr_22430_22461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (16))){
var inst_22382 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22431_22462 = state_22398__$1;
(statearr_22431_22462[(2)] = inst_22382);

(statearr_22431_22462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (10))){
var inst_22351 = (state_22398[(8)]);
var inst_22353 = (state_22398[(11)]);
var inst_22358 = cljs.core._nth.call(null,inst_22351,inst_22353);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(13),out,inst_22358);
} else {
if((state_val_22399 === (18))){
var inst_22364 = (state_22398[(7)]);
var inst_22373 = cljs.core.first.call(null,inst_22364);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(20),out,inst_22373);
} else {
if((state_val_22399 === (8))){
var inst_22353 = (state_22398[(11)]);
var inst_22352 = (state_22398[(12)]);
var inst_22355 = (inst_22353 < inst_22352);
var inst_22356 = inst_22355;
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22356)){
var statearr_22432_22463 = state_22398__$1;
(statearr_22432_22463[(1)] = (10));

} else {
var statearr_22433_22464 = state_22398__$1;
(statearr_22433_22464[(1)] = (11));

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
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____0 = (function (){
var statearr_22437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22437[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__);

(statearr_22437[(1)] = (1));

return statearr_22437;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____1 = (function (state_22398){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22438){if((e22438 instanceof Object)){
var ex__19855__auto__ = e22438;
var statearr_22439_22465 = state_22398;
(statearr_22439_22465[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22466 = state_22398;
state_22398 = G__22466;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__ = function(state_22398){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____1.call(this,state_22398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_22440 = f__19964__auto__.call(null);
(statearr_22440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22467 = [];
var len__15861__auto___22470 = arguments.length;
var i__15862__auto___22471 = (0);
while(true){
if((i__15862__auto___22471 < len__15861__auto___22470)){
args22467.push((arguments[i__15862__auto___22471]));

var G__22472 = (i__15862__auto___22471 + (1));
i__15862__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var G__22469 = args22467.length;
switch (G__22469) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22467.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22474 = [];
var len__15861__auto___22477 = arguments.length;
var i__15862__auto___22478 = (0);
while(true){
if((i__15862__auto___22478 < len__15861__auto___22477)){
args22474.push((arguments[i__15862__auto___22478]));

var G__22479 = (i__15862__auto___22478 + (1));
i__15862__auto___22478 = G__22479;
continue;
} else {
}
break;
}

var G__22476 = args22474.length;
switch (G__22476) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22474.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22481 = [];
var len__15861__auto___22532 = arguments.length;
var i__15862__auto___22533 = (0);
while(true){
if((i__15862__auto___22533 < len__15861__auto___22532)){
args22481.push((arguments[i__15862__auto___22533]));

var G__22534 = (i__15862__auto___22533 + (1));
i__15862__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var G__22483 = args22481.length;
switch (G__22483) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22481.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22536,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22536,out){
return (function (state_22507){
var state_val_22508 = (state_22507[(1)]);
if((state_val_22508 === (7))){
var inst_22502 = (state_22507[(2)]);
var state_22507__$1 = state_22507;
var statearr_22509_22537 = state_22507__$1;
(statearr_22509_22537[(2)] = inst_22502);

(statearr_22509_22537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (1))){
var inst_22484 = null;
var state_22507__$1 = (function (){var statearr_22510 = state_22507;
(statearr_22510[(7)] = inst_22484);

return statearr_22510;
})();
var statearr_22511_22538 = state_22507__$1;
(statearr_22511_22538[(2)] = null);

(statearr_22511_22538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (4))){
var inst_22487 = (state_22507[(8)]);
var inst_22487__$1 = (state_22507[(2)]);
var inst_22488 = (inst_22487__$1 == null);
var inst_22489 = cljs.core.not.call(null,inst_22488);
var state_22507__$1 = (function (){var statearr_22512 = state_22507;
(statearr_22512[(8)] = inst_22487__$1);

return statearr_22512;
})();
if(inst_22489){
var statearr_22513_22539 = state_22507__$1;
(statearr_22513_22539[(1)] = (5));

} else {
var statearr_22514_22540 = state_22507__$1;
(statearr_22514_22540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (6))){
var state_22507__$1 = state_22507;
var statearr_22515_22541 = state_22507__$1;
(statearr_22515_22541[(2)] = null);

(statearr_22515_22541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (3))){
var inst_22504 = (state_22507[(2)]);
var inst_22505 = cljs.core.async.close_BANG_.call(null,out);
var state_22507__$1 = (function (){var statearr_22516 = state_22507;
(statearr_22516[(9)] = inst_22504);

return statearr_22516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22507__$1,inst_22505);
} else {
if((state_val_22508 === (2))){
var state_22507__$1 = state_22507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22507__$1,(4),ch);
} else {
if((state_val_22508 === (11))){
var inst_22487 = (state_22507[(8)]);
var inst_22496 = (state_22507[(2)]);
var inst_22484 = inst_22487;
var state_22507__$1 = (function (){var statearr_22517 = state_22507;
(statearr_22517[(10)] = inst_22496);

(statearr_22517[(7)] = inst_22484);

return statearr_22517;
})();
var statearr_22518_22542 = state_22507__$1;
(statearr_22518_22542[(2)] = null);

(statearr_22518_22542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (9))){
var inst_22487 = (state_22507[(8)]);
var state_22507__$1 = state_22507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22507__$1,(11),out,inst_22487);
} else {
if((state_val_22508 === (5))){
var inst_22487 = (state_22507[(8)]);
var inst_22484 = (state_22507[(7)]);
var inst_22491 = cljs.core._EQ_.call(null,inst_22487,inst_22484);
var state_22507__$1 = state_22507;
if(inst_22491){
var statearr_22520_22543 = state_22507__$1;
(statearr_22520_22543[(1)] = (8));

} else {
var statearr_22521_22544 = state_22507__$1;
(statearr_22521_22544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (10))){
var inst_22499 = (state_22507[(2)]);
var state_22507__$1 = state_22507;
var statearr_22522_22545 = state_22507__$1;
(statearr_22522_22545[(2)] = inst_22499);

(statearr_22522_22545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22508 === (8))){
var inst_22484 = (state_22507[(7)]);
var tmp22519 = inst_22484;
var inst_22484__$1 = tmp22519;
var state_22507__$1 = (function (){var statearr_22523 = state_22507;
(statearr_22523[(7)] = inst_22484__$1);

return statearr_22523;
})();
var statearr_22524_22546 = state_22507__$1;
(statearr_22524_22546[(2)] = null);

(statearr_22524_22546[(1)] = (2));


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
});})(c__19963__auto___22536,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22536,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22528[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22528[(1)] = (1));

return statearr_22528;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22507){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22529){if((e22529 instanceof Object)){
var ex__19855__auto__ = e22529;
var statearr_22530_22547 = state_22507;
(statearr_22530_22547[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22548 = state_22507;
state_22507 = G__22548;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22536,out))
})();
var state__19965__auto__ = (function (){var statearr_22531 = f__19964__auto__.call(null);
(statearr_22531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22536);

return statearr_22531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22536,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22549 = [];
var len__15861__auto___22619 = arguments.length;
var i__15862__auto___22620 = (0);
while(true){
if((i__15862__auto___22620 < len__15861__auto___22619)){
args22549.push((arguments[i__15862__auto___22620]));

var G__22621 = (i__15862__auto___22620 + (1));
i__15862__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var G__22551 = args22549.length;
switch (G__22551) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22549.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22623,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22623,out){
return (function (state_22589){
var state_val_22590 = (state_22589[(1)]);
if((state_val_22590 === (7))){
var inst_22585 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
var statearr_22591_22624 = state_22589__$1;
(statearr_22591_22624[(2)] = inst_22585);

(statearr_22591_22624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (1))){
var inst_22552 = (new Array(n));
var inst_22553 = inst_22552;
var inst_22554 = (0);
var state_22589__$1 = (function (){var statearr_22592 = state_22589;
(statearr_22592[(7)] = inst_22553);

(statearr_22592[(8)] = inst_22554);

return statearr_22592;
})();
var statearr_22593_22625 = state_22589__$1;
(statearr_22593_22625[(2)] = null);

(statearr_22593_22625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (4))){
var inst_22557 = (state_22589[(9)]);
var inst_22557__$1 = (state_22589[(2)]);
var inst_22558 = (inst_22557__$1 == null);
var inst_22559 = cljs.core.not.call(null,inst_22558);
var state_22589__$1 = (function (){var statearr_22594 = state_22589;
(statearr_22594[(9)] = inst_22557__$1);

return statearr_22594;
})();
if(inst_22559){
var statearr_22595_22626 = state_22589__$1;
(statearr_22595_22626[(1)] = (5));

} else {
var statearr_22596_22627 = state_22589__$1;
(statearr_22596_22627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (15))){
var inst_22579 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
var statearr_22597_22628 = state_22589__$1;
(statearr_22597_22628[(2)] = inst_22579);

(statearr_22597_22628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (13))){
var state_22589__$1 = state_22589;
var statearr_22598_22629 = state_22589__$1;
(statearr_22598_22629[(2)] = null);

(statearr_22598_22629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (6))){
var inst_22554 = (state_22589[(8)]);
var inst_22575 = (inst_22554 > (0));
var state_22589__$1 = state_22589;
if(cljs.core.truth_(inst_22575)){
var statearr_22599_22630 = state_22589__$1;
(statearr_22599_22630[(1)] = (12));

} else {
var statearr_22600_22631 = state_22589__$1;
(statearr_22600_22631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (3))){
var inst_22587 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22589__$1,inst_22587);
} else {
if((state_val_22590 === (12))){
var inst_22553 = (state_22589[(7)]);
var inst_22577 = cljs.core.vec.call(null,inst_22553);
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22589__$1,(15),out,inst_22577);
} else {
if((state_val_22590 === (2))){
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22589__$1,(4),ch);
} else {
if((state_val_22590 === (11))){
var inst_22569 = (state_22589[(2)]);
var inst_22570 = (new Array(n));
var inst_22553 = inst_22570;
var inst_22554 = (0);
var state_22589__$1 = (function (){var statearr_22601 = state_22589;
(statearr_22601[(7)] = inst_22553);

(statearr_22601[(10)] = inst_22569);

(statearr_22601[(8)] = inst_22554);

return statearr_22601;
})();
var statearr_22602_22632 = state_22589__$1;
(statearr_22602_22632[(2)] = null);

(statearr_22602_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (9))){
var inst_22553 = (state_22589[(7)]);
var inst_22567 = cljs.core.vec.call(null,inst_22553);
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22589__$1,(11),out,inst_22567);
} else {
if((state_val_22590 === (5))){
var inst_22553 = (state_22589[(7)]);
var inst_22562 = (state_22589[(11)]);
var inst_22557 = (state_22589[(9)]);
var inst_22554 = (state_22589[(8)]);
var inst_22561 = (inst_22553[inst_22554] = inst_22557);
var inst_22562__$1 = (inst_22554 + (1));
var inst_22563 = (inst_22562__$1 < n);
var state_22589__$1 = (function (){var statearr_22603 = state_22589;
(statearr_22603[(12)] = inst_22561);

(statearr_22603[(11)] = inst_22562__$1);

return statearr_22603;
})();
if(cljs.core.truth_(inst_22563)){
var statearr_22604_22633 = state_22589__$1;
(statearr_22604_22633[(1)] = (8));

} else {
var statearr_22605_22634 = state_22589__$1;
(statearr_22605_22634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (14))){
var inst_22582 = (state_22589[(2)]);
var inst_22583 = cljs.core.async.close_BANG_.call(null,out);
var state_22589__$1 = (function (){var statearr_22607 = state_22589;
(statearr_22607[(13)] = inst_22582);

return statearr_22607;
})();
var statearr_22608_22635 = state_22589__$1;
(statearr_22608_22635[(2)] = inst_22583);

(statearr_22608_22635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (10))){
var inst_22573 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
var statearr_22609_22636 = state_22589__$1;
(statearr_22609_22636[(2)] = inst_22573);

(statearr_22609_22636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (8))){
var inst_22553 = (state_22589[(7)]);
var inst_22562 = (state_22589[(11)]);
var tmp22606 = inst_22553;
var inst_22553__$1 = tmp22606;
var inst_22554 = inst_22562;
var state_22589__$1 = (function (){var statearr_22610 = state_22589;
(statearr_22610[(7)] = inst_22553__$1);

(statearr_22610[(8)] = inst_22554);

return statearr_22610;
})();
var statearr_22611_22637 = state_22589__$1;
(statearr_22611_22637[(2)] = null);

(statearr_22611_22637[(1)] = (2));


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
});})(c__19963__auto___22623,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22623,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22615[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22615[(1)] = (1));

return statearr_22615;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22589){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22616){if((e22616 instanceof Object)){
var ex__19855__auto__ = e22616;
var statearr_22617_22638 = state_22589;
(statearr_22617_22638[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22639 = state_22589;
state_22589 = G__22639;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22623,out))
})();
var state__19965__auto__ = (function (){var statearr_22618 = f__19964__auto__.call(null);
(statearr_22618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22623);

return statearr_22618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22623,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22640 = [];
var len__15861__auto___22714 = arguments.length;
var i__15862__auto___22715 = (0);
while(true){
if((i__15862__auto___22715 < len__15861__auto___22714)){
args22640.push((arguments[i__15862__auto___22715]));

var G__22716 = (i__15862__auto___22715 + (1));
i__15862__auto___22715 = G__22716;
continue;
} else {
}
break;
}

var G__22642 = args22640.length;
switch (G__22642) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22640.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19963__auto___22718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___22718,out){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___22718,out){
return (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22680 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22686_22719 = state_22684__$1;
(statearr_22686_22719[(2)] = inst_22680);

(statearr_22686_22719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var inst_22643 = [];
var inst_22644 = inst_22643;
var inst_22645 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22684__$1 = (function (){var statearr_22687 = state_22684;
(statearr_22687[(7)] = inst_22644);

(statearr_22687[(8)] = inst_22645);

return statearr_22687;
})();
var statearr_22688_22720 = state_22684__$1;
(statearr_22688_22720[(2)] = null);

(statearr_22688_22720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22648 = (state_22684[(9)]);
var inst_22648__$1 = (state_22684[(2)]);
var inst_22649 = (inst_22648__$1 == null);
var inst_22650 = cljs.core.not.call(null,inst_22649);
var state_22684__$1 = (function (){var statearr_22689 = state_22684;
(statearr_22689[(9)] = inst_22648__$1);

return statearr_22689;
})();
if(inst_22650){
var statearr_22690_22721 = state_22684__$1;
(statearr_22690_22721[(1)] = (5));

} else {
var statearr_22691_22722 = state_22684__$1;
(statearr_22691_22722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (15))){
var inst_22674 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22692_22723 = state_22684__$1;
(statearr_22692_22723[(2)] = inst_22674);

(statearr_22692_22723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (13))){
var state_22684__$1 = state_22684;
var statearr_22693_22724 = state_22684__$1;
(statearr_22693_22724[(2)] = null);

(statearr_22693_22724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var inst_22644 = (state_22684[(7)]);
var inst_22669 = inst_22644.length;
var inst_22670 = (inst_22669 > (0));
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22670)){
var statearr_22694_22725 = state_22684__$1;
(statearr_22694_22725[(1)] = (12));

} else {
var statearr_22695_22726 = state_22684__$1;
(statearr_22695_22726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (3))){
var inst_22682 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (12))){
var inst_22644 = (state_22684[(7)]);
var inst_22672 = cljs.core.vec.call(null,inst_22644);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(15),out,inst_22672);
} else {
if((state_val_22685 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22684__$1,(4),ch);
} else {
if((state_val_22685 === (11))){
var inst_22648 = (state_22684[(9)]);
var inst_22652 = (state_22684[(10)]);
var inst_22662 = (state_22684[(2)]);
var inst_22663 = [];
var inst_22664 = inst_22663.push(inst_22648);
var inst_22644 = inst_22663;
var inst_22645 = inst_22652;
var state_22684__$1 = (function (){var statearr_22696 = state_22684;
(statearr_22696[(11)] = inst_22664);

(statearr_22696[(7)] = inst_22644);

(statearr_22696[(12)] = inst_22662);

(statearr_22696[(8)] = inst_22645);

return statearr_22696;
})();
var statearr_22697_22727 = state_22684__$1;
(statearr_22697_22727[(2)] = null);

(statearr_22697_22727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (9))){
var inst_22644 = (state_22684[(7)]);
var inst_22660 = cljs.core.vec.call(null,inst_22644);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(11),out,inst_22660);
} else {
if((state_val_22685 === (5))){
var inst_22648 = (state_22684[(9)]);
var inst_22652 = (state_22684[(10)]);
var inst_22645 = (state_22684[(8)]);
var inst_22652__$1 = f.call(null,inst_22648);
var inst_22653 = cljs.core._EQ_.call(null,inst_22652__$1,inst_22645);
var inst_22654 = cljs.core.keyword_identical_QMARK_.call(null,inst_22645,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22655 = (inst_22653) || (inst_22654);
var state_22684__$1 = (function (){var statearr_22698 = state_22684;
(statearr_22698[(10)] = inst_22652__$1);

return statearr_22698;
})();
if(cljs.core.truth_(inst_22655)){
var statearr_22699_22728 = state_22684__$1;
(statearr_22699_22728[(1)] = (8));

} else {
var statearr_22700_22729 = state_22684__$1;
(statearr_22700_22729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (14))){
var inst_22677 = (state_22684[(2)]);
var inst_22678 = cljs.core.async.close_BANG_.call(null,out);
var state_22684__$1 = (function (){var statearr_22702 = state_22684;
(statearr_22702[(13)] = inst_22677);

return statearr_22702;
})();
var statearr_22703_22730 = state_22684__$1;
(statearr_22703_22730[(2)] = inst_22678);

(statearr_22703_22730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (10))){
var inst_22667 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22704_22731 = state_22684__$1;
(statearr_22704_22731[(2)] = inst_22667);

(statearr_22704_22731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22648 = (state_22684[(9)]);
var inst_22652 = (state_22684[(10)]);
var inst_22644 = (state_22684[(7)]);
var inst_22657 = inst_22644.push(inst_22648);
var tmp22701 = inst_22644;
var inst_22644__$1 = tmp22701;
var inst_22645 = inst_22652;
var state_22684__$1 = (function (){var statearr_22705 = state_22684;
(statearr_22705[(14)] = inst_22657);

(statearr_22705[(7)] = inst_22644__$1);

(statearr_22705[(8)] = inst_22645);

return statearr_22705;
})();
var statearr_22706_22732 = state_22684__$1;
(statearr_22706_22732[(2)] = null);

(statearr_22706_22732[(1)] = (2));


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
});})(c__19963__auto___22718,out))
;
return ((function (switch__19851__auto__,c__19963__auto___22718,out){
return (function() {
var cljs$core$async$state_machine__19852__auto__ = null;
var cljs$core$async$state_machine__19852__auto____0 = (function (){
var statearr_22710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22710[(0)] = cljs$core$async$state_machine__19852__auto__);

(statearr_22710[(1)] = (1));

return statearr_22710;
});
var cljs$core$async$state_machine__19852__auto____1 = (function (state_22684){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_22684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e22711){if((e22711 instanceof Object)){
var ex__19855__auto__ = e22711;
var statearr_22712_22733 = state_22684;
(statearr_22712_22733[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22734 = state_22684;
state_22684 = G__22734;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
cljs$core$async$state_machine__19852__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19852__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19852__auto____0;
cljs$core$async$state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19852__auto____1;
return cljs$core$async$state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___22718,out))
})();
var state__19965__auto__ = (function (){var statearr_22713 = f__19964__auto__.call(null);
(statearr_22713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___22718);

return statearr_22713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___22718,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map