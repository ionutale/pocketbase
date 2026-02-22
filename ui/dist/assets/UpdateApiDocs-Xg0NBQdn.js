import{p as Ma,a as Ja,l as x,M as v,d as a,m,b as ea,e as Va,i as Ha,f as p,h as N,j as d,k as r,H as w,_ as La,E as ta,a0 as B,$ as sa,u as S,w as i,z as za,a2 as n,a3 as Qa,O as P,s as _,L as g,a4 as k,G as ra,x as Ga,D as Ka}from"./index-Bek02XaP.js";import{F as Wa}from"./FieldsQueryParam-D_NcjopN.js";var Ya=p(`<p><em>Note that in case of a password change all previously issued tokens for the current record
                will be automatically invalidated and if you want your user to remain signed in you need to
                reauthenticate manually after the update call.</em></p>`),Xa=p('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),Za=p('<span class="label label-success">Required</span>'),$a=p('<span class="label label-warning">Optional</span>'),ae=p(`<tr><td colspan="3" class="txt-hint txt-bold">Auth specific fields</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>email</span></div></td><td><span class="label">String</span></td><td>The auth record email address. <br/> This field can be updated only by superusers or auth records with "Manage" access. <br/> Regular accounts can update their email by calling "Request email change".</td></tr> <tr><td><div class="inline-flex"><!> <span>emailVisibility</span></div></td><td><span class="label">Boolean</span></td><td>Whether to show/hide the auth record email when fetching the record data.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>oldPassword</span></div></td><td><span class="label">String</span></td><td>Old auth record password. <br/> This field is required only when changing the record password. Superusers and auth records
                    with "Manage" access can skip this field.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>password</span></div></td><td><span class="label">String</span></td><td>New auth record password.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>passwordConfirm</span></div></td><td><span class="label">String</span></td><td>New auth record password confirmation.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td><td><span class="label">Boolean</span></td><td>Indicates whether the auth record is verified or not. <br/> This field can be set only by superusers or auth records with "Manage" access.</td></tr> <tr><td colspan="3" class="txt-hint txt-bold">Other fields</td></tr>`,1),ee=p('<span class="label label-success">Required</span>'),te=p('<span class="label label-warning">Optional</span>'),se=p("<code></code> object.",1),re=p("File object.<br/> Set to <code>null</code> to delete already uploaded file(s).",1),de=p('<tr><td><div class="inline-flex"><!> <span> </span></div></td><td><span class="label"> </span></td><td><!></td></tr>'),le=p("<button> </button>"),oe=p("<div><!></div>"),ne=p(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Update a single <strong> </strong> record.</p> <p>Body parameters could be sent as <code>application/json</code> or <code>multipart/form-data</code>.</p> <p>File upload is supported only via <code>multipart/form-data</code>. <br/> For more info and examples you could check the detailed <a target="_blank" rel="noopener noreferrer">Files upload and handling docs</a>.</p> <!></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong> </strong>/records/<strong>:id</strong></p></div> <!></div> <div class="section-title">Path parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>id</td><td><span class="label">String</span></td><td>ID of the record to update.</td></tr></tbody></table> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><!><!></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-lg"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand relations when returning the updated record. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). Only
                the relations that the user has permissions to <strong>view</strong> will be expanded. <br/> <span class="txt-hint">If a relation is configured to allow multiple collections, values use the format <code></code>.</span></td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function pe(da,j){Ma(j,!1);const y=m(),E=m(),T=m(),I=m(),O=m();let l=Ja(j,"collection",8),F=m(200),q=m([]);function U(s){let e=P.dummyCollectionSchemaData(s,!0);return a(y)&&(e.oldPassword="12345678",e.password="87654321",e.passwordConfirm="87654321",delete e.verified,delete e.email),e}x(()=>v(l()),()=>{_(y,l()?.type==="auth")}),x(()=>v(l()),()=>{_(E,l()?.updateRule===null)}),x(()=>a(y),()=>{_(T,a(y)?["id","password","verified","email","emailVisibility"]:["id"])}),x(()=>(v(l()),a(T)),()=>{_(I,l()?.fields?.filter(s=>!s.hidden&&s.type!="autodate"&&!a(T).includes(s.name))||[])}),x(()=>ea,()=>{_(O,P.getApiExampleUrl(ea.baseURL))}),x(()=>v(l()),()=>{_(q,[{code:200,body:JSON.stringify(P.dummyCollectionRecord(l()),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${l()?.fields?.[0]?.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}])}),Va(),Ha();var M=ne(),J=N(M),la=r(J),V=d(J,2),H=r(V),oa=d(r(H)),na=r(oa),L=d(H,4),ia=d(r(L),5),ca=d(L,2);{var pa=s=>{var e=Ya();i(s,e)};w(ca,s=>{a(y)&&s(pa)})}var z=d(V,2);{let s=ta(()=>(a(O),v(l()),n(()=>`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${a(O)}');

...

// example update data
const data = ${JSON.stringify(U(l()),null,4)};

const record = await pb.collection('${l()?.name}').update('RECORD_ID', data);
    `))),e=ta(()=>(a(O),v(l()),n(()=>`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${a(O)}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(U(l()),null,2)};

