__d("DliteTaskScheduler",["Promise","invariant"],function (global/*e*/, require/*Promise/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        d || (p.length ? (d = !0, exports/*u.resolve*/().done(function() {
            var global/*e*/ = a(p.shift());
            l ? l(global/*e*/) : global/*e*/()
        })) : d = !1)
    }

    function a(global/*e*/) {
        var require/*Promise/*t*/*/ = !1;
        return function() {
            require/*Promise/*t*/*/ && c(0, "DliteTaskScheduler: Tasks can only be executed once."), require/*Promise/*t*/*/ = !0, invariant/*s*/(global/*e*/), d = !1, o()
        }
    }

    function invariant/*s*/(global/*e*/) {
        var require/*Promise/*t*/*/ = p;
        p = [];
        try {
            global/*e*/()
        } finally {
            Array.prototype.unshift.apply(require/*Promise/*t*/*/, p), p = require/*Promise/*t*/*/
        }
    }
    var l, u = require/*Promise/*t*/*/("Promise"),
        c = require/*Promise/*t*/*/("invariant"),
        p = [],
        d = !1,
        h = {
            injectScheduler: function(global/*e*/) {
                l = global/*e*/
            },
            await: function() {
                var global/*e*/ = arguments,
                    require/*Promise/*t*/*/ = new u(function(require/*Promise/*t*/*/) {
                        function requireDynamic/*n*/(module/*i*/) {
                            p.push(function() {
                                var o = global/*e*/[requireLazy/*r*/++](module/*i*/);
                                requireLazy/*r*/ < global/*e*/.length ? requireDynamic/*n*/(o) : require/*Promise/*t*/*/(o)
                            })
                        }
                        var requireLazy/*r*/ = 0;
                        requireDynamic/*n*/()
                    });
                return o(), require/*Promise/*t*/*/
            }
        };
    module/*i*/.exports = h
});