__d("GraphQLStoreQueryResolver",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","forEachObject","invariant"],invariant/*function*/ (global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/, requireDynamic/*GraphQLStoreDataHandler/*n*/*/, requireLazy/*r*/, module/*GraphQLStoreRangeUtils/*i*/*/) {
    "use strict";

    invariant/*function*/ o(global/*e*/) {
        this.reset(), exports/*this.$GraphQLStoreQueryResolver_callback*/ = global/*e*/
    }

    invariant/*function*/ a(global/*e*/) {
        this.reset(), DliteProfiler/*this.$GraphQLStorePluralQueryResolver_callback*/ = global/*e*/
    }

    invariant/*function*/ s(global/*e*/) {
        this.reset(), GraphQLStore/*this.$GraphQLStoreSingleQueryResolver_callback*/ = global/*e*/
    }

    invariant/*function*/ l(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/, requireDynamic/*GraphQLStoreDataHandler/*n*/*/) {
        var requireLazy/*r*/, module/*GraphQLStoreRangeUtils/*i*/*/ = d.getDeepNodeFromData(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/, invariant/*function*/(require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) {
            return !require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/.getScope() || global/*e*/.getScope() === require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/.getScope()
        }, requireDynamic/*GraphQLStoreDataHandler/*n*/*/);
        return module/*GraphQLStoreRangeUtils/*i*/*/ && (requireLazy/*r*/ = u(module/*GraphQLStoreRangeUtils/*i*/*/)), [module/*GraphQLStoreRangeUtils/*i*/*/, requireLazy/*r*/]
    }

    invariant/*function*/ u(global/*e*/) {
        invariant/*function*/ require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/(global/*e*/) {
            Array.isArray(global/*e*/) ? requireLazy/*r*/.push.apply(requireLazy/*r*/, global/*e*/) : requireLazy/*r*/.push(global/*e*/)
        }
        for (var requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = {}, requireLazy/*r*/ = [global/*e*/]; requireLazy/*r*/.length;) {
            var module/*GraphQLStoreRangeUtils/*i*/*/ = requireLazy/*r*/.shift();
            if (module/*GraphQLStoreRangeUtils/*i*/*/ && "object" == typeof module/*GraphQLStoreRangeUtils/*i*/*/) {
                var o = f.getID(module/*GraphQLStoreRangeUtils/*i*/*/);
                null != o && (requireDynamic/*GraphQLStoreDataHandler/*n*/*/[o] = null), g(module/*GraphQLStoreRangeUtils/*i*/*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/)
            }
        }
        return requireDynamic/*GraphQLStoreDataHandler/*n*/*/
    }

    invariant/*function*/ c(global/*e*/) {
        var require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/ = m.parseRangeClientID(global/*e*/);
        return require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/ ? require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/.dataID : global/*e*/
    }
    var p = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("DliteProfiler"),
        d = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("GraphQLStore"),
        h = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("GraphQLStoreChangeEmitter"),
        f = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("GraphQLStoreDataHandler"),
        m = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("GraphQLStoreRangeUtils"),
        g = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("forEachObject"),
        _ = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/("invariant");
    o.prototype.reset = invariant/*function*/() {
        exports/*this.$GraphQLStoreQueryResolver_callback*/ = null, this.$GraphQLStoreQueryResolver_resolver && this.$GraphQLStoreQueryResolver_resolver.reset(), this.$GraphQLStoreQueryResolver_resolver = null, this.$GraphQLStoreQueryResolver_isPluralResolver = null
    }, o.prototype.resolve = invariant/*function*/(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) {
        var requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = null === this.$GraphQLStoreQueryResolver_isPluralResolver;
        return requireDynamic/*GraphQLStoreDataHandler/*n*/*/ ? (this.$GraphQLStoreQueryResolver_isPluralResolver = global/*e*/.isPlural(), this.$GraphQLStoreQueryResolver_resolver = this.$GraphQLStoreQueryResolver_isPluralResolver ? new a(exports/*this.$GraphQLStoreQueryResolver_callback*/) : new s(exports/*this.$GraphQLStoreQueryResolver_callback*/)) : this.$GraphQLStoreQueryResolver_isPluralResolver !== global/*e*/.isPlural() && _(0, "GraphQLStoreQueryResolver: Expected a %s query fragment. Got a %s query fragment instead.", this.$GraphQLStoreQueryResolver_isPluralResolver ? "plural" : "single", global/*e*/.isPlural() ? "plural" : "single"), this.$GraphQLStoreQueryResolver_resolver.resolve(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/)
    }, a.prototype.reset = invariant/*function*/() {
        this.$GraphQLStorePluralQueryResolver_resolvers ? (this.$GraphQLStorePluralQueryResolver_resolvers.forEach(invariant/*function*/(global/*e*/) {
            return global/*e*/.reset()
        }), this.$GraphQLStorePluralQueryResolver_resolvers.length = 0) : this.$GraphQLStorePluralQueryResolver_resolvers = [], DliteProfiler/*this.$GraphQLStorePluralQueryResolver_callback*/ = null, this.$GraphQLStorePluralQueryResolver_results = []
    }, a.prototype.resolve = invariant/*function*/(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) {
        null == require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/ || Array.isArray(require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) || _(0, "GraphQLStoreQueryResolver: Plural fragment can only resolve an array of pointers.");
        for (var requireDynamic/*GraphQLStoreDataHandler/*n*/*/, requireLazy/*r*/ = this.$GraphQLStorePluralQueryResolver_results, module/*GraphQLStoreRangeUtils/*i*/*/ = requireLazy/*r*/.length, o = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/ ? require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/.length : 0, a = this.$GraphQLStorePluralQueryResolver_resolvers; a.length < o;) a.push(new s(DliteProfiler/*this.$GraphQLStorePluralQueryResolver_callback*/));
        for (; a.length > o;) a.pop().reset();
        module/*GraphQLStoreRangeUtils/*i*/*/ !== o && (requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = []);
        for (var l = 0; o > l; l++) {
            var u = a[l].resolve(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/[l]);
            (requireDynamic/*GraphQLStoreDataHandler/*n*/*/ || l >= module/*GraphQLStoreRangeUtils/*i*/*/ || u !== requireLazy/*r*/[l]) && (requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = requireDynamic/*GraphQLStoreDataHandler/*n*/*/ || requireLazy/*r*/.slice(0, l), requireDynamic/*GraphQLStoreDataHandler/*n*/*/.push(u))
        }
        return requireDynamic/*GraphQLStoreDataHandler/*n*/*/ && (this.$GraphQLStorePluralQueryResolver_results = requireDynamic/*GraphQLStoreDataHandler/*n*/*/), this.$GraphQLStorePluralQueryResolver_results
    }, s.prototype.reset = invariant/*function*/() {
        this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), this.$GraphQLStoreSingleQueryResolver_queryFragment = null, GraphQLStore/*this.$GraphQLStoreSingleQueryResolver_callback*/ = null, this.$GraphQLStoreSingleQueryResolver_isDirty = !1, this.$GraphQLStoreSingleQueryResolver_resultID = null, this.$GraphQLStoreSingleQueryResolver_result = null
    }, s.prototype.resolve = invariant/*function*/(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) {
        Array.isArray(require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) && _(0, "GraphQLStoreQueryResolver: Singular fragment cannot resolve an array of pointers.");
        var requireDynamic/*GraphQLStoreDataHandler/*n*/*/, requireLazy/*r*/, module/*GraphQLStoreRangeUtils/*i*/*/, o = this.$GraphQLStoreSingleQueryResolver_resultID,
            a = this.$GraphQLStoreSingleQueryResolver_result,
            s = this.$GraphQLStoreSingleQueryResolver_queryFragment;
        if (require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/) {
            if (requireLazy/*r*/ = f.getID(require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/), null != o && null != requireLazy/*r*/ && c(o) === c(requireLazy/*r*/))
                if (this.$GraphQLStoreSingleQueryResolver_isDirty || o != requireLazy/*r*/ || s !== global/*e*/) {
                    var u = l(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/, a);
                    module/*GraphQLStoreRangeUtils/*i*/*/ = u[0], requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = u[1]
                } else module/*GraphQLStoreRangeUtils/*i*/*/ = a;
            else {
                var p = l(global/*e*/, require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/),
                    d = p[0],
                    m = p[1];
                null != requireLazy/*r*/ && (requireDynamic/*GraphQLStoreDataHandler/*n*/*/ = m), module/*GraphQLStoreRangeUtils/*i*/*/ = d
            }
            this.$GraphQLStoreSingleQueryResolver_isDirty = !1
        } else module/*GraphQLStoreRangeUtils/*i*/*/ = require/*GraphQLStoreChangeEmitter/*forEachObject/*t*/*/*/;
        return a !== module/*GraphQLStoreRangeUtils/*i*/*/ && (this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), requireDynamic/*GraphQLStoreDataHandler/*n*/*/ && (this.$GraphQLStoreSingleQueryResolver_subscription = h.addListenerForIDs(Object.keys(requireDynamic/*GraphQLStoreDataHandler/*n*/*/), this.$GraphQLStoreSingleQueryResolver_handleChange.bind(this))), this.$GraphQLStoreSingleQueryResolver_resultID = requireLazy/*r*/, this.$GraphQLStoreSingleQueryResolver_result = module/*GraphQLStoreRangeUtils/*i*/*/), this.$GraphQLStoreSingleQueryResolver_queryFragment = global/*e*/, this.$GraphQLStoreSingleQueryResolver_result
    }, s.prototype.$GraphQLStoreSingleQueryResolver_handleChange = invariant/*function*/() {
        this.$GraphQLStoreSingleQueryResolver_isDirty || (this.$GraphQLStoreSingleQueryResolver_isDirty = !0, GraphQLStore/*this.$GraphQLStoreSingleQueryResolver_callback*/())
    }, p.instrumentMethods(o.prototype, {
        resolve: "GraphQLStoreQueryResolver.resolve"
    }), module/*GraphQLStoreRangeUtils/*i*/*/.exports = o
});