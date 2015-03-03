__d("AbstractGraphQLSearchSource",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLQueryRunner","GraphQLStore","AbstractAsyncSearchSource","ErrorUtils","invariant"],function (global/*e*/, require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*ErrorUtils/*n*/*/*/, requireLazy/*GraphQLConstants/*r*/*/, module/*i*/) {
    function GraphQLStore/*o*/(global/*e*/) {
        global/*e*/ && "function" == typeof global/*e*/.createQuery || f(0, "bootstrapRequests and queryRequests must implement a `createQuery` function")
    }

    function a(global/*e*/, require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*ErrorUtils/*n*/*/*/, requireLazy/*GraphQLConstants/*r*/*/) {
        var module/*i*/ = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/.createQuery(global/*e*/, require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/),
            GraphQLStore/*o*/ = new l.QueryWithValues(module/*i*/);
        c.run({
            query: GraphQLStore/*o*/
        }, {
            onSuccess: h.guard(function() {
                var global/*e*/ = p.resolveQueryFromStore(GraphQLStore/*o*/),
                    require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/ = module/*i*/.rootCall().getName();
                global/*e*/ && require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/ != u.VIEWER && (global/*e*/ = global/*e*/[Object.keys(global/*e*/)[0]]), requireDynamic/*GraphQL_EXPERIMENTAL/*ErrorUtils/*n*/*/*/(global/*e*/)
            }, "AbstractGraphQLSearchSource:onSuccess"),
            invariant/*onFailure*/: requireLazy/*GraphQLConstants/*r*/*/
        })
    }

    function s(global/*e*/, require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/) {
        "use strict";
        global/*e*/.bootstrapRequests && global/*e*/.bootstrapRequests.forEach(GraphQLStore/*o*/), global/*e*/.queryRequests && global/*e*/.queryRequests.forEach(GraphQLStore/*o*/), d.call(this, global/*e*/, a, require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/)
    }
    var l = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("GraphQL_EXPERIMENTAL"),
        u = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("GraphQLConstants"),
        c = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("GraphQLQueryRunner"),
        p = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("GraphQLStore"),
        d = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("AbstractAsyncSearchSource"),
        h = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("ErrorUtils"),
        f = require/*exports/*GraphQLQueryRunner/*AbstractAsyncSearchSource/*t*/*/*/*/("invariant");
    for (var m in d) d.hasOwnProperty(m) && (s[m] = d[m]);
    var g = null === d ? null : d.prototype;
    s.prototype = Object.create(g), s.prototype.constructor = s, s.__superConstructor__ = d, module/*i*/.exports = s
});