import{p as M,a as Y,l as j,M as S,e as L,i as Q,f as _,h as V,j as o,k as e,$ as J,a0 as k,d as t,m as A,u,x as R,L as $,a2 as p,y as G,s as D,w as m,A as H,O as C,b as K,_ as Z,G as z,a1 as X,a4 as tt}from"./index-DeFD_e2S.js";import{F as et}from"./FieldsQueryParam-3Dv4rQxh.js";var at=_("<button> </button>"),st=_("<div><!></div>"),ot=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>otpId</span></div></td><td><span class="label">String</span></td><td>The id of the OTP request.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The one-time password.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function dt(F,g){M(g,!1);let i=Y(g,"collection",8),s=A(200),n=A([]);j(()=>S(i()),()=>{D(n,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:C.dummyCollectionRecord(i())},null,2)},{code:400,body:`
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
            `}])}),L(),Q();var h=ot(),f=V(h),O=o(e(f),2),I=e(O),P=o(e(I)),B=e(P),x=o(f,8),q=o(e(x)),v=e(q),d=o(e(v),2),r=o(e(d));J(r,{content:"?expand=relField1,relField2.subRelField"});var a=o(r,6);a.textContent='"expand": {"relField1": {...}, ...}';var l=o(v);et(l,{prefix:"record."});var b=o(x,4),c=e(b);k(c,5,()=>t(n),w=>w.code,(w,y)=>{var T=at();let U;var N=e(T);u(E=>{U=R(T,1,"tab-item",null,U,E),$(N,(t(y),p(()=>t(y).code)))},[()=>({active:t(s)===t(y).code})]),G("click",T,()=>D(s,t(y).code)),m(w,T)});var W=o(c,2);k(W,5,()=>t(n),w=>w.code,(w,y)=>{var T=st();let U;var N=e(T);J(N,{get content(){return t(y),p(()=>t(y).body)}}),u(E=>U=R(T,1,"tab-item",null,U,E),[()=>({active:t(s)===t(y).code})]),m(w,T)}),u(()=>$(B,(S(i()),p(()=>i().name)))),m(F,h),H()}var rt=_("<button> </button>"),it=_("<div><!></div>"),lt=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the OTP request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ct(F,g){M(g,!1);let i=Y(g,"collection",8),s=A(200),n=A([]);j(()=>C,()=>{D(n,[{code:200,body:JSON.stringify({otpId:C.randomString(15)},null,2)},{code:400,body:`
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
            `}])}),L(),Q();var h=lt(),f=V(h),O=o(e(f),2),I=e(O),P=o(e(I)),B=e(P),x=o(f,8),q=e(x);k(q,5,()=>t(n),d=>d.code,(d,r)=>{var a=rt();let l;var b=e(a);u(c=>{l=R(a,1,"tab-item",null,l,c),$(b,(t(r),p(()=>t(r).code)))},[()=>({active:t(s)===t(r).code})]),G("click",a,()=>D(s,t(r).code)),m(d,a)});var v=o(q,2);k(v,5,()=>t(n),d=>d.code,(d,r)=>{var a=it();let l;var b=e(a);J(b,{get content(){return t(r),p(()=>t(r).body)}}),u(c=>l=R(a,1,"tab-item",null,l,c),[()=>({active:t(s)===t(r).code})]),m(d,a)}),u(()=>$(B,(S(i()),p(()=>i().name)))),m(F,h),H()}var nt=_('<button><div class="txt"> </div></button>'),vt=_("<div><!></div>"),pt=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with an one-time password (OTP).</p> <p>Note that when requesting an OTP we return an <code>otpId</code> even if a user with the provided email
        doesn't exist as a very basic enumeration protection.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ut(F,g){M(g,!1);const i=A();let s=Y(g,"collection",8);const n=[{title:"OTP Request",component:ct},{title:"OTP Auth",component:dt}];let h=A(0);j(()=>K,()=>{D(i,C.getApiExampleUrl(K.baseURL))}),L(),Q();var f=pt(),O=V(f),I=e(O),P=o(O,4);{let v=z(()=>(t(i),S(s()),p(()=>`
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
    `))),d=z(()=>(t(i),S(s()),p(()=>`
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
    `)));Z(P,{get js(){return t(v)},get dart(){return t(d)}})}var B=o(P,4),x=e(B);k(x,5,()=>n,X,(v,d,r)=>{var a=nt();let l;var b=e(a),c=e(b);u(W=>{l=R(a,1,"tab-item",null,l,W),$(c,(t(d),p(()=>t(d).title)))},[()=>({active:t(h)==r})]),G("click",a,()=>D(h,r)),m(v,a)});var q=o(x,2);k(q,5,()=>n,X,(v,d,r)=>{var a=vt();let l;var b=e(a);tt(b,()=>t(d).component,(c,W)=>{W(c,{get collection(){return s()}})}),u(c=>l=R(a,1,"tab-item",null,l,c),[()=>({active:t(h)==r})]),m(v,a)}),u(()=>$(I,`Auth with OTP (${S(s()),p(()=>s().name)??""})`)),m(F,f),H()}export{ut as default};
