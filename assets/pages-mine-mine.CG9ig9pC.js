import{r as a,b as l,c as s,w as e,p as t,a as n,F as u,i,o,g as r,t as c,d,e as g,n as v,h as f}from"./index-CP19PT5u.js";import{f as p,h as m,i as _,j as y,k as h,l as w}from"./index.Cx3jpoZy.js";import{_ as k}from"./plugin-vueexport-helper.BCo6x5W8.js";const x=k({__name:"mine",setup(k){const x=a([]),b=a([]),j=a([]),C=a([]),I=a([]),S=a([]);a([]);const U=a(!1),$=()=>{v({url:"/pages/login/login"})};localStorage.getItem("logined")?U.value=!1:U.value=!0;return(async()=>{var a,l;const s=await p();x.value=s.data.data.profile;const e=null==(a=x.value)?void 0:a.userId,t=await m(e);b.value=t.data.follow;const n=await _(e);j.value=n.data.followeds;const u=await y(e);C.value=null==(l=u.data.data)?void 0:l.level;const i=await h(e);I.value=i.data.listenSongs;const o=await w(e);S.value=o.data.playlist})(),(a,p)=>{const m=i,_=f;return o(),l(u,null,[U.value?(o(),s(m,{key:0,class:"mine"},{default:e((()=>[n(m,{class:"my-music"},{default:e((()=>[r("我的音乐")])),_:1}),n(m,{class:"my-login",onClick:$},{default:e((()=>[r("去登录")])),_:1})])),_:1})):(o(),s(m,{key:1,class:"logined",style:t({backgroundImage:`url(${x.value.backgroundUrl})`})},{default:e((()=>[n(m,{class:"header",style:{width:"100%","text-align":"center"}},{default:e((()=>[n(_,{src:x.value.avatarUrl,alt:"",style:{width:"200rpx",height:"200rpx","border-radius":"50%"}},null,8,["src"]),n(m,{class:"toname",style:{margin:"40rpx 0"}},{default:e((()=>[r(c(x.value.nickname),1)])),_:1}),n(m,{class:"",style:{display:"flex","justify-content":"space-between","font-size":"24rpx",padding:"0 100rpx"}},{default:e((()=>[n(m,{class:""},{default:e((()=>[r(c(j.value.length)+"关注",1)])),_:1}),n(m,{class:""},{default:e((()=>[r(c(b.value.length)+"粉丝",1)])),_:1}),n(m,{class:""},{default:e((()=>[r("Lv."+c(C.value)+"等级",1)])),_:1}),n(m,{class:""},{default:e((()=>[r(c(I.value)+"听歌",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])),n(m,{class:"main"},{default:e((()=>[(o(!0),l(u,null,d(S.value,((a,l)=>(o(),s(m,{class:"list-left",key:l,onClick:l=>{return s=a.id,console.log(s),void v({url:`/pages/songSheet/songSheet?id=${s}`});var s}},{default:e((()=>[g("img",{class:"list-img",src:a.coverImgUrl,alt:""},null,8,["src"]),n(m,{class:"list-right"},{default:e((()=>[n(m,{class:"list-right-1"},{default:e((()=>[r(c(a.name),1)])),_:2},1024),n(m,{class:"list-right-2"},{default:e((()=>[r(c(a.trackCount)+"首·"+c(a.playCount)+"次播放 ",1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})],64)}}},[["__scopeId","data-v-0276379c"]]);export{x as default};
