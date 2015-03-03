__d("GraphQLStoreWriter",["DliteLog","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutatorConstants","GraphQLRange","GraphQLRangeTracker","GraphQLStoreDataHandler","GraphQLStoreQueryPath","GraphQLStoreRangeUtils","generateClientID","generateClientEdgeID","invariant","isEmpty"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/) {
    "use strict";

    function GraphQLMutatorConstants/*isEmpty/*o*/*/(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/, GraphQLMutatorConstants/*isEmpty/*o*/*/, GraphQLRange/*a*/, GraphQLRangeTracker/*s*/) {
        this.$GraphQLStoreWriter_nodeData = global/*e*/, GraphQLStoreDataHandler/*this.$GraphQLStoreWriter_queuedData*/ = require/*exports/*t*/*/, GraphQLStoreQueryPath/*this.$GraphQLStoreWriter_queryTracker*/ = requireDynamic/*DliteLog/*n*/*/, GraphQLStoreRangeUtils/*this.$GraphQLStoreWriter_nodeRangeTracker*/ = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, generateClientID/*this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap*/ = module/*GraphQLConstants/*i*/*/, generateClientEdgeID/*this.$GraphQLStoreWriter_onChange*/ = GraphQLRange/*a*/, invariant/*this.$GraphQLStoreWriter_forceIndex*/ = GraphQLRangeTracker/*s*/ || null, !GraphQLMutatorConstants/*isEmpty/*o*/*/ || GraphQLMutatorConstants/*isEmpty/*o*/*/ in d.UPDATE_TYPES || S(0, "Invalid mutation update type %GraphQLRangeTracker/*s*/ passed into GraphQLStore", GraphQLMutatorConstants/*isEmpty/*o*/*/), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !GraphQLMutatorConstants/*isEmpty/*o*/*/, this.$GraphQLStoreWriter_isOptimisticUpdate = GraphQLMutatorConstants/*isEmpty/*o*/*/ === d.OPTIMISTIC_UPDATE, this.$GraphQLStoreWriter_newlyAddedIDs = {}
    }

    function GraphQLRange/*a*/(global/*e*/) {
        return global/*e*/.split(".")[0]
    }

    function GraphQLRangeTracker/*s*/(global/*e*/, require/*exports/*t*/*/) {
        if (1 === global/*e*/.length && global/*e*/[0] === D) return p.VIEWER_CLIENT_ID;
        for (var requireDynamic/*DliteLog/*n*/*/ = 0; requireDynamic/*DliteLog/*n*/*/ < global/*e*/.length; requireDynamic/*DliteLog/*n*/*/++) {
            var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = global/*e*/[requireDynamic/*DliteLog/*n*/*/];
            if (!require/*exports/*t*/*/ || !require/*exports/*t*/*/.hasOwnProperty(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/)) return null;
            require/*exports/*t*/*/ = require/*exports/*t*/*/[requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/]
        }
        return require/*exports/*t*/*/ && require/*exports/*t*/*/.id && "string" == typeof require/*exports/*t*/*/.id ? require/*exports/*t*/*/.id : null
    }

    function l(global/*e*/, require/*exports/*t*/*/) {
        for (var requireDynamic/*DliteLog/*n*/*/ in global/*e*/)
            if (requireDynamic/*DliteLog/*n*/*/ === require/*exports/*t*/*/) return global/*e*/[requireDynamic/*DliteLog/*n*/*/];
        return null
    }
    var u = require/*exports/*t*/*/("DliteLog"),
        c = require/*exports/*t*/*/("GraphQL_EXPERIMENTAL"),
        p = require/*exports/*t*/*/("GraphQLConstants"),
        d = require/*exports/*t*/*/("GraphQLMutatorConstants"),
        h = require/*exports/*t*/*/("GraphQLRange"),
        f = require/*exports/*t*/*/("GraphQLRangeTracker"),
        m = require/*exports/*t*/*/("GraphQLStoreDataHandler"),
        g = require/*exports/*t*/*/("GraphQLStoreQueryPath"),
        _ = require/*exports/*t*/*/("GraphQLStoreRangeUtils"),
        y = require/*exports/*t*/*/("generateClientID"),
        v = require/*exports/*t*/*/("generateClientEdgeID"),
        S = require/*exports/*t*/*/("invariant"),
        b = require/*exports/*t*/*/("isEmpty"),
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
    GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.handleFieldMergeMutation = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = Object.keys(global/*e*/).filter(function(global/*e*/) {
            return !T[global/*e*/]
        });
        1 !== requireDynamic/*DliteLog/*n*/*/.length && S(0, "Simple mutations must have exactly one top-level payload field.");
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/ = requireDynamic/*DliteLog/*n*/*/[0];
        module/*GraphQLConstants/*i*/*/ === D && (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = g.prunePathForDataID(p.VIEWER_CLIENT_ID));
        var GraphQLMutatorConstants/*isEmpty/*o*/*/ = function(requireDynamic/*DliteLog/*n*/*/) {
            var GraphQLRange/*a*/ = requireDynamic/*DliteLog/*n*/*/.getOwnField(module/*GraphQLConstants/*i*/*/);
            GraphQLRange/*a*/ && this.$GraphQLStoreWriter_storeField(require/*exports/*t*/*/, GraphQLRange/*a*/, global/*e*/, {}, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/), requireDynamic/*DliteLog/*n*/*/.getFragments().forEach(GraphQLMutatorConstants/*isEmpty/*o*/*/)
        }.bind(this);
        GraphQLMutatorConstants/*isEmpty/*o*/*/(require/*exports/*t*/*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.handleMergeMutation = function(global/*e*/, require/*exports/*t*/*/) {
        for (var requireDynamic/*DliteLog/*n*/*/ in global/*e*/)
            if (global/*e*/.hasOwnProperty(requireDynamic/*DliteLog/*n*/*/)) {
                var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = global/*e*/[requireDynamic/*DliteLog/*n*/*/];
                if ("object" == typeof requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ && ("id" in requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || requireDynamic/*DliteLog/*n*/*/ === p.VIEWER || Array.isArray(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/))) {
                    var module/*GraphQLConstants/*i*/*/ = {};
                    module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/] = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, this.handleFieldMergeMutation(module/*GraphQLConstants/*i*/*/, require/*exports/*t*/*/)
                }
            }
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.handleRangeAddMutation = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/) {
        var module/*GraphQLConstants/*i*/*/ = global/*e*/[requireDynamic/*DliteLog/*n*/*/.edgeName];
        module/*GraphQLConstants/*i*/*/.node || S(0, "newly added edge must have node field");
        var GraphQLMutatorConstants/*isEmpty/*o*/*/;
        requireDynamic/*DliteLog/*n*/*/.sourceID ? GraphQLMutatorConstants/*isEmpty/*o*/*/ = requireDynamic/*DliteLog/*n*/*/.sourceID : (module/*GraphQLConstants/*i*/*/.source.id || S(0, "add mutation without sourceID in the config must have an id in the source field of the new edge"), GraphQLMutatorConstants/*isEmpty/*o*/*/ = module/*GraphQLConstants/*i*/*/.source.id);
        var GraphQLRange/*a*/ = global/*e*/.client_mutation_id,
            GraphQLRangeTracker/*s*/ = this.$GraphQLStoreWriter_getRanges(GraphQLMutatorConstants/*isEmpty/*o*/*/, requireDynamic/*DliteLog/*n*/*/.connectionName),
            u = module/*GraphQLConstants/*i*/*/.node.id ? module/*GraphQLConstants/*i*/*/.node.id : y();
        module/*GraphQLConstants/*i*/*/.node.__dataID__ = u, this.$GraphQLStoreWriter_isOptimisticUpdate ? module/*GraphQLConstants/*i*/*/.node.id = u : this.$GraphQLStoreWriter_shouldUpdateTrackedQueries = !0, module/*GraphQLConstants/*i*/*/.cursor = module/*GraphQLConstants/*i*/*/.cursor || p.DUMMY_CURSOR_ID;
        for (var c = 0; c < GraphQLRangeTracker/*s*/.length; c++) {
            var h = l(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, GraphQLRangeTracker/*s*/[c].calls.toString());
            if (h) {
                var f = GraphQLRangeTracker/*s*/[c].rangeID,
                    g = this.$GraphQLStoreWriter_nodeData[f].__path__.clone();
                g.pushField(x);
                var _ = v(f, u),
                    b = !1,
                    R = function(global/*e*/) {
                        var require/*exports/*t*/*/ = global/*e*/.getOwnField(requireDynamic/*DliteLog/*n*/*/.edgeName);
                        require/*exports/*t*/*/ && (this.storeNodeWithID(require/*exports/*t*/*/, module/*GraphQLConstants/*i*/*/, _, g), b = !0), global/*e*/.getFragments().forEach(R)
                    }.bind(this);
                if (R(require/*exports/*t*/*/), b || S(0, "Mutation query must include the relevant edge"), this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(GraphQLStoreDataHandler/*this.$GraphQLStoreWriter_queuedData*/[_], f, h);
                else {
                    var w = this.$GraphQLStoreWriter_nodeData[_];
                    switch (h) {
                        case d.PREPEND:
                            GraphQLRangeTracker/*s*/[c].range.prependEdge(w);
                            break;
                        case d.APPEND:
                            GraphQLRangeTracker/*s*/[c].range.appendEdge(w);
                            break;
                        default:
                            console.error("Invalid GraphQLRange operation")
                    }
                    GraphQLStoreRangeUtils/*this.$GraphQLStoreWriter_nodeRangeTracker*/.addRangeIDForNodeID(f, u);
                    var C = generateClientID/*this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap*/[GraphQLRange/*a*/];
                    C && (m.updateClientServerIDMap(C, w.node.__dataID__), delete generateClientID/*this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap*/[GraphQLRange/*a*/])
                }
            }
        }
        this.$GraphQLStoreWriter_isOptimisticUpdate && (generateClientID/*this.$GraphQLStoreWriter_mutationIDToClientNodeIDMap*/[GraphQLRange/*a*/] = u), this.$GraphQLStoreWriter_notifyOnChange(GraphQLMutatorConstants/*isEmpty/*o*/*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.handleRangeDeleteMutation = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = global/*e*/[require/*exports/*t*/*/.deletedIDFieldName];
        void 0 === requireDynamic/*DliteLog/*n*/*/ && S(0, "deleted id must be in the payload");
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = require/*exports/*t*/*/.pathToConnection.pop(),
            module/*GraphQLConstants/*i*/*/ = GraphQLRangeTracker/*s*/(require/*exports/*t*/*/.pathToConnection, global/*e*/);
        if (require/*exports/*t*/*/.pathToConnection.push(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/), module/*GraphQLConstants/*i*/*/)
            for (var GraphQLMutatorConstants/*isEmpty/*o*/*/ = this.$GraphQLStoreWriter_getRanges(module/*GraphQLConstants/*i*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/), GraphQLRange/*a*/ = 0; GraphQLRange/*a*/ < GraphQLMutatorConstants/*isEmpty/*o*/*/.length; GraphQLRange/*a*/++) this.deleteNodeFromRangeWithID(requireDynamic/*DliteLog/*n*/*/, GraphQLMutatorConstants/*isEmpty/*o*/*/[GraphQLRange/*a*/].rangeID)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.handleNodeDeleteMutation = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = global/*e*/[require/*exports/*t*/*/.deletedIDFieldName];
        void 0 === requireDynamic/*DliteLog/*n*/*/ && S(0, "deleted id must be in the payload"), this.deleteNodeWithID(requireDynamic/*DliteLog/*n*/*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.deleteNodeFromRangeWithID = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = v(require/*exports/*t*/*/, global/*e*/);
        if (this.$GraphQLStoreWriter_isOptimisticUpdate) this.$GraphQLStoreWriter_handleOptimisticRangeUpdate(requireDynamic/*DliteLog/*n*/*/, require/*exports/*t*/*/, d.REMOVE);
        else {
            var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = this.$GraphQLStoreWriter_nodeData[require/*exports/*t*/*/];
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__range__.removeEdgeWithID(requireDynamic/*DliteLog/*n*/*/)
        }
        this.$GraphQLStoreWriter_notifyOnChange(require/*exports/*t*/*/), this.deleteNodeWithID(requireDynamic/*DliteLog/*n*/*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.deleteNodeWithID = function(global/*e*/) {
        var require/*exports/*t*/*/ = GraphQLStoreDataHandler/*this.$GraphQLStoreWriter_queuedData*/[global/*e*/] || this.$GraphQLStoreWriter_nodeData[global/*e*/];
        if (null !== require/*exports/*t*/*/) {
            var requireDynamic/*DliteLog/*n*/*/ = this.$GraphQLStoreWriter_getNodeSink();
            null !== requireDynamic/*DliteLog/*n*/*/[global/*e*/] && (requireDynamic/*DliteLog/*n*/*/[global/*e*/] = null, GraphQLStoreRangeUtils/*this.$GraphQLStoreWriter_nodeRangeTracker*/.getRangeIDsForNodeID(global/*e*/).forEach(function(require/*exports/*t*/*/) {
                this.deleteNodeFromRangeWithID(global/*e*/, require/*exports/*t*/*/)
            }.bind(this)), this.$GraphQLStoreWriter_isOptimisticUpdate || GraphQLStoreRangeUtils/*this.$GraphQLStoreWriter_nodeRangeTracker*/.clearRangeIDsForNodeID(global/*e*/), this.$GraphQLStoreWriter_notifyOnChange(global/*e*/))
        }
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.storeNodeWithID = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/) {
        requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = g.prunePathForDataID(requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/);
        var module/*GraphQLConstants/*i*/*/ = this.$GraphQLStoreWriter_getNodeSink();
        module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/] || (module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/] = m.createPointerWithID(requireDynamic/*DliteLog/*n*/*/), this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || (this.$GraphQLStoreWriter_newlyAddedIDs[requireDynamic/*DliteLog/*n*/*/] = !0)), m.isClientID(requireDynamic/*DliteLog/*n*/*/) && !module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/].__path__ && (module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/].__path__ = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.clone()), this.$GraphQLStoreWriter_traverseNode(global/*e*/, require/*exports/*t*/*/, module/*GraphQLConstants/*i*/*/[requireDynamic/*DliteLog/*n*/*/], requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/), (this.$GraphQLStoreWriter_shouldUpdateTrackedQueries || this.$GraphQLStoreWriter_newlyAddedIDs[requireDynamic/*DliteLog/*n*/*/]) && GraphQLStoreQueryPath/*this.$GraphQLStoreWriter_queryTracker*/.addQueryForID(requireDynamic/*DliteLog/*n*/*/, global/*e*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_traverseNode = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/) {
        for (var GraphQLMutatorConstants/*isEmpty/*o*/*/ = global/*e*/.getOwnFields(), GraphQLRange/*a*/ = 0; GraphQLRange/*a*/ < GraphQLMutatorConstants/*isEmpty/*o*/*/.length; GraphQLRange/*a*/++) {
            var GraphQLRangeTracker/*s*/ = GraphQLMutatorConstants/*isEmpty/*o*/*/[GraphQLRange/*a*/];
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.withField(GraphQLRangeTracker/*s*/, function() {
                this.$GraphQLStoreWriter_storeField(module/*GraphQLConstants/*i*/*/ || global/*e*/, GraphQLRangeTracker/*s*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/)
            }.bind(this))
        }
        for (var l = global/*e*/.getFragments(), u = 0; u < l.length; u++) this.$GraphQLStoreWriter_traverseNode(l[u], require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/ || global/*e*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_storeField = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/, requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, module/*GraphQLConstants/*i*/*/) {
        var GraphQLMutatorConstants/*isEmpty/*o*/*/, GraphQLRange/*a*/, GraphQLRangeTracker/*s*/ = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__dataID__,
            l = _.getStorageKeyForField(require/*exports/*t*/*/, {}),
            u = require/*exports/*t*/*/.getGeneratedAlias();
        if (GraphQLMutatorConstants/*isEmpty/*o*/*/ = requireDynamic/*DliteLog/*n*/*/.hasOwnProperty(u) ? requireDynamic/*DliteLog/*n*/*/[u] : requireDynamic/*DliteLog/*n*/*/[require/*exports/*t*/*/.getGeneratedFieldName()], Array.isArray(GraphQLMutatorConstants/*isEmpty/*o*/*/))
            if (l == R && _.isRangeNode(global/*e*/)) {
                var c = global/*e*/.getCalls();
                if (b(c)) return void console.error("The field %GraphQLRangeTracker/*s*/ is GraphQLRange/*a*/ range node, and thus expected to have GraphQLRange/*a*/ first() or last() filter call", global/*e*/.getFieldName());
                GraphQLRangeTracker/*s*/ || S(0, "Parent of edges must have an ID");
                for (var d, g = require/*exports/*t*/*/.getEdgesID() && f.isFieldTracked(require/*exports/*t*/*/, GraphQLRangeTracker/*s*/), T = 0; T < GraphQLMutatorConstants/*isEmpty/*o*/*/.length; T++) {
                    var x = GraphQLMutatorConstants/*isEmpty/*o*/*/[T],
                        P = x.node;
                    if (null === P) d = d || GraphQLMutatorConstants/*isEmpty/*o*/*/.slice(0, T);
                    else {
                        var I = P.id || P.__dataID__ || y(),
                            F = v(GraphQLRangeTracker/*s*/, I);
                        P.__dataID__ = I, x.__dataID__ = F, GraphQLStoreRangeUtils/*this.$GraphQLStoreWriter_nodeRangeTracker*/.addRangeIDForNodeID(GraphQLRangeTracker/*s*/, I), this.storeNodeWithID(require/*exports/*t*/*/, x, F, module/*GraphQLConstants/*i*/*/), d && d.push(x), g && f.trackEdge(require/*exports/*t*/*/, F, GraphQLRangeTracker/*s*/)
                    }
                }
                GraphQLMutatorConstants/*isEmpty/*o*/*/ = d || GraphQLMutatorConstants/*isEmpty/*o*/*/;
                var L = !1,
                    M = this.$GraphQLStoreWriter_nodeData[GraphQLRangeTracker/*s*/] || requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/,
                    Q = invariant/*this.$GraphQLStoreWriter_forceIndex*/ && (void 0 === M.__forceIndex__ || invariant/*this.$GraphQLStoreWriter_forceIndex*/ > M.__forceIndex__);
                !M.__range__ || Q ? (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__range__ = new h(this.$GraphQLStoreWriter_nodeData), requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__filterCalls__ = _.getFilterCalls(c), L = !0, Q && (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__forceIndex__ = invariant/*this.$GraphQLStoreWriter_forceIndex*/)) : requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__range__ = M.__range__;
                var A = requireDynamic/*DliteLog/*n*/*/[E];
                A || (A = {
                    has_previous_page: !1,
                    has_next_page: !1
                }), requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/.__range__.addItems(c, {}, GraphQLMutatorConstants/*isEmpty/*o*/*/, A), b(M) || b(GraphQLMutatorConstants/*isEmpty/*o*/*/) || this.$GraphQLStoreWriter_notifyOnChange(GraphQLRangeTracker/*s*/)
            } else {
                if (l == C) throw new Error("Request edges instead of nodes, cursor field is required");
                var k = !1;
                requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l] ? requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l].length > GraphQLMutatorConstants/*isEmpty/*o*/*/.length && (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l].length = GraphQLMutatorConstants/*isEmpty/*o*/*/.length, this.$GraphQLStoreWriter_notifyOnChange(GraphQLRangeTracker/*s*/), k = !0) : (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l] = [], this.$GraphQLStoreWriter_notifyOnChange(GraphQLRangeTracker/*s*/), k = !0);
                for (var O = 0; O < GraphQLMutatorConstants/*isEmpty/*o*/*/.length; O++)
                    if ("object" != typeof GraphQLMutatorConstants/*isEmpty/*o*/*/[O]) requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l][O] !== GraphQLMutatorConstants/*isEmpty/*o*/*/[O] && (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l][O] = GraphQLMutatorConstants/*isEmpty/*o*/*/[O], k || (this.$GraphQLStoreWriter_notifyOnChange(GraphQLRangeTracker/*s*/), k = !0));
                    else {
                        if (GraphQLRange/*a*/ = null, GraphQLMutatorConstants/*isEmpty/*o*/*/[O].id) GraphQLRange/*a*/ = GraphQLMutatorConstants/*isEmpty/*o*/*/[O].id;
                        else {
                            var N = this.$GraphQLStoreWriter_nodeData[GraphQLRangeTracker/*s*/] || requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/;
                            N && Array.isArray(N[l]) && N[l][O] && (GraphQLRange/*a*/ = N[l][O].__dataID__)
                        }
                        GraphQLRange/*a*/ || (GraphQLRange/*a*/ = y()), requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l][O] && requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l][O].__dataID__ === GraphQLRange/*a*/ || (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l][O] = m.createPointerWithID(GraphQLRange/*a*/), k || (this.$GraphQLStoreWriter_notifyOnChange(GraphQLRangeTracker/*s*/), k = !0)), this.storeNodeWithID(require/*exports/*t*/*/, GraphQLMutatorConstants/*isEmpty/*o*/*/[O], GraphQLRange/*a*/, module/*GraphQLConstants/*i*/*/)
                    }
            } else if (require/*exports/*t*/*/.hasFields()) {
            if (GraphQLRange/*a*/ = null, l == E) return;
            if (void 0 === GraphQLMutatorConstants/*isEmpty/*o*/*/ || null === GraphQLMutatorConstants/*isEmpty/*o*/*/) return void this.$GraphQLStoreWriter_writeData(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, l, GraphQLMutatorConstants/*isEmpty/*o*/*/);
            l === D ? GraphQLRange/*a*/ = p.VIEWER_CLIENT_ID : l == w ? GraphQLRange/*a*/ = GraphQLMutatorConstants/*isEmpty/*o*/*/.__dataID__ || GraphQLMutatorConstants/*isEmpty/*o*/*/.id || y() : (GraphQLRange/*a*/ = GraphQLMutatorConstants/*isEmpty/*o*/*/.id, !GraphQLRange/*a*/ && GraphQLRangeTracker/*s*/ && (N = this.$GraphQLStoreWriter_nodeData[GraphQLRangeTracker/*s*/], N && N[l] ? GraphQLRange/*a*/ = N[l].__dataID__ : requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ && requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l] && (GraphQLRange/*a*/ = requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[l].__dataID__)), GraphQLRange/*a*/ || (GraphQLRange/*a*/ = y())), this.$GraphQLStoreWriter_writePointer(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, l, GraphQLRange/*a*/), this.storeNodeWithID(require/*exports/*t*/*/, GraphQLMutatorConstants/*isEmpty/*o*/*/, GraphQLRange/*a*/, module/*GraphQLConstants/*i*/*/)
        } else this.$GraphQLStoreWriter_writeData(requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/, l, GraphQLMutatorConstants/*isEmpty/*o*/*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_handleOptimisticRangeUpdate = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/) {
        requireDynamic/*DliteLog/*n*/*/ in d.RANGE_OPERATIONS || S(0, "Invalid operation %GraphQLRangeTracker/*s*/ provided", requireDynamic/*DliteLog/*n*/*/), requireDynamic/*DliteLog/*n*/*/ === d.REMOVE && "string" == typeof global/*e*/ || requireDynamic/*DliteLog/*n*/*/ !== d.REMOVE && "object" == typeof global/*e*/ || S(0, "Incorrect edge information provided");
        var requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = GraphQLStoreDataHandler/*this.$GraphQLStoreWriter_queuedData*/;
        require/*exports/*t*/*/ in requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ || (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[require/*exports/*t*/*/] = {}), requireDynamic/*DliteLog/*n*/*/ in requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[require/*exports/*t*/*/] || (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[require/*exports/*t*/*/][requireDynamic/*DliteLog/*n*/*/] = []), requireDynamic/*DliteLog/*n*/*/ === d.PREPEND ? requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[require/*exports/*t*/*/][requireDynamic/*DliteLog/*n*/*/].unshift(global/*e*/) : requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[require/*exports/*t*/*/][requireDynamic/*DliteLog/*n*/*/].push(global/*e*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_getRanges = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*DliteLog/*n*/*/ = this.$GraphQLStoreWriter_nodeData,
            requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/ = requireDynamic/*DliteLog/*n*/*/[global/*e*/],
            module/*GraphQLConstants/*i*/*/ = [];
        if (requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/)
            for (var GraphQLMutatorConstants/*isEmpty/*o*/*/ in requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/) {
                var GraphQLRangeTracker/*s*/ = GraphQLRange/*a*/(GraphQLMutatorConstants/*isEmpty/*o*/*/);
                if (GraphQLRangeTracker/*s*/ === require/*exports/*t*/*/) {
                    var l = requireDynamic/*DliteLog/*n*/*/[requireLazy/*GraphQL_EXPERIMENTAL/*r*/*/[GraphQLMutatorConstants/*isEmpty/*o*/*/].__dataID__];
                    l && l.__range__ && l.__range__ instanceof h && l.__filterCalls__ ? module/*GraphQLConstants/*i*/*/.push({
                        rangeID: l.__dataID__,
                        range: l.__range__,
                        calls: l.__filterCalls__
                    }) : u.warn("Found GraphQLRange/*a*/ field matching connectionName with no range")
                }
            }
        return module/*GraphQLConstants/*i*/*/
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_notifyOnChange = function(global/*e*/) {
        global/*e*/ && generateClientEdgeID/*this.$GraphQLStoreWriter_onChange*/ && generateClientEdgeID/*this.$GraphQLStoreWriter_onChange*/(global/*e*/)
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_writeData = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/) {
        global/*e*/[require/*exports/*t*/*/] !== requireDynamic/*DliteLog/*n*/*/ && (global/*e*/[require/*exports/*t*/*/] = requireDynamic/*DliteLog/*n*/*/, this.$GraphQLStoreWriter_notifyOnChange(global/*e*/.__dataID__))
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_writePointer = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*DliteLog/*n*/*/) {
        global/*e*/[require/*exports/*t*/*/] && requireDynamic/*DliteLog/*n*/*/ === global/*e*/[require/*exports/*t*/*/].__dataID__ || (global/*e*/[require/*exports/*t*/*/] = m.createPointerWithID(requireDynamic/*DliteLog/*n*/*/), this.$GraphQLStoreWriter_notifyOnChange(global/*e*/.__dataID__))
    }, GraphQLMutatorConstants/*isEmpty/*o*/*/.prototype.$GraphQLStoreWriter_getNodeSink = function() {
        return this.$GraphQLStoreWriter_isOptimisticUpdate ? GraphQLStoreDataHandler/*this.$GraphQLStoreWriter_queuedData*/ : this.$GraphQLStoreWriter_nodeData
    }, module/*GraphQLConstants/*i*/*/.exports = GraphQLMutatorConstants/*isEmpty/*o*/*/
});