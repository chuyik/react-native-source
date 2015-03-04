__d("fetchRQL",["DliteProfiler","PublicPromise","RQLRequest","fetchBatchedRQL","setImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        h.length || (h = [], setImmediate/*d*/(a));
        var require/*t*/ = new PublicPromise/*u*/;
        return h.push({
            query: global/*e*/,
            promise: require/*t*/
        }), require/*t*/.getPromise()
    }

    function a() {
        var global/*e*/ = DliteProfiler/*l*/.instrumentAsync("fetchRQL.processPending");
        fetchBatchedRQL/*p*/(h.map(s.bind(null, global/*e*/.stop))), h.length = 0
    }

    function s(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/.query,
            requireLazy/*r*/ = require/*t*/.promise;
        return new RQLRequest/*c*/(requireDynamic/*n*/.getQuery().getID(), requireDynamic/*n*/, function(require/*t*/, requireDynamic/*n*/) {
            requireDynamic/*n*/ ? (global/*e*/(), requireLazy/*r*/.resolve({
                error: require/*t*/,
                response: requireDynamic/*n*/
            })) : requireLazy/*r*/.reject(require/*t*/)
        })
    }
    var DliteProfiler/*l*/ = require/*t*/("DliteProfiler"),
        PublicPromise/*u*/ = require/*t*/("PublicPromise"),
        RQLRequest/*c*/ = require/*t*/("RQLRequest"),
        fetchBatchedRQL/*p*/ = require/*t*/("fetchBatchedRQL"),
        setImmediate/*d*/ = require/*t*/("setImmediate"),
        h = [];
    module/*i*/.exports = o
});