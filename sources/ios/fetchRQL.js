__d("fetchRQL",["DliteProfiler","PublicPromise","RQLRequest","fetchBatchedRQL","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        h.length || (h = [], d(a));
        var require/*t*/ = new u;
        return h.push({
            query: global/*e*/,
            promise: require/*t*/
        }), require/*t*/.getPromise()
    }

    function a() {
        var global/*e*/ = l.instrumentAsync("fetchRQL.processPending");
        p(h.map(s.bind(null, global/*e*/.stop))), h.length = 0
    }

    function s(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/.query,
            requireLazy/*r*/ = require/*t*/.promise;
        return new c(requireDynamic/*n*/.getQuery().getID(), requireDynamic/*n*/, function(require/*t*/, requireDynamic/*n*/) {
            requireDynamic/*n*/ ? (global/*e*/(), requireLazy/*r*/.resolve({
                error: require/*t*/,
                response: requireDynamic/*n*/
            })) : requireLazy/*r*/.reject(require/*t*/)
        })
    }
    var l = require/*t*/("DliteProfiler"),
        u = require/*t*/("PublicPromise"),
        c = require/*t*/("RQLRequest"),
        p = require/*t*/("fetchBatchedRQL"),
        d = require/*t*/("setImmediate"),
        h = [];
    module/*i*/.exports = o
});