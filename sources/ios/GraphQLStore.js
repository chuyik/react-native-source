__d("GraphQLStore",["ActionCollisionMap","ActionQueue","DiffQueryBuilder","DliteLogger","DliteProfiler","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationDataHandler","GraphQLMutationProperties","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryTracker","GraphQLStatusConstants","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreNodeRangeTracker","GraphQLStoreQueryPath","GraphQLStoreReader","GraphQLStoreWriter","generateClientID","generateForceIndex","invariant","isEmpty","keyMirror","mapObject","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return new I(H, V, U, j, N, global/*e*/, E.broadcastChangeForID, require/*t*/)
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = v.getMutationType(global/*e*/);
        global/*e*/ = global/*e*/[requireLazy/*r*/], require/*t*/ instanceof _.Mutation || M(0, "must pass a mutation into handleMutationResult");
        for (var module/*i*/ = R.getConfigs(requireLazy/*r*/), a = o(requireDynamic/*n*/, L()), s = 0; s < module/*i*/.length; s++) {
            var l = module/*i*/[s];
            switch (l.handlerType) {
                case b.NODE_DELETE_HANDLER:
                    a.handleNodeDeleteMutation(global/*e*/, l.config);
                    break;
                case b.RANGE_ADD_HANDLER:
                    a.handleRangeAddMutation(global/*e*/, require/*t*/, l.config, S.getRangeConfigForType(requireLazy/*r*/));
                    break;
                case b.RANGE_DELETE_HANDLER:
                    a.handleRangeDeleteMutation(global/*e*/, l.config);
                    break;
                default:
                    console.error('"%s" is not mapped to a mutation handler', l.handlerType)
            }
        }
        a.handleMergeMutation(global/*e*/, require/*t*/, requireLazy/*r*/)
    }

    function s(global/*e*/) {
        a(global/*e*/.getOptimisticPayload(), global/*e*/.getOptimisticPayloadQuery(), b.OPTIMISTIC_UPDATE);
        var require/*t*/ = global/*e*/.getClientMutationID(),
            requireDynamic/*n*/ = G[require/*t*/];
        requireDynamic/*n*/ && l(requireDynamic/*n*/, C.ERROR)
    }

    function l(global/*e*/, require/*t*/) {
        require/*t*/ in C || M(0, '"%s" is not a valid GraphQLStatusConstant.', require/*t*/);
        var requireDynamic/*n*/ = V[global/*e*/];
        requireDynamic/*n*/ || M(0, "Invalid dataID %s was passed to `setStatusForID`. Can only set status for queued node.", global/*e*/), requireDynamic/*n*/.__status__ = require/*t*/, E.broadcastChangeForID(global/*e*/)
    }

    function u(global/*e*/) {
        var require/*t*/ = V[global/*e*/];
        require/*t*/ || M(0, "Invalid dataID %s was passed to `clearStatusForID`. Can only set status for queued node.", global/*e*/), delete require/*t*/.__status__, E.broadcastChangeForID(global/*e*/)
    }

    function c(global/*e*/) {
        for (var require/*t*/ in V) V.hasOwnProperty(require/*t*/) && (delete V[require/*t*/], global/*e*/ && global/*e*/(require/*t*/))
    }

    function p(global/*e*/) {
        var require/*t*/ = d.getKeyForClientMutationID(global/*e*/);
        require/*t*/ && (d.shiftActionForKey(require/*t*/), d.iterateOverActionsForKey(require/*t*/, function(global/*e*/) {
            h.removeFromQueue(global/*e*/.getClientMutationID())
        }), d.clearActionsForKey(require/*t*/))
    }
    var d = require/*t*/("ActionCollisionMap"),
        h = require/*t*/("ActionQueue"),
        f = require/*t*/("DiffQueryBuilder"),
        m = require/*t*/("DliteLogger"),
        g = require/*t*/("DliteProfiler"),
        _ = require/*t*/("GraphQL_EXPERIMENTAL"),
        y = require/*t*/("GraphQLConstants"),
        v = require/*t*/("GraphQLMutationDataHandler"),
        S = require/*t*/("GraphQLMutationProperties"),
        b = require/*t*/("GraphQLMutatorConstants"),
        R = require/*t*/("GraphQLMutatorHub"),
        w = require/*t*/("GraphQLQueryTracker"),
        C = require/*t*/("GraphQLStatusConstants"),
        E = require/*t*/("GraphQLStoreChangeEmitter"),
        D = require/*t*/("GraphQLStoreDataHandler"),
        T = require/*t*/("GraphQLStoreNodeRangeTracker"),
        x = require/*t*/("GraphQLStoreQueryPath"),
        P = require/*t*/("GraphQLStoreReader"),
        I = require/*t*/("GraphQLStoreWriter"),
        F = require/*t*/("generateClientID"),
        L = require/*t*/("generateForceIndex"),
        M = require/*t*/("invariant"),
        Q = require/*t*/("isEmpty"),
        A = require/*t*/("keyMirror"),
        k = require/*t*/("mapObject"),
        O = require/*t*/("mixInEventEmitter"),
        N = {},
        G = {},
        $ = {},
        B = {},
        H = {},
        V = {},
        q = {},
        U = new w,
        j = new T,
        W = y.NODE,
        K = y.NODES,
        z = y.VIEWER,
        X = y.CUSTOM_ROOTCALLS,
        Y = y.IDLESS_ROOTCALLS,
        J = {
            Events: A({
                beginQuery: !0,
                dataFromServer: !0,
                endQuery: !0
            }),
            handleOptimisticMutation: function(global/*e*/) {
                h.appendToQueue(global/*e*/), s(global/*e*/)
            },
            handleServerMutation: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = v.getMutationType(global/*e*/),
                    requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/].client_mutation_id,
                    module/*i*/ = d.getKeyForClientMutationID(requireLazy/*r*/);
                if (module/*i*/) {
                    var o = d.shiftActionForKey(module/*i*/);
                    o.getClientMutationID() !== requireLazy/*r*/ && M(0, "action sent to server must be first in the list for its key");
                    var l = d.getFirstActionForKey(module/*i*/);
                    l && l.rerunServerAction()
                }
                var u = h.getActionByID(requireLazy/*r*/);
                u && (h.removeFromQueue(requireLazy/*r*/), c(), h.iterateOverQueue(s)), a(global/*e*/, require/*t*/, b.SERVER_UPDATE), delete G[requireLazy/*r*/]
            },
            handleMutationRollback: function(global/*e*/) {
                var require/*t*/ = h.getActionByID(global/*e*/);
                require/*t*/ && h.removeFromQueue(global/*e*/), p(global/*e*/), c(E.broadcastChangeForID), h.iterateOverQueue(s)
            },
            handleMutationError: function(global/*e*/) {
                p(global/*e*/), c(), h.iterateOverQueue(s)
            },
            setRangeAddErrorStatus: function(global/*e*/) {
                var require/*t*/ = v.getMutationType(global/*e*/);
                global/*e*/ = global/*e*/[require/*t*/];
                var requireDynamic/*n*/ = R.getConfigs(require/*t*/);
                requireDynamic/*n*/.some(function(global/*e*/) {
                    return global/*e*/.handlerType === b.RANGE_ADD_HANDLER
                }) || M(0, "GraphQLStore.setRangeAddErrorStatus expects a range-add payload");
                var requireLazy/*r*/ = global/*e*/.client_mutation_id,
                    module/*i*/ = N[requireLazy/*r*/];
                l(module/*i*/, C.ERROR), $[module/*i*/] = requireLazy/*r*/, G[requireLazy/*r*/] = module/*i*/
            },
            handleMutationRetry: function(global/*e*/) {
                var require/*t*/ = $[global/*e*/];
                require/*t*/ || M(0, "Can only retry mutations that encountered errors");
                var requireDynamic/*n*/ = h.getActionByID(require/*t*/);
                requireDynamic/*n*/ || M(0, "Cannot retry a mutation that has not previously been tried"), delete $[global/*e*/], u(global/*e*/), requireDynamic/*n*/.rerunServerAction()
            },
            handleUpdate: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                require/*t*/ = require/*t*/.getQuery();
                var module/*i*/, a = m.logClientEvent("GraphQLStore.handleUpdate:" + require/*t*/.getDescription()),
                    s = require/*t*/.rootCall().getName();
                if (s === z) module/*i*/ = o(requireDynamic/*n*/, requireLazy/*r*/), module/*i*/.storeNodeWithID(require/*t*/, global/*e*/.viewer, y.VIEWER_CLIENT_ID, new x(require/*t*/));
                else {
                    if (!(s === W || s === K || s in X)) throw new Error("Unsupported graphQL root call: use viewer, username, group, node, or nodes");
                    for (var l in global/*e*/) {
                        module/*i*/ = o(requireDynamic/*n*/, requireLazy/*r*/);
                        var u = global/*e*/[l];
                        if (null === u) module/*i*/.deleteNodeWithID(l);
                        else {
                            var c = l;
                            if (s !== K && s !== W) {
                                var p = require/*t*/.rootCall().getArgs();
                                if (1 !== p.length) throw new Error("Custom root calls must request with only one argument");
                                var d = p[0].getCallValue();
                                if (q[s] = q[s] || {}, c = q[s][d], !c) {
                                    if (c = s in Y ? F() : u.id, !c) throw new Error("Root calls that has an id field must request for id");
                                    q[s][d] = c
                                }
                            }
                            var h = new x(s === K ? new _.Query("node", [c]) : require/*t*/);
                            module/*i*/.storeNodeWithID(require/*t*/, u, c, h)
                        }
                    }
                }
                a.stop()
            },
            buildFragmentQueryForDataID: function(global/*e*/, require/*t*/) {
                if (D.isClientID(require/*t*/)) {
                    var requireDynamic/*n*/ = H[require/*t*/] || V[require/*t*/];
                    return requireDynamic/*n*/.__path__.getQueryForFragment(global/*e*/)
                }
                return new x(new _.Query("node", [require/*t*/])).getQueryForFragment(global/*e*/)
            },
            resolveQueryFromStore: function(global/*e*/) {
                var require/*t*/ = J.getIDsFromQuery(global/*e*/),
                    requireDynamic/*n*/ = {};
                for (var requireLazy/*r*/ in require/*t*/) {
                    var module/*i*/ = J.getDeepNodeByID(require/*t*/[requireLazy/*r*/], global/*e*/.getQuery());
                    void 0 !== module/*i*/ && (requireDynamic/*n*/[requireLazy/*r*/] = module/*i*/)
                }
                return requireDynamic/*n*/
            },
            canResolveQueriesFromStore: function(global/*e*/) {
                for (var require/*t*/ in global/*e*/)
                    if (global/*e*/.hasOwnProperty(require/*t*/) && global/*e*/[require/*t*/] && J.getDiffQueries(global/*e*/[require/*t*/]).length) return !1;
                return !0
            },
            getDiffQueries: function(global/*e*/) {
                var require/*t*/ = new f(H, U);
                return require/*t*/.getDiffQueries(global/*e*/, J.getIDsFromQuery(global/*e*/))
            },
            resolvePointersForQuery: function(global/*e*/) {
                return k(J.getIDsFromQuery(global/*e*/), D.createPointerWithID)
            },
            injectCachingConfig: function(global/*e*/) {
                B = global/*e*/
            },
            isValidNodeID: function(global/*e*/) {
                return H.hasOwnProperty(global/*e*/) || V.hasOwnProperty(global/*e*/)
            },
            isQueuedNodeID: function(global/*e*/) {
                return V.hasOwnProperty(global/*e*/)
            },
            getDeepNodeFromData: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = new P(H, V, requireDynamic/*n*/);
                return module/*i*/.retrieveData(global/*e*/, require/*t*/, requireLazy/*r*/)
            },
            getDeepNodeByID: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return J.getDeepNodeFromData(require/*t*/, D.createPointerWithID(global/*e*/), requireDynamic/*n*/)
            },
            __debug: {
                nodeData: H,
                queuedData: V
            },
            getTrackedQueryByID: function(global/*e*/) {
                return Array.isArray(global/*e*/) || (global/*e*/ = [global/*e*/]), U.getQueryForIDs(global/*e*/)
            },
            getIDsFromQuery: function(global/*e*/) {
                global/*e*/ = global/*e*/.getQuery();
                var require/*t*/ = {},
                    requireDynamic/*n*/ = global/*e*/.rootCall(),
                    requireLazy/*r*/ = requireDynamic/*n*/.getName();
                if (requireLazy/*r*/ === z) require/*t*/.viewer = y.VIEWER_CLIENT_ID;
                else if (requireLazy/*r*/ === W || requireLazy/*r*/ === K || requireLazy/*r*/ in X)
                    for (var module/*i*/ = requireDynamic/*n*/.getArgs(), o = 0; o < module/*i*/.length; o++)
                        if (!(module/*i*/[o] instanceof _.BatchCallVariable)) {
                            var a = module/*i*/[o].getCallValue();
                            q[requireLazy/*r*/] && q[requireLazy/*r*/][a] && (a = q[requireLazy/*r*/][a]), require/*t*/[module/*i*/[o].getCallValue()] = a
                        }
                return Q(require/*t*/) && M(0, "Unsupported graphQL root call: use viewer, username, group, node, or nodes"), require/*t*/
            }
        };
    g.instrumentMethods(J, {
        handleUpdate: "GraphQLStore.handleUpdate",
        getDiffQueries: "GraphQLStore.getDiffQueries",
        resolveQueryFromStore: "GraphQLStore.resolveQueryFromStore"
    }), O(J, J.Events), module/*i*/.exports = J
});