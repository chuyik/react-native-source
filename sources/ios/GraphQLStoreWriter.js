__d("GraphQLStoreWriter",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLRange","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreQueryPath","GraphQLStoreRangeUtils","generateClientID","generateClientEdgeID","invariant","isEmpty"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n, r, i, o, a, s) {
        this.$GraphQLStoreWriter_nodeData = e, this.$GraphQLStoreWriter_queuedData = t, this.$GraphQLStoreWriter_queryTracker = n, this.$GraphQLStoreWriter_nodeRangeTracker = r, this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap = i, this.$GraphQLStoreWriter_onChange = a, this.$GraphQLStoreWriter_forceIndex = s || null, !o || o in GraphQLMutatorConstants/*d*/.UPDATE_TYPES || invariant/*S*/(0, "Invalid mutation update type %s passed into GraphQLStore", o), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !o, this.$GraphQLStoreWriter_isOptimisticUpdate = o === GraphQLMutatorConstants/*d*/.OPTIMISTIC_UPDATE, this.$GraphQLStoreWriter_newlyAddedIDs = {}
    }

    function a(e) {
        return e.split(".")[0]
    }

    function s(e, t) {
        if (1 === e.length && e[0] === D) return GraphQLConstants/*p*/.VIEWER_CLIENT_ID;
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!t || !t.hasOwnProperty(r)) return null;
            t = t[r]
        }
        return t && t.id && "string" == typeof t.id ? t.id : null
    }

    function l(e, t) {
        for (var n in e)
            if (n === t) return e[n];
        return null
    }
    var DliteLog/*u*/ = t("DliteLog"),
        GraphQL_EXPERIMENTAL/*c*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*p*/ = t("GraphQLConstants"),
        GraphQLMutatorConstants/*d*/ = t("GraphQLMutatorConstants"),
        GraphQLRange/*h*/ = t("GraphQLRange"),
        GraphQLRangeTracker/*f*/ = t("GraphQLRangeTracker"),
        GraphQLStoreDataHandler/*m*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreQueryPath/*g*/ = t("GraphQLStoreQueryPath"),
        GraphQLStoreRangeUtils/*_*/ = t("GraphQLStoreRangeUtils"),
        generateClientID/*y*/ = t("generateClientID"),
        generateClientEdgeID/*v*/ = t("generateClientEdgeID"),
        invariant/*S*/ = t("invariant"),
        isEmpty/*b*/ = t("isEmpty"),
        R = GraphQLConstants/*p*/.EDGES,
        w = GraphQLConstants/*p*/.NODE,
        C = GraphQLConstants/*p*/.NODES,
        E = GraphQLConstants/*p*/.PAGE_INFO,
        D = GraphQLConstants/*p*/.VIEWER,
        T = {
            error: !0,
            client_mutation_id: !0
        },
        x = new GraphQL_EXPERIMENTAL/*c*/.Field(R, null, null, null, null, null, {
            plural: !0
        });
    o.prototype.handleFieldMergeMutation = function(e, t) {
        var n = Object.keys(e).filter(function(e) {
            return !T[e]
        });
        1 !== n.length && invariant/*S*/(0, "Simple mutations must have exactly one top-level payload field.");
        var r, i = n[0];
        i === D && (r = GraphQLStoreQueryPath/*g*/.prunePathForDataID(GraphQLConstants/*p*/.VIEWER_CLIENT_ID));
        var o = function(n) {
            var a = n.getOwnField(i);
            a && this.$GraphQLStoreWriter_storeField(t, a, e, {}, r), n.getFragments().forEach(o)
        }.bind(this);
        o(t)
    }, o.prototype.handleMergeMutation = function(e, t) {
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                if ("object" == typeof r && ("id" in r || n === GraphQLConstants/*p*/.VIEWER || Array.isArray(r))) {
                    var i = {};
                    i[n] = r, this.handleFieldMergeMutation(i, t)
                }
            }
    }, o.prototype.handleRangeAddMutation = function(e, t, n, r) {
        var i = e[n.edgeName];
        i.node || invariant/*S*/(0, "newly added edge must have node field");
        var o;
        n.sourceID ? o = n.sourceID : (i.source.id || invariant/*S*/(0, "add mutation without sourceID in the config must have an id in the source field of the new edge"), o = i.source.id);
        var a = e.client_mutation_id,
            s = this.$GraphQLStoreWriter_getRanges(o, n.connectionName),
            DliteLog/*u*/ = i.node.id ? i.node.id : generateClientID/*y*/();
        i.node.__dataID__ = DliteLog/*u*/, this.$GraphQLStoreWriter_isOptimisticUpdate ? i.node.id = DliteLog/*u*/ : this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !0, i.cursor = i.cursor || GraphQLConstants/*p*/.DUMMY_CURSOR_ID;
        for (var GraphQL_EXPERIMENTAL/*c*/ = 0; GraphQL_EXPERIMENTAL/*c*/ < s.length; GraphQL_EXPERIMENTAL/*c*/++) {
            var GraphQLRange/*h*/ = l(r, s[GraphQL_EXPERIMENTAL/*c*/].calls.toString());
            if (GraphQLRange/*h*/) {
                var GraphQLRangeTracker/*f*/ = s[GraphQL_EXPERIMENTAL/*c*/].rangeID,
                    GraphQLStoreQueryPath/*g*/ = this.$GraphQLStoreWriter_nodeData[GraphQLRangeTracker/*f*/].__path__.clone();
                GraphQLStoreQueryPath/*g*/.pushField(x);
                var GraphQLStoreRangeUtils/*_*/ = generateClientEdgeID/*v*/(GraphQLRangeTracker/*f*/, DliteLog/*u*/),
                    isEmpty/*b*/ = !1,
                    R = function(e) {
                        var t = e.getOwnField(n.edgeName);
                        t && (this.storeNodeWithID(t, i, GraphQLStoreRangeUtils/*_*/, GraphQLStoreQueryPath/*g*/), isEmpty/*b*/ = !0), e.getFragments().forEach(R)
                    }.bind(this);
                if (R(t), isEmpty/*b*/ || invariant/*S*/(0, "Mutation query must include the relevant edge"), this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(this.$GraphQLStoreWriter_queuedData[GraphQLStoreRangeUtils/*_*/], GraphQLRangeTracker/*f*/, GraphQLRange/*h*/);
                else {
                    var w = this.$GraphQLStoreWriter_nodeData[GraphQLStoreRangeUtils/*_*/];
                    switch (GraphQLRange/*h*/) {
                        case GraphQLMutatorConstants/*d*/.PREPEND:
                            s[GraphQL_EXPERIMENTAL/*c*/].range.prependEdge(w);
                            break;
                        case GraphQLMutatorConstants/*d*/.APPEND:
                            s[GraphQL_EXPERIMENTAL/*c*/].range.appendEdge(w);
                            break;
                        default:
                            console.error("Invalid GraphQLRange operation")
                    }
                    this.$GraphQLStoreWriter_nodeRangeTracker.addRangeIDForNodeID(GraphQLRangeTracker/*f*/, DliteLog/*u*/);
                    var C = this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a];
                    C && (GraphQLStoreDataHandler/*m*/.updateClientServerIDMap(C, w.node.__dataID__), delete this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a])
                }
            }
        }
        this.$GraphQLStoreWriter_isOptimisticUpdate && (this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a] = DliteLog/*u*/), this.$GraphQLStoreWriter_notifyOnChange(o)
    }, o.prototype.handleRangeDeleteMutation = function(e, t) {
        var n = e[t.deletedIDFieldName];
        void 0 === n && invariant/*S*/(0, "deleted id must be in the payload");
        var r = t.pathToConnection.pop(),
            i = s(t.pathToConnection, e);
        if (t.pathToConnection.push(r), i)
            for (var o = this.$GraphQLStoreWriter_getRanges(i, r), a = 0; a < o.length; a++) this.deleteNodeFromRangeWithID(n, o[a].rangeID)
    }, o.prototype.handleNodeDeleteMutation = function(e, t) {
        var n = e[t.deletedIDFieldName];
        void 0 === n && invariant/*S*/(0, "deleted id must be in the payload"), this.deleteNodeWithID(n)
    }, o.prototype.deleteNodeFromRangeWithID = function(e, t) {
        var n = generateClientEdgeID/*v*/(t, e);
        if (this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(n, t, GraphQLMutatorConstants/*d*/.REMOVE);
        else {
            var r = this.$GraphQLStoreWriter_nodeData[t];
            r.__range__.removeEdgeWithID(n)
        }
        this.$GraphQLStoreWriter_notifyOnChange(t), this.deleteNodeWithID(n)
    }, o.prototype.deleteNodeWithID = function(e) {
        var t = this.$GraphQLStoreWriter_queuedData[e] || this.$GraphQLStoreWriter_nodeData[e];
        if (null !== t) {
            var n = this.$GraphQLStoreWriter_getNodeSink();
            null !== n[e] && (n[e] = null, this.$GraphQLStoreWriter_nodeRangeTracker.getRangeIDsForNodeID(e).forEach(function(t) {
                this.deleteNodeFromRangeWithID(e, t)
            }.bind(this)), this.$GraphQLStoreWriter_isOptimisticUpdate || this.$GraphQLStoreWriter_nodeRangeTracker.clearRangeIDsForNodeID(e), this.$GraphQLStoreWriter_notifyOnChange(e))
        }
    }, o.prototype.storeNodeWithID = function(e, t, n, r) {
        r = GraphQLStoreQueryPath/*g*/.prunePathForDataID(n, r);
        var i = this.$GraphQLStoreWriter_getNodeSink();
        i[n] || (i[n] = GraphQLStoreDataHandler/*m*/.createPointerWithID(n), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || (this.$GraphQLStoreWriter_newlyAddedIDs[n] = !0)), GraphQLStoreDataHandler/*m*/.isClientID(n) && !i[n].__path__ && (i[n].__path__ = r.clone()), this.$GraphQLStoreWriter_traverseNode(e, t, i[n], r), (this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || this.$GraphQLStoreWriter_newlyAddedIDs[n]) && this.$GraphQLStoreWriter_queryTracker.addQueryForID(n, e)
    }, o.prototype.$GraphQLStoreWriter_traverseNode = function(e, t, n, r, i) {
        for (var o = e.getOwnFields(), a = 0; a < o.length; a++) {
            var s = o[a];
            r.withField(s, function() {
                this.$GraphQLStoreWriter_storeField(i || e, s, t, n, r)
            }.bind(this))
        }
        for (var l = e.getFragments(), DliteLog/*u*/ = 0; DliteLog/*u*/ < l.length; DliteLog/*u*/++) this.$GraphQLStoreWriter_traverseNode(l[DliteLog/*u*/], t, n, r, i || e)
    }, o.prototype.$GraphQLStoreWriter_storeField = function(e, t, n, r, i) {
        var o, a, s = r.__dataID__,
            l = GraphQLStoreRangeUtils/*_*/.getStorageKeyForField(t, {}),
            DliteLog/*u*/ = t.getGeneratedAlias();
        if (o = n.hasOwnProperty(DliteLog/*u*/) ? n[DliteLog/*u*/] : n[t.getGeneratedFieldName()], Array.isArray(o))
            if (l == R && GraphQLStoreRangeUtils/*_*/.isRangeNode(e)) {
                var GraphQL_EXPERIMENTAL/*c*/ = e.getCalls();
                if (isEmpty/*b*/(GraphQL_EXPERIMENTAL/*c*/)) return void console.error("The field %s is a range node, and thus expected to have a first() or last() filter call", e.getFieldName());
                s || invariant/*S*/(0, "Parent of edges must have an ID");
                for (var GraphQLMutatorConstants/*d*/, GraphQLStoreQueryPath/*g*/ = t.getEdgesID() && GraphQLRangeTracker/*f*/.isFieldTracked(t, s), T = 0; T < o.length; T++) {
                    var x = o[T],
                        P = x.node;
                    if (null === P) GraphQLMutatorConstants/*d*/ = GraphQLMutatorConstants/*d*/ || o.slice(0, T);
                    else {
                        var I = P.id || P.__dataID__ || generateClientID/*y*/(),
                            F = generateClientEdgeID/*v*/(s, I);
                        P.__dataID__ = I, x.__dataID__ = F, this.$GraphQLStoreWriter_nodeRangeTracker.addRangeIDForNodeID(s, I), this.storeNodeWithID(t, x, F, i), GraphQLMutatorConstants/*d*/ && GraphQLMutatorConstants/*d*/.push(x), GraphQLStoreQueryPath/*g*/ && GraphQLRangeTracker/*f*/.trackEdge(t, F, s)
                    }
                }
                o = GraphQLMutatorConstants/*d*/ || o;
                var L = !1,
                    M = this.$GraphQLStoreWriter_nodeData[s] || r,
                    Q = this.$GraphQLStoreWriter_forceIndex && (void 0 === M.__forceIndex__ || this.$GraphQLStoreWriter_forceIndex > M.__forceIndex__);
                !M.__range__ || Q ? (r.__range__ = new GraphQLRange/*h*/(this.$GraphQLStoreWriter_nodeData), r.__filterCalls__ = GraphQLStoreRangeUtils/*_*/.getFilterCalls(GraphQL_EXPERIMENTAL/*c*/), L = !0, Q && (r.__forceIndex__ = this.$GraphQLStoreWriter_forceIndex)) : r.__range__ = M.__range__;
                var A = n[E];
                A || (A = {
                    has_previous_page: !1,
                    has_next_page: !1
                }), r.__range__.addItems(GraphQL_EXPERIMENTAL/*c*/, {}, o, A), isEmpty/*b*/(M) || isEmpty/*b*/(o) || this.$GraphQLStoreWriter_notifyOnChange(s)
            } else {
                if (l == C) throw new Error("Request edges instead of nodes, cursor field is required");
                var k = !1;
                r[l] ? r[l].length > o.length && (r[l].length = o.length, this.$GraphQLStoreWriter_notifyOnChange(s), k = !0) : (r[l] = [], this.$GraphQLStoreWriter_notifyOnChange(s), k = !0);
                for (var O = 0; O < o.length; O++)
                    if ("object" != typeof o[O]) r[l][O] !== o[O] && (r[l][O] = o[O], k || (this.$GraphQLStoreWriter_notifyOnChange(s), k = !0));
                    else {
                        if (a = null, o[O].id) a = o[O].id;
                        else {
                            var N = this.$GraphQLStoreWriter_nodeData[s] || r;
                            N && Array.isArray(N[l]) && N[l][O] && (a = N[l][O].__dataID__)
                        }
                        a || (a = generateClientID/*y*/()), r[l][O] && r[l][O].__dataID__ === a || (r[l][O] = GraphQLStoreDataHandler/*m*/.createPointerWithID(a), k || (this.$GraphQLStoreWriter_notifyOnChange(s), k = !0)), this.storeNodeWithID(t, o[O], a, i)
                    }
            } else if (t.hasFields()) {
            if (a = null, l == E) return;
            if (void 0 === o || null === o) return void this.$GraphQLStoreWriter_writeData(r, l, o);
            l === D ? a = GraphQLConstants/*p*/.VIEWER_CLIENT_ID : l == w ? a = o.__dataID__ || o.id || generateClientID/*y*/() : (a = o.id, !a && s && (N = this.$GraphQLStoreWriter_nodeData[s], N && N[l] ? a = N[l].__dataID__ : r && r[l] && (a = r[l].__dataID__)), a || (a = generateClientID/*y*/())), this.$GraphQLStoreWriter_writePointer(r, l, a), this.storeNodeWithID(t, o, a, i)
        } else this.$GraphQLStoreWriter_writeData(r, l, o)
    }, o.prototype.$GraphQLStoreWriter_handleOptimisticRangeUpdate = function(e, t, n) {
        n in GraphQLMutatorConstants/*d*/.RANGE_OPERATIONS || invariant/*S*/(0, "Invalid operation %s provided", n), n === GraphQLMutatorConstants/*d*/.REMOVE && "string" == typeof e || n !== GraphQLMutatorConstants/*d*/.REMOVE && "object" == typeof e || invariant/*S*/(0, "Incorrect edge information provided");
        var r = this.$GraphQLStoreWriter_queuedData;
        t in r || (r[t] = {}), n in r[t] || (r[t][n] = []), n === GraphQLMutatorConstants/*d*/.PREPEND ? r[t][n].unshift(e) : r[t][n].push(e)
    }, o.prototype.$GraphQLStoreWriter_getRanges = function(e, t) {
        var n = this.$GraphQLStoreWriter_nodeData,
            r = n[e],
            i = [];
        if (r)
            for (var o in r) {
                var s = a(o);
                if (s === t) {
                    var l = n[r[o].__dataID__];
                    l && l.__range__ && l.__range__ instanceof GraphQLRange/*h*/ && l.__filterCalls__ ? i.push({
                        rangeID: l.__dataID__,
                        range: l.__range__,
                        calls: l.__filterCalls__
                    }) : DliteLog/*u*/.warn("Found a field matching connectionName with no range")
                }
            }
        return i
    }, o.prototype.$GraphQLStoreWriter_notifyOnChange = function(e) {
        e && this.$GraphQLStoreWriter_onChange && this.$GraphQLStoreWriter_onChange(e)
    }, o.prototype.$GraphQLStoreWriter_writeData = function(e, t, n) {
        e[t] !== n && (e[t] = n, this.$GraphQLStoreWriter_notifyOnChange(e.__dataID__))
    }, o.prototype.$GraphQLStoreWriter_writePointer = function(e, t, n) {
        e[t] && n === e[t].__dataID__ || (e[t] = GraphQLStoreDataHandler/*m*/.createPointerWithID(n), this.$GraphQLStoreWriter_notifyOnChange(e.__dataID__))
    }, o.prototype.$GraphQLStoreWriter_getNodeSink = function() {
        return this.$GraphQLStoreWriter_isOptimisticUpdate ? this.$GraphQLStoreWriter_queuedData : this.$GraphQLStoreWriter_nodeData
    }, i.exports = o
});