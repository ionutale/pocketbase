import{p as N,a as U,l as z,e as L,i as W,f as u,h as G,j as n,k as a,a0 as E,d as e,m as T,u as b,x as H,s as A,w as p,$ as F,a2 as d,z as I,G as P,L as y,M as q,b as K,_ as Q,E as j,a1 as Y,O as V,a4 as X}from"./index-BMgSTU82.js";var Z=u("<button> </button>"),ee=u("<div><!></div>"),ae=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-email-change</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the change email request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The account password to confirm the email change.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function te(C,h){N(h,!1);let r=U(h,"collection",8),t=T(204),v=T([]);z(()=>{},()=>{A(v,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),L(),W();var m=ae(),g=G(m),x=n(a(g),2),R=a(x),w=n(a(R)),$=a(w),O=n(g,8),f=a(O);E(f,5,()=>e(v),l=>l.code,(l,s)=>{var i=Z();let o;var c=a(i);b(()=>{o=P(i,1,"tab-item",null,o,{active:e(t)===e(s).code}),y(c,(e(s),d(()=>e(s).code)))}),H("click",i,()=>A(t,e(s).code)),p(l,i)});var k=n(f,2);E(k,5,()=>e(v),l=>l.code,(l,s)=>{var i=ee();let o;var c=a(i);F(c,{get content(){return e(s),d(()=>e(s).body)}}),b(()=>o=P(i,1,"tab-item",null,o,{active:e(t)===e(s).code})),p(l,i)}),b(()=>y($,(q(r()),d(()=>r().name)))),p(C,m),I()}var se=u("<button> </button>"),ie=u("<div><!></div>"),le=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-email-change</p></div> <p class="txt-hint txt-sm txt-right">Requires <code>Authorization:TOKEN</code></p></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>newEmail</span></div></td><td><span class="label">String</span></td><td>The new email address to send the change email request.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe(C,h){N(h,!1);let r=U(h,"collection",8),t=T(204),v=T([]);z(()=>{},()=>{A(v,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),L(),W();var m=le(),g=G(m),x=n(a(g),2),R=a(x),w=n(a(R)),$=a(w),O=n(g,8),f=a(O);E(f,5,()=>e(v),l=>l.code,(l,s)=>{var i=se();let o;var c=a(i);b(()=>{o=P(i,1,"tab-item",null,o,{active:e(t)===e(s).code}),y(c,(e(s),d(()=>e(s).code)))}),H("click",i,()=>A(t,e(s).code)),p(l,i)});var k=n(f,2);E(k,5,()=>e(v),l=>l.code,(l,s)=>{var i=ie();let o;var c=a(i);F(c,{get content(){return e(s),d(()=>e(s).body)}}),b(()=>o=P(i,1,"tab-item",null,o,{active:e(t)===e(s).code})),p(l,i)}),b(()=>y($,(q(r()),d(()=>r().name)))),p(C,m),I()}var ce=u('<button><div class="txt"> </div></button>'),ne=u("<div><!></div>"),re=u(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> email change request.</p> <p>On successful email change all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve(C,h){N(h,!1);const r=T();let t=U(h,"collection",8);const v=[{title:"Request email change",component:oe},{title:"Confirm email change",component:te}];let m=T(0);z(()=>K,()=>{A(r,V.getApiExampleUrl(K.baseURL))}),L(),W();var g=re(),x=G(g),R=a(x),w=n(x,2),$=a(w),O=n(a($)),f=a(O),k=n(w,2);{let o=j(()=>(e(r),q(t()),d(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(r)}');

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
    `))),c=j(()=>(e(r),q(t()),d(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(r)}');

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
    `)));Q(k,{get js(){return e(o)},get dart(){return e(c)}})}var l=n(k,4),s=a(l);E(s,5,()=>v,Y,(o,c,D)=>{var _=ce();let S;var B=a(_),M=a(B);b(()=>{S=P(_,1,"tab-item",null,S,{active:e(m)==D}),y(M,(e(c),d(()=>e(c).title)))}),H("click",_,()=>A(m,D)),p(o,_)});var i=n(s,2);E(i,5,()=>v,Y,(o,c,D)=>{var _=ne();let S;var B=a(_);X(B,()=>e(c).component,(M,J)=>{J(M,{get collection(){return t()}})}),b(()=>S=P(_,1,"tab-item",null,S,{active:e(m)==D})),p(o,_)}),b(()=>{y(R,`Email change (${q(t()),d(()=>t().name)??""})`),y(f,(q(t()),d(()=>t().name)))}),p(C,g),I()}export{ve as default};
