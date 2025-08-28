import{p as I,a as W,l as O,b as $,M as n,e as X,i as Y,f as y,h as Z,j as t,_ as ee,d as e,G as q,k as a,$ as B,a0 as C,m as v,u as m,w as f,A as te,a2 as l,s as g,O as D,x as E,L as _,y as ae}from"./index-DQ9K3nHd.js";import{F as se}from"./FieldsQueryParam-B_o_5Dh5.js";var oe=y("<button> </button>"),re=y("<div><!></div>"),de=y(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a new auth response (token and record data) for an <strong>already authenticated record</strong>.</p> <p>This method is usually called by users on page/screen reload to ensure that the previously stored data
        in <code>pb.authStore</code> is still valid and up-to-date.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-refresh</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code> header</p></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function ie(z,x){I(x,!1);const c=v();let s=W(x,"collection",8),h=v(200),p=v([]);O(()=>$,()=>{g(c,D.getApiExampleUrl($.baseURL))}),O(()=>n(s()),()=>{g(p,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:D.dummyCollectionRecord(s())},null,2)},{code:401,body:`
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
            `}])}),X(),Y();var k=de(),S=Z(k),N=a(S),w=t(S,4);{let r=q(()=>(e(c),n(s()),l(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(c)}');

        ...

        const authData = await pb.collection('${s()?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `))),o=q(()=>(e(c),n(s()),l(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(c)}');

        ...

        final authData = await pb.collection('${s()?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `)));ee(w,{get js(){return e(r)},get dart(){return e(o)}})}var T=t(w,4),U=t(a(T),2),j=a(U),J=t(a(j)),K=a(J),R=t(T,4),L=t(a(R)),A=a(L),M=t(a(A),2),P=t(a(M));B(P,{content:"?expand=relField1,relField2.subRelField"});var Q=t(P,6);Q.textContent='"expand": {"relField1": {...}, ...}';var V=t(A);se(V,{prefix:"record."});var G=t(R,4),F=a(G);C(F,5,()=>e(p),r=>r.code,(r,o)=>{var d=oe();let i;var u=a(d);m(b=>{i=E(d,1,"tab-item",null,i,b),_(u,(e(o),l(()=>e(o).code)))},[()=>({active:e(h)===e(o).code})]),ae("click",d,()=>g(h,e(o).code)),f(r,d)});var H=t(F,2);C(H,5,()=>e(p),r=>r.code,(r,o)=>{var d=re();let i;var u=a(d);B(u,{get content(){return e(o),l(()=>e(o).body)}}),m(b=>i=E(d,1,"tab-item",null,i,b),[()=>({active:e(h)===e(o).code})]),f(r,d)}),m(()=>{_(N,`Auth refresh (${n(s()),l(()=>s().name)??""})`),_(K,(n(s()),l(()=>s().name)))}),f(z,k),te()}export{ie as default};
