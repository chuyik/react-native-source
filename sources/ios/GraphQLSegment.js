__d("GraphQLSegment",["GraphQLConstants","GraphQLStoreDataHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.$GraphQLSegment_indexToMetadataMap = {}, this.$GraphQLSegment_idToIndicesMap = {}, this.$GraphQLSegment_cursorToIndexMap = {}, this.$GraphQLSegment_count = 0, this.$GraphQLSegment_minIndex = null, this.$GraphQLSegment_maxIndex = null, this.$GraphQLSegment_sessionID = global/*e*/
    }
    var a = require/*t*/("GraphQLConstants"),
        s = require/*t*/("GraphQLStoreDataHandler");
    o.prototype.$GraphQLSegment_getIndexForCursor = function(global/*e*/) {
        return this.$GraphQLSegment_cursorToIndexMap[global/*e*/]
    }, o.prototype.$GraphQLSegment_getIndexForID = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLSegment_idToIndicesMap[global/*e*/];
        return require/*t*/ && require/*t*/[0]
    }, o.prototype.getFirstCursor = function(global/*e*/) {
        if (this.getLength())
            for (var require/*t*/ = this.$GraphQLSegment_minIndex; require/*t*/ <= this.$GraphQLSegment_maxIndex; require/*t*/++) {
                var requireDynamic/*n*/ = this.$GraphQLSegment_indexToMetadataMap[require/*t*/];
                if (this.$GraphQLSegment_edgeExistsAtSession(requireDynamic/*n*/, global/*e*/)) return requireDynamic/*n*/.cursor
            }
    }, o.prototype.getLastCursor = function(global/*e*/) {
        if (this.getLength())
            for (var require/*t*/ = this.$GraphQLSegment_maxIndex; require/*t*/ >= this.$GraphQLSegment_minIndex; require/*t*/--) {
                var requireDynamic/*n*/ = this.$GraphQLSegment_indexToMetadataMap[require/*t*/];
                if (this.$GraphQLSegment_edgeExistsAtSession(requireDynamic/*n*/, global/*e*/)) return requireDynamic/*n*/.cursor
            }
    }, o.prototype.getFirstID = function(global/*e*/) {
        if (this.getLength())
            for (var require/*t*/ = this.$GraphQLSegment_minIndex; require/*t*/ <= this.$GraphQLSegment_maxIndex; require/*t*/++) {
                var requireDynamic/*n*/ = this.$GraphQLSegment_indexToMetadataMap[require/*t*/];
                if (this.$GraphQLSegment_edgeExistsAtSession(requireDynamic/*n*/, global/*e*/)) return requireDynamic/*n*/.edgeID
            }
    }, o.prototype.getLastID = function(global/*e*/) {
        if (this.getLength())
            for (var require/*t*/ = this.$GraphQLSegment_maxIndex; require/*t*/ >= this.$GraphQLSegment_minIndex; require/*t*/--) {
                var requireDynamic/*n*/ = this.$GraphQLSegment_indexToMetadataMap[require/*t*/];
                if (this.$GraphQLSegment_edgeExistsAtSession(requireDynamic/*n*/, global/*e*/)) return requireDynamic/*n*/.edgeID
            }
    }, o.prototype.$GraphQLSegment_getEdgeAtIndex = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLSegment_indexToMetadataMap[global/*e*/];
        return require/*t*/ && !require/*t*/.removalTime ? require/*t*/ : null
    }, o.prototype.containsEdgeWithID = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLSegment_getIndexForID(global/*e*/);
        return void 0 === require/*t*/ ? !1 : !!this.$GraphQLSegment_getEdgeAtIndex(require/*t*/)
    }, o.prototype.containsEdgeWithCursor = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLSegment_getIndexForCursor(global/*e*/);
        return void 0 === require/*t*/ ? !1 : !!this.$GraphQLSegment_getEdgeAtIndex(require/*t*/)
    }, o.prototype.$GraphQLSegment_edgeExistsAtSession = function(global/*e*/, require/*t*/) {
        return null == require/*t*/ ? !global/*e*/.removalTime : global/*e*/.cursor === a.DUMMY_CURSOR_ID ? !global/*e*/.removalTime || global/*e*/.removalTime > require/*t*/ : (!global/*e*/.removalTime || global/*e*/.removalTime > require/*t*/) && (!global/*e*/.insertionTime || global/*e*/.insertionTime <= require/*t*/)
    }, o.prototype.getMetadataAfterCursor = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (!this.getLength()) return {
            edgeIDs: [],
            cursors: []
        };
        var requireLazy/*r*/ = this.$GraphQLSegment_minIndex;
        if (require/*t*/) {
            var module/*i*/ = this.$GraphQLSegment_getIndexForCursor(require/*t*/);
            if (void 0 === module/*i*/) return console.error("This segment does not have a cursor %s", require/*t*/), {
                edgeIDs: [],
                cursors: []
            };
            requireLazy/*r*/ = module/*i*/ + 1
        }
        for (var o = 0, a = [], s = []; requireLazy/*r*/ <= this.$GraphQLSegment_maxIndex && global/*e*/ > o;) {
            var l = this.$GraphQLSegment_indexToMetadataMap[requireLazy/*r*/];
            this.$GraphQLSegment_edgeExistsAtSession(l, requireDynamic/*n*/) && (a.push(l.edgeID), s.push(l.cursor), o++), requireLazy/*r*/++
        }
        return {
            edgeIDs: a,
            cursors: s
        }
    }, o.prototype.getMetadataBeforeCursor = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (!this.getLength()) return {
            edgeIDs: [],
            cursors: []
        };
        var requireLazy/*r*/ = this.$GraphQLSegment_maxIndex;
        if (require/*t*/) {
            var module/*i*/ = this.$GraphQLSegment_getIndexForCursor(require/*t*/);
            if (void 0 === module/*i*/) return console.error("This segment does not have a cursor %s", require/*t*/), {
                edgeIDs: [],
                cursors: []
            };
            requireLazy/*r*/ = module/*i*/ - 1
        }
        for (var o = 0, a = [], s = []; requireLazy/*r*/ >= this.$GraphQLSegment_minIndex && global/*e*/ > o;) {
            var l = this.$GraphQLSegment_indexToMetadataMap[requireLazy/*r*/];
            this.$GraphQLSegment_edgeExistsAtSession(l, requireDynamic/*n*/) && (a.push(l.edgeID), s.push(l.cursor), o++), requireLazy/*r*/--
        }
        return {
            edgeIDs: a.reverse(),
            cursors: s.reverse()
        }
    }, o.prototype.$GraphQLSegment_addEdgeAtIndex = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (0 === this.getLength()) this.$GraphQLSegment_minIndex = require/*t*/, this.$GraphQLSegment_maxIndex = require/*t*/;
        else if (this.$GraphQLSegment_minIndex == require/*t*/ + 1) this.$GraphQLSegment_minIndex = require/*t*/;
        else {
            if (this.$GraphQLSegment_maxIndex != require/*t*/ - 1) return void console.error("Attempted to add noncontiguous index to GraphQLSegment: " + require/*t*/ + " to (" + this.$GraphQLSegment_minIndex + ", " + this.$GraphQLSegment_maxIndex + ")");
            this.$GraphQLSegment_maxIndex = require/*t*/
        }
        var requireLazy/*r*/ = s.getID(global/*e*/),
            module/*i*/ = global/*e*/.cursor,
            o = this.$GraphQLSegment_getIndexForID(requireLazy/*r*/);
        return void 0 !== o && this.$GraphQLSegment_getEdgeAtIndex(o) ? void console.error("Attempted to add an ID already in GraphQLSegment: %s", requireLazy/*r*/) : (this.$GraphQLSegment_indexToMetadataMap[require/*t*/] = {
            edgeID: requireLazy/*r*/,
            cursor: module/*i*/,
            insertionTime: requireDynamic/*n*/ || null,
            removalTime: null
        }, this.$GraphQLSegment_idToIndicesMap[requireLazy/*r*/] = this.$GraphQLSegment_idToIndicesMap[requireLazy/*r*/] || [], this.$GraphQLSegment_idToIndicesMap[requireLazy/*r*/].unshift(require/*t*/), this.$GraphQLSegment_count++, void(module/*i*/ && (this.$GraphQLSegment_cursorToIndexMap[module/*i*/] = require/*t*/)))
    }, o.prototype.prependEdge = function(global/*e*/, require/*t*/) {
        this.$GraphQLSegment_addEdgeAtIndex(global/*e*/, null !== this.$GraphQLSegment_minIndex ? this.$GraphQLSegment_minIndex - 1 : 0, require/*t*/)
    }, o.prototype.appendEdge = function(global/*e*/, require/*t*/) {
        this.$GraphQLSegment_addEdgeAtIndex(global/*e*/, null !== this.$GraphQLSegment_maxIndex ? this.$GraphQLSegment_maxIndex + 1 : 0, require/*t*/)
    }, o.prototype.removeEdge = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$GraphQLSegment_getIndexForID(global/*e*/);
        if (void 0 === requireDynamic/*n*/) return void console.error("Attempted to remove edge with ID that was never in GraphQLSegment: " + global/*e*/);
        var requireLazy/*r*/ = this.$GraphQLSegment_indexToMetadataMap[requireDynamic/*n*/];
        return requireLazy/*r*/.removalTime ? void console.error("Attempted to remove edge with ID that was already removed: " + global/*e*/) : (requireLazy/*r*/.removalTime = require/*t*/, void this.$GraphQLSegment_count--)
    }, o.prototype.removeAllEdges = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$GraphQLSegment_idToIndicesMap[global/*e*/];
        if (requireDynamic/*n*/)
            for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < requireDynamic/*n*/.length; requireLazy/*r*/++) {
                var module/*i*/ = this.$GraphQLSegment_indexToMetadataMap[requireDynamic/*n*/[requireLazy/*r*/]];
                module/*i*/.removalTime ? module/*i*/.removalTime > require/*t*/ && (module/*i*/.removalTime = require/*t*/) : (module/*i*/.removalTime = require/*t*/, this.$GraphQLSegment_count--)
            }
    }, o.prototype.addEdgesAfterCursor = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = -1;
        if (require/*t*/ && (requireLazy/*r*/ = this.$GraphQLSegment_getIndexForCursor(require/*t*/), void 0 === requireLazy/*r*/)) return void console.error("This segment does not have a cursor %s", require/*t*/);
        for (; null !== this.$GraphQLSegment_maxIndex && requireLazy/*r*/ < this.$GraphQLSegment_maxIndex;) {
            var module/*i*/ = this.$GraphQLSegment_indexToMetadataMap[requireLazy/*r*/ + 1];
            if (!module/*i*/.removalTime) return void console.error("Attempted to do an overwrite to GraphQLSegment: last index is " + this.$GraphQLSegment_maxIndex + " trying to add edges before " + requireLazy/*r*/);
            requireLazy/*r*/++
        }
        for (var o = requireLazy/*r*/ + 1, a = 0; a < global/*e*/.length; a++) {
            var s = global/*e*/[a];
            this.$GraphQLSegment_addEdgeAtIndex(s, o + a, requireDynamic/*n*/)
        }
    }, o.prototype.addEdgesBeforeCursor = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = 1;
        if (require/*t*/ && (requireLazy/*r*/ = this.$GraphQLSegment_getIndexForCursor(require/*t*/), void 0 === requireLazy/*r*/)) return void console.error("This segment does not have a cursor %s", require/*t*/);
        for (; null !== this.$GraphQLSegment_minIndex && requireLazy/*r*/ > this.$GraphQLSegment_minIndex;) {
            var module/*i*/ = this.$GraphQLSegment_indexToMetadataMap[requireLazy/*r*/ - 1];
            if (!module/*i*/.removalTime) return void console.error("Attempted to do an overwrite to GraphQLSegment: first index is " + this.$GraphQLSegment_minIndex + " trying to add edges after " + requireLazy/*r*/);
            requireLazy/*r*/--
        }
        for (var o = requireLazy/*r*/ - 1, a = 0; a < global/*e*/.length; a++) {
            var s = global/*e*/[global/*e*/.length - a - 1];
            this.$GraphQLSegment_addEdgeAtIndex(s, o - a, requireDynamic/*n*/)
        }
    }, o.prototype.getLength = function() {
        return null === this.$GraphQLSegment_minIndex && null === this.$GraphQLSegment_maxIndex ? 0 : this.$GraphQLSegment_maxIndex - this.$GraphQLSegment_minIndex + 1
    }, o.prototype.getCount = function() {
        return this.$GraphQLSegment_count
    }, o.prototype.getSessionID = function() {
        return this.$GraphQLSegment_sessionID
    }, o.prototype.$GraphQLSegment_rollback = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        Object.assign(this.$GraphQLSegment_cursorToIndexMap, global/*e*/), Object.assign(this.$GraphQLSegment_idToIndicesMap, require/*t*/), this.$GraphQLSegment_count = requireDynamic/*n*/.count, this.$GraphQLSegment_maxIndex = requireDynamic/*n*/.maxIndex, this.$GraphQLSegment_minIndex = requireDynamic/*n*/.minIndex
    }, o.prototype.$GraphQLSegment_getCounterState = function() {
        return {
            count: this.$GraphQLSegment_count,
            maxIndex: this.$GraphQLSegment_maxIndex,
            minIndex: this.$GraphQLSegment_minIndex
        }
    }, o.prototype.concatSegment = function(global/*e*/) {
        if (!global/*e*/.getLength()) return !0;
        for (var require/*t*/ = {}, requireDynamic/*n*/ = {}, requireLazy/*r*/ = this.$GraphQLSegment_getCounterState(), module/*i*/ = global/*e*/.$GraphQLSegment_indexToMetadataMap, o = global/*e*/.$GraphQLSegment_minIndex; o <= global/*e*/.$GraphQLSegment_maxIndex; o++) {
            var a;
            this.getLength() ? a = this.$GraphQLSegment_maxIndex + 1 : (a = 0, this.$GraphQLSegment_minIndex = 0), this.$GraphQLSegment_maxIndex = a;
            var s = module/*i*/[o],
                l = this.$GraphQLSegment_getIndexForID(s.edgeID);
            if (require/*t*/.hasOwnProperty(s.edgeID) || (require/*t*/[s.edgeID] = this.$GraphQLSegment_idToIndicesMap[s.edgeID] ? this.$GraphQLSegment_idToIndicesMap[s.edgeID].slice() : void 0), void 0 !== l) {
                var u = this.$GraphQLSegment_indexToMetadataMap[l];
                if (u.removalTime && (!s.removalTime || u.removalTime < s.removalTime)) this.$GraphQLSegment_idToIndicesMap[s.edgeID].unshift(a);
                else {
                    if (!s.removalTime) return console.error("Attempt to concat an ID already in GraphQLSegment: %s", s.edgeID), this.$GraphQLSegment_rollback(requireDynamic/*n*/, require/*t*/, requireLazy/*r*/), !1;
                    this.$GraphQLSegment_idToIndicesMap[s.edgeID] = this.$GraphQLSegment_idToIndicesMap[s.edgeID] || [], this.$GraphQLSegment_idToIndicesMap[s.edgeID].push(a)
                }
            } else this.$GraphQLSegment_idToIndicesMap[s.edgeID] = this.$GraphQLSegment_idToIndicesMap[s.edgeID] || [], this.$GraphQLSegment_idToIndicesMap[s.edgeID].unshift(a);
            var c = this.$GraphQLSegment_getIndexForCursor(s.cursor);
            if (void 0 !== c) {
                var p = this.$GraphQLSegment_indexToMetadataMap[c];
                if (p.removalTime && (!s.removalTime || p.removalTime < s.removalTime)) requireDynamic/*n*/[s.cursor] = this.$GraphQLSegment_cursorToIndexMap[s.cursor], this.$GraphQLSegment_cursorToIndexMap[s.cursor] = a;
                else if (!s.removalTime) return console.error("Attempt to concat a cursor already in GraphQLSegment: %s", s.cursor), this.$GraphQLSegment_rollback(requireDynamic/*n*/, require/*t*/, requireLazy/*r*/), !1
            } else s.cursor && (requireDynamic/*n*/[s.cursor] = this.$GraphQLSegment_cursorToIndexMap[s.cursor], this.$GraphQLSegment_cursorToIndexMap[s.cursor] = a);
            s.removalTime || this.$GraphQLSegment_count++, this.$GraphQLSegment_indexToMetadataMap[a] = Object.assign({}, s)
        }
        return this.getSessionID() && (!global/*e*/.getSessionID() || global/*e*/.getSessionID() < this.getSessionID()) && (this.$GraphQLSegment_sessionID = global/*e*/.getSessionID()), !0
    }, o.prototype.toJSON = function() {
        return [this.$GraphQLSegment_sessionID, this.$GraphQLSegment_indexToMetadataMap, this.$GraphQLSegment_idToIndicesMap, this.$GraphQLSegment_cursorToIndexMap, this.$GraphQLSegment_minIndex, this.$GraphQLSegment_maxIndex, this.$GraphQLSegment_count]
    }, o.fromJSON = function(global/*e*/) {
        var require/*t*/ = global/*e*/,
            requireDynamic/*n*/ = require/*t*/[0],
            requireLazy/*r*/ = require/*t*/[1],
            module/*i*/ = require/*t*/[2],
            a = require/*t*/[3],
            s = require/*t*/[4],
            l = require/*t*/[5],
            u = require/*t*/[6],
            c = new o(requireDynamic/*n*/);
        return c.$GraphQLSegment_indexToMetadataMap = requireLazy/*r*/, c.$GraphQLSegment_idToIndicesMap = module/*i*/, c.$GraphQLSegment_cursorToIndexMap = a, c.$GraphQLSegment_minIndex = s, c.$GraphQLSegment_maxIndex = l, c.$GraphQLSegment_count = u, c
    }, o.prototype.__debug = function() {
        return {
            metadata: this.$GraphQLSegment_indexToMetadataMap,
            idToIndices: this.$GraphQLSegment_idToIndicesMap,
            cursorToIndex: this.$GraphQLSegment_cursorToIndexMap
        }
    }, module/*i*/.exports = o
});