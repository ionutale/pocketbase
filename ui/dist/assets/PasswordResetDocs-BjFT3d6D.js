import{p as B,a as M,l as I,e as U,i as j,f as u,h as F,j as d,k as t,a0 as k,d as e,m as S,u as b,x as K,s as q,w as m,$ as J,a2 as n,z as L,G as T,L as w,M as P,b as z,_ as V,E as G,a1 as H,O as X,a4 as Y}from"./index-D0ntNp7m.js";var Z=u("<button> </button>"),ee=u("<div><!></div>"),te=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the password reset request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The new password to set.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td><td><span class="label">String</span></td><td>The new password confirmation.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ae(A,_){B(_,!1);let c=M(_,"collection",8),s=S(204),v=S([]);I(()=>{},()=>{q(v,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),U(),j();var p=te(),h=F(p),y=d(t(h),2),E=t(y),R=d(t(E)),O=t(R),$=d(h,8),g=t($);k(g,5,()=>e(v),i=>i.code,(i,a)=>{var l=Z();let o;var r=t(l);b(()=>{o=T(l,1,"tab-item",null,o,{active:e(s)===e(a).code}),w(r,(e(a),n(()=>e(a).code)))}),K("click",l,()=>q(s,e(a).code)),m(i,l)});var x=d(g,2);k(x,5,()=>e(v),i=>i.code,(i,a)=>{var l=ee();let o;var r=t(l);J(r,{get content(){return e(a),n(()=>e(a).body)}}),b(()=>o=T(l,1,"tab-item",null,o,{active:e(s)===e(a).code})),m(i,l)}),b(()=>w(O,(P(c()),n(()=>c().name)))),m(A,p),L()}var se=u("<button> </button>"),le=u("<div><!></div>"),ie=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the password reset request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe(A,_){B(_,!1);let c=M(_,"collection",8),s=S(204),v=S([]);I(()=>{},()=>{q(v,[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])}),U(),j();var p=ie(),h=F(p),y=d(t(h),2),E=t(y),R=d(t(E)),O=t(R),$=d(h,8),g=t($);k(g,5,()=>e(v),i=>i.code,(i,a)=>{var l=se();let o;var r=t(l);b(()=>{o=T(l,1,"tab-item",null,o,{active:e(s)===e(a).code}),w(r,(e(a),n(()=>e(a).code)))}),K("click",l,()=>q(s,e(a).code)),m(i,l)});var x=d(g,2);k(x,5,()=>e(v),i=>i.code,(i,a)=>{var l=le();let o;var r=t(l);J(r,{get content(){return e(a),n(()=>e(a).body)}}),b(()=>o=T(l,1,"tab-item",null,o,{active:e(s)===e(a).code})),m(i,l)}),b(()=>w(O,(P(c()),n(()=>c().name)))),m(A,p),L()}var re=u('<button><div class="txt"> </div></button>'),de=u("<div><!></div>"),ce=u(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> password reset email request.</p> <p>On successful password reset all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve(A,_){B(_,!1);const c=S();let s=M(_,"collection",8);const v=[{title:"Request password reset",component:oe},{title:"Confirm password reset",component:ae}];let p=S(0);I(()=>z,()=>{q(c,X.getApiExampleUrl(z.baseURL))}),U(),j();var h=ce(),y=F(h),E=t(y),R=d(y,2),O=t(R),$=d(t(O)),g=t($),x=d(R,2);{let o=G(()=>(e(c),P(s()),n(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(c)}');

        ...

        await pb.collection('${s()?.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${s()?.name}').confirmPasswordReset(
            'RESET_TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `))),r=G(()=>(e(c),P(s()),n(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(c)}');

        ...

        await pb.collection('${s()?.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${s()?.name}').confirmPasswordReset(
          'RESET_TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `)));V(x,{get js(){return e(o)},get dart(){return e(r)}})}var i=d(x,4),a=t(i);k(a,5,()=>v,H,(o,r,N)=>{var f=re();let D;var W=t(f),C=t(W);b(()=>{D=T(f,1,"tab-item",null,D,{active:e(p)==N}),w(C,(e(r),n(()=>e(r).title)))}),K("click",f,()=>q(p,N)),m(o,f)});var l=d(a,2);k(l,5,()=>v,H,(o,r,N)=>{var f=de();let D;var W=t(f);Y(W,()=>e(r).component,(C,Q)=>{Q(C,{get collection(){return s()}})}),b(()=>D=T(f,1,"tab-item",null,D,{active:e(p)==N})),m(o,f)}),b(()=>{w(E,`Password reset (${P(s()),n(()=>s().name)??""})`),w(g,(P(s()),n(()=>s().name)))}),m(A,h),L()}export{ve as default};
