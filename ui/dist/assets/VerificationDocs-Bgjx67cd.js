import{p as D,a as N,l as M,e as U,i as j,f as u,h as F,j as l,k as e,a0 as A,d as t,m as w,u as m,x as K,s as P,w as p,$ as J,a2 as d,z as L,G as $,L as x,M as T,b as z,_ as W,E as G,a1 as H,O as X,a5 as Y}from"./index-Bek02XaP.js";var Z=u("<button> </button>"),tt=u("<div><!></div>"),et=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the verification request email.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function at(R,f){D(f,!1);let n=N(f,"collection",8),i=w(204),v=w([]);M(()=>{},()=>{P(v,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),U(),j();var b=et(),_=F(b),y=l(e(_),2),V=e(y),k=l(e(V)),I=e(k),O=l(_,8),g=e(O);A(g,5,()=>t(v),o=>o.code,(o,a)=>{var s=Z();let c;var r=e(s);m(()=>{c=$(s,1,"tab-item",null,c,{active:t(i)===t(a).code}),x(r,(t(a),d(()=>t(a).code)))}),K("click",s,()=>P(i,t(a).code)),p(o,s)});var q=l(g,2);A(q,5,()=>t(v),o=>o.code,(o,a)=>{var s=tt();let c;var r=e(s);J(r,{get content(){return t(a),d(()=>t(a).body)}}),m(()=>c=$(s,1,"tab-item",null,c,{active:t(i)===t(a).code})),p(o,s)}),m(()=>x(I,(T(n()),d(()=>n().name)))),p(R,b),L()}var it=u("<button> </button>"),st=u("<div><!></div>"),ot=u('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the verification request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ct(R,f){D(f,!1);let n=N(f,"collection",8),i=w(204),v=w([]);M(()=>{},()=>{P(v,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),U(),j();var b=ot(),_=F(b),y=l(e(_),2),V=e(y),k=l(e(V)),I=e(k),O=l(_,8),g=e(O);A(g,5,()=>t(v),o=>o.code,(o,a)=>{var s=it();let c;var r=e(s);m(()=>{c=$(s,1,"tab-item",null,c,{active:t(i)===t(a).code}),x(r,(t(a),d(()=>t(a).code)))}),K("click",s,()=>P(i,t(a).code)),p(o,s)});var q=l(g,2);A(q,5,()=>t(v),o=>o.code,(o,a)=>{var s=st();let c;var r=e(s);J(r,{get content(){return t(a),d(()=>t(a).body)}}),m(()=>c=$(s,1,"tab-item",null,c,{active:t(i)===t(a).code})),p(o,s)}),m(()=>x(I,(T(n()),d(()=>n().name)))),p(R,b),L()}var rt=u('<button><div class="txt"> </div></button>'),lt=u("<div><!></div>"),nt=u('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> account verification request.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>',1);function vt(R,f){D(f,!1);const n=w();let i=N(f,"collection",8);const v=[{title:"Request verification",component:ct},{title:"Confirm verification",component:at}];let b=w(0);M(()=>z,()=>{P(n,X.getApiExampleUrl(z.baseURL))}),U(),j();var _=nt(),y=F(_),V=e(y),k=l(y,2),I=e(k),O=l(e(I)),g=e(O),q=l(k,2);{let c=G(()=>(t(n),T(i()),d(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(n)}');

        ...

        await pb.collection('${i()?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${i()?.name}').confirmVerification('VERIFICATION_TOKEN');
    `))),r=G(()=>(t(n),T(i()),d(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(n)}');

        ...

        await pb.collection('${i()?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${i()?.name}').confirmVerification('VERIFICATION_TOKEN');
    `)));W(q,{get js(){return t(c)},get dart(){return t(r)}})}var o=l(q,4),a=e(o);A(a,5,()=>v,H,(c,r,C)=>{var h=rt();let B;var E=e(h),S=e(E);m(()=>{B=$(h,1,"tab-item",null,B,{active:t(b)==C}),x(S,(t(r),d(()=>t(r).title)))}),K("click",h,()=>P(b,C)),p(c,h)});var s=l(a,2);A(s,5,()=>v,H,(c,r,C)=>{var h=lt();let B;var E=e(h);Y(E,()=>t(r).component,(S,Q)=>{Q(S,{get collection(){return i()}})}),m(()=>B=$(h,1,"tab-item",null,B,{active:t(b)==C})),p(c,h)}),m(()=>{x(V,`Account verification (${T(i()),d(()=>i().name)??""})`),x(g,(T(i()),d(()=>i().name)))}),p(R,_),L()}export{vt as default};
