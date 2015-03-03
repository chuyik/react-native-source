__d("RQLMutation",["DliteAPIConfig","ErrorUtils","GraphQLCodedError","XHRRequest","createRQLError","defaultRQLMutationCallback","ex","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Object.keys(require/*t*/);
        1 !== requireDynamic/*n*/.length && f(0, "Params should have exactly 1 key");
        var requireLazy/*r*/ = requireDynamic/*n*/[0],
            module/*i*/ = require/*t*/[requireLazy/*r*/],
            o = {};
        return o[requireLazy/*r*/] = JSON.stringify(module/*i*/), o = JSON.stringify(o), {
            access_token: s.accessToken,
            pretty: !!__DEV__,
            q: global/*e*/.toString(),
            query_params: o
        }
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        function requireLazy/*r*/(requireLazy/*r*/, module/*i*/, o) {
            requireLazy/*r*/ && l.reportError(requireLazy/*r*/);
            var a = Object.keys(require/*t*/);
            1 !== a.length && f(0, "Params should have exactly 1 key");
            var s = a[0],
                u = require/*t*/[s];
            "client_mutation_id" in u || f(0, "Mutation params must have client_mutation_id set"), l.applyWithGuard(requireDynamic/*n*/ || d, null, [requireLazy/*r*/, module/*i*/, global/*e*/, u.client_mutation_id], null, o)
        }
        return new c(s.graphURI).setMethod("POST").setResponseHandler(function(global/*e*/) {
            if (global/*e*/ = JSON.parse(global/*e*/), global/*e*/.error) {
                var require/*t*/ = new u(global/*e*/.error);
                requireLazy/*r*/(require/*t*/, null, "RQLMutation:send:responseHandler:failure")
            } else requireLazy/*r*/(null, global/*e*/, "RQLMutation:send:responseHandler:success")
        }).setErrorHandler(function(require/*t*/) {
            var requireDynamic/*n*/ = p(require/*t*/, h("Mutation XHR error for %s %s: %s %s", global/*e*/.getCall(), require/*t*/.errorType, require/*t*/.errorCode, require/*t*/.errorMsg));
            requireLazy/*r*/(requireDynamic/*n*/, null, "RQLMutation:send:errorHandler")
        })
    }
    var s = require/*t*/("DliteAPIConfig"),
        l = require/*t*/("ErrorUtils"),
        u = require/*t*/("GraphQLCodedError"),
        c = require/*t*/("XHRRequest"),
        p = require/*t*/("createRQLError"),
        d = require/*t*/("defaultRQLMutationCallback"),
        h = require/*t*/("ex"),
        f = require/*t*/("invariant"),
        m = {
            send: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                a(global/*e*/, require/*t*/, requireDynamic/*n*/).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(o(global/*e*/, require/*t*/)).send()
            },
            sendWithFiles: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = o(global/*e*/, require/*t*/),
                    s = new FormData;
                for (var l in module/*i*/) s.append(l, module/*i*/[l]);
                for (var u = 0; u < requireDynamic/*n*/.length; ++u) s.append(u, requireDynamic/*n*/[u]);
                a(global/*e*/, require/*t*/, requireLazy/*r*/).setRawData(s).send()
            }
        };
    module/*i*/.exports = m
});