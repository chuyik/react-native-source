__d("PHPQuerySerializer",["invariant"],function (e, t, n, r, i) {
    function o(e) {
        return a(e, null)
    }

    function a(e, t) {
        t = t || "";
        var n = [];
        if (null === e || void 0 === e) n.push(s(t));
        else if ("object" == typeof e) {
            ("nodeName" in e || "nodeType" in e) && invariant/*c*/(0, "PHPQuerySerializer serializing a DOM element, not good ...");
            for (var r in e) e.hasOwnProperty(r) && void 0 !== e[r] && n.push(a(e[r], t ? t + "[" + r + "]" : r))
        } else n.push(s(t) + "=" + s(e));
        return n.join("&")
    }

    function s(e) {
        return encodeURIComponent(e).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }

    function l(e) {
        if (!e) return {};
        var t = {};
        e = e.replace(/%5B/gi, "[").replace(/%5D/gi, "]"), e = e.split("&");
        for (var n = Object.prototype.hasOwnProperty, r = 0, i = e.length; i > r; r++) {
            var o = e[r].match(p);
            if (o) {
                var a = o[2].split(/\]\[|\[|\]/).slice(0, -1),
                    s = o[1],
                    l = u(o[3] || "");
                a[0] = s;
                for (var invariant/*c*/ = t, d = 0; d < a.length - 1; d++)
                    if (a[d]) {
                        if (!n.call(invariant/*c*/, a[d])) {
                            var h = a[d + 1] && !a[d + 1].match(/^\d{1,3}$/) ? {} : [];
                            if (invariant/*c*/[a[d]] = h, invariant/*c*/[a[d]] !== h) return t
                        }
                        invariant/*c*/ = invariant/*c*/[a[d]]
                    } else invariant/*c*/.push(a[d + 1] && !a[d + 1].match(/^\d{1,3}$/) ? {} : []), invariant/*c*/ = invariant/*c*/[invariant/*c*/.length - 1];
                invariant/*c*/ instanceof Array && "" === a[a.length - 1] ? invariant/*c*/.push(l) : invariant/*c*/[a[a.length - 1]] = l
            } else {
                var f = e[r].split("=");
                t[u(f[0])] = void 0 === f[1] ? null : u(f[1])
            }
        }
        return t
    }

    function u(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    var invariant/*c*/ = t("invariant"),
        p = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/,
        d = {
            serialize: o,
            encodeComponent: s,
            deserialize: l,
            decodeComponent: u
        };
    i.exports = d
});