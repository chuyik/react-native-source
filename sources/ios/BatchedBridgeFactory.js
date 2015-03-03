__d("BatchedBridgeFactory",["invariant","keyMirror","mapObject","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = require/*t*/("keyMirror"),
        invariant/*s*/ = require/*t*/("mapObject"),
        keyMirror/*l*/ = require/*t*/("warning"),
        mapObject/*u*/ = Array.prototype.slice,
        warning/*c*/ = exports/*a*/({
            remote: null,
            local: null
        }),
        p = {
            MethodTypes: warning/*c*/,
            _createDeprecatedBridgedModule: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = invariant/*s*/(require/*t*/.methods, function(require/*t*/, requireLazy/*r*/) {
                    return require/*t*/.type === warning/*c*/.local ? null : function() {
                        var require/*t*/ = arguments.length ? arguments[arguments.length - 1] : null,
                            module/*i*/ = "function" == typeof require/*t*/,
                            o = mapObject/*u*/.call(arguments, 0, arguments.length - (module/*i*/ ? 1 : 0)),
                            exports/*a*/ = module/*i*/ ? require/*t*/ : null;
                        return global/*e*/.callDeprecated(requireDynamic/*n*/, requireLazy/*r*/, o, exports/*a*/)
                    }
                });
                for (var module/*i*/ in require/*t*/.constants) keyMirror/*l*/(!requireLazy/*r*/[module/*i*/], "saw constant and method named %invariant/*s*/", module/*i*/), requireLazy/*r*/[module/*i*/] = require/*t*/.constants[module/*i*/];
                return requireLazy/*r*/
            },
            _createBridgedModule: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = invariant/*s*/(require/*t*/.methods, function(require/*t*/, requireLazy/*r*/) {
                    return require/*t*/.type === warning/*c*/.local ? null : function() {
                        var require/*t*/ = arguments.length > 0 ? arguments[arguments.length - 1] : null,
                            module/*i*/ = arguments.length > 1 ? arguments[arguments.length - 2] : null,
                            exports/*a*/ = "function" == typeof require/*t*/,
                            invariant/*s*/ = "function" == typeof module/*i*/,
                            keyMirror/*l*/ = exports/*a*/;
                        exports/*a*/ && invariant/*s*/ || !exports/*a*/ && !invariant/*s*/ || o(0, "You must supply error callbacks and success callbacks or neither");
                        var warning/*c*/ = mapObject/*u*/.call(arguments, 0, arguments.length - (keyMirror/*l*/ ? 2 : 0)),
                            p = keyMirror/*l*/ ? require/*t*/ : null,
                            d = keyMirror/*l*/ ? module/*i*/ : null;
                        return global/*e*/.call(requireDynamic/*n*/, requireLazy/*r*/, warning/*c*/, d, p)
                    }
                });
                for (var module/*i*/ in require/*t*/.constants) keyMirror/*l*/(!requireLazy/*r*/[module/*i*/], "saw constant and method named %invariant/*s*/", module/*i*/), requireLazy/*r*/[module/*i*/] = require/*t*/.constants[module/*i*/];
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
                    RemoteModulesDeprecated: invariant/*s*/(require/*t*/, this._createDeprecatedBridgedModule.bind(this, requireLazy/*r*/)),
                    RemoteModules: invariant/*s*/(require/*t*/, this._createBridgedModule.bind(this, requireLazy/*r*/)),
                    setLoggingEnabled: requireLazy/*r*/.setLoggingEnabled.bind(requireLazy/*r*/),
                    getLoggedOutgoingItems: requireLazy/*r*/.getLoggedOutgoingItems.bind(requireLazy/*r*/),
                    getLoggedIncomingItems: requireLazy/*r*/.getLoggedIncomingItems.bind(requireLazy/*r*/),
                    replayPreviousLog: requireLazy/*r*/.replayPreviousLog.bind(requireLazy/*r*/)
                }
            }
        };
    module/*i*/.exports = p
});