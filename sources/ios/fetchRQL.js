__d("fetchRQL",["DliteProfiler","PublicPromise","RQLRequest","fetchBatchedRQL","setImmediate"],function (global/*e*/, require/*setImmediate/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        fetchBatchedRQL/*h.length*/ || (h = [], exports/*d*/(a));
        var require/*setImmediate/*t*/*/ = new u;
        return h.push({
            query: global/*e*/,
            DliteProfiler/*promise*/: require/*setImmediate/*t*/*/
        }), require/*setImmediate/*t*/*/.getPromise()
    }

    function a() {
        var global/*e*/ = l.instrumentAsync("fetchRQL.processPending");
        p(h.map(s.bind(null, global/*e*/.stop))), fetchBatchedRQL/*h.length*/ = 0
    }

    function s(global/*e*/, require/*setImmediate/*t*/*/) {
        var requireDynamic/*n*/ = require/*setImmediate/*t*/*/.query,
            requireLazy/*r*/ = require/*setImmediate/*t*/*/.DliteProfiler/*promise*/;
        return new c(requireDynamic/*n*/.getQuery().getID(), requireDynamic/*n*/, function(require/*setImmediate/*t*/*/, requireDynamic/*n*/) {
            requireDynamic/*n*/ ? (global/*e*/(), requireLazy/*r*/.resolve({
                error: require/*setImmediate/*t*/*/,
                response: requireDynamic/*n*/
            })) : requireLazy/*r*/.reject(require/*setImmediate/*t*/*/)
        })
    }
    var l = require/*setImmediate/*t*/*/("DliteProfiler"),
        u = require/*setImmediate/*t*/*/("PublicPromise"),
        c = require/*setImmediate/*t*/*/("RQLRequest"),
        p = require/*setImmediate/*t*/*/("fetchBatchedRQL"),
        exports/*d*/ = require/*setImmediate/*t*/*/("setImmediate"),
        h = [];
    module/*i*/.exports = o
});