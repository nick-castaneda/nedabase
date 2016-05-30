// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24300 = cljs.core._EQ_;
var expr__24301 = (function (){var or__14803__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24300.call(null,"true",expr__24301))){
return true;
} else {
if(cljs.core.truth_(pred__24300.call(null,"false",expr__24301))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24301)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24303__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24304__i = 0, G__24304__a = new Array(arguments.length -  0);
while (G__24304__i < G__24304__a.length) {G__24304__a[G__24304__i] = arguments[G__24304__i + 0]; ++G__24304__i;}
  args = new cljs.core.IndexedSeq(G__24304__a,0);
} 
return G__24303__delegate.call(this,args);};
G__24303.cljs$lang$maxFixedArity = 0;
G__24303.cljs$lang$applyTo = (function (arglist__24305){
var args = cljs.core.seq(arglist__24305);
return G__24303__delegate(args);
});
G__24303.cljs$core$IFn$_invoke$arity$variadic = G__24303__delegate;
return G__24303;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24306){
var map__24309 = p__24306;
var map__24309__$1 = ((((!((map__24309 == null)))?((((map__24309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);
var message = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__14803__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__14791__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__14791__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__14791__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19963__auto___24471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___24471,ch){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___24471,ch){
return (function (state_24440){
var state_val_24441 = (state_24440[(1)]);
if((state_val_24441 === (7))){
var inst_24436 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24442_24472 = state_24440__$1;
(statearr_24442_24472[(2)] = inst_24436);

(statearr_24442_24472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (1))){
var state_24440__$1 = state_24440;
var statearr_24443_24473 = state_24440__$1;
(statearr_24443_24473[(2)] = null);

(statearr_24443_24473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (4))){
var inst_24393 = (state_24440[(7)]);
var inst_24393__$1 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24444 = state_24440;
(statearr_24444[(7)] = inst_24393__$1);

return statearr_24444;
})();
if(cljs.core.truth_(inst_24393__$1)){
var statearr_24445_24474 = state_24440__$1;
(statearr_24445_24474[(1)] = (5));

} else {
var statearr_24446_24475 = state_24440__$1;
(statearr_24446_24475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (15))){
var inst_24400 = (state_24440[(8)]);
var inst_24415 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24400);
var inst_24416 = cljs.core.first.call(null,inst_24415);
var inst_24417 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24416);
var inst_24418 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24417)].join('');
var inst_24419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24418);
var state_24440__$1 = state_24440;
var statearr_24447_24476 = state_24440__$1;
(statearr_24447_24476[(2)] = inst_24419);

(statearr_24447_24476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (13))){
var inst_24424 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24448_24477 = state_24440__$1;
(statearr_24448_24477[(2)] = inst_24424);

(statearr_24448_24477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (6))){
var state_24440__$1 = state_24440;
var statearr_24449_24478 = state_24440__$1;
(statearr_24449_24478[(2)] = null);

(statearr_24449_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (17))){
var inst_24422 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24450_24479 = state_24440__$1;
(statearr_24450_24479[(2)] = inst_24422);

(statearr_24450_24479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (3))){
var inst_24438 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24440__$1,inst_24438);
} else {
if((state_val_24441 === (12))){
var inst_24399 = (state_24440[(9)]);
var inst_24413 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24399,opts);
var state_24440__$1 = state_24440;
if(cljs.core.truth_(inst_24413)){
var statearr_24451_24480 = state_24440__$1;
(statearr_24451_24480[(1)] = (15));

} else {
var statearr_24452_24481 = state_24440__$1;
(statearr_24452_24481[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (2))){
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24440__$1,(4),ch);
} else {
if((state_val_24441 === (11))){
var inst_24400 = (state_24440[(8)]);
var inst_24405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24406 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24400);
var inst_24407 = cljs.core.async.timeout.call(null,(1000));
var inst_24408 = [inst_24406,inst_24407];
var inst_24409 = (new cljs.core.PersistentVector(null,2,(5),inst_24405,inst_24408,null));
var state_24440__$1 = state_24440;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24440__$1,(14),inst_24409);
} else {
if((state_val_24441 === (9))){
var inst_24400 = (state_24440[(8)]);
var inst_24426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24427 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24400);
var inst_24428 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24427);
var inst_24429 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24428)].join('');
var inst_24430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24429);
var state_24440__$1 = (function (){var statearr_24453 = state_24440;
(statearr_24453[(10)] = inst_24426);

return statearr_24453;
})();
var statearr_24454_24482 = state_24440__$1;
(statearr_24454_24482[(2)] = inst_24430);

