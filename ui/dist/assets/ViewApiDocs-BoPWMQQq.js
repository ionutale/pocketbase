import{p as ae,a as se,l as f,M as l,b as S,d as e,m as x,e as re,i as de,f as u,h as oe,j as a,k as s,_ as le,G as q,H as ie,$ as B,a0 as I,u as y,w as b,A as ne,a2 as i,s as w,O as U,x as j,L as h,y as ce}from"./index-DeFD_e2S.js";import{F as pe}from"./FieldsQueryParam-3Dv4rQxh.js";var ve=u('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),be=u("<button> </button>"),he=u("<div><!></div>"),ue=u('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a single <strong> </strong> record.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to view.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function ge(G,k){ae(k,!1);const v=x(),n=x();let t=se(k,"collection",8),m=x(200),c=[];f(()=>l(t()),()=>{w(v,t()?.viewRule===null)}),f(()=>S,()=>{w(n,U.getApiExampleUrl(S.baseURL))}),f(()=>(l(t()),e(v)),()=>{t()?.id&&(c.push({code:200,body:JSON.stringify(U.dummyCollectionRecord(t()),null,2)}),e(v)&&c.push({code:403,body:`
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
            `}))}),re(),de();var F=ue(),R=oe(F),H=s(R),O=a(R,2),L=s(O),N=a(s(L)),Q=s(N),P=a(O,2);{let r=q(()=>(e(n),l(t()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(n)}');

        ...

        const record = await pb.collection('${t()?.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `))),d=q(()=>(e(n),l(t()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(n)}');

        ...

        final record = await pb.collection('${t()?.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `)));le(P,{get js(){return e(r)},get dart(){return e(d)}})}var D=a(P,4),T=a(s(D),2),V=s(T),z=a(s(V)),J=s(z),K=a(T,2);{var M=r=>{var d=ve();b(r,d)};ie(K,r=>{e(v)&&r(M)})}var A=a(D,8),W=a(s(A)),C=s(W),X=a(s(C),2),E=a(s(X));B(E,{content:"?expand=relField1,relField2.subRelField"});var Y=a(E,6);Y.textContent='"expand": {"relField1": {...}, ...}';var Z=a(C);pe(Z,{});var ee=a(A,4),$=s(ee);I($,5,()=>c,r=>r.code,(r,d)=>{var o=be();let p;var _=s(o);y(g=>{p=j(o,1,"tab-item",null,p,g),h(_,(e(d),i(()=>e(d).code)))},[()=>({active:e(m)===e(d).code})]),ce("click",o,()=>w(m,e(d).code)),b(r,o)});var te=a($,2);I(te,5,()=>c,r=>r.code,(r,d)=>{var o=he();let p;var _=s(o);B(_,{get content(){return e(d),i(()=>e(d).body)}}),y(g=>p=j(o,1,"tab-item",null,p,g),[()=>({active:e(m)===e(d).code})]),b(r,o)}),y(()=>{h(H,`View (${l(t()),i(()=>t().name)??""})`),h(Q,(l(t()),i(()=>t().name))),h(J,(l(t()),i(()=>t().name)))}),b(G,F),ne()}export{ge as default};
