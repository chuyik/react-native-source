__d("ex",["eprintf"],function (global/*e*/, require/*eprintf/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*eprintf/*t*/*/("eprintf"),
        exports/*a*/ = function() {
            for (var global/*e*/ = [], require/*eprintf/*t*/*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*eprintf/*t*/*/; require/*eprintf/*t*/*/++) global/*e*/.push(arguments[require/*eprintf/*t*/*/]);
            return global/*e*/ = global/*e*/.map(function(global/*e*/) {
                return String(global/*e*/)
            }), global/*e*/[0].split("%s").length !== global/*e*/.length ? exports/*a*/("ex args number mismatch: %s", JSON.stringify(global/*e*/)) : __DEV__ ? o.apply(null, global/*e*/) : exports/*a*/._prefix + JSON.stringify(global/*e*/) + exports/*a*/._suffix
        };
    exports/*a*/._prefix = "<![EX[", exports/*a*/._suffix = "]]>", module/*i*/.exports = exports/*a*/
});