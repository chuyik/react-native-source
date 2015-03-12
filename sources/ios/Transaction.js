__d("Transaction",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(e, t, n, r, i, a, s, l) {
                this.isInTransaction() && invariant/*o*/(0, "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.");
                var u, c;
                try {
                    this._isInTransaction = !0, u = !0, this.initializeAll(0), c = e.call(t, n, r, i, a, s, l), u = !1
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
            initializeAll: function(e) {
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var r = t[n];
                    try {
                        this.wrapperInitData[n] = s.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[n] === s.OBSERVED_ERROR) try {
                            this.initializeAll(n + 1)
                        } catch (i) {}
                    }
                }
            },
            closeAll: function(e) {
                this.isInTransaction() || invariant/*o*/(0, "Transaction.closeAll(): Cannot close transaction when none are open.");
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var r, i = t[n],
                        a = this.wrapperInitData[n];
                    try {
                        r = !0, a !== s.OBSERVED_ERROR && i.close && i.close.call(this, a), r = !1
                    } finally {
                        if (r) try {
                            this.closeAll(n + 1)
                        } catch (l) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        },
        s = {
            Mixin: a,
            OBSERVED_ERROR: {}
        };
    i.exports = s
});