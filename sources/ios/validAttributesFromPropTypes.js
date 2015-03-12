__d("validAttributesFromPropTypes",[],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = {};
        for (var n in e) {
            var r = e[n];
            if (r && r.isNative) {
                var i = r.differ;
                t[n] = i ? {
                    diff: i
                } : !0
            }
        }
        return t
    }
    i.exports = o
});