__d("GraphQLStore",["ActionCollisionMap","ActionQueue","DiffQueryBuilder","DliteLogger","DliteProfiler","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationDataHandler","GraphQLMutationProperties","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryTracker","GraphQLStatusConstants","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreNodeRangeTracker","GraphQLStoreQueryPath","GraphQLStoreReader","GraphQLStoreWriter","generateClientID","generateForceIndex","invariant","isEmpty","keyMirror","mapObject","mixInEventEmitter"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return new GraphQLStoreWriter/*I*/(H, V, U, j, N, e, GraphQLStoreChangeEmitter/*E*/.broadcastChangeForID, t)
    }

    function a(e, t, n) {
        var r = GraphQLMutationDataHandler/*v*/.getMutationType(e);
        e = e[r], t instanceof GraphQL_EXPERIMENTAL/*_*/.Mutation || invariant/*M*/(0, "must pass a mutation into handleMutationResult");
        for (var i = GraphQLMutatorHub/*R*/.getConfigs(r), a = o(n, generateForceIndex/*L*/()), s = 0; s < i.length; s++) {
            var l = i[s];
            switch (l.handlerType) {
                case GraphQLMutatorConstants/*b*/.NODE_DELETE_HANDLER:
                    a.handleNodeDeleteMutation(e, l.config);
                    break;
                case GraphQLMutatorConstants/*b*/.RANGE_ADD_HANDLER:
                    a.handleRangeAddMutation(e, t, l.config, GraphQLMutationProperties/*S*/.getRangeConfigForType(r));
                    break;
                case GraphQLMutatorConstants/*b*/.RANGE_DELETE_HANDLER:
                    a.handleRangeDeleteMutation(e, l.config);
                    break;
                default:
                    console.error('"%s" is not mapped to a mutation handler', l.handlerType)
            }
        }
        a.handleMergeMutation(e, t, r)
    }

    function s(e) {
        a(e.getOptimisticPayload(), e.getOptimisticPayloadQuery(), GraphQLMutatorConstants/*b*/.OPTIMISTIC_UPDATE);
        var t = e.getClientMutationID(),
            n = G[t];
        n && l(n, GraphQLStatusConstants/*C*/.ERROR)
    }

    function l(e, t) {
        t in GraphQLStatusConstants/*C*/ || invariant/*M*/(0, '"%s" is not a valid GraphQLStatusConstant.', t);
        var n = V[e];
        n || invariant/*M*/(0, "Invalid dataID %s was passed to `setStatusForID`. Can only set status for queued node.", e), n.__status__ = t, GraphQLStoreChangeEmitter/*E*/.broadcastChangeForID(e)
    }

    function u(e) {
        var t = V[e];
        t || invariant/*M*/(0, "Invalid dataID %s was passed to `clearStatusForID`. Can only set status for queued node.", e), delete t.__status__, GraphQLStoreChangeEmitter/*E*/.broadcastChangeForID(e)
    }

    function c(e) {
        for (var t in V) V.hasOwnProperty(t) && (delete V[t], e && e(t))
    }

    function p(e) {
        var t = ActionCollisionMap/*d*/.getKeyForClientMutationID(e);
        t && (ActionCollisionMap/*d*/.shiftActionForKey(t), ActionCollisionMap/*d*/.iterateOverActionsForKey(t, function(e) {
            ActionQueue/*h*/.removeFromQueue(e.getClientMutationID())
        }), ActionCollisionMap/*d*/.clearActionsForKey(t))
    }
    var ActionCollisionMap/*d*/ = t("ActionCollisionMap"),
        ActionQueue/*h*/ = t("ActionQueue"),
        DiffQueryBuilder/*f*/ = t("DiffQueryBuilder"),
        DliteLogger/*m*/ = t("DliteLogger"),
        DliteProfiler/*g*/ = t("DliteProfiler"),
        GraphQL_EXPERIMENTAL/*_*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*y*/ = t("GraphQLConstants"),
        GraphQLMutationDataHandler/*v*/ = t("GraphQLMutationDataHandler"),
        GraphQLMutationProperties/*S*/ = t("GraphQLMutationProperties"),
        GraphQLMutatorConstants/*b*/ = t("GraphQLMutatorConstants"),
        GraphQLMutatorHub/*R*/ = t("GraphQLMutatorHub"),
        GraphQLQueryTracker/*w*/ = t("GraphQLQueryTracker"),
        GraphQLStatusConstants/*C*/ = t("GraphQLStatusConstants"),
        GraphQLStoreChangeEmitter/*E*/ = t("GraphQLStoreChangeEmitter"),
        GraphQLStoreDataHandler/*D*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreNodeRangeTracker/*T*/ = t("GraphQLStoreNodeRangeTracker"),
        GraphQLStoreQueryPath/*x*/ = t("GraphQLStoreQueryPath"),
        GraphQLStoreReader/*P*/ = t("GraphQLStoreReader"),
        GraphQLStoreWriter/*I*/ = t("GraphQLStoreWriter"),
        generateClientID/*F*/ = t("generateClientID"),
        generateForceIndex/*L*/ = t("generateForceIndex"),
        invariant/*M*/ = t("invariant"),
        isEmpty/*Q*/ = t("isEmpty"),
        keyMirror/*A*/ = t("keyMirror"),
        mapObject/*k*/ = t("mapObject"),
        mixInEventEmitter/*O*/ = t("mixInEventEmitter"),
        N = {},
        G = {},
        $ = {},
        B = {},
        H = {},
        V = {},
        q = {},
        U = new GraphQLQueryTracker/*w*/,
        j = new GraphQLStoreNodeRangeTracker/*T*/,
        W = GraphQLConstants/*y*/.NODE,
        K = GraphQLConstants/*y*/.NODES,
        z = GraphQLConstants/*y*/.VIEWER,
        X = GraphQLConstants/*y*/.CUSTOM_ROOTCALLS,
        Y = GraphQLConstants/*y*/.IDLESS_ROOTCALLS,
        J = {
            Events: keyMirror/*A*/({
                beginQuery: !0,
                dataFromServer: !0,
                endQuery: !0
            }),
            handleOptimisticMutation: function(e) {
                ActionQueue/*h*/.appendToQueue(e), s(e)
            },
            handleServerMutation: function(e, t) {
                var n = GraphQLMutationDataHandler/*v*/.getMutationType(e),
                    r = e[n].client_mutation_id,
                    i = ActionCollisionMap/*d*/.getKeyForClientMutationID(r);
                if (i) {
                    var o = ActionCollisionMap/*d*/.shiftActionForKey(i);
                    o.getClientMutationID() !== r && invariant/*M*/(0, "action sent to server must be first in the list for its key");
                    var l = ActionCollisionMap/*d*/.getFirstActionForKey(i);
                    l && l.rerunServerAction()
                }
                var u = ActionQueue/*h*/.getActionByID(r);
                u && (ActionQueue/*h*/.removeFromQueue(r), c(), ActionQueue/*h*/.iterateOverQueue(s)), a(e, t, GraphQLMutatorConstants/*b*/.SERVER_UPDATE), delete G[r]
            },
            handleMutationRollback: function(e) {
                var t = ActionQueue/*h*/.getActionByID(e);
                t && ActionQueue/*h*/.removeFromQueue(e), p(e), c(GraphQLStoreChangeEmitter/*E*/.broadcastChangeForID), ActionQueue/*h*/.iterateOverQueue(s)
            },
            handleMutationError: function(e) {
                p(e), c(), ActionQueue/*h*/.iterateOverQueue(s)
            },
            setRangeAddErrorStatus: function(e) {
                var t = GraphQLMutationDataHandler/*v*/.getMutationType(e);
                e = e[t];
                var n = GraphQLMutatorHub/*R*/.getConfigs(t);
                n.some(function(e) {
                    return e.handlerType === GraphQLMutatorConstants/*b*/.RANGE_ADD_HANDLER
                }) || invariant/*M*/(0, "GraphQLStore.setRangeAddErrorStatus expects a range-add payload");
                var r = e.client_mutation_id,
                    i = N[r];
                l(i, GraphQLStatusConstants/*C*/.ERROR), $[i] = r, G[r] = i
            },
            handleMutationRetry: function(e) {
                var t = $[e];
                t || invariant/*M*/(0, "Can only retry mutations that encountered errors");
                var n = ActionQueue/*h*/.getActionByID(t);
                n || invariant/*M*/(0, "Cannot retry a mutation that has not previously been tried"), delete $[e], u(e), n.rerunServerAction()
            },
            handleUpdate: function(e, t, n, r) {
                t = t.getQuery();
                var i, a = DliteLogger/*m*/.logClientEvent("GraphQLStore.handleUpdate:" + t.getDescription()),
                    s = t.rootCall().getName();
                if (s === z) i = o(n, r), i.storeNodeWithID(t, e.viewer, GraphQLConstants/*y*/.VIEWER_CLIENT_ID, new GraphQLStoreQueryPath/*x*/(t));
                else {
                    if (!(s === W || s === K || s in X)) throw new Error("Unsupported graphQL root call: use viewer, username, group, node, or nodes");
                    for (var l in e) {
                        i = o(n, r);
                        var u = e[l];
                        if (null === u) i.deleteNodeWithID(l);
                        else {
                            var c = l;
                            if (s !== K && s !== W) {
                                var p = t.rootCall().getArgs();
                                if (1 !== p.length) throw new Error("Custom root calls must request with only one argument");
                                var ActionCollisionMap/*d*/ = p[0].getCallValue();
                                if (q[s] = q[s] || {}, c = q[s][ActionCollisionMap/*d*/], !c) {
                                    if (c = s in Y ? generateClientID/*F*/() : u.id, !c) throw new Error("Root calls that has an id field must request for id");
                                    q[s][ActionCollisionMap/*d*/] = c
                                }
                            }
                            var ActionQueue/*h*/ = new GraphQLStoreQueryPath/*x*/(s === K ? new GraphQL_EXPERIMENTAL/*_*/.Query("node", [c]) : t);
                            i.storeNodeWithID(t, u, c, ActionQueue/*h*/)
                        }
                    }
                }
                a.stop()
            },
            buildFragmentQueryForDataID: function(e, t) {
                if (GraphQLStoreDataHandler/*D*/.isClientID(t)) {
                    var n = H[t] || V[t];
                    return n.__path__.getQueryForFragment(e)
                }
                return new GraphQLStoreQueryPath/*x*/(new GraphQL_EXPERIMENTAL/*_*/.Query("node", [t])).getQueryForFragment(e)
            },
            resolveQueryFromStore: function(e) {
                var t = J.getIDsFromQuery(e),
                    n = {};
                for (var r in t) {
                    var i = J.getDeepNodeByID(t[r], e.getQuery());
                    void 0 !== i && (n[r] = i)
                }
                return n
            },
            canResolveQueriesFromStore: function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && e[t] && J.getDiffQueries(e[t]).length) return !1;
                return !0
            },
            getDiffQueries: function(e) {
                var t = new DiffQueryBuilder/*f*/(H, U);
                return t.getDiffQueries(e, J.getIDsFromQuery(e))
            },
            resolvePointersForQuery: function(e) {
                return mapObject/*k*/(J.getIDsFromQuery(e), GraphQLStoreDataHandler/*D*/.createPointerWithID)
            },
            injectCachingConfig: function(e) {
                B = e
            },
            isValidNodeID: function(e) {
                return H.hasOwnProperty(e) || V.hasOwnProperty(e)
            },
            isQueuedNodeID: function(e) {
                return V.hasOwnProperty(e)
            },
            getDeepNodeFromData: function(e, t, n, r) {
                var i = new GraphQLStoreReader/*P*/(H, V, n);
                return i.retrieveData(e, t, r)
            },
            getDeepNodeByID: function(e, t, n) {
                return J.getDeepNodeFromData(t, GraphQLStoreDataHandler/*D*/.createPointerWithID(e), n)
            },
            __debug: {
                nodeData: H,
                queuedData: V
            },
            getTrackedQueryByID: function(e) {
                return Array.isArray(e) || (e = [e]), U.getQueryForIDs(e)
            },
            getIDsFromQuery: function(e) {
                e = e.getQuery();
                var t = {},
                    n = e.rootCall(),
                    r = n.getName();
                if (r === z) t.viewer = GraphQLConstants/*y*/.VIEWER_CLIENT_ID;
                else if (r === W || r === K || r in X)
                    for (var i = n.getArgs(), o = 0; o < i.length; o++)
                        if (!(i[o] instanceof GraphQL_EXPERIMENTAL/*_*/.BatchCallVariable)) {
                            var a = i[o].getCallValue();
                            q[r] && q[r][a] && (a = q[r][a]), t[i[o].getCallValue()] = a
                        }
                return isEmpty/*Q*/(t) && invariant/*M*/(0, "Unsupported graphQL root call: use viewer, username, group, node, or nodes"), t
            }
        };
    DliteProfiler/*g*/.instrumentMethods(J, {
        handleUpdate: "GraphQLStore.handleUpdate",
        getDiffQueries: "GraphQLStore.getDiffQueries",
        resolveQueryFromStore: "GraphQLStore.resolveQueryFromStore"
    }), mixInEventEmitter/*O*/(J, J.Events), i.exports = J
});