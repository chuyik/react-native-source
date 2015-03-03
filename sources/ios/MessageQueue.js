__d("MessageQueue",["ErrorUtils","invariant","warning","JSTimersExecution"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ErrorUtils"),
        a = require/*t*/("invariant"),
        s = require/*t*/("warning"),
        l = require/*t*/("JSTimersExecution"),
        u = "Error in MessageQueue implementation",
        c = require/*t*/,
        p = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            return global/*e*/[require/*t*/].apply(global/*e*/, requireDynamic/*n*/)
        },
        d = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            this._requireFunc = requireDynamic/*n*/ || c, this._initBookeeping(), this._initNamingMap(global/*e*/, require/*t*/)
        },
        h = 0,
        f = 1,
        m = 2,
        g = 3,
        _ = 4,
        y = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            return global/*e*/ && o.applyWithGuard(global/*e*/, requireLazy/*r*/, require/*t*/), requireDynamic/*n*/ ? o.applyWithGuard(requireDynamic/*n*/, requireLazy/*r*/, null) : null
        },
        v = function() {
            return {
                GUID: 1,
                errorCallbackIDForSuccessCallbackID: function(global/*e*/) {
                    return global/*e*/ + 1
                },
                successCallbackIDForErrorCallbackID: function(global/*e*/) {
                    return global/*e*/ - 1
                },
                allocateCallbackIDs: function(global/*e*/) {
                    global/*e*/.successCallbackID = this.GUID++, global/*e*/.errorCallbackID = this.GUID++
                },
                isSuccessCallback: function(global/*e*/) {
                    return global/*e*/ % 2 === 1
                }
            }
        },
        S = {
            _initNamingMap: function(global/*e*/, require/*t*/) {
                function requireDynamic/*n*/(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                    for (var o in global/*e*/) {
                        var a = global/*e*/[o],
                            s = a.moduleID;
                        require/*t*/[o] = s, requireDynamic/*n*/[s] = o, requireLazy/*r*/[o] = {}, module/*i*/[o] = {};
                        var l = a.methods;
                        for (var u in l) {
                            var c = l[u].methodID;
                            requireLazy/*r*/[o][u] = c, module/*i*/[o][c] = u
                        }
                    }
                }
                this._remoteModuleNameToModuleID = {}, this._remoteModuleIDToModuleName = {}, this._remoteModuleNameToMethodNameToID = {}, this._remoteModuleNameToMethodIDToName = {}, this._localModuleNameToModuleID = {}, this._localModuleIDToModuleName = {}, this._localModuleNameToMethodNameToID = {}, this._localModuleNameToMethodIDToName = {}, requireDynamic/*n*/(global/*e*/, this._remoteModuleNameToModuleID, this._remoteModuleIDToModuleName, this._remoteModuleNameToMethodNameToID, this._remoteModuleNameToMethodIDToName), requireDynamic/*n*/(require/*t*/, this._localModuleNameToModuleID, this._localModuleIDToModuleName, this._localModuleNameToMethodNameToID, this._localModuleNameToMethodIDToName)
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
            invokeCallback: function(global/*e*/, require/*t*/) {
                return y(this._invokeCallback, [global/*e*/, require/*t*/], null, this)
            },
            _invokeCallback: function(global/*e*/, require/*t*/) {
                try {
                    var requireDynamic/*n*/ = this._threadLocalCallbacksByID[global/*e*/],
                        requireLazy/*r*/ = this._threadLocalScopesByID[global/*e*/];
                    s(requireDynamic/*n*/, "Cannot find callback with CBID %s. Native module may have invoked both the success callback and the error callback.", global/*e*/), requireDynamic/*n*/.apply(requireLazy/*r*/, require/*t*/)
                } catch (module/*i*/) {
                    throw module/*i*/
                } finally {
                    this._freeResourcesForCallbackID(global/*e*/)
                }
            },
            invokeCallbackAndReturnFlushedQueue: function(global/*e*/, require/*t*/) {
                return this._enableLogging && this._loggedIncomingItems.push([(new Date).getTime(), global/*e*/, require/*t*/]), y(this._invokeCallback, [global/*e*/, require/*t*/], this._flushedQueueUnguarded, this)
            },
            callFunction: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return y(this._callFunction, [global/*e*/, require/*t*/, requireDynamic/*n*/], null, this)
            },
            _callFunction: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this._localModuleIDToModuleName[global/*e*/],
                    module/*i*/ = this._localModuleNameToMethodIDToName[requireLazy/*r*/][require/*t*/],
                    o = p(this._requireFunc(requireLazy/*r*/), module/*i*/, requireDynamic/*n*/);
                return o
            },
            callFunctionReturnFlushedQueue: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return this._enableLogging && this._loggedIncomingItems.push([(new Date).getTime(), global/*e*/, require/*t*/, requireDynamic/*n*/]), y(this._callFunction, [global/*e*/, require/*t*/, requireDynamic/*n*/], this._flushedQueueUnguarded, this)
            },
            setLoggingEnabled: function(global/*e*/) {
                this._enableLogging = global/*e*/, this._loggedIncomingItems = [], this._loggedOutgoingItems = [
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
            replayPreviousLog: function(global/*e*/) {
                this._outgoingItems = global/*e*/
            },
            _swapAndReinitializeBuffer: function() {
                var global/*e*/ = this._outgoingItems,
                    require/*t*/ = this._outgoingItemsSwap;
                require/*t*/[h].length = 0, require/*t*/[f].length = 0, require/*t*/[m].length = 0, require/*t*/[g].length = 0, require/*t*/[_].length = 0, this._outgoingItemsSwap = global/*e*/, this._outgoingItems = require/*t*/
            },
            _pushRequestToOutgoingItems: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                this._outgoingItems[h].push(global/*e*/), this._outgoingItems[f].push(require/*t*/), this._outgoingItems[m].push(requireDynamic/*n*/), this._enableLogging && (this._loggedOutgoingItems[h].push(global/*e*/), this._loggedOutgoingItems[f].push(require/*t*/), this._loggedOutgoingItems[m].push(requireDynamic/*n*/))
            },
            _pushResponseToOutgoingItems: function(global/*e*/, require/*t*/) {
                this._outgoingItems[g].push(global/*e*/), this._outgoingItems[_].push(require/*t*/)
            },
            _freeResourcesForCallbackID: function(global/*e*/) {
                var require/*t*/ = this._bookkeeping.isSuccessCallback(global/*e*/) ? this._bookkeeping.errorCallbackIDForSuccessCallbackID(global/*e*/) : this._bookkeeping.successCallbackIDForErrorCallbackID(global/*e*/);
                this._threadLocalCallbacksByID[global/*e*/] = null, this._threadLocalScopesByID[global/*e*/] = null, this._threadLocalCallbacksByID[require/*t*/] && (this._threadLocalCallbacksByID[require/*t*/] = null, this._threadLocalScopesByID[require/*t*/] = null)
            },
            _storeCallbacksInCurrentThread: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/ || require/*t*/ || a(0, u), this._bookkeeping.allocateCallbackIDs(this._POOLED_CBIDS);
                var requireLazy/*r*/ = this._POOLED_CBIDS.successCallbackID,
                    module/*i*/ = this._POOLED_CBIDS.errorCallbackID;
                this._threadLocalCallbacksByID[module/*i*/] = global/*e*/, this._threadLocalCallbacksByID[requireLazy/*r*/] = require/*t*/, this._threadLocalScopesByID[module/*i*/] = requireDynamic/*n*/, this._threadLocalScopesByID[requireLazy/*r*/] = requireDynamic/*n*/
            },
            flushedQueue: function() {
                return y(null, null, this._flushedQueueUnguarded, this)
            },
            _flushedQueueUnguarded: function() {
                l.callImmediates();
                var global/*e*/ = this._outgoingItems;
                this._swapAndReinitializeBuffer();
                var require/*t*/ = global/*e*/[h].length || global/*e*/[_].length ? global/*e*/ : null;
                return require/*t*/
            },
            callDeprecated: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                requireLazy/*r*/ && "function" != typeof requireLazy/*r*/ && a(0, "Last argument (callback) must be function"), requireLazy/*r*/ && (this._storeCallbacksInCurrentThread(null, requireLazy/*r*/, module/*i*/, this._POOLED_CBIDS), requireDynamic/*n*/.push(this._POOLED_CBIDS.successCallbackID));
                var o = this._remoteModuleNameToModuleID[global/*e*/];
                if (void 0 === o || null === o) throw new Error("Unrecognized module name:" + global/*e*/);
                var s = this._remoteModuleNameToMethodNameToID[global/*e*/][require/*t*/];
                if (void 0 === s || null === o) throw new Error("Unrecognized method name:" + require/*t*/);
                this._pushRequestToOutgoingItems(o, s, requireDynamic/*n*/)
            },
            call: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                (requireLazy/*r*/ && "function" != typeof requireLazy/*r*/ || module/*i*/ && "function" != typeof module/*i*/) && a(0, "Callbacks must be functions"), (requireLazy/*r*/ || module/*i*/) && (this._storeCallbacksInCurrentThread(requireLazy/*r*/, module/*i*/, o, this._POOLED_CBIDS), requireDynamic/*n*/.push(this._POOLED_CBIDS.errorCallbackID), requireDynamic/*n*/.push(this._POOLED_CBIDS.successCallbackID));
                var s = this._remoteModuleNameToModuleID[global/*e*/];
                if (void 0 === s || null === s) throw new Error("Unrecognized module name:" + global/*e*/);
                var l = this._remoteModuleNameToMethodNameToID[global/*e*/][require/*t*/];
                if (void 0 === l || null === s) throw new Error("Unrecognized method name:" + require/*t*/);
                this._pushRequestToOutgoingItems(s, l, requireDynamic/*n*/)
            },
            __numPendingCallbacksOnlyUseMeInTestCases: function() {
                for (var global/*e*/ = this._threadLocalCallbacksByID, require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) global/*e*/[requireDynamic/*n*/] && require/*t*/++;
                return require/*t*/
            }
        };
    Object.assign(d.prototype, S), module/*i*/.exports = d
});