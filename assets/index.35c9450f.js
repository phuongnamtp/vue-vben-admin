import{ab as e,d as t,v as a,x as n,a1 as r,aG as o,j as i,D as l}from"./index.a0c33e6e.js";function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=e(t({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(e,t){var u=t.slots,s=a("configProvider",n).getPrefixCls,d=r((function(){return s("divider",e.prefixCls)})),f=r((function(){var t,a=e.type,n=e.dashed,r=e.orientation,o=r.length>0?"-"+r:r,i=d.value;return c(t={},i,!0),c(t,"".concat(i,"-").concat(a),!0),c(t,"".concat(i,"-with-text").concat(o),u.default),c(t,"".concat(i,"-dashed"),!!n),t}));return function(){var e,t,a=o(null===(e=u.default)||void 0===e?void 0:e.call(u));return i("div",{class:f.value,role:"separator"},[a.length?i("span",{class:"".concat(d.value,"-inner-text")},(t=a,"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!l(t)?a:{default:function(){return[a]}})):null])}}}));export{u as D};