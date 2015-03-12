__d("MessageQueue",["ErrorUtils","invariant","warning","JSTimersExecution"],function (e, t, n, r, i) {
    "use strict";
    var ErrorUtils/*o*/ = t("ErrorUtils"),
        invariant/*a*/ = t("invariant"),
        warning/*s*/ = t("warning"),
        JSTimersExecution/*l*/ = t("JSTimersExecution"),
        u = "Error in MessageQueue implementation",
        c = t,
        p = function(e, t, n) {
            return e[t].apply(e, n)
        },
        d = function(e, t, n) {
            this._requireFunc = n || c, this._initBookeeping(), this._initNamingMap(e, t)
        },
        h = 0,
        f = 1,
        m = 2,
        g = 3,
        _ = 4,
        y = function(e, t, n, r) {
            return e && ErrorUtils/*o*/.applyWithGuard(e, r, t), n ? ErrorUtils/*o*/.applyWithGuard(n, r, null) : null
        },
        v = function() {
            return {
                GUID: 1,
                errorCallbackIDForSuccessCallbackID: function(e) {
                    return e + 1
                },
                successCallbackIDForErrorCallbackID: function(e) {
                    return e - 1
                },
                allocateCallbackIDs: function(e) {
                    e.successCallbackID = this.GUID++, e.errorCallbackID = this.GUID++
                },
                isSuccessCallback: function(e) {
                    return e % 2 === 1
                }
            }
        },
        S = {
            _initNamingMap: function(e, t) {
                function n(e, t, n, r, i) {
                    for (var ErrorUtils/*o*/ in e) {
                        var invariant/*a*/ = e[ErrorUtils/*o*/],
                            warning/*s*/ = invariant/*a*/.moduleID;
                        t[ErrorUtils/*o*/] = warning/*s*/, n[warning/*s*/] = ErrorUtils/*o*/, r[ErrorUtils/*o*/] = {}, i[ErrorUtils/*o*/] = {};
                        var JSTimersExecution/*l*/ = invariant/*a*/.methods;
                        for (var u in JSTimersExecution/*l*/) {
                            var c = JSTimersExecution/*l*/[u].methodID;
                            r[ErrorUtils/*o*/][u] = c, i[ErrorUtils/*o*/][c] = u
                        }
                    }
                }
                this._remoteModuleNameToModuleID = {}, this._remoteModuleIDToModuleName = {}, this._remoteModuleNameToMethodNameToID = {}, this._remoteModuleNameToMethodIDToName = {}, this._localModuleNameToModuleID = {}, this._localModuleIDToModuleName = {}, this._localModuleNameToMethodNameToID = {}, this._localModuleNameToMethodIDToName = {}, n(e, this._remoteModuleNameToModuleID, this._remoteModuleIDToModuleName, this._remoteModuleNameToMethodNameToID, this._remoteModuleNameToMethodIDToName), n(t, this._localModuleNameToModuleID, this._localModuleIDToModuleName, this._localModuleNameToMethodNameToID, this._localModuleNameToMethodIDToName)
            },
            _initBookeeping: function() {
                this._POOLED_CBIDS = {
                    errorCallbackID: null,
                    successCallbackID: null
                }, this._bookkeeping = v(), this._threadLocalCallbacksByID = [], this._threadLocalScopesByID = [], this._outgoingItems = [
                    [],
                    [],
                    [],
                    [],
                    []
                ], this._outgoingItemsSwap = [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            },
            invokeCallback: function(e, t) {
                return y(this._invokeCallback, [e, t], null, this)
            },
            _invokeCallback: function(e, t) {
                try {
                    var n = this._threadLocalCallbacksByID[e],
                        r = this._threadLocalScopesByID[e];
                    warning/*s*/(n, "Cannot find callback with CBID %warning/*s*/. Native module may have invoked both the success callback and the error callback.", e), n.apply(r, t)
                } catch (i) {
                    throw i
                } finally {
                    this._freeResourcesForCallbackID(e)
                }
            },
            invokeCallbackAndReturnFlushedQueue: function(e, t) {
                return this._enableLogging && this._loggedIncomingItems.push([(new Date).getTime(), e, t]), y(this._invokeCallback, [e, t], this._flushedQueueUnguarded, this)
            },
            callFunction: function(e, t, n) {
                return y(this._callFunction, [e, t, n], null, this)
            },
            _callFunction: function(e, t, n) {
                var r = this._localModuleIDToModuleName[e],
                    i = this._localModuleNameToMethodIDToName[r][t],
                    ErrorUtils/*o*/ = p(this._requireFunc(r), i, n);
                return ErrorUtils/*o*/
            },
            callFunctionReturnFlushedQueue: function(e, t, n) {
                return this._enableLogging && this._loggedIncomingItems.push([(new Date).getTime(), e, t, n]), y(this._callFunction, [e, t, n], this._flushedQueueUnguarded, this)
            },
            setLoggingEnabled: function(e) {
                this._enableLogging = e, this._loggedIncomingItems = [], this._loggedOutgoingItems = [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            },
            getLoggedIncomingItems: function() {
                return this._loggedIncomingItems
            },
            getLoggedOutgoingItems: function() {
                return this._loggedOutgoingItems
            },
            replayPreviousLog: function(e) {
                this._outgoingItems = e
            },
            _swapAndReinitializeBuffer: function() {
                var e = this._outgoingItems,
                    t = this._outgoingItemsSwap;
                t[h].length = 0, t[f].length = 0, t[m].length = 0, t[g].length = 0, t[_].length = 0, this._outgoingItemsSwap = e, this._outgoingItems = t
            },
            _pushRequestToOutgoingItems: function(e, t, n) {
                this._outgoingItems[h].push(e), this._outgoingItems[f].push(t), this._outgoingItems[m].push(n), this._enableLogging && (this._loggedOutgoingItems[h].push(e), this._loggedOutgoingItems[f].push(t), this._loggedOutgoingItems[m].push(n))
            },
            _pushResponseToOutgoingItems: function(e, t) {
                this._outgoingItems[g].push(e), this._outgoingItems[_].push(t)
            },
            _freeResourcesForCallbackID: function(e) {
                var t = this._bookkeeping.isSuccessCallback(e) ? this._bookkeeping.errorCallbackIDForSuccessCallbackID(e) : this._bookkeeping.successCallbackIDForErrorCallbackID(e);
                this._threadLocalCallbacksByID[e] = null, this._threadLocalScopesByID[e] = null, this._threadLocalCallbacksByID[t] && (this._threadLocalCallbacksByID[t] = null, this._threadLocalScopesByID[t] = null)
            },
            _storeCallbacksInCurrentThread: function(e, t, n) {
                e || t || invariant/*a*/(0, u), this._bookkeeping.allocateCallbackIDs(this._POOLED_CBIDS);
                var r = this._POOLED_CBIDS.successCallbackID,
                    i = this._POOLED_CBIDS.errorCallbackID;
                this._threadLocalCallbacksByID[i] = e, this._threadLocalCallbacksByID[r] = t, this._threadLocalScopesByID[i] = n, this._threadLocalScopesByID[r] = n
            },
            flushedQueue: function() {
                return y(null, null, this._flushedQueueUnguarded, this)
            },
            _flushedQueueUnguarded: function() {
                JSTimersExecution/*l*/.callImmediates();
                var e = this._outgoingItems;
                this._swapAndReinitializeBuffer();
                var t = e[h].length || e[_].length ? e : null;
                return t
            },
            callDeprecated: function(e, t, n, r, i) {
                r && "function" != typeof r && invariant/*a*/(0, "Last argument (callback) must be function"), r && (this._storeCallbacksInCurrentThread(null, r, i, this._POOLED_CBIDS), n.push(this._POOLED_CBIDS.successCallbackID));
                var ErrorUtils/*o*/ = this._remoteModuleNameToModuleID[e];
                if (void 0 === ErrorUtils/*o*/ || null === ErrorUtils/*o*/) throw new Error("Unrecognized module name:" + e);
                var warning/*s*/ = this._remoteModuleNameToMethodNameToID[e][t];
                if (void 0 === warning/*s*/ || null === ErrorUtils/*o*/) throw new Error("Unrecognized method name:" + t);
                this._pushRequestToOutgoingItems(ErrorUtils/*o*/, warning/*s*/, n)
            },
            call: function(e, t, n, r, i, ErrorUtils/*o*/) {
                (r && "function" != typeof r || i && "function" != typeof i) && invariant/*a*/(0, "Callbacks must be functions"), (r || i) && (this._storeCallbacksInCurrentThread(r, i, ErrorUtils/*o*/, this._POOLED_CBIDS), n.push(this._POOLED_CBIDS.errorCallbackID), n.push(this._POOLED_CBIDS.successCallbackID));
                var warning/*s*/ = this._remoteModuleNameToModuleID[e];
                if (void 0 === warning/*s*/ || null === warning/*s*/) throw new Error("Unrecognized module name:" + e);
                var JSTimersExecution/*l*/ = this._remoteModuleNameToMethodNameToID[e][t];
                if (void 0 === JSTimersExecution/*l*/ || null === warning/*s*/) throw new Error("Unrecognized method name:" + t);
                this._pushRequestToOutgoingItems(warning/*s*/, JSTimersExecution/*l*/, n)
            },
            __numPendingCallbacksOnlyUseMeInTestCases: function() {
                for (var e = this._threadLocalCallbacksByID, t = 0, n = 0; n < e.length; n++) e[n] && t++;
                return t
            }
        };
    Object.assign(d.prototype, S), i.exports = d
});