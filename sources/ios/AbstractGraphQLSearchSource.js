__d("AbstractGraphQLSearchSource",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLQueryRunner","GraphQLStore","AbstractAsyncSearchSource","ErrorUtils","invariant"],function (e, t, n, r, i) {
    function o(e) {
        e && "function" == typeof e.createQuery || invariant/*f*/(0, "bootstrapRequests and queryRequests must implement a `createQuery` function")
    }

    function a(e, t, n, r) {
        var i = t.createQuery(e, t),
            o = new GraphQL_EXPERIMENTAL/*l*/.QueryWithValues(i);
        GraphQLQueryRunner/*c*/.run({
            query: o
        }, {
            onSuccess: ErrorUtils/*h*/.guard(function() {
                var e = GraphQLStore/*p*/.resolveQueryFromStore(o),
                    t = i.rootCall().getName();
                e && t != GraphQLConstants/*u*/.VIEWER && (e = e[Object.keys(e)[0]]), n(e)
            }, "AbstractGraphQLSearchSource:onSuccess"),
            onFailure: r
        })
    }

    function s(e, t) {
        "use strict";
        e.bootstrapRequests && e.bootstrapRequests.forEach(o), e.queryRequests && e.queryRequests.forEach(o), AbstractAsyncSearchSource/*d*/.call(this, e, a, t)
    }
    var GraphQL_EXPERIMENTAL/*l*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*u*/ = t("GraphQLConstants"),
        GraphQLQueryRunner/*c*/ = t("GraphQLQueryRunner"),
        GraphQLStore/*p*/ = t("GraphQLStore"),
        AbstractAsyncSearchSource/*d*/ = t("AbstractAsyncSearchSource"),
        ErrorUtils/*h*/ = t("ErrorUtils"),
        invariant/*f*/ = t("invariant");
    for (var m in AbstractAsyncSearchSource/*d*/) AbstractAsyncSearchSource/*d*/.hasOwnProperty(m) && (s[m] = AbstractAsyncSearchSource/*d*/[m]);
    var g = null === AbstractAsyncSearchSource/*d*/ ? null : AbstractAsyncSearchSource/*d*/.prototype;
    s.prototype = Object.create(g), s.prototype.constructor = s, s.__superConstructor__ = AbstractAsyncSearchSource/*d*/, i.exports = s
});