__d("DocumentEntitySegments",["DocumentRemovalDirection","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentRemovalDirection"),
        a = (require/*t*/("invariant"), o.FORWARD),
        s = {
            getRemovalRange: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = requireDynamic/*n*/.split(" ");
                o = o.map(function(global/*e*/, require/*t*/) {
                    if (module/*i*/ === a) {
                        if (require/*t*/ > 0) return " " + global/*e*/
                    } else if (require/*t*/ < o.length - 1) return global/*e*/ + " ";
                    return global/*e*/
                });
                for (var s, l, u = requireLazy/*r*/, c = 0; c < o.length; c++) {
                    if (l = o[c], s = u + l.length, s > global/*e*/ && require/*t*/ > u) return o.length > 1 && (module/*i*/ === a ? 0 === c && s++ : c === o.length - 1 && u--), {
                        start: u,
                        end: s
                    };
                    u = s
                }
            }
        };
    module/*i*/.exports = s
});