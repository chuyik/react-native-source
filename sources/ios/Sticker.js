__d("Sticker",["ImageStylePropTypes","NativeMethodsMixin","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ImageStylePropTypes"),
        a = require/*t*/("NativeMethodsMixin"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactIOSViewAttributes"),
        u = (require/*t*/("StyleSheet"), require/*t*/("StyleSheetPropType")),
        c = require/*t*/("createReactIOSNativeComponentClass"),
        p = require/*t*/("merge"),
        d = s.createClass({
            displayName: "Sticker",
            propTypes: {
                fbid: s.PropTypes.string.isRequired,
                style: u(o)
            },
            mixins: [a],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: l.UIView
            },
            render: function() {
                return s.createElement(h, {
                    stickerFBID: this.props.fbid,
                    style: this.props.style
                })
            }
        }),
        h = c({
            validAttributes: p(l.UIView, {
                stickerFBID: !0
            }),
            uiViewClassName: "RCTStickerView"
        });
    module/*i*/.exports = d
});