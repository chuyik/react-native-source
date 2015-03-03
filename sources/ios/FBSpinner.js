__d("FBSpinner",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("View"),
        c = require/*t*/("createReactIOSNativeComponentClass"),
        p = require/*t*/("keyMirror"),
        d = p({
            large: null,
            small: null
        }),
        h = a.createClass({
            displayName: "FBSpinner",
            propTypes: {
                size: a.PropTypes.oneOf(Object.keys(d))
            },
            statics: {
                LARGE: d.large,
                SMALL: d.small
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "FBActivityIndicatorView",
                validAttributes: s.UIView
            },
            getDefaultProps: function() {
                return {
                    size: d.small
                }
            },
            render: function() {
                return a.createElement(u, {
                    style: [f.container, this.props.style]
                }, a.createElement(g, {
                    style: [m[this.props.size], f.transparent]
                }))
            }
        }),
        f = l.create({
            container: {
                alignItems: "center",
                justifyContent: "center"
            },
            transparent: {
                backgroundColor: "transparent"
            },
            sizeSmall: {
                height: 20,
                width: 20
            },
            sizeLarge: {
                height: 36,
                width: 36
            }
        }),
        m = {};
    m[d.large] = f.sizeLarge, m[d.small] = f.sizeSmall;
    var g = c({
        validAttributes: s.UIView,
        uiViewClassName: "FBActivityIndicatorView"
    });
    module/*i*/.exports = h
});