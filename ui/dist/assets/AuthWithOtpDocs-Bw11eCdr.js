import{p as J,a as M,l as Y,M as S,e as j,i as L,f as m,h as Q,j as o,k as e,$ as N,a0 as k,d as t,m as A,u as b,x as V,s as R,w as u,a2 as v,z,O as U,G as $,L as D,b as G,_ as X,E as H,a1 as K,a4 as Z}from"./index-Ci_bBm9A.js";import{F as tt}from"./FieldsQueryParam-DtLH1vAK.js";var et=m("<button> </button>"),at=m("<div><!></div>"),st=m('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>otpId</span></div></td><td><span class="label">String</span></td><td>The id of the OTP request.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The one-time password.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ot(F,_){J(_,!1);let i=M(_,"collection",8),s=A(200),c=A([]);Y(()=>S(i()),()=>{R(c,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:U.dummyCollectionRecord(i())},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "otpId": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])}),j(),L();var p=st(),g=Q(p),w=o(e(g),2),I=e(w),O=o(e(I)),B=e(O),T=o(g,8),P=o(e(T)),n=e(P),d=o(e(n),2),r=o(e(d));N(r,{content:"?expand=relField1,relField2.subRelField"});var a=o(r,6);a.textContent='"expand": {"relField1": {...}, ...}';var l=o(n);tt(l,{prefix:"record."});var h=o(T,4),q=e(h);k(q,5,()=>t(c),x=>x.code,(x,f)=>{var y=et();let W;var E=e(y);b(()=>{W=$(y,1,"tab-item",null,W,{active:t(s)===t(f).code}),D(E,(t(f),v(()=>t(f).code)))}),V("click",y,()=>R(s,t(f).code)),u(x,y)});var C=o(q,2);k(C,5,()=>t(c),x=>x.code,(x,f)=>{var y=at();let W;var E=e(y);N(E,{get content(){return t(f),v(()=>t(f).body)}}),b(()=>W=$(y,1,"tab-item",null,W,{active:t(s)===t(f).code})),u(x,y)}),b(()=>D(B,(S(i()),v(()=>i().name)))),u(F,p),z()}var dt=m("<button> </button>"),rt=m("<div><!></div>"),it=m('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the OTP request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function lt(F,_){J(_,!1);let i=M(_,"collection",8),s=A(200),c=A([]);Y(()=>U,()=>{R(c,[{code:200,body:JSON.stringify({otpId:U.randomString(15)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_is_email",
                      "message": "Must be a valid email address."
                    }
                  }
                }
            `},{code:429,body:`
                {
                  "status": 429,
                  "message": "You've send too many OTP requests, please try again later.",
                  "data": {}
                }
            `}])}),j(),L();var p=it(),g=Q(p),w=o(e(g),2),I=e(w),O=o(e(I)),B=e(O),T=o(g,8),P=e(T);k(P,5,()=>t(c),d=>d.code,(d,r)=>{var a=dt();let l;var h=e(a);b(()=>{l=$(a,1,"tab-item",null,l,{active:t(s)===t(r).code}),D(h,(t(r),v(()=>t(r).code)))}),V("click",a,()=>R(s,t(r).code)),u(d,a)});var n=o(P,2);k(n,5,()=>t(c),d=>d.code,(d,r)=>{var a=rt();let l;var h=e(a);N(h,{get content(){return t(r),v(()=>t(r).body)}}),b(()=>l=$(a,1,"tab-item",null,l,{active:t(s)===t(r).code})),u(d,a)}),b(()=>D(B,(S(i()),v(()=>i().name)))),u(F,p),z()}var ct=m('<button><div class="txt"> </div></button>'),nt=m("<div><!></div>"),vt=m(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with an one-time password (OTP).</p> <p>Note that when requesting an OTP we return an <code>otpId</code> even if a user with the provided email
        doesn't exist as a very basic enumeration protection.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function bt(F,_){J(_,!1);const i=A();let s=M(_,"collection",8);const c=[{title:"OTP Request",component:lt},{title:"OTP Auth",component:ot}];let p=A(0);Y(()=>G,()=>{R(i,U.getApiExampleUrl(G.baseURL))}),j(),L();var g=vt(),w=Q(g),I=e(w),O=o(w,4);{let n=H(()=>(t(i),S(s()),v(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(i)}');

        ...

        // send OTP email to the provided auth record
        const req = await pb.collection('${s()?.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        const authData = await pb.collection('${s()?.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `))),d=H(()=>(t(i),S(s()),v(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(i)}');

        ...

        // send OTP email to the provided auth record
        final req = await pb.collection('${s()?.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        final authData = await pb.collection('${s()?.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `)));X(O,{get js(){return t(n)},get dart(){return t(d)}})}var B=o(O,4),T=e(B);k(T,5,()=>c,K,(n,d,r)=>{var a=ct();let l;var h=e(a),q=e(h);b(()=>{l=$(a,1,"tab-item",null,l,{active:t(p)==r}),D(q,(t(d),v(()=>t(d).title)))}),V("click",a,()=>R(p,r)),u(n,a)});var P=o(T,2);k(P,5,()=>c,K,(n,d,r)=>{var a=nt();let l;var h=e(a);Z(h,()=>t(d).component,(q,C)=>{C(q,{get collection(){return s()}})}),b(()=>l=$(a,1,"tab-item",null,l,{active:t(p)==r})),u(n,a)}),b(()=>D(I,`Auth with OTP (${S(s()),v(()=>s().name)??""})`)),u(F,g),z()}export{bt as default};
