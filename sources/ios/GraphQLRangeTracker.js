__d("GraphQLRangeTracker",["DliteLog"],function (global/*e*/, require/*exports/*DliteLog/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*DliteLog/*t*/*/*/) {
        return global/*e*/ + "." + require/*exports/*DliteLog/*t*/*/*/
    }

    function a(global/*e*/, require/*exports/*DliteLog/*t*/*/*/) {
        return global/*e*/ + "." + require/*exports/*DliteLog/*t*/*/*/
    }

    function s(global/*e*/) {
        l.warn("GraphQLRangeTracker can only track `edges` fields with `EdgesID` fieldName: %s inferredRootCallName: %s inferredPrimaryKey: %s isPlural: %s isConnection: %s isFindable: %s isLimitable: %s isGenerated: %s", global/*e*/.getFieldName(), global/*e*/.getInferredRootCallName(), global/*e*/.getInferredPrimaryKey(), global/*e*/.isPlural(), global/*e*/.isConnection(), global/*e*/.isFindable(), global/*e*/.isLimitable(), global/*e*/.isGenerated())
    }
    var l = require/*exports/*DliteLog/*t*/*/*/("DliteLog"),
        u = {},
        c = {},
        p = {
            THRESHOLD: 10,
            trackEdge: function(global/*e*/, require/*exports/*DliteLog/*t*/*/*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = global/*e*/.getEdgesID();
                if (!requireLazy/*r*/) return void s(global/*e*/);
                var module/*i*/ = a(requireLazy/*r*/, require/*exports/*DliteLog/*t*/*/*/);
                u[module/*i*/] = global/*e*/;
                var l = o(requireLazy/*r*/, requireDynamic/*n*/);
                c[l] = !0
            },
            hasEdge: function(global/*e*/, require/*exports/*DliteLog/*t*/*/*/) {
                var requireDynamic/*n*/ = global/*e*/.getEdgesID();
                if (!requireDynamic/*n*/) return s(global/*e*/), !1;
                var requireLazy/*r*/ = a(requireDynamic/*n*/, require/*exports/*DliteLog/*t*/*/*/);
                return u.hasOwnProperty(requireLazy/*r*/) && u[requireLazy/*r*/].equals(global/*e*/)
            },
            isFieldTracked: function(global/*e*/, require/*exports/*DliteLog/*t*/*/*/) {
                var requireDynamic/*n*/ = global/*e*/.getEdgesID();
                return requireDynamic/*n*/ ? c.hasOwnProperty(o(requireDynamic/*n*/, require/*exports/*DliteLog/*t*/*/*/)) : (s(global/*e*/), !1)
            }
        };
    module/*i*/.exports = p
});