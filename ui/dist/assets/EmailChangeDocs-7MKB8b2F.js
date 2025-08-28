import{p as U,a as L,l as W,e as z,i as G,f as h,h as H,j as n,k as a,a0 as T,d as e,m as A,u as p,x as P,L as x,a2 as v,y as I,s as C,w as u,$ as J,A as K,M as E,b as j,_ as Q,G as Y,a1 as F,O as V,a4 as X}from"./index-DQ9K3nHd.js";var Z=h("<button> </button>"),ee=h("<div><!></div>"),ae=h('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-email-change</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the change email request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The account password to confirm the email change.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function te(R,g){U(g,!1);let d=L(g,"collection",8),t=A(204),m=A([]);W(()=>{},()=>{C(m,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),z(),G();var b=ae(),_=H(b),w=n(a(_),2),$=a(w),k=n(a($)),O=a(k),S=n(_,8),y=a(S);T(y,5,()=>e(m),l=>l.code,(l,s)=>{var i=Z();let o;var c=a(i);p(r=>{o=P(i,1,"tab-item",null,o,r),x(c,(e(s),v(()=>e(s).code)))},[()=>({active:e(t)===e(s).code})]),I("click",i,()=>C(t,e(s).code)),u(l,i)});var q=n(y,2);T(q,5,()=>e(m),l=>l.code,(l,s)=>{var i=ee();let o;var c=a(i);J(c,{get content(){return e(s),v(()=>e(s).body)}}),p(r=>o=P(i,1,"tab-item",null,o,r),[()=>({active:e(t)===e(s).code})]),u(l,i)}),p(()=>x(O,(E(d()),v(()=>d().name)))),u(R,b),K()}var se=h("<button> </button>"),ie=h("<div><!></div>"),le=h('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-email-change</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code></p></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>newEmail</span></div></td><td><span class="label">String</span></td><td>The new email address to send the change email request.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe(R,g){U(g,!1);let d=L(g,"collection",8),t=A(204),m=A([]);W(()=>{},()=>{C(m,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),z(),G();var b=le(),_=H(b),w=n(a(_),2),$=a(w),k=n(a($)),O=a(k),S=n(_,8),y=a(S);T(y,5,()=>e(m),l=>l.code,(l,s)=>{var i=se();let o;var c=a(i);p(r=>{o=P(i,1,"tab-item",null,o,r),x(c,(e(s),v(()=>e(s).code)))},[()=>({active:e(t)===e(s).code})]),I("click",i,()=>C(t,e(s).code)),u(l,i)});var q=n(y,2);T(q,5,()=>e(m),l=>l.code,(l,s)=>{var i=ie();let o;var c=a(i);J(c,{get content(){return e(s),v(()=>e(s).body)}}),p(r=>o=P(i,1,"tab-item",null,o,r),[()=>({active:e(t)===e(s).code})]),u(l,i)}),p(()=>x(O,(E(d()),v(()=>d().name)))),u(R,b),K()}var ce=h('<button><div class="txt"> </div></button>'),ne=h("<div><!></div>"),re=h(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> email change request.</p> <p>On successful email change all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve(R,g){U(g,!1);const d=A();let t=L(g,"collection",8);const m=[{title:"Request email change",component:oe},{title:"Confirm email change",component:te}];let b=A(0);W(()=>j,()=>{C(d,V.getApiExampleUrl(j.baseURL))}),z(),G();var _=re(),w=H(_),$=a(w),k=n(w,2),O=a(k),S=n(a(O)),y=a(S),q=n(k,2);{let o=Y(()=>(e(d),E(t()),v(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(d)}');

        ...

        await pb.collection('${t()?.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${t()?.name}').requestEmailChange('new@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${t()?.name}').confirmEmailChange(
            'EMAIL_CHANGE_TOKEN',
            'YOUR_PASSWORD',
        );
    `))),c=Y(()=>(e(d),E(t()),v(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(d)}');

        ...

        await pb.collection('${t()?.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${t()?.name}').requestEmailChange('new@example.com');

        ...

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${t()?.name}').confirmEmailChange(
          'EMAIL_CHANGE_TOKEN',
          'YOUR_PASSWORD',
        );
    `)));Q(q,{get js(){return e(o)},get dart(){return e(c)}})}var l=n(q,4),s=a(l);T(s,5,()=>m,F,(o,c,r)=>{var f=ce();let D;var M=a(f),B=a(M);p(N=>{D=P(f,1,"tab-item",null,D,N),x(B,(e(c),v(()=>e(c).title)))},[()=>({active:e(b)==r})]),I("click",f,()=>C(b,r)),u(o,f)});var i=n(s,2);T(i,5,()=>m,F,(o,c,r)=>{var f=ne();let D;var M=a(f);X(M,()=>e(c).component,(B,N)=>{N(B,{get collection(){return t()}})}),p(B=>D=P(f,1,"tab-item",null,D,B),[()=>({active:e(b)==r})]),u(o,f)}),p(()=>{x($,`Email change (${E(t()),v(()=>t().name)??""})`),x(y,(E(t()),v(()=>t().name)))}),u(R,_),K()}export{ve as default};
