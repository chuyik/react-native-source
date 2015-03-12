__d("RQLMutation",["DliteAPIConfig","ErrorUtils","GraphQLCodedError","XHRRequest","createRQLError","defaultRQLMutationCallback","ex","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        var n = Object.keys(t);
        1 !== n.length && invariant/*f*/(0, "Params should have exactly 1 key");
        var r = n[0],
            i = t[r],
            o = {};
        return o[r] = JSON.stringify(i), o = JSON.stringify(o), {
            access_token: DliteAPIConfig/*s*/.accessToken,
            pretty: !!__DEV__,
            q: e.toString(),
            query_params: o
        }
    }

    function a(e, t, n) {
        function r(r, i, o) {
            r && ErrorUtils/*l*/.reportError(r);
            var a = Object.keys(t);
            1 !== a.length && invariant/*f*/(0, "Params should have exactly 1 key");
            var DliteAPIConfig/*s*/ = a[0],
                GraphQLCodedError/*u*/ = t[DliteAPIConfig/*s*/];
            "client_mutation_id" in GraphQLCodedError/*u*/ || invariant/*f*/(0, "Mutation params must have client_mutation_id set"), ErrorUtils/*l*/.applyWithGuard(n || defaultRQLMutationCallback/*d*/, null, [r, i, e, GraphQLCodedError/*u*/.client_mutation_id], null, o)
        }
        return new XHRRequest/*c*/(DliteAPIConfig/*s*/.graphURI).setMethod("POST").setResponseHandler(function(e) {
            if (e = JSON.parse(e), e.error) {
                var t = new GraphQLCodedError/*u*/(e.error);
                r(t, null, "RQLMutation:send:responseHandler:failure")
            } else r(null, e, "RQLMutation:send:responseHandler:success")
        }).setErrorHandler(function(t) {
            var n = createRQLError/*p*/(t, ex/*h*/("Mutation XHR error for %DliteAPIConfig/*s*/ %DliteAPIConfig/*s*/: %DliteAPIConfig/*s*/ %DliteAPIConfig/*s*/", e.getCall(), t.errorType, t.errorCode, t.errorMsg));
            r(n, null, "RQLMutation:send:errorHandler")
        })
    }
    var DliteAPIConfig/*s*/ = t("DliteAPIConfig"),
        ErrorUtils/*l*/ = t("ErrorUtils"),
        GraphQLCodedError/*u*/ = t("GraphQLCodedError"),
        XHRRequest/*c*/ = t("XHRRequest"),
        createRQLError/*p*/ = t("createRQLError"),
        defaultRQLMutationCallback/*d*/ = t("defaultRQLMutationCallback"),
        ex/*h*/ = t("ex"),
        invariant/*f*/ = t("invariant"),
        m = {
            send: function(e, t, n) {
                a(e, t, n).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(o(e, t)).send()
            },
            sendWithFiles: function(e, t, n, r) {
                var i = o(e, t),
                    DliteAPIConfig/*s*/ = new FormData;
                for (var ErrorUtils/*l*/ in i) DliteAPIConfig/*s*/.append(ErrorUtils/*l*/, i[ErrorUtils/*l*/]);
                for (var GraphQLCodedError/*u*/ = 0; GraphQLCodedError/*u*/ < n.length; ++GraphQLCodedError/*u*/) DliteAPIConfig/*s*/.append(GraphQLCodedError/*u*/, n[GraphQLCodedError/*u*/]);
                a(e, t, r).setRawData(DliteAPIConfig/*s*/).send()
            }
        };
    i.exports = m
});