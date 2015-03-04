__d("ES6Promise",["setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    module/*i*/.exports = function(global/*e*/, requireDynamic/*n*/) {
        "use strict";

        function requireLazy/*r*/(global/*e*/) {
            var require/*t*/ = global/*e*/[f];
            if (!require/*t*/ && (global/*e*/[f] = require/*t*/ = {}, Object.defineProperty)) try {
                Object.defineProperty(global/*e*/, f, {
                    value: require/*t*/
                })
            } catch (requireDynamic/*n*/) {}
            return require/*t*/
        }

        function module/*i*/(global/*e*/) {
            return global/*e*/
        }

        function o(global/*e*/) {
            throw global/*e*/
        }

        function a(global/*e*/) {
            var require/*t*/ = requireLazy/*r*/(this);
            require/*t*/.state = p, require/*t*/.fulfillReactions = [], require/*t*/.rejectReactions = [];
            var requireDynamic/*n*/ = s(this),
                module/*i*/ = requireDynamic/*n*/.reject;
            try {
                global/*e*/(requireDynamic/*n*/.resolve, module/*i*/)
            } catch (o) {
                module/*i*/(o)
            }
        }

        function s(global/*e*/) {
            var require/*t*/ = !1;
            return {
                resolve: function(requireDynamic/*n*/) {
                    if (!require/*t*/) {
                        if (require/*t*/ = !0, requireDynamic/*n*/ === global/*e*/) return l(global/*e*/, h, new TypeError("Cannot resolve promise with itself"));
                        if (!requireDynamic/*n*/ || "object" != typeof requireDynamic/*n*/ || "function" != typeof requireDynamic/*n*/.then) return l(global/*e*/, d, requireDynamic/*n*/);
                        var requireLazy/*r*/ = s(global/*e*/),
                            module/*i*/ = requireLazy/*r*/.reject;
                        try {
                            requireDynamic/*n*/.then(requireLazy/*r*/.resolve, module/*i*/)
                        } catch (o) {
                            module/*i*/(o)
                        }
                    }
                },
                reject: function(requireDynamic/*n*/) {
                    require/*t*/ || (require/*t*/ = !0, l(global/*e*/, h, requireDynamic/*n*/))
                }
            }
        }

        function l(global/*e*/, require/*t*/, module/*i*/) {
            var o = requireLazy/*r*/(global/*e*/);
            if (o.state !== p) throw new Error("Settling a " + o.state + " promise");
            var a;
            require/*t*/ === d ? a = o.fulfillReactions : require/*t*/ === h && (a = o.rejectReactions), o.result = module/*i*/, o.fulfillReactions = requireDynamic/*n*/, o.rejectReactions = requireDynamic/*n*/, o.state = require/*t*/;
            var s = a.length;
            s && setImmediate/*c*/(function() {
                for (var global/*e*/ = 0; s > global/*e*/; ++global/*e*/) a[global/*e*/](o.result)
            })
        }

        function u(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = arguments.length > 3;
            return function(o) {
                try {
                    o = requireDynamic/*n*/(module/*i*/ ? requireLazy/*r*/ : o)
                } catch (a) {
                    return void require/*t*/(a)
                }
                global/*e*/(o)
            }
        }
        var setImmediate/*c*/ = require/*t*/("setImmediate"),
            p = "pending",
            d = "fulfilled",
            h = "rejected",
            f = "__slots$" + Math.random().toString(36).slice(2);
        a.all = function(global/*e*/) {
            var require/*t*/ = this;
            return new require/*t*/(function(requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = [],
                    o = 0;
                global/*e*/.forEach(function(global/*e*/, a) {
                    ++o, require/*t*/.resolve(global/*e*/).then(function(global/*e*/) {
                        module/*i*/.hasOwnProperty(a) || (module/*i*/[a] = global/*e*/, --o || requireDynamic/*n*/(module/*i*/))
                    }, requireLazy/*r*/)
                }), o || requireDynamic/*n*/(module/*i*/)
            })
        }, a.race = function(global/*e*/) {
            var require/*t*/ = this;
            return new require/*t*/(function(requireDynamic/*n*/, requireLazy/*r*/) {
                global/*e*/.forEach(function(global/*e*/) {
                    require/*t*/.resolve(global/*e*/).then(requireDynamic/*n*/, requireLazy/*r*/)
                })
            })
        }, a.resolve = function(global/*e*/) {
            return global/*e*/ instanceof a && global/*e*/.constructor === this ? global/*e*/ : new this(function(require/*t*/) {
                require/*t*/(global/*e*/)
            })
        }, a.reject = function(global/*e*/) {
            return new this(function(require/*t*/, requireDynamic/*n*/) {
                requireDynamic/*n*/(global/*e*/)
            })
        };
        var m = a.prototype;
        return m.then = function(global/*e*/, require/*t*/) {
            var a, s, l = new this.constructor(function(global/*e*/, require/*t*/) {
                a = global/*e*/, s = require/*t*/
            });
            if ("function" != typeof a) throw new TypeError("Uncallable Promise resolve function");
            if ("function" != typeof s) throw new TypeError("Uncallable Promise reject function");
            (global/*e*/ === requireDynamic/*n*/ || null === global/*e*/) && (global/*e*/ = module/*i*/), (require/*t*/ === requireDynamic/*n*/ || null === require/*t*/) && (require/*t*/ = o);
            var f = requireLazy/*r*/(this),
                m = f.state;
            return m === p ? (f.fulfillReactions.push(u(a, s, global/*e*/)), f.rejectReactions.push(u(a, s, require/*t*/))) : (m === d || m === h) && setImmediate/*c*/(u(a, s, m === d ? global/*e*/ : require/*t*/, f.result)), l
        }, m["catch"] = function(global/*e*/) {
            return this.then(requireDynamic/*n*/, global/*e*/)
        }, m.toString = function() {
            return "[object Promise]"
        }, a
    }(Function("return this")())
});