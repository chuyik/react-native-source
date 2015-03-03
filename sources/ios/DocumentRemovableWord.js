__d("DocumentRemovableWord",["TokenizeUtil"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/ ? d.exec(global/*e*/) : c.exec(global/*e*/);
        return requireDynamic/*n*/ ? requireDynamic/*n*/[0] : null
    }
    var a = require/*t*/("TokenizeUtil"),
        s = a.getPunctuation();
    s = s.replace("'", "").slice(1, -1);
    var l = "\\s" + s,
        u = "^([" + l + "]*[^" + l + "]+|[" + l + "]+)",
        c = new RegExp(u),
        p = "([^" + l + "]+[" + l + "]*|[" + l + "]+)$",
        d = new RegExp(p),
        h = {
            getBackward: function(global/*e*/) {
                return o(global/*e*/, !0)
            },
            getForward: function(global/*e*/) {
                return o(global/*e*/, !1)
            }
        };
    module/*i*/.exports = h
});