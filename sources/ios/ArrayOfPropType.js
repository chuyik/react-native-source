__d("ArrayOfPropType",["ReactPropTypes","deepDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("deepDiffer"),
        s = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = o.arrayOf(global/*e*/);
            return requireDynamic/*n*/.differ = require/*t*/ ? require/*t*/ : a, requireDynamic/*n*/
        };
    module/*i*/.exports = s
});