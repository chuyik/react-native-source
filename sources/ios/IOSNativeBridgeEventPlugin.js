__d("IOSNativeBridgeEventPlugin",["EventPropagators","NativeModulesDeprecated","SyntheticEvent","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var EventPropagators/*o*/ = require/*t*/("EventPropagators"),
        NativeModulesDeprecated/*a*/ = require/*t*/("NativeModulesDeprecated"),
        SyntheticEvent/*s*/ = require/*t*/("SyntheticEvent"),
        merge/*l*/ = require/*t*/("merge"),
        warning/*u*/ = require/*t*/("warning"),
        c = NativeModulesDeprecated/*a*/.RKUIManager,
        p = c.customBubblingEventTypes,
        d = c.customDirectEventTypes,
        h = {};
    for (var f in p) h[f] = p[f];
    for (var m in d) warning/*u*/(!p[m], "Event cannot be both direct and bubbling: %SyntheticEvent/*s*/", m), h[m] = d[m];
    var g = {
        eventTypes: merge/*l*/(p, d),
        extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = p[global/*e*/],
                NativeModulesDeprecated/*a*/ = d[global/*e*/],
                merge/*l*/ = SyntheticEvent/*s*/.getPooled(module/*i*/ || NativeModulesDeprecated/*a*/, requireDynamic/*n*/, requireLazy/*r*/);
            if (module/*i*/) EventPropagators/*o*/.accumulateTwoPhaseDispatches(merge/*l*/);
            else {
                if (!NativeModulesDeprecated/*a*/) return null;
                EventPropagators/*o*/.accumulateDirectDispatches(merge/*l*/)
            }
            return merge/*l*/
        }
    };
    module/*i*/.exports = g
});