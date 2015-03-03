__d("ReactIOSNativeComponent",["NativeMethodsMixin","ReactComponent","ReactIOSComponentMixin","ReactIOSEventEmitter","ReactIOSStyleAttributes","ReactIOSTagHandles","ReactMultiChild","NativeModulesDeprecated","styleDiffer","deepFreezeAndThrowOnMutationInDev","diffRawProperties","flattenStyle","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("ReactComponent"),
        s = require/*t*/("ReactIOSComponentMixin"),
        l = require/*t*/("ReactIOSEventEmitter"),
        u = require/*t*/("ReactIOSStyleAttributes"),
        c = require/*t*/("ReactIOSTagHandles"),
        p = require/*t*/("ReactMultiChild"),
        d = require/*t*/("NativeModulesDeprecated").RKUIManager,
        h = require/*t*/("styleDiffer"),
        f = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        m = require/*t*/("diffRawProperties"),
        g = require/*t*/("flattenStyle"),
        _ = require/*t*/("warning"),
        y = l.registrationNames,
        v = l.putListener,
        S = l.deleteAllListeners,
        b = function(global/*e*/) {
            this.viewConfig = global/*e*/, this.props = null, this.previousFlattenedStyle = null
        },
        R = function(global/*e*/) {
            var require/*t*/ = R._cache[global/*e*/];
            if (require/*t*/) return require/*t*/;
            for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; global/*e*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/;
            return R._cache[global/*e*/] = requireDynamic/*n*/
        };
    R._cache = {}, b.Mixin = {
        unmountComponent: function() {
            S(this._rootNodeID), a.Mixin.unmountComponent.call(this), this.unmountChildren()
        },
        initializeChildren: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = this.mountChildren(global/*e*/, requireDynamic/*n*/);
            if (requireLazy/*r*/.length) {
                for (var module/*i*/ = R(requireLazy/*r*/.length), o = [], a = 0; a < requireLazy/*r*/.length; a++) {
                    var s = requireLazy/*r*/[a],
                        l = s.tag,
                        u = s.rootNodeID;
                    _(s && s.rootNodeID && s.tag, "Mount image returned does not have required data"), c.associateRootNodeIDWithMountedNodeHandle(u, l), o[a] = s.tag
                }
                d.manageChildren(require/*t*/, null, null, o, module/*i*/, null)
            }
        },
        computeUpdatedProperties: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            if (__DEV__)
                for (var requireLazy/*r*/ in require/*t*/) require/*t*/.hasOwnProperty(requireLazy/*r*/) && require/*t*/[requireLazy/*r*/] && requireDynamic/*n*/[requireLazy/*r*/] && f(require/*t*/[requireLazy/*r*/]);
            var module/*i*/ = m(null, global/*e*/, require/*t*/, requireDynamic/*n*/);
            if (h(require/*t*/.style, global/*e*/.style)) {
                var o = g(require/*t*/.style);
                module/*i*/ = m(module/*i*/, this.previousFlattenedStyle, o, u), this.previousFlattenedStyle = o
            }
            return module/*i*/
        },
        updateComponent: function(global/*e*/, require/*t*/) {
            a.Mixin.updateComponent.call(this, global/*e*/, require/*t*/);
            var requireDynamic/*n*/ = this._currentElement,
                requireLazy/*r*/ = this.computeUpdatedProperties(require/*t*/.props, requireDynamic/*n*/.props, this.viewConfig.validAttributes);
            requireLazy/*r*/ && d.updateView(c.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), this.viewConfig.uiViewClassName, requireLazy/*r*/), this._reconcileListenersUponUpdate(require/*t*/.props, requireDynamic/*n*/.props), this.updateChildren(this.props.children, global/*e*/)
        },
        _registerListenersUponCreation: function(global/*e*/) {
            for (var require/*t*/ in global/*e*/)
                if (y[require/*t*/] && global/*e*/[require/*t*/]) {
                    var requireDynamic/*n*/ = global/*e*/[require/*t*/];
                    v(this._rootNodeID, require/*t*/, requireDynamic/*n*/)
                }
        },
        _reconcileListenersUponUpdate: function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ in require/*t*/) y[requireDynamic/*n*/] && require/*t*/[requireDynamic/*n*/] != global/*e*/[requireDynamic/*n*/] && v(this._rootNodeID, requireDynamic/*n*/, require/*t*/[requireDynamic/*n*/])
        },
        mountComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            a.Mixin.mountComponent.call(this, global/*e*/, require/*t*/, requireDynamic/*n*/);
            var requireLazy/*r*/ = c.allocateTag();
            this.previousFlattenedStyle = {};
            var module/*i*/ = this.computeUpdatedProperties({}, this.props, this.viewConfig.validAttributes);
            return d.createView(requireLazy/*r*/, this.viewConfig.uiViewClassName, module/*i*/), this._registerListenersUponCreation(this.props), this.initializeChildren(this.props.children, requireLazy/*r*/, require/*t*/), {
                rootNodeID: global/*e*/,
                tag: requireLazy/*r*/
            }
        }
    }, Object.assign(b.prototype, a.Mixin, p.Mixin, b.Mixin, o, s), module/*i*/.exports = b
});