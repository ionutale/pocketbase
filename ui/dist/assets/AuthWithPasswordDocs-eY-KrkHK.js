import{p as pt,a as vt,l as g,b as B,M as p,d as t,m as h,e as bt,i as ht,f as x,h as C,j as a,k as e,_ as ut,E,a0 as k,a1 as _t,$ as j,u as f,a2 as n,L as u,w as _,z as mt,s as m,O as N,H as gt,a4 as ft,G as L,x as xt}from"./index-Bek02XaP.js";import{F as yt}from"./FieldsQueryParam-D_NcjopN.js";var wt=x("<!> <strong> </strong>",1),St=x("<button> </button>"),kt=x("<div><!></div>"),Pt=x('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with combination of <strong> </strong> and <strong>password</strong>.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-password</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>identity</span></div></td><td><span class="label">String</span></td><td><!> of the record to authenticate.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The auth record password.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function At(Y,P){pt(P,!1);const v=h(),i=h(),b=h();let r=vt(P,"collection",8),y=h(200),w=h([]);g(()=>B,()=>{m(v,N.getApiExampleUrl(B.baseURL))}),g(()=>p(r()),()=>{m(i,r()?.passwordAuth?.identityFields||[])}),g(()=>t(i),()=>{m(b,t(i).length==0?"NONE":"YOUR_"+t(i).join("_OR_").toUpperCase())}),g(()=>p(r()),()=>{m(w,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:N.dummyCollectionRecord(r())},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "identity": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])}),bt(),ht();var O=Pt(),R=C(O),H=e(R),A=a(R,2),I=e(A),J=a(e(I)),M=e(J),F=a(A,2);{let s=E(()=>(t(v),p(r()),t(b),n(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(v)}');

        ...

        const authData = await pb.collection('${r()?.name}').authWithPassword(
            '${t(b)}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `))),o=E(()=>(t(v),p(r()),t(b),n(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(v)}');

        ...

        final authData = await pb.collection('${r()?.name}').authWithPassword(
          '${t(b)}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `)));ut(F,{get js(){return t(s)},get dart(){return t(o)}})}var T=a(F,4),Q=a(e(T),2),V=e(Q),z=a(e(V)),G=e(z),$=a(T,4),K=a(e($)),X=e(K),Z=a(e(X),2),tt=e(Z);k(tt,1,()=>t(i),_t,(s,o,d)=>{var l=wt(),c=C(l);{var lt=S=>{var ct=ft("or");_(S,ct)};gt(c,S=>{d>0&&S(lt)})}var it=a(c,2),nt=e(it);f(()=>u(nt,t(o))),_(s,l)});var D=a($,4),et=a(e(D)),U=e(et),at=a(e(U),2),q=a(e(at));j(q,{content:"?expand=relField1,relField2.subRelField"});var st=a(q,6);st.textContent='"expand": {"relField1": {...}, ...}';var rt=a(U);yt(rt,{prefix:"record."});var ot=a(D,4),W=e(ot);k(W,5,()=>t(w),s=>s.code,(s,o)=>{var d=St();let l;var c=e(d);f(()=>{l=L(d,1,"tab-item",null,l,{active:t(y)===t(o).code}),u(c,(t(o),n(()=>t(o).code)))}),xt("click",d,()=>m(y,t(o).code)),_(s,d)});var dt=a(W,2);k(dt,5,()=>t(w),s=>s.code,(s,o)=>{var d=kt();let l;var c=e(d);j(c,{get content(){return t(o),n(()=>t(o).body)}}),f(()=>l=L(d,1,"tab-item",null,l,{active:t(y)===t(o).code})),_(s,d)}),f(s=>{u(H,`Auth with password (${p(r()),n(()=>r().name)??""})`),u(M,s),u(G,(p(r()),n(()=>r().name)))},[()=>(t(i),n(()=>t(i).join("/")))]),_(Y,O),mt()}export{At as default};
