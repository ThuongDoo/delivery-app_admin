import{s as j,B as h,r as l,j as t,P as v,a as _,u as b,b as B,c as E,d as H,e as I,A as y,f as k}from"./sanity-013e480b.js";function C(e){const{actionHandlers:n,index:o,menuItems:s,menuItemGroups:r,title:i}=e,{features:a}=b();return!(s!=null&&s.length)&&!i?null:t.jsx(B,{actions:t.jsx(E,{menuItems:s,menuItemGroups:r,actionHandlers:n}),backButton:a.backButton&&o>0&&t.jsx(H,{as:I,"data-as":"a",icon:y,mode:"bleed"}),title:i})}var d=Object.freeze,w=Object.defineProperty,A=(e,n)=>d(w(e,"raw",{value:d(n||e.slice())})),u;const R=j(h)(u||(u=A([`
  position: relative;
`])));function U(e){const{children:n}=e,{collapsed:o}=k();return t.jsx(R,{hidden:o,height:"fill",overflow:"auto",children:n})}function G(e){const{index:n,pane:o,paneKey:s,...r}=e,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:g,...x}=o,[c,P]=l.useState(null);return t.jsxs(v,{id:s,minWidth:320,selected:r.isSelected,children:[t.jsx(C,{actionHandlers:c==null?void 0:c.actionHandlers,index:n,menuItems:m,menuItemGroups:p,title:f}),t.jsxs(U,{children:[_.isValidElementType(a)&&l.createElement(a,{...r,...x,ref:P,child:i,paneKey:s}),l.isValidElement(a)&&a]})]})}export{G as default};
