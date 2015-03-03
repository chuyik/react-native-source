__d("DliteRouteProvider",["DliteRoute","React","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        exports/*a*/ = require/*t*/("React"),
        DliteRoute/*s*/ = require/*t*/("invariant"),
        React/*l*/ = exports/*a*/.PropTypes,
        invariant/*u*/ = {
            Mixin: {
                childContextTypes: {
                    route: React/*l*/.instanceOf(o).isRequired
                },
                getChildContext: function() {
                    return "function" != typeof this.getDliteRoute && DliteRoute/*s*/(0, "DliteRouteProvider mixin requires getDliteRoute to be implemented"), {
                        route: this.getDliteRoute()
                    }
                }
            }
        };
    module/*i*/.exports = invariant/*u*/
});