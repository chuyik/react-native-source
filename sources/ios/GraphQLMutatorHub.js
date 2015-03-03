__d("GraphQLMutatorHub",["GraphQLMutatorConstants","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQLMutatorConstants/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        "string" != typeof global/*e*/.deletedIDFieldName && c(0, "Node delete mutation config must have valid types on register")
    }

    function a(global/*e*/) {
        (global/*e*/.sourceID && "string" != typeof global/*e*/.sourceID || "string" != typeof global/*e*/.connectionName || "string" != typeof global/*e*/.edgeName) && c(0, "Range add mutation config must have valid types on register")
    }

    function s(global/*e*/) {
        Array.isArray(global/*e*/.pathToConnection) && global/*e*/.pathToConnection.length >= 2 && "string" == typeof global/*e*/.deletedIDFieldName || c(0, "Range delete mutation config must have valid types on register")
    }

    function l(global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQLMutatorConstants/*n*/*/) {
        require/*exports/*t*/*/ in u.HANDLER_TYPES || c(0, "Cannot register invalid handler type"), invariant/*void*/ 0 === p[global/*e*/] && (p[global/*e*/] = []), p[global/*e*/].push({
            handlerType: require/*exports/*t*/*/,
            config: requireDynamic/*GraphQLMutatorConstants/*n*/*/
        })
    }
    var u = require/*exports/*t*/*/("GraphQLMutatorConstants"),
        c = require/*exports/*t*/*/("invariant"),
        p = {},
        d = {
            registerForRangeAddMutationType: function(global/*e*/, require/*exports/*t*/*/) {
                a(require/*exports/*t*/*/), l(global/*e*/, u.RANGE_ADD_HANDLER, require/*exports/*t*/*/)
            },
            registerForRangeDeleteMutationType: function(global/*e*/, require/*exports/*t*/*/) {
                s(require/*exports/*t*/*/), l(global/*e*/, u.RANGE_DELETE_HANDLER, require/*exports/*t*/*/)
            },
            registerForNodeDeleteMutationType: function(global/*e*/, require/*exports/*t*/*/) {
                o(require/*exports/*t*/*/), l(global/*e*/, u.NODE_DELETE_HANDLER, require/*exports/*t*/*/)
            },
            getConfigs: function(global/*e*/) {
                return p[global/*e*/] ? p[global/*e*/] : []
            }
        };
    module/*i*/.exports = d
});