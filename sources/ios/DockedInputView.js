__d("DockedInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","createReactIOSNativeComponentClass"],function (e, t, n, r, i) {
    "use strict";
    var NativeMethodsMixin/*o*/ = t("NativeMethodsMixin"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        createReactIOSNativeComponentClass/*l*/ = t("createReactIOSNativeComponentClass"),
        u = React/*a*/.createClass({
            displayName: "DockedInputView",
            mixins: [NativeMethodsMixin/*o*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: ReactIOSViewAttributes/*s*/.UIView
            },
            render: function() {
                return React/*a*/.createElement(c, Object.assign({}, this.props))
            }
        }),
        c = createReactIOSNativeComponentClass/*l*/({
            validAttributes: ReactIOSViewAttributes/*s*/.UIView,
            uiViewClassName: "RCTDockedInputView"
        });
    i.exports = u
});