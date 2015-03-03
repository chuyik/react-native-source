__d("ViewportMetrics",["getUnboundedScrollPosition"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("getUnboundedScrollPosition"),
        exports/*a*/ = {
            currentScrollLeft: 0,
            getUnboundedScrollPosition/*currentScrollTop*/: 0,
            refreshScrollValues: function() {
                var global/*e*/ = o(window);
                exports/*a*/.currentScrollLeft = global/*e*/.x, exports/*a*/.getUnboundedScrollPosition/*currentScrollTop*/ = global/*e*/.y
            }
        };
    module/*i*/.exports = exports/*a*/
});