final record = await pb.collection('${l()?.name}').update('RECORD_ID', body: body);
    `)));La(z,{get js(){return a(s)},get dart(){return a(e)}})}var Q=d(z,4),G=d(r(Q),2),va=r(G),ba=d(r(va)),ua=r(ba),ha=d(G,2);{var ma=s=>{var e=Xa();i(s,e)};w(ha,s=>{a(E)&&s(ma)})}var K=d(Q,8),_a=d(r(K)),W=r(_a);{var ga=s=>{var e=ae(),c=d(N(e),4),b=r(c),h=r(b),R=r(h);{var C=u=>{var f=Za();i(u,f)},D=Qa(()=>(v(l()),n(()=>l()?.fields?.find(u=>u.name=="emailVisibility")?.required))),A=u=>{var f=$a();i(u,f)};w(R,u=>{a(D)?u(C):u(A,!1)})}i(s,e)};w(W,s=>{a(y)&&s(ga)})}var ya=d(W);B(ya,1,()=>a(I),s=>s.name,(s,e)=>{var c=de(),b=r(c),h=r(b),R=r(h);{var C=t=>{var o=ee();i(t,o)},D=t=>{var o=te();i(t,o)};w(R,t=>{a(e),n(()=>a(e).required)?t(C):t(D,!1)})}var A=d(R,2),u=r(A),f=d(b),Ra=r(f),Ta=r(Ra),Fa=d(f),qa=r(Fa);{var Ca=t=>{var o=k("Plain text value.");i(t,o)},Da=t=>{var o=k("Number value.");i(t,o)},Aa=t=>{var o=k("JSON array or object.");i(t,o)},Na=t=>{var o=k("Email address.");i(t,o)},Ba=t=>{var o=k("URL address.");i(t,o)},ja=t=>{var o=se(),Ua=N(o);Ua.textContent='{"lon":x,"lat":y}',i(t,o)},Ea=t=>{var o=re();i(t,o)},Ia=t=>{var o=k();S(()=>g(o,`Relation record ${a(e),n(()=>a(e).maxSelect==1?"id":"ids")??""}.`)),i(t,o)};w(qa,t=>{a(e),n(()=>a(e).type==="text")?t(Ca):(a(e),n(()=>a(e).type==="number")?t(Da,1):(a(e),n(()=>a(e).type==="json")?t(Aa,2):(a(e),n(()=>a(e).type==="email")?t(Na,3):(a(e),n(()=>a(e).type==="url")?t(Ba,4):(a(e),n(()=>a(e).type==="geoPoint")?t(ja,5):(a(e),n(()=>a(e).type==="file")?t(Ea,6):(a(e),n(()=>a(e).type==="relation")&&t(Ia,7))))))))})}S(t=>{g(u,(a(e),n(()=>a(e).name))),g(Ta,t)},[()=>(v(P),a(e),n(()=>P.getFieldValueType(a(e))))]),i(s,c)});var Y=d(K,4),fa=d(r(Y)),X=r(fa),xa=d(r(X),2),Z=d(r(xa));sa(Z,{content:"?expand=relField1,relField2.subRelField21"});var $=d(Z,6);$.textContent='"expand": {"relField1": {...}, ...}';var wa=d($,6),ka=d(r(wa));ka.textContent='"<collectionId>:<id>"';var Oa=d(X);Wa(Oa,{});var Sa=d(Y,4),aa=r(Sa);B(aa,5,()=>a(q),s=>s.code,(s,e)=>{var c=le();let b;var h=r(c);S(()=>{b=ra(c,1,"tab-item",null,b,{active:a(F)===a(e).code}),g(h,(a(e),n(()=>a(e).code)))}),Ga("click",c,()=>_(F,a(e).code)),i(s,c)});var Pa=d(aa,2);B(Pa,5,()=>a(q),s=>s.code,(s,e)=>{var c=oe();let b;var h=r(c);sa(h,{get content(){return a(e),n(()=>a(e).body)}}),S(()=>b=ra(c,1,"tab-item",null,b,{active:a(F)===a(e).code})),i(s,c)}),S(()=>{g(la,`Update (${v(l()),n(()=>l().name)??""})`),g(na,(v(l()),n(()=>l().name))),Ka(ia,"href",n(()=>"https://pocketbase.io/docs/files-handling")),g(ua,(v(l()),n(()=>l().name)))}),i(da,M),za()}export{pe as default};
