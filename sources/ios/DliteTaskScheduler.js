__d("DliteTaskScheduler",["Promise","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        d || (p.length ? (d = !0, Promise/*u*/.resolve().done(function() {
            var e = a(p.shift());
            l ? l(e) : e()
        })) : d = !1)
    }

    function a(e) {
        var t = !1;
        return function() {
            t && invariant/*c*/(0, "DliteTaskScheduler: Tasks can only be executed once."), t = !0, s(e), d = !1, o()
        }
    }

    function s(e) {
        var t = p;
        p = [];
        try {
            e()
        } finally {
            Array.prototype.unshift.apply(t, p), p = t
        }
    }
    var l, Promise/*u*/ = t("Promise"),
        invariant/*c*/ = t("invariant"),
        p = [],
        d = !1,
        h = {
            injectScheduler: function(e) {
                l = e
            },
            await: function() {
                var e = arguments,
                    t = new Promise/*u*/(function(t) {
                        function n(i) {
                            p.push(function() {
                                var o = e[r++](i);
                                r < e.length ? n(o) : t(o)
                            })
                        }
                        var r = 0;
                        n()
                    });
                return o(), t
            }
        };
    i.exports = h
});