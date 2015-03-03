__d("RQLMutation",["DliteAPIConfig","ErrorUtils","GraphQLCodedError","XHRRequest","createRQLError","defaultRQLMutationCallback","ex","invariant"],function (global/*e*/, require/*exports/*ex/*t*/*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*DliteAPIConfig/*i*/*/) {
    "use strict";

    function ErrorUtils/*GraphQLCodedError/*o*/*/(global/*e*/, require/*exports/*ex/*t*/*/*/) {
        var requireDynamic/*invariant/*n*/*/ = Object.keys(require/*exports/*ex/*t*/*/*/);
        1 !== requireDynamic/*invariant/*n*/*/.length && f(0, "Params should have exactly 1 key");
        var requireLazy/*r*/ = requireDynamic/*invariant/*n*/*/[0],
            module/*DliteAPIConfig/*i*/*/ = require/*exports/*ex/*t*/*/*/[requireLazy/*r*/],
            ErrorUtils/*GraphQLCodedError/*o*/*/ = {};
        return ErrorUtils/*GraphQLCodedError/*o*/*/[requireLazy/*r*/] = JSON.stringify(module/*DliteAPIConfig/*i*/*/), ErrorUtils/*GraphQLCodedError/*o*/*/ = JSON.stringify(ErrorUtils/*GraphQLCodedError/*o*/*/), {
            access_token: s.accessToken,
            XHRRequest/*pretty*/: !!__DEV__,
            createRQLError/*q*/: global/*e*/.toString(),
            defaultRQLMutationCallback/*query_params*/: ErrorUtils/*GraphQLCodedError/*o*/*/
        }
    }

    function a(global/*e*/, require/*exports/*ex/*t*/*/*/, requireDynamic/*invariant/*n*/*/) {
        function requireLazy/*r*/(requireLazy/*r*/, module/*DliteAPIConfig/*i*/*/, ErrorUtils/*GraphQLCodedError/*o*/*/) {
            requireLazy/*r*/ && l.reportError(requireLazy/*r*/);
            var a = Object.keys(require/*exports/*ex/*t*/*/*/);
            1 !== a.length && f(0, "Params should have exactly 1 key");
            var s = a[0],
                u = require/*exports/*ex/*t*/*/*/[s];
            "client_mutation_id" in u || f(0, "Mutation params must have client_mutation_id set"), l.applyWithGuard(requireDynamic/*invariant/*n*/*/ || d, null, [requireLazy/*r*/, module/*DliteAPIConfig/*i*/*/, global/*e*/, u.client_mutation_id], null, ErrorUtils/*GraphQLCodedError/*o*/*/)
        }
        return new c(s.graphURI).setMethod("POST").setResponseHandler(function(global/*e*/) {
            if (global/*e*/ = JSON.parse(global/*e*/), global/*e*/.error) {
                var require/*exports/*ex/*t*/*/*/ = new u(global/*e*/.error);
                requireLazy/*r*/(require/*exports/*ex/*t*/*/*/, null, "RQLMutation:send:responseHandler:failure")
            } else requireLazy/*r*/(null, global/*e*/, "RQLMutation:send:responseHandler:success")
        }).setErrorHandler(function(require/*exports/*ex/*t*/*/*/) {
            var requireDynamic/*invariant/*n*/*/ = p(require/*exports/*ex/*t*/*/*/, h("Mutation XHR error for %s %s: %s %s", global/*e*/.getCall(), require/*exports/*ex/*t*/*/*/.errorType, require/*exports/*ex/*t*/*/*/.errorCode, require/*exports/*ex/*t*/*/*/.errorMsg));
            requireLazy/*r*/(requireDynamic/*invariant/*n*/*/, null, "RQLMutation:send:errorHandler")
        })
    }
    var s = require/*exports/*ex/*t*/*/*/("DliteAPIConfig"),
        l = require/*exports/*ex/*t*/*/*/("ErrorUtils"),
        u = require/*exports/*ex/*t*/*/*/("GraphQLCodedError"),
        c = require/*exports/*ex/*t*/*/*/("XHRRequest"),
        p = require/*exports/*ex/*t*/*/*/("createRQLError"),
        d = require/*exports/*ex/*t*/*/*/("defaultRQLMutationCallback"),
        h = require/*exports/*ex/*t*/*/*/("ex"),
        f = require/*exports/*ex/*t*/*/*/("invariant"),
        m = {
            send: function(global/*e*/, require/*exports/*ex/*t*/*/*/, requireDynamic/*invariant/*n*/*/) {
                a(global/*e*/, require/*exports/*ex/*t*/*/*/, requireDynamic/*invariant/*n*/*/).setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(ErrorUtils/*GraphQLCodedError/*o*/*/(global/*e*/, require/*exports/*ex/*t*/*/*/)).send()
            },
            sendWithFiles: function(global/*e*/, require/*exports/*ex/*t*/*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/) {
                var module/*DliteAPIConfig/*i*/*/ = ErrorUtils/*GraphQLCodedError/*o*/*/(global/*e*/, require/*exports/*ex/*t*/*/*/),
                    s = new FormData;
                for (var l in module/*DliteAPIConfig/*i*/*/) s.append(l, module/*DliteAPIConfig/*i*/*/[l]);
                for (var u = 0; u < requireDynamic/*invariant/*n*/*/.length; ++u) s.append(u, requireDynamic/*invariant/*n*/*/[u]);
                a(global/*e*/, require/*exports/*ex/*t*/*/*/, requireLazy/*r*/).setRawData(s).send()
            }
        };
    module/*DliteAPIConfig/*i*/*/.exports = m
});