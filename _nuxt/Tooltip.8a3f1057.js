import"./MDCSlot.24733a16.js";import{d as _,r as i,a5 as x,b as m,c,e as w,N as t,aa as S,g as $,w as N,n as T,a1 as k,t as B,f as h,T as C,l as F}from"./entry.20e58c05.js";import{r as M}from"./slot.c991de08.js";import{u as R,o as W,f as V,s as z,a as D}from"./floating-ui.vue.esm.2dff09ff.js";import{a as E,b as I}from"./index.5e4877a2.js";const K=["tabindex","aria-describedby"],q=["id"],O=_({__name:"Tooltip",props:{content:{type:String,required:!0},tabbable:{type:Boolean,default:!1},maxWidth:{type:String,default:"240px"},offset:{type:Number,default:4},delay:{type:Number,default:200},strategy:{type:String,default:"absolute"},placement:{type:String,default:"top"}},setup(s){const n=s,a=i(!1),d=E(o=>{f.value||(a.value=o)},n.delay),r=i(null),u=i(null),{x:y,y:g,strategy:b,placement:v}=R(r,u,{strategy:n.strategy,middleware:[W(n.offset),V(),z({padding:4})],placement:n.placement,whileElementsMounted:D}),{focused:f}=I(r);x(f,o=>{o?a.value=!0:a.value=!1});const p=Math.random().toString(36).slice(2,7);return(o,e)=>(m(),c("span",{class:"tooltip",onMouseenter:e[3]||(e[3]=l=>t(d)(!0)),onMouseleave:e[4]||(e[4]=l=>t(d)(!1))},[w("span",{ref_key:"triggerRef",ref:r,tabindex:s.tabbable?0:-1,class:"trigger","aria-describedby":t(p),onFocus:e[0]||(e[0]=l=>a.value=!0),onBlur:e[1]||(e[1]=l=>a.value=!1),onKeydown:e[2]||(e[2]=S(l=>a.value=!1,["esc"]))},[M(o.$slots,"default",{use:o.$slots.default,unwrap:"p"},void 0,!0)],40,K),$(C,{name:"tooltip"},{default:N(()=>[t(a)?(m(),c("span",{key:0,id:t(p),ref_key:"floatingRef",ref:u,role:"tooltip",class:T(["tooltip-content",t(v)]),style:k({position:t(b),top:`${t(g)??0}px`,left:`${t(y)??0}px`,width:"max-content",maxWidth:s.maxWidth})},B(s.content),15,q)):h("",!0)]),_:1})],32))}});const H=F(O,[["__scopeId","data-v-919da457"]]);export{H as default};
