__d("ActionCollisionMap",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = {},
        invariant/*s*/ = {},
        l = {
            hasPendingActionForKey: function(global/*e*/) {
                return !(!exports/*a*/[global/*e*/] || !exports/*a*/[global/*e*/].length)
            },
            appendActionForKey: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = require/*t*/.getClientMutationID();
                l.existsInMap(requireDynamic/*n*/) && o(0, "Cannot append an action that'invariant/*s*/ already in the map"), invariant/*s*/[requireDynamic/*n*/] = global/*e*/;
                var requireLazy/*r*/ = exports/*a*/[global/*e*/] || [];
                requireLazy/*r*/.push(require/*t*/), exports/*a*/[global/*e*/] = requireLazy/*r*/
            },
            getFirstActionForKey: function(global/*e*/) {
                var require/*t*/ = exports/*a*/[global/*e*/];
                return require/*t*/ && require/*t*/.length ? require/*t*/[0] : null
            },
            shiftActionForKey: function(global/*e*/) {
                var require/*t*/ = exports/*a*/[global/*e*/];
                require/*t*/ && require/*t*/.length || o(0, "Cannot shift unless there are actions");
                var requireDynamic/*n*/ = require/*t*/.shift();
                return 0 === require/*t*/.length && delete exports/*a*/[global/*e*/], delete invariant/*s*/[requireDynamic/*n*/.getClientMutationID()], requireDynamic/*n*/
            },
            iterateOverActionsForKey: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = exports/*a*/[global/*e*/] || [];
                requireDynamic/*n*/.forEach(require/*t*/)
            },
            clearActionsForKey: function(global/*e*/) {
                for (var require/*t*/ = exports/*a*/[global/*e*/] || [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) delete invariant/*s*/[require/*t*/[requireDynamic/*n*/].getClientMutationID()];
                delete exports/*a*/[global/*e*/]
            },
            getKeyForClientMutationID: function(global/*e*/) {
                return invariant/*s*/[global/*e*/] || null
            },
            existsInMap: function(global/*e*/) {
                return !!l.getKeyForClientMutationID(global/*e*/)
            }
        };
    module/*i*/.exports = l
});