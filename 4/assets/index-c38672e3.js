import{u as m,v as d,l as p,B as l,r as u,I as h,j as s,P as _,a as g,M as x,H as j,C as f,W as v}from"./index-85ee92c0.js";function N(e){const n=m();function i(t){t.preventDefault();const a=d(e),r=()=>a.email&&l.error(a.email),o=()=>a.password&&l.error(a.password);Object.keys(a).every(c=>!a[c])?n(p(e)):(r(),o())}return{handleSubmit:i}}const w=()=>{const[e,n]=u.useState(h),i=g({state:e,setState:n}),{handleSubmit:t}=N(e);return s.jsxs("form",{className:"login__form form",action:"#",method:"post",onSubmit:t,children:[s.jsxs("div",{className:"login__input-wrapper form__input-wrapper",children:[s.jsx("label",{className:"visually-hidden",children:"E-mail"}),s.jsx("input",{className:"login__input form__input",type:"email",name:"email",placeholder:"Email",onChange:i,value:e.email,required:!0})]}),s.jsxs("div",{className:"login__input-wrapper form__input-wrapper",children:[s.jsx("label",{className:"visually-hidden",children:"Password"}),s.jsx("input",{className:"login__input form__input",type:"password",name:"password",placeholder:"Password",onChange:i,value:e.password,required:!0,minLength:_})]}),s.jsx("button",{className:"login__submit form__submit button",type:"submit",children:"Sign in"})]})},b=()=>s.jsxs(x,{header:s.jsx(j,{withNav:!1}),className:f.Login,children:[s.jsx(v,{children:s.jsx("title",{children:"Login six cities service for travelers - official website"})}),s.jsx("main",{className:"page__main page__main--login",children:s.jsxs("div",{className:"page__login-container container",children:[s.jsxs("section",{className:"login",children:[s.jsx("h1",{className:"login__title",children:"Sign in"}),s.jsx(w,{})]}),s.jsx("section",{className:"locations locations--login locations--current",children:s.jsx("div",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link",href:"#",children:s.jsx("span",{children:"Amsterdam"})})})})]})})]}),y=b;export{y as default};
