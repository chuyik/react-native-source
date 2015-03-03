__d("EventValidator",["copyProperties"],function (global/*e*/, require/*exports/*copyProperties/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
        if (-1 === require/*exports/*copyProperties/*t*/*/*/.indexOf(global/*e*/)) throw new TypeError(a(global/*e*/, require/*exports/*copyProperties/*t*/*/*/))
    }

    function a(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
        var requireDynamic/*n*/ = 'Unknown event type "' + global/*e*/ + '". ';
        return __DEV__ && (requireDynamic/*n*/ += u(global/*e*/, require/*exports/*copyProperties/*t*/*/*/)), requireDynamic/*n*/ += "Known event types: " + require/*exports/*copyProperties/*t*/*/*/.join(", ") + "."
    }
    var s = require/*exports/*copyProperties/*t*/*/*/("copyProperties"),
        l = {
            addValidation: function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
                var requireDynamic/*n*/ = Object.keys(require/*exports/*copyProperties/*t*/*/*/),
                    requireLazy/*r*/ = Object.create(global/*e*/);
                return s(requireLazy/*r*/, {
                    emit: function(require/*exports/*copyProperties/*t*/*/*/, requireLazy/*r*/, module/*i*/, a, s, l, u) {
                        return o(require/*exports/*copyProperties/*t*/*/*/, requireDynamic/*n*/), global/*e*/.emit.call(this, require/*exports/*copyProperties/*t*/*/*/, requireLazy/*r*/, module/*i*/, a, s, l, u)
                    }
                }), requireLazy/*r*/
            }
        };
    if (__DEV__) var u = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            var requireDynamic/*n*/ = c(global/*e*/, require/*exports/*copyProperties/*t*/*/*/);
            return h(requireDynamic/*n*/, global/*e*/) ? 'Did you mean "' + requireDynamic/*n*/.type + '"? ' : ""
        },
        c = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            var requireDynamic/*n*/ = require/*exports/*copyProperties/*t*/*/*/.map(p.bind(this, global/*e*/));
            return requireDynamic/*n*/.sort(d)[0]
        },
        p = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            return {
                type: require/*exports/*copyProperties/*t*/*/*/,
                distance: f(global/*e*/, require/*exports/*copyProperties/*t*/*/*/)
            }
        },
        d = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            return global/*e*/.distance < require/*exports/*copyProperties/*t*/*/*/.distance ? -1 : global/*e*/.distance > require/*exports/*copyProperties/*t*/*/*/.distance ? 1 : 0
        },
        h = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            return global/*e*/.distance / require/*exports/*copyProperties/*t*/*/*/.length < .334
        },
        f = function(global/*e*/, require/*exports/*copyProperties/*t*/*/*/) {
            var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = [];
            for (requireDynamic/*n*/ = 0; requireDynamic/*n*/ <= global/*e*/.length; requireDynamic/*n*/++) module/*i*/[requireDynamic/*n*/] = [requireDynamic/*n*/];
            for (requireLazy/*r*/ = 1; requireLazy/*r*/ <= require/*exports/*copyProperties/*t*/*/*/.length; requireLazy/*r*/++) module/*i*/[0][requireLazy/*r*/] = requireLazy/*r*/;
            for (requireDynamic/*n*/ = 1; requireDynamic/*n*/ <= global/*e*/.length; requireDynamic/*n*/++)
                for (requireLazy/*r*/ = 1; requireLazy/*r*/ <= require/*exports/*copyProperties/*t*/*/*/.length; requireLazy/*r*/++) {
                    var o = global/*e*/.charAt(requireDynamic/*n*/ - 1) === require/*exports/*copyProperties/*t*/*/*/.charAt(requireLazy/*r*/ - 1) ? 0 : 1;
                    module/*i*/[requireDynamic/*n*/][requireLazy/*r*/] = Math.min(module/*i*/[requireDynamic/*n*/ - 1][requireLazy/*r*/] + 1, module/*i*/[requireDynamic/*n*/][requireLazy/*r*/ - 1] + 1, module/*i*/[requireDynamic/*n*/ - 1][requireLazy/*r*/ - 1] + o), requireDynamic/*n*/ > 1 && requireLazy/*r*/ > 1 && global/*e*/.charAt(requireDynamic/*n*/ - 1) == require/*exports/*copyProperties/*t*/*/*/.charAt(requireLazy/*r*/ - 2) && global/*e*/.charAt(requireDynamic/*n*/ - 2) == require/*exports/*copyProperties/*t*/*/*/.charAt(requireLazy/*r*/ - 1) && (module/*i*/[requireDynamic/*n*/][requireLazy/*r*/] = Math.min(module/*i*/[requireDynamic/*n*/][requireLazy/*r*/], module/*i*/[requireDynamic/*n*/ - 2][requireLazy/*r*/ - 2] + o))
                }
            return module/*i*/[global/*e*/.length][require/*exports/*copyProperties/*t*/*/*/.length]
        };
    module/*i*/.exports = l
});