var L=Object.defineProperty;var f=(e,t)=>L(e,"name",{value:t,configurable:!0});import{_ as N,$ as U,a as M}from"./index.module.f3c30ab9.js";import{r as o}from"./index.b885043e.js";import{r as z}from"./index.9f9804f6.js";function D(e,t){const n=o.exports.createContext(t);function r(s){const{children:u,...d}=s,a=o.exports.useMemo(()=>d,Object.values(d));return o.exports.createElement(n.Provider,{value:a},u)}f(r,"Provider");function c(s){const u=o.exports.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return f(c,"useContext"),r.displayName=e+"Provider",[r,c]}f(D,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function B(e,t=[]){let n=[];function r(s,u){const d=o.exports.createContext(u),a=n.length;n=[...n,u];function i(l){const{scope:p,children:b,...x}=l,k=(p==null?void 0:p[e][a])||d,E=o.exports.useMemo(()=>x,Object.values(x));return o.exports.createElement(k.Provider,{value:E},b)}f(i,"Provider");function $(l,p){const b=(p==null?void 0:p[e][a])||d,x=o.exports.useContext(b);if(x)return x;if(u!==void 0)return u;throw new Error(`\`${l}\` must be used within \`${s}\``)}return f($,"useContext"),i.displayName=s+"Provider",[i,$]}f(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=f(()=>{const s=n.map(u=>o.exports.createContext(u));return f(function(d){const a=(d==null?void 0:d[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...d,[e]:a}}),[d,a])},"useScope")},"createScope");return c.scopeName=e,[r,q(c,...t)]}f(B,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function q(...e){const t=e[0];if(e.length===1)return t;const n=f(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return f(function(s){const u=r.reduce((d,{useScope:a,scopeName:i})=>{const l=a(s)[`__scope${i}`];return{...d,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}f(q,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return f(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}f(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function R(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}f(R,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function j({prop:e,defaultProp:t,onChange:n=f(()=>{},"onChange")}){const[r,c]=K({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:r,d=R(n),a=o.exports.useCallback(i=>{if(s){const l=typeof i=="function"?i(e):i;l!==e&&d(l)}else c(i)},[s,e,c,d]);return[u,a]}f(j,"$71cd76cc60e0454e$export$6f32135080cb4c3");function K({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=R(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}f(K,"$71cd76cc60e0454e$var$useUncontrolledState");function F(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}f(F,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const y=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function W(e){const[t,n]=o.exports.useState(void 0);return y(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let u,d;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;u=i.inlineSize,d=i.blockSize}else u=e.offsetWidth,d=e.offsetHeight;n({width:u,height:d})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}f(W,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const X=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],_=X.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...u}=r,d=s?U:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(d,N({},u,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),H="Label",[ue,G]=D(H,{id:void 0,controlRef:{current:null}}),J=f(e=>{const t=G("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function Q(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}f(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const w=f(e=>{const{present:t,children:n}=e,r=Y(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=M(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");w.displayName="Presence";function Y(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),u=e?"mounted":"unmounted",[d,a]=Q(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=C(r.current);s.current=d==="mounted"?i:"none"},[d]),y(()=>{const i=r.current,$=c.current;if($!==e){const p=s.current,b=C(i);e?a("MOUNT"):b==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a($&&p!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,a]),y(()=>{if(t){const i=f(l=>{const b=C(r.current).includes(l.animationName);l.target===t&&b&&z.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),$=f(l=>{l.target===t&&(s.current=C(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",$),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",$),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}f(Y,"$921a889cee6df7e8$var$usePresence");function C(e){return(e==null?void 0:e.animationName)||"none"}f(C,"$921a889cee6df7e8$var$getAnimationName");const O="Checkbox",[Z,de]=B(O),[V,ee]=Z(O),te=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:c,checked:s,defaultChecked:u,required:d,disabled:a,value:i="on",onCheckedChange:$,...l}=e,[p,b]=o.exports.useState(null),x=M(t,m=>b(m)),k=J(p),E=r||k,P=o.exports.useRef(!1),S=p?Boolean(p.closest("form")):!0,[v=!1,T]=j({prop:s,defaultProp:u,onChange:$});return o.exports.createElement(V,{scope:n,state:v,disabled:a},o.exports.createElement(_.button,N({type:"button",role:"checkbox","aria-checked":h(v)?"mixed":v,"aria-labelledby":E,"aria-required":d,"data-state":I(v),"data-disabled":a?"":void 0,disabled:a,value:i},l,{ref:x,onKeyDown:A(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:A(e.onClick,m=>{T(g=>h(g)?!0:!g),S&&(P.current=m.isPropagationStopped(),P.current||m.stopPropagation())})})),S&&o.exports.createElement(re,{control:p,bubbles:!P.current,name:c,value:i,checked:v,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),ne="CheckboxIndicator",oe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ee(ne,n);return o.exports.createElement(w,{present:r||h(s.state)||s.state===!0},o.exports.createElement(_.span,N({"data-state":I(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),re=f(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),u=F(n),d=W(t);return o.exports.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(u!==n&&l){const p=new Event("click",{bubbles:r});a.indeterminate=h(n),l.call(a,h(n)?!1:n),a.dispatchEvent(p)}},[u,n,r]),o.exports.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:h(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function h(e){return e==="indeterminate"}f(h,"$e698a72e93240346$var$isIndeterminate");function I(e){return h(e)?"indeterminate":e?"checked":"unchecked"}f(I,"$e698a72e93240346$var$getState");const fe=te,le=oe;export{fe as $,le as a,te as b};
//# sourceMappingURL=index.module.9929c894.js.map
