__d("createChunkedResponseParser",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = {
                lengths: [],
                rawText: ""
            },
            module/*i*/ = function(module/*i*/, o, u) {
                if (requireLazy/*r*/.rawText = module/*i*/, requireLazy/*r*/.lengths.push(module/*i*/.length), require/*t*/ && (module/*i*/ = require/*t*/(module/*i*/), null != module/*i*/ && "string" != typeof module/*i*/ && a(0, "createChunkedResponseParser: Filtered response must be a ?string")), module/*i*/)
                    for (var c = module/*i*/.length; c > requireDynamic/*n*/;) {
                        var p = module/*i*/.indexOf(s, requireDynamic/*n*/);
                        if (0 > p) {
                            if (!u) break;
                            p = c
                        }
                        var d = module/*i*/.slice(requireDynamic/*n*/, p);
                        requireDynamic/*n*/ += d.length + l, global/*e*/(d, o, u && requireDynamic/*n*/ >= c, requireLazy/*r*/)
                    } else u && global/*e*/("", o, !0, requireLazy/*r*/)
            };
        return module/*i*/.parseStreaming = !0, module/*i*/
    }
    var a = require/*t*/("invariant"),
        s = "\requireLazy/*r*/\requireDynamic/*n*/",
        l = 2;
    module/*i*/.exports = o
});