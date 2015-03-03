__d("ModalFullscreenView",["NativeModulesDeprecated","React","ReactIOSViewAttributes","Dimensions","StyleSheet","createReactIOSNativeComponentClass"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModulesDeprecated"),
        exports/*a*/ = require/*t*/("React"),
        NativeModulesDeprecated/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*t*/("Dimensions"),
        ReactIOSViewAttributes/*u*/ = require/*t*/("StyleSheet"),
        Dimensions/*c*/ = require/*t*/("createReactIOSNativeComponentClass"),
        StyleSheet/*p*/ = Dimensions/*c*/({
            validAttributes: NativeModulesDeprecated/*s*/.UIView,
            createReactIOSNativeComponentClass/*uiViewClassName*/: "RCTModalFullscreenView"
        }),
        d = ReactIOSViewAttributes/*u*/.create({
            modalContainer: {
                backgroundColor: "transparent",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }),
        h = exports/*a*/.createClass({
            displayName: "ModalFullscreenView",
            statics: {
                width: React/*l*/.get("modalFullscreenView").width,
                height: React/*l*/.get("modalFullscreenView").height,
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
                    width: React/*l*/.get("modalFullscreenView").width,
                    height: React/*l*/.get("modalFullscreenView").height
                };
                return exports/*a*/.createElement(StyleSheet/*p*/, {
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