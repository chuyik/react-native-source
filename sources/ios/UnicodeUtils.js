__d("UnicodeUtils",["ES6StringUtils"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return e >= h && f >= e
    }

    function a(e) {
        return m.test(e)
    }

    function s(e, t) {
        return 1 + o(e.charCodeAt(t))
    }

    function l(e) {
        if (!a(e)) return e.length;
        for (var t = 0, n = 0; n < e.length; n += s(e, n)) t++;
        return t
    }

    function u(e, t, n) {
        if (t = t || 0, n = void 0 === n ? 1 / 0 : n || 0, !a(e)) return e.substr(t, n);
        var r = e.length;
        if (0 >= r || t > r || 0 >= n) return "";
        var i = 0;
        if (t > 0) {
            for (; t > 0 && r > i; t--) i += s(e, i);
            if (i >= r) return ""
        } else if (0 > t) {
            for (i = r; 0 > t && i > 0; t++) i -= s(e, i - 1);
            0 > i && (i = 0)
        }
        var o = r;
        if (r > n)
            for (o = i; n > 0 && r > o; n--) o += s(e, o);
        return e.substring(i, o)
    }

    function c(e, t, n) {
        t = t || 0, n = void 0 === n ? 1 / 0 : n || 0, 0 > t && (t = 0), 0 > n && (n = 0);
        var r = Math.abs(n - t);
        return t = n > t ? t : n, u(e, t, r)
    }

    function p(e) {
        for (var t = [], n = 0; n < e.length; n += s(e, n)) {
            var r = ES6StringUtils/*d*/.codePointAt.call(e, n);
            t.push(r)
        }
        return t
    }
    var ES6StringUtils/*d*/ = t("ES6StringUtils"),
        h = 55296,
        f = 57343,
        m = /[\uD800-\uDFFF]/,
        g = {
            isCodeUnitInSurrogateRange: o,
            strlen: l,
            substr: u,
            substring: c,
            getCodePoints: p
        };
    i.exports = g
});