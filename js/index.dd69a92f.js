import{a as $,b as J,c as S}from"./validator.0c34c3e7.js";import{_ as x}from"./index.d7168983.js";import{ah as a,o as h,c as b,V as s,P as n,a as c,T as _,O as k,S as j,ar as O,Q as T,F as N,a8 as E,R as F}from"./vendor-vue.edbe275b.js";import"./element-icon.ade3aa7e.js";import"./vendor-lib.4c56f242.js";import"./element-plus.dcbfaaa8.js";const I=(o,e,t)=>{if(!e)return t();if(!$(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let r=JSON.parse(e);Array.isArray(r)?r.some(l=>!J(l))?t(new Error("\u6570\u7EC4\u9879\u53EA\u80FD\u662F\u90AE\u7BB1\u5730\u5740")):t():t(new Error("\u5FC5\u987B\u662Farray\u6570\u7EC4"))},B={email_list:[{validator:I,trigger:"blur"}]},D={Unknown:0,Email:1,Webkook:2,WorkWeixin:3},L={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:B,form:{email_list:""},emailListExample:JSON.stringify(["123@qq.com","domain@163.com"],null,4)}},computed:{},methods:{async getData(){let o=this.$loading(),e={type_id:D.Email};const t=await this.$http.getNotifyOfUser(e);t.data&&t.data.value&&t.data.value.email_list&&(this.form.email_list=JSON.stringify(t.data.value.email_list,null,4)),this.$nextTick(()=>{o.close()})},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e=null;this.form.email_list&&(e=JSON.parse(this.form.email_list));let t={type_id:D.Email,value:{email_list:e}},r=await this.$http.updateNotifyOfUser(t);r.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(r.msg),this.$nextTick(()=>{o.close()})},async sendDomainInfoListEmail(){let o=this.$loading({fullscreen:!0});try{(await this.$http.sendDomainInfoListEmail()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{o.close()})}},handleToSystemSetting(){this.$router.push({name:"system-list"})}},created(){this.getData()}},q={class:"text-[14px] color--info"},P={class:"text-center"};function A(o,e,t,r,l,i){const m=a("el-input"),u=a("el-form-item"),d=a("el-form"),p=a("el-button"),g=a("el-tooltip");return h(),b("div",null,[s(d,{ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:n(()=>[s(u,{label:"\u90AE\u4EF6\u5217\u8868",prop:"email_list"},{default:n(()=>[s(m,{type:"textarea",rows:5,placeholder:`\u793A\u4F8B:
${l.emailListExample}`,modelValue:l.form.email_list,"onUpdate:modelValue":e[0]||(e[0]=y=>l.form.email_list=y)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",q,[c("span",null,[_("\u63D0\u793A\uFF1A\u53D1\u4EF6\u90AE\u7BB1\u5728"),c("span",{class:"cursor-pointer color--brand",onClick:e[1]||(e[1]=(...y)=>i.handleToSystemSetting&&i.handleToSystemSetting(...y))},"[\u7CFB\u7EDF\u8BBE\u7F6E]"),_("\u4E2D\u914D\u7F6E")])]),c("div",P,[s(p,{onClick:i.handleCancel},{default:n(()=>[_("\u91CD \u7F6E")]),_:1},8,["onClick"]),s(p,{type:"primary",onClick:i.handleSubmit},{default:n(()=>[_("\u4FDD \u5B58")]),_:1},8,["onClick"]),s(g,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:n(()=>[s(p,{class:"margin-left--auto",onClick:i.sendDomainInfoListEmail},{default:n(()=>[_("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])}const C=x(L,[["render",A]]),R={name:"",props:{},components:{},data(){return{templateData:""}},computed:{},methods:{async getData(){let o=this.$loading();const e=await this.$http.getTemplateData();e.data&&(this.templateData=JSON.stringify(e.data,null,4)),this.$nextTick(()=>{o.close()})},handleConfirm(){this.$emit("on-confirm")}},created(){this.getData()}},G={class:"text-center"};function H(o,e,t,r,l,i){const m=a("el-input"),u=a("el-form-item"),d=a("el-form"),p=a("el-button");return h(),b("div",null,[s(d,{"label-width":"0"},{default:n(()=>[s(u,{label:""},{default:n(()=>[s(m,{type:"textarea",rows:20,modelValue:l.templateData,"onUpdate:modelValue":e[0]||(e[0]=g=>l.templateData=g)},null,8,["modelValue"])]),_:1})]),_:1}),c("div",G,[s(p,{type:"primary",onClick:i.handleConfirm},{default:n(()=>[_("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const M=x(R,[["render",H]]),z={name:"",props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:M},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function Q(o,e,t,r,l,i){const m=a("DataForm"),u=a("el-dialog");return h(),k(u,{title:"\u6A21\u677F\u53C2\u6570",modelValue:i.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=d=>i.dialogVisible=d),width:"600px",center:"","append-to-body":"","lock-scroll":!1},{default:n(()=>[i.dialogVisible?(h(),k(m,{key:0,onOnCancel:i.handleClose,onOnConfirm:i.handleClose},null,8,["onOnCancel","onOnConfirm"])):j("",!0)]),_:1},8,["modelValue"])}const K=x(z,[["render",Q]]),X=(o,e,t)=>{if(!e)return t();if(!$(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let r=JSON.parse(e);S(r)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},Y={headers:[{validator:X,trigger:"blur"}]},Z={name:"",props:{row:{type:Object,default:null}},components:{TemplateDataDialog:K},data(){return{loading:!1,rules:Y,templateDataDialogVisible:!1,form:{method:"GET",url:"",headers:JSON.stringify({"Content-Type":"application/json"},null,4),body:""},methodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],headerExample:JSON.stringify({"User-Agent":"Mozilla/5.0","Content-Type":"application/json"},null,4)}},computed:{},methods:{async getData(){this.loading=!0;let o={type_id:D.Webkook},t=(await this.$http.getNotifyOfUser(o)).data;if(t&&t.value){let r="";t.value.headers&&(r=JSON.stringify(t.value.headers,null,4)),this.form={method:t.value.method,url:t.value.url,headers:r,body:t.value.body}}this.loading=!1},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e=null;this.form.headers&&(e=JSON.parse(this.form.headers));let t={type_id:D.Webkook,value:{method:this.form.method,url:this.form.url,headers:e,body:this.form.body}},r=await this.$http.updateNotifyOfUser(t);r.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(r.msg),this.$nextTick(()=>{o.close()})},async handleTest(){let o=this.$loading({fullscreen:!0});try{const e=await this.$http.testWebhookNotifyOfUser();e.code==0&&this.$msg.success(e.data)}catch{}finally{this.$nextTick(()=>{o.close()})}},handleOpenTemplateDataDialog(){this.templateDataDialogVisible=!0}},created(){this.getData()}},ee=c("div",{class:"text-[14px] color--info"},[c("span",null,"\u8D44\u6E90\u63A8\u8350\uFF1A"),c("a",{href:"https://pengshiyu.blog.csdn.net/article/details/124135877",class:"color--brand",target:"_blank"},"\u5FAE\u4FE1\u63A8\u9001\u6D88\u606F\u901A\u77E5\u63A5\u53E3\u6C47\u603B")],-1),te={class:"text-center mt-md"};function le(o,e,t,r,l,i){const m=a("el-option"),u=a("el-select"),d=a("el-form-item"),p=a("el-input"),g=a("el-form"),y=a("el-button"),v=a("el-tooltip"),U=a("TemplateDataDialog"),W=O("loading");return T((h(),b("div",null,[s(g,{ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:n(()=>[s(d,{label:"\u8BF7\u6C42\u65B9\u6CD5",prop:"method"},{default:n(()=>[s(u,{modelValue:l.form.method,"onUpdate:modelValue":e[0]||(e[0]=f=>l.form.method=f),placeholder:"\u8BF7\u6C42\u65B9\u6CD5",style:{width:"100px"}},{default:n(()=>[(h(!0),b(N,null,E(l.methodOptions,f=>(h(),k(m,{key:f.value,label:f.label,value:f.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"\u8BF7\u6C42\u5730\u5740",prop:"url"},{default:n(()=>[s(p,{type:"text",modelValue:l.form.url,"onUpdate:modelValue":e[1]||(e[1]=f=>l.form.url=f),placeholder:"\u8BF7\u6C42\u5730\u5740"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u8BF7\u6C42\u5934",prop:"headers"},{default:n(()=>[s(p,{type:"textarea",rows:5,modelValue:l.form.headers,"onUpdate:modelValue":e[2]||(e[2]=f=>l.form.headers=f),placeholder:`\u793A\u4F8B: 
${l.headerExample}`},null,8,["modelValue","placeholder"])]),_:1}),s(d,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[s(p,{type:"textarea",rows:5,modelValue:l.form.body,"onUpdate:modelValue":e[3]||(e[3]=f=>l.form.body=f),placeholder:"\u8BF7\u6C42\u4F53\uFF0C\u652F\u6301jinja2\u6A21\u677F\u8BED\u6CD5"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),ee,c("div",te,[s(y,{onClick:i.handleOpenTemplateDataDialog},{default:n(()=>[_("\u6A21\u677F\u53C2\u6570")]),_:1},8,["onClick"]),s(y,{onClick:i.handleCancel},{default:n(()=>[_("\u91CD \u7F6E")]),_:1},8,["onClick"]),s(y,{type:"primary",onClick:i.handleSubmit},{default:n(()=>[_("\u4FDD \u5B58")]),_:1},8,["onClick"]),s(v,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:n(()=>[s(y,{onClick:i.handleTest},{default:n(()=>[_("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})]),s(U,{visible:l.templateDataDialogVisible,"onUpdate:visible":e[4]||(e[4]=f=>l.templateDataDialogVisible=f)},null,8,["visible"])])),[[W,l.loading]])}const V=x(Z,[["render",le]]),oe=(o,e,t)=>{if(!e)return t();if(!$(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let r=JSON.parse(e);S(r)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},se={body:[{validator:oe,trigger:"blur"}]},ne={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:se,form:{corpid:"",corpsecret:"",body:""},defaultBody:JSON.stringify({touser:"UserID1|UserID2|UserID3",toparty:"PartyID1|PartyID2",totag:"TagID1 | TagID2",msgtype:"text",agentid:1,text:{content:`\u4F60\u7684\u57DF\u540D\u8BC1\u4E66\u5373\u5C06\u5230\u671F
\u70B9\u51FB\u67E5\u770B<a href="${window.location.href}">Domain Admin</a>`},safe:0,enable_id_trans:0,enable_duplicate_check:0,duplicate_check_interval:1800},null,4)}},computed:{},methods:{async getData(){this.loading=!0;let o={type_id:D.WorkWeixin},t=(await this.$http.getNotifyOfUser(o)).data;t&&t.value?this.form={corpid:t.value.corpid,corpsecret:t.value.corpsecret,body:t.value.body}:this.form.body=this.defaultBody,this.loading=!1},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0});this.form.headers&&JSON.parse(this.form.headers);let e={type_id:D.WorkWeixin,value:{corpid:this.form.corpid,corpsecret:this.form.corpsecret,body:this.form.body}},t=await this.$http.updateNotifyOfUser(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{o.close()})},async handleTest(){let o=this.$loading({fullscreen:!0});try{const e=await this.$http.testWorkWeixinNotifyOfUser();e.code==0&&this.$msg.success(e.data)}catch{}finally{this.$nextTick(()=>{o.close()})}}},created(){this.getData()}},ae=c("div",{class:"text-[14px] color--info"},[c("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),c("a",{href:"https://developer.work.weixin.qq.com/document/path/90236",class:"color--brand",target:"_blank"},"\u4F01\u4E1A\u5FAE\u4FE1-\u53D1\u9001\u5E94\u7528\u6D88\u606F")],-1),ie={class:"text-center"};function re(o,e,t,r,l,i){const m=a("el-input"),u=a("el-form-item"),d=a("el-form"),p=a("el-button"),g=a("el-tooltip"),y=O("loading");return T((h(),b("div",null,[s(d,{ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:n(()=>[s(u,{label:"\u4F01\u4E1AID",prop:"corpid"},{default:n(()=>[s(m,{type:"text",modelValue:l.form.corpid,"onUpdate:modelValue":e[0]||(e[0]=v=>l.form.corpid=v),placeholder:"corpid"},null,8,["modelValue"])]),_:1}),s(u,{label:"\u51ED\u8BC1\u5BC6\u94A5",prop:"corpsecret"},{default:n(()=>[s(m,{type:"text",modelValue:l.form.corpsecret,"onUpdate:modelValue":e[1]||(e[1]=v=>l.form.corpsecret=v),placeholder:"corpsecret"},null,8,["modelValue"])]),_:1}),s(u,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[s(m,{type:"textarea",rows:16,modelValue:l.form.body,"onUpdate:modelValue":e[2]||(e[2]=v=>l.form.body=v),placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),ae,c("div",ie,[s(p,{onClick:i.handleCancel},{default:n(()=>[_("\u91CD \u7F6E")]),_:1},8,["onClick"]),s(p,{type:"primary",onClick:i.handleSubmit},{default:n(()=>[_("\u4FDD \u5B58")]),_:1},8,["onClick"]),s(g,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:n(()=>[s(p,{onClick:i.handleTest},{default:n(()=>[_("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])),[[y,l.loading]])}const de=x(ne,[["render",re]]),me={name:"domain-edit",props:{},components:{DataForm:de},data(){return{id:null}},computed:{},methods:{handleSuccess(){}},created(){this.id=this.$route.query.id}},ce={class:""};function ue(o,e,t,r,l,i){const m=a("DataForm");return h(),b("div",ce,[s(m,{onOnSuccess:i.handleSuccess},null,8,["onOnSuccess"])])}const w=x(me,[["render",ue]]);const pe={name:"index",props:{},components:{NotifyEditEmail:C,NotifyEditWebhook:V,NotifyEditWorkWeixin:w},data(){return{activeName:"email",options:[{value:"email",label:"\u90AE\u4EF6\u901A\u77E5",icon:"Message",component:C},{value:"webhook",label:"WebHook",icon:"AlarmClock",component:V},{value:"work-weixin",label:"\u4F01\u4E1A\u5FAE\u4FE1",icon:"ChatSquare",component:w}]}},computed:{currentComponent(){return this.options.find(o=>o.value==this.active).component}},methods:{async getData(){},handleMenuSelect(o,e,t,r){this.active=o},handleClick(){}},created(){this.getData()}},fe={class:"app-container notify-edit-container"},_e={class:"notify-edit__menu"},he={class:"notify-edit__main"};function ye(o,e,t,r,l,i){const m=a("el-tab-pane"),u=a("el-tabs");return h(),b("div",fe,[c("div",_e,[s(u,{modelValue:l.activeName,"onUpdate:modelValue":e[0]||(e[0]=d=>l.activeName=d),class:"demo-tabs",onTabClick:i.handleClick},{default:n(()=>[(h(!0),b(N,null,E(l.options,d=>(h(),k(m,{label:d.label,name:d.value},{default:n(()=>[c("div",he,[(h(),k(F(d.component)))])]),_:2},1032,["label","name"]))),256))]),_:1},8,["modelValue","onTabClick"])])])}const $e=x(pe,[["render",ye],["__scopeId","data-v-206b3d85"]]);export{$e as default};
