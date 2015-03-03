__d("IOSNativeBridgeEventPlugin",["EventPropagators","NativeModulesDeprecated","SyntheticEvent","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EventPropagators"),
        exports/*a*/ = require/*t*/("NativeModulesDeprecated"),
        EventPropagators/*s*/ = require/*t*/("SyntheticEvent"),
        NativeModulesDeprecated/*l*/ = require/*t*/("merge"),
        SyntheticEvent/*u*/ = require/*t*/("warning"),
        merge/*c*/ = exports/*a*/.RKUIManager,
        warning/*p*/ = merge/*c*/.customBubblingEventTypes,
        d = merge/*c*/.customDirectEventTypes,
        h = {};
    for (var f in warning/*p*/) h[f] = warning/*p*/[f];
    for (var m in d) SyntheticEvent/*u*/(!warning/*p*/[m], "Event cannot be both direct and bubbling: %EventPropagators/*s*/", m), h[m] = d[m];
    var g = {
        eventTypes: NativeModulesDeprecated/*l*/(warning/*p*/, d),
        extractEvents: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = warning/*p*/[global/*e*/],
                exports/*a*/ = d[global/*e*/],
                NativeModulesDeprecated/*l*/ = EventPropagators/*s*/.getPooled(module/*i*/ || exports/*a*/, requireDynamic/*n*/, requireLazy/*r*/);
            if (module/*i*/) o.accumulateTwoPhaseDispatches(NativeModulesDeprecated/*l*/);
            else {
                if (!exports/*a*/) return null;
                o.accumulateDirectDispatches(NativeModulesDeprecated/*l*/)
            }
            return NativeModulesDeprecated/*l*/
        }
    };
    module/*i*/.exports = g
});