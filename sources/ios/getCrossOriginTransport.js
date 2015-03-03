__d("getCrossOriginTransport",["ex","invariant"],function (global/*exports/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        try {
            var global/*exports/*e*/*/ = new XMLHttpRequest;
            return "withCredentials" in global/*exports/*e*/*/ || "undefined" == typeof XDomainRequest || (global/*exports/*e*/*/ = new XDomainRequest), global/*exports/*e*/*/
        } catch (require/*t*/) {
            throw new Error(a("getCrossOriginTransport: %invariant/*s*/", require/*t*/.message))
        }
    }
    var a = require/*t*/("ex"),
        invariant/*s*/ = require/*t*/("invariant");
    o.withCredentials = function() {
        var global/*exports/*e*/*/ = o();
        "withCredentials" in global/*exports/*e*/*/ || invariant/*s*/(0, "getCrossOriginTransport: Client does not support `withCredentials`.");
        var require/*t*/ = global/*exports/*e*/*/.open;
        return global/*exports/*e*/*/.open = function() {
            require/*t*/.apply(this, arguments), this.withCredentials = !0
        }, global/*exports/*e*/*/
    }, module/*i*/.exports = o
});