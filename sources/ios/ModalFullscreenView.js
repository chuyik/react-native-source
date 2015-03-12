__d("ModalFullscreenView",["NativeModulesDeprecated","React","ReactIOSViewAttributes","Dimensions","StyleSheet","createReactIOSNativeComponentClass"],function (e, t, n, r, i) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = t("NativeModulesDeprecated"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        Dimensions/*l*/ = t("Dimensions"),
        StyleSheet/*u*/ = t("StyleSheet"),
        createReactIOSNativeComponentClass/*c*/ = t("createReactIOSNativeComponentClass"),
        p = createReactIOSNativeComponentClass/*c*/({
            validAttributes: ReactIOSViewAttributes/*s*/.UIView,
            uiViewClassName: "RCTModalFullscreenView"
        }),
        d = StyleSheet/*u*/.create({
            modalContainer: {
                backgroundColor: "transparent",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }),
        h = React/*a*/.createClass({
            displayName: "ModalFullscreenView",
            statics: {
                width: Dimensions/*l*/.get("modalFullscreenView").width,
                height: Dimensions/*l*/.get("modalFullscreenView").height,
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
                }), NativeModulesDeprecated/*o*/.RKModalFullscreenViewManager.open())
            },
            close: function() {
                this.state.isOpen && (this.setState({
                    isOpen: !1
                }), NativeModulesDeprecated/*o*/.RKModalFullscreenViewManager.close())
            },
            render: function() {
                var e = {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: Dimensions/*l*/.get("modalFullscreenView").width,
                    height: Dimensions/*l*/.get("modalFullscreenView").height
                };
                return React/*a*/.createElement(p, {
                    style: e,
                    onStartShouldSetResponder: this._shouldSetResponder
                }, this.props.children)
            },
            _shouldSetResponder: function() {
                return !0
            }
        });
    i.exports = h
});