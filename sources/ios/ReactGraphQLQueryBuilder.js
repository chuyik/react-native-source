__d("ReactGraphQLQueryBuilder",["GraphQL_EXPERIMENTAL","invariant","keyOf","mapObject","stableStringify"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        this.$ReactGraphQLQueryBuilder_Component = e, this.$ReactGraphQLQueryBuilder_queryFunction = t, this.$ReactGraphQLQueryBuilder_initialParams = n, this.$ReactGraphQLQueryBuilder_deferred = !1, this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey = null
    }

    function a(e, t) {
        return e.getCacheKey() + ":" + stableStringify/*d*/(t)
    }
    var s, GraphQL_EXPERIMENTAL/*l*/ = t("GraphQL_EXPERIMENTAL"),
        invariant/*u*/ = t("invariant"),
        keyOf/*c*/ = t("keyOf"),
        mapObject/*p*/ = t("mapObject"),
        stableStringify/*d*/ = t("stableStringify"),
        h = {};
    o.get = function(e, t, n) {
        e.displayName || invariant/*u*/(0, "Cannot create cache key for component without `displayName`.");
        var r = e.displayName + ":" + t;
        if (n) {
            var i = o.$ReactGraphQLQueryBuilder_getValueKey();
            n = mapObject/*p*/(n, function(e) {
                return "object" == typeof e && i in e ? e[i] : e
            }), r += ":" + stableStringify/*d*/(n)
        }
        if (!h[r]) {
            e.queries.hasOwnProperty(t) || invariant/*u*/(0, "ReactGraphQL.Mixin.getQuery: %s does not have a query defined for %s.", e.displayName, t);
            var a = e.queries[t],
                s = e.queryParams || {},
                GraphQL_EXPERIMENTAL/*l*/ = n ? Object.assign({}, s, n) : s;
            h[r] = a ? new o(e, a, GraphQL_EXPERIMENTAL/*l*/) : null
        }
        return h[r]
    }, o.getQueryInterpreter = function(e) {
        function t() {
            throw new Error("ReactGraphQL transform failed! Did you forget to run arc build?")
        }
        var n = o.$ReactGraphQLQueryBuilder_getValueKey();
        return t.__GraphQL = GraphQL_EXPERIMENTAL/*l*/, t.__frag = function(t) {
            return t instanceof o && (t = t.getQueryFragment(e)), t
        }, t.__var = function(e) {
            var t = typeof e;
            if ("undefined" === t) throw new TypeError("Variables must not be undefined (they can be null, though)");
            return "object" === t && e.hasOwnProperty(n) ? e.$ReactGraphQLQueryBuilder_value : e
        }, t
    }, o.$ReactGraphQLQueryBuilder_getValueKey = function() {
        return s || (s = keyOf/*c*/({
            $ReactGraphQLQueryBuilder_value: null
        })), s
    }, o.prototype.defer = function() {
        return this.$ReactGraphQLQueryBuilder_deferredBuilder || (this.$ReactGraphQLQueryBuilder_deferredBuilder = new o(this.$ReactGraphQLQueryBuilder_Component, this.$ReactGraphQLQueryBuilder_queryFunction, this.$ReactGraphQLQueryBuilder_initialParams), this.$ReactGraphQLQueryBuilder_deferredBuilder.$ReactGraphQLQueryBuilder_deferred = !0), this.$ReactGraphQLQueryBuilder_deferredBuilder
    }, o.prototype.getQueryFragment = function(e, t) {
        t = t || this.$ReactGraphQLQueryBuilder_initialParams;
        var n = a(e, t);
        if (n !== this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey) {
            var r = o.getQueryInterpreter(e);
            if (this.$ReactGraphQLQueryBuilder_Component.processQueryParams)
                if (__DEV__) {
                    var i = Object.freeze(Object.assign({}, t)),
                        s = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(e, i);
                    s !== i && (t = s)
                } else t = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(e, t);
            var GraphQL_EXPERIMENTAL/*l*/ = mapObject/*p*/(this.$ReactGraphQLQueryBuilder_initialParams, function(e, n) {
                    return {
                        $ReactGraphQLQueryBuilder_value: t[n]
                    }
                }),
                invariant/*u*/ = this.$ReactGraphQLQueryBuilder_queryFunction(e, r, GraphQL_EXPERIMENTAL/*l*/);
            invariant/*u*/ && this.$ReactGraphQLQueryBuilder_deferred && (invariant/*u*/ = invariant/*u*/.defer()), this.$ReactGraphQLQueryBuilder_deepQueryFragment = invariant/*u*/, this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey = n
        }
        return this.$ReactGraphQLQueryBuilder_deepQueryFragment
    }, o.prototype["if"] = function(e) {
        return e.$ReactGraphQLQueryBuilder_value ? this : null
    }, o.prototype.unless = function(e) {
        return e.$ReactGraphQLQueryBuilder_value ? null : this
    }, i.exports = o
});