import{p as f,a as _,l as R,b as d,e as $,i as k,f as E,h as y,j as u,_ as D,d as t,E as n,$ as S,u as w,w as x,z as O,a2 as a,m as C,M as o,O as r,s as I,L as P,k as U}from"./index-Ci_bBm9A.js";var A=E(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Subscribe to realtime changes via Server-Sent Events (SSE).</p> <p>Events are sent for <strong>create</strong>, <strong>update</strong> and <strong>delete</strong> record operations (see "Event data format" section below).</p></div> <div class="alert alert-info m-t-10 m-b-sm"><div class="icon"><i class="ri-information-line"></i></div> <div class="contet"><p><strong>You could subscribe to a single record or to an entire collection.</strong></p> <p>When you subscribe to a <strong>single record</strong>, the collection's <strong>ViewRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p> <p>When you subscribe to an <strong>entire collection</strong>, the collection's <strong>ListRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p></div></div> <!> <h6 class="m-b-xs">API details</h6> <div class="alert"><strong class="label label-primary">SSE</strong> <div class="content"><p>/api/realtime</p></div></div> <div class="section-title">Event data format</div> <!>`,1);function W(m,i){f(i,!1);const s=C();let e=_(i,"collection",8);R(()=>d,()=>{I(s,r.getApiExampleUrl(d.baseURL))}),$(),k();var l=A(),b=y(l),h=U(b),p=u(b,6);{let c=n(()=>(t(s),o(e()),a(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t(s)}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${e()?.name} record
        pb.collection('${e()?.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Subscribe to changes only in the specified record
        pb.collection('${e()?.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Unsubscribe
        pb.collection('${e()?.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${e()?.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${e()?.name}').unsubscribe(); // remove all subscriptions in the collection
    `))),v=n(()=>(t(s),o(e()),a(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t(s)}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${e()?.name} record
        pb.collection('${e()?.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Subscribe to changes only in the specified record
        pb.collection('${e()?.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Unsubscribe
        pb.collection('${e()?.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${e()?.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${e()?.name}').unsubscribe(); // remove all subscriptions in the collection
    `)));D(p,{get js(){return t(c)},get dart(){return t(v)}})}var g=u(p,8);{let c=n(()=>(o(r),o(e()),a(()=>JSON.stringify({action:"create",record:r.dummyCollectionRecord(e())},null,2).replace('"action": "create"','"action": "create" // create, update or delete'))));S(g,{get content(){return t(c)}})}w(()=>P(h,`Realtime (${o(e()),a(()=>e().name)??""})`)),x(m,l),O()}export{W as default};
