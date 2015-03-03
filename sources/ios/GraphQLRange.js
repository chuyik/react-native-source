__d("GraphQLRange",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLMutatorConstants","GraphQLSegment","GraphQLStoreDataHandler","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/++) {
            var module/*i*/ = global/*e*/[requireLazy/*r*/].getName(),
                o = global/*e*/[requireLazy/*r*/].getArgs();
            if (o.length) {
                var a = o[0] instanceof f.CallVariable ? require/*t*/[o[0].getCallVariableName()] : o[0].getCallValue();
                if (null === a) continue;
                requireDynamic/*n*/[module/*i*/] = a
            }
        }
        return requireDynamic/*n*/.first ? (isNaN(requireDynamic/*n*/.first) && y(0, "Argument for first query must be a number"), requireDynamic/*n*/.first = +requireDynamic/*n*/.first) : requireDynamic/*n*/.last && (isNaN(requireDynamic/*n*/.last) && y(0, "Argument for last query must be a number"), requireDynamic/*n*/.last = +requireDynamic/*n*/.last), requireDynamic/*n*/.client_session && (isNaN(requireDynamic/*n*/.client_session) && y(0, "Argument for sessionID call must be a number"), requireDynamic/*n*/.client_session = +requireDynamic/*n*/.client_session), requireDynamic/*n*/
    }

    function a(global/*e*/) {
        return global/*e*/.hasOwnProperty("surrounds") || global/*e*/.hasOwnProperty("find")
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.hasOwnProperty("first"),
            requireDynamic/*n*/ = global/*e*/.hasOwnProperty("last");
        return (require/*t*/ || requireDynamic/*n*/) && !(require/*t*/ && requireDynamic/*n*/)
    }

    function l(global/*e*/) {
        return global/*e*/.hasOwnProperty("first") && global/*e*/.first > 0 || global/*e*/.hasOwnProperty("last") && global/*e*/.last > 0
    }

    function u(global/*e*/) {
        void 0 === _.getID(global/*e*/) && y(0, "GraphQLStore: `edge` must have a data id"), void 0 === global/*e*/.node && y(0, "GraphQLStore: `edge` must have `node` field")
    }

    function c(global/*e*/) {
        global/*e*/.forEach(u)
    }

    function p(global/*e*/) {
        this.$GraphQLRange_dataStore = global/*e*/, this.reset()
    }

    function d(global/*e*/, require/*t*/) {
        return global/*e*/.map(function(global/*e*/) {
            return global/*e*/.toString(require/*t*/)
        }).join(",")
    }
    var h = require/*t*/("DliteLog"),
        f = require/*t*/("GraphQL_EXPERIMENTAL"),
        m = require/*t*/("GraphQLMutatorConstants"),
        g = require/*t*/("GraphQLSegment"),
        _ = require/*t*/("GraphQLStoreDataHandler"),
        y = require/*t*/("invariant"),
        v = require/*t*/("merge"),
        S = {
            start_cursor: void 0,
            end_cursor: void 0,
            has_next_page: !1,
            has_previous_page: !1
        },
        b = 1e3;
    p.prototype.setDataStore = function(global/*e*/) {
        this.$GraphQLRange_dataStore = global/*e*/
    }, p.prototype.reset = function() {
        this.$GraphQLRange_orderedSegments = [new g, new g], this.$GraphQLRange_staticQueriesMap = {}, this.$GraphQLRange_hasFirst = !1, this.$GraphQLRange_hasLast = !1, this.$GraphQLRange_sessionID = b
    }, p.prototype.$GraphQLRange_resetSegment = function(global/*e*/) {
        global/*e*/ >= 0 && global/*e*/ < this.$GraphQLRange_orderedSegments.length || y(0, "cannot reset non-existent segment"), this.$GraphQLRange_orderedSegments[global/*e*/] = new g(this.$GraphQLRange_orderedSegments[global/*e*/].getSessionID())
    }, p.prototype.$GraphQLRange_getSegmentIndexByCursor = function(global/*e*/) {
        for (var require/*t*/ = 0; require/*t*/ < this.$GraphQLRange_orderedSegments.length; require/*t*/++)
            if (this.$GraphQLRange_orderedSegments[require/*t*/].containsEdgeWithCursor(global/*e*/)) return require/*t*/;
        return null
    }, p.prototype.$GraphQLRange_getSegmentIndexByID = function(global/*e*/) {
        for (var require/*t*/ = 0; require/*t*/ < this.$GraphQLRange_orderedSegments.length; require/*t*/++)
            if (this.$GraphQLRange_orderedSegments[require/*t*/].containsEdgeWithID(global/*e*/)) return require/*t*/;
        return null
    }, p.prototype.$GraphQLRange_addStaticEdges = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = d(global/*e*/, require/*t*/), module/*i*/ = [], o = [], a = 0; a < requireDynamic/*n*/.length; a++) {
            var s = requireDynamic/*n*/[a];
            module/*i*/.push(_.getID(s)), o.push(s.cursor)
        }
        this.$GraphQLRange_staticQueriesMap[requireLazy/*r*/] = {
            edgeIDs: module/*i*/,
            cursors: o
        }
    }, p.prototype.addItems = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        c(requireDynamic/*n*/);
        var module/*i*/, l, u = o(global/*e*/, require/*t*/);
        return a(u) ? void this.$GraphQLRange_addStaticEdges(global/*e*/, require/*t*/, requireDynamic/*n*/) : s(u) ? null === u.before || null === u.after ? void console.error("GraphQLRange received null as a cursor.") : (this.$GraphQLRange_sessionID++, void(u.first ? u.before && !u.after ? requireLazy/*r*/.has_next_page === !0 ? (0 === this.$GraphQLRange_getSegmentIndexByCursor(u.before) && this.$GraphQLRange_orderedSegments.unshift(new g(this.$GraphQLRange_sessionID)), this.$GraphQLRange_addAfterFirstItems(requireDynamic/*n*/, requireLazy/*r*/.has_next_page, void 0, u.before, null)) : this.$GraphQLRange_addBeforeLastItems(requireDynamic/*n*/, requireLazy/*r*/.has_previous_page, u.before, void 0, this.$GraphQLRange_sessionID) : (u.after || (l = 0, module/*i*/ = this.getFirstSegment().getCount(), module/*i*/ && (u.first > module/*i*/ || requireDynamic/*n*/.length > module/*i*/) && !this.getFirstSegment().getFirstCursor() && this.$GraphQLRange_resetSegment(l)), this.$GraphQLRange_addAfterFirstItems(requireDynamic/*n*/, requireLazy/*r*/.has_next_page, u.after, u.before, null)) : u.last && (u.after && !u.before ? requireLazy/*r*/.has_previous_page === !0 ? (this.$GraphQLRange_getSegmentIndexByCursor(u.after) === this.$GraphQLRange_orderedSegments.length - 1 && this.$GraphQLRange_orderedSegments.push(new g(this.$GraphQLRange_sessionID)), this.$GraphQLRange_addBeforeLastItems(requireDynamic/*n*/, requireLazy/*r*/.has_previous_page, void 0, u.after, null)) : this.$GraphQLRange_addAfterFirstItems(requireDynamic/*n*/, requireLazy/*r*/.has_next_page, u.after, void 0, this.$GraphQLRange_sessionID) : (u.before || (l = this.$GraphQLRange_orderedSegments.length - 1, module/*i*/ = this.getLastSegment().getCount(), module/*i*/ && (u.last > module/*i*/ || requireDynamic/*n*/.length > module/*i*/) && !this.getLastSegment().getLastCursor() && this.$GraphQLRange_resetSegment(l)), this.$GraphQLRange_addBeforeLastItems(requireDynamic/*n*/, requireLazy/*r*/.has_previous_page, u.before, u.after, null))))) : void console.error("GraphQLRange currently only handles first(<count>), after(<cursor>).first(<count>), last(<count>), before(<cursor>).last(<count>), before(<cursor>).first(<count>), and after(<cursor>).last(<count>)")
    }, p.prototype.getFirstSegment = function() {
        return this.$GraphQLRange_orderedSegments[0]
    }, p.prototype.getLastSegment = function() {
        return this.$GraphQLRange_orderedSegments[this.$GraphQLRange_orderedSegments.length - 1]
    }, p.prototype.$GraphQLRange_concatSegments = function(global/*e*/) {
        global/*e*/ + 1 < this.$GraphQLRange_orderedSegments.length && global/*e*/ >= 0 || y(0, "GraphQLRange cannot concat segments outside the range of orderedSegments");
        var require/*t*/ = this.$GraphQLRange_orderedSegments[global/*e*/],
            requireDynamic/*n*/ = this.$GraphQLRange_orderedSegments[global/*e*/ + 1];
        require/*t*/.concatSegment(requireDynamic/*n*/) ? this.$GraphQLRange_orderedSegments.splice(global/*e*/ + 1, 1) : console.error("GraphQLRange was unable to concat segment %d and segment %d", global/*e*/, global/*e*/ + 1)
    }, p.prototype.prependEdge = function(global/*e*/) {
        u(global/*e*/), this.$GraphQLRange_sessionID++, this.$GraphQLRange_hasFirst = !0;
        var require/*t*/ = this.getFirstSegment();
        this.$GraphQLRange_removeEdgeIfApplicable(global/*e*/, this.$GraphQLRange_sessionID), require/*t*/.prependEdge(global/*e*/, this.$GraphQLRange_sessionID)
    }, p.prototype.appendEdge = function(global/*e*/) {
        u(global/*e*/), this.$GraphQLRange_sessionID++, this.$GraphQLRange_hasLast = !0;
        var require/*t*/ = this.getLastSegment();
        this.$GraphQLRange_removeEdgeIfApplicable(global/*e*/, this.$GraphQLRange_sessionID), require/*t*/.appendEdge(global/*e*/, this.$GraphQLRange_sessionID)
    }, p.prototype.$GraphQLRange_removeEdgeIfApplicable = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = _.getID(global/*e*/),
            requireLazy/*r*/ = this.$GraphQLRange_getSegmentIndexByID(requireDynamic/*n*/);
        null != requireLazy/*r*/ && this.$GraphQLRange_orderedSegments[requireLazy/*r*/].removeEdge(requireDynamic/*n*/, require/*t*/)
    }, p.prototype.$GraphQLRange_removeEdgesIfApplicable = function(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) this.$GraphQLRange_removeEdgeIfApplicable(global/*e*/[requireDynamic/*n*/], require/*t*/ ? require/*t*/ : b)
    }, p.prototype.$GraphQLRange_addAfterFirstItems = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        var o, a, s;
        if (void 0 !== requireDynamic/*n*/) {
            if (a = this.$GraphQLRange_getSegmentIndexByCursor(requireDynamic/*n*/), null == a) return void console.error("GraphQLRange cannot find a segment that has the cursor: " + requireDynamic/*n*/);
            if (o = this.$GraphQLRange_orderedSegments[a], s = o.getLastCursor(), s !== requireDynamic/*n*/ && (global/*e*/ = this.$GraphQLRange_reconcileAfterFirstEdges(o, global/*e*/, requireDynamic/*n*/), requireDynamic/*n*/ = s, !global/*e*/)) return
        } else if (a = 0, o = this.$GraphQLRange_orderedSegments[a], s = o.getLastCursor(), void 0 !== s && (global/*e*/ = this.$GraphQLRange_reconcileAfterFirstEdges(o, global/*e*/), requireDynamic/*n*/ = s, !global/*e*/)) return;
        if (void 0 !== requireLazy/*r*/) {
            if (a === this.$GraphQLRange_orderedSegments.length - 1) return void console.error("GraphQLRange cannot add because there is no next segment");
            if (this.$GraphQLRange_orderedSegments[a + 1].getFirstCursor() !== requireLazy/*r*/) return void console.error("GraphQLRange cannot add because beforeCursor does not match first cursor of the next segment")
        }
        void 0 === requireDynamic/*n*/ && (this.$GraphQLRange_hasFirst = !0), module/*i*/ = module/*i*/ || o.getSessionID(), this.$GraphQLRange_removeEdgesIfApplicable(global/*e*/, module/*i*/), o.addEdgesAfterCursor(global/*e*/, requireDynamic/*n*/, module/*i*/), require/*t*/ || (void 0 !== requireLazy/*r*/ ? this.$GraphQLRange_concatSegments(a) : (this.$GraphQLRange_hasLast = !0, this.$GraphQLRange_orderedSegments.splice(a + 1, this.$GraphQLRange_orderedSegments.length - 1 - a)))
    }, p.prototype.$GraphQLRange_reconcileAfterFirstEdges = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getMetadataAfterCursor(require/*t*/.length + 1, requireDynamic/*n*/),
            module/*i*/ = requireLazy/*r*/.edgeIDs;
        if (module/*i*/.length > require/*t*/.length) return void 0;
        for (var o = 0; o < module/*i*/.length; o++)
            if (module/*i*/[o] !== _.getID(require/*t*/[o])) return void h.warn("GraphQLRange cannot reconcile input because there is an id mismatch at index %s", o);
        return require/*t*/.slice(module/*i*/.length)
    }, p.prototype.$GraphQLRange_addBeforeLastItems = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        var o, a, s;
        if (void 0 !== requireDynamic/*n*/) {
            if (a = this.$GraphQLRange_getSegmentIndexByCursor(requireDynamic/*n*/), null == a) return void console.error("GraphQLRange cannot find a segment that has the cursor: " + requireDynamic/*n*/);
            if (o = this.$GraphQLRange_orderedSegments[a], s = o.getFirstCursor(), s !== requireDynamic/*n*/ && (global/*e*/ = this.$GraphQLRange_reconcileBeforeLastEdges(o, global/*e*/, requireDynamic/*n*/), requireDynamic/*n*/ = s, !global/*e*/)) return
        } else if (a = this.$GraphQLRange_orderedSegments.length - 1, o = this.$GraphQLRange_orderedSegments[a], s = o.getFirstCursor(), void 0 !== s && (global/*e*/ = this.$GraphQLRange_reconcileBeforeLastEdges(o, global/*e*/, requireDynamic/*n*/), requireDynamic/*n*/ = s, !global/*e*/)) return;
        if (void 0 !== requireLazy/*r*/) {
            if (0 === a) return void console.error("GraphQLRange cannot add because there is no previous segment");
            if (this.$GraphQLRange_orderedSegments[a - 1].getLastCursor() !== requireLazy/*r*/) return void console.error("GraphQLRange cannot add because afterCursor does not match last cursor of the previous segment")
        }
        void 0 === requireDynamic/*n*/ && (this.$GraphQLRange_hasLast = !0), module/*i*/ = module/*i*/ || o.getSessionID(), this.$GraphQLRange_removeEdgesIfApplicable(global/*e*/, module/*i*/), o.addEdgesBeforeCursor(global/*e*/, requireDynamic/*n*/, module/*i*/), require/*t*/ || (void 0 !== requireLazy/*r*/ ? this.$GraphQLRange_concatSegments(a - 1) : (this.$GraphQLRange_hasFirst = !0, this.$GraphQLRange_orderedSegments.splice(0, a)))
    }, p.prototype.$GraphQLRange_reconcileBeforeLastEdges = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getMetadataBeforeCursor(require/*t*/.length + 1, requireDynamic/*n*/),
            module/*i*/ = requireLazy/*r*/.edgeIDs;
        if (module/*i*/.length > require/*t*/.length) return void 0;
        for (var o = 1; o <= module/*i*/.length; o++)
            if (module/*i*/[module/*i*/.length - o] !== _.getID(require/*t*/[require/*t*/.length - o])) return void h.warn("GraphQLRange cannot reconcile input because there is an id mismatch at index %s", o);
        return require/*t*/.slice(0, require/*t*/.length - module/*i*/.length)
    }, p.prototype.removeEdgeWithID = function(global/*e*/) {
        for (var require/*t*/ = 0; require/*t*/ < this.$GraphQLRange_orderedSegments.length; require/*t*/++) this.$GraphQLRange_orderedSegments[require/*t*/].removeAllEdges(global/*e*/, b)
    }, p.prototype.retrieveRangeInfoForQuery = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = o(global/*e*/, require/*t*/);
        return a(requireLazy/*r*/) ? this.$GraphQLRange_retrieveRangeInfoForStaticCalls(global/*e*/, require/*t*/) : s(requireLazy/*r*/) ? requireLazy/*r*/.first && requireLazy/*r*/.before || requireLazy/*r*/.last && requireLazy/*r*/.after ? (console.error("GraphQLRange does not currently handle retrieval for before(<cursor>).first(<count>) and after(<cursor>).last(<count>)"), {
            requestedEdges: [],
            diffCalls: [],
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        }) : l(requireLazy/*r*/) ? requireLazy/*r*/.first ? this.$GraphQLRange_retrieveRangeInfoForFirstQuery(global/*e*/, require/*t*/, requireDynamic/*n*/) : requireLazy/*r*/.last ? this.$GraphQLRange_retrieveRangeInfoForLastQuery(global/*e*/, require/*t*/, requireDynamic/*n*/) : void 0 : (console.error("GraphQLRange only supports first(<count>) or last(<count>) where count is greater than 0"), {
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
    }, p.prototype.$GraphQLRange_getEdgeByID = function(global/*e*/) {
        return this.$GraphQLRange_dataStore[global/*e*/]
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForStaticCalls = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = d(global/*e*/, require/*t*/),
            requireLazy/*r*/ = this.$GraphQLRange_staticQueriesMap[requireDynamic/*n*/];
        if (requireLazy/*r*/) {
            var module/*i*/ = {
                has_next_page: !0,
                has_previous_page: !0
            };
            return module/*i*/.start_cursor = requireLazy/*r*/.cursors[0], module/*i*/.end_cursor = requireLazy/*r*/.cursors[requireLazy/*r*/.cursors.length - 1], {
                requestedEdges: requireLazy/*r*/.edgeIDs.map(this.$GraphQLRange_getEdgeByID, this),
                diffCalls: [],
                pageInfo: module/*i*/,
                sessionID: this.$GraphQLRange_sessionID
            }
        }
        return {
            requestedEdges: [],
            diffCalls: global/*e*/,
            pageInfo: S,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForFirstQuery = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = [],
            module/*i*/ = [];
        requireDynamic/*n*/ && (requireLazy/*r*/ = requireDynamic/*n*/[m.PREPEND] || [], module/*i*/ = requireDynamic/*n*/[m.REMOVE] || []);
        var a, s, l = o(global/*e*/, require/*t*/),
            u = l.first + module/*i*/.length,
            c = v(S);
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
            var h = requireLazy/*r*/.length;
            if (u -= h, s = 0, a = this.$GraphQLRange_orderedSegments[s], p)
                for (; s < this.$GraphQLRange_orderedSegments.length - 1 && a.getSessionID() > p;) s++, a = this.$GraphQLRange_orderedSegments[s]
        }
        var g = a.getMetadataAfterCursor(u, d, p),
            y = g.edgeIDs,
            b = g.cursors,
            R = [];
        b.length && (c.start_cursor = b[0], c.end_cursor = b[b.length - 1]);
        var w = y[y.length - 1];
        if ((!this.$GraphQLRange_hasLast || s !== this.$GraphQLRange_orderedSegments.length - 1 || w && w !== a.getLastID(p)) && (c.has_next_page = !0, y.length < u)) {
            u -= y.length;
            var C = a.getLastCursor();
            if (null === C) R.push(new f.Call("first", l.first));
            else {
                if (void 0 !== C && R.push(new f.Call("after", C)), s !== this.$GraphQLRange_orderedSegments.length - 1) {
                    var E = this.$GraphQLRange_orderedSegments[s + 1],
                        D = E.getFirstCursor();
                    void 0 !== D && R.push(new f.Call("before", D))
                }
                R.push(new f.Call("first", u))
            }
        }
        var T = y.map(this.$GraphQLRange_getEdgeByID, this);
        return l.after || (T = requireLazy/*r*/.concat(T)), module/*i*/.length && (T = T.filter(function(global/*e*/) {
            var require/*t*/ = _.getID(global/*e*/);
            return -1 == module/*i*/.indexOf(require/*t*/)
        })), {
            requestedEdges: T,
            diffCalls: R,
            pageInfo: c,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.prototype.$GraphQLRange_retrieveRangeInfoForLastQuery = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = [],
            module/*i*/ = [];
        requireDynamic/*n*/ && (requireLazy/*r*/ = requireDynamic/*n*/[m.APPEND] || [], module/*i*/ = requireDynamic/*n*/[m.REMOVE] || []);
        var a, s, l = o(global/*e*/, require/*t*/),
            u = l.last + module/*i*/.length,
            c = v(S);
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
            var h = requireLazy/*r*/.length;
            if (u -= h, s = this.$GraphQLRange_orderedSegments.length - 1, a = this.$GraphQLRange_orderedSegments[s], p)
                for (; s > 0 && a.getSessionID() > p;) s--, a = this.$GraphQLRange_orderedSegments[s]
        }
        var g = a.getMetadataBeforeCursor(u, d, p),
            y = g.edgeIDs,
            b = g.cursors,
            R = [];
        b.length && (c.start_cursor = b[0], c.end_cursor = b[b.length - 1]);
        var w = y[0];
        if ((!this.$GraphQLRange_hasFirst || 0 !== s || w && w !== a.getFirstID(p)) && (c.has_previous_page = !0, y.length < u)) {
            u -= y.length;
            var C = a.getFirstCursor();
            if (null === C) R.push(new f.Call("last", l.last));
            else {
                if (void 0 !== C && R.push(new f.Call("before", C)), 0 !== s) {
                    var E = this.$GraphQLRange_orderedSegments[s - 1],
                        D = E.getLastCursor();
                    void 0 !== D && R.push(new f.Call("after", D))
                }
                R.push(new f.Call("last", u))
            }
        }
        var T = y.map(this.$GraphQLRange_getEdgeByID, this);
        return l.before || (T = T.concat(requireLazy/*r*/)), module/*i*/.length && (T = T.filter(function(global/*e*/) {
            var require/*t*/ = _.getID(global/*e*/);
            return -1 == module/*i*/.indexOf(require/*t*/)
        })), {
            requestedEdges: T,
            diffCalls: R,
            pageInfo: c,
            sessionID: this.$GraphQLRange_sessionID
        }
    }, p.fromJSON = function(global/*e*/) {
        var require/*t*/ = global/*e*/,
            requireDynamic/*n*/ = require/*t*/[0],
            requireLazy/*r*/ = require/*t*/[1],
            module/*i*/ = require/*t*/[2],
            o = require/*t*/[3],
            a = require/*t*/[4],
            s = new p;
        return s.$GraphQLRange_hasFirst = requireDynamic/*n*/, s.$GraphQLRange_hasLast = requireLazy/*r*/, s.$GraphQLRange_sessionID = module/*i*/, s.$GraphQLRange_staticQueriesMap = o, s.$GraphQLRange_orderedSegments = a.map(function(global/*e*/) {
            return g.fromJSON(global/*e*/)
        }), s
    }, p.prototype.toJSON = function() {
        return [this.$GraphQLRange_hasFirst, this.$GraphQLRange_hasLast, this.$GraphQLRange_sessionID, this.$GraphQLRange_staticQueriesMap, this.$GraphQLRange_orderedSegments]
    }, p.prototype.__debug = function() {
        return {
            dataStore: this.$GraphQLRange_dataStore,
            orderedSegments: this.$GraphQLRange_orderedSegments
        }
    }, module/*i*/.exports = p
});