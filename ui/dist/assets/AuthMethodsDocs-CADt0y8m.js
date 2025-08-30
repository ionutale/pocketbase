import{p as W,a as X,s as c,m as v,b as m,l as U,d as t,e as Y,i as Z,f as A,h as tt,j as r,k as e,_ as at,G as j,a0 as C,u as k,w as x,A as et,a2 as i,M as b,O as st,x as D,L as p,y as ot,$ as lt}from"./index-QTvxZBYq.js";import{F as rt}from"./FieldsQueryParam-C_xtoSxI.js";var it=A("<button> </button>"),ct=A("<div><!></div>"),dt=A('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a public list with all allowed <strong> </strong> authentication methods.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-methods</p></div></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function bt(E,w){W(w,!1);const d=v();let s=X(w,"collection",8),u=v(200),_=v([]),f=v({}),h=v(!1);F();async function F(){c(h,!0);try{c(f,await m.collection(s().name).listAuthMethods())}catch(o){m.error(o)}c(h,!1)}U(()=>m,()=>{c(d,st.getApiExampleUrl(m.baseURL))}),U(()=>(t(h),t(f)),()=>{c(_,[{code:200,body:t(h)?"...":JSON.stringify(t(f),null,2)},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `}])}),Y(),Z();var M=dt(),P=tt(M),G=e(P),$=r(P,2),O=e($),Q=r(e(O)),S=e(Q),B=r($,2);{let o=j(()=>(t(d),b(s()),i(()=>{var a;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(d)}');

        ...

        const result = await pb.collection('${(a=s())==null?void 0:a.name}').listAuthMethods();
    `}))),l=j(()=>(t(d),b(s()),i(()=>{var a;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(d)}');

        ...

        final result = await pb.collection('${(a=s())==null?void 0:a.name}').listAuthMethods();
    `})));at(B,{get js(){return t(o)},get dart(){return t(l)}})}var L=r(B,4),q=r(e(L),2),H=e(q),I=r(e(H)),J=e(I),T=r(L,4),N=r(e(T)),z=e(N);rt(z,{});var K=r(T,4),R=e(K);C(R,5,()=>t(_),o=>o.code,(o,l)=>{var a=it();let n;var g=e(a);k(y=>{n=D(a,1,"tab-item",null,n,y),p(g,(t(l),i(()=>t(l).code)))},[()=>({active:t(u)===t(l).code})]),ot("click",a,()=>c(u,t(l).code)),x(o,a)});var V=r(R,2);C(V,5,()=>t(_),o=>o.code,(o,l)=>{var a=ct();let n;var g=e(a);lt(g,{get content(){return t(l),i(()=>t(l).body)}}),k(y=>n=D(a,1,"tab-item",null,n,y),[()=>({active:t(u)===t(l).code})]),x(o,a)}),k(()=>{p(G,`List auth methods (${b(s()),i(()=>s().name)??""})`),p(S,(b(s()),i(()=>s().name))),p(J,(b(s()),i(()=>s().name)))}),x(E,M),et()}export{bt as default};
