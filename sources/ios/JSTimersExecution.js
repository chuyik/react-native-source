__d("JSTimersExecution",["invariant","keyMirror","performanceNow","warning","JSTimers","JSTimers"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var invariant/*o*/ = require/*t*/("invariant"),
        keyMirror/*a*/ = require/*t*/("keyMirror"),
        performanceNow/*s*/ = require/*t*/("performanceNow"),
        warning/*l*/ = require/*t*/("warning"),
        u = {
            GUID: 1,
            Type: keyMirror/*a*/({
                setTimeout: null,
                setInterval: null,
                requestAnimationFrame: null,
                setImmediate: null
            }),
            callbacks: [],
            types: [],
            timerIDs: [],
            immediates: [],
            callTimer: function(global/*e*/) {
                warning/*l*/(global/*e*/ <= u.GUID, "Tried to call timer with ID " + global/*e*/ + " but no such timer exists");
                var require/*t*/ = u.timerIDs.indexOf(global/*e*/);
                if (-1 !== require/*t*/) {
                    var requireDynamic/*n*/ = u.types[require/*t*/],
                        requireLazy/*r*/ = u.callbacks[require/*t*/];
                    (requireDynamic/*n*/ === u.Type.setTimeout || requireDynamic/*n*/ === u.Type.setImmediate || requireDynamic/*n*/ === u.Type.requestAnimationFrame) && u._clearIndex(require/*t*/);
                    try {
                        if (requireDynamic/*n*/ === u.Type.setTimeout || requireDynamic/*n*/ === u.Type.setInterval || requireDynamic/*n*/ === u.Type.setImmediate) requireLazy/*r*/();
                        else {
                            if (requireDynamic/*n*/ !== u.Type.requestAnimationFrame) return void console.error("Tried to call keyMirror/*a*/ callback with invalid type: " + requireDynamic/*n*/);
                            var module/*i*/ = performanceNow/*s*/();
                            requireLazy/*r*/(module/*i*/)
                        }
                    } catch (invariant/*o*/) {
                        u.errors = u.errors || [], u.errors.push(invariant/*o*/)
                    }
                }
            },
            callTimers: function(global/*e*/) {
                0 === global/*e*/.length && invariant/*o*/(0, 'Probably shouldn\'require/*t*/ call "callTimers" with no timerIDs'), u.errors = null, global/*e*/.forEach(u.callTimer);
                var requireDynamic/*n*/ = u.errors;
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
                for (u.errors = null; 0 !== u.immediates.length;) u.callTimer(u.immediates.shift());
                u.errors && u.errors.forEach(function(global/*e*/) {
                    return require/*t*/("JSTimers").setTimeout(function() {
                        throw global/*e*/
                    }, 0)
                })
            },
            _clearIndex: function(global/*e*/) {
                u.timerIDs[global/*e*/] = null, u.callbacks[global/*e*/] = null, u.types[global/*e*/] = null
            }
        };
    module/*i*/.exports = u
});