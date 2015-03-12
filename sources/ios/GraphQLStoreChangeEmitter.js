__d("GraphQLStoreChangeEmitter",["DliteProfiler","ErrorUtils","GraphQLStoreRangeUtils","setImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        m(a), f = null
    }

    function a() {
        h.forEach(s)
    }

    function s(e, t) {
        var n = e.subscribedIDs,
            r = e.callback;
        if (f)
            for (var i in f)
                if (f.hasOwnProperty(i)) {
                    var o = f[i];
                    if (t > o) break;
                    if (n.indexOf(i) >= 0) {
                        ErrorUtils/*c*/.applyWithGuard(r, null, null, null, "GraphQLStoreChangeEmitter");
                        break
                    }
                }
    }

    function l(e) {
        var t = GraphQLStoreRangeUtils/*p*/.parseRangeClientID(e);
        return t ? t.dataID : e
    }
    var DliteProfiler/*u*/ = t("DliteProfiler"),
        ErrorUtils/*c*/ = t("ErrorUtils"),
        GraphQLStoreRangeUtils/*p*/ = t("GraphQLStoreRangeUtils"),
        setImmediate/*d*/ = t("setImmediate"),
        h = [],
        f = null,
        m = function(e) {
            return e()
        },
        g = {
            addListenerForIDs: function(e, t) {
                var n = e.map(l),
                    r = h.length;
                return h.push({
                    subscribedIDs: n,
                    callback: t
                }), {
                    remove: function() {
                        delete h[r]
                    }
                }
            },
            broadcastChangeForID: function(e) {
                null === f && (setImmediate/*d*/(o), f = {}), f[l(e)] = h.length - 1
            },
            injectBatchingStrategy: function(e) {
                m = e
            },
            _processSubscribers: a
        };
    DliteProfiler/*u*/.instrumentMethods(g, {
        addListenerForIDs: "GraphQLStoreChangeEmitter.addListenerForIDs",
        broadcastChangeForID: "GraphQLStoreChangeEmitter.broadcastChangeForID",
        _processSubscribers: "GraphQLStoreChangeEmitter.processSubscribers"
    }), i.exports = g
});