__d("createRQLError",["XHRHttpError","RQLError","RQLOAuthError","RQLTransportError","ex"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*XHRHttpError/*ex/*r*/*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.errorCode === a.HTTP_CLIENT_ERROR,
            requireLazy/*XHRHttpError/*ex/*r*/*/*/ = global/*e*/.errorCode === a.HTTP_TRANSPORT_ERROR;
        return require/*exports/*t*/*/ = require/*exports/*t*/*/ || c("HTTP error: %s %s: %s", global/*e*/.errorType, global/*e*/.errorCode, global/*e*/.errorMsg), requireLazy/*XHRHttpError/*ex/*r*/*/*/ ? new u(require/*exports/*t*/*/) : requireDynamic/*n*/ && /OAuthException/.test(global/*e*/.errorMsg || "") ? new l(require/*exports/*t*/*/) : new s(require/*exports/*t*/*/)
    }
    var a = require/*exports/*t*/*/("XHRHttpError"),
        s = require/*exports/*t*/*/("RQLError"),
        l = require/*exports/*t*/*/("RQLOAuthError"),
        u = require/*exports/*t*/*/("RQLTransportError"),
        c = require/*exports/*t*/*/("ex");
    module/*i*/.exports = o
});