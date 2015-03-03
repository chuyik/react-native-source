__d("splitDeferredQueries",["GraphQL_EXPERIMENTAL","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*invariant/*i*/*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.getQuery(),
            requireDynamic/*exports/*n*/*/ = require/*t*/.getID(),
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = null,
            module/*invariant/*i*/*/ = null,
            o = a(require/*t*/),
            u = o.required,
            d = o.deferred;
        requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = u === require/*t*/ ? [global/*e*/] : u ? d.some(function(global/*e*/) {
            return global/*e*/ instanceof c
        }) ? [s(u)] : [new p.QueryWithValues(u)] : [];
        for (var h = 0; h < d.length; h++) {
            if (d[h] instanceof p.Field) module/*invariant/*i*/*/ = l(require/*t*/, d[h], null);
            else if (d[h] instanceof p.QueryFragment) {
                if (!d[h].hasFields()) continue;
                module/*invariant/*i*/*/ = l(require/*t*/, null, d[h])
            } else module/*invariant/*i*/*/ = d[h].createQuery(requireDynamic/*exports/*n*/*/);
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.push(module/*invariant/*i*/*/)
        }
        return requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/
    }

    function a(global/*e*/) {
        var require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = null,
            module/*invariant/*i*/*/ = null,
            o = null,
            s = null,
            l = u(global/*e*/),
            d = global/*e*/.getOwnFields();
        for (require/*t*/ = 0; require/*t*/ < d.length; require/*t*/++) {
            var f = d[require/*t*/];
            for (s = a(f), (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || s.required !== f) && (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || d.slice(0, require/*t*/), s.required && requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.push(s.required)), requireDynamic/*exports/*n*/*/ = 0; requireDynamic/*exports/*n*/*/ < s.deferred.length; requireDynamic/*exports/*n*/*/++) o = o || [], o.push(s.deferred[requireDynamic/*exports/*n*/*/] instanceof p.Field ? f.shallowClone([s.deferred[requireDynamic/*exports/*n*/*/]], null) : s.deferred[requireDynamic/*exports/*n*/*/] instanceof p.QueryFragment ? f.shallowClone(null, [s.deferred[requireDynamic/*exports/*n*/*/]]) : s.deferred[requireDynamic/*exports/*n*/*/])
        }
        if (global/*e*/ instanceof p.Field && o)
            for (require/*t*/ = 0; require/*t*/ < o.length; require/*t*/++) o[require/*t*/] instanceof c && o[require/*t*/].prependNodeToPath(global/*e*/);
        var m = global/*e*/.getFragments();
        for (require/*t*/ = 0; require/*t*/ < m.length; require/*t*/++) {
            var g = m[require/*t*/];
            if (g.isDeferred()) {
                if (o = o || [], l) {
                    var _ = global/*e*/.getInferredPrimaryKey();
                    o.push(new c(l, global/*e*/, global/*e*/.getOwnUnaliasedFields(_), [g.shallowClone(g.getOwnFields(), g.getFragments())]))
                } else o.push(g);
                module/*invariant/*i*/*/ = module/*invariant/*i*/*/ || m.slice(0, require/*t*/)
            } else
                for (s = a(g), (module/*invariant/*i*/*/ || s.required !== g) && (module/*invariant/*i*/*/ = module/*invariant/*i*/*/ || m.slice(0, require/*t*/), s.required && module/*invariant/*i*/*/.push(s.required)), requireDynamic/*exports/*n*/*/ = 0; requireDynamic/*exports/*n*/*/ < s.deferred.length; requireDynamic/*exports/*n*/*/++) o = o || [], o.push(s.deferred[requireDynamic/*exports/*n*/*/] instanceof p.Field ? g.shallowClone([s.deferred[requireDynamic/*exports/*n*/*/]], null) : s.deferred[requireDynamic/*exports/*n*/*/] instanceof p.QueryFragment ? l ? new c(l, global/*e*/, h, [g.shallowClone(null, [s.deferred[requireDynamic/*exports/*n*/*/]])]) : g.shallowClone(null, [s.deferred[requireDynamic/*exports/*n*/*/]]) : s.deferred[requireDynamic/*exports/*n*/*/])
        }
        var y;
        return y = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || module/*invariant/*i*/*/ ? 0 === (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || d).length && 0 === (module/*invariant/*i*/*/ || m).length ? null : global/*e*/ instanceof p.Query ? global/*e*/.shallowCloneWithSameID(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || d, module/*invariant/*i*/*/ || m) : global/*e*/.shallowClone(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || d, module/*invariant/*i*/*/ || m) : global/*e*/, {
            required: y,
            deferred: o || h
        }
    }

    function s(global/*e*/) {
        return new p.QueryWithValues(global/*e*/.shallowCloneWithSameID(global/*e*/.getOwnFields(), global/*e*/.getFragments(), {
            isRefQueryDependency: !0
        }))
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/) {
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = global/*e*/.getOwnUnaliasedFields("id"),
            module/*invariant/*i*/*/ = null;
        if (requireDynamic/*exports/*n*/*/) {
            var o = Object.keys(requireDynamic/*exports/*n*/*/.getDeferredFragmentNames());
            1 !== o.length && d(0, "Only one fragment should be returned"), module/*invariant/*i*/*/ = o[0]
        }
        return module/*invariant/*i*/*/ = module/*invariant/*i*/*/ || global/*e*/.getQueryName() + "_defer", new p.QueryWithValues(global/*e*/.shallowClone(require/*t*/ ? requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.concat(require/*t*/) : requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, requireDynamic/*exports/*n*/*/ ? [requireDynamic/*exports/*n*/*/] : null, {
            isDeferred: !0
        }, module/*invariant/*i*/*/))
    }

    function u(global/*e*/) {
        return global/*e*/ instanceof p.Field ? global/*e*/.getInferredRootCallName() : null
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/) {
        this.$RefQueryDescriptor_rootCallName = global/*e*/, this.$RefQueryDescriptor_node = require/*t*/, this.$RefQueryDescriptor_fields = requireDynamic/*exports/*n*/*/, this.$RefQueryDescriptor_fragments = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, this.$RefQueryDescriptor_path = [this.$RefQueryDescriptor_getJSONPathComponent(require/*t*/), require/*t*/.getInferredPrimaryKey()]
    }
    var p = require/*t*/("GraphQL_EXPERIMENTAL"),
        d = require/*t*/("invariant"),
        h = [];
    c.prototype.createQuery = function(global/*e*/) {
        return new p.QueryWithValues(new p.Query(this.$RefQueryDescriptor_rootCallName, [new p.BatchCallVariable(global/*e*/, "$.*." + this.$RefQueryDescriptor_path.join("."))], this.$RefQueryDescriptor_fields, this.$RefQueryDescriptor_fragments, {
            isDeferred: !0
        }, null))
    }, c.prototype.prependNodeToPath = function(global/*e*/) {
        var require/*t*/ = this.$RefQueryDescriptor_getJSONPathComponent(global/*e*/);
        this.$RefQueryDescriptor_path.unshift(require/*t*/)
    }, c.prototype.$RefQueryDescriptor_getJSONPathComponent = function(global/*e*/) {
        return (global/*e*/.getAlias() || global/*e*/.getGeneratedAlias()) + (global/*e*/.isPlural() ? ".*" : "")
    }, module/*invariant/*i*/*/.exports = o
});