__d("containsQueryRootCall",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (global/*e*/.getName() !== require/*t*/.getName() && !a(global/*e*/, require/*t*/)) return !1;
        var requireDynamic/*n*/ = global/*e*/.getArgs();
        return require/*t*/.getArgs().every(function(global/*e*/) {
            for (var require/*t*/ = 0; require/*t*/ < requireDynamic/*n*/.length; require/*t*/++)
                if (global/*e*/.equals(requireDynamic/*n*/[require/*t*/])) return !0;
            return !1
        })
    }

    function a(global/*e*/, require/*t*/) {
        return "nodes" === global/*e*/.getName() && "node" === require/*t*/.getName()
    }
    module/*i*/.exports = o
});