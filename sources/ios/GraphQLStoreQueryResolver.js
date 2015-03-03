__d("GraphQLStoreQueryResolver",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","forEachObject","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.reset(), this.$GraphQLStoreQueryResolver_callback = global/*e*/
    }

    function a(global/*e*/) {
        this.reset(), this.$GraphQLStorePluralQueryResolver_callback = global/*e*/
    }

    function s(global/*e*/) {
        this.reset(), this.$GraphQLStoreSingleQueryResolver_callback = global/*e*/
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/, module/*i*/ = d.getDeepNodeFromData(global/*e*/, require/*t*/, function(require/*t*/) {
            return !require/*t*/.getScope() || global/*e*/.getScope() === require/*t*/.getScope()
        }, requireDynamic/*n*/);
        return module/*i*/ && (requireLazy/*r*/ = u(module/*i*/)), [module/*i*/, requireLazy/*r*/]
    }

    function u(global/*e*/) {
        function require/*t*/(global/*e*/) {
            Array.isArray(global/*e*/) ? requireLazy/*r*/.push.apply(requireLazy/*r*/, global/*e*/) : requireLazy/*r*/.push(global/*e*/)
        }
        for (var requireDynamic/*n*/ = {}, requireLazy/*r*/ = [global/*e*/]; requireLazy/*r*/.length;) {
            var module/*i*/ = requireLazy/*r*/.shift();
            if (module/*i*/ && "object" == typeof module/*i*/) {
                var o = f.getID(module/*i*/);
                null != o && (requireDynamic/*n*/[o] = null), g(module/*i*/, require/*t*/)
            }
        }
        return requireDynamic/*n*/
    }

    function c(global/*e*/) {
        var require/*t*/ = m.parseRangeClientID(global/*e*/);
        return require/*t*/ ? require/*t*/.dataID : global/*e*/
    }
    var p = require/*t*/("DliteProfiler"),
        d = require/*t*/("GraphQLStore"),
        h = require/*t*/("GraphQLStoreChangeEmitter"),
        f = require/*t*/("GraphQLStoreDataHandler"),
        m = require/*t*/("GraphQLStoreRangeUtils"),
        g = require/*t*/("forEachObject"),
        _ = require/*t*/("invariant");
    o.prototype.reset = function() {
        this.$GraphQLStoreQueryResolver_callback = null, this.$GraphQLStoreQueryResolver_resolver && this.$GraphQLStoreQueryResolver_resolver.reset(), this.$GraphQLStoreQueryResolver_resolver = null, this.$GraphQLStoreQueryResolver_isPluralResolver = null
    }, o.prototype.resolve = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = null === this.$GraphQLStoreQueryResolver_isPluralResolver;
        return requireDynamic/*n*/ ? (this.$GraphQLStoreQueryResolver_isPluralResolver = global/*e*/.isPlural(), this.$GraphQLStoreQueryResolver_resolver = this.$GraphQLStoreQueryResolver_isPluralResolver ? new a(this.$GraphQLStoreQueryResolver_callback) : new s(this.$GraphQLStoreQueryResolver_callback)) : this.$GraphQLStoreQueryResolver_isPluralResolver !== global/*e*/.isPlural() && _(0, "GraphQLStoreQueryResolver: Expected a %s query fragment. Got a %s query fragment instead.", this.$GraphQLStoreQueryResolver_isPluralResolver ? "plural" : "single", global/*e*/.isPlural() ? "plural" : "single"), this.$GraphQLStoreQueryResolver_resolver.resolve(global/*e*/, require/*t*/)
    }, a.prototype.reset = function() {
        this.$GraphQLStorePluralQueryResolver_resolvers ? (this.$GraphQLStorePluralQueryResolver_resolvers.forEach(function(global/*e*/) {
            return global/*e*/.reset()
        }), this.$GraphQLStorePluralQueryResolver_resolvers.length = 0) : this.$GraphQLStorePluralQueryResolver_resolvers = [], this.$GraphQLStorePluralQueryResolver_callback = null, this.$GraphQLStorePluralQueryResolver_results = []
    }, a.prototype.resolve = function(global/*e*/, require/*t*/) {
        null == require/*t*/ || Array.isArray(require/*t*/) || _(0, "GraphQLStoreQueryResolver: Plural fragment can only resolve an array of pointers.");
        for (var requireDynamic/*n*/, requireLazy/*r*/ = this.$GraphQLStorePluralQueryResolver_results, module/*i*/ = requireLazy/*r*/.length, o = require/*t*/ ? require/*t*/.length : 0, a = this.$GraphQLStorePluralQueryResolver_resolvers; a.length < o;) a.push(new s(this.$GraphQLStorePluralQueryResolver_callback));
        for (; a.length > o;) a.pop().reset();
        module/*i*/ !== o && (requireDynamic/*n*/ = []);
        for (var l = 0; o > l; l++) {
            var u = a[l].resolve(global/*e*/, require/*t*/[l]);
            (requireDynamic/*n*/ || l >= module/*i*/ || u !== requireLazy/*r*/[l]) && (requireDynamic/*n*/ = requireDynamic/*n*/ || requireLazy/*r*/.slice(0, l), requireDynamic/*n*/.push(u))
        }
        return requireDynamic/*n*/ && (this.$GraphQLStorePluralQueryResolver_results = requireDynamic/*n*/), this.$GraphQLStorePluralQueryResolver_results
    }, s.prototype.reset = function() {
        this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), this.$GraphQLStoreSingleQueryResolver_queryFragment = null, this.$GraphQLStoreSingleQueryResolver_callback = null, this.$GraphQLStoreSingleQueryResolver_isDirty = !1, this.$GraphQLStoreSingleQueryResolver_resultID = null, this.$GraphQLStoreSingleQueryResolver_result = null
    }, s.prototype.resolve = function(global/*e*/, require/*t*/) {
        Array.isArray(require/*t*/) && _(0, "GraphQLStoreQueryResolver: Singular fragment cannot resolve an array of pointers.");
        var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o = this.$GraphQLStoreSingleQueryResolver_resultID,
            a = this.$GraphQLStoreSingleQueryResolver_result,
            s = this.$GraphQLStoreSingleQueryResolver_queryFragment;
        if (require/*t*/) {
            if (requireLazy/*r*/ = f.getID(require/*t*/), null != o && null != requireLazy/*r*/ && c(o) === c(requireLazy/*r*/))
                if (this.$GraphQLStoreSingleQueryResolver_isDirty || o != requireLazy/*r*/ || s !== global/*e*/) {
                    var u = l(global/*e*/, require/*t*/, a);
                    module/*i*/ = u[0], requireDynamic/*n*/ = u[1]
                } else module/*i*/ = a;
            else {
                var p = l(global/*e*/, require/*t*/),
                    d = p[0],
                    m = p[1];
                null != requireLazy/*r*/ && (requireDynamic/*n*/ = m), module/*i*/ = d
            }
            this.$GraphQLStoreSingleQueryResolver_isDirty = !1
        } else module/*i*/ = require/*t*/;
        return a !== module/*i*/ && (this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), requireDynamic/*n*/ && (this.$GraphQLStoreSingleQueryResolver_subscription = h.addListenerForIDs(Object.keys(requireDynamic/*n*/), this.$GraphQLStoreSingleQueryResolver_handleChange.bind(this))), this.$GraphQLStoreSingleQueryResolver_resultID = requireLazy/*r*/, this.$GraphQLStoreSingleQueryResolver_result = module/*i*/), this.$GraphQLStoreSingleQueryResolver_queryFragment = global/*e*/, this.$GraphQLStoreSingleQueryResolver_result
    }, s.prototype.$GraphQLStoreSingleQueryResolver_handleChange = function() {
        this.$GraphQLStoreSingleQueryResolver_isDirty || (this.$GraphQLStoreSingleQueryResolver_isDirty = !0, this.$GraphQLStoreSingleQueryResolver_callback())
    }, p.instrumentMethods(o.prototype, {
        resolve: "GraphQLStoreQueryResolver.resolve"
    }), module/*i*/.exports = o
});