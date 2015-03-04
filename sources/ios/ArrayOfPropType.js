__d("ArrayOfPropType",["ReactPropTypes","deepDiffer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        deepDiffer/*a*/ = require/*t*/("deepDiffer"),
        s = function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = ReactPropTypes/*o*/.arrayOf(global/*e*/);
            return requireDynamic/*n*/.differ = require/*t*/ ? require/*t*/ : deepDiffer/*a*/, requireDynamic/*n*/
        };
    module/*i*/.exports = s
});