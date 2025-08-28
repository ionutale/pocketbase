import{p as N,a as M,l as U,e as j,i as F,f,h as K,j as l,k as e,a0 as w,d as t,m as P,u as p,x as $,L as x,a2 as v,y as L,s as R,w as u,$ as Q,A as G,M as A,b as H,_ as W,G as z,a1 as J,O as X,a4 as Y}from"./index-DQ9K3nHd.js";var Z=f("<button> </button>"),tt=f("<div><!></div>"),et=f('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the verification request email.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function at(V,_){N(_,!1);let d=M(_,"collection",8),i=P(204),b=P([]);U(()=>{},()=>{R(b,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var m=et(),h=K(m),k=l(e(h),2),I=e(k),q=l(e(I)),O=e(q),B=l(h,8),y=e(B);w(y,5,()=>t(b),o=>o.code,(o,a)=>{var s=Z();let c;var r=e(s);p(n=>{c=$(s,1,"tab-item",null,c,n),x(r,(t(a),v(()=>t(a).code)))},[()=>({active:t(i)===t(a).code})]),L("click",s,()=>R(i,t(a).code)),u(o,s)});var T=l(y,2);w(T,5,()=>t(b),o=>o.code,(o,a)=>{var s=tt();let c;var r=e(s);Q(r,{get content(){return t(a),v(()=>t(a).body)}}),p(n=>c=$(s,1,"tab-item",null,c,n),[()=>({active:t(i)===t(a).code})]),u(o,s)}),p(()=>x(O,(A(d()),v(()=>d().name)))),u(V,m),G()}var it=f("<button> </button>"),st=f("<div><!></div>"),ot=f('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the verification request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ct(V,_){N(_,!1);let d=M(_,"collection",8),i=P(204),b=P([]);U(()=>{},()=>{R(b,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var m=ot(),h=K(m),k=l(e(h),2),I=e(k),q=l(e(I)),O=e(q),B=l(h,8),y=e(B);w(y,5,()=>t(b),o=>o.code,(o,a)=>{var s=it();let c;var r=e(s);p(n=>{c=$(s,1,"tab-item",null,c,n),x(r,(t(a),v(()=>t(a).code)))},[()=>({active:t(i)===t(a).code})]),L("click",s,()=>R(i,t(a).code)),u(o,s)});var T=l(y,2);w(T,5,()=>t(b),o=>o.code,(o,a)=>{var s=st();let c;var r=e(s);Q(r,{get content(){return t(a),v(()=>t(a).body)}}),p(n=>c=$(s,1,"tab-item",null,c,n),[()=>({active:t(i)===t(a).code})]),u(o,s)}),p(()=>x(O,(A(d()),v(()=>d().name)))),u(V,m),G()}var rt=f('<button><div class="txt"> </div></button>'),lt=f("<div><!></div>"),nt=f('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> account verification request.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>',1);function vt(V,_){N(_,!1);const d=P();let i=M(_,"collection",8);const b=[{title:"Request verification",component:ct},{title:"Confirm verification",component:at}];let m=P(0);U(()=>H,()=>{R(d,X.getApiExampleUrl(H.baseURL))}),j(),F();var h=nt(),k=K(h),I=e(k),q=l(k,2),O=e(q),B=l(e(O)),y=e(B),T=l(q,2);{let c=z(()=>(t(d),A(i()),v(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(d)}');

        ...

        await pb.collection('${i()?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${i()?.name}').confirmVerification('VERIFICATION_TOKEN');
    `))),r=z(()=>(t(d),A(i()),v(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(d)}');

        ...

        await pb.collection('${i()?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${i()?.name}').confirmVerification('VERIFICATION_TOKEN');
    `)));W(T,{get js(){return t(c)},get dart(){return t(r)}})}var o=l(T,4),a=e(o);w(a,5,()=>b,J,(c,r,n)=>{var g=rt();let C;var D=e(g),S=e(D);p(E=>{C=$(g,1,"tab-item",null,C,E),x(S,(t(r),v(()=>t(r).title)))},[()=>({active:t(m)==n})]),L("click",g,()=>R(m,n)),u(c,g)});var s=l(a,2);w(s,5,()=>b,J,(c,r,n)=>{var g=lt();let C;var D=e(g);Y(D,()=>t(r).component,(S,E)=>{E(S,{get collection(){return i()}})}),p(S=>C=$(g,1,"tab-item",null,C,S),[()=>({active:t(m)==n})]),u(c,g)}),p(()=>{x(I,`Account verification (${A(i()),v(()=>i().name)??""})`),x(y,(A(i()),v(()=>i().name)))}),u(V,h),G()}export{vt as default};
