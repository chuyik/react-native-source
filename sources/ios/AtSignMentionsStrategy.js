__d("AtSignMentionsStrategy",["DocumentMentionsRegex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentMentionsRegex"),
        a = o.PUNCTUATION,
        s = ["@", "\\uff20"].join(""),
        l = "[^" + s + a + "\\s]",
        u = "(?:\\.[ |$]| |[" + a + "]|)",
        c = new RegExp("(?:^|\\s)([" + s + "]((?:" + l + u + "){0,20}))$"),
        p = {
            findMentionableString: function(global/*e*/) {
                var require/*t*/ = c.exec(global/*e*/);
                if (null !== require/*t*/) {
                    var requireDynamic/*n*/ = require/*t*/[2];
                    if (requireDynamic/*n*/.length) return {
                        matchingString: requireDynamic/*n*/,
                        leadOffset: require/*t*/[1].length
                    }
                }
                return null
            }
        };
    module/*i*/.exports = p
});