__d("DOMProperty",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return (e & t) === t
    }
    var invariant/*a*/ = t("invariant"),
        s = {
            MUST_USE_ATTRIBUTE: 1,
            MUST_USE_PROPERTY: 2,
            HAS_SIDE_EFFECTS: 4,
            HAS_BOOLEAN_VALUE: 8,
            HAS_NUMERIC_VALUE: 16,
            HAS_POSITIVE_NUMERIC_VALUE: 48,
            HAS_OVERLOADED_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function(e) {
                var t = e.Properties || {},
                    n = e.DOMAttributeNames || {},
                    r = e.DOMPropertyNames || {},
                    i = e.DOMMutationMethods || {};
                e.isCustomAttribute && u._isCustomAttributeFunctions.push(e.isCustomAttribute);
                for (var l in t) {
                    u.isStandardName.hasOwnProperty(l) && invariant/*a*/(0, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", l), u.isStandardName[l] = !0;
                    var c = l.toLowerCase();
                    if (u.getPossibleStandardName[c] = l, n.hasOwnProperty(l)) {
                        var p = n[l];
                        u.getPossibleStandardName[p] = l, u.getAttributeName[l] = p
                    } else u.getAttributeName[l] = c;
                    u.getPropertyName[l] = r.hasOwnProperty(l) ? r[l] : l, u.getMutationMethod[l] = i.hasOwnProperty(l) ? i[l] : null;
                    var d = t[l];
                    u.mustUseAttribute[l] = o(d, s.MUST_USE_ATTRIBUTE), u.mustUseProperty[l] = o(d, s.MUST_USE_PROPERTY), u.hasSideEffects[l] = o(d, s.HAS_SIDE_EFFECTS), u.hasBooleanValue[l] = o(d, s.HAS_BOOLEAN_VALUE), u.hasNumericValue[l] = o(d, s.HAS_NUMERIC_VALUE), u.hasPositiveNumericValue[l] = o(d, s.HAS_POSITIVE_NUMERIC_VALUE), u.hasOverloadedBooleanValue[l] = o(d, s.HAS_OVERLOADED_BOOLEAN_VALUE), u.mustUseAttribute[l] && u.mustUseProperty[l] && invariant/*a*/(0, "DOMProperty: Cannot require using both attribute and property: %s", l), !u.mustUseProperty[l] && u.hasSideEffects[l] && invariant/*a*/(0, "DOMProperty: Properties that have side effects must use property: %s", l), !!u.hasBooleanValue[l] + !!u.hasNumericValue[l] + !!u.hasOverloadedBooleanValue[l] <= 1 || invariant/*a*/(0, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not invariant/*a*/ combination: %s", l)
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
            isCustomAttribute: function(e) {
                for (var t = 0; t < u._isCustomAttributeFunctions.length; t++) {
                    var n = u._isCustomAttributeFunctions[t];
                    if (n(e)) return !0
                }
                return !1
            },
            getDefaultValueForProperty: function(e, t) {
                var n, r = l[e];
                return r || (l[e] = r = {}), t in r || (n = document.createElement(e), r[t] = n[t]), r[t]
            },
            injection: s
        };
    i.exports = u
});