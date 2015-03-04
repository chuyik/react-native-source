__d("ScrollView",["ArrayOfPropType","React","ReactIOSViewAttributes","ReactIOSTagHandles","NativeModules","NativeModulesDeprecated","ScrollResponder","ScrollViewPropTypes","StyleSheetPropType","StyleSheet","View","ViewStylePropTypes","createReactIOSNativeComponentClass","flattenStyle","invariant","merge","nativePropType","validAttributesFromPropTypes","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ArrayOfPropType/*o*/ = require/*t*/("ArrayOfPropType"),
        React/*a*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        ReactIOSTagHandles/*l*/ = require/*t*/("ReactIOSTagHandles"),
        NativeModules/*u*/ = require/*t*/("NativeModules").RKUIManager.RCTScrollView,
        c = NativeModules/*u*/.Constants,
        NativeModulesDeprecated/*p*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        ScrollResponder/*d*/ = require/*t*/("ScrollResponder"),
        ScrollViewPropTypes/*h*/ = require/*t*/("ScrollViewPropTypes"),
        StyleSheetPropType/*f*/ = require/*t*/("StyleSheetPropType"),
        StyleSheet/*m*/ = require/*t*/("StyleSheet"),
        View/*g*/ = require/*t*/("View"),
        ViewStylePropTypes/*_*/ = require/*t*/("ViewStylePropTypes"),
        createReactIOSNativeComponentClass/*y*/ = require/*t*/("createReactIOSNativeComponentClass"),
        flattenStyle/*v*/ = require/*t*/("flattenStyle"),
        invariant/*S*/ = require/*t*/("invariant"),
        merge/*b*/ = require/*t*/("merge"),
        nativePropType/*R*/ = require/*t*/("nativePropType"),
        validAttributesFromPropTypes/*w*/ = require/*t*/("validAttributesFromPropTypes"),
        warning/*C*/ = require/*t*/("warning"),
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
            setNativeProps: function(global/*e*/) {
                this.refs[D].setNativeProps(global/*e*/)
            },
            getInnerViewNode: function() {
                return this.refs[T].getNodeHandle()
            },
            scrollTo: function(global/*e*/, require/*t*/) {
                NativeModulesDeprecated/*p*/.scrollTo(ReactIOSTagHandles/*l*/.rootNodeIDToTag[this._rootNodeID], require/*t*/, global/*e*/)
            },
            render: function() {
                var global/*e*/ = [this.props.horizontal && I.contentContainerHorizontal, this.props.contentContainerStyle];
                if (__DEV__ && this.props.style) {
                    var require/*t*/ = flattenStyle/*v*/(this.props.style),
                        requireDynamic/*n*/ = ["alignItems", "justifyContent"].filter(function(global/*e*/) {
                            return void 0 !== require/*t*/[global/*e*/]
                        });
                    0 !== requireDynamic/*n*/.length && invariant/*S*/(0, "ScrollView child layout (" + JSON.stringify(requireDynamic/*n*/) + ") must by applied through the contentContainerStyle prop.")
                }
                __DEV__ && warning/*C*/(this.props.onScroll && !this.props.throttleScrollCallbackMS, "You specified `onScroll` on React/*a*/ <ScrollView> but not `throttleScrollCallbackMS`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use React/*a*/ bigger number if you don'require/*t*/ need as much precision.");
                var requireLazy/*r*/ = React/*a*/.createElement(View/*g*/, {
                        ref: T,
                        style: global/*e*/,
                        removeClippedSubviews: this.props.removeClippedSubviews
                    }, this.props.children),
                    module/*i*/ = void 0 !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
                    ArrayOfPropType/*o*/ = void 0 !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
                    ReactIOSViewAttributes/*s*/ = merge/*b*/(this.props, {
                        alwaysBounceHorizontal: module/*i*/,
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
                }), requireLazy/*r*/)
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
    module/*i*/.exports = P
});