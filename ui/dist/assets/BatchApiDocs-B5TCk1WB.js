import{p as oe,a as ce,l as v,b as A,M as r,d as e,m as f,e as le,i as re,f as D,h as ie,j as a,k as s,I as de,_ as ne,G as _,$ as j,a0 as I,u as g,w as y,A as pe,K as ue,a2 as i,s as q,O as S,x as L,L as N,y as me}from"./index-DQ9K3nHd.js";var be=D("<button> </button>"),he=D("<div><!></div>"),ve=D(`<h3 class="m-b-sm"> </h3> <div class="content txt-lg m-b-sm"><p>Batch and transactional create/update/upsert/delete of multiple records in a single request.</p></div> <div class="alert alert-warning"><div class="icon"><i class="ri-error-warning-line"></i></div> <div class="content"><p>The batch Web API need to be explicitly enabled and configured from the <a href="/settings">Dashboard settings</a>.</p> <p>Because this endpoint process the requests in a single transaction it could degrade the
            performance of your application if not used with proper care and configuration (e.g. too large
            allowed execution timeout, large body size limit, etc.).</p></div></div> <!> <h6 class="m-b-xs">API details</h6> <div class="api-route alert alert-success"><strong class="label label-primary">POST</strong> <div class="content">/api/batch</div></div> <div class="section-title">Body Parameters</div> <p>Body parameters could be sent as <em>application/json</em> or <em>multipart/form-data</em>. <br/> File upload is supported only via <em>multipart/form-data</em> (see below for more details).</p> <table class="table-compact table-border m-t-xs m-b-base"><thead><tr><th>Param</th><th width="80%">Description</th></tr></thead><tbody><tr><td valign="top"><div class="flex txt-nowrap"><span class="label label-success">Required</span> <span>requests</span></div></td><td><span class="label"></span> - List of the requests to process. <p>The supported batch request actions are:</p> <ul><li>record create - <code></code></li> <li>record update - <code></code></li> <li>record upsert - <code></code> <br/> <small class="txt-hint">(the body must have <code class="txt-sm">id</code> field)</small></li> <li>record delete - <code></code></li></ul> <p>Each batch Request element have the following properties:</p> <ul><li><code>url path</code> <em>(could include query parameters)</em></li> <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li> <li><code>headers</code> <br/> <em>(custom per-request <code>Authorization</code> header is not supported at the moment,
                            aka. all batch requests have the same auth state)</em></li> <li><code>body</code></li></ul> <p><strong>NB!</strong> When the batch request is send as <code>multipart/form-data</code>, the regular batch action fields are expected to be
                    submitted as serailized json under the <code>@jsonPayload</code> field and file keys need
                    to follow the pattern <code>requests.N.fileField</code> or <code>requests[N].fileField</code> <em>(this is usually handled transparently by the SDKs when their specific object notation
                        is used)</em>. <br/> If you don't use the SDKs or prefer manually to construct the <code>FormData</code> body, then it could look something like: <!></p></td></tr></tbody></table> <div class="section-title">Responses</div> <div class="tabs"><div class="tabs-header compact combined left"></div> <div class="tabs-content"></div></div>`,1);function _e(U,x){oe(x,!1);const d=f(),n=f();let t=ce(x,"collection",8),m=f(200),p=[];v(()=>A,()=>{q(d,S.getApiExampleUrl(A.baseURL))}),v(()=>r(t()),()=>{q(n,S.dummyCollectionRecord(t()))}),v(()=>(r(t()),e(n)),()=>{t()?.id&&(p.push({code:200,body:JSON.stringify([{status:200,body:e(n)},{status:200,body:Object.assign({},e(n),{id:e(n).id+"2"})}],null,2)}),p.push({code:400,body:`
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
            `}))}),le(),re();var k=ve(),w=ie(k),H=s(w),P=a(w,4),z=a(s(P),2),K=s(z),G=a(s(K));de(G,o=>ue?.(o));var R=a(P,2);{let o=_(()=>(e(d),r(t()),i(()=>`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e(d)}');

        ...

        const batch = pb.createBatch();

        batch.collection('${t()?.name}').create({ ... });
        batch.collection('${t()?.name}').update('RECORD_ID', { ... });
        batch.collection('${t()?.name}').delete('RECORD_ID');
        batch.collection('${t()?.name}').upsert({ ... });

        const result = await batch.send();
    `))),c=_(()=>(e(d),r(t()),i(()=>`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e(d)}');

        ...

        final batch = pb.createBatch();

        batch.collection('${t()?.name}').create(body: { ... });
        batch.collection('${t()?.name}').update('RECORD_ID', body: { ... });
        batch.collection('${t()?.name}').delete('RECORD_ID');
        batch.collection('${t()?.name}').upsert(body: { ... });

        final result = await batch.send();
    `)));ne(R,{get js(){return e(o)},get dart(){return e(c)}})}var B=a(R,10),J=a(s(B)),M=s(J),W=a(s(M)),C=s(W);C.textContent="Array<Request>";var T=a(C,4),$=s(T),Q=a(s($));Q.textContent="POST /api/collections/{collection}/records";var E=a($,2),V=a(s(E));V.textContent="PATCH /api/collections/{collection}/records/{id}";var F=a(E,2),X=a(s(F));X.textContent="PUT /api/collections/{collection}/records";var Y=a(F,2),Z=a(s(Y));Z.textContent="DELETE /api/collections/{collection}/records/{id}";var ee=a(T,6),te=a(s(ee),16);{let o=_(()=>(r(t()),i(()=>`
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
                        `)));j(te,{language:"javascript",get content(){return e(o)}})}var ae=a(B,4),O=s(ae);I(O,5,()=>p,o=>o.code,(o,c)=>{var l=be();let u;var b=s(l);g(h=>{u=L(l,1,"tab-item",null,u,h),N(b,(e(c),i(()=>e(c).code)))},[()=>({active:e(m)===e(c).code})]),me("click",l,()=>q(m,e(c).code)),y(o,l)});var se=a(O,2);I(se,5,()=>p,o=>o.code,(o,c)=>{var l=he();let u;var b=s(l);j(b,{get content(){return e(c),i(()=>e(c).body)}}),g(h=>u=L(l,1,"tab-item",null,u,h),[()=>({active:e(m)===e(c).code})]),y(o,l)}),g(()=>N(H,`Batch create/update/upsert/delete (${r(t()),i(()=>t().name)??""})`)),y(U,k),pe()}export{_e as default};
