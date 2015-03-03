__d("ReactGraphQLComparators",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/;
        for (module/*i*/ in require/*exports/*t*/*/)
            if (!(requireLazy/*r*/ && !requireLazy/*r*/.hasOwnProperty(module/*i*/) || !require/*exports/*t*/*/.hasOwnProperty(module/*i*/) || requireDynamic/*n*/.hasOwnProperty(module/*i*/) && global/*e*/(require/*exports/*t*/*/[module/*i*/], requireDynamic/*n*/[module/*i*/], module/*i*/))) return !1;
        for (module/*i*/ in requireDynamic/*n*/)
            if ((!requireLazy/*r*/ || requireLazy/*r*/.hasOwnProperty(module/*i*/)) && requireDynamic/*n*/.hasOwnProperty(module/*i*/) && !require/*exports/*t*/*/.hasOwnProperty(module/*i*/)) return !1;
        return !0
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/ === require/*exports/*t*/*/ && (null === global/*e*/ || "object" != typeof global/*e*/)
    }

    function s(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return requireDynamic/*n*/ in l ? global/*e*/ === require/*exports/*t*/*/ : a(global/*e*/, require/*exports/*t*/*/)
    }
    var l = {
            route: !0
        },
        u = {
            Mixin: {
                isStateEqualTo: function(global/*e*/) {
                    return o(a, this.state, global/*e*/)
                },
                isContextEqualTo: function(global/*e*/) {
                    return o(s, this.context, global/*e*/)
                },
                isDliteContextEqualTo: function(global/*e*/) {
                    return o(s, this.context, global/*e*/, l)
                },
                arePropsEqualTo: function(global/*e*/) {
                    return o(this._isPropEqual, this.props, global/*e*/)
                },
                areDlitePropsEqualTo: function(global/*e*/) {
                    return o(this._isPropEqual, this.props, global/*e*/, this.constructor.queries)
                },
                _isPropEqual: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
                    return this.constructor.queries.hasOwnProperty(requireDynamic/*n*/) ? global/*e*/ === require/*exports/*t*/*/ : a(global/*e*/, require/*exports/*t*/*/)
                }
            }
        };
    module/*i*/.exports = u
});