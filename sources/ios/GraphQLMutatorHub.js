__d("GraphQLMutatorHub",["GraphQLMutatorConstants","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        "string" != typeof e.deletedIDFieldName && invariant/*c*/(0, "Node delete mutation config must have valid types on register")
    }

    function a(e) {
        (e.sourceID && "string" != typeof e.sourceID || "string" != typeof e.connectionName || "string" != typeof e.edgeName) && invariant/*c*/(0, "Range add mutation config must have valid types on register")
    }

    function s(e) {
        Array.isArray(e.pathToConnection) && e.pathToConnection.length >= 2 && "string" == typeof e.deletedIDFieldName || invariant/*c*/(0, "Range delete mutation config must have valid types on register")
    }

    function l(e, t, n) {
        t in GraphQLMutatorConstants/*u*/.HANDLER_TYPES || invariant/*c*/(0, "Cannot register invalid handler type"), void 0 === p[e] && (p[e] = []), p[e].push({
            handlerType: t,
            config: n
        })
    }
    var GraphQLMutatorConstants/*u*/ = t("GraphQLMutatorConstants"),
        invariant/*c*/ = t("invariant"),
        p = {},
        d = {
            registerForRangeAddMutationType: function(e, t) {
                a(t), l(e, GraphQLMutatorConstants/*u*/.RANGE_ADD_HANDLER, t)
            },
            registerForRangeDeleteMutationType: function(e, t) {
                s(t), l(e, GraphQLMutatorConstants/*u*/.RANGE_DELETE_HANDLER, t)
            },
            registerForNodeDeleteMutationType: function(e, t) {
                o(t), l(e, GraphQLMutatorConstants/*u*/.NODE_DELETE_HANDLER, t)
            },
            getConfigs: function(e) {
                return p[e] ? p[e] : []
            }
        };
    i.exports = d
});