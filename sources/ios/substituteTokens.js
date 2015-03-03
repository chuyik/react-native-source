__d("substituteTokens",["invariant","Intl"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        if (!require/*t*/) return global/*e*/;
        "object" != typeof require/*t*/ && a(0, "The 2nd argument must be an object (not a string) for tx(%s, ...)", global/*e*/);
        var requireDynamic/*n*/ = "\\{([^}]+)\\}(" + s.endsInPunct.punct_char_class + "*)",
            requireLazy/*r*/ = new RegExp(requireDynamic/*n*/, "g"),
            module/*i*/ = [],
            o = [],
            l = global/*e*/.replace(requireLazy/*r*/, function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                if (__DEV__ && !require/*t*/.hasOwnProperty(requireDynamic/*n*/)) throw new Error("Translatable string expects parameter " + requireDynamic/*n*/);
                var a = require/*t*/[requireDynamic/*n*/];
                return a && "object" == typeof a ? (module/*i*/.push(a), o.push(requireDynamic/*n*/), "" + requireLazy/*r*/) : null === a ? "" : a + (s.endsInPunct(a) ? "" : requireLazy/*r*/)
            }).split("").map(s.applyPhonologicalRules);
        if (1 === l.length) return l[0];
        var u = {};
        u["[0]"] = l[0];
        for (var c = 0; c < module/*i*/.length; c++) u["{" + o[c] + "}"] = module/*i*/[c], u["[" + (c + 1) + "]"] = l[c + 1];
        return u
    }
    var a = require/*t*/("invariant"),
        s = require/*t*/("Intl");
    module/*i*/.exports = o
});