__d("ReactGraphQL",["DliteDebugger","DliteProfiler","DliteReactQueryParamCache","DliteRoute","DliteRouteQueryCache","DliteRouteContext","ErrorUtils","GraphQLDeferredQueryTracker","GraphQLQueryRunner","GraphQLStore","GraphQLCodedError","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreQueryResolver","Map","ReactGraphQLComparators","ReactGraphQLQueryBuilder","ReactInstanceMap","ReactUpdates","forEachObject","invariant","mapObject","mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        forEachObject/*C*/(global/*e*/.queries, function(requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = global/*e*/.getQuery(requireLazy/*r*/);
            module/*i*/ && require/*t*/(module/*i*/, requireLazy/*r*/)
        })
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/ + "." + require/*t*/
    }
    var DliteDebugger/*s*/ = require/*t*/("DliteDebugger"),
        DliteProfiler/*l*/ = require/*t*/("DliteProfiler"),
        DliteReactQueryParamCache/*u*/ = require/*t*/("DliteReactQueryParamCache"),
        c = (require/*t*/("DliteRoute"), require/*t*/("DliteRouteQueryCache")),
        DliteRouteContext/*p*/ = require/*t*/("DliteRouteContext"),
        ErrorUtils/*d*/ = require/*t*/("ErrorUtils"),
        GraphQLDeferredQueryTracker/*h*/ = require/*t*/("GraphQLDeferredQueryTracker"),
        GraphQLQueryRunner/*f*/ = require/*t*/("GraphQLQueryRunner"),
        GraphQLStore/*m*/ = require/*t*/("GraphQLStore"),
        g = (require/*t*/("GraphQLCodedError"), require/*t*/("GraphQLStoreChangeEmitter")),
        GraphQLStoreDataHandler/*_*/ = require/*t*/("GraphQLStoreDataHandler"),
        GraphQLStoreQueryResolver/*y*/ = require/*t*/("GraphQLStoreQueryResolver"),
        Map/*v*/ = require/*t*/("Map"),
        ReactGraphQLComparators/*S*/ = require/*t*/("ReactGraphQLComparators"),
        ReactGraphQLQueryBuilder/*b*/ = require/*t*/("ReactGraphQLQueryBuilder"),
        ReactInstanceMap/*R*/ = require/*t*/("ReactInstanceMap"),
        ReactUpdates/*w*/ = require/*t*/("ReactUpdates"),
        forEachObject/*C*/ = require/*t*/("forEachObject"),
        invariant/*E*/ = require/*t*/("invariant"),
        mapObject/*D*/ = require/*t*/("mapObject"),
        mixInEventEmitter/*T*/ = require/*t*/("mixInEventEmitter");
    g.injectBatchingStrategy(ReactUpdates/*w*/.batchedUpdates);
    var x = {},
        P = Object.freeze({}),
        I = {
            Mixin: {
                statics: {
                    getQueriesForRoute: function(global/*e*/) {
                        var require/*t*/ = this,
                            requireDynamic/*n*/ = c.get(require/*t*/, global/*e*/);
                        if (requireDynamic/*n*/) return requireDynamic/*n*/;
                        var requireLazy/*r*/ = mapObject/*D*/(require/*t*/.queries, function(requireDynamic/*n*/, requireLazy/*r*/) {
                            if (global/*e*/.hasQuery(requireLazy/*r*/)) {
                                var module/*i*/ = require/*t*/.getQuery(requireLazy/*r*/);
                                return global/*e*/.getQuery(requireLazy/*r*/, module/*i*/)
                            }
                            return null
                        });
                        return c.set(require/*t*/, global/*e*/, requireLazy/*r*/), requireLazy/*r*/
                    },
                    getQuery: function(global/*e*/, require/*t*/) {
                        var requireDynamic/*n*/ = this;
                        return ReactGraphQLQueryBuilder/*b*/.get(requireDynamic/*n*/, global/*e*/, require/*t*/)
                    }
                },
                mixins: [DliteRouteContext/*p*/.Mixin, ReactGraphQLComparators/*S*/.Mixin],
                setQueryParams: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/, module/*i*/ = this._unresolvedQueryParams || this._resolvableQueryParams || this.queryParams;
                    for (var a in global/*e*/)
                        if (module/*i*/[a] !== global/*e*/[a]) {
                            requireLazy/*r*/ = Object.assign({}, module/*i*/, global/*e*/);
                            break
                        }
                    if (require/*t*/ && this._queryParamSuccessCallbacks.push(require/*t*/), requireDynamic/*n*/ && this._queryParamFailureCallbacks.push(requireDynamic/*n*/), requireLazy/*r*/) {
                        __DEV__ && I.emit("beginQueryParamChange", this.constructor.displayName, requireLazy/*r*/), this._abortPendingQueryParamsRun();
                        var DliteDebugger/*s*/ = {};
                        o(this.constructor, function(global/*e*/, require/*t*/) {
                            var requireDynamic/*n*/ = this.props[require/*t*/];
                            if (requireDynamic/*n*/) {
                                var module/*i*/ = global/*e*/.getQueryFragment(this.context.route, requireLazy/*r*/);
                                module/*i*/ && (DliteDebugger/*s*/[require/*t*/] = GraphQLStore/*m*/.buildFragmentQueryForDataID(module/*i*/, GraphQLStoreDataHandler/*_*/.getID(requireDynamic/*n*/)))
                            }
                        }.bind(this)), this._pendingQueryParamsRun = GraphQLQueryRunner/*f*/.run(DliteDebugger/*s*/, {
                            onBlockingRequest: null,
                            onFailure: function(global/*e*/) {
                                ReactUpdates/*w*/.batchedUpdates(function() {
                                    this._queryParamFailureCallbacks.forEach(function(require/*t*/) {
                                        return require/*t*/(global/*e*/)
                                    }), this._clearQueryParamCallbacks()
                                }.bind(this))
                            }.bind(this),
                            onResolvable: null,
                            onSuccess: ErrorUtils/*d*/.guard(function() {
                                this._unresolvedQueryParams = null, this._resolvableQueryParams = requireLazy/*r*/, this._pendingQueryParamsRun = null, this._instrumentedUpdate(), __DEV__ && I.emit("endQueryParamChange", this.constructor.displayName, requireLazy/*r*/)
                            }.bind(this), "ReactGraphQL:setQueryParams")
                        }), this._unresolvedQueryParams = requireLazy/*r*/
                    } else this._resolvableQueryParams = module/*i*/, this._instrumentedUpdate()
                },
                _instrumentedUpdate: function() {
                    var global/*e*/ = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSuccess");
                    ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, global/*e*/.stop)
                },
                getQueryError: function(global/*e*/, require/*t*/) {
                    if (!this._deferredQueryErrors) return null;
                    var requireDynamic/*n*/ = global/*e*/.getQueryFragment(this.context.route),
                        requireLazy/*r*/ = GraphQLStoreDataHandler/*_*/.getID(require/*t*/),
                        module/*i*/ = a(requireLazy/*r*/, requireDynamic/*n*/.getName());
                    return this._deferredQueryErrors[module/*i*/]
                },
                hasQueryData: function(global/*e*/, require/*t*/) {
                    if (!GraphQLQueryRunner/*f*/.hasPendingQueries() && !this._deferredQueryErrors) return !0;
                    var requireDynamic/*n*/ = global/*e*/.getQueryFragment(this.context.route),
                        requireLazy/*r*/ = GraphQLStoreDataHandler/*_*/.getID(require/*t*/);
                    requireLazy/*r*/ || invariant/*E*/(0, "ReactGraphQL.hasQueryData: must provide a valid prop value. Ex: for <DeferredChild viewer={this.props.viewer} />, use hasQueryData(DeferredChild.getQuery('viewer'), this.props.viewer)\"");
                    var module/*i*/ = GraphQLStore/*m*/.buildFragmentQueryForDataID(requireDynamic/*n*/, requireLazy/*r*/),
                        o = !GraphQLDeferredQueryTracker/*h*/.isQueryPending(module/*i*/),
                        DliteDebugger/*s*/ = requireDynamic/*n*/.getName(),
                        DliteProfiler/*l*/ = a(requireLazy/*r*/, DliteDebugger/*s*/);
                    return o ? this._deferredQueryErrors && this._deferredQueryErrors.hasOwnProperty(DliteProfiler/*l*/) && (o = !1) : (this._deferredQuerySubscriptions || (this._deferredQuerySubscriptions = {}), this._deferredQuerySubscriptions.hasOwnProperty(DliteProfiler/*l*/) || (this._deferredQuerySubscriptions[DliteProfiler/*l*/] = GraphQLDeferredQueryTracker/*h*/.addListenerForFragment(requireLazy/*r*/, DliteDebugger/*s*/, {
                        onSuccess: this._handleDeferredQuerySuccess,
                        onFailure: this._handleDeferredQueryFailure
                    }))), o
                },
                getInitialState: function() {
                    return this.constructor.queries || invariant/*E*/(0, "ReactGraphQL.Mixin: %DliteDebugger/*s*/ must provide a valid object for queries.", this.constructor.displayName), __DEV__ && (Object.keys(this.constructor.queries).length || console.warn("ReactGraphQL.Mixin is unnecessary for %DliteDebugger/*s*/ if no queries are defined.", this.constructor.displayName)), this._queryParamSuccessCallbacks = [], this._queryParamFailureCallbacks = [], this._unresolvedQueryParams = null, this._resolvableQueryParams = null, this._pendingQueryParamsRun = null, this.queryParams = this._getInitialQueryParams(), this._queryFragments = null, this._updateQueryFragments(this.context.route, this.queryParams), this._queryResolvers = null, this._processQueryProps(this.context.route, this.queryParams, this.props), this._originalShouldComponentUpdate = this.shouldComponentUpdate, this.shouldComponentUpdate = this._shouldComponentUpdate, {}
                },
                componentWillReceiveProps: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._resolvableQueryParams || this.queryParams;
                    if (this._updateQueryFragments(require/*t*/.route, requireDynamic/*n*/), this._processQueryProps(require/*t*/.route, requireDynamic/*n*/, global/*e*/), this._resolvableQueryParams) {
                        var requireLazy/*r*/ = this.queryParams;
                        this.queryParams = this._resolvableQueryParams, this._resolvableQueryParams = null, DliteReactQueryParamCache/*u*/.set(this, this.queryParams), this._queryParamSuccessCallbacks.forEach(function(global/*e*/) {
                            return global/*e*/(requireLazy/*r*/)
                        }), this._clearQueryParamCallbacks()
                    }
                },
                _shouldComponentUpdate: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    return this._hasStaleQueryData ? (this._hasStaleQueryData = !1, !0) : this._hasNewDeferredData ? (this._hasNewDeferredData = !1, !0) : this._originalShouldComponentUpdate && this._originalShouldComponentUpdate.apply(this, arguments) ? !0 : this._originalShouldComponentUpdate ? !this.areDlitePropsEqualTo(global/*e*/) || !this.isDliteContextEqualTo(requireDynamic/*n*/) : !this.arePropsEqualTo(global/*e*/) || !this.isStateEqualTo(require/*t*/) || !this.isContextEqualTo(requireDynamic/*n*/)
                },
                componentWillMount: function() {
                    __DEV__ && DliteDebugger/*s*/.installIntoComponent(this)
                },
                componentWillUnmount: function() {
                    this._queryResolvers && (this._queryResolvers.forEach(function(global/*e*/) {
                        return global/*e*/.reset()
                    }), this._queryResolvers = null), this._deferredQuerySubscriptions && (forEachObject/*C*/(this._deferredQuerySubscriptions, function(global/*e*/) {
                        global/*e*/ && global/*e*/.remove()
                    }), this._deferredQuerySubscriptions = null), this._queryParamFailureCallbacks = null, this._queryParamSuccessCallbacks = null, this._deferredQueryErrors = null, this._unresolvedQueryParams = null, this._resolvableQueryParams = null, this._abortPendingQueryParamsRun()
                },
                _processQueryProps: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/ = !this._queryResolvers;
                    requireLazy/*r*/ && (this._queryResolvers = new Map/*v*/, o(this.constructor, function(global/*e*/, require/*t*/) {
                        var requireDynamic/*n*/ = new GraphQLStoreQueryResolver/*y*/(this._handleQueryPropChange);
                        this._queryResolvers.set(require/*t*/, requireDynamic/*n*/)
                    }.bind(this))), this._queryResolvers.forEach(function(global/*e*/, require/*t*/) {
                        var module/*i*/, o = this._queryFragments && this._queryFragments[require/*t*/];
                        if (o) {
                            var a = requireDynamic/*n*/[require/*t*/];
                            module/*i*/ = global/*e*/.resolve(o, a), requireLazy/*r*/ || this.props[require/*t*/] === module/*i*/ || (this._hasStaleQueryData = !0)
                        } else module/*i*/ = null;
                        requireDynamic/*n*/[require/*t*/] = module/*i*/
                    }.bind(this))
                },
                _handleQueryPropChange: function() {
                    var global/*e*/ = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                    ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, global/*e*/.stop)
                },
                _handleDeferredQuerySuccess: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = a(global/*e*/, require/*t*/);
                    if (this._deferredQuerySubscriptions && this._deferredQuerySubscriptions.hasOwnProperty(requireDynamic/*n*/) && (this._hasNewDeferredData = !0, this._deferredQuerySubscriptions[requireDynamic/*n*/].remove(), delete this._deferredQuerySubscriptions[requireDynamic/*n*/], this.isMounted())) {
                        var requireLazy/*r*/ = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                        ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, requireLazy/*r*/.stop)
                    }
                },
                _handleDeferredQueryFailure: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/ = a(global/*e*/, require/*t*/);
                    if (this._deferredQueryErrors || (this._deferredQueryErrors = {}), this._hasNewDeferredData = !0, this._deferredQueryErrors[requireLazy/*r*/] = requireDynamic/*n*/, this.isMounted()) {
                        var module/*i*/ = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                        ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, module/*i*/.stop)
                    }
                },
                _abortPendingQueryParamsRun: function() {
                    this._pendingQueryParamsRun && (this._pendingQueryParamsRun.abort(), this._pendingQueryParamsRun = null)
                },
                _clearQueryParamCallbacks: function() {
                    this._queryParamSuccessCallbacks.length = 0, this._queryParamFailureCallbacks.length = 0
                },
                _updateQueryFragments: function(global/*e*/, require/*t*/) {
                    this._queryFragments && this.queryParams === require/*t*/ && this.context.route.getCacheKey() === global/*e*/.getCacheKey() || (this._queryFragments = null, o(this.constructor, function(requireDynamic/*n*/, requireLazy/*r*/) {
                        var module/*i*/ = requireDynamic/*n*/.getQueryFragment(global/*e*/, require/*t*/);
                        module/*i*/ && (this._queryFragments = this._queryFragments || {}, this._queryFragments[requireLazy/*r*/] = module/*i*/)
                    }.bind(this)))
                },
                _getInitialQueryParams: function() {
                    var global/*e*/ = this.constructor.queryParams,
                        require/*t*/ = DliteReactQueryParamCache/*u*/.get(this);
                    if (!require/*t*/ && global/*e*/) {
                        var requireDynamic/*n*/;
                        for (var requireLazy/*r*/ in global/*e*/) requireLazy/*r*/ in this.props && (requireDynamic/*n*/ = requireDynamic/*n*/ || Object.assign({}, global/*e*/), requireDynamic/*n*/[requireLazy/*r*/] = this.props[requireLazy/*r*/]);
                        require/*t*/ = requireDynamic/*n*/ || global/*e*/
                    }
                    return require/*t*/ || P
                }
            }
        };
    mixInEventEmitter/*T*/(I, {
        beginQueryParamChange: !0,
        endQueryParamChange: !0
    }), DliteProfiler/*l*/.instrumentMethods(I.Mixin.statics, {
        getQueriesForRoute: "ReactGraphQL.getQueriesForRoute"
    }), DliteProfiler/*l*/.instrumentMethods(I.Mixin, {
        getInitialState: "ReactGraphQL.getInitialState",
        componentWillReceiveProps: "ReactGraphQL.componentWillReceiveProps",
        _shouldComponentUpdate: "ReactGraphQL.shouldComponentUpdate"
    }), module/*i*/.exports = I
});