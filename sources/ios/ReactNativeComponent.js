__d("ReactNativeComponent",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/) {
        var requireLazy/*r*/ = l[global/*e*/];
        return null == requireLazy/*r*/ ? (s || a(0, "There is no registered component for the tag %s", global/*e*/), new s(global/*e*/, require/*exports/*t*/*/)) : requireDynamic/*invariant/*n*/*/ === global/*e*/ ? (s || a(0, "There is no registered component for the tag %s", global/*e*/), new s(global/*e*/, require/*exports/*t*/*/)) : new requireLazy/*r*/.type(require/*exports/*t*/*/)
    }
    var a = require/*exports/*t*/*/("invariant"),
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