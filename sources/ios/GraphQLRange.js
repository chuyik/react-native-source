__d("GraphQLRange",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLMutatorConstants","GraphQLSegment","GraphQLStoreDataHandler","invariant","merge"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        for (var n = {}, r = 0; r < e.length; r++) {
            var i = e[r].getName(),
                o = e[r].getArgs();
            if (o.length) {
                var a = o[0] instanceof GraphQL_EXPERIMENTAL/*f*/.CallVariable ? t[o[0].getCallVariableName()] : o[0].getCallValue();
                if (null === a) continue;
                n[i] = a
            }
        }
        return n.first ? (isNaN(n.first) && invariant/*y*/(0, "Argument for first query must be a number"), n.first = +n.first) : n.last && (isNaN(n.last) && invariant/*y*/(0, "Argument for last query must be a number"), n.last = +n.last), n.client_session && (isNaN(n.client_session) && invariant/*y*/(0, "Argument for sessionID call must be a number"), n.client_session = +n.client_session), n
    }

    function a(e) {
        return e.hasOwnProperty("surrounds") || e.hasOwnProperty("find")
    }

    function s(e) {
        var t = e.hasOwnProperty("first"),
            n = e.hasOwnProperty("last");
        return (t || n) && !(t && n)
    }

    function l(e) {
        return e.hasOwnProperty("first") && e.first > 0 || e.hasOwnProperty("last") && e.last > 0
    }

    function u(e) {
        void 0 === GraphQLStoreDataHandler/*_*/.getID(e) && invariant/*y*/(0, "GraphQLStore: `edge` must have a data id"), void 0 === e.node && invariant/*y*/(0, "GraphQLStore: `edge` must have `node` field")
    }

    function c(e) {
        e.forEach(u)
    }

    function p(e) {
        this.$GraphQLRange_dataStore = e, this.reset()
    }

    function d(e, t) {
        return e.map(function(e) {
            return e.toString(t)
        }).join(",")
    }
    var DliteLog/*h*/ = t("DliteLog"),
        GraphQL_EXPERIMENTAL/*f*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLMutatorConstants/*m*/ = t("GraphQLMutatorConstants"),
        GraphQLSegment/*g*/ = t("GraphQLSegment"),
        GraphQLStoreDataHandler/*_*/ = t("GraphQLStoreDataHandler"),
        invariant/*y*/ = t("invariant"),
        merge/*v*/ = t("merge"),
        S = {
            start_cursor: void 0,
            end_cursor: void 0,
            has_next_page: !1,
            has_previous_page: !1
        },
        b = 1e3;
    p.prototype.setDataStore = function(e) {
        this.$GraphQLRange_dataStore = e
    }, p.prototype.reset = function() {
        this.$GraphQLRange_orderedSegments = [new GraphQLSegment/*g*/, new GraphQLSegment/*g*/], this.$GraphQLRange_staticQueriesMap = {}, this.$GraphQLRange_hasFirst = !1, this.$GraphQLRange_hasLast = !1, this.$GraphQLRange_sessionID = b
    }, p.prototype.$GraphQLRange_resetSegment = function(e) {
        e >= 0 && e < this.$GraphQLRange_orderedSegments.length || invariant/*y*/(0, "cannot reset non-existent segment"), this.$GraphQLRange_orderedSegments[e] = new GraphQLSegment/*g*/(this.$GraphQLRange_orderedSegments[e].getSessionID())
    }, p.prototype.$GraphQLRange_getSegmentIndexByCursor = function(e) {
        for (var t = 0; t < this.$GraphQLRange_orderedSegments.length; t++)
            if (this.$GraphQLRange_orderedSegments[t].containsEdgeWithCursor(e)) return t;
        return null
    }, p.prototype.$GraphQLRange_getSegmentIndexByID = function(e) {
        for (var t = 0; t < this.$GraphQLRange_orderedSegments.length; t++)
            if (this.$GraphQLRange_orderedSegments[t].containsEdgeWithID(e)) return t;
        return null
    }, p.prototype.$GraphQLRange_addStaticEdges = function(e, t, n) {
        for (var r = d(e, t), i = [], o = [], a = 0; a < n.length; a++) {
            var s = n[a];
            i.push(GraphQLStoreDataHandler/*_*/.getID(s)), o.push(s.cursor)
        }
        this.$GraphQLRange_staticQueriesMap[r] = {
            edgeIDs: i,
            cursors: o
        }
    }, p.prototype.addItems = function(e, t, n, r) {
        c(n);
        var i, l, u = o(e, t);
        return a(u) ? void this.$GraphQLRange_addStaticEdges(e, t, n) : s(u) ? null === u.before || null === u.after ? void console.error("GraphQLRange received null as a cursor.") : (this.$GraphQLRange_sessionID++, void(u.first ? u.before && !u.after ? r.has_next_page === !0 ? (0 === this.$GraphQLRange_getSegmentIndexByCursor(u.before) && this.$GraphQLRange_orderedSegments.unshift(new GraphQLSegment/*g*/(this.$GraphQLRange_sessionID)), this.$GraphQLRange_addAfterFirstItems(n, r.has_next_page, void 0, u.before, null)) : this.$GraphQLRange_addBeforeLastItems(n, r.has_previous_page, u.before, void 0, this.$GraphQLRange_sessionID) : (u.after || (l = 0, i = this.getFirstSegment().getCount(), i && (u.first > i || n.length > i) && !this.getFirstSegment().getFirstCursor() && this.$GraphQLRange_resetSegment(l)), this.$GraphQLRange_addAfterFirstItems(n, r.has_next_page, u.after, u.before, null)) : u.last && (u.after && !u.before ? r.has_previous_page === !0 ? (this.$GraphQLRange_getSegmentIndexByCursor(u.after) === this.$GraphQLRange_orderedSegments.length - 1 && this.$GraphQLRange_orderedSegments.push(new GraphQLSegment/*g*/(this.$GraphQLRange_sessionID)), this.$GraphQLRange_addBeforeLastItems(n, r.has_previous_page, void 0, u.after, null)) : this.$GraphQLRange_addAfterFirstItems(n, r.has_next_page, u.after, void 0, this.$GraphQLRange_sessionID) : (u.before || (l = this.$GraphQLRange_orderedSegments.length - 1, i = this.getLastSegment().getCount(), i && (u.last > i || n.length > i) && !this.getLastSegment().getLastCursor() && this.$GraphQLRange_resetSegment(l)), this.$GraphQLRange_addBeforeLastItems(n, r.has_previous_page, u.before, u.after, null))))) : void console.error("GraphQLRange currently only handles first(<count>), after(<cursor>).first(<count>), last(<count>), before(<cursor>).last(<count>), before(<cursor>).first(<count>), and after(<cursor>).last(<count>)")
    }, p.prototype.getFirstSegment = function() {
        return this.$GraphQLRange_orderedSegments[0]
    }, p.prototype.getLastSegment = function() {
        return this.$GraphQLRange_orderedSegments[this.$GraphQLRange_orderedSegments.length - 1]
    }, p.prototype.$GraphQLRange_concatSegments = function(e) {
        e + 1 < this.$GraphQLRange_orderedSegments.length && e >= 0 || invariant/*y*/(0, "GraphQLRange cannot concat segments outside the range of orderedSegments");
        var t = this.$GraphQLRange_orderedSegments[e],
            n = this.$GraphQLRange_orderedSegments[e + 1];
        t.concatSegment(n) ? this.$GraphQLRange_orderedSegments.splice(e + 1, 1) : console.error("GraphQLRange was unable to concat segment %d and segment %d", e, e + 1)
    }, p.prototype.prependEdge = function(e) {
        u(e), this.$GraphQLRange_sessionID++, this.$GraphQLRange_hasFirst = !0;
        var t = this.getFirstSegment();
        this.$GraphQLRange_removeEdgeIfApplicable(e, this.$GraphQLRange_sessionID), t.prependEdge(e, this.$GraphQLRange_sessionID)
    }, p.prototype.appendEdge = function(e) {
        u(e), this.$GraphQLRange_sessionID++, this.$GraphQLRange_hasLast = !0;
        var t = this.getLastSegment();
        this.$GraphQLRange_removeEdgeIfApplicable(e, this.$GraphQLRange_sessionID), t.appendEdge(e, this.$GraphQLRange_sessionID)
    }, p.prototype.$GraphQLRange_removeEdgeIfApplicable = function(e, t) {
        var n = GraphQLStoreDataHandler/*_*/.getID(e),
            r = this.$GraphQLRange_getSegmentIndexByID(n);
        null != r && this.$GraphQLRange_orderedSegments[r].removeEdge(n, t)
    }, p.prototype.$GraphQLRange_removeEdgesIfApplicable = function(e, t) {
        for (var n = 0; n < e.length; n++) this.$GraphQLRange_removeEdgeIfApplicable(e[n], t ? t : b)
    }, p.prototype.$GraphQLRange_addAfterFirstItems = function(e, t, n, r, i) {
        var o, a, s;
        if (void 0 !== n) {
            if (a = this.$GraphQLRange_getSegmentIndexByCursor(n), null == a) return void console.error("GraphQLRange cannot find a segment that has the cursor: " + n);
            if (o = this.$GraphQLRange_orderedSegments[a], s = o.getLastCursor(), s !== n && (e = this.$GraphQLRange_reconcileAfterFirstEdges(o, e, n), n = s, !e)) return
        } else if (a = 0, o = this.$GraphQLRange_orderedSegments[a], s = o.getLastCursor(), void 0 !== s && (e = this.$GraphQLRange_reconcileAfterFirstEdges(o, e), n = s, !e)) return;
        if (void 0 !== r) {
            if (a === this.$GraphQLRange_orderedSegments.length - 1) return void console.error("GraphQLRange cannot add because there is no next segment");
            if (this.$GraphQLRange_orderedSegments[a + 1].getFirstCursor() !== r) return void console.error("GraphQLRange cannot add because beforeCursor does not match first cursor of the next segment")
        }
        void 0 === n && (this.$GraphQLRange_hasFirst = !0), i = i || o.getSessionID(), this.$GraphQLRange_removeEdgesIfApplicable(e, i), o.addEdgesAfterCursor(e, n, i), t || (void 0 !== r ? this.$GraphQLRange_concatSegments(a) : (this.$GraphQLRange_hasLast = !0, this.$GraphQLRange_orderedSegments.splice(a + 1, this.$GraphQLRange_orderedSegments.length - 1 - a)))
    }, p.prototype.$GraphQLRange_reconcileAfterFirstEdges = function(e, t, n) {
        var r = e.getMetadataAfterCursor(t.length + 1, n),
            i = r.edgeIDs;
        if (i.length > t.length) return void 0;
        for (var o = 0; o < i.length; o++)
            if (i[o] !== GraphQLStoreDataHandler/*_*/.getID(t[o])) return void DliteLog/*h*/.warn("GraphQLRange cannot reconcile input because there is an id mismatch at index %s", o);
        return t.slice(i.length)
    }, p.prototype.$GraphQLRange_addBeforeLastItems = function(e, t, n, r, i) {
        var o, a, s;
        if (void 0 !== n) {
            if (a = this.$GraphQLRange_getSegmentIndexByCursor(n), null == a) return void console.error("GraphQLRange cannot find a segment that has the cursor: " + n);
            if (o = this.$GraphQLRange_orderedSegments[a], s = o.getFirstCursor(), s !== n && (e = this.$GraphQLRange_reconcileBeforeLastEdges(o, e, n), n = s, !e)) return
        } else if (a = this.$GraphQLRange_orderedSegments.length - 1, o = this.$GraphQLRange_orderedSegments[a], s = o.getFirstCursor(), void 0 !== s && (e = this.$GraphQLRange_reconcileBeforeLastEdges(o, e, n), n = s, !e)) return;
        if (void 0 !== r) {
            if (0 === a) return void console.error("GraphQLRange cannot add because there is no previous segment");
            if (this.$GraphQLRange_orderedSegments[a - 1].getLastCursor() !== r) return void console.error("GraphQLRange cannot add because afterCursor does not match last cursor of the previous segment")
        }
        void 0 === n && (this.$GraphQLRange_hasLast = !0), i = i || o.getSessionID(), this.$GraphQLRange_removeEdgesIfApplicable(e, i), o.addEdgesBeforeCursor(e, n, i), t || (void 0 !== r ? this.$GraphQLRange_concatSegments(a - 1) : (this.$GraphQLRange_hasFirst = !0, this.$GraphQLRange_orderedSegments.splice(0, a)))
    }, p.prototype.$GraphQLRange_reconcileBeforeLastEdges = function(e, t, n) {
        var r = e.getMetadataBeforeCursor(t.length + 1, n),
            i = r.edgeIDs;
        if (i.length > t.length) return void 0;
        for (var o = 1; o <= i.length; o++)
            if (i[i.length - o] !== GraphQLStoreDataHandler/*_*/.getID(t[t.length - o])) return void DliteLog/*h*/.warn("GraphQLRange cannot reconcile input because there is an id mismatch at index %s", o);
        return t.slice(0, t.length - i.length)
    }, p.prototype.removeEdgeWithID = function(e) {
        for (var t = 0; t < this.$GraphQLRange_orderedSegments.length; t++) this.$GraphQLRange_orderedSegments[t].removeAllEdges(e, b)
    }, p.prototype.retrieveRangeInfoForQuery = function(e, t, n) {
        var r = o(e, t);
        return a(r) ? this.$GraphQLRange_retrieveRangeInfoForStaticCalls(e, t) : s(r) ? r.first && r.before || r.last && r.after ? (console.error("GraphQLRange does not currently handle retrieval for before(<cursor>).first(<count>) and after(<cursor>).last(<count>)"), {
            requestedEdges: [],
            diffCalls: [],
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        }) : l(r) ? r.first ? this.$GraphQLRange_retrieveRangeInfoForFirstQuery(e, t, n) : r.last ? this.$GraphQLRange_retrieveRangeInfoForLastQuery(e, t, n) : void 0 : (console.error("GraphQLRange only supports first(<count>) or last(<count>) where count is greater than 0"), {
            requestedEdges: [],
            diffCalls: [],
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        }) : (console.error("GraphQLRange currently only handles first(<count>), after(<cursor>).first(<count>), last(<count>), before(<cursor>).last(<count>), before(<cursor>).first(<count>), and after(<cursor>).last(<count>)"), {
            requestedEdges: [],
            diffCalls: [],
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        })
    }, p.prototype.$GraphQLRange_getEdgeByID = function(e) {
        return this.$GraphQLRange_dataStore[e]
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForStaticCalls = function(e, t) {
        var n = d(e, t),
            r = this.$GraphQLRange_staticQueriesMap[n];
        if (r) {
            var i = {
                has_next_page: !0,
                has_previous_page: !0
            };
            return i.start_cursor = r.cursors[0], i.end_cursor = r.cursors[r.cursors.length - 1], {
                requestedEdges: r.edgeIDs.map(this.$GraphQLRange_getEdgeByID, this),
                diffCalls: [],
                pageInfo: i,
                sessionID: this.$GraphQLRange_sessionID
            }
        }
        return {
            requestedEdges: [],
            diffCalls: e,
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForFirstQuery = function(e, t, n) {
        var r = [],
            i = [];
        n && (r = n[GraphQLMutatorConstants/*m*/.PREPEND] || [], i = n[GraphQLMutatorConstants/*m*/.REMOVE] || []);
        var a, s, l = o(e, t),
            u = l.first + i.length,
            c = merge/*v*/(S);
        c.sessionID = this.$GraphQLRange_sessionID;
        var p = l.client_session ? l.client_session : null,
            d = l.after;
        if (void 0 !== d) {
            if (s = this.$GraphQLRange_getSegmentIndexByCursor(d), null == s) return console.error("GraphQLRange cannot find a segment that has the cursor: " + d), {
                requestedEdges: [],
                diffCalls: [],
                pageInfo: c,
                sessionID: this.$GraphQLRange_sessionID
            };
            a = this.$GraphQLRange_orderedSegments[s]
        } else {
            var DliteLog/*h*/ = r.length;
            if (u -= DliteLog/*h*/, s = 0, a = this.$GraphQLRange_orderedSegments[s], p)
                for (; s < this.$GraphQLRange_orderedSegments.length - 1 && a.getSessionID() > p;) s++, a = this.$GraphQLRange_orderedSegments[s]
        }
        var GraphQLSegment/*g*/ = a.getMetadataAfterCursor(u, d, p),
            invariant/*y*/ = GraphQLSegment/*g*/.edgeIDs,
            b = GraphQLSegment/*g*/.cursors,
            R = [];
        b.length && (c.start_cursor = b[0], c.end_cursor = b[b.length - 1]);
        var w = invariant/*y*/[invariant/*y*/.length - 1];
        if ((!this.$GraphQLRange_hasLast || s !== this.$GraphQLRange_orderedSegments.length - 1 || w && w !== a.getLastID(p)) && (c.has_next_page = !0, invariant/*y*/.length < u)) {
            u -= invariant/*y*/.length;
            var C = a.getLastCursor();
            if (null === C) R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("first", l.first));
            else {
                if (void 0 !== C && R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("after", C)), s !== this.$GraphQLRange_orderedSegments.length - 1) {
                    var E = this.$GraphQLRange_orderedSegments[s + 1],
                        D = E.getFirstCursor();
                    void 0 !== D && R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("before", D))
                }
                R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("first", u))
            }
        }
        var T = invariant/*y*/.map(this.$GraphQLRange_getEdgeByID, this);
        return l.after || (T = r.concat(T)), i.length && (T = T.filter(function(e) {
            var t = GraphQLStoreDataHandler/*_*/.getID(e);
            return -1 == i.indexOf(t)
        })), {
            requestedEdges: T,
            diffCalls: R,
            pageInfo: c,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForLastQuery = function(e, t, n) {
        var r = [],
            i = [];
        n && (r = n[GraphQLMutatorConstants/*m*/.APPEND] || [], i = n[GraphQLMutatorConstants/*m*/.REMOVE] || []);
        var a, s, l = o(e, t),
            u = l.last + i.length,
            c = merge/*v*/(S);
        c.sessionID = this.$GraphQLRange_sessionID;
        var p = l.client_session ? l.client_session : null,
            d = l.before;
        if (void 0 !== d) {
            if (s = this.$GraphQLRange_getSegmentIndexByCursor(d), null == s) return console.error("GraphQLRange cannot find a segment that has the cursor: " + d), {
                requestedEdges: [],
                diffCalls: [],
                pageInfo: c,
                sessionID: this.$GraphQLRange_sessionID
            };
            a = this.$GraphQLRange_orderedSegments[s]
        } else {
            var DliteLog/*h*/ = r.length;
            if (u -= DliteLog/*h*/, s = this.$GraphQLRange_orderedSegments.length - 1, a = this.$GraphQLRange_orderedSegments[s], p)
                for (; s > 0 && a.getSessionID() > p;) s--, a = this.$GraphQLRange_orderedSegments[s]
        }
        var GraphQLSegment/*g*/ = a.getMetadataBeforeCursor(u, d, p),
            invariant/*y*/ = GraphQLSegment/*g*/.edgeIDs,
            b = GraphQLSegment/*g*/.cursors,
            R = [];
        b.length && (c.start_cursor = b[0], c.end_cursor = b[b.length - 1]);
        var w = invariant/*y*/[0];
        if ((!this.$GraphQLRange_hasFirst || 0 !== s || w && w !== a.getFirstID(p)) && (c.has_previous_page = !0, invariant/*y*/.length < u)) {
            u -= invariant/*y*/.length;
            var C = a.getFirstCursor();
            if (null === C) R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("last", l.last));
            else {
                if (void 0 !== C && R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("before", C)), 0 !== s) {
                    var E = this.$GraphQLRange_orderedSegments[s - 1],
                        D = E.getLastCursor();
                    void 0 !== D && R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("after", D))
                }
                R.push(new GraphQL_EXPERIMENTAL/*f*/.Call("last", u))
            }
        }
        var T = invariant/*y*/.map(this.$GraphQLRange_getEdgeByID, this);
        return l.before || (T = T.concat(r)), i.length && (T = T.filter(function(e) {
            var t = GraphQLStoreDataHandler/*_*/.getID(e);
            return -1 == i.indexOf(t)
        })), {
            requestedEdges: T,
            diffCalls: R,
            pageInfo: c,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            a = t[4],
            s = new p;
        return s.$GraphQLRange_hasFirst = n, s.$GraphQLRange_hasLast = r, s.$GraphQLRange_sessionID = i, s.$GraphQLRange_staticQueriesMap = o, s.$GraphQLRange_orderedSegments = a.map(function(e) {
            return GraphQLSegment/*g*/.fromJSON(e)
        }), s
    }, p.prototype.toJSON = function() {
        return [this.$GraphQLRange_hasFirst, this.$GraphQLRange_hasLast, this.$GraphQLRange_sessionID, this.$GraphQLRange_staticQueriesMap, this.$GraphQLRange_orderedSegments]
    }, p.prototype.__debug = function() {
        return {
            dataStore: this.$GraphQLRange_dataStore,
            orderedSegments: this.$GraphQLRange_orderedSegments
        }
    }, i.exports = p
});