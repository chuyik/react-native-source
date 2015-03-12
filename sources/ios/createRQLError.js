__d("createRQLError",["XHRHttpError","RQLError","RQLOAuthError","RQLTransportError","ex"],function (e, t, n, r, i) {
    function o(e, t) {
        var n = e.errorCode === XHRHttpError/*a*/.HTTP_CLIENT_ERROR,
            r = e.errorCode === XHRHttpError/*a*/.HTTP_TRANSPORT_ERROR;
        return t = t || ex/*c*/("HTTP error: %RQLError/*s*/ %RQLError/*s*/: %RQLError/*s*/", e.errorType, e.errorCode, e.errorMsg), r ? new RQLTransportError/*u*/(t) : n && /OAuthException/.test(e.errorMsg || "") ? new RQLOAuthError/*l*/(t) : new RQLError/*s*/(t)
    }
    var XHRHttpError/*a*/ = t("XHRHttpError"),
        RQLError/*s*/ = t("RQLError"),
        RQLOAuthError/*l*/ = t("RQLOAuthError"),
        RQLTransportError/*u*/ = t("RQLTransportError"),
        ex/*c*/ = t("ex");
    i.exports = o
});