"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[255],{71255:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(()=>{var e="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return e=e||"/index.js",function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,i,a="undefined"!=typeof t?t:{};a.ready=new Promise((function(e,t){r=e,i=t})),["_QTS_Throw","_QTS_NewError","_QTS_RuntimeSetMemoryLimit","_QTS_RuntimeComputeMemoryUsage","_QTS_RuntimeDumpMemoryUsage","_QTS_RecoverableLeakCheck","_QTS_BuildIsSanitizeLeak","_QTS_RuntimeSetMaxStackSize","_QTS_GetUndefined","_QTS_GetNull","_QTS_GetFalse","_QTS_GetTrue","_QTS_NewRuntime","_QTS_FreeRuntime","_QTS_NewContext","_QTS_FreeContext","_QTS_FreeValuePointer","_QTS_FreeValuePointerRuntime","_QTS_FreeVoidPointer","_QTS_FreeCString","_QTS_DupValuePointer","_QTS_NewObject","_QTS_NewObjectProto","_QTS_NewArray","_QTS_NewFloat64","_QTS_GetFloat64","_QTS_NewString","_QTS_GetString","_QTS_NewSymbol","_QTS_GetSymbolDescriptionOrKey","_QTS_IsGlobalSymbol","_QTS_IsJobPending","_QTS_ExecutePendingJob","_QTS_GetProp","_QTS_SetProp","_QTS_DefineProp","_QTS_Call","_QTS_ResolveException","_QTS_Dump","_QTS_Eval","_QTS_Typeof","_QTS_GetGlobalObject","_QTS_NewPromiseCapability","_QTS_TestStringArg","_QTS_BuildIsDebug","_QTS_BuildIsAsyncify","_QTS_NewFunction","_QTS_ArgvGetJSValueConstPointer","_QTS_RuntimeEnableInterruptHandler","_QTS_RuntimeDisableInterruptHandler","_QTS_RuntimeEnableModuleLoader","_QTS_RuntimeDisableModuleLoader","_malloc","_free","_fflush","onRuntimeInitialized"].forEach((e=>{Object.getOwnPropertyDescriptor(a.ready,e)||Object.defineProperty(a.ready,e,{get:()=>ee("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>ee("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})}));var o=Object.assign({},a),l=(e,t)=>{throw t},s="object"==typeof window,u="function"==typeof importScripts,c="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d=!s&&!c&&!u;if(a.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var _,f,m,p="";function y(e){return a.locateFile?a.locateFile(e,p):p+e}if(c){if("undefined"==typeof process||!process.release||"node"!==process.release.name)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var S=process.versions.node,T=S.split(".").slice(0,3);if((T=1e4*T[0]+100*T[1]+1*T[2].split("-")[0])<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+S+")");var g=n(31185),h=n(86421);p=u?h.dirname(p)+"/":"//",_=(e,t)=>(e=ae(e)?new URL(e):h.normalize(e),g.readFileSync(e,t?void 0:"utf8")),m=e=>{var t=_(e,!0);return t.buffer||(t=new Uint8Array(t)),k(t.buffer),t},f=(e,t,n)=>{e=ae(e)?new URL(e):h.normalize(e),g.readFile(e,(function(e,r){e?n(e):t(r.buffer)}))},!a.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),l=(e,t)=>{throw process.exitCode=e,t},a.inspect=function(){return"[Emscripten Module object]"}}else if(d){if("object"==typeof process||"object"==typeof window||"function"==typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");"undefined"!=typeof read&&(_=function(e){return read(e)}),m=function(e){let t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(t=read(e,"binary"),k("object"==typeof t),t)},f=function(e,t,n){setTimeout((()=>t(m(e))),0)},"undefined"==typeof clearTimeout&&(globalThis.clearTimeout=e=>{}),"undefined"!=typeof scriptArgs?scriptArgs:"undefined"!=typeof arguments&&arguments,"function"==typeof quit&&(l=(e,t)=>{throw setTimeout((()=>{if(!(t instanceof ve)){let e=t;t&&"object"==typeof t&&t.stack&&(e=[t,t.stack]),w("exiting due to exception: "+e)}quit(e)})),t}),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)}else{if(!s&&!u)throw new Error("environment detection error");if(u?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),e&&(p=e),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"","object"!=typeof window&&"function"!=typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");_=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},u&&(m=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),f=(e,t,n)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},e=>document.title=e}var b=a.print||console.log.bind(console),w=a.printErr||console.warn.bind(console);Object.assign(a,o),o=null,mt(),a.arguments&&a.arguments,_e("arguments","arguments_"),a.thisProgram&&a.thisProgram,_e("thisProgram","thisProgram"),a.quit&&(l=a.quit),_e("quit","quit_"),k("undefined"==typeof a.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),k("undefined"==typeof a.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),k("undefined"==typeof a.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),k("undefined"==typeof a.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),k("undefined"==typeof a.read,"Module.read option was removed (modify read_ in JS)"),k("undefined"==typeof a.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),k("undefined"==typeof a.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),k("undefined"==typeof a.setWindowTitle,"Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),k("undefined"==typeof a.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),_e("read","read_"),_e("readAsync","readAsync"),_e("readBinary","readBinary"),_e("setWindowTitle","setWindowTitle");var v;k(!d,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),a.wasmBinary&&(v=a.wasmBinary),_e("wasmBinary","wasmBinary");var C,E=a.noExitRuntime||!0;_e("noExitRuntime","noExitRuntime"),"object"!=typeof WebAssembly&&ee("no native wasm support detected");var F,R,Q,I,A,M=!1;function k(e,t){e||ee("Assertion failed"+(t?": "+t:""))}function P(){var e=C.buffer;a.HEAP8=R=new Int8Array(e),a.HEAP16=new Int16Array(e),a.HEAP32=I=new Int32Array(e),a.HEAPU8=Q=new Uint8Array(e),a.HEAPU16=new Uint16Array(e),a.HEAPU32=A=new Uint32Array(e),a.HEAPF32=new Float32Array(e),a.HEAPF64=new Float64Array(e)}function j(){var e=ht();k(0==(3&e)),0==e&&(e+=4),A[e>>2]=34821223,A[e+4>>2]=2310721022,A[0]=1668509029}function D(){if(!M){var e=ht();0==e&&(e+=4);var t=A[e>>2],n=A[e+4>>2];34821223==t&&2310721022==n||ee("Stack overflow! Stack cookie has been overwritten at "+Ee(e)+", expected hex dwords 0x89BACDFE and 0x2135467, but received "+Ee(n)+" "+Ee(t)),1668509029!==A[0]&&ee("Runtime error: The application has corrupted its heap memory area (address zero)!")}}k(!a.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),k("undefined"!=typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!=Int32Array.prototype.subarray&&void 0!=Int32Array.prototype.set,"JS engine does not provide full typed array support"),k(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),k(!a.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),function(){var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"}();var N=[],O=[],L=[],U=!1,x=0;function G(){return E||x>0}function z(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)B(a.preRun.shift());Ce(N)}function H(){k(!U),U=!0,D(),Ce(O)}function Y(){if(D(),a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)V(a.postRun.shift());Ce(L)}function B(e){N.unshift(e)}function W(e){O.unshift(e)}function V(e){L.unshift(e)}k(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),k(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),k(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),k(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var J=0,q=null,K=null,Z={};function X(e){J++,a.monitorRunDependencies&&a.monitorRunDependencies(J),e?(k(!Z[e]),Z[e]=1,null===q&&"undefined"!=typeof setInterval&&(q=setInterval((function(){if(M)return clearInterval(q),void(q=null);var e=!1;for(var t in Z)e||(e=!0,w("still waiting on run dependencies:")),w("dependency: "+t);e&&w("(end of list)")}),1e4))):w("warning: run dependency added without ID")}function $(e){if(J--,a.monitorRunDependencies&&a.monitorRunDependencies(J),e?(k(Z[e]),delete Z[e]):w("warning: run dependency removed without ID"),0==J&&(null!==q&&(clearInterval(q),q=null),K)){var t=K;K=null,t()}}function ee(e){a.onAbort&&a.onAbort(e),w(e="Aborted("+e+")"),M=!0,F=1,e.indexOf("RuntimeError: unreachable")>=0&&(e+='. "unreachable" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)');var t=new WebAssembly.RuntimeError(e);throw i(t),t}var te={error:function(){ee("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){te.error()},createDataFile:function(){te.error()},createPreloadedFile:function(){te.error()},createLazyFile:function(){te.error()},open:function(){te.error()},mkdev:function(){te.error()},registerDevice:function(){te.error()},analyzePath:function(){te.error()},ErrnoError:function(){te.error()}};a.FS_createDataFile=te.createDataFile,a.FS_createPreloadedFile=te.createPreloadedFile;var ne,re="data:application/octet-stream;base64,";function ie(e){return e.startsWith(re)}function ae(e){return e.startsWith("file://")}function oe(e,t){return function(){var n=e,r=t;return t||(r=a.asm),k(U,"native function `"+n+"` called before runtime initialization"),r[e]||k(r[e],"exported native function `"+n+"` not found"),r[e].apply(null,arguments)}}function le(e){try{if(e==ne&&v)return new Uint8Array(v);if(m)return m(e);throw"both async and sync fetching of the wasm failed"}catch(w){ee(w)}}function se(e){if(!v&&(s||u)){if("function"==typeof fetch&&!ae(e))return fetch(e,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()})).catch((function(){return le(e)}));if(f)return new Promise((function(t,n){f(e,(function(e){t(new Uint8Array(e))}),n)}))}return Promise.resolve().then((function(){return le(e)}))}function ue(e,t,n){return se(e).then((function(e){return WebAssembly.instantiate(e,t)})).then((function(e){return e})).then(n,(function(e){w("failed to asynchronously prepare wasm: "+e),ae(ne)&&w("warning: Loading from a file URI ("+ne+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),ee(e)}))}function ce(e,t,n,r){return e||"function"!=typeof WebAssembly.instantiateStreaming||ie(t)||ae(t)||c||"function"!=typeof fetch?ue(t,n,r):fetch(t,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,n).then(r,(function(e){return w("wasm streaming compile failed: "+e),w("falling back to ArrayBuffer instantiation"),ue(t,n,r)}))}))}function de(){var e={env:pt,wasi_snapshot_preview1:pt};function t(e,t){var n=e.exports;return n=st.instrumentWasmExports(n),a.asm=n,k(C=a.asm.memory,"memory not found in wasm exports"),P(),k(a.asm.__indirect_function_table,"table not found in wasm exports"),W(a.asm.__wasm_call_ctors),$("wasm-instantiate"),n}X("wasm-instantiate");var n=a;if(a.instantiateWasm)try{return a.instantiateWasm(e,t)}catch(r){w("Module.instantiateWasm callback failed with error: "+r),i(r)}return ce(v,ne,e,(function(e){k(a===n,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),n=null,t(e.instance)})).catch(i),{}}function _e(e,t){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get:function(){ee("Module."+e+" has been replaced with plain "+t+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function fe(e){Object.getOwnPropertyDescriptor(a,e)&&ee("`Module."+e+"` was supplied but `"+e+"` not included in INCOMING_MODULE_JS_API")}function me(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function pe(e,t){"undefined"!==typeof globalThis&&Object.defineProperty(globalThis,e,{configurable:!0,get:function(){Fe("`"+e+"` is not longer defined by emscripten. "+t)}})}function ye(e){"undefined"===typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get:function(){var t="`"+e+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line",n=e;n.startsWith("_")||(n="$"+e),t+=" (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE="+n+")",me(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Fe(t)}}),Se(e)}function Se(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get:function(){var t="'"+e+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";me(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ee(t)}})}function Te(e){st.StackSize=e||81920}function ge(e,t,n,r,i){const o={handleSleep:st.handleSleep};return a.callbacks.callFunction(o,e,t,n,r,i)}function he(e){return a.callbacks.shouldInterrupt(undefined,e)}function be(e,t,n){const r={handleSleep:st.handleSleep},i=Ie(n);return a.callbacks.loadModuleSource(r,e,t,i)}function we(e,t,n,r){const i={handleSleep:st.handleSleep},o=Ie(n),l=Ie(r);return a.callbacks.normalizeModule(i,e,t,o,l)}function ve(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Ce(e){for(;e.length>0;)e.shift()(a)}function Ee(e){return k("number"===typeof e),"0x"+e.toString(16).padStart(8,"0")}function Fe(e){Fe.shown||(Fe.shown={}),Fe.shown[e]||(Fe.shown[e]=1,c&&(e="warning: "+e),w(e))}ie(ne="emscripten-module.WASM_DEBUG_ASYNCIFY.wasm")||(ne=y(ne)),pe("buffer","Please use HEAP8.buffer or wasmMemory.buffer");var Re="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Qe(e,t,n){for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.buffer&&Re)return Re.decode(e.subarray(t,i));for(var a="";t<i;){var o=e[t++];if(128&o){var l=63&e[t++];if(192!=(224&o)){var s=63&e[t++];if(224==(240&o)?o=(15&o)<<12|l<<6|s:(240!=(248&o)&&Fe("Invalid UTF-8 leading byte "+Ee(o)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),o=(7&o)<<18|l<<12|s<<6|63&e[t++]),o<65536)a+=String.fromCharCode(o);else{var u=o-65536;a+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else a+=String.fromCharCode((31&o)<<6|l)}else a+=String.fromCharCode(o)}return a}function Ie(e,t){return k("number"==typeof e),e?Qe(Q,e,t):""}function Ae(e,t,n,r){ee("Assertion failed: "+Ie(e)+", at: "+[t?Ie(t):"unknown filename",n,r?Ie(r):"unknown function"])}function Me(e){return A[e>>2]+4294967296*I[e+4>>2]}function ke(e){return e%4===0&&(e%100!==0||e%400===0)}var Pe=[0,31,60,91,121,152,182,213,244,274,305,335],je=[0,31,59,90,120,151,181,212,243,273,304,334];function De(e){return(ke(e.getFullYear())?Pe:je)[e.getMonth()]+e.getDate()-1}function Ne(e,t){var n=new Date(1e3*Me(e));I[t>>2]=n.getSeconds(),I[t+4>>2]=n.getMinutes(),I[t+8>>2]=n.getHours(),I[t+12>>2]=n.getDate(),I[t+16>>2]=n.getMonth(),I[t+20>>2]=n.getFullYear()-1900,I[t+24>>2]=n.getDay();var r=0|De(n);I[t+28>>2]=r,I[t+36>>2]=-60*n.getTimezoneOffset();var i=new Date(n.getFullYear(),0,1),a=new Date(n.getFullYear(),6,1).getTimezoneOffset(),o=i.getTimezoneOffset(),l=0|(a!=o&&n.getTimezoneOffset()==Math.min(o,a));I[t+32>>2]=l}function Oe(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r<=127?t++:r<=2047?t+=2:r>=55296&&r<=57343?(t+=4,++n):t+=3}return t}function Le(e,t,n,r){if(!(r>0))return 0;for(var i=n,a=n+r-1,o=0;o<e.length;++o){var l=e.charCodeAt(o);if(l>=55296&&l<=57343)l=65536+((1023&l)<<10)|1023&e.charCodeAt(++o);if(l<=127){if(n>=a)break;t[n++]=l}else if(l<=2047){if(n+1>=a)break;t[n++]=192|l>>6,t[n++]=128|63&l}else if(l<=65535){if(n+2>=a)break;t[n++]=224|l>>12,t[n++]=128|l>>6&63,t[n++]=128|63&l}else{if(n+3>=a)break;l>1114111&&Fe("Invalid Unicode code point "+Ee(l)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[n++]=240|l>>18,t[n++]=128|l>>12&63,t[n++]=128|l>>6&63,t[n++]=128|63&l}}return t[n]=0,n-i}function Ue(e,t,n){return k("number"==typeof n,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Le(e,Q,t,n)}function xe(e){var t=Oe(e)+1,n=yt(t);return n&&Ue(e,n,t),n}function Ge(e,t,n){var r=(new Date).getFullYear(),i=new Date(r,0,1),a=new Date(r,6,1),o=i.getTimezoneOffset(),l=a.getTimezoneOffset(),s=Math.max(o,l);function u(e){var t=e.toTimeString().match(/\(([A-Za-z ]+)\)$/);return t?t[1]:"GMT"}A[e>>2]=60*s,I[t>>2]=Number(o!=l);var c=u(i),d=u(a),_=xe(c),f=xe(d);l<o?(A[n>>2]=_,A[n+4>>2]=f):(A[n>>2]=f,A[n+4>>2]=_)}function ze(){ee("native code called abort()")}function He(){return Date.now()}function Ye(e,t,n){Q.copyWithin(e,t,t+n)}function Be(e){var t=C.buffer;try{return C.grow(e-t.byteLength+65535>>>16),P(),1}catch(n){w("emscripten_realloc_buffer: Attempted to grow heap from "+t.byteLength+" bytes to "+e+" bytes, but got error: "+n)}}function We(e){var t=Q.length;k((e>>>=0)>t);var n=2147483648;if(e>n)return w("Cannot enlarge memory, asked to go up to "+e+" bytes, but the limit is "+"2147483648 bytes!"),!1;for(var r=1;r<=4;r*=2){var i=t*(1+.2/r);i=Math.min(i,e+100663296);var a=Math.min(n,(o=Math.max(e,i))+((l=65536)-o%l)%l);if(Be(a))return!0}var o,l;return w("Failed to grow the heap from "+t+" bytes to "+a+" bytes, not enough memory!"),!1}function Ve(e){ee("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function Je(e,t,n,r,i){return 70}var qe=[null,[],[]];function Ke(e,t){var n=qe[e];k(n),0===t||10===t?((1===e?b:w)(Qe(n,0)),n.length=0):n.push(t)}function Ze(){Tt(0),qe[1].length&&Ke(1,10),qe[2].length&&Ke(2,10)}function Xe(e,t,n,r){for(var i=0,a=0;a<n;a++){var o=A[t>>2],l=A[t+4>>2];t+=8;for(var s=0;s<l;s++)Ke(e,Q[o+s]);i+=l}return A[r>>2]=i,0}function $e(e){try{return e()}catch(t){ee(t)}}function et(e){if(e instanceof ve||"unwind"==e)return F;D(),e instanceof WebAssembly.RuntimeError&&Ct()<=0&&w("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)"),l(1,e)}function tt(e){F=e,G()||(a.onExit&&a.onExit(e),M=!0),l(e,new ve(e))}function nt(e,t){if(F=e,jt(),G()&&!t){var n="program exited (with status: "+e+"), but keepRuntimeAlive() is set (counter="+x+") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";i(n),w(n)}tt(e)}var rt=nt;function it(){if(!G())try{rt(F)}catch(e){et(e)}}function at(e){if(M)w("user callback triggered after runtime exited or application aborted.  Ignoring.");else try{e(),it()}catch(t){et(t)}}function ot(){x+=1}function lt(){k(x>0),x-=1}var st={instrumentWasmImports:function(e){var t=["qts_host_call_function","qts_host_load_module_source","qts_host_normalize_module","invoke_*","emscripten_wget","emscripten_wget_data","emscripten_idb_load","emscripten_idb_store","emscripten_idb_delete","emscripten_idb_exists","emscripten_idb_load_blob","emscripten_idb_store_blob","SDL_Delay","emscripten_scan_registers","emscripten_lazy_load_code","emscripten_fiber_swap","__load_secondary_module","fd_sync","__wasi_fd_sync","_emval_await","_dlopen_js","__asyncjs__*","emscripten_sleep","_load_secondary_module"];for(var n in e)!function(n){var r=e[n];r.sig;if("function"==typeof r){var i=r.isAsync||t.indexOf(n)>=0||n.startsWith("__asyncjs__");e[n]=function(){var e=st.state;try{return r.apply(null,arguments)}finally{var t=e===st.State.Normal&&st.state===st.State.Disabled,a=n.startsWith("invoke_")&&!0;if(st.state!==e&&!i&&!t&&!a)throw new Error("import "+n+" was not in ASYNCIFY_IMPORTS, but changed the state")}}}}(n)},instrumentWasmExports:function(e){var t={};for(var n in e)!function(n){var r=e[n];t[n]="function"==typeof r?function(){st.exportCallStack.push(n);try{return r.apply(null,arguments)}finally{if(!M){var e=st.exportCallStack.pop();k(e===n),st.maybeStopUnwind()}}}:r}(n);return t},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:81920,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(e){var t=st.callStackNameToId[e];return void 0===t&&(t=st.callStackId++,st.callStackNameToId[e]=t,st.callStackIdToName[t]=e),t},maybeStopUnwind:function(){st.currData&&st.state===st.State.Unwinding&&0===st.exportCallStack.length&&(st.state=st.State.Normal,$e(Ft),"undefined"!=typeof Fibers&&Fibers.trampoline())},whenDone:function(){return k(st.currData,"Tried to wait for an async operation when none is in progress."),k(!st.asyncPromiseHandlers,"Cannot have multiple async operations in flight at once"),new Promise(((e,t)=>{st.asyncPromiseHandlers={resolve:e,reject:t}}))},allocateData:function(){var e=yt(12+st.StackSize);return st.setDataHeader(e,e+12,st.StackSize),st.setDataRewindFunc(e),e},setDataHeader:function(e,t,n){I[e>>2]=t,I[e+4>>2]=t+n},setDataRewindFunc:function(e){var t=st.exportCallStack[0],n=st.getCallStackId(t);I[e+8>>2]=n},getDataRewindFunc:function(e){var t=I[e+8>>2],n=st.callStackIdToName[t];return a.asm[n]},doRewind:function(e){return st.getDataRewindFunc(e)()},handleSleep:function(e){if(k(st.state!==st.State.Disabled,"Asyncify cannot be done during or after the runtime exits"),!M){if(st.state===st.State.Normal){var t=!1,n=!1;e((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(k(!e||"number"==typeof e||"boolean"==typeof e),!M&&(st.handleSleepReturnValue=e,t=!0,n)){k(!st.exportCallStack.length,"Waking up (starting to rewind) must be done from JS, without compiled code on the stack."),st.state=st.State.Rewinding,$e((()=>Rt(st.currData))),"undefined"!=typeof Browser&&Browser.mainLoop.func&&Browser.mainLoop.resume();var r,i=!1;try{r=st.doRewind(st.currData)}catch(w){r=w,i=!0}var a=!1;if(!st.currData){var o=st.asyncPromiseHandlers;o&&(st.asyncPromiseHandlers=null,(i?o.reject:o.resolve)(r),a=!0)}if(i&&!a)throw r}})),n=!0,t||(st.state=st.State.Unwinding,st.currData=st.allocateData(),"undefined"!=typeof Browser&&Browser.mainLoop.func&&Browser.mainLoop.pause(),$e((()=>Et(st.currData))))}else st.state===st.State.Rewinding?(st.state=st.State.Normal,$e(Qt),St(st.currData),st.currData=null,st.sleepCallbacks.forEach((e=>at(e)))):ee("invalid state: "+st.state);return st.handleSleepReturnValue}},handleAsync:function(e){return st.handleSleep((t=>{e().then(t)}))}};function ut(e){var t=a["_"+e];return k(t,"Cannot call unknown function "+e+", make sure it is exported"),t}function ct(e,t){k(e.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),R.set(e,t)}function dt(e){var t=Oe(e)+1,n=vt(t);return Ue(e,n,t),n}function _t(e,t,n,r,i){var a={string:e=>{var t=0;return null!==e&&void 0!==e&&0!==e&&(t=dt(e)),t},array:e=>{var t=vt(e.length);return ct(e,t),t}};var o=ut(e),l=[],s=0;if(k("array"!==t,'Return type should not be "array".'),r)for(var u=0;u<r.length;u++){var c=a[n[u]];c?(0===s&&(s=bt()),l[u]=c(r[u])):l[u]=r[u]}var d=st.currData,_=o.apply(null,l);function f(e){return lt(),0!==s&&wt(s),function(e){return"string"===t?Ie(e):"boolean"===t?Boolean(e):e}(e)}ot();var m=i&&i.async;return st.currData!=d?(k(!(d&&st.currData),"We cannot start an async operation when one is already flight"),k(!(d&&!st.currData),"We cannot stop an async operation in flight"),k(m,"The call to "+e+" is running asynchronously. If this was intended, add the async option to the ccall/cwrap call."),st.whenDone().then(f)):(_=f(_),m?Promise.resolve(_):_)}function ft(e,t,n,r){return function(){return _t(e,t,n,arguments,r)}}function mt(){fe("fetchSettings")}var pt={__assert_fail:Ae,_localtime_js:Ne,_tzset_js:Ge,abort:ze,emscripten_date_now:He,emscripten_memcpy_big:Ye,emscripten_resize_heap:We,fd_close:Ve,fd_seek:Je,fd_write:Xe,qts_host_call_function:ge,qts_host_interrupt_handler:he,qts_host_load_module_source:be,qts_host_normalize_module:we,set_asyncify_stack_size:Te};st.instrumentWasmImports(pt);de(),oe("__wasm_call_ctors");var yt=a._malloc=oe("malloc"),St=(a._QTS_Throw=oe("QTS_Throw"),a._QTS_NewError=oe("QTS_NewError"),a._QTS_RuntimeSetMemoryLimit=oe("QTS_RuntimeSetMemoryLimit"),a._QTS_RuntimeComputeMemoryUsage=oe("QTS_RuntimeComputeMemoryUsage"),a._QTS_RuntimeDumpMemoryUsage=oe("QTS_RuntimeDumpMemoryUsage"),a._QTS_RecoverableLeakCheck=oe("QTS_RecoverableLeakCheck"),a._QTS_BuildIsSanitizeLeak=oe("QTS_BuildIsSanitizeLeak"),a._QTS_RuntimeSetMaxStackSize=oe("QTS_RuntimeSetMaxStackSize"),a._QTS_GetUndefined=oe("QTS_GetUndefined"),a._QTS_GetNull=oe("QTS_GetNull"),a._QTS_GetFalse=oe("QTS_GetFalse"),a._QTS_GetTrue=oe("QTS_GetTrue"),a._QTS_NewRuntime=oe("QTS_NewRuntime"),a._QTS_FreeRuntime=oe("QTS_FreeRuntime"),a._QTS_NewContext=oe("QTS_NewContext"),a._QTS_FreeContext=oe("QTS_FreeContext"),a._QTS_FreeValuePointer=oe("QTS_FreeValuePointer"),a._free=oe("free")),Tt=(a._QTS_FreeValuePointerRuntime=oe("QTS_FreeValuePointerRuntime"),a._QTS_FreeVoidPointer=oe("QTS_FreeVoidPointer"),a._QTS_FreeCString=oe("QTS_FreeCString"),a._QTS_DupValuePointer=oe("QTS_DupValuePointer"),a._QTS_NewObject=oe("QTS_NewObject"),a._QTS_NewObjectProto=oe("QTS_NewObjectProto"),a._QTS_NewArray=oe("QTS_NewArray"),a._QTS_NewFloat64=oe("QTS_NewFloat64"),a._QTS_GetFloat64=oe("QTS_GetFloat64"),a._QTS_NewString=oe("QTS_NewString"),a._QTS_GetString=oe("QTS_GetString"),a._QTS_NewSymbol=oe("QTS_NewSymbol"),a._QTS_GetSymbolDescriptionOrKey=oe("QTS_GetSymbolDescriptionOrKey"),a._QTS_IsGlobalSymbol=oe("QTS_IsGlobalSymbol"),a._QTS_IsJobPending=oe("QTS_IsJobPending"),a._QTS_ExecutePendingJob=oe("QTS_ExecutePendingJob"),a._QTS_GetProp=oe("QTS_GetProp"),a._QTS_SetProp=oe("QTS_SetProp"),a._QTS_DefineProp=oe("QTS_DefineProp"),a._QTS_Call=oe("QTS_Call"),a._QTS_ResolveException=oe("QTS_ResolveException"),a._QTS_Dump=oe("QTS_Dump"),a._QTS_Eval=oe("QTS_Eval"),a._QTS_Typeof=oe("QTS_Typeof"),a._QTS_GetGlobalObject=oe("QTS_GetGlobalObject"),a._QTS_NewPromiseCapability=oe("QTS_NewPromiseCapability"),a._QTS_TestStringArg=oe("QTS_TestStringArg"),a._QTS_BuildIsDebug=oe("QTS_BuildIsDebug"),a._QTS_BuildIsAsyncify=oe("QTS_BuildIsAsyncify"),a._QTS_NewFunction=oe("QTS_NewFunction"),a._QTS_ArgvGetJSValueConstPointer=oe("QTS_ArgvGetJSValueConstPointer"),a._QTS_RuntimeEnableInterruptHandler=oe("QTS_RuntimeEnableInterruptHandler"),a._QTS_RuntimeDisableInterruptHandler=oe("QTS_RuntimeDisableInterruptHandler"),a._QTS_RuntimeEnableModuleLoader=oe("QTS_RuntimeEnableModuleLoader"),a._QTS_RuntimeDisableModuleLoader=oe("QTS_RuntimeDisableModuleLoader"),a._fflush=oe("fflush")),gt=(oe("__dl_seterr"),function(){return(gt=a.asm.emscripten_stack_init).apply(null,arguments)}),ht=function(){return(ht=a.asm.emscripten_stack_get_end).apply(null,arguments)},bt=oe("stackSave"),wt=oe("stackRestore"),vt=oe("stackAlloc"),Ct=function(){return(Ct=a.asm.emscripten_stack_get_current).apply(null,arguments)},Et=(a.dynCall_jijiii=oe("dynCall_jijiii"),a.dynCall_iii=oe("dynCall_iii"),a.dynCall_iiiii=oe("dynCall_iiiii"),a.dynCall_iiii=oe("dynCall_iiii"),a.dynCall_ii=oe("dynCall_ii"),a.dynCall_jiij=oe("dynCall_jiij"),a.dynCall_iiiijj=oe("dynCall_iiiijj"),a.dynCall_iiiij=oe("dynCall_iiiij"),a.dynCall_jiiiii=oe("dynCall_jiiiii"),a.dynCall_jij=oe("dynCall_jij"),a.dynCall_jijjiii=oe("dynCall_jijjiii"),a.dynCall_jiii=oe("dynCall_jiii"),a.dynCall_jijiiii=oe("dynCall_jijiiii"),a.dynCall_vii=oe("dynCall_vii"),a.dynCall_jijii=oe("dynCall_jijii"),a.dynCall_jijiiiii=oe("dynCall_jijiiiii"),a.dynCall_jijj=oe("dynCall_jijj"),a.dynCall_viji=oe("dynCall_viji"),a.dynCall_vij=oe("dynCall_vij"),a.dynCall_iiijj=oe("dynCall_iiijj"),a.dynCall_viii=oe("dynCall_viii"),a.dynCall_iijijjji=oe("dynCall_iijijjji"),a.dynCall_iiiji=oe("dynCall_iiiji"),a.dynCall_iiji=oe("dynCall_iiji"),a.dynCall_jijij=oe("dynCall_jijij"),a.dynCall_iijijji=oe("dynCall_iijijji"),a.dynCall_jiiii=oe("dynCall_jiiii"),a.dynCall_jiji=oe("dynCall_jiji"),a.dynCall_dd=oe("dynCall_dd"),a.dynCall_ddd=oe("dynCall_ddd"),a.dynCall_jii=oe("dynCall_jii"),a.dynCall_iiiiii=oe("dynCall_iiiiii"),a.dynCall_iidiiii=oe("dynCall_iidiiii"),oe("asyncify_start_unwind")),Ft=oe("asyncify_stop_unwind"),Rt=oe("asyncify_start_rewind"),Qt=oe("asyncify_stop_rewind");a.___start_em_js=86032,a.___stop_em_js=87084;a.cwrap=ft,a.UTF8ToString=Ie,a.stringToUTF8=Ue,a.lengthBytesUTF8=Oe;var It=["zeroMemory","arraySum","addDays","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","initRandomFill","randomFill","traverseStack","getCallstack","emscriptenLog","convertPCtoSourceLocation","readEmAsmArgs","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","HandleAllocator","getNativeTypeSize","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromU64","convertI32PairToI53","convertU32PairToI53","uleb128Encode","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","getEnvStrings","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","getPromise","makePromise","makePromiseCallback","setMainLoop","_setNetworkCallback","GLFW_Window","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory"];It.forEach(ye);var At,Mt=["run","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","out","err","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","exitJS","getHeapMax","emscripten_realloc_buffer","ENV","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","ERRNO_CODES","ERRNO_MESSAGES","DNS","Protocols","Sockets","timers","warnOnce","UNWIND_CACHE","readEmAsmArgsArray","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","readI53FromI64","convertI32PairToI53Checked","getCFunc","ccall","sigToWasmTypes","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","stringToUTF8Array","UTF16Decoder","stringToNewUTF8","stringToUTF8OnStack","writeArrayToMemory","SYSCALLS","JSEvents","specialHTMLTargets","currentFullscreenStrategy","restoreOldWindowedStyle","ExitStatus","flush_NO_FILESYSTEM","promiseMap","Browser","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","runAndAbortIfError","Asyncify","Fibers","GLFW","allocateUTF8","allocateUTF8OnStack"];function kt(){gt(),j()}function Pt(){function e(){At||(At=!0,a.calledRun=!0,M||(H(),r(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),k(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Y()))}J>0||(kt(),z(),J>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),e()}),1)):e(),D()))}function jt(){var e=b,t=w,n=!1;b=w=e=>{n=!0};try{Ze()}catch(r){}b=e,w=t,n&&(Fe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."),Fe("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)"))}if(Mt.forEach(Se),K=function e(){At||Pt(),At||(K=e)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Pt(),t.ready}})();e.exports=r}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/255.ad221304.chunk.js.map