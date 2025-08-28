import{p as M,a as I,l as U,e as j,i as F,f as _,h as K,j as d,k as t,a0 as S,d as e,m as q,u as m,x as T,L as y,a2 as v,y as L,s as A,w as u,$ as Q,A as G,M as k,b as H,_ as V,G as z,a1 as J,O as X,a4 as Y}from"./index-DeFD_e2S.js";var Z=_("<button> </button>"),ee=_("<div><!></div>"),te=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the password reset request email.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The new password to set.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td><td><span class="label">String</span></td><td>The new password confirmation.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ae(O,h){M(h,!1);let n=I(h,"collection",8),s=q(204),p=q([]);U(()=>{},()=>{A(p,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var b=te(),f=K(b),R=d(t(f),2),E=t(R),x=d(t(E)),$=t(x),D=d(f,8),w=t(D);S(w,5,()=>e(p),i=>i.code,(i,a)=>{var l=Z();let o;var r=t(l);m(c=>{o=T(l,1,"tab-item",null,o,c),y(r,(e(a),v(()=>e(a).code)))},[()=>({active:e(s)===e(a).code})]),L("click",l,()=>A(s,e(a).code)),u(i,l)});var P=d(w,2);S(P,5,()=>e(p),i=>i.code,(i,a)=>{var l=ee();let o;var r=t(l);Q(r,{get content(){return e(a),v(()=>e(a).body)}}),m(c=>o=T(l,1,"tab-item",null,o,c),[()=>({active:e(s)===e(a).code})]),u(i,l)}),m(()=>y($,(k(n()),v(()=>n().name)))),u(O,b),G()}var se=_("<button> </button>"),le=_("<div><!></div>"),ie=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-password-reset</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the password reset request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function oe(O,h){M(h,!1);let n=I(h,"collection",8),s=q(204),p=q([]);U(()=>{},()=>{A(p,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var b=ie(),f=K(b),R=d(t(f),2),E=t(R),x=d(t(E)),$=t(x),D=d(f,8),w=t(D);S(w,5,()=>e(p),i=>i.code,(i,a)=>{var l=se();let o;var r=t(l);m(c=>{o=T(l,1,"tab-item",null,o,c),y(r,(e(a),v(()=>e(a).code)))},[()=>({active:e(s)===e(a).code})]),L("click",l,()=>A(s,e(a).code)),u(i,l)});var P=d(w,2);S(P,5,()=>e(p),i=>i.code,(i,a)=>{var l=le();let o;var r=t(l);Q(r,{get content(){return e(a),v(()=>e(a).body)}}),m(c=>o=T(l,1,"tab-item",null,o,c),[()=>({active:e(s)===e(a).code})]),u(i,l)}),m(()=>y($,(k(n()),v(()=>n().name)))),u(O,b),G()}var re=_('<button><div class="txt"> </div></button>'),de=_("<div><!></div>"),ce=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> password reset email request.</p> <p>On successful password reset all previously issued auth tokens for the specific record will be
        automatically invalidated.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>`,1);function ve(O,h){M(h,!1);const n=q();let s=I(h,"collection",8);const p=[{title:"Request password reset",component:oe},{title:"Confirm password reset",component:ae}];let b=q(0);U(()=>H,()=>{A(n,X.getApiExampleUrl(H.baseURL))}),j(),F();var f=ce(),R=K(f),E=t(R),x=d(R,2),$=t(x),D=d(t($)),w=t(D),P=d(x,2);{let o=z(()=>(e(n),k(s()),v(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(n)}');

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
    `))),r=z(()=>(e(n),k(s()),v(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(n)}');

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
    `)));V(P,{get js(){return e(o)},get dart(){return e(r)}})}var i=d(P,4),a=t(i);S(a,5,()=>p,J,(o,r,c)=>{var g=re();let N;var C=t(g),W=t(C);m(B=>{N=T(g,1,"tab-item",null,N,B),y(W,(e(r),v(()=>e(r).title)))},[()=>({active:e(b)==c})]),L("click",g,()=>A(b,c)),u(o,g)});var l=d(a,2);S(l,5,()=>p,J,(o,r,c)=>{var g=de();let N;var C=t(g);Y(C,()=>e(r).component,(W,B)=>{B(W,{get collection(){return s()}})}),m(W=>N=T(g,1,"tab-item",null,N,W),[()=>({active:e(b)==c})]),u(o,g)}),m(()=>{y(E,`Password reset (${k(s()),v(()=>s().name)??""})`),y(w,(k(s()),v(()=>s().name)))}),u(O,f),G()}export{ve as default};
