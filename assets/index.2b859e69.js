import{d as e,r as o,cr as t,cs as r,h as i,o as s,i as n,bz as a,j as p,m as l}from"./index.a0c33e6e.js";import{C as c}from"./index.fed1aa5a.js";import"./index.a3ecbb5c.js";import"./index.1a355b4a.js";import{_ as d}from"./index.7e3a34b7.js";import m from"./PersonTable.a4cb0098.js";import{_ as f}from"./index.68673cbc.js";import{u as b}from"./useForm.c84c148f.js";import"./index.93ab6b75.js";import"./UpOutlined.94383fff.js";import"./DownOutlined.69023226.js";import"./LeftOutlined.662c68ae.js";import"./RightOutlined.0b237a08.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./CheckOutlined.dc4c859a.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./download.8d304dc4.js";import"./index.11f321e7.js";import"./index.45038be4.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./clickOutside.5baabbc1.js";import"./useSortable.d3f9a0f7.js";import"./CheckOutlined.cb3bea7f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useTable.c5b1b2e5.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:d,PersonTable:m,PageWrapper:f,[c.name]:c},setup(){const e=o(null),[t,{validate:r}]=b({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[i,{validate:s}]=b({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),s()])}catch(o){}},tableRef:e}}});const h=a("data-v-85ff7730");t("data-v-85ff7730");const q=l("提交");r();const v=h(((e,o,t,r,a,l)=>{const c=i("BasicForm"),d=i("a-card"),m=i("PersonTable"),f=i("a-button"),b=i("PageWrapper");return s(),n(b,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:h((()=>[p(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[q])),_:1},8,["onClick"])])),default:h((()=>[p(d,{title:"仓库管理",bordered:!1},{default:h((()=>[p(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(d,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[p(c,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(d,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[p(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=v,g.__scopeId="data-v-85ff7730";export default g;