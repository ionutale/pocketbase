import{p as J,a as Q,l as f,M as l,b as $,d as e,m as k,e as V,i as W,f as m,h as X,j as o,k as r,_ as Y,G as q,H as Z,a0 as B,u as y,w as b,A as ee,a2 as c,s as x,O as te,x as C,L as u,y as ae,$ as se}from"./index-DeFD_e2S.js";var re=m('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),oe=m("<button> </button>"),de=m("<div><!></div>"),le=m('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Delete a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-danger"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to delete.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ie(I,D){J(D,!1);const p=k(),n=k();let t=Q(D,"collection",8),_=k(204),i=[];f(()=>l(t()),()=>{x(p,t()?.deleteRule===null)}),f(()=>$,()=>{x(n,te.getApiExampleUrl($.baseURL))}),f(()=>(l(t()),e(p)),()=>{t()?.id&&(i.push({code:204,body:`
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
            `}))}),V(),W();var R=le(),E=X(R),L=r(E),w=o(E,2),U=r(w),j=o(r(U)),H=r(j),A=o(w,2);{let a=q(()=>(e(n),l(t()),c(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(n)}');

        ...

        await pb.collection('${t()?.name}').delete('RECORD_ID');
    `))),s=q(()=>(e(n),l(t()),c(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(n)}');

        ...

        await pb.collection('${t()?.name}').delete('RECORD_ID');
    `)));Y(A,{get js(){return e(a)},get dart(){return e(s)}})}var O=o(A,4),P=o(r(O),2),M=r(P),S=o(r(M)),z=r(S),F=o(P,2);{var G=a=>{var s=re();b(a,s)};Z(F,a=>{e(p)&&a(G)})}var K=o(O,8),T=r(K);B(T,5,()=>i,a=>a.code,(a,s)=>{var d=oe();let v;var h=r(d);y(g=>{v=C(d,1,"tab-item",null,v,g),u(h,(e(s),c(()=>e(s).code)))},[()=>({active:e(_)===e(s).code})]),ae("click",d,()=>x(_,e(s).code)),b(a,d)});var N=o(T,2);B(N,5,()=>i,a=>a.code,(a,s)=>{var d=de();let v;var h=r(d);se(h,{get content(){return e(s),c(()=>e(s).body)}}),y(g=>v=C(d,1,"tab-item",null,v,g),[()=>({active:e(_)===e(s).code})]),b(a,d)}),y(()=>{u(L,`Delete (${l(t()),c(()=>t().name)??""})`),u(H,(l(t()),c(()=>t().name))),u(z,(l(t()),c(()=>t().name)))}),b(I,R),ee()}export{ie as default};
