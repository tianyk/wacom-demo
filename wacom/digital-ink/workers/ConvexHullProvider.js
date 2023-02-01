!function(){"use strict";function t(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function r(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(t,r){return n=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},n(t,r)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,r){if(r&&("object"===o(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,r,e){return u=c()?Reflect.construct:function(t,r,e){var o=[null];o.push.apply(o,r);var i=new(Function.bind.apply(t,o));return e&&n(i,e.prototype),i},u.apply(null,arguments)}function s(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}var l={exports:{}};!function(t){var r=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function w(){}function g(){}var m={};u(m,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==e&&n.call(x,i)&&(m=x);var k=g.prototype=d.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}return w.prototype=g,u(k,"constructor",g),u(g,"constructor",w),w.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}(l);var h=l.exports;"function"==typeof Worker&&(Worker.prototype.on=function(t,r){this["on".concat(t)]=function(e){var n="message"==t?e.data:e;r(n)}}),"function"==typeof DedicatedWorkerGlobalScope&&(DedicatedWorkerGlobalScope.prototype.on=function(t,r){this["on".concat(t)]=function(e){var n="message"==t?e.data:e;r(n)}});var p=function(){function r(){t(this,r),this.worker,this.transferables=[]}var n,o,i,a;return e(r,[{key:"recieve",value:(a=f(h.mark((function t(r){var e;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("INIT"!=r.action){t.next=7;break}return this.worker=r.worker,t.next=4,this.init(r);case 4:e=t.sent,t.next=10;break;case 7:return t.next=9,this.process(r);case 9:e=t.sent;case 10:e.worker=this.worker,this.send(e);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"send",value:function(t){self.postMessage(t,this.transferables),this.transferables.length=0}},{key:"init",value:(i=f(h.mark((function t(r){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r);case 1:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)})},{key:"process",value:(o=f(h.mark((function t(r){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw new Error("ThreadProcessor.process(message) is abstract and should be implemented");case 1:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})}],[{key:"connect",value:(n=f(h.mark((function t(){var r,e,n,o,i,a,c,s=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=s.length,e=new Array(r),n=0;n<r;n++)e[n]=s[n];if(o=u(this,e),"undefined"!=typeof self){t.next=10;break}return t.next=5,import("worker_threads");case 5:i=t.sent,a=i.parentPort,c=i.workerData,global.self=a,self.name=c.name,self.data=c;case 10:self.on("message",function(){var t=f(h.mark((function t(r){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.recieve(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}());case 11:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),r}(),y=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;t(this,r),this.stride=e}return e(r,[{key:"sort",value:function(t,r){return this.sortArrayPart(t,0,t.length-this.stride,r),t}},{key:"partition",value:function(t,r,e,n){for(var o=t[e],i=t[e+1],a=r-this.stride,c=r;c<e;c+=2)n?n(o,i,t[c],t[c+1])&&(a+=this.stride,this.swap(t,a,c)):(o>t[c]||o==t[c]&&i>t[c+1])&&(a+=this.stride,this.swap(t,a,c));return this.swap(t,a+this.stride,e),a+this.stride}},{key:"swap",value:function(t,r,e){var n=t[r],o=t[r+1];return t[r]=t[e],t[r+1]=t[e+1],t[e]=n,t[e+1]=o,t}},{key:"sortArrayPart",value:function(t,r,e,n){if(r<e){var o=this.partition(t,r,e,n);this.sortArrayPart(t,r,o-this.stride,n),this.sortArrayPart(t,o+this.stride,e,n)}}}]),r}();function v(t,r,e,n,o,i){return(e-t)*(i-r)-(n-r)*(o-t)}var d=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Float32Array;t(this,r),this.ArrayType=e,this.quickSort=new y}return e(r,[{key:"monotoneChain",value:function(t){if(t.length<=0)return new this.ArrayType;this.quickSort.sort(t);for(var r=new this.ArrayType(t.length),e=0,n=0;n<t.length;n+=2){for(;e>=4&&v(r[e-4],r[e-3],r[e-2],r[e-1],t[n],t[n+1])<=0;)e-=2;r[e]=t[n],r[e+1]=t[n+1],e+=2}r=r.slice(0,e);var o,i=new this.ArrayType(t.length);e=0;for(var a=t.length-2;a>=0;a-=2){for(;e>=4&&v(i[e-4],i[e-3],i[e-2],i[e-1],t[a],t[a+1])<=0;)e-=2;i[e]=t[a],i[e+1]=t[a+1],e+=2}if(i=i.slice(0,e-2),this.ArrayType==Float32Array){var c=i.length+r.length;(o=Float32Array.createSharedInstance(c)).set(i),o.set(r,i.length)}else o=i.concat(r);return o}}]),r}();function w(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=a(t);if(r){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return i(this,e)}}var g=function(r){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&n(t,r)}(i,r);var o=w(i);function i(){var r;return t(this,i),(r=o.call(this)).convexHullProducer=new d(Float32Array),r}return e(i,[{key:"init",value:function(t){return Float32Array.createSharedInstance=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t instanceof this)return t;if("number"!=typeof t&&!Array.isArray(t))throw new Error("Expected data type is Array");var r="number"==typeof t?t:t.length;if("undefined"==typeof SharedArrayBuffer)return new this("number"==typeof t?r:t);var e=new SharedArrayBuffer(r*this.BYTES_PER_ELEMENT);if("number"==typeof t)return new this(e);var n=new this(e);return n.set(t),n},t}},{key:"process",value:function(t){var r=t;if("BUILD"!==t.action)throw new Error("Unknow data action found: ".concat(t.action));return r.data=this.convexHullProducer.monotoneChain(t.data),r.data.buffer instanceof ArrayBuffer&&this.transferables.push(r.data.buffer),r}}]),i}(p);g.connect()}();
