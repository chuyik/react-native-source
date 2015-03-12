__d("ScrollView",["ArrayOfPropType","React","ReactIOSViewAttributes","ReactIOSTagHandles","NativeModules","NativeModulesDeprecated","ScrollResponder","ScrollViewPropTypes","StyleSheetPropType","StyleSheet","View","ViewStylePropTypes","createReactIOSNativeComponentClass","flattenStyle","invariant","merge","nativePropType","validAttributesFromPropTypes","warning"],function (e, t, n, r, i) {
    "use strict";
    var ArrayOfPropType/*o*/ = t("ArrayOfPropType"),
        React/*a*/ = t("React"),
        ReactIOSViewAttributes/*s*/ = t("ReactIOSViewAttributes"),
        ReactIOSTagHandles/*l*/ = t("ReactIOSTagHandles"),
        NativeModules/*u*/ = t("NativeModules").RKUIManager.RCTScrollView,
        c = NativeModules/*u*/.Constants,
        NativeModulesDeprecated/*p*/ = t("NativeModulesDeprecated").RKUIManager,
        ScrollResponder/*d*/ = t("ScrollResponder"),
        ScrollViewPropTypes/*h*/ = t("ScrollViewPropTypes"),
        StyleSheetPropType/*f*/ = t("StyleSheetPropType"),
        StyleSheet/*m*/ = t("StyleSheet"),
        View/*g*/ = t("View"),
        ViewStylePropTypes/*_*/ = t("ViewStylePropTypes"),
        createReactIOSNativeComponentClass/*y*/ = t("createReactIOSNativeComponentClass"),
        flattenStyle/*v*/ = t("flattenStyle"),
        invariant/*S*/ = t("invariant"),
        merge/*b*/ = t("merge"),
        nativePropType/*R*/ = t("nativePropType"),
        validAttributesFromPropTypes/*w*/ = t("validAttributesFromPropTypes"),
        warning/*C*/ = t("warning"),
        E = React/*a*/.PropTypes,
        D = "ScrollView",
        T = "InnerScrollView",
        x = merge/*b*/(ScrollViewPropTypes/*h*/, {
            alwaysBounceHorizontal: nativePropType/*R*/(E.bool),
            alwaysBounceVertical: nativePropType/*R*/(E.bool),
            centerContent: nativePropType/*R*/(E.bool),
            contentContainerStyle: StyleSheetPropType/*f*/(ViewStylePropTypes/*_*/),
            decelerationRate: nativePropType/*R*/(E.number),
            horizontal: E.bool,
            keyboardDismissMode: nativePropType/*R*/(E.oneOf([c.KeyboardDismissMode.None, c.KeyboardDismissMode.Interactive, c.KeyboardDismissMode.OnDrag])),
            keyboardShouldPersistTaps: nativePropType/*R*/(E.bool),
            maximumZoomScale: nativePropType/*R*/(E.number),
            minimumZoomScale: nativePropType/*R*/(E.number),
            pagingEnabled: nativePropType/*R*/(E.bool),
            scrollsToTop: nativePropType/*R*/(E.bool),
            stickyHeaderIndices: nativePropType/*R*/(ArrayOfPropType/*o*/(E.number)),
            removeClippedSubviews: E.bool,
            zoomScale: nativePropType/*R*/(E.number)
        }),
        P = React/*a*/.createClass({
            displayName: "ScrollView",
            statics: {
                PropTypes: x,
                keyboardDismissMode: c.KeyboardDismissMode
            },
            propTypes: x,
            mixins: [ScrollResponder/*d*/.Mixin],
            getInitialState: function() {
                return this.scrollResponderMixinGetInitialState()
            },
            setNativeProps: function(e) {
                this.refs[D].setNativeProps(e)
            },
            getInnerViewNode: function() {
                return this.refs[T].getNodeHandle()
            },
            scrollTo: function(e, t) {
                NativeModulesDeprecated/*p*/.scrollTo(ReactIOSTagHandles/*l*/.rootNodeIDToTag[this._rootNodeID], t, e)
            },
            render: function() {
                var e = [this.props.horizontal && I.contentContainerHorizontal, this.props.contentContainerStyle];
                if (__DEV__ && this.props.style) {
                    var t = flattenStyle/*v*/(this.props.style),
                        n = ["alignItems", "justifyContent"].filter(function(e) {
                            return void 0 !== t[e]
                        });
                    0 !== n.length && invariant/*S*/(0, "ScrollView child layout (" + JSON.stringify(n) + ") must by applied through the contentContainerStyle prop.")
                }
                __DEV__ && warning/*C*/(this.props.onScroll && !this.props.throttleScrollCallbackMS, "You specified `onScroll` on React/*a*/ <ScrollView> but not `throttleScrollCallbackMS`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use React/*a*/ bigger number if you don't need as much precision.");
                var r = React/*a*/.createElement(View/*g*/, {
                        ref: T,
                        style: e,
                        removeClippedSubviews: this.props.removeClippedSubviews
                    }, this.props.children),
                    i = void 0 !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
                    ArrayOfPropType/*o*/ = void 0 !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
                    ReactIOSViewAttributes/*s*/ = merge/*b*/(this.props, {
                        alwaysBounceHorizontal: i,
                        alwaysBounceVertical: ArrayOfPropType/*o*/,
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
                return React/*a*/.createElement(NativeModules/*u*/, Object.assign({}, ReactIOSViewAttributes/*s*/, {
                    ref: D
                }), r)
            }
        }),
        I = StyleSheet/*m*/.create({
            base: {
                flex: 1
            },
            contentContainerHorizontal: {
                alignSelf: "flex-start",
                flexDirection: "row"
            }
        }),
        NativeModules/*u*/ = createReactIOSNativeComponentClass/*y*/({
            validAttributes: merge/*b*/(ReactIOSViewAttributes/*s*/.UIView, validAttributesFromPropTypes/*w*/(P.propTypes)),
            uiViewClassName: "RCTScrollView"
        });
    i.exports = P
});