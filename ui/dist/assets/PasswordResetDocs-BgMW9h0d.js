import{p as M,a as I,l as U,e as j,i as F,f as h,h as K,j as n,k as t,a0 as S,d as e,m as q,u,x as T,L as y,a2 as p,y as L,s as A,w as _,$ as Q,A as G,M as k,b as H,_ as V,G as z,a1 as J,O as X,a4 as Y}from"./index-4eYEYVcK.js";var Z=h("<button> </button>"),ee=h("<div><!></div>"),te=h('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the password reset request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The new password to set.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td><td><span class="label">String</span></td><td>The new password confirmation.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ae(O,f){M(f,!1);let v=I(f,"collection",8),s=q(204),b=q([]);U(()=>{},()=>{A(b,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var m=te(),g=K(m),R=n(t(g),2),E=t(R),x=n(t(E)),$=t(x),D=n(g,8),w=t(D);S(w,5,()=>e(b),o=>o.code,(o,a)=>{var l=Z();let r;var d=t(l);u(i=>{r=T(l,1,"tab-item",null,r,i),y(d,(e(a),p(()=>e(a).code)))},[()=>({active:e(s)===e(a).code})]),L("click",l,()=>A(s,e(a).code)),_(o,l)});var P=n(w,2);S(P,5,()=>e(b),o=>o.code,(o,a)=>{var l=ee();let r;var d=t(l);Q(d,{get content(){return e(a),p(()=>e(a).body)}}),u(i=>r=T(l,1,"tab-item",null,r,i),[()=>({active:e(s)===e(a).code})]),_(o,l)}),u(()=>y($,(k(v()),p(()=>v().name)))),_(O,m),G()}var se=h("<button> </button>"),le=h("<div><!></div>"),ie=h('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the password reset request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe(O,f){M(f,!1);let v=I(f,"collection",8),s=q(204),b=q([]);U(()=>{},()=>{A(b,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var m=ie(),g=K(m),R=n(t(g),2),E=t(R),x=n(t(E)),$=t(x),D=n(g,8),w=t(D);S(w,5,()=>e(b),o=>o.code,(o,a)=>{var l=se();let r;var d=t(l);u(i=>{r=T(l,1,"tab-item",null,r,i),y(d,(e(a),p(()=>e(a).code)))},[()=>({active:e(s)===e(a).code})]),L("click",l,()=>A(s,e(a).code)),_(o,l)});var P=n(w,2);S(P,5,()=>e(b),o=>o.code,(o,a)=>{var l=le();let r;var d=t(l);Q(d,{get content(){return e(a),p(()=>e(a).body)}}),u(i=>r=T(l,1,"tab-item",null,r,i),[()=>({active:e(s)===e(a).code})]),_(o,l)}),u(()=>y($,(k(v()),p(()=>v().name)))),_(O,m),G()}var re=h('<button><div class="txt"> </div></button>'),de=h("<div><!></div>"),ce=h(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> password reset email request.</p> <p>On successful password reset all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve(O,f){M(f,!1);const v=q();let s=I(f,"collection",8);const b=[{title:"Request password reset",component:oe},{title:"Confirm password reset",component:ae}];let m=q(0);U(()=>H,()=>{A(v,X.getApiExampleUrl(H.baseURL))}),j(),F();var g=ce(),R=K(g),E=t(R),x=n(R,2),$=t(x),D=n(t($)),w=t(D),P=n(x,2);{let r=z(()=>(e(v),k(s()),p(()=>{var i,c;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(v)}');

        ...

        await pb.collection('${(i=s())==null?void 0:i.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(c=s())==null?void 0:c.name}').confirmPasswordReset(
            'RESET_TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `}))),d=z(()=>(e(v),k(s()),p(()=>{var i,c;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(v)}');

        ...

        await pb.collection('${(i=s())==null?void 0:i.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(c=s())==null?void 0:c.name}').confirmPasswordReset(
          'RESET_TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `})));V(P,{get js(){return e(r)},get dart(){return e(d)}})}var o=n(P,4),a=t(o);S(a,5,()=>b,J,(r,d,i)=>{var c=re();let N;var C=t(c),W=t(C);u(B=>{N=T(c,1,"tab-item",null,N,B),y(W,(e(d),p(()=>e(d).title)))},[()=>({active:e(m)==i})]),L("click",c,()=>A(m,i)),_(r,c)});var l=n(a,2);S(l,5,()=>b,J,(r,d,i)=>{var c=de();let N;var C=t(c);Y(C,()=>e(d).component,(W,B)=>{B(W,{get collection(){return s()}})}),u(W=>N=T(c,1,"tab-item",null,N,W),[()=>({active:e(m)==i})]),_(r,c)}),u(()=>{y(E,`Password reset (${k(s()),p(()=>s().name)??""})`),y(w,(k(s()),p(()=>s().name)))}),_(O,g),G()}export{ve as default};
