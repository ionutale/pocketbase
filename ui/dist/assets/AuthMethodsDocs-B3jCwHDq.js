import{p as V,a as W,s as c,m as v,b as m,l as E,d as t,e as X,i as Y,f as x,h as Z,j as l,k as a,_ as tt,E as R,a0 as U,u as y,w as k,z as at,a2 as i,M as b,O as et,G as j,L as p,x as st,$ as ot}from"./index-D0ntNp7m.js";import{F as lt}from"./FieldsQueryParam-BbNpyD7J.js";var rt=x("<button> </button>"),it=x("<div><!></div>"),ct=x('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a public list with all allowed <strong> </strong> authentication methods.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-methods</p></div></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function vt(C,w){V(w,!1);const d=v();let e=W(w,"collection",8),u=v(200),_=v([]),f=v({}),h=v(!1);D();async function D(){c(h,!0);try{c(f,await m.collection(e().name).listAuthMethods())}catch(s){m.error(s)}c(h,!1)}E(()=>m,()=>{c(d,et.getApiExampleUrl(m.baseURL))}),E(()=>(t(h),t(f)),()=>{c(_,[{code:200,body:t(h)?"...":JSON.stringify(t(f),null,2)},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `}])}),X(),Y();var A=ct(),M=Z(A),F=a(M),P=l(M,2),G=a(P),O=l(a(G)),Q=a(O),$=l(P,2);{let s=R(()=>(t(d),b(e()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(d)}');

        ...

        const result = await pb.collection('${e()?.name}').listAuthMethods();
    `))),o=R(()=>(t(d),b(e()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(d)}');

        ...

        final result = await pb.collection('${e()?.name}').listAuthMethods();
    `)));tt($,{get js(){return t(s)},get dart(){return t(o)}})}var B=l($,4),S=l(a(B),2),q=a(S),z=l(a(q)),H=a(z),L=l(B,4),I=l(a(L)),J=a(I);lt(J,{});var N=l(L,4),T=a(N);U(T,5,()=>t(_),s=>s.code,(s,o)=>{var r=rt();let n;var g=a(r);y(()=>{n=j(r,1,"tab-item",null,n,{active:t(u)===t(o).code}),p(g,(t(o),i(()=>t(o).code)))}),st("click",r,()=>c(u,t(o).code)),k(s,r)});var K=l(T,2);U(K,5,()=>t(_),s=>s.code,(s,o)=>{var r=it();let n;var g=a(r);ot(g,{get content(){return t(o),i(()=>t(o).body)}}),y(()=>n=j(r,1,"tab-item",null,n,{active:t(u)===t(o).code})),k(s,r)}),y(()=>{p(F,`List auth methods (${b(e()),i(()=>e().name)??""})`),p(Q,(b(e()),i(()=>e().name))),p(H,(b(e()),i(()=>e().name)))}),k(C,A),at()}export{vt as default};
