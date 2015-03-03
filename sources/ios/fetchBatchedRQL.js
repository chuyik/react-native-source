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
                access_token: l.accessToken,
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
        var o = p.logClientEvent("fetchBatchedRQL"),
            v = {},
            S = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                o && (o.stop(), o = null);
                var s = {};
                try {
                    s = JSON.parse(global/*e*/)
                } catch (l) {
                    var u = new h(g("JSON.parse(...) failed on: %s\nLengths: %s\nResponse:\requireDynamic/*n*/%s", global/*e*/, JSON.stringify(requireLazy/*r*/.lengths), requireLazy/*r*/.rawText));
                    c.warn(u.message), _(module/*i*/, function(global/*e*/) {
                        return global/*e*/(u)
                    }), module/*i*/ = {}
                }
                if (requireDynamic/*n*/) {
                    _(module/*i*/, function(global/*e*/) {
                        global/*e*/(new h("GraphQL: no results for query"))
                    }), module/*i*/ = {};
                    var p = a(s, Object.keys(v).length);
                    p && c.warn(p.message)
                } else _(s, function(global/*e*/, require/*t*/) {
                    if (module/*i*/.hasOwnProperty(require/*t*/)) {
                        var requireDynamic/*n*/ = null;
                        global/*e*/.error && (requireDynamic/*n*/ = new d(global/*e*/.error));
                        var requireLazy/*r*/ = global/*e*/.response;
                        requireLazy/*r*/ && (v[require/*t*/] = !0), module/*i*/[require/*t*/](requireDynamic/*n*/, requireLazy/*r*/), delete module/*i*/[require/*t*/]
                    }
                })
            };
        new u(l.graphBatchURI).setMethod("POST").setData(requireLazy/*r*/).setTransportBuilder(y).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setErrorHandler(function(global/*e*/) {
            _(module/*i*/, function(require/*t*/) {
                require/*t*/(m(global/*e*/), null)
            })
        }).setTimeoutHandler(function() {
            _(module/*i*/, function(global/*e*/) {
                global/*e*/(new f, null)
            })
        }).setResponseFilter(s).setResponseChunkHandler(S).send()
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/.error ? m({
            errorType: global/*e*/.error.type,
            errorCode: global/*e*/.error.code,
            errorMsg: global/*e*/.error.message
        }) : void 0 === global/*e*/.successful_results || void 0 == global/*e*/.skipped_results ? new h(g("fetchBatchedRQL(...): Result count is undefined, successful_results: %s skipped_results: %s", global/*e*/.successful_results, global/*e*/.skipped_results)) : global/*e*/.successful_results + global/*e*/.skipped_results !== require/*t*/ ? new h(g("fetchBatchedRQL(...): Expected a total of %s responses, parsed %s total responses.", global/*e*/.successful_results + global/*e*/.skipped_results, require/*t*/)) : void 0
    }

    function s(global/*e*/) {
        return global/*e*/.trim()
    }
    var l = require/*t*/("DliteAPIConfig"),
        u = require/*t*/("DliteAPIRequest"),
        c = require/*t*/("DliteLog"),
        p = require/*t*/("DliteLogger"),
        d = require/*t*/("GraphQLCodedError"),
        h = require/*t*/("RQLError"),
        f = (require/*t*/("RQLRequest"), require/*t*/("RQLTimeoutError")),
        m = require/*t*/("createRQLError"),
        g = require/*t*/("ex"),
        _ = require/*t*/("forEachObject"),
        y = require/*t*/("getCrossOriginTransport");
    __DEV__ && (o.mockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.mockResponseHandler`.")
    }, o.unmockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.unmockResponseHandler`.")
    }), module/*i*/.exports = o
});