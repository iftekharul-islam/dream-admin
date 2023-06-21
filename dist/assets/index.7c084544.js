import{a as g,j as a,r as c,aJ as x,aK as b,aL as h,aM as C,aN as N,P as f,aO as P,aP as E,aQ as y,f as H}from"./index.d98bf689.js";import{a as m}from"./App.0e9c5e5b.js";import{Q as v,C as q,a as A}from"./CustomHeader.e19b85b4.js";import{C as k,E as z}from"./CustomSidebar.dacf94e5.js";const F=()=>{const e=m(),{loading:n,sidebarOpen:i,errors:u,uploadData:s,options:t}=g(r=>r.subgenres),o=()=>{e(h())},d=r=>{r.preventDefault(),e(C())},p=r=>{r.preventDefault(),e(N())},l=[{label:"Name",required:!0,name:"name",type:"text",placeHolder:"Sub-genre Name",show:!0},{label:"Genre",required:!0,name:"genre_id",type:"select",options:t==null?void 0:t.genre,isMulti:!1,isClearable:!1,placeHolder:"Select Genre",disabled:s==null?void 0:s.isEdit,show:!0},{label:"Status",required:!1,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:s==null?void 0:s.isEdit}],S=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:d,show:!(s!=null&&s.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:p,show:s==null?void 0:s.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:o,show:!0}];return a(c.exports.Fragment,{children:a(k,{open:i,toggleSidebar:o,title:s!=null&&s.isEdit?"Edit Sub-genre":"Add new Sub-genre",errors:u,data:s,onChange:r=>e(x(r)),onReset:()=>e(b({})),loading:n,fields:l,button:S})})},G=e=>{const n=m();return a("div",{className:"actions cursor-pointer",children:a("div",{onClick:()=>{n(h()),n(b({...e,isEdit:!0}))},children:a(z,{size:20})})})},O=[{name:"Name",minWidth:"180px",selector:e=>e.name,cell:e=>a("span",{className:"text-capitalize",children:e.name})},{name:"Genre",minWidth:"120px",selector:e=>e==null?void 0:e.genre,cell:e=>{var n;return a("span",{className:"text-capitalize",children:(n=e==null?void 0:e.genre)==null?void 0:n.name})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>a("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>G(e)}],W=()=>{const e=m(),{data:n,total:i,from:u,to:s,params:t,loading:o}=g(l=>l.subgenres),d=l=>{e(P(l))},p=()=>{e(h())};return a(c.exports.Fragment,{children:a(f,{className:"app-user-list",children:a(v,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:O,className:"react-dataTable",paginationComponent:()=>q(u,s,i,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,d),data:n,progressPending:o,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:a(A,{toggleSidebar:p,setParams:d,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"Sub-genre",searchPlaceHolder:"Search by Sub-genre Name"})})})})},U=()=>{const e=m(),{params:n}=g(i=>i.subgenres);return c.exports.useEffect(()=>{e(E())},[n]),c.exports.useEffect(()=>{e(y())},[]),H(c.exports.Fragment,{children:[a(f,{className:"app-user-list",children:a(W,{})}),a(F,{})]})};export{U as default};
