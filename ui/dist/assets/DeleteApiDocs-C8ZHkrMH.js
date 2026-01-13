import{p as N,a as J,l as g,M as l,b as $,d as e,m as f,e as Q,i as V,f as m,h as W,j as o,k as r,_ as X,E as A,H as Y,a0 as q,u as k,w as b,z as Z,a2 as c,s as x,O as ee,G as B,L as u,x as te,$ as ae}from"./index-BMgSTU82.js";var se=m('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),re=m("<button> </button>"),oe=m("<div><!></div>"),de=m('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Delete a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-danger"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to delete.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ce(C,y){N(y,!1);const p=f(),n=f();let t=J(y,"collection",8),_=f(204),i=[];g(()=>l(t()),()=>{x(p,t()?.deleteRule===null)}),g(()=>$,()=>{x(n,ee.getApiExampleUrl($.baseURL))}),g(()=>(l(t()),e(p)),()=>{t()?.id&&(i.push({code:204,body:`
                null
            `}),i.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),e(p)&&i.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),i.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))}),Q(),V();var D=de(),E=W(D),I=r(E),R=o(E,2),L=r(R),U=o(r(L)),j=r(U),w=o(R,2);{let a=A(()=>(e(n),l(t()),c(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(n)}');

        ...

        await pb.collection('${t()?.name}').delete('RECORD_ID');
    `))),s=A(()=>(e(n),l(t()),c(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(n)}');

        ...

        await pb.collection('${t()?.name}').delete('RECORD_ID');
    `)));X(w,{get js(){return e(a)},get dart(){return e(s)}})}var O=o(w,4),P=o(r(O),2),z=r(P),H=o(r(z)),M=r(H),S=o(P,2);{var F=a=>{var s=se();b(a,s)};Y(S,a=>{e(p)&&a(F)})}var G=o(O,8),T=r(G);q(T,5,()=>i,a=>a.code,(a,s)=>{var d=re();let v;var h=r(d);k(()=>{v=B(d,1,"tab-item",null,v,{active:e(_)===e(s).code}),u(h,(e(s),c(()=>e(s).code)))}),te("click",d,()=>x(_,e(s).code)),b(a,d)});var K=o(T,2);q(K,5,()=>i,a=>a.code,(a,s)=>{var d=oe();let v;var h=r(d);ae(h,{get content(){return e(s),c(()=>e(s).body)}}),k(()=>v=B(d,1,"tab-item",null,v,{active:e(_)===e(s).code})),b(a,d)}),k(()=>{u(I,`Delete (${l(t()),c(()=>t().name)??""})`),u(j,(l(t()),c(()=>t().name))),u(M,(l(t()),c(()=>t().name)))}),b(C,D),Z()}export{ce as default};
