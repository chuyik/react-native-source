__d("IOSNativeBridgeEventPlugin",["EventPropagators","NativeModulesDeprecated","SyntheticEvent","merge","warning"],function (e, t, n, r, i) {
    "use strict";
    var EventPropagators/*o*/ = t("EventPropagators"),
        NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated"),
        SyntheticEvent/*s*/ = t("SyntheticEvent"),
        merge/*l*/ = t("merge"),
        warning/*u*/ = t("warning"),
        c = NativeModulesDeprecated/*a*/.RKUIManager,
        p = c.customBubblingEventTypes,
        d = c.customDirectEventTypes,
        h = {};
    for (var f in p) h[f] = p[f];
    for (var m in d) warning/*u*/(!p[m], "Event cannot be both direct and bubbling: %SyntheticEvent/*s*/", m), h[m] = d[m];
    var g = {
        eventTypes: merge/*l*/(p, d),
        extractEvents: function(e, t, n, r) {
            var i = p[e],
                NativeModulesDeprecated/*a*/ = d[e],
                merge/*l*/ = SyntheticEvent/*s*/.getPooled(i || NativeModulesDeprecated/*a*/, n, r);
            if (i) EventPropagators/*o*/.accumulateTwoPhaseDispatches(merge/*l*/);
            else {
                if (!NativeModulesDeprecated/*a*/) return null;
                EventPropagators/*o*/.accumulateDirectDispatches(merge/*l*/)
            }
            return merge/*l*/
        }
    };
    i.exports = g
});