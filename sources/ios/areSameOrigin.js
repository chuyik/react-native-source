__d("areSameOrigin",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        return global/*e*/.isEmpty() || require/*t*/.isEmpty() ? !1 : global/*e*/.getProtocol() && global/*e*/.getProtocol() != require/*t*/.getProtocol() ? !1 : global/*e*/.getDomain() && global/*e*/.getDomain() != require/*t*/.getDomain() ? !1 : global/*e*/.getPort() && global/*e*/.getPort() != require/*t*/.getPort() ? !1 : !0
    }
    module/*i*/.exports = o
});