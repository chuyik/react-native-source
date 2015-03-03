__d("ReactIOSMount",["NativeModulesDeprecated","ReactIOSTagHandles","ReactPerf","instantiateReactComponent","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/ + "[" + require/*exports/*t*/*/ + "]"
    }
    var a = require/*exports/*t*/*/("NativeModulesDeprecated").RKUIManager,
        NativeModulesDeprecated/*s*/ = require/*exports/*t*/*/("ReactIOSTagHandles"),
        ReactIOSTagHandles/*l*/ = require/*exports/*t*/*/("ReactPerf"),
        ReactPerf/*u*/ = require/*exports/*t*/*/("instantiateReactComponent"),
        instantiateReactComponent/*c*/ = require/*exports/*t*/*/("invariant"),
        invariant/*p*/ = {},
        d = {
            instanceCount: 0,
            _instancesByContainerID: {},
            renderComponent: function(global/*e*/, require/*exports/*t*/*/) {
                var requireDynamic/*n*/ = ReactPerf/*u*/(global/*e*/);
                if (!NativeModulesDeprecated/*s*/.reactTagIsNativeTopRootID(require/*exports/*t*/*/)) return void console.error("You cannot render into anything but a top root");
                var requireLazy/*r*/ = NativeModulesDeprecated/*s*/.allocateRootNodeIDForTag(require/*exports/*t*/*/);
                NativeModulesDeprecated/*s*/.associateRootNodeIDWithMountedNodeHandle(requireLazy/*r*/, require/*exports/*t*/*/), invariant/*p*/[requireLazy/*r*/] = !0;
                var module/*i*/ = o(requireLazy/*r*/, d.instanceCount++);
                d._instancesByContainerID[requireLazy/*r*/] = requireDynamic/*n*/, requireDynamic/*n*/.mountComponentIntoNode(module/*i*/, requireLazy/*r*/)
            },
            unmountComponentAtNodeAndRemoveContainer: function(global/*e*/) {
                d.unmountComponentAtNode(global/*e*/), a.removeRootView(global/*e*/)
            },
            unmountComponentAtNode: function(global/*e*/) {
                var require/*exports/*t*/*/ = NativeModulesDeprecated/*s*/.tagToRootNodeID[global/*e*/];
                invariant/*p*/[require/*exports/*t*/*/] || instantiateReactComponent/*c*/(0, "We only currently support removing components from the root node");
                var requireDynamic/*n*/ = d._instancesByContainerID[require/*exports/*t*/*/];
                return requireDynamic/*n*/ ? (d.unmountComponentFromNode(requireDynamic/*n*/, require/*exports/*t*/*/), delete d._instancesByContainerID[require/*exports/*t*/*/], delete invariant/*p*/[require/*exports/*t*/*/], !0) : (console.error("Tried to unmount a component that does not exist"), !1)
            },
            unmountComponentFromNode: function(global/*e*/, require/*exports/*t*/*/) {
                global/*e*/.unmountComponent();
                var requireDynamic/*n*/ = NativeModulesDeprecated/*s*/.mostRecentMountedNodeHandleForRootNodeID(require/*exports/*t*/*/);
                a.removeSubviewsFromContainerWithID(requireDynamic/*n*/)
            },
            getNode: function(global/*e*/) {
                return global/*e*/
            }
        };
    d.renderComponent = ReactIOSTagHandles/*l*/.measure("ReactMount", "_renderNewRootComponent", d.renderComponent), module/*i*/.exports = d
});