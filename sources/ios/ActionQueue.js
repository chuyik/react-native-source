__d("ActionQueue",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = [],
        s = {},
        l = {
            appendToQueue: function(e) {
                var t = e.getClientMutationID();
                t in s && invariant/*o*/(0, "Cannot add an action to the queue that was already added"), a.push(t), s[t] = e
            },
            removeFromQueue: function(e) {
                e in s || invariant/*o*/(0, "Cannot remove something not in the queue from the queue"), delete s[e];
                var t = a.indexOf(e);
                t >= 0 || invariant/*o*/(0, "clientMutationID most occur somewhere in the queue"), a.splice(t, 1)
            },
            iterateOverQueue: function(e) {
                for (var t = 0; t < a.length; t++) {
                    var n = s[a[t]];
                    e(n)
                }
            },
            getQueueLength: function() {
                return a.length
            },
            getActionByID: function(e) {
                return s[e]
            }
        };
    i.exports = l
});