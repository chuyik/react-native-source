__d("GraphQLQueryTracker",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$GraphQLQueryTracker_trackedQueriesByID = {}
    }

    function a(global/*e*/, require/*t*/) {
        return new l.Field("tracked_field", global/*e*/, require/*t*/)
    }

    function s(global/*e*/) {
        return new l.QueryFragment("FakeTrackedFragment", "FakeNode", global/*e*/.getOwnFields(), global/*e*/.getFragments())
    }
    var l = require/*t*/("GraphQL_EXPERIMENTAL"),
        u = require/*t*/("GraphQLConstants"),
        c = require/*t*/("GraphQLStoreDataHandler");
    o.prototype.addQueryForID = function(global/*e*/, require/*t*/) {
        if (global/*e*/ === u.VIEWER_CLIENT_ID || !c.isClientID(global/*e*/)) {
            var requireDynamic/*n*/ = this.$GraphQLQueryTracker_trackedQueriesByID;
            if (requireDynamic/*n*/.hasOwnProperty(global/*e*/)) {
                if (require/*t*/.getFieldName && "__type__" === require/*t*/.getFieldName()) return
            } else requireDynamic/*n*/[global/*e*/] = [];
            requireDynamic/*n*/[global/*e*/].push(require/*t*/)
        }
    }, o.prototype.getQueryForIDs = function(global/*e*/) {
        for (var require/*t*/ = null, requireDynamic/*n*/ = this.$GraphQLQueryTracker_trackedQueriesByID, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/++) {
            var module/*i*/ = global/*e*/[requireLazy/*r*/];
            if (requireDynamic/*n*/.hasOwnProperty(module/*i*/)) {
                require/*t*/ = require/*t*/ || [];
                for (var o = requireDynamic/*n*/[module/*i*/], l = 0; l < o.length; l++) require/*t*/.push(s(o[l]))
            }
        }
        return require/*t*/ ? a(null, require/*t*/) : null
    }, module/*i*/.exports = o
});