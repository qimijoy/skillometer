import{_ as h,r as b,a as g,b as y,w as P,o as c,c as p,F as f,d as _,e as k,t as C,n as $,f as S,u as I,g as N,h as w}from"./skillometer--bundle.js";import{S as M}from"./SkillTaskCard-9476ff52.js";function T(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function F(s,e,a,l){e===void 0&&(e=1),a===void 0&&(a=10),l===void 0&&(l=10);var t=Math.ceil(s/a);e<1?e=1:e>t&&(e=t);var n,i;if(t<=l)n=1,i=t;else{var r=Math.floor(l/2),d=Math.ceil(l/2)-1;e<=r?(n=1,i=l):e+d>=t?(n=t-l+1,i=t):(n=e-r,i=e+d)}var v=(e-1)*a,o=Math.min(v+a-1,s-1),u=Array.from(Array(i+1-n).keys()).map(function(m){return n+m});return{totalItems:s,currentPage:e,pageSize:a,totalPages:t,startPage:n,endPage:i,startIndex:v,endIndex:o,pages:u}}var O=F;const V=T(O);const j={class:"pagination"},x={class:"pagination__item"},B=["disabled"],L={class:"pagination__item"},A=["disabled"],D=["onClick"],E={class:"pagination__item"},q=["disabled"],H={class:"pagination__item"},z=["disabled"],G={__name:"SkillPagination",props:{items:{type:Array,required:!0},initialPage:{type:Number,default:1},pageSize:{type:Number,default:10},maxPages:{type:Number,default:6}},emits:{changePage:s=>!0},setup(s,{emit:e}){const a=s,l=e,t=b({}),n=g(()=>t.value.currentPage===1),i=g(()=>t.value.currentPage===t.value.totalPages),r=g(()=>t.value.totalPages);y(()=>{d(a.initialPage)});const d=v=>{t.value=V(a.items.length,v,a.pageSize,a.maxPages);const o=a.items.slice(t.value.startIndex,t.value.endIndex+1);l("changePage",o)};return P(()=>a.items,()=>d(a.initialPage)),(v,o)=>(c(),p("ul",j,[t.value.pages&&t.value.pages.length>1?(c(),p(f,{key:0},[_("li",x,[_("button",{type:"button",class:"pagination__button",disabled:n.value,onClick:o[0]||(o[0]=u=>d(1))},"First",8,B)]),_("li",L,[_("button",{type:"button",class:"pagination__button",disabled:n.value,onClick:o[1]||(o[1]=u=>d(t.value.currentPage-1))}," Previous ",8,A)]),(c(!0),p(f,null,k(t.value.pages,u=>(c(),p("li",{key:u,class:"pagination__item"},[_("button",{type:"button",class:$(["pagination__button",{pagination__button_active:t.value.currentPage===u}]),onClick:m=>d(u)},C(u),11,D)]))),128)),_("li",E,[_("button",{type:"button",class:"pagination__button",disabled:i.value,onClick:o[2]||(o[2]=u=>d(t.value.currentPage+1))}," Next ",8,q)]),_("li",H,[_("button",{type:"button",class:"pagination__button",disabled:i.value,onClick:o[3]||(o[3]=u=>d(r.value))}," Last ",8,z)])],64)):S("",!0)]))}},J=h(G,[["__scopeId","data-v-c5f2f52d"]]),K={class:"tasks"},Q=_("h1",{class:"tasks__header heading"},"Список задач",-1),R={class:"pagination"},X={__name:"TasksView",setup(s){const e=I(),a=b([]),l=g(()=>e.allTasks);g(()=>e.allTags);const t=n=>{a.value=n.sort((i,r)=>i.id-r.id)};return(n,i)=>(c(),p("div",K,[Q,(c(!0),p(f,null,k(a.value,r=>(c(),w(M,{key:r.id,task:r,class:"tasks__task"},null,8,["task"]))),128)),_("div",R,[N(J,{items:l.value,pageSize:5,onChangePage:t},null,8,["items"])])]))}};export{X as default};
