import{p as Ma,a as za,l as q,M as b,d as a,m as f,b as ba,e as Ha,i as Qa,f as p,h as S,j as r,k as s,_ as Ga,E as ua,H as h,a0 as G,$ as _a,u as O,w as i,z as Ka,a2 as n,a3 as K,O as P,s as g,L as x,a4 as A,G as ma,x as Wa,D as Ya}from"./index-Bek02XaP.js";import{F as Xa}from"./FieldsQueryParam-D_NcjopN.js";var Za=p('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),$a=p('<span class="label label-success">Required</span>'),ae=p('<span class="label label-warning">Optional</span>'),ee=p('<span class="label label-success">Required</span>'),te=p('<span class="label label-warning">Optional</span>'),se=p('<tr><td colspan="3" class="txt-hint txt-bold">Auth specific fields</td></tr> <tr><td><div class="inline-flex"><!> <span>email</span></div></td><td><span class="label">String</span></td><td>Auth record email address.</td></tr> <tr><td><div class="inline-flex"><!> <span>emailVisibility</span></div></td><td><span class="label">Boolean</span></td><td>Whether to show/hide the auth record email when fetching the record data.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td><td><span class="label">String</span></td><td>Auth record password.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td><td><span class="label">String</span></td><td>Auth record password confirmation.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td><td><span class="label">Boolean</span></td><td>Indicates whether the auth record is verified or not. <br/> This field can be set only by superusers or auth records with "Manage" access.</td></tr> <tr><td colspan="3" class="txt-hint txt-bold">Other fields</td></tr>',1),re=p('<span class="label label-warning">Optional</span>'),oe=p('<span class="label label-success">Required</span>'),le=p("Plain text value. <!>",1),ne=p("<code></code> object.",1),de=p(`File object.<br/> Set to empty value (<code>null</code>, <code>""</code> or <code>[]</code>) to delete
                        already uploaded file(s).`,1),ie=p('<span class="txt-hint">Format: <code></code></span>'),ce=p(" <!>",1),pe=p('<tr><td><div class="inline-flex"><!> <span> </span></div></td><td><span class="label"> </span></td><td><!></td></tr>'),ve=p("<button> </button>"),be=p("<div><!></div>"),ue=p('<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Create a new <strong> </strong> record.</p> <p>Body parameters could be sent as <code>application/json</code> or <code>multipart/form-data</code>.</p> <p>File upload is supported only via <code>multipart/form-data</code>. <br/> For more info and examples you could check the detailed <a target="_blank" rel="noopener noreferrer">Files upload and handling docs</a>.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong> </strong>/records</p></div> <!></div> <div class="section-title">Body Parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="50%">Description</th></tr></thead><tbody><!><!></tbody></table> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand relations when returning the created record. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to the record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>',1);function he(ha,W){Ma(W,!1);const _=f(),Y=f(),T=f(),X=f(),k=f();let o=za(W,"collection",8),B=f(200),j=f([]);function Z(l){let e=P.dummyCollectionSchemaData(l,!0);return a(_)&&(e.password="12345678",e.passwordConfirm="12345678",delete e.verified),e}q(()=>b(o()),()=>{g(_,o().type==="auth")}),q(()=>b(o()),()=>{g(Y,o()?.createRule===null)}),q(()=>a(_),()=>{g(T,a(_)?["password","verified","email","emailVisibility"]:[])}),q(()=>(b(o()),a(T)),()=>{g(X,o()?.fields?.filter(l=>!l.hidden&&l.type!="autodate"&&!a(T).includes(l.name))||[])}),q(()=>ba,()=>{g(k,P.getApiExampleUrl(ba.baseURL))}),q(()=>b(o()),()=>{g(j,[{code:200,body:JSON.stringify(P.dummyCollectionRecord(o()),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${o()?.fields?.[0]?.name}": {
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
            `}])}),Ha(),Qa();var $=ue(),aa=S($),ya=s(aa),ea=r(aa,2),ta=s(ea),fa=r(s(ta)),ga=s(fa),xa=r(ta,4),wa=r(s(xa),5),sa=r(ea,2);{let l=ua(()=>(a(k),b(o()),a(_),n(()=>`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${a(k)}');

...

// example create data
const data = ${JSON.stringify(Z(o()),null,4)};

const record = await pb.collection('${o()?.name}').create(data);
`+(a(_)?`
// (optional) send an email verification request
await pb.collection('${o()?.name}').requestVerification('test@example.com');
`:"")))),e=ua(()=>(a(k),b(o()),a(_),n(()=>`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${a(k)}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Z(o()),null,2)};

final record = await pb.collection('${o()?.name}').create(body: body);
`+(a(_)?`
// (optional) send an email verification request
await pb.collection('${o()?.name}').requestVerification('test@example.com');
`:""))));Ga(sa,{get js(){return a(l)},get dart(){return a(e)}})}var ra=r(sa,4),oa=r(s(ra),2),qa=s(oa),ka=r(s(qa)),Fa=s(ka),Sa=r(oa,2);{var Oa=l=>{var e=Za();i(l,e)};h(Sa,l=>{a(Y)&&l(Oa)})}var la=r(ra,4),Pa=r(s(la)),na=s(Pa);{var Aa=l=>{var e=se(),v=r(S(e),2),u=s(v),y=s(u),R=s(y);{var I=c=>{var m=$a();i(c,m)},N=K(()=>(b(o()),n(()=>o()?.fields?.find(c=>c.name=="email")?.required))),V=c=>{var m=ae();i(c,m)};h(R,c=>{a(N)?c(I):c(V,!1)})}var D=r(v,2),C=s(D),E=s(C),J=s(E);{var U=c=>{var m=ee();i(c,m)},L=K(()=>(b(o()),n(()=>o()?.fields?.find(c=>c.name=="emailVisibility")?.required))),M=c=>{var m=te();i(c,m)};h(J,c=>{a(L)?c(U):c(M,!1)})}i(l,e)};h(na,l=>{a(_)&&l(Aa)})}var Ra=r(na);G(Ra,1,()=>a(X),l=>l.name,(l,e)=>{var v=pe(),u=s(v),y=s(u),R=s(y);{var I=t=>{var d=re();i(t,d)},N=t=>{var d=oe();i(t,d)};h(R,t=>{a(e),n(()=>!a(e).required||a(e).type=="text"&&a(e).autogeneratePattern)?t(I):t(N,!1)})}var V=r(R,2),D=s(V),C=r(u),E=s(C),J=s(E),U=r(C),L=s(U);{var M=t=>{var d=le(),w=r(S(d));{var z=F=>{var H=A("It is autogenerated if not set.");i(F,H)};h(w,F=>{a(e),n(()=>a(e).autogeneratePattern)&&F(z)})}i(t,d)},c=t=>{var d=A("Number value.");i(t,d)},m=t=>{var d=A("JSON array or object.");i(t,d)},Va=t=>{var d=A("Email address.");i(t,d)},Da=t=>{var d=A("URL address.");i(t,d)},Ea=t=>{var d=ne(),w=S(d);w.textContent='{"lon":x,"lat":y}',i(t,d)},Ja=t=>{var d=de();i(t,d)},Ua=t=>{var d=ce(),w=S(d),z=r(w);{var F=Q=>{var va=ie(),La=r(s(va));La.textContent='"<collectionId>:<id>"',i(Q,va)},H=K(()=>(a(e),n(()=>Array.isArray(a(e).collectionIds)&&a(e).collectionIds.length>0)));h(z,Q=>{a(H)&&Q(F)})}O(()=>x(w,`Relation record ${a(e),n(()=>a(e).maxSelect===1?"id":"ids")??""}. `)),i(t,d)};h(L,t=>{a(e),n(()=>a(e).type==="text")?t(M):(a(e),n(()=>a(e).type==="number")?t(c,1):(a(e),n(()=>a(e).type==="json")?t(m,2):(a(e),n(()=>a(e).type==="email")?t(Va,3):(a(e),n(()=>a(e).type==="url")?t(Da,4):(a(e),n(()=>a(e).type==="geoPoint")?t(Ea,5):(a(e),n(()=>a(e).type==="file")?t(Ja,6):(a(e),n(()=>a(e).type==="relation")&&t(Ua,7))))))))})}O(t=>{x(D,(a(e),n(()=>a(e).name))),x(J,t)},[()=>(b(P),a(e),n(()=>P.getFieldValueType(a(e))))]),i(l,v)});var da=r(la,4),Ca=r(s(da)),ia=s(Ca),Ta=r(s(ia),2),ca=r(s(Ta));_a(ca,{content:"?expand=relField1,relField2.subRelField"});var Ba=r(ca,6);Ba.textContent='"expand": {"relField1": {...}, ...}';var ja=r(ia);Xa(ja,{});var Ia=r(da,4),pa=s(Ia);G(pa,5,()=>a(j),l=>l.code,(l,e)=>{var v=ve();let u;var y=s(v);O(()=>{u=ma(v,1,"tab-item",null,u,{active:a(B)===a(e).code}),x(y,(a(e),n(()=>a(e).code)))}),Wa("click",v,()=>g(B,a(e).code)),i(l,v)});var Na=r(pa,2);G(Na,5,()=>a(j),l=>l.code,(l,e)=>{var v=be();let u;var y=s(v);_a(y,{get content(){return a(e),n(()=>a(e).body)}}),O(()=>u=ma(v,1,"tab-item",null,u,{active:a(B)===a(e).code})),i(l,v)}),O(()=>{x(ya,`Create (${b(o()),n(()=>o().name)??""})`),x(ga,(b(o()),n(()=>o().name))),Ya(wa,"href",n(()=>"https://pocketbase.io/docs/files-handling")),x(Fa,(b(o()),n(()=>o().name)))}),i(ha,$),Ka()}export{he as default};
