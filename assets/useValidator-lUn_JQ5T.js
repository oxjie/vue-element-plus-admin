var d=(s,m,t)=>new Promise((a,i)=>{var n=e=>{try{o(t.next(e))}catch(r){i(r)}},l=e=>{try{o(t.throw(e))}catch(r){i(r)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,l);o((t=t.apply(s,m)).next())});import{_ as I}from"./ContentWrap.vue_vue_type_script_setup_true_lang-l6t57F60.js";import{F as b}from"./Form-6CSNlcUY.js";import{u as R}from"./useValidator-7yfg1EhU.js";import{u as V}from"./useForm-qScLqIVZ.js";import{l as x,J as u,m as F,S,R as w,O as C,u as p}from"./vue-chunks-zxmGq976.js";import"./index-i99jxE2p.js";import"./element-plus--p0OFoYR.js";/* empty css                *//* empty css                  *//* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-rO44T3ZJ.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-mbXzEzUd.js";import"./style.css_vue_type_style_index_0_src_true_lang-mgfL5zCA.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-gku-B2at.js";import"./IconPicker-h_bHnmwh.js";const X=x({__name:"useValidator",setup(s){const{formRegister:m,formMethods:t}=V(),{getFormData:a}=t,{required:i,lengthRange:n,notSpace:l,notSpecialCharacters:o}=R(),e=u([{field:"field1",label:"必填",component:"Input"},{field:"field2",label:"长度范围",component:"Input"},{field:"field3",label:"不能有空格",component:"Input"},{field:"field4",label:"不能有特殊字符",component:"Input"},{field:"field5",label:"是否相等-值1",component:"Input"},{field:"field6",label:"是否相等-值2",component:"Input"}]),r=u({field1:[i()],field2:[n({min:2,max:5})],field3:[l()],field4:[o()],field5:[{asyncValidator:(_,f,c)=>d(this,null,function*(){const h=yield a(),{field6:g}=h;f!==g?c(new Error("两个值不相等")):c()})}]});return(_,f)=>(F(),S(p(I),{title:"useValidator"},{default:w(()=>[C(p(b),{schema:e,rules:r,onRegister:p(m)},null,8,["schema","rules","onRegister"])]),_:1}))}});export{X as default};
