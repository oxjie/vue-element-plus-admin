var G=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var j=(n,r,l)=>r in n?G(n,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[r]=l,H=(n,r)=>{for(var l in r||(r={}))K.call(r,l)&&j(n,l,r[l]);if(Y)for(var l of Y(r))Q.call(r,l)&&j(n,l,r[l]);return n};var h=(n,r,l)=>new Promise((b,y)=>{var k=m=>{try{g(l.next(m))}catch(u){y(u)}},P=m=>{try{g(l.throw(m))}catch(u){y(u)}},g=m=>m.done?b(m.value):Promise.resolve(m.value).then(k,P);g((l=l.apply(n,r)).next())});import{_ as Z}from"./ContentWrap.vue_vue_type_script_setup_true_lang-l6t57F60.js";import{_ as ee}from"./Search.vue_vue_type_script_setup_true_lang-RDMgefFn.js";import{_ as te}from"./Dialog.vue_vue_type_style_index_0_lang-wByr8Tu9.js";import{i as c,c as ae}from"./index-i99jxE2p.js";/* empty css               */import{_ as oe}from"./Table.vue_vue_type_script_lang-6_m45yZu.js";import{g as le,d as ie,s as re}from"./index-Va6GCmmq.js";import{u as ne}from"./useTable-8HzS6AQO.js";import{_ as se}from"./Write.vue_vue_type_script_setup_true_lang-_7xZ90v2.js";import{_ as me}from"./Detail.vue_vue_type_script_setup_true_lang-xz66Z4sD.js";import{u as de}from"./useCrudSchemas-Wb0jYVCT.js";import{y as ue}from"./element-plus--p0OFoYR.js";import{l as ce,a as d,J as pe,O as s,P as O,u as e,m as w,p as fe,R as p,q as ge,V as x,W as S,B as U,S as $,X as L,y as ve}from"./vue-chunks-zxmGq976.js";/* empty css                *//* empty css                  */import"./Form-6CSNlcUY.js";/* empty css               *//* empty css                    */import"./el-radio-button-rO44T3ZJ.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-mbXzEzUd.js";import"./style.css_vue_type_style_index_0_src_true_lang-mgfL5zCA.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-gku-B2at.js";import"./IconPicker-h_bHnmwh.js";import"./useForm-qScLqIVZ.js";import"./useIcon-6JuTV7mk.js";/* empty css                        *//* empty css                         *//* empty css                  */import"./index-ckVPvV2P.js";import"./useValidator-7yfg1EhU.js";import"./Descriptions--A5elxI3.js";import"./tree-sBP3NezW.js";const he={class:"mb-10px"};function A(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!ve(n)}const ot=ce({__name:"ExampleDialog",setup(n){const r=d([]),{tableRegister:l,tableState:b,tableMethods:y}=ne({fetchDataApi:()=>h(this,null,function*(){const{currentPage:a,pageSize:t}=b,i=yield le(H({pageIndex:e(a),pageSize:e(t)},e(N)));return{list:i.data.list,total:i.data.total}}),fetchDelApi:()=>h(this,null,function*(){return!!(yield ie(e(r)))})}),{loading:k,dataList:P,total:g,currentPage:m,pageSize:u}=b,{getList:z,getElTableExpose:F,delList:q}=y,N=d({}),B=a=>{N.value=a,z()},{t:o}=ae(),J=pe([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:o("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:o("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:o("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:o("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:o("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:a=>s(ue,{type:a.importance===1?"success":a.importance===2?"warning":"danger"},{default:()=>[a.importance===1?o("tableDemo.important"):a.importance===2?o("tableDemo.good"):o("tableDemo.commonly")]})}}},{field:"pageviews",label:o("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:o("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:a=>s("div",{innerHTML:a.content},null)}}},{field:"action",width:"260px",label:o("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:a=>{let t,i,V;return s(O,null,[s(c,{type:"primary",onClick:()=>I(a.row,"edit")},A(t=o("exampleDemo.edit"))?t:{default:()=>[t]}),s(c,{type:"success",onClick:()=>I(a.row,"detail")},A(i=o("exampleDemo.detail"))?i:{default:()=>[i]}),s(c,{type:"danger",onClick:()=>E(a.row)},A(V=o("exampleDemo.del"))?V:{default:()=>[V]})])}}}}]),{allSchemas:_}=de(J),f=d(!1),C=d(""),D=d(null),v=d(""),W=()=>{C.value=o("exampleDemo.add"),D.value=null,f.value=!0,v.value=""},R=d(!1),E=a=>h(this,null,function*(){const t=yield F();r.value=a?[a.id]:(t==null?void 0:t.getSelectionRows().map(i=>i.id))||[],R.value=!0,yield q(e(r).length).finally(()=>{R.value=!1})}),I=(a,t)=>{C.value=o(t==="edit"?"exampleDemo.edit":"exampleDemo.detail"),v.value=t,D.value=a,f.value=!0},M=d(),T=d(!1),X=()=>h(this,null,function*(){const a=e(M),t=yield a==null?void 0:a.submit();t&&(T.value=!0,(yield re(t).catch(()=>{}).finally(()=>{T.value=!1}))&&(f.value=!1,m.value=1,z()))});return(a,t)=>(w(),fe(O,null,[s(e(Z),null,{default:p(()=>[s(e(ee),{schema:e(_).searchSchema,onSearch:B,onReset:B},null,8,["schema"]),ge("div",he,[s(e(c),{type:"primary",onClick:W},{default:p(()=>[x(S(e(o)("exampleDemo.add")),1)]),_:1}),s(e(c),{loading:R.value,type:"danger",onClick:t[0]||(t[0]=i=>E(null))},{default:p(()=>[x(S(e(o)("exampleDemo.del")),1)]),_:1},8,["loading"])]),s(e(oe),{pageSize:e(u),"onUpdate:pageSize":t[1]||(t[1]=i=>U(u)?u.value=i:null),currentPage:e(m),"onUpdate:currentPage":t[2]||(t[2]=i=>U(m)?m.value=i:null),columns:e(_).tableColumns,data:e(P),loading:e(k),pagination:{total:e(g)},onRegister:e(l)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1}),s(e(te),{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=i=>f.value=i),title:C.value},{footer:p(()=>[v.value!=="detail"?(w(),$(e(c),{key:0,type:"primary",loading:T.value,onClick:X},{default:p(()=>[x(S(e(o)("exampleDemo.save")),1)]),_:1},8,["loading"])):L("",!0),s(e(c),{onClick:t[3]||(t[3]=i=>f.value=!1)},{default:p(()=>[x(S(e(o)("dialogDemo.close")),1)]),_:1})]),default:p(()=>[v.value!=="detail"?(w(),$(se,{key:0,ref_key:"writeRef",ref:M,"form-schema":e(_).formSchema,"current-row":D.value},null,8,["form-schema","current-row"])):L("",!0),v.value==="detail"?(w(),$(me,{key:1,"detail-schema":e(_).detailSchema,"current-row":D.value},null,8,["detail-schema","current-row"])):L("",!0)]),_:1},8,["modelValue","title"])],64))}});export{ot as default};
