import{d as i,I as d,b as s,c as l,W as p,N as _,f as r,e as n,n as f,Z as m,l as y}from"./entry.20e58c05.js";import"./MDCSlot.24733a16.js";import{r as a}from"./slot.c991de08.js";const v={class:"callout-content-wrapper content"},$={key:0,class:"callout-title"},C={class:"callout-content"},g=i({__name:"Callout",props:{type:{type:String,default:"neutral",validator(t){return["info","success","warning","danger","primary","secondary","neutral"].includes(t)}},icon:{type:[String,Boolean],default:!1}},setup(t){const o=t,c=d(()=>o.icon===!1?"":o.icon===!0?`type:${o.type}`:o.icon);return(e,h)=>{const u=m;return s(),l("div",{class:f(["callout",[t.type]])},[t.icon?(s(),p(u,{key:0,name:_(c),class:"callout-icon"},null,8,["name"])):r("",!0),n("div",v,[e.$slots.title?(s(),l("div",$,[n("h5",null,[a(e.$slots,"default",{use:e.$slots.title,unwrap:"p"},void 0,!0)])])):r("",!0),n("div",C,[a(e.$slots,"default",{use:e.$slots.content,unwrap:"p"},()=>[a(e.$slots,"default",{use:e.$slots.default},void 0,!0)],!0)])])],2)}}});const N=y(g,[["__scopeId","data-v-1446e64a"]]);export{N as default};