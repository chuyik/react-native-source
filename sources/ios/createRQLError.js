__d("createRQLError",["XHRHttpError","RQLError","RQLOAuthError","RQLTransportError","ex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.errorCode === a.HTTP_CLIENT_ERROR,
            requireLazy/*r*/ = global/*e*/.errorCode === a.HTTP_TRANSPORT_ERROR;
        return require/*t*/ = require/*t*/ || c("HTTP error: %s %s: %s", global/*e*/.errorType, global/*e*/.errorCode, global/*e*/.errorMsg), requireLazy/*r*/ ? new u(require/*t*/) : requireDynamic/*n*/ && /OAuthException/.test(global/*e*/.errorMsg || "") ? new l(require/*t*/) : new s(require/*t*/)
    }
    var a = require/*t*/("XHRHttpError"),
        s = require/*t*/("RQLError"),
        l = require/*t*/("RQLOAuthError"),
        u = require/*t*/("RQLTransportError"),
        c = require/*t*/("ex");
    module/*i*/.exports = o
});