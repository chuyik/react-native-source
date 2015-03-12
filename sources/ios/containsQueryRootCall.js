__d("containsQueryRootCall",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (e.getName() !== t.getName() && !a(e, t)) return !1;
        var n = e.getArgs();
        return t.getArgs().every(function(e) {
            for (var t = 0; t < n.length; t++)
                if (e.equals(n[t])) return !0;
            return !1
        })
    }

    function a(e, t) {
        return "nodes" === e.getName() && "node" === t.getName()
    }
    i.exports = o
});