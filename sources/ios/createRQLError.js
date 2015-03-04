__d("createRQLError",["XHRHttpError","RQLError","RQLOAuthError","RQLTransportError","ex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.errorCode === XHRHttpError/*a*/.HTTP_CLIENT_ERROR,
            requireLazy/*r*/ = global/*e*/.errorCode === XHRHttpError/*a*/.HTTP_TRANSPORT_ERROR;
        return require/*t*/ = require/*t*/ || ex/*c*/("HTTP error: %RQLError/*s*/ %RQLError/*s*/: %RQLError/*s*/", global/*e*/.errorType, global/*e*/.errorCode, global/*e*/.errorMsg), requireLazy/*r*/ ? new RQLTransportError/*u*/(require/*t*/) : requireDynamic/*n*/ && /OAuthException/.test(global/*e*/.errorMsg || "") ? new RQLOAuthError/*l*/(require/*t*/) : new RQLError/*s*/(require/*t*/)
    }
    var XHRHttpError/*a*/ = require/*t*/("XHRHttpError"),
        RQLError/*s*/ = require/*t*/("RQLError"),
        RQLOAuthError/*l*/ = require/*t*/("RQLOAuthError"),
        RQLTransportError/*u*/ = require/*t*/("RQLTransportError"),
        ex/*c*/ = require/*t*/("ex");
    module/*i*/.exports = o
});