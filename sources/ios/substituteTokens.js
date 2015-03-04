__d("substituteTokens",["invariant","Intl"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (!require/*t*/) return global/*e*/;
        "object" != typeof require/*t*/ && invariant/*a*/(0, "The 2nd argument must be an object (not invariant/*a*/ string) for tx(%Intl/*s*/, ...)", global/*e*/);
        var requireDynamic/*n*/ = "\\{([^}]+)\\}(" + Intl/*s*/.endsInPunct.punct_char_class + "*)",
            requireLazy/*r*/ = new RegExp(requireDynamic/*n*/, "g"),
            module/*i*/ = [],
            o = [],
            l = global/*e*/.replace(requireLazy/*r*/, function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                if (__DEV__ && !require/*t*/.hasOwnProperty(requireDynamic/*n*/)) throw new Error("Translatable string expects parameter " + requireDynamic/*n*/);
                var invariant/*a*/ = require/*t*/[requireDynamic/*n*/];
                return invariant/*a*/ && "object" == typeof invariant/*a*/ ? (module/*i*/.push(invariant/*a*/), o.push(requireDynamic/*n*/), "" + requireLazy/*r*/) : null === invariant/*a*/ ? "" : invariant/*a*/ + (Intl/*s*/.endsInPunct(invariant/*a*/) ? "" : requireLazy/*r*/)
            }).split("").map(Intl/*s*/.applyPhonologicalRules);
        if (1 === l.length) return l[0];
        var u = {};
        u["[0]"] = l[0];
        for (var c = 0; c < module/*i*/.length; c++) u["{" + o[c] + "}"] = module/*i*/[c], u["[" + (c + 1) + "]"] = l[c + 1];
        return u
    }
    var invariant/*a*/ = require/*t*/("invariant"),
        Intl/*s*/ = require/*t*/("Intl");
    module/*i*/.exports = o
});