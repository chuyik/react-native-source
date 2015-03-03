__d("ReactGraphQLQueryBuilder",["GraphQL_EXPERIMENTAL","invariant","keyOf","mapObject","stableStringify"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.$ReactGraphQLQueryBuilder_Component = global/*e*/, this.$ReactGraphQLQueryBuilder_queryFunction = require/*t*/, this.$ReactGraphQLQueryBuilder_initialParams = requireDynamic/*n*/, this.$ReactGraphQLQueryBuilder_deferred = !1, this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey = null
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/.getCacheKey() + ":" + d(require/*t*/)
    }
    var s, l = require/*t*/("GraphQL_EXPERIMENTAL"),
        u = require/*t*/("invariant"),
        c = require/*t*/("keyOf"),
        p = require/*t*/("mapObject"),
        d = require/*t*/("stableStringify"),
        h = {};
    o.get = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/.displayName || u(0, "Cannot create cache key for component without `displayName`.");
        var requireLazy/*r*/ = global/*e*/.displayName + ":" + require/*t*/;
        if (requireDynamic/*n*/) {
            var module/*i*/ = o.$ReactGraphQLQueryBuilder_getValueKey();
            requireDynamic/*n*/ = p(requireDynamic/*n*/, function(global/*e*/) {
                return "object" == typeof global/*e*/ && module/*i*/ in global/*e*/ ? global/*e*/[module/*i*/] : global/*e*/
            }), requireLazy/*r*/ += ":" + d(requireDynamic/*n*/)
        }
        if (!h[requireLazy/*r*/]) {
            global/*e*/.queries.hasOwnProperty(require/*t*/) || u(0, "ReactGraphQL.Mixin.getQuery: %s does not have a query defined for %s.", global/*e*/.displayName, require/*t*/);
            var a = global/*e*/.queries[require/*t*/],
                s = global/*e*/.queryParams || {},
                l = requireDynamic/*n*/ ? Object.assign({}, s, requireDynamic/*n*/) : s;
            h[requireLazy/*r*/] = a ? new o(global/*e*/, a, l) : null
        }
        return h[requireLazy/*r*/]
    }, o.getQueryInterpreter = function(global/*e*/) {
        function require/*t*/() {
            throw new Error("ReactGraphQL transform failed! Did you forget to run arc build?")
        }
        var requireDynamic/*n*/ = o.$ReactGraphQLQueryBuilder_getValueKey();
        return require/*t*/.__GraphQL = l, require/*t*/.__frag = function(require/*t*/) {
            return require/*t*/ instanceof o && (require/*t*/ = require/*t*/.getQueryFragment(global/*e*/)), require/*t*/
        }, require/*t*/.__var = function(global/*e*/) {
            var require/*t*/ = typeof global/*e*/;
            if ("undefined" === require/*t*/) throw new TypeError("Variables must not be undefined (they can be null, though)");
            return "object" === require/*t*/ && global/*e*/.hasOwnProperty(requireDynamic/*n*/) ? global/*e*/.$ReactGraphQLQueryBuilder_value : global/*e*/
        }, require/*t*/
    }, o.$ReactGraphQLQueryBuilder_getValueKey = function() {
        return s || (s = c({
            $ReactGraphQLQueryBuilder_value: null
        })), s
    }, o.prototype.defer = function() {
        return this.$ReactGraphQLQueryBuilder_deferredBuilder || (this.$ReactGraphQLQueryBuilder_deferredBuilder = new o(this.$ReactGraphQLQueryBuilder_Component, this.$ReactGraphQLQueryBuilder_queryFunction, this.$ReactGraphQLQueryBuilder_initialParams), this.$ReactGraphQLQueryBuilder_deferredBuilder.$ReactGraphQLQueryBuilder_deferred = !0), this.$ReactGraphQLQueryBuilder_deferredBuilder
    }, o.prototype.getQueryFragment = function(global/*e*/, require/*t*/) {
        require/*t*/ = require/*t*/ || this.$ReactGraphQLQueryBuilder_initialParams;
        var requireDynamic/*n*/ = a(global/*e*/, require/*t*/);
        if (requireDynamic/*n*/ !== this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey) {
            var requireLazy/*r*/ = o.getQueryInterpreter(global/*e*/);
            if (this.$ReactGraphQLQueryBuilder_Component.processQueryParams)
                if (__DEV__) {
                    var module/*i*/ = Object.freeze(Object.assign({}, require/*t*/)),
                        s = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(global/*e*/, module/*i*/);
                    s !== module/*i*/ && (require/*t*/ = s)
                } else require/*t*/ = this.$ReactGraphQLQueryBuilder_Component.processQueryParams(global/*e*/, require/*t*/);
            var l = p(this.$ReactGraphQLQueryBuilder_initialParams, function(global/*e*/, requireDynamic/*n*/) {
                    return {
                        $ReactGraphQLQueryBuilder_value: require/*t*/[requireDynamic/*n*/]
                    }
                }),
                u = this.$ReactGraphQLQueryBuilder_queryFunction(global/*e*/, requireLazy/*r*/, l);
            u && this.$ReactGraphQLQueryBuilder_deferred && (u = u.defer()), this.$ReactGraphQLQueryBuilder_deepQueryFragment = u, this.$ReactGraphQLQueryBuilder_deepQueryFragmentCacheKey = requireDynamic/*n*/
        }
        return this.$ReactGraphQLQueryBuilder_deepQueryFragment
    }, o.prototype["if"] = function(global/*e*/) {
        return global/*e*/.$ReactGraphQLQueryBuilder_value ? this : null
    }, o.prototype.unless = function(global/*e*/) {
        return global/*e*/.$ReactGraphQLQueryBuilder_value ? null : this
    }, module/*i*/.exports = o
});