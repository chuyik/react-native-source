__d("FBStickerInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","View","createReactIOSNativeComponentClass"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*l*/ = t("StyleSheet"),
        u = (t("View"), t("createReactIOSNativeComponentClass")),
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
            onStickerSelect: function(e) {
                this.props.onStickerSelect && this.props.onStickerSelect(e)
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
    i.exports = c
});