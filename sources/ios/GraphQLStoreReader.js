__d("GraphQLStoreReader",["DliteLog","DliteProfiler","GraphQLConstants","GraphQLRange","GraphQLStoreDataHandler","GraphQLStoreRangeUtils","emptyFunction","merge"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        this.$GraphQLStoreReader_store = e, this.$GraphQLStoreReader_queuedStore = t, this.$GraphQLStoreReader_fragmentFilter = n || emptyFunction/*g*/.thatReturnsTrue
    }

    function a(e, t) {
        var n = Object.keys(e).sort().filter(u),
            r = Object.keys(t).sort().filter(u);
        return n.length !== r.length ? !1 : n.every(function(n, i) {
            return r[i] === n && s(e[n], t[n])
        })
    }

    function s(e, t) {
        return e === t ? !0 : Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
            return e === t[n]
        })
    }

    function l(e, t) {
        for (var n = {}, r = [], i = 0; i < e.length; i++) {
            var o = e[i];
            o.__dataID__ || (o = merge/*_*/(o), o.__dataID__ = "fakeEdge:" + i), n[o.__dataID__] = o, r.push(o)
        }
        var a = new GraphQLRange/*h*/(n);
        return a.addItems(t, {}, r, {
            has_previous_page: !1,
            has_next_page: !1
        }), a
    }

    function u(e) {
        return !GraphQLStoreDataHandler/*f*/.isMetadataKey(e)
    }
    var DliteLog/*c*/ = t("DliteLog"),
        DliteProfiler/*p*/ = t("DliteProfiler"),
        GraphQLConstants/*d*/ = t("GraphQLConstants"),
        GraphQLRange/*h*/ = t("GraphQLRange"),
        GraphQLStoreDataHandler/*f*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreRangeUtils/*m*/ = t("GraphQLStoreRangeUtils"),
        emptyFunction/*g*/ = t("emptyFunction"),
        merge/*_*/ = t("merge"),
        y = GraphQLConstants/*d*/.CLIENT_SESSION_ID,
        v = GraphQLConstants/*d*/.EDGES,
        S = GraphQLConstants/*d*/.NODE,
        b = GraphQLConstants/*d*/.PAGE_INFO;
    o.prototype.retrieveData = function(e, t, n) {
        return this.$GraphQLStoreReader_retrieveData(e, t, null, n)
    }, o.prototype.$GraphQLStoreReader_retrieveData = function(e, t, n, r) {
        var i, o, a, s = t.__dataID__;
        !s && t.__masked__ && (t = t.__masked__);
        var u = s && s in this.$GraphQLStoreReader_queuedStore ? this.$GraphQLStoreReader_queuedStore[s] : {};
        if (null === u) return null;
        if (s && GraphQLStoreRangeUtils/*m*/.isRangeClientID(s)) {
            var DliteLog/*c*/ = GraphQLStoreRangeUtils/*m*/.parseRangeClientID(s);
            t = this.$GraphQLStoreReader_store[DliteLog/*c*/.dataID], o = DliteLog/*c*/.calls, i = !0
        } else i = GraphQLStoreRangeUtils/*m*/.isRangeNode(e), s && (t = s in this.$GraphQLStoreReader_store ? this.$GraphQLStoreReader_store[s] : this.$GraphQLStoreReader_queuedStore[s]), i && (o = e.getCalls());
        if (!t) return t;
        if (i) {
            if (0 === o.length) throw new Error("The field " + e.getFieldName() + " is a range node, and thus expected to have a first() or last() filter call.");
            var DliteProfiler/*p*/;
            t.__range__ ? DliteProfiler/*p*/ = t.__range__ : !s && t[v] && (DliteProfiler/*p*/ = l(t[v], o)), DliteProfiler/*p*/ && (a = DliteProfiler/*p*/.retrieveRangeInfoForQuery(o, {}, u))
        }
        var GraphQLConstants/*d*/;
        if (__DEV__ && (GraphQLConstants/*d*/ = {}), n = this.$GraphQLStoreReader_traverseNode(e, t, u, a, n, r, GraphQLConstants/*d*/), n === r) n.__status__ !== t.__status__ && (n = Object.assign({}, n, {
            __status__: t.__status__
        }));
        else {
            var GraphQLRange/*h*/ = s && i && !GraphQLStoreRangeUtils/*m*/.isRangeClientID(s);
            n.__dataID__ = GraphQLRange/*h*/ ? GraphQLStoreRangeUtils/*m*/.getClientIDForRangeWithID(e, {}, s) : s, n.__masked__ = s ? void 0 : t, n.__status__ = t.__status__
        }
        return n
    }, o.prototype.$GraphQLStoreReader_traverseNode = function(e, t, n, r, i, o, s) {
        return i = Object.assign({}, i), e.getOwnFields().forEach(function(e) {
            __DEV__ && R(e, s);
            var a = e.getNameForClient(),
                l = this.$GraphQLStoreReader_retrieveSubfield(e, t, n, r, i, o);
            void 0 !== l && (i[a] = l)
        }.bind(this)), e.getFragments().filter(this.$GraphQLStoreReader_fragmentFilter).forEach(function(e) {
            i = this.$GraphQLStoreReader_traverseNode(e, t, n, r, i, o, s)
        }.bind(this)), o && a(i, o) && (i = o), i
    }, o.prototype.$GraphQLStoreReader_retrieveSubfield = function(e, t, n, r, i, o) {
        if (!e.isGenerated()) {
            var a = e.getFieldName(),
                s = e.getNameForClient(),
                l = GraphQLStoreRangeUtils/*m*/.isRangeNode(e),
                u = GraphQLStoreRangeUtils/*m*/.getStorageKeyForField(e, {}),
                DliteProfiler/*p*/ = t[u],
                GraphQLConstants/*d*/ = n[u];
            return a === y ? r ? r.sessionID : null : a === b ? r ? this.$GraphQLStoreReader_retrieveData(e, r.pageInfo, i && i[s], o && o[s]) : void 0 : a === v && r ? this.$GraphQLStoreReader_retrieveRangeData(e, r, i && i[s], o && o[s]) : null === DliteProfiler/*p*/ ? null : void 0 === DliteProfiler/*p*/ && void 0 === GraphQLConstants/*d*/ ? void(!t.__dataID__ && t.hasOwnProperty(a) && DliteLog/*c*/.warn("Data source has key '%s' but GraphQLStore expected '%s'.", a, u)) : Array.isArray(DliteProfiler/*p*/) ? this.$GraphQLStoreReader_retrieveArrayData(e, DliteProfiler/*p*/, i && i[s], o && o[s]) : e.hasFields() ? this.$GraphQLStoreReader_retrieveData(e, DliteProfiler/*p*/ || GraphQLConstants/*d*/, i && i[s], o && o[s]) : l ? GraphQLStoreDataHandler/*f*/.createPointerWithID(GraphQLStoreRangeUtils/*m*/.getClientIDForRangeWithID(e, {}, DliteProfiler/*p*/.__dataID__)) : void 0 !== GraphQLConstants/*d*/ ? GraphQLConstants/*d*/ : DliteProfiler/*p*/
        }
    }, o.prototype.$GraphQLStoreReader_retrieveArrayData = function(e, t, n, r) {
        for (var i = [], o = 0; o < t.length; o++) {
            var a;
            a = t[o] && "object" == typeof t[o] ? this.$GraphQLStoreReader_retrieveData(e, t[o], n && n[o], r && r[o]) : t[o], i.push(a)
        }
        return s(i, r) && (i = r), i
    }, o.prototype.$GraphQLStoreReader_retrieveRangeData = function(e, t, n, r) {
        for (var i = t.requestedEdges, o = 0, a = [], l = 0; l < i.length; l++) {
            var u = i[l];
            if (u) {
                var DliteProfiler/*p*/ = u[S].__dataID__;
                !DliteProfiler/*p*/ || null !== this.$GraphQLStoreReader_queuedStore[DliteProfiler/*p*/] && (this.$GraphQLStoreReader_store[DliteProfiler/*p*/] || this.$GraphQLStoreReader_queuedStore[DliteProfiler/*p*/]) ? (0 === u.__dataID__.indexOf("fakeEdge:") && delete u.__dataID__, a[o] = this.$GraphQLStoreReader_retrieveData(e, u, n && n[o], r && r[o]), o++) : DliteLog/*c*/.warn("dataID %s has no data, but is still referenced in range", DliteProfiler/*p*/)
            } else DliteLog/*c*/.warn("Received a null edge from the range")
        }
        return s(a, r) && (a = r), a
    }, DliteProfiler/*p*/.instrumentMethods(o.prototype, {
        retrieveData: "GraphQLStoreReader.retrieveData"
    });
    var R;
    __DEV__ && (R = function(e, t) {
        var n = e.getNameForClient(),
            r = e.getGeneratedAlias(),
            i = t[n];
        i ? i !== r && console.error("`%s` is used as an alias twice. Please rename one of them.", n) : t[n] = r
    }), i.exports = o
});