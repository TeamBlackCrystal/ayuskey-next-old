(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[6517],{62960:(e,t,a)=>{var o=a(23645)((function(e){return e[1]}));o.push([e.id,".container-toggle-enter-active[data-v-1dbdaf33],.container-toggle-leave-active[data-v-1dbdaf33]{overflow-y:hidden;transition:opacity .5s,height .5s!important}.container-toggle-enter-from[data-v-1dbdaf33],.container-toggle-leave-to[data-v-1dbdaf33]{opacity:0}.ukygtjoj[data-v-1dbdaf33]{position:relative;overflow:hidden}.ukygtjoj.naked[data-v-1dbdaf33]{background:transparent!important;box-shadow:none!important}.ukygtjoj.scrollable[data-v-1dbdaf33]{display:flex;flex-direction:column}.ukygtjoj.scrollable>div[data-v-1dbdaf33]{overflow:auto}.ukygtjoj>header[data-v-1dbdaf33]{position:relative;color:var(--panelHeaderFg);background:var(--panelHeaderBg);box-shadow:0 1px 0 0 var(--panelHeaderDivider);z-index:2;line-height:1.4em}.ukygtjoj>header>.title[data-v-1dbdaf33]{margin:0;padding:12px 16px}.ukygtjoj>header>.title[data-v-1dbdaf33]> [data-icon]{margin-right:6px}.ukygtjoj>header>.title[data-v-1dbdaf33]:empty{display:none}.ukygtjoj>header>.sub[data-v-1dbdaf33]{position:absolute;z-index:2;top:0;right:0;height:100%}.ukygtjoj>header>.sub[data-v-1dbdaf33]> button{width:42px;height:100%}.ukygtjoj>div[data-v-1dbdaf33]> ._content{padding:24px}.ukygtjoj>div[data-v-1dbdaf33]> ._content+._content{border-top:1px solid var(--divider)}.ukygtjoj.max-width_380px>header>.title[data-v-1dbdaf33]{padding:8px 10px;font-size:.9em}.ukygtjoj.max-width_380px>div[data-v-1dbdaf33]> ._content{padding:16px}._forceContainerFull_.ukygtjoj>header>.title[data-v-1dbdaf33],._forceContainerFull_ .ukygtjoj>header>.title[data-v-1dbdaf33]{padding:12px 16px!important}",""]),e.exports=o},78959:(e,t,a)=>{var o=a(23645)((function(e){return e[1]}));o.push([e.id,".uylguesu[data-v-22351a82]{text-align:right}.uylguesu>textarea[data-v-22351a82]{display:block;width:100%;max-width:100%;min-width:100%;padding:16px;color:var(--fg);background:transparent;border:none;border-bottom:1px solid var(--divider);border-radius:0;box-sizing:border-box;font:inherit}.uylguesu>textarea[data-v-22351a82]:focus{outline:none}.uylguesu>button[data-v-22351a82]{display:inline-block;margin:8px;padding:0 10px;height:28px;outline:none;border-radius:4px}.uylguesu>button[data-v-22351a82]:disabled{opacity:.7;cursor:default}.uylguesu>.logs[data-v-22351a82]{border-top:1px solid var(--divider);text-align:left;padding:16px}.uylguesu>.logs[data-v-22351a82]:empty{display:none}.uylguesu>.logs>.log[data-v-22351a82]:not(.print){opacity:.7}",""]),e.exports=o},31064:(e,t,a)=>{"use strict";a.d(t,{a:()=>s});var o=a(27328),r=a(10192),i=a(37200);function s(e){let t=0;return{USER_ID:i.$i?o.values.STR(i.$i.id):o.values.NULL,USER_NAME:i.$i?o.values.STR(i.$i.name):o.values.NULL,USER_USERNAME:i.$i?o.values.STR(i.$i.username):o.values.NULL,"Mk:dialog":o.values.FN_NATIVE((async([e,t,a])=>{await r.WZ({type:a?a.value:"info",title:e.value,text:t.value})})),"Mk:confirm":o.values.FN_NATIVE((async([e,t,a])=>(await r.WZ({type:a?a.value:"question",showCancelButton:!0,title:e.value,text:t.value})).canceled?o.values.FALSE:o.values.TRUE)),"Mk:api":o.values.FN_NATIVE((async([a,i,s])=>{if(s&&o.utils.assertString(s),t++,t>16)return o.values.NULL;const n=await r.hi(a.value,o.utils.valToJs(i),s?s.value:e.token||null);return o.utils.jsToVal(n)})),"Mk:save":o.values.FN_NATIVE((([t,a])=>(o.utils.assertString(t),localStorage.setItem("aiscript:"+e.storageKey+":"+t.value,JSON.stringify(o.utils.valToJs(a))),o.values.NULL))),"Mk:load":o.values.FN_NATIVE((([t])=>(o.utils.assertString(t),o.utils.jsToVal(JSON.parse(localStorage.getItem("aiscript:"+e.storageKey+":"+t.value))))))}}},46397:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(55393),r=a(51084),i=a(10192);function s(e){return(0,o.defineComponent)({props:{widget:{type:Object,required:!1},settingCallback:{required:!1}},emits:["updateProps"],data(){return{props:this.widget?JSON.parse(JSON.stringify(this.widget.data)):{},save:(0,r.P)(3e3,(()=>{this.$emit("updateProps",this.props)}))}},computed:{id(){return this.widget?this.widget.id:null}},created(){this.mergeProps(),this.$watch("props",(()=>{this.mergeProps()}),{deep:!0}),this.settingCallback&&this.settingCallback(this.setting)},methods:{mergeProps(){if(e.props){const t=e.props();for(const e of Object.keys(t))this.props.hasOwnProperty(e)||(this.props[e]=t[e].default)}},async setting(){const t=e.props();for(const e of Object.keys(t))t[e].default=this.props[e];const{canceled:a,result:o}=await i.cr(e.name,t);if(!a){for(const e of Object.keys(o))this.props[e]=o[e];this.save()}}}})}},69146:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var o=a(55393);const r=(0,o.withScopeId)("data-v-1dbdaf33");(0,o.pushScopeId)("data-v-1dbdaf33");const i={key:0,ref:"header"},s={class:"title"},n={class:"sub"};(0,o.popScopeId)();const d=r(((e,t,a,d,l,c)=>{const p=(0,o.resolveComponent)("Fa"),u=(0,o.resolveDirective)("size");return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)("div",{class:["ukygtjoj _panel",{naked:e.naked,hideHeader:!e.showHeader,scrollable:e.scrollable,closed:!e.showBody}]},[e.showHeader?((0,o.openBlock)(),(0,o.createBlock)("header",i,[(0,o.createVNode)("div",s,[(0,o.renderSlot)(e.$slots,"header")]),(0,o.createVNode)("div",n,[(0,o.renderSlot)(e.$slots,"func"),e.bodyTogglable?((0,o.openBlock)(),(0,o.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=()=>e.showBody=!e.showBody)},[e.showBody?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0,icon:e.faAngleUp},null,8,["icon"])):((0,o.openBlock)(),(0,o.createBlock)(p,{key:1,icon:e.faAngleDown},null,8,["icon"]))])):(0,o.createCommentVNode)("",!0)])],512)):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(o.Transition,{name:"container-toggle",onEnter:e.enter,onAfterEnter:e.afterEnter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:r((()=>[(0,o.withDirectives)((0,o.createVNode)("div",null,[(0,o.renderSlot)(e.$slots,"default")],512),[[o.vShow,e.showBody]])])),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],2)),[[u,{max:[380]}]])}));var l=a(51436);const c=(0,o.defineComponent)({props:{showHeader:{type:Boolean,required:!1,default:!0},naked:{type:Boolean,required:!1,default:!1},bodyTogglable:{type:Boolean,required:!1,default:!1},expanded:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1}},data(){return{showBody:this.expanded,faAngleUp:l.onQ,faAngleDown:l.gc2}},mounted(){this.$watch("showBody",(e=>{const t=this.showHeader?this.$refs.header.offsetHeight:0;this.$el.style.minHeight=t+"px",this.$el.style.flexBasis=e?"auto":t+"px"}),{immediate:!0})},methods:{toggleContent(e){this.bodyTogglable&&(this.showBody=e)},enter(e){const t=e.getBoundingClientRect().height;e.style.height=0,e.offsetHeight,e.style.height=t+"px"},afterEnter(e){e.style.height=null},leave(e){const t=e.getBoundingClientRect().height;e.style.height=t+"px",e.offsetHeight,e.style.height=0},afterLeave(e){e.style.height=null}}});a(64935);c.render=d,c.__scopeId="data-v-1dbdaf33";const p=c},73193:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var o=a(55393);const r=(0,o.withScopeId)("data-v-22351a82");(0,o.pushScopeId)("data-v-22351a82");const i={class:"uylguesu _monospace"},s={class:"logs"};(0,o.popScopeId)();const n=r(((e,t,a,n,d,l)=>{const c=(0,o.resolveComponent)("Fa"),p=(0,o.resolveComponent)("MkContainer");return(0,o.openBlock)(),(0,o.createBlock)(p,{"show-header":e.props.showHeader},{header:r((()=>[(0,o.createVNode)(c,{icon:e.faTerminal},null,8,["icon"]),(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts._widgets.aiscript),1)])),default:r((()=>[(0,o.createVNode)("div",i,[(0,o.withDirectives)((0,o.createVNode)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.props.script=t),placeholder:"(1 + 1)"},null,512),[[o.vModelText,e.props.script]]),(0,o.createVNode)("button",{onClick:t[2]||(t[2]=(...t)=>e.run&&e.run(...t)),class:"_buttonPrimary"},"RUN"),(0,o.createVNode)("div",s,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.logs,(e=>((0,o.openBlock)(),(0,o.createBlock)("div",{class:["log",{print:e.print}],key:e.id},(0,o.toDisplayString)(e.text),3)))),128))])])])),_:1},8,["show-header"])}));var d=a(51436),l=a(69146),c=a(46397),p=a(10192),u=a(27328),g=a(31064);const h=(0,c.Z)({name:"aiscript",props:()=>({showHeader:{type:"boolean",default:!0},script:{type:"string",multiline:!0,default:"(1 + 1)",hidden:!0}})}),v=(0,o.defineComponent)({extends:h,components:{MkContainer:l.Z},data:()=>({logs:[],faTerminal:d.Jw3}),methods:{async run(){var e;this.logs=[];const t=new u.AiScript((0,g.a)({storageKey:"widget",token:null===(e=this.$i)||void 0===e?void 0:e.token}),{in:e=>new Promise((t=>{p.WZ({title:e,input:{}}).then((({canceled:e,result:a})=>{t(a)}))})),out:e=>{this.logs.push({id:Math.random(),text:"str"===e.type?e.value:u.utils.valToString(e),print:!0})},log:(e,t)=>{switch(e){case"end":this.logs.push({id:Math.random(),text:u.utils.valToString(t.val,!0),print:!1})}}});let a;try{a=(0,u.parse)(this.props.script)}catch(e){return void p.WZ({type:"error",text:"Syntax error :("})}try{await t.exec(a)}catch(e){p.WZ({type:"error",text:e})}}}});a(84131);v.render=n,v.__scopeId="data-v-22351a82";const y=v},64935:(e,t,a)=>{var o=a(62960);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,a(45346).Z)("ab0d80cc",o,!0,{})},84131:(e,t,a)=>{var o=a(78959);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,a(45346).Z)("46bdb96b",o,!0,{})},63906:()=>{}}]);