import{S as Ht,i as Pt,s as Lt,V as Dt,X as de,W as Rt,h as d,d as we,t as he,a as ye,I as ee,Z as xe,_ as vt,C as Ft,$ as Bt,D as Nt,l as o,n,m as Ce,u as i,A as _,v as p,c as Te,w as k,J as ke,p as At,k as $e,o as It,H as te}from"./index-CeAsFBD0.js";import{F as Et}from"./FieldsQueryParam-DH70J0kQ.js";function gt(r,e,t){const a=r.slice();return a[10]=e[t],a}function wt(r,e,t){const a=r.slice();return a[10]=e[t],a}function Ct(r,e,t){const a=r.slice();return a[15]=e[t],a}function Tt(r){let e;return{c(){e=i("p"),e.innerHTML=`<em>Note that in case of a password change all previously issued tokens for the current record
                will be automatically invalidated and if you want your user to remain signed in you need to
                reauthenticate manually after the update call.</em>`},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function $t(r){let e;return{c(){e=i("p"),e.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",k(e,"class","txt-hint txt-sm txt-right")},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function Mt(r){let e,t,a,b,f,c,u,m,S,T,P,L,$,M,R,D,J,j,O,H,F,v,g,w;function V(h,C){var le,W,ne;return C&1&&(m=null),m==null&&(m=!!((ne=(W=(le=h[0])==null?void 0:le.fields)==null?void 0:W.find(el))!=null&&ne.required)),m?Jt:jt}let Q=V(r,-1),N=Q(r);return{c(){e=i("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Auth specific fields</td>',t=p(),a=i("tr"),a.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>The auth record email address.
                    <br/>
                    This field can be updated only by superusers or auth records with &quot;Manage&quot; access.
                    <br/>
                    Regular accounts can update their email by calling &quot;Request email change&quot;.</td>`,b=p(),f=i("tr"),c=i("td"),u=i("div"),N.c(),S=p(),T=i("span"),T.textContent="emailVisibility",P=p(),L=i("td"),L.innerHTML='<span class="label">Boolean</span>',$=p(),M=i("td"),M.textContent="Whether to show/hide the auth record email when fetching the record data.",R=p(),D=i("tr"),D.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>oldPassword</span></div></td> <td><span class="label">String</span></td> <td>Old auth record password.
                    <br/>
                    This field is required only when changing the record password. Superusers and auth records
                    with &quot;Manage&quot; access can skip this field.</td>`,J=p(),j=i("tr"),j.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>New auth record password.</td>',O=p(),H=i("tr"),H.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>New auth record password confirmation.</td>',F=p(),v=i("tr"),v.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by superusers or auth records with &quot;Manage&quot; access.</td>`,g=p(),w=i("tr"),w.innerHTML='<td colspan="3" class="txt-hint txt-bold">Other fields</td>',k(u,"class","inline-flex")},m(h,C){o(h,e,C),o(h,t,C),o(h,a,C),o(h,b,C),o(h,f,C),n(f,c),n(c,u),N.m(u,null),n(u,S),n(u,T),n(f,P),n(f,L),n(f,$),n(f,M),o(h,R,C),o(h,D,C),o(h,J,C),o(h,j,C),o(h,O,C),o(h,H,C),o(h,F,C),o(h,v,C),o(h,g,C),o(h,w,C)},p(h,C){Q!==(Q=V(h,C))&&(N.d(1),N=Q(h),N&&(N.c(),N.m(u,S)))},d(h){h&&(d(e),d(t),d(a),d(b),d(f),d(R),d(D),d(J),d(j),d(O),d(H),d(F),d(v),d(g),d(w)),N.d()}}}function jt(r){let e;return{c(){e=i("span"),e.textContent="Optional",k(e,"class","label label-warning")},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function Jt(r){let e;return{c(){e=i("span"),e.textContent="Required",k(e,"class","label label-success")},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function Ut(r){let e;return{c(){e=i("span"),e.textContent="Optional",k(e,"class","label label-warning")},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function xt(r){let e;return{c(){e=i("span"),e.textContent="Required",k(e,"class","label label-success")},m(t,a){o(t,e,a)},d(t){t&&d(e)}}}function Vt(r){let e,t=r[15].maxSelect==1?"id":"ids",a,b;return{c(){e=_("Relation record "),a=_(t),b=_(".")},m(f,c){o(f,e,c),o(f,a,c),o(f,b,c)},p(f,c){c&32&&t!==(t=f[15].maxSelect==1?"id":"ids")&&ee(a,t)},d(f){f&&(d(e),d(a),d(b))}}}function Qt(r){let e,t,a,b,f;return{c(){e=_("File object."),t=i("br"),a=_(`
                        Set to `),b=i("code"),b.textContent="null",f=_(" to delete already uploaded file(s).")},m(c,u){o(c,e,u),o(c,t,u),o(c,a,u),o(c,b,u),o(c,f,u)},p:te,d(c){c&&(d(e),d(t),d(a),d(b),d(f))}}}function Wt(r){let e,t;return{c(){e=i("code"),e.textContent='{"lon":x,"lat":y}',t=_(" object.")},m(a,b){o(a,e,b),o(a,t,b)},p:te,d(a){a&&(d(e),d(t))}}}function zt(r){let e;return{c(){e=_("URL address.")},m(t,a){o(t,e,a)},p:te,d(t){t&&d(e)}}}function Kt(r){let e;return{c(){e=_("Email address.")},m(t,a){o(t,e,a)},p:te,d(t){t&&d(e)}}}function Xt(r){let e;return{c(){e=_("JSON array or object.")},m(t,a){o(t,e,a)},p:te,d(t){t&&d(e)}}}function Yt(r){let e;return{c(){e=_("Number value.")},m(t,a){o(t,e,a)},p:te,d(t){t&&d(e)}}}function Zt(r){let e;return{c(){e=_("Plain text value.")},m(t,a){o(t,e,a)},p:te,d(t){t&&d(e)}}}function St(r,e){let t,a,b,f,c,u=e[15].name+"",m,S,T,P,L=ke.getFieldValueType(e[15])+"",$,M,R,D;function J(g,w){return g[15].required?xt:Ut}let j=J(e),O=j(e);function H(g,w){if(g[15].type==="text")return Zt;if(g[15].type==="number")return Yt;if(g[15].type==="json")return Xt;if(g[15].type==="email")return Kt;if(g[15].type==="url")return zt;if(g[15].type==="geoPoint")return Wt;if(g[15].type==="file")return Qt;if(g[15].type==="relation")return Vt}let F=H(e),v=F&&F(e);return{key:r,first:null,c(){t=i("tr"),a=i("td"),b=i("div"),O.c(),f=p(),c=i("span"),m=_(u),S=p(),T=i("td"),P=i("span"),$=_(L),M=p(),R=i("td"),v&&v.c(),D=p(),k(b,"class","inline-flex"),k(P,"class","label"),this.first=t},m(g,w){o(g,t,w),n(t,a),n(a,b),O.m(b,null),n(b,f),n(b,c),n(c,m),n(t,S),n(t,T),n(T,P),n(P,$),n(t,M),n(t,R),v&&v.m(R,null),n(t,D)},p(g,w){e=g,j!==(j=J(e))&&(O.d(1),O=j(e),O&&(O.c(),O.m(b,f))),w&32&&u!==(u=e[15].name+"")&&ee(m,u),w&32&&L!==(L=ke.getFieldValueType(e[15])+"")&&ee($,L),F===(F=H(e))&&v?v.p(e,w):(v&&v.d(1),v=F&&F(e),v&&(v.c(),v.m(R,null)))},d(g){g&&d(t),O.d(),v&&v.d()}}}function Ot(r,e){let t,a=e[10].code+"",b,f,c,u;function m(){return e[9](e[10])}return{key:r,first:null,c(){t=i("button"),b=_(a),f=p(),k(t,"class","tab-item"),$e(t,"active",e[2]===e[10].code),this.first=t},m(S,T){o(S,t,T),n(t,b),n(t,f),c||(u=It(t,"click",m),c=!0)},p(S,T){e=S,T&8&&a!==(a=e[10].code+"")&&ee(b,a),T&12&&$e(t,"active",e[2]===e[10].code)},d(S){S&&d(t),c=!1,u()}}}function qt(r,e){let t,a,b,f;return a=new Rt({props:{content:e[10].body}}),{key:r,first:null,c(){t=i("div"),Te(a.$$.fragment),b=p(),k(t,"class","tab-item"),$e(t,"active",e[2]===e[10].code),this.first=t},m(c,u){o(c,t,u),Ce(a,t,null),n(t,b),f=!0},p(c,u){e=c;const m={};u&8&&(m.content=e[10].body),a.$set(m),(!f||u&12)&&$e(t,"active",e[2]===e[10].code)},i(c){f||(ye(a.$$.fragment,c),f=!0)},o(c){he(a.$$.fragment,c),f=!1},d(c){c&&d(t),we(a)}}}function Gt(r){var _t,ht;let e,t,a=r[0].name+"",b,f,c,u,m,S,T,P=r[0].name+"",L,$,M,R,D,J,j,O,H,F,v,g,w,V,Q,N,h,C,le,W=r[0].name+"",ne,Ve,Me,Qe,Se,oe,Oe,re,qe,ce,Re,z,He,We,K,Pe,U=[],ze=new Map,Le,ue,De,X,Fe,Ke,pe,Y,Be,Xe,Ne,Ye,q,Ze,ae,Ge,et,tt,Ae,lt,Ie,nt,Ee,at,it,st,ie,dt,je,ot,rt,se,Je,fe,Ue,Z,be,x=[],ct=new Map,ut,me,A=[],pt=new Map,G,I=r[1]&&Tt();H=new Dt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${r[4]}');

...

// example update data
const data = ${JSON.stringify(r[7](r[0]),null,4)};

const record = await pb.collection('${(_t=r[0])==null?void 0:_t.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${r[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(r[7](r[0]),null,2)};

final record = await pb.collection('${(ht=r[0])==null?void 0:ht.name}').update('RECORD_ID', body: body);
    `}});let E=r[6]&&$t(),B=r[1]&&Mt(r),ve=de(r[5]);const ft=l=>l[15].name;for(let l=0;l<ve.length;l+=1){let s=Ct(r,ve,l),y=ft(s);ze.set(y,U[l]=St(y,s))}ae=new Rt({props:{content:"?expand=relField1,relField2.subRelField21"}}),se=new Et({});let ge=de(r[3]);const bt=l=>l[10].code;for(let l=0;l<ge.length;l+=1){let s=wt(r,ge,l),y=bt(s);ct.set(y,x[l]=Ot(y,s))}let _e=de(r[3]);const mt=l=>l[10].code;for(let l=0;l<_e.length;l+=1){let s=gt(r,_e,l),y=mt(s);pt.set(y,A[l]=qt(y,s))}return{c(){e=i("h3"),t=_("Update ("),b=_(a),f=_(")"),c=p(),u=i("div"),m=i("p"),S=_("Update a single "),T=i("strong"),L=_(P),$=_(" record."),M=p(),R=i("p"),R.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,D=p(),J=i("p"),J.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,j=p(),I&&I.c(),O=p(),Te(H.$$.fragment),F=p(),v=i("h6"),v.textContent="API details",g=p(),w=i("div"),V=i("strong"),V.textContent="PATCH",Q=p(),N=i("div"),h=i("p"),C=_("/api/collections/"),le=i("strong"),ne=_(W),Ve=_("/records/"),Me=i("strong"),Me.textContent=":id",Qe=p(),E&&E.c(),Se=p(),oe=i("div"),oe.textContent="Path parameters",Oe=p(),re=i("table"),re.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to update.</td></tr></tbody>',qe=p(),ce=i("div"),ce.textContent="Body Parameters",Re=p(),z=i("table"),He=i("thead"),He.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',We=p(),K=i("tbody"),B&&B.c(),Pe=p();for(let l=0;l<U.length;l+=1)U[l].c();Le=p(),ue=i("div"),ue.textContent="Query parameters",De=p(),X=i("table"),Fe=i("thead"),Fe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Ke=p(),pe=i("tbody"),Y=i("tr"),Be=i("td"),Be.textContent="expand",Xe=p(),Ne=i("td"),Ne.innerHTML='<span class="label">String</span>',Ye=p(),q=i("td"),Ze=_(`Auto expand relations when returning the updated record. Ex.:
                `),Te(ae.$$.fragment),Ge=_(`
                Supports up to 6-levels depth nested relations expansion. `),et=i("br"),tt=_(`
                The expanded relations will be appended to the record under the
                `),Ae=i("code"),Ae.textContent="expand",lt=_(" property (eg. "),Ie=i("code"),Ie.textContent='"expand": {"relField1": {...}, ...}',nt=_(`). Only
                the relations that the user has permissions to `),Ee=i("strong"),Ee.textContent="view",at=_(` will be expanded.
                `),it=i("br"),st=p(),ie=i("span"),dt=_("If a relation is configured to allow multiple collections, values use the format "),je=i("code"),je.textContent='"<collectionId>:<id>"',ot=_("."),rt=p(),Te(se.$$.fragment),Je=p(),fe=i("div"),fe.textContent="Responses",Ue=p(),Z=i("div"),be=i("div");for(let l=0;l<x.length;l+=1)x[l].c();ut=p(),me=i("div");for(let l=0;l<A.length;l+=1)A[l].c();k(e,"class","m-b-sm"),k(u,"class","content txt-lg m-b-sm"),k(v,"class","m-b-xs"),k(V,"class","label label-primary"),k(N,"class","content"),k(w,"class","alert alert-warning"),k(oe,"class","section-title"),k(re,"class","table-compact table-border m-b-base"),k(ce,"class","section-title"),k(z,"class","table-compact table-border m-b-base"),k(ue,"class","section-title"),k(ie,"class","txt-hint"),k(X,"class","table-compact table-border m-b-lg"),k(fe,"class","section-title"),k(be,"class","tabs-header compact combined left"),k(me,"class","tabs-content"),k(Z,"class","tabs")},m(l,s){o(l,e,s),n(e,t),n(e,b),n(e,f),o(l,c,s),o(l,u,s),n(u,m),n(m,S),n(m,T),n(T,L),n(m,$),n(u,M),n(u,R),n(u,D),n(u,J),n(u,j),I&&I.m(u,null),o(l,O,s),Ce(H,l,s),o(l,F,s),o(l,v,s),o(l,g,s),o(l,w,s),n(w,V),n(w,Q),n(w,N),n(N,h),n(h,C),n(h,le),n(le,ne),n(h,Ve),n(h,Me),n(w,Qe),E&&E.m(w,null),o(l,Se,s),o(l,oe,s),o(l,Oe,s),o(l,re,s),o(l,qe,s),o(l,ce,s),o(l,Re,s),o(l,z,s),n(z,He),n(z,We),n(z,K),B&&B.m(K,null),n(K,Pe);for(let y=0;y<U.length;y+=1)U[y]&&U[y].m(K,null);o(l,Le,s),o(l,ue,s),o(l,De,s),o(l,X,s),n(X,Fe),n(X,Ke),n(X,pe),n(pe,Y),n(Y,Be),n(Y,Xe),n(Y,Ne),n(Y,Ye),n(Y,q),n(q,Ze),Ce(ae,q,null),n(q,Ge),n(q,et),n(q,tt),n(q,Ae),n(q,lt),n(q,Ie),n(q,nt),n(q,Ee),n(q,at),n(q,it),n(q,st),n(q,ie),n(ie,dt),n(ie,je),n(ie,ot),n(pe,rt),Ce(se,pe,null),o(l,Je,s),o(l,fe,s),o(l,Ue,s),o(l,Z,s),n(Z,be);for(let y=0;y<x.length;y+=1)x[y]&&x[y].m(be,null);n(Z,ut),n(Z,me);for(let y=0;y<A.length;y+=1)A[y]&&A[y].m(me,null);G=!0},p(l,[s]){var yt,kt;(!G||s&1)&&a!==(a=l[0].name+"")&&ee(b,a),(!G||s&1)&&P!==(P=l[0].name+"")&&ee(L,P),l[1]?I||(I=Tt(),I.c(),I.m(u,null)):I&&(I.d(1),I=null);const y={};s&17&&(y.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[4]}');

...

// example update data
const data = ${JSON.stringify(l[7](l[0]),null,4)};

const record = await pb.collection('${(yt=l[0])==null?void 0:yt.name}').update('RECORD_ID', data);
    `),s&17&&(y.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(l[7](l[0]),null,2)};

final record = await pb.collection('${(kt=l[0])==null?void 0:kt.name}').update('RECORD_ID', body: body);
    `),H.$set(y),(!G||s&1)&&W!==(W=l[0].name+"")&&ee(ne,W),l[6]?E||(E=$t(),E.c(),E.m(w,null)):E&&(E.d(1),E=null),l[1]?B?B.p(l,s):(B=Mt(l),B.c(),B.m(K,Pe)):B&&(B.d(1),B=null),s&32&&(ve=de(l[5]),U=xe(U,s,ft,1,l,ve,ze,K,vt,St,null,Ct)),s&12&&(ge=de(l[3]),x=xe(x,s,bt,1,l,ge,ct,be,vt,Ot,null,wt)),s&12&&(_e=de(l[3]),Ft(),A=xe(A,s,mt,1,l,_e,pt,me,Bt,qt,null,gt),Nt())},i(l){if(!G){ye(H.$$.fragment,l),ye(ae.$$.fragment,l),ye(se.$$.fragment,l);for(let s=0;s<_e.length;s+=1)ye(A[s]);G=!0}},o(l){he(H.$$.fragment,l),he(ae.$$.fragment,l),he(se.$$.fragment,l);for(let s=0;s<A.length;s+=1)he(A[s]);G=!1},d(l){l&&(d(e),d(c),d(u),d(O),d(F),d(v),d(g),d(w),d(Se),d(oe),d(Oe),d(re),d(qe),d(ce),d(Re),d(z),d(Le),d(ue),d(De),d(X),d(Je),d(fe),d(Ue),d(Z)),I&&I.d(),we(H,l),E&&E.d(),B&&B.d();for(let s=0;s<U.length;s+=1)U[s].d();we(ae),we(se);for(let s=0;s<x.length;s+=1)x[s].d();for(let s=0;s<A.length;s+=1)A[s].d()}}}const el=r=>r.name=="emailVisibility";function tl(r,e,t){let a,b,f,c,u,{collection:m}=e,S=200,T=[];function P($){let M=ke.dummyCollectionSchemaData($,!0);return a&&(M.oldPassword="12345678",M.password="87654321",M.passwordConfirm="87654321",delete M.verified,delete M.email),M}const L=$=>t(2,S=$.code);return r.$$set=$=>{"collection"in $&&t(0,m=$.collection)},r.$$.update=()=>{var $,M,R;r.$$.dirty&1&&t(1,a=(m==null?void 0:m.type)==="auth"),r.$$.dirty&1&&t(6,b=(m==null?void 0:m.updateRule)===null),r.$$.dirty&2&&t(8,f=a?["id","password","verified","email","emailVisibility"]:["id"]),r.$$.dirty&257&&t(5,c=(($=m==null?void 0:m.fields)==null?void 0:$.filter(D=>!D.hidden&&D.type!="autodate"&&!f.includes(D.name)))||[]),r.$$.dirty&1&&t(3,T=[{code:200,body:JSON.stringify(ke.dummyCollectionRecord(m),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${(R=(M=m==null?void 0:m.fields)==null?void 0:M[0])==null?void 0:R.name}": {
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
            `}])},t(4,u=ke.getApiExampleUrl(At.baseURL)),[m,a,S,T,u,c,b,P,f,L]}class al extends Ht{constructor(e){super(),Pt(this,e,tl,Gt,Lt,{collection:0})}}export{al as default};
