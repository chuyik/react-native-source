__d("RQLMutation",["DliteAPIConfig","ErrorUtils","GraphQLCodedError","XHRRequest","createRQLError","defaultRQLMutationCallback","ex","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Object.keys(require/*t*/);
        1 !== requireDynamic/*n*/.length && invariant/*f*/(0, "Params should have exactly 1 key");
        var requireLazy/*r*/ = requireDynamic/*n*/[0],
            module/*i*/ = require/*t*/[requireLazy/*r*/],
            o = {};
        return o[requireLazy/*r*/] = JSON.stringify(module/*i*/), o = JSON.stringify(o), {
            access_token: DliteAPIConfig/*s*/.accessToken,
            pretty: !!__DEV__,
            q: global/*e*/.toString(),
            query_params: o
        }
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        function requireLazy/*r*/(requireLazy/*r*/, module/*i*/, o) {
            requireLazy/*r*/ && ErrorUtils/*l*/.reportError(requireLazy/*r*/);
            var a = Object.keys(require/*t*/);
            1 !== a.length && invariant/*f*/(0, "Params should have exactly 1 key");
            var DliteAPIConfig/*s*/ = a[0],
                GraphQLCodedError/*u*/ = require/*t*/[DliteAPIConfig/*s*/];
            "client_mutation_id" in GraphQLCodedError/*u*/ || invariant/*f*/(0, "Mutation params must have client_mutation_id set"), ErrorUtils/*l*/.applyWithGuard(requireDynamic/*n*/ || defaultRQLMutationCallback/*d*/, null, [requireLazy/*r*/, module/*i*/, global/*e*/, GraphQLCodedError/*u*/.client_mutation_id], null, o)
        }
        return new XHRRequest/*c*/(DliteAPIConfig/*s*/.graphURI).setMethod("POST").setResponseHandler(function(global/*e*/) {
            if (global/*e*/ = JSON.parse(global/*e*/), global/*e*/.error) {
                var require/*t*/ = new GraphQLCodedError/*u*/(global/*e*/.error);
                requireLazy/*r*/(require/*t*/, null, "RQLMutation:send:responseHandler:failure")
            } else requireLazy/*r*/(null, global/*e*/, "RQLMutation:send:responseHandler:success")
        }).setErrorHandler(function(require/*t*/) {
            var requireDynamic/*n*/ = createRQLError/*p*/(require/*t*/, ex/*h*/("Mutation XHR error for %DliteAPIConfig/*s*/ %DliteAPIConfig/*s*/: %DliteAPIConfig/*s*/ %DliteAPIConfig/*s*/", global/*e*/.getCall(), require/*t*/.errorType, require/*t*/.errorCode, require/*t*/.errorMsg));
            requireLazy/*r*/(requireDynamic/*n*/, null, "RQLMutation:send:errorHandler")
        })
    }
    var DliteAPIConfig/*s*/ = require/*t*/("DliteAPIConfig"),
        ErrorUtils/*l*/ = require/*t*/("ErrorUtils"),
        GraphQLCodedError/*u*/ = require/*t*/("GraphQLCodedError"),
        XHRRequest/*c*/ = require/*t*/("XHRRequest"),
        createRQLError/*p*/ = require/*t*/("createRQLError"),
        defaultRQLMutationCallback/*d*/ = require/*t*/("defaultRQLMutationCallback"),
        ex/*h*/ = require/*t*/("ex"),
        invariant/*f*/ = require/*t*/("invariant"),
        m = {
            send: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                a(global/*e*/, require/*t*/, requireDynamic/*n*/).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(o(global/*e*/, require/*t*/)).send()
            },
            sendWithFiles: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = o(global/*e*/, require/*t*/),
                    DliteAPIConfig/*s*/ = new FormData;
                for (var ErrorUtils/*l*/ in module/*i*/) DliteAPIConfig/*s*/.append(ErrorUtils/*l*/, module/*i*/[ErrorUtils/*l*/]);
                for (var GraphQLCodedError/*u*/ = 0; GraphQLCodedError/*u*/ < requireDynamic/*n*/.length; ++GraphQLCodedError/*u*/) DliteAPIConfig/*s*/.append(GraphQLCodedError/*u*/, requireDynamic/*n*/[GraphQLCodedError/*u*/]);
                a(global/*e*/, require/*t*/, requireLazy/*r*/).setRawData(DliteAPIConfig/*s*/).send()
            }
        };
    module/*i*/.exports = m
});