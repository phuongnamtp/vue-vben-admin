import{_ as e}from"./index.5a4506de.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as a,h as l,o as c,i as r,j as d,w as m,m as p}from"./index.89eaa474.js";import{d as f}from"./table.3e76ddf2.js";import"./index.7738c60b.js";import"./SearchOutlined.a793b9df.js";import"./CheckOutlined.8a1d6e93.js";import"./DownOutlined.1abeee16.js";import"./index.a11b9577.js";import"./index.a7743e73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e6cdd1b0.js";import"./vendor.3b1829c7.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./index.77be0dac.js";import"./index.591d974e.js";import"./index.f7d29dbe.js";import"./UpOutlined.c83d32c3.js";import"./index.c01cefa1.js";import"./EyeOutlined.b4c40e2a.js";import"./index.1e19492c.js";import"./colors.e9cc1e07.js";import"./RightOutlined.f6122b3f.js";import"./RedoOutlined.1b8dc239.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./Tree.62740264.js";import"./util.99ac0f73.js";import"./useAttrs.2235e19b.js";/* empty css              */import"./index.6c42ac2e.js";import"./uuid.f9ee62f2.js";import"./index.089467a0.js";import"./DeleteOutlined.74882a9c.js";import"./index.7b6fd761.js";import"./useTimeout.2438cbf6.js";import"./useWindowSizeFn.02c59bc0.js";import"./index.72bfb6c6.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./FullscreenOutlined.038a48b5.js";import"./index.577f6c6d.js";import"./index.ef8c8b6c.js";import"./index.0b034549.js";import"./LeftOutlined.3f688a61.js";import"./download.3a13bc2e.js";import"./index.92fb4aac.js";import"./DoubleLeftOutlined.89419e92.js";import"./DoubleRightOutlined.5528d655.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.31c0fca4.js";import"./CaretDownFilled.a131afde.js";import"./clickOutside.e44aad26.js";import"./useSortable.fd642570.js";import"./SettingOutlined.9cc209c2.js";import"./useExpose.911f3df6.js";import"./useForm.96500e09.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function l(){const i=a(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:i(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(i()),l().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=p(" 还原 "),C=p(" 开启loading "),x=p(" 更改Columns "),k=p(" 获取Columns "),w=p(" 获取表格数据 "),O=p(" 跳转到第2页 "),R={class:"mb-4"},S=p(" 获取选中行 "),_=p(" 获取选中行Key "),y=p(" 设置选中行 "),T=p(" 清空选中行 "),h=p(" 获取分页信息 ");u.render=function(e,i,t,o,s,n){const a=l("a-button"),p=l("BasicTable");return c(),r("div",j,[d("div",b,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[O])),_:1},8,["onClick"])]),d("div",R,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[S])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;