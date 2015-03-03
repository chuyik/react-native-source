__d("RCTRenderingPerf",["ReactDefaultPerf","ReactPerf","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactDefaultPerf"),
        exports/*a*/ = require/*t*/("ReactPerf"),
        ReactDefaultPerf/*s*/ = require/*t*/("invariant"),
        ReactPerf/*l*/ = [],
        invariant/*u*/ = {
            toggle: function() {
                exports/*a*/.enableMeasure ? (o.stop(), o.printInclusive(), o.printWasted(), ReactPerf/*l*/.forEach(function(global/*e*/) {
                    return global/*e*/.stop()
                })) : (o.start(), console.log("Render perfomance measurements started"), ReactPerf/*l*/.forEach(function(global/*e*/) {
                    return global/*e*/.start()
                }))
            },
            register: function(global/*e*/) {
                "function" != typeof global/*e*/.start && ReactDefaultPerf/*s*/(0, "Perf module should have start() function"), "function" != typeof global/*e*/.stop && ReactDefaultPerf/*s*/(0, "Perf module should have stop() function"), ReactPerf/*l*/.push(global/*e*/)
            }
        };
    module/*i*/.exports = invariant/*u*/
});