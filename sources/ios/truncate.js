__d("truncate",["merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("merge"),
        exports/*a*/ = {
            breakOnWords: !0,
            merge/*minDelta*/: 10,
            elipsis: "..."
        },
        s = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            if (requireDynamic/*n*/ = o(exports/*a*/, requireDynamic/*n*/), global/*e*/ && global/*e*/.length && global/*e*/.length - requireDynamic/*n*/.merge/*minDelta*/ + requireDynamic/*n*/.elipsis.length >= require/*t*/) {
                if (global/*e*/ = global/*e*/.slice(0, require/*t*/ - requireDynamic/*n*/.elipsis.length + 1), requireDynamic/*n*/.breakOnWords) {
                    var requireLazy/*r*/ = Math.max(global/*e*/.lastIndexOf(" "), global/*e*/.lastIndexOf("\requireDynamic/*n*/"));
                    global/*e*/ = global/*e*/.slice(0, requireLazy/*r*/)
                }
                global/*e*/ = global/*e*/.trim() + requireDynamic/*n*/.elipsis
            }
            return global/*e*/
        };
    module/*i*/.exports = s
});