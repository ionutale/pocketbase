import{p as te,a as ae,l as g,M as l,b as $,d as e,m as f,e as se,i as re,f as u,h as de,j as a,k as s,_ as oe,E as S,H as le,$ as q,a0 as B,u as x,w as b,z as ie,a2 as i,s as y,O as I,G as U,L as h,x as ne}from"./index-D0ntNp7m.js";import{F as ce}from"./FieldsQueryParam-BbNpyD7J.js";var pe=u('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),ve=u("<button> </button>"),be=u("<div><!></div>"),he=u('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to view.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function _e(j,w){te(w,!1);const v=f(),n=f();let t=ae(w,"collection",8),m=f(200),c=[];g(()=>l(t()),()=>{y(v,t()?.viewRule===null)}),g(()=>$,()=>{y(n,I.getApiExampleUrl($.baseURL))}),g(()=>(l(t()),e(v)),()=>{t()?.id&&(c.push({code:200,body:JSON.stringify(I.dummyCollectionRecord(t()),null,2)}),e(v)&&c.push({code:403,body:`
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
            `}))}),se(),re();var k=he(),F=de(k),z=s(F),R=a(F,2),G=s(R),H=a(s(G)),L=s(H),O=a(R,2);{let r=S(()=>(e(n),l(t()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(n)}');

        ...

        const record = await pb.collection('${t()?.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `))),d=S(()=>(e(n),l(t()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(n)}');

        ...

        final record = await pb.collection('${t()?.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `)));oe(O,{get js(){return e(r)},get dart(){return e(d)}})}var P=a(O,4),D=a(s(P),2),N=s(D),Q=a(s(N)),V=s(Q),J=a(D,2);{var K=r=>{var d=pe();b(r,d)};le(J,r=>{e(v)&&r(K)})}var T=a(P,8),M=a(s(T)),E=s(M),W=a(s(E),2),A=a(s(W));q(A,{content:"?expand=relField1,relField2.subRelField"});var X=a(A,6);X.textContent='"expand": {"relField1": {...}, ...}';var Y=a(E);ce(Y,{});var Z=a(T,4),C=s(Z);B(C,5,()=>c,r=>r.code,(r,d)=>{var o=ve();let p;var _=s(o);x(()=>{p=U(o,1,"tab-item",null,p,{active:e(m)===e(d).code}),h(_,(e(d),i(()=>e(d).code)))}),ne("click",o,()=>y(m,e(d).code)),b(r,o)});var ee=a(C,2);B(ee,5,()=>c,r=>r.code,(r,d)=>{var o=be();let p;var _=s(o);q(_,{get content(){return e(d),i(()=>e(d).body)}}),x(()=>p=U(o,1,"tab-item",null,p,{active:e(m)===e(d).code})),b(r,o)}),x(()=>{h(z,`View (${l(t()),i(()=>t().name)??""})`),h(L,(l(t()),i(()=>t().name))),h(V,(l(t()),i(()=>t().name)))}),b(j,k),ie()}export{_e as default};
