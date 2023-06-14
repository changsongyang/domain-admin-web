import{i as N}from"./validator.0c34c3e7.js";import{S as z,u as R}from"./SelectGroup.019ce6b3.js";import{_ as y,d as A,r as q}from"./index.7554d22a.js";import{ah as l,ar as T,Q as B,o as h,c as x,V as a,P as n,a as m,T as b,O as D,S as v,U as _,L as H,ax as E,aA as K,a9 as M}from"./vendor-vue.edbe275b.js";import{C as P}from"./ConnectStatus.576ec4c4.js";import{E as G,A as Q,a as J,D as W,b as X,C as Y}from"./ConditionFilterGroup.cb845efa.js";import{F as Z}from"./vendor-lib.4c56f242.js";import{a as ee}from"./element-plus.dcbfaaa8.js";import"./element-icon.ade3aa7e.js";const te={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(t,i,e)=>{if(!i)return e();if(N(i))e();else return e(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ie={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:z},data(){return{loading:!1,form:{domain:"",alias:"",port:443,group_id:""},rules:te}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let t={id:this.row.id},e=(await this.$http.getDomainById(t)).data;this.form.domain=e.domain,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(t=>{if(console.log(t),t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),i={domain:this.form.domain.trim()},e=null;this.row?(i.id=this.row.id,e=await this.$http.updateDomainInfoById(i)):e=await this.$http.addDomainInfo(i),e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},ae={class:"text-center"};function oe(t,i,e,p,s,o){const c=l("el-input"),d=l("el-form-item"),u=l("el-form"),w=l("el-button"),S=T("loading");return B((h(),x("div",null,[a(u,{ref:"form",model:s.form,rules:s.rules,"label-width":"60px"},{default:n(()=>[a(d,{label:"\u57DF\u540D",prop:"domain"},{default:n(()=>[a(c,{type:"text",modelValue:s.form.domain,"onUpdate:modelValue":i[0]||(i[0]=g=>s.form.domain=g),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D",disabled:o.disabledDomain},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"]),m("div",ae,[a(w,{onClick:o.handleCancel},{default:n(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),a(w,{type:"primary",onClick:o.handleSubmit},{default:n(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[S,s.loading]])}const ne=y(ie,[["render",oe]]),se={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ne},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function le(t,i,e,p,s,o){const c=l("DataForm"),d=l("el-dialog");return h(),D(d,{title:o.dialogTitle,modelValue:o.dialogVisible,"onUpdate:modelValue":i[0]||(i[0]=u=>o.dialogVisible=u),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:n(()=>[o.dialogVisible?(h(),D(c,{key:0,row:e.row,onOnCancel:o.handleClose,onOnSuccess:o.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):v("",!0)]),_:1},8,["title","modelValue"])}const L=y(se,[["render",le]]),re={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:P,ExpireDays:G,AddressList:Q},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:""},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let t={domain_info_id:this.row.id};const i=await this.$http.getDomainInfoById(t);if(i.code!=0)return;let e=i.data;this.form.domain=e.domain,this.form.domain_url=e.domain_url,this.form.ip=e.ip,this.form.start_time=e.start_time,this.form.expire_time=e.expire_time,this.form.check_time=e.check_time,this.form.connect_status=e.connect_status,this.form.total_days=e.total_days,this.form.expire_days=e.expire_days,this.form.real_time_expire_days=e.real_time_expire_days,this.form.create_time=e.create_time,this.form.update_time=e.update_time,this.form.domain_auto_update=e.domain_auto_update,this.form.domain_auto_update_label=e.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=e.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=e.domain_check_time_label,this.form.port=e.port,this.form.alias=e.alias,this.form.domain_start_time=e.domain_start_time,this.form.domain_expire_time=e.domain_expire_time,this.form.real_time_domain_expire_days=e.real_time_domain_expire_days,this.form.detail={issuer:e.detail.issuer||{},subject:e.detail.subject||{}}}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),i={domain_info_id:this.row.id};(await this.$http.updateDomainCertInfoById(i)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),t.close()},async getIpInfo(){let t={ip:this.form.ip};const i=await this.$http.getIpInfo(t);i.code==0&&(this.ipInfo=i.data)}},created(){this.getData()}},de={class:"domain-detail"},ce={class:"mo-form-detail grid grid-cols-2"},me={class:"truncate"},ue={class:"flex justify-between flex-1"},pe={class:"truncate"},_e={class:"truncate"},he={class:"mo-form-detail mt-[20px]"},fe={class:"truncate"},ge={class:"text-center mt-md"};function be(t,i,e,p,s,o){const c=l("el-link"),d=l("el-form-item"),u=l("el-form"),w=l("ExpireDays"),S=l("Refresh"),g=l("el-icon"),k=l("el-button");return h(),x("div",de,[m("div",ce,[a(u,{"label-width":"130px"},{default:n(()=>[a(d,{label:"\u57DF\u540D",prop:"domain"},{default:n(()=>[a(c,{underline:!1,href:s.form.domain_url,target:"_blank"},{default:n(()=>[b(_(s.form.domain),1)]),_:1},8,["href"])]),_:1}),a(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:n(()=>[m("span",null,_(s.form.domain_start_time||"-"),1)]),_:1}),a(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:n(()=>[m("span",null,_(s.form.domain_expire_time||"-"),1)]),_:1}),a(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:n(()=>[m("span",me,_(s.form.domain_auto_update_label||"-"),1)]),_:1})]),_:1}),a(u,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:n(()=>[a(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:n(()=>[m("span",null,_(s.form.port||"-"),1)]),_:1}),a(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:n(()=>[a(w,{value:s.form.real_time_domain_expire_days},null,8,["value"])]),_:1}),a(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:n(()=>[m("div",ue,[m("span",pe,_(s.form.domain_check_time_label||"-"),1),a(c,{underline:!1,type:"primary",class:"mr-sm",disabled:!s.form.domain_auto_update,onClick:o.handleUpdateRowDomainInfo},{default:n(()=>[a(g,null,{default:n(()=>[a(S)]),_:1})]),_:1},8,["disabled","onClick"])])]),_:1}),a(d,{label:"\u8FC7\u671F\u76D1\u6D4B",prop:"isp"},{default:n(()=>[m("span",_e,_(s.form.domain_expire_monitor||"-"),1)]),_:1})]),_:1})]),m("div",he,[a(u,{"label-width":"130px"},{default:n(()=>[a(d,{label:"\u5907\u6CE8",prop:"isp"},{default:n(()=>[m("span",fe,_(s.form.alias||"-"),1)]),_:1})]),_:1})]),m("div",ge,[a(k,{type:"primary",onClick:o.handleCancel},{default:n(()=>[b("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const De=y(re,[["render",be]]),we={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:De},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Ce(t,i,e,p,s,o){const c=l("DataForm"),d=l("el-dialog");return h(),D(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:o.dialogVisible,"onUpdate:modelValue":i[0]||(i[0]=u=>o.dialogVisible=u),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:o.handleDialogClose},{default:n(()=>[o.dialogVisible?(h(),D(c,{key:0,row:e.row,onOnCancel:o.handleClose,onOnSuccess:o.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):v("",!0)]),_:1},8,["modelValue","onClose"])}const ye=y(we,[["render",Ce]]),Se={name:"",components:{DataFormDialog:L,DataDetailDialog:ye,ConnectStatus:P,ExpireDays:G,ExpireProgress:J,DomainSettingDialog:W,AddressListgDialog:X},emits:["on-success","selection-change","sort-change"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,DomainSettingDialogVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let i={domain_info_id:t.id};const e=await this.$http.deleteDomainInfoById(i);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg)},async handleStatusChange(t){let i={id:t.id};const e=await this.$Http.function(i);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg)},async handleMonitorStatusChange(t,i){let e={domain_info_id:t.id,field:"is_expire_monitor",value:i};const p=await this.$http.updateDomainInfoFieldById(e);p.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(p.msg)},async handleAutoUpdateStatusChange(t,i){let e={domain_info_id:t.id,field:"is_auto_update",value:i};const p=await this.$http.updateDomainInfoFieldById(e);p.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(p.msg)},async handleUpdateRowDomainInfo(t){let i=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_info_id:t.id};(await this.$http.updateDomainInfoRowById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),i.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(t){this.currentRow=t,this.dialogDetailVisible=!0},handleDomainSettingDialogShow(t){this.currentRow=t,this.DomainSettingDialogVisible=!0},handleShowAddressListgDialog(t){this.currentRow=t,this.AddressListgDialogVisible=!0},handleCertCountClick(t){this.$router.push({name:"domain-list",query:{keyword:t.domain}})}},created(){}},xe={key:1};function ke(t,i,e,p,s,o){const c=l("el-table-column"),d=l("el-link"),u=l("ExpireDays"),w=l("el-switch"),S=l("Refresh"),g=l("el-icon"),k=l("Setting"),V=l("Edit"),O=l("Delete"),U=l("el-popconfirm"),I=l("el-table"),$=l("DataFormDialog"),F=l("DataDetailDialog"),C=l("DomainSettingDialog"),j=l("AddressListgDialog");return h(),x("div",null,[a(I,H({stripe:"",border:""},t.$attrs,{onSortChange:i[0]||(i[0]=r=>t.$emit("sort-change",r)),onSelectionChange:i[1]||(i[1]=r=>t.$emit("selection-change",r))}),{default:n(()=>[a(c,{type:"selection","header-align":"center",align:"center",width:"40"}),a(c,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:n(r=>[a(d,{underline:!1,onClick:f=>o.handleShowDetail(r.row)},{default:n(()=>[b(_(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),a(c,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:n(r=>[a(u,{value:r.row.real_domain_expire_days},null,8,["value"])]),_:1}),a(c,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:n(r=>[r.row.ssl_count&&r.row.ssl_count>0?(h(),D(d,{key:0,underline:!1,onClick:f=>o.handleCertCountClick(r.row)},{default:n(()=>[b(_(r.row.ssl_count),1)]),_:2},1032,["onClick"])):(h(),x("span",xe,"-"))]),_:1}),a(c,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:n(r=>[m("span",null,_(r.row.group_name||"-"),1)]),_:1}),a(c,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"check_time","show-overflow-tooltip":""},{default:n(r=>[m("span",null,_(r.row.alias||"-"),1)]),_:1}),a(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:n(r=>[m("span",null,_(r.row.update_time_label||"-"),1)]),_:1}),a(c,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:n(r=>[a(w,{style:{transform:"scale(0.8)"},modelValue:r.row.is_auto_update,"onUpdate:modelValue":f=>r.row.is_auto_update=f,onChange:f=>o.handleAutoUpdateStatusChange(r.row,f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(c,{label:"\u76D1\u6D4B",width:"60","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:n(r=>[a(w,{style:{transform:"scale(0.8)"},modelValue:r.row.is_expire_monitor,"onUpdate:modelValue":f=>r.row.is_expire_monitor=f,onChange:f=>o.handleMonitorStatusChange(r.row,f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(c,{label:"\u64CD\u4F5C",width:"140","header-align":"center",align:"center"},{default:n(r=>[a(d,{underline:!1,type:"primary",class:"mr-sm",onClick:f=>o.handleUpdateRowDomainInfo(r.row)},{default:n(()=>[a(g,null,{default:n(()=>[a(S)]),_:1})]),_:2},1032,["onClick"]),a(d,{underline:!1,type:"primary",class:"mr-sm",onClick:f=>o.handleDomainSettingDialogShow(r.row)},{default:n(()=>[a(g,null,{default:n(()=>[a(k)]),_:1})]),_:2},1032,["onClick"]),a(d,{underline:!1,type:"primary",class:"mr-sm",onClick:f=>o.handleEditRow(r.row)},{default:n(()=>[a(g,null,{default:n(()=>[a(V)]),_:1})]),_:2},1032,["onClick"]),a(U,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:f=>o.handleDeleteClick(r.row)},{reference:n(()=>[a(d,{underline:!1,type:"danger"},{default:n(()=>[a(g,null,{default:n(()=>[a(O)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),a($,{visible:s.dialogVisible,"onUpdate:visible":i[2]||(i[2]=r=>s.dialogVisible=r),row:s.currentRow,onOnSuccess:o.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),a(F,{row:s.currentRow,visible:s.dialogDetailVisible,"onUpdate:visible":i[3]||(i[3]=r=>s.dialogDetailVisible=r),onOnSuccess:o.handleDetailSuccess},null,8,["row","visible","onOnSuccess"]),a(C,{row:s.currentRow,visible:s.DomainSettingDialogVisible,"onUpdate:visible":i[4]||(i[4]=r=>s.DomainSettingDialogVisible=r),onOnSuccess:o.handleUpdateSuccess},null,8,["row","visible","onOnSuccess"]),s.currentRow?(h(),D(j,{key:0,domainId:s.currentRow.id,visible:s.AddressListgDialogVisible,"onUpdate:visible":i[5]||(i[5]=r=>s.AddressListgDialogVisible=r),onOnSuccess:o.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):v("",!0)])}const ve=y(Se,[["render",ke]]),Ve={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=setInterval(()=>{this.getUpdateDomainStatusOfUser()},2e3),(await this.$http.updateAllDomainCertInfoOfUser()).code==0&&this.$msg.success("\u64CD\u4F5C\u6210\u529F")},async getUpdateDomainStatusOfUser(){const t=await this.$http.getUpdateDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Oe(t,i,e,p,s,o){const c=l("Refresh"),d=l("el-icon"),u=l("el-link");return h(),D(u,{underline:!1,type:"primary",onClick:o.updateAllDomainCertInfoOfUser,disabled:o.disableUpdateButton},{default:n(()=>[a(d,null,{default:n(()=>[a(c)]),_:1}),b(_(o.updateText),1)]),_:1},8,["onClick","disabled"])}const Ue=y(Ve,[["render",Oe]]),Ie={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async checkDomainCert(){this.updateTimer=setInterval(()=>{this.getUpdateDomainStatusOfUser()},2e3),(await this.$http.checkDomainCert()).ok&&this.$msg.success("\u64CD\u4F5C\u6210\u529F")},async getUpdateDomainStatusOfUser(){const t=await this.$http.getCheckDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function $e(t,i,e,p,s,o){const c=l("Position"),d=l("el-icon"),u=l("el-link");return h(),D(u,{underline:!1,type:"primary",onClick:o.checkDomainCert,disabled:o.disableUpdateButton},{default:n(()=>[a(d,null,{default:n(()=>[a(c)]),_:1}),b(_(o.updateText),1)]),_:1},8,["onClick","disabled"])}const Fe=y(Ie,[["render",$e]]),Re={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:Y},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!1,selected:[],options:[]}]}},computed:{...E(R,{groupOptions:"getGroupOptions"})},methods:{async getData(){this.options.map(t=>{t.field=="group_ids"&&(this.groupOptions&&this.groupOptions.length>0?t.options=[...this.groupOptions.map(i=>{let e=i.name;return i.domain_count>0&&(e=`${i.name} ${i.domain_count}`),{...i,value:i.id,label:e}}),{label:"\u672A\u5206\u7EC4",value:0}]:t.hidden=!0)}),this.loading=!1},handleChange(t){this.$emit("on-change",this.options)}},created(){this.getData()}},Te={class:""};function Be(t,i,e,p,s,o){const c=l("ConditionFilterGroup"),d=T("loading");return B((h(),x("div",Te,[a(c,{options:s.options,onOnChange:o.handleChange},null,8,["options","onOnChange"])])),[[d,s.loading]])}const Ae=y(Re,[["render",Be]]),ze={name:"domain-list",props:{},components:{DataFormDialog:L,DataTable:ve,SelectGroup:z,UpdateDomainInfo:Ue,CheckDomainInfo:Fe,ConditionFilter:Ae},data(){return{dataApi:A,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:q(A.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...E(R,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...K(R,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let e of this.ConditionFilterParams)e.selected&&e.selected.length>0&&(e.maxCount==1?t[e.field]=e.selected[0]:t[e.field]=e.selected);const i=await this.$http.getDomainInfoList(t);i.code==0?(this.list=i.data.list.map(e=>(e.group_id&&(e.group_name=this.getGroupName(e.group_id)),e)),this.total=i.data.total):this.$msg.error(i.msg),this.loading=!1},getGroupName(t){let i=this.groupOptions.find(e=>e.value==t);if(i)return i.name},async handleHttpRequest(t){let i=this.$loading({fullscreen:!0}),e=new FormData;e.append("file",t.file),(await this.$http.importDomainFromFile(e)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData()),i.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const t=await this.$http.exportDomainFile();t.ok&&Z.saveAs(t.data.url,"domain.txt")},handleSearch(){this.resetData()},handleSizeChange(t){localStorage.setItem(this.pageSizeCachekey,t),this.resetData()},loadPageSize(){let t=localStorage.getItem(this.pageSizeCachekey);t&&(this.size=parseInt(t))},handleExceed(t){this.$refs.upload.clearFiles();const i=t[0];i.uid=ee(),this.handleHttpRequest({file:i})},handleSortChange({column:t,prop:i,order:e}){console.log(t,i,e),this.order_prop="",this.order_type="",e&&(this.order_type=e,this.order_prop=i),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(t){this.selectedRows=t},handleConditionFilterChange(t){console.log(t),this.ConditionFilterParams=t,this.resetData()},async handleBatchDeleteConfirm(){let t=this.$loading({fullscreen:!0}),i={ids:this.selectedRows.map(e=>e.id)};try{const e=await this.$http.deleteDomainByIds(i);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(e.msg)}catch(e){console.log(e)}finally{this.$nextTick(()=>{t.close()})}}},created(){this.initData()}},Ee={class:"app-container"},Pe={class:"flex",style:{"justify-content":"space-between"}},Ge={class:"flex mt-sm",style:{"align-items":"center"}},Le={style:{"font-size":"14px",color:"#333333"}},je={class:"flex",style:{"margin-left":"auto"}};function Ne(t,i,e,p,s,o){const c=l("Plus"),d=l("el-icon"),u=l("el-button"),w=l("Search"),S=l("el-input"),g=l("ConditionFilter"),k=l("Delete"),V=l("el-link"),O=l("el-popconfirm"),U=l("DataTable"),I=l("el-pagination"),$=l("DataFormDialog"),F=T("loading");return h(),x("div",Ee,[m("div",Pe,[a(u,{type:"primary",onClick:o.handleAddRow},{default:n(()=>[a(d,null,{default:n(()=>[a(c)]),_:1}),b("\u6DFB\u52A0")]),_:1},8,["onClick"]),a(S,{class:"ml-sm",style:{width:"260px"},modelValue:s.keyword,"onUpdate:modelValue":i[0]||(i[0]=C=>s.keyword=C),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:M(o.handleSearch,["enter"]),onClear:o.handleSearch},{append:n(()=>[a(u,{onClick:o.handleSearch},{default:n(()=>[a(d,null,{default:n(()=>[a(w)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),s.hasInitData?(h(),D(g,{key:0,class:"mt-md",onOnChange:o.handleConditionFilterChange},null,8,["onOnChange"])):v("",!0),m("div",Ge,[m("div",Le,"\u5171\u8BA1 "+_(s.total)+" \u6761\u6570\u636E",1),m("div",je,[o.showBatchDeleteButton?(h(),D(O,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:o.handleBatchDeleteConfirm},{reference:n(()=>[a(V,{underline:!1,type:"danger",class:"mr-sm"},{default:n(()=>[a(d,null,{default:n(()=>[a(k)]),_:1}),b("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):v("",!0)])]),B(a(U,{class:"mt-sm",data:s.list,onOnSuccess:o.resetData,onSortChange:o.handleSortChange,onSelectionChange:o.handleSelectionChange},null,8,["data","onOnSuccess","onSortChange","onSelectionChange"]),[[F,s.loading]]),a(I,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:s.total,"page-size":s.size,"onUpdate:pageSize":i[1]||(i[1]=C=>s.size=C),"current-page":s.page,"onUpdate:currentPage":i[2]||(i[2]=C=>s.page=C),onCurrentChange:o.getData,onSizeChange:o.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),a($,{visible:s.dialogVisible,"onUpdate:visible":i[3]||(i[3]=C=>s.dialogVisible=C),onOnSuccess:o.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const Ze=y(ze,[["render",Ne]]);export{Ze as default};
