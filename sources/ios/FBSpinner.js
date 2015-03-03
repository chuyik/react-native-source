__d("FBSpinner",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        exports/*a*/ = require/*t*/("React"),
        NativeMethodsMixin/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*t*/("StyleSheet"),
        ReactIOSViewAttributes/*u*/ = require/*t*/("View"),
        StyleSheet/*c*/ = require/*t*/("createReactIOSNativeComponentClass"),
        View/*p*/ = require/*t*/("keyMirror"),
        createReactIOSNativeComponentClass/*d*/ = View/*p*/({
            large: null,
            keyMirror/*small*/: null
        }),
        h = exports/*a*/.createClass({
            displayName: "FBSpinner",
            propTypes: {
                size: exports/*a*/.PropTypes.oneOf(Object.keys(createReactIOSNativeComponentClass/*d*/))
            },
            statics: {
                LARGE: createReactIOSNativeComponentClass/*d*/.large,
                SMALL: createReactIOSNativeComponentClass/*d*/.keyMirror/*small*/
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "FBActivityIndicatorView",
                validAttributes: NativeMethodsMixin/*s*/.UIView
            },
            getDefaultProps: function() {
                return {
                    size: createReactIOSNativeComponentClass/*d*/.keyMirror/*small*/
                }
            },
            render: function() {
                return exports/*a*/.createElement(ReactIOSViewAttributes/*u*/, {
                    style: [f.container, this.props.style]
                }, exports/*a*/.createElement(g, {
                    style: [m[this.props.size], f.transparent]
                }))
            }
        }),
        f = React/*l*/.create({
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
    m[createReactIOSNativeComponentClass/*d*/.large] = f.sizeLarge, m[createReactIOSNativeComponentClass/*d*/.keyMirror/*small*/] = f.sizeSmall;
    var g = StyleSheet/*c*/({
        validAttributes: NativeMethodsMixin/*s*/.UIView,
        uiViewClassName: "FBActivityIndicatorView"
    });
    module/*i*/.exports = h
});