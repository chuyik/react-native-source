__d("ScrollResponder",["NativeModules","NativeModulesDeprecated","RCTDeviceEventEmitter","Subscribable","TextInputState","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModules"),
        a = require/*t*/("NativeModulesDeprecated"),
        s = require/*t*/("RCTDeviceEventEmitter"),
        l = require/*t*/("Subscribable"),
        u = require/*t*/("TextInputState"),
        c = o.RKUIManager,
        p = a.RKUIManager,
        d = c.RCTScrollView.Constants,
        h = require/*t*/("warning"),
        f = 16,
        m = {
            mixins: [l.Mixin],
            statics: d,
            scrollResponderMixinGetInitialState: function() {
                return {
                    isTouching: !1,
                    lastMomentumScrollBeginTime: 0,
                    lastMomentumScrollEndTime: 0,
                    observedScrollSinceBecomingResponder: !1,
                    becameResponderWhileAnimating: !1
                }
            },
            scrollResponderHandleScrollShouldSetResponder: function() {
                return this.state.isTouching
            },
            scrollResponderHandleStartShouldSetResponder: function() {
                return !1
            },
            scrollResponderHandleStartShouldSetResponderCapture: function(global/*e*/) {
                var require/*t*/ = u.currentlyFocusedField();
                return this.props.keyboardShouldPersistTaps || null == require/*t*/ || global/*e*/.target == require/*t*/ ? this.scrollResponderIsAnimating() : !0
            },
            scrollResponderHandleResponderReject: function() {
                h(!1, "ScrollView doesn'require/*t*/ take rejection well - scrolls anyway")
            },
            scrollResponderHandleTerminationRequest: function() {
                return !this.state.observedScrollSinceBecomingResponder
            },
            scrollResponderHandleTouchEnd: function(global/*e*/) {
                var require/*t*/ = global/*e*/.nativeEvent;
                this.state.isTouching = 0 !== require/*t*/.touches.length, this.props.onTouchEnd && this.props.onTouchEnd(global/*e*/)
            },
            scrollResponderHandleResponderRelease: function(global/*e*/) {
                this.props.onResponderRelease && this.props.onResponderRelease(global/*e*/);
                var require/*t*/ = u.currentlyFocusedField();
                this.props.keyboardShouldPersistTaps || null == require/*t*/ || global/*e*/.target == require/*t*/ || this.state.observedScrollSinceBecomingResponder || this.state.becameResponderWhileAnimating || (this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(global/*e*/), u.blurTextInput(require/*t*/))
            },
            scrollResponderHandleScroll: function(global/*e*/) {
                this.state.observedScrollSinceBecomingResponder = !0, this.props.onScroll && this.props.onScroll(global/*e*/)
            },
            scrollResponderHandleResponderGrant: function(global/*e*/) {
                this.state.observedScrollSinceBecomingResponder = !1, this.props.onResponderGrant && this.props.onResponderGrant(global/*e*/), this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating()
            },
            scrollResponderHandleScrollBeginDrag: function(global/*e*/) {
                this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(global/*e*/)
            },
            scrollResponderHandleScrollEndDrag: function(global/*e*/) {
                this.props.onScrollEndDrag && this.props.onScrollEndDrag(global/*e*/)
            },
            scrollResponderHandleMomentumScrollBegin: function(global/*e*/) {
                this.state.lastMomentumScrollBeginTime = Date.now(), this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(global/*e*/)
            },
            scrollResponderHandleMomentumScrollEnd: function(global/*e*/) {
                this.state.lastMomentumScrollEndTime = Date.now(), this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(global/*e*/)
            },
            scrollResponderHandleTouchStart: function(global/*e*/) {
                this.state.isTouching = !0, this.props.onTouchStart && this.props.onTouchStart(global/*e*/)
            },
            scrollResponderHandleTouchMove: function(global/*e*/) {
                this.props.onTouchMove && this.props.onTouchMove(global/*e*/)
            },
            scrollResponderIsAnimating: function() {
                var global/*e*/ = Date.now(),
                    require/*t*/ = global/*e*/ - this.state.lastMomentumScrollEndTime,
                    requireDynamic/*n*/ = f > require/*t*/ || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
                return requireDynamic/*n*/
            },
            scrollResponderScrollTo: function(global/*e*/, require/*t*/) {
                p.scrollTo(this.getNodeHandle(), global/*e*/, require/*t*/)
            },
            scrollResponderZoomTo: function(global/*e*/) {
                p.zoomToRect(this.getNodeHandle(), global/*e*/)
            },
            scrollResponderScrollNativeHandleToKeyboard: function(global/*e*/, require/*t*/) {
                this.additionalScrollOffset = require/*t*/ || 0, c.measureLayout(global/*e*/, this.getNodeHandle(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard)
            },
            scrollResponderInputMeasureAndScrollToKeyboard: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                if (this.keyboardWillOpenTo) {
                    var module/*i*/ = require/*t*/ - this.keyboardWillOpenTo.endCoordinates.screenY + requireLazy/*r*/ + this.additionalScrollOffset;
                    this.scrollResponderScrollTo(0, module/*i*/)
                }
                this.additionalOffset = 0
            },
            scrollResponderTextInputFocusError: function(global/*e*/) {
                console.error("Error measuring text field: ", global/*e*/)
            },
            componentWillMount: function() {
                this.keyboardWillOpenTo = null, this.additionalScrollOffset = 0, this.addListenerOn(s, "keyboardWillShow", this.scrollResponderKeyboardWillShow), this.addListenerOn(s, "keyboardWillHide", this.scrollResponderKeyboardWillHide), this.addListenerOn(s, "keyboardDidShow", this.scrollResponderKeyboardDidShow), this.addListenerOn(s, "keyboardDidHide", this.scrollResponderKeyboardDidHide)
            },
            scrollResponderKeyboardWillShow: function(global/*e*/) {
                this.keyboardWillOpenTo = global/*e*/, this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(global/*e*/)
            },
            scrollResponderKeyboardWillHide: function(global/*e*/) {
                this.keyboardWillOpenTo = null, this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(global/*e*/)
            },
            scrollResponderKeyboardDidShow: function() {
                this.keyboardWillOpenTo = null, this.props.onKeyboardDidShow && this.props.onKeyboardDidShow()
            },
            scrollResponderKeyboardDidHide: function() {
                this.keyboardWillOpenTo = null, this.props.onKeyboardDidHide && this.props.onKeyboardDidHide()
            }
        },
        g = {
            Mixin: m
        };
    module/*i*/.exports = g
});