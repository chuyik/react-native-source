__d("XHRHttpError",[],function (e, t, n, r, i) {
    function o(e, t) {
        if (0 === t) {
            var n = e.getProtocol();
            return "file" === n || "ftp" === n ? null : u
        }
        return t >= 100 && 200 > t ? s : t >= 200 && 300 > t ? null : t >= 400 && 500 > t ? a : t >= 500 && 600 > t ? l : t >= 12001 && 12156 > t ? u : c
    }
    var a = "HTTP_CLIENT_ERROR",
        s = "HTTP_PROXY_ERROR",
        l = "HTTP_SERVER_ERROR",
        u = "HTTP_TRANSPORT_ERROR",
        c = "HTTP_UNKNOWN_ERROR";
    i.exports = {
        getErrorCode: o,
        HTTP_CLIENT_ERROR: a,
        HTTP_PROXY_ERROR: s,
        HTTP_SERVER_ERROR: l,
        HTTP_TRANSPORT_ERROR: u,
        HTTP_UNKNOWN_ERROR: c
    }
});