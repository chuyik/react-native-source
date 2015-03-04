__d("fetchBatchedRQL",["DliteAPIConfig","DliteAPIRequest","DliteLog","DliteLogger","GraphQLCodedError","RQLError","RQLRequest","RQLTimeoutError","createRQLError","ex","forEachObject","getCrossOriginTransport"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/, requireDynamic/*n*/ = {};
        global/*e*/.forEach(function(global/*e*/) {
            var requireLazy/*r*/ = global/*e*/.getQuery().getQuery();
            require/*t*/ = require/*t*/ || requireLazy/*r*/.getQueryName(), requireDynamic/*n*/[global/*e*/.getName()] = {
                q: requireLazy/*r*/.toString(),
                ref_params: requireLazy/*r*/.rootCall().getRefParams()
            }
        });
        var requireLazy/*r*/ = {
                access_token: DliteAPIConfig/*l*/.accessToken,
                pretty: !!__DEV__,
                flush: 1,
                method: "GET",
                batch_name: require/*t*/,
                queries: JSON.stringify(requireDynamic/*n*/)
            },
            module/*i*/ = {};
        global/*e*/.forEach(function(global/*e*/) {
            module/*i*/[global/*e*/.getName()] = global/*e*/.getCallback()
        });
        var o = DliteLogger/*p*/.logClientEvent("fetchBatchedRQL"),
            v = {},
            S = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                o && (o.stop(), o = null);
                var s = {};
                try {
                    s = JSON.parse(global/*e*/)
                } catch (DliteAPIConfig/*l*/) {
                    var DliteAPIRequest/*u*/ = new RQLError/*h*/(ex/*g*/("JSON.parse(...) failed on: %s\nLengths: %s\nResponse:\requireDynamic/*n*/%s", global/*e*/, JSON.stringify(requireLazy/*r*/.lengths), requireLazy/*r*/.rawText));
                    DliteLog/*c*/.warn(DliteAPIRequest/*u*/.message), forEachObject/*_*/(module/*i*/, function(global/*e*/) {
                        return global/*e*/(DliteAPIRequest/*u*/)
                    }), module/*i*/ = {}
                }
                if (requireDynamic/*n*/) {
                    forEachObject/*_*/(module/*i*/, function(global/*e*/) {
                        global/*e*/(new RQLError/*h*/("GraphQL: no results for query"))
                    }), module/*i*/ = {};
                    var DliteLogger/*p*/ = a(s, Object.keys(v).length);
                    DliteLogger/*p*/ && DliteLog/*c*/.warn(DliteLogger/*p*/.message)
                } else forEachObject/*_*/(s, function(global/*e*/, require/*t*/) {
                    if (module/*i*/.hasOwnProperty(require/*t*/)) {
                        var requireDynamic/*n*/ = null;
                        global/*e*/.error && (requireDynamic/*n*/ = new GraphQLCodedError/*d*/(global/*e*/.error));
                        var requireLazy/*r*/ = global/*e*/.response;
                        requireLazy/*r*/ && (v[require/*t*/] = !0), module/*i*/[require/*t*/](requireDynamic/*n*/, requireLazy/*r*/), delete module/*i*/[require/*t*/]
                    }
                })
            };
        new DliteAPIRequest/*u*/(DliteAPIConfig/*l*/.graphBatchURI).setMethod("POST").setData(requireLazy/*r*/).setTransportBuilder(getCrossOriginTransport/*y*/).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setErrorHandler(function(global/*e*/) {
            forEachObject/*_*/(module/*i*/, function(require/*t*/) {
                require/*t*/(createRQLError/*m*/(global/*e*/), null)
            })
        }).setTimeoutHandler(function() {
            forEachObject/*_*/(module/*i*/, function(global/*e*/) {
                global/*e*/(new f, null)
            })
        }).setResponseFilter(s).setResponseChunkHandler(S).send()
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/.error ? createRQLError/*m*/({
            errorType: global/*e*/.error.type,
            errorCode: global/*e*/.error.code,
            errorMsg: global/*e*/.error.message
        }) : void 0 === global/*e*/.successful_results || void 0 == global/*e*/.skipped_results ? new RQLError/*h*/(ex/*g*/("fetchBatchedRQL(...): Result count is undefined, successful_results: %s skipped_results: %s", global/*e*/.successful_results, global/*e*/.skipped_results)) : global/*e*/.successful_results + global/*e*/.skipped_results !== require/*t*/ ? new RQLError/*h*/(ex/*g*/("fetchBatchedRQL(...): Expected a total of %s responses, parsed %s total responses.", global/*e*/.successful_results + global/*e*/.skipped_results, require/*t*/)) : void 0
    }

    function s(global/*e*/) {
        return global/*e*/.trim()
    }
    var DliteAPIConfig/*l*/ = require/*t*/("DliteAPIConfig"),
        DliteAPIRequest/*u*/ = require/*t*/("DliteAPIRequest"),
        DliteLog/*c*/ = require/*t*/("DliteLog"),
        DliteLogger/*p*/ = require/*t*/("DliteLogger"),
        GraphQLCodedError/*d*/ = require/*t*/("GraphQLCodedError"),
        RQLError/*h*/ = require/*t*/("RQLError"),
        f = (require/*t*/("RQLRequest"), require/*t*/("RQLTimeoutError")),
        createRQLError/*m*/ = require/*t*/("createRQLError"),
        ex/*g*/ = require/*t*/("ex"),
        forEachObject/*_*/ = require/*t*/("forEachObject"),
        getCrossOriginTransport/*y*/ = require/*t*/("getCrossOriginTransport");
    __DEV__ && (o.mockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.mockResponseHandler`.")
    }, o.unmockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.unmockResponseHandler`.")
    }), module/*i*/.exports = o
});