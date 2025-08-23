import{S as Tt,i as St,s as Mt,V as Pt,X as ce,W as $t,h as o,d as $e,t as he,a as ve,I as ae,Z as Ve,_ as pt,C as At,$ as Ft,D as Lt,l as r,n as i,m as qe,u as a,A as _,v as b,c as Te,w,J as we,p as Ht,k as Se,o as Ot,L as qt,H as fe}from"./index-DEklF9Fo.js";import{F as Rt}from"./FieldsQueryParam-Bgz6KuWq.js";function mt(s,e,t){const l=s.slice();return l[10]=e[t],l}function bt(s,e,t){const l=s.slice();return l[10]=e[t],l}function _t(s,e,t){const l=s.slice();return l[15]=e[t],l}function kt(s){let e;return{c(){e=a("p"),e.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",w(e,"class","txt-hint txt-sm txt-right")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function yt(s){let e,t,l,c,p,m,u,f,h,y,C,B,S,q,O,P,E,J,M,W,A,T,k,F,ee,K,U,oe,X,Y,Z;function ue(v,$){var V,z,H;return $&1&&(m=null),m==null&&(m=!!((H=(z=(V=v[0])==null?void 0:V.fields)==null?void 0:z.find(xt))!=null&&H.required)),m?Nt:Bt}let te=ue(s,-1),D=te(s);function x(v,$){var V,z,H;return $&1&&(E=null),E==null&&(E=!!((H=(z=(V=v[0])==null?void 0:V.fields)==null?void 0:z.find(Zt))!=null&&H.required)),E?It:Vt}let G=x(s,-1),L=G(s);return{c(){e=a("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Auth specific fields</td>',t=b(),l=a("tr"),c=a("td"),p=a("div"),D.c(),u=b(),f=a("span"),f.textContent="email",h=b(),y=a("td"),y.innerHTML='<span class="label">String</span>',C=b(),B=a("td"),B.textContent="Auth record email address.",S=b(),q=a("tr"),O=a("td"),P=a("div"),L.c(),J=b(),M=a("span"),M.textContent="emailVisibility",W=b(),A=a("td"),A.innerHTML='<span class="label">Boolean</span>',T=b(),k=a("td"),k.textContent="Whether to show/hide the auth record email when fetching the record data.",F=b(),ee=a("tr"),ee.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Auth record password.</td>',K=b(),U=a("tr"),U.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Auth record password confirmation.</td>',oe=b(),X=a("tr"),X.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by superusers or auth records with &quot;Manage&quot; access.</td>`,Y=b(),Z=a("tr"),Z.innerHTML='<td colspan="3" class="txt-hint txt-bold">Other fields</td>',w(p,"class","inline-flex"),w(P,"class","inline-flex")},m(v,$){r(v,e,$),r(v,t,$),r(v,l,$),i(l,c),i(c,p),D.m(p,null),i(p,u),i(p,f),i(l,h),i(l,y),i(l,C),i(l,B),r(v,S,$),r(v,q,$),i(q,O),i(O,P),L.m(P,null),i(P,J),i(P,M),i(q,W),i(q,A),i(q,T),i(q,k),r(v,F,$),r(v,ee,$),r(v,K,$),r(v,U,$),r(v,oe,$),r(v,X,$),r(v,Y,$),r(v,Z,$)},p(v,$){te!==(te=ue(v,$))&&(D.d(1),D=te(v),D&&(D.c(),D.m(p,u))),G!==(G=x(v,$))&&(L.d(1),L=G(v),L&&(L.c(),L.m(P,J)))},d(v){v&&(o(e),o(t),o(l),o(S),o(q),o(F),o(ee),o(K),o(U),o(oe),o(X),o(Y),o(Z)),D.d(),L.d()}}}function Bt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Nt(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Vt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function It(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function jt(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Jt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Dt(s){let e,t=s[15].maxSelect===1?"id":"ids",l,c,p=Array.isArray(s[15].collectionIds)&&s[15].collectionIds.length>0,m,u=p&&ht();return{c(){e=_("Relation record "),l=_(t),c=_(`.
                        `),u&&u.c(),m=qt()},m(f,h){r(f,e,h),r(f,l,h),r(f,c,h),u&&u.m(f,h),r(f,m,h)},p(f,h){h&32&&t!==(t=f[15].maxSelect===1?"id":"ids")&&ae(l,t),h&32&&(p=Array.isArray(f[15].collectionIds)&&f[15].collectionIds.length>0),p?u||(u=ht(),u.c(),u.m(m.parentNode,m)):u&&(u.d(1),u=null)},d(f){f&&(o(e),o(l),o(c),o(m)),u&&u.d(f)}}}function Et(s){let e,t,l,c,p,m,u,f,h;return{c(){e=_("File object."),t=a("br"),l=_(`
                        Set to empty value (`),c=a("code"),c.textContent="null",p=_(", "),m=a("code"),m.textContent='""',u=_(" or "),f=a("code"),f.textContent="[]",h=_(`) to delete
                        already uploaded file(s).`)},m(y,C){r(y,e,C),r(y,t,C),r(y,l,C),r(y,c,C),r(y,p,C),r(y,m,C),r(y,u,C),r(y,f,C),r(y,h,C)},p:fe,d(y){y&&(o(e),o(t),o(l),o(c),o(p),o(m),o(u),o(f),o(h))}}}function Ut(s){let e,t;return{c(){e=a("code"),e.textContent='{"lon":x,"lat":y}',t=_(" object.")},m(l,c){r(l,e,c),r(l,t,c)},p:fe,d(l){l&&(o(e),o(t))}}}function Qt(s){let e;return{c(){e=_("URL address.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function Wt(s){let e;return{c(){e=_("Email address.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function zt(s){let e;return{c(){e=_("JSON array or object.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function Kt(s){let e;return{c(){e=_("Number value.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function Xt(s){let e,t,l=s[15].autogeneratePattern&&vt();return{c(){e=_(`Plain text value.
                        `),l&&l.c(),t=qt()},m(c,p){r(c,e,p),l&&l.m(c,p),r(c,t,p)},p(c,p){c[15].autogeneratePattern?l||(l=vt(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(c){c&&(o(e),o(t)),l&&l.d(c)}}}function ht(s){let e,t,l;return{c(){e=a("span"),t=_("Format: "),l=a("code"),l.textContent='"<collectionId>:<id>"',w(e,"class","txt-hint")},m(c,p){r(c,e,p),i(e,t),i(e,l)},d(c){c&&o(e)}}}function vt(s){let e;return{c(){e=_("It is autogenerated if not set.")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function wt(s,e){let t,l,c,p,m,u=e[15].name+"",f,h,y,C,B=we.getFieldValueType(e[15])+"",S,q,O,P;function E(k,F){return!k[15].required||k[15].type=="text"&&k[15].autogeneratePattern?Jt:jt}let J=E(e),M=J(e);function W(k,F){if(k[15].type==="text")return Xt;if(k[15].type==="number")return Kt;if(k[15].type==="json")return zt;if(k[15].type==="email")return Wt;if(k[15].type==="url")return Qt;if(k[15].type==="geoPoint")return Ut;if(k[15].type==="file")return Et;if(k[15].type==="relation")return Dt}let A=W(e),T=A&&A(e);return{key:s,first:null,c(){t=a("tr"),l=a("td"),c=a("div"),M.c(),p=b(),m=a("span"),f=_(u),h=b(),y=a("td"),C=a("span"),S=_(B),q=b(),O=a("td"),T&&T.c(),P=b(),w(c,"class","inline-flex"),w(C,"class","label"),this.first=t},m(k,F){r(k,t,F),i(t,l),i(l,c),M.m(c,null),i(c,p),i(c,m),i(m,f),i(t,h),i(t,y),i(y,C),i(C,S),i(t,q),i(t,O),T&&T.m(O,null),i(t,P)},p(k,F){e=k,J!==(J=E(e))&&(M.d(1),M=J(e),M&&(M.c(),M.m(c,p))),F&32&&u!==(u=e[15].name+"")&&ae(f,u),F&32&&B!==(B=we.getFieldValueType(e[15])+"")&&ae(S,B),A===(A=W(e))&&T?T.p(e,F):(T&&T.d(1),T=A&&A(e),T&&(T.c(),T.m(O,null)))},d(k){k&&o(t),M.d(),T&&T.d()}}}function gt(s,e){let t,l=e[10].code+"",c,p,m,u;function f(){return e[9](e[10])}return{key:s,first:null,c(){t=a("button"),c=_(l),p=b(),w(t,"class","tab-item"),Se(t,"active",e[2]===e[10].code),this.first=t},m(h,y){r(h,t,y),i(t,c),i(t,p),m||(u=Ot(t,"click",f),m=!0)},p(h,y){e=h,y&8&&l!==(l=e[10].code+"")&&ae(c,l),y&12&&Se(t,"active",e[2]===e[10].code)},d(h){h&&o(t),m=!1,u()}}}function Ct(s,e){let t,l,c,p;return l=new $t({props:{content:e[10].body}}),{key:s,first:null,c(){t=a("div"),Te(l.$$.fragment),c=b(),w(t,"class","tab-item"),Se(t,"active",e[2]===e[10].code),this.first=t},m(m,u){r(m,t,u),qe(l,t,null),i(t,c),p=!0},p(m,u){e=m;const f={};u&8&&(f.content=e[10].body),l.$set(f),(!p||u&12)&&Se(t,"active",e[2]===e[10].code)},i(m){p||(ve(l.$$.fragment,m),p=!0)},o(m){he(l.$$.fragment,m),p=!1},d(m){m&&o(t),$e(l)}}}function Yt(s){var st,at,ot,rt;let e,t,l=s[0].name+"",c,p,m,u,f,h,y,C=s[0].name+"",B,S,q,O,P,E,J,M,W,A,T,k,F,ee,K,U,oe,X,Y=s[0].name+"",Z,ue,te,D,x,G,L,v,$,V,z,H=[],Ie=new Map,Me,pe,Pe,le,Ae,je,me,ne,Fe,Je,Le,De,R,Ee,re,Ue,Qe,We,He,ze,Oe,Ke,Xe,Ye,Re,Ze,xe,de,Be,be,Ne,ie,_e,Q=[],Ge=new Map,et,ke,I=[],tt=new Map,se;M=new Pt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${s[4]}');

...

// example create data
const data = ${JSON.stringify(s[7](s[0]),null,4)};

const record = await pb.collection('${(st=s[0])==null?void 0:st.name}').create(data);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(at=s[0])==null?void 0:at.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${s[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(s[7](s[0]),null,2)};

final record = await pb.collection('${(ot=s[0])==null?void 0:ot.name}').create(body: body);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=s[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:"")}});let j=s[6]&&kt(),N=s[1]&&yt(s),ge=ce(s[5]);const lt=n=>n[15].name;for(let n=0;n<ge.length;n+=1){let d=_t(s,ge,n),g=lt(d);Ie.set(g,H[n]=wt(g,d))}re=new $t({props:{content:"?expand=relField1,relField2.subRelField"}}),de=new Rt({});let Ce=ce(s[3]);const nt=n=>n[10].code;for(let n=0;n<Ce.length;n+=1){let d=bt(s,Ce,n),g=nt(d);Ge.set(g,Q[n]=gt(g,d))}let ye=ce(s[3]);const it=n=>n[10].code;for(let n=0;n<ye.length;n+=1){let d=mt(s,ye,n),g=it(d);tt.set(g,I[n]=Ct(g,d))}return{c(){e=a("h3"),t=_("Create ("),c=_(l),p=_(")"),m=b(),u=a("div"),f=a("p"),h=_("Create a new "),y=a("strong"),B=_(C),S=_(" record."),q=b(),O=a("p"),O.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,P=b(),E=a("p"),E.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,J=b(),Te(M.$$.fragment),W=b(),A=a("h6"),A.textContent="API details",T=b(),k=a("div"),F=a("strong"),F.textContent="POST",ee=b(),K=a("div"),U=a("p"),oe=_("/api/collections/"),X=a("strong"),Z=_(Y),ue=_("/records"),te=b(),j&&j.c(),D=b(),x=a("div"),x.textContent="Body Parameters",G=b(),L=a("table"),v=a("thead"),v.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',$=b(),V=a("tbody"),N&&N.c(),z=b();for(let n=0;n<H.length;n+=1)H[n].c();Me=b(),pe=a("div"),pe.textContent="Query parameters",Pe=b(),le=a("table"),Ae=a("thead"),Ae.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',je=b(),me=a("tbody"),ne=a("tr"),Fe=a("td"),Fe.textContent="expand",Je=b(),Le=a("td"),Le.innerHTML='<span class="label">String</span>',De=b(),R=a("td"),Ee=_(`Auto expand relations when returning the created record. Ex.:
                `),Te(re.$$.fragment),Ue=_(`
                Supports up to 6-levels depth nested relations expansion. `),Qe=a("br"),We=_(`
                The expanded relations will be appended to the record under the
                `),He=a("code"),He.textContent="expand",ze=_(" property (eg. "),Oe=a("code"),Oe.textContent='"expand": {"relField1": {...}, ...}',Ke=_(`).
                `),Xe=a("br"),Ye=_(`
                Only the relations to which the request user has permissions to `),Re=a("strong"),Re.textContent="view",Ze=_(" will be expanded."),xe=b(),Te(de.$$.fragment),Be=b(),be=a("div"),be.textContent="Responses",Ne=b(),ie=a("div"),_e=a("div");for(let n=0;n<Q.length;n+=1)Q[n].c();et=b(),ke=a("div");for(let n=0;n<I.length;n+=1)I[n].c();w(e,"class","m-b-sm"),w(u,"class","content txt-lg m-b-sm"),w(A,"class","m-b-xs"),w(F,"class","label label-primary"),w(K,"class","content"),w(k,"class","alert alert-success"),w(x,"class","section-title"),w(L,"class","table-compact table-border m-b-base"),w(pe,"class","section-title"),w(le,"class","table-compact table-border m-b-base"),w(be,"class","section-title"),w(_e,"class","tabs-header compact combined left"),w(ke,"class","tabs-content"),w(ie,"class","tabs")},m(n,d){r(n,e,d),i(e,t),i(e,c),i(e,p),r(n,m,d),r(n,u,d),i(u,f),i(f,h),i(f,y),i(y,B),i(f,S),i(u,q),i(u,O),i(u,P),i(u,E),r(n,J,d),qe(M,n,d),r(n,W,d),r(n,A,d),r(n,T,d),r(n,k,d),i(k,F),i(k,ee),i(k,K),i(K,U),i(U,oe),i(U,X),i(X,Z),i(U,ue),i(k,te),j&&j.m(k,null),r(n,D,d),r(n,x,d),r(n,G,d),r(n,L,d),i(L,v),i(L,$),i(L,V),N&&N.m(V,null),i(V,z);for(let g=0;g<H.length;g+=1)H[g]&&H[g].m(V,null);r(n,Me,d),r(n,pe,d),r(n,Pe,d),r(n,le,d),i(le,Ae),i(le,je),i(le,me),i(me,ne),i(ne,Fe),i(ne,Je),i(ne,Le),i(ne,De),i(ne,R),i(R,Ee),qe(re,R,null),i(R,Ue),i(R,Qe),i(R,We),i(R,He),i(R,ze),i(R,Oe),i(R,Ke),i(R,Xe),i(R,Ye),i(R,Re),i(R,Ze),i(me,xe),qe(de,me,null),r(n,Be,d),r(n,be,d),r(n,Ne,d),r(n,ie,d),i(ie,_e);for(let g=0;g<Q.length;g+=1)Q[g]&&Q[g].m(_e,null);i(ie,et),i(ie,ke);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(ke,null);se=!0},p(n,[d]){var dt,ct,ft,ut;(!se||d&1)&&l!==(l=n[0].name+"")&&ae(c,l),(!se||d&1)&&C!==(C=n[0].name+"")&&ae(B,C);const g={};d&19&&(g.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${n[4]}');

...

// example create data
const data = ${JSON.stringify(n[7](n[0]),null,4)};

const record = await pb.collection('${(dt=n[0])==null?void 0:dt.name}').create(data);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ct=n[0])==null?void 0:ct.name}').requestVerification('test@example.com');
`:"")),d&19&&(g.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${n[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(n[7](n[0]),null,2)};

final record = await pb.collection('${(ft=n[0])==null?void 0:ft.name}').create(body: body);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ut=n[0])==null?void 0:ut.name}').requestVerification('test@example.com');
`:"")),M.$set(g),(!se||d&1)&&Y!==(Y=n[0].name+"")&&ae(Z,Y),n[6]?j||(j=kt(),j.c(),j.m(k,null)):j&&(j.d(1),j=null),n[1]?N?N.p(n,d):(N=yt(n),N.c(),N.m(V,z)):N&&(N.d(1),N=null),d&32&&(ge=ce(n[5]),H=Ve(H,d,lt,1,n,ge,Ie,V,pt,wt,null,_t)),d&12&&(Ce=ce(n[3]),Q=Ve(Q,d,nt,1,n,Ce,Ge,_e,pt,gt,null,bt)),d&12&&(ye=ce(n[3]),At(),I=Ve(I,d,it,1,n,ye,tt,ke,Ft,Ct,null,mt),Lt())},i(n){if(!se){ve(M.$$.fragment,n),ve(re.$$.fragment,n),ve(de.$$.fragment,n);for(let d=0;d<ye.length;d+=1)ve(I[d]);se=!0}},o(n){he(M.$$.fragment,n),he(re.$$.fragment,n),he(de.$$.fragment,n);for(let d=0;d<I.length;d+=1)he(I[d]);se=!1},d(n){n&&(o(e),o(m),o(u),o(J),o(W),o(A),o(T),o(k),o(D),o(x),o(G),o(L),o(Me),o(pe),o(Pe),o(le),o(Be),o(be),o(Ne),o(ie)),$e(M,n),j&&j.d(),N&&N.d();for(let d=0;d<H.length;d+=1)H[d].d();$e(re),$e(de);for(let d=0;d<Q.length;d+=1)Q[d].d();for(let d=0;d<I.length;d+=1)I[d].d()}}}const Zt=s=>s.name=="emailVisibility",xt=s=>s.name=="email";function Gt(s,e,t){let l,c,p,m,u,{collection:f}=e,h=200,y=[];function C(S){let q=we.dummyCollectionSchemaData(S,!0);return l&&(q.password="12345678",q.passwordConfirm="12345678",delete q.verified),q}const B=S=>t(2,h=S.code);return s.$$set=S=>{"collection"in S&&t(0,f=S.collection)},s.$$.update=()=>{var S,q,O;s.$$.dirty&1&&t(1,l=f.type==="auth"),s.$$.dirty&1&&t(6,c=(f==null?void 0:f.createRule)===null),s.$$.dirty&2&&t(8,p=l?["password","verified","email","emailVisibility"]:[]),s.$$.dirty&257&&t(5,m=((S=f==null?void 0:f.fields)==null?void 0:S.filter(P=>!P.hidden&&P.type!="autodate"&&!p.includes(P.name)))||[]),s.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(we.dummyCollectionRecord(f),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${(O=(q=f==null?void 0:f.fields)==null?void 0:q[0])==null?void 0:O.name}": {
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
            `}])},t(4,u=we.getApiExampleUrl(Ht.baseURL)),[f,l,h,y,u,m,c,C,p,B]}class ll extends Tt{constructor(e){super(),St(this,e,Gt,Yt,Mt,{collection:0})}}export{ll as default};
