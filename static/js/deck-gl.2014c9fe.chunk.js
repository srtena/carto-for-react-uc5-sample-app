(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{1109:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(4),o=a(191),r=a(551),i=a(278),c=Object(r.a)((function(t){return{tooltip:{"& .content":Object(n.a)(Object(n.a)({},t.typography.caption),{},{position:"relative",padding:t.spacing(1,1.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900],color:"rgba(255, 255, 255, 0.75)",transform:"translate(-50%, calc(-100% - ".concat(t.spacing(2.5),"px))"),"& .arrow":{display:"block",position:"absolute",top:"calc(100% - 1px)",left:"50%",width:0,height:0,marginLeft:t.spacing(-1),borderLeft:"".concat(t.spacing(1),"px solid transparent"),borderRight:"".concat(t.spacing(1),"px solid transparent"),borderTop:"".concat(t.spacing(1),"px solid ").concat(t.palette.grey[900])}})}}}));function s(){var t=c(),e=Object(o.useDispatch)(),a=!1;return{handleViewStateChange:function(t){var a=t.viewState;e(Object(i.setViewState)(a))},handleSizeChange:function(t){var a=t.width,n=t.height;e(Object(i.setViewState)({width:a,height:n}))},handleHover:function(t){var e=t.object;return a=!!e},handleCursor:function(t){return t.isDragging?"grabbing":a?"pointer":"grab"},handleTooltip:function(e){if(null===e||void 0===e?void 0:e.object)return{html:"<div class='content'>".concat(e.object.html,"<div class='arrow'></div></div>"),className:t.tooltip,style:{padding:0,background:"none"}}}}}},1154:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(4),o=a(1164),r=a(191),i=a(1159),c=a(47),s=a(1025),p=a(440),l=a(1109),d=a(22);function u(t){var e=t.layers,a=Object(r.useSelector)((function(t){return t.carto.viewState})),u=Object(r.useSelector)((function(t){return p.BASEMAPS[t.carto.basemap]})),b=Object(c.a)(),g=Object(s.a)(b.breakpoints.down("xs")),h=Object(l.a)(),f=h.handleCursor,v=h.handleHover,j=h.handleSizeChange,S=h.handleTooltip,w=h.handleViewStateChange;return Object(d.jsx)(o.a,{viewState:Object(n.a)({},a),controller:!0,layers:e,onViewStateChange:w,onResize:j,onHover:v,getCursor:f,getTooltip:S,pickingRadius:g?10:0,children:Object(d.jsx)(i.a,{reuseMaps:!0,mapStyle:u.options.mapStyle,preventStyleDiffing:!0})})}}}]);
//# sourceMappingURL=deck-gl.2014c9fe.chunk.js.map