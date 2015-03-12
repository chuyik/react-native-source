__d("URIRFC3986",[],function (e, t, n, r, i) {
    var o = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"),
        a = {
            parse: function(e) {
                if ("" === e.trim()) return null;
                var t = e.match(o),
                    n = {};
                return n.uri = t[0] ? t[0] : null, n.scheme = t[1] ? t[1].substr(0, t[1].length - 1) : null, n.authority = t[2] ? t[2].substr(2) : null, n.userinfo = t[3] ? t[3].substr(0, t[3].length - 1) : null, n.host = t[2] ? t[4] : null, n.port = t[5] ? t[5].substr(1) ? parseInt(t[5].substr(1), 10) : null : null, n.path = t[6] ? t[6] : null, n.query = t[7] ? t[7].substr(1) : null, n.fragment = t[8] ? t[8].substr(1) : null, n.isGenericURI = null === n.authority && !!n.scheme, n
            }
        };
    i.exports = a
});