import{d as a,I as n,b as i,c as o,O as c,N as d,af as u,m as l,l as m}from"./entry.20e58c05.js";const h=["src","alt","width","height"],g=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=n(()=>{var s;return(s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")?u(e.src,l().app.baseURL):e.src});return(s,p)=>(i(),o("img",c(s.$attrs,{src:d(r),alt:t.alt,width:t.width,height:t.height,class:"prose-img"}),null,16,h))}});const f=m(g,[["__scopeId","data-v-b27284d0"]]);export{f as default};