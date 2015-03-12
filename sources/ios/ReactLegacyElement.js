__d("ReactLegacyElement", ["ReactCurrentOwner", "invariant", "monitorCodeUse", "warning"], function (e, t, n, r, i) {
    "use strict";

    function o() {
        if (g._isLegacyCallWarningEnabled) {
            var e = ReactCurrentOwner /*u*/ .current,
                t = e && e.constructor ? e.constructor.displayName : "";
            t || (t = "Something"), h.hasOwnProperty(t) || (h[t] = !0, warning /*d*/ (!1, t + " is calling a React component directly. Use a factory or JSX instead. See: http://fb.me/react-legacyfactory"), monitorCodeUse /*p*/ ("react_legacy_factory_call", {
                version: 3,
                name: t
            }))
        }
    }

    function a(e) {
        var t = e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent;
        if (t) warning /*d*/ (!1, "Did not expect to get a React class here. Use `Component` instead of `Component.type` or `this.constructor`.");
        else {
            if (!e._reactWarnedForThisType) {
                try {
                    e._reactWarnedForThisType = !0
                } catch (n) {}
                monitorCodeUse /*p*/ ("react_non_component_in_jsx", {
                    version: 3,
                    name: e.name
                })
            }
            warning /*d*/ (!1, "This JSX uses a plain function. Only React components are valid in React's JSX transform.")
        }
    }

    function s(e) {
        warning /*d*/ (!1, "Do not pass React.DOM." + e.type + ' to JSX or createFactory. Use the string "' + e + '" instead.')
    }

    function l(e, t) {
        if ("function" == typeof t)
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    if ("function" == typeof r) {
                        var i = r.bind(t);
                        for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                        e[n] = i
                    } else e[n] = r
                }
    }
    var ReactCurrentOwner /*u*/ = t("ReactCurrentOwner"),
        invariant /*c*/ = t("invariant"),
        monitorCodeUse /*p*/ = t("monitorCodeUse"),
        warning /*d*/ = t("warning"),
        h = {},
        f = {},
        m = {},
        g = {};
    g.wrapCreateFactory = function (e) {
            var t = function (t) {
                return "function" != typeof t ? e(t) : t.isReactNonLegacyFactory ? (__DEV__ && s(t), e(t.type)) : t.isReactLegacyFactory ? e(t.type) : (__DEV__ && a(t), t)
            };
            return t
        },

        g.wrapCreateElement = function (fn) {
            var createElement = function (component) {
                if ("function" != typeof component)
                    return fn.apply(this, arguments);
                var n;
                return 
                    component.isReactNonLegacyFactory ? 
                        (__DEV__ && s(component), n = Array.prototype.slice.call(arguments, 0), n[0] = component.type, fn.apply(this, n)) : 
                        component.isReactLegacyFactory ? 
                            (component._isMockFunction && (component.type._mockedReactClassConstructor = component), n = Array.prototype.slice.call(arguments, 0), n[0] = component.type, fn.apply(this, n)) : 
                            (__DEV__ && a(component), component.apply(null, Array.prototype.slice.call(arguments, 1)))
            };
            return createElement
        },

        g.wrapFactory = function (e) {
            "function" != typeof e && invariant /*c*/ (0, "This is suppose to accept a element factory");
            var t = function () {
                return __DEV__ && o(), e.apply(this, arguments)
            };
            return l(t, e.type), t.isReactLegacyFactory = f, t.type = e.type, t
        }, g.markNonLegacyFactory = function (e) {
            return e.isReactNonLegacyFactory = m, e
        }, g.isValidFactory = function (e) {
            return "function" == typeof e && e.isReactLegacyFactory === f
        }, g._isLegacyCallWarningEnabled = !0, i.exports = g
});
