__d("ImmediateImplementation",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, exports/*o*/) {
    ! function(global/*e*/, require/*t*/) {
        "use strict";

        function requireDynamic/*n*/(global/*e*/) {
            var requireDynamic/*n*/ = global/*e*/[0];
            return global/*e*/ = Array.prototype.slice.call(global/*e*/, 1), h[d] = function() {
                requireDynamic/*n*/.apply(require/*t*/, global/*e*/)
            }, m = m.next = {
                handle: d++
            }, m.handle
        }

        function requireLazy/*r*/() {
            for (var global/*e*/, require/*t*/; !g && (global/*e*/ = f.next);)
                if (f = global/*e*/, require/*t*/ = h[global/*e*/.handle]) {
                    g = !0;
                    try {
                        require/*t*/(), g = !1
                    } finally {
                        module/*i*/(global/*e*/.handle), g && (g = !1, f.next && p(requireLazy/*r*/))
                    }
                }
        }

        function module/*i*/(global/*e*/) {
            delete h[global/*e*/]
        }

        function a() {
            if (global/*e*/.postMessage && !global/*e*/.importScripts) {
                var require/*t*/ = !0,
                    requireDynamic/*n*/ = function() {
                        require/*t*/ = !1, global/*e*/.removeEventListener ? global/*e*/.removeEventListener("message", requireDynamic/*n*/, !1) : global/*e*/.detachEvent("onmessage", requireDynamic/*n*/)
                    };
                if (global/*e*/.addEventListener) global/*e*/.addEventListener("message", requireDynamic/*n*/, !1);
                else {
                    if (!global/*e*/.attachEvent) return !1;
                    global/*e*/.attachEvent("onmessage", requireDynamic/*n*/)
                }
                return global/*e*/.postMessage("", "*"), require/*t*/
            }
        }

        function s() {
            var require/*t*/ = "setImmediate$" + Math.random() + "$",
                module/*i*/ = function(requireDynamic/*n*/) {
                    requireDynamic/*n*/.source === global/*e*/ && "string" == typeof requireDynamic/*n*/.data && 0 === requireDynamic/*n*/.data.indexOf(require/*t*/) && requireLazy/*r*/()
                };
            global/*e*/.addEventListener ? global/*e*/.addEventListener("message", module/*i*/, !1) : global/*e*/.attachEvent("onmessage", module/*i*/), p = function() {
                var requireLazy/*r*/ = requireDynamic/*n*/(arguments);
                return global/*e*/.postMessage(require/*t*/ + requireLazy/*r*/, "*"), requireLazy/*r*/
            }
        }

        function l() {
            var global/*e*/ = new MessageChannel;
            global/*e*/.port1.onmessage = requireLazy/*r*/, p = function() {
                var require/*t*/ = requireDynamic/*n*/(arguments);
                return global/*e*/.port2.postMessage(require/*t*/), require/*t*/
            }
        }

        function u() {
            var global/*e*/ = _.documentElement;
            p = function() {
                var require/*t*/ = requireDynamic/*n*/(arguments),
                    module/*i*/ = _.createElement("script");
                return module/*i*/.onreadystatechange = function() {
                    module/*i*/.onreadystatechange = null, global/*e*/.removeChild(module/*i*/), module/*i*/ = null, requireLazy/*r*/()
                }, global/*e*/.appendChild(module/*i*/), require/*t*/
            }
        }

        function c() {
            p = function() {
                return setTimeout(requireLazy/*r*/, 0), requireDynamic/*n*/(arguments)
            }
        }
        var p, d = 1,
            h = {},
            f = {},
            m = f,
            g = !1,
            _ = global/*e*/.document;
        a() ? s() : global/*e*/.MessageChannel ? l() : _ && "onreadystatechange" in _.createElement("script") ? u() : c(), exports/*o*/.setImmediate = p, exports/*o*/.clearImmediate = module/*i*/
    }(Function("return this")())
});