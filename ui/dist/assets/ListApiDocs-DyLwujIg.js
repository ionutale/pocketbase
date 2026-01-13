import{f as v,h as V,H as ce,d as a,m as A,k as t,j as e,x as me,w as p,s as w,p as he,a as _e,l as P,M as c,b as pe,e as ge,i as xe,_ as ye,E as ve,$ as J,a0 as ie,a1 as Ae,u as M,z as we,a2 as m,O as de,L as y,G as ue}from"./index-BMgSTU82.js";import{F as Fe}from"./FieldsQueryParam-DEDtIDJr.js";var Ce=v('<span class="txt">Hide details</span> <i class="ri-arrow-up-s-line"></i>',1),ke=v('<span class="txt">Show details</span> <i class="ri-arrow-down-s-line"></i>',1),Le=v(`<p>The syntax basically follows the format <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:</p> <ul><li><code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false</li> <li><code class="txt-danger">OPERATOR</code> - is one of: <br/> <ul><li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-10nmeob"></code> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-10nmeob"></code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li></ul></li></ul> <p>To group and combine several expressions you could use brackets <code>(...)</code>, <code>&&</code> (AND) and <code>||</code> (OR) tokens.</p>`,1),Oe=v('<button class="btn btn-sm btn-secondary m-t-10"><!></button> <!>',1);function Re(W){let f=A(!1);function g(){w(f,!a(f))}var b=Oe(),d=V(b),h=t(d);{var s=r=>{var u=Ce();p(r,u)},F=r=>{var u=ke();p(r,u)};ce(h,r=>{a(f)?r(s):r(F,!1)})}var _=e(d,2);{var S=r=>{var u=Le(),N=e(V(u),2),X=e(t(N),2),Y=e(t(X),4),T=t(Y),q=t(T);q.textContent="=";var C=e(T,2),D=t(C);D.textContent="!=";var $=e(C,2),Z=t($);Z.textContent=">";var I=e($,2),ee=t(I);ee.textContent=">=";var G=e(I,2),B=t(G);B.textContent="<";var j=e(G,2),z=t(j);z.textContent="<=";var H=e(j,2),U=t(H);U.textContent="~";var K=e(H,2),te=t(K);te.textContent="!~";var k=e(K,2),ae=t(k);ae.textContent="?=";var L=e(k,2),se=t(L);se.textContent="?!=";var O=e(L,2),oe=t(O);oe.textContent="?>";var R=e(O,2),le=t(R);le.textContent="?>=";var Q=e(R,2),re=t(Q);re.textContent="?<";var E=e(Q,2),ne=t(E);ne.textContent="?<=";var o=e(E,2),l=t(o);l.textContent="?~";var n=e(o,2),i=t(n);i.textContent="?!~",p(r,u)};ce(_,r=>{a(f)&&r(S)})}me("click",d,g),p(W,b)}var Ee=v('<p class="txt-hint txt-sm txt-right">Requires superuser <code>Authorization:TOKEN</code> header</p>'),Pe=v("<code> </code> ",1),Se=v('<button type="button"> </button>'),Ne=v("<div><!></div>"),Te=v(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Fetch a paginated <strong> </strong> records list, supporting sorting and filtering.</p></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong> </strong>/records</p></div> <!></div> <div class="section-title">Query parameters</div> <table class="table-compact table-border m-b-base"><thead><tr><th>Param</th><th>Type</th><th width="60%">Description</th></tr></thead><tbody><tr><td>page</td><td><span class="label">Number</span></td><td>The page (aka. offset) of the paginated list (default to 1).</td></tr><tr><td>perPage</td><td><span class="label">Number</span></td><td>Specify the max returned records per page (default to 30).</td></tr><tr><td>sort</td><td><span class="label">String</span></td><td>Specify the records order attribute(s). <br/> Add <code>-</code> / <code>+</code> (default) in front of the attribute for DESC / ASC order.
                Ex.: <!> <p><strong>Supported record sort fields:</strong> <br/> <code>@random</code>, <code>@rowid</code>, <!></p></td></tr><tr><td>filter</td><td><span class="label">String</span></td><td>Filter the returned records. Ex.: <!> <!></td></tr><tr><td>expand</td><td><span class="label">String</span></td><td>Auto expand record relations. Ex.: <!> Supports up to 6-levels depth nested relations expansion. <br/> The expanded relations will be appended to each individual record under the <code>expand</code> property (eg. <code></code>). <br/> Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr><!><tr><td id="query-page">skipTotal</td><td><span class="label">Boolean</span></td><td>If it is set the total counts query will be skipped and the response fields <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value. <br/> This could drastically speed up the search queries when the total counters are not needed or cursor
                based pagination is used. <br/> For optimization purposes, it is set by default for the <code>getFirstListItem()</code> and <code>getFullList()</code> SDKs methods.</td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function $e(W,f){he(f,!1);const g=A(),b=A(),d=A(),h=A();let s=_e(f,"collection",8),F=A(200),_=[];P(()=>c(s()),()=>{w(g,de.getAllCollectionIdentifiers(s()))}),P(()=>c(s()),()=>{w(b,s()?.listRule===null)}),P(()=>pe,()=>{w(d,de.getApiExampleUrl(pe.baseURL))}),P(()=>c(s()),()=>{w(h,de.dummyCollectionRecord(s()))}),P(()=>(c(s()),a(h),a(b)),()=>{s()?.id&&(_.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[a(h),Object.assign({},a(h),{id:a(h).id+"2"})]},null,2)}),_.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),a(b)&&_.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}))}),ge(),xe();var S=Te(),r=V(S),u=t(r),N=e(r,2),X=t(N),Y=e(t(X)),T=t(Y),q=e(N,2);{let o=ve(()=>(a(d),c(s()),m(()=>`
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
    `))),l=ve(()=>(a(d),c(s()),m(()=>`
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
    `)));ye(q,{get js(){return a(o)},get dart(){return a(l)}})}var C=e(q,4),D=e(t(C),2),$=t(D),Z=e(t($)),I=t(Z),ee=e(D,2);{var G=o=>{var l=Ee();p(o,l)};ce(ee,o=>{a(b)&&o(G)})}var B=e(C,4),j=e(t(B)),z=e(t(j),2),H=e(t(z),2),U=e(t(H),7);J(U,{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `});var K=e(U,2),te=e(t(K),8);ie(te,1,()=>a(g),Ae,(o,l,n)=>{var i=Pe(),x=V(i),fe=t(x),be=e(x,1,!0);M(()=>{y(fe,a(l)),y(be,(a(g),m(()=>n<a(g).length-1?", ":"")))}),p(o,i)});var k=e(z),ae=e(t(k),2),L=e(t(ae));J(L,{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `});var se=e(L,2);Re(se);var O=e(k),oe=e(t(O),2),R=e(t(oe));J(R,{content:"?expand=relField1,relField2.subRelField"});var le=e(R,6);le.textContent='"expand": {"relField1": {...}, ...}';var Q=e(O);Fe(Q,{});var re=e(B,4),E=t(re);ie(E,5,()=>_,o=>o.code,(o,l)=>{var n=Se();let i;var x=t(n);M(()=>{i=ue(n,1,"tab-item",null,i,{active:a(F)===a(l).code}),y(x,(a(l),m(()=>a(l).code)))}),me("click",n,()=>w(F,a(l).code)),p(o,n)});var ne=e(E,2);ie(ne,5,()=>_,o=>o.code,(o,l)=>{var n=Ne();let i;var x=t(n);J(x,{get content(){return a(l),m(()=>a(l).body)}}),M(()=>i=ue(n,1,"tab-item",null,i,{active:a(F)===a(l).code})),p(o,n)}),M(()=>{y(u,`List/Search (${c(s()),m(()=>s().name)??""})`),y(T,(c(s()),m(()=>s().name))),y(I,(c(s()),m(()=>s().name)))}),p(W,S),we()}export{$e as default};
