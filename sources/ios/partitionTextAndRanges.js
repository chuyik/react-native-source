__d("partitionTextAndRanges",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.offset + global/*e*/.length;
        return require/*t*/ > global/*e*/.offset && requireDynamic/*n*/ > require/*t*/
    }

    function a(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            if (o(requireLazy/*r*/, require/*t*/)) return requireLazy/*r*/.offset
        }
        return require/*t*/
    }
    var s = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = [], module/*i*/ = [], o = a(require/*t*/, requireDynamic/*n*/), s = 0; s < require/*t*/.length; s++) {
            var l = require/*t*/[s];
            l.offset < o ? requireLazy/*r*/.push(l) : module/*i*/.push({
                offset: l.offset - o,
                length: l.length,
                entity: l.entity
            })
        }
        return {
            before: {
                ranges: requireLazy/*r*/,
                text: global/*e*/.substr(0, o)
            },
            after: {
                ranges: module/*i*/,
                text: global/*e*/.substr(o)
            }
        }
    };
    module/*i*/.exports = s
});