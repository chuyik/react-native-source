__d("getSameOriginTransport",["ex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        try {
            return global/*e*/.XMLHttpRequest ? new global/*e*/.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (require/*t*/) {
            throw new Error(a("getSameOriginTransport: %s", require/*t*/.message))
        }
    }
    var a = require/*t*/("ex");
    module/*i*/.exports = o
});