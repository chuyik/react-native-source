__d("GraphQLStoreReader",["DliteLog","DliteProfiler","GraphQLConstants","GraphQLRange","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","emptyFunction","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.$GraphQLStoreReader_store = global/*e*/, this.$GraphQLStoreReader_queuedStore = require/*t*/, this.$GraphQLStoreReader_fragmentFilter = requireDynamic/*n*/ || g.thatReturnsTrue
    }

    function a(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Object.keys(global/*e*/).sort().filter(u),
            requireLazy/*r*/ = Object.keys(require/*t*/).sort().filter(u);
        return requireDynamic/*n*/.length !== requireLazy/*r*/.length ? !1 : requireDynamic/*n*/.every(function(requireDynamic/*n*/, module/*i*/) {
            return requireLazy/*r*/[module/*i*/] === requireDynamic/*n*/ && s(global/*e*/[requireDynamic/*n*/], require/*t*/[requireDynamic/*n*/])
        })
    }

    function s(global/*e*/, require/*t*/) {
        return global/*e*/ === require/*t*/ ? !0 : Array.isArray(global/*e*/) && Array.isArray(require/*t*/) && global/*e*/.length === require/*t*/.length && global/*e*/.every(function(global/*e*/, requireDynamic/*n*/) {
            return global/*e*/ === require/*t*/[requireDynamic/*n*/]
        })
    }

    function l(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = {}, requireLazy/*r*/ = [], module/*i*/ = 0; module/*i*/ < global/*e*/.length; module/*i*/++) {
            var o = global/*e*/[module/*i*/];
            o.__dataID__ || (o = _(o), o.__dataID__ = "fakeEdge:" + module/*i*/), requireDynamic/*n*/[o.__dataID__] = o, requireLazy/*r*/.push(o)
        }
        var a = new h(requireDynamic/*n*/);
        return a.addItems(require/*t*/, {}, requireLazy/*r*/, {
            has_previous_page: !1,
            has_next_page: !1
        }), a
    }

    function u(global/*e*/) {
        return !f.isMetadataKey(global/*e*/)
    }
    var c = require/*t*/("DliteLog"),
        p = require/*t*/("DliteProfiler"),
        d = require/*t*/("GraphQLConstants"),
        h = require/*t*/("GraphQLRange"),
        f = require/*t*/("GraphQLStoreDataHandler"),
        m = require/*t*/("GraphQLStoreRangeUtils"),
        g = require/*t*/("emptyFunction"),
        _ = require/*t*/("merge"),
        y = d.CLIENT_SESSION_ID,
        v = d.EDGES,
        S = d.NODE,
        b = d.PAGE_INFO;
    o.prototype.retrieveData = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return this.$GraphQLStoreReader_retrieveData(global/*e*/, require/*t*/, null, requireDynamic/*n*/)
    }, o.prototype.$GraphQLStoreReader_retrieveData = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/, o, a, s = require/*t*/.__dataID__;
        !s && require/*t*/.__masked__ && (require/*t*/ = require/*t*/.__masked__);
        var u = s && s in this.$GraphQLStoreReader_queuedStore ? this.$GraphQLStoreReader_queuedStore[s] : {};
        if (null === u) return null;
        if (s && m.isRangeClientID(s)) {
            var c = m.parseRangeClientID(s);
            require/*t*/ = this.$GraphQLStoreReader_store[c.dataID], o = c.calls, module/*i*/ = !0
        } else module/*i*/ = m.isRangeNode(global/*e*/), s && (require/*t*/ = s in this.$GraphQLStoreReader_store ? this.$GraphQLStoreReader_store[s] : this.$GraphQLStoreReader_queuedStore[s]), module/*i*/ && (o = global/*e*/.getCalls());
        if (!require/*t*/) return require/*t*/;
        if (module/*i*/) {
            if (0 === o.length) throw new Error("The field " + global/*e*/.getFieldName() + " is a range node, and thus expected to have a first() or last() filter call.");
            var p;
            require/*t*/.__range__ ? p = require/*t*/.__range__ : !s && require/*t*/[v] && (p = l(require/*t*/[v], o)), p && (a = p.retrieveRangeInfoForQuery(o, {}, u))
        }
        var d;
        if (__DEV__ && (d = {}), requireDynamic/*n*/ = this.$GraphQLStoreReader_traverseNode(global/*e*/, require/*t*/, u, a, requireDynamic/*n*/, requireLazy/*r*/, d), requireDynamic/*n*/ === requireLazy/*r*/) requireDynamic/*n*/.__status__ !== require/*t*/.__status__ && (requireDynamic/*n*/ = Object.assign({}, requireDynamic/*n*/, {
            __status__: require/*t*/.__status__
        }));
        else {
            var h = s && module/*i*/ && !m.isRangeClientID(s);
            requireDynamic/*n*/.__dataID__ = h ? m.getClientIDForRangeWithID(global/*e*/, {}, s) : s, requireDynamic/*n*/.__masked__ = s ? void 0 : require/*t*/, requireDynamic/*n*/.__status__ = require/*t*/.__status__
        }
        return requireDynamic/*n*/
    }, o.prototype.$GraphQLStoreReader_traverseNode = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, s) {
        return module/*i*/ = Object.assign({}, module/*i*/), global/*e*/.getOwnFields().forEach(function(global/*e*/) {
            __DEV__ && R(global/*e*/, s);
            var a = global/*e*/.getNameForClient(),
                l = this.$GraphQLStoreReader_retrieveSubfield(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o);
            void 0 !== l && (module/*i*/[a] = l)
        }.bind(this)), global/*e*/.getFragments().filter(this.$GraphQLStoreReader_fragmentFilter).forEach(function(global/*e*/) {
            module/*i*/ = this.$GraphQLStoreReader_traverseNode(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, s)
        }.bind(this)), o && a(module/*i*/, o) && (module/*i*/ = o), module/*i*/
    }, o.prototype.$GraphQLStoreReader_retrieveSubfield = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
        if (!global/*e*/.isGenerated()) {
            var a = global/*e*/.getFieldName(),
                s = global/*e*/.getNameForClient(),
                l = m.isRangeNode(global/*e*/),
                u = m.getStorageKeyForField(global/*e*/, {}),
                p = require/*t*/[u],
                d = requireDynamic/*n*/[u];
            return a === y ? requireLazy/*r*/ ? requireLazy/*r*/.sessionID : null : a === b ? requireLazy/*r*/ ? this.$GraphQLStoreReader_retrieveData(global/*e*/, requireLazy/*r*/.pageInfo, module/*i*/ && module/*i*/[s], o && o[s]) : void 0 : a === v && requireLazy/*r*/ ? this.$GraphQLStoreReader_retrieveRangeData(global/*e*/, requireLazy/*r*/, module/*i*/ && module/*i*/[s], o && o[s]) : null === p ? null : void 0 === p && void 0 === d ? void(!require/*t*/.__dataID__ && require/*t*/.hasOwnProperty(a) && c.warn("Data source has key '%s' but GraphQLStore expected '%s'.", a, u)) : Array.isArray(p) ? this.$GraphQLStoreReader_retrieveArrayData(global/*e*/, p, module/*i*/ && module/*i*/[s], o && o[s]) : global/*e*/.hasFields() ? this.$GraphQLStoreReader_retrieveData(global/*e*/, p || d, module/*i*/ && module/*i*/[s], o && o[s]) : l ? f.createPointerWithID(m.getClientIDForRangeWithID(global/*e*/, {}, p.__dataID__)) : void 0 !== d ? d : p
        }
    }, o.prototype.$GraphQLStoreReader_retrieveArrayData = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        for (var module/*i*/ = [], o = 0; o < require/*t*/.length; o++) {
            var a;
            a = require/*t*/[o] && "object" == typeof require/*t*/[o] ? this.$GraphQLStoreReader_retrieveData(global/*e*/, require/*t*/[o], requireDynamic/*n*/ && requireDynamic/*n*/[o], requireLazy/*r*/ && requireLazy/*r*/[o]) : require/*t*/[o], module/*i*/.push(a)
        }
        return s(module/*i*/, requireLazy/*r*/) && (module/*i*/ = requireLazy/*r*/), module/*i*/
    }, o.prototype.$GraphQLStoreReader_retrieveRangeData = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        for (var module/*i*/ = require/*t*/.requestedEdges, o = 0, a = [], l = 0; l < module/*i*/.length; l++) {
            var u = module/*i*/[l];
            if (u) {
                var p = u[S].__dataID__;
                !p || null !== this.$GraphQLStoreReader_queuedStore[p] && (this.$GraphQLStoreReader_store[p] || this.$GraphQLStoreReader_queuedStore[p]) ? (0 === u.__dataID__.indexOf("fakeEdge:") && delete u.__dataID__, a[o] = this.$GraphQLStoreReader_retrieveData(global/*e*/, u, requireDynamic/*n*/ && requireDynamic/*n*/[o], requireLazy/*r*/ && requireLazy/*r*/[o]), o++) : c.warn("dataID %s has no data, but is still referenced in range", p)
            } else c.warn("Received a null edge from the range")
        }
        return s(a, requireLazy/*r*/) && (a = requireLazy/*r*/), a
    }, p.instrumentMethods(o.prototype, {
        retrieveData: "GraphQLStoreReader.retrieveData"
    });
    var R;
    __DEV__ && (R = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.getNameForClient(),
            requireLazy/*r*/ = global/*e*/.getGeneratedAlias(),
            module/*i*/ = require/*t*/[requireDynamic/*n*/];
        module/*i*/ ? module/*i*/ !== requireLazy/*r*/ && console.error("`%s` is used as an alias twice. Please rename one of them.", requireDynamic/*n*/) : require/*t*/[requireDynamic/*n*/] = requireLazy/*r*/
    }), module/*i*/.exports = o
});