__d("XHRHttpError",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (0 === require/*t*/) {
            var requireDynamic/*n*/ = global/*e*/.getProtocol();
            return "file" === requireDynamic/*n*/ || "ftp" === requireDynamic/*n*/ ? null : u
        }
        return require/*t*/ >= 100 && 200 > require/*t*/ ? s : require/*t*/ >= 200 && 300 > require/*t*/ ? null : require/*t*/ >= 400 && 500 > require/*t*/ ? a : require/*t*/ >= 500 && 600 > require/*t*/ ? l : require/*t*/ >= 12001 && 12156 > require/*t*/ ? u : c
    }
    var a = "HTTP_CLIENT_ERROR",
        s = "HTTP_PROXY_ERROR",
        l = "HTTP_SERVER_ERROR",
        u = "HTTP_TRANSPORT_ERROR",
        c = "HTTP_UNKNOWN_ERROR";
    module/*i*/.exports = {
        getErrorCode: o,
        HTTP_CLIENT_ERROR: a,
        HTTP_PROXY_ERROR: s,
        HTTP_SERVER_ERROR: l,
        HTTP_TRANSPORT_ERROR: u,
        HTTP_UNKNOWN_ERROR: c
    }
});