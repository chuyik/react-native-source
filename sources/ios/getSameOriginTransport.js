__d("getSameOriginTransport",["ex"],function (e, t, n, r, i) {
    function o() {
        try {
            return e.XMLHttpRequest ? new e.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (t) {
            throw new Error(ex/*a*/("getSameOriginTransport: %s", t.message))
        }
    }
    var ex/*a*/ = t("ex");
    i.exports = o
});