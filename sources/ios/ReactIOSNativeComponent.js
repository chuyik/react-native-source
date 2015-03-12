__d("ReactIOSNativeComponent",["NativeMethodsMixin","ReactComponent","ReactIOSComponentMixin","ReactIOSEventEmitter","ReactIOSStyleAttributes","ReactIOSTagHandles","ReactMultiChild","NativeModulesDeprecated","styleDiffer","deepFreezeAndThrowOnMutationInDev","diffRawProperties","flattenStyle","warning"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        ReactComponent/*a*/ = t("ReactComponent"),
        ReactIOSComponentMixin/*s*/ = t("ReactIOSComponentMixin"),
        ReactIOSEventEmitter/*l*/ = t("ReactIOSEventEmitter"),
        ReactIOSStyleAttributes/*u*/ = t("ReactIOSStyleAttributes"),
        ReactIOSTagHandles/*c*/ = t("ReactIOSTagHandles"),
        ReactMultiChild/*p*/ = t("ReactMultiChild"),
        NativeModulesDeprecated/*d*/ = t("NativeModulesDeprecated").RKUIManager,
        styleDiffer/*h*/ = t("styleDiffer"),
        deepFreezeAndThrowOnMutationInDev/*f*/ = t("deepFreezeAndThrowOnMutationInDev"),
        diffRawProperties/*m*/ = t("diffRawProperties"),
        flattenStyle/*g*/ = t("flattenStyle"),
        warning/*_*/ = t("warning"),
        y = ReactIOSEventEmitter/*l*/.registrationNames,
        v = ReactIOSEventEmitter/*l*/.putListener,
        S = ReactIOSEventEmitter/*l*/.deleteAllListeners,
        b = function(e) {
            this.viewConfig = e, this.props = null, this.previousFlattenedStyle = null
        },
        R = function(e) {
            var t = R._cache[e];
            if (t) return t;
            for (var n = [], r = 0; e > r; r++) n[r] = r;
            return R._cache[e] = n
        };
    R._cache = {}, b.Mixin = {
        unmountComponent: function() {
            S(this._rootNodeID), ReactComponent/*a*/.Mixin.unmountComponent.call(this), this.unmountChildren()
        },
        initializeChildren: function(e, t, n) {
            var r = this.mountChildren(e, n);
            if (r.length) {
                for (var i = R(r.length), NativeMethodsMixin/*o*/ = [], ReactComponent/*a*/ = 0; ReactComponent/*a*/ < r.length; ReactComponent/*a*/++) {
                    var ReactIOSComponentMixin/*s*/ = r[ReactComponent/*a*/],
                        ReactIOSEventEmitter/*l*/ = ReactIOSComponentMixin/*s*/.tag,
                        ReactIOSStyleAttributes/*u*/ = ReactIOSComponentMixin/*s*/.rootNodeID;
                    warning/*_*/(ReactIOSComponentMixin/*s*/ && ReactIOSComponentMixin/*s*/.rootNodeID && ReactIOSComponentMixin/*s*/.tag, "Mount image returned does not have required data"), ReactIOSTagHandles/*c*/.associateRootNodeIDWithMountedNodeHandle(ReactIOSStyleAttributes/*u*/, ReactIOSEventEmitter/*l*/), NativeMethodsMixin/*o*/[ReactComponent/*a*/] = ReactIOSComponentMixin/*s*/.tag
                }
                NativeModulesDeprecated/*d*/.manageChildren(t, null, null, NativeMethodsMixin/*o*/, i, null)
            }
        },
        computeUpdatedProperties: function(e, t, n) {
            if (__DEV__)
                for (var r in t) t.hasOwnProperty(r) && t[r] && n[r] && deepFreezeAndThrowOnMutationInDev/*f*/(t[r]);
            var i = diffRawProperties/*m*/(null, e, t, n);
            if (styleDiffer/*h*/(t.style, e.style)) {
                var NativeMethodsMixin/*o*/ = flattenStyle/*g*/(t.style);
                i = diffRawProperties/*m*/(i, this.previousFlattenedStyle, NativeMethodsMixin/*o*/, ReactIOSStyleAttributes/*u*/), this.previousFlattenedStyle = NativeMethodsMixin/*o*/
            }
            return i
        },
        updateComponent: function(e, t) {
            ReactComponent/*a*/.Mixin.updateComponent.call(this, e, t);
            var n = this._currentElement,
                r = this.computeUpdatedProperties(t.props, n.props, this.viewConfig.validAttributes);
            r && NativeModulesDeprecated/*d*/.updateView(ReactIOSTagHandles/*c*/.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), this.viewConfig.uiViewClassName, r), this._reconcileListenersUponUpdate(t.props, n.props), this.updateChildren(this.props.children, e)
        },
        _registerListenersUponCreation: function(e) {
            for (var t in e)
                if (y[t] && e[t]) {
                    var n = e[t];
                    v(this._rootNodeID, t, n)
                }
        },
        _reconcileListenersUponUpdate: function(e, t) {
            for (var n in t) y[n] && t[n] != e[n] && v(this._rootNodeID, n, t[n])
        },
        mountComponent: function(e, t, n) {
            ReactComponent/*a*/.Mixin.mountComponent.call(this, e, t, n);
            var r = ReactIOSTagHandles/*c*/.allocateTag();
            this.previousFlattenedStyle = {};
            var i = this.computeUpdatedProperties({}, this.props, this.viewConfig.validAttributes);
            return NativeModulesDeprecated/*d*/.createView(r, this.viewConfig.uiViewClassName, i), this._registerListenersUponCreation(this.props), this.initializeChildren(this.props.children, r, t), {
                rootNodeID: e,
                tag: r
            }
        }
    }, Object.assign(b.prototype, ReactComponent/*a*/.Mixin, ReactMultiChild/*p*/.Mixin, b.Mixin, NativeMethodsMixin/*o*/, ReactIOSComponentMixin/*s*/), i.exports = b
});