import{aw as u,ax as c,ah as a,o as s,O as r,P as i,c as d,a8 as g,F as m,L as _,al as O}from"./vendor-vue.9e61e0af.js";import{H as f,_ as h}from"./index.ff5df888.js";const G=u({id:"group-store",state:()=>({groupOptions:[]}),getters:{getGroupOptions:e=>e.groupOptions},actions:{setGroupOptions(e){this.groupOptions=e.map(t=>({...t,value:t.id,label:t.name}))},async updateGroupOptions(){const e=await f.getGroupList();e.code==0&&this.setGroupOptions(e.data.list)}}}),v={name:"SelectGroup",props:{},components:{},data(){return{}},computed:{...c(G,{groupOptions:"getGroupOptions"}),options(){return this.groupOptions}},methods:{async getData(){}},created(){this.getData()}};function S(e,t,$,b,k,n){const p=a("el-option"),l=a("el-select");return s(),r(l,_(e.$attrs,O(e.$events),{placeholder:"\u5206\u7EC4"}),{default:i(()=>[(s(!0),d(m,null,g(n.options,o=>(s(),r(p,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},16)}const y=h(v,[["render",S]]);export{y as S,G as u};