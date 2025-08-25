import{p as U,a as L,l as W,e as z,i as G,f as _,h as H,j as d,k as a,a0 as A,d as e,m as P,u as h,x as C,L as w,a2 as b,y as I,s as R,w as g,$ as J,A as K,M as T,b as j,_ as Q,G as Y,a1 as F,O as V,a4 as X}from"./index-4eYEYVcK.js";var Z=_("<button> </button>"),ee=_("<div><!></div>"),ae=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-email-change</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the change email request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The account password to confirm the email change.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function te($,f){U(f,!1);let v=L(f,"collection",8),t=P(204),p=P([]);W(()=>{},()=>{R(p,[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])}),z(),G();var u=ae(),y=H(u),k=d(a(y),2),O=a(k),q=d(a(O)),S=a(q),D=d(y,8),x=a(D);A(x,5,()=>e(p),o=>o.code,(o,s)=>{var i=Z();let c;var n=a(i);h(l=>{c=C(i,1,"tab-item",null,c,l),w(n,(e(s),b(()=>e(s).code)))},[()=>({active:e(t)===e(s).code})]),I("click",i,()=>R(t,e(s).code)),g(o,i)});var E=d(x,2);A(E,5,()=>e(p),o=>o.code,(o,s)=>{var i=ee();let c;var n=a(i);J(n,{get content(){return e(s),b(()=>e(s).body)}}),h(l=>c=C(i,1,"tab-item",null,c,l),[()=>({active:e(t)===e(s).code})]),g(o,i)}),h(()=>w(S,(T(v()),b(()=>v().name)))),g($,u),K()}var se=_("<button> </button>"),ie=_("<div><!></div>"),le=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-email-change</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code></p></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>newEmail</span></div></td><td><span class="label">String</span></td><td>The new email address to send the change email request.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe($,f){U(f,!1);let v=L(f,"collection",8),t=P(204),p=P([]);W(()=>{},()=>{R(p,[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "newEmail": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:401,body:`
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
            `}])}),z(),G();var u=le(),y=H(u),k=d(a(y),2),O=a(k),q=d(a(O)),S=a(q),D=d(y,8),x=a(D);A(x,5,()=>e(p),o=>o.code,(o,s)=>{var i=se();let c;var n=a(i);h(l=>{c=C(i,1,"tab-item",null,c,l),w(n,(e(s),b(()=>e(s).code)))},[()=>({active:e(t)===e(s).code})]),I("click",i,()=>R(t,e(s).code)),g(o,i)});var E=d(x,2);A(E,5,()=>e(p),o=>o.code,(o,s)=>{var i=ie();let c;var n=a(i);J(n,{get content(){return e(s),b(()=>e(s).body)}}),h(l=>c=C(i,1,"tab-item",null,c,l),[()=>({active:e(t)===e(s).code})]),g(o,i)}),h(()=>w(S,(T(v()),b(()=>v().name)))),g($,u),K()}var ce=_('<button><div class="txt"> </div></button>'),ne=_("<div><!></div>"),re=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> email change request.</p> <p>On successful email change all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve($,f){U(f,!1);const v=P();let t=L(f,"collection",8);const p=[{title:"Request email change",component:oe},{title:"Confirm email change",component:te}];let u=P(0);W(()=>j,()=>{R(v,V.getApiExampleUrl(j.baseURL))}),z(),G();var y=re(),k=H(y),O=a(k),q=d(k,2),S=a(q),D=d(a(S)),x=a(D),E=d(q,2);{let c=Y(()=>(e(v),T(t()),b(()=>{var l,r,m;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(v)}');

        ...

        await pb.collection('${(l=t())==null?void 0:l.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(r=t())==null?void 0:r.name}').requestEmailChange('new@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(m=t())==null?void 0:m.name}').confirmEmailChange(
            'EMAIL_CHANGE_TOKEN',
            'YOUR_PASSWORD',
        );
    `}))),n=Y(()=>(e(v),T(t()),b(()=>{var l,r,m;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(v)}');

        ...

        await pb.collection('${(l=t())==null?void 0:l.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(r=t())==null?void 0:r.name}').requestEmailChange('new@example.com');

        ...

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(m=t())==null?void 0:m.name}').confirmEmailChange(
          'EMAIL_CHANGE_TOKEN',
          'YOUR_PASSWORD',
        );
    `})));Q(E,{get js(){return e(c)},get dart(){return e(n)}})}var o=d(E,4),s=a(o);A(s,5,()=>p,F,(c,n,l)=>{var r=ce();let m;var M=a(r),B=a(M);h(N=>{m=C(r,1,"tab-item",null,m,N),w(B,(e(n),b(()=>e(n).title)))},[()=>({active:e(u)==l})]),I("click",r,()=>R(u,l)),g(c,r)});var i=d(s,2);A(i,5,()=>p,F,(c,n,l)=>{var r=ne();let m;var M=a(r);X(M,()=>e(n).component,(B,N)=>{N(B,{get collection(){return t()}})}),h(B=>m=C(r,1,"tab-item",null,m,B),[()=>({active:e(u)==l})]),g(c,r)}),h(()=>{w(O,`Email change (${T(t()),b(()=>t().name)??""})`),w(x,(T(t()),b(()=>t().name)))}),g($,y),K()}export{ve as default};
