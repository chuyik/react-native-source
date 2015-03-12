__d("isNode",[],function (e, t, n, r, i) {
    function o(e) {
        return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    i.exports = o
});