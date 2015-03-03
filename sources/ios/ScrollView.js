__d("ScrollView",["ArrayOfPropType","React","ReactIOSViewAttributes","ReactIOSTagHandles","NativeModules","NativeModulesDeprecated","ScrollResponder","ScrollViewPropTypes","StyleSheetPropType","StyleSheet","View","ViewStylePropTypes","createReactIOSNativeComponentClass","flattenStyle","invariant","merge","nativePropType","validAttributesFromPropTypes","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ArrayOfPropType"),
        exports/*a*/ = require/*t*/("React"),
        ArrayOfPropType/*s*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*l*/ = require/*t*/("ReactIOSTagHandles"),
        ReactIOSViewAttributes/*u*/ = require/*t*/("NativeModules").RKUIManager.RCTScrollView,
        ReactIOSTagHandles/*c*/ = ReactIOSViewAttributes/*u*/.Constants,
        NativeModules/*p*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        NativeModulesDeprecated/*d*/ = require/*t*/("ScrollResponder"),
        ScrollResponder/*h*/ = require/*t*/("ScrollViewPropTypes"),
        ScrollViewPropTypes/*f*/ = require/*t*/("StyleSheetPropType"),
        StyleSheetPropType/*m*/ = require/*t*/("StyleSheet"),
        StyleSheet/*g*/ = require/*t*/("View"),
        View/*_*/ = require/*t*/("ViewStylePropTypes"),
        ViewStylePropTypes/*y*/ = require/*t*/("createReactIOSNativeComponentClass"),
        createReactIOSNativeComponentClass/*v*/ = require/*t*/("flattenStyle"),
        flattenStyle/*S*/ = require/*t*/("invariant"),
        invariant/*b*/ = require/*t*/("merge"),
        merge/*R*/ = require/*t*/("nativePropType"),
        nativePropType/*w*/ = require/*t*/("validAttributesFromPropTypes"),
        validAttributesFromPropTypes/*C*/ = require/*t*/("warning"),
        warning/*E*/ = exports/*a*/.PropTypes,
        D = "ScrollView",
        T = "InnerScrollView",
        x = invariant/*b*/(ScrollResponder/*h*/, {
            alwaysBounceHorizontal: merge/*R*/(warning/*E*/.bool),
            alwaysBounceVertical: merge/*R*/(warning/*E*/.bool),
            centerContent: merge/*R*/(warning/*E*/.bool),
            contentContainerStyle: ScrollViewPropTypes/*f*/(View/*_*/),
            decelerationRate: merge/*R*/(warning/*E*/.number),
            horizontal: warning/*E*/.bool,
            keyboardDismissMode: merge/*R*/(warning/*E*/.oneOf([ReactIOSTagHandles/*c*/.KeyboardDismissMode.None, ReactIOSTagHandles/*c*/.KeyboardDismissMode.Interactive, ReactIOSTagHandles/*c*/.KeyboardDismissMode.OnDrag])),
            keyboardShouldPersistTaps: merge/*R*/(warning/*E*/.bool),
            maximumZoomScale: merge/*R*/(warning/*E*/.number),
            minimumZoomScale: merge/*R*/(warning/*E*/.number),
            pagingEnabled: merge/*R*/(warning/*E*/.bool),
            scrollsToTop: merge/*R*/(warning/*E*/.bool),
            stickyHeaderIndices: merge/*R*/(o(warning/*E*/.number)),
            removeClippedSubviews: warning/*E*/.bool,
            zoomScale: merge/*R*/(warning/*E*/.number)
        }),
        P = exports/*a*/.createClass({
            displayName: "ScrollView",
            statics: {
                PropTypes: x,
                keyboardDismissMode: ReactIOSTagHandles/*c*/.KeyboardDismissMode
            },
            propTypes: x,
            mixins: [NativeModulesDeprecated/*d*/.Mixin],
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
                NativeModules/*p*/.scrollTo(React/*l*/.rootNodeIDToTag[this._rootNodeID], require/*t*/, global/*e*/)
            },
            render: function() {
                var global/*e*/ = [this.props.horizontal && I.contentContainerHorizontal, this.props.contentContainerStyle];
                if (__DEV__ && this.props.style) {
                    var require/*t*/ = createReactIOSNativeComponentClass/*v*/(this.props.style),
                        requireDynamic/*n*/ = ["alignItems", "justifyContent"].filter(function(global/*e*/) {
                            return void 0 !== require/*t*/[global/*e*/]
                        });
                    0 !== requireDynamic/*n*/.length && flattenStyle/*S*/(0, "ScrollView child layout (" + JSON.stringify(requireDynamic/*n*/) + ") must by applied through the contentContainerStyle prop.")
                }
                __DEV__ && validAttributesFromPropTypes/*C*/(this.props.onScroll && !this.props.throttleScrollCallbackMS, "You specified `onScroll` on exports/*a*/ <ScrollView> but not `throttleScrollCallbackMS`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use exports/*a*/ bigger number if you don'require/*t*/ need as much precision.");
                var requireLazy/*r*/ = exports/*a*/.createElement(StyleSheet/*g*/, {
                        ref: T,
                        style: global/*e*/,
                        removeClippedSubviews: this.props.removeClippedSubviews
                    }, this.props.children),
                    module/*i*/ = void 0 !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
                    o = void 0 !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
                    ArrayOfPropType/*s*/ = invariant/*b*/(this.props, {
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
                return exports/*a*/.createElement(ReactIOSViewAttributes/*u*/, Object.assign({}, ArrayOfPropType/*s*/, {
                    ref: D
                }), requireLazy/*r*/)
            }
        }),
        I = StyleSheetPropType/*m*/.create({
            base: {
                flex: 1
            },
            contentContainerHorizontal: {
                alignSelf: "flex-start",
                flexDirection: "row"
            }
        }),
        ReactIOSViewAttributes/*u*/ = ViewStylePropTypes/*y*/({
            validAttributes: invariant/*b*/(ArrayOfPropType/*s*/.UIView, nativePropType/*w*/(P.propTypes)),
            uiViewClassName: "RCTScrollView"
        });
    module/*i*/.exports = P
});