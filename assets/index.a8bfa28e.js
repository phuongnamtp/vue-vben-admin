import{cW as e,b as i,d as s,g as o,h as r,o as t,i as a,w as n,j as p}from"./index.a0c33e6e.js";import{A as m}from"./index.6eab8075.js";import{h as d,_ as c}from"./index.7e3a34b7.js";import{_ as j}from"./index.68673cbc.js";import{u as l}from"./useForm.c84c148f.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";const{uploadUrl:u=""}=i();function f(i,s){return e.uploadFile({url:u,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var x=s({components:{BasicUpload:d,BasicForm:c,PageWrapper:j,[m.name]:m},setup(){const{createMessage:e}=o(),[i]=l({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:f,register:i}}});x.render=function(e,i,s,o,m,d){const c=r("a-alert"),j=r("BasicUpload"),l=r("BasicForm"),u=r("PageWrapper");return t(),a(u,{title:"上传组件示例"},{default:n((()=>[p(c,{message:"基础示例",class:"my-5"}),p(j,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(c,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(l,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default x;