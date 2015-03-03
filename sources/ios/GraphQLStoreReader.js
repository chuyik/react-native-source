__d("GraphQLStoreReader",["DliteLog","DliteProfiler","GraphQLConstants","GraphQLRange","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","emptyFunction","merge"],function (global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/) {
        this.$GraphQLStoreReader_store = global/*e*/, DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, GraphQLConstants/*this.$GraphQLStoreReader_fragmentFilter*/ = requireDynamic/*DliteLog/*n*/*/ || g.thatReturnsTrue
    }

    function a(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = Object.keys(global/*e*/).sort().filter(u),
            requireLazy/*GraphQLStoreDataHandler/*r*/*/ = Object.keys(require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/).sort().filter(u);
        return requireDynamic/*DliteLog/*n*/*/.length !== requireLazy/*GraphQLStoreDataHandler/*r*/*/.length ? !1 : requireDynamic/*DliteLog/*n*/*/.every(function(requireDynamic/*DliteLog/*n*/*/, module/*GraphQLStoreRangeUtils/*i*/*/) {
            return requireLazy/*GraphQLStoreDataHandler/*r*/*/[module/*GraphQLStoreRangeUtils/*i*/*/] === requireDynamic/*DliteLog/*n*/*/ && s(global/*e*/[requireDynamic/*DliteLog/*n*/*/], require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[requireDynamic/*DliteLog/*n*/*/])
        })
    }

    function s(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) {
        return global/*e*/ === require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/ ? !0 : Array.isArray(global/*e*/) && Array.isArray(require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) && global/*e*/.length === require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.length && global/*e*/.every(function(global/*e*/, requireDynamic/*DliteLog/*n*/*/) {
            return global/*e*/ === require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[requireDynamic/*DliteLog/*n*/*/]
        })
    }

    function l(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) {
        for (var requireDynamic/*DliteLog/*n*/*/ = {}, requireLazy/*GraphQLStoreDataHandler/*r*/*/ = [], module/*GraphQLStoreRangeUtils/*i*/*/ = 0; module/*GraphQLStoreRangeUtils/*i*/*/ < global/*e*/.length; module/*GraphQLStoreRangeUtils/*i*/*/++) {
            var o = global/*e*/[module/*GraphQLStoreRangeUtils/*i*/*/];
            o.__dataID__ || (o = _(o), o.__dataID__ = "fakeEdge:" + module/*GraphQLStoreRangeUtils/*i*/*/), requireDynamic/*DliteLog/*n*/*/[o.__dataID__] = o, requireLazy/*GraphQLStoreDataHandler/*r*/*/.push(o)
        }
        var a = new h(requireDynamic/*DliteLog/*n*/*/);
        return a.addItems(require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, {}, requireLazy/*GraphQLStoreDataHandler/*r*/*/, {
            has_previous_page: !1,
            has_next_page: !1
        }), a
    }

    function u(global/*e*/) {
        return !f.isMetadataKey(global/*e*/)
    }
    var c = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("DliteLog"),
        p = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("DliteProfiler"),
        d = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("GraphQLConstants"),
        h = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("GraphQLRange"),
        f = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("GraphQLStoreDataHandler"),
        m = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("GraphQLStoreRangeUtils"),
        g = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("emptyFunction"),
        _ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/("merge"),
        y = d.CLIENT_SESSION_ID,
        v = d.EDGES,
        S = d.NODE,
        b = d.PAGE_INFO;
    o.prototype.retrieveData = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/) {
        return this.$GraphQLStoreReader_retrieveData(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, null, requireDynamic/*DliteLog/*n*/*/)
    }, o.prototype.$GraphQLStoreReader_retrieveData = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/) {
        var module/*GraphQLStoreRangeUtils/*i*/*/, o, a, s = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__dataID__;
        !s && require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__masked__ && (require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__masked__);
        var u = s && s in DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/ ? DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/[s] : {};
        if (null === u) return null;
        if (s && m.isRangeClientID(s)) {
            var c = m.parseRangeClientID(s);
            require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/ = this.$GraphQLStoreReader_store[c.dataID], o = c.calls, module/*GraphQLStoreRangeUtils/*i*/*/ = !0
        } else module/*GraphQLStoreRangeUtils/*i*/*/ = m.isRangeNode(global/*e*/), s && (require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/ = s in this.$GraphQLStoreReader_store ? this.$GraphQLStoreReader_store[s] : DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/[s]), module/*GraphQLStoreRangeUtils/*i*/*/ && (o = global/*e*/.getCalls());
        if (!require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) return require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/;
        if (module/*GraphQLStoreRangeUtils/*i*/*/) {
            if (0 === o.length) throw new Error("The field " + global/*e*/.getFieldName() + " is a range node, and thus expected to have a first() or last() filter call.");
            var p;
            require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__range__ ? p = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__range__ : !s && require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[v] && (p = l(require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[v], o)), p && (a = p.retrieveRangeInfoForQuery(o, {}, u))
        }
        var d;
        if (__DEV__ && (d = {}), requireDynamic/*DliteLog/*n*/*/ = this.$GraphQLStoreReader_traverseNode(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, u, a, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, d), requireDynamic/*DliteLog/*n*/*/ === requireLazy/*GraphQLStoreDataHandler/*r*/*/) requireDynamic/*DliteLog/*n*/*/.__status__ !== require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__status__ && (requireDynamic/*DliteLog/*n*/*/ = Object.assign({}, requireDynamic/*DliteLog/*n*/*/, {
            __status__: require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__status__
        }));
        else {
            var h = s && module/*GraphQLStoreRangeUtils/*i*/*/ && !m.isRangeClientID(s);
            requireDynamic/*DliteLog/*n*/*/.__dataID__ = h ? m.getClientIDForRangeWithID(global/*e*/, {}, s) : s, requireDynamic/*DliteLog/*n*/*/.__masked__ = s ? void 0 : require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/.__status__ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__status__
        }
        return requireDynamic/*DliteLog/*n*/*/
    }, o.prototype.$GraphQLStoreReader_traverseNode = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/, o, s) {
        return module/*GraphQLStoreRangeUtils/*i*/*/ = Object.assign({}, module/*GraphQLStoreRangeUtils/*i*/*/), global/*e*/.getOwnFields().forEach(function(global/*e*/) {
            __DEV__ && R(global/*e*/, s);
            var a = global/*e*/.getNameForClient(),
                l = this.$GraphQLStoreReader_retrieveSubfield(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/, o);
            void 0 !== l && (module/*GraphQLStoreRangeUtils/*i*/*/[a] = l)
        }.bind(this)), global/*e*/.getFragments().filter(GraphQLConstants/*this.$GraphQLStoreReader_fragmentFilter*/).forEach(function(global/*e*/) {
            module/*GraphQLStoreRangeUtils/*i*/*/ = this.$GraphQLStoreReader_traverseNode(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/, o, s)
        }.bind(this)), o && a(module/*GraphQLStoreRangeUtils/*i*/*/, o) && (module/*GraphQLStoreRangeUtils/*i*/*/ = o), module/*GraphQLStoreRangeUtils/*i*/*/
    }, o.prototype.$GraphQLStoreReader_retrieveSubfield = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/, o) {
        if (!global/*e*/.isGenerated()) {
            var a = global/*e*/.getFieldName(),
                s = global/*e*/.getNameForClient(),
                l = m.isRangeNode(global/*e*/),
                u = m.getStorageKeyForField(global/*e*/, {}),
                p = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[u],
                d = requireDynamic/*DliteLog/*n*/*/[u];
            return a === y ? requireLazy/*GraphQLStoreDataHandler/*r*/*/ ? requireLazy/*GraphQLStoreDataHandler/*r*/*/.sessionID : null : a === b ? requireLazy/*GraphQLStoreDataHandler/*r*/*/ ? this.$GraphQLStoreReader_retrieveData(global/*e*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/.pageInfo, module/*GraphQLStoreRangeUtils/*i*/*/ && module/*GraphQLStoreRangeUtils/*i*/*/[s], o && o[s]) : void 0 : a === v && requireLazy/*GraphQLStoreDataHandler/*r*/*/ ? this.$GraphQLStoreReader_retrieveRangeData(global/*e*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/, module/*GraphQLStoreRangeUtils/*i*/*/ && module/*GraphQLStoreRangeUtils/*i*/*/[s], o && o[s]) : null === p ? null : void 0 === p && void 0 === d ? void(!require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.__dataID__ && require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.hasOwnProperty(a) && c.warn("Data source has key '%s' but GraphQLStore expected '%s'.", a, u)) : Array.isArray(p) ? this.$GraphQLStoreReader_retrieveArrayData(global/*e*/, p, module/*GraphQLStoreRangeUtils/*i*/*/ && module/*GraphQLStoreRangeUtils/*i*/*/[s], o && o[s]) : global/*e*/.hasFields() ? this.$GraphQLStoreReader_retrieveData(global/*e*/, p || d, module/*GraphQLStoreRangeUtils/*i*/*/ && module/*GraphQLStoreRangeUtils/*i*/*/[s], o && o[s]) : l ? f.createPointerWithID(m.getClientIDForRangeWithID(global/*e*/, {}, p.__dataID__)) : void 0 !== d ? d : p
        }
    }, o.prototype.$GraphQLStoreReader_retrieveArrayData = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/) {
        for (var module/*GraphQLStoreRangeUtils/*i*/*/ = [], o = 0; o < require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.length; o++) {
            var a;
            a = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[o] && "object" == typeof require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[o] ? this.$GraphQLStoreReader_retrieveData(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[o], requireDynamic/*DliteLog/*n*/*/ && requireDynamic/*DliteLog/*n*/*/[o], requireLazy/*GraphQLStoreDataHandler/*r*/*/ && requireLazy/*GraphQLStoreDataHandler/*r*/*/[o]) : require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[o], module/*GraphQLStoreRangeUtils/*i*/*/.push(a)
        }
        return s(module/*GraphQLStoreRangeUtils/*i*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/) && (module/*GraphQLStoreRangeUtils/*i*/*/ = requireLazy/*GraphQLStoreDataHandler/*r*/*/), module/*GraphQLStoreRangeUtils/*i*/*/
    }, o.prototype.$GraphQLStoreReader_retrieveRangeData = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQLStoreDataHandler/*r*/*/) {
        for (var module/*GraphQLStoreRangeUtils/*i*/*/ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/.requestedEdges, o = 0, a = [], l = 0; l < module/*GraphQLStoreRangeUtils/*i*/*/.length; l++) {
            var u = module/*GraphQLStoreRangeUtils/*i*/*/[l];
            if (u) {
                var p = u[S].__dataID__;
                !p || null !== DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/[p] && (this.$GraphQLStoreReader_store[p] || DliteProfiler/*this.$GraphQLStoreReader_queuedStore*/[p]) ? (0 === u.__dataID__.indexOf("fakeEdge:") && delete u.__dataID__, a[o] = this.$GraphQLStoreReader_retrieveData(global/*e*/, u, requireDynamic/*DliteLog/*n*/*/ && requireDynamic/*DliteLog/*n*/*/[o], requireLazy/*GraphQLStoreDataHandler/*r*/*/ && requireLazy/*GraphQLStoreDataHandler/*r*/*/[o]), o++) : c.warn("dataID %s has no data, but is still referenced in range", p)
            } else c.warn("Received a null edge from the range")
        }
        return s(a, requireLazy/*GraphQLStoreDataHandler/*r*/*/) && (a = requireLazy/*GraphQLStoreDataHandler/*r*/*/), a
    }, p.instrumentMethods(o.prototype, {
        retrieveData: "GraphQLStoreReader.retrieveData"
    });
    var R;
    __DEV__ && (R = function(global/*e*/, require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = global/*e*/.getNameForClient(),
            requireLazy/*GraphQLStoreDataHandler/*r*/*/ = global/*e*/.getGeneratedAlias(),
            module/*GraphQLStoreRangeUtils/*i*/*/ = require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[requireDynamic/*DliteLog/*n*/*/];
        module/*GraphQLStoreRangeUtils/*i*/*/ ? module/*GraphQLStoreRangeUtils/*i*/*/ !== requireLazy/*GraphQLStoreDataHandler/*r*/*/ && console.error("`%s` is used as an alias twice. Please rename one of them.", requireDynamic/*DliteLog/*n*/*/) : require/*exports/*GraphQLRange/*emptyFunction/*merge/*t*/*/*/*/*/[requireDynamic/*DliteLog/*n*/*/] = requireLazy/*GraphQLStoreDataHandler/*r*/*/
    }), module/*GraphQLStoreRangeUtils/*i*/*/.exports = o
});