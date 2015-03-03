__d("GraphQLQueryTracker",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler"],function (global/*GraphQL_EXPERIMENTAL/*e*/*/, require/*exports/*GraphQLConstants/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$GraphQLQueryTracker_trackedQueriesByID = {}
    }

    function a(global/*GraphQL_EXPERIMENTAL/*e*/*/, require/*exports/*GraphQLConstants/*t*/*/*/) {
        return new l.Field("tracked_field", global/*GraphQL_EXPERIMENTAL/*e*/*/, require/*exports/*GraphQLConstants/*t*/*/*/)
    }

    function s(global/*GraphQL_EXPERIMENTAL/*e*/*/) {
        return new l.QueryFragment("FakeTrackedFragment", "FakeNode", global/*GraphQL_EXPERIMENTAL/*e*/*/.getOwnFields(), global/*GraphQL_EXPERIMENTAL/*e*/*/.getFragments())
    }
    var l = require/*exports/*GraphQLConstants/*t*/*/*/("GraphQL_EXPERIMENTAL"),
        u = require/*exports/*GraphQLConstants/*t*/*/*/("GraphQLConstants"),
        c = require/*exports/*GraphQLConstants/*t*/*/*/("GraphQLStoreDataHandler");
    o.prototype.addQueryForID = function(global/*GraphQL_EXPERIMENTAL/*e*/*/, require/*exports/*GraphQLConstants/*t*/*/*/) {
        if (global/*GraphQL_EXPERIMENTAL/*e*/*/ === u.VIEWER_CLIENT_ID || !c.isClientID(global/*GraphQL_EXPERIMENTAL/*e*/*/)) {
            var requireDynamic/*n*/ = this.$GraphQLQueryTracker_trackedQueriesByID;
            if (requireDynamic/*n*/.hasOwnProperty(global/*GraphQL_EXPERIMENTAL/*e*/*/)) {
                if (require/*exports/*GraphQLConstants/*t*/*/*/.getFieldName && "__type__" === require/*exports/*GraphQLConstants/*t*/*/*/.getFieldName()) return
            } else requireDynamic/*n*/[global/*GraphQL_EXPERIMENTAL/*e*/*/] = [];
            requireDynamic/*n*/[global/*GraphQL_EXPERIMENTAL/*e*/*/].push(require/*exports/*GraphQLConstants/*t*/*/*/)
        }
    }, o.prototype.getQueryForIDs = function(global/*GraphQL_EXPERIMENTAL/*e*/*/) {
        for (var require/*exports/*GraphQLConstants/*t*/*/*/ = null, requireDynamic/*n*/ = this.$GraphQLQueryTracker_trackedQueriesByID, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*GraphQL_EXPERIMENTAL/*e*/*/.length; requireLazy/*r*/++) {
            var module/*i*/ = global/*GraphQL_EXPERIMENTAL/*e*/*/[requireLazy/*r*/];
            if (requireDynamic/*n*/.hasOwnProperty(module/*i*/)) {
                require/*exports/*GraphQLConstants/*t*/*/*/ = require/*exports/*GraphQLConstants/*t*/*/*/ || [];
                for (var o = requireDynamic/*n*/[module/*i*/], l = 0; l < o.length; l++) require/*exports/*GraphQLConstants/*t*/*/*/.push(s(o[l]))
            }
        }
        return require/*exports/*GraphQLConstants/*t*/*/*/ ? a(null, require/*exports/*GraphQLConstants/*t*/*/*/) : null
    }, module/*i*/.exports = o
});