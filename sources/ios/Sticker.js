__d("Sticker",["ImageStylePropTypes","NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","merge"],function (e, t, n, r, i) {
    "use strict";
    var ImageStylePropTypes/*o*/ = t("ImageStylePropTypes"),
        NativeMethodsMixin/*a*/ = t("NativeMethodsMixin"),
        React/*s*/ = t("React"),
        ReactIOSViewAttributes/*l*/ = t("ReactIOSViewAttributes"),
        u = (t("StyleSheet"), t("StyleSheetPropType")),
        createReactIOSNativeComponentClass/*c*/ = t("createReactIOSNativeComponentClass"),
        merge/*p*/ = t("merge"),
        d = React/*s*/.createClass({
            displayName: "Sticker",
            propTypes: {
                fbid: React/*s*/.PropTypes.string.isRequired,
                style: u(ImageStylePropTypes/*o*/)
            },
            mixins: [NativeMethodsMixin/*a*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: ReactIOSViewAttributes/*l*/.UIView
            },
            render: function() {
                return React/*s*/.createElement(h, {
                    stickerFBID: this.props.fbid,
                    style: this.props.style
                })
            }
        }),
        h = createReactIOSNativeComponentClass/*c*/({
            validAttributes: merge/*p*/(ReactIOSViewAttributes/*l*/.UIView, {
                stickerFBID: !0
            }),
            uiViewClassName: "RCTStickerView"
        });
    i.exports = d
});