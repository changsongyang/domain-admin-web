import{_ as y}from"./index.12620d9a.js";import{ah as s,o as g,c as v,V as l,P as i,a as p,T as k,O as V,S as x,U as w,L as z,al as E,ax as L,ar as G,a9 as B,Q as T,aA as A}from"./vendor-vue.edbe275b.js";import{S as F,u as U}from"./SelectGroup.c41b73d9.js";import"./element-icon.ade3aa7e.js";import"./vendor-lib.4c56f242.js";import"./element-plus.dcbfaaa8.js";const I={name:[{message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},j={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:I,form:{name:""}}},computed:{},methods:{async getData(){if(this.row){let t={id:this.row.id};const e=await this.$http.getGroupById(t);if(e.code!=0)return;let o=e.data;this.form.name=o.name}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={name:this.form.name},o=null;this.row?(e.id=this.row.id,o=await this.$http.updateGroupById(e)):o=await this.$http.addGroup(e),o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},N={class:"text-center"};function P(t,e,o,_,a,n){const r=s("el-input"),u=s("el-form-item"),c=s("el-form"),h=s("el-button");return g(),v("div",null,[l(c,{ref:"form",model:a.form,rules:a.rules,"label-width":"60px"},{default:i(()=>[l(u,{label:"\u540D\u79F0",prop:"name"},{default:i(()=>[l(r,{type:"text",modelValue:a.form.name,"onUpdate:modelValue":e[0]||(e[0]=f=>a.form.name=f),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),p("div",N,[l(h,{onClick:n.handleCancel},{default:i(()=>[k("\u53D6 \u6D88")]),_:1},8,["onClick"]),l(h,{type:"primary",onClick:n.handleSubmit},{default:i(()=>[k("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const K=y(j,[["render",P]]),q={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:K},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u5206\u7EC4":"\u6DFB\u52A0\u5206\u7EC4"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function H(t,e,o,_,a,n){const r=s("DataForm"),u=s("el-dialog");return g(),V(u,{title:n.dialogTitle,modelValue:n.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=c=>n.dialogVisible=c),width:"300px",center:"","append-to-body":"","lock-scroll":!1},{default:i(()=>[n.dialogVisible?(g(),V(r,{key:0,row:o.row,onOnCancel:n.handleClose,onOnSuccess:n.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["title","modelValue"])}const $=y(q,[["render",H]]),Q={name:"",components:{},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let e={id:t.id};const o=await this.$http.function(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleStatusChange(t){let e={id:t.id};const o=await this.$http.function(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},handleUpdateSuccess(){this.$emit("on-success")},handleSelectable(t,e){return!Boolean(t.group_id)}},created(){}};function J(t,e,o,_,a,n){const r=s("el-table-column"),u=s("el-table");return g(),v("div",null,[l(u,z({stripe:"",border:""},t.$attrs,E(t.$events)),{default:i(()=>[l(r,{type:"selection",width:"40","header-align":"center",align:"center",selectable:n.handleSelectable},null,8,["selectable"]),l(r,{label:"\u57DF\u540D","header-align":"center",align:"center",prop:"domain"},{default:i(c=>[p("span",null,w(c.row.domain||"-"),1)]),_:1}),l(r,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",prop:"check_time"},{default:i(c=>[p("span",null,w(c.row.group_name||"-"),1)]),_:1}),l(r,{label:"\u5907\u6CE8","header-align":"center",align:"center",prop:"check_time","show-overflow-tooltip":""},{default:i(c=>[p("span",null,w(c.row.alias||"-"),1)]),_:1})]),_:1},16)])}const M=y(Q,[["render",J]]),W={name:"group-domain-list",props:{row:{type:Object}},components:{DataTable:M,SelectGroup:F},data(){return{list:[],total:0,page:1,size:10,keyword:"",loading:!0,dialogVisible:!1,selection:[],group_id:""}},computed:{...L(U,{groupOptions:"getGroupOptions"}),disableRelationButton(){return this.selection.length==0}},methods:{resetData(){this.page=1,this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,keyword:this.keyword,group_id:this.group_id};try{const e=await this.$http.getDomainList(t);e.code==0&&(this.list=e.data.list.map(o=>(o.group_id&&(o.group_name=this.getGroupName(o.group_id)),o)),this.total=e.data.total)}catch(e){console.log(e)}finally{this.loading=!1}},getGroupName(t){let e=this.groupOptions.find(o=>o.value==t);if(e)return e.name},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},async handleRelation(){let t=this.selection.map(_=>_.id);console.log(t);let e={domain_ids:t,group_id:this.row.id};const o=await this.$http.domainRelationGroup(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()):this.$msg.error(o.msg)},handleSelectionChange(t){console.log(t),this.selection=t},handleEditRow(t){}},created(){this.row&&(this.group_id=this.row.id),this.getData()}},X={class:""},Y={class:"margin-bottom--20"};function Z(t,e,o,_,a,n){const r=s("Search"),u=s("el-icon"),c=s("el-button"),h=s("el-input"),f=s("SelectGroup"),C=s("DataTable"),D=s("el-pagination"),S=G("loading");return g(),v("div",X,[p("div",Y,[l(h,{style:{width:"260px"},modelValue:a.keyword,"onUpdate:modelValue":e[0]||(e[0]=m=>a.keyword=m),placeholder:"\u8F93\u5165\u57DF\u540D",clearable:"",onKeypress:B(n.handleSearch,["enter"]),onClear:n.handleSearch},{append:i(()=>[l(c,{onClick:n.handleSearch},{default:i(()=>[l(u,null,{default:i(()=>[l(r)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"]),l(f,{class:"w-[150px] ml-sm",modelValue:a.group_id,"onUpdate:modelValue":e[1]||(e[1]=m=>a.group_id=m),clearable:"",showNotGroup:"",onChange:n.resetData},null,8,["modelValue","onChange"]),l(c,{class:"ml-sm",type:"primary",onClick:n.handleRelation,disabled:n.disableRelationButton},{default:i(()=>[k("\u5173\u8054")]),_:1},8,["onClick","disabled"])]),T(l(C,{class:"mt-md",data:a.list,onSelectionChange:n.handleSelectionChange,onOnSuccess:n.resetData,onOnEditRow:n.handleEditRow},null,8,["data","onSelectionChange","onOnSuccess","onOnEditRow"]),[[S,a.loading]]),l(D,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:a.total,"page-size":a.size,"onUpdate:pageSize":e[2]||(e[2]=m=>a.size=m),"current-page":a.page,"onUpdate:currentPage":e[3]||(e[3]=m=>a.page=m),onCurrentChange:n.getData},null,8,["total","page-size","current-page","onCurrentChange"])])}const ee=y(W,[["render",Z]]),te={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},components:{DataTableIndex:ee},data(){return{}},computed:{dialogTitle(){return this.row?`\u5206\u7EC4\u5173\u8054\u57DF\u540D\uFF1A${this.row.name}`:"-"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function le(t,e,o,_,a,n){const r=s("DataTableIndex"),u=s("el-dialog");return g(),V(u,{title:n.dialogTitle,modelValue:n.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=c=>n.dialogVisible=c),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:n.handleDialogClose},{default:i(()=>[n.dialogVisible?(g(),V(r,{key:0,row:o.row,onOnCancel:n.handleClose,onOnSuccess:n.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["title","modelValue","onClose"])}const ne=y(te,[["render",le]]),oe={name:"",components:{DataFormDialog:$,GroupDomainListDialog:ne},props:{list:{type:Array}},emits:["selection-change"],computed:{},data(){return{currentRow:null,dialogVisible:!1,groupDomainListDialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let e={id:t.id};const o=await this.$http.deleteGroupById(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleStatusChange(t){let e={id:t.id};const o=await this.$http.function(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},handleUpdateSuccess(){this.$emit("on-success")},handleCountClick(t){console.log("handleCountClick"),this.currentRow=t,this.groupDomainListDialogVisible=!0}},created(){}};function ae(t,e,o,_,a,n){const r=s("el-table-column"),u=s("Link"),c=s("el-icon"),h=s("el-link"),f=s("Edit"),C=s("Delete"),D=s("el-popconfirm"),S=s("el-table"),m=s("DataFormDialog"),R=s("GroupDomainListDialog");return g(),v("div",null,[l(S,{data:o.list,stripe:"",border:"",onSelectionChange:e[0]||(e[0]=d=>t.$emit("selection-change",d))},{default:i(()=>[l(r,{type:"selection","header-align":"center",align:"center",width:"40"}),l(r,{label:"\u540D\u79F0","header-align":"center",align:"center",prop:"name"},{default:i(d=>[p("span",null,w(d.row.name||"-"),1)]),_:1}),l(r,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",prop:"name"},{default:i(d=>[p("span",null,w(d.row.cert_count||"-"),1)]),_:1}),l(r,{label:"\u57DF\u540D\u6570\u91CF","header-align":"center",align:"center",prop:"name"},{default:i(d=>[p("span",null,w(d.row.domain_count||"-"),1)]),_:1}),l(r,{label:"\u5173\u8054\u8BC1\u4E66",width:"90","header-align":"center",align:"center"},{default:i(d=>[l(h,{underline:!1,type:"primary",onClick:O=>n.handleCountClick(d.row)},{default:i(()=>[l(c,null,{default:i(()=>[l(u)]),_:1})]),_:2},1032,["onClick"])]),_:1}),l(r,{label:"\u7F16\u8F91",width:"60","header-align":"center",align:"center"},{default:i(d=>[l(h,{underline:!1,type:"primary",onClick:O=>n.handleEditRow(d.row)},{default:i(()=>[l(c,null,{default:i(()=>[l(f)]),_:1})]),_:2},1032,["onClick"])]),_:1}),l(r,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:i(d=>[l(D,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:O=>n.handleDeleteClick(d.row)},{reference:i(()=>[l(h,{underline:!1,type:"danger"},{default:i(()=>[l(c,null,{default:i(()=>[l(C)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),l(m,{visible:a.dialogVisible,"onUpdate:visible":e[1]||(e[1]=d=>a.dialogVisible=d),row:a.currentRow,onOnSuccess:n.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),l(R,{row:a.currentRow,visible:a.groupDomainListDialogVisible,"onUpdate:visible":e[2]||(e[2]=d=>a.groupDomainListDialogVisible=d),onOnSuccess:n.handleUpdateSuccess},null,8,["row","visible","onOnSuccess"])])}const se=y(oe,[["render",ae]]),ie={name:"group-list",props:{},components:{DataFormDialog:$,DataTable:se},data(){return{list:[],total:0,page:1,size:20,keyword:"",loading:!0,dialogVisible:!1,selectedRows:[]}},computed:{showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...A(U,{setGroupOptions:"setGroupOptions"}),resetData(){this.page=1,this.getData()},async getData(){this.loading=!0;let t={keyword:this.keyword.trim()};try{const e=await this.$http.getGroupList(t);e.code==0&&(this.list=e.data.list,this.total=e.data.total,this.setGroupOptions(e.data.list))}catch(e){console.log(e)}finally{this.loading=!1}},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},handleEditRow(t){},handleSelectionChange(t){this.selectedRows=t},async handleBatchDeleteConfirm(){let t=this.$loading({fullscreen:!0}),e={group_ids:this.selectedRows.map(o=>o.id)};try{const o=await this.$http.deleteGroupByIds(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(o.msg)}catch(o){console.log(o)}finally{this.$nextTick(()=>{t.close()})}}},created(){this.getData()}},re={class:"app-container"},ce={class:"flex justify-between margin-bottom--20"},de={class:"flex mt-sm",style:{"align-items":"center"}},ue={style:{"font-size":"14px",color:"#333333"}},pe={class:"flex",style:{"margin-left":"auto"}};function me(t,e,o,_,a,n){const r=s("Plus"),u=s("el-icon"),c=s("el-button"),h=s("Search"),f=s("el-input"),C=s("Delete"),D=s("el-link"),S=s("el-popconfirm"),m=s("DataTable"),R=s("el-pagination"),d=s("DataFormDialog"),O=G("loading");return g(),v("div",re,[p("div",ce,[l(c,{type:"primary",onClick:n.handleAddRow},{default:i(()=>[l(u,null,{default:i(()=>[l(r)]),_:1}),k("\u6DFB\u52A0")]),_:1},8,["onClick"]),l(f,{class:"ml-sm",style:{width:"260px"},modelValue:a.keyword,"onUpdate:modelValue":e[0]||(e[0]=b=>a.keyword=b),clearable:"",placeholder:"\u641C\u7D22\u5206\u7EC4",onKeypress:B(n.handleSearch,["enter"]),onClear:n.handleSearch},{append:i(()=>[l(c,{onClick:n.handleSearch},{default:i(()=>[l(u,null,{default:i(()=>[l(h)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),p("div",de,[p("div",ue,"\u5171\u8BA1 "+w(a.total)+" \u6761\u6570\u636E",1),p("div",pe,[n.showBatchDeleteButton?(g(),V(S,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:n.handleBatchDeleteConfirm},{reference:i(()=>[l(D,{underline:!1,type:"danger",class:"mr-sm"},{default:i(()=>[l(u,null,{default:i(()=>[l(C)]),_:1}),k("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):x("",!0)])]),T(l(m,{class:"mt-sm",list:a.list,onOnSuccess:n.resetData,onOnEditRow:n.handleEditRow,onSelectionChange:n.handleSelectionChange},null,8,["list","onOnSuccess","onOnEditRow","onSelectionChange"]),[[O,a.loading]]),l(R,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:a.total,"page-size":a.total,"onUpdate:pageSize":e[1]||(e[1]=b=>a.total=b),"current-page":a.page,"onUpdate:currentPage":e[2]||(e[2]=b=>a.page=b),onCurrentChange:n.getData},null,8,["total","page-size","current-page","onCurrentChange"]),l(d,{visible:a.dialogVisible,"onUpdate:visible":e[3]||(e[3]=b=>a.dialogVisible=b),onOnSuccess:n.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const ye=y(ie,[["render",me]]);export{ye as default};