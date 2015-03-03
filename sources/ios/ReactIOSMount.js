__d("ReactIOSMount",["NativeModulesDeprecated","ReactIOSTagHandles","ReactPerf","instantiateReactComponent","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/ + "[" + require/*t*/ + "]"
    }
    var a = require/*t*/("NativeModulesDeprecated").RKUIManager,
        s = require/*t*/("ReactIOSTagHandles"),
        l = require/*t*/("ReactPerf"),
        u = require/*t*/("instantiateReactComponent"),
        c = require/*t*/("invariant"),
        p = {},
        d = {
            instanceCount: 0,
            _instancesByContainerID: {},
            renderComponent: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = u(global/*e*/);
                if (!s.reactTagIsNativeTopRootID(require/*t*/)) return void console.error("You cannot render into anything but a top root");
                var requireLazy/*r*/ = s.allocateRootNodeIDForTag(require/*t*/);
                s.associateRootNodeIDWithMountedNodeHandle(requireLazy/*r*/, require/*t*/), p[requireLazy/*r*/] = !0;
                var module/*i*/ = o(requireLazy/*r*/, d.instanceCount++);
                d._instancesByContainerID[requireLazy/*r*/] = requireDynamic/*n*/, requireDynamic/*n*/.mountComponentIntoNode(module/*i*/, requireLazy/*r*/)
            },
            unmountComponentAtNodeAndRemoveContainer: function(global/*e*/) {
                d.unmountComponentAtNode(global/*e*/), a.removeRootView(global/*e*/)
            },
            unmountComponentAtNode: function(global/*e*/) {
                var require/*t*/ = s.tagToRootNodeID[global/*e*/];
                p[require/*t*/] || c(0, "We only currently support removing components from the root node");
                var requireDynamic/*n*/ = d._instancesByContainerID[require/*t*/];
                return requireDynamic/*n*/ ? (d.unmountComponentFromNode(requireDynamic/*n*/, require/*t*/), delete d._instancesByContainerID[require/*t*/], delete p[require/*t*/], !0) : (console.error("Tried to unmount a component that does not exist"), !1)
            },
            unmountComponentFromNode: function(global/*e*/, require/*t*/) {
                global/*e*/.unmountComponent();
                var requireDynamic/*n*/ = s.mostRecentMountedNodeHandleForRootNodeID(require/*t*/);
                a.removeSubviewsFromContainerWithID(requireDynamic/*n*/)
            },
            getNode: function(global/*e*/) {
                return global/*e*/
            }
        };
    d.renderComponent = l.measure("ReactMount", "_renderNewRootComponent", d.renderComponent), module/*i*/.exports = d
});