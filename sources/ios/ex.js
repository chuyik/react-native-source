__d("ex",["eprintf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("eprintf"),
        a = function() {
            for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
            return global/*e*/ = global/*e*/.map(function(global/*e*/) {
                return String(global/*e*/)
            }), global/*e*/[0].split("%s").length !== global/*e*/.length ? a("ex args number mismatch: %s", JSON.stringify(global/*e*/)) : __DEV__ ? o.apply(null, global/*e*/) : a._prefix + JSON.stringify(global/*e*/) + a._suffix
        };
    a._prefix = "<![EX[", a._suffix = "]]>", module/*i*/.exports = a
});