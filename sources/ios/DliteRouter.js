__d("DliteRouter",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        var r = e.getSortKey(),
            i = n - t;
        if (0 === i) return t;
        var a = t + i / 2 | 0;
        return s(r, u[a].getSortKey()) <= 0 ? o(e, t, a) : o(e, a + 1, n)
    }

    function a(e) {
        for (var t = [], n = 0, r = 0, i = 0; n < e.length; n++) switch (e.charAt(n)) {
            case "/":
                i || (n - r > 0 && t.push(e.slice(r, n)), "?" === e.charAt(n + 1) && n++, r = n + 1);
                break;
            case "(":
                i++ || (n - r > 0 && t.push(e.slice(r, n)), r = n);
                break;
            case ")":
                --i || ("?" === e.charAt(n + 1) && n++, t.push(e.slice(r, n + 1)), r = n + 1)
        }
        return t
    }

    function s(e, t) {
        e = a(e), t = a(t);
        for (var n = 0; n < Math.min(e.length, t.length); n++) {
            var r = e[n],
                i = t[n],
                o = l(r) - l(i);
            if (o) return o;
            var s = r.toLowerCase(),
                u = i.toLowerCase();
            if (s !== u) return u > s ? -1 : 1;
            if (r !== i) return i > r ? -1 : 1
        }
        return e.length - t.length
    }

    function l(e) {
        return "<<vanity>>" == e ? 3 : (e = e.replace(/\\\./, "x"), /[.+*?\[\](){}=!|:]/.test(e) ? -1 !== e.indexOf("\\d") ? 1 : 2 : 0)
    }
    var u = [],
        c = {
            addRoute: function(e) {
                var t = o(e, 0, u.length);
                u[t] !== e && u.splice(t, 0, e)
            },
            __getRoutes: function() {
                return u
            },
            getRoute: function(e) {
                for (var t = 0; t < u.length; t++) {
                    var n = u[t],
                        r = n.parse(e);
                    if (null !== r) return new n(e, r)
                }
                return null
            },
            orderExpressions: s
        };
    i.exports = c
});