(statearr_24454_24482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (5))){
var inst_24393 = (state_24440[(7)]);
var inst_24395 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24396 = (new cljs.core.PersistentArrayMap(null,2,inst_24395,null));
var inst_24397 = (new cljs.core.PersistentHashSet(null,inst_24396,null));
var inst_24398 = figwheel.client.focus_msgs.call(null,inst_24397,inst_24393);
var inst_24399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24398);
var inst_24400 = cljs.core.first.call(null,inst_24398);
var inst_24401 = figwheel.client.autoload_QMARK_.call(null);
var state_24440__$1 = (function (){var statearr_24455 = state_24440;
(statearr_24455[(8)] = inst_24400);

(statearr_24455[(9)] = inst_24399);

return statearr_24455;
})();
if(cljs.core.truth_(inst_24401)){
var statearr_24456_24483 = state_24440__$1;
(statearr_24456_24483[(1)] = (8));

} else {
var statearr_24457_24484 = state_24440__$1;
(statearr_24457_24484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (14))){
var inst_24411 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24458_24485 = state_24440__$1;
(statearr_24458_24485[(2)] = inst_24411);

(statearr_24458_24485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (16))){
var state_24440__$1 = state_24440;
var statearr_24459_24486 = state_24440__$1;
(statearr_24459_24486[(2)] = null);

(statearr_24459_24486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (10))){
var inst_24432 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24460 = state_24440;
(statearr_24460[(11)] = inst_24432);

return statearr_24460;
})();
var statearr_24461_24487 = state_24440__$1;
(statearr_24461_24487[(2)] = null);

