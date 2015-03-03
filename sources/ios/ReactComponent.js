__d("ReactComponent",["ReactElement","ReactOwner","ReactUpdates","invariant","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactElement"),
        exports/*a*/ = require/*t*/("ReactOwner"),
        ReactElement/*s*/ = require/*t*/("ReactUpdates"),
        ReactOwner/*l*/ = require/*t*/("invariant"),
        ReactUpdates/*u*/ = require/*t*/("keyMirror"),
        invariant/*c*/ = ReactUpdates/*u*/({
            MOUNTED: null,
            keyMirror/*UNMOUNTED*/: null
        }),
        p = !1,
        d = null,
        h = null,
        f = {
            injection: {
                injectEnvironment: function(global/*e*/) {
                    p && ReactOwner/*l*/(0, "ReactComponent: injectEnvironment() can only be called once."), h = global/*e*/.mountImageIntoNode, d = global/*e*/.unmountIDFromEnvironment, f.BackendIDOperations = global/*e*/.BackendIDOperations, p = !0
                }
            },
            LifeCycle: invariant/*c*/,
            BackendIDOperations: null,
            Mixin: {
                isMounted: function() {
                    return this._lifeCycleState === invariant/*c*/.MOUNTED
                },
                setProps: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._pendingElement || this._currentElement;
                    this.replaceProps(Object.assign({}, requireDynamic/*n*/.props, global/*e*/), require/*t*/)
                },
                replaceProps: function(global/*e*/, require/*t*/) {
                    this.isMounted() || ReactOwner/*l*/(0, "replaceProps(...): Can only update exports/*a*/ mounted component."), 0 !== this._mountDepth && ReactOwner/*l*/(0, "replaceProps(...): You called `setProps` or `replaceProps` on exports/*a*/ component with exports/*a*/ parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner'ReactElement/*s*/ `render` method to pass the correct value as props to the component where it is created."), this._pendingElement = o.cloneAndReplaceProps(this._pendingElement || this._currentElement, global/*e*/), ReactElement/*s*/.enqueueUpdate(this, require/*t*/)
                },
                _setPropsInternal: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._pendingElement || this._currentElement;
                    this._pendingElement = o.cloneAndReplaceProps(requireDynamic/*n*/, Object.assign({}, requireDynamic/*n*/.props, global/*e*/)), ReactElement/*s*/.enqueueUpdate(this, require/*t*/)
                },
                construct: function(global/*e*/) {
                    this.props = global/*e*/.props, this._owner = global/*e*/._owner, this._lifeCycleState = invariant/*c*/.keyMirror/*UNMOUNTED*/, this._pendingCallbacks = null, this._currentElement = global/*e*/, this._pendingElement = null
                },
                mountComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    this.isMounted() && ReactOwner/*l*/(0, "mountComponent(%ReactElement/*s*/, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing exports/*a*/ single component instance in multiple places.", global/*e*/);
                    var requireLazy/*r*/ = this._currentElement.ref;
                    if (null != requireLazy/*r*/) {
                        var module/*i*/ = this._currentElement._owner;
                        exports/*a*/.addComponentAsRefTo(this, requireLazy/*r*/, module/*i*/)
                    }
                    this._rootNodeID = global/*e*/, this._lifeCycleState = invariant/*c*/.MOUNTED, this._mountDepth = requireDynamic/*n*/
                },
                unmountComponent: function() {
                    this.isMounted() || ReactOwner/*l*/(0, "unmountComponent(): Can only unmount exports/*a*/ mounted component.");
                    var global/*e*/ = this._currentElement.ref;
                    null != global/*e*/ && exports/*a*/.removeComponentAsRefFrom(this, global/*e*/, this._owner), d(this._rootNodeID), this._rootNodeID = null, this._lifeCycleState = invariant/*c*/.keyMirror/*UNMOUNTED*/
                },
                receiveComponent: function(global/*e*/, require/*t*/) {
                    this.isMounted() || ReactOwner/*l*/(0, "receiveComponent(...): Can only update exports/*a*/ mounted component."), this._pendingElement = global/*e*/, this.performUpdateIfNecessary(require/*t*/)
                },
                performUpdateIfNecessary: function(global/*e*/) {
                    if (null != this._pendingElement) {
                        var require/*t*/ = this._currentElement,
                            requireDynamic/*n*/ = this._pendingElement;
                        this._currentElement = requireDynamic/*n*/, this.props = requireDynamic/*n*/.props, this._owner = requireDynamic/*n*/._owner, this._pendingElement = null, this.updateComponent(global/*e*/, require/*t*/)
                    }
                },
                updateComponent: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._currentElement;
                    (requireDynamic/*n*/._owner !== require/*t*/._owner || requireDynamic/*n*/.ref !== require/*t*/.ref) && (null != require/*t*/.ref && exports/*a*/.removeComponentAsRefFrom(this, require/*t*/.ref, require/*t*/._owner), null != requireDynamic/*n*/.ref && exports/*a*/.addComponentAsRefTo(this, requireDynamic/*n*/.ref, requireDynamic/*n*/._owner))
                },
                mountComponentIntoNode: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/ = ReactElement/*s*/.ReactReconcileTransaction.getPooled();
                    requireLazy/*r*/.perform(this._mountComponentIntoNode, this, global/*e*/, require/*t*/, requireLazy/*r*/, requireDynamic/*n*/), ReactElement/*s*/.ReactReconcileTransaction.release(requireLazy/*r*/)
                },
                _mountComponentIntoNode: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = this.mountComponent(global/*e*/, requireDynamic/*n*/, 0);
                    h(module/*i*/, require/*t*/, requireLazy/*r*/)
                },
                isOwnedBy: function(global/*e*/) {
                    return this._owner === global/*e*/
                },
                getSiblingByRef: function(global/*e*/) {
                    var require/*t*/ = this._owner;
                    return require/*t*/ && require/*t*/.refs ? require/*t*/.refs[global/*e*/] : null
                }
            }
        };
    module/*i*/.exports = f
});