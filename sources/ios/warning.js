__d("warning",["emptyFunction"],function (global/*e*/, require/*emptyFunction/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*emptyFunction/*t*/*/("emptyFunction"),
        exports/*a*/ = o;
    __DEV__ && (exports/*a*/ = function(global/*e*/, require/*emptyFunction/*t*/*/) {
        for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 2, module/*i*/ = arguments.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) requireDynamic/*n*/.push(arguments[requireLazy/*r*/]);
        if (void 0 === require/*emptyFunction/*t*/*/) throw new Error("`warning(condition, format, ...args)` requires exports/*a*/ warning message argument");
        if (!global/*e*/) {
            var o = 0;
            console.warn("Warning: " + require/*emptyFunction/*t*/*/.replace(/%s/g, function() {
                return requireDynamic/*n*/[o++]
            }))
        }
    }), module/*i*/.exports = exports/*a*/
});