__d("fetchRQL",["DliteProfiler","PublicPromise","RQLRequest","fetchBatchedRQL","setImmediate"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        h.length || (h = [], setImmediate/*d*/(a));
        var t = new PublicPromise/*u*/;
        return h.push({
            query: e,
            promise: t
        }), t.getPromise()
    }

    function a() {
        var e = DliteProfiler/*l*/.instrumentAsync("fetchRQL.processPending");
        fetchBatchedRQL/*p*/(h.map(s.bind(null, e.stop))), h.length = 0
    }

    function s(e, t) {
        var n = t.query,
            r = t.promise;
        return new RQLRequest/*c*/(n.getQuery().getID(), n, function(t, n) {
            n ? (e(), r.resolve({
                error: t,
                response: n
            })) : r.reject(t)
        })
    }
    var DliteProfiler/*l*/ = t("DliteProfiler"),
        PublicPromise/*u*/ = t("PublicPromise"),
        RQLRequest/*c*/ = t("RQLRequest"),
        fetchBatchedRQL/*p*/ = t("fetchBatchedRQL"),
        setImmediate/*d*/ = t("setImmediate"),
        h = [];
    i.exports = o
});