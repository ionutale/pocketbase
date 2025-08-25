import{f as u,h as W,H as pe,d as a,m as y,k as t,j as e,y as he,w as v,s as A,p as be,a as _e,l as S,M as p,b as ve,e as ge,i as xe,_ as we,G as ue,$ as M,a0 as de,a1 as ye,u as V,A as Ae,a2 as h,O as ce,L as w,x as fe}from"./index-DnvcJ3JO.js";import{F as Fe}from"./FieldsQueryParam-CywcORn2.js";var Ce=u('<span class="txt">Hide details</span> <i class="ri-arrow-up-s-line"></i>',1),ke=u('<span class="txt">Show details</span> <i class="ri-arrow-down-s-line"></i>',1),Le=u(`<p>The syntax basically follows the format <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:</p> <ul><li><code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false</li> <li><code class="txt-danger">OPERATOR</code> - is one of: <br/> <ul><li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li></ul></li></ul> <p>To group and combine several expressions you could use brackets <code>(...)</code>, <code>&&</code> (AND) and <code>||</code> (OR) tokens.</p>`,1),Oe=u('<button class="btn btn-sm btn-secondary m-t-10"><!></button> <!>',1);function Re(X){let m=y(!1);function x(){A(m,!a(m))}var b=Oe(),c=W(b),_=t(c);{var s=i=>{var f=Ce();v(i,f)},F=i=>{var f=ke();v(i,f)};pe(_,i=>{a(m)?i(s):i(F,!1)})}var g=e(c,2);{var N=i=>{var f=Le(),T=e(W(f),2),Y=e(t(T),2),Z=e(t(Y),4),q=t(Z),D=t(q);D.textContent="=";var C=e(q,2),$=t(C);$.textContent="!=";var I=e(C,2),ee=t(I);ee.textContent=">";var G=e(I,2),te=t(G);te.textContent=">=";var B=e(G,2),j=t(B);j.textContent="<";var H=e(B,2),U=t(H);U.textContent="<=";var z=e(H,2),K=t(z);K.textContent="~";var Q=e(z,2),ae=t(Q);ae.textContent="!~";var k=e(Q,2),se=t(k);se.textContent="?=";var L=e(k,2),oe=t(L);oe.textContent="?!=";var O=e(L,2),le=t(O);le.textContent="?>";var R=e(O,2),re=t(R);re.textContent="?>=";var J=e(R,2),ne=t(J);ne.textContent="?<";var P=e(J,2),ie=t(P);ie.textContent="?<=";var o=e(P,2),r=t(o);r.textContent="?~";var l=e(o,2),n=t(l);n.textContent="?!~",v(i,f)};pe(g,i=>{a(m)&&i(N)})}he("click",c,x),v(X,b)}var Pe=u('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),Ee=u("<code> </code> ",1),Se=u('<button type="button"> </button>'),Ne=u("<div><!></div>"),Te=u(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a paginated <strong> </strong> records list, supporting sorting and filtering.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records</p></div> <!></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>page</td><td><span class="label">Number</span></td><td>The page (aka. offset) of the paginated list (default to 1).</td></tr><tr><td>perPage</td><td><span class="label">Number</span></td><td>Specify the max returned records per page (default to 30).</td></tr><tr><td>sort</td><td><span class="label">String</span></td><td>Specify the records order attribute(s). <br/> Add <code>-</code> / <code>+</code> (default) in front of the attribute for DESC / ASC order.
                Ex.: <!> <p><strong>Supported record sort fields:</strong> <br/> <code>@random</code>, <code>@rowid</code>, <!></p></td></tr><tr><td>filter</td><td><span class="label">String</span></td><td>Filter the returned records. Ex.: <!> <!></td></tr><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to each individual record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!><tr><td id="query-page">skipTotal</td><td><span class="label">Boolean</span></td><td>If it is set the total counts query will be skipped and the response fields <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value. <br/> This could drastically speed up the search queries when the total counters are not needed or cursor
                based pagination is used. <br/> For optimization purposes, it is set by default for the <code>getFirstListItem()</code> and <code>getFullList()</code> SDKs methods.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function $e(X,m){be(m,!1);const x=y(),b=y(),c=y(),_=y();let s=_e(m,"collection",8),F=y(200),g=[];S(()=>p(s()),()=>{A(x,ce.getAllCollectionIdentifiers(s()))}),S(()=>p(s()),()=>{var o;A(b,((o=s())==null?void 0:o.listRule)===null)}),S(()=>ve,()=>{A(c,ce.getApiExampleUrl(ve.baseURL))}),S(()=>p(s()),()=>{A(_,ce.dummyCollectionRecord(s()))}),S(()=>(p(s()),a(_),a(b)),()=>{var o;(o=s())!=null&&o.id&&(g.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[a(_),Object.assign({},a(_),{id:a(_).id+"2"})]},null,2)}),g.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),a(b)&&g.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}))}),ge(),xe();var N=Te(),i=W(N),f=t(i),T=e(i,2),Y=t(T),Z=e(t(Y)),q=t(Z),D=e(T,2);{let o=ue(()=>(a(c),p(s()),h(()=>{var l,n,d;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a(c)}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(l=s())==null?void 0:l.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(n=s())==null?void 0:n.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(d=s())==null?void 0:d.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `}))),r=ue(()=>(a(c),p(s()),h(()=>{var l,n,d;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a(c)}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(l=s())==null?void 0:l.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(n=s())==null?void 0:n.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(d=s())==null?void 0:d.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `})));we(D,{get js(){return a(o)},get dart(){return a(r)}})}var C=e(D,4),$=e(t(C),2),I=t($),ee=e(t(I)),G=t(ee),te=e($,2);{var B=o=>{var r=Pe();v(o,r)};pe(te,o=>{a(b)&&o(B)})}var j=e(C,4),H=e(t(j)),U=e(t(H),2),z=e(t(U),2),K=e(t(z),7);M(K,{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `});var Q=e(K,2),ae=e(t(Q),8);de(ae,1,()=>a(x),ye,(o,r,l)=>{var n=Ee(),d=W(n),E=t(d),me=e(d,1,!0);V(()=>{w(E,a(r)),w(me,(a(x),h(()=>l<a(x).length-1?", ":"")))}),v(o,n)});var k=e(U),se=e(t(k),2),L=e(t(se));M(L,{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `});var oe=e(L,2);Re(oe);var O=e(k),le=e(t(O),2),R=e(t(le));M(R,{content:"?expand=relField1,relField2.subRelField"});var re=e(R,6);re.textContent='"expand": {"relField1": {...}, ...}';var J=e(O);Fe(J,{});var ne=e(j,4),P=t(ne);de(P,5,()=>g,o=>o.code,(o,r)=>{var l=Se();let n;var d=t(l);V(E=>{n=fe(l,1,"tab-item",null,n,E),w(d,(a(r),h(()=>a(r).code)))},[()=>({active:a(F)===a(r).code})]),he("click",l,()=>A(F,a(r).code)),v(o,l)});var ie=e(P,2);de(ie,5,()=>g,o=>o.code,(o,r)=>{var l=Ne();let n;var d=t(l);M(d,{get content(){return a(r),h(()=>a(r).body)}}),V(E=>n=fe(l,1,"tab-item",null,n,E),[()=>({active:a(F)===a(r).code})]),v(o,l)}),V(()=>{w(f,`List/Search (${p(s()),h(()=>s().name)??""})`),w(q,(p(s()),h(()=>s().name))),w(G,(p(s()),h(()=>s().name)))}),v(X,N),Ae()}export{$e as default};
