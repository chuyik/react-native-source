__d("errorToString",["Platform","stacktrace-parser/index"],function (global/*e*/, require/*Platform/*t*/*/, requireDynamic/*exports/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*Platform/*t*/*/ = global/*e*/.file.split("/"),
            requireDynamic/*exports/*n*/*/ = require/*Platform/*t*/*/[require/*Platform/*t*/*/.length - 1];
        return global/*e*/.methodName + "\requireDynamic/*exports/*n*/*/  in " + requireDynamic/*exports/*n*/*/ + ":" + global/*e*/.lineNumber + "\requireDynamic/*exports/*n*/*/"
    }

    function a(global/*e*/, require/*Platform/*t*/*/) {
        try {
            var requireDynamic/*exports/*n*/*/ = global/*e*/.originalPositionFor({
                line: require/*Platform/*t*/*/.lineNumber,
                stacktrace-parser/index/*column*/: require/*Platform/*t*/*/.stacktrace-parser/index/*column*/
            });
            requireDynamic/*exports/*n*/*/ && (require/*Platform/*t*/*/.file = requireDynamic/*exports/*n*/*/.source, require/*Platform/*t*/*/.lineNumber = requireDynamic/*exports/*n*/*/.line, require/*Platform/*t*/*/.stacktrace-parser/index/*column*/ = requireDynamic/*exports/*n*/*/.stacktrace-parser/index/*column*/)
        } catch (requireLazy/*r*/) {}
    }

    function s(global/*e*/, require/*Platform/*t*/*/) {
        for (var requireDynamic/*exports/*n*/*/ = u.parse(global/*e*/.stack), requireLazy/*r*/ = global/*e*/.framesToPop || 0; requireLazy/*r*/--;) requireDynamic/*exports/*n*/*/.shift();
        return require/*Platform/*t*/*/ && requireDynamic/*exports/*n*/*/.forEach(a.bind(null, require/*Platform/*t*/*/)), "android" === l.OS ? requireDynamic/*exports/*n*/*/.map(o).join("\requireDynamic/*exports/*n*/*/") : requireDynamic/*exports/*n*/*/
    }
    var l = require/*Platform/*t*/*/("Platform"),
        u = require/*Platform/*t*/*/("stacktrace-parser/index");
    module/*i*/.exports = s
});