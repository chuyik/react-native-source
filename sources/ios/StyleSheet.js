__d("StyleSheet",["ImageStylePropTypes","ReactPropTypeLocations","StyleSheetRegistry","TextStylePropTypes","ViewStylePropTypes","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var ImageStylePropTypes/*a*/ = t("ImageStylePropTypes"),
        ReactPropTypeLocations/*s*/ = t("ReactPropTypeLocations"),
        StyleSheetRegistry/*l*/ = t("StyleSheetRegistry"),
        TextStylePropTypes/*u*/ = t("TextStylePropTypes"),
        ViewStylePropTypes/*c*/ = t("ViewStylePropTypes"),
        invariant/*p*/ = t("invariant");
    o.create = function(e) {
        var t = {};
        for (var n in e) o.validateStyle(n, e), t[n] = StyleSheetRegistry/*l*/.registerStyle(e[n]);
        return t
    }, o.validateStyleProp = function(e, t, n) {
        if (__DEV__) {
            if (void 0 === h[e]) {
                var r = '"' + e + '" is not ImageStylePropTypes/*a*/ valid style property.',
                    i = "\nValid style props: " + JSON.stringify(Object.keys(h), null, "  ");
                d(r, t, n, i)
            }
            var o = h[e](t, e, n, ReactPropTypeLocations/*s*/.prop);
            o && d(o.message, t, n)
        }
    }, o.validateStyle = function(e, t) {
        if (__DEV__)
            for (var n in t[e]) o.validateStyleProp(n, t[e], "StyleSheet " + e)
    }, o.addValidStylePropTypes = function(e) {
        for (var t in e) void 0 !== h[t] && h[t] !== e[t] && invariant/*p*/(0, 'Attemped to redefine existing style prop type "' + t + '".'), h[t] = e[t]
    };
    var d = function(e, t, n, r) {
            invariant/*p*/(0, e + "\n" + (n || "<<unknown>>") + ": " + JSON.stringify(t, null, "  ") + (r || ""))
        },
        h = {};
    o.addValidStylePropTypes(ImageStylePropTypes/*a*/), o.addValidStylePropTypes(TextStylePropTypes/*u*/), o.addValidStylePropTypes(ViewStylePropTypes/*c*/), i.exports = o
});