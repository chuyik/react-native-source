__d("areSameOrigin",[],function (e, t, n, r, i) {
    function o(e, t) {
        return e.isEmpty() || t.isEmpty() ? !1 : e.getProtocol() && e.getProtocol() != t.getProtocol() ? !1 : e.getDomain() && e.getDomain() != t.getDomain() ? !1 : e.getPort() && e.getPort() != t.getPort() ? !1 : !0
    }
    i.exports = o
});