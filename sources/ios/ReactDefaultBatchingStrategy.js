__d("ReactDefaultBatchingStrategy",["ReactUpdates","Transaction","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.reinitializeTransaction()
    }
    var a = require/*t*/("ReactUpdates"),
        exports/*s*/ = require/*t*/("Transaction"),
        ReactUpdates/*l*/ = require/*t*/("emptyFunction"),
        Transaction/*u*/ = {
            initialize: ReactUpdates/*l*/,
            emptyFunction/*close*/: function() {
                h.isBatchingUpdates = !1
            }
        },
        c = {
            initialize: ReactUpdates/*l*/,
            emptyFunction/*close*/: a.flushBatchedUpdates.bind(a)
        },
        p = [c, Transaction/*u*/];
    Object.assign(o.prototype, exports/*s*/.Mixin, {
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