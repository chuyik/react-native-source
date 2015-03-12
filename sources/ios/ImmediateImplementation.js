__d("ImmediateImplementation",[],function (e, t, n, r, i, o) {
    ! function(e, t) {
        "use strict";

        function n(e) {
            var n = e[0];
            return e = Array.prototype.slice.call(e, 1), h[d] = function() {
                n.apply(t, e)
            }, m = m.next = {
                handle: d++
            }, m.handle
        }

        function r() {
            for (var e, t; !g && (e = f.next);)
                if (f = e, t = h[e.handle]) {
                    g = !0;
                    try {
                        t(), g = !1
                    } finally {
                        i(e.handle), g && (g = !1, f.next && p(r))
                    }
                }
        }

        function i(e) {
            delete h[e]
        }

        function a() {
            if (e.postMessage && !e.importScripts) {
                var t = !0,
                    n = function() {
                        t = !1, e.removeEventListener ? e.removeEventListener("message", n, !1) : e.detachEvent("onmessage", n)
                    };
                if (e.addEventListener) e.addEventListener("message", n, !1);
                else {
                    if (!e.attachEvent) return !1;
                    e.attachEvent("onmessage", n)
                }
                return e.postMessage("", "*"), t
            }
        }

        function s() {
            var t = "setImmediate$" + Math.random() + "$",
                i = function(n) {
                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && r()
                };
            e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i), p = function() {
                var r = n(arguments);
                return e.postMessage(t + r, "*"), r
            }
        }

        function l() {
            var e = new MessageChannel;
            e.port1.onmessage = r, p = function() {
                var t = n(arguments);
                return e.port2.postMessage(t), t
            }
        }

        function u() {
            var e = _.documentElement;
            p = function() {
                var t = n(arguments),
                    i = _.createElement("script");
                return i.onreadystatechange = function() {
                    i.onreadystatechange = null, e.removeChild(i), i = null, r()
                }, e.appendChild(i), t
            }
        }

        function c() {
            p = function() {
                return setTimeout(r, 0), n(arguments)
            }
        }
        var p, d = 1,
            h = {},
            f = {},
            m = f,
            g = !1,
            _ = e.document;
        a() ? s() : e.MessageChannel ? l() : _ && "onreadystatechange" in _.createElement("script") ? u() : c(), o.setImmediate = p, o.clearImmediate = i
    }(Function("return this")())
});