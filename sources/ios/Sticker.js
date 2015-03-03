__d("Sticker",["ImageStylePropTypes","NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","merge"],function (global/*e*/, require/*ReactIOSViewAttributes/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*ReactIOSViewAttributes/*t*/*/("ImageStylePropTypes"),
        exports/*a*/ = require/*ReactIOSViewAttributes/*t*/*/("NativeMethodsMixin"),
        ImageStylePropTypes/*s*/ = require/*ReactIOSViewAttributes/*t*/*/("React"),
        NativeMethodsMixin/*l*/ = require/*ReactIOSViewAttributes/*t*/*/("ReactIOSViewAttributes"),
        React/*u*/ = (require/*ReactIOSViewAttributes/*t*/*/("StyleSheet"), require/*ReactIOSViewAttributes/*t*/*/("StyleSheetPropType")),
        StyleSheet/*c*/ = require/*ReactIOSViewAttributes/*t*/*/("createReactIOSNativeComponentClass"),
        StyleSheetPropType/*p*/ = require/*ReactIOSViewAttributes/*t*/*/("merge"),
        createReactIOSNativeComponentClass/*d*/ = ImageStylePropTypes/*s*/.createClass({
            displayName: "Sticker",
            merge/*propTypes*/: {
                fbid: ImageStylePropTypes/*s*/.PropTypes.string.isRequired,
                style: React/*u*/(o)
            },
            mixins: [exports/*a*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: NativeMethodsMixin/*l*/.UIView
            },
            render: function() {
                return ImageStylePropTypes/*s*/.createElement(h, {
                    stickerFBID: this.props.fbid,
                    style: this.props.style
                })
            }
        }),
        h = StyleSheet/*c*/({
            validAttributes: StyleSheetPropType/*p*/(NativeMethodsMixin/*l*/.UIView, {
                stickerFBID: !0
            }),
            uiViewClassName: "RCTStickerView"
        });
    module/*i*/.exports = createReactIOSNativeComponentClass/*d*/
});