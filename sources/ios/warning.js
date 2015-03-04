__d("warning",["emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var emptyFunction/*o*/ = require/*t*/("emptyFunction"),
        a = emptyFunction/*o*/;
    __DEV__ && (a = function(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
        if (void 0 === require/*t*/) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!global/*e*/) {
            var emptyFunction/*o*/ = 0;
            console.warn("Warning: " + require/*t*/.replace(/%s/g, function() {
                return requireDynamic/*n*/[emptyFunction/*o*/++]
            }))
        }
    }), module/*i*/.exports = a
});