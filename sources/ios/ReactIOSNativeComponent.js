__d("ReactIOSNativeComponent",["NativeMethodsMixin","ReactComponent","ReactIOSComponentMixin","ReactIOSEventEmitter","ReactIOSStyleAttributes","ReactIOSTagHandles","ReactMultiChild","NativeModulesDeprecated","styleDiffer","deepFreezeAndThrowOnMutationInDev","diffRawProperties","flattenStyle","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        ReactComponent/*a*/ = require/*t*/("ReactComponent"),
        ReactIOSComponentMixin/*s*/ = require/*t*/("ReactIOSComponentMixin"),
        ReactIOSEventEmitter/*l*/ = require/*t*/("ReactIOSEventEmitter"),
        ReactIOSStyleAttributes/*u*/ = require/*t*/("ReactIOSStyleAttributes"),
        ReactIOSTagHandles/*c*/ = require/*t*/("ReactIOSTagHandles"),
        ReactMultiChild/*p*/ = require/*t*/("ReactMultiChild"),
        NativeModulesDeprecated/*d*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        styleDiffer/*h*/ = require/*t*/("styleDiffer"),
        deepFreezeAndThrowOnMutationInDev/*f*/ = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        diffRawProperties/*m*/ = require/*t*/("diffRawProperties"),
        flattenStyle/*g*/ = require/*t*/("flattenStyle"),
        warning/*_*/ = require/*t*/("warning"),
        y = ReactIOSEventEmitter/*l*/.registrationNames,
        v = ReactIOSEventEmitter/*l*/.putListener,
        S = ReactIOSEventEmitter/*l*/.deleteAllListeners,
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
            S(this._rootNodeID), ReactComponent/*a*/.Mixin.unmountComponent.call(this), this.unmountChildren()
        },
        initializeChildren: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = this.mountChildren(global/*e*/, requireDynamic/*n*/);
            if (requireLazy/*r*/.length) {
                for (var module/*i*/ = R(requireLazy/*r*/.length), NativeMethodsMixin/*o*/ = [], ReactComponent/*a*/ = 0; ReactComponent/*a*/ < requireLazy/*r*/.length; ReactComponent/*a*/++) {
                    var ReactIOSComponentMixin/*s*/ = requireLazy/*r*/[ReactComponent/*a*/],
                        ReactIOSEventEmitter/*l*/ = ReactIOSComponentMixin/*s*/.tag,
                        ReactIOSStyleAttributes/*u*/ = ReactIOSComponentMixin/*s*/.rootNodeID;
                    warning/*_*/(ReactIOSComponentMixin/*s*/ && ReactIOSComponentMixin/*s*/.rootNodeID && ReactIOSComponentMixin/*s*/.tag, "Mount image returned does not have required data"), ReactIOSTagHandles/*c*/.associateRootNodeIDWithMountedNodeHandle(ReactIOSStyleAttributes/*u*/, ReactIOSEventEmitter/*l*/), NativeMethodsMixin/*o*/[ReactComponent/*a*/] = ReactIOSComponentMixin/*s*/.tag
                }
                NativeModulesDeprecated/*d*/.manageChildren(require/*t*/, null, null, NativeMethodsMixin/*o*/, module/*i*/, null)
            }
        },
        computeUpdatedProperties: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            if (__DEV__)
                for (var requireLazy/*r*/ in require/*t*/) require/*t*/.hasOwnProperty(requireLazy/*r*/) && require/*t*/[requireLazy/*r*/] && requireDynamic/*n*/[requireLazy/*r*/] && deepFreezeAndThrowOnMutationInDev/*f*/(require/*t*/[requireLazy/*r*/]);
            var module/*i*/ = diffRawProperties/*m*/(null, global/*e*/, require/*t*/, requireDynamic/*n*/);
            if (styleDiffer/*h*/(require/*t*/.style, global/*e*/.style)) {
                var NativeMethodsMixin/*o*/ = flattenStyle/*g*/(require/*t*/.style);
                module/*i*/ = diffRawProperties/*m*/(module/*i*/, this.previousFlattenedStyle, NativeMethodsMixin/*o*/, ReactIOSStyleAttributes/*u*/), this.previousFlattenedStyle = NativeMethodsMixin/*o*/
            }
            return module/*i*/
        },
        updateComponent: function(global/*e*/, require/*t*/) {
            ReactComponent/*a*/.Mixin.updateComponent.call(this, global/*e*/, require/*t*/);
            var requireDynamic/*n*/ = this._currentElement,
                requireLazy/*r*/ = this.computeUpdatedProperties(require/*t*/.props, requireDynamic/*n*/.props, this.viewConfig.validAttributes);
            requireLazy/*r*/ && NativeModulesDeprecated/*d*/.updateView(ReactIOSTagHandles/*c*/.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), this.viewConfig.uiViewClassName, requireLazy/*r*/), this._reconcileListenersUponUpdate(require/*t*/.props, requireDynamic/*n*/.props), this.updateChildren(this.props.children, global/*e*/)
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
            ReactComponent/*a*/.Mixin.mountComponent.call(this, global/*e*/, require/*t*/, requireDynamic/*n*/);
            var requireLazy/*r*/ = ReactIOSTagHandles/*c*/.allocateTag();
            this.previousFlattenedStyle = {};
            var module/*i*/ = this.computeUpdatedProperties({}, this.props, this.viewConfig.validAttributes);
            return NativeModulesDeprecated/*d*/.createView(requireLazy/*r*/, this.viewConfig.uiViewClassName, module/*i*/), this._registerListenersUponCreation(this.props), this.initializeChildren(this.props.children, requireLazy/*r*/, require/*t*/), {
                rootNodeID: global/*e*/,
                tag: requireLazy/*r*/
            }
        }
    }, Object.assign(b.prototype, ReactComponent/*a*/.Mixin, ReactMultiChild/*p*/.Mixin, b.Mixin, NativeMethodsMixin/*o*/, ReactIOSComponentMixin/*s*/), module/*i*/.exports = b
});