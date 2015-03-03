__d("DliteRouteProvider",["DliteRoute","React","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        a = require/*t*/("React"),
        s = require/*t*/("invariant"),
        l = a.PropTypes,
        u = {
            Mixin: {
                childContextTypes: {
                    route: l.instanceOf(o).isRequired
                },
                getChildContext: function() {
                    return "function" != typeof this.getDliteRoute && s(0, "DliteRouteProvider mixin requires getDliteRoute to be implemented"), {
                        route: this.getDliteRoute()
                    }
                }
            }
        };
    module/*i*/.exports = u
});