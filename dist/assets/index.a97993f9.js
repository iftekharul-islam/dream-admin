import{a as p,j as s,r as c,av as N,aw as b,ax as h,ay as P,az as S,aA as x,P as f,aB as y,f as E}from"./index.bca351f0.js";import{a as u}from"./App.b816fb34.js";import{C as v,E as H,Q as w,a as A,b as L}from"./CustomHeader.2260d794.js";const k=()=>{const e=u(),{loading:n,sidebarOpen:i,errors:m,uploadData:a,options:t}=p(r=>r.languages),l=()=>{e(h())},d=r=>{r.preventDefault(),e(P())},g=r=>{r.preventDefault(),e(S())},o=[{label:"Name",required:!0,name:"name",type:"text",placeHolder:"Language Name",show:!0},{label:"Status",required:!0,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:a==null?void 0:a.isEdit}],C=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:d,show:!(a!=null&&a.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:g,show:a==null?void 0:a.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:l,show:!0}];return s(c.exports.Fragment,{children:s(v,{open:i,toggleSidebar:l,title:a!=null&&a.isEdit?"Edit Language":"Add new Language",errors:m,data:a,onChange:r=>e(N(r)),onReset:()=>e(b({})),loading:n,fields:o,button:C})})},q=e=>{const n=u();return s("div",{className:"actions cursor-pointer",children:s("div",{onClick:()=>{n(h()),n(b({...e,isEdit:!0}))},children:s(H,{size:20})})})},z=[{name:"Name",minWidth:"180px",selector:e=>e.name,cell:e=>s("span",{className:"text-capitalize",children:e.name})},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>s("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>q(e)}],F=()=>{const e=u(),{data:n,total:i,from:m,to:a,params:t,loading:l}=p(o=>o.languages);c.exports.useEffect(()=>{e(x())},[t]);const d=o=>{e(y(o))},g=()=>{e(h())};return s(c.exports.Fragment,{children:s(f,{className:"app-user-list",children:s(w,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:z,className:"react-dataTable",paginationComponent:()=>A(m,a,i,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,d),data:n,progressPending:l,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:s(L,{toggleSidebar:g,setParams:d,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"Language",searchPlaceHolder:"Search by Language Name"})})})})},W=()=>{const e=u(),{params:n}=p(i=>i.languages);return c.exports.useEffect(()=>{e(x())},[n]),E(c.exports.Fragment,{children:[s(f,{className:"app-user-list",children:s(F,{})}),s(k,{})]})};export{W as default};
