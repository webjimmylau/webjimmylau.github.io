(this["webpackJsonpbounty-admin-pc"]=this["webpackJsonpbounty-admin-pc"]||[]).push([[11],{338:function(e,t,n){"use strict";var a=n(1),c=n(2),o=n(17),r=n(3),l=n(9),i=n(10),s=n(11),u=n(12),d=n(0),f=n.n(d),b=n(5),p=n.n(b),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:Object(r.a)(Object(r.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,l=t.style,i=t.name,s=t.id,u=t.type,d=t.disabled,b=t.readOnly,h=t.tabIndex,v=t.onClick,O=t.onFocus,j=t.onBlur,m=t.onKeyDown,y=t.onKeyPress,x=t.onKeyUp,g=t.autoFocus,C=t.value,k=t.required,w=Object(o.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),N=this.state.checked,_=p()(n,r,(e={},Object(c.a)(e,"".concat(n,"-checked"),N),Object(c.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:_,style:l},f.a.createElement("input",Object(a.a)({name:i,id:s,type:u,required:k,readOnly:b,disabled:d,tabIndex:h,className:"".concat(n,"-input"),checked:!!N,onClick:v,onFocus:O,onBlur:j,onKeyUp:x,onKeyDown:m,onKeyPress:y,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:C},E)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(r.a)(Object(r.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=h},363:function(e,t,n){"use strict";var a=n(2),c=n(1),o=n(0),r=n(338),l=n(5),i=n.n(l),s=n(24),u=n(59),d=o.createContext(null),f=d.Provider,b=d,p=n(16),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},v=function(e,t){var n,l=o.useContext(b),d=o.useContext(u.b),f=d.getPrefixCls,v=d.direction,O=o.useRef(),j=Object(s.a)(t,O);o.useEffect((function(){Object(p.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var m=e.prefixCls,y=e.className,x=e.children,g=e.style,C=h(e,["prefixCls","className","children","style"]),k=f("radio",m),w=Object(c.a)({},C);l&&(w.name=l.name,w.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===l||void 0===l?void 0:l.onChange)||void 0===a||a.call(l,t)},w.checked=e.value===l.value,w.disabled=e.disabled||l.disabled);var E=i()("".concat(k,"-wrapper"),(n={},Object(a.a)(n,"".concat(k,"-wrapper-checked"),w.checked),Object(a.a)(n,"".concat(k,"-wrapper-disabled"),w.disabled),Object(a.a)(n,"".concat(k,"-wrapper-rtl"),"rtl"===v),n),y);return o.createElement("label",{className:E,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.a,Object(c.a)({},w,{prefixCls:k,ref:j})),void 0!==x?o.createElement("span",null,x):null)},O=o.forwardRef(v);O.displayName="Radio",O.defaultProps={type:"radio"};var j=O,m=n(6),y=n(54),x=n(34),g=o.forwardRef((function(e,t){var n=o.useContext(u.b),c=n.getPrefixCls,r=n.direction,l=o.useContext(x.b),s=Object(y.a)(e.defaultValue,{value:e.value}),d=Object(m.a)(s,2),b=d[0],p=d[1];return o.createElement(f,{value:{onChange:function(t){var n=b,a=t.target.value;"value"in e||p(a);var c=e.onChange;c&&a!==n&&c(t)},value:b,disabled:e.disabled,name:e.name}},function(){var n,s=e.prefixCls,u=e.className,d=void 0===u?"":u,f=e.options,p=e.optionType,h=e.buttonStyle,v=void 0===h?"outline":h,O=e.disabled,m=e.children,y=e.size,x=e.style,g=e.id,C=e.onMouseEnter,k=e.onMouseLeave,w=c("radio",s),E="".concat(w,"-group"),N=m;if(f&&f.length>0){var _="button"===p?"".concat(w,"-button"):w;N=f.map((function(e){return"string"===typeof e?o.createElement(j,{key:e,prefixCls:_,disabled:O,value:e,checked:b===e},e):o.createElement(j,{key:"radio-group-value-options-".concat(e.value),prefixCls:_,disabled:e.disabled||O,value:e.value,checked:b===e.value,style:e.style},e.label)}))}var I=y||l,P=i()(E,"".concat(E,"-").concat(v),(n={},Object(a.a)(n,"".concat(E,"-").concat(I),I),Object(a.a)(n,"".concat(E,"-rtl"),"rtl"===r),n),d);return o.createElement("div",{className:P,style:x,onMouseEnter:C,onMouseLeave:k,id:g,ref:t},N)}())})),C=o.memo(g),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},w=function(e,t){var n=o.useContext(b),a=o.useContext(u.b).getPrefixCls,r=e.prefixCls,l=k(e,["prefixCls"]),i=a("radio-button",r);return n&&(l.checked=e.value===n.value,l.disabled=e.disabled||n.disabled),o.createElement(j,Object(c.a)({prefixCls:i},l,{type:"radio",ref:t}))},E=o.forwardRef(w),N=j;N.Button=E,N.Group=C;t.a=N},406:function(e,t,n){"use strict";var a=n(2),c=n(1),o=n(0),r=n(5),l=n.n(r),i=n(338),s=n(7),u=n(6),d=n(21),f=n(59),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},p=o.createContext(null),h=function(e){var t=e.defaultValue,n=e.children,r=e.options,i=void 0===r?[]:r,h=e.prefixCls,v=e.className,O=e.style,j=e.onChange,m=b(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),y=o.useContext(f.b),g=y.getPrefixCls,C=y.direction,k=o.useState(m.value||t||[]),w=Object(u.a)(k,2),E=w[0],N=w[1],_=o.useState([]),I=Object(u.a)(_,2),P=I[0],M=I[1];o.useEffect((function(){"value"in m&&N(m.value||[])}),[m.value]);var S=function(){return i.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},K=g("checkbox",h),L="".concat(K,"-group"),R=Object(d.a)(m,["value","disabled"]);i&&i.length>0&&(n=S().map((function(e){return o.createElement(x,{prefixCls:K,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:-1!==E.indexOf(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var V={toggleOption:function(e){var t=E.indexOf(e.value),n=Object(s.a)(E);-1===t?n.push(e.value):n.splice(t,1),"value"in m||N(n);var a=S();null===j||void 0===j||j(n.filter((function(e){return-1!==P.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:E,disabled:m.disabled,name:m.name,registerValue:function(e){M((function(t){return[].concat(Object(s.a)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},F=l()(L,Object(a.a)({},"".concat(L,"-rtl"),"rtl"===C),v);return o.createElement("div",Object(c.a)({className:F,style:O},R),o.createElement(p.Provider,{value:V},n))},v=o.memo(h),O=n(16),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},m=function(e,t){var n,r=e.prefixCls,s=e.className,u=e.children,d=e.indeterminate,b=void 0!==d&&d,h=e.style,v=e.onMouseEnter,m=e.onMouseLeave,y=e.skipGroup,x=void 0!==y&&y,g=j(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=o.useContext(f.b),k=C.getPrefixCls,w=C.direction,E=o.useContext(p),N=o.useRef(g.value);o.useEffect((function(){null===E||void 0===E||E.registerValue(g.value),Object(O.a)("checked"in g||!!E||!("value"in g),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),o.useEffect((function(){if(!x)return g.value!==N.current&&(null===E||void 0===E||E.cancelValue(N.current),null===E||void 0===E||E.registerValue(g.value)),function(){return null===E||void 0===E?void 0:E.cancelValue(g.value)}}),[g.value]);var _=k("checkbox",r),I=Object(c.a)({},g);E&&!x&&(I.onChange=function(){g.onChange&&g.onChange.apply(g,arguments),E.toggleOption&&E.toggleOption({label:u,value:g.value})},I.name=E.name,I.checked=-1!==E.value.indexOf(g.value),I.disabled=g.disabled||E.disabled);var P=l()((n={},Object(a.a)(n,"".concat(_,"-wrapper"),!0),Object(a.a)(n,"".concat(_,"-rtl"),"rtl"===w),Object(a.a)(n,"".concat(_,"-wrapper-checked"),I.checked),Object(a.a)(n,"".concat(_,"-wrapper-disabled"),I.disabled),n),s),M=l()(Object(a.a)({},"".concat(_,"-indeterminate"),b));return o.createElement("label",{className:P,style:h,onMouseEnter:v,onMouseLeave:m},o.createElement(i.a,Object(c.a)({},I,{prefixCls:_,className:M,ref:t})),void 0!==u&&o.createElement("span",null,u))},y=o.forwardRef(m);y.displayName="Checkbox";var x=y,g=x;g.Group=v,g.__ANT_CHECKBOX=!0;t.a=g},471:function(e,t,n){e.exports={box:"setting_account_create_box__34xin",form:"setting_account_create_form__2ehts",item:"setting_account_create_item__yU3b-",roleList:"setting_account_create_roleList__aPhM6"}},488:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(23),o=n(22),r=n(318),l=n(317),i=n(363),s=n(406),u=n(64),d=n(53),f=n(63),b=n(0),p=n(471),h=n.n(p),v=n(4);t.default=function(){var e=Object(o.d)(),t=Object(o.h)().query,n=Object(f.a)(t.id),p=Object(c.a)(n,1)[0],O=Object(f.a)(""),j=Object(c.a)(O,2),m=j[0],y=j[1],x=Object(f.a)([]),g=Object(c.a)(x,2),C=g[0],k=g[1],w=Object(f.a)([]),E=Object(c.a)(w,2),N=E[0],_=E[1],I=Object(f.a)([]),P=Object(c.a)(I,2),M=P[0],S=P[1],K=Object(f.a)({phone:"",name:"",status:"1",roleIds:[]}),L=Object(c.a)(K,2),R=L[0],V=L[1],F=Object(f.a)({phone:"",name:""}),q=Object(c.a)(F,2),T=q[0],D=q[1],$=Object(o.c)(),B=Object(c.a)($,1)[0],G=Object(o.f)(),U=Object(c.a)(G,1)[0],z=Object(o.e)(),J=Object(c.a)(z,1)[0];function A(e,t){V((function(n){n[e]=t}))}function H(){B("".concat(window.$api.setting_account_list,"/").concat(p)).then((function(e){var t=e.admin;y(t.adminCode),_(t.roleIds),V((function(e){e.phone=t.phone,e.name=t.name,e.status=t.status,e.roleIds=t.roleIds}))})).catch((function(e){return e}))}function X(e){var t=e.target["data-id"],n=e.target.checked;S((function(e){e.forEach((function(e){e.id===t&&(e.isChecked=n)}))}))}function Q(e){D((function(t){e.forEach((function(e){t[e]=""}))}))}return Object(b.useEffect)((function(){B("".concat(window.$api.setting_role_list),{size:1e3}).then((function(e){k(e.roles)})).catch((function(e){return e}))}),[]),Object(b.useEffect)((function(){p&&H()}),[p]),Object(b.useEffect)((function(){var e=C.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{isChecked:N.includes(e.id)})}));S(e)}),[C,N]),Object(b.useEffect)((function(){Q(["roleIds"]);var e=[];M.forEach((function(t){t.isChecked&&e.push(t.id)})),A("roleIds",e)}),[M]),Object(v.jsx)("div",{className:h.a.box,children:Object(v.jsxs)(l.a,Object(a.a)(Object(a.a)({className:h.a.form},{labelCol:{span:6},wrapperCol:{span:18}}),{},{children:[Object(v.jsx)(l.a.Item,{className:h.a.item,label:"\u8d26\u6237\u7f16\u53f7\uff1a",children:p?m:"(\u7cfb\u7edf\u81ea\u52a8\u751f\u6210)"}),Object(v.jsxs)(l.a.Item,{className:h.a.item,label:"\u624b\u673a\u53f7\uff1a",required:!0,children:[Object(v.jsx)(u.a,{placeholder:"\u8bf7\u8f93\u5165",maxLength:11,value:R.phone,setValue:function(e){A("phone",e)},onFocus:function(){Q(["phone"])}}),!!T.phone&&Object(v.jsx)("span",{className:"color-red",children:T.phone})]}),Object(v.jsxs)(l.a.Item,{className:h.a.item,label:"\u59d3\u540d\uff1a",required:!0,children:[Object(v.jsx)(u.a,{placeholder:"\u8bf7\u8f93\u5165",maxLength:20,value:R.name,setValue:function(e){A("name",e)},onFocus:function(){Q(["name"])}}),!!T.name&&Object(v.jsx)("span",{className:"color-red",children:T.name})]}),Object(v.jsx)(l.a.Item,{className:h.a.item,label:"\u5bc6\u7801\uff1a",children:p?Object(v.jsx)(d.a,{onClick:function(){J("".concat(window.$api.setting_account_list,"/").concat(p,"/resetPassword")).then((function(){r.a.success({title:"\u91cd\u7f6e\u5bc6\u7801\u6210\u529f\uff01",content:"\u5bc6\u7801\u5df2\u91cd\u7f6e\uff0c\u65b0\u5bc6\u7801\u4e3a000000",okText:"\u786e\u5b9a",maskClosable:!0})})).catch((function(e){r.a.error({title:"\u91cd\u7f6e\u5bc6\u7801\u5931\u8d25\uff01",okText:"\u5173\u95ed",content:window.$utility.generateRequestErrorMsg(e)})}))},children:"\u91cd\u7f6e\u5bc6\u7801"}):"\u9ed8\u8ba4\u5bc6\u7801000000"}),Object(v.jsx)(l.a.Item,{className:h.a.item,label:"\u72b6\u6001\uff1a",children:Object(v.jsxs)(i.a.Group,{value:R.status,onChange:function(e){A("status",e.target.value)},children:[Object(v.jsx)(i.a,{value:"1",children:"\u6b63\u5e38"}),Object(v.jsx)(i.a,{value:"0",children:"\u7981\u7528"})]})}),Object(v.jsxs)(l.a.Item,{className:h.a.item,label:"\u804c\u8d23\uff1a",required:!0,children:[Object(v.jsx)("div",{className:"".concat(h.a.roleList," scroll-y"),children:!!M.length&&M.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(s.a,{style:{margin:"2px 0"},checked:e.isChecked,disabled:"0"===e.status,"data-id":e.id,onChange:X,children:e.roleName})},e.id)}))}),!!T.roleIds&&Object(v.jsx)("span",{className:"color-red",children:T.roleIds})]}),Object(v.jsxs)(l.a.Item,Object(a.a)(Object(a.a)({},{wrapperCol:{offset:6,span:18}}),{},{className:h.a.item,children:[Object(v.jsx)(d.a,{type:"primary",onClick:function(){if(R.phone&&R.name&&R.roleIds.length){var t=p?Object(a.a)(Object(a.a)({},R),{},{id:p}):R,n=p?"\u4fdd\u5b58\u6210\u529f\uff01":"\u63d0\u4ea4\u6210\u529f\uff01",c=p?"\u8d26\u6237\u8bb0\u5f55\u5df2\u4fdd\u5b58":"\u65b0\u5efa\u8d26\u6237\u8bb0\u5f55\u6210\u529f";U("".concat(window.$api.setting_account_list),t).then((function(){r.a.success({title:n,content:c,okText:"\u786e\u5b9a",maskClosable:!0,afterClose:function(){e(window.$route.setting_account_list)}})})).catch((function(e){r.a.error({title:p?"\u4fdd\u5b58\u5931\u8d25\uff01":"\u63d0\u4ea4\u5931\u8d25\uff01",okText:"\u5173\u95ed",content:window.$utility.generateRequestErrorMsg(e)})}))}else D((function(e){R.phone||(e.phone="\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"),R.name||(e.name="\u8bf7\u8f93\u5165\u59d3\u540d\uff01"),R.roleIds.length||(e.roleIds="\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u804c\u8d23\uff01")}))},children:p?"\u4fdd\u5b58":"\u63d0\u4ea4"}),Object(v.jsx)(d.a,{className:"ml-10",onClick:function(){p?H():(_([]),V({phone:"",name:"",status:"1",roleIds:[]})),Q(["phone","name","roleIds"])},children:"\u91cd\u7f6e"})]}))]}))})}}}]);