__d("BatchedBridgeFactory",["invariant","keyMirror","mapObject","warning"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        keyMirror/*a*/ = t("keyMirror"),
        mapObject/*s*/ = t("mapObject"),
        warning/*l*/ = t("warning"),
        u = Array.prototype.slice,
        c = keyMirror/*a*/({
            remote: null,
            local: null
        }),
        p = {
            MethodTypes: c,
            _createDeprecatedBridgedModule: function(e, t, n) {
                var r = mapObject/*s*/(t.methods, function(t, r) {
                    return t.type === c.local ? null : function() {
                        var t = arguments.length ? arguments[arguments.length - 1] : null,
                            i = "function" == typeof t,
                            invariant/*o*/ = u.call(arguments, 0, arguments.length - (i ? 1 : 0)),
                            keyMirror/*a*/ = i ? t : null;
                        return e.callDeprecated(n, r, invariant/*o*/, keyMirror/*a*/)
                    }
                });
                for (var i in t.constants) warning/*l*/(!r[i], "saw constant and method named %mapObject/*s*/", i), r[i] = t.constants[i];
                return r
            },
            _createBridgedModule: function(e, t, n) {
                var r = mapObject/*s*/(t.methods, function(t, r) {
                    return t.type === c.local ? null : function() {
                        var t = arguments.length > 0 ? arguments[arguments.length - 1] : null,
                            i = arguments.length > 1 ? arguments[arguments.length - 2] : null,
                            keyMirror/*a*/ = "function" == typeof t,
                            mapObject/*s*/ = "function" == typeof i,
                            warning/*l*/ = keyMirror/*a*/;
                        keyMirror/*a*/ && mapObject/*s*/ || !keyMirror/*a*/ && !mapObject/*s*/ || invariant/*o*/(0, "You must supply error callbacks and success callbacks or neither");
                        var c = u.call(arguments, 0, arguments.length - (warning/*l*/ ? 2 : 0)),
                            p = warning/*l*/ ? t : null,
                            d = warning/*l*/ ? i : null;
                        return e.call(n, r, c, d, p)
                    }
                });
                for (var i in t.constants) warning/*l*/(!r[i], "saw constant and method named %mapObject/*s*/", i), r[i] = t.constants[i];
                return r
            },
            create: function(e, t, n) {
                var r = new e(t, n);
                return {
                    callFunction: r.callFunction.bind(r),
                    callFunctionReturnFlushedQueue: r.callFunctionReturnFlushedQueue.bind(r),
                    invokeCallback: r.invokeCallback.bind(r),
                    invokeCallbackAndReturnFlushedQueue: r.invokeCallbackAndReturnFlushedQueue.bind(r),
                    flushedQueue: r.flushedQueue.bind(r),
                    RemoteModulesDeprecated: mapObject/*s*/(t, this._createDeprecatedBridgedModule.bind(this, r)),
                    RemoteModules: mapObject/*s*/(t, this._createBridgedModule.bind(this, r)),
                    setLoggingEnabled: r.setLoggingEnabled.bind(r),
                    getLoggedOutgoingItems: r.getLoggedOutgoingItems.bind(r),
                    getLoggedIncomingItems: r.getLoggedIncomingItems.bind(r),
                    replayPreviousLog: r.replayPreviousLog.bind(r)
                }
            }
        };
    i.exports = p
});