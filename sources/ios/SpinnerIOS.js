__d("SpinnerIOS",["NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror","keyOf","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        NativeModulesDeprecated/*a*/ = require/*t*/("NativeModulesDeprecated"),
        ReactPropTypes/*s*/ = require/*t*/("ReactPropTypes"),
        React/*l*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*u*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheet/*c*/ = require/*t*/("StyleSheet"),
        View/*p*/ = require/*t*/("View"),
        createReactIOSNativeComponentClass/*d*/ = require/*t*/("createReactIOSNativeComponentClass"),
        keyMirror/*h*/ = require/*t*/("keyMirror"),
        f = (require/*t*/("keyOf"), require/*t*/("merge")),
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
                var global/*e*/ = y.sizeSmall,
                    require/*t*/ = NativeModulesDeprecated/*a*/.RKUIManager.UIActivityIndicatorView.Constants,
                    requireDynamic/*n*/ = require/*t*/.StyleWhite;
                return this.props.size == m.large && (global/*e*/ = y.sizeLarge, requireDynamic/*n*/ = require/*t*/.StyleWhiteLarge), React/*l*/.createElement(View/*p*/, {
                    style: [y.container, global/*e*/, this.props.style]
                }, React/*l*/.createElement(v, {
                    activityIndicatorViewStyle: requireDynamic/*n*/,
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
    module/*i*/.exports = _
});