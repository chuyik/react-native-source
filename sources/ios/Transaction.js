__d("Transaction",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), invariant/*this.wrapperInitData*/ ? invariant/*this.wrapperInitData*/.length = 0 : invariant/*this.wrapperInitData*/ = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, exports/*a*/, s, l) {
                this.isInTransaction() && o(0, "Transaction.perform(...): Cannot initialize exports/*a*/ transaction when there is already an outstanding transaction.");
                var u, c;
                try {
                    this._isInTransaction = !0, u = !0, this.initializeAll(0), c = global/*e*/.call(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, exports/*a*/, s, l), u = !1
                } finally {
                    try {
                        if (u) try {
                            this.closeAll(0)
                        } catch (p) {} else this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return c
            },
            initializeAll: function(global/*e*/) {
                for (var require/*t*/ = this.transactionWrappers, requireDynamic/*n*/ = global/*e*/; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
                    var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/];
                    try {
                        invariant/*this.wrapperInitData*/[requireDynamic/*n*/] = s.OBSERVED_ERROR, invariant/*this.wrapperInitData*/[requireDynamic/*n*/] = requireLazy/*r*/.initialize ? requireLazy/*r*/.initialize.call(this) : null
                    } finally {
                        if (invariant/*this.wrapperInitData*/[requireDynamic/*n*/] === s.OBSERVED_ERROR) try {
                            this.initializeAll(requireDynamic/*n*/ + 1)
                        } catch (module/*i*/) {}
                    }
                }
            },
            closeAll: function(global/*e*/) {
                this.isInTransaction() || o(0, "Transaction.closeAll(): Cannot close transaction when none are open.");
                for (var require/*t*/ = this.transactionWrappers, requireDynamic/*n*/ = global/*e*/; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
                    var requireLazy/*r*/, module/*i*/ = require/*t*/[requireDynamic/*n*/],
                        exports/*a*/ = invariant/*this.wrapperInitData*/[requireDynamic/*n*/];
                    try {
                        requireLazy/*r*/ = !0, exports/*a*/ !== s.OBSERVED_ERROR && module/*i*/.close && module/*i*/.close.call(this, exports/*a*/), requireLazy/*r*/ = !1
                    } finally {
                        if (requireLazy/*r*/) try {
                            this.closeAll(requireDynamic/*n*/ + 1)
                        } catch (l) {}
                    }
                }
                invariant/*this.wrapperInitData*/.length = 0
            }
        },
        s = {
            Mixin: exports/*a*/,
            OBSERVED_ERROR: {}
        };
    module/*i*/.exports = s
});