__d("ActionCollisionMap",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = {},
        s = {},
        l = {
            hasPendingActionForKey: function(global/*e*/) {
                return !(!a[global/*e*/] || !a[global/*e*/].length)
            },
            appendActionForKey: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = require/*t*/.getClientMutationID();
                l.existsInMap(requireDynamic/*n*/) && invariant/*o*/(0, "Cannot append an action that's already in the map"), s[requireDynamic/*n*/] = global/*e*/;
                var requireLazy/*r*/ = a[global/*e*/] || [];
                requireLazy/*r*/.push(require/*t*/), a[global/*e*/] = requireLazy/*r*/
            },
            getFirstActionForKey: function(global/*e*/) {
                var require/*t*/ = a[global/*e*/];
                return require/*t*/ && require/*t*/.length ? require/*t*/[0] : null
            },
            shiftActionForKey: function(global/*e*/) {
                var require/*t*/ = a[global/*e*/];
                require/*t*/ && require/*t*/.length || invariant/*o*/(0, "Cannot shift unless there are actions");
                var requireDynamic/*n*/ = require/*t*/.shift();
                return 0 === require/*t*/.length && delete a[global/*e*/], delete s[requireDynamic/*n*/.getClientMutationID()], requireDynamic/*n*/
            },
            iterateOverActionsForKey: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = a[global/*e*/] || [];
                requireDynamic/*n*/.forEach(require/*t*/)
            },
            clearActionsForKey: function(global/*e*/) {
                for (var require/*t*/ = a[global/*e*/] || [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) delete s[require/*t*/[requireDynamic/*n*/].getClientMutationID()];
                delete a[global/*e*/]
            },
            getKeyForClientMutationID: function(global/*e*/) {
                return s[global/*e*/] || null
            },
            existsInMap: function(global/*e*/) {
                return !!l.getKeyForClientMutationID(global/*e*/)
            }
        };
    module/*i*/.exports = l
});