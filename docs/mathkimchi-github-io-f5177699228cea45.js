let T=`function`,O=`undefined`,X=4,U=`string`,P=`utf-8`,R=0,S=1,N=null,L=128,V=`Object`,K=Array,Q=Error,W=FinalizationRegistry,Z=Object,Y=Reflect,M=undefined;var y=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h82bd932260d18dca(b,c,k(d))});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==U&&b.length>R){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=s(a[R])};for(let d=S;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>S){d=c[S]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var j=((a,b)=>{a=a>>>R;return g.decode(i().subarray(a,a+ b))});var x=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_ref__hcbe1871558653d09(c,d,w(e))}finally{b[v++]=M}});var p=(a=>a===M||a===N);var I=(b=>{if(a!==M)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var f=(a=>{const b=c(a);e(a);return b});var B=(()=>{if(A===N||A.byteLength===R){A=new Uint32Array(a.memory.buffer)};return A});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=R;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==S){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/X+ S]=p(d)?R:d;r()[a/X+ R]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/X+ S]=p(d)?R:d;r()[a/X+ R]=!p(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/X+ S]=p(d)?R:d;r()[a/X+ R]=!p(d)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,S)}});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:M;var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ S]=h;r()[b/X+ R]=g});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.log(...d)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return p(b)?R:k(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return D(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return D(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===R?M:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return p(b)?R:k(b)});b.wbg.__wbg_fetch_c4b6afebdb1f918e=((a,b)=>{const d=c(a).fetch(c(b));return k(d)});b.wbg.__wbg_instanceof_Element_6945fc210db80ea9=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_5235ee79fd5f6781=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_outerHTML_e073aa84e7bc1eaf=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return D(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_instanceof_WorkerGlobalScope_46b577f151fad960=(a=>{let b;try{b=c(a) instanceof WorkerGlobalScope}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_fetch_921fad6ef9e883dd=((a,b)=>{const d=c(a).fetch(c(b));return k(d)});b.wbg.__wbg_new_4c501d7c115d20a6=function(){return D((()=>{const a=new URLSearchParams();return k(a)}),arguments)};b.wbg.__wbg_bubbles_abce839854481bc6=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_setchecked_931ff2ed2cd3ebfd=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_value_47fe6384562f52ab=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_setvalue_78cb4f1fef58ae98=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_instanceof_Response_849eb93e75734b6e=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_url_5f6dc4009ac5f99d=((b,d)=>{const e=c(d).url;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_redirected_1a9130cafa803002=(a=>{const b=c(a).redirected;return b});b.wbg.__wbg_status_61a01141acd3cf74=(a=>{const b=c(a).status;return b});b.wbg.__wbg_headers_9620bfada380764a=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_bodyUsed_9d43d75ecc95b24d=(a=>{const b=c(a).bodyUsed;return b});b.wbg.__wbg_search_c68f506c44be6d1e=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_setsearch_fd62f4de409a2bb3=((a,b,d)=>{c(a).search=j(b,d)});b.wbg.__wbg_new_67853c351755d2cf=function(){return D(((a,b)=>{const c=new URL(j(a,b));return k(c)}),arguments)};b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=c(a).parentNode;return p(b)?R:k(b)});b.wbg.__wbg_parentElement_347524db59fc2976=(a=>{const b=c(a).parentElement;return p(b)?R:k(b)});b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_lastChild_83efe6d5da370e1f=(a=>{const b=c(a).lastChild;return p(b)?R:k(b)});b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=c(a).nextSibling;return p(b)?R:k(b)});b.wbg.__wbg_setnodeValue_94b86af0cda24b90=((a,b,d)=>{c(a).nodeValue=b===R?M:j(b,d)});b.wbg.__wbg_textContent_8e392d624539e731=((b,d)=>{const e=c(d).textContent;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return D((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_insertBefore_d2a001abf538c1f8=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_removeChild_96bbfefd2f5a0261=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_new_ab6fd82b10560829=function(){return D((()=>{const a=new Headers();return k(a)}),arguments)};b.wbg.__wbg_value_d7f5bfbd9302c14b=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_setvalue_090972231f0a4f6f=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_url_7807f6a1fddc3e23=((b,d)=>{const e=c(d).url;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbg_newwithstr_36b0b3f97efe096f=function(){return D(((a,b)=>{const c=new Request(j(a,b));return k(c)}),arguments)};b.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0=function(){return D(((a,b,d)=>{const e=new Request(j(a,b),c(d));return k(e)}),arguments)};b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>R];return k(d)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_next_196c84450b364254=function(){return D((a=>{const b=c(a).next();return k(b)}),arguments)};b.wbg.__wbg_done_298b57d23c0fc80c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_d93c65011f51a456=(a=>{const b=c(a).value;return k(b)});b.wbg.__wbg_get_e3c254076557e348=function(){return D(((a,b)=>{const d=Y.get(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_call_27c0f87801dedf93=function(){return D(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new Z();return k(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return D((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return D((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return D((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return D((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_from_89e3fc3ba5e6fb48=(a=>{const b=K.from(c(a));return k(b)});b.wbg.__wbg_instanceof_Error_e20bb56fd5591a93=(a=>{let b;try{b=c(a) instanceof Q}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_message_5bf28016c2b49cfb=(a=>{const b=c(a).message;return k(b)});b.wbg.__wbg_name_e7429f0dda6079e2=(a=>{const b=c(a).name;return k(b)});b.wbg.__wbg_toString_ffe4c9ea3b3532e9=(a=>{const b=c(a).toString();return k(b)});b.wbg.__wbg_entries_ce844941d0c51880=(a=>{const b=c(a).entries();return k(b)});b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const d=Z.is(c(a),c(b));return d});b.wbg.__wbg_toString_c816a20ab859d0c1=(a=>{const b=c(a).toString();return k(b)});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_a73caa9a87991566=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_set_1f9b04f170055d33=function(){return D(((a,b,d)=>{const e=Y.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ S]=g;r()[b/X+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(j(a,b))});b.wbg.__wbindgen_closure_wrapper346=((a,b,c)=>{const d=u(a,b,141,x);return k(d)});b.wbg.__wbindgen_closure_wrapper611=((a,b,c)=>{const d=y(a,b,251,z);return k(d)});return b});var E=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var k=(a=>{if(d===b.length)b.push(b.length+ S);const c=d;d=b[c];b[c]=a;return c});var J=(async(b)=>{if(a!==M)return a;if(typeof b===O){b=new URL(`mathkimchi-github-io-f5177699228cea45_bg.wasm`,import.meta.url)};const c=F();if(typeof b===U||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var o=((a,b,c)=>{if(c===M){const c=m.encode(a);const d=b(c.length,S)>>>R;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,S)>>>R;const f=i();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,S)>>>R;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,S)>>>R};l=g;return e});var e=(a=>{if(a<132)return;b[a]=d;d=a});var G=((a,b)=>{});var i=(()=>{if(h===N||h.byteLength===R){h=new Uint8Array(a.memory.buffer)};return h});var c=(a=>b[a]);var r=(()=>{if(q===N||q.byteLength===R){q=new Int32Array(a.memory.buffer)};return q});var w=(a=>{if(v==S)throw new Q(`out of js stack`);b[--v]=a;return v});var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;q=N;A=N;h=N;a.__wbindgen_start();return a});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var C=((a,b)=>{a=a>>>R;const c=B();const d=c.subarray(a/X,a/X+ b);const e=[];for(let a=R;a<d.length;a++){e.push(f(d[a]))};return e});let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);let d=b.length;const g=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){g.decode()};let h=N;let l=R;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===T?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;const t=typeof W===O?{register:()=>{},unregister:()=>{}}:new W(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let v=L;let A=N;export default J;export{I as initSync}