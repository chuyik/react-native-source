__d("ReactDefaultBatchingStrategy",["ReactUpdates","Transaction","emptyFunction"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.reinitializeTransaction()
    }
    var ReactUpdates/*a*/ = t("ReactUpdates"),
        Transaction/*s*/ = t("Transaction"),
        emptyFunction/*l*/ = t("emptyFunction"),
        u = {
            initialize: emptyFunction/*l*/,
            close: function() {
                h.isBatchingUpdates = !1
            }
        },
        c = {
            initialize: emptyFunction/*l*/,
            close: ReactUpdates/*a*/.flushBatchedUpdates.bind(ReactUpdates/*a*/)
        },
        p = [c, u];
    Object.assign(o.prototype, Transaction/*s*/.Mixin, {
        getTransactionWrappers: function() {
            return p
        }
    });
    var d = new o,
        h = {
            isBatchingUpdates: !1,
            batchedUpdates: function(e, t, n) {
                var r = h.isBatchingUpdates;
                h.isBatchingUpdates = !0, r ? e(t, n) : d.perform(e, null, t, n)
            }
        };
    i.exports = h
});