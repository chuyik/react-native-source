__d("ES6StringUtils",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = {
        fromCodePoint: function() {
            for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
            if (String.fromCodePoint) return String.fromCodePoint.apply(this, global/*e*/);
            for (var requireLazy/*r*/ = [], module/*i*/ = 0; module/*i*/ < global/*e*/.length; module/*i*/++) {
                var o = Number(global/*e*/[module/*i*/]);
                if (!isFinite(o) || 0 > o || o > 1114111 || Math.floor(o) != o) throw RangeError("Invalid code point: " + global/*e*/[module/*i*/]);
                65536 > o ? requireLazy/*r*/.push(String.fromCharCode(o)) : (o -= 65536, requireLazy/*r*/.push(String.fromCharCode((o >> 10) + 55296), String.fromCharCode(o % 1024 + 56320)))
            }
            return requireLazy/*r*/.join("")
        },
        codePointAt: function(global/*e*/) {
            "use strict";
            if (String.prototype.codePointAt) return String.prototype.codePointAt.call(this, global/*e*/);
            if (null === this || void 0 === this) throw TypeError("Invalid context: " + this);
            var require/*t*/ = String(this),
                requireDynamic/*n*/ = require/*t*/.length;
            if (global/*e*/ = global/*e*/ ? Number(global/*e*/) : 0, global/*e*/ != global/*e*/ && (global/*e*/ = 0), 0 > global/*e*/ || global/*e*/ >= requireDynamic/*n*/) return void 0;
            var requireLazy/*r*/ = require/*t*/.charCodeAt(global/*e*/);
            if (requireLazy/*r*/ >= 55296 && 56319 >= requireLazy/*r*/ && requireDynamic/*n*/ > global/*e*/ + 1) {
                var module/*i*/ = require/*t*/.charCodeAt(global/*e*/ + 1);
                if (module/*i*/ >= 56320 && 57343 >= module/*i*/) return 1024 * (requireLazy/*r*/ - 55296) + module/*i*/ - 56320 + 65536
            }
            return requireLazy/*r*/
        }
    };
    module/*i*/.exports = o
});