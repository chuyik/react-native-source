__d("DocumentEntitySegments",["DocumentRemovalDirection","invariant"],function (e, t, n, r, i) {
    var DocumentRemovalDirection/*o*/ = t("DocumentRemovalDirection"),
        a = (t("invariant"), DocumentRemovalDirection/*o*/.FORWARD),
        s = {
            getRemovalRange: function(e, t, n, r, i) {
                var DocumentRemovalDirection/*o*/ = n.split(" ");
                DocumentRemovalDirection/*o*/ = DocumentRemovalDirection/*o*/.map(function(e, t) {
                    if (i === a) {
                        if (t > 0) return " " + e
                    } else if (t < DocumentRemovalDirection/*o*/.length - 1) return e + " ";
                    return e
                });
                for (var s, l, u = r, c = 0; c < DocumentRemovalDirection/*o*/.length; c++) {
                    if (l = DocumentRemovalDirection/*o*/[c], s = u + l.length, s > e && t > u) return DocumentRemovalDirection/*o*/.length > 1 && (i === a ? 0 === c && s++ : c === DocumentRemovalDirection/*o*/.length - 1 && u--), {
                        start: u,
                        end: s
                    };
                    u = s
                }
            }
        };
    i.exports = s
});