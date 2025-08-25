import{p as M,a as Y,l as j,M as S,e as L,i as Q,f as _,h as V,j as d,k as a,$ as J,a0 as k,d as t,m as A,u,x as R,L as $,a2 as p,y as G,s as D,w as m,A as H,O as C,b as K,_ as Z,G as z,a1 as X,a4 as tt}from"./index-C9Y1y-Co.js";import{F as et}from"./FieldsQueryParam-yjG8U_VT.js";var at=_("<button> </button>"),st=_("<div><!></div>"),ot=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>otpId</span></div></td><td><span class="label">String</span></td><td>The id of the OTP request.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The one-time password.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function dt(F,g){M(g,!1);let i=Y(g,"collection",8),o=A(200),n=A([]);j(()=>S(i()),()=>{D(n,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:C.dummyCollectionRecord(i())},null,2)},{code:400,body:`
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
            `}])}),L(),Q();var h=ot(),f=V(h),O=d(a(f),2),I=a(O),P=d(a(I)),B=a(P),x=d(f,8),q=d(a(x)),v=a(q),r=d(a(v),2),s=d(a(r));J(s,{content:"?expand=relField1,relField2.subRelField"});var e=d(s,6);e.textContent='"expand": {"relField1": {...}, ...}';var l=d(v);et(l,{prefix:"record."});var b=d(x,4),c=a(b);k(c,5,()=>t(n),w=>w.code,(w,y)=>{var T=at();let U;var N=a(T);u(E=>{U=R(T,1,"tab-item",null,U,E),$(N,(t(y),p(()=>t(y).code)))},[()=>({active:t(o)===t(y).code})]),G("click",T,()=>D(o,t(y).code)),m(w,T)});var W=d(c,2);k(W,5,()=>t(n),w=>w.code,(w,y)=>{var T=st();let U;var N=a(T);J(N,{get content(){return t(y),p(()=>t(y).body)}}),u(E=>U=R(T,1,"tab-item",null,U,E),[()=>({active:t(o)===t(y).code})]),m(w,T)}),u(()=>$(B,(S(i()),p(()=>i().name)))),m(F,h),H()}var rt=_("<button> </button>"),it=_("<div><!></div>"),lt=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-otp</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the OTP request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ct(F,g){M(g,!1);let i=Y(g,"collection",8),o=A(200),n=A([]);j(()=>C,()=>{D(n,[{code:200,body:JSON.stringify({otpId:C.randomString(15)},null,2)},{code:400,body:`
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
            `}])}),L(),Q();var h=lt(),f=V(h),O=d(a(f),2),I=a(O),P=d(a(I)),B=a(P),x=d(f,8),q=a(x);k(q,5,()=>t(n),r=>r.code,(r,s)=>{var e=rt();let l;var b=a(e);u(c=>{l=R(e,1,"tab-item",null,l,c),$(b,(t(s),p(()=>t(s).code)))},[()=>({active:t(o)===t(s).code})]),G("click",e,()=>D(o,t(s).code)),m(r,e)});var v=d(q,2);k(v,5,()=>t(n),r=>r.code,(r,s)=>{var e=it();let l;var b=a(e);J(b,{get content(){return t(s),p(()=>t(s).body)}}),u(c=>l=R(e,1,"tab-item",null,l,c),[()=>({active:t(o)===t(s).code})]),m(r,e)}),u(()=>$(B,(S(i()),p(()=>i().name)))),m(F,h),H()}var nt=_('<button><div class="txt"> </div></button>'),vt=_("<div><!></div>"),pt=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with an one-time password (OTP).</p> <p>Note that when requesting an OTP we return an <code>otpId</code> even if a user with the provided email
        doesn't exist as a very basic enumeration protection.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ut(F,g){M(g,!1);const i=A();let o=Y(g,"collection",8);const n=[{title:"OTP Request",component:ct},{title:"OTP Auth",component:dt}];let h=A(0);j(()=>K,()=>{D(i,C.getApiExampleUrl(K.baseURL))}),L(),Q();var f=pt(),O=V(f),I=a(O),P=d(O,4);{let v=z(()=>(t(i),S(o()),p(()=>{var s,e;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(i)}');

        ...

        // send OTP email to the provided auth record
        const req = await pb.collection('${(s=o())==null?void 0:s.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        const authData = await pb.collection('${(e=o())==null?void 0:e.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}))),r=z(()=>(t(i),S(o()),p(()=>{var s,e;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(i)}');

        ...

        // send OTP email to the provided auth record
        final req = await pb.collection('${(s=o())==null?void 0:s.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        final authData = await pb.collection('${(e=o())==null?void 0:e.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `})));Z(P,{get js(){return t(v)},get dart(){return t(r)}})}var B=d(P,4),x=a(B);k(x,5,()=>n,X,(v,r,s)=>{var e=nt();let l;var b=a(e),c=a(b);u(W=>{l=R(e,1,"tab-item",null,l,W),$(c,(t(r),p(()=>t(r).title)))},[()=>({active:t(h)==s})]),G("click",e,()=>D(h,s)),m(v,e)});var q=d(x,2);k(q,5,()=>n,X,(v,r,s)=>{var e=vt();let l;var b=a(e);tt(b,()=>t(r).component,(c,W)=>{W(c,{get collection(){return o()}})}),u(c=>l=R(e,1,"tab-item",null,l,c),[()=>({active:t(h)==s})]),m(v,e)}),u(()=>$(I,`Auth with OTP (${S(o()),p(()=>o().name)??""})`)),m(F,f),H()}export{ut as default};
