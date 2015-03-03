__d("GraphQLStore",["ActionCollisionMap","ActionQueue","DiffQueryBuilder","DliteLogger","DliteProfiler","GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLMutationDataHandler","GraphQLMutationProperties","GraphQLMutatorConstants","GraphQLMutatorHub","GraphQLQueryTracker","GraphQLStatusConstants","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreNodeRangeTracker","GraphQLStoreQueryPath","GraphQLStoreReader","GraphQLStoreWriter","generateClientID","generateForceIndex","invariant","isEmpty","keyMirror","mapObject","mixInEventEmitter"],function (global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, requireLazy/*generateForceIndex/*r*/*/, module/*i*/) {
    "use strict";

    function o(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) {
        return new I(H, ActionCollisionMap/*V*/, ActionQueue/*U*/, DiffQueryBuilder/*j*/, DliteLogger/*N*/, global/*DliteProfiler/*e*/*/, GraphQL_EXPERIMENTAL/*E.broadcastChangeForID*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/)
    }

    function GraphQLMutatorHub/*a*/(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/) {
        var requireLazy/*generateForceIndex/*r*/*/ = v.getMutationType(global/*DliteProfiler/*e*/*/);
        global/*DliteProfiler/*e*/*/ = global/*DliteProfiler/*e*/*/[requireLazy/*generateForceIndex/*r*/*/], require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ instanceof _.Mutation || M(0, "must pass GraphQLMutatorHub/*a*/ mutation into handleMutationResult");
        for (var module/*i*/ = R.getConfigs(requireLazy/*generateForceIndex/*r*/*/), GraphQLMutatorHub/*a*/ = o(requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, GraphQLQueryTracker/*L*/()), GraphQLStatusConstants/*s*/ = 0; GraphQLStatusConstants/*s*/ < module/*i*/.length; GraphQLStatusConstants/*s*/++) {
            var l = module/*i*/[GraphQLStatusConstants/*s*/];
            switch (GraphQLStoreWriter/*l.handlerType*/) {
                case b.NODE_DELETE_HANDLER:
                    GraphQLMutatorHub/*a*/.handleNodeDeleteMutation(global/*DliteProfiler/*e*/*/, GraphQLStoreChangeEmitter/*GraphQLStoreNodeRangeTracker/*GraphQLStoreReader/*l.config*/*/*/);
                    break;
                case b.RANGE_ADD_HANDLER:
                    GraphQLMutatorHub/*a*/.handleRangeAddMutation(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, GraphQLStoreChangeEmitter/*GraphQLStoreNodeRangeTracker/*GraphQLStoreReader/*l.config*/*/*/, GraphQLStoreQueryPath/*S.getRangeConfigForType*/(requireLazy/*generateForceIndex/*r*/*/));
                    break;
                case b.RANGE_DELETE_HANDLER:
                    GraphQLMutatorHub/*a*/.handleRangeDeleteMutation(global/*DliteProfiler/*e*/*/, GraphQLStoreChangeEmitter/*GraphQLStoreNodeRangeTracker/*GraphQLStoreReader/*l.config*/*/*/);
                    break;
                default:
                    console.error('"%GraphQLStatusConstants/*s*/" is not mapped to GraphQLMutatorHub/*a*/ mutation handler', GraphQLStoreWriter/*l.handlerType*/)
            }
        }
        GraphQLMutatorHub/*a*/.handleMergeMutation(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireLazy/*generateForceIndex/*r*/*/)
    }

    function GraphQLStatusConstants/*s*/(global/*DliteProfiler/*e*/*/) {
        GraphQLMutatorHub/*a*/(global/*DliteProfiler/*e*/*/.getOptimisticPayload(), global/*DliteProfiler/*e*/*/.getOptimisticPayloadQuery(), isEmpty/*b.OPTIMISTIC_UPDATE*/);
        var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = global/*DliteProfiler/*e*/*/.getClientMutationID(),
            requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = G[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/];
        requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ && l(requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, mapObject/*C.ERROR*/)
    }

    function l(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) {
        require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ in C || M(0, '"%GraphQLStatusConstants/*s*/" is not GraphQLMutatorHub/*a*/ valid GraphQLStatusConstant.', require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/);
        var requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = ActionCollisionMap/*V*/[global/*DliteProfiler/*e*/*/];
        requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ || M(0, "Invalid dataID %GraphQLStatusConstants/*s*/ was passed to `setStatusForID`. Can only set status for queued node.", global/*DliteProfiler/*e*/*/), requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.__status__ = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, GraphQL_EXPERIMENTAL/*E.broadcastChangeForID*/(global/*DliteProfiler/*e*/*/)
    }

    function u(global/*DliteProfiler/*e*/*/) {
        var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = ActionCollisionMap/*V*/[global/*DliteProfiler/*e*/*/];
        require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ || M(0, "Invalid dataID %GraphQLStatusConstants/*s*/ was passed to `clearStatusForID`. Can only set status for queued node.", global/*DliteProfiler/*e*/*/), delete require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.__status__, GraphQL_EXPERIMENTAL/*E.broadcastChangeForID*/(global/*DliteProfiler/*e*/*/)
    }

    function c(global/*DliteProfiler/*e*/*/) {
        for (var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ in ActionCollisionMap/*V*/) ActionCollisionMap/*V*/.hasOwnProperty(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) && (delete ActionCollisionMap/*V*/[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/], global/*DliteProfiler/*e*/*/ && global/*DliteProfiler/*e*/*/(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/))
    }

    function p(global/*DliteProfiler/*e*/*/) {
        var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = d.getKeyForClientMutationID(global/*DliteProfiler/*e*/*/);
        require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ && (d.shiftActionForKey(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/), d.iterateOverActionsForKey(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, function(global/*DliteProfiler/*e*/*/) {
            h.removeFromQueue(global/*DliteProfiler/*e*/*/.getClientMutationID())
        }), d.clearActionsForKey(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/))
    }
    var d = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("ActionCollisionMap"),
        h = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("ActionQueue"),
        f = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("DiffQueryBuilder"),
        m = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("DliteLogger"),
        g = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("DliteProfiler"),
        _ = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQL_EXPERIMENTAL"),
        y = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLConstants"),
        v = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLMutationDataHandler"),
        S = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLMutationProperties"),
        b = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLMutatorConstants"),
        R = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLMutatorHub"),
        w = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLQueryTracker"),
        C = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStatusConstants"),
        E = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreChangeEmitter"),
        D = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreDataHandler"),
        T = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreNodeRangeTracker"),
        x = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreQueryPath"),
        P = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreReader"),
        I = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("GraphQLStoreWriter"),
        F = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("generateClientID"),
        GraphQLQueryTracker/*L*/ = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("generateForceIndex"),
        M = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("invariant"),
        Q = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("isEmpty"),
        A = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("keyMirror"),
        k = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("mapObject"),
        O = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/("mixInEventEmitter"),
        DliteLogger/*N*/ = {},
        G = {},
        $ = {},
        B = {},
        H = {},
        ActionCollisionMap/*V*/ = {},
        q = {},
        ActionQueue/*U*/ = new w,
        DiffQueryBuilder/*j*/ = new T,
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
            handleOptimisticMutation: function(global/*DliteProfiler/*e*/*/) {
                h.appendToQueue(global/*DliteProfiler/*e*/*/), GraphQLStatusConstants/*s*/(global/*DliteProfiler/*e*/*/)
            },
            handleServerMutation: function(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) {
                var requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = v.getMutationType(global/*DliteProfiler/*e*/*/),
                    requireLazy/*generateForceIndex/*r*/*/ = global/*DliteProfiler/*e*/*/[requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/].client_mutation_id,
                    module/*i*/ = d.getKeyForClientMutationID(requireLazy/*generateForceIndex/*r*/*/);
                if (module/*i*/) {
                    var o = d.shiftActionForKey(module/*i*/);
                    o.getClientMutationID() !== requireLazy/*generateForceIndex/*r*/*/ && M(0, "action sent to server must be first in the list for its key");
                    var l = d.getFirstActionForKey(module/*i*/);
                    l && l.rerunServerAction()
                }
                var u = h.getActionByID(requireLazy/*generateForceIndex/*r*/*/);
                u && (h.removeFromQueue(requireLazy/*generateForceIndex/*r*/*/), c(), h.iterateOverQueue(GraphQLStatusConstants/*s*/)), GraphQLMutatorHub/*a*/(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, b.SERVER_UPDATE), delete G[requireLazy/*generateForceIndex/*r*/*/]
            },
            handleMutationRollback: function(global/*DliteProfiler/*e*/*/) {
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = h.getActionByID(global/*DliteProfiler/*e*/*/);
                require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ && h.removeFromQueue(global/*DliteProfiler/*e*/*/), p(global/*DliteProfiler/*e*/*/), c(GraphQL_EXPERIMENTAL/*E.broadcastChangeForID*/), h.iterateOverQueue(GraphQLStatusConstants/*s*/)
            },
            handleMutationError: function(global/*DliteProfiler/*e*/*/) {
                p(global/*DliteProfiler/*e*/*/), c(), h.iterateOverQueue(GraphQLStatusConstants/*s*/)
            },
            setRangeAddErrorStatus: function(global/*DliteProfiler/*e*/*/) {
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = v.getMutationType(global/*DliteProfiler/*e*/*/);
                global/*DliteProfiler/*e*/*/ = global/*DliteProfiler/*e*/*/[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/];
                var requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = R.getConfigs(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/);
                requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.some(function(global/*DliteProfiler/*e*/*/) {
                    return global/*DliteProfiler/*e*/*/.handlerType === b.RANGE_ADD_HANDLER
                }) || M(0, "GraphQLStore.setRangeAddErrorStatus expects GraphQLMutatorHub/*a*/ range-add payload");
                var requireLazy/*generateForceIndex/*r*/*/ = global/*DliteProfiler/*e*/*/.client_mutation_id,
                    module/*i*/ = DliteLogger/*N*/[requireLazy/*generateForceIndex/*r*/*/];
                l(module/*i*/, mapObject/*C.ERROR*/), $[module/*i*/] = requireLazy/*generateForceIndex/*r*/*/, G[requireLazy/*generateForceIndex/*r*/*/] = module/*i*/
            },
            handleMutationRetry: function(global/*DliteProfiler/*e*/*/) {
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = $[global/*DliteProfiler/*e*/*/];
                require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ || M(0, "Can only retry mutations that encountered errors");
                var requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = h.getActionByID(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/);
                requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ || M(0, "Cannot retry GraphQLMutatorHub/*a*/ mutation that has not previously been tried"), delete $[global/*DliteProfiler/*e*/*/], u(global/*DliteProfiler/*e*/*/), requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.rerunServerAction()
            },
            handleUpdate: function(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, requireLazy/*generateForceIndex/*r*/*/) {
                require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.getQuery();
                var module/*i*/, GraphQLMutatorHub/*a*/ = m.logClientEvent("GraphQLStore.handleUpdate:" + require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.getDescription()),
                    GraphQLStatusConstants/*s*/ = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.rootCall().getName();
                if (GraphQLStatusConstants/*s*/ === z) module/*i*/ = o(requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, requireLazy/*generateForceIndex/*r*/*/), module/*i*/.storeNodeWithID(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, global/*DliteProfiler/*e*/*/.viewer, y.VIEWER_CLIENT_ID, new x(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/));
                else {
                    if (!(GraphQLStatusConstants/*s*/ === W || GraphQLStatusConstants/*s*/ === K || GraphQLStatusConstants/*s*/ in X)) throw new Error("Unsupported graphQL root call: use viewer, username, group, node, or nodes");
                    for (var l in global/*DliteProfiler/*e*/*/) {
                        module/*i*/ = o(requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, requireLazy/*generateForceIndex/*r*/*/);
                        var u = global/*DliteProfiler/*e*/*/[l];
                        if (null === u) module/*i*/.deleteNodeWithID(l);
                        else {
                            var c = l;
                            if (GraphQLStatusConstants/*s*/ !== K && GraphQLStatusConstants/*s*/ !== W) {
                                var p = require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.rootCall().getArgs();
                                if (1 !== p.length) throw new Error("Custom root calls must request with only one argument");
                                var d = p[0].getCallValue();
                                if (q[GraphQLStatusConstants/*s*/] = q[GraphQLStatusConstants/*s*/] || {}, c = q[GraphQLStatusConstants/*s*/][d], !c) {
                                    if (c = GraphQLStatusConstants/*s*/ in Y ? F() : u.id, !c) throw new Error("Root calls that has an id field must request for id");
                                    q[GraphQLStatusConstants/*s*/][d] = c
                                }
                            }
                            var h = new x(GraphQLStatusConstants/*s*/ === K ? new _.Query("node", [c]) : require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/);
                            module/*i*/.storeNodeWithID(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, u, c, h)
                        }
                    }
                }
                GraphQLMutatorHub/*a*/.stop()
            },
            buildFragmentQueryForDataID: function(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) {
                if (D.isClientID(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/)) {
                    var requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = H[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/] || ActionCollisionMap/*V*/[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/];
                    return requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.__path__.getQueryForFragment(global/*DliteProfiler/*e*/*/)
                }
                return new x(new _.Query("node", [require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/])).getQueryForFragment(global/*DliteProfiler/*e*/*/)
            },
            resolveQueryFromStore: function(global/*DliteProfiler/*e*/*/) {
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = J.getIDsFromQuery(global/*DliteProfiler/*e*/*/),
                    requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = {};
                for (var requireLazy/*generateForceIndex/*r*/*/ in require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) {
                    var module/*i*/ = J.getDeepNodeByID(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/[requireLazy/*generateForceIndex/*r*/*/], global/*DliteProfiler/*e*/*/.getQuery());
                    void 0 !== module/*i*/ && (requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/[requireLazy/*generateForceIndex/*r*/*/] = module/*i*/)
                }
                return requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/
            },
            canResolveQueriesFromStore: function(global/*DliteProfiler/*e*/*/) {
                for (var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ in global/*DliteProfiler/*e*/*/)
                    if (global/*DliteProfiler/*e*/*/.hasOwnProperty(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) && global/*DliteProfiler/*e*/*/[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/] && J.getDiffQueries(global/*DliteProfiler/*e*/*/[require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/]).length) return !1;
                return !0
            },
            getDiffQueries: function(global/*DliteProfiler/*e*/*/) {
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = new f(H, ActionQueue/*U*/);
                return require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.getDiffQueries(global/*DliteProfiler/*e*/*/, J.getIDsFromQuery(global/*DliteProfiler/*e*/*/))
            },
            resolvePointersForQuery: function(global/*DliteProfiler/*e*/*/) {
                return k(J.getIDsFromQuery(global/*DliteProfiler/*e*/*/), D.createPointerWithID)
            },
            injectCachingConfig: function(global/*DliteProfiler/*e*/*/) {
                B = global/*DliteProfiler/*e*/*/
            },
            isValidNodeID: function(global/*DliteProfiler/*e*/*/) {
                return H.hasOwnProperty(global/*DliteProfiler/*e*/*/) || ActionCollisionMap/*V*/.hasOwnProperty(global/*DliteProfiler/*e*/*/)
            },
            isQueuedNodeID: function(global/*DliteProfiler/*e*/*/) {
                return ActionCollisionMap/*V*/.hasOwnProperty(global/*DliteProfiler/*e*/*/)
            },
            getDeepNodeFromData: function(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/, requireLazy/*generateForceIndex/*r*/*/) {
                var module/*i*/ = new P(H, ActionCollisionMap/*V*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/);
                return module/*i*/.retrieveData(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireLazy/*generateForceIndex/*r*/*/)
            },
            getDeepNodeByID: function(global/*DliteProfiler/*e*/*/, require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/) {
                return J.getDeepNodeFromData(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/, D.createPointerWithID(global/*DliteProfiler/*e*/*/), requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/)
            },
            __debug: {
                nodeData: H,
                queuedData: ActionCollisionMap/*V*/
            },
            getTrackedQueryByID: function(global/*DliteProfiler/*e*/*/) {
                return Array.isArray(global/*DliteProfiler/*e*/*/) || (global/*DliteProfiler/*e*/*/ = [global/*DliteProfiler/*e*/*/]), ActionQueue/*U*/.getQueryForIDs(global/*DliteProfiler/*e*/*/)
            },
            getIDsFromQuery: function(global/*DliteProfiler/*e*/*/) {
                global/*DliteProfiler/*e*/*/ = global/*DliteProfiler/*e*/*/.getQuery();
                var require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/ = {},
                    requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/ = global/*DliteProfiler/*e*/*/.rootCall(),
                    requireLazy/*generateForceIndex/*r*/*/ = requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.getName();
                if (requireLazy/*generateForceIndex/*r*/*/ === z) require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/.viewer = y.VIEWER_CLIENT_ID;
                else if (requireLazy/*generateForceIndex/*r*/*/ === W || requireLazy/*generateForceIndex/*r*/*/ === K || requireLazy/*generateForceIndex/*r*/*/ in X)
                    for (var module/*i*/ = requireDynamic/*GraphQLMutationProperties/*keyMirror/*n*/*/*/.getArgs(), o = 0; o < module/*i*/.length; o++)
                        if (!(module/*i*/[o] instanceof _.BatchCallVariable)) {
                            var GraphQLMutatorHub/*a*/ = module/*i*/[o].getCallValue();
                            q[requireLazy/*generateForceIndex/*r*/*/] && q[requireLazy/*generateForceIndex/*r*/*/][GraphQLMutatorHub/*a*/] && (GraphQLMutatorHub/*a*/ = q[requireLazy/*generateForceIndex/*r*/*/][GraphQLMutatorHub/*a*/]), require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/[module/*i*/[o].getCallValue()] = GraphQLMutatorHub/*a*/
                        }
                return Q(require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/) && M(0, "Unsupported graphQL root call: use viewer, username, group, node, or nodes"), require/*exports/*GraphQLConstants/*GraphQLMutationDataHandler/*GraphQLMutatorConstants/*GraphQLStoreDataHandler/*generateClientID/*mixInEventEmitter/*t*/*/*/*/*/*/*/*/
            }
        };
    g.instrumentMethods(J, {
        handleUpdate: "GraphQLStore.handleUpdate",
        getDiffQueries: "GraphQLStore.getDiffQueries",
        resolveQueryFromStore: "GraphQLStore.resolveQueryFromStore"
    }), O(J, J.Events), module/*i*/.exports = J
});