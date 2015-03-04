__d("ReactPropTransferer",["emptyFunction","invariant","joinClasses","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return function(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            require/*t*/[requireDynamic/*n*/] = require/*t*/.hasOwnProperty(requireDynamic/*n*/) ? global/*e*/(require/*t*/[requireDynamic/*n*/], requireLazy/*r*/) : requireLazy/*r*/
        }
    }

    function a(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ in require/*t*/)
            if (require/*t*/.hasOwnProperty(requireDynamic/*n*/)) {
                var requireLazy/*r*/ = h[requireDynamic/*n*/];
                requireLazy/*r*/ && h.hasOwnProperty(requireDynamic/*n*/) ? requireLazy/*r*/(global/*e*/, requireDynamic/*n*/, require/*t*/[requireDynamic/*n*/]) : global/*e*/.hasOwnProperty(requireDynamic/*n*/) || (global/*e*/[requireDynamic/*n*/] = require/*t*/[requireDynamic/*n*/])
            }
        return global/*e*/
    }
    var emptyFunction/*s*/ = require/*t*/("emptyFunction"),
        invariant/*l*/ = require/*t*/("invariant"),
        joinClasses/*u*/ = require/*t*/("joinClasses"),
        warning/*c*/ = require/*t*/("warning"),
        p = !1,
        d = o(function(global/*e*/, require/*t*/) {
            return Object.assign({}, require/*t*/, global/*e*/)
        }),
        h = {
            children: emptyFunction/*s*/,
            className: o(joinClasses/*u*/),
            style: d
        },
        f = {
            TransferStrategies: h,
            mergeProps: function(global/*e*/, require/*t*/) {
                return a(Object.assign({}, global/*e*/), require/*t*/)
            },
            Mixin: {
                transferPropsTo: function(global/*e*/) {
                    return global/*e*/._owner !== this && invariant/*l*/(0, "%emptyFunction/*s*/: You can'require/*t*/ call transferPropsTo() on a component that you don'require/*t*/ own, %emptyFunction/*s*/. This usually means you are calling transferPropsTo() on a component passed in as props or children.", this.constructor.displayName, "string" == typeof global/*e*/.type ? global/*e*/.type : global/*e*/.type.displayName), __DEV__ && (p || (p = !0, warning/*c*/(!1, "transferPropsTo is deprecated. See http://fb.me/react-transferpropsto for more information."))), a(global/*e*/.props, this.props), global/*e*/
                }
            }
        };
    module/*i*/.exports = f
});