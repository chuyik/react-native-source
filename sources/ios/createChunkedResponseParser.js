__d("createChunkedResponseParser",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*invariant/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = 0,
            requireLazy/*invariant/*r*/*/ = {
                lengths: [],
                rawText: ""
            },
            module/*i*/ = function(module/*i*/, o, u) {
                if (requireLazy/*invariant/*r*/*/.rawText = module/*i*/, requireLazy/*invariant/*r*/*/.lengths.push(module/*i*/.length), require/*exports/*t*/*/ && (module/*i*/ = require/*exports/*t*/*/(module/*i*/), null != module/*i*/ && "string" != typeof module/*i*/ && a(0, "createChunkedResponseParser: Filtered response must be a ?string")), module/*i*/)
                    for (var c = module/*i*/.length; c > requireDynamic/*n*/;) {
                        var p = module/*i*/.indexOf(s, requireDynamic/*n*/);
                        if (0 > p) {
                            if (!u) break;
                            p = c
                        }
                        var d = module/*i*/.slice(requireDynamic/*n*/, p);
                        requireDynamic/*n*/ += d.length + l, global/*e*/(d, o, u && requireDynamic/*n*/ >= c, requireLazy/*invariant/*r*/*/)
                    } else u && global/*e*/("", o, !0, requireLazy/*invariant/*r*/*/)
            };
        return module/*i*/.parseStreaming = !0, module/*i*/
    }
    var a = require/*exports/*t*/*/("invariant"),
        s = "\requireLazy/*invariant/*r*/*/\requireDynamic/*n*/",
        l = 2;
    module/*i*/.exports = o
});