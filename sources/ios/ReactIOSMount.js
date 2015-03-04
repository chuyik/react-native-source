__d("ReactIOSMount",["NativeModulesDeprecated","ReactIOSTagHandles","ReactPerf","instantiateReactComponent","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/ + "[" + require/*t*/ + "]"
    }
    var NativeModulesDeprecated/*a*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        ReactIOSTagHandles/*s*/ = require/*t*/("ReactIOSTagHandles"),
        ReactPerf/*l*/ = require/*t*/("ReactPerf"),
        instantiateReactComponent/*u*/ = require/*t*/("instantiateReactComponent"),
        invariant/*c*/ = require/*t*/("invariant"),
        p = {},
        d = {
            instanceCount: 0,
            _instancesByContainerID: {},
            renderComponent: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = instantiateReactComponent/*u*/(global/*e*/);
                if (!ReactIOSTagHandles/*s*/.reactTagIsNativeTopRootID(require/*t*/)) return void console.error("You cannot render into anything but NativeModulesDeprecated/*a*/ top root");
                var requireLazy/*r*/ = ReactIOSTagHandles/*s*/.allocateRootNodeIDForTag(require/*t*/);
                ReactIOSTagHandles/*s*/.associateRootNodeIDWithMountedNodeHandle(requireLazy/*r*/, require/*t*/), p[requireLazy/*r*/] = !0;
                var module/*i*/ = o(requireLazy/*r*/, d.instanceCount++);
                d._instancesByContainerID[requireLazy/*r*/] = requireDynamic/*n*/, requireDynamic/*n*/.mountComponentIntoNode(module/*i*/, requireLazy/*r*/)
            },
            unmountComponentAtNodeAndRemoveContainer: function(global/*e*/) {
                d.unmountComponentAtNode(global/*e*/), NativeModulesDeprecated/*a*/.removeRootView(global/*e*/)
            },
            unmountComponentAtNode: function(global/*e*/) {
                var require/*t*/ = ReactIOSTagHandles/*s*/.tagToRootNodeID[global/*e*/];
                p[require/*t*/] || invariant/*c*/(0, "We only currently support removing components from the root node");
                var requireDynamic/*n*/ = d._instancesByContainerID[require/*t*/];
                return requireDynamic/*n*/ ? (d.unmountComponentFromNode(requireDynamic/*n*/, require/*t*/), delete d._instancesByContainerID[require/*t*/], delete p[require/*t*/], !0) : (console.error("Tried to unmount NativeModulesDeprecated/*a*/ component that does not exist"), !1)
            },
            unmountComponentFromNode: function(global/*e*/, require/*t*/) {
                global/*e*/.unmountComponent();
                var requireDynamic/*n*/ = ReactIOSTagHandles/*s*/.mostRecentMountedNodeHandleForRootNodeID(require/*t*/);
                NativeModulesDeprecated/*a*/.removeSubviewsFromContainerWithID(requireDynamic/*n*/)
            },
            getNode: function(global/*e*/) {
                return global/*e*/
            }
        };
    d.renderComponent = ReactPerf/*l*/.measure("ReactMount", "_renderNewRootComponent", d.renderComponent), module/*i*/.exports = d
});