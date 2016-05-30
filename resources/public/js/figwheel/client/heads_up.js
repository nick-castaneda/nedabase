// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__15868__auto__ = [];
var len__15861__auto___24066 = arguments.length;
var i__15862__auto___24067 = (0);
while(true){
if((i__15862__auto___24067 < len__15861__auto___24066)){
args__15868__auto__.push((arguments[i__15862__auto___24067]));

var G__24068 = (i__15862__auto___24067 + (1));
i__15862__auto___24067 = G__24068;
continue;
} else {
}
break;
}

var argseq__15869__auto__ = ((((2) < args__15868__auto__.length))?(new cljs.core.IndexedSeq(args__15868__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__15869__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24058_24069 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24059_24070 = null;
var count__24060_24071 = (0);
var i__24061_24072 = (0);
while(true){
if((i__24061_24072 < count__24060_24071)){
var k_24073 = cljs.core._nth.call(null,chunk__24059_24070,i__24061_24072);
e.setAttribute(cljs.core.name.call(null,k_24073),cljs.core.get.call(null,attrs,k_24073));

var G__24074 = seq__24058_24069;
var G__24075 = chunk__24059_24070;
var G__24076 = count__24060_24071;
var G__24077 = (i__24061_24072 + (1));
seq__24058_24069 = G__24074;
chunk__24059_24070 = G__24075;
count__24060_24071 = G__24076;
i__24061_24072 = G__24077;
continue;
} else {
var temp__4657__auto___24078 = cljs.core.seq.call(null,seq__24058_24069);
if(temp__4657__auto___24078){
var seq__24058_24079__$1 = temp__4657__auto___24078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24058_24079__$1)){
var c__15606__auto___24080 = cljs.core.chunk_first.call(null,seq__24058_24079__$1);
var G__24081 = cljs.core.chunk_rest.call(null,seq__24058_24079__$1);
var G__24082 = c__15606__auto___24080;
var G__24083 = cljs.core.count.call(null,c__15606__auto___24080);
var G__24084 = (0);
seq__24058_24069 = G__24081;
chunk__24059_24070 = G__24082;
count__24060_24071 = G__24083;
i__24061_24072 = G__24084;
continue;
} else {
var k_24085 = cljs.core.first.call(null,seq__24058_24079__$1);
e.setAttribute(cljs.core.name.call(null,k_24085),cljs.core.get.call(null,attrs,k_24085));

var G__24086 = cljs.core.next.call(null,seq__24058_24079__$1);
var G__24087 = null;
var G__24088 = (0);
var G__24089 = (0);
seq__24058_24069 = G__24086;
chunk__24059_24070 = G__24087;
count__24060_24071 = G__24088;
i__24061_24072 = G__24089;
continue;
}
} else {
}
}
break;
}

var seq__24062_24090 = cljs.core.seq.call(null,children);
var chunk__24063_24091 = null;
var count__24064_24092 = (0);
var i__24065_24093 = (0);
while(true){
if((i__24065_24093 < count__24064_24092)){
var ch_24094 = cljs.core._nth.call(null,chunk__24063_24091,i__24065_24093);
e.appendChild(ch_24094);

var G__24095 = seq__24062_24090;
var G__24096 = chunk__24063_24091;
var G__24097 = count__24064_24092;
var G__24098 = (i__24065_24093 + (1));
seq__24062_24090 = G__24095;
chunk__24063_24091 = G__24096;
count__24064_24092 = G__24097;
i__24065_24093 = G__24098;
continue;
} else {
var temp__4657__auto___24099 = cljs.core.seq.call(null,seq__24062_24090);
if(temp__4657__auto___24099){
var seq__24062_24100__$1 = temp__4657__auto___24099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24062_24100__$1)){
var c__15606__auto___24101 = cljs.core.chunk_first.call(null,seq__24062_24100__$1);
var G__24102 = cljs.core.chunk_rest.call(null,seq__24062_24100__$1);
var G__24103 = c__15606__auto___24101;
var G__24104 = cljs.core.count.call(null,c__15606__auto___24101);
var G__24105 = (0);
seq__24062_24090 = G__24102;
chunk__24063_24091 = G__24103;
count__24064_24092 = G__24104;
i__24065_24093 = G__24105;
continue;
} else {
var ch_24106 = cljs.core.first.call(null,seq__24062_24100__$1);
e.appendChild(ch_24106);

var G__24107 = cljs.core.next.call(null,seq__24062_24100__$1);
var G__24108 = null;
var G__24109 = (0);
var G__24110 = (0);
seq__24062_24090 = G__24107;
chunk__24063_24091 = G__24108;
count__24064_24092 = G__24109;
i__24065_24093 = G__24110;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24055){
var G__24056 = cljs.core.first.call(null,seq24055);
var seq24055__$1 = cljs.core.next.call(null,seq24055);
var G__24057 = cljs.core.first.call(null,seq24055__$1);
var seq24055__$2 = cljs.core.next.call(null,seq24055__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24056,G__24057,seq24055__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__15716__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15717__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15720__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__15716__auto__,prefer_table__15717__auto__,method_cache__15718__auto__,cached_hierarchy__15719__auto__,hierarchy__15720__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__15716__auto__,prefer_table__15717__auto__,method_cache__15718__auto__,cached_hierarchy__15719__auto__,hierarchy__15720__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15720__auto__,method_table__15716__auto__,prefer_table__15717__auto__,method_cache__15718__auto__,cached_hierarchy__15719__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24111 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24111.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24111.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24111.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24111);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24112,st_map){
var map__24117 = p__24112;
var map__24117__$1 = ((((!((map__24117 == null)))?((((map__24117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24117):map__24117);
var container_el = cljs.core.get.call(null,map__24117__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24117,map__24117__$1,container_el){
return (function (p__24119){
var vec__24120 = p__24119;
var k = cljs.core.nth.call(null,vec__24120,(0),null);
var v = cljs.core.nth.call(null,vec__24120,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24117,map__24117__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24121,dom_str){
var map__24124 = p__24121;
var map__24124__$1 = ((((!((map__24124 == null)))?((((map__24124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);
var c = map__24124__$1;
var content_area_el = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24126){
var map__24129 = p__24126;
var map__24129__$1 = ((((!((map__24129 == null)))?((((map__24129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24129):map__24129);
var content_area_el = cljs.core.get.call(null,map__24129__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_24172){
var state_val_24173 = (state_24172[(1)]);
if((state_val_24173 === (1))){
var inst_24157 = (state_24172[(7)]);
var inst_24157__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24158 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24159 = ["10px","10px","100%","68px","1.0"];
var inst_24160 = cljs.core.PersistentHashMap.fromArrays(inst_24158,inst_24159);
var inst_24161 = cljs.core.merge.call(null,inst_24160,style);
var inst_24162 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24157__$1,inst_24161);
var inst_24163 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24157__$1,msg);
var inst_24164 = cljs.core.async.timeout.call(null,(300));
var state_24172__$1 = (function (){var statearr_24174 = state_24172;
(statearr_24174[(8)] = inst_24163);

(statearr_24174[(9)] = inst_24162);

(statearr_24174[(7)] = inst_24157__$1);

return statearr_24174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24172__$1,(2),inst_24164);
} else {
if((state_val_24173 === (2))){
var inst_24157 = (state_24172[(7)]);
var inst_24166 = (state_24172[(2)]);
var inst_24167 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24168 = ["auto"];
var inst_24169 = cljs.core.PersistentHashMap.fromArrays(inst_24167,inst_24168);
var inst_24170 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24157,inst_24169);
var state_24172__$1 = (function (){var statearr_24175 = state_24172;
(statearr_24175[(10)] = inst_24166);

return statearr_24175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24172__$1,inst_24170);
} else {
return null;
}
}
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____0 = (function (){
var statearr_24179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24179[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__);

(statearr_24179[(1)] = (1));

return statearr_24179;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____1 = (function (state_24172){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24180){if((e24180 instanceof Object)){
var ex__19855__auto__ = e24180;
var statearr_24181_24183 = state_24172;
(statearr_24181_24183[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24184 = state_24172;
state_24172 = G__24184;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__ = function(state_24172){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____1.call(this,state_24172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_24182 = f__19964__auto__.call(null);
(statearr_24182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_24182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__24186 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__24186,(0),null);
var ln = cljs.core.nth.call(null,vec__24186,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24189 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24189,(0),null);
var file_line = cljs.core.nth.call(null,vec__24189,(1),null);
var file_column = cljs.core.nth.call(null,vec__24189,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24189,file_name,file_line,file_column){
return (function (p1__24187_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24187_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24189,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__14803__auto__ = file_line;
if(cljs.core.truth_(or__14803__auto__)){
return or__14803__auto__;
} else {
var and__14791__auto__ = cause;
if(cljs.core.truth_(and__14791__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__14791__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24192 = figwheel.client.heads_up.ensure_container.call(null);
var map__24192__$1 = ((((!((map__24192 == null)))?((((map__24192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);
var content_area_el = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_24240){
var state_val_24241 = (state_24240[(1)]);
if((state_val_24241 === (1))){
var inst_24223 = (state_24240[(7)]);
var inst_24223__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24224 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24225 = ["0.0"];
var inst_24226 = cljs.core.PersistentHashMap.fromArrays(inst_24224,inst_24225);
var inst_24227 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24223__$1,inst_24226);
var inst_24228 = cljs.core.async.timeout.call(null,(300));
var state_24240__$1 = (function (){var statearr_24242 = state_24240;
(statearr_24242[(8)] = inst_24227);

(statearr_24242[(7)] = inst_24223__$1);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(2),inst_24228);
} else {
if((state_val_24241 === (2))){
var inst_24223 = (state_24240[(7)]);
var inst_24230 = (state_24240[(2)]);
var inst_24231 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24232 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24233 = cljs.core.PersistentHashMap.fromArrays(inst_24231,inst_24232);
var inst_24234 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24223,inst_24233);
var inst_24235 = cljs.core.async.timeout.call(null,(200));
var state_24240__$1 = (function (){var statearr_24243 = state_24240;
(statearr_24243[(9)] = inst_24234);

(statearr_24243[(10)] = inst_24230);

return statearr_24243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(3),inst_24235);
} else {
if((state_val_24241 === (3))){
var inst_24223 = (state_24240[(7)]);
var inst_24237 = (state_24240[(2)]);
var inst_24238 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24223,"");
var state_24240__$1 = (function (){var statearr_24244 = state_24240;
(statearr_24244[(11)] = inst_24237);

return statearr_24244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24240__$1,inst_24238);
} else {
return null;
}
}
}
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19852__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19852__auto____0 = (function (){
var statearr_24248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24248[(0)] = figwheel$client$heads_up$clear_$_state_machine__19852__auto__);

(statearr_24248[(1)] = (1));

return statearr_24248;
});
var figwheel$client$heads_up$clear_$_state_machine__19852__auto____1 = (function (state_24240){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object)){
var ex__19855__auto__ = e24249;
var statearr_24250_24252 = state_24240;
(statearr_24250_24252[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24253 = state_24240;
state_24240 = G__24253;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19852__auto__ = function(state_24240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19852__auto____1.call(this,state_24240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19852__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19852__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_24251 = f__19964__auto__.call(null);
(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_24251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19963__auto__){
return (function (){
var f__19964__auto__ = (function (){var switch__19851__auto__ = ((function (c__19963__auto__){
return (function (state_24285){
var state_val_24286 = (state_24285[(1)]);
if((state_val_24286 === (1))){
var inst_24275 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(2),inst_24275);
} else {
if((state_val_24286 === (2))){
var inst_24277 = (state_24285[(2)]);
var inst_24278 = cljs.core.async.timeout.call(null,(400));
var state_24285__$1 = (function (){var statearr_24287 = state_24285;
(statearr_24287[(7)] = inst_24277);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(3),inst_24278);
} else {
if((state_val_24286 === (3))){
var inst_24280 = (state_24285[(2)]);
var inst_24281 = figwheel.client.heads_up.clear.call(null);
var state_24285__$1 = (function (){var statearr_24288 = state_24285;
(statearr_24288[(8)] = inst_24280);

return statearr_24288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(4),inst_24281);
} else {
if((state_val_24286 === (4))){
var inst_24283 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24285__$1,inst_24283);
} else {
return null;
}
}
}
}
});})(c__19963__auto__))
;
return ((function (switch__19851__auto__,c__19963__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null,null,null];
(statearr_24292[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____1 = (function (state_24285){
while(true){
var ret_value__19853__auto__ = (function (){try{while(true){
var result__19854__auto__ = switch__19851__auto__.call(null,state_24285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19854__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__19855__auto__ = e24293;
var statearr_24294_24296 = state_24285;
(statearr_24294_24296[(5)] = ex__19855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24297 = state_24285;
state_24285 = G__24297;
continue;
} else {
return ret_value__19853__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__ = function(state_24285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____1.call(this,state_24285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19852__auto__;
})()
;})(switch__19851__auto__,c__19963__auto__))
})();
var state__19965__auto__ = (function (){var statearr_24295 = f__19964__auto__.call(null);
(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19963__auto__);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19965__auto__);
});})(c__19963__auto__))
);

return c__19963__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map