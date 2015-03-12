__d("fetchBatchedRQL",["DliteAPIConfig","DliteAPIRequest","DliteLog","DliteLogger","GraphQLCodedError","RQLError","RQLRequest","RQLTimeoutError","createRQLError","ex","forEachObject","getCrossOriginTransport"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t, n = {};
        e.forEach(function(e) {
            var r = e.getQuery().getQuery();
            t = t || r.getQueryName(), n[e.getName()] = {
                q: r.toString(),
                ref_params: r.rootCall().getRefParams()
            }
        });
        var r = {
                access_token: DliteAPIConfig/*l*/.accessToken,
                pretty: !!__DEV__,
                flush: 1,
                method: "GET",
                batch_name: t,
                queries: JSON.stringify(n)
            },
            i = {};
        e.forEach(function(e) {
            i[e.getName()] = e.getCallback()
        });
        var o = DliteLogger/*p*/.logClientEvent("fetchBatchedRQL"),
            v = {},
            S = function(e, t, n, r) {
                o && (o.stop(), o = null);
                var s = {};
                try {
                    s = JSON.parse(e)
                } catch (DliteAPIConfig/*l*/) {
                    var DliteAPIRequest/*u*/ = new RQLError/*h*/(ex/*g*/("JSON.parse(...) failed on: %s\nLengths: %s\nResponse:\n%s", e, JSON.stringify(r.lengths), r.rawText));
                    DliteLog/*c*/.warn(DliteAPIRequest/*u*/.message), forEachObject/*_*/(i, function(e) {
                        return e(DliteAPIRequest/*u*/)
                    }), i = {}
                }
                if (n) {
                    forEachObject/*_*/(i, function(e) {
                        e(new RQLError/*h*/("GraphQL: no results for query"))
                    }), i = {};
                    var DliteLogger/*p*/ = a(s, Object.keys(v).length);
                    DliteLogger/*p*/ && DliteLog/*c*/.warn(DliteLogger/*p*/.message)
                } else forEachObject/*_*/(s, function(e, t) {
                    if (i.hasOwnProperty(t)) {
                        var n = null;
                        e.error && (n = new GraphQLCodedError/*d*/(e.error));
                        var r = e.response;
                        r && (v[t] = !0), i[t](n, r), delete i[t]
                    }
                })
            };
        new DliteAPIRequest/*u*/(DliteAPIConfig/*l*/.graphBatchURI).setMethod("POST").setData(r).setTransportBuilder(getCrossOriginTransport/*y*/).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setErrorHandler(function(e) {
            forEachObject/*_*/(i, function(t) {
                t(createRQLError/*m*/(e), null)
            })
        }).setTimeoutHandler(function() {
            forEachObject/*_*/(i, function(e) {
                e(new f, null)
            })
        }).setResponseFilter(s).setResponseChunkHandler(S).send()
    }

    function a(e, t) {
        return e.error ? createRQLError/*m*/({
            errorType: e.error.type,
            errorCode: e.error.code,
            errorMsg: e.error.message
        }) : void 0 === e.successful_results || void 0 == e.skipped_results ? new RQLError/*h*/(ex/*g*/("fetchBatchedRQL(...): Result count is undefined, successful_results: %s skipped_results: %s", e.successful_results, e.skipped_results)) : e.successful_results + e.skipped_results !== t ? new RQLError/*h*/(ex/*g*/("fetchBatchedRQL(...): Expected a total of %s responses, parsed %s total responses.", e.successful_results + e.skipped_results, t)) : void 0
    }

    function s(e) {
        return e.trim()
    }
    var DliteAPIConfig/*l*/ = t("DliteAPIConfig"),
        DliteAPIRequest/*u*/ = t("DliteAPIRequest"),
        DliteLog/*c*/ = t("DliteLog"),
        DliteLogger/*p*/ = t("DliteLogger"),
        GraphQLCodedError/*d*/ = t("GraphQLCodedError"),
        RQLError/*h*/ = t("RQLError"),
        f = (t("RQLRequest"), t("RQLTimeoutError")),
        createRQLError/*m*/ = t("createRQLError"),
        ex/*g*/ = t("ex"),
        forEachObject/*_*/ = t("forEachObject"),
        getCrossOriginTransport/*y*/ = t("getCrossOriginTransport");
    __DEV__ && (o.mockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.mockResponseHandler`.")
    }, o.unmockSendRequest = function() {
        throw new Error("Deprecated! Use `DliteAPIRequest.unmockResponseHandler`.")
    }), i.exports = o
});