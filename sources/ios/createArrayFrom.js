__d("createArrayFrom",["toArray"],function (e, t, n, r, i) {
    function o(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
    }

    function a(e) {
        return o(e) ? Array.isArray(e) ? e.slice() : toArray/*s*/(e) : [e]
    }
    var toArray/*s*/ = t("toArray");
    i.exports = a
});