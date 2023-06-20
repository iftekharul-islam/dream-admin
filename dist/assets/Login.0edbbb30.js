import{k as C,r as g,j as e,f as a,X as w,L as n,Y as c,S as F,V as k,Z as G,$ as d,a0 as f,G as i,a1 as P}from"./index.bca351f0.js";import{u as E,a as j,M as D}from"./App.b816fb34.js";import{I as S,F as M,T as R,G as T}from"./index.47943872.js";/* empty css                            */const z="/assets/login-v2-dark.28044871.svg",I="/assets/login-v2.f073f8a2.svg",A=()=>{const{skin:u}=E(),N=j(),x=C(),v=u==="dark"?z:I,[m,y]=g.exports.useState(null),[t,b]=g.exports.useState(null),o=l=>{var s,r;y({...m,[(s=l==null?void 0:l.target)==null?void 0:s.name]:(r=l.target)==null?void 0:r.value})},L=async l=>{var r,h,p;l.preventDefault();const s=await N(P(m));(r=s==null?void 0:s.payload)!=null&&r.status?x("/home"):b((p=(h=s==null?void 0:s.payload)==null?void 0:h.data)==null?void 0:p.errors)};return e("div",{className:"auth-wrapper auth-cover",children:a(w,{className:"auth-inner m-0",children:[a(n,{className:"brand-logo",onClick:l=>l.preventDefault(),children:[a("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[a("defs",{children:[a("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[e("stop",{stopColor:"#000000",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),a("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[e("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),e("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:a("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[e("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),e("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),e("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),e("h2",{className:"brand-text text-primary ms-1",children:"Dream Records"})]}),e(c,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:v,alt:"Login Cover"})})}),e(c,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:a(c,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(F,{tag:"h2",className:"fw-bold mb-1",children:"Welcome to Dream Records! \u{1F44B}"}),e(k,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),a(G,{className:"auth-login-form mt-2",children:[a("div",{className:"mb-1",children:[e(d,{className:"form-label",for:"email",children:"Email"}),e(f,{type:"email",id:"email",name:"email",placeholder:"john@example.com",autoFocus:!0,onChange:o}),e("small",{className:"text-danger",children:t==null?void 0:t.email})]}),a("div",{className:"mb-1",children:[a("div",{className:"d-flex justify-content-between",children:[e(d,{className:"form-label",for:"login-password",children:"Password"}),e(n,{to:"/forgot-password",children:e("small",{children:"Forgot Password?"})})]}),e(S,{className:"input-group-merge",id:"login-password",name:"password",onChange:o}),e("small",{className:"text-danger",children:t==null?void 0:t.password})]}),a("div",{className:"form-check mb-1",children:[e(f,{type:"checkbox",id:"remember-me",name:"remember_me",onChange:o}),e(d,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),e(i,{color:"primary",name:"signin",onClick:L,children:"Sign in"})]}),a("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"New on our platform?"}),e(n,{to:"/register",children:e("span",{children:"Create an account"})})]}),e("div",{className:"divider my-2",children:e("div",{className:"divider-text",children:"or"})}),a("div",{className:"auth-footer-btn d-flex justify-content-center",children:[e(i,{color:"facebook",children:e(M,{size:14})}),e(i,{color:"twitter",children:e(R,{size:14})}),e(i,{color:"google",children:e(D,{size:14})}),e(i,{className:"me-0",color:"github",children:e(T,{size:14})})]})]})})]})})};export{A as default};
