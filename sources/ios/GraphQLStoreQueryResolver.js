__d("GraphQLStoreQueryResolver",["DliteProfiler","GraphQLStore","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","forEachObject","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.reset(), this.$GraphQLStoreQueryResolver_callback = e
    }

    function a(e) {
        this.reset(), this.$GraphQLStorePluralQueryResolver_callback = e
    }

    function s(e) {
        this.reset(), this.$GraphQLStoreSingleQueryResolver_callback = e
    }

    function l(e, t, n) {
        var r, i = GraphQLStore/*d*/.getDeepNodeFromData(e, t, function(t) {
            return !t.getScope() || e.getScope() === t.getScope()
        }, n);
        return i && (r = u(i)), [i, r]
    }

    function u(e) {
        function t(e) {
            Array.isArray(e) ? r.push.apply(r, e) : r.push(e)
        }
        for (var n = {}, r = [e]; r.length;) {
            var i = r.shift();
            if (i && "object" == typeof i) {
                var o = GraphQLStoreDataHandler/*f*/.getID(i);
                null != o && (n[o] = null), forEachObject/*g*/(i, t)
            }
        }
        return n
    }

    function c(e) {
        var t = GraphQLStoreRangeUtils/*m*/.parseRangeClientID(e);
        return t ? t.dataID : e
    }
    var DliteProfiler/*p*/ = t("DliteProfiler"),
        GraphQLStore/*d*/ = t("GraphQLStore"),
        GraphQLStoreChangeEmitter/*h*/ = t("GraphQLStoreChangeEmitter"),
        GraphQLStoreDataHandler/*f*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreRangeUtils/*m*/ = t("GraphQLStoreRangeUtils"),
        forEachObject/*g*/ = t("forEachObject"),
        invariant/*_*/ = t("invariant");
    o.prototype.reset = function() {
        this.$GraphQLStoreQueryResolver_callback = null, this.$GraphQLStoreQueryResolver_resolver && this.$GraphQLStoreQueryResolver_resolver.reset(), this.$GraphQLStoreQueryResolver_resolver = null, this.$GraphQLStoreQueryResolver_isPluralResolver = null
    }, o.prototype.resolve = function(e, t) {
        var n = null === this.$GraphQLStoreQueryResolver_isPluralResolver;
        return n ? (this.$GraphQLStoreQueryResolver_isPluralResolver = e.isPlural(), this.$GraphQLStoreQueryResolver_resolver = this.$GraphQLStoreQueryResolver_isPluralResolver ? new a(this.$GraphQLStoreQueryResolver_callback) : new s(this.$GraphQLStoreQueryResolver_callback)) : this.$GraphQLStoreQueryResolver_isPluralResolver !== e.isPlural() && invariant/*_*/(0, "GraphQLStoreQueryResolver: Expected a %s query fragment. Got a %s query fragment instead.", this.$GraphQLStoreQueryResolver_isPluralResolver ? "plural" : "single", e.isPlural() ? "plural" : "single"), this.$GraphQLStoreQueryResolver_resolver.resolve(e, t)
    }, a.prototype.reset = function() {
        this.$GraphQLStorePluralQueryResolver_resolvers ? (this.$GraphQLStorePluralQueryResolver_resolvers.forEach(function(e) {
            return e.reset()
        }), this.$GraphQLStorePluralQueryResolver_resolvers.length = 0) : this.$GraphQLStorePluralQueryResolver_resolvers = [], this.$GraphQLStorePluralQueryResolver_callback = null, this.$GraphQLStorePluralQueryResolver_results = []
    }, a.prototype.resolve = function(e, t) {
        null == t || Array.isArray(t) || invariant/*_*/(0, "GraphQLStoreQueryResolver: Plural fragment can only resolve an array of pointers.");
        for (var n, r = this.$GraphQLStorePluralQueryResolver_results, i = r.length, o = t ? t.length : 0, a = this.$GraphQLStorePluralQueryResolver_resolvers; a.length < o;) a.push(new s(this.$GraphQLStorePluralQueryResolver_callback));
        for (; a.length > o;) a.pop().reset();
        i !== o && (n = []);
        for (var l = 0; o > l; l++) {
            var u = a[l].resolve(e, t[l]);
            (n || l >= i || u !== r[l]) && (n = n || r.slice(0, l), n.push(u))
        }
        return n && (this.$GraphQLStorePluralQueryResolver_results = n), this.$GraphQLStorePluralQueryResolver_results
    }, s.prototype.reset = function() {
        this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), this.$GraphQLStoreSingleQueryResolver_queryFragment = null, this.$GraphQLStoreSingleQueryResolver_callback = null, this.$GraphQLStoreSingleQueryResolver_isDirty = !1, this.$GraphQLStoreSingleQueryResolver_resultID = null, this.$GraphQLStoreSingleQueryResolver_result = null
    }, s.prototype.resolve = function(e, t) {
        Array.isArray(t) && invariant/*_*/(0, "GraphQLStoreQueryResolver: Singular fragment cannot resolve an array of pointers.");
        var n, r, i, o = this.$GraphQLStoreSingleQueryResolver_resultID,
            a = this.$GraphQLStoreSingleQueryResolver_result,
            s = this.$GraphQLStoreSingleQueryResolver_queryFragment;
        if (t) {
            if (r = GraphQLStoreDataHandler/*f*/.getID(t), null != o && null != r && c(o) === c(r))
                if (this.$GraphQLStoreSingleQueryResolver_isDirty || o != r || s !== e) {
                    var u = l(e, t, a);
                    i = u[0], n = u[1]
                } else i = a;
            else {
                var DliteProfiler/*p*/ = l(e, t),
                    GraphQLStore/*d*/ = DliteProfiler/*p*/[0],
                    GraphQLStoreRangeUtils/*m*/ = DliteProfiler/*p*/[1];
                null != r && (n = GraphQLStoreRangeUtils/*m*/), i = GraphQLStore/*d*/
            }
            this.$GraphQLStoreSingleQueryResolver_isDirty = !1
        } else i = t;
        return a !== i && (this.$GraphQLStoreSingleQueryResolver_subscription && (this.$GraphQLStoreSingleQueryResolver_subscription.remove(), this.$GraphQLStoreSingleQueryResolver_subscription = null), n && (this.$GraphQLStoreSingleQueryResolver_subscription = GraphQLStoreChangeEmitter/*h*/.addListenerForIDs(Object.keys(n), this.$GraphQLStoreSingleQueryResolver_handleChange.bind(this))), this.$GraphQLStoreSingleQueryResolver_resultID = r, this.$GraphQLStoreSingleQueryResolver_result = i), this.$GraphQLStoreSingleQueryResolver_queryFragment = e, this.$GraphQLStoreSingleQueryResolver_result
    }, s.prototype.$GraphQLStoreSingleQueryResolver_handleChange = function() {
        this.$GraphQLStoreSingleQueryResolver_isDirty || (this.$GraphQLStoreSingleQueryResolver_isDirty = !0, this.$GraphQLStoreSingleQueryResolver_callback())
    }, DliteProfiler/*p*/.instrumentMethods(o.prototype, {
        resolve: "GraphQLStoreQueryResolver.resolve"
    }), i.exports = o
});