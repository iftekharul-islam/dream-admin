import{a as f,j as s,r as d,bd as N,be as y,bf as x,bg as P,bh as H,L as E,P as S,f as v,X as k,Y as o,bi as _,bj as U,bk as L}from"./index.9b1955b3.js";import{a as h}from"./App.ad13b1dc.js";import{Q as q,C as T,a as W,S as C}from"./CustomHeader.b9d896cf.js";import{C as A}from"./CustomSidebar.404145d7.js";import{E as M}from"./edit.b089f5a5.js";const j=()=>{const e=h(),{loading:a,sidebarOpen:c,errors:g,uploadData:i,options:t}=f(r=>r.labels),m=()=>{e(x())},n=r=>{r.preventDefault(),e(P())},u=r=>{r.preventDefault(),e(H())},p=[{label:"Title",required:!0,name:"title",type:"text",placeHolder:"Title",show:!0},{label:"Youtube Link",required:!1,name:"youtube_url",type:"text",placeHolder:"Youtube Link",show:!0},{label:"Message",required:!1,name:"message",type:"textarea",placeHolder:"Message",show:!0},{label:"User",required:!0,name:"user_id",type:"select",options:t==null?void 0:t.user,isMulti:!1,isClearable:!1,placeHolder:"Select User",disabled:i==null?void 0:i.isEdit,show:!0},{label:"Status",required:!1,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:i==null?void 0:i.isEdit}],b=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:n,show:!(i!=null&&i.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:u,show:i==null?void 0:i.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:m,show:!0}];return s(d.exports.Fragment,{children:s(A,{open:c,toggleSidebar:m,title:i!=null&&i.isEdit?"Edit Label":"Add new Label",errors:g,data:i,onChange:r=>e(N(r)),onReset:()=>e(y({})),loading:a,fields:p,button:b})})},F=e=>{const a=h();return s("div",{className:"actions cursor-pointer",children:s("div",{onClick:()=>{a(x()),a(y({...e,isEdit:!0}))},children:s(M,{size:20})})})},Y=[{name:"Title",minWidth:"180px",selector:e=>e.title,cell:e=>s("span",{className:"text-capitalize",children:e.title})},{name:"Youtube Link",minWidth:"180px",selector:e=>e==null?void 0:e.youtube_url,cell:e=>{var a,c;return s(E,{to:e==null?void 0:e.youtube_url,target:"_blank",children:((a=e==null?void 0:e.youtube_url)==null?void 0:a.length)>20?((c=e==null?void 0:e.youtube_url)==null?void 0:c.slice(0,20))+"...":e==null?void 0:e.youtube_url})}},{name:"Message",minWidth:"400px",selector:e=>e==null?void 0:e.message,cell:e=>{var a,c;return s("span",{children:((a=e==null?void 0:e.message)==null?void 0:a.length)>70?((c=e==null?void 0:e.message)==null?void 0:c.slice(0,70))+"...":e==null?void 0:e.message})}},{name:"User",minWidth:"120px",selector:e=>{var a;return(a=e==null?void 0:e.user)==null?void 0:a.name},cell:e=>{var a;return s("span",{children:(a=e==null?void 0:e.user)==null?void 0:a.name})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>s("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>F(e)}],z=()=>{var b,r;const e=h(),{data:a,total:c,from:g,to:i,params:t,loading:m,options:n}=f(l=>l.labels),u=l=>{e(_(l))},p=()=>{e(x())};return s(d.exports.Fragment,{children:s(S,{className:"app-user-list",children:s(q,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:Y,className:"react-dataTable",paginationComponent:()=>T(g,i,c,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,u),data:a,progressPending:m,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:s(W,{toggleSidebar:p,setParams:u,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"Label",searchPlaceHolder:"Search by Title/User Name",customComponent:v(k,{children:[s(o,{sm:"4"}),s(o,{sm:"4",children:s(C,{className:"react-select",classNamePrefix:"select",options:n==null?void 0:n.user,isClearable:!0,value:(b=n==null?void 0:n.user)==null?void 0:b.find(l=>(l==null?void 0:l.value)==(t==null?void 0:t.user)),onChange:l=>u({user:l==null?void 0:l.value,page:1}),placeholder:"Select User"})}),s(o,{sm:"4",children:s(C,{className:"react-select",classNamePrefix:"select",options:n==null?void 0:n.status,isClearable:!0,value:(r=n==null?void 0:n.status)==null?void 0:r.find(l=>(l==null?void 0:l.value)==(t==null?void 0:t.status)),onChange:l=>u({status:l==null?void 0:l.value,page:1}),placeholder:"Select Status"})})]})})})})})},G=()=>{const e=h(),{params:a}=f(c=>c.labels);return d.exports.useEffect(()=>{e(U())},[a]),d.exports.useEffect(()=>{e(L())},[]),v(d.exports.Fragment,{children:[s(S,{className:"app-user-list",children:s(z,{})}),s(j,{})]})};export{G as default};
