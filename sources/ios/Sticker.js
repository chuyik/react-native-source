__d("Sticker",["ImageStylePropTypes","NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ImageStylePropTypes/*o*/ = require/*t*/("ImageStylePropTypes"),
        NativeMethodsMixin/*a*/ = require/*t*/("NativeMethodsMixin"),
        React/*s*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*l*/ = require/*t*/("ReactIOSViewAttributes"),
        u = (require/*t*/("StyleSheet"), require/*t*/("StyleSheetPropType")),
        createReactIOSNativeComponentClass/*c*/ = require/*t*/("createReactIOSNativeComponentClass"),
        merge/*p*/ = require/*t*/("merge"),
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
    module/*i*/.exports = d
});