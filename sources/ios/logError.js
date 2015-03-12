__d("logError",[],function (e, t, n, r, i) {
    "use strict";
    var o = function() {
        if (1 === arguments.length && arguments[0] instanceof Error) {
            var e = arguments[0];
            console.error('Error: "' + e.message + '".  Stack:\n' + e.stack)
        } else console.error.apply(console, arguments)
    };
    i.exports = o
});