__d("ReactIOSNativeComponent",["NativeMethodsMixin","ReactComponent","ReactIOSComponentMixin","ReactIOSEventEmitter","ReactIOSStyleAttributes","ReactIOSTagHandles","ReactMultiChild","NativeModulesDeprecated","styleDiffer","deepFreezeAndThrowOnMutationInDev","diffRawProperties","flattenStyle","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        exports/*a*/ = require/*t*/("ReactComponent"),
        NativeMethodsMixin/*s*/ = require/*t*/("ReactIOSComponentMixin"),
        ReactComponent/*l*/ = require/*t*/("ReactIOSEventEmitter"),
        ReactIOSComponentMixin/*u*/ = require/*t*/("ReactIOSStyleAttributes"),
        ReactIOSEventEmitter/*c*/ = require/*t*/("ReactIOSTagHandles"),
        ReactIOSStyleAttributes/*p*/ = require/*t*/("ReactMultiChild"),
        ReactIOSTagHandles/*d*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        ReactMultiChild/*h*/ = require/*t*/("styleDiffer"),
        NativeModulesDeprecated/*f*/ = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        styleDiffer/*m*/ = require/*t*/("diffRawProperties"),
        deepFreezeAndThrowOnMutationInDev/*g*/ = require/*t*/("flattenStyle"),
        diffRawProperties/*_*/ = require/*t*/("warning"),
        flattenStyle/*y*/ = ReactComponent/*l*/.registrationNames,
        warning/*v*/ = ReactComponent/*l*/.putListener,
        S = ReactComponent/*l*/.deleteAllListeners,
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
            S(this._rootNodeID), exports/*a*/.Mixin.unmountComponent.call(this), this.unmountChildren()
        },
        initializeChildren: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = this.mountChildren(global/*e*/, requireDynamic/*n*/);
            if (requireLazy/*r*/.length) {
                for (var module/*i*/ = R(requireLazy/*r*/.length), o = [], exports/*a*/ = 0; exports/*a*/ < requireLazy/*r*/.length; exports/*a*/++) {
                    var NativeMethodsMixin/*s*/ = requireLazy/*r*/[exports/*a*/],
                        ReactComponent/*l*/ = NativeMethodsMixin/*s*/.tag,
                        ReactIOSComponentMixin/*u*/ = NativeMethodsMixin/*s*/.rootNodeID;
                    diffRawProperties/*_*/(NativeMethodsMixin/*s*/ && NativeMethodsMixin/*s*/.rootNodeID && NativeMethodsMixin/*s*/.tag, "Mount image returned does not have required data"), ReactIOSEventEmitter/*c*/.associateRootNodeIDWithMountedNodeHandle(ReactIOSComponentMixin/*u*/, ReactComponent/*l*/), o[exports/*a*/] = NativeMethodsMixin/*s*/.tag
                }
                ReactIOSTagHandles/*d*/.manageChildren(require/*t*/, null, null, o, module/*i*/, null)
            }
        },
        computeUpdatedProperties: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            if (__DEV__)
                for (var requireLazy/*r*/ in require/*t*/) require/*t*/.hasOwnProperty(requireLazy/*r*/) && require/*t*/[requireLazy/*r*/] && requireDynamic/*n*/[requireLazy/*r*/] && NativeModulesDeprecated/*f*/(require/*t*/[requireLazy/*r*/]);
            var module/*i*/ = styleDiffer/*m*/(null, global/*e*/, require/*t*/, requireDynamic/*n*/);
            if (ReactMultiChild/*h*/(require/*t*/.style, global/*e*/.style)) {
                var o = deepFreezeAndThrowOnMutationInDev/*g*/(require/*t*/.style);
                module/*i*/ = styleDiffer/*m*/(module/*i*/, this.previousFlattenedStyle, o, ReactIOSComponentMixin/*u*/), this.previousFlattenedStyle = o
            }
            return module/*i*/
        },
        updateComponent: function(global/*e*/, require/*t*/) {
            exports/*a*/.Mixin.updateComponent.call(this, global/*e*/, require/*t*/);
            var requireDynamic/*n*/ = this._currentElement,
                requireLazy/*r*/ = this.computeUpdatedProperties(require/*t*/.props, requireDynamic/*n*/.props, this.viewConfig.validAttributes);
            requireLazy/*r*/ && ReactIOSTagHandles/*d*/.updateView(ReactIOSEventEmitter/*c*/.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), this.viewConfig.uiViewClassName, requireLazy/*r*/), this._reconcileListenersUponUpdate(require/*t*/.props, requireDynamic/*n*/.props), this.updateChildren(this.props.children, global/*e*/)
        },
        _registerListenersUponCreation: function(global/*e*/) {
            for (var require/*t*/ in global/*e*/)
                if (flattenStyle/*y*/[require/*t*/] && global/*e*/[require/*t*/]) {
                    var requireDynamic/*n*/ = global/*e*/[require/*t*/];
                    warning/*v*/(this._rootNodeID, require/*t*/, requireDynamic/*n*/)
                }
        },
        _reconcileListenersUponUpdate: function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ in require/*t*/) flattenStyle/*y*/[requireDynamic/*n*/] && require/*t*/[requireDynamic/*n*/] != global/*e*/[requireDynamic/*n*/] && warning/*v*/(this._rootNodeID, requireDynamic/*n*/, require/*t*/[requireDynamic/*n*/])
        },
        mountComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            exports/*a*/.Mixin.mountComponent.call(this, global/*e*/, require/*t*/, requireDynamic/*n*/);
            var requireLazy/*r*/ = ReactIOSEventEmitter/*c*/.allocateTag();
            this.previousFlattenedStyle = {};
            var module/*i*/ = this.computeUpdatedProperties({}, this.props, this.viewConfig.validAttributes);
            return ReactIOSTagHandles/*d*/.createView(requireLazy/*r*/, this.viewConfig.uiViewClassName, module/*i*/), this._registerListenersUponCreation(this.props), this.initializeChildren(this.props.children, requireLazy/*r*/, require/*t*/), {
                rootNodeID: global/*e*/,
                tag: requireLazy/*r*/
            }
        }
    }, Object.assign(b.prototype, exports/*a*/.Mixin, ReactIOSStyleAttributes/*p*/.Mixin, b.Mixin, o, NativeMethodsMixin/*s*/), module/*i*/.exports = b
});