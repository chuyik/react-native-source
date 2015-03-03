__d("FBStickerInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass"],function (global/*e*/, require/*StyleSheet/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*StyleSheet/*t*/*/("NativeMethodsMixin"),
        exports/*a*/ = require/*StyleSheet/*t*/*/("React"),
        NativeMethodsMixin/*s*/ = require/*StyleSheet/*t*/*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*StyleSheet/*t*/*/("StyleSheet"),
        ReactIOSViewAttributes/*u*/ = (require/*StyleSheet/*t*/*/("View"), require/*StyleSheet/*t*/*/("createReactIOSNativeComponentClass")),
        View/*c*/ = exports/*a*/.createClass({
            displayName: "FBStickerInputView",
            createReactIOSNativeComponentClass/*propTypes*/: {
                onStickerSelect: exports/*a*/.PropTypes.func
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: NativeMethodsMixin/*s*/.UIView
            },
            onStickerSelect: function(global/*e*/) {
                this.props.onStickerSelect && this.props.onStickerSelect(global/*e*/)
            },
            render: function() {
                return exports/*a*/.createElement(d, {
                    style: p.inputViewStyle,
                    onStickerSelect: this.onStickerSelect
                })
            }
        }),
        p = React/*l*/.create({
            inputViewStyle: {
                position: "absolute",
                backgroundColor: "#f8f8f8"
            }
        }),
        d = ReactIOSViewAttributes/*u*/({
            validAttributes: NativeMethodsMixin/*s*/.UIView,
            uiViewClassName: "RCTStickerInputView"
        });
    module/*i*/.exports = View/*c*/
});