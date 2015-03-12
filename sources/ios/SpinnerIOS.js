__d("SpinnerIOS",["NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror","keyOf","merge"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated"),
        ReactPropTypes/*s*/ = t("ReactPropTypes"),
        React/*l*/ = t("React"),
        ReactIOSViewAttributes/*u*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*c*/ = t("StyleSheet"),
        View/*p*/ = t("View"),
        createReactIOSNativeComponentClass/*d*/ = t("createReactIOSNativeComponentClass"),
        keyMirror/*h*/ = t("keyMirror"),
        f = (t("keyOf"), t("merge")),
        m = keyMirror/*h*/({
            large: null,
            small: null
        }),
        g = "#999999",
        _ = React/*l*/.createClass({
            displayName: "SpinnerIOS",
            mixins: [NativeMethodsMixin/*o*/],
            propTypes: {
                animating: ReactPropTypes/*s*/.bool,
                color: ReactPropTypes/*s*/.string,
                size: ReactPropTypes/*s*/.oneOf([m.large, m.small])
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
                var e = y.sizeSmall,
                    t = NativeModulesDeprecated/*a*/.RKUIManager.UIActivityIndicatorView.Constants,
                    n = t.StyleWhite;
                return this.props.size == m.large && (e = y.sizeLarge, n = t.StyleWhiteLarge), React/*l*/.createElement(View/*p*/, {
                    style: [y.container, e, this.props.style]
                }, React/*l*/.createElement(v, {
                    activityIndicatorViewStyle: n,
                    animating: this.props.animating,
                    color: this.props.color
                }))
            }
        }),
        y = StyleSheet/*c*/.create({
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
        v = createReactIOSNativeComponentClass/*d*/({
            validAttributes: f(ReactIOSViewAttributes/*u*/.UIView, {
                activityIndicatorViewStyle: !0,
                animating: !0,
                color: !0
            }),
            uiViewClassName: "UIActivityIndicatorView"
        });
    i.exports = _
});