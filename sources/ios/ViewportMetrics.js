__d("ViewportMetrics",["getUnboundedScrollPosition"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("getUnboundedScrollPosition"),
        a = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function() {
                var global/*e*/ = o(window);
                a.currentScrollLeft = global/*e*/.x, a.currentScrollTop = global/*e*/.y
            }
        };
    module/*i*/.exports = a
});