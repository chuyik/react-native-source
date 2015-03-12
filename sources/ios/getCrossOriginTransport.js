__d("getCrossOriginTransport",["ex","invariant"],function (e, t, n, r, i) {
    function o() {
        try {
            var e = new XMLHttpRequest;
            return "withCredentials" in e || "undefined" == typeof XDomainRequest || (e = new XDomainRequest), e
        } catch (t) {
            throw new Error(ex/*a*/("getCrossOriginTransport: %invariant/*s*/", t.message))
        }
    }
    var ex/*a*/ = t("ex"),
        invariant/*s*/ = t("invariant");
    o.withCredentials = function() {
        var e = o();
        "withCredentials" in e || invariant/*s*/(0, "getCrossOriginTransport: Client does not support `withCredentials`.");
        var t = e.open;
        return e.open = function() {
            t.apply(this, arguments), this.withCredentials = !0
        }, e
    }, i.exports = o
});