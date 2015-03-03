__d("FBStickerInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("StyleSheet"),
        u = (require/*t*/("View"), require/*t*/("createReactIOSNativeComponentClass")),
        c = a.createClass({
            displayName: "FBStickerInputView",
            propTypes: {
                onStickerSelect: a.PropTypes.func
            },
            mixins: [o],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: s.UIView
            },
            onStickerSelect: function(global/*e*/) {
                this.props.onStickerSelect && this.props.onStickerSelect(global/*e*/)
            },
            render: function() {
                return a.createElement(d, {
                    style: p.inputViewStyle,
                    onStickerSelect: this.onStickerSelect
                })
            }
        }),
        p = l.create({
            inputViewStyle: {
                position: "absolute",
                backgroundColor: "#f8f8f8"
            }
        }),
        d = u({
            validAttributes: s.UIView,
            uiViewClassName: "RCTStickerInputView"
        });
    module/*i*/.exports = c
});