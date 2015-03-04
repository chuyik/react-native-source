__d("DliteTaskScheduler",["Promise","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        d || (p.length ? (d = !0, Promise/*u*/.resolve().done(function() {
            var global/*e*/ = a(p.shift());
            l ? l(global/*e*/) : global/*e*/()
        })) : d = !1)
    }

    function a(global/*e*/) {
        var require/*t*/ = !1;
        return function() {
            require/*t*/ && invariant/*c*/(0, "DliteTaskScheduler: Tasks can only be executed once."), require/*t*/ = !0, s(global/*e*/), d = !1, o()
        }
    }

    function s(global/*e*/) {
        var require/*t*/ = p;
        p = [];
        try {
            global/*e*/()
        } finally {
            Array.prototype.unshift.apply(require/*t*/, p), p = require/*t*/
        }
    }
    var l, Promise/*u*/ = require/*t*/("Promise"),
        invariant/*c*/ = require/*t*/("invariant"),
        p = [],
        d = !1,
        h = {
            injectScheduler: function(global/*e*/) {
                l = global/*e*/
            },
            await: function() {
                var global/*e*/ = arguments,
                    require/*t*/ = new Promise/*u*/(function(require/*t*/) {
                        function requireDynamic/*n*/(module/*i*/) {
                            p.push(function() {
                                var o = global/*e*/[requireLazy/*r*/++](module/*i*/);
                                requireLazy/*r*/ < global/*e*/.length ? requireDynamic/*n*/(o) : require/*t*/(o)
                            })
                        }
                        var requireLazy/*r*/ = 0;
                        requireDynamic/*n*/()
                    });
                return o(), require/*t*/
            }
        };
    module/*i*/.exports = h
});