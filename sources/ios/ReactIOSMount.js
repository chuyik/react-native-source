__d("ReactIOSMount",["NativeModulesDeprecated","ReactIOSTagHandles","ReactPerf","instantiateReactComponent","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return e + "[" + t + "]"
    }
    var NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated").RKUIManager,
        ReactIOSTagHandles/*s*/ = t("ReactIOSTagHandles"),
        ReactPerf/*l*/ = t("ReactPerf"),
        instantiateReactComponent/*u*/ = t("instantiateReactComponent"),
        invariant/*c*/ = t("invariant"),
        p = {},
        d = {
            instanceCount: 0,
            _instancesByContainerID: {},
            renderComponent: function(element, containerTag) {
                var component = instantiateReactComponent/*u*/(element);

                if (!ReactIOSTagHandles/*s*/.reactTagIsNativeTopRootID(containerTag)) 
                    return void console.error("You cannot render into anything but NativeModulesDeprecated/*a*/ top root");

                var id = ReactIOSTagHandles/*s*/.allocateRootNodeIDForTag(containerTag);
                ReactIOSTagHandles/*s*/.associateRootNodeIDWithMountedNodeHandle(id, containerTag),
                p[id] = !0;
                var i = o(id, d.instanceCount++);
                d._instancesByContainerID[id] = component,
                component.mountComponentIntoNode(i, id)
            },
            unmountComponentAtNodeAndRemoveContainer: function(e) {
                d.unmountComponentAtNode(e), NativeModulesDeprecated/*a*/.removeRootView(e)
            },
            unmountComponentAtNode: function(e) {
                var t = ReactIOSTagHandles/*s*/.tagToRootNodeID[e];
                p[t] || invariant/*c*/(0, "We only currently support removing components from the root node");
                var n = d._instancesByContainerID[t];
                return n ? (d.unmountComponentFromNode(n, t), delete d._instancesByContainerID[t], delete p[t], !0) : (console.error("Tried to unmount NativeModulesDeprecated/*a*/ component that does not exist"), !1)
            },
            unmountComponentFromNode: function(e, t) {
                e.unmountComponent();
                var n = ReactIOSTagHandles/*s*/.mostRecentMountedNodeHandleForRootNodeID(t);
                NativeModulesDeprecated/*a*/.removeSubviewsFromContainerWithID(n)
            },
            getNode: function(e) {
                return e
            }
        };
    d.renderComponent = ReactPerf/*l*/.measure("ReactMount", "_renderNewRootComponent", d.renderComponent), i.exports = d
});
