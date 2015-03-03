__d("eprintf",[],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*r*/, module/*i*/) {
    var o = function(global/*e*/) {
        var require/*t*/ = Array.prototype.slice.call(arguments).map(function(global/*e*/) {
                return String(global/*e*/)
            }),
            requireDynamic/*exports/*n*/*/ = global/*e*/.split("%s").length - 1;
        if (requireDynamic/*exports/*n*/*/ !== require/*t*/.length - 1) return o("eprintf args number mismatch: %s", JSON.stringify(require/*t*/));
        var requireLazy/*r*/ = 1;
        return global/*e*/.replace(/%s/g, function() {
            return String(require/*t*/[requireLazy/*r*/++])
        })
    };
    module/*i*/.exports = o
});