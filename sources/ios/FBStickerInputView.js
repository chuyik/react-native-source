__d("FBStickerInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        React/*a*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        u = (require/*t*/("View"), require/*t*/("createReactIOSNativeComponentClass")),
        c = React/*a*/.createClass({
            displayName: "FBStickerInputView",
            propTypes: {
                onStickerSelect: React/*a*/.PropTypes.func
            },
            mixins: [NativeMethodsMixin/*o*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: ReactIOSViewAttributes/*s*/.UIView
            },
            onStickerSelect: function(global/*e*/) {
                this.props.onStickerSelect && this.props.onStickerSelect(global/*e*/)
            },
            render: function() {
                return React/*a*/.createElement(d, {
                    style: p.inputViewStyle,
                    onStickerSelect: this.onStickerSelect
                })
            }
        }),
        p = StyleSheet/*l*/.create({
            inputViewStyle: {
                position: "absolute",
                backgroundColor: "#f8f8f8"
            }
        }),
        d = u({
            validAttributes: ReactIOSViewAttributes/*s*/.UIView,
            uiViewClassName: "RCTStickerInputView"
        });
    module/*i*/.exports = c
});