__d("RCTRenderingPerf",["ReactDefaultPerf","ReactPerf","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactDefaultPerf/*o*/ = require/*t*/("ReactDefaultPerf"),
        ReactPerf/*a*/ = require/*t*/("ReactPerf"),
        invariant/*s*/ = require/*t*/("invariant"),
        l = [],
        u = {
            toggle: function() {
                ReactPerf/*a*/.enableMeasure ? (ReactDefaultPerf/*o*/.stop(), ReactDefaultPerf/*o*/.printInclusive(), ReactDefaultPerf/*o*/.printWasted(), l.forEach(function(global/*e*/) {
                    return global/*e*/.stop()
                })) : (ReactDefaultPerf/*o*/.start(), console.log("Render perfomance measurements started"), l.forEach(function(global/*e*/) {
                    return global/*e*/.start()
                }))
            },
            register: function(global/*e*/) {
                "function" != typeof global/*e*/.start && invariant/*s*/(0, "Perf module should have start() function"), "function" != typeof global/*e*/.stop && invariant/*s*/(0, "Perf module should have stop() function"), l.push(global/*e*/)
            }
        };
    module/*i*/.exports = u
});