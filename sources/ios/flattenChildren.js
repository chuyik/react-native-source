__d("flattenChildren",["ReactTextComponent","traverseAllChildren","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        var r = e,
            i = !r.hasOwnProperty(n);
        if (warning/*u*/(i, "flattenChildren(...): Encountered two children with the same key, `%ReactTextComponent/*s*/`. Child keys must be unique; when two children share a key, only the first child will be used.", n), i && null != t) {
            var o, a = typeof t;
            o = "string" === a ? ReactTextComponent/*s*/(t) : "number" === a ? ReactTextComponent/*s*/("" + t) : t, r[n] = o
        }
    }

    function a(e) {
        if (null == e) return e;
        var t = {};
        return traverseAllChildren/*l*/(e, o, t), t
    }
    var ReactTextComponent/*s*/ = t("ReactTextComponent"),
        traverseAllChildren/*l*/ = t("traverseAllChildren"),
        warning/*u*/ = t("warning");
    i.exports = a
});