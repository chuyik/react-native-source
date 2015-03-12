__d("ReactElementValidator",["ReactElement","ReactPropTypeLocations","ReactCurrentOwner","monitorCodeUse"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        var e = ReactCurrentOwner/*f*/.current;
        return e && e.constructor.displayName || void 0
    }

    function a(e, t) {
        e._store.validated || null != e.key || (e._store.validated = !0, l("react_key_warning", 'Each child in an array should have a unique "key" prop.', e, t))
    }

    function s(e, t, n) {
        v.test(e) && l("react_numeric_key_warning", "Child objects should have non-numeric keys so ordering is preserved.", t, n)
    }

    function l(e, t, n, r) {
        var i = o(),
            a = r.displayName,
            s = i || a,
            l = g[e];
        if (!l.hasOwnProperty(s)) {
            l[s] = !0, t += i ? " Check the render method of " + i + "." : " Check the renderComponent call using <" + a + ">.";
            var u = null;
            n._owner && n._owner !== ReactCurrentOwner/*f*/.current && (u = n._owner.constructor.displayName, t += " It was passed a child from " + u + "."), t += " See http://fb.me/react-warning-keys for more information.", monitorCodeUse/*m*/(e, {
                component: s,
                componentOwner: u
            }), console.warn(t)
        }
    }

    function u() {
        var e = o() || "";
        _.hasOwnProperty(e) || (_[e] = !0, monitorCodeUse/*m*/("react_object_map_children"))
    }

    function c(e, t) {
        if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                ReactElement/*d*/.isValidElement(r) && a(r, t)
            } else if (ReactElement/*d*/.isValidElement(e)) e._store.validated = !0;
            else if (e && "object" == typeof e) {
            u();
            for (var i in e) s(i, e[i], t)
        }
    }

    function p(e, t, n, r) {
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o;
                try {
                    o = t[i](n, i, e, r)
                } catch (a) {
                    o = a
                }
                o instanceof Error && !(o.message in y) && (y[o.message] = !0, monitorCodeUse/*m*/("react_failed_descriptor_type_check", {
                    message: o.message
                }))
            }
    }
    var ReactElement/*d*/ = t("ReactElement"),
        ReactPropTypeLocations/*h*/ = t("ReactPropTypeLocations"),
        ReactCurrentOwner/*f*/ = t("ReactCurrentOwner"),
        monitorCodeUse/*m*/ = t("monitorCodeUse"),
        g = {
            react_key_warning: {},
            react_numeric_key_warning: {}
        },
        _ = {},
        y = {},
        v = /^\ReactElement/*d*/+$/,
        S = {
            createElement: function(e) {
                var t = ReactElement/*d*/.createElement.apply(this, arguments);
                if (null == t) return t;
                for (var n = 2; n < arguments.length; n++) c(arguments[n], e);
                var r = e.displayName;
                return e.propTypes && p(r, e.propTypes, t.props, ReactPropTypeLocations/*h*/.prop), e.contextTypes && p(r, e.contextTypes, t._context, ReactPropTypeLocations/*h*/.context), t
            },
            createFactory: function(e) {
                var t = S.createElement.bind(null, e);
                return t.type = e, t
            }
        };
    i.exports = S
});