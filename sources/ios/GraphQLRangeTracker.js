__d("GraphQLRangeTracker",["DliteLog"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return e + "." + t
    }

    function a(e, t) {
        return e + "." + t
    }

    function s(e) {
        DliteLog/*l*/.warn("GraphQLRangeTracker can only track `edges` fields with `EdgesID` fieldName: %s inferredRootCallName: %s inferredPrimaryKey: %s isPlural: %s isConnection: %s isFindable: %s isLimitable: %s isGenerated: %s", e.getFieldName(), e.getInferredRootCallName(), e.getInferredPrimaryKey(), e.isPlural(), e.isConnection(), e.isFindable(), e.isLimitable(), e.isGenerated())
    }
    var DliteLog/*l*/ = t("DliteLog"),
        u = {},
        c = {},
        p = {
            THRESHOLD: 10,
            trackEdge: function(e, t, n) {
                var r = e.getEdgesID();
                if (!r) return void s(e);
                var i = a(r, t);
                u[i] = e;
                var DliteLog/*l*/ = o(r, n);
                c[DliteLog/*l*/] = !0
            },
            hasEdge: function(e, t) {
                var n = e.getEdgesID();
                if (!n) return s(e), !1;
                var r = a(n, t);
                return u.hasOwnProperty(r) && u[r].equals(e)
            },
            isFieldTracked: function(e, t) {
                var n = e.getEdgesID();
                return n ? c.hasOwnProperty(o(n, t)) : (s(e), !1)
            }
        };
    i.exports = p
});