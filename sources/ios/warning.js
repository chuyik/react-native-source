__d("warning",["emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("emptyFunction"),
        a = o;
    __DEV__ && (a = function(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
        if (void 0 === require/*t*/) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!global/*e*/) {
            var o = 0;
            console.warn("Warning: " + require/*t*/.replace(/%s/g, function() {
                return requireDynamic/*n*/[o++]
            }))
        }
    }), module/*i*/.exports = a
});