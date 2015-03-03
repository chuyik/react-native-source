__d("fetchBatchedRQL",["DliteAPIConfig","DliteAPIRequest","DliteLog","DliteLogger","GraphQLCodedError","RQLError","RQLRequest","RQLTimeoutError","createRQLError","ex","forEachObject","getCrossOriginTransport"],function (global/*e*/, require/*forEachObject/*t*/*/, requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/, requireLazy/*r*/, module/*RQLTimeoutError/*i*/*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*forEachObject/*t*/*/, requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/ = {};
        global/*e*/.forEach(function(global/*e*/) {
            var requireLazy/*r*/ = global/*e*/.getQuery().getQuery();
            require/*forEachObject/*t*/*/ = require/*forEachObject/*t*/*/ || requireLazy/*r*/.getQueryName(), requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/[global/*e*/.getName()] = {
                q: requireLazy/*r*/.toString(),
                DliteAPIRequest/*ref_params*/: requireLazy/*r*/.rootCall().getRefParams()
            }
        });
        var requireLazy/*r*/ = {
                access_token: l.accessToken,
                DliteLog/*pretty*/: !!__DEV__,
                DliteLogger/*flush*/: 1,
                GraphQLCodedError/*method*/: "GET",
                RQLError/*batch_name*/: require/*forEachObject/*t*/*/,
                RQLRequest/*queries*/: JSON.stringify(requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/)
            },
            module/*RQLTimeoutError/*i*/*/ = {};
        global/*e*/.forEach(function(global/*e*/) {
            module/*RQLTimeoutError/*i*/*/[global/*e*/.getName()] = global/*e*/.getCallback()
        });
        var o = p.logClientEvent("fetchBatchedRQL"),
            createRQLError/*v*/ = {},
            ex/*S*/ = function(global/*e*/, require/*forEachObject/*t*/*/, requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/, requireLazy/*r*/) {
                o && (o.stop(), o = null);
                var s = {};
                try {
                    s = JSON.parse(global/*e*/)
                } catch (l) {
                    var u = new h(g("JSON.parse(...) failed on: %s\nLengths: %s\nResponse:\requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/%s", global/*e*/, JSON.stringify(requireLazy/*r*/.lengths), requireLazy/*r*/.rawText));
                    c.warn(u.message), _(module/*RQLTimeoutError/*i*/*/, function(global/*e*/) {
                        return global/*e*/(u)
                    }), module/*RQLTimeoutError/*i*/*/ = {}
                }
                if (requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/) {
                    _(module/*RQLTimeoutError/*i*/*/, function(global/*e*/) {
                        global/*e*/(new h("GraphQL: no results for query"))
                    }), module/*RQLTimeoutError/*i*/*/ = {};
                    var p = a(s, Object.keys(createRQLError/*v*/).length);
                    p && c.warn(p.message)
                } else _(s, function(global/*e*/, require/*forEachObject/*t*/*/) {
                    if (module/*RQLTimeoutError/*i*/*/.hasOwnProperty(require/*forEachObject/*t*/*/)) {
                        var requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/ = null;
                        global/*e*/.error && (requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/ = new d(global/*e*/.error));
                        var requireLazy/*r*/ = global/*e*/.response;
                        requireLazy/*r*/ && (createRQLError/*v*/[require/*forEachObject/*t*/*/] = !0), module/*RQLTimeoutError/*i*/*/[require/*forEachObject/*t*/*/](requireDynamic/*exports/*DliteAPIConfig/*getCrossOriginTransport/*n*/*/*/*/, requireLazy/*r*/), delete module/*RQLTimeoutError/*i*/*/[require/*forEachObject/*t*/*/]
                    }
                })
            };
        new u(l.graphBatchURI).setMethod("POST").setData(requireLazy/*r*/).setTransportBuilder(y).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setErrorHandler(function(global/*e*/) {
            _(module/*RQLTimeoutError/*i*/*/, function(require/*forEachObject/*t*/*/) {
                require/*forEachObject/*t*/*/(m(global/*e*/), null)
            })
        }).setTimeoutHandler(function() {
            _(module/*RQLTimeoutError/*i*/*/, function(global/*e*/) {
                global/*e*/(new f, null)
            })
        }).setResponseFilter(s).setResponseChunkHandler(ex/*S*/).send()
    }

    function a(global/*e*/, require/*forEachObject/*t*/*/) {
        return global/*e*/.error ? m({
            errorType: global/*e*/.error.type,
            errorCode: global/*e*/.error.code,
            errorMsg: global/*e*/.error.message
        }) : void 0 === global/*e*/.successful_results || void 0 == global/*e*/.skipped_results ? new h(g("fetchBatchedRQL(...): Result count is undefined, successful_results: %s skipped_results: %s", global/*e*/.successful_results, global/*e*/.skipped_results)) : global/*e*/.successful_results + global/*e*/.skipped_results !== require/*forEachObject/*t*/*/ ? new h(g("fetchBatchedRQL(...): Expected a total of %s responses, parsed %s total responses.", global/*e*/.successful_results + global/*e*/.skipped_results, require/*forEachObject/*t*/*/)) : void 0
    }

    function s(global/*e*/) {
        return global/*e*/.trim()
    }
    var l = require/*forEachObject/*t*/*/("DliteAPIConfig"),
        u = require/*forEachObject/*t*/*/("DliteAPIRequest"),
        c = require/*forEachObject/*t*/*/("DliteLog"),
        p = require/*forEachObject/*t*/*/("DliteLogger"),
        d = require/*forEachObject/*t*/*/("GraphQLCodedError"),
        h = require/*forEachObject/*t*/*/("RQLError"),
        f = (require/*forEachObject/*t*/*/("RQLRequest"), require/*forEachObject/*t*/*/("RQLTimeoutError")),
        m = require/*forEachObject/*t*/*/("createRQLError"),
        g = require/*forEachObject/*t*/*/("ex"),
        _ = require/*forEachObject/*t*/*/("forEachObject"),
        y = require/*forEachObject/*t*/*/("getCrossOriginTransport");
    __DEV__ && (o.mockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.mockResponseHandler`.")
    }, o.unmockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.unmockResponseHandler`.")
    }), module/*RQLTimeoutError/*i*/*/.exports = o
});