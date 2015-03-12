__d("substituteTokens",["invariant","Intl"],function (e, t, n, r, i) {
    function o(e, t) {
        if (!t) return e;
        "object" != typeof t && invariant/*a*/(0, "The 2nd argument must be an object (not invariant/*a*/ string) for tx(%Intl/*s*/, ...)", e);
        var n = "\\{([^}]+)\\}(" + Intl/*s*/.endsInPunct.punct_char_class + "*)",
            r = new RegExp(n, "g"),
            i = [],
            o = [],
            l = e.replace(r, function(e, n, r) {
                if (__DEV__ && !t.hasOwnProperty(n)) throw new Error("Translatable string expects parameter " + n);
                var invariant/*a*/ = t[n];
                return invariant/*a*/ && "object" == typeof invariant/*a*/ ? (i.push(invariant/*a*/), o.push(n), "" + r) : null === invariant/*a*/ ? "" : invariant/*a*/ + (Intl/*s*/.endsInPunct(invariant/*a*/) ? "" : r)
            }).split("").map(Intl/*s*/.applyPhonologicalRules);
        if (1 === l.length) return l[0];
        var u = {};
        u["[0]"] = l[0];
        for (var c = 0; c < i.length; c++) u["{" + o[c] + "}"] = i[c], u["[" + (c + 1) + "]"] = l[c + 1];
        return u
    }
    var invariant/*a*/ = t("invariant"),
        Intl/*s*/ = t("Intl");
    i.exports = o
});