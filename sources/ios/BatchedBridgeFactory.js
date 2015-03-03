__d("BatchedBridgeFactory",["invariant","keyMirror","mapObject","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        a = require/*t*/("keyMirror"),
        s = require/*t*/("mapObject"),
        l = require/*t*/("warning"),
        u = Array.prototype.slice,
        c = a({
            remote: null,
            local: null
        }),
        p = {
            MethodTypes: c,
            _createDeprecatedBridgedModule: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = s(require/*t*/.methods, function(require/*t*/, requireLazy/*r*/) {
                    return require/*t*/.type === c.local ? null : function() {
                        var require/*t*/ = arguments.length ? arguments[arguments.length - 1] : null,
                            module/*i*/ = "function" == typeof require/*t*/,
                            o = u.call(arguments, 0, arguments.length - (module/*i*/ ? 1 : 0)),
                            a = module/*i*/ ? require/*t*/ : null;
                        return global/*e*/.callDeprecated(requireDynamic/*n*/, requireLazy/*r*/, o, a)
                    }
                });
                for (var module/*i*/ in require/*t*/.constants) l(!requireLazy/*r*/[module/*i*/], "saw constant and method named %s", module/*i*/), requireLazy/*r*/[module/*i*/] = require/*t*/.constants[module/*i*/];
                return requireLazy/*r*/
            },
            _createBridgedModule: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = s(require/*t*/.methods, function(require/*t*/, requireLazy/*r*/) {
                    return require/*t*/.type === c.local ? null : function() {
                        var require/*t*/ = arguments.length > 0 ? arguments[arguments.length - 1] : null,
                            module/*i*/ = arguments.length > 1 ? arguments[arguments.length - 2] : null,
                            a = "function" == typeof require/*t*/,
                            s = "function" == typeof module/*i*/,
                            l = a;
                        a && s || !a && !s || o(0, "You must supply error callbacks and success callbacks or neither");
                        var c = u.call(arguments, 0, arguments.length - (l ? 2 : 0)),
                            p = l ? require/*t*/ : null,
                            d = l ? module/*i*/ : null;
                        return global/*e*/.call(requireDynamic/*n*/, requireLazy/*r*/, c, d, p)
                    }
                });
                for (var module/*i*/ in require/*t*/.constants) l(!requireLazy/*r*/[module/*i*/], "saw constant and method named %s", module/*i*/), requireLazy/*r*/[module/*i*/] = require/*t*/.constants[module/*i*/];
                return requireLazy/*r*/
            },
            create: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = new global/*e*/(require/*t*/, requireDynamic/*n*/);
                return {
                    callFunction: requireLazy/*r*/.callFunction.bind(requireLazy/*r*/),
                    callFunctionReturnFlushedQueue: requireLazy/*r*/.callFunctionReturnFlushedQueue.bind(requireLazy/*r*/),
                    invokeCallback: requireLazy/*r*/.invokeCallback.bind(requireLazy/*r*/),
                    invokeCallbackAndReturnFlushedQueue: requireLazy/*r*/.invokeCallbackAndReturnFlushedQueue.bind(requireLazy/*r*/),
                    flushedQueue: requireLazy/*r*/.flushedQueue.bind(requireLazy/*r*/),
                    RemoteModulesDeprecated: s(require/*t*/, this._createDeprecatedBridgedModule.bind(this, requireLazy/*r*/)),
                    RemoteModules: s(require/*t*/, this._createBridgedModule.bind(this, requireLazy/*r*/)),
                    setLoggingEnabled: requireLazy/*r*/.setLoggingEnabled.bind(requireLazy/*r*/),
                    getLoggedOutgoingItems: requireLazy/*r*/.getLoggedOutgoingItems.bind(requireLazy/*r*/),
                    getLoggedIncomingItems: requireLazy/*r*/.getLoggedIncomingItems.bind(requireLazy/*r*/),
                    replayPreviousLog: requireLazy/*r*/.replayPreviousLog.bind(requireLazy/*r*/)
                }
            }
        };
    module/*i*/.exports = p
});