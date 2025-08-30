import{p as J,a as Q,l as f,M as l,b as $,d as t,m as k,e as V,i as W,f as m,h as X,j as d,k as o,_ as Y,G as q,H as Z,a0 as B,u as y,w as b,A as ee,a2 as c,s as x,O as te,x as C,L as u,y as ae,$ as se}from"./index-QTvxZBYq.js";var re=m('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),oe=m("<button> </button>"),de=m("<div><!></div>"),le=m('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Delete a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-danger"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to delete.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ie(I,D){J(D,!1);const p=k(),n=k();let a=Q(D,"collection",8),_=k(204),i=[];f(()=>l(a()),()=>{var e;x(p,((e=a())==null?void 0:e.deleteRule)===null)}),f(()=>$,()=>{x(n,te.getApiExampleUrl($.baseURL))}),f(()=>(l(a()),t(p)),()=>{var e;(e=a())!=null&&e.id&&(i.push({code:204,body:`
                null
            `}),i.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),t(p)&&i.push({code:403,body:`
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
            `}))}),V(),W();var R=le(),E=X(R),L=o(E),w=d(E,2),U=o(w),j=d(o(U)),H=o(j),A=d(w,2);{let e=q(()=>(t(n),l(a()),c(()=>{var s;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(n)}');

        ...

        await pb.collection('${(s=a())==null?void 0:s.name}').delete('RECORD_ID');
    `}))),r=q(()=>(t(n),l(a()),c(()=>{var s;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(n)}');

        ...

        await pb.collection('${(s=a())==null?void 0:s.name}').delete('RECORD_ID');
    `})));Y(A,{get js(){return t(e)},get dart(){return t(r)}})}var O=d(A,4),P=d(o(O),2),M=o(P),S=d(o(M)),z=o(S),F=d(P,2);{var G=e=>{var r=re();b(e,r)};Z(F,e=>{t(p)&&e(G)})}var K=d(O,8),T=o(K);B(T,5,()=>i,e=>e.code,(e,r)=>{var s=oe();let v;var h=o(s);y(g=>{v=C(s,1,"tab-item",null,v,g),u(h,(t(r),c(()=>t(r).code)))},[()=>({active:t(_)===t(r).code})]),ae("click",s,()=>x(_,t(r).code)),b(e,s)});var N=d(T,2);B(N,5,()=>i,e=>e.code,(e,r)=>{var s=de();let v;var h=o(s);se(h,{get content(){return t(r),c(()=>t(r).body)}}),y(g=>v=C(s,1,"tab-item",null,v,g),[()=>({active:t(_)===t(r).code})]),b(e,s)}),y(()=>{u(L,`Delete (${l(a()),c(()=>a().name)??""})`),u(H,(l(a()),c(()=>a().name))),u(z,(l(a()),c(()=>a().name)))}),b(I,R),ee()}export{ie as default};
