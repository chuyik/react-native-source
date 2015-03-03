__d("RouteHandler",["NavItem","React","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, a = require/*t*/("NavItem"),
        s = require/*t*/("React"),
        l = require/*t*/("invariant"),
        u = {
            setNavigator: function(global/*e*/) {
                o = global/*e*/
            },
            getCallback: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < global/*e*/.typeList.length; ++require/*t*/) {
                    var requireDynamic/*n*/ = this._callbacks[global/*e*/.typeList[require/*t*/]];
                    if (requireDynamic/*n*/) return function() {
                        return requireDynamic/*n*/(global/*e*/.params)
                    }
                }
                return console.warn.bind(console, "Warning: No route for any of types " + JSON.stringify(global/*e*/.typeList))
            },
            registerViewCallbackForTypes: function(global/*e*/, require/*t*/) {
                global/*e*/.forEach(function(global/*e*/) {
                    void 0 !== this._callbacks[global/*e*/] ? console.warn("Type '" + global/*e*/ + "' already registered with RouteHandler, ignoring new mapping.") : this._callbacks[global/*e*/] = this._pushView.bind(this, require/*t*/)
                }.bind(this))
            },
            registerCallbackForTypes: function(global/*e*/, require/*t*/) {
                global/*e*/.forEach(function(global/*e*/) {
                    void 0 !== this._callbacks[global/*e*/] ? console.warn("Type '" + global/*e*/ + "' already registered with RouteHandler, ignoring new mapping.") : this._callbacks[global/*e*/] = require/*t*/.bind(this)
                }.bind(this))
            },
            _pushView: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/(require/*t*/);
                requireDynamic/*n*/.type || l(0, "viewCallback must generate a component instance."), requireDynamic/*n*/.type.navItemTitle || l(0, "View '" + (requireDynamic/*n*/.type.displayName || "<Unknown>") + "' must ' implement function navItemTitle.");
                var requireLazy/*r*/ = requireDynamic/*n*/.type.navItemTitle(),
                    module/*i*/ = require/*t*/.navigator || o;
                module/*i*/ && module/*i*/.push ? module/*i*/.push(s.createElement(a, {
                    title: requireLazy/*r*/,
                    tintColor: "white"
                }, requireDynamic/*n*/)) : console.warn("Warning: No valid navigator provided.")
            },
            _callbacks: {}
        };
    module/*i*/.exports = u
});