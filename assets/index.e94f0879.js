import{d as e,r as t,e as a,g as o,h as i,o as s,i as r,w as n,j as p,m as l}from"./index.89eaa474.js";import{I as d}from"./index.c01cefa1.js";import{a as m}from"./index.72bfb6c6.js";import{u}from"./useCopyToClipboard.8170e010.js";import{_ as c}from"./index.6a59b07e.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.a793b9df.js";import"./EyeOutlined.b4c40e2a.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./RightOutlined.f6122b3f.js";/* empty css              */import"./useTimeout.2438cbf6.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./index.e2fe5134.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./isEqual.0bcea136.js";import"./toInteger.e5f6d519.js";import"./DownOutlined.1abeee16.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";var f=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:c,[d.name]:d},setup(){const e=t(""),{createMessage:i}=o(),{clipboardRef:s,copiedRef:r}=u();return{handleCopy:function(){const t=a(e);t?(s.value=t,a(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=l(" Copy ");f.render=function(e,t,a,o,l,d){const m=i("a-input"),u=i("a-button"),c=i("CollapseContainer"),f=i("PageWrapper");return s(),r(f,{title:"文本复制示例"},{default:n((()=>[p(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;