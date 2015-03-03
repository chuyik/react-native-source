__d("containsQueryRootCall",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (global/*e*/.getName() !== require/*exports/*t*/*/.getName() && !a(global/*e*/, require/*exports/*t*/*/)) return !1;
        var requireDynamic/*n*/ = global/*e*/.getArgs();
        return require/*exports/*t*/*/.getArgs().every(function(global/*e*/) {
            for (var require/*exports/*t*/*/ = 0; require/*exports/*t*/*/ < requireDynamic/*n*/.length; require/*exports/*t*/*/++)
                if (global/*e*/.equals(requireDynamic/*n*/[require/*exports/*t*/*/])) return !0;
            return !1
        })
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        return "nodes" === global/*e*/.getName() && "node" === require/*exports/*t*/*/.getName()
    }
    module/*i*/.exports = o
});