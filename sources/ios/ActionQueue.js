__d("ActionQueue",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        a = [],
        s = {},
        l = {
            appendToQueue: function(global/*e*/) {
                var require/*t*/ = global/*e*/.getClientMutationID();
                require/*t*/ in s && invariant/*o*/(0, "Cannot add an action to the queue that was already added"), a.push(require/*t*/), s[require/*t*/] = global/*e*/
            },
            removeFromQueue: function(global/*e*/) {
                global/*e*/ in s || invariant/*o*/(0, "Cannot remove something not in the queue from the queue"), delete s[global/*e*/];
                var require/*t*/ = a.indexOf(global/*e*/);
                require/*t*/ >= 0 || invariant/*o*/(0, "clientMutationID most occur somewhere in the queue"), a.splice(require/*t*/, 1)
            },
            iterateOverQueue: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < a.length; require/*t*/++) {
                    var requireDynamic/*n*/ = s[a[require/*t*/]];
                    global/*e*/(requireDynamic/*n*/)
                }
            },
            getQueueLength: function() {
                return a.length
            },
            getActionByID: function(global/*e*/) {
                return s[global/*e*/]
            }
        };
    module/*i*/.exports = l
});