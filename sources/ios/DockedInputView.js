__d("DockedInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeMethodsMixin/*o*/ = require/*t*/("NativeMethodsMixin"),
        React/*a*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        createReactIOSNativeComponentClass/*l*/ = require/*t*/("createReactIOSNativeComponentClass"),
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
    module/*i*/.exports = u
});