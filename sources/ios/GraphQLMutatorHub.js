__d("GraphQLMutatorHub",["GraphQLMutatorConstants","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        "string" != typeof global/*e*/.deletedIDFieldName && invariant/*c*/(0, "Node delete mutation config must have valid types on register")
    }

    function a(global/*e*/) {
        (global/*e*/.sourceID && "string" != typeof global/*e*/.sourceID || "string" != typeof global/*e*/.connectionName || "string" != typeof global/*e*/.edgeName) && invariant/*c*/(0, "Range add mutation config must have valid types on register")
    }

    function s(global/*e*/) {
        Array.isArray(global/*e*/.pathToConnection) && global/*e*/.pathToConnection.length >= 2 && "string" == typeof global/*e*/.deletedIDFieldName || invariant/*c*/(0, "Range delete mutation config must have valid types on register")
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        require/*t*/ in GraphQLMutatorConstants/*u*/.HANDLER_TYPES || invariant/*c*/(0, "Cannot register invalid handler type"), void 0 === p[global/*e*/] && (p[global/*e*/] = []), p[global/*e*/].push({
            handlerType: require/*t*/,
            config: requireDynamic/*n*/
        })
    }
    var GraphQLMutatorConstants/*u*/ = require/*t*/("GraphQLMutatorConstants"),
        invariant/*c*/ = require/*t*/("invariant"),
        p = {},
        d = {
            registerForRangeAddMutationType: function(global/*e*/, require/*t*/) {
                a(require/*t*/), l(global/*e*/, GraphQLMutatorConstants/*u*/.RANGE_ADD_HANDLER, require/*t*/)
            },
            registerForRangeDeleteMutationType: function(global/*e*/, require/*t*/) {
                s(require/*t*/), l(global/*e*/, GraphQLMutatorConstants/*u*/.RANGE_DELETE_HANDLER, require/*t*/)
            },
            registerForNodeDeleteMutationType: function(global/*e*/, require/*t*/) {
                o(require/*t*/), l(global/*e*/, GraphQLMutatorConstants/*u*/.NODE_DELETE_HANDLER, require/*t*/)
            },
            getConfigs: function(global/*e*/) {
                return p[global/*e*/] ? p[global/*e*/] : []
            }
        };
    module/*i*/.exports = d
});