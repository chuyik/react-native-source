__d("ReactNativeComponent",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = l[global/*e*/];
        return null == requireLazy/*r*/ ? (s || invariant/*a*/(0, "There is no registered component for the tag %s", global/*e*/), new s(global/*e*/, require/*t*/)) : requireDynamic/*n*/ === global/*e*/ ? (s || invariant/*a*/(0, "There is no registered component for the tag %s", global/*e*/), new s(global/*e*/, require/*t*/)) : new requireLazy/*r*/.type(require/*t*/)
    }
    var invariant/*a*/ = require/*t*/("invariant"),
        s = null,
        l = {},
        u = {
            injectGenericComponentClass: function(global/*e*/) {
                s = global/*e*/
            },
            injectComponentClasses: function(global/*e*/) {
                Object.assign(l, global/*e*/)
            }
        },
        c = {
            createInstanceForTag: o,
            injection: u
        };
    module/*i*/.exports = c
});