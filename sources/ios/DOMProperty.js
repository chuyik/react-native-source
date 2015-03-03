__d("DOMProperty",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        return (global/*e*/ & require/*exports/*t*/*/) === require/*exports/*t*/*/
    }
    var a = require/*exports/*t*/*/("invariant"),
        invariant/*s*/ = {
            MUST_USE_ATTRIBUTE: 1,
            MUST_USE_PROPERTY: 2,
            HAS_SIDE_EFFECTS: 4,
            HAS_BOOLEAN_VALUE: 8,
            HAS_NUMERIC_VALUE: 16,
            HAS_POSITIVE_NUMERIC_VALUE: 48,
            HAS_OVERLOADED_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function(global/*e*/) {
                var require/*exports/*t*/*/ = global/*e*/.Properties || {},
                    requireDynamic/*n*/ = global/*e*/.DOMAttributeNames || {},
                    requireLazy/*r*/ = global/*e*/.DOMPropertyNames || {},
                    module/*i*/ = global/*e*/.DOMMutationMethods || {};
                global/*e*/.isCustomAttribute && u._isCustomAttributeFunctions.push(global/*e*/.isCustomAttribute);
                for (var l in require/*exports/*t*/*/) {
                    u.isStandardName.hasOwnProperty(l) && a(0, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%invariant/*s*/' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", l), u.isStandardName[l] = !0;
                    var c = l.toLowerCase();
                    if (u.getPossibleStandardName[c] = l, requireDynamic/*n*/.hasOwnProperty(l)) {
                        var p = requireDynamic/*n*/[l];
                        u.getPossibleStandardName[p] = l, u.getAttributeName[l] = p
                    } else u.getAttributeName[l] = c;
                    u.getPropertyName[l] = requireLazy/*r*/.hasOwnProperty(l) ? requireLazy/*r*/[l] : l, u.getMutationMethod[l] = module/*i*/.hasOwnProperty(l) ? module/*i*/[l] : null;
                    var d = require/*exports/*t*/*/[l];
                    u.mustUseAttribute[l] = o(d, invariant/*s*/.MUST_USE_ATTRIBUTE), u.mustUseProperty[l] = o(d, invariant/*s*/.MUST_USE_PROPERTY), u.hasSideEffects[l] = o(d, invariant/*s*/.HAS_SIDE_EFFECTS), u.hasBooleanValue[l] = o(d, invariant/*s*/.HAS_BOOLEAN_VALUE), u.hasNumericValue[l] = o(d, invariant/*s*/.HAS_NUMERIC_VALUE), u.hasPositiveNumericValue[l] = o(d, invariant/*s*/.HAS_POSITIVE_NUMERIC_VALUE), u.hasOverloadedBooleanValue[l] = o(d, invariant/*s*/.HAS_OVERLOADED_BOOLEAN_VALUE), u.mustUseAttribute[l] && u.mustUseProperty[l] && a(0, "DOMProperty: Cannot require using both attribute and property: %invariant/*s*/", l), !u.mustUseProperty[l] && u.hasSideEffects[l] && a(0, "DOMProperty: Properties that have side effects must use property: %invariant/*s*/", l), !!u.hasBooleanValue[l] + !!u.hasNumericValue[l] + !!u.hasOverloadedBooleanValue[l] <= 1 || a(0, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %invariant/*s*/", l)
                }
            }
        },
        l = {},
        u = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            isStandardName: {},
            getPossibleStandardName: {},
            getAttributeName: {},
            getPropertyName: {},
            getMutationMethod: {},
            mustUseAttribute: {},
            mustUseProperty: {},
            hasSideEffects: {},
            hasBooleanValue: {},
            hasNumericValue: {},
            hasPositiveNumericValue: {},
            hasOverloadedBooleanValue: {},
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(global/*e*/) {
                for (var require/*exports/*t*/*/ = 0; require/*exports/*t*/*/ < u._isCustomAttributeFunctions.length; require/*exports/*t*/*/++) {
                    var requireDynamic/*n*/ = u._isCustomAttributeFunctions[require/*exports/*t*/*/];
                    if (requireDynamic/*n*/(global/*e*/)) return !0
                }
                return !1
            },
            getDefaultValueForProperty: function(global/*e*/, require/*exports/*t*/*/) {
                var requireDynamic/*n*/, requireLazy/*r*/ = l[global/*e*/];
                return requireLazy/*r*/ || (l[global/*e*/] = requireLazy/*r*/ = {}), require/*exports/*t*/*/ in requireLazy/*r*/ || (requireDynamic/*n*/ = document.createElement(global/*e*/), requireLazy/*r*/[require/*exports/*t*/*/] = requireDynamic/*n*/[require/*exports/*t*/*/]), requireLazy/*r*/[require/*exports/*t*/*/]
            },
            injection: invariant/*s*/
        };
    module/*i*/.exports = u
});