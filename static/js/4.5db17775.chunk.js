(this["webpackJsonpbounty-admin-pc"]=this["webpackJsonpbounty-admin-pc"]||[]).push([[4],{350:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(8),o=n(0),d=n(5),r=n.n(d),s=n(58),i=n(364),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"},l=n(13),u=function(e,t){return o.createElement(l.a,Object.assign({},e,{ref:t,icon:c}))};u.displayName="MinusSquareOutlined";var p=o.forwardRef(u),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"},y=function(e,t){return o.createElement(l.a,Object.assign({},e,{ref:t,icon:f}))};y.displayName="PlusSquareOutlined";var v=o.forwardRef(y),h={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"},g=function(e,t){return o.createElement(l.a,Object.assign({},e,{ref:t,icon:h}))};g.displayName="CaretDownFilled";var K=o.forwardRef(g),b=n(15);function k(e,t,n,d){var c,l=d.isLeaf,u=d.expanded;if(d.loading)return o.createElement(s.a,{className:"".concat(e,"-switcher-loading-icon")});if(n&&"object"===Object(a.a)(n)&&(c=n.showLeafIcon),l)return n?"object"!==Object(a.a)(n)||c?o.createElement(i.a,{className:"".concat(e,"-switcher-line-icon")}):o.createElement("span",{className:"".concat(e,"-switcher-leaf-line")}):null;var f="".concat(e,"-switcher-icon");return Object(b.b)(t)?Object(b.a)(t,{className:r()(t.props.className||"",f)}):t||(n?u?o.createElement(p,{className:"".concat(e,"-switcher-line-icon")}):o.createElement(v,{className:"".concat(e,"-switcher-line-icon")}):o.createElement(K,{className:f}))}},351:function(e,t,n){"use strict";n.d(t,"a",(function(){return m.a}));var a=n(1),o=n(2),d=n(3),r=n(7),s=n(9),i=n(10),c=n(19),l=n(11),u=n(12),p=n(0),f=n(32),y=n(20),v=n(5),h=n.n(v),g=n(360),K=n(345),b=n(328),k=n(6),O=n(17),N=n(403),E=n(28),m=n(340),j=function(e,t){var n=e.className,o=e.style,d=e.motion,r=e.motionNodes,s=e.motionType,i=e.onMotionStart,c=e.onMotionEnd,l=e.active,u=e.treeNodeRequiredProps,f=Object(O.a)(e,["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"]),y=p.useState(!0),v=Object(k.a)(y,2),K=v[0],N=v[1],j=p.useContext(g.a).prefixCls,C=p.useRef(!1),x=function(){C.current||c(),C.current=!0};return Object(p.useEffect)((function(){r&&"hide"===s&&K&&N(!1)}),[r]),Object(p.useEffect)((function(){return r&&i(),function(){r&&x()}}),[]),r?p.createElement(E.b,Object(a.a)({ref:t,visible:K},d,{motionAppear:"show"===s,onAppearEnd:x,onLeaveEnd:x}),(function(e,t){var n=e.className,o=e.style;return p.createElement("div",{ref:t,className:h()("".concat(j,"-treenode-motion"),n),style:o},r.map((function(e){var t=e.data,n=t.key,o=Object(O.a)(t,["key"]),d=e.isStart,r=e.isEnd;delete o.children;var s=Object(b.f)(n,u);return p.createElement(m.a,Object(a.a)({},o,s,{active:l,data:e.data,key:n,isStart:d,isEnd:r}))})))})):p.createElement(m.a,Object(a.a)({domRef:t,className:n,style:o},f,{active:l}))};j.displayName="MotionTreeNode";var C=p.forwardRef(j);function x(e,t,n){var a=e.findIndex((function(e){return e.data.key===n})),o=e[a+1],d=t.findIndex((function(e){return e.data.key===n}));if(o){var r=t.findIndex((function(e){return e.data.key===o.data.key}));return t.slice(d+1,r)}return t.slice(d+1)}var w={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},S=function(){},D="RC_TREE_MOTION_".concat(Math.random()),P={key:D},L={key:D,level:0,index:0,pos:"0",node:P},T={parent:null,children:[],pos:L.pos,data:P,isStart:[],isEnd:[]};function M(e,t,n,a){return!1!==t&&n?e.slice(0,Math.ceil(n/a)+1):e}function A(e){var t=e.data.key,n=e.pos;return Object(b.e)(t,n)}var I=function(e,t){var n=e.prefixCls,o=e.data,d=(e.selectable,e.checkable,e.expandedKeys),r=e.selectedKeys,s=e.checkedKeys,i=e.loadedKeys,c=e.loadingKeys,l=e.halfCheckedKeys,u=e.keyEntities,f=e.disabled,y=e.dragging,v=e.dragOverNodeKey,h=e.dropPosition,g=e.motion,K=e.height,E=e.itemHeight,m=e.virtual,j=e.focusable,P=e.activeItem,L=e.focused,I=e.tabIndex,R=e.onKeyDown,H=e.onFocus,F=e.onBlur,q=e.onActiveChange,B=e.onListChangeStart,U=e.onListChangeEnd,z=Object(O.a)(e,["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"]),V=p.useRef(null),W=p.useRef(null);p.useImperativeHandle(t,(function(){return{scrollTo:function(e){V.current.scrollTo(e)},getIndentWidth:function(){return W.current.offsetWidth}}}));var _=p.useState(d),G=Object(k.a)(_,2),J=G[0],X=G[1],Y=p.useState(o),Q=Object(k.a)(Y,2),Z=Q[0],$=Q[1],ee=p.useState(o),te=Object(k.a)(ee,2),ne=te[0],ae=te[1],oe=p.useState([]),de=Object(k.a)(oe,2),re=de[0],se=de[1],ie=p.useState(null),ce=Object(k.a)(ie,2),le=ce[0],ue=ce[1];function pe(){$(o),ae(o),se([]),ue(null),U()}p.useEffect((function(){X(d);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.length,a=t.length;if(1!==Math.abs(n-a))return{add:!1,key:null};function o(e,t){var n=new Map;e.forEach((function(e){n.set(e,!0)}));var a=t.filter((function(e){return!n.has(e)}));return 1===a.length?a[0]:null}return n<a?{add:!0,key:o(e,t)}:{add:!1,key:o(t,e)}}(J,d);if(null!==e.key)if(e.add){var t=Z.findIndex((function(t){return t.data.key===e.key})),n=M(x(Z,o,e.key),m,K,E),a=Z.slice();a.splice(t+1,0,T),ae(a),se(n),ue("show")}else{var r=o.findIndex((function(t){return t.data.key===e.key})),s=M(x(o,Z,e.key),m,K,E),i=o.slice();i.splice(r+1,0,T),ae(i),se(s),ue("hide")}else Z!==o&&($(o),ae(o))}),[d,o]),p.useEffect((function(){y||pe()}),[y]);var fe=g?ne:o,ye={expandedKeys:d,selectedKeys:r,loadedKeys:i,loadingKeys:c,checkedKeys:s,halfCheckedKeys:l,dragOverNodeKey:v,dropPosition:h,keyEntities:u};return p.createElement(p.Fragment,null,L&&P&&p.createElement("span",{style:w,"aria-live":"assertive"},function(e){for(var t=String(e.data.key),n=e;n.parent;)n=n.parent,t="".concat(n.data.key," > ").concat(t);return t}(P)),p.createElement("div",{role:"tree"},p.createElement("input",{style:w,disabled:!1===j||f,tabIndex:!1!==j?I:null,onKeyDown:R,onFocus:H,onBlur:F,value:"",onChange:S})),p.createElement("div",{className:"".concat(n,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden"}},p.createElement("div",{className:"".concat(n,"-indent")},p.createElement("div",{ref:W,className:"".concat(n,"-indent-unit")}))),p.createElement(N.a,Object(a.a)({},z,{data:fe,itemKey:A,height:K,fullHeight:!1,virtual:m,itemHeight:E,prefixCls:"".concat(n,"-list"),ref:V}),(function(e){var t=e.pos,n=e.data,o=n.key,d=Object(O.a)(n,["key"]),r=e.isStart,s=e.isEnd,i=Object(b.e)(o,t);delete d.children;var c=Object(b.f)(i,ye);return p.createElement(C,Object(a.a)({},d,c,{active:!!P&&o===P.data.key,pos:t,data:e.data,isStart:r,isEnd:s,motion:g,motionNodes:o===D?re:null,motionType:le,onMotionStart:B,onMotionEnd:pe,treeNodeRequiredProps:ye,onMouseMove:function(){q(null)}}))})))},R=p.forwardRef(I);R.displayName="NodeList";var H=R,F=n(348);var q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).destroyed=!1,e.state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],dragging:!1,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null},e.dragStartMousePosition=null,e.listRef=p.createRef(),e.onNodeDragStart=function(t,n){var a=e.state,o=a.expandedKeys,d=a.keyEntities,r=e.props.onDragStart,s=n.props.eventKey;e.dragNode=n,e.dragStartMousePosition={x:t.clientX,y:t.clientY};var i=Object(K.b)(o,s);e.setState({dragging:!0,dragChildrenKeys:Object(K.g)(s,d),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(i),window.addEventListener("dragend",e.onWindowDragEnd),r&&r({event:t,node:Object(b.b)(n.props)})},e.onNodeDragEnter=function(t,n){var a=e.state,o=a.expandedKeys,d=a.keyEntities,s=a.dragChildrenKeys,i=a.flattenNodes,l=a.indent,u=e.props,p=u.onDragEnter,f=u.onExpand,y=u.allowDrop,v=u.direction,h=n.props.pos,g=Object(c.a)(e).dragNode,k=Object(K.c)(t,g,n,l,e.dragStartMousePosition,y,i,d,o,v),O=k.dropPosition,N=k.dropLevelOffset,E=k.dropTargetKey,m=k.dropContainerKey,j=k.dropTargetPos,C=k.dropAllowed,x=k.dragOverNodeKey;g&&-1===s.indexOf(E)&&C?(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach((function(t){clearTimeout(e.delayedDragEnterLogic[t])})),g.props.eventKey!==n.props.eventKey&&(t.persist(),e.delayedDragEnterLogic[h]=window.setTimeout((function(){if(e.state.dragging){var a=Object(r.a)(o),s=d[n.props.eventKey];s&&(s.children||[]).length&&(a=Object(K.a)(o,n.props.eventKey)),"expandedKeys"in e.props||e.setExpandedKeys(a),f&&f(a,{node:Object(b.b)(n.props),expanded:!0,nativeEvent:t.nativeEvent})}}),800)),g.props.eventKey!==E||0!==N?(e.setState({dragOverNodeKey:x,dropPosition:O,dropLevelOffset:N,dropTargetKey:E,dropContainerKey:m,dropTargetPos:j,dropAllowed:C}),p&&p({event:t,node:Object(b.b)(n.props),expandedKeys:o})):e.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})):e.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})},e.onNodeDragOver=function(t,n){var a=e.state,o=a.dragChildrenKeys,d=a.flattenNodes,r=a.keyEntities,s=a.expandedKeys,i=a.indent,l=e.props,u=l.onDragOver,p=l.allowDrop,f=l.direction,y=Object(c.a)(e).dragNode,v=Object(K.c)(t,y,n,i,e.dragStartMousePosition,p,d,r,s,f),h=v.dropPosition,g=v.dropLevelOffset,k=v.dropTargetKey,O=v.dropContainerKey,N=v.dropAllowed,E=v.dropTargetPos,m=v.dragOverNodeKey;y&&-1===o.indexOf(k)&&N&&(y.props.eventKey===k&&0===g?null===e.state.dropPosition&&null===e.state.dropLevelOffset&&null===e.state.dropTargetKey&&null===e.state.dropContainerKey&&null===e.state.dropTargetPos&&!1===e.state.dropAllowed&&null===e.state.dragOverNodeKey||e.setState({dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1,dragOverNodeKey:null}):h===e.state.dropPosition&&g===e.state.dropLevelOffset&&k===e.state.dropTargetKey&&O===e.state.dropContainerKey&&E===e.state.dropTargetPos&&N===e.state.dropAllowed&&m===e.state.dragOverNodeKey||e.setState({dropPosition:h,dropLevelOffset:g,dropTargetKey:k,dropContainerKey:O,dropTargetPos:E,dropAllowed:N,dragOverNodeKey:m}),u&&u({event:t,node:Object(b.b)(n.props)}))},e.onNodeDragLeave=function(t,n){var a=e.props.onDragLeave;a&&a({event:t,node:Object(b.b)(n.props)})},e.onWindowDragEnd=function(t){e.onNodeDragEnd(t,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDragEnd=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),o&&!a&&o({event:t,node:Object(b.b)(n.props)}),e.dragNode=null},e.onNodeDrop=function(t,n){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.state,s=r.dragChildrenKeys,i=r.dropPosition,c=r.dropTargetKey,l=r.dropTargetPos,u=r.dropAllowed;if(u){var p=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),null!==c){var f=Object(d.a)(Object(d.a)({},Object(b.f)(c,e.getTreeNodeRequiredProps())),{},{active:(null===(a=e.getActiveItem())||void 0===a?void 0:a.data.key)===c,data:e.state.keyEntities[c].node}),v=-1!==s.indexOf(c);Object(y.a)(!v,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var h=Object(K.k)(l),g={event:t,node:Object(b.b)(f),dragNode:e.dragNode?Object(b.b)(e.dragNode.props):null,dragNodesKeys:[e.dragNode.props.eventKey].concat(s),dropToGap:0!==i,dropPosition:i+Number(h[h.length-1])};p&&!o&&p(g),e.dragNode=null}}},e.cleanDragState=function(){e.state.dragging&&e.setState({dragging:!1,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null},e.onNodeClick=function(t,n){var a=e.props.onClick;a&&a(t,n)},e.onNodeDoubleClick=function(t,n){var a=e.props.onDoubleClick;a&&a(t,n)},e.onNodeSelect=function(t,n){var a=e.state.selectedKeys,o=e.state.keyEntities,d=e.props,r=d.onSelect,s=d.multiple,i=n.selected,c=n.key,l=!i,u=(a=l?s?Object(K.a)(a,c):[c]:Object(K.b)(a,c)).map((function(e){var t=o[e];return t?t.node:null})).filter((function(e){return e}));e.setUncontrolledState({selectedKeys:a}),r&&r(a,{event:"select",selected:l,node:n,selectedNodes:u,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,a){var o,d=e.state,s=d.keyEntities,i=d.checkedKeys,c=d.halfCheckedKeys,l=e.props,u=l.checkStrictly,p=l.onCheck,f=n.key,y={event:"check",node:n,checked:a,nativeEvent:t.nativeEvent};if(u){var v=a?Object(K.a)(i,f):Object(K.b)(i,f);o={checked:v,halfChecked:Object(K.b)(c,f)},y.checkedNodes=v.map((function(e){return s[e]})).filter((function(e){return e})).map((function(e){return e.node})),e.setUncontrolledState({checkedKeys:v})}else{var h=Object(F.a)([].concat(Object(r.a)(i),[f]),!0,s),g=h.checkedKeys,b=h.halfCheckedKeys;if(!a){var k=new Set(g);k.delete(f);var O=Object(F.a)(Array.from(k),{checked:!1,halfCheckedKeys:b},s);g=O.checkedKeys,b=O.halfCheckedKeys}o=g,y.checkedNodes=[],y.checkedNodesPositions=[],y.halfCheckedKeys=b,g.forEach((function(e){var t=s[e];if(t){var n=t.node,a=t.pos;y.checkedNodes.push(n),y.checkedNodesPositions.push({node:n,pos:a})}})),e.setUncontrolledState({checkedKeys:g},!1,{halfCheckedKeys:b})}p&&p(o,y)},e.onNodeLoad=function(t){return new Promise((function(n){e.setState((function(a){var o=a.loadedKeys,d=void 0===o?[]:o,r=a.loadingKeys,s=void 0===r?[]:r,i=e.props,c=i.loadData,l=i.onLoad,u=t.key;return c&&-1===d.indexOf(u)&&-1===s.indexOf(u)?(c(t).then((function(){var a=e.state,o=a.loadedKeys,d=a.loadingKeys,r=Object(K.a)(o,u),s=Object(K.b)(d,u);l&&l(r,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:r}),e.setState({loadingKeys:s}),n()})),{loadingKeys:Object(K.a)(s,u)}):{}}))}))},e.onNodeMouseEnter=function(t,n){var a=e.props.onMouseEnter;a&&a({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var a=e.props.onMouseLeave;a&&a({event:t,node:n})},e.onNodeContextMenu=function(t,n){var a=e.props.onRightClick;a&&(t.preventDefault(),a({event:t,node:n}))},e.onFocus=function(){var t=e.props.onFocus;e.setState({focused:!0}),t&&t.apply(void 0,arguments)},e.onBlur=function(){var t=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null),t&&t.apply(void 0,arguments)},e.getTreeNodeRequiredProps=function(){var t=e.state;return{expandedKeys:t.expandedKeys||[],selectedKeys:t.selectedKeys||[],loadedKeys:t.loadedKeys||[],loadingKeys:t.loadingKeys||[],checkedKeys:t.checkedKeys||[],halfCheckedKeys:t.halfCheckedKeys||[],dragOverNodeKey:t.dragOverNodeKey,dropPosition:t.dropPosition,keyEntities:t.keyEntities}},e.setExpandedKeys=function(t){var n=e.state.treeData,a=Object(b.d)(n,t);e.setUncontrolledState({expandedKeys:t,flattenNodes:a},!0)},e.onNodeExpand=function(t,n){var a=e.state.expandedKeys,o=e.state.listChanging,d=e.props,r=d.onExpand,s=d.loadData,i=n.key,c=n.expanded;if(!o){var l=a.indexOf(i),u=!c;if(Object(y.a)(c&&-1!==l||!c&&-1===l,"Expand state not sync with index check"),a=u?Object(K.a)(a,i):Object(K.b)(a,i),e.setExpandedKeys(a),r&&r(a,{node:n,expanded:u,nativeEvent:t.nativeEvent}),u&&s){var p=e.onNodeLoad(n);p&&p.then((function(){var t=Object(b.d)(e.state.treeData,a);e.setUncontrolledState({flattenNodes:t})}))}}},e.onListChangeStart=function(){e.setUncontrolledState({listChanging:!0})},e.onListChangeEnd=function(){setTimeout((function(){e.setUncontrolledState({listChanging:!1})}))},e.onActiveChange=function(t){var n=e.state.activeKey,a=e.props.onActiveChange;n!==t&&(e.setState({activeKey:t}),null!==t&&e.scrollTo({key:t}),a&&a(t))},e.getActiveItem=function(){var t=e.state,n=t.activeKey,a=t.flattenNodes;return null===n?null:a.find((function(e){return e.data.key===n}))||null},e.offsetActiveKey=function(t){var n=e.state,a=n.flattenNodes,o=n.activeKey,d=a.findIndex((function(e){return e.data.key===o}));-1===d&&t<0&&(d=a.length);var r=a[d=(d+t+a.length)%a.length];if(r){var s=r.data.key;e.onActiveChange(s)}else e.onActiveChange(null)},e.onKeyDown=function(t){var n=e.state,a=n.activeKey,o=n.expandedKeys,r=n.checkedKeys,s=e.props,i=s.onKeyDown,c=s.checkable,l=s.selectable;switch(t.which){case f.a.UP:e.offsetActiveKey(-1),t.preventDefault();break;case f.a.DOWN:e.offsetActiveKey(1),t.preventDefault()}var u=e.getActiveItem();if(u&&u.data){var p=e.getTreeNodeRequiredProps(),y=!1===u.data.isLeaf||!!(u.data.children||[]).length,v=Object(b.b)(Object(d.a)(Object(d.a)({},Object(b.f)(a,p)),{},{data:u.data,active:!0}));switch(t.which){case f.a.LEFT:y&&o.includes(a)?e.onNodeExpand({},v):u.parent&&e.onActiveChange(u.parent.data.key),t.preventDefault();break;case f.a.RIGHT:y&&!o.includes(a)?e.onNodeExpand({},v):u.children&&u.children.length&&e.onActiveChange(u.children[0].data.key),t.preventDefault();break;case f.a.ENTER:case f.a.SPACE:!c||v.disabled||!1===v.checkable||v.disableCheckbox?c||!l||v.disabled||!1===v.selectable||e.onNodeSelect({},v):e.onNodeCheck({},v,!r.includes(a))}}i&&i(t)},e.setUncontrolledState=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e.destroyed){var o=!1,r=!0,s={};Object.keys(t).forEach((function(n){n in e.props?r=!1:(o=!0,s[n]=t[n])})),!o||n&&!r||e.setState(Object(d.a)(Object(d.a)({},s),a))}},e.scrollTo=function(t){e.listRef.current.scrollTo(t)},e}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"render",value:function(){var e,t=this.state,n=t.focused,d=t.flattenNodes,r=t.keyEntities,s=t.dragging,i=t.activeKey,c=t.dropLevelOffset,l=t.dropContainerKey,u=t.dropTargetKey,f=t.dropPosition,y=t.dragOverNodeKey,v=t.indent,b=this.props,k=b.prefixCls,O=b.className,N=b.style,E=b.showLine,m=b.focusable,j=b.tabIndex,C=void 0===j?0:j,x=b.selectable,w=b.showIcon,S=b.icon,D=b.switcherIcon,P=b.draggable,L=b.checkable,T=b.checkStrictly,M=b.disabled,A=b.motion,I=b.loadData,R=b.filterTreeNode,F=b.height,q=b.itemHeight,B=b.virtual,U=b.titleRender,z=b.dropIndicatorRender,V=b.onContextMenu,W=b.direction,_=Object(K.f)(this.props);return p.createElement(g.a.Provider,{value:{prefixCls:k,selectable:x,showIcon:w,icon:S,switcherIcon:D,draggable:P,checkable:L,checkStrictly:T,disabled:M,keyEntities:r,dropLevelOffset:c,dropContainerKey:l,dropTargetKey:u,dropPosition:f,dragOverNodeKey:y,indent:v,direction:W,dropIndicatorRender:z,loadData:I,filterTreeNode:R,titleRender:U,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},p.createElement("div",{className:h()(k,O,(e={},Object(o.a)(e,"".concat(k,"-show-line"),E),Object(o.a)(e,"".concat(k,"-focused"),n),Object(o.a)(e,"".concat(k,"-active-focused"),null!==i),e))},p.createElement(H,Object(a.a)({ref:this.listRef,prefixCls:k,style:N,data:d,disabled:M,selectable:x,checkable:!!L,motion:A,dragging:s,height:F,itemHeight:q,virtual:B,focusable:m,focused:n,tabIndex:C,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:V},this.getTreeNodeRequiredProps(),_))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,a=t.prevProps,r={prevProps:e};function s(t){return!a&&t in e||a&&a[t]!==e[t]}if(s("treeData")?n=e.treeData:s("children")&&(Object(y.a)(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),n=Object(b.c)(e.children)),n){r.treeData=n;var i=Object(b.a)(n);r.keyEntities=Object(d.a)(Object(o.a)({},D,L),i.keyEntities)}var c,l=r.keyEntities||t.keyEntities;if(s("expandedKeys")||a&&s("autoExpandParent"))r.expandedKeys=e.autoExpandParent||!a&&e.defaultExpandParent?Object(K.e)(e.expandedKeys,l):e.expandedKeys;else if(!a&&e.defaultExpandAll){var u=Object(d.a)({},l);delete u[D],r.expandedKeys=Object.keys(u).map((function(e){return u[e].key}))}else!a&&e.defaultExpandedKeys&&(r.expandedKeys=e.autoExpandParent||e.defaultExpandParent?Object(K.e)(e.defaultExpandedKeys,l):e.defaultExpandedKeys);if(r.expandedKeys||delete r.expandedKeys,n||r.expandedKeys){var p=Object(b.d)(n||t.treeData,r.expandedKeys||t.expandedKeys);r.flattenNodes=p}if((e.selectable&&(s("selectedKeys")?r.selectedKeys=Object(K.d)(e.selectedKeys,e):!a&&e.defaultSelectedKeys&&(r.selectedKeys=Object(K.d)(e.defaultSelectedKeys,e))),e.checkable)&&(s("checkedKeys")?c=Object(K.j)(e.checkedKeys)||{}:!a&&e.defaultCheckedKeys?c=Object(K.j)(e.defaultCheckedKeys)||{}:n&&(c=Object(K.j)(e.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),c)){var f=c,v=f.checkedKeys,h=void 0===v?[]:v,g=f.halfCheckedKeys,k=void 0===g?[]:g;if(!e.checkStrictly){var O=Object(F.a)(h,!0,l);h=O.checkedKeys,k=O.halfCheckedKeys}r.checkedKeys=h,r.halfCheckedKeys=k}return s("loadedKeys")&&(r.loadedKeys=e.loadedKeys),r}}]),n}(p.Component);q.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:function(e){var t=e.dropPosition,n=e.dropLevelOffset,a=e.indent,o={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(t){case-1:o.top=0,o.left=-n*a;break;case 1:o.bottom=0,o.left=-n*a;break;case 0:o.bottom=0,o.left=a}return p.createElement("div",{style:o})},allowDrop:function(){return!0}},q.TreeNode=m.a;var B=q;t.b=B},364:function(e,t,n){"use strict";var a=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"},d=n(13),r=function(e,t){return a.createElement(d.a,Object.assign({},e,{ref:t,icon:o}))};r.displayName="FileOutlined";t.a=a.forwardRef(r)}}]);