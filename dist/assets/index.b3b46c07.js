import{a as f,j as s,r as d,bQ as N,bR as y,bS as x,bT as P,bU as H,L as _,f as C,P as v,X as E,Y as o,bV as U,bW as k,bX as L}from"./index.250f6712.js";import{a as h}from"./App.45edc6e9.js";/* empty css                                  */import{C as T}from"./CustomSidebar.65ebdec6.js";import{Q as W,C as q,a as A,S}from"./CustomHeader.0600e50d.js";import{E as M}from"./edit.da3a79ef.js";const F=()=>{const e=h(),{loading:i,sidebarOpen:n,errors:p,uploadData:l,options:t}=f(r=>r.labels),m=()=>{e(x())},c=r=>{r.preventDefault(),e(P())},u=r=>{r.preventDefault(),e(H())},g=[{label:"Title",required:!0,name:"title",type:"text",placeHolder:"Title",show:!0},{label:"Youtube Link",required:!1,name:"youtube_url",type:"text",placeHolder:"Youtube Link",show:!0},{label:"Message",required:!1,name:"message",type:"textarea",placeHolder:"Message",show:!0},{label:"User",required:!0,name:"user_id",type:"select",options:t==null?void 0:t.user,isMulti:!1,isClearable:!1,placeHolder:"Select User",disabled:l==null?void 0:l.isEdit,show:!0},{label:"Status",required:!1,name:"status",type:"select",options:t==null?void 0:t.status,isMulti:!1,isClearable:!1,placeHolder:"Status",show:l==null?void 0:l.isEdit}],b=[{name:"Save",type:"button",color:"primary",className:"me-1",onClick:c,show:!(l!=null&&l.isEdit)},{name:"Update",type:"button",color:"primary",className:"me-1",onClick:u,show:l==null?void 0:l.isEdit},{name:"Cancel",type:"button",color:"danger",className:"me-1",onClick:m,show:!0}];return s(d.exports.Fragment,{children:s(T,{open:n,toggleSidebar:m,title:l!=null&&l.isEdit?"Edit Label":"Add new Label",errors:p,data:l,onChange:r=>e(N(r)),onReset:()=>e(y({})),loading:i,fields:g,button:b})})},Y=e=>{const i=h();return s("div",{className:"actions cursor-pointer",children:s("div",{onClick:()=>{i(x()),i(y({...e,isEdit:!0}))},children:s(M,{size:20})})})},j=[{name:"ID",minWidth:"80px",selector:e=>e.id,cell:e=>s("span",{children:e.id})},{name:"Title",minWidth:"180px",selector:e=>e.title,cell:e=>s("span",{className:"text-capitalize",children:e.title})},{name:"Youtube Link",minWidth:"180px",selector:e=>e==null?void 0:e.youtube_url,cell:e=>{var i,n;return s(_,{to:e==null?void 0:e.youtube_url,target:"_blank",children:((i=e==null?void 0:e.youtube_url)==null?void 0:i.length)>20?((n=e==null?void 0:e.youtube_url)==null?void 0:n.slice(0,20))+"...":e==null?void 0:e.youtube_url})}},{name:"Message",minWidth:"400px",selector:e=>e==null?void 0:e.message,cell:e=>{var i,n;return s("span",{children:((i=e==null?void 0:e.message)==null?void 0:i.length)>70?((n=e==null?void 0:e.message)==null?void 0:n.slice(0,70))+"...":e==null?void 0:e.message})}},{name:"User",minWidth:"120px",selector:e=>e==null?void 0:e.user,cell:e=>{var i,n;return C("span",{children:[(i=e==null?void 0:e.user)==null?void 0:i.first_name," ",(n=e==null?void 0:e.user)==null?void 0:n.last_name]})}},{name:"Status",minWidth:"120px",selector:e=>e.current_status,cell:e=>s("span",{className:"text-capitalize",children:e.current_status})},{name:"Action",minWidth:"120px",selector:e=>e==null?void 0:e.id,cell:e=>Y(e)}],z=()=>{var b,r;const e=h(),{data:i,total:n,from:p,to:l,params:t,loading:m,options:c}=f(a=>a.labels),u=a=>{e(U(a))},g=()=>{e(x())};return s(d.exports.Fragment,{children:s(v,{className:"app-user-list",children:s(W,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:j,className:"react-dataTable",paginationComponent:()=>q(p,l,n,t==null?void 0:t.page,t==null?void 0:t.rowsPerPage,u),data:i,progressPending:m,highlightOnHover:!0,persistTableHead:!0,subHeaderComponent:s(A,{toggleSidebar:g,setParams:u,rowsPerPage:t==null?void 0:t.rowsPerPage,q:t==null?void 0:t.q,item:"Label",searchPlaceHolder:"Search by Title/User Name",customComponent:C(E,{children:[s(o,{sm:"4"}),s(o,{sm:"4",children:s(S,{className:"react-select",classNamePrefix:"select",options:c==null?void 0:c.user,isClearable:!0,value:(b=c==null?void 0:c.user)==null?void 0:b.find(a=>(a==null?void 0:a.value)==(t==null?void 0:t.user)),onChange:a=>u({user:a==null?void 0:a.value,page:1}),placeholder:"Select User"})}),s(o,{sm:"4",children:s(S,{className:"react-select",classNamePrefix:"select",options:c==null?void 0:c.status,isClearable:!0,value:(r=c==null?void 0:c.status)==null?void 0:r.find(a=>(a==null?void 0:a.value)==(t==null?void 0:t.status)),onChange:a=>u({status:a==null?void 0:a.value,page:1}),placeholder:"Select Status"})})]})})})})})},V=()=>{const e=h(),{params:i}=f(n=>n.labels);return d.exports.useEffect(()=>{e(k())},[i]),d.exports.useEffect(()=>{e(L())},[]),C(d.exports.Fragment,{children:[s(v,{className:"app-user-list",children:s(z,{})}),s(F,{})]})};export{V as default};
