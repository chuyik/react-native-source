__d("DliteRouteProvider",["DliteRoute","React","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteRoute/*o*/ = require/*t*/("DliteRoute"),
        React/*a*/ = require/*t*/("React"),
        invariant/*s*/ = require/*t*/("invariant"),
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
    module/*i*/.exports = u
});