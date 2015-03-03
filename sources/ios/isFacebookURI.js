__d("isFacebookURI",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return a || (a = new RegExp("(^|\\.)facebook\\.com$", "module/*i*/")), global/*e*/.isEmpty() && "#" !== global/*e*/.toString() ? !1 : global/*e*/.getDomain() || global/*e*/.getProtocol() ? -1 !== s.indexOf(global/*e*/.getProtocol()) && a.test(global/*e*/.getDomain()) : !0
    }
    var a = null,
        s = ["http", "https"];
    o.setRegex = function(global/*e*/) {
        a = global/*e*/
    }, module/*i*/.exports = o
});