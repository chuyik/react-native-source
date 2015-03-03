__d("RCTRenderingPerf",["ReactDefaultPerf","ReactPerf","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactDefaultPerf"),
        a = require/*t*/("ReactPerf"),
        s = require/*t*/("invariant"),
        l = [],
        u = {
            toggle: function() {
                a.enableMeasure ? (o.stop(), o.printInclusive(), o.printWasted(), l.forEach(function(global/*e*/) {
                    return global/*e*/.stop()
                })) : (o.start(), console.log("Render perfomance measurements started"), l.forEach(function(global/*e*/) {
                    return global/*e*/.start()
                }))
            },
            register: function(global/*e*/) {
                "function" != typeof global/*e*/.start && s(0, "Perf module should have start() function"), "function" != typeof global/*e*/.stop && s(0, "Perf module should have stop() function"), l.push(global/*e*/)
            }
        };
    module/*i*/.exports = u
});