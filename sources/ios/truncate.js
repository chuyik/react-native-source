__d("truncate",["merge"],function (e, t, n, r, i) {
    "use strict";
    var merge/*o*/ = t("merge"),
        a = {
            breakOnWords: !0,
            minDelta: 10,
            elipsis: "..."
        },
        s = function(e, t, n) {
            if (n = merge/*o*/(a, n), e && e.length && e.length - n.minDelta + n.elipsis.length >= t) {
                if (e = e.slice(0, t - n.elipsis.length + 1), n.breakOnWords) {
                    var r = Math.max(e.lastIndexOf(" "), e.lastIndexOf("\n"));
                    e = e.slice(0, r)
                }
                e = e.trim() + n.elipsis
            }
            return e
        };
    i.exports = s
});