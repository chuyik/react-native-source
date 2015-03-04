__d("getCrossOriginTransport",["ex","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        try {
            var global/*e*/ = new XMLHttpRequest;
            return "withCredentials" in global/*e*/ || "undefined" == typeof XDomainRequest || (global/*e*/ = new XDomainRequest), global/*e*/
        } catch (require/*t*/) {
            throw new Error(ex/*a*/("getCrossOriginTransport: %invariant/*s*/", require/*t*/.message))
        }
    }
    var ex/*a*/ = require/*t*/("ex"),
        invariant/*s*/ = require/*t*/("invariant");
    o.withCredentials = function() {
        var global/*e*/ = o();
        "withCredentials" in global/*e*/ || invariant/*s*/(0, "getCrossOriginTransport: Client does not support `withCredentials`.");
        var require/*t*/ = global/*e*/.open;
        return global/*e*/.open = function() {
            require/*t*/.apply(this, arguments), this.withCredentials = !0
        }, global/*e*/
    }, module/*i*/.exports = o
});