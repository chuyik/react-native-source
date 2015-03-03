__d("Intl",[],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return "string" != typeof global/*e*/ ? !1 : global/*e*/.match(new RegExp(o.punct_char_class + "[)\"'»༻༽’”›〉》」』】〕〗〙〛〞〟﴿＇）］\\s]*$"))
    }

    function a(global/*e*/) {
        if (s) {
            var require/*t*/ = [],
                requireDynamic/*exports/*n*/*/ = [];
            for (var requireLazy/*r*/ in s.patterns) {
                var module/*i*/ = s.patterns[requireLazy/*r*/];
                for (var o in s.meta) {
                    var a = new RegExp(o.slice(1, -1), "g"),
                        l = s.meta[o];
                    requireLazy/*r*/ = requireLazy/*r*/.replace(a, l), module/*i*/ = module/*i*/.replace(a, l)
                }
                require/*t*/.push(requireLazy/*r*/), requireDynamic/*exports/*n*/*/.push(module/*i*/)
            }
            for (var u = 0; u < require/*t*/.length; u++) {
                var c = new RegExp(require/*t*/[u].slice(1, -1), "g");
                "javascript" == requireDynamic/*exports/*n*/*/[u] ? global/*e*/.replace(c, function(global/*e*/) {
                    return global/*e*/.slice(1).toLowerCase()
                }) : global/*e*/ = global/*e*/.replace(c, requireDynamic/*exports/*n*/*/[u])
            }
        }
        return global/*e*/.replace(/\x01/g, "")
    }
    var s;
    o.punct_char_class = "[.!?。！？।…ຯ᠁ฯ．]", module/*i*/.exports = {
        endsInPunct: o,
        applyPhonologicalRules: a,
        setPhonologicalRules: function(global/*e*/) {
            s = global/*e*/
        }
    }
});