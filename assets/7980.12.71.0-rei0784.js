(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[7980],{62960:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".container-toggle-enter-active[data-v-1dbdaf33],.container-toggle-leave-active[data-v-1dbdaf33]{overflow-y:hidden;transition:opacity .5s,height .5s!important}.container-toggle-enter-from[data-v-1dbdaf33],.container-toggle-leave-to[data-v-1dbdaf33]{opacity:0}.ukygtjoj[data-v-1dbdaf33]{position:relative;overflow:hidden}.ukygtjoj.naked[data-v-1dbdaf33]{background:transparent!important;box-shadow:none!important}.ukygtjoj.scrollable[data-v-1dbdaf33]{display:flex;flex-direction:column}.ukygtjoj.scrollable>div[data-v-1dbdaf33]{overflow:auto}.ukygtjoj>header[data-v-1dbdaf33]{position:relative;color:var(--panelHeaderFg);background:var(--panelHeaderBg);box-shadow:0 1px 0 0 var(--panelHeaderDivider);z-index:2;line-height:1.4em}.ukygtjoj>header>.title[data-v-1dbdaf33]{margin:0;padding:12px 16px}.ukygtjoj>header>.title[data-v-1dbdaf33]> [data-icon]{margin-right:6px}.ukygtjoj>header>.title[data-v-1dbdaf33]:empty{display:none}.ukygtjoj>header>.sub[data-v-1dbdaf33]{position:absolute;z-index:2;top:0;right:0;height:100%}.ukygtjoj>header>.sub[data-v-1dbdaf33]> button{width:42px;height:100%}.ukygtjoj>div[data-v-1dbdaf33]> ._content{padding:24px}.ukygtjoj>div[data-v-1dbdaf33]> ._content+._content{border-top:1px solid var(--divider)}.ukygtjoj.max-width_380px>header>.title[data-v-1dbdaf33]{padding:8px 10px;font-size:.9em}.ukygtjoj.max-width_380px>div[data-v-1dbdaf33]> ._content{padding:16px}._forceContainerFull_.ukygtjoj>header>.title[data-v-1dbdaf33],._forceContainerFull_ .ukygtjoj>header>.title[data-v-1dbdaf33]{padding:12px 16px!important}",""]),e.exports=a},49731:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".ekmkgxbj>.feed[data-v-05ab320c]{padding:0;font-size:.9em}.ekmkgxbj>.feed>a[data-v-05ab320c]{display:block;padding:8px 16px;color:var(--fg);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ekmkgxbj>.feed>a[data-v-05ab320c]:nth-child(2n){background:rgba(0,0,0,.05)}",""]),e.exports=a},46397:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(55393),d=o(51084),n=o(10192);function r(e){return(0,a.defineComponent)({props:{widget:{type:Object,required:!1},settingCallback:{required:!1}},emits:["updateProps"],data(){return{props:this.widget?JSON.parse(JSON.stringify(this.widget.data)):{},save:(0,d.P)(3e3,(()=>{this.$emit("updateProps",this.props)}))}},computed:{id(){return this.widget?this.widget.id:null}},created(){this.mergeProps(),this.$watch("props",(()=>{this.mergeProps()}),{deep:!0}),this.settingCallback&&this.settingCallback(this.setting)},methods:{mergeProps(){if(e.props){const t=e.props();for(const e of Object.keys(t))this.props.hasOwnProperty(e)||(this.props[e]=t[e].default)}},async setting(){const t=e.props();for(const e of Object.keys(t))t[e].default=this.props[e];const{canceled:o,result:a}=await n.cr(e.name,t);if(!o){for(const e of Object.keys(a))this.props[e]=a[e];this.save()}}}})}},69146:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var a=o(55393);const d=(0,a.withScopeId)("data-v-1dbdaf33");(0,a.pushScopeId)("data-v-1dbdaf33");const n={key:0,ref:"header"},r={class:"title"},s={class:"sub"};(0,a.popScopeId)();const i=d(((e,t,o,i,l,c)=>{const p=(0,a.resolveComponent)("Fa"),h=(0,a.resolveDirective)("size");return(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)("div",{class:["ukygtjoj _panel",{naked:e.naked,hideHeader:!e.showHeader,scrollable:e.scrollable,closed:!e.showBody}]},[e.showHeader?((0,a.openBlock)(),(0,a.createBlock)("header",n,[(0,a.createVNode)("div",r,[(0,a.renderSlot)(e.$slots,"header")]),(0,a.createVNode)("div",s,[(0,a.renderSlot)(e.$slots,"func"),e.bodyTogglable?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=()=>e.showBody=!e.showBody)},[e.showBody?((0,a.openBlock)(),(0,a.createBlock)(p,{key:0,icon:e.faAngleUp},null,8,["icon"])):((0,a.openBlock)(),(0,a.createBlock)(p,{key:1,icon:e.faAngleDown},null,8,["icon"]))])):(0,a.createCommentVNode)("",!0)])],512)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(a.Transition,{name:"container-toggle",onEnter:e.enter,onAfterEnter:e.afterEnter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:d((()=>[(0,a.withDirectives)((0,a.createVNode)("div",null,[(0,a.renderSlot)(e.$slots,"default")],512),[[a.vShow,e.showBody]])])),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],2)),[[h,{max:[380]}]])}));var l=o(51436);const c=(0,a.defineComponent)({props:{showHeader:{type:Boolean,required:!1,default:!0},naked:{type:Boolean,required:!1,default:!1},bodyTogglable:{type:Boolean,required:!1,default:!1},expanded:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1}},data(){return{showBody:this.expanded,faAngleUp:l.onQ,faAngleDown:l.gc2}},mounted(){this.$watch("showBody",(e=>{const t=this.showHeader?this.$refs.header.offsetHeight:0;this.$el.style.minHeight=t+"px",this.$el.style.flexBasis=e?"auto":t+"px"}),{immediate:!0})},methods:{toggleContent(e){this.bodyTogglable&&(this.showBody=e)},enter(e){const t=e.getBoundingClientRect().height;e.style.height=0,e.offsetHeight,e.style.height=t+"px"},afterEnter(e){e.style.height=null},leave(e){const t=e.getBoundingClientRect().height;e.style.height=t+"px",e.offsetHeight,e.style.height=0},afterLeave(e){e.style.height=null}}});o(64935);c.render=i,c.__scopeId="data-v-1dbdaf33";const p=c},17980:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var a=o(55393);const d=(0,a.withScopeId)("data-v-05ab320c");(0,a.pushScopeId)("data-v-05ab320c");const n=(0,a.createTextVNode)("RSS"),r={class:"ekmkgxbj"},s={key:1,class:"feed"};(0,a.popScopeId)();const i=d(((e,t,o,i,l,c)=>{const p=(0,a.resolveComponent)("Fa"),h=(0,a.resolveComponent)("MkLoading"),f=(0,a.resolveComponent)("MkContainer");return(0,a.openBlock)(),(0,a.createBlock)(f,{"show-header":e.props.showHeader},{header:d((()=>[(0,a.createVNode)(p,{icon:e.faRssSquare},null,8,["icon"]),n])),func:d((()=>[(0,a.createVNode)("button",{class:"_button",onClick:t[1]||(t[1]=(...t)=>e.setting&&e.setting(...t))},[(0,a.createVNode)(p,{icon:e.faCog},null,8,["icon"])])])),default:d((()=>[(0,a.createVNode)("div",r,[e.fetching?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0})):((0,a.openBlock)(),(0,a.createBlock)("div",s,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(e.items,(e=>((0,a.openBlock)(),(0,a.createBlock)("a",{href:e.link,rel:"nofollow noopener",target:"_blank",title:e.title},(0,a.toDisplayString)(e.title),9,["href","title"])))),256))]))])])),_:1},8,["show-header"])}));var l=o(51436),c=o(69146);const p=(0,o(46397).Z)({name:"rss",props:()=>({showHeader:{type:"boolean",default:!0},url:{type:"string",default:"http://feeds.afpbb.com/rss/afpbb/afpbbnews"}})}),h=(0,a.defineComponent)({extends:p,components:{MkContainer:c.Z},data:()=>({items:[],fetching:!0,clock:null,faRssSquare:l.TwV,faCog:l.b7W}),mounted(){this.fetch(),this.clock=setInterval(this.fetch,6e4),this.$watch((()=>this.props.url),this.fetch)},beforeUnmount(){clearInterval(this.clock)},methods:{fetch(){fetch("https://api.rss2json.com/v1/api.json?rss_url="+this.props.url,{}).then((e=>{e.json().then((e=>{this.items=e.items,this.fetching=!1}))}))}}});o(15172);h.render=i,h.__scopeId="data-v-05ab320c";const f=h},64935:(e,t,o)=>{var a=o(62960);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("ab0d80cc",a,!0,{})},15172:(e,t,o)=>{var a=o(49731);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("57195bfe",a,!0,{})}}]);