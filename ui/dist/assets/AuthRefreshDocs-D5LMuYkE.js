import{p as I,a as W,l as O,b as $,M as n,e as X,i as Y,f as y,h as Z,j as a,_ as ee,d as e,G as q,k as s,$ as B,a0 as C,m as v,u as m,w as f,A as te,a2 as l,s as g,O as D,x as E,L as _,y as ae}from"./index-QTvxZBYq.js";import{F as se}from"./FieldsQueryParam-C_xtoSxI.js";var oe=y("<button> </button>"),re=y("<div><!></div>"),de=y(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Returns a new auth response (token and record data) for an <strong>already authenticated record</strong>.</p> <p>This method is usually called by users on page/screen reload to ensure that the previously stored data
        in <code>pb.authStore</code> is still valid and up-to-date.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-refresh</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code> header</p></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function ie(z,x){I(x,!1);const c=v();let o=W(x,"collection",8),h=v(200),p=v([]);O(()=>$,()=>{g(c,D.getApiExampleUrl($.baseURL))}),O(()=>n(o()),()=>{g(p,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:D.dummyCollectionRecord(o())},null,2)},{code:401,body:`
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
            `}])}),X(),Y();var k=de(),S=Z(k),N=s(S),w=a(S,4);{let d=q(()=>(e(c),n(o()),l(()=>{var t;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(c)}');

        ...

        const authData = await pb.collection('${(t=o())==null?void 0:t.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `}))),r=q(()=>(e(c),n(o()),l(()=>{var t;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(c)}');

        ...

        final authData = await pb.collection('${(t=o())==null?void 0:t.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `})));ee(w,{get js(){return e(d)},get dart(){return e(r)}})}var T=a(w,4),U=a(s(T),2),j=s(U),J=a(s(j)),K=s(J),R=a(T,4),L=a(s(R)),A=s(L),M=a(s(A),2),P=a(s(M));B(P,{content:"?expand=relField1,relField2.subRelField"});var Q=a(P,6);Q.textContent='"expand": {"relField1": {...}, ...}';var V=a(A);se(V,{prefix:"record."});var G=a(R,4),F=s(G);C(F,5,()=>e(p),d=>d.code,(d,r)=>{var t=oe();let i;var u=s(t);m(b=>{i=E(t,1,"tab-item",null,i,b),_(u,(e(r),l(()=>e(r).code)))},[()=>({active:e(h)===e(r).code})]),ae("click",t,()=>g(h,e(r).code)),f(d,t)});var H=a(F,2);C(H,5,()=>e(p),d=>d.code,(d,r)=>{var t=re();let i;var u=s(t);B(u,{get content(){return e(r),l(()=>e(r).body)}}),m(b=>i=E(t,1,"tab-item",null,i,b),[()=>({active:e(h)===e(r).code})]),f(d,t)}),m(()=>{_(N,`Auth refresh (${n(o()),l(()=>o().name)??""})`),_(K,(n(o()),l(()=>o().name)))}),f(z,k),te()}export{ie as default};
