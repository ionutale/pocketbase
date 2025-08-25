import{p as ae,a as se,l as f,M as l,b as S,d as t,m as x,e as re,i as de,f as u,h as oe,j as s,k as r,_ as le,G as q,H as ie,$ as B,a0 as I,u as y,w as b,A as ne,a2 as i,s as w,O as U,x as j,L as h,y as ce}from"./index-C9Y1y-Co.js";import{F as pe}from"./FieldsQueryParam-yjG8U_VT.js";var ve=u('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),be=u("<button> </button>"),he=u("<div><!></div>"),ue=u('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to view.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ge(G,k){ae(k,!1);const v=x(),n=x();let a=se(k,"collection",8),m=x(200),c=[];f(()=>l(a()),()=>{var e;w(v,((e=a())==null?void 0:e.viewRule)===null)}),f(()=>S,()=>{w(n,U.getApiExampleUrl(S.baseURL))}),f(()=>(l(a()),t(v)),()=>{var e;(e=a())!=null&&e.id&&(c.push({code:200,body:JSON.stringify(U.dummyCollectionRecord(a()),null,2)}),t(v)&&c.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),c.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))}),re(),de();var F=ue(),R=oe(F),H=r(R),O=s(R,2),L=r(O),N=s(r(L)),Q=r(N),P=s(O,2);{let e=q(()=>(t(n),l(a()),i(()=>{var d;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(n)}');

        ...

        const record = await pb.collection('${(d=a())==null?void 0:d.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `}))),o=q(()=>(t(n),l(a()),i(()=>{var d;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(n)}');

        ...

        final record = await pb.collection('${(d=a())==null?void 0:d.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `})));le(P,{get js(){return t(e)},get dart(){return t(o)}})}var D=s(P,4),T=s(r(D),2),V=r(T),z=s(r(V)),J=r(z),K=s(T,2);{var M=e=>{var o=ve();b(e,o)};ie(K,e=>{t(v)&&e(M)})}var A=s(D,8),W=s(r(A)),C=r(W),X=s(r(C),2),E=s(r(X));B(E,{content:"?expand=relField1,relField2.subRelField"});var Y=s(E,6);Y.textContent='"expand": {"relField1": {...}, ...}';var Z=s(C);pe(Z,{});var ee=s(A,4),$=r(ee);I($,5,()=>c,e=>e.code,(e,o)=>{var d=be();let p;var _=r(d);y(g=>{p=j(d,1,"tab-item",null,p,g),h(_,(t(o),i(()=>t(o).code)))},[()=>({active:t(m)===t(o).code})]),ce("click",d,()=>w(m,t(o).code)),b(e,d)});var te=s($,2);I(te,5,()=>c,e=>e.code,(e,o)=>{var d=he();let p;var _=r(d);B(_,{get content(){return t(o),i(()=>t(o).body)}}),y(g=>p=j(d,1,"tab-item",null,p,g),[()=>({active:t(m)===t(o).code})]),b(e,d)}),y(()=>{h(H,`View (${l(a()),i(()=>a().name)??""})`),h(Q,(l(a()),i(()=>a().name))),h(J,(l(a()),i(()=>a().name)))}),b(G,F),ne()}export{ge as default};
