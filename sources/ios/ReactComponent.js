__d("ReactComponent",["ReactElement","ReactOwner","ReactUpdates","invariant","keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var ReactElement/*o*/ = t("ReactElement"),
        ReactOwner/*a*/ = t("ReactOwner"),
        ReactUpdates/*s*/ = t("ReactUpdates"),
        invariant/*l*/ = t("invariant"),
        keyMirror/*u*/ = t("keyMirror"),
        c = keyMirror/*u*/({
            MOUNTED: null,
            UNMOUNTED: null
        }),
        p = !1,
        d = null,
        h = null,
        f = {
            injection: {
                injectEnvironment: function(e) {
                    p && invariant/*l*/(0, "ReactComponent: injectEnvironment() can only be called once."), h = e.mountImageIntoNode, d = e.unmountIDFromEnvironment, f.BackendIDOperations = e.BackendIDOperations, p = !0
                }
            },
            LifeCycle: c,
            BackendIDOperations: null,
            Mixin: {
                isMounted: function() {
                    return this._lifeCycleState === c.MOUNTED
                },
                setProps: function(e, t) {
                    var n = this._pendingElement || this._currentElement;
                    this.replaceProps(Object.assign({}, n.props, e), t)
                },
                replaceProps: function(e, t) {
                    this.isMounted() || invariant/*l*/(0, "replaceProps(...): Can only update ReactOwner/*a*/ mounted component."), 0 !== this._mountDepth && invariant/*l*/(0, "replaceProps(...): You called `setProps` or `replaceProps` on ReactOwner/*a*/ component with ReactOwner/*a*/ parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner'ReactUpdates/*s*/ `render` method to pass the correct value as props to the component where it is created."), this._pendingElement = ReactElement/*o*/.cloneAndReplaceProps(this._pendingElement || this._currentElement, e), ReactUpdates/*s*/.enqueueUpdate(this, t)
                },
                _setPropsInternal: function(e, t) {
                    var n = this._pendingElement || this._currentElement;
                    this._pendingElement = ReactElement/*o*/.cloneAndReplaceProps(n, Object.assign({}, n.props, e)), ReactUpdates/*s*/.enqueueUpdate(this, t)
                },
                construct: function(e) {
                    this.props = e.props, this._owner = e._owner, this._lifeCycleState = c.UNMOUNTED, this._pendingCallbacks = null, this._currentElement = e, this._pendingElement = null
                },
                mountComponent: function(e, t, n) {
                    this.isMounted() && invariant/*l*/(0, "mountComponent(%ReactUpdates/*s*/, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing ReactOwner/*a*/ single component instance in multiple places.", e);
                    var r = this._currentElement.ref;
                    if (null != r) {
                        var i = this._currentElement._owner;
                        ReactOwner/*a*/.addComponentAsRefTo(this, r, i)
                    }
                    this._rootNodeID = e, this._lifeCycleState = c.MOUNTED, this._mountDepth = n
                },
                unmountComponent: function() {
                    this.isMounted() || invariant/*l*/(0, "unmountComponent(): Can only unmount ReactOwner/*a*/ mounted component.");
                    var e = this._currentElement.ref;
                    null != e && ReactOwner/*a*/.removeComponentAsRefFrom(this, e, this._owner), d(this._rootNodeID), this._rootNodeID = null, this._lifeCycleState = c.UNMOUNTED
                },
                receiveComponent: function(e, t) {
                    this.isMounted() || invariant/*l*/(0, "receiveComponent(...): Can only update ReactOwner/*a*/ mounted component."), this._pendingElement = e, this.performUpdateIfNecessary(t)
                },
                performUpdateIfNecessary: function(e) {
                    if (null != this._pendingElement) {
                        var t = this._currentElement,
                            n = this._pendingElement;
                        this._currentElement = n, this.props = n.props, this._owner = n._owner, this._pendingElement = null, this.updateComponent(e, t)
                    }
                },
                updateComponent: function(e, t) {
                    var n = this._currentElement;
                    (n._owner !== t._owner || n.ref !== t.ref) && (null != t.ref && ReactOwner/*a*/.removeComponentAsRefFrom(this, t.ref, t._owner), null != n.ref && ReactOwner/*a*/.addComponentAsRefTo(this, n.ref, n._owner))
                },
                mountComponentIntoNode: function(e, t, n) {
                    var r = ReactUpdates/*s*/.ReactReconcileTransaction.getPooled();
                    r.perform(this._mountComponentIntoNode, this, e, t, r, n), ReactUpdates/*s*/.ReactReconcileTransaction.release(r)
                },
                _mountComponentIntoNode: function(e, t, n, r) {
                    var i = this.mountComponent(e, n, 0);
                    h(i, t, r)
                },
                isOwnedBy: function(e) {
                    return this._owner === e
                },
                getSiblingByRef: function(e) {
                    var t = this._owner;
                    return t && t.refs ? t.refs[e] : null
                }
            }
        };
    i.exports = f
});