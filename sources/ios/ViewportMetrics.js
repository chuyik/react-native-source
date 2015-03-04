__d("ViewportMetrics",["getUnboundedScrollPosition"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var getUnboundedScrollPosition/*o*/ = require/*t*/("getUnboundedScrollPosition"),
        a = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function() {
                var global/*e*/ = getUnboundedScrollPosition/*o*/(window);
                a.currentScrollLeft = global/*e*/.x, a.currentScrollTop = global/*e*/.y
            }
        };
    module/*i*/.exports = a
});