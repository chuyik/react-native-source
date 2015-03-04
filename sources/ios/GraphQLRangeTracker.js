__d("GraphQLRangeTracker",["DliteLog"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/ + "." + require/*t*/
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/ + "." + require/*t*/
    }

    function s(global/*e*/) {
        DliteLog/*l*/.warn("GraphQLRangeTracker can only track `edges` fields with `EdgesID` fieldName: %s inferredRootCallName: %s inferredPrimaryKey: %s isPlural: %s isConnection: %s isFindable: %s isLimitable: %s isGenerated: %s", global/*e*/.getFieldName(), global/*e*/.getInferredRootCallName(), global/*e*/.getInferredPrimaryKey(), global/*e*/.isPlural(), global/*e*/.isConnection(), global/*e*/.isFindable(), global/*e*/.isLimitable(), global/*e*/.isGenerated())
    }
    var DliteLog/*l*/ = require/*t*/("DliteLog"),
        u = {},
        c = {},
        p = {
            THRESHOLD: 10,
            trackEdge: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = global/*e*/.getEdgesID();
                if (!requireLazy/*r*/) return void s(global/*e*/);
                var module/*i*/ = a(requireLazy/*r*/, require/*t*/);
                u[module/*i*/] = global/*e*/;
                var DliteLog/*l*/ = o(requireLazy/*r*/, requireDynamic/*n*/);
                c[DliteLog/*l*/] = !0
            },
            hasEdge: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/.getEdgesID();
                if (!requireDynamic/*n*/) return s(global/*e*/), !1;
                var requireLazy/*r*/ = a(requireDynamic/*n*/, require/*t*/);
                return u.hasOwnProperty(requireLazy/*r*/) && u[requireLazy/*r*/].equals(global/*e*/)
            },
            isFieldTracked: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/.getEdgesID();
                return requireDynamic/*n*/ ? c.hasOwnProperty(o(requireDynamic/*n*/, require/*t*/)) : (s(global/*e*/), !1)
            }
        };
    module/*i*/.exports = p
});