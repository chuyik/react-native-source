__d("ModalFullscreenView",["NativeModulesDeprecated","React","ReactIOSViewAttributes","Dimensions","StyleSheet","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModulesDeprecated"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("Dimensions"),
        u = require/*t*/("StyleSheet"),
        c = require/*t*/("createReactIOSNativeComponentClass"),
        p = c({
            validAttributes: s.UIView,
            uiViewClassName: "RCTModalFullscreenView"
        }),
        d = u.create({
            modalContainer: {
                backgroundColor: "transparent",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }),
        h = a.createClass({
            displayName: "ModalFullscreenView",
            statics: {
                width: l.get("modalFullscreenView").width,
                height: l.get("modalFullscreenView").height,
                style: d.modalContainer
            },
            getInitialState: function() {
                return {
                    isOpen: !1
                }
            },
            open: function() {
                this.state.isOpen || (this.setState({
                    isOpen: !0
                }), o.RKModalFullscreenViewManager.open())
            },
            close: function() {
                this.state.isOpen && (this.setState({
                    isOpen: !1
                }), o.RKModalFullscreenViewManager.close())
            },
            render: function() {
                var global/*e*/ = {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: l.get("modalFullscreenView").width,
                    height: l.get("modalFullscreenView").height
                };
                return a.createElement(p, {
                    style: global/*e*/,
                    onStartShouldSetResponder: this._shouldSetResponder
                }, this.props.children)
            },
            _shouldSetResponder: function() {
                return !0
            }
        });
    module/*i*/.exports = h
});