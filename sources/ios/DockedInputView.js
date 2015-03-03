__d("DockedInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("createReactIOSNativeComponentClass"),
        u = a.createClass({
            displayName: "DockedInputView",
            mixins: [o],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: s.UIView
            },
            render: function() {
                return a.createElement(c, Object.assign({}, this.props))
            }
        }),
        c = l({
            validAttributes: s.UIView,
            uiViewClassName: "RCTDockedInputView"
        });
    module/*i*/.exports = u
});