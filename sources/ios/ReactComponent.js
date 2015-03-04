__d("ReactComponent",["ReactElement","ReactOwner","ReactUpdates","invariant","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactElement/*o*/ = require/*t*/("ReactElement"),
        ReactOwner/*a*/ = require/*t*/("ReactOwner"),
        ReactUpdates/*s*/ = require/*t*/("ReactUpdates"),
        invariant/*l*/ = require/*t*/("invariant"),
        keyMirror/*u*/ = require/*t*/("keyMirror"),
        c = keyMirror/*u*/({
            MOUNTED: null,
            UNMOUNTED: null
        }),
        p = !1,
        d = null,
        h = null,
        f = {
            injection: {
                injectEnvironment: function(global/*e*/) {
                    p && invariant/*l*/(0, "ReactComponent: injectEnvironment() can only be called once."), h = global/*e*/.mountImageIntoNode, d = global/*e*/.unmountIDFromEnvironment, f.BackendIDOperations = global/*e*/.BackendIDOperations, p = !0
                }
            },
            LifeCycle: c,
            BackendIDOperations: null,
            Mixin: {
                isMounted: function() {
                    return this._lifeCycleState === c.MOUNTED
                },
                setProps: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._pendingElement || this._currentElement;
                    this.replaceProps(Object.assign({}, requireDynamic/*n*/.props, global/*e*/), require/*t*/)
                },
                replaceProps: function(global/*e*/, require/*t*/) {
                    this.isMounted() || invariant/*l*/(0, "replaceProps(...): Can only update ReactOwner/*a*/ mounted component."), 0 !== this._mountDepth && invariant/*l*/(0, "replaceProps(...): You called `setProps` or `replaceProps` on ReactOwner/*a*/ component with ReactOwner/*a*/ parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner'ReactUpdates/*s*/ `render` method to pass the correct value as props to the component where it is created."), this._pendingElement = ReactElement/*o*/.cloneAndReplaceProps(this._pendingElement || this._currentElement, global/*e*/), ReactUpdates/*s*/.enqueueUpdate(this, require/*t*/)
                },
                _setPropsInternal: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = this._pendingElement || this._currentElement;
                    this._pendingElement = ReactElement/*o*/.cloneAndReplaceProps(requireDynamic/*n*/, Object.assign({}, requireDynamic/*n*/.props, global/*e*/)), ReactUpdates/*s*/.enqueueUpdate(this, require/*t*/)
                },
                construct: function(global/*e*/) {
                    this.props = global/*e*/.props, this._owner = global/*e*/._owner, this._lifeCycleState = c.UNMOUNTED, this._pendingCallbacks = null, this._currentElement = global/*e*/, this._pendingElement = null
                },
                mountComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    this.isMounted() && invariant/*l*/(0, "mountComponent(%ReactUpdates/*s*/, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing ReactOwner/*a*/ single component instance in multiple places.", global/*e*/);
                    var requireLazy/*r*/ = this._currentElement.ref;
                    if (null != requireLazy/*r*/) {
                        var module/*i*/ = this._currentElement._owner;
                        ReactOwner/*a*/.addComponentAsRefTo(this, requireLazy/*r*/, module/*i*/)
                    }
                    this._rootNodeID = global/*e*/, this._lifeCycleState = c.MOUNTED, this._mountDepth = requireDynamic/*n*/
                },
                unmountComponent: function() {
                    this.isMounted() || invariant/*l*/(0, "unmountComponent(): Can only unmount ReactOwner/*a*/ mounted component.");
                    var global/*e*/ = this._currentElement.ref;
                    null != global/*e*/ && ReactOwner/*a*/.removeComponentAsRefFrom(this, global/*e*/, this._owner), d(this._rootNodeID), this._rootNodeID = null, this._lifeCycleState = c.UNMOUNTED
                },
                receiveComponent: function(global/*e*/, require/*t*/) {
                    this.isMounted() || invariant/*l*/(0, "receiveComponent(...): Can only update ReactOwner/*a*/ mounted component."), this._pendingElement = global/*e*/, this.performUpdateIfNecessary(require/*t*/)
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
                    (requireDynamic/*n*/._owner !== require/*t*/._owner || requireDynamic/*n*/.ref !== require/*t*/.ref) && (null != require/*t*/.ref && ReactOwner/*a*/.removeComponentAsRefFrom(this, require/*t*/.ref, require/*t*/._owner), null != requireDynamic/*n*/.ref && ReactOwner/*a*/.addComponentAsRefTo(this, requireDynamic/*n*/.ref, requireDynamic/*n*/._owner))
                },
                mountComponentIntoNode: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/ = ReactUpdates/*s*/.ReactReconcileTransaction.getPooled();
                    requireLazy/*r*/.perform(this._mountComponentIntoNode, this, global/*e*/, require/*t*/, requireLazy/*r*/, requireDynamic/*n*/), ReactUpdates/*s*/.ReactReconcileTransaction.release(requireLazy/*r*/)
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