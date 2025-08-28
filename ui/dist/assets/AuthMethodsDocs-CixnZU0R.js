import{p as W,a as X,s as c,m as v,b as m,l as U,d as t,e as Y,i as Z,f as A,h as tt,j as l,k as a,_ as at,G as j,a0 as C,u as k,w as x,A as et,a2 as i,M as b,O as st,x as D,L as p,y as ot,$ as lt}from"./index-DeFD_e2S.js";import{F as rt}from"./FieldsQueryParam-3Dv4rQxh.js";var it=A("<button> </button>"),ct=A("<div><!></div>"),dt=A('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a public list with all allowed <strong> </strong> authentication methods.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-methods</p></div></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function bt(E,w){W(w,!1);const d=v();let e=X(w,"collection",8),u=v(200),_=v([]),f=v({}),h=v(!1);F();async function F(){c(h,!0);try{c(f,await m.collection(e().name).listAuthMethods())}catch(s){m.error(s)}c(h,!1)}U(()=>m,()=>{c(d,st.getApiExampleUrl(m.baseURL))}),U(()=>(t(h),t(f)),()=>{c(_,[{code:200,body:t(h)?"...":JSON.stringify(t(f),null,2)},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `}])}),Y(),Z();var M=dt(),P=tt(M),G=a(P),$=l(P,2),O=a($),Q=l(a(O)),S=a(Q),B=l($,2);{let s=j(()=>(t(d),b(e()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(d)}');

        ...

        const result = await pb.collection('${e()?.name}').listAuthMethods();
    `))),o=j(()=>(t(d),b(e()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(d)}');

        ...

        final result = await pb.collection('${e()?.name}').listAuthMethods();
    `)));at(B,{get js(){return t(s)},get dart(){return t(o)}})}var L=l(B,4),q=l(a(L),2),H=a(q),I=l(a(H)),J=a(I),T=l(L,4),N=l(a(T)),z=a(N);rt(z,{});var K=l(T,4),R=a(K);C(R,5,()=>t(_),s=>s.code,(s,o)=>{var r=it();let n;var g=a(r);k(y=>{n=D(r,1,"tab-item",null,n,y),p(g,(t(o),i(()=>t(o).code)))},[()=>({active:t(u)===t(o).code})]),ot("click",r,()=>c(u,t(o).code)),x(s,r)});var V=l(R,2);C(V,5,()=>t(_),s=>s.code,(s,o)=>{var r=ct();let n;var g=a(r);lt(g,{get content(){return t(o),i(()=>t(o).body)}}),k(y=>n=D(r,1,"tab-item",null,n,y),[()=>({active:t(u)===t(o).code})]),x(s,r)}),k(()=>{p(G,`List auth methods (${b(e()),i(()=>e().name)??""})`),p(S,(b(e()),i(()=>e().name))),p(J,(b(e()),i(()=>e().name)))}),x(E,M),et()}export{bt as default};
