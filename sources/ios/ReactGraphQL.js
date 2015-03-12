__d("ReactGraphQL",["DliteDebugger","DliteProfiler","DliteReactQueryParamCache","DliteRoute","DliteRouteQueryCache","DliteRouteContext","ErrorUtils","GraphQLDeferredQueryTracker","GraphQLQueryRunner","GraphQLStore","GraphQLCodedError","GraphQLStoreChangeEmitter","GraphQLStoreDataHandler","GraphQLStoreQueryResolver","Map","ReactGraphQLComparators","ReactGraphQLQueryBuilder","ReactInstanceMap","ReactUpdates","forEachObject","invariant","mapObject","mixInEventEmitter"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        forEachObject/*C*/(e.queries, function(n, r) {
            var i = e.getQuery(r);
            i && t(i, r)
        })
    }

    function a(e, t) {
        return e + "." + t
    }
    var DliteDebugger/*s*/ = t("DliteDebugger"),
        DliteProfiler/*l*/ = t("DliteProfiler"),
        DliteReactQueryParamCache/*u*/ = t("DliteReactQueryParamCache"),
        c = (t("DliteRoute"), t("DliteRouteQueryCache")),
        DliteRouteContext/*p*/ = t("DliteRouteContext"),
        ErrorUtils/*d*/ = t("ErrorUtils"),
        GraphQLDeferredQueryTracker/*h*/ = t("GraphQLDeferredQueryTracker"),
        GraphQLQueryRunner/*f*/ = t("GraphQLQueryRunner"),
        GraphQLStore/*m*/ = t("GraphQLStore"),
        g = (t("GraphQLCodedError"), t("GraphQLStoreChangeEmitter")),
        GraphQLStoreDataHandler/*_*/ = t("GraphQLStoreDataHandler"),
        GraphQLStoreQueryResolver/*y*/ = t("GraphQLStoreQueryResolver"),
        Map/*v*/ = t("Map"),
        ReactGraphQLComparators/*S*/ = t("ReactGraphQLComparators"),
        ReactGraphQLQueryBuilder/*b*/ = t("ReactGraphQLQueryBuilder"),
        ReactInstanceMap/*R*/ = t("ReactInstanceMap"),
        ReactUpdates/*w*/ = t("ReactUpdates"),
        forEachObject/*C*/ = t("forEachObject"),
        invariant/*E*/ = t("invariant"),
        mapObject/*D*/ = t("mapObject"),
        mixInEventEmitter/*T*/ = t("mixInEventEmitter");
    g.injectBatchingStrategy(ReactUpdates/*w*/.batchedUpdates);
    var x = {},
        P = Object.freeze({}),
        I = {
            Mixin: {
                statics: {
                    getQueriesForRoute: function(e) {
                        var t = this,
                            n = c.get(t, e);
                        if (n) return n;
                        var r = mapObject/*D*/(t.queries, function(n, r) {
                            if (e.hasQuery(r)) {
                                var i = t.getQuery(r);
                                return e.getQuery(r, i)
                            }
                            return null
                        });
                        return c.set(t, e, r), r
                    },
                    getQuery: function(e, t) {
                        var n = this;
                        return ReactGraphQLQueryBuilder/*b*/.get(n, e, t)
                    }
                },
                mixins: [DliteRouteContext/*p*/.Mixin, ReactGraphQLComparators/*S*/.Mixin],
                setQueryParams: function(e, t, n) {
                    var r, i = this._unresolvedQueryParams || this._resolvableQueryParams || this.queryParams;
                    for (var a in e)
                        if (i[a] !== e[a]) {
                            r = Object.assign({}, i, e);
                            break
                        }
                    if (t && this._queryParamSuccessCallbacks.push(t), n && this._queryParamFailureCallbacks.push(n), r) {
                        __DEV__ && I.emit("beginQueryParamChange", this.constructor.displayName, r), this._abortPendingQueryParamsRun();
                        var DliteDebugger/*s*/ = {};
                        o(this.constructor, function(e, t) {
                            var n = this.props[t];
                            if (n) {
                                var i = e.getQueryFragment(this.context.route, r);
                                i && (DliteDebugger/*s*/[t] = GraphQLStore/*m*/.buildFragmentQueryForDataID(i, GraphQLStoreDataHandler/*_*/.getID(n)))
                            }
                        }.bind(this)), this._pendingQueryParamsRun = GraphQLQueryRunner/*f*/.run(DliteDebugger/*s*/, {
                            onBlockingRequest: null,
                            onFailure: function(e) {
                                ReactUpdates/*w*/.batchedUpdates(function() {
                                    this._queryParamFailureCallbacks.forEach(function(t) {
                                        return t(e)
                                    }), this._clearQueryParamCallbacks()
                                }.bind(this))
                            }.bind(this),
                            onResolvable: null,
                            onSuccess: ErrorUtils/*d*/.guard(function() {
                                this._unresolvedQueryParams = null, this._resolvableQueryParams = r, this._pendingQueryParamsRun = null, this._instrumentedUpdate(), __DEV__ && I.emit("endQueryParamChange", this.constructor.displayName, r)
                            }.bind(this), "ReactGraphQL:setQueryParams")
                        }), this._unresolvedQueryParams = r
                    } else this._resolvableQueryParams = i, this._instrumentedUpdate()
                },
                _instrumentedUpdate: function() {
                    var e = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSuccess");
                    ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, e.stop)
                },
                getQueryError: function(e, t) {
                    if (!this._deferredQueryErrors) return null;
                    var n = e.getQueryFragment(this.context.route),
                        r = GraphQLStoreDataHandler/*_*/.getID(t),
                        i = a(r, n.getName());
                    return this._deferredQueryErrors[i]
                },
                hasQueryData: function(e, t) {
                    if (!GraphQLQueryRunner/*f*/.hasPendingQueries() && !this._deferredQueryErrors) return !0;
                    var n = e.getQueryFragment(this.context.route),
                        r = GraphQLStoreDataHandler/*_*/.getID(t);
                    r || invariant/*E*/(0, "ReactGraphQL.hasQueryData: must provide a valid prop value. Ex: for <DeferredChild viewer={this.props.viewer} />, use hasQueryData(DeferredChild.getQuery('viewer'), this.props.viewer)\"");
                    var i = GraphQLStore/*m*/.buildFragmentQueryForDataID(n, r),
                        o = !GraphQLDeferredQueryTracker/*h*/.isQueryPending(i),
                        DliteDebugger/*s*/ = n.getName(),
                        DliteProfiler/*l*/ = a(r, DliteDebugger/*s*/);
                    return o ? this._deferredQueryErrors && this._deferredQueryErrors.hasOwnProperty(DliteProfiler/*l*/) && (o = !1) : (this._deferredQuerySubscriptions || (this._deferredQuerySubscriptions = {}), this._deferredQuerySubscriptions.hasOwnProperty(DliteProfiler/*l*/) || (this._deferredQuerySubscriptions[DliteProfiler/*l*/] = GraphQLDeferredQueryTracker/*h*/.addListenerForFragment(r, DliteDebugger/*s*/, {
                        onSuccess: this._handleDeferredQuerySuccess,
                        onFailure: this._handleDeferredQueryFailure
                    }))), o
                },
                getInitialState: function() {
                    return this.constructor.queries || invariant/*E*/(0, "ReactGraphQL.Mixin: %DliteDebugger/*s*/ must provide a valid object for queries.", this.constructor.displayName), __DEV__ && (Object.keys(this.constructor.queries).length || console.warn("ReactGraphQL.Mixin is unnecessary for %DliteDebugger/*s*/ if no queries are defined.", this.constructor.displayName)), this._queryParamSuccessCallbacks = [], this._queryParamFailureCallbacks = [], this._unresolvedQueryParams = null, this._resolvableQueryParams = null, this._pendingQueryParamsRun = null, this.queryParams = this._getInitialQueryParams(), this._queryFragments = null, this._updateQueryFragments(this.context.route, this.queryParams), this._queryResolvers = null, this._processQueryProps(this.context.route, this.queryParams, this.props), this._originalShouldComponentUpdate = this.shouldComponentUpdate, this.shouldComponentUpdate = this._shouldComponentUpdate, {}
                },
                componentWillReceiveProps: function(e, t) {
                    var n = this._resolvableQueryParams || this.queryParams;
                    if (this._updateQueryFragments(t.route, n), this._processQueryProps(t.route, n, e), this._resolvableQueryParams) {
                        var r = this.queryParams;
                        this.queryParams = this._resolvableQueryParams, this._resolvableQueryParams = null, DliteReactQueryParamCache/*u*/.set(this, this.queryParams), this._queryParamSuccessCallbacks.forEach(function(e) {
                            return e(r)
                        }), this._clearQueryParamCallbacks()
                    }
                },
                _shouldComponentUpdate: function(e, t, n) {
                    return this._hasStaleQueryData ? (this._hasStaleQueryData = !1, !0) : this._hasNewDeferredData ? (this._hasNewDeferredData = !1, !0) : this._originalShouldComponentUpdate && this._originalShouldComponentUpdate.apply(this, arguments) ? !0 : this._originalShouldComponentUpdate ? !this.areDlitePropsEqualTo(e) || !this.isDliteContextEqualTo(n) : !this.arePropsEqualTo(e) || !this.isStateEqualTo(t) || !this.isContextEqualTo(n)
                },
                componentWillMount: function() {
                    __DEV__ && DliteDebugger/*s*/.installIntoComponent(this)
                },
                componentWillUnmount: function() {
                    this._queryResolvers && (this._queryResolvers.forEach(function(e) {
                        return e.reset()
                    }), this._queryResolvers = null), this._deferredQuerySubscriptions && (forEachObject/*C*/(this._deferredQuerySubscriptions, function(e) {
                        e && e.remove()
                    }), this._deferredQuerySubscriptions = null), this._queryParamFailureCallbacks = null, this._queryParamSuccessCallbacks = null, this._deferredQueryErrors = null, this._unresolvedQueryParams = null, this._resolvableQueryParams = null, this._abortPendingQueryParamsRun()
                },
                _processQueryProps: function(e, t, n) {
                    var r = !this._queryResolvers;
                    r && (this._queryResolvers = new Map/*v*/, o(this.constructor, function(e, t) {
                        var n = new GraphQLStoreQueryResolver/*y*/(this._handleQueryPropChange);
                        this._queryResolvers.set(t, n)
                    }.bind(this))), this._queryResolvers.forEach(function(e, t) {
                        var i, o = this._queryFragments && this._queryFragments[t];
                        if (o) {
                            var a = n[t];
                            i = e.resolve(o, a), r || this.props[t] === i || (this._hasStaleQueryData = !0)
                        } else i = null;
                        n[t] = i
                    }.bind(this))
                },
                _handleQueryPropChange: function() {
                    var e = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                    ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, e.stop)
                },
                _handleDeferredQuerySuccess: function(e, t) {
                    var n = a(e, t);
                    if (this._deferredQuerySubscriptions && this._deferredQuerySubscriptions.hasOwnProperty(n) && (this._hasNewDeferredData = !0, this._deferredQuerySubscriptions[n].remove(), delete this._deferredQuerySubscriptions[n], this.isMounted())) {
                        var r = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                        ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, r.stop)
                    }
                },
                _handleDeferredQueryFailure: function(e, t, n) {
                    var r = a(e, t);
                    if (this._deferredQueryErrors || (this._deferredQueryErrors = {}), this._hasNewDeferredData = !0, this._deferredQueryErrors[r] = n, this.isMounted()) {
                        var i = DliteProfiler/*l*/.instrumentAsync("React.setPropsInternal.onSubscription");
                        ReactInstanceMap/*R*/.get(this)._setPropsInternal(x, i.stop)
                    }
                },
                _abortPendingQueryParamsRun: function() {
                    this._pendingQueryParamsRun && (this._pendingQueryParamsRun.abort(), this._pendingQueryParamsRun = null)
                },
                _clearQueryParamCallbacks: function() {
                    this._queryParamSuccessCallbacks.length = 0, this._queryParamFailureCallbacks.length = 0
                },
                _updateQueryFragments: function(e, t) {
                    this._queryFragments && this.queryParams === t && this.context.route.getCacheKey() === e.getCacheKey() || (this._queryFragments = null, o(this.constructor, function(n, r) {
                        var i = n.getQueryFragment(e, t);
                        i && (this._queryFragments = this._queryFragments || {}, this._queryFragments[r] = i)
                    }.bind(this)))
                },
                _getInitialQueryParams: function() {
                    var e = this.constructor.queryParams,
                        t = DliteReactQueryParamCache/*u*/.get(this);
                    if (!t && e) {
                        var n;
                        for (var r in e) r in this.props && (n = n || Object.assign({}, e), n[r] = this.props[r]);
                        t = n || e
                    }
                    return t || P
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
    }), i.exports = I
});