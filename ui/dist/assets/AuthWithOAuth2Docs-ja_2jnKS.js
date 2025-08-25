import{p as X,a as Y,l as D,b as P,M as c,e as ee,i as te,f as w,h as ae,j as t,k as a,_ as se,d as e,G as U,$ as F,a0 as C,m as v,u as m,w as g,A as re,a2 as n,s as f,O as W,x as j,L as _,y as oe,E as ie}from"./index-4eYEYVcK.js";import{F as le}from"./FieldsQueryParam-nnFv2xk1.js";var ne=w("<button> </button>"),de=w("<div><!></div>"),ce=w(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> <p>For more details please check the <a target="_blank" rel="noopener noreferrer">OAuth2 integration documentation</a>.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-oauth2</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>provider</span></div></td><td><span class="label">String</span></td><td>The name of the OAuth2 client provider (eg. "google").</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>code</span></div></td><td><span class="label">String</span></td><td>The authorization code returned from the initial request.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>codeVerifier</span></div></td><td><span class="label">String</span></td><td>The code verifier sent with the initial request as part of the code_challenge.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>redirectURL</span></div></td><td><span class="label">String</span></td><td>The redirect url sent with the initial request.</td></tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>createData</span></div></td><td><span class="label">Object</span></td><td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action. <br/> <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function ue(B,x){X(x,!1);const l=v();let s=Y(x,"collection",8),h=v(200),p=v([]);D(()=>P,()=>{f(l,W.getApiExampleUrl(P.baseURL))}),D(()=>c(s()),()=>{f(p,[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:W.dummyCollectionRecord(s()),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",expiry:"2022-01-01 10:00:00.123Z",isNew:!1,rawUser:{}}},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])}),ee(),te();var y=ce(),k=ae(y),E=a(k),A=t(k,2),L=t(a(A),2),M=t(a(L)),O=t(A,2);{let o=U(()=>(e(l),c(s()),n(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(l)}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e(l)}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${s().name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${s().name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `))),r=U(()=>(e(l),c(s()),n(()=>`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${e(l)}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e(l)}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${s().name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${s().name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `)));se(O,{get js(){return e(o)},get dart(){return e(r)}})}var S=t(O,4),J=t(a(S),2),N=a(J),V=t(a(N)),H=a(V),T=t(S,8),Q=t(a(T)),q=a(Q),z=t(a(q),2),R=t(a(z));F(R,{content:"?expand=relField1,relField2.subRelField"});var G=t(R,6);G.textContent='"expand": {"relField1": {...}, ...}';var I=t(q);le(I,{prefix:"record."});var K=t(T,4),$=a(K);C($,5,()=>e(p),o=>o.code,(o,r)=>{var i=ne();let d;var u=a(i);m(b=>{d=j(i,1,"tab-item",null,d,b),_(u,(e(r),n(()=>e(r).code)))},[()=>({active:e(h)===e(r).code})]),oe("click",i,()=>f(h,e(r).code)),g(o,i)});var Z=t($,2);C(Z,5,()=>e(p),o=>o.code,(o,r)=>{var i=de();let d;var u=a(i);F(u,{get content(){return e(r),n(()=>e(r).body)}}),m(b=>d=j(i,1,"tab-item",null,d,b),[()=>({active:e(h)===e(r).code})]),g(o,i)}),m(()=>{_(E,`Auth with OAuth2 (${c(s()),n(()=>s().name)??""})`),ie(M,"href",n(()=>"https://pocketbase.io/docs/authentication#authenticate-with-oauth2")),_(H,(c(s()),n(()=>s().name)))}),g(B,y),re()}export{ue as default};
