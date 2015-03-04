__d("GraphQLStoreChangeEmitter",["DliteProfiler","ErrorUtils","GraphQLStoreRangeUtils","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        m(a), f = null
    }

    function a() {
        h.forEach(s)
    }

    function s(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.subscribedIDs,
            requireLazy/*r*/ = global/*e*/.callback;
        if (f)
            for (var module/*i*/ in f)
                if (f.hasOwnProperty(module/*i*/)) {
                    var o = f[module/*i*/];
                    if (require/*t*/ > o) break;
                    if (requireDynamic/*n*/.indexOf(module/*i*/) >= 0) {
                        ErrorUtils/*c*/.applyWithGuard(requireLazy/*r*/, null, null, null, "GraphQLStoreChangeEmitter");
                        break
                    }
                }
    }

    function l(global/*e*/) {
        var require/*t*/ = GraphQLStoreRangeUtils/*p*/.parseRangeClientID(global/*e*/);
        return require/*t*/ ? require/*t*/.dataID : global/*e*/
    }
    var DliteProfiler/*u*/ = require/*t*/("DliteProfiler"),
        ErrorUtils/*c*/ = require/*t*/("ErrorUtils"),
        GraphQLStoreRangeUtils/*p*/ = require/*t*/("GraphQLStoreRangeUtils"),
        setImmediate/*d*/ = require/*t*/("setImmediate"),
        h = [],
        f = null,
        m = function(global/*e*/) {
            return global/*e*/()
        },
        g = {
            addListenerForIDs: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/.map(l),
                    requireLazy/*r*/ = h.length;
                return h.push({
                    subscribedIDs: requireDynamic/*n*/,
                    callback: require/*t*/
                }), {
                    remove: function() {
                        delete h[requireLazy/*r*/]
                    }
                }
            },
            broadcastChangeForID: function(global/*e*/) {
                null === f && (setImmediate/*d*/(o), f = {}), f[l(global/*e*/)] = h.length - 1
            },
            injectBatchingStrategy: function(global/*e*/) {
                m = global/*e*/
            },
            _processSubscribers: a
        };
    DliteProfiler/*u*/.instrumentMethods(g, {
        addListenerForIDs: "GraphQLStoreChangeEmitter.addListenerForIDs",
        broadcastChangeForID: "GraphQLStoreChangeEmitter.broadcastChangeForID",
        _processSubscribers: "GraphQLStoreChangeEmitter.processSubscribers"
    }), module/*i*/.exports = g
});