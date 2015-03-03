__d("DocumentMentionsRegex",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%&'\"~=<>_:;",
        exports/*a*/ = "\\b[A-Z][^\\s" + o + "]",
        s = {
            PUNCTUATION: o,
            NAME: exports/*a*/
        };
    module/*i*/.exports = s
});