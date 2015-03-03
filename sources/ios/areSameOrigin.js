__d("areSameOrigin",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.isEmpty() || require/*exports/*t*/*/.isEmpty() ? !1 : global/*e*/.getProtocol() && global/*e*/.getProtocol() != require/*exports/*t*/*/.getProtocol() ? !1 : global/*e*/.getDomain() && global/*e*/.getDomain() != require/*exports/*t*/*/.getDomain() ? !1 : global/*e*/.getPort() && global/*e*/.getPort() != require/*exports/*t*/*/.getPort() ? !1 : !0
    }
    module/*i*/.exports = o
});