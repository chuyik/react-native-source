__d("splitDeferredQueries",["GraphQL_EXPERIMENTAL","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.getQuery(),
            n = t.getID(),
            r = null,
            i = null,
            o = a(t),
            u = o.required,
            invariant/*d*/ = o.deferred;
        r = u === t ? [e] : u ? invariant/*d*/.some(function(e) {
            return e instanceof c
        }) ? [s(u)] : [new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(u)] : [];
        for (var h = 0; h < invariant/*d*/.length; h++) {
            if (invariant/*d*/[h] instanceof GraphQL_EXPERIMENTAL/*p*/.Field) i = l(t, invariant/*d*/[h], null);
            else if (invariant/*d*/[h] instanceof GraphQL_EXPERIMENTAL/*p*/.QueryFragment) {
                if (!invariant/*d*/[h].hasFields()) continue;
                i = l(t, null, invariant/*d*/[h])
            } else i = invariant/*d*/[h].createQuery(n);
            r.push(i)
        }
        return r
    }

    function a(e) {
        var t, n, r = null,
            i = null,
            o = null,
            s = null,
            l = u(e),
            invariant/*d*/ = e.getOwnFields();
        for (t = 0; t < invariant/*d*/.length; t++) {
            var f = invariant/*d*/[t];
            for (s = a(f), (r || s.required !== f) && (r = r || invariant/*d*/.slice(0, t), s.required && r.push(s.required)), n = 0; n < s.deferred.length; n++) o = o || [], o.push(s.deferred[n] instanceof GraphQL_EXPERIMENTAL/*p*/.Field ? f.shallowClone([s.deferred[n]], null) : s.deferred[n] instanceof GraphQL_EXPERIMENTAL/*p*/.QueryFragment ? f.shallowClone(null, [s.deferred[n]]) : s.deferred[n])
        }
        if (e instanceof GraphQL_EXPERIMENTAL/*p*/.Field && o)
            for (t = 0; t < o.length; t++) o[t] instanceof c && o[t].prependNodeToPath(e);
        var m = e.getFragments();
        for (t = 0; t < m.length; t++) {
            var g = m[t];
            if (g.isDeferred()) {
                if (o = o || [], l) {
                    var _ = e.getInferredPrimaryKey();
                    o.push(new c(l, e, e.getOwnUnaliasedFields(_), [g.shallowClone(g.getOwnFields(), g.getFragments())]))
                } else o.push(g);
                i = i || m.slice(0, t)
            } else
                for (s = a(g), (i || s.required !== g) && (i = i || m.slice(0, t), s.required && i.push(s.required)), n = 0; n < s.deferred.length; n++) o = o || [], o.push(s.deferred[n] instanceof GraphQL_EXPERIMENTAL/*p*/.Field ? g.shallowClone([s.deferred[n]], null) : s.deferred[n] instanceof GraphQL_EXPERIMENTAL/*p*/.QueryFragment ? l ? new c(l, e, h, [g.shallowClone(null, [s.deferred[n]])]) : g.shallowClone(null, [s.deferred[n]]) : s.deferred[n])
        }
        var y;
        return y = r || i ? 0 === (r || invariant/*d*/).length && 0 === (i || m).length ? null : e instanceof GraphQL_EXPERIMENTAL/*p*/.Query ? e.shallowCloneWithSameID(r || invariant/*d*/, i || m) : e.shallowClone(r || invariant/*d*/, i || m) : e, {
            required: y,
            deferred: o || h
        }
    }

    function s(e) {
        return new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(e.shallowCloneWithSameID(e.getOwnFields(), e.getFragments(), {
            isRefQueryDependency: !0
        }))
    }

    function l(e, t, n) {
        var r = e.getOwnUnaliasedFields("id"),
            i = null;
        if (n) {
            var o = Object.keys(n.getDeferredFragmentNames());
            1 !== o.length && invariant/*d*/(0, "Only one fragment should be returned"), i = o[0]
        }
        return i = i || e.getQueryName() + "_defer", new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(e.shallowClone(t ? r.concat(t) : r, n ? [n] : null, {
            isDeferred: !0
        }, i))
    }

    function u(e) {
        return e instanceof GraphQL_EXPERIMENTAL/*p*/.Field ? e.getInferredRootCallName() : null
    }

    function c(e, t, n, r) {
        this.$RefQueryDescriptor_rootCallName = e, this.$RefQueryDescriptor_node = t, this.$RefQueryDescriptor_fields = n, this.$RefQueryDescriptor_fragments = r, this.$RefQueryDescriptor_path = [this.$RefQueryDescriptor_getJSONPathComponent(t), t.getInferredPrimaryKey()]
    }
    var GraphQL_EXPERIMENTAL/*p*/ = t("GraphQL_EXPERIMENTAL"),
        invariant/*d*/ = t("invariant"),
        h = [];
    c.prototype.createQuery = function(e) {
        return new GraphQL_EXPERIMENTAL/*p*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*p*/.Query(this.$RefQueryDescriptor_rootCallName, [new GraphQL_EXPERIMENTAL/*p*/.BatchCallVariable(e, "$.*." + this.$RefQueryDescriptor_path.join("."))], this.$RefQueryDescriptor_fields, this.$RefQueryDescriptor_fragments, {
            isDeferred: !0
        }, null))
    }, c.prototype.prependNodeToPath = function(e) {
        var t = this.$RefQueryDescriptor_getJSONPathComponent(e);
        this.$RefQueryDescriptor_path.unshift(t)
    }, c.prototype.$RefQueryDescriptor_getJSONPathComponent = function(e) {
        return (e.getAlias() || e.getGeneratedAlias()) + (e.isPlural() ? ".*" : "")
    }, i.exports = o
});