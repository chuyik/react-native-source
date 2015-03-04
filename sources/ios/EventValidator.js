__d("EventValidator",["copyProperties"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (-1 === require/*t*/.indexOf(global/*e*/)) throw new TypeError(a(global/*e*/, require/*t*/))
    }

    function a(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = 'Unknown event type "' + global/*e*/ + '". ';
        return __DEV__ && (requireDynamic/*n*/ += u(global/*e*/, require/*t*/)), requireDynamic/*n*/ += "Known event types: " + require/*t*/.join(", ") + "."
    }
    var copyProperties/*s*/ = require/*t*/("copyProperties"),
        l = {
            addValidation: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = Object.keys(require/*t*/),
                    requireLazy/*r*/ = Object.create(global/*e*/);
                return copyProperties/*s*/(requireLazy/*r*/, {
                    emit: function(require/*t*/, requireLazy/*r*/, module/*i*/, a, copyProperties/*s*/, l, u) {
                        return o(require/*t*/, requireDynamic/*n*/), global/*e*/.emit.call(this, require/*t*/, requireLazy/*r*/, module/*i*/, a, copyProperties/*s*/, l, u)
                    }
                }), requireLazy/*r*/
            }
        };
    if (__DEV__) var u = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = c(global/*e*/, require/*t*/);
            return h(requireDynamic/*n*/, global/*e*/) ? 'Did you mean "' + requireDynamic/*n*/.type + '"? ' : ""
        },
        c = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = require/*t*/.map(p.bind(this, global/*e*/));
            return requireDynamic/*n*/.sort(d)[0]
        },
        p = function(global/*e*/, require/*t*/) {
            return {
                type: require/*t*/,
                distance: f(global/*e*/, require/*t*/)
            }
        },
        d = function(global/*e*/, require/*t*/) {
            return global/*e*/.distance < require/*t*/.distance ? -1 : global/*e*/.distance > require/*t*/.distance ? 1 : 0
        },
        h = function(global/*e*/, require/*t*/) {
            return global/*e*/.distance / require/*t*/.length < .334
        },
        f = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = [];
            for (requireDynamic/*n*/ = 0; requireDynamic/*n*/ <= global/*e*/.length; requireDynamic/*n*/++) module/*i*/[requireDynamic/*n*/] = [requireDynamic/*n*/];
            for (requireLazy/*r*/ = 1; requireLazy/*r*/ <= require/*t*/.length; requireLazy/*r*/++) module/*i*/[0][requireLazy/*r*/] = requireLazy/*r*/;
            for (requireDynamic/*n*/ = 1; requireDynamic/*n*/ <= global/*e*/.length; requireDynamic/*n*/++)
                for (requireLazy/*r*/ = 1; requireLazy/*r*/ <= require/*t*/.length; requireLazy/*r*/++) {
                    var o = global/*e*/.charAt(requireDynamic/*n*/ - 1) === require/*t*/.charAt(requireLazy/*r*/ - 1) ? 0 : 1;
                    module/*i*/[requireDynamic/*n*/][requireLazy/*r*/] = Math.min(module/*i*/[requireDynamic/*n*/ - 1][requireLazy/*r*/] + 1, module/*i*/[requireDynamic/*n*/][requireLazy/*r*/ - 1] + 1, module/*i*/[requireDynamic/*n*/ - 1][requireLazy/*r*/ - 1] + o), requireDynamic/*n*/ > 1 && requireLazy/*r*/ > 1 && global/*e*/.charAt(requireDynamic/*n*/ - 1) == require/*t*/.charAt(requireLazy/*r*/ - 2) && global/*e*/.charAt(requireDynamic/*n*/ - 2) == require/*t*/.charAt(requireLazy/*r*/ - 1) && (module/*i*/[requireDynamic/*n*/][requireLazy/*r*/] = Math.min(module/*i*/[requireDynamic/*n*/][requireLazy/*r*/], module/*i*/[requireDynamic/*n*/ - 2][requireLazy/*r*/ - 2] + o))
                }
            return module/*i*/[global/*e*/.length][require/*t*/.length]
        };
    module/*i*/.exports = l
});