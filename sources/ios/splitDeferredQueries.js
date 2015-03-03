__d("splitDeferredQueries",["GraphQL_EXPERIMENTAL","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.getQuery(),
            requireDynamic/*n*/ = require/*t*/.getID(),
            requireLazy/*r*/ = null,
            module/*i*/ = null,
            o = a(require/*t*/),
            u = o.required,
            d = o.deferred;
        requireLazy/*r*/ = u === require/*t*/ ? [global/*e*/] : u ? d.some(function(global/*e*/) {
            return global/*e*/ instanceof c
        }) ? [s(u)] : [new p.QueryWithValues(u)] : [];
        for (var h = 0; h < d.length; h++) {
            if (d[h] instanceof p.Field) module/*i*/ = l(require/*t*/, d[h], null);
            else if (d[h] instanceof p.QueryFragment) {
                if (!d[h].hasFields()) continue;
                module/*i*/ = l(require/*t*/, null, d[h])
            } else module/*i*/ = d[h].createQuery(requireDynamic/*n*/);
            requireLazy/*r*/.push(module/*i*/)
        }
        return requireLazy/*r*/
    }

    function a(global/*e*/) {
        var require/*t*/, requireDynamic/*n*/, requireLazy/*r*/ = null,
            module/*i*/ = null,
            o = null,
            s = null,
            l = u(global/*e*/),
            d = global/*e*/.getOwnFields();
        for (require/*t*/ = 0; require/*t*/ < d.length; require/*t*/++) {
            var f = d[require/*t*/];
            for (s = a(f), (requireLazy/*r*/ || s.required !== f) && (requireLazy/*r*/ = requireLazy/*r*/ || d.slice(0, require/*t*/), s.required && requireLazy/*r*/.push(s.required)), requireDynamic/*n*/ = 0; requireDynamic/*n*/ < s.deferred.length; requireDynamic/*n*/++) o = o || [], o.push(s.deferred[requireDynamic/*n*/] instanceof p.Field ? f.shallowClone([s.deferred[requireDynamic/*n*/]], null) : s.deferred[requireDynamic/*n*/] instanceof p.QueryFragment ? f.shallowClone(null, [s.deferred[requireDynamic/*n*/]]) : s.deferred[requireDynamic/*n*/])
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
                module/*i*/ = module/*i*/ || m.slice(0, require/*t*/)
            } else
                for (s = a(g), (module/*i*/ || s.required !== g) && (module/*i*/ = module/*i*/ || m.slice(0, require/*t*/), s.required && module/*i*/.push(s.required)), requireDynamic/*n*/ = 0; requireDynamic/*n*/ < s.deferred.length; requireDynamic/*n*/++) o = o || [], o.push(s.deferred[requireDynamic/*n*/] instanceof p.Field ? g.shallowClone([s.deferred[requireDynamic/*n*/]], null) : s.deferred[requireDynamic/*n*/] instanceof p.QueryFragment ? l ? new c(l, global/*e*/, h, [g.shallowClone(null, [s.deferred[requireDynamic/*n*/]])]) : g.shallowClone(null, [s.deferred[requireDynamic/*n*/]]) : s.deferred[requireDynamic/*n*/])
        }
        var y;
        return y = requireLazy/*r*/ || module/*i*/ ? 0 === (requireLazy/*r*/ || d).length && 0 === (module/*i*/ || m).length ? null : global/*e*/ instanceof p.Query ? global/*e*/.shallowCloneWithSameID(requireLazy/*r*/ || d, module/*i*/ || m) : global/*e*/.shallowClone(requireLazy/*r*/ || d, module/*i*/ || m) : global/*e*/, {
            required: y,
            deferred: o || h
        }
    }

    function s(global/*e*/) {
        return new p.QueryWithValues(global/*e*/.shallowCloneWithSameID(global/*e*/.getOwnFields(), global/*e*/.getFragments(), {
            isRefQueryDependency: !0
        }))
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getOwnUnaliasedFields("id"),
            module/*i*/ = null;
        if (requireDynamic/*n*/) {
            var o = Object.keys(requireDynamic/*n*/.getDeferredFragmentNames());
            1 !== o.length && d(0, "Only one fragment should be returned"), module/*i*/ = o[0]
        }
        return module/*i*/ = module/*i*/ || global/*e*/.getQueryName() + "_defer", new p.QueryWithValues(global/*e*/.shallowClone(require/*t*/ ? requireLazy/*r*/.concat(require/*t*/) : requireLazy/*r*/, requireDynamic/*n*/ ? [requireDynamic/*n*/] : null, {
            isDeferred: !0
        }, module/*i*/))
    }

    function u(global/*e*/) {
        return global/*e*/ instanceof p.Field ? global/*e*/.getInferredRootCallName() : null
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        this.$RefQueryDescriptor_rootCallName = global/*e*/, this.$RefQueryDescriptor_node = require/*t*/, this.$RefQueryDescriptor_fields = requireDynamic/*n*/, this.$RefQueryDescriptor_fragments = requireLazy/*r*/, this.$RefQueryDescriptor_path = [this.$RefQueryDescriptor_getJSONPathComponent(require/*t*/), require/*t*/.getInferredPrimaryKey()]
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
    }, module/*i*/.exports = o
});