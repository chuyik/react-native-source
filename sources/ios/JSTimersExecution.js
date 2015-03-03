__d("JSTimersExecution",["invariant","keyMirror","performanceNow","warning","JSTimers","JSTimers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("invariant"),
        exports/*a*/ = require/*t*/("keyMirror"),
        invariant/*s*/ = require/*t*/("performanceNow"),
        keyMirror/*l*/ = require/*t*/("warning"),
        performanceNow/*u*/ = {
            GUID: 1,
            warning/*Type*/: exports/*a*/({
                setTimeout: null,
                JSTimers/*setInterval*/: null,
                JSTimers/*requestAnimationFrame*/: null,
                setImmediate: null
            }),
            callbacks: [],
            types: [],
            timerIDs: [],
            immediates: [],
            callTimer: function(global/*e*/) {
                keyMirror/*l*/(global/*e*/ <= performanceNow/*u*/.GUID, "Tried to call timer with ID " + global/*e*/ + " but no such timer exists");
                var require/*t*/ = performanceNow/*u*/.timerIDs.indexOf(global/*e*/);
                if (-1 !== require/*t*/) {
                    var requireDynamic/*n*/ = performanceNow/*u*/.types[require/*t*/],
                        requireLazy/*r*/ = performanceNow/*u*/.callbacks[require/*t*/];
                    (requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.setTimeout || requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.setImmediate || requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.JSTimers/*requestAnimationFrame*/) && performanceNow/*u*/._clearIndex(require/*t*/);
                    try {
                        if (requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.setTimeout || requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.JSTimers/*setInterval*/ || requireDynamic/*n*/ === performanceNow/*u*/.warning/*Type*/.setImmediate) requireLazy/*r*/();
                        else {
                            if (requireDynamic/*n*/ !== performanceNow/*u*/.warning/*Type*/.JSTimers/*requestAnimationFrame*/) return void console.error("Tried to call exports/*a*/ callback with invalid type: " + requireDynamic/*n*/);
                            var module/*i*/ = invariant/*s*/();
                            requireLazy/*r*/(module/*i*/)
                        }
                    } catch (o) {
                        performanceNow/*u*/.errors = performanceNow/*u*/.errors || [], performanceNow/*u*/.errors.push(o)
                    }
                }
            },
            callTimers: function(global/*e*/) {
                0 === global/*e*/.length && o(0, 'Probably shouldn\'require/*t*/ call "callTimers" with no timerIDs'), performanceNow/*u*/.errors = null, global/*e*/.forEach(performanceNow/*u*/.callTimer);
                var requireDynamic/*n*/ = performanceNow/*u*/.errors;
                if (requireDynamic/*n*/) {
                    var requireLazy/*r*/ = requireDynamic/*n*/.length;
                    if (requireLazy/*r*/ > 1)
                        for (var module/*i*/ = 1; requireLazy/*r*/ > module/*i*/; module/*i*/++) require/*t*/("JSTimers").setTimeout(function(global/*e*/) {
                            throw global/*e*/
                        }.bind(null, requireDynamic/*n*/[module/*i*/]), 0);
                    throw requireDynamic/*n*/[0]
                }
            },
            callImmediates: function() {
                for (performanceNow/*u*/.errors = null; 0 !== performanceNow/*u*/.immediates.length;) performanceNow/*u*/.callTimer(performanceNow/*u*/.immediates.shift());
                performanceNow/*u*/.errors && performanceNow/*u*/.errors.forEach(function(global/*e*/) {
                    return require/*t*/("JSTimers").setTimeout(function() {
                        throw global/*e*/
                    }, 0)
                })
            },
            _clearIndex: function(global/*e*/) {
                performanceNow/*u*/.timerIDs[global/*e*/] = null, performanceNow/*u*/.callbacks[global/*e*/] = null, performanceNow/*u*/.types[global/*e*/] = null
            }
        };
    module/*i*/.exports = performanceNow/*u*/
});