__d("XHRHttpError",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        if (0 === require/*exports/*t*/*/) {
            var requireDynamic/*n*/ = global/*e*/.getProtocol();
            return "file" === requireDynamic/*n*/ || "ftp" === requireDynamic/*n*/ ? null : u
        }
        return require/*exports/*t*/*/ >= 100 && 200 > require/*exports/*t*/*/ ? s : require/*exports/*t*/*/ >= 200 && 300 > require/*exports/*t*/*/ ? null : require/*exports/*t*/*/ >= 400 && 500 > require/*exports/*t*/*/ ? a : require/*exports/*t*/*/ >= 500 && 600 > require/*exports/*t*/*/ ? l : require/*exports/*t*/*/ >= 12001 && 12156 > require/*exports/*t*/*/ ? u : c
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