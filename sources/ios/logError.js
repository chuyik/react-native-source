__d("logError",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = function() {
        if (1 === arguments.length && arguments[0] instanceof Error) {
            var global/*e*/ = arguments[0];
            console.error('Error: "' + global/*e*/.message + '".  Stack:\requireDynamic/*n*/' + global/*e*/.stack)
        } else console.error.apply(console, arguments)
    };
    module/*i*/.exports = o
});