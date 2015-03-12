__d("GraphQLQueryTracker",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.$GraphQLQueryTracker_trackedQueriesByID = {}
    }

    function a(e, t) {
        return new GraphQL_EXPERIMENTAL/*l*/.Field("tracked_field", e, t)
    }

    function s(e) {
        return new GraphQL_EXPERIMENTAL/*l*/.QueryFragment("FakeTrackedFragment", "FakeNode", e.getOwnFields(), e.getFragments())
    }
    var GraphQL_EXPERIMENTAL/*l*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*u*/ = t("GraphQLConstants"),
        GraphQLStoreDataHandler/*c*/ = t("GraphQLStoreDataHandler");
    o.prototype.addQueryForID = function(e, t) {
        if (e === GraphQLConstants/*u*/.VIEWER_CLIENT_ID || !GraphQLStoreDataHandler/*c*/.isClientID(e)) {
            var n = this.$GraphQLQueryTracker_trackedQueriesByID;
            if (n.hasOwnProperty(e)) {
                if (t.getFieldName && "__type__" === t.getFieldName()) return
            } else n[e] = [];
            n[e].push(t)
        }
    }, o.prototype.getQueryForIDs = function(e) {
        for (var t = null, n = this.$GraphQLQueryTracker_trackedQueriesByID, r = 0; r < e.length; r++) {
            var i = e[r];
            if (n.hasOwnProperty(i)) {
                t = t || [];
                for (var o = n[i], GraphQL_EXPERIMENTAL/*l*/ = 0; GraphQL_EXPERIMENTAL/*l*/ < o.length; GraphQL_EXPERIMENTAL/*l*/++) t.push(s(o[GraphQL_EXPERIMENTAL/*l*/]))
            }
        }
        return t ? a(null, t) : null
    }, i.exports = o
});