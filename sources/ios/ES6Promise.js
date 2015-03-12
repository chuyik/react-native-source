__d("ES6Promise",["setImmediate"],function (e, t, n, r, i) {
    i.exports = function(e, n) {
        "use strict";

        function r(e) {
            var t = e[f];
            if (!t && (e[f] = t = {}, Object.defineProperty)) try {
                Object.defineProperty(e, f, {
                    value: t
                })
            } catch (n) {}
            return t
        }

        function i(e) {
            return e
        }

        function o(e) {
            throw e
        }

        function a(e) {
            var t = r(this);
            t.state = p, t.fulfillReactions = [], t.rejectReactions = [];
            var n = s(this),
                i = n.reject;
            try {
                e(n.resolve, i)
            } catch (o) {
                i(o)
            }
        }

        function s(e) {
            var t = !1;
            return {
                resolve: function(n) {
                    if (!t) {
                        if (t = !0, n === e) return l(e, h, new TypeError("Cannot resolve promise with itself"));
                        if (!n || "object" != typeof n || "function" != typeof n.then) return l(e, d, n);
                        var r = s(e),
                            i = r.reject;
                        try {
                            n.then(r.resolve, i)
                        } catch (o) {
                            i(o)
                        }
                    }
                },
                reject: function(n) {
                    t || (t = !0, l(e, h, n))
                }
            }
        }

        function l(e, t, i) {
            var o = r(e);
            if (o.state !== p) throw new Error("Settling a " + o.state + " promise");
            var a;
            t === d ? a = o.fulfillReactions : t === h && (a = o.rejectReactions), o.result = i, o.fulfillReactions = n, o.rejectReactions = n, o.state = t;
            var s = a.length;
            s && setImmediate/*c*/(function() {
                for (var e = 0; s > e; ++e) a[e](o.result)
            })
        }

        function u(e, t, n, r) {
            var i = arguments.length > 3;
            return function(o) {
                try {
                    o = n(i ? r : o)
                } catch (a) {
                    return void t(a)
                }
                e(o)
            }
        }
        var setImmediate/*c*/ = t("setImmediate"),
            p = "pending",
            d = "fulfilled",
            h = "rejected",
            f = "__slots$" + Math.random().toString(36).slice(2);
        a.all = function(e) {
            var t = this;
            return new t(function(n, r) {
                var i = [],
                    o = 0;
                e.forEach(function(e, a) {
                    ++o, t.resolve(e).then(function(e) {
                        i.hasOwnProperty(a) || (i[a] = e, --o || n(i))
                    }, r)
                }), o || n(i)
            })
        }, a.race = function(e) {
            var t = this;
            return new t(function(n, r) {
                e.forEach(function(e) {
                    t.resolve(e).then(n, r)
                })
            })
        }, a.resolve = function(e) {
            return e instanceof a && e.constructor === this ? e : new this(function(t) {
                t(e)
            })
        }, a.reject = function(e) {
            return new this(function(t, n) {
                n(e)
            })
        };
        var m = a.prototype;
        return m.then = function(e, t) {
            var a, s, l = new this.constructor(function(e, t) {
                a = e, s = t
            });
            if ("function" != typeof a) throw new TypeError("Uncallable Promise resolve function");
            if ("function" != typeof s) throw new TypeError("Uncallable Promise reject function");
            (e === n || null === e) && (e = i), (t === n || null === t) && (t = o);
            var f = r(this),
                m = f.state;
            return m === p ? (f.fulfillReactions.push(u(a, s, e)), f.rejectReactions.push(u(a, s, t))) : (m === d || m === h) && setImmediate/*c*/(u(a, s, m === d ? e : t, f.result)), l
        }, m["catch"] = function(e) {
            return this.then(n, e)
        }, m.toString = function() {
            return "[object Promise]"
        }, a
    }(Function("return this")())
});