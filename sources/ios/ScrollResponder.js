__d("ScrollResponder",["NativeModules","NativeModulesDeprecated","RCTDeviceEventEmitter","Subscribable","TextInputState","warning"],function (e, t, n, r, i) {
    "use strict";
    var NativeModules/*o*/ = t("NativeModules"),
        NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated"),
        RCTDeviceEventEmitter/*s*/ = t("RCTDeviceEventEmitter"),
        Subscribable/*l*/ = t("Subscribable"),
        TextInputState/*u*/ = t("TextInputState"),
        c = NativeModules/*o*/.RKUIManager,
        p = NativeModulesDeprecated/*a*/.RKUIManager,
        d = c.RCTScrollView.Constants,
        warning/*h*/ = t("warning"),
        f = 16,
        m = {
            mixins: [Subscribable/*l*/.Mixin],
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
            scrollResponderHandleStartShouldSetResponderCapture: function(e) {
                var t = TextInputState/*u*/.currentlyFocusedField();
                return this.props.keyboardShouldPersistTaps || null == t || e.target == t ? this.scrollResponderIsAnimating() : !0
            },
            scrollResponderHandleResponderReject: function() {
                warning/*h*/(!1, "ScrollView doesn't take rejection well - scrolls anyway")
            },
            scrollResponderHandleTerminationRequest: function() {
                return !this.state.observedScrollSinceBecomingResponder
            },
            scrollResponderHandleTouchEnd: function(e) {
                var t = e.nativeEvent;
                this.state.isTouching = 0 !== t.touches.length, this.props.onTouchEnd && this.props.onTouchEnd(e)
            },
            scrollResponderHandleResponderRelease: function(e) {
                this.props.onResponderRelease && this.props.onResponderRelease(e);
                var t = TextInputState/*u*/.currentlyFocusedField();
                this.props.keyboardShouldPersistTaps || null == t || e.target == t || this.state.observedScrollSinceBecomingResponder || this.state.becameResponderWhileAnimating || (this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e), TextInputState/*u*/.blurTextInput(t))
            },
            scrollResponderHandleScroll: function(e) {
                this.state.observedScrollSinceBecomingResponder = !0, this.props.onScroll && this.props.onScroll(e)
            },
            scrollResponderHandleResponderGrant: function(e) {
                this.state.observedScrollSinceBecomingResponder = !1, this.props.onResponderGrant && this.props.onResponderGrant(e), this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating()
            },
            scrollResponderHandleScrollBeginDrag: function(e) {
                this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e)
            },
            scrollResponderHandleScrollEndDrag: function(e) {
                this.props.onScrollEndDrag && this.props.onScrollEndDrag(e)
            },
            scrollResponderHandleMomentumScrollBegin: function(e) {
                this.state.lastMomentumScrollBeginTime = Date.now(), this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e)
            },
            scrollResponderHandleMomentumScrollEnd: function(e) {
                this.state.lastMomentumScrollEndTime = Date.now(), this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e)
            },
            scrollResponderHandleTouchStart: function(e) {
                this.state.isTouching = !0, this.props.onTouchStart && this.props.onTouchStart(e)
            },
            scrollResponderHandleTouchMove: function(e) {
                this.props.onTouchMove && this.props.onTouchMove(e)
            },
            scrollResponderIsAnimating: function() {
                var e = Date.now(),
                    t = e - this.state.lastMomentumScrollEndTime,
                    n = f > t || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
                return n
            },
            scrollResponderScrollTo: function(e, t) {
                p.scrollTo(this.getNodeHandle(), e, t)
            },
            scrollResponderZoomTo: function(e) {
                p.zoomToRect(this.getNodeHandle(), e)
            },
            scrollResponderScrollNativeHandleToKeyboard: function(e, t) {
                this.additionalScrollOffset = t || 0, c.measureLayout(e, this.getNodeHandle(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard)
            },
            scrollResponderInputMeasureAndScrollToKeyboard: function(e, t, n, r) {
                if (this.keyboardWillOpenTo) {
                    var i = t - this.keyboardWillOpenTo.endCoordinates.screenY + r + this.additionalScrollOffset;
                    this.scrollResponderScrollTo(0, i)
                }
                this.additionalOffset = 0
            },
            scrollResponderTextInputFocusError: function(e) {
                console.error("Error measuring text field: ", e)
            },
            componentWillMount: function() {
                this.keyboardWillOpenTo = null, this.additionalScrollOffset = 0, this.addListenerOn(RCTDeviceEventEmitter/*s*/, "keyboardWillShow", this.scrollResponderKeyboardWillShow), this.addListenerOn(RCTDeviceEventEmitter/*s*/, "keyboardWillHide", this.scrollResponderKeyboardWillHide), this.addListenerOn(RCTDeviceEventEmitter/*s*/, "keyboardDidShow", this.scrollResponderKeyboardDidShow), this.addListenerOn(RCTDeviceEventEmitter/*s*/, "keyboardDidHide", this.scrollResponderKeyboardDidHide)
            },
            scrollResponderKeyboardWillShow: function(e) {
                this.keyboardWillOpenTo = e, this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e)
            },
            scrollResponderKeyboardWillHide: function(e) {
                this.keyboardWillOpenTo = null, this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e)
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
    i.exports = g
});