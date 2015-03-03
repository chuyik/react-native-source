__d("ReactGraphQLQueryBuilder",["GraphQL_EXPERIMENTAL","invariant","keyOf","mapObject","stableStringify"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
        this.$ReactGraphQLQueryBuilder_Component = global/*e*/, invariant/*this.$ReactGraphQLQueryBuilder_queryFunction*/ = require/*exports/*t*/*/, keyOf/*this.$ReactGraphQLQueryBuilder_initialParams*/ = requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, mapObject/*this.$ReactGraphQLQueryBuilder_deferred*/ = !1, stableStringify/*this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey*/ = null
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.getCacheKey() + ":" + d(require/*exports/*t*/*/)
    }
    var s, l = require/*exports/*t*/*/("GraphQL_EXPERIMENTAL"),
        u = require/*exports/*t*/*/("invariant"),
        c = require/*exports/*t*/*/("keyOf"),
        p = require/*exports/*t*/*/("mapObject"),
        d = require/*exports/*t*/*/("stableStringify"),
        h = {};
    o.get = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
        global/*e*/.displayName || u(0, "Cannot create cache key for component without `displayName`.");
        var requireLazy/*r*/ = global/*e*/.displayName + ":" + require/*exports/*t*/*/;
        if (requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
            var module/*i*/ = o.$ReactGraphQLQueryBuilder_getValueKey();
            requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = p(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/, function(global/*e*/) {
                return "object" == typeof global/*e*/ && module/*i*/ in global/*e*/ ? global/*e*/[module/*i*/] : global/*e*/
            }), requireLazy/*r*/ += ":" + d(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/)
        }
        if (!h[requireLazy/*r*/]) {
            global/*e*/.queries.hasOwnProperty(require/*exports/*t*/*/) || u(0, "ReactGraphQL.Mixin.getQuery: %s does not have a query defined for %s.", global/*e*/.displayName, require/*exports/*t*/*/);
            var a = global/*e*/.queries[require/*exports/*t*/*/],
                s = global/*e*/.queryParams || {},
                l = requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ ? Object.assign({}, s, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) : s;
            h[requireLazy/*r*/] = a ? new o(global/*e*/, a, l) : null
        }
        return h[requireLazy/*r*/]
    }, o.getQueryInterpreter = function(global/*e*/) {
        function require/*exports/*t*/*/() {
            throw new Error("ReactGraphQL transform failed! Did you forget to run arc build?")
        }
        var requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = o.$ReactGraphQLQueryBuilder_getValueKey();
        return require/*exports/*t*/*/.__GraphQL = l, require/*exports/*t*/*/.__frag = function(require/*exports/*t*/*/) {
            return require/*exports/*t*/*/ instanceof o && (require/*exports/*t*/*/ = require/*exports/*t*/*/.getQueryFragment(global/*e*/)), require/*exports/*t*/*/
        }, require/*exports/*t*/*/.__var = function(global/*e*/) {
            var require/*exports/*t*/*/ = typeof global/*e*/;
            if ("undefined" === require/*exports/*t*/*/) throw new TypeError("Variables must not be undefined (they can be null, though)");
            return "object" === require/*exports/*t*/*/ && global/*e*/.hasOwnProperty(requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) ? global/*e*/.$ReactGraphQLQueryBuilder_value : global/*e*/
        }, require/*exports/*t*/*/
    }, o.$ReactGraphQLQueryBuilder_getValueKey = function() {
        return s || (s = c({
            $ReactGraphQLQueryBuilder_value: null
        })), s
    }, o.prototype.defer = function() {
        return this.$ReactGraphQLQueryBuilder_deferredBuilder || (this.$ReactGraphQLQueryBuilder_deferredBuilder = new o(this.$ReactGraphQLQueryBuilder_Component, invariant/*this.$ReactGraphQLQueryBuilder_queryFunction*/, keyOf/*this.$ReactGraphQLQueryBuilder_initialParams*/), this.$ReactGraphQLQueryBuilder_deferredBuilder.$ReactGraphQLQueryBuilder_deferred = !0), this.$ReactGraphQLQueryBuilder_deferredBuilder
    }, o.prototype.getQueryFragment = function(global/*e*/, require/*exports/*t*/*/) {
        require/*exports/*t*/*/ = require/*exports/*t*/*/ || keyOf/*this.$ReactGraphQLQueryBuilder_initialParams*/;
        var requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ = a(global/*e*/, require/*exports/*t*/*/);
        if (requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/ !== stableStringify/*this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey*/) {
            var requireLazy/*r*/ = o.getQueryInterpreter(global/*e*/);
            if (this.$ReactGraphQLQueryBuilder_Component.processQueryParams)
                if (__DEV__) {
                    var module/*i*/ = Object.freeze(Object.assign({}, require/*exports/*t*/*/)),
                        s = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(global/*e*/, module/*i*/);
                    s !== module/*i*/ && (require/*exports/*t*/*/ = s)
                } else require/*exports/*t*/*/ = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(global/*e*/, require/*exports/*t*/*/);
            var l = p(keyOf/*this.$ReactGraphQLQueryBuilder_initialParams*/, function(global/*e*/, requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/) {
                    return {
                        $ReactGraphQLQueryBuilder_value: require/*exports/*t*/*/[requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/]
                    }
                }),
                u = invariant/*this.$ReactGraphQLQueryBuilder_queryFunction*/(global/*e*/, requireLazy/*r*/, l);
            u && mapObject/*this.$ReactGraphQLQueryBuilder_deferred*/ && (u = u.defer()), this.$ReactGraphQLQueryBuilder_deepQueryFragment = u, stableStringify/*this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey*/ = requireDynamic/*GraphQL_EXPERIMENTAL/*n*/*/
        }
        return this.$ReactGraphQLQueryBuilder_deepQueryFragment
    }, o.prototype["if"] = function(global/*e*/) {
        return global/*e*/.$ReactGraphQLQueryBuilder_value ? this : null
    }, o.prototype.unless = function(global/*e*/) {
        return global/*e*/.$ReactGraphQLQueryBuilder_value ? null : this
    }, module/*i*/.exports = o
});