(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[8276,5543,5696],{48398:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".xfbouadm[data-v-2869bb0f]{background-position:50%;background-size:cover}",""]),e.exports=a},84602:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".ebkgoccj[data-v-4b49273d]{overflow:hidden;display:flex;flex-direction:column;contain:content;--section-padding:24px}@media(max-width:500px){.ebkgoccj[data-v-4b49273d]{--section-padding:16px}}.ebkgoccj>.header[data-v-4b49273d]{display:flex;flex-shrink:0;box-shadow:0 1px var(--divider)}.ebkgoccj>.header>button[data-v-4b49273d]{height:58px;width:58px}@media(max-width:500px){.ebkgoccj>.header>button[data-v-4b49273d]{height:42px;width:42px}}.ebkgoccj>.header>.title[data-v-4b49273d]{flex:1;line-height:58px;padding-left:32px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}@media(max-width:500px){.ebkgoccj>.header>.title[data-v-4b49273d]{line-height:42px;padding-left:16px}}.ebkgoccj>.header>button+.title[data-v-4b49273d]{padding-left:0}.ebkgoccj>.body[data-v-4b49273d]{overflow:auto}",""]),e.exports=a},76758:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".rsqzvsbo>.top[data-v-0f4bf028]{min-height:100vh;box-sizing:border-box}.rsqzvsbo>.top>.bg[data-v-0f4bf028]{position:absolute;top:0;left:0;width:100%;height:100%}.rsqzvsbo>.top>.tl[data-v-0f4bf028]{position:absolute;top:0;bottom:0;right:64px;margin:auto;width:500px;height:calc(100% - 128px);overflow:hidden;-webkit-mask-image:linear-gradient(0deg,transparent,#000 128px,#000 calc(100% - 128px),transparent);mask-image:linear-gradient(0deg,transparent,#000 128px,#000 calc(100% - 128px),transparent)}.rsqzvsbo>.top>.shape[data-v-0f4bf028]{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--accent);clip-path:polygon(0 0,40% 0,22% 100%,0 100%)}.rsqzvsbo>.top>.misskey[data-v-0f4bf028]{position:absolute;bottom:64px;left:64px;width:160px}.rsqzvsbo>.top>.main[data-v-0f4bf028]{position:relative;width:min(450px,100%);padding:64px;color:#fff;font-size:1.1em}@media(max-width:1200px){.rsqzvsbo>.top>.main[data-v-0f4bf028]{margin:auto}}.rsqzvsbo>.top>.main>h1[data-v-0f4bf028]{display:block;margin:0 0 32px;padding:0}.rsqzvsbo>.top>.main>h1>.logo[data-v-0f4bf028]{vertical-align:bottom;max-height:100px}.rsqzvsbo>.top>.main>.about[data-v-0f4bf028]{padding:0}.rsqzvsbo>.top>.main>.action[data-v-0f4bf028]{margin:32px 0}.rsqzvsbo>.top>.main>.action>*[data-v-0f4bf028]{line-height:32px}.rsqzvsbo>.top>.main>.action>.signin[data-v-0f4bf028]{background:var(--accent);color:inherit}.rsqzvsbo>.top>.main>.status[data-v-0f4bf028]{margin:32px 0;border-top:1px solid hsla(0,0%,100%,.5);font-size:90%}.rsqzvsbo>.top>.main>.status>div[data-v-0f4bf028]{padding:16px 0}.rsqzvsbo>.top>.main>.status>div>span[data-v-0f4bf028]:not(:last-child){padding-right:1em;margin-right:1em;border-right:1px solid hsla(0,0%,100%,.5)}",""]),e.exports=a},15434:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".civpbkhh[data-v-2905c554]{text-align:right}.civpbkhh>.note[data-v-2905c554]{margin:16px 0 16px auto}.civpbkhh>.note>.content[data-v-2905c554]{padding:16px;margin:0 0 0 auto;max-width:max-content;border-radius:16px}",""]),e.exports=a},23384:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(55393);const n=(0,a.withScopeId)("data-v-2869bb0f")(((e,t,o,n,s,i)=>e.meta?((0,a.openBlock)(),(0,a.createBlock)("div",{key:0,class:"xfbouadm",style:{backgroundImage:`url(${e.meta.backgroundImageUrl})`}},null,4)):(0,a.createCommentVNode)("",!0)));var s=o(10192);const i=(0,a.defineComponent)({components:{},data:()=>({meta:null}),created(){s.hi("meta",{detail:!0}).then((e=>{this.meta=e}))}});o(69964);i.render=n,i.__scopeId="data-v-2869bb0f";const d=i},15696:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(55393);var n=o(26786),s=o(23770);const i=(0,a.defineComponent)({components:{MkSignin:s.Z,XModalWindow:n.Z},props:{autoSet:{type:Boolean,required:!1,default:!1}},emits:["done","closed"],methods:{onLogin(e){this.$emit("done",e),this.$refs.dialog.close()}}});i.render=function(e,t,o,n,s,i){const d=(0,a.resolveComponent)("MkSignin"),c=(0,a.resolveComponent)("XModalWindow");return(0,a.openBlock)(),(0,a.createBlock)(c,{ref:"dialog",width:370,height:400,onClose:t[1]||(t[1]=t=>e.$refs.dialog.close()),onClosed:t[2]||(t[2]=t=>e.$emit("closed"))},{header:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.login),1)])),default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{"auto-set":e.autoSet,onLogin:e.onLogin},null,8,["auto-set","onLogin"])])),_:1},512)};const d=i},26786:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var a=o(55393);const n=(0,a.withScopeId)("data-v-4b49273d");(0,a.pushScopeId)("data-v-4b49273d");const s={class:"header"},i={class:"title"},d={key:0,class:"body"},c={class:"_section"},r={key:1,class:"body"};(0,a.popScopeId)();const l=n(((e,t,o,l,p,u)=>{const h=(0,a.resolveComponent)("Fa"),m=(0,a.resolveComponent)("MkModal");return(0,a.openBlock)(),(0,a.createBlock)(m,{ref:"modal",onClick:t[5]||(t[5]=t=>e.$emit("click")),onClosed:t[6]||(t[6]=t=>e.$emit("closed"))},{default:n((()=>[(0,a.createVNode)("div",{class:"ebkgoccj _popup _narrow_",onKeydown:t[4]||(t[4]=(...t)=>e.onKeydown&&e.onKeydown(...t)),style:{width:e.width+"px",height:e.height?e.height+"px":null}},[(0,a.createVNode)("div",s,[e.withOkButton?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=t=>e.$emit("close"))},[(0,a.createVNode)(h,{icon:e.faTimes},null,8,["icon"])])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("span",i,[(0,a.renderSlot)(e.$slots,"header")]),e.withOkButton?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)("button",{key:1,class:"_button",onClick:t[2]||(t[2]=t=>e.$emit("close"))},[(0,a.createVNode)(h,{icon:e.faTimes},null,8,["icon"])])),e.withOkButton?((0,a.openBlock)(),(0,a.createBlock)("button",{key:2,class:"_button",onClick:t[3]||(t[3]=t=>e.$emit("ok")),disabled:e.okButtonDisabled},[(0,a.createVNode)(h,{icon:e.faCheck},null,8,["icon"])],8,["disabled"])):(0,a.createCommentVNode)("",!0)]),e.padding?((0,a.openBlock)(),(0,a.createBlock)("div",d,[(0,a.createVNode)("div",c,[(0,a.renderSlot)(e.$slots,"default")])])):((0,a.openBlock)(),(0,a.createBlock)("div",r,[(0,a.renderSlot)(e.$slots,"default")]))],36)])),_:3},512)}));var p=o(51436),u=o(89939);const h=(0,a.defineComponent)({components:{MkModal:u.Z},props:{withOkButton:{type:Boolean,required:!1,default:!1},okButtonDisabled:{type:Boolean,required:!1,default:!1},padding:{type:Boolean,required:!1,default:!1},width:{type:Number,required:!1,default:400},height:{type:Number,required:!1,default:null},canClose:{type:Boolean,required:!1,default:!0}},emits:["click","close","closed","ok"],data:()=>({faTimes:p.NBC,faCheck:p.LEp}),methods:{close(){this.$refs.modal.close()},onKeydown(e){27===e.which&&(e.preventDefault(),e.stopPropagation(),this.close())}}});o(70675);h.render=l,h.__scopeId="data-v-4b49273d";const m=h},58276:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>V});var a=o(55393);const n=(0,a.withScopeId)("data-v-0f4bf028");(0,a.pushScopeId)("data-v-0f4bf028");const s={key:0,class:"rsqzvsbo"},i={class:"top"},d=(0,a.createVNode)("div",{class:"shape"},null,-1),c={class:"main"},r={key:1,class:"text"},l={class:"about"},p={class:"action"},u={key:0,class:"status"},h=(0,a.createVNode)("img",{src:"/assets/misskey.svg",class:"misskey"},null,-1);(0,a.popScopeId)();const m=n(((e,t,o,m,b,v)=>{const g=(0,a.resolveComponent)("MkFeaturedPhotos"),f=(0,a.resolveComponent)("XTimeline"),k=(0,a.resolveComponent)("MkButton"),x=(0,a.resolveComponent)("I18n");return e.meta?((0,a.openBlock)(),(0,a.createBlock)("div",s,[(0,a.createVNode)("div",i,[(0,a.createVNode)(g,{class:"bg"}),(0,a.createVNode)(f,{class:"tl"}),d,(0,a.createVNode)("div",c,[(0,a.createVNode)("h1",null,[e.meta.logoImageUrl?((0,a.openBlock)(),(0,a.createBlock)("img",{key:0,class:"logo",src:e.meta.logoImageUrl},null,8,["src"])):((0,a.openBlock)(),(0,a.createBlock)("span",r,(0,a.toDisplayString)(e.instanceName),1))]),(0,a.createVNode)("div",l,[(0,a.createVNode)("div",{class:"desc",innerHTML:e.meta.description||e.$ts.headlineMisskey},null,8,["innerHTML"])]),(0,a.createVNode)("div",p,[(0,a.createVNode)(k,{class:"signin",onClick:t[1]||(t[1]=t=>e.signin()),inline:""},{default:n((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.login),1)])),_:1})]),e.onlineUsersCount&&e.stats?((0,a.openBlock)(),(0,a.createBlock)("div",u,[(0,a.createVNode)("div",null,[(0,a.createVNode)(x,{src:e.$ts.nUsers,"text-tag":"span",class:"users"},{n:n((()=>[(0,a.createVNode)("b",null,(0,a.toDisplayString)(e.number(e.stats.originalUsersCount)),1)])),_:1},8,["src"]),(0,a.createVNode)(x,{src:e.$ts.nNotes,"text-tag":"span",class:"notes"},{n:n((()=>[(0,a.createVNode)("b",null,(0,a.toDisplayString)(e.number(e.stats.originalNotesCount)),1)])),_:1},8,["src"])]),(0,a.createVNode)(x,{src:e.$ts.onlineUsersCount,"text-tag":"span",class:"online"},{n:n((()=>[(0,a.createVNode)("b",null,(0,a.toDisplayString)(e.onlineUsersCount),1)])),_:1},8,["src"])])):(0,a.createCommentVNode)("",!0)]),h])])):(0,a.createCommentVNode)("",!0)}));var b=o(51436),v=o(3689),g=o(15696),f=o(42453),k=o(64099),x=o(23384),w=o(95543),y=o(34862),N=o(10192),B=o(92906);const C=(0,a.defineComponent)({components:{MkButton:f.Z,XNote:k.Z,XTimeline:w.default,MkFeaturedPhotos:x.Z},data:()=>({host:(0,v.toUnicode)(y.ho),instanceName:y.Vc,meta:null,stats:null,tags:[],onlineUsersCount:null,faEllipsisH:b.cNd}),created(){N.hi("meta",{detail:!0}).then((e=>{this.meta=e})),N.hi("stats").then((e=>{this.stats=e})),N.hi("get-online-users-count").then((e=>{this.onlineUsersCount=e.count})),N.hi("hashtags/list",{sort:"+mentionedLocalUsers",limit:8}).then((e=>{this.tags=e}))},methods:{signin(){N.gk(g.default,{autoSet:!0},{},"closed")},showMenu(e){N.n4([{text:this.$t("aboutX",{x:y.Vc}),icon:b.sqG,action:()=>{N.$("/about")}},{text:this.$ts.aboutMisskey,icon:b.sqG,action:()=>{N.$("/about-misskey")}},null,{text:this.$ts.help,icon:b.sph,action:()=>{N.$("/docs")}}],e.currentTarget||e.target)},number:B.Z}});o(79625);C.render=m,C.__scopeId="data-v-0f4bf028";const V=C},95543:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var a=o(55393);const n=(0,a.withScopeId)("data-v-2905c554");(0,a.pushScopeId)("data-v-2905c554");const s={class:"civpbkhh"},i={class:"note"},d={class:"content _panel"};(0,a.popScopeId)();const c=n(((e,t,o,n,c,r)=>{const l=(0,a.resolveComponent)("XReactionsViewer");return(0,a.openBlock)(),(0,a.createBlock)("div",s,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(e.notes,(e=>((0,a.openBlock)(),(0,a.createBlock)("div",i,[(0,a.createVNode)("div",d,(0,a.toDisplayString)(e.text),1),(0,a.createVNode)(l,{note:e,ref:"reactionsViewer"},null,8,["note"])])))),256))])}));var r=o(21840),l=o(10192);const p=(0,a.defineComponent)({components:{XReactionsViewer:r.Z},data:()=>({notes:[]}),created(){l.hi("notes/featured").then((e=>{this.notes=e}))}});o(77260);p.render=c,p.__scopeId="data-v-2905c554";const u=p},69964:(e,t,o)=>{var a=o(48398);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("3e581161",a,!0,{})},70675:(e,t,o)=>{var a=o(84602);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("58d1b0c9",a,!0,{})},79625:(e,t,o)=>{var a=o(76758);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("119a499e",a,!0,{})},77260:(e,t,o)=>{var a=o(15434);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("d7f8c132",a,!0,{})}}]);