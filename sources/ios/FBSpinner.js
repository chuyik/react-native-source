__d("FBSpinner",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*l*/ = t("StyleSheet"),
        View/*u*/ = t("View"),
        createReactIOSNativeComponentClass/*c*/ = t("createReactIOSNativeComponentClass"),
        keyMirror/*p*/ = t("keyMirror"),
        d = keyMirror/*p*/({
            large: null,
            small: null
        }),
        h = React/*a*/.createClass({
            displayName: "FBSpinner",
            propTypes: {
                size: React/*a*/.PropTypes.oneOf(Object.keys(d))
            },
            statics: {
                LARGE: d.large,
                SMALL: d.small
            },
            mixins: [NativeMethodsMixin/*o*/],
            viewConfig: {
                uiViewClassName: "FBActivityIndicatorView",
                validAttributes: ReactIOSViewAttributes/*s*/.UIView
            },
            getDefaultProps: function() {
                return {
                    size: d.small
                }
            },
            render: function() {
                return React/*a*/.createElement(View/*u*/, {
                    style: [f.container, this.props.style]
                }, React/*a*/.createElement(g, {
                    style: [m[this.props.size], f.transparent]
                }))
            }
        }),
        f = StyleSheet/*l*/.create({
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
    var g = createReactIOSNativeComponentClass/*c*/({
        validAttributes: ReactIOSViewAttributes/*s*/.UIView,
        uiViewClassName: "FBActivityIndicatorView"
    });
    i.exports = h
});