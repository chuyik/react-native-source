__d("THDockedInputContainer",["DocumentContent","LayoutAnimation","NativeModulesDeprecated","POPAnimation","POPAnimationMixin","React","Dimensions","StyleSheet","Subscribable","THAnimations","THColors","THInputBarView","View","cloneWithProps","keyMirror","logError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DocumentContent"),
        exports/*a*/ = require/*t*/("LayoutAnimation"),
        DocumentContent/*s*/ = require/*t*/("NativeModulesDeprecated"),
        LayoutAnimation/*l*/ = require/*t*/("POPAnimation"),
        NativeModulesDeprecated/*u*/ = require/*t*/("POPAnimationMixin"),
        POPAnimation/*c*/ = require/*t*/("React"),
        POPAnimationMixin/*p*/ = require/*t*/("Dimensions"),
        React/*d*/ = require/*t*/("StyleSheet"),
        Dimensions/*h*/ = require/*t*/("Subscribable"),
        StyleSheet/*f*/ = require/*t*/("THAnimations"),
        Subscribable/*m*/ = require/*t*/("THColors"),
        THAnimations/*g*/ = require/*t*/("THInputBarView"),
        THColors/*_*/ = require/*t*/("View"),
        THInputBarView/*y*/ = require/*t*/("cloneWithProps"),
        View/*v*/ = require/*t*/("keyMirror"),
        cloneWithProps/*S*/ = require/*t*/("logError"),
        keyMirror/*b*/ = "scroll_responder",
        logError/*R*/ = "comment_input",
        w = "comment_input_wash",
        C = DocumentContent/*s*/.RKUIManager,
        E = {
            property: LayoutAnimation/*l*/.Properties.translationY,
            toValue: 280,
            velocity: 20
        },
        D = {
            property: LayoutAnimation/*l*/.Properties.translationY,
            dynamicsTension: 0,
            toValue: 0,
            velocity: 100
        },
        T = {
            property: LayoutAnimation/*l*/.Properties.opacity,
            toValue: 0,
            duration: .3
        },
        x = {
            property: LayoutAnimation/*l*/.Properties.opacity,
            toValue: .5,
            duration: .3
        },
        P = {
            property: LayoutAnimation/*l*/.Properties.opacity,
            toValue: 1,
            duration: .3
        },
        I = POPAnimation/*c*/.createClass({
            displayName: "THDockedInputContainer",
            propTypes: {
                scrollResponder: POPAnimation/*c*/.PropTypes.object.isRequired,
                onDockedCommentSubmit: POPAnimation/*c*/.PropTypes.func,
                onDockedCommentAbort: POPAnimation/*c*/.PropTypes.func,
                onDidDock: POPAnimation/*c*/.PropTypes.func,
                groupID: POPAnimation/*c*/.PropTypes.string
            },
            statics: {
                Mode: View/*v*/({
                    partialWash: !0,
                    fullHide: !0
                }),
                contentPaddingHorizontal: 16
            },
            mixins: [Dimensions/*h*/.Mixin, NativeModulesDeprecated/*u*/],
            getInitialState: function() {
                return {
                    initialText: new o,
                    getTappedNodeHandle: null,
                    recentKeyboardMovement: null,
                    inputWashTop: 0
                }
            },
            handleDockAnimateOutComplete: function() {
                this.refs[w].setNativeProps({
                    style: {
                        opacity: 0
                    }
                }), this.startAnimation(w, LayoutAnimation/*l*/.createLinearAnimation(D))
            },
            handleKeyboardWillHide: function(global/*e*/) {
                if (this.state.recentKeyboardMovement = global/*e*/, this.state.getTappedNodeHandle) {
                    var require/*t*/ = [{
                            ref: w,
                            anim: LayoutAnimation/*l*/.createEaseOutAnimation(E)
                        }, {
                            ref: w,
                            anim: LayoutAnimation/*l*/.createLinearAnimation(T)
                        }],
                        requireDynamic/*n*/ = this.state.getTappedNodeHandle();
                    requireDynamic/*n*/ && (this.refs[keyMirror/*b*/].scrollResponderScrollNativeHandleToKeyboard(requireDynamic/*n*/, this.state.mode === I.Mode.partialWash ? this.refs[logError/*R*/].getBarHeight() : 0), require/*t*/.push({
                        nodeHandle: requireDynamic/*n*/,
                        anim: LayoutAnimation/*l*/.createLinearAnimation(P)
                    })), this.startAnimations(require/*t*/, this.handleDockAnimateOutComplete, cloneWithProps/*S*/), this.state.getTappedNodeHandle = null, this.refs[logError/*R*/].blurInput()
                }
            },
            handleKeyboardDidShow: function() {
                this.state.getTappedNodeHandle && (this.refs[keyMirror/*b*/].setNativeProps({
                    scrollEnabled: !0
                }), this.props.onDidDock && this.props.onDidDock(), this.startAnimations([{
                    ref: w,
                    anim: LayoutAnimation/*l*/.createLinearAnimation(P)
                }, {
                    nodeHandle: this.state.getTappedNodeHandle(),
                    anim: LayoutAnimation/*l*/.createLinearAnimation(this.state.mode === I.Mode.partialWash ? x : T)
                }]))
            },
            handleKeyboardWillShow: function(global/*e*/) {
                if (this.state.getTappedNodeHandle) {
                    var require/*t*/ = this.getBarHeight();
                    this.refs[keyMirror/*b*/].scrollResponderScrollNativeHandleToKeyboard(this.state.getTappedNodeHandle(), this.state.mode === I.Mode.partialWash ? require/*t*/ : 0), this.state.recentKeyboardMovement = global/*e*/, this.updateDockedInputLocation(require/*t*/)
                }
            },
            getInitialBarHeight: function() {
                return this.refs[logError/*R*/].getInitialBarHeight()
            },
            getBarHeight: function() {
                return this.refs[logError/*R*/].getBarHeight()
            },
            handleInputBarHeightChange: function(global/*e*/) {
                this.updateDockedInputLocation(global/*e*/), this.props.onHeightChange && this.props.onHeightChange(global/*e*/)
            },
            updateDockedInputLocation: function(global/*e*/) {
                var require/*t*/ = this.state.recentKeyboardMovement.endCoordinates.screenY - global/*e*/;
                this.setState({
                    inputWashTop: require/*t*/
                })
            },
            enableScrollResponderAutoInsets: function(global/*e*/) {
                this.refs[keyMirror/*b*/].setNativeProps({
                    automaticallyAdjustContentInsets: global/*e*/
                })
            },
            initiateDockedInput: function(global/*e*/) {
                var require/*t*/ = global/*e*/.getTappedNodeHandle,
                    requireDynamic/*n*/ = global/*e*/.mode,
                    requireLazy/*r*/ = global/*e*/.initialText,
                    module/*i*/ = global/*e*/.comparisonTextForCanPost,
                    o = global/*e*/.photoSource,
                    exports/*a*/ = global/*e*/.isEditing;
                this.setState({
                    getTappedNodeHandle: require/*t*/,
                    mode: requireDynamic/*n*/,
                    initialText: requireLazy/*r*/,
                    text: requireLazy/*r*/,
                    comparisonTextForCanPost: module/*i*/,
                    photoSource: o,
                    isEditing: exports/*a*/
                }), this.refs[keyMirror/*b*/].setNativeProps({
                    scrollEnabled: !1
                }), this.refs[logError/*R*/].focusInput()
            },
            componentDidMount: function() {
                C.setMainScrollViewTag(this.refs[keyMirror/*b*/].getNodeHandle())
            },
            componentDidUnmount: function() {
                C.setMainScrollViewTag(0)
            },
            handleTextChange: function(global/*e*/) {
                exports/*a*/.configureNext(StyleSheet/*f*/.layout.inputButtons), this.setState({
                    text: global/*e*/
                })
            },
            handlePhotoChange: function(global/*e*/) {
                this.setState({
                    photoSource: global/*e*/
                })
            },
            getScrollResponder: function() {
                return this.refs[keyMirror/*b*/]
            },
            cancelDockedInput: function() {
                this.refs[logError/*R*/].blurInput()
            },
            render: function() {
                var global/*e*/ = THInputBarView/*y*/(this.props.scrollResponder, {
                    ref: keyMirror/*b*/,
                    onKeyboardWillShow: this.handleKeyboardWillShow,
                    onKeyboardDidShow: this.handleKeyboardDidShow,
                    onKeyboardWillHide: this.handleKeyboardWillHide,
                    onScrollResponderKeyboardDismissed: this.props.onDockedCommentAbort.bind(null, {
                        text: this.state.text,
                        getTappedNodeHandle: this.state.getTappedNodeHandle,
                        initialText: this.state.initialText,
                        photoSource: this.state.photoSource
                    })
                });
                return POPAnimation/*c*/.createElement(THColors/*_*/, {
                    style: F.container
                }, global/*e*/, POPAnimation/*c*/.createElement(THColors/*_*/, {
                    style: [F.inputWash, {
                        top: this.state.inputWashTop
                    }],
                    ref: w
                }, POPAnimation/*c*/.createElement(THAnimations/*g*/, {
                    canComment: !0,
                    canCommentInline: !0,
                    isEditing: this.state.isEditing,
                    photoSource: this.state.photoSource,
                    ref: logError/*R*/,
                    groupID: this.props.groupID,
                    initialText: this.state.initialText,
                    comparisonTextForCanPost: this.state.comparisonTextForCanPost,
                    onTextChange: this.handleTextChange,
                    onPhotoChange: this.handlePhotoChange,
                    onHeightChange: this.handleInputBarHeightChange,
                    onCommentSubmit: this.props.onDockedCommentSubmit,
                    paddingHorizontal: I.contentPaddingHorizontal
                })))
            }
        }),
        F = React/*d*/.create({
            container: {
                height: POPAnimationMixin/*p*/.get("window").height,
                width: POPAnimationMixin/*p*/.get("window").width,
                backgroundColor: Subscribable/*m*/.backgroundWash
            },
            inputWash: {
                height: 600,
                opacity: 0,
                position: "absolute",
                backgroundColor: Subscribable/*m*/.backgroundColor,
                right: 0,
                left: 0
            }
        });
    module/*i*/.exports = I
});