__d("AbstractGraphQLSearchSource",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLQueryRunner","GraphQLStore","AbstractAsyncSearchSource","ErrorUtils","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        global/*e*/ && "function" == typeof global/*e*/.createQuery || invariant/*f*/(0, "bootstrapRequests and queryRequests must implement a `createQuery` function")
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = require/*t*/.createQuery(global/*e*/, require/*t*/),
            o = new GraphQL_EXPERIMENTAL/*l*/.QueryWithValues(module/*i*/);
        GraphQLQueryRunner/*c*/.run({
            query: o
        }, {
            onSuccess: ErrorUtils/*h*/.guard(function() {
                var global/*e*/ = GraphQLStore/*p*/.resolveQueryFromStore(o),
                    require/*t*/ = module/*i*/.rootCall().getName();
                global/*e*/ && require/*t*/ != GraphQLConstants/*u*/.VIEWER && (global/*e*/ = global/*e*/[Object.keys(global/*e*/)[0]]), requireDynamic/*n*/(global/*e*/)
            }, "AbstractGraphQLSearchSource:onSuccess"),
            onFailure: requireLazy/*r*/
        })
    }

    function s(global/*e*/, require/*t*/) {
        "use strict";
        global/*e*/.bootstrapRequests && global/*e*/.bootstrapRequests.forEach(o), global/*e*/.queryRequests && global/*e*/.queryRequests.forEach(o), AbstractAsyncSearchSource/*d*/.call(this, global/*e*/, a, require/*t*/)
    }
    var GraphQL_EXPERIMENTAL/*l*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*u*/ = require/*t*/("GraphQLConstants"),
        GraphQLQueryRunner/*c*/ = require/*t*/("GraphQLQueryRunner"),
        GraphQLStore/*p*/ = require/*t*/("GraphQLStore"),
        AbstractAsyncSearchSource/*d*/ = require/*t*/("AbstractAsyncSearchSource"),
        ErrorUtils/*h*/ = require/*t*/("ErrorUtils"),
        invariant/*f*/ = require/*t*/("invariant");
    for (var m in AbstractAsyncSearchSource/*d*/) AbstractAsyncSearchSource/*d*/.hasOwnProperty(m) && (s[m] = AbstractAsyncSearchSource/*d*/[m]);
    var g = null === AbstractAsyncSearchSource/*d*/ ? null : AbstractAsyncSearchSource/*d*/.prototype;
    s.prototype = Object.create(g), s.prototype.constructor = s, s.__superConstructor__ = AbstractAsyncSearchSource/*d*/, module/*i*/.exports = s
});