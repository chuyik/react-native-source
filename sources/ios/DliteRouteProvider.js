__d("DliteRouteProvider",["DliteRoute","React","invariant"],function (e, t, n, r, i) {
    "use strict";
    var DliteRoute/*o*/ = t("DliteRoute"),
        React/*a*/ = t("React"),
        invariant/*s*/ = t("invariant"),
        l = React/*a*/.PropTypes,
        u = {
            Mixin: {
                childContextTypes: {
                    route: l.instanceOf(DliteRoute/*o*/).isRequired
                },
                getChildContext: function() {
                    return "function" != typeof this.getDliteRoute && invariant/*s*/(0, "DliteRouteProvider mixin requires getDliteRoute to be implemented"), {
                        route: this.getDliteRoute()
                    }
                }
            }
        };
    i.exports = u
});