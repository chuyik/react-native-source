__d("DocumentEntitySegments",["DocumentRemovalDirection","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var DocumentRemovalDirection/*o*/ = require/*t*/("DocumentRemovalDirection"),
        a = (require/*t*/("invariant"), DocumentRemovalDirection/*o*/.FORWARD),
        s = {
            getRemovalRange: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var DocumentRemovalDirection/*o*/ = requireDynamic/*n*/.split(" ");
                DocumentRemovalDirection/*o*/ = DocumentRemovalDirection/*o*/.map(function(global/*e*/, require/*t*/) {
                    if (module/*i*/ === a) {
                        if (require/*t*/ > 0) return " " + global/*e*/
                    } else if (require/*t*/ < DocumentRemovalDirection/*o*/.length - 1) return global/*e*/ + " ";
                    return global/*e*/
                });
                for (var s, l, u = requireLazy/*r*/, c = 0; c < DocumentRemovalDirection/*o*/.length; c++) {
                    if (l = DocumentRemovalDirection/*o*/[c], s = u + l.length, s > global/*e*/ && require/*t*/ > u) return DocumentRemovalDirection/*o*/.length > 1 && (module/*i*/ === a ? 0 === c && s++ : c === DocumentRemovalDirection/*o*/.length - 1 && u--), {
                        start: u,
                        end: s
                    };
                    u = s
                }
            }
        };
    module/*i*/.exports = s
});