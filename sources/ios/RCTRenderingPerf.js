__d("RCTRenderingPerf",["ReactDefaultPerf","ReactPerf","invariant"],function (e, t, n, r, i) {
    "use strict";
    var ReactDefaultPerf/*o*/ = t("ReactDefaultPerf"),
        ReactPerf/*a*/ = t("ReactPerf"),
        invariant/*s*/ = t("invariant"),
        l = [],
        u = {
            toggle: function() {
                ReactPerf/*a*/.enableMeasure ? (ReactDefaultPerf/*o*/.stop(), ReactDefaultPerf/*o*/.printInclusive(), ReactDefaultPerf/*o*/.printWasted(), l.forEach(function(e) {
                    return e.stop()
                })) : (ReactDefaultPerf/*o*/.start(), console.log("Render perfomance measurements started"), l.forEach(function(e) {
                    return e.start()
                }))
            },
            register: function(e) {
                "function" != typeof e.start && invariant/*s*/(0, "Perf module should have start() function"), "function" != typeof e.stop && invariant/*s*/(0, "Perf module should have stop() function"), l.push(e)
            }
        };
    i.exports = u
});