import{_ as g}from"./ContentWrap.vue_vue_type_script_setup_true_lang-l6t57F60.js";import{u as k}from"./useTagsView-yi-GQG0Z.js";import{l as b,aB as B,ah as w,m as V,S as x,R as e,O as s,V as a,u as R}from"./vue-chunks-zxmGq976.js";import"./index-i99jxE2p.js";import"./element-plus--p0OFoYR.js";/* empty css                *//* empty css                  */const q=b({__name:"useTagsView",setup(A){const{push:o}=B(),{closeAll:n,closeLeft:i,closeRight:l,closeOther:c,closeCurrent:p,refreshPage:m,setTitle:r}=k(),u=()=>{n(()=>{o("/dashboard/analysis")})},_=()=>{i()},f=()=>{l()},d=()=>{c()},y=()=>{m()},T=()=>{p(void 0,()=>{o("/dashboard/analysis")})},h=()=>{r(new Date().getTime().toString())},C=()=>{r(`分析页-${new Date().getTime().toString()}`,"/dashboard/analysis")};return(O,S)=>{const t=w("BaseButton");return V(),x(R(g),{title:"useTagsView"},{default:e(()=>[s(t,{type:"primary",onClick:u},{default:e(()=>[a(" 关闭所有标签页 ")]),_:1}),s(t,{type:"primary",onClick:_},{default:e(()=>[a(" 关闭左侧标签页 ")]),_:1}),s(t,{type:"primary",onClick:f},{default:e(()=>[a(" 关闭右侧标签页 ")]),_:1}),s(t,{type:"primary",onClick:d},{default:e(()=>[a(" 关闭其他标签页 ")]),_:1}),s(t,{type:"primary",onClick:T},{default:e(()=>[a(" 关闭当前标签页 ")]),_:1}),s(t,{type:"primary",onClick:y},{default:e(()=>[a(" 刷新当前标签页 ")]),_:1}),s(t,{type:"primary",onClick:h},{default:e(()=>[a(" 修改当前标题 ")]),_:1}),s(t,{type:"primary",onClick:C},{default:e(()=>[a(" 修改分析页标题 ")]),_:1})]),_:1})}}});export{q as default};
