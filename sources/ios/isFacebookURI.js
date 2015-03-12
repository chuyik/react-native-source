__d("isFacebookURI",[],function (e, t, n, r, i) {
    function o(e) {
        return a || (a = new RegExp("(^|\\.)facebook\\.com$", "i")), e.isEmpty() && "#" !== e.toString() ? !1 : e.getDomain() || e.getProtocol() ? -1 !== s.indexOf(e.getProtocol()) && a.test(e.getDomain()) : !0
    }
    var a = null,
        s = ["http", "https"];
    o.setRegex = function(e) {
        a = e
    }, i.exports = o
});