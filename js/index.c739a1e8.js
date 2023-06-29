import{i as j,E as H}from"./event-enums.6c6f25e7.js";import{S as G,u as E}from"./SelectGroup.ea656d61.js";import{_ as C,d as P,r as W}from"./index.2cd4a5f2.js";import{ah as l,ar as A,Q as z,o as _,c as D,V as t,P as a,a as m,T as w,O as y,S as O,U as f,L as K,ax as L,aA as M,a9 as Q}from"./vendor-vue.edbe275b.js";import{E as N,A as X,a as J,b as Y,C as Z}from"./ConditionFilterGroup.5003556f.js";import{C as ee}from"./ConnectStatus.17e5816e.js";import{F as te}from"./vendor-lib.4c56f242.js";import{a as oe}from"./element-plus.dcbfaaa8.js";import"./element-icon.ade3aa7e.js";const ne={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!0,trigger:"blur",validator:(n,e,o)=>{if(!e)return o();if(j(e))o();else return o(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ae={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:G},data(){return{loading:!1,form:{domain:"",alias:"",port:443,group_id:"",is_dynamic_host:!1},rules:ne}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let n={id:this.row.id},o=(await this.$http.getDomainById(n)).data;this.form.domain=o.domain,this.form.alias=o.alias,this.form.group_id=o.group_id,this.form.port=o.port,this.form.is_dynamic_host=o.is_dynamic_host,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(n=>{if(console.log(n),n)this.confirmSubmit();else return!1})},async confirmSubmit(){let n=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id,port:this.form.port,is_dynamic_host:this.form.is_dynamic_host},o=null;this.row?(e.id=this.row.id,o=await this.$http.updateDomainById(e)):o=await this.$http.addDomain(e),o.ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),this.$nextTick(()=>{n.close()})}},created(){this.getData()}},ie={class:"text-center"};function le(n,e,o,u,i,s){const c=l("el-input"),d=l("el-form-item"),h=l("el-switch"),x=l("Warning"),b=l("el-icon"),k=l("el-link"),v=l("el-tooltip"),S=l("SelectGroup"),V=l("el-form"),R=l("el-button"),I=A("loading");return z((_(),D("div",null,[t(V,{ref:"form",model:i.form,rules:i.rules,"label-width":"70px"},{default:a(()=>[t(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[t(c,{type:"text",modelValue:i.form.domain,"onUpdate:modelValue":e[0]||(e[0]=g=>i.form.domain=g),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u7AEF\u53E3",prop:"port"},{default:a(()=>[t(c,{type:"text",modelValue:i.form.port,"onUpdate:modelValue":e[1]||(e[1]=g=>i.form.port=g),placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u52A8\u6001\u4E3B\u673A",prop:"is_dynamic_host"},{default:a(()=>[t(h,{modelValue:i.form.is_dynamic_host,"onUpdate:modelValue":e[2]||(e[2]=g=>i.form.is_dynamic_host=g)},null,8,["modelValue"]),t(v,{effect:"dark",content:"\u52A8\u6001\u4E3B\u673AIP\u5730\u5740\uFF1A\u6BCF\u6B21\u81EA\u52A8\u66F4\u65B0\u5C06\u4F1A\u91CD\u65B0\u83B7\u53D6\u4E3B\u673A\u5217\u8868",placement:"top-start","show-after":500},{default:a(()=>[t(k,{underline:!1},{default:a(()=>[t(b,{class:"ml-sm"},{default:a(()=>[t(x)]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:a(()=>[t(S,{class:"w-[150px]",modelValue:i.form.group_id,"onUpdate:modelValue":e[3]||(e[3]=g=>i.form.group_id=g),clearable:""},null,8,["modelValue"])]),_:1}),t(d,{label:"\u5907\u6CE8",prop:"alias"},{default:a(()=>[t(c,{type:"textarea",modelValue:i.form.alias,"onUpdate:modelValue":e[4]||(e[4]=g=>i.form.alias=g),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),m("div",ie,[t(R,{onClick:s.handleCancel},{default:a(()=>[w("\u53D6 \u6D88")]),_:1},8,["onClick"]),t(R,{type:"primary",onClick:s.handleSubmit},{default:a(()=>[w("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[I,i.loading]])}const se=C(ae,[["render",le]]),re={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:se},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(n){this.$emit("update:visible",n)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function de(n,e,o,u,i,s){const c=l("DataForm"),d=l("el-dialog");return _(),y(d,{title:s.dialogTitle,modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=h=>s.dialogVisible=h),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:a(()=>[s.dialogVisible?(_(),y(c,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):O("",!0)]),_:1},8,["title","modelValue"])}const q=C(re,[["render",de]]),ce={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:N,AddressList:X},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",group_name:"",real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",address_count:0,group:null},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let n={id:this.row.id};const e=await this.$http.getDomainById(n);if(!e.ok)return;let o=e.data;this.form.domain=o.domain,this.form.domain_url=o.domain_url,this.form.ip=o.ip,this.form.start_time=o.start_time,this.form.expire_time=o.expire_time,this.form.check_time=o.check_time,this.form.connect_status=o.connect_status,this.form.total_days=o.total_days,this.form.expire_days=o.expire_days,this.form.real_time_expire_days=o.real_time_expire_days,this.form.create_time=o.create_time,this.form.update_time_label=o.update_time_label,this.form.domain_auto_update=o.domain_auto_update,this.form.domain_auto_update_label=o.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=o.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=o.domain_check_time_label,this.form.port=o.port,this.form.alias=o.alias,this.form.domain_start_time=o.domain_start_time,this.form.domain_expire_time=o.domain_expire_time,this.form.real_time_domain_expire_days=o.real_time_domain_expire_days,this.form.address_count=o.address_count,this.form.group=o.group,this.form.group_name=o.group_name}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let n=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_id:this.row.id};(await this.$http.updateDomainCertInfoById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),n.close()},async getIpInfo(){let n={ip:this.form.ip};const e=await this.$http.getIpInfo(n);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},me={class:"domain-detail"},ue={class:"mo-form-detail grid grid-cols-2"},pe={key:0},_e={key:1},he={class:"flex justify-between flex-1"},fe={class:"truncate"},ge={class:"mo-form-detail mt-[20px]"},we={class:"truncate"},be={class:"text-center mt-md"};function ye(n,e,o,u,i,s){const c=l("el-link"),d=l("el-form-item"),h=l("el-form"),x=l("ExpireDays"),b=l("Refresh"),k=l("el-icon"),v=l("el-button");return _(),D("div",me,[m("div",ue,[t(h,{"label-width":"130px"},{default:a(()=>[t(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[t(c,{underline:!1,href:i.form.domain_url,target:"_blank"},{default:a(()=>[w(f(i.form.domain),1)]),_:1},8,["href"])]),_:1}),t(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"create_time"},{default:a(()=>[m("span",null,f(i.form.start_time||"-"),1)]),_:1}),t(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"create_time"},{default:a(()=>[m("span",null,f(i.form.expire_time||"-"),1)]),_:1}),t(d,{label:"\u5206\u7EC4",prop:"create_time"},{default:a(()=>[i.form.group_name?(_(),D("span",pe,f(i.form.group_name||"-"),1)):(_(),D("span",_e,"-"))]),_:1})]),_:1}),t(h,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:a(()=>[t(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:a(()=>[m("span",null,f(i.form.port||"-"),1)]),_:1}),t(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:a(()=>[t(x,{value:i.form.real_time_expire_days},null,8,["value"])]),_:1}),t(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:a(()=>[m("div",he,[m("span",fe,f(i.form.update_time_label||"-"),1),t(c,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleUpdateRowDomainInfo},{default:a(()=>[t(k,null,{default:a(()=>[t(b)]),_:1})]),_:1},8,["onClick"])])]),_:1}),t(d,{label:"\u4E3B\u673A\u6570\u91CF",prop:"create_time"},{default:a(()=>[m("span",null,f(i.form.address_count||"-"),1)]),_:1})]),_:1})]),m("div",ge,[t(h,{"label-width":"130px"},{default:a(()=>[t(d,{label:"\u5907\u6CE8",prop:"isp"},{default:a(()=>[m("span",we,f(i.form.alias||"-"),1)]),_:1})]),_:1})]),m("div",be,[t(v,{type:"primary",onClick:s.handleCancel},{default:a(()=>[w("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const De=C(ce,[["render",ye]]),Ce={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:De},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(n){this.$emit("update:visible",n)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function xe(n,e,o,u,i,s){const c=l("DataForm"),d=l("el-dialog");return _(),y(d,{title:"\u8BC1\u4E66\u8BE6\u60C5",modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=h=>s.dialogVisible=h),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:s.handleDialogClose},{default:a(()=>[s.dialogVisible?(_(),y(c,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):O("",!0)]),_:1},8,["modelValue","onClose"])}const ke=C(Ce,[["render",xe]]),ve={name:"",components:{DataFormDialog:q,DataDetailDialog:ke,ConnectStatus:ee,ExpireDays:N,ExpireProgress:J,AddressListgDialog:Y},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(n){this.currentRow=n,this.dialogVisible=!0},async handleDeleteClick(n){let e={id:n.id};const o=await this.$http.deleteDomainById(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleStatusChange(n){let e={id:n.id};const o=await this.$Http.function(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleMonitorStatusChange(n,e){let o={domain_id:n.id,is_monitor:e};const u=await this.$http.updateDomainExpireMonitorById(o);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleUpdateRowDomainInfo(n){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),o={id:n.id};(await this.$http.updateDomainRowInfoById(o)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(n){this.currentRow=n,this.dialogDetailVisible=!0},handleShowAddressListgDialog(n){this.currentRow=n,this.AddressListgDialogVisible=!0},async handleAutoUpdateStatusChange(n,e){let o={domain_id:n.id,field:"auto_update",value:e};const u=await this.$http.updateDomainFieldById(o);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},handleRefreshRow(n){this.$emit("on-refresh-row",n)}},created(){}},Se={class:"inline-flex items-center"},Ve=m("span",{class:"mr-[2px]"},"\u8BC1\u4E66\u5929\u6570",-1),Re={key:0,class:"color--danger"},Oe={key:2};function Ie(n,e,o,u,i,s){const c=l("el-table-column"),d=l("el-link"),h=l("ExpireDays"),x=l("Warning"),b=l("el-icon"),k=l("el-tooltip"),v=l("ExpireProgress"),S=l("ConnectStatus"),V=l("el-switch"),R=l("Refresh"),I=l("Edit"),g=l("Delete"),U=l("el-popconfirm"),F=l("el-table"),$=l("DataFormDialog"),B=l("DataDetailDialog"),T=l("AddressListgDialog");return _(),D("div",null,[t(F,K({stripe:"",border:""},n.$attrs,{onSortChange:e[0]||(e[0]=r=>n.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>n.$emit("selection-change",r))}),{default:a(()=>[t(c,{type:"selection","header-align":"center",align:"center",width:"40"}),t(c,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"230","show-overflow-tooltip":"",prop:"domain"},{default:a(r=>[t(d,{underline:!1,onClick:p=>s.handleShowDetail(r.row)},{default:a(()=>[w(f(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),t(c,{label:"\u7AEF\u53E3","header-align":"center",align:"center",width:"60",sortable:"custom",prop:"port"},{default:a(r=>[m("span",null,f(r.row.port||"-"),1)]),_:1}),t(c,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"80",prop:"domain_expire_days"},{default:a(r=>[t(h,{value:r.row.domain_expire_days},null,8,["value"])]),_:1}),t(c,{label:"\u8BC1\u4E66\u5929\u6570","header-align":"center",align:"center",width:"110",sortable:"custom",prop:"expire_days"},{header:a(()=>[t(k,{effect:"dark",content:"\u5982\u6709\u591A\u4E2A\u4E3B\u673AIP\u5730\u5740\uFF0C\u6B64\u5904\u4EC5\u663E\u793A\u5230\u671F\u65F6\u95F4\u6700\u77ED\u7684\u8BC1\u4E66",placement:"top-start","show-after":800},{default:a(()=>[m("div",Se,[Ve,t(b,null,{default:a(()=>[t(x)]),_:1})])]),_:1})]),default:a(r=>[t(v,{startTime:r.row.start_time,endTime:r.row.expire_time},null,8,["startTime","endTime"])]),_:1}),t(c,{label:"\u4E3B\u673A\u6570\u91CF","header-align":"center",align:"center",width:"80",prop:"address_count"},{default:a(r=>[r.row.is_dynamic_host?(_(),D("span",Re,"*")):O("",!0),r.row.address_count&&r.row.address_count>0?(_(),y(d,{key:1,underline:!1,onClick:p=>s.handleShowAddressListgDialog(r.row)},{default:a(()=>[w(f(r.row.address_count),1)]),_:2},1032,["onClick"])):(_(),D("span",Oe,"-"))]),_:1}),t(c,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"60",sortable:"custom",prop:"expire_status"},{default:a(r=>[t(S,{value:r.row.expire_status,onOnClick:p=>s.handleShowAddressListgDialog(r.row)},null,8,["value","onOnClick"])]),_:1}),t(c,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:a(r=>[m("span",null,f(r.row.group_name||"-"),1)]),_:1}),t(c,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"check_time","show-overflow-tooltip":""},{default:a(r=>[m("span",null,f(r.row.alias||"-"),1)]),_:1}),t(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:a(r=>[m("span",null,f(r.row.update_time_label||"-"),1)]),_:1}),t(c,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"auto_update"},{default:a(r=>[t(V,{modelValue:r.row.auto_update,"onUpdate:modelValue":p=>r.row.auto_update=p,onChange:p=>s.handleAutoUpdateStatusChange(r.row,p)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(c,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_monitor"},{default:a(r=>[t(V,{modelValue:r.row.is_monitor,"onUpdate:modelValue":p=>r.row.is_monitor=p,onChange:p=>s.handleMonitorStatusChange(r.row,p)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(c,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:a(r=>[t(d,{underline:!1,type:"primary",class:"mr-sm",onClick:p=>s.handleUpdateRowDomainInfo(r.row)},{default:a(()=>[t(b,null,{default:a(()=>[t(R)]),_:1})]),_:2},1032,["onClick"]),t(d,{underline:!1,type:"primary",class:"mr-sm",onClick:p=>s.handleEditRow(r.row)},{default:a(()=>[t(b,null,{default:a(()=>[t(I)]),_:1})]),_:2},1032,["onClick"]),t(U,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:p=>s.handleDeleteClick(r.row)},{reference:a(()=>[t(d,{underline:!1,type:"danger"},{default:a(()=>[t(b,null,{default:a(()=>[t(g)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),t($,{visible:i.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>i.dialogVisible=r),row:i.currentRow,onOnSuccess:e[3]||(e[3]=r=>s.handleRefreshRow(i.currentRow))},null,8,["visible","row"]),t(B,{row:i.currentRow,visible:i.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>i.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>s.handleRefreshRow(i.currentRow))},null,8,["row","visible"]),i.currentRow?(_(),y(T,{key:0,domainId:i.currentRow.id,visible:i.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>i.AddressListgDialogVisible=r),onOnClose:e[7]||(e[7]=r=>s.handleRefreshRow(i.currentRow))},null,8,["domainId","visible"])):O("",!0)])}const Ue=C(ve,[["render",Ie]]),Fe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,await this.$http.updateAllDomainCertInfoOfUser()}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function $e(n,e,o,u,i,s){const c=l("Refresh"),d=l("el-icon"),h=l("el-link");return _(),y(h,{underline:!1,type:"primary",onClick:s.updateAllDomainCertInfoOfUser,disabled:s.disableUpdateButton},{default:a(()=>[t(d,null,{default:a(()=>[t(c)]),_:1}),w(f(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Be=C(Fe,[["render",$e]]),Te={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){const n=await this.$http.handleNotifyByEventId({event_id:H.SSL_CERT_EXPIRE});n.ok&&this.$msg.success(`\u6210\u529F\u6E20\u9053\uFF1A${n.data.success}`)}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ee(n,e,o,u,i,s){const c=l("Position"),d=l("el-icon"),h=l("el-link");return _(),y(h,{underline:!1,type:"primary",onClick:s.handleNotifyByEventId,disabled:s.disableUpdateButton},{default:a(()=>[t(d,null,{default:a(()=>[t(c)]),_:1}),w(f(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Ae=C(Te,[["render",Ee]]),ze={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:Z},data(){return{loading:!0,options:[{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...L(E,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const n=await this.$http.getDomainGroupFilter();n.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(n.data.list&&n.data.list.length>0?(e.options=n.data.list.map(o=>{let u=o.name;return o.cert_count>0&&(u=`${o.name} ${o.cert_count}`),{...o,value:o.id,label:u}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1,console.log(this.options)},handleChange(n){this.$emit("on-change",this.options)}},created(){this.resetData()}},Pe={class:""};function Ge(n,e,o,u,i,s){const c=l("ConditionFilterGroup"),d=A("loading");return z((_(),D("div",Pe,[t(c,{options:i.options,onOnChange:s.handleChange},null,8,["options","onOnChange"])])),[[d,i.loading]])}const Le=C(ze,[["render",Ge]]),Ne={name:"domain-list",props:{},components:{DataFormDialog:q,DataTable:Ue,SelectGroup:G,UpdateDomainInfo:Be,CheckDomainInfo:Ae,ConditionFilter:Le},data(){return{dataApi:P,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:W(P.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...L(E,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...M(E,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let n={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let o of this.ConditionFilterParams)o.selected&&o.selected.length>0&&(o.maxCount==1?n[o.field]=o.selected[0]:n[o.field]=o.selected);const e=await this.$http.getDomainList(n);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(n){let e=this.groupOptions.find(o=>o.value==n);if(e)return e.name},async handleHttpRequest(n){let e=this.$loading({fullscreen:!0}),o=new FormData;o.append("file",n.file),(await this.$http.importDomainFromFile(o)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const n=await this.$http.exportDomainFile();n.ok&&te.saveAs(n.data.url,n.data.name)},handleSearch(){this.resetData()},handleSizeChange(n){localStorage.setItem(this.pageSizeCachekey,n),this.resetData()},loadPageSize(){let n=localStorage.getItem(this.pageSizeCachekey);n&&(this.size=parseInt(n))},handleExceed(n){this.$refs.upload.clearFiles();const e=n[0];e.uid=oe(),this.handleHttpRequest({file:e})},handleSortChange({column:n,prop:e,order:o}){console.log(n,e,o),this.order_prop="",this.order_type="",o&&(this.order_type=o,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(n){this.selectedRows=n},handleConditionFilterChange(n){console.log(n),this.ConditionFilterParams=n,this.resetData()},async handleBatchDeleteConfirm(){let n=this.$loading({fullscreen:!0}),e={ids:this.selectedRows.map(o=>o.id)};try{const o=await this.$http.deleteDomainByIds(e);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(o.msg)}catch(o){console.log(o)}finally{this.$nextTick(()=>{n.close()})}},async handleRefreshRow(n){let e={id:n.id};const o=await this.$http.getDomainById(e);if(o.ok){let u=this.list.findIndex(i=>i.id==n.id);this.list.splice(u,1,o.data),console.log(this.list)}}},created(){this.keyword=this.$route.query.keyword||this.keyword,this.initData()}},qe={class:"app-container"},je={class:"flex",style:{"justify-content":"space-between"}},He={class:"flex mt-sm",style:{"align-items":"center"}},We={style:{"font-size":"14px",color:"#333333"}},Ke={class:"flex",style:{"margin-left":"auto"}},Me=m("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function Qe(n,e,o,u,i,s){const c=l("Plus"),d=l("el-icon"),h=l("el-button"),x=l("Search"),b=l("el-input"),k=l("ConditionFilter"),v=l("Delete"),S=l("el-link"),V=l("el-popconfirm"),R=l("UpdateDomainInfo"),I=l("CheckDomainInfo"),g=l("Upload"),U=l("el-upload"),F=l("Download"),$=l("DataTable"),B=l("el-pagination"),T=l("DataFormDialog"),r=A("loading");return _(),D("div",qe,[m("div",je,[t(h,{type:"primary",onClick:s.handleAddRow},{default:a(()=>[t(d,null,{default:a(()=>[t(c)]),_:1}),w("\u6DFB\u52A0")]),_:1},8,["onClick"]),t(b,{class:"ml-sm",style:{width:"260px"},modelValue:i.keyword,"onUpdate:modelValue":e[0]||(e[0]=p=>i.keyword=p),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:Q(s.handleSearch,["enter"]),onClear:s.handleSearch},{append:a(()=>[t(h,{onClick:s.handleSearch},{default:a(()=>[t(d,null,{default:a(()=>[t(x)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),i.hasInitData?(_(),y(k,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:s.handleConditionFilterChange},null,8,["onOnChange"])):O("",!0),m("div",He,[m("div",We,"\u5171\u8BA1 "+f(i.total)+" \u6761\u6570\u636E",1),m("div",Ke,[s.showBatchDeleteButton?(_(),y(V,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:s.handleBatchDeleteConfirm},{reference:a(()=>[t(S,{underline:!1,type:"danger",class:"mr-sm"},{default:a(()=>[t(d,null,{default:a(()=>[t(v)]),_:1}),w("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):O("",!0),t(R,{onOnSuccess:s.resetData},null,8,["onOnSuccess"]),t(I,{class:"ml-sm",onOnSuccess:s.resetData},null,8,["onOnSuccess"]),t(S,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:a(()=>[t(d,null,{default:a(()=>[t(g)]),_:1}),w("\u5BFC\u5165 "),t(U,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":s.handleExceed,"show-file-list":!1,"http-request":s.handleHttpRequest},{default:a(()=>[Me]),_:1},8,["on-exceed","http-request"])]),_:1}),t(S,{underline:!1,type:"primary",class:"ml-sm",onClick:s.handleExportToFile},{default:a(()=>[t(d,null,{default:a(()=>[t(F)]),_:1}),w("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),z(t($,{class:"mt-sm",data:i.list,onOnSuccess:s.resetData,onOnRefreshRow:s.handleRefreshRow,onSortChange:s.handleSortChange,onSelectionChange:s.handleSelectionChange},null,8,["data","onOnSuccess","onOnRefreshRow","onSortChange","onSelectionChange"]),[[r,i.loading]]),t(B,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:i.total,"page-size":i.size,"onUpdate:pageSize":e[1]||(e[1]=p=>i.size=p),"current-page":i.page,"onUpdate:currentPage":e[2]||(e[2]=p=>i.page=p),onCurrentChange:s.getData,onSizeChange:s.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),t(T,{visible:i.dialogVisible,"onUpdate:visible":e[3]||(e[3]=p=>i.dialogVisible=p),onOnSuccess:s.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const it=C(Ne,[["render",Qe]]);export{it as default};