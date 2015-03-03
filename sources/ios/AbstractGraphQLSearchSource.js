__d("AbstractGraphQLSearchSource",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLQueryRunner","GraphQLStore","AbstractAsyncSearchSource","ErrorUtils","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        global/*e*/ && "function" == typeof global/*e*/.createQuery || f(0, "bootstrapRequests and queryRequests must implement a `createQuery` function")
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = require/*t*/.createQuery(global/*e*/, require/*t*/),
            o = new l.QueryWithValues(module/*i*/);
        c.run({
            query: o
        }, {
            onSuccess: h.guard(function() {
                var global/*e*/ = p.resolveQueryFromStore(o),
                    require/*t*/ = module/*i*/.rootCall().getName();
                global/*e*/ && require/*t*/ != u.VIEWER && (global/*e*/ = global/*e*/[Object.keys(global/*e*/)[0]]), requireDynamic/*n*/(global/*e*/)
            }, "AbstractGraphQLSearchSource:onSuccess"),
            onFailure: requireLazy/*r*/
        })
    }

    function s(global/*e*/, require/*t*/) {
        "use strict";
        global/*e*/.bootstrapRequests && global/*e*/.bootstrapRequests.forEach(o), global/*e*/.queryRequests && global/*e*/.queryRequests.forEach(o), d.call(this, global/*e*/, a, require/*t*/)
    }
    var l = require/*t*/("GraphQL_EXPERIMENTAL"),
        u = require/*t*/("GraphQLConstants"),
        c = require/*t*/("GraphQLQueryRunner"),
        p = require/*t*/("GraphQLStore"),
        d = require/*t*/("AbstractAsyncSearchSource"),
        h = require/*t*/("ErrorUtils"),
        f = require/*t*/("invariant");
    for (var m in d) d.hasOwnProperty(m) && (s[m] = d[m]);
    var g = null === d ? null : d.prototype;
    s.prototype = Object.create(g), s.prototype.constructor = s, s.__superConstructor__ = d, module/*i*/.exports = s
});