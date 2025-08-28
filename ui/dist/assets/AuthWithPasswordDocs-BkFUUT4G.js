import{p as pt,a as vt,l as f,b as C,M as p,d as t,m as u,e as bt,i as ht,f as x,h as j,j as a,k as e,_ as ut,G as E,a0 as P,a1 as _t,$ as N,u as y,a2 as n,L as _,w as m,A as mt,s as g,O as L,H as gt,a3 as ft,x as Y,y as yt}from"./index-DQ9K3nHd.js";import{F as xt}from"./FieldsQueryParam-B_o_5Dh5.js";var wt=x("<!> <strong> </strong>",1),St=x("<button> </button>"),kt=x("<div><!></div>"),Pt=x('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with combination of <strong> </strong> and <strong>password</strong>.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-password</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>identity</span></div></td><td><span class="label">String</span></td><td><!> of the record to authenticate.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>The auth record password.</td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function At(H,O){pt(O,!1);const v=u(),i=u(),b=u();let r=vt(O,"collection",8),w=u(200),S=u([]);f(()=>C,()=>{g(v,L.getApiExampleUrl(C.baseURL))}),f(()=>p(r()),()=>{g(i,r()?.passwordAuth?.identityFields||[])}),f(()=>t(i),()=>{g(b,t(i).length==0?"NONE":"YOUR_"+t(i).join("_OR_").toUpperCase())}),f(()=>p(r()),()=>{g(S,[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:L.dummyCollectionRecord(r())},null,2)},{code:400,body:`
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
            `}])}),bt(),ht();var R=Pt(),A=j(R),I=e(A),F=a(A,2),J=e(F),M=a(e(J)),Q=e(M),T=a(F,2);{let s=E(()=>(t(v),p(r()),t(b),n(()=>`
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
    `)));ut(T,{get js(){return t(s)},get dart(){return t(o)}})}var $=a(T,4),V=a(e($),2),G=e(V),K=a(e(G)),z=e(K),D=a($,4),X=a(e(D)),Z=e(X),tt=a(e(Z),2),et=e(tt);P(et,1,()=>t(i),_t,(s,o,d)=>{var l=wt(),c=j(l);{var h=k=>{var ct=ft("or");m(k,ct)};gt(c,k=>{d>0&&k(h)})}var it=a(c,2),nt=e(it);y(()=>_(nt,t(o))),m(s,l)});var U=a(D,4),at=a(e(U)),q=e(at),st=a(e(q),2),W=a(e(st));N(W,{content:"?expand=relField1,relField2.subRelField"});var rt=a(W,6);rt.textContent='"expand": {"relField1": {...}, ...}';var ot=a(q);xt(ot,{prefix:"record."});var dt=a(U,4),B=e(dt);P(B,5,()=>t(S),s=>s.code,(s,o)=>{var d=St();let l;var c=e(d);y(h=>{l=Y(d,1,"tab-item",null,l,h),_(c,(t(o),n(()=>t(o).code)))},[()=>({active:t(w)===t(o).code})]),yt("click",d,()=>g(w,t(o).code)),m(s,d)});var lt=a(B,2);P(lt,5,()=>t(S),s=>s.code,(s,o)=>{var d=kt();let l;var c=e(d);N(c,{get content(){return t(o),n(()=>t(o).body)}}),y(h=>l=Y(d,1,"tab-item",null,l,h),[()=>({active:t(w)===t(o).code})]),m(s,d)}),y(s=>{_(I,`Auth with password (${p(r()),n(()=>r().name)??""})`),_(Q,s),_(z,(p(r()),n(()=>r().name)))},[()=>(t(i),n(()=>t(i).join("/")))]),m(H,R),mt()}export{At as default};
