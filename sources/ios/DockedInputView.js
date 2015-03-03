__d("DockedInputView",["NativeMethodsMixin","React","ReactIOSViewAttributes","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeMethodsMixin"),
        exports/*a*/ = require/*t*/("React"),
        NativeMethodsMixin/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*t*/("createReactIOSNativeComponentClass"),
        ReactIOSViewAttributes/*u*/ = exports/*a*/.createClass({
            displayName: "DockedInputView",
            createReactIOSNativeComponentClass/*mixins*/: [o],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: NativeMethodsMixin/*s*/.UIView
            },
            render: function() {
                return exports/*a*/.createElement(c, Object.assign({}, this.props))
            }
        }),
        c = React/*l*/({
            validAttributes: NativeMethodsMixin/*s*/.UIView,
            uiViewClassName: "RCTDockedInputView"
        });
    module/*i*/.exports = ReactIOSViewAttributes/*u*/
});