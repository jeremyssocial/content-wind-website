import s from"./ContentSlot.f4c24a31.js";import{d as o,a4 as u,I as f,ak as m}from"./entry.20e58c05.js";import"./MDCSlot.24733a16.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};