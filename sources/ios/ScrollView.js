__d("ScrollView",["ArrayOfPropType","React","ReactIOSViewAttributes","ReactIOSTagHandles","NativeModules","NativeModulesDeprecated","ScrollResponder","ScrollViewPropTypes","StyleSheetPropType","StyleSheet","View","ViewStylePropTypes","createReactIOSNativeComponentClass","flattenStyle","invariant","merge","nativePropType","validAttributesFromPropTypes","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ArrayOfPropType"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactIOSViewAttributes"),
        l = require/*t*/("ReactIOSTagHandles"),
        u = require/*t*/("NativeModules").RKUIManager.RCTScrollView,
        c = u.Constants,
        p = require/*t*/("NativeModulesDeprecated").RKUIManager,
        d = require/*t*/("ScrollResponder"),
        h = require/*t*/("ScrollViewPropTypes"),
        f = require/*t*/("StyleSheetPropType"),
        m = require/*t*/("StyleSheet"),
        g = require/*t*/("View"),
        _ = require/*t*/("ViewStylePropTypes"),
        y = require/*t*/("createReactIOSNativeComponentClass"),
        v = require/*t*/("flattenStyle"),
        S = require/*t*/("invariant"),
        b = require/*t*/("merge"),
        R = require/*t*/("nativePropType"),
        w = require/*t*/("validAttributesFromPropTypes"),
        C = require/*t*/("warning"),
        E = a.PropTypes,
        D = "ScrollView",
        T = "InnerScrollView",
        x = b(h, {
            alwaysBounceHorizontal: R(E.bool),
            alwaysBounceVertical: R(E.bool),
            centerContent: R(E.bool),
            contentContainerStyle: f(_),
            decelerationRate: R(E.number),
            horizontal: E.bool,
            keyboardDismissMode: R(E.oneOf([c.KeyboardDismissMode.None, c.KeyboardDismissMode.Interactive, c.KeyboardDismissMode.OnDrag])),
            keyboardShouldPersistTaps: R(E.bool),
            maximumZoomScale: R(E.number),
            minimumZoomScale: R(E.number),
            pagingEnabled: R(E.bool),
            scrollsToTop: R(E.bool),
            stickyHeaderIndices: R(o(E.number)),
            removeClippedSubviews: E.bool,
            zoomScale: R(E.number)
        }),
        P = a.createClass({
            displayName: "ScrollView",
            statics: {
                PropTypes: x,
                keyboardDismissMode: c.KeyboardDismissMode
            },
            propTypes: x,
            mixins: [d.Mixin],
            getInitialState: function() {
                return this.scrollResponderMixinGetInitialState()
            },
            setNativeProps: function(global/*e*/) {
                this.refs[D].setNativeProps(global/*e*/)
            },
            getInnerViewNode: function() {
                return this.refs[T].getNodeHandle()
            },
            scrollTo: function(global/*e*/, require/*t*/) {
                p.scrollTo(l.rootNodeIDToTag[this._rootNodeID], require/*t*/, global/*e*/)
            },
            render: function() {
                var global/*e*/ = [this.props.horizontal && I.contentContainerHorizontal, this.props.contentContainerStyle];
                if (__DEV__ && this.props.style) {
                    var require/*t*/ = v(this.props.style),
                        requireDynamic/*n*/ = ["alignItems", "justifyContent"].filter(function(global/*e*/) {
                            return void 0 !== require/*t*/[global/*e*/]
                        });
                    0 !== requireDynamic/*n*/.length && S(0, "ScrollView child layout (" + JSON.stringify(requireDynamic/*n*/) + ") must by applied through the contentContainerStyle prop.")
                }
                __DEV__ && C(this.props.onScroll && !this.props.throttleScrollCallbackMS, "You specified `onScroll` on a <ScrollView> but not `throttleScrollCallbackMS`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use a bigger number if you don'require/*t*/ need as much precision.");
                var requireLazy/*r*/ = a.createElement(g, {
                        ref: T,
                        style: global/*e*/,
                        removeClippedSubviews: this.props.removeClippedSubviews
                    }, this.props.children),
                    module/*i*/ = void 0 !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
                    o = void 0 !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
                    s = b(this.props, {
                        alwaysBounceHorizontal: module/*i*/,
                        alwaysBounceVertical: o,
                        style: [I.base, this.props.style],
                        onTouchStart: this.scrollResponderHandleTouchStart,
                        onTouchMove: this.scrollResponderHandleTouchMove,
                        onTouchEnd: this.scrollResponderHandleTouchEnd,
                        onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
                        onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
                        onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
                        onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
                        onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
                        onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
                        onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
                        onScroll: this.scrollResponderHandleScroll,
                        onResponderGrant: this.scrollResponderHandleResponderGrant,
                        onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
                        onResponderTerminate: this.scrollResponderHandleTerminate,
                        onResponderRelease: this.scrollResponderHandleResponderRelease,
                        onResponderReject: this.scrollResponderHandleResponderReject
                    });
                return a.createElement(u, Object.assign({}, s, {
                    ref: D
                }), requireLazy/*r*/)
            }
        }),
        I = m.create({
            base: {
                flex: 1
            },
            contentContainerHorizontal: {
                alignSelf: "flex-start",
                flexDirection: "row"
            }
        }),
        u = y({
            validAttributes: b(s.UIView, w(P.propTypes)),
            uiViewClassName: "RCTScrollView"
        });
    module/*i*/.exports = P
});