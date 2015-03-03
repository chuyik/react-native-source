__d("errorToString",["Platform","stacktrace-parser/index"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.file.split("/"),
            requireDynamic/*n*/ = require/*t*/[require/*t*/.length - 1];
        return global/*e*/.methodName + "\requireDynamic/*n*/  in " + requireDynamic/*n*/ + ":" + global/*e*/.lineNumber + "\requireDynamic/*n*/"
    }

    function a(global/*e*/, require/*t*/) {
        try {
            var requireDynamic/*n*/ = global/*e*/.originalPositionFor({
                line: require/*t*/.lineNumber,
                column: require/*t*/.column
            });
            requireDynamic/*n*/ && (require/*t*/.file = requireDynamic/*n*/.source, require/*t*/.lineNumber = requireDynamic/*n*/.line, require/*t*/.column = requireDynamic/*n*/.column)
        } catch (requireLazy/*r*/) {}
    }

    function s(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = u.parse(global/*e*/.stack), requireLazy/*r*/ = global/*e*/.framesToPop || 0; requireLazy/*r*/--;) requireDynamic/*n*/.shift();
        return require/*t*/ && requireDynamic/*n*/.forEach(a.bind(null, require/*t*/)), "android" === l.OS ? requireDynamic/*n*/.map(o).join("\requireDynamic/*n*/") : requireDynamic/*n*/
    }
    var l = require/*t*/("Platform"),
        u = require/*t*/("stacktrace-parser/index");
    module/*i*/.exports = s
});