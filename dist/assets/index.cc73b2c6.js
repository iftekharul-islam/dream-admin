import{a as g,j as s,r as c,aq as f,ar as b,as as u,at as P,au as S,av as v,P as C,aw as N,f as y}from"./index.250f6712.js";import{a as h}from"./App.45edc6e9.js";/* empty css                                  */import{C as H}from"./CustomSidebar.65ebdec6.js";import{Q as E,C as T,a as A}from"./CustomHeader.0600e50d.js";import{E as q}from"./edit.da3a79ef.js";const k=()=>{const e=h(),{loading:i,sidebarOpen:d,errors:m,uploadData:a,options:t}=g(r=>r.parentalAdvisories),o=()=>{e(u())},l=r=>{r.preventDefault(),e(P())},p=r=>{r.preventDefault(),e(S())},n=[{label:"Title",required:!0,name:"title",type:"text",placeHolder:"Title",show:!0},{label:"Icon",required:!1,name:"icon",type:"text",placeHolder:"Icon",show:!0},{label:"Status",required:!0,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:a==null?void 0:a.isEdit}],x=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:l,show:!(a!=null&&a.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:p,show:a==null?void 0:a.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:o,show:!0}];return s(c.exports.Fragment,{children:s(H,{open:d,toggleSidebar:o,title:a!=null&&a.isEdit?"Edit CRBT":"Add new CRBT",errors:m,data:a,onChange:r=>e(f(r)),onReset:()=>e(b({})),loading:i,fields:n,button:x})})},z=e=>{const i=h();return s("div",{className:"actions cursor-pointer",children:s("div",{onClick:()=>{i(u()),i(b({...e,isEdit:!0}))},children:s(q,{size:20})})})},B=[{name:"Name",minWidth:"180px",selector:e=>e==null?void 0:e.title,cell:e=>s("span",{className:"text-capitalize",children:e==null?void 0:e.title})},{name:"Icon",minWidth:"180px",selector:e=>e.icon,cell:e=>s("span",{className:"text-capitalize",children:e.icon})},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>s("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>z(e)}],F=()=>{const e=h(),{data:i,total:d,from:m,to:a,params:t,loading:o}=g(n=>n.parentalAdvisories);c.exports.useEffect(()=>{e(v())},[t]);const l=n=>{e(N(n))},p=()=>{e(u())};return s(c.exports.Fragment,{children:s(C,{className:"app-user-list",children:s(E,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:B,className:"react-dataTable",paginationComponent:()=>T(m,a,d,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,l),data:i,progressPending:o,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:s(A,{toggleSidebar:p,setParams:l,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"CRBT",searchPlaceHolder:"Search by name"})})})})},Q=()=>y(c.exports.Fragment,{children:[s(C,{className:"app-user-list",children:s(F,{})}),s(k,{})]});export{Q as default};
