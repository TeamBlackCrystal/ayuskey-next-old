(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[1156],{26935:(e,t,a)=>{var i=a(23645)((function(e){return e[1]}));i.push([e.id,".player[data-v-67fdb486]{position:relative;width:100%}.player>button[data-v-67fdb486]{position:absolute;top:-1.5em;right:0;font-size:1em;width:1.5em;height:1.5em;padding:0;margin:0;color:var(--fg);background:hsla(0,0%,50.2%,.2);opacity:.7}.player>button[data-v-67fdb486]:hover{opacity:.9}.player>iframe[data-v-67fdb486]{height:100%;left:0;position:absolute;top:0;width:100%}.mk-url-preview.max-width_400px>a[data-v-67fdb486]{font-size:12px}.mk-url-preview.max-width_400px>a>.thumbnail[data-v-67fdb486]{height:80px}.mk-url-preview.max-width_400px>a>article[data-v-67fdb486]{padding:12px}.mk-url-preview.max-width_350px>a[data-v-67fdb486]{font-size:10px}.mk-url-preview.max-width_350px>a>.thumbnail[data-v-67fdb486]{height:70px}.mk-url-preview.max-width_350px>a>article[data-v-67fdb486]{padding:8px}.mk-url-preview.max-width_350px>a>article>header[data-v-67fdb486]{margin-bottom:4px}.mk-url-preview.max-width_350px>a>article>footer[data-v-67fdb486]{margin-top:4px}.mk-url-preview.max-width_350px>a>article>footer>img[data-v-67fdb486]{width:12px;height:12px}.mk-url-preview.max-width_350px>a.compact>.thumbnail[data-v-67fdb486]{position:absolute;width:56px;height:100%}.mk-url-preview.max-width_350px>a.compact>article[data-v-67fdb486]{left:56px;width:calc(100% - 56px);padding:4px}.mk-url-preview.max-width_350px>a.compact>article>header[data-v-67fdb486]{margin-bottom:2px}.mk-url-preview.max-width_350px>a.compact>article>footer[data-v-67fdb486]{margin-top:2px}.mk-url-preview>a[data-v-67fdb486]{position:relative;display:block;font-size:14px;box-shadow:0 0 0 1px var(--divider);border-radius:8px;overflow:hidden}.mk-url-preview>a[data-v-67fdb486]:hover{text-decoration:none;border-color:rgba(0,0,0,.2)}.mk-url-preview>a:hover>article>header>h1[data-v-67fdb486]{text-decoration:underline}.mk-url-preview>a>.thumbnail[data-v-67fdb486]{position:absolute;width:100px;height:100%;background-position:50%;background-size:cover;display:flex;justify-content:center;align-items:center}.mk-url-preview>a>.thumbnail>button[data-v-67fdb486]{font-size:3.5em;opacity:.7}.mk-url-preview>a>.thumbnail>button[data-v-67fdb486]:hover{font-size:4em;opacity:.9}.mk-url-preview>a>.thumbnail+article[data-v-67fdb486]{left:100px;width:calc(100% - 100px)}.mk-url-preview>a>article[data-v-67fdb486]{position:relative;box-sizing:border-box;padding:16px}.mk-url-preview>a>article>header[data-v-67fdb486]{margin-bottom:8px}.mk-url-preview>a>article>header>h1[data-v-67fdb486]{margin:0;font-size:1em}.mk-url-preview>a>article>p[data-v-67fdb486]{margin:0;font-size:.8em}.mk-url-preview>a>article>footer[data-v-67fdb486]{margin-top:8px;height:16px}.mk-url-preview>a>article>footer>img[data-v-67fdb486]{display:inline-block;width:16px;height:16px;margin-right:4px;vertical-align:top}.mk-url-preview>a>article>footer>p[data-v-67fdb486]{display:inline-block;margin:0;color:var(--urlPreviewInfo);font-size:.8em;line-height:16px;vertical-align:top}.mk-url-preview>a.compact>article>header h1[data-v-67fdb486],.mk-url-preview>a.compact>article footer[data-v-67fdb486],.mk-url-preview>a.compact>article p[data-v-67fdb486]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""]),e.exports=i},11156:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var i=a(55393);const r=(0,i.withScopeId)("data-v-67fdb486");(0,i.pushScopeId)("data-v-67fdb486");const l={key:1,class:"twitter",ref:"twitter"},o={key:2,class:"mk-url-preview"},d={key:0,class:"expandTweet"};(0,i.popScopeId)();const n=r(((e,t,a,n,p,c)=>{const s=(0,i.resolveComponent)("Fa"),m=(0,i.resolveDirective)("size");return e.playerEnabled?((0,i.openBlock)(),(0,i.createBlock)("div",{key:0,class:"player",style:`padding: ${(e.player.height||0)/(e.player.width||1)*100}% 0 0`},[(0,i.createVNode)("button",{class:"disablePlayer",onClick:t[1]||(t[1]=t=>e.playerEnabled=!1),title:e.$ts.disablePlayer},[(0,i.createVNode)(s,{icon:"times"})],8,["title"]),(0,i.createVNode)("iframe",{src:e.player.url+(e.player.url.match(/\?/)?"&autoplay=1&auto_play=1":"?autoplay=1&auto_play=1"),width:e.player.width||"100%",heigth:e.player.height||250,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,8,["src","width","heigth"])],4)):e.tweetId&&e.tweetExpanded?((0,i.openBlock)(),(0,i.createBlock)("div",l,[(0,i.createVNode)("iframe",{ref:"tweet",scrolling:"no",frameborder:"no",style:{position:"relative",left:e.tweetLeft+"px",width:""+(e.tweetLeft<0?"auto":"100%"),height:e.tweetHeight+"px"},src:`https://platform.twitter.com/embed/index.html?embedId=${e.embedId}&hideCard=false&hideThread=false&lang=en&theme=${e.$store.state.darkMode?"dark":"light"}&id=${e.tweetId}`},null,12,["src"])],512)):(0,i.withDirectives)(((0,i.openBlock)(),(0,i.createBlock)("div",o,[(0,i.createVNode)(i.Transition,{name:"zoom",mode:"out-in"},{default:r((()=>[e.fetching?(0,i.createCommentVNode)("",!0):((0,i.openBlock)(),(0,i.createBlock)((0,i.resolveDynamicComponent)(e.self?"MkA":"a"),{key:0,class:{compact:e.compact},[e.attr||""]:e.self?e.url.substr(e.local.length):e.url,rel:"nofollow noopener",target:e.target,title:e.url},{default:r((()=>[e.thumbnail?((0,i.openBlock)(),(0,i.createBlock)("div",{key:0,class:"thumbnail",style:`background-image: url('${e.thumbnail}')`},[!e.playerEnabled&&e.player.url?((0,i.openBlock)(),(0,i.createBlock)("button",{key:0,class:"_button",onClick:t[2]||(t[2]=(0,i.withModifiers)((t=>e.playerEnabled=!0),["prevent"])),title:e.$ts.enablePlayer},[(0,i.createVNode)(s,{icon:e.faPlayCircle},null,8,["icon"])],8,["title"])):(0,i.createCommentVNode)("",!0)],4)):(0,i.createCommentVNode)("",!0),(0,i.createVNode)("article",null,[(0,i.createVNode)("header",null,[(0,i.createVNode)("h1",{title:e.title},(0,i.toDisplayString)(e.title),9,["title"])]),e.description?((0,i.openBlock)(),(0,i.createBlock)("p",{key:0,title:e.description},(0,i.toDisplayString)(e.description.length>85?e.description.slice(0,85)+"…":e.description),9,["title"])):(0,i.createCommentVNode)("",!0),(0,i.createVNode)("footer",null,[e.icon?((0,i.openBlock)(),(0,i.createBlock)("img",{key:0,class:"icon",src:e.icon},null,8,["src"])):(0,i.createCommentVNode)("",!0),(0,i.createVNode)("p",{title:e.sitename},(0,i.toDisplayString)(e.sitename),9,["title"])])])])),_:1},16,["class","target","title"]))])),_:1}),e.tweetId?((0,i.openBlock)(),(0,i.createBlock)("div",d,[(0,i.createVNode)("a",{onClick:t[3]||(t[3]=t=>e.tweetExpanded=!0)},[(0,i.createVNode)(s,{icon:e.faTwitter},null,8,["icon"]),(0,i.createTextVNode)(" "+(0,i.toDisplayString)(e.$ts.expandTweet),1)])])):(0,i.createCommentVNode)("",!0)],512)),[[m,{max:[400,350]}]])}));var p=a(56024),c=a(51417),s=a(34862);const m=(0,i.defineComponent)({props:{url:{type:String,require:!0},detail:{type:Boolean,required:!1,default:!1},compact:{type:Boolean,required:!1,default:!1}},data(){const e=this.url.startsWith(s.HQ);return{local:s.HQ,fetching:!0,title:null,description:null,thumbnail:null,icon:null,sitename:null,player:{url:null,width:null,height:null},tweetId:null,tweetExpanded:this.detail,embedId:"embed"+Math.random().toString().replace(/\D/,""),tweetHeight:150,tweetLeft:0,playerEnabled:!1,self:e,attr:e?"to":"href",target:e?null:"_blank",faPlayCircle:p.aQ,faTwitter:c.mdU}},created(){const e=new URL(this.url);if("twitter.com"==e.hostname){const t=e.pathname.match(/^\/.+\/status(?:es)?\/(\d+)/);t&&(this.tweetId=t[1])}"music.youtube.com"===e.hostname&&e.pathname.match("^/(?:watch|channel)")&&(e.hostname="www.youtube.com");const t=(s.KQ||"ja-JP").replace("ja-KS","ja-JP");e.hash="",fetch(`https://${s.PX}/url?url=${encodeURIComponent(e.href)}&lang=${t}`).then((e=>{e.json().then((e=>{null!=e.url&&(this.title=e.title,this.description=e.description,this.thumbnail=e.thumbnail,this.icon=e.icon,this.sitename=e.sitename,this.fetching=!1,this.player=e.player)}))})),window.addEventListener("message",this.adjustTweetHeight)},mounted(){var e;const t=null===(e=this.$el)||void 0===e?void 0:e.clientWidth;t&&t<300&&(this.tweetLeft=t-241)},methods:{adjustTweetHeight(e){var t,a;if("https://platform.twitter.com"!==e.origin)return;const i=null===(t=e.data)||void 0===t?void 0:t["twttr.embed"];if("twttr.private.resize"!==(null==i?void 0:i.method))return;if((null==i?void 0:i.id)!==this.embedId)return;const r=null===(a=null==i?void 0:i.params[0])||void 0===a?void 0:a.height;r&&(this.tweetHeight=r)}},beforeUnmount(){window.removeEventListener("message",this.adjustTweetHeight)}});a(25164);m.render=n,m.__scopeId="data-v-67fdb486";const h=m},25164:(e,t,a)=>{var i=a(26935);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,a(45346).Z)("567567f1",i,!0,{})}}]);