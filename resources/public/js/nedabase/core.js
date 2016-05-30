// Compiled by ClojureScript 1.7.170 {}
goog.provide('nedabase.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
nedabase.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
/**
 * @constructor
 */
nedabase.core.Counter = (function nedabase$core$Counter(){
var this__16942__auto__ = this;
React.Component.apply(this__16942__auto__,arguments);

if(!((this__16942__auto__.initLocalState == null))){
this__16942__auto__.state = this__16942__auto__.initLocalState();
} else {
this__16942__auto__.state = {};
}

return this__16942__auto__;
});

nedabase.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x18138_18150 = nedabase.core.Counter.prototype;
x18138_18150.componentWillUpdate = ((function (x18138_18150){
return (function (next_props__16878__auto__,next_state__16879__auto__){
var this__16877__auto__ = this;
if(((!((this__16877__auto__ == null)))?(((false) || (this__16877__auto__.om$next$Ident$))?true:false):false)){
var ident__16881__auto___18151 = om.next.ident.call(null,this__16877__auto__,om.next.props.call(null,this__16877__auto__));
var next_ident__16882__auto___18152 = om.next.ident.call(null,this__16877__auto__,om.next._next_props.call(null,next_props__16878__auto__,this__16877__auto__));
if(cljs.core.not_EQ_.call(null,ident__16881__auto___18151,next_ident__16882__auto___18152)){
var idxr__16883__auto___18153 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16877__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16883__auto___18153 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16883__auto___18153),((function (idxr__16883__auto___18153,ident__16881__auto___18151,next_ident__16882__auto___18152,this__16877__auto__,x18138_18150){
return (function (indexes__16884__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16884__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16881__auto___18151], null),cljs.core.disj,this__16877__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16882__auto___18152], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16877__auto__);
});})(idxr__16883__auto___18153,ident__16881__auto___18151,next_ident__16882__auto___18152,this__16877__auto__,x18138_18150))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16877__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16877__auto__);
});})(x18138_18150))
;

x18138_18150.shouldComponentUpdate = ((function (x18138_18150){
return (function (next_props__16878__auto__,next_state__16879__auto__){
var this__16877__auto__ = this;
var next_children__16880__auto__ = next_props__16878__auto__.children;
var next_props__16878__auto____$1 = goog.object.get(next_props__16878__auto__,"omcljs$value");
var next_props__16878__auto____$2 = (function (){var G__18140 = next_props__16878__auto____$1;
if((next_props__16878__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18140);
} else {
return G__18140;
}
})();
var or__14803__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16877__auto__),next_props__16878__auto____$2);
if(or__14803__auto__){
return or__14803__auto__;
} else {
var or__14803__auto____$1 = (function (){var and__14791__auto__ = this__16877__auto__.state;
if(cljs.core.truth_(and__14791__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16877__auto__.state,"omcljs$state"),goog.object.get(next_state__16879__auto__,"omcljs$state"));
} else {
return and__14791__auto__;
}
})();
if(cljs.core.truth_(or__14803__auto____$1)){
return or__14803__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16877__auto__.props.children,next_children__16880__auto__);
}
}
});})(x18138_18150))
;

x18138_18150.componentWillUnmount = ((function (x18138_18150){
return (function (){
var this__16877__auto__ = this;
var r__16888__auto__ = om.next.get_reconciler.call(null,this__16877__auto__);
var cfg__16889__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16888__auto__);
var st__16890__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16889__auto__);
var indexer__16887__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16889__auto__);
if(cljs.core.truth_((function (){var and__14791__auto__ = !((st__16890__auto__ == null));
if(and__14791__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16890__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16877__auto__], null));
} else {
return and__14791__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16890__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16877__auto__);
} else {
}

if((indexer__16887__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16887__auto__,this__16877__auto__);
}
});})(x18138_18150))
;

x18138_18150.componentDidUpdate = ((function (x18138_18150){
return (function (prev_props__16885__auto__,prev_state__16886__auto__){
var this__16877__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16877__auto__);
});})(x18138_18150))
;

x18138_18150.isMounted = ((function (x18138_18150){
return (function (){
var this__16877__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16877__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18138_18150))
;

x18138_18150.componentWillMount = ((function (x18138_18150){
return (function (){
var this__16877__auto__ = this;
var indexer__16887__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16877__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16887__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16887__auto__,this__16877__auto__);
}
});})(x18138_18150))
;

x18138_18150.render = ((function (x18138_18150){
return (function (){
var this__16876__auto__ = this;
var this$ = this__16876__auto__;
var _STAR_reconciler_STAR_18141 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18142 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18143 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18144 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18145 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16876__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16876__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16876__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16876__auto__);

om.next._STAR_parent_STAR_ = this__16876__auto__;

try{var map__18146 = om.next.props.call(null,this$);
var map__18146__$1 = ((((!((map__18146 == null)))?((((map__18146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18146):map__18146);
var count = cljs.core.get.call(null,map__18146__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__18146,map__18146__$1,count,_STAR_reconciler_STAR_18141,_STAR_depth_STAR_18142,_STAR_shared_STAR_18143,_STAR_instrument_STAR_18144,_STAR_parent_STAR_18145,this$,this__16876__auto__,x18138_18150){
return (function (e){
return cljs.core.swap_BANG_.call(null,nedabase.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__18146,map__18146__$1,count,_STAR_reconciler_STAR_18141,_STAR_depth_STAR_18142,_STAR_shared_STAR_18143,_STAR_instrument_STAR_18144,_STAR_parent_STAR_18145,this$,this__16876__auto__,x18138_18150))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18145;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18144;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18143;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18142;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18141;
}});})(x18138_18150))
;


nedabase.core.Counter.prototype.constructor = nedabase.core.Counter;

nedabase.core.Counter.prototype.constructor.displayName = "nedabase.core/Counter";

nedabase.core.Counter.prototype.om$isComponent = true;

var x18148_18154 = nedabase.core.Counter;


var x18149_18155 = nedabase.core.Counter.prototype;


nedabase.core.Counter.cljs$lang$type = true;

nedabase.core.Counter.cljs$lang$ctorStr = "nedabase.core/Counter";

nedabase.core.Counter.cljs$lang$ctorPrWriter = (function (this__16944__auto__,writer__16945__auto__,opt__16946__auto__){
return cljs.core._write.call(null,writer__16945__auto__,"nedabase.core/Counter");
});
nedabase.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),nedabase.core.app_state], null));
om.next.add_root_BANG_.call(null,nedabase.core.reconciler,nedabase.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map