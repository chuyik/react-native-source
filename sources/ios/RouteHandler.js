__d("RouteHandler",["NavItem","React","invariant"],function (e, t, n, r, i) {
    "use strict";
    var o, NavItem/*a*/ = t("NavItem"),
        React/*s*/ = t("React"),
        invariant/*l*/ = t("invariant"),
        u = {
            setNavigator: function(e) {
                o = e
            },
            getCallback: function(e) {
                for (var t = 0; t < e.typeList.length; ++t) {
                    var n = this._callbacks[e.typeList[t]];
                    if (n) return function() {
                        return n(e.params)
                    }
                }
                return console.warn.bind(console, "Warning: No route for any of types " + JSON.stringify(e.typeList))
            },
            registerViewCallbackForTypes: function(e, t) {
                e.forEach(function(e) {
                    void 0 !== this._callbacks[e] ? console.warn("Type '" + e + "' already registered with RouteHandler, ignoring new mapping.") : this._callbacks[e] = this._pushView.bind(this, t)
                }.bind(this))
            },
            registerCallbackForTypes: function(e, t) {
                e.forEach(function(e) {
                    void 0 !== this._callbacks[e] ? console.warn("Type '" + e + "' already registered with RouteHandler, ignoring new mapping.") : this._callbacks[e] = t.bind(this)
                }.bind(this))
            },
            _pushView: function(e, t) {
                var n = e(t);
                n.type || invariant/*l*/(0, "viewCallback must generate NavItem/*a*/ component instance."), n.type.navItemTitle || invariant/*l*/(0, "View '" + (n.type.displayName || "<Unknown>") + "' must ' implement function navItemTitle.");
                var r = n.type.navItemTitle(),
                    i = t.navigator || o;
                i && i.push ? i.push(React/*s*/.createElement(NavItem/*a*/, {
                    title: r,
                    tintColor: "white"
                }, n)) : console.warn("Warning: No valid navigator provided.")
            },
            _callbacks: {}
        };
    i.exports = u
});