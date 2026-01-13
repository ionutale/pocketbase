import{p as H,a as I,l as F,b as O,M as n,e as W,i as X,f as _,h as Y,j as t,_ as Z,d as e,E as $,k as a,$ as q,a0 as E,m as b,u as v,w as m,z as ee,a2 as l,s as f,O as z,G as B,L as g,x as te}from"./index-D0ntNp7m.js";import{F as ae}from"./FieldsQueryParam-BbNpyD7J.js";var se=_("<button> </button>"),oe=_("<div><!></div>"),re=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a new auth response (token and record data) for an <strong>already authenticated record</strong>.</p> <p>This method is usually called by users on page/screen reload to ensure that the previously stored data
        in <code>pb.authStore</code> is still valid and up-to-date.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-refresh</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code> header</p></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function ce(C,x){H(x,!1);const c=b();let s=I(x,"collection",8),h=b(200),p=b([]);F(()=>O,()=>{f(c,z.getApiExampleUrl(O.baseURL))}),F(()=>n(s()),()=>{f(p,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:z.dummyCollectionRecord(s())},null,2)},{code:401,body:`
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `}])}),W(),X();var y=re(),k=Y(y),D=a(k),S=t(k,4);{let r=$(()=>(e(c),n(s()),l(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(c)}');

        ...

        const authData = await pb.collection('${s()?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `))),o=$(()=>(e(c),n(s()),l(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(c)}');

        ...

        final authData = await pb.collection('${s()?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `)));Z(S,{get js(){return e(r)},get dart(){return e(o)}})}var w=t(S,4),N=t(a(w),2),U=a(N),j=t(a(U)),J=a(j),T=t(w,4),K=t(a(T)),R=a(K),L=t(a(R),2),A=t(a(L));q(A,{content:"?expand=relField1,relField2.subRelField"});var M=t(A,6);M.textContent='"expand": {"relField1": {...}, ...}';var Q=t(R);ae(Q,{prefix:"record."});var V=t(T,4),P=a(V);E(P,5,()=>e(p),r=>r.code,(r,o)=>{var d=se();let i;var u=a(d);v(()=>{i=B(d,1,"tab-item",null,i,{active:e(h)===e(o).code}),g(u,(e(o),l(()=>e(o).code)))}),te("click",d,()=>f(h,e(o).code)),m(r,d)});var G=t(P,2);E(G,5,()=>e(p),r=>r.code,(r,o)=>{var d=oe();let i;var u=a(d);q(u,{get content(){return e(o),l(()=>e(o).body)}}),v(()=>i=B(d,1,"tab-item",null,i,{active:e(h)===e(o).code})),m(r,d)}),v(()=>{g(D,`Auth refresh (${n(s()),l(()=>s().name)??""})`),g(J,(n(s()),l(()=>s().name)))}),m(C,y),ee()}export{ce as default};
