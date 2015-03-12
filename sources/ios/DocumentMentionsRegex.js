__d("DocumentMentionsRegex",[],function (e, t, n, r, i) {
    var o = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%&'\"~=<>_:;",
        a = "\\b[A-Z][^\\s" + o + "]",
        s = {
            PUNCTUATION: o,
            NAME: a
        };
    i.exports = s
});