__d("ReactContext",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = {
        current: {},
        withContext: function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/, requireLazy/*r*/ = o.current;
            o.current = Object.assign({}, requireLazy/*r*/, global/*e*/);
            try {
                requireDynamic/*n*/ = require/*t*/()
            } finally {
                o.current = requireLazy/*r*/
            }
            return requireDynamic/*n*/
        }
    };
    module/*i*/.exports = o
});