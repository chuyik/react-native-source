__d("GraphQLStoreWriter",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLRange","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreQueryPath","GraphQLStoreRangeUtils","generateClientID","generateClientEdgeID","invariant","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s) {
        this.$GraphQLStoreWriter_nodeData = global/*e*/, this.$GraphQLStoreWriter_queuedData = require/*t*/, this.$GraphQLStoreWriter_queryTracker = requireDynamic/*n*/, this.$GraphQLStoreWriter_nodeRangeTracker = requireLazy/*r*/, this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap = module/*i*/, this.$GraphQLStoreWriter_onChange = a, this.$GraphQLStoreWriter_forceIndex = s || null, !o || o in d.UPDATE_TYPES || S(0, "Invalid mutation update type %s passed into GraphQLStore", o), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !o, this.$GraphQLStoreWriter_isOptimisticUpdate = o === d.OPTIMISTIC_UPDATE, this.$GraphQLStoreWriter_newlyAddedIDs = {}
    }

    function a(global/*e*/) {
        return global/*e*/.split(".")[0]
    }

    function s(global/*e*/, require/*t*/) {
        if (1 === global/*e*/.length && global/*e*/[0] === D) return p.VIEWER_CLIENT_ID;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            if (!require/*t*/ || !require/*t*/.hasOwnProperty(requireLazy/*r*/)) return null;
            require/*t*/ = require/*t*/[requireLazy/*r*/]
        }
        return require/*t*/ && require/*t*/.id && "string" == typeof require/*t*/.id ? require/*t*/.id : null
    }

    function l(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ in global/*e*/)
            if (requireDynamic/*n*/ === require/*t*/) return global/*e*/[requireDynamic/*n*/];
        return null
    }
    var u = require/*t*/("DliteLog"),
        c = require/*t*/("GraphQL_EXPERIMENTAL"),
        p = require/*t*/("GraphQLConstants"),
        d = require/*t*/("GraphQLMutatorConstants"),
        h = require/*t*/("GraphQLRange"),
        f = require/*t*/("GraphQLRangeTracker"),
        m = require/*t*/("GraphQLStoreDataHandler"),
        g = require/*t*/("GraphQLStoreQueryPath"),
        _ = require/*t*/("GraphQLStoreRangeUtils"),
        y = require/*t*/("generateClientID"),
        v = require/*t*/("generateClientEdgeID"),
        S = require/*t*/("invariant"),
        b = require/*t*/("isEmpty"),
        R = p.EDGES,
        w = p.NODE,
        C = p.NODES,
        E = p.PAGE_INFO,
        D = p.VIEWER,
        T = {
            error: !0,
            client_mutation_id: !0
        },
        x = new c.Field(R, null, null, null, null, null, {
            plural: !0
        });
    o.prototype.handleFieldMergeMutation = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Object.keys(global/*e*/).filter(function(global/*e*/) {
            return !T[global/*e*/]
        });
        1 !== requireDynamic/*n*/.length && S(0, "Simple mutations must have exactly one top-level payload field.");
        var requireLazy/*r*/, module/*i*/ = requireDynamic/*n*/[0];
        module/*i*/ === D && (requireLazy/*r*/ = g.prunePathForDataID(p.VIEWER_CLIENT_ID));
        var o = function(requireDynamic/*n*/) {
            var a = requireDynamic/*n*/.getOwnField(module/*i*/);
            a && this.$GraphQLStoreWriter_storeField(require/*t*/, a, global/*e*/, {}, requireLazy/*r*/), requireDynamic/*n*/.getFragments().forEach(o)
        }.bind(this);
        o(require/*t*/)
    }, o.prototype.handleMergeMutation = function(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ in global/*e*/)
            if (global/*e*/.hasOwnProperty(requireDynamic/*n*/)) {
                var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
                if ("object" == typeof requireLazy/*r*/ && ("id" in requireLazy/*r*/ || requireDynamic/*n*/ === p.VIEWER || Array.isArray(requireLazy/*r*/))) {
                    var module/*i*/ = {};
                    module/*i*/[requireDynamic/*n*/] = requireLazy/*r*/, this.handleFieldMergeMutation(module/*i*/, require/*t*/)
                }
            }
    }, o.prototype.handleRangeAddMutation = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = global/*e*/[requireDynamic/*n*/.edgeName];
        module/*i*/.node || S(0, "newly added edge must have node field");
        var o;
        requireDynamic/*n*/.sourceID ? o = requireDynamic/*n*/.sourceID : (module/*i*/.source.id || S(0, "add mutation without sourceID in the config must have an id in the source field of the new edge"), o = module/*i*/.source.id);
        var a = global/*e*/.client_mutation_id,
            s = this.$GraphQLStoreWriter_getRanges(o, requireDynamic/*n*/.connectionName),
            u = module/*i*/.node.id ? module/*i*/.node.id : y();
        module/*i*/.node.__dataID__ = u, this.$GraphQLStoreWriter_isOptimisticUpdate ? module/*i*/.node.id = u : this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !0, module/*i*/.cursor = module/*i*/.cursor || p.DUMMY_CURSOR_ID;
        for (var c = 0; c < s.length; c++) {
            var h = l(requireLazy/*r*/, s[c].calls.toString());
            if (h) {
                var f = s[c].rangeID,
                    g = this.$GraphQLStoreWriter_nodeData[f].__path__.clone();
                g.pushField(x);
                var _ = v(f, u),
                    b = !1,
                    R = function(global/*e*/) {
                        var require/*t*/ = global/*e*/.getOwnField(requireDynamic/*n*/.edgeName);
                        require/*t*/ && (this.storeNodeWithID(require/*t*/, module/*i*/, _, g), b = !0), global/*e*/.getFragments().forEach(R)
                    }.bind(this);
                if (R(require/*t*/), b || S(0, "Mutation query must include the relevant edge"), this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(this.$GraphQLStoreWriter_queuedData[_], f, h);
                else {
                    var w = this.$GraphQLStoreWriter_nodeData[_];
                    switch (h) {
                        case d.PREPEND:
                            s[c].range.prependEdge(w);
                            break;
                        case d.APPEND:
                            s[c].range.appendEdge(w);
                            break;
                        default:
                            console.error("Invalid GraphQLRange operation")
                    }
                    this.$GraphQLStoreWriter_nodeRangeTracker.addRangeIDForNodeID(f, u);
                    var C = this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a];
                    C && (m.updateClientServerIDMap(C, w.node.__dataID__), delete this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a])
                }
            }
        }
        this.$GraphQLStoreWriter_isOptimisticUpdate && (this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap[a] = u), this.$GraphQLStoreWriter_notifyOnChange(o)
    }, o.prototype.handleRangeDeleteMutation = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/[require/*t*/.deletedIDFieldName];
        void 0 === requireDynamic/*n*/ && S(0, "deleted id must be in the payload");
        var requireLazy/*r*/ = require/*t*/.pathToConnection.pop(),
            module/*i*/ = s(require/*t*/.pathToConnection, global/*e*/);
        if (require/*t*/.pathToConnection.push(requireLazy/*r*/), module/*i*/)
            for (var o = this.$GraphQLStoreWriter_getRanges(module/*i*/, requireLazy/*r*/), a = 0; a < o.length; a++) this.deleteNodeFromRangeWithID(requireDynamic/*n*/, o[a].rangeID)
    }, o.prototype.handleNodeDeleteMutation = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/[require/*t*/.deletedIDFieldName];
        void 0 === requireDynamic/*n*/ && S(0, "deleted id must be in the payload"), this.deleteNodeWithID(requireDynamic/*n*/)
    }, o.prototype.deleteNodeFromRangeWithID = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = v(require/*t*/, global/*e*/);
        if (this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(requireDynamic/*n*/, require/*t*/, d.REMOVE);
        else {
            var requireLazy/*r*/ = this.$GraphQLStoreWriter_nodeData[require/*t*/];
            requireLazy/*r*/.__range__.removeEdgeWithID(requireDynamic/*n*/)
        }
        this.$GraphQLStoreWriter_notifyOnChange(require/*t*/), this.deleteNodeWithID(requireDynamic/*n*/)
    }, o.prototype.deleteNodeWithID = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLStoreWriter_queuedData[global/*e*/] || this.$GraphQLStoreWriter_nodeData[global/*e*/];
        if (null !== require/*t*/) {
            var requireDynamic/*n*/ = this.$GraphQLStoreWriter_getNodeSink();
            null !== requireDynamic/*n*/[global/*e*/] && (requireDynamic/*n*/[global/*e*/] = null, this.$GraphQLStoreWriter_nodeRangeTracker.getRangeIDsForNodeID(global/*e*/).forEach(function(require/*t*/) {
                this.deleteNodeFromRangeWithID(global/*e*/, require/*t*/)
            }.bind(this)), this.$GraphQLStoreWriter_isOptimisticUpdate || this.$GraphQLStoreWriter_nodeRangeTracker.clearRangeIDsForNodeID(global/*e*/), this.$GraphQLStoreWriter_notifyOnChange(global/*e*/))
        }
    }, o.prototype.storeNodeWithID = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        requireLazy/*r*/ = g.prunePathForDataID(requireDynamic/*n*/, requireLazy/*r*/);
        var module/*i*/ = this.$GraphQLStoreWriter_getNodeSink();
        module/*i*/[requireDynamic/*n*/] || (module/*i*/[requireDynamic/*n*/] = m.createPointerWithID(requireDynamic/*n*/), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || (this.$GraphQLStoreWriter_newlyAddedIDs[requireDynamic/*n*/] = !0)), m.isClientID(requireDynamic/*n*/) && !module/*i*/[requireDynamic/*n*/].__path__ && (module/*i*/[requireDynamic/*n*/].__path__ = requireLazy/*r*/.clone()), this.$GraphQLStoreWriter_traverseNode(global/*e*/, require/*t*/, module/*i*/[requireDynamic/*n*/], requireLazy/*r*/), (this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || this.$GraphQLStoreWriter_newlyAddedIDs[requireDynamic/*n*/]) && this.$GraphQLStoreWriter_queryTracker.addQueryForID(requireDynamic/*n*/, global/*e*/)
    }, o.prototype.$GraphQLStoreWriter_traverseNode = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        for (var o = global/*e*/.getOwnFields(), a = 0; a < o.length; a++) {
            var s = o[a];
            requireLazy/*r*/.withField(s, function() {
                this.$GraphQLStoreWriter_storeField(module/*i*/ || global/*e*/, s, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/)
            }.bind(this))
        }
        for (var l = global/*e*/.getFragments(), u = 0; u < l.length; u++) this.$GraphQLStoreWriter_traverseNode(l[u], require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ || global/*e*/)
    }, o.prototype.$GraphQLStoreWriter_storeField = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        var o, a, s = requireLazy/*r*/.__dataID__,
            l = _.getStorageKeyForField(require/*t*/, {}),
            u = require/*t*/.getGeneratedAlias();
        if (o = requireDynamic/*n*/.hasOwnProperty(u) ? requireDynamic/*n*/[u] : requireDynamic/*n*/[require/*t*/.getGeneratedFieldName()], Array.isArray(o))
            if (l == R && _.isRangeNode(global/*e*/)) {
                var c = global/*e*/.getCalls();
                if (b(c)) return void console.error("The field %s is a range node, and thus expected to have a first() or last() filter call", global/*e*/.getFieldName());
                s || S(0, "Parent of edges must have an ID");
                for (var d, g = require/*t*/.getEdgesID() && f.isFieldTracked(require/*t*/, s), T = 0; T < o.length; T++) {
                    var x = o[T],
                        P = x.node;
                    if (null === P) d = d || o.slice(0, T);
                    else {
                        var I = P.id || P.__dataID__ || y(),
                            F = v(s, I);
                        P.__dataID__ = I, x.__dataID__ = F, this.$GraphQLStoreWriter_nodeRangeTracker.addRangeIDForNodeID(s, I), this.storeNodeWithID(require/*t*/, x, F, module/*i*/), d && d.push(x), g && f.trackEdge(require/*t*/, F, s)
                    }
                }
                o = d || o;
                var L = !1,
                    M = this.$GraphQLStoreWriter_nodeData[s] || requireLazy/*r*/,
                    Q = this.$GraphQLStoreWriter_forceIndex && (void 0 === M.__forceIndex__ || this.$GraphQLStoreWriter_forceIndex > M.__forceIndex__);
                !M.__range__ || Q ? (requireLazy/*r*/.__range__ = new h(this.$GraphQLStoreWriter_nodeData), requireLazy/*r*/.__filterCalls__ = _.getFilterCalls(c), L = !0, Q && (requireLazy/*r*/.__forceIndex__ = this.$GraphQLStoreWriter_forceIndex)) : requireLazy/*r*/.__range__ = M.__range__;
                var A = requireDynamic/*n*/[E];
                A || (A = {
                    has_previous_page: !1,
                    has_next_page: !1
                }), requireLazy/*r*/.__range__.addItems(c, {}, o, A), b(M) || b(o) || this.$GraphQLStoreWriter_notifyOnChange(s)
            } else {
                if (l == C) throw new Error("Request edges instead of nodes, cursor field is required");
                var k = !1;
                requireLazy/*r*/[l] ? requireLazy/*r*/[l].length > o.length && (requireLazy/*r*/[l].length = o.length, this.$GraphQLStoreWriter_notifyOnChange(s), k = !0) : (requireLazy/*r*/[l] = [], this.$GraphQLStoreWriter_notifyOnChange(s), k = !0);
                for (var O = 0; O < o.length; O++)
                    if ("object" != typeof o[O]) requireLazy/*r*/[l][O] !== o[O] && (requireLazy/*r*/[l][O] = o[O], k || (this.$GraphQLStoreWriter_notifyOnChange(s), k = !0));
                    else {
                        if (a = null, o[O].id) a = o[O].id;
                        else {
                            var N = this.$GraphQLStoreWriter_nodeData[s] || requireLazy/*r*/;
                            N && Array.isArray(N[l]) && N[l][O] && (a = N[l][O].__dataID__)
                        }
                        a || (a = y()), requireLazy/*r*/[l][O] && requireLazy/*r*/[l][O].__dataID__ === a || (requireLazy/*r*/[l][O] = m.createPointerWithID(a), k || (this.$GraphQLStoreWriter_notifyOnChange(s), k = !0)), this.storeNodeWithID(require/*t*/, o[O], a, module/*i*/)
                    }
            } else if (require/*t*/.hasFields()) {
            if (a = null, l == E) return;
            if (void 0 === o || null === o) return void this.$GraphQLStoreWriter_writeData(requireLazy/*r*/, l, o);
            l === D ? a = p.VIEWER_CLIENT_ID : l == w ? a = o.__dataID__ || o.id || y() : (a = o.id, !a && s && (N = this.$GraphQLStoreWriter_nodeData[s], N && N[l] ? a = N[l].__dataID__ : requireLazy/*r*/ && requireLazy/*r*/[l] && (a = requireLazy/*r*/[l].__dataID__)), a || (a = y())), this.$GraphQLStoreWriter_writePointer(requireLazy/*r*/, l, a), this.storeNodeWithID(require/*t*/, o, a, module/*i*/)
        } else this.$GraphQLStoreWriter_writeData(requireLazy/*r*/, l, o)
    }, o.prototype.$GraphQLStoreWriter_handleOptimisticRangeUpdate = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        requireDynamic/*n*/ in d.RANGE_OPERATIONS || S(0, "Invalid operation %s provided", requireDynamic/*n*/), requireDynamic/*n*/ === d.REMOVE && "string" == typeof global/*e*/ || requireDynamic/*n*/ !== d.REMOVE && "object" == typeof global/*e*/ || S(0, "Incorrect edge information provided");
        var requireLazy/*r*/ = this.$GraphQLStoreWriter_queuedData;
        require/*t*/ in requireLazy/*r*/ || (requireLazy/*r*/[require/*t*/] = {}), requireDynamic/*n*/ in requireLazy/*r*/[require/*t*/] || (requireLazy/*r*/[require/*t*/][requireDynamic/*n*/] = []), requireDynamic/*n*/ === d.PREPEND ? requireLazy/*r*/[require/*t*/][requireDynamic/*n*/].unshift(global/*e*/) : requireLazy/*r*/[require/*t*/][requireDynamic/*n*/].push(global/*e*/)
    }, o.prototype.$GraphQLStoreWriter_getRanges = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$GraphQLStoreWriter_nodeData,
            requireLazy/*r*/ = requireDynamic/*n*/[global/*e*/],
            module/*i*/ = [];
        if (requireLazy/*r*/)
            for (var o in requireLazy/*r*/) {
                var s = a(o);
                if (s === require/*t*/) {
                    var l = requireDynamic/*n*/[requireLazy/*r*/[o].__dataID__];
                    l && l.__range__ && l.__range__ instanceof h && l.__filterCalls__ ? module/*i*/.push({
                        rangeID: l.__dataID__,
                        range: l.__range__,
                        calls: l.__filterCalls__
                    }) : u.warn("Found a field matching connectionName with no range")
                }
            }
        return module/*i*/
    }, o.prototype.$GraphQLStoreWriter_notifyOnChange = function(global/*e*/) {
        global/*e*/ && this.$GraphQLStoreWriter_onChange && this.$GraphQLStoreWriter_onChange(global/*e*/)
    }, o.prototype.$GraphQLStoreWriter_writeData = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/[require/*t*/] !== requireDynamic/*n*/ && (global/*e*/[require/*t*/] = requireDynamic/*n*/, this.$GraphQLStoreWriter_notifyOnChange(global/*e*/.__dataID__))
    }, o.prototype.$GraphQLStoreWriter_writePointer = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/[require/*t*/] && requireDynamic/*n*/ === global/*e*/[require/*t*/].__dataID__ || (global/*e*/[require/*t*/] = m.createPointerWithID(requireDynamic/*n*/), this.$GraphQLStoreWriter_notifyOnChange(global/*e*/.__dataID__))
    }, o.prototype.$GraphQLStoreWriter_getNodeSink = function() {
        return this.$GraphQLStoreWriter_isOptimisticUpdate ? this.$GraphQLStoreWriter_queuedData : this.$GraphQLStoreWriter_nodeData
    }, module/*i*/.exports = o
});