(statearr_24461_24487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (8))){
var inst_24399 = (state_24440[(9)]);
var inst_24403 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24399,opts);
var state_24440__$1 = state_24440;
if(cljs.core.truth_(inst_24403)){
var statearr_24462_24488 = state_24440__$1;
(statearr_24462_24488[(1)] = (11));

} else {
var statearr_24463_24489 = state_24440__$1;
(statearr_24463_24489[(1)] = (12));

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
});})(c__19963__auto___24471,ch))
;
return ((function (switch__19851__auto__,c__19963__auto___24471,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____0 = (function (){
var statearr_24467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24467[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__);

(statearr_24467[(1)] = (1));

return statearr_24467;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____1 = (function (state_24440){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24468){if((e24468 instanceof Object)){
var ex__19855__auto__ = e24468;
var statearr_24469_24490 = state_24440;
(statearr_24469_24490[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24440;
state_24440 = G__24491;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__ = function(state_24440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____1.call(this,state_24440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19852__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___24471,ch))
})();
var state__19965__auto__ = (function (){var statearr_24470 = f__19964__auto__.call(null);
(statearr_24470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___24471);

return statearr_24470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___24471,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24492_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24492_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24499 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24499){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24497 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24498 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24497,_STAR_print_newline_STAR_24498,base_path_24499){
return (function() { 
var G__24500__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24501__i = 0, G__24501__a = new Array(arguments.length -  0);
while (G__24501__i < G__24501__a.length) {G__24501__a[G__24501__i] = arguments[G__24501__i + 0]; ++G__24501__i;}
  args = new cljs.core.IndexedSeq(G__24501__a,0);
} 
return G__24500__delegate.call(this,args);};
G__24500.cljs$lang$maxFixedArity = 0;
G__24500.cljs$lang$applyTo = (function (arglist__24502){
var args = cljs.core.seq(arglist__24502);
return G__24500__delegate(args);
});
G__24500.cljs$core$IFn$_invoke$arity$variadic = G__24500__delegate;
return G__24500;
})()
;})(_STAR_print_fn_STAR_24497,_STAR_print_newline_STAR_24498,base_path_24499))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24498;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24497;
}}catch (e24496){if((e24496 instanceof Error)){
var e = e24496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24499], null));
} else {
var e = e24496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24499))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24503){
var map__24510 = p__24503;
var map__24510__$1 = ((((!((map__24510 == null)))?((((map__24510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24510):map__24510);
var opts = map__24510__$1;
var build_id = cljs.core.get.call(null,map__24510__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24510,map__24510__$1,opts,build_id){
return (function (p__24512){
var vec__24513 = p__24512;
var map__24514 = cljs.core.nth.call(null,vec__24513,(0),null);
var map__24514__$1 = ((((!((map__24514 == null)))?((((map__24514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24514):map__24514);
var msg = map__24514__$1;
var msg_name = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24513,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24513,map__24514,map__24514__$1,msg,msg_name,_,map__24510,map__24510__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24513,map__24514,map__24514__$1,msg,msg_name,_,map__24510,map__24510__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24510,map__24510__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24520){
var vec__24521 = p__24520;
var map__24522 = cljs.core.nth.call(null,vec__24521,(0),null);
var map__24522__$1 = ((((!((map__24522 == null)))?((((map__24522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24522):map__24522);
var msg = map__24522__$1;
var msg_name = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24521,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24524){
var map__24534 = p__24524;
var map__24534__$1 = ((((!((map__24534 == null)))?((((map__24534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24534):map__24534);
var on_compile_warning = cljs.core.get.call(null,map__24534__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24534__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24534,map__24534__$1,on_compile_warning,on_compile_fail){
return (function (p__24536){
var vec__24537 = p__24536;
var map__24538 = cljs.core.nth.call(null,vec__24537,(0),null);
var map__24538__$1 = ((((!((map__24538 == null)))?((((map__24538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24538):map__24538);
var msg = map__24538__$1;
var msg_name = cljs.core.get.call(null,map__24538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24537,(1));
var pred__24540 = cljs.core._EQ_;
var expr__24541 = msg_name;
if(cljs.core.truth_(pred__24540.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24541))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24540.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24541))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24534,map__24534__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__,msg_hist,msg_names,msg){
return (function (state_24757){
var state_val_24758 = (state_24757[(1)]);
if((state_val_24758 === (7))){
var inst_24681 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24681)){
var statearr_24759_24805 = state_24757__$1;
(statearr_24759_24805[(1)] = (8));

} else {
var statearr_24760_24806 = state_24757__$1;
(statearr_24760_24806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (20))){
var inst_24751 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24761_24807 = state_24757__$1;
(statearr_24761_24807[(2)] = inst_24751);

(statearr_24761_24807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (27))){
var inst_24747 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24762_24808 = state_24757__$1;
(statearr_24762_24808[(2)] = inst_24747);

(statearr_24762_24808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (1))){
var inst_24674 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24674)){
var statearr_24763_24809 = state_24757__$1;
(statearr_24763_24809[(1)] = (2));

} else {
var statearr_24764_24810 = state_24757__$1;
(statearr_24764_24810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (24))){
var inst_24749 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24765_24811 = state_24757__$1;
(statearr_24765_24811[(2)] = inst_24749);

(statearr_24765_24811[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (4))){
var inst_24755 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24757__$1,inst_24755);
} else {
if((state_val_24758 === (15))){
var inst_24753 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24766_24812 = state_24757__$1;
(statearr_24766_24812[(2)] = inst_24753);

(statearr_24766_24812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (21))){
var inst_24712 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24767_24813 = state_24757__$1;
(statearr_24767_24813[(2)] = inst_24712);

(statearr_24767_24813[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (31))){
var inst_24736 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24736)){
var statearr_24768_24814 = state_24757__$1;
(statearr_24768_24814[(1)] = (34));

} else {
var statearr_24769_24815 = state_24757__$1;
(statearr_24769_24815[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (32))){
var inst_24745 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24770_24816 = state_24757__$1;
(statearr_24770_24816[(2)] = inst_24745);

(statearr_24770_24816[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (33))){
var inst_24734 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24771_24817 = state_24757__$1;
(statearr_24771_24817[(2)] = inst_24734);

(statearr_24771_24817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (13))){
var inst_24695 = figwheel.client.heads_up.clear.call(null);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(16),inst_24695);
} else {
if((state_val_24758 === (22))){
var inst_24716 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24717 = figwheel.client.heads_up.append_message.call(null,inst_24716);
var state_24757__$1 = state_24757;
var statearr_24772_24818 = state_24757__$1;
(statearr_24772_24818[(2)] = inst_24717);

(statearr_24772_24818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (36))){
var inst_24743 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24773_24819 = state_24757__$1;
(statearr_24773_24819[(2)] = inst_24743);

(statearr_24773_24819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (29))){
var inst_24727 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24774_24820 = state_24757__$1;
(statearr_24774_24820[(2)] = inst_24727);

(statearr_24774_24820[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (6))){
var inst_24676 = (state_24757[(7)]);
var state_24757__$1 = state_24757;
var statearr_24775_24821 = state_24757__$1;
(statearr_24775_24821[(2)] = inst_24676);

(statearr_24775_24821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (28))){
var inst_24723 = (state_24757[(2)]);
var inst_24724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24725 = figwheel.client.heads_up.display_warning.call(null,inst_24724);
var state_24757__$1 = (function (){var statearr_24776 = state_24757;
(statearr_24776[(8)] = inst_24723);

return statearr_24776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(29),inst_24725);
} else {
if((state_val_24758 === (25))){
var inst_24721 = figwheel.client.heads_up.clear.call(null);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(28),inst_24721);
} else {
if((state_val_24758 === (34))){
var inst_24738 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(37),inst_24738);
} else {
if((state_val_24758 === (17))){
var inst_24703 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24777_24822 = state_24757__$1;
(statearr_24777_24822[(2)] = inst_24703);

(statearr_24777_24822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (3))){
var inst_24693 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24693)){
var statearr_24778_24823 = state_24757__$1;
(statearr_24778_24823[(1)] = (13));

} else {
var statearr_24779_24824 = state_24757__$1;
(statearr_24779_24824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (12))){
var inst_24689 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24780_24825 = state_24757__$1;
(statearr_24780_24825[(2)] = inst_24689);

(statearr_24780_24825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (2))){
var inst_24676 = (state_24757[(7)]);
var inst_24676__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24757__$1 = (function (){var statearr_24781 = state_24757;
(statearr_24781[(7)] = inst_24676__$1);

return statearr_24781;
})();
if(cljs.core.truth_(inst_24676__$1)){
var statearr_24782_24826 = state_24757__$1;
(statearr_24782_24826[(1)] = (5));

} else {
var statearr_24783_24827 = state_24757__$1;
(statearr_24783_24827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (23))){
var inst_24719 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24719)){
var statearr_24784_24828 = state_24757__$1;
(statearr_24784_24828[(1)] = (25));

} else {
var statearr_24785_24829 = state_24757__$1;
(statearr_24785_24829[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (35))){
var state_24757__$1 = state_24757;
var statearr_24786_24830 = state_24757__$1;
(statearr_24786_24830[(2)] = null);

(statearr_24786_24830[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (19))){
var inst_24714 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24714)){
var statearr_24787_24831 = state_24757__$1;
(statearr_24787_24831[(1)] = (22));

} else {
var statearr_24788_24832 = state_24757__$1;
(statearr_24788_24832[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (11))){
var inst_24685 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24789_24833 = state_24757__$1;
(statearr_24789_24833[(2)] = inst_24685);

(statearr_24789_24833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (9))){
var inst_24687 = figwheel.client.heads_up.clear.call(null);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(12),inst_24687);
} else {
if((state_val_24758 === (5))){
var inst_24678 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24757__$1 = state_24757;
var statearr_24790_24834 = state_24757__$1;
(statearr_24790_24834[(2)] = inst_24678);

(statearr_24790_24834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (14))){
var inst_24705 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24705)){
var statearr_24791_24835 = state_24757__$1;
(statearr_24791_24835[(1)] = (18));

} else {
var statearr_24792_24836 = state_24757__$1;
(statearr_24792_24836[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (26))){
var inst_24729 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24729)){
var statearr_24793_24837 = state_24757__$1;
(statearr_24793_24837[(1)] = (30));

} else {
var statearr_24794_24838 = state_24757__$1;
(statearr_24794_24838[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (16))){
var inst_24697 = (state_24757[(2)]);
var inst_24698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24699 = figwheel.client.format_messages.call(null,inst_24698);
var inst_24700 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24701 = figwheel.client.heads_up.display_error.call(null,inst_24699,inst_24700);
var state_24757__$1 = (function (){var statearr_24795 = state_24757;
(statearr_24795[(9)] = inst_24697);

return statearr_24795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(17),inst_24701);
} else {
if((state_val_24758 === (30))){
var inst_24731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24732 = figwheel.client.heads_up.display_warning.call(null,inst_24731);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(33),inst_24732);
} else {
if((state_val_24758 === (10))){
var inst_24691 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24796_24839 = state_24757__$1;
(statearr_24796_24839[(2)] = inst_24691);

(statearr_24796_24839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (18))){
var inst_24707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24708 = figwheel.client.format_messages.call(null,inst_24707);
var inst_24709 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24710 = figwheel.client.heads_up.display_error.call(null,inst_24708,inst_24709);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(21),inst_24710);
} else {
if((state_val_24758 === (37))){
var inst_24740 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24797_24840 = state_24757__$1;
(statearr_24797_24840[(2)] = inst_24740);

(statearr_24797_24840[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (8))){
var inst_24683 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(11),inst_24683);
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
});})(c__19963__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19851__auto__,c__19963__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____0 = (function (){
var statearr_24801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24801[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__);

(statearr_24801[(1)] = (1));

return statearr_24801;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____1 = (function (state_24757){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24802){if((e24802 instanceof Object)){
var ex__19855__auto__ = e24802;
var statearr_24803_24841 = state_24757;
(statearr_24803_24841[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24842 = state_24757;
state_24757 = G__24842;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__ = function(state_24757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____1.call(this,state_24757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__,msg_hist,msg_names,msg))
})();
var state__19965__auto__ = (function (){var statearr_24804 = f__19964__auto__.call(null);
(statearr_24804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_24804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__,msg_hist,msg_names,msg))
);

return c__19963__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19963__auto___24905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto___24905,ch){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto___24905,ch){
return (function (state_24888){
var state_val_24889 = (state_24888[(1)]);
if((state_val_24889 === (1))){
var state_24888__$1 = state_24888;
var statearr_24890_24906 = state_24888__$1;
(statearr_24890_24906[(2)] = null);

(statearr_24890_24906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (2))){
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24888__$1,(4),ch);
} else {
if((state_val_24889 === (3))){
var inst_24886 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24888__$1,inst_24886);
} else {
if((state_val_24889 === (4))){
var inst_24876 = (state_24888[(7)]);
var inst_24876__$1 = (state_24888[(2)]);
var state_24888__$1 = (function (){var statearr_24891 = state_24888;
(statearr_24891[(7)] = inst_24876__$1);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24876__$1)){
var statearr_24892_24907 = state_24888__$1;
(statearr_24892_24907[(1)] = (5));

} else {
var statearr_24893_24908 = state_24888__$1;
(statearr_24893_24908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (5))){
var inst_24876 = (state_24888[(7)]);
var inst_24878 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24876);
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24888__$1,(8),inst_24878);
} else {
if((state_val_24889 === (6))){
var state_24888__$1 = state_24888;
var statearr_24894_24909 = state_24888__$1;
(statearr_24894_24909[(2)] = null);

(statearr_24894_24909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (7))){
var inst_24884 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
var statearr_24895_24910 = state_24888__$1;
(statearr_24895_24910[(2)] = inst_24884);

(statearr_24895_24910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (8))){
var inst_24880 = (state_24888[(2)]);
var state_24888__$1 = (function (){var statearr_24896 = state_24888;
(statearr_24896[(8)] = inst_24880);

return statearr_24896;
})();
var statearr_24897_24911 = state_24888__$1;
(statearr_24897_24911[(2)] = null);

(statearr_24897_24911[(1)] = (2));


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
});})(c__19963__auto___24905,ch))
;
return ((function (switch__19851__auto__,c__19963__auto___24905,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19852__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19852__auto____0 = (function (){
var statearr_24901 = [null,null,null,null,null,null,null,null,null];
(statearr_24901[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19852__auto__);

(statearr_24901[(1)] = (1));

return statearr_24901;
});
var figwheel$client$heads_up_plugin_$_state_machine__19852__auto____1 = (function (state_24888){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24902){if((e24902 instanceof Object)){
var ex__19855__auto__ = e24902;
var statearr_24903_24912 = state_24888;
(statearr_24903_24912[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24913 = state_24888;
state_24888 = G__24913;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19852__auto__ = function(state_24888){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19852__auto____1.call(this,state_24888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19852__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19852__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto___24905,ch))
})();
var state__19965__auto__ = (function (){var statearr_24904 = f__19964__auto__.call(null);
(statearr_24904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto___24905);

return statearr_24904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto___24905,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_24934){
var state_val_24935 = (state_24934[(1)]);
if((state_val_24935 === (1))){
var inst_24929 = cljs.core.async.timeout.call(null,(3000));
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24934__$1,(2),inst_24929);
} else {
if((state_val_24935 === (2))){
var inst_24931 = (state_24934[(2)]);
var inst_24932 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24934__$1 = (function (){var statearr_24936 = state_24934;
(statearr_24936[(7)] = inst_24931);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24934__$1,inst_24932);
} else {
return null;
}
}
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____0 = (function (){
var statearr_24940 = [null,null,null,null,null,null,null,null];
(statearr_24940[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__);

(statearr_24940[(1)] = (1));

return statearr_24940;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____1 = (function (state_24934){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24941){if((e24941 instanceof Object)){
var ex__19855__auto__ = e24941;
var statearr_24942_24944 = state_24934;
(statearr_24942_24944[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24945 = state_24934;
state_24934 = G__24945;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__ = function(state_24934){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____1.call(this,state_24934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19852__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_24943 = f__19964__auto__.call(null);
(statearr_24943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_24943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24946){
var map__24953 = p__24946;
var map__24953__$1 = ((((!((map__24953 == null)))?((((map__24953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24953):map__24953);
var ed = map__24953__$1;
var formatted_exception = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24953__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24955_24959 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24956_24960 = null;
var count__24957_24961 = (0);
var i__24958_24962 = (0);
while(true){
if((i__24958_24962 < count__24957_24961)){
var msg_24963 = cljs.core._nth.call(null,chunk__24956_24960,i__24958_24962);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24963);

var G__24964 = seq__24955_24959;
var G__24965 = chunk__24956_24960;
var G__24966 = count__24957_24961;
var G__24967 = (i__24958_24962 + (1));
seq__24955_24959 = G__24964;
chunk__24956_24960 = G__24965;
count__24957_24961 = G__24966;
i__24958_24962 = G__24967;
continue;
} else {
var temp__4657__auto___24968 = cljs.core.seq.call(null,seq__24955_24959);
if(temp__4657__auto___24968){
var seq__24955_24969__$1 = temp__4657__auto___24968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24955_24969__$1)){
var c__15606__auto___24970 = cljs.core.chunk_first.call(null,seq__24955_24969__$1);
var G__24971 = cljs.core.chunk_rest.call(null,seq__24955_24969__$1);
var G__24972 = c__15606__auto___24970;
var G__24973 = cljs.core.count.call(null,c__15606__auto___24970);
var G__24974 = (0);
seq__24955_24959 = G__24971;
chunk__24956_24960 = G__24972;
count__24957_24961 = G__24973;
i__24958_24962 = G__24974;
continue;
} else {
var msg_24975 = cljs.core.first.call(null,seq__24955_24969__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24975);

var G__24976 = cljs.core.next.call(null,seq__24955_24969__$1);
var G__24977 = null;
var G__24978 = (0);
var G__24979 = (0);
seq__24955_24959 = G__24976;
chunk__24956_24960 = G__24977;
count__24957_24961 = G__24978;
i__24958_24962 = G__24979;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24980){
var map__24983 = p__24980;
var map__24983__$1 = ((((!((map__24983 == null)))?((((map__24983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24983):map__24983);
var w = map__24983__$1;
var message = cljs.core.get.call(null,map__24983__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__14791__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__14791__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__14791__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24991 = cljs.core.seq.call(null,plugins);
var chunk__24992 = null;
var count__24993 = (0);
var i__24994 = (0);
while(true){
if((i__24994 < count__24993)){
var vec__24995 = cljs.core._nth.call(null,chunk__24992,i__24994);
var k = cljs.core.nth.call(null,vec__24995,(0),null);
var plugin = cljs.core.nth.call(null,vec__24995,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24997 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24991,chunk__24992,count__24993,i__24994,pl_24997,vec__24995,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24997.call(null,msg_hist);
});})(seq__24991,chunk__24992,count__24993,i__24994,pl_24997,vec__24995,k,plugin))
);
} else {
}

var G__24998 = seq__24991;
var G__24999 = chunk__24992;
var G__25000 = count__24993;
var G__25001 = (i__24994 + (1));
seq__24991 = G__24998;
chunk__24992 = G__24999;
count__24993 = G__25000;
i__24994 = G__25001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24991);
if(temp__4657__auto__){
var seq__24991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24991__$1)){
var c__15606__auto__ = cljs.core.chunk_first.call(null,seq__24991__$1);
var G__25002 = cljs.core.chunk_rest.call(null,seq__24991__$1);
var G__25003 = c__15606__auto__;
var G__25004 = cljs.core.count.call(null,c__15606__auto__);
var G__25005 = (0);
seq__24991 = G__25002;
chunk__24992 = G__25003;
count__24993 = G__25004;
i__24994 = G__25005;
continue;
} else {
var vec__24996 = cljs.core.first.call(null,seq__24991__$1);
var k = cljs.core.nth.call(null,vec__24996,(0),null);
var plugin = cljs.core.nth.call(null,vec__24996,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25006 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24991,chunk__24992,count__24993,i__24994,pl_25006,vec__24996,k,plugin,seq__24991__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25006.call(null,msg_hist);
});})(seq__24991,chunk__24992,count__24993,i__24994,pl_25006,vec__24996,k,plugin,seq__24991__$1,temp__4657__auto__))
);
} else {
}

var G__25007 = cljs.core.next.call(null,seq__24991__$1);
var G__25008 = null;
var G__25009 = (0);
var G__25010 = (0);
seq__24991 = G__25007;
chunk__24992 = G__25008;
count__24993 = G__25009;
i__24994 = G__25010;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25011 = [];
var len__15861__auto___25014 = arguments.length;
var i__15862__auto___25015 = (0);
while(true){
if((i__15862__auto___25015 < len__15861__auto___25014)){
args25011.push((arguments[i__15862__auto___25015]));

var G__25016 = (i__15862__auto___25015 + (1));
i__15862__auto___25015 = G__25016;
continue;
} else {
}
break;
}

var G__25013 = args25011.length;
switch (G__25013) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25011.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__15868__auto__ = [];
var len__15861__auto___25022 = arguments.length;
var i__15862__auto___25023 = (0);
while(true){
if((i__15862__auto___25023 < len__15861__auto___25022)){
args__15868__auto__.push((arguments[i__15862__auto___25023]));

var G__25024 = (i__15862__auto___25023 + (1));
i__15862__auto___25023 = G__25024;
continue;
} else {
}
break;
}

var argseq__15869__auto__ = ((((0) < args__15868__auto__.length))?(new cljs.core.IndexedSeq(args__15868__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__15869__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25019){
var map__25020 = p__25019;
var map__25020__$1 = ((((!((map__25020 == null)))?((((map__25020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25020):map__25020);
var opts = map__25020__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25018){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25018));
});

//# sourceMappingURL=client.js.map