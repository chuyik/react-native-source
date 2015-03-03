__d("ActionQueue",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = [],
        invariant/*s*/ = {},
        l = {
            appendToQueue: function(global/*e*/) {
                var require/*t*/ = global/*e*/.getClientMutationID();
                require/*t*/ in invariant/*s*/ && o(0, "Cannot add an action to the queue that was already added"), exports/*a*/.push(require/*t*/), invariant/*s*/[require/*t*/] = global/*e*/
            },
            removeFromQueue: function(global/*e*/) {
                global/*e*/ in invariant/*s*/ || o(0, "Cannot remove something not in the queue from the queue"), delete invariant/*s*/[global/*e*/];
                var require/*t*/ = exports/*a*/.indexOf(global/*e*/);
                require/*t*/ >= 0 || o(0, "clientMutationID most occur somewhere in the queue"), exports/*a*/.splice(require/*t*/, 1)
            },
            iterateOverQueue: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < exports/*a*/.length; require/*t*/++) {
                    var requireDynamic/*n*/ = invariant/*s*/[exports/*a*/[require/*t*/]];
                    global/*e*/(requireDynamic/*n*/)
                }
            },
            getQueueLength: function() {
                return exports/*a*/.length
            },
            getActionByID: function(global/*e*/) {
                return invariant/*s*/[global/*e*/]
            }
        };
    module/*i*/.exports = l
});