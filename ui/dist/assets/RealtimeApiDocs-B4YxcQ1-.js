import{p as D,a as E,l as S,b as f,e as w,i as x,f as O,h as C,j as _,_ as I,d as t,G as d,$ as P,u as A,w as U,A as B,a2 as b,m as W,M as l,O as u,s as L,L as j,k as q}from"./index-C9Y1y-Co.js";var G=O(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Subscribe to realtime changes via Server-Sent Events (SSE).</p> <p>Events are sent for <strong>create</strong>, <strong>update</strong> and <strong>delete</strong> record operations (see "Event data format" section below).</p></div> <div class="alert alert-info m-t-10 m-b-sm"><div class="icon"><i class="ri-information-line"></i></div> <div class="contet"><p><strong>You could subscribe to a single record or to an entire collection.</strong></p> <p>When you subscribe to a <strong>single record</strong>, the collection's <strong>ViewRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p> <p>When you subscribe to an <strong>entire collection</strong>, the collection's <strong>ListRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p></div></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert"><strong class="label label-primary">SSE</strong> <div class="content"><p>/api/realtime</p></div></div> <div class="section-title">Event data format</div> <!>`,1);function J(R,m){D(m,!1);const s=W();let e=E(m,"collection",8);S(()=>f,()=>{L(s,u.getApiExampleUrl(f.baseURL))}),w(),x();var h=G(),g=C(h),$=q(g),v=_(g,6);{let p=d(()=>(t(s),l(e()),b(()=>{var o,a,c,n,r,i;return`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(s)}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(o=e())==null?void 0:o.name} record
        pb.collection('${(a=e())==null?void 0:a.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Subscribe to changes only in the specified record
        pb.collection('${(c=e())==null?void 0:c.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Unsubscribe
        pb.collection('${(n=e())==null?void 0:n.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(r=e())==null?void 0:r.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(i=e())==null?void 0:i.name}').unsubscribe(); // remove all subscriptions in the collection
    `}))),y=d(()=>(t(s),l(e()),b(()=>{var o,a,c,n,r,i;return`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(s)}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(o=e())==null?void 0:o.name} record
        pb.collection('${(a=e())==null?void 0:a.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Subscribe to changes only in the specified record
        pb.collection('${(c=e())==null?void 0:c.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Unsubscribe
        pb.collection('${(n=e())==null?void 0:n.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(r=e())==null?void 0:r.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(i=e())==null?void 0:i.name}').unsubscribe(); // remove all subscriptions in the collection
    `})));I(v,{get js(){return t(p)},get dart(){return t(y)}})}var k=_(v,8);{let p=d(()=>(l(u),l(e()),b(()=>JSON.stringify({action:"create",record:u.dummyCollectionRecord(e())},null,2).replace('"action": "create"','"action": "create" // create, update or delete'))));P(k,{get content(){return t(p)}})}A(()=>j($,`Realtime (${l(e()),b(()=>e().name)??""})`)),U(R,h),B()}export{J as default};
