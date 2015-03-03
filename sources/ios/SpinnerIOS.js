__d("SpinnerIOS",["NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror","keyOf","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("NativeModulesDeprecated"),
        s = require/*t*/("ReactPropTypes"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactIOSViewAttributes"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("View"),
        d = require/*t*/("createReactIOSNativeComponentClass"),
        h = require/*t*/("keyMirror"),
        f = (require/*t*/("keyOf"), require/*t*/("merge")),
        m = h({
            large: null,
            small: null
        }),
        g = "#999999",
        _ = l.createClass({
            displayName: "SpinnerIOS",
            mixins: [o],
            propTypes: {
                animating: s.bool,
                color: s.string,
                size: s.oneOf([m.large, m.small])
            },
            getDefaultProps: function() {
                return {
                    animating: !0,
                    size: m.small,
                    color: g
                }
            },
            statics: {
                size: m
            },
            render: function() {
                var global/*e*/ = y.sizeSmall,
                    require/*t*/ = a.RKUIManager.UIActivityIndicatorView.Constants,
                    requireDynamic/*n*/ = require/*t*/.StyleWhite;
                return this.props.size == m.large && (global/*e*/ = y.sizeLarge, requireDynamic/*n*/ = require/*t*/.StyleWhiteLarge), l.createElement(p, {
                    style: [y.container, global/*e*/, this.props.style]
                }, l.createElement(v, {
                    activityIndicatorViewStyle: requireDynamic/*n*/,
                    animating: this.props.animating,
                    color: this.props.color
                }))
            }
        }),
        y = c.create({
            container: {
                alignItems: "center",
                justifyContent: "center"
            },
            sizeSmall: {
                height: 20
            },
            sizeLarge: {
                height: 36
            }
        }),
        v = d({
            validAttributes: f(u.UIView, {
                activityIndicatorViewStyle: !0,
                animating: !0,
                color: !0
            }),
            uiViewClassName: "UIActivityIndicatorView"
        });
    module/*i*/.exports = _
});