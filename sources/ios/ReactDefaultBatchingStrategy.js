__d("ReactDefaultBatchingStrategy",["ReactUpdates","Transaction","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.reinitializeTransaction()
    }
    var a = require/*t*/("ReactUpdates"),
        s = require/*t*/("Transaction"),
        l = require/*t*/("emptyFunction"),
        u = {
            initialize: l,
            close: function() {
                h.isBatchingUpdates = !1
            }
        },
        c = {
            initialize: l,
            close: a.flushBatchedUpdates.bind(a)
        },
        p = [c, u];
    Object.assign(o.prototype, s.Mixin, {
        getTransactionWrappers: function() {
            return p
        }
    });
    var d = new o,
        h = {
            isBatchingUpdates: !1,
            batchedUpdates: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = h.isBatchingUpdates;
                h.isBatchingUpdates = !0, requireLazy/*r*/ ? global/*e*/(require/*t*/, requireDynamic/*n*/) : d.perform(global/*e*/, null, require/*t*/, requireDynamic/*n*/)
            }
        };
    module/*i*/.exports = h
});