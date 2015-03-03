__d("DocumentEntitySegments",["DocumentRemovalDirection","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentRemovalDirection"),
        exports/*a*/ = (require/*t*/("invariant"), DocumentRemovalDirection/*o.FORWARD*/),
        invariant/*s*/ = {
            getRemovalRange: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = requireDynamic/*n*/.split(" ");
                o = o.map(function(global/*e*/, require/*t*/) {
                    if (module/*i*/ === exports/*a*/) {
                        if (require/*t*/ > 0) return " " + global/*e*/
                    } else if (require/*t*/ < o.length - 1) return global/*e*/ + " ";
                    return global/*e*/
                });
                for (var invariant/*s*/, l, u = requireLazy/*r*/, c = 0; c < o.length; c++) {
                    if (l = o[c], invariant/*s*/ = u + l.length, invariant/*s*/ > global/*e*/ && require/*t*/ > u) return o.length > 1 && (module/*i*/ === exports/*a*/ ? 0 === c && invariant/*s*/++ : c === o.length - 1 && u--), {
                        start: u,
                        end: invariant/*s*/
                    };
                    u = invariant/*s*/
                }
            }
        };
    module/*i*/.exports = invariant/*s*/
});