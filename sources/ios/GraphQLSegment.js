__d("GraphQLSegment",["GraphQLConstants","GraphQLStoreDataHandler"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.$GraphQLSegment_indexToMetadataMap = {}, this.$GraphQLSegment_idToIndicesMap = {}, this.$GraphQLSegment_cursorToIndexMap = {}, this.$GraphQLSegment_count = 0, this.$GraphQLSegment_minIndex = null, this.$GraphQLSegment_maxIndex = null, this.$GraphQLSegment_sessionID = e
    }
    var GraphQLConstants/*a*/ = t("GraphQLConstants"),
        GraphQLStoreDataHandler/*s*/ = t("GraphQLStoreDataHandler");
    o.prototype.$GraphQLSegment_getIndexForCursor = function(e) {
        return this.$GraphQLSegment_cursorToIndexMap[e]
    }, o.prototype.$GraphQLSegment_getIndexForID = function(e) {
        var t = this.$GraphQLSegment_idToIndicesMap[e];
        return t && t[0]
    }, o.prototype.getFirstCursor = function(e) {
        if (this.getLength())
            for (var t = this.$GraphQLSegment_minIndex; t <= this.$GraphQLSegment_maxIndex; t++) {
                var n = this.$GraphQLSegment_indexToMetadataMap[t];
                if (this.$GraphQLSegment_edgeExistsAtSession(n, e)) return n.cursor
            }
    }, o.prototype.getLastCursor = function(e) {
        if (this.getLength())
            for (var t = this.$GraphQLSegment_maxIndex; t >= this.$GraphQLSegment_minIndex; t--) {
                var n = this.$GraphQLSegment_indexToMetadataMap[t];
                if (this.$GraphQLSegment_edgeExistsAtSession(n, e)) return n.cursor
            }
    }, o.prototype.getFirstID = function(e) {
        if (this.getLength())
            for (var t = this.$GraphQLSegment_minIndex; t <= this.$GraphQLSegment_maxIndex; t++) {
                var n = this.$GraphQLSegment_indexToMetadataMap[t];
                if (this.$GraphQLSegment_edgeExistsAtSession(n, e)) return n.edgeID
            }
    }, o.prototype.getLastID = function(e) {
        if (this.getLength())
            for (var t = this.$GraphQLSegment_maxIndex; t >= this.$GraphQLSegment_minIndex; t--) {
                var n = this.$GraphQLSegment_indexToMetadataMap[t];
                if (this.$GraphQLSegment_edgeExistsAtSession(n, e)) return n.edgeID
            }
    }, o.prototype.$GraphQLSegment_getEdgeAtIndex = function(e) {
        var t = this.$GraphQLSegment_indexToMetadataMap[e];
        return t && !t.removalTime ? t : null
    }, o.prototype.containsEdgeWithID = function(e) {
        var t = this.$GraphQLSegment_getIndexForID(e);
        return void 0 === t ? !1 : !!this.$GraphQLSegment_getEdgeAtIndex(t)
    }, o.prototype.containsEdgeWithCursor = function(e) {
        var t = this.$GraphQLSegment_getIndexForCursor(e);
        return void 0 === t ? !1 : !!this.$GraphQLSegment_getEdgeAtIndex(t)
    }, o.prototype.$GraphQLSegment_edgeExistsAtSession = function(e, t) {
        return null == t ? !e.removalTime : e.cursor === GraphQLConstants/*a*/.DUMMY_CURSOR_ID ? !e.removalTime || e.removalTime > t : (!e.removalTime || e.removalTime > t) && (!e.insertionTime || e.insertionTime <= t)
    }, o.prototype.getMetadataAfterCursor = function(e, t, n) {
        if (!this.getLength()) return {
            edgeIDs: [],
            cursors: []
        };
        var r = this.$GraphQLSegment_minIndex;
        if (t) {
            var i = this.$GraphQLSegment_getIndexForCursor(t);
            if (void 0 === i) return console.error("This segment does not have GraphQLConstants/*a*/ cursor %GraphQLStoreDataHandler/*s*/", t), {
                edgeIDs: [],
                cursors: []
            };
            r = i + 1
        }
        for (var o = 0, GraphQLConstants/*a*/ = [], GraphQLStoreDataHandler/*s*/ = []; r <= this.$GraphQLSegment_maxIndex && e > o;) {
            var l = this.$GraphQLSegment_indexToMetadataMap[r];
            this.$GraphQLSegment_edgeExistsAtSession(l, n) && (GraphQLConstants/*a*/.push(l.edgeID), GraphQLStoreDataHandler/*s*/.push(l.cursor), o++), r++
        }
        return {
            edgeIDs: GraphQLConstants/*a*/,
            cursors: GraphQLStoreDataHandler/*s*/
        }
    }, o.prototype.getMetadataBeforeCursor = function(e, t, n) {
        if (!this.getLength()) return {
            edgeIDs: [],
            cursors: []
        };
        var r = this.$GraphQLSegment_maxIndex;
        if (t) {
            var i = this.$GraphQLSegment_getIndexForCursor(t);
            if (void 0 === i) return console.error("This segment does not have GraphQLConstants/*a*/ cursor %GraphQLStoreDataHandler/*s*/", t), {
                edgeIDs: [],
                cursors: []
            };
            r = i - 1
        }
        for (var o = 0, GraphQLConstants/*a*/ = [], GraphQLStoreDataHandler/*s*/ = []; r >= this.$GraphQLSegment_minIndex && e > o;) {
            var l = this.$GraphQLSegment_indexToMetadataMap[r];
            this.$GraphQLSegment_edgeExistsAtSession(l, n) && (GraphQLConstants/*a*/.push(l.edgeID), GraphQLStoreDataHandler/*s*/.push(l.cursor), o++), r--
        }
        return {
            edgeIDs: GraphQLConstants/*a*/.reverse(),
            cursors: GraphQLStoreDataHandler/*s*/.reverse()
        }
    }, o.prototype.$GraphQLSegment_addEdgeAtIndex = function(e, t, n) {
        if (0 === this.getLength()) this.$GraphQLSegment_minIndex = t, this.$GraphQLSegment_maxIndex = t;
        else if (this.$GraphQLSegment_minIndex == t + 1) this.$GraphQLSegment_minIndex = t;
        else {
            if (this.$GraphQLSegment_maxIndex != t - 1) return void console.error("Attempted to add noncontiguous index to GraphQLSegment: " + t + " to (" + this.$GraphQLSegment_minIndex + ", " + this.$GraphQLSegment_maxIndex + ")");
            this.$GraphQLSegment_maxIndex = t
        }
        var r = GraphQLStoreDataHandler/*s*/.getID(e),
            i = e.cursor,
            o = this.$GraphQLSegment_getIndexForID(r);
        return void 0 !== o && this.$GraphQLSegment_getEdgeAtIndex(o) ? void console.error("Attempted to add an ID already in GraphQLSegment: %GraphQLStoreDataHandler/*s*/", r) : (this.$GraphQLSegment_indexToMetadataMap[t] = {
            edgeID: r,
            cursor: i,
            insertionTime: n || null,
            removalTime: null
        }, this.$GraphQLSegment_idToIndicesMap[r] = this.$GraphQLSegment_idToIndicesMap[r] || [], this.$GraphQLSegment_idToIndicesMap[r].unshift(t), this.$GraphQLSegment_count++, void(i && (this.$GraphQLSegment_cursorToIndexMap[i] = t)))
    }, o.prototype.prependEdge = function(e, t) {
        this.$GraphQLSegment_addEdgeAtIndex(e, null !== this.$GraphQLSegment_minIndex ? this.$GraphQLSegment_minIndex - 1 : 0, t)
    }, o.prototype.appendEdge = function(e, t) {
        this.$GraphQLSegment_addEdgeAtIndex(e, null !== this.$GraphQLSegment_maxIndex ? this.$GraphQLSegment_maxIndex + 1 : 0, t)
    }, o.prototype.removeEdge = function(e, t) {
        var n = this.$GraphQLSegment_getIndexForID(e);
        if (void 0 === n) return void console.error("Attempted to remove edge with ID that was never in GraphQLSegment: " + e);
        var r = this.$GraphQLSegment_indexToMetadataMap[n];
        return r.removalTime ? void console.error("Attempted to remove edge with ID that was already removed: " + e) : (r.removalTime = t, void this.$GraphQLSegment_count--)
    }, o.prototype.removeAllEdges = function(e, t) {
        var n = this.$GraphQLSegment_idToIndicesMap[e];
        if (n)
            for (var r = 0; r < n.length; r++) {
                var i = this.$GraphQLSegment_indexToMetadataMap[n[r]];
                i.removalTime ? i.removalTime > t && (i.removalTime = t) : (i.removalTime = t, this.$GraphQLSegment_count--)
            }
    }, o.prototype.addEdgesAfterCursor = function(e, t, n) {
        var r = -1;
        if (t && (r = this.$GraphQLSegment_getIndexForCursor(t), void 0 === r)) return void console.error("This segment does not have GraphQLConstants/*a*/ cursor %GraphQLStoreDataHandler/*s*/", t);
        for (; null !== this.$GraphQLSegment_maxIndex && r < this.$GraphQLSegment_maxIndex;) {
            var i = this.$GraphQLSegment_indexToMetadataMap[r + 1];
            if (!i.removalTime) return void console.error("Attempted to do an overwrite to GraphQLSegment: last index is " + this.$GraphQLSegment_maxIndex + " trying to add edges before " + r);
            r++
        }
        for (var o = r + 1, GraphQLConstants/*a*/ = 0; GraphQLConstants/*a*/ < e.length; GraphQLConstants/*a*/++) {
            var GraphQLStoreDataHandler/*s*/ = e[GraphQLConstants/*a*/];
            this.$GraphQLSegment_addEdgeAtIndex(GraphQLStoreDataHandler/*s*/, o + GraphQLConstants/*a*/, n)
        }
    }, o.prototype.addEdgesBeforeCursor = function(e, t, n) {
        var r = 1;
        if (t && (r = this.$GraphQLSegment_getIndexForCursor(t), void 0 === r)) return void console.error("This segment does not have GraphQLConstants/*a*/ cursor %GraphQLStoreDataHandler/*s*/", t);
        for (; null !== this.$GraphQLSegment_minIndex && r > this.$GraphQLSegment_minIndex;) {
            var i = this.$GraphQLSegment_indexToMetadataMap[r - 1];
            if (!i.removalTime) return void console.error("Attempted to do an overwrite to GraphQLSegment: first index is " + this.$GraphQLSegment_minIndex + " trying to add edges after " + r);
            r--
        }
        for (var o = r - 1, GraphQLConstants/*a*/ = 0; GraphQLConstants/*a*/ < e.length; GraphQLConstants/*a*/++) {
            var GraphQLStoreDataHandler/*s*/ = e[e.length - GraphQLConstants/*a*/ - 1];
            this.$GraphQLSegment_addEdgeAtIndex(GraphQLStoreDataHandler/*s*/, o - GraphQLConstants/*a*/, n)
        }
    }, o.prototype.getLength = function() {
        return null === this.$GraphQLSegment_minIndex && null === this.$GraphQLSegment_maxIndex ? 0 : this.$GraphQLSegment_maxIndex - this.$GraphQLSegment_minIndex + 1
    }, o.prototype.getCount = function() {
        return this.$GraphQLSegment_count
    }, o.prototype.getSessionID = function() {
        return this.$GraphQLSegment_sessionID
    }, o.prototype.$GraphQLSegment_rollback = function(e, t, n) {
        Object.assign(this.$GraphQLSegment_cursorToIndexMap, e), Object.assign(this.$GraphQLSegment_idToIndicesMap, t), this.$GraphQLSegment_count = n.count, this.$GraphQLSegment_maxIndex = n.maxIndex, this.$GraphQLSegment_minIndex = n.minIndex
    }, o.prototype.$GraphQLSegment_getCounterState = function() {
        return {
            count: this.$GraphQLSegment_count,
            maxIndex: this.$GraphQLSegment_maxIndex,
            minIndex: this.$GraphQLSegment_minIndex
        }
    }, o.prototype.concatSegment = function(e) {
        if (!e.getLength()) return !0;
        for (var t = {}, n = {}, r = this.$GraphQLSegment_getCounterState(), i = e.$GraphQLSegment_indexToMetadataMap, o = e.$GraphQLSegment_minIndex; o <= e.$GraphQLSegment_maxIndex; o++) {
            var GraphQLConstants/*a*/;
            this.getLength() ? GraphQLConstants/*a*/ = this.$GraphQLSegment_maxIndex + 1 : (GraphQLConstants/*a*/ = 0, this.$GraphQLSegment_minIndex = 0), this.$GraphQLSegment_maxIndex = GraphQLConstants/*a*/;
            var GraphQLStoreDataHandler/*s*/ = i[o],
                l = this.$GraphQLSegment_getIndexForID(GraphQLStoreDataHandler/*s*/.edgeID);
            if (t.hasOwnProperty(GraphQLStoreDataHandler/*s*/.edgeID) || (t[GraphQLStoreDataHandler/*s*/.edgeID] = this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID] ? this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID].slice() : void 0), void 0 !== l) {
                var u = this.$GraphQLSegment_indexToMetadataMap[l];
                if (u.removalTime && (!GraphQLStoreDataHandler/*s*/.removalTime || u.removalTime < GraphQLStoreDataHandler/*s*/.removalTime)) this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID].unshift(GraphQLConstants/*a*/);
                else {
                    if (!GraphQLStoreDataHandler/*s*/.removalTime) return console.error("Attempt to concat an ID already in GraphQLSegment: %GraphQLStoreDataHandler/*s*/", GraphQLStoreDataHandler/*s*/.edgeID), this.$GraphQLSegment_rollback(n, t, r), !1;
                    this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID] = this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID] || [], this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID].push(GraphQLConstants/*a*/)
                }
            } else this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID] = this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID] || [], this.$GraphQLSegment_idToIndicesMap[GraphQLStoreDataHandler/*s*/.edgeID].unshift(GraphQLConstants/*a*/);
            var c = this.$GraphQLSegment_getIndexForCursor(GraphQLStoreDataHandler/*s*/.cursor);
            if (void 0 !== c) {
                var p = this.$GraphQLSegment_indexToMetadataMap[c];
                if (p.removalTime && (!GraphQLStoreDataHandler/*s*/.removalTime || p.removalTime < GraphQLStoreDataHandler/*s*/.removalTime)) n[GraphQLStoreDataHandler/*s*/.cursor] = this.$GraphQLSegment_cursorToIndexMap[GraphQLStoreDataHandler/*s*/.cursor], this.$GraphQLSegment_cursorToIndexMap[GraphQLStoreDataHandler/*s*/.cursor] = GraphQLConstants/*a*/;
                else if (!GraphQLStoreDataHandler/*s*/.removalTime) return console.error("Attempt to concat GraphQLConstants/*a*/ cursor already in GraphQLSegment: %GraphQLStoreDataHandler/*s*/", GraphQLStoreDataHandler/*s*/.cursor), this.$GraphQLSegment_rollback(n, t, r), !1
            } else GraphQLStoreDataHandler/*s*/.cursor && (n[GraphQLStoreDataHandler/*s*/.cursor] = this.$GraphQLSegment_cursorToIndexMap[GraphQLStoreDataHandler/*s*/.cursor], this.$GraphQLSegment_cursorToIndexMap[GraphQLStoreDataHandler/*s*/.cursor] = GraphQLConstants/*a*/);
            GraphQLStoreDataHandler/*s*/.removalTime || this.$GraphQLSegment_count++, this.$GraphQLSegment_indexToMetadataMap[GraphQLConstants/*a*/] = Object.assign({}, GraphQLStoreDataHandler/*s*/)
        }
        return this.getSessionID() && (!e.getSessionID() || e.getSessionID() < this.getSessionID()) && (this.$GraphQLSegment_sessionID = e.getSessionID()), !0
    }, o.prototype.toJSON = function() {
        return [this.$GraphQLSegment_sessionID, this.$GraphQLSegment_indexToMetadataMap, this.$GraphQLSegment_idToIndicesMap, this.$GraphQLSegment_cursorToIndexMap, this.$GraphQLSegment_minIndex, this.$GraphQLSegment_maxIndex, this.$GraphQLSegment_count]
    }, o.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            GraphQLConstants/*a*/ = t[3],
            GraphQLStoreDataHandler/*s*/ = t[4],
            l = t[5],
            u = t[6],
            c = new o(n);
        return c.$GraphQLSegment_indexToMetadataMap = r, c.$GraphQLSegment_idToIndicesMap = i, c.$GraphQLSegment_cursorToIndexMap = GraphQLConstants/*a*/, c.$GraphQLSegment_minIndex = GraphQLStoreDataHandler/*s*/, c.$GraphQLSegment_maxIndex = l, c.$GraphQLSegment_count = u, c
    }, o.prototype.__debug = function() {
        return {
            metadata: this.$GraphQLSegment_indexToMetadataMap,
            idToIndices: this.$GraphQLSegment_idToIndicesMap,
            cursorToIndex: this.$GraphQLSegment_cursorToIndexMap
        }
    }, i.exports = o
});