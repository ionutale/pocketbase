import{p as Z,a as X,l as D,b as $,M as c,e as Y,i as ee,f as _,h as te,j as t,k as a,_ as ae,d as e,E as P,$ as U,a0 as F,m as b,u as v,w as m,z as se,a2 as n,s as g,O as C,G as W,L as f,x as re,D as oe}from"./index-D0ntNp7m.js";import{F as ie}from"./FieldsQueryParam-BbNpyD7J.js";var le=_("<button> </button>"),ne=_("<div><!></div>"),de=_(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> <p>For more details please check the <a target="_blank" rel="noopener noreferrer">OAuth2 integration documentation</a>.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/auth-with-oauth2</p></div></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>provider</span></div></td><td><span class="label">String</span></td><td>The name of the OAuth2 client provider (eg. "google").</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>code</span></div></td><td><span class="label">String</span></td><td>The authorization code returned from the initial request.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>codeVerifier</span></div></td><td><span class="label">String</span></td><td>The code verifier sent with the initial request as part of the code_challenge.</td></tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>redirectURL</span></div></td><td><span class="label">String</span></td><td>The redirect url sent with the initial request.</td></tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>createData</span></div></td><td><span class="label">Object</span></td><td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action. <br/> <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function pe(j,w){Z(w,!1);const l=b();let s=X(w,"collection",8),h=b(200),p=b([]);D(()=>$,()=>{g(l,C.getApiExampleUrl($.baseURL))}),D(()=>c(s()),()=>{g(p,[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:C.dummyCollectionRecord(s()),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",expiry:"2022-01-01 10:00:00.123Z",isNew:!1,rawUser:{}}},null,2)},{code:400,body:`
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
            `}])}),Y(),ee();var x=de(),y=te(x),B=a(y),k=t(y,2),E=t(a(k),2),L=t(a(E)),O=t(k,2);{let o=P(()=>(e(l),c(s()),n(()=>`
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
    `))),r=P(()=>(e(l),c(s()),n(()=>`
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
    `)));ae(O,{get js(){return e(o)},get dart(){return e(r)}})}var A=t(O,4),M=t(a(A),2),J=a(M),N=t(a(J)),V=a(N),S=t(A,8),z=t(a(S)),T=a(z),H=t(a(T),2),q=t(a(H));U(q,{content:"?expand=relField1,relField2.subRelField"});var Q=t(q,6);Q.textContent='"expand": {"relField1": {...}, ...}';var G=t(T);ie(G,{prefix:"record."});var I=t(S,4),R=a(I);F(R,5,()=>e(p),o=>o.code,(o,r)=>{var i=le();let d;var u=a(i);v(()=>{d=W(i,1,"tab-item",null,d,{active:e(h)===e(r).code}),f(u,(e(r),n(()=>e(r).code)))}),re("click",i,()=>g(h,e(r).code)),m(o,i)});var K=t(R,2);F(K,5,()=>e(p),o=>o.code,(o,r)=>{var i=ne();let d;var u=a(i);U(u,{get content(){return e(r),n(()=>e(r).body)}}),v(()=>d=W(i,1,"tab-item",null,d,{active:e(h)===e(r).code})),m(o,i)}),v(()=>{f(B,`Auth with OAuth2 (${c(s()),n(()=>s().name)??""})`),oe(L,"href",n(()=>"https://pocketbase.io/docs/authentication#authenticate-with-oauth2")),f(V,(c(s()),n(()=>s().name)))}),m(j,x),se()}export{pe as default};
