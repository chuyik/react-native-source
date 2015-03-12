__d("EventValidator",["copyProperties"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (-1 === t.indexOf(e)) throw new TypeError(a(e, t))
    }

    function a(e, t) {
        var n = 'Unknown event type "' + e + '". ';
        return __DEV__ && (n += u(e, t)), n += "Known event types: " + t.join(", ") + "."
    }
    var copyProperties/*s*/ = t("copyProperties"),
        l = {
            addValidation: function(e, t) {
                var n = Object.keys(t),
                    r = Object.create(e);
                return copyProperties/*s*/(r, {
                    emit: function(t, r, i, a, copyProperties/*s*/, l, u) {
                        return o(t, n), e.emit.call(this, t, r, i, a, copyProperties/*s*/, l, u)
                    }
                }), r
            }
        };
    if (__DEV__) var u = function(e, t) {
            var n = c(e, t);
            return h(n, e) ? 'Did you mean "' + n.type + '"? ' : ""
        },
        c = function(e, t) {
            var n = t.map(p.bind(this, e));
            return n.sort(d)[0]
        },
        p = function(e, t) {
            return {
                type: t,
                distance: f(e, t)
            }
        },
        d = function(e, t) {
            return e.distance < t.distance ? -1 : e.distance > t.distance ? 1 : 0
        },
        h = function(e, t) {
            return e.distance / t.length < .334
        },
        f = function(e, t) {
            var n, r, i = [];
            for (n = 0; n <= e.length; n++) i[n] = [n];
            for (r = 1; r <= t.length; r++) i[0][r] = r;
            for (n = 1; n <= e.length; n++)
                for (r = 1; r <= t.length; r++) {
                    var o = e.charAt(n - 1) === t.charAt(r - 1) ? 0 : 1;
                    i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + o), n > 1 && r > 1 && e.charAt(n - 1) == t.charAt(r - 2) && e.charAt(n - 2) == t.charAt(r - 1) && (i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + o))
                }
            return i[e.length][t.length]
        };
    i.exports = l
});