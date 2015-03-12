__d("ViewportMetrics",["getUnboundedScrollPosition"],function (e, t, n, r, i) {
    "use strict";
    var getUnboundedScrollPosition/*o*/ = t("getUnboundedScrollPosition"),
        a = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function() {
                var e = getUnboundedScrollPosition/*o*/(window);
                a.currentScrollLeft = e.x, a.currentScrollTop = e.y
            }
        };
    i.exports = a
});