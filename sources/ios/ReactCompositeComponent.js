__d("ReactCompositeComponent",["ReactComponent","ReactContext","ReactCurrentOwner","ReactElement","ReactElementValidator","ReactEmptyComponent","ReactErrorUtils","ReactLegacyElement","ReactOwner","ReactPerf","ReactPropTransferer","ReactPropTypeLocations","ReactPropTypeLocationNames","ReactUpdates","instantiateReactComponent","invariant","keyMirror","keyOf","monitorCodeUse","mapObject","shouldUpdateReactComponent","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/._owner || null;
        return require/*t*/ && require/*t*/.constructor && require/*t*/.constructor.displayName ? " Check the render method of `" + require/*t*/.constructor.displayName + "`." : ""
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ in require/*t*/) require/*t*/.hasOwnProperty(requireLazy/*r*/) && "function" != typeof require/*t*/[requireLazy/*r*/] && P(0, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", global/*e*/.displayName || "ReactCompositeComponent", D[requireDynamic/*n*/], requireLazy/*r*/)
    }

    function s(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = G.hasOwnProperty(require/*t*/) ? G[require/*t*/] : null;
        H.hasOwnProperty(require/*t*/) && requireDynamic/*n*/ !== O.OVERRIDE_BASE && P(0, "ReactCompositeComponentInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", require/*t*/), global/*e*/.hasOwnProperty(require/*t*/) && requireDynamic/*n*/ !== O.DEFINE_MANY && requireDynamic/*n*/ !== O.DEFINE_MANY_MERGED && P(0, "ReactCompositeComponentInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", require/*t*/)
    }

    function l(global/*e*/) {
        var require/*t*/ = global/*e*/._compositeLifeCycleState;
        global/*e*/.isMounted() || require/*t*/ === B.MOUNTING || P(0, "replaceState(...): Can only update a mounted or mounting component."), null != g.current && P(0, "replaceState(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), require/*t*/ === B.UNMOUNTING && P(0, "replaceState(...): Cannot update while unmounting component. This usually means you called setState() on an unmounted component.")
    }

    function u(global/*e*/, require/*t*/) {
        if (require/*t*/) {
            b.isValidFactory(require/*t*/) && P(0, "ReactCompositeComponent: You're attempting to use a component class as a mixin. Instead, just use a regular object."), _.isValidElement(require/*t*/) && P(0, "ReactCompositeComponent: You're attempting to use a component as a mixin. Instead, just use a regular object.");
            var requireDynamic/*n*/ = global/*e*/.prototype;
            require/*t*/.hasOwnProperty(k) && $.mixins(global/*e*/, require/*t*/.mixins);
            for (var requireLazy/*r*/ in require/*t*/)
                if (require/*t*/.hasOwnProperty(requireLazy/*r*/) && requireLazy/*r*/ !== k) {
                    var module/*i*/ = require/*t*/[requireLazy/*r*/];
                    if (s(requireDynamic/*n*/, requireLazy/*r*/), $.hasOwnProperty(requireLazy/*r*/)) $[requireLazy/*r*/](global/*e*/, module/*i*/);
                    else {
                        var o = G.hasOwnProperty(requireLazy/*r*/),
                            a = requireDynamic/*n*/.hasOwnProperty(requireLazy/*r*/),
                            l = module/*i*/ && module/*i*/.__reactDontBind,
                            u = "function" == typeof module/*i*/,
                            c = u && !o && !a && !l;
                        if (c) requireDynamic/*n*/.__reactAutoBindMap || (requireDynamic/*n*/.__reactAutoBindMap = {}), requireDynamic/*n*/.__reactAutoBindMap[requireLazy/*r*/] = module/*i*/, requireDynamic/*n*/[requireLazy/*r*/] = module/*i*/;
                        else if (a) {
                            var p = G[requireLazy/*r*/];
                            (!o || p !== O.DEFINE_MANY_MERGED && p !== O.DEFINE_MANY) && P(0, "ReactCompositeComponent: Unexpected spec policy %s for key %s when mixing in component specs.", p, requireLazy/*r*/), p === O.DEFINE_MANY_MERGED ? requireDynamic/*n*/[requireLazy/*r*/] = d(requireDynamic/*n*/[requireLazy/*r*/], module/*i*/) : p === O.DEFINE_MANY && (requireDynamic/*n*/[requireLazy/*r*/] = h(requireDynamic/*n*/[requireLazy/*r*/], module/*i*/))
                        } else requireDynamic/*n*/[requireLazy/*r*/] = module/*i*/, __DEV__ && "function" == typeof module/*i*/ && require/*t*/.displayName && (requireDynamic/*n*/[requireLazy/*r*/].displayName = require/*t*/.displayName + "_" + requireLazy/*r*/)
                    }
                }
        }
    }

    function c(global/*e*/, require/*t*/) {
        if (require/*t*/)
            for (var requireDynamic/*n*/ in require/*t*/) {
                var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/];
                if (require/*t*/.hasOwnProperty(requireDynamic/*n*/)) {
                    var module/*i*/ = requireDynamic/*n*/ in $;
                    module/*i*/ && P(0, 'ReactCompositeComponent: You are attempting to define a reserved property, `%s`, that shouldn\'require/*t*/ be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', requireDynamic/*n*/);
                    var o = requireDynamic/*n*/ in global/*e*/;
                    o && P(0, "ReactCompositeComponent: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", requireDynamic/*n*/), global/*e*/[requireDynamic/*n*/] = requireLazy/*r*/
                }
            }
    }

    function p(global/*e*/, require/*t*/) {
        return global/*e*/ && require/*t*/ && "object" == typeof global/*e*/ && "object" == typeof require/*t*/ || P(0, "mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects"), M(require/*t*/, function(require/*t*/, requireDynamic/*n*/) {
            void 0 !== global/*e*/[requireDynamic/*n*/] && P(0, "mergeObjectsWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", requireDynamic/*n*/), global/*e*/[requireDynamic/*n*/] = require/*t*/
        }), global/*e*/
    }

    function d(global/*e*/, require/*t*/) {
        return function() {
            var requireDynamic/*n*/ = global/*e*/.apply(this, arguments),
                requireLazy/*r*/ = require/*t*/.apply(this, arguments);
            return null == requireDynamic/*n*/ ? requireLazy/*r*/ : null == requireLazy/*r*/ ? requireDynamic/*n*/ : p(requireDynamic/*n*/, requireLazy/*r*/)
        }
    }

    function h(global/*e*/, require/*t*/) {
        return function() {
            global/*e*/.apply(this, arguments), require/*t*/.apply(this, arguments)
        }
    }
    var f = require/*t*/("ReactComponent"),
        m = require/*t*/("ReactContext"),
        g = require/*t*/("ReactCurrentOwner"),
        _ = require/*t*/("ReactElement"),
        y = require/*t*/("ReactElementValidator"),
        v = require/*t*/("ReactEmptyComponent"),
        S = require/*t*/("ReactErrorUtils"),
        b = require/*t*/("ReactLegacyElement"),
        R = require/*t*/("ReactOwner"),
        w = require/*t*/("ReactPerf"),
        C = require/*t*/("ReactPropTransferer"),
        E = require/*t*/("ReactPropTypeLocations"),
        D = require/*t*/("ReactPropTypeLocationNames"),
        T = require/*t*/("ReactUpdates"),
        x = require/*t*/("instantiateReactComponent"),
        P = require/*t*/("invariant"),
        I = require/*t*/("keyMirror"),
        F = require/*t*/("keyOf"),
        L = require/*t*/("monitorCodeUse"),
        M = require/*t*/("mapObject"),
        Q = require/*t*/("shouldUpdateReactComponent"),
        A = require/*t*/("warning"),
        k = F({
            mixins: null
        }),
        O = I({
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
            displayName: function(global/*e*/, require/*t*/) {
                global/*e*/.displayName = require/*t*/
            },
            mixins: function(global/*e*/, require/*t*/) {
                if (require/*t*/)
                    for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) u(global/*e*/, require/*t*/[requireDynamic/*n*/])
            },
            childContextTypes: function(global/*e*/, require/*t*/) {
                a(global/*e*/, require/*t*/, E.childContext), global/*e*/.childContextTypes = Object.assign({}, global/*e*/.childContextTypes, require/*t*/)
            },
            contextTypes: function(global/*e*/, require/*t*/) {
                a(global/*e*/, require/*t*/, E.context), global/*e*/.contextTypes = Object.assign({}, global/*e*/.contextTypes, require/*t*/)
            },
            getDefaultProps: function(global/*e*/, require/*t*/) {
                global/*e*/.getDefaultProps = global/*e*/.getDefaultProps ? d(global/*e*/.getDefaultProps, require/*t*/) : require/*t*/
            },
            propTypes: function(global/*e*/, require/*t*/) {
                a(global/*e*/, require/*t*/, E.prop), global/*e*/.propTypes = Object.assign({}, global/*e*/.propTypes, require/*t*/)
            },
            statics: function(global/*e*/, require/*t*/) {
                c(global/*e*/, require/*t*/)
            }
        },
        B = I({
            MOUNTING: null,
            UNMOUNTING: null,
            RECEIVING_PROPS: null
        }),
        H = {
            construct: function() {
                f.Mixin.construct.apply(this, arguments), R.Mixin.construct.apply(this, arguments), this.state = null, this._pendingState = null, this.context = null, this._compositeLifeCycleState = null
            },
            isMounted: function() {
                return f.Mixin.isMounted.call(this) && this._compositeLifeCycleState !== B.MOUNTING
            },
            mountComponent: w.measure("ReactCompositeComponent", "mountComponent", function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                f.Mixin.mountComponent.call(this, global/*e*/, require/*t*/, requireDynamic/*n*/), this._compositeLifeCycleState = B.MOUNTING, this.__reactAutoBindMap && this._bindAutoBindMethods(), this.context = this._processContext(this._currentElement._context), this.props = this._processProps(this.props), this.state = this.getInitialState ? this.getInitialState() : null, ("object" != typeof this.state || Array.isArray(this.state)) && P(0, "%s.getInitialState(): must return an object or null", this.constructor.displayName || "ReactCompositeComponent"), this._pendingState = null, this._pendingForceUpdate = !1, this.componentWillMount && (this.componentWillMount(), this._pendingState && (this.state = this._pendingState, this._pendingState = null)), this._renderedComponent = x(this._renderValidatedComponent(), this._currentElement.type), this._compositeLifeCycleState = null;
                var requireLazy/*r*/ = this._renderedComponent.mountComponent(global/*e*/, require/*t*/, requireDynamic/*n*/ + 1);
                return this.componentDidMount && require/*t*/.getReactMountReady().enqueue(this.componentDidMount, this), requireLazy/*r*/
            }),
            unmountComponent: function() {
                this._compositeLifeCycleState = B.UNMOUNTING, this.componentWillUnmount && this.componentWillUnmount(), this._compositeLifeCycleState = null, this._renderedComponent.unmountComponent(), this._renderedComponent = null, f.Mixin.unmountComponent.call(this)
            },
            setState: function(global/*e*/, require/*t*/) {
                "object" != typeof global/*e*/ && null != global/*e*/ && P(0, "setState(...): takes an object of state variables to update."), __DEV__ && A(null != global/*e*/, "setState(...): You passed an undefined or null state object; instead, use forceUpdate()."), this.replaceState(Object.assign({}, this._pendingState || this.state, global/*e*/), require/*t*/)
            },
            replaceState: function(global/*e*/, require/*t*/) {
                l(this), this._pendingState = global/*e*/, this._compositeLifeCycleState !== B.MOUNTING && T.enqueueUpdate(this, require/*t*/)
            },
            _processContext: function(global/*e*/) {
                var require/*t*/ = null,
                    requireDynamic/*n*/ = this.constructor.contextTypes;
                if (requireDynamic/*n*/) {
                    require/*t*/ = {};
                    for (var requireLazy/*r*/ in requireDynamic/*n*/) require/*t*/[requireLazy/*r*/] = global/*e*/[requireLazy/*r*/];
                    __DEV__ && this._checkPropTypes(requireDynamic/*n*/, require/*t*/, E.context)
                }
                return require/*t*/
            },
            _processChildContext: function(global/*e*/) {
                var require/*t*/ = this.getChildContext && this.getChildContext(),
                    requireDynamic/*n*/ = this.constructor.displayName || "ReactCompositeComponent";
                if (require/*t*/) {
                    "object" != typeof this.constructor.childContextTypes && P(0, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", requireDynamic/*n*/), __DEV__ && this._checkPropTypes(this.constructor.childContextTypes, require/*t*/, E.childContext);
                    for (var requireLazy/*r*/ in require/*t*/) requireLazy/*r*/ in this.constructor.childContextTypes || P(0, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', requireDynamic/*n*/, requireLazy/*r*/);
                    return Object.assign({}, global/*e*/, require/*t*/)
                }
                return global/*e*/
            },
            _processProps: function(global/*e*/) {
                if (__DEV__) {
                    var require/*t*/ = this.constructor.propTypes;
                    require/*t*/ && this._checkPropTypes(require/*t*/, global/*e*/, E.prop)
                }
                return global/*e*/
            },
            _checkPropTypes: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this.constructor.displayName;
                for (var module/*i*/ in global/*e*/)
                    if (global/*e*/.hasOwnProperty(module/*i*/)) {
                        var a = global/*e*/[module/*i*/](require/*t*/, module/*i*/, requireLazy/*r*/, requireDynamic/*n*/);
                        if (a instanceof Error) {
                            var s = o(this);
                            A(!1, a.message + s)
                        }
                    }
            },
            performUpdateIfNecessary: function(global/*e*/) {
                var require/*t*/ = this._compositeLifeCycleState;
                if (require/*t*/ !== B.MOUNTING && require/*t*/ !== B.RECEIVING_PROPS && (null != this._pendingElement || null != this._pendingState || this._pendingForceUpdate)) {
                    var requireDynamic/*n*/ = this.context,
                        requireLazy/*r*/ = this.props,
                        module/*i*/ = this._currentElement;
                    null != this._pendingElement && (module/*i*/ = this._pendingElement, requireDynamic/*n*/ = this._processContext(module/*i*/._context), requireLazy/*r*/ = this._processProps(module/*i*/.props), this._pendingElement = null, this._compositeLifeCycleState = B.RECEIVING_PROPS, this.componentWillReceiveProps && this.componentWillReceiveProps(requireLazy/*r*/, requireDynamic/*n*/)), this._compositeLifeCycleState = null;
                    var o = this._pendingState || this.state;
                    this._pendingState = null;
                    var a = this._pendingForceUpdate || !this.shouldComponentUpdate || this.shouldComponentUpdate(requireLazy/*r*/, o, requireDynamic/*n*/);
                    __DEV__ && "undefined" == typeof a && console.warn((this.constructor.displayName || "ReactCompositeComponent") + ".shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false."), a ? (this._pendingForceUpdate = !1, this._performComponentUpdate(module/*i*/, requireLazy/*r*/, o, requireDynamic/*n*/, global/*e*/)) : (this._currentElement = module/*i*/, this.props = requireLazy/*r*/, this.state = o, this.context = requireDynamic/*n*/, this._owner = module/*i*/._owner)
                }
            },
            _performComponentUpdate: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = this._currentElement,
                    a = this.props,
                    s = this.state,
                    l = this.context;
                this.componentWillUpdate && this.componentWillUpdate(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/), this._currentElement = global/*e*/, this.props = require/*t*/, this.state = requireDynamic/*n*/, this.context = requireLazy/*r*/, this._owner = global/*e*/._owner, this.updateComponent(module/*i*/, o), this.componentDidUpdate && module/*i*/.getReactMountReady().enqueue(this.componentDidUpdate.bind(this, a, s, l), this)
            },
            receiveComponent: function(global/*e*/, require/*t*/) {
                (global/*e*/ !== this._currentElement || null == global/*e*/._owner) && f.Mixin.receiveComponent.call(this, global/*e*/, require/*t*/)
            },
            updateComponent: w.measure("ReactCompositeComponent", "updateComponent", function(global/*e*/, require/*t*/) {
                f.Mixin.updateComponent.call(this, global/*e*/, require/*t*/);
                var requireDynamic/*n*/ = this._renderedComponent,
                    requireLazy/*r*/ = requireDynamic/*n*/._currentElement,
                    module/*i*/ = this._renderValidatedComponent();
                if (Q(requireLazy/*r*/, module/*i*/)) requireDynamic/*n*/.receiveComponent(module/*i*/, global/*e*/);
                else {
                    var o = this._rootNodeID,
                        a = requireDynamic/*n*/._rootNodeID;
                    requireDynamic/*n*/.unmountComponent(), this._renderedComponent = x(module/*i*/, this._currentElement.type);
                    var s = this._renderedComponent.mountComponent(o, global/*e*/, this._mountDepth + 1);
                    f.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a, s)
                }
            }),
            forceUpdate: function(global/*e*/) {
                var require/*t*/ = this._compositeLifeCycleState;
                this.isMounted() || require/*t*/ === B.MOUNTING || P(0, "forceUpdate(...): Can only force an update on mounted or mounting components."), (require/*t*/ === B.UNMOUNTING || null != g.current) && P(0, "forceUpdate(...): Cannot force an update while unmounting component or within a `render` function."), this._pendingForceUpdate = !0, T.enqueueUpdate(this, global/*e*/)
            },
            _renderValidatedComponent: w.measure("ReactCompositeComponent", "_renderValidatedComponent", function() {
                var global/*e*/, require/*t*/ = m.current;
                m.current = this._processChildContext(this._currentElement._context), g.current = this;
                try {
                    global/*e*/ = this.render(), null === global/*e*/ || global/*e*/ === !1 ? (global/*e*/ = v.getEmptyComponent(), v.registerNullComponentID(this._rootNodeID)) : v.deregisterNullComponentID(this._rootNodeID)
                } finally {
                    m.current = require/*t*/, g.current = null
                }
                return _.isValidElement(global/*e*/) || P(0, "%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.", this.constructor.displayName || "ReactCompositeComponent"), global/*e*/
            }),
            _bindAutoBindMethods: function() {
                for (var global/*e*/ in this.__reactAutoBindMap)
                    if (this.__reactAutoBindMap.hasOwnProperty(global/*e*/)) {
                        var require/*t*/ = this.__reactAutoBindMap[global/*e*/];
                        this[global/*e*/] = this._bindAutoBindMethod(S.guard(require/*t*/, this.constructor.displayName + "." + global/*e*/))
                    }
            },
            _bindAutoBindMethod: function(global/*e*/) {
                var require/*t*/ = this,
                    requireDynamic/*n*/ = global/*e*/.bind(require/*t*/);
                if (__DEV__) {
                    requireDynamic/*n*/.__reactBoundContext = require/*t*/, requireDynamic/*n*/.__reactBoundMethod = global/*e*/, requireDynamic/*n*/.__reactBoundArguments = null;
                    var requireLazy/*r*/ = require/*t*/.constructor.displayName,
                        module/*i*/ = requireDynamic/*n*/.bind;
                    requireDynamic/*n*/.bind = function(o) {
                        for (var a = [], s = 1, l = arguments.length; l > s; s++) a.push(arguments[s]);
                        if (o !== require/*t*/ && null !== o) L("react_bind_warning", {
                            component: requireLazy/*r*/
                        }), console.warn("bind(): React component methods may only be bound to the component instance. See " + requireLazy/*r*/);
                        else if (!a.length) return L("react_bind_warning", {
                            component: requireLazy/*r*/
                        }), console.warn("bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See " + requireLazy/*r*/), requireDynamic/*n*/;
                        var u = module/*i*/.apply(requireDynamic/*n*/, arguments);
                        return u.__reactBoundContext = require/*t*/, u.__reactBoundMethod = global/*e*/, u.__reactBoundArguments = a, u
                    }
                }
                return requireDynamic/*n*/
            }
        },
        V = function() {};
    Object.assign(V.prototype, f.Mixin, R.Mixin, C.Mixin, H);
    var q = {
        LifeCycle: B,
        Base: V,
        createClass: function(global/*e*/) {
            var require/*t*/ = function() {};
            require/*t*/.prototype = new V, require/*t*/.prototype.constructor = require/*t*/, N.forEach(u.bind(null, require/*t*/)), u(require/*t*/, global/*e*/), require/*t*/.getDefaultProps && (require/*t*/.defaultProps = require/*t*/.getDefaultProps()), require/*t*/.prototype.render || P(0, "createClass(...): Class specification must implement a `render` method."), __DEV__ && require/*t*/.prototype.componentShouldUpdate && (L("react_component_should_update_warning", {
                component: global/*e*/.displayName
            }), console.warn((global/*e*/.displayName || "A component") + " has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value."));
            for (var requireDynamic/*n*/ in G) require/*t*/.prototype[requireDynamic/*n*/] || (require/*t*/.prototype[requireDynamic/*n*/] = null);
            return b.wrapFactory(__DEV__ ? y.createFactory(require/*t*/) : _.createFactory(require/*t*/))
        },
        injection: {
            injectMixin: function(global/*e*/) {
                N.push(global/*e*/)
            }
        }
    };
    module/*i*/.exports = q
});