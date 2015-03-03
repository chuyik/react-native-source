__d("ReactPropTransferer",["emptyFunction","invariant","joinClasses","warning"],function (global/*e*/, require/*joinClasses/*t*/*/, requireDynamic/*exports/*warning/*n*/*/*/, requireLazy/*emptyFunction/*invariant/*r*/*/*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return function(require/*joinClasses/*t*/*/, requireDynamic/*exports/*warning/*n*/*/*/, requireLazy/*emptyFunction/*invariant/*r*/*/*/) {
            require/*joinClasses/*t*/*/[requireDynamic/*exports/*warning/*n*/*/*/] = require/*joinClasses/*t*/*/.hasOwnProperty(requireDynamic/*exports/*warning/*n*/*/*/) ? global/*e*/(require/*joinClasses/*t*/*/[requireDynamic/*exports/*warning/*n*/*/*/], requireLazy/*emptyFunction/*invariant/*r*/*/*/) : requireLazy/*emptyFunction/*invariant/*r*/*/*/
        }
    }

    function a(global/*e*/, require/*joinClasses/*t*/*/) {
        for (var requireDynamic/*exports/*warning/*n*/*/*/ in require/*joinClasses/*t*/*/)
            if (require/*joinClasses/*t*/*/.hasOwnProperty(requireDynamic/*exports/*warning/*n*/*/*/)) {
                var requireLazy/*emptyFunction/*invariant/*r*/*/*/ = h[requireDynamic/*exports/*warning/*n*/*/*/];
                requireLazy/*emptyFunction/*invariant/*r*/*/*/ && h.hasOwnProperty(requireDynamic/*exports/*warning/*n*/*/*/) ? requireLazy/*emptyFunction/*invariant/*r*/*/*/(global/*e*/, requireDynamic/*exports/*warning/*n*/*/*/, require/*joinClasses/*t*/*/[requireDynamic/*exports/*warning/*n*/*/*/]) : global/*e*/.hasOwnProperty(requireDynamic/*exports/*warning/*n*/*/*/) || (global/*e*/[requireDynamic/*exports/*warning/*n*/*/*/] = require/*joinClasses/*t*/*/[requireDynamic/*exports/*warning/*n*/*/*/])
            }
        return global/*e*/
    }
    var s = require/*joinClasses/*t*/*/("emptyFunction"),
        l = require/*joinClasses/*t*/*/("invariant"),
        u = require/*joinClasses/*t*/*/("joinClasses"),
        c = require/*joinClasses/*t*/*/("warning"),
        p = !1,
        d = o(function(global/*e*/, require/*joinClasses/*t*/*/) {
            return Object.assign({}, require/*joinClasses/*t*/*/, global/*e*/)
        }),
        h = {
            children: s,
            className: o(u),
            style: d
        },
        f = {
            TransferStrategies: h,
            mergeProps: function(global/*e*/, require/*joinClasses/*t*/*/) {
                return a(Object.assign({}, global/*e*/), require/*joinClasses/*t*/*/)
            },
            Mixin: {
                transferPropsTo: function(global/*e*/) {
                    return global/*e*/._owner !== this && l(0, "%s: You can'require/*joinClasses/*t*/*/ call transferPropsTo() on a component that you don'require/*joinClasses/*t*/*/ own, %s. This usually means you are calling transferPropsTo() on a component passed in as props or children.", this.constructor.displayName, "string" == typeof global/*e*/.type ? global/*e*/.type : global/*e*/.type.displayName), __DEV__ && (p || (p = !0, c(!1, "transferPropsTo is deprecated. See http://fb.me/react-transferpropsto for more information."))), a(global/*e*/.props, this.props), global/*e*/
                }
            }
        };
    module/*i*/.exports = f
});