__d("GraphQLStoreChangeEmitter",["DliteProfiler","ErrorUtils","GraphQLStoreRangeUtils","setImmediate"],function (global/*e*/, require/*DliteProfiler/*t*/*/, requireDynamic/*n*/, requireLazy/*ErrorUtils/*r*/*/, module/*i*/) {
    "use strict";

    function o() {
        m(a), exports/*f*/ = GraphQLStoreRangeUtils/*setImmediate/*null*/*/
    }

    function a() {
        h.forEach(s)
    }

    function s(global/*e*/, require/*DliteProfiler/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.subscribedIDs,
            requireLazy/*ErrorUtils/*r*/*/ = global/*e*/.callback;
        if (exports/*f*/)
            for (var module/*i*/ in exports/*f*/)
                if (exports/*f*/.hasOwnProperty(module/*i*/)) {
                    var o = exports/*f*/[module/*i*/];
                    if (require/*DliteProfiler/*t*/*/ > o) break;
                    if (requireDynamic/*n*/.indexOf(module/*i*/) >= 0) {
                        c.applyWithGuard(requireLazy/*ErrorUtils/*r*/*/, GraphQLStoreRangeUtils/*setImmediate/*null*/*/, GraphQLStoreRangeUtils/*setImmediate/*null*/*/, GraphQLStoreRangeUtils/*setImmediate/*null*/*/, "GraphQLStoreChangeEmitter");
                        break
                    }
                }
    }

    function l(global/*e*/) {
        var require/*DliteProfiler/*t*/*/ = p.parseRangeClientID(global/*e*/);
        return require/*DliteProfiler/*t*/*/ ? require/*DliteProfiler/*t*/*/.dataID : global/*e*/
    }
    var u = require/*DliteProfiler/*t*/*/("DliteProfiler"),
        c = require/*DliteProfiler/*t*/*/("ErrorUtils"),
        p = require/*DliteProfiler/*t*/*/("GraphQLStoreRangeUtils"),
        d = require/*DliteProfiler/*t*/*/("setImmediate"),
        h = [],
        exports/*f*/ = GraphQLStoreRangeUtils/*setImmediate/*null*/*/,
        m = function(global/*e*/) {
            return global/*e*/()
        },
        g = {
            addListenerForIDs: function(global/*e*/, require/*DliteProfiler/*t*/*/) {
                var requireDynamic/*n*/ = global/*e*/.map(l),
                    requireLazy/*ErrorUtils/*r*/*/ = h.length;
                return h.push({
                    subscribedIDs: requireDynamic/*n*/,
                    callback: require/*DliteProfiler/*t*/*/
                }), {
                    remove: function() {
                        delete h[requireLazy/*ErrorUtils/*r*/*/]
                    }
                }
            },
            broadcastChangeForID: function(global/*e*/) {
                GraphQLStoreRangeUtils/*setImmediate/*null*/*/ === exports/*f*/ && (d(o), exports/*f*/ = {}), exports/*f*/[l(global/*e*/)] = h.length - 1
            },
            injectBatchingStrategy: function(global/*e*/) {
                m = global/*e*/
            },
            _processSubscribers: a
        };
    u.instrumentMethods(g, {
        addListenerForIDs: "GraphQLStoreChangeEmitter.addListenerForIDs",
        broadcastChangeForID: "GraphQLStoreChangeEmitter.broadcastChangeForID",
        _processSubscribers: "GraphQLStoreChangeEmitter.processSubscribers"
    }), module/*i*/.exports = g
});