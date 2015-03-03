__d("URIRFC3986",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"),
        a = {
            parse: function(global/*e*/) {
                if ("" === global/*e*/.trim()) return null;
                var require/*t*/ = global/*e*/.match(o),
                    requireDynamic/*n*/ = {};
                return requireDynamic/*n*/.uri = require/*t*/[0] ? require/*t*/[0] : null, requireDynamic/*n*/.scheme = require/*t*/[1] ? require/*t*/[1].substr(0, require/*t*/[1].length - 1) : null, requireDynamic/*n*/.authority = require/*t*/[2] ? require/*t*/[2].substr(2) : null, requireDynamic/*n*/.userinfo = require/*t*/[3] ? require/*t*/[3].substr(0, require/*t*/[3].length - 1) : null, requireDynamic/*n*/.host = require/*t*/[2] ? require/*t*/[4] : null, requireDynamic/*n*/.port = require/*t*/[5] ? require/*t*/[5].substr(1) ? parseInt(require/*t*/[5].substr(1), 10) : null : null, requireDynamic/*n*/.path = require/*t*/[6] ? require/*t*/[6] : null, requireDynamic/*n*/.query = require/*t*/[7] ? require/*t*/[7].substr(1) : null, requireDynamic/*n*/.fragment = require/*t*/[8] ? require/*t*/[8].substr(1) : null, requireDynamic/*n*/.isGenericURI = null === requireDynamic/*n*/.authority && !!requireDynamic/*n*/.scheme, requireDynamic/*n*/
            }
        };
    module/*i*/.exports = a
});