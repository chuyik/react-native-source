__d("DocumentMentionsRegex",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%&'\"~=<>_:;",
        a = "\\b[A-Z][^\\s" + o + "]",
        s = {
            PUNCTUATION: o,
            NAME: a
        };
    module/*i*/.exports = s
});