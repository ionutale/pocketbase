import{p as N,a as M,l as U,e as j,i as F,f as _,h as K,j as d,k as e,a0 as w,d as t,m as P,u,x as $,L as x,a2 as b,y as L,s as R,w as f,$ as Q,A as G,M as A,b as H,_ as W,G as z,a1 as J,O as X,a4 as Y}from"./index-QTvxZBYq.js";var Z=_("<button> </button>"),tt=_("<div><!></div>"),et=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/confirm-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td><td><span class="label">String</span></td><td>The token from the verification request email.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function at(V,h){N(h,!1);let v=M(h,"collection",8),i=P(204),m=P([]);U(()=>{},()=>{R(m,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var p=et(),g=K(p),k=d(e(g),2),I=e(k),q=d(e(I)),O=e(q),B=d(g,8),y=e(B);w(y,5,()=>t(m),c=>c.code,(c,a)=>{var s=Z();let r;var l=e(s);u(o=>{r=$(s,1,"tab-item",null,r,o),x(l,(t(a),b(()=>t(a).code)))},[()=>({active:t(i)===t(a).code})]),L("click",s,()=>R(i,t(a).code)),f(c,s)});var T=d(y,2);w(T,5,()=>t(m),c=>c.code,(c,a)=>{var s=tt();let r;var l=e(s);Q(l,{get content(){return t(a),b(()=>t(a).body)}}),u(o=>r=$(s,1,"tab-item",null,r,o),[()=>({active:t(i)===t(a).code})]),f(c,s)}),u(()=>x(O,(A(v()),b(()=>v().name)))),f(V,p),G()}var it=_("<button> </button>"),st=_("<div><!></div>"),ot=_('<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/request-verification</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address to send the verification request (if exists).</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ct(V,h){N(h,!1);let v=M(h,"collection",8),i=P(204),m=P([]);U(()=>{},()=>{R(m,[{code:204,body:"null"},{code:400,body:`
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
            `}])}),j(),F();var p=ot(),g=K(p),k=d(e(g),2),I=e(k),q=d(e(I)),O=e(q),B=d(g,8),y=e(B);w(y,5,()=>t(m),c=>c.code,(c,a)=>{var s=it();let r;var l=e(s);u(o=>{r=$(s,1,"tab-item",null,r,o),x(l,(t(a),b(()=>t(a).code)))},[()=>({active:t(i)===t(a).code})]),L("click",s,()=>R(i,t(a).code)),f(c,s)});var T=d(y,2);w(T,5,()=>t(m),c=>c.code,(c,a)=>{var s=st();let r;var l=e(s);Q(l,{get content(){return t(a),b(()=>t(a).body)}}),u(o=>r=$(s,1,"tab-item",null,r,o),[()=>({active:t(i)===t(a).code})]),f(c,s)}),u(()=>x(O,(A(v()),b(()=>v().name)))),f(V,p),G()}var rt=_('<button><div class="txt"> </div></button>'),lt=_("<div><!></div>"),nt=_('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Sends <strong> </strong> account verification request.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="tabs"><div class="tabs-header compact"></div> <div class="tabs-content"></div></div>',1);function vt(V,h){N(h,!1);const v=P();let i=M(h,"collection",8);const m=[{title:"Request verification",component:ct},{title:"Confirm verification",component:at}];let p=P(0);U(()=>H,()=>{R(v,X.getApiExampleUrl(H.baseURL))}),j(),F();var g=nt(),k=K(g),I=e(k),q=d(k,2),O=e(q),B=d(e(O)),y=e(B),T=d(q,2);{let r=z(()=>(t(v),A(i()),b(()=>{var o,n;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(v)}');

        ...

        await pb.collection('${(o=i())==null?void 0:o.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(n=i())==null?void 0:n.name}').confirmVerification('VERIFICATION_TOKEN');
    `}))),l=z(()=>(t(v),A(i()),b(()=>{var o,n;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(v)}');

        ...

        await pb.collection('${(o=i())==null?void 0:o.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(n=i())==null?void 0:n.name}').confirmVerification('VERIFICATION_TOKEN');
    `})));W(T,{get js(){return t(r)},get dart(){return t(l)}})}var c=d(T,4),a=e(c);w(a,5,()=>m,J,(r,l,o)=>{var n=rt();let C;var D=e(n),S=e(D);u(E=>{C=$(n,1,"tab-item",null,C,E),x(S,(t(l),b(()=>t(l).title)))},[()=>({active:t(p)==o})]),L("click",n,()=>R(p,o)),f(r,n)});var s=d(a,2);w(s,5,()=>m,J,(r,l,o)=>{var n=lt();let C;var D=e(n);Y(D,()=>t(l).component,(S,E)=>{E(S,{get collection(){return i()}})}),u(S=>C=$(n,1,"tab-item",null,C,S),[()=>({active:t(p)==o})]),f(r,n)}),u(()=>{x(I,`Account verification (${A(i()),b(()=>i().name)??""})`),x(y,(A(i()),b(()=>i().name)))}),f(V,g),G()}export{vt as default};
