__d("IOSNativeBridgeEventPlugin",["EventPropagators","NativeModulesDeprecated","SyntheticEvent","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EventPropagators"),
        a = require/*t*/("NativeModulesDeprecated"),
        s = require/*t*/("SyntheticEvent"),
        l = require/*t*/("merge"),
        u = require/*t*/("warning"),
        c = a.RKUIManager,
        p = c.customBubblingEventTypes,
        d = c.customDirectEventTypes,
        h = {};
    for (var f in p) h[f] = p[f];
    for (var m in d) u(!p[m], "Event cannot be both direct and bubbling: %s", m), h[m] = d[m];
    var g = {
        eventTypes: l(p, d),
        extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = p[global/*e*/],
                a = d[global/*e*/],
                l = s.getPooled(module/*i*/ || a, requireDynamic/*n*/, requireLazy/*r*/);
            if (module/*i*/) o.accumulateTwoPhaseDispatches(l);
            else {
                if (!a) return null;
                o.accumulateDirectDispatches(l)
            }
            return l
        }
    };
    module/*i*/.exports = g
});