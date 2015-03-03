__d("SpinnerIOS",["NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror","keyOf","merge"],function (global/*e*/, require/*keyMirror/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*keyMirror/*t*/*/("NativeMethodsMixin"),
        exports/*a*/ = require/*keyMirror/*t*/*/("NativeModulesDeprecated"),
        NativeMethodsMixin/*s*/ = require/*keyMirror/*t*/*/("ReactPropTypes"),
        NativeModulesDeprecated/*l*/ = require/*keyMirror/*t*/*/("React"),
        ReactPropTypes/*u*/ = require/*keyMirror/*t*/*/("ReactIOSViewAttributes"),
        React/*c*/ = require/*keyMirror/*t*/*/("StyleSheet"),
        ReactIOSViewAttributes/*p*/ = require/*keyMirror/*t*/*/("View"),
        StyleSheet/*d*/ = require/*keyMirror/*t*/*/("createReactIOSNativeComponentClass"),
        View/*h*/ = require/*keyMirror/*t*/*/("keyMirror"),
        createReactIOSNativeComponentClass/*f*/ = (require/*keyMirror/*t*/*/("keyOf"), require/*keyMirror/*t*/*/("merge")),
        keyOf/*m*/ = View/*h*/({
            large: null,
            merge/*small*/: null
        }),
        g = "#999999",
        _ = NativeModulesDeprecated/*l*/.createClass({
            displayName: "SpinnerIOS",
            mixins: [o],
            propTypes: {
                animating: NativeMethodsMixin/*s*/.bool,
                color: NativeMethodsMixin/*s*/.string,
                size: NativeMethodsMixin/*s*/.oneOf([keyOf/*m*/.large, keyOf/*m*/.merge/*small*/])
            },
            getDefaultProps: function() {
                return {
                    animating: !0,
                    size: keyOf/*m*/.merge/*small*/,
                    color: g
                }
            },
            statics: {
                size: keyOf/*m*/
            },
            render: function() {
                var global/*e*/ = y.sizeSmall,
                    require/*keyMirror/*t*/*/ = exports/*a*/.RKUIManager.UIActivityIndicatorView.Constants,
                    requireDynamic/*n*/ = require/*keyMirror/*t*/*/.StyleWhite;
                return this.props.size == keyOf/*m*/.large && (global/*e*/ = y.sizeLarge, requireDynamic/*n*/ = require/*keyMirror/*t*/*/.StyleWhiteLarge), NativeModulesDeprecated/*l*/.createElement(ReactIOSViewAttributes/*p*/, {
                    style: [y.container, global/*e*/, this.props.style]
                }, NativeModulesDeprecated/*l*/.createElement(v, {
                    activityIndicatorViewStyle: requireDynamic/*n*/,
                    animating: this.props.animating,
                    color: this.props.color
                }))
            }
        }),
        y = React/*c*/.create({
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
        v = StyleSheet/*d*/({
            validAttributes: createReactIOSNativeComponentClass/*f*/(ReactPropTypes/*u*/.UIView, {
                activityIndicatorViewStyle: !0,
                animating: !0,
                color: !0
            }),
            uiViewClassName: "UIActivityIndicatorView"
        });
    module/*i*/.exports = _
});