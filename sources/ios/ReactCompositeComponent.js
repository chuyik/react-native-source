__d("ReactCompositeComponent",["ReactComponent","ReactContext","ReactCurrentOwner","ReactElement","ReactElementValidator","ReactEmptyComponent","ReactErrorUtils","ReactLegacyElement","ReactOwner","ReactPerf","ReactPropTransferer","ReactPropTypeLocations","ReactPropTypeLocationNames","ReactUpdates","instantiateReactComponent","invariant","keyMirror","keyOf","monitorCodeUse","mapObject","shouldUpdateReactComponent","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e._owner || null;
        return t && t.constructor && t.constructor.displayName ? " Check the render method of `" + t.constructor.displayName + "`." : ""
    }

    function a(e, t, n) {
        for (var r in t) t.hasOwnProperty(r) && "function" != typeof t[r] && invariant/*P*/(0, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", e.displayName || "ReactCompositeComponent", ReactPropTypeLocationNames/*D*/[n], r)
    }

    function s(e, t) {
        var n = G.hasOwnProperty(t) ? G[t] : null;
        H.hasOwnProperty(t) && n !== O.OVERRIDE_BASE && invariant/*P*/(0, "ReactCompositeComponentInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e.hasOwnProperty(t) && n !== O.DEFINE_MANY && n !== O.DEFINE_MANY_MERGED && invariant/*P*/(0, "ReactCompositeComponentInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
    }

    function l(e) {
        var t = e._compositeLifeCycleState;
        e.isMounted() || t === B.MOUNTING || invariant/*P*/(0, "replaceState(...): Can only update a mounted or mounting component."), null != ReactCurrentOwner/*g*/.current && invariant/*P*/(0, "replaceState(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), t === B.UNMOUNTING && invariant/*P*/(0, "replaceState(...): Cannot update while unmounting component. This usually means you called setState() on an unmounted component.")
    }

    function u(e, t) {
        if (t) {
            ReactLegacyElement/*b*/.isValidFactory(t) && invariant/*P*/(0, "ReactCompositeComponent: You're attempting to use a component class as a mixin. Instead, just use a regular object."), ReactElement/*_*/.isValidElement(t) && invariant/*P*/(0, "ReactCompositeComponent: You're attempting to use a component as a mixin. Instead, just use a regular object.");
            var n = e.prototype;
            t.hasOwnProperty(k) && $.mixins(e, t.mixins);
            for (var r in t)
                if (t.hasOwnProperty(r) && r !== k) {
                    var i = t[r];
                    if (s(n, r), $.hasOwnProperty(r)) $[r](e, i);
                    else {
                        var o = G.hasOwnProperty(r),
                            a = n.hasOwnProperty(r),
                            l = i && i.__reactDontBind,
                            u = "function" == typeof i,
                            c = u && !o && !a && !l;
                        if (c) n.__reactAutoBindMap || (n.__reactAutoBindMap = {}), n.__reactAutoBindMap[r] = i, n[r] = i;
                        else if (a) {
                            var p = G[r];
                            (!o || p !== O.DEFINE_MANY_MERGED && p !== O.DEFINE_MANY) && invariant/*P*/(0, "ReactCompositeComponent: Unexpected spec policy %s for key %s when mixing in component specs.", p, r), p === O.DEFINE_MANY_MERGED ? n[r] = d(n[r], i) : p === O.DEFINE_MANY && (n[r] = h(n[r], i))
                        } else n[r] = i, __DEV__ && "function" == typeof i && t.displayName && (n[r].displayName = t.displayName + "ReactElement/*_*/" + r)
                    }
                }
        }
    }

    function c(e, t) {
        if (t)
            for (var n in t) {
                var r = t[n];
                if (t.hasOwnProperty(n)) {
                    var i = n in $;
                    i && invariant/*P*/(0, 'ReactCompositeComponent: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                    var o = n in e;
                    o && invariant/*P*/(0, "ReactCompositeComponent: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), e[n] = r
                }
            }
    }

    function p(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t || invariant/*P*/(0, "mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects"), mapObject/*M*/(t, function(t, n) {
            void 0 !== e[n] && invariant/*P*/(0, "mergeObjectsWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t
        }), e
    }

    function d(e, t) {
        return function() {
            var n = e.apply(this, arguments),
                r = t.apply(this, arguments);
            return null == n ? r : null == r ? n : p(n, r)
        }
    }

    function h(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }
    var ReactComponent/*f*/ = t("ReactComponent"),
        ReactContext/*m*/ = t("ReactContext"),
        ReactCurrentOwner/*g*/ = t("ReactCurrentOwner"),
        ReactElement/*_*/ = t("ReactElement"),
        ReactElementValidator/*y*/ = t("ReactElementValidator"),
        ReactEmptyComponent/*v*/ = t("ReactEmptyComponent"),
        ReactErrorUtils/*S*/ = t("ReactErrorUtils"),
        ReactLegacyElement/*b*/ = t("ReactLegacyElement"),
        ReactOwner/*R*/ = t("ReactOwner"),
        ReactPerf/*w*/ = t("ReactPerf"),
        ReactPropTransferer/*C*/ = t("ReactPropTransferer"),
        ReactPropTypeLocations/*E*/ = t("ReactPropTypeLocations"),
        ReactPropTypeLocationNames/*D*/ = t("ReactPropTypeLocationNames"),
        ReactUpdates/*T*/ = t("ReactUpdates"),
        instantiateReactComponent/*x*/ = t("instantiateReactComponent"),
        invariant/*P*/ = t("invariant"),
        keyMirror/*I*/ = t("keyMirror"),
        keyOf/*F*/ = t("keyOf"),
        monitorCodeUse/*L*/ = t("monitorCodeUse"),
        mapObject/*M*/ = t("mapObject"),
        shouldUpdateReactComponent/*Q*/ = t("shouldUpdateReactComponent"),
        warning/*A*/ = t("warning"),
        k = keyOf/*F*/({
            mixins: null
        }),
        O = keyMirror/*I*/({
            DEFINE_ONCE: null,
            DEFINE_MANY: null,
            OVERRIDE_BASE: null,
            DEFINE_MANY_MERGED: null
        }),
        N = [],
        G = {
            mixins: O.DEFINE_MANY,
            statics: O.DEFINE_MANY,
            propTypes: O.DEFINE_MANY,
            contextTypes: O.DEFINE_MANY,
            childContextTypes: O.DEFINE_MANY,
            getDefaultProps: O.DEFINE_MANY_MERGED,
            getInitialState: O.DEFINE_MANY_MERGED,
            getChildContext: O.DEFINE_MANY_MERGED,
            render: O.DEFINE_ONCE,
            componentWillMount: O.DEFINE_MANY,
            componentDidMount: O.DEFINE_MANY,
            componentWillReceiveProps: O.DEFINE_MANY,
            shouldComponentUpdate: O.DEFINE_ONCE,
            componentWillUpdate: O.DEFINE_MANY,
            componentDidUpdate: O.DEFINE_MANY,
            componentWillUnmount: O.DEFINE_MANY,
            updateComponent: O.OVERRIDE_BASE
        },
        $ = {
            displayName: function(e, t) {
                e.displayName = t
            },
            mixins: function(e, t) {
                if (t)
                    for (var n = 0; n < t.length; n++) u(e, t[n])
            },
            childContextTypes: function(e, t) {
                a(e, t, ReactPropTypeLocations/*E*/.childContext), e.childContextTypes = Object.assign({}, e.childContextTypes, t)
            },
            contextTypes: function(e, t) {
                a(e, t, ReactPropTypeLocations/*E*/.context), e.contextTypes = Object.assign({}, e.contextTypes, t)
            },
            getDefaultProps: function(e, t) {
                e.getDefaultProps = e.getDefaultProps ? d(e.getDefaultProps, t) : t
            },
            propTypes: function(e, t) {
                a(e, t, ReactPropTypeLocations/*E*/.prop), e.propTypes = Object.assign({}, e.propTypes, t)
            },
            statics: function(e, t) {
                c(e, t)
            }
        },
        B = keyMirror/*I*/({
            MOUNTING: null,
            UNMOUNTING: null,
            RECEIVING_PROPS: null
        }),
        H = {
            construct: function() {
                ReactComponent/*f*/.Mixin.construct.apply(this, arguments), ReactOwner/*R*/.Mixin.construct.apply(this, arguments), this.state = null, this._pendingState = null, this.context = null, this._compositeLifeCycleState = null
            },
            isMounted: function() {
                return ReactComponent/*f*/.Mixin.isMounted.call(this) && this._compositeLifeCycleState !== B.MOUNTING
            },
            mountComponent: ReactPerf/*w*/.measure("ReactCompositeComponent", "mountComponent", function(e, t, n) {
                ReactComponent/*f*/.Mixin.mountComponent.call(this, e, t, n), this._compositeLifeCycleState = B.MOUNTING, this.__reactAutoBindMap && this._bindAutoBindMethods(), this.context = this._processContext(this._currentElement._context), this.props = this._processProps(this.props), this.state = this.getInitialState ? this.getInitialState() : null, ("object" != typeof this.state || Array.isArray(this.state)) && invariant/*P*/(0, "%s.getInitialState(): must return an object or null", this.constructor.displayName || "ReactCompositeComponent"), this._pendingState = null, this._pendingForceUpdate = !1, this.componentWillMount && (this.componentWillMount(), this._pendingState && (this.state = this._pendingState, this._pendingState = null)), this._renderedComponent = instantiateReactComponent/*x*/(this._renderValidatedComponent(), this._currentElement.type), this._compositeLifeCycleState = null;
                var r = this._renderedComponent.mountComponent(e, t, n + 1);
                return this.componentDidMount && t.getReactMountReady().enqueue(this.componentDidMount, this), r
            }),
            unmountComponent: function() {
                this._compositeLifeCycleState = B.UNMOUNTING, this.componentWillUnmount && this.componentWillUnmount(), this._compositeLifeCycleState = null, this._renderedComponent.unmountComponent(), this._renderedComponent = null, ReactComponent/*f*/.Mixin.unmountComponent.call(this)
            },
            setState: function(e, t) {
                "object" != typeof e && null != e && invariant/*P*/(0, "setState(...): takes an object of state variables to update."), __DEV__ && warning/*A*/(null != e, "setState(...): You passed an undefined or null state object; instead, use forceUpdate()."), this.replaceState(Object.assign({}, this._pendingState || this.state, e), t)
            },
            replaceState: function(e, t) {
                l(this), this._pendingState = e, this._compositeLifeCycleState !== B.MOUNTING && ReactUpdates/*T*/.enqueueUpdate(this, t)
            },
            _processContext: function(e) {
                var t = null,
                    n = this.constructor.contextTypes;
                if (n) {
                    t = {};
                    for (var r in n) t[r] = e[r];
                    __DEV__ && this._checkPropTypes(n, t, ReactPropTypeLocations/*E*/.context)
                }
                return t
            },
            _processChildContext: function(e) {
                var t = this.getChildContext && this.getChildContext(),
                    n = this.constructor.displayName || "ReactCompositeComponent";
                if (t) {
                    "object" != typeof this.constructor.childContextTypes && invariant/*P*/(0, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n), __DEV__ && this._checkPropTypes(this.constructor.childContextTypes, t, ReactPropTypeLocations/*E*/.childContext);
                    for (var r in t) r in this.constructor.childContextTypes || invariant/*P*/(0, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', n, r);
                    return Object.assign({}, e, t)
                }
                return e
            },
            _processProps: function(e) {
                if (__DEV__) {
                    var t = this.constructor.propTypes;
                    t && this._checkPropTypes(t, e, ReactPropTypeLocations/*E*/.prop)
                }
                return e
            },
            _checkPropTypes: function(e, t, n) {
                var r = this.constructor.displayName;
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var a = e[i](t, i, r, n);
                        if (a instanceof Error) {
                            var s = o(this);
                            warning/*A*/(!1, a.message + s)
                        }
                    }
            },
            performUpdateIfNecessary: function(e) {
                var t = this._compositeLifeCycleState;
                if (t !== B.MOUNTING && t !== B.RECEIVING_PROPS && (null != this._pendingElement || null != this._pendingState || this._pendingForceUpdate)) {
                    var n = this.context,
                        r = this.props,
                        i = this._currentElement;
                    null != this._pendingElement && (i = this._pendingElement, n = this._processContext(i._context), r = this._processProps(i.props), this._pendingElement = null, this._compositeLifeCycleState = B.RECEIVING_PROPS, this.componentWillReceiveProps && this.componentWillReceiveProps(r, n)), this._compositeLifeCycleState = null;
                    var o = this._pendingState || this.state;
                    this._pendingState = null;
                    var a = this._pendingForceUpdate || !this.shouldComponentUpdate || this.shouldComponentUpdate(r, o, n);
                    __DEV__ && "undefined" == typeof a && console.warn((this.constructor.displayName || "ReactCompositeComponent") + ".shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false."), a ? (this._pendingForceUpdate = !1, this._performComponentUpdate(i, r, o, n, e)) : (this._currentElement = i, this.props = r, this.state = o, this.context = n, this._owner = i._owner)
                }
            },
            _performComponentUpdate: function(e, t, n, r, i) {
                var o = this._currentElement,
                    a = this.props,
                    s = this.state,
                    l = this.context;
                this.componentWillUpdate && this.componentWillUpdate(t, n, r), this._currentElement = e, this.props = t, this.state = n, this.context = r, this._owner = e._owner, this.updateComponent(i, o), this.componentDidUpdate && i.getReactMountReady().enqueue(this.componentDidUpdate.bind(this, a, s, l), this)
            },
            receiveComponent: function(e, t) {
                (e !== this._currentElement || null == e._owner) && ReactComponent/*f*/.Mixin.receiveComponent.call(this, e, t)
            },
            updateComponent: ReactPerf/*w*/.measure("ReactCompositeComponent", "updateComponent", function(e, t) {
                ReactComponent/*f*/.Mixin.updateComponent.call(this, e, t);
                var n = this._renderedComponent,
                    r = n._currentElement,
                    i = this._renderValidatedComponent();
                if (shouldUpdateReactComponent/*Q*/(r, i)) n.receiveComponent(i, e);
                else {
                    var o = this._rootNodeID,
                        a = n._rootNodeID;
                    n.unmountComponent(), this._renderedComponent = instantiateReactComponent/*x*/(i, this._currentElement.type);
                    var s = this._renderedComponent.mountComponent(o, e, this._mountDepth + 1);
                    ReactComponent/*f*/.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a, s)
                }
            }),
            forceUpdate: function(e) {
                var t = this._compositeLifeCycleState;
                this.isMounted() || t === B.MOUNTING || invariant/*P*/(0, "forceUpdate(...): Can only force an update on mounted or mounting components."), (t === B.UNMOUNTING || null != ReactCurrentOwner/*g*/.current) && invariant/*P*/(0, "forceUpdate(...): Cannot force an update while unmounting component or within a `render` function."), this._pendingForceUpdate = !0, ReactUpdates/*T*/.enqueueUpdate(this, e)
            },
            _renderValidatedComponent: ReactPerf/*w*/.measure("ReactCompositeComponent", "_renderValidatedComponent", function() {
                var e, t = ReactContext/*m*/.current;
                ReactContext/*m*/.current = this._processChildContext(this._currentElement._context), ReactCurrentOwner/*g*/.current = this;
                try {
                    e = this.render(), null === e || e === !1 ? (e = ReactEmptyComponent/*v*/.getEmptyComponent(), ReactEmptyComponent/*v*/.registerNullComponentID(this._rootNodeID)) : ReactEmptyComponent/*v*/.deregisterNullComponentID(this._rootNodeID)
                } finally {
                    ReactContext/*m*/.current = t, ReactCurrentOwner/*g*/.current = null
                }
                return ReactElement/*_*/.isValidElement(e) || invariant/*P*/(0, "%s.render(): warning/*A*/ valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.", this.constructor.displayName || "ReactCompositeComponent"), e
            }),
            _bindAutoBindMethods: function() {
                for (var e in this.__reactAutoBindMap)
                    if (this.__reactAutoBindMap.hasOwnProperty(e)) {
                        var t = this.__reactAutoBindMap[e];
                        this[e] = this._bindAutoBindMethod(ReactErrorUtils/*S*/.guard(t, this.constructor.displayName + "." + e))
                    }
            },
            _bindAutoBindMethod: function(e) {
                var t = this,
                    n = e.bind(t);
                if (__DEV__) {
                    n.__reactBoundContext = t, n.__reactBoundMethod = e, n.__reactBoundArguments = null;
                    var r = t.constructor.displayName,
                        i = n.bind;
                    n.bind = function(o) {
                        for (var a = [], s = 1, l = arguments.length; l > s; s++) a.push(arguments[s]);
                        if (o !== t && null !== o) monitorCodeUse/*L*/("react_bind_warning", {
                            component: r
                        }), console.warn("bind(): React component methods may only be bound to the component instance. See " + r);
                        else if (!a.length) return monitorCodeUse/*L*/("react_bind_warning", {
                            component: r
                        }), console.warn("bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See " + r), n;
                        var u = i.apply(n, arguments);
                        return u.__reactBoundContext = t, u.__reactBoundMethod = e, u.__reactBoundArguments = a, u
                    }
                }
                return n
            }
        },
        V = function() {};
    Object.assign(V.prototype, ReactComponent/*f*/.Mixin, ReactOwner/*R*/.Mixin, ReactPropTransferer/*C*/.Mixin, H);
    var q = {
        LifeCycle: B,
        Base: V,
        createClass: function(e) {
            var t = function() {};
            t.prototype = new V, t.prototype.constructor = t, N.forEach(u.bind(null, t)), u(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render || invariant/*P*/(0, "createClass(...): Class specification must implement a `render` method."), __DEV__ && t.prototype.componentShouldUpdate && (monitorCodeUse/*L*/("react_component_should_update_warning", {
                component: e.displayName
            }), console.warn((e.displayName || "warning/*A*/ component") + " has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value."));
            for (var n in G) t.prototype[n] || (t.prototype[n] = null);
            return ReactLegacyElement/*b*/.wrapFactory(__DEV__ ? ReactElementValidator/*y*/.createFactory(t) : ReactElement/*_*/.createFactory(t))
        },
        injection: {
            injectMixin: function(e) {
                N.push(e)
            }
        }
    };
    i.exports = q
});