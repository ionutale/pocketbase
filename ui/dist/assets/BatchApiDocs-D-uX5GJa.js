import{p as se,a as oe,l as b,b as O,M as r,d as e,m as v,e as ce,i as le,f as q,h as re,j as a,k as s,I as ie,_ as de,E as f,$ as A,a0 as I,u as _,w as g,z as ne,K as pe,a2 as i,s as y,O as S,G as j,L,x as me}from"./index-D0ntNp7m.js";var ue=q("<button> </button>"),he=q("<div><!></div>"),be=q(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Batch and transactional create/update/upsert/delete of multiple records in a single request.</p></div> <div class="alert alert-warning"><div class="icon"><i class="ri-error-warning-line"></i></div> <div class="content"><p>The batch Web API need to be explicitly enabled and configured from the <a href="/settings">Dashboard settings</a>.</p> <p>Because this endpoint process the requests in a single DB transaction it could degrade the
            performance of your application if not used with proper care and configuration <em>(prefer smaller max processing and body size limits, avoid large file uploads over slow S3
                networks and custom hooks that communicate with slow external APIs)</em>.</p></div></div> <!> <h6 class="m-b-xs">API details</h6> <div class="api-route alert alert-success"><strong class="label label-primary">POST</strong> <div class="content">/api/batch</div></div> <div class="section-title">Body Parameters</div> <p>Body parameters could be sent as <em>application/json</em> or <em>multipart/form-data</em>. <br/> File upload is supported only via <em>multipart/form-data</em> (see below for more details).</p> <table class="table-compact table-border m-t-xs m-b-base"><thead><tr><th>Param</th><th width="80%">Description</th></tr></thead><tbody><tr><td valign="top"><div class="flex txt-nowrap"><span class="label label-success">Required</span> <span>requests</span></div></td><td><span class="label"></span> - List of the requests to process. <p>The supported batch request actions are:</p> <ul><li>record create - <code></code></li> <li>record update - <code></code></li> <li>record upsert - <code></code> <br/> <small class="txt-hint">(the body must have <code class="txt-sm">id</code> field)</small></li> <li>record delete - <code></code></li></ul> <p>Each batch Request element have the following properties:</p> <ul><li><code>url path</code> <em>(could include query parameters)</em></li> <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li> <li><code>headers</code> <br/> <em>(custom per-request <code>Authorization</code> header is not supported at the moment,
                            aka. all batch requests have the same auth state)</em></li> <li><code>body</code></li></ul> <p><strong>NB!</strong> When the batch request is send as <code>multipart/form-data</code>, the regular batch action fields are expected to be
                    submitted as serailized json under the <code>@jsonPayload</code> field and file keys need
                    to follow the pattern <code>requests.N.fileField</code> or <code>requests[N].fileField</code> <em>(this is usually handled transparently by the SDKs when their specific object notation
                        is used)</em>. <br/> If you don't use the SDKs or prefer manually to construct the <code>FormData</code> body, then it could look something like: <!></p></td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function fe(N,D){se(D,!1);const d=v(),n=v();let t=oe(D,"collection",8),u=v(200),p=[];b(()=>O,()=>{y(d,S.getApiExampleUrl(O.baseURL))}),b(()=>r(t()),()=>{y(n,S.dummyCollectionRecord(t()))}),b(()=>(r(t()),e(n)),()=>{t()?.id&&(p.push({code:200,body:JSON.stringify([{status:200,body:e(n)},{status:200,body:Object.assign({},e(n),{id:e(n).id+"2"})}],null,2)}),p.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Batch transaction failed.",
                  "data": {
                    "requests": {
                      "1": {
                        "code": "batch_request_failed",
                        "message": "Batch request failed.",
                        "response": {
                          "status": 400,
                          "message": "Failed to create record.",
                          "data": {
                            "id": {
                              "code": "validation_min_text_constraint",
                              "message": "Must be at least 3 character(s).",
                              "params": { "min": 3 }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            `}),p.push({code:403,body:`
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `}))}),ce(),le();var x=be(),w=re(x),U=s(w),k=a(w,4),z=a(s(k),2),H=s(z),K=a(s(H));ie(K,o=>pe?.(o));var P=a(k,2);{let o=f(()=>(e(d),r(t()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(d)}');

        ...

        const batch = pb.createBatch();

        batch.collection('${t()?.name}').create({ ... });
        batch.collection('${t()?.name}').update('RECORD_ID', { ... });
        batch.collection('${t()?.name}').delete('RECORD_ID');
        batch.collection('${t()?.name}').upsert({ ... });

        const result = await batch.send();
    `))),c=f(()=>(e(d),r(t()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(d)}');

        ...

        final batch = pb.createBatch();

        batch.collection('${t()?.name}').create(body: { ... });
        batch.collection('${t()?.name}').update('RECORD_ID', body: { ... });
        batch.collection('${t()?.name}').delete('RECORD_ID');
        batch.collection('${t()?.name}').upsert(body: { ... });

        final result = await batch.send();
    `)));de(P,{get js(){return e(o)},get dart(){return e(c)}})}var B=a(P,10),G=a(s(B)),J=s(G),M=a(s(J)),R=s(M);R.textContent="Array<Request>";var C=a(R,4),T=s(C),W=a(s(T));W.textContent="POST /api/collections/{collection}/records";var E=a(T,2),Q=a(s(E));Q.textContent="PATCH /api/collections/{collection}/records/{id}";var $=a(E,2),V=a(s($));V.textContent="PUT /api/collections/{collection}/records";var X=a($,2),Y=a(s(X));Y.textContent="DELETE /api/collections/{collection}/records/{id}";var Z=a(C,6),ee=a(s(Z),16);{let o=f(()=>(r(t()),i(()=>`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${t().name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${t().name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // file for the first request
                            formData.append("requests.0.someFileField", new File(...))

                            // file for the second request
                            formData.append("requests.1.someFileField", new File(...))
                        `)));A(ee,{language:"javascript",get content(){return e(o)}})}var te=a(B,4),F=s(te);I(F,5,()=>p,o=>o.code,(o,c)=>{var l=ue();let m;var h=s(l);_(()=>{m=j(l,1,"tab-item",null,m,{active:e(u)===e(c).code}),L(h,(e(c),i(()=>e(c).code)))}),me("click",l,()=>y(u,e(c).code)),g(o,l)});var ae=a(F,2);I(ae,5,()=>p,o=>o.code,(o,c)=>{var l=he();let m;var h=s(l);A(h,{get content(){return e(c),i(()=>e(c).body)}}),_(()=>m=j(l,1,"tab-item",null,m,{active:e(u)===e(c).code})),g(o,l)}),_(()=>L(U,`Batch create/update/upsert/delete (${r(t()),i(()=>t().name)??""})`)),g(N,x),ne()}export{fe as default};
