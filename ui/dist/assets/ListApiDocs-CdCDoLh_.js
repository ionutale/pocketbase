import{f as v,h as W,H as pe,d as a,m as y,k as t,j as e,y as he,w as p,s as A,p as be,a as _e,l as S,M as c,b as ve,e as ge,i as xe,_ as we,G as ue,$ as M,a0 as de,a1 as ye,u as V,A as Ae,a2 as f,O as ce,L as w,x as fe}from"./index-DeFD_e2S.js";import{F as Fe}from"./FieldsQueryParam-3Dv4rQxh.js";var Ce=v('<span class="txt">Hide details</span> <i class="ri-arrow-up-s-line"></i>',1),ke=v('<span class="txt">Show details</span> <i class="ri-arrow-down-s-line"></i>',1),Le=v(`<p>The syntax basically follows the format <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:</p> <ul><li><code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false</li> <li><code class="txt-danger">OPERATOR</code> - is one of: <br/> <ul><li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li></ul></li></ul> <p>To group and combine several expressions you could use brackets <code>(...)</code>, <code>&&</code> (AND) and <code>||</code> (OR) tokens.</p>`,1),Oe=v('<button class="btn btn-sm btn-secondary m-t-10"><!></button> <!>',1);function Re(X){let h=y(!1);function g(){A(h,!a(h))}var m=Oe(),d=W(m),b=t(d);{var s=r=>{var u=Ce();p(r,u)},F=r=>{var u=ke();p(r,u)};pe(b,r=>{a(h)?r(s):r(F,!1)})}var _=e(d,2);{var N=r=>{var u=Le(),T=e(W(u),2),Y=e(t(T),2),Z=e(t(Y),4),q=t(Z),D=t(q);D.textContent="=";var C=e(q,2),$=t(C);$.textContent="!=";var I=e(C,2),ee=t(I);ee.textContent=">";var G=e(I,2),te=t(G);te.textContent=">=";var B=e(G,2),j=t(B);j.textContent="<";var H=e(B,2),U=t(H);U.textContent="<=";var z=e(H,2),K=t(z);K.textContent="~";var Q=e(z,2),ae=t(Q);ae.textContent="!~";var k=e(Q,2),se=t(k);se.textContent="?=";var L=e(k,2),oe=t(L);oe.textContent="?!=";var O=e(L,2),le=t(O);le.textContent="?>";var R=e(O,2),re=t(R);re.textContent="?>=";var J=e(R,2),ne=t(J);ne.textContent="?<";var P=e(J,2),ie=t(P);ie.textContent="?<=";var o=e(P,2),l=t(o);l.textContent="?~";var n=e(o,2),i=t(n);i.textContent="?!~",p(r,u)};pe(_,r=>{a(h)&&r(N)})}he("click",d,g),p(X,m)}var Pe=v('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),Ee=v("<code> </code> ",1),Se=v('<button type="button"> </button>'),Ne=v("<div><!></div>"),Te=v(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a paginated <strong> </strong> records list, supporting sorting and filtering.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records</p></div> <!></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>page</td><td><span class="label">Number</span></td><td>The page (aka. offset) of the paginated list (default to 1).</td></tr><tr><td>perPage</td><td><span class="label">Number</span></td><td>Specify the max returned records per page (default to 30).</td></tr><tr><td>sort</td><td><span class="label">String</span></td><td>Specify the records order attribute(s). <br/> Add <code>-</code> / <code>+</code> (default) in front of the attribute for DESC / ASC order.
                Ex.: <!> <p><strong>Supported record sort fields:</strong> <br/> <code>@random</code>, <code>@rowid</code>, <!></p></td></tr><tr><td>filter</td><td><span class="label">String</span></td><td>Filter the returned records. Ex.: <!> <!></td></tr><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to each individual record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!><tr><td id="query-page">skipTotal</td><td><span class="label">Boolean</span></td><td>If it is set the total counts query will be skipped and the response fields <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value. <br/> This could drastically speed up the search queries when the total counters are not needed or cursor
                based pagination is used. <br/> For optimization purposes, it is set by default for the <code>getFirstListItem()</code> and <code>getFullList()</code> SDKs methods.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function $e(X,h){be(h,!1);const g=y(),m=y(),d=y(),b=y();let s=_e(h,"collection",8),F=y(200),_=[];S(()=>c(s()),()=>{A(g,ce.getAllCollectionIdentifiers(s()))}),S(()=>c(s()),()=>{A(m,s()?.listRule===null)}),S(()=>ve,()=>{A(d,ce.getApiExampleUrl(ve.baseURL))}),S(()=>c(s()),()=>{A(b,ce.dummyCollectionRecord(s()))}),S(()=>(c(s()),a(b),a(m)),()=>{s()?.id&&(_.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[a(b),Object.assign({},a(b),{id:a(b).id+"2"})]},null,2)}),_.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),a(m)&&_.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}))}),ge(),xe();var N=Te(),r=W(N),u=t(r),T=e(r,2),Y=t(T),Z=e(t(Y)),q=t(Z),D=e(T,2);{let o=ue(()=>(a(d),c(s()),f(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a(d)}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${s()?.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${s()?.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${s()?.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `))),l=ue(()=>(a(d),c(s()),f(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a(d)}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${s()?.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${s()?.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${s()?.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `)));we(D,{get js(){return a(o)},get dart(){return a(l)}})}var C=e(D,4),$=e(t(C),2),I=t($),ee=e(t(I)),G=t(ee),te=e($,2);{var B=o=>{var l=Pe();p(o,l)};pe(te,o=>{a(m)&&o(B)})}var j=e(C,4),H=e(t(j)),U=e(t(H),2),z=e(t(U),2),K=e(t(z),7);M(K,{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `});var Q=e(K,2),ae=e(t(Q),8);de(ae,1,()=>a(g),ye,(o,l,n)=>{var i=Ee(),x=W(i),E=t(x),me=e(x,1,!0);V(()=>{w(E,a(l)),w(me,(a(g),f(()=>n<a(g).length-1?", ":"")))}),p(o,i)});var k=e(U),se=e(t(k),2),L=e(t(se));M(L,{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `});var oe=e(L,2);Re(oe);var O=e(k),le=e(t(O),2),R=e(t(le));M(R,{content:"?expand=relField1,relField2.subRelField"});var re=e(R,6);re.textContent='"expand": {"relField1": {...}, ...}';var J=e(O);Fe(J,{});var ne=e(j,4),P=t(ne);de(P,5,()=>_,o=>o.code,(o,l)=>{var n=Se();let i;var x=t(n);V(E=>{i=fe(n,1,"tab-item",null,i,E),w(x,(a(l),f(()=>a(l).code)))},[()=>({active:a(F)===a(l).code})]),he("click",n,()=>A(F,a(l).code)),p(o,n)});var ie=e(P,2);de(ie,5,()=>_,o=>o.code,(o,l)=>{var n=Ne();let i;var x=t(n);M(x,{get content(){return a(l),f(()=>a(l).body)}}),V(E=>i=fe(n,1,"tab-item",null,i,E),[()=>({active:a(F)===a(l).code})]),p(o,n)}),V(()=>{w(u,`List/Search (${c(s()),f(()=>s().name)??""})`),w(q,(c(s()),f(()=>s().name))),w(G,(c(s()),f(()=>s().name)))}),p(X,N),Ae()}export{$e as default};
