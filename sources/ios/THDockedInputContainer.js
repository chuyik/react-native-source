__d("THDockedInputContainer",["DocumentContent","LayoutAnimation","NativeModulesDeprecated","POPAnimation","POPAnimationMixin","React","Dimensions","StyleSheet","Subscribable","THAnimations","THColors","THInputBarView","View","cloneWithProps","keyMirror","logError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DocumentContent/*o*/ = require/*t*/("DocumentContent"),
        LayoutAnimation/*a*/ = require/*t*/("LayoutAnimation"),
        NativeModulesDeprecated/*s*/ = require/*t*/("NativeModulesDeprecated"),
        POPAnimation/*l*/ = require/*t*/("POPAnimation"),
        POPAnimationMixin/*u*/ = require/*t*/("POPAnimationMixin"),
        React/*c*/ = require/*t*/("React"),
        Dimensions/*p*/ = require/*t*/("Dimensions"),
        StyleSheet/*d*/ = require/*t*/("StyleSheet"),
        Subscribable/*h*/ = require/*t*/("Subscribable"),
        THAnimations/*f*/ = require/*t*/("THAnimations"),
        THColors/*m*/ = require/*t*/("THColors"),
        THInputBarView/*g*/ = require/*t*/("THInputBarView"),
        View/*_*/ = require/*t*/("View"),
        cloneWithProps/*y*/ = require/*t*/("cloneWithProps"),
        keyMirror/*v*/ = require/*t*/("keyMirror"),
        logError/*S*/ = require/*t*/("logError"),
        b = "scroll_responder",
        R = "comment_input",
        w = "comment_input_wash",
        C = NativeModulesDeprecated/*s*/.RKUIManager,
        E = {
            property: POPAnimation/*l*/.Properties.translationY,
            toValue: 280,
            velocity: 20
        },
        D = {
            property: POPAnimation/*l*/.Properties.translationY,
            dynamicsTension: 0,
            toValue: 0,
            velocity: 100
        },
        T = {
            property: POPAnimation/*l*/.Properties.opacity,
            toValue: 0,
            duration: .3
        },
        x = {
            property: POPAnimation/*l*/.Properties.opacity,
            toValue: .5,
            duration: .3
        },
        P = {
            property: POPAnimation/*l*/.Properties.opacity,
            toValue: 1,
            duration: .3
        },
        I = React/*c*/.createClass({
            displayName: "THDockedInputContainer",
            propTypes: {
                scrollResponder: React/*c*/.PropTypes.object.isRequired,
                onDockedCommentSubmit: React/*c*/.PropTypes.func,
                onDockedCommentAbort: React/*c*/.PropTypes.func,
                onDidDock: React/*c*/.PropTypes.func,
                groupID: React/*c*/.PropTypes.string
            },
            statics: {
                Mode: keyMirror/*v*/({
                    partialWash: !0,
                    fullHide: !0
                }),
                contentPaddingHorizontal: 16
            },
            mixins: [Subscribable/*h*/.Mixin, POPAnimationMixin/*u*/],
            getInitialState: function() {
                return {
                    initialText: new DocumentContent/*o*/,
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
                }), this.startAnimation(w, POPAnimation/*l*/.createLinearAnimation(D))
            },
            handleKeyboardWillHide: function(global/*e*/) {
                if (this.state.recentKeyboardMovement = global/*e*/, this.state.getTappedNodeHandle) {
                    var require/*t*/ = [{
                            ref: w,
                            anim: POPAnimation/*l*/.createEaseOutAnimation(E)
                        }, {
                            ref: w,
                            anim: POPAnimation/*l*/.createLinearAnimation(T)
                        }],
                        requireDynamic/*n*/ = this.state.getTappedNodeHandle();
                    requireDynamic/*n*/ && (this.refs[b].scrollResponderScrollNativeHandleToKeyboard(requireDynamic/*n*/, this.state.mode === I.Mode.partialWash ? this.refs[R].getBarHeight() : 0), require/*t*/.push({
                        nodeHandle: requireDynamic/*n*/,
                        anim: POPAnimation/*l*/.createLinearAnimation(P)
                    })), this.startAnimations(require/*t*/, this.handleDockAnimateOutComplete, logError/*S*/), this.state.getTappedNodeHandle = null, this.refs[R].blurInput()
                }
            },
            handleKeyboardDidShow: function() {
                this.state.getTappedNodeHandle && (this.refs[b].setNativeProps({
                    scrollEnabled: !0
                }), this.props.onDidDock && this.props.onDidDock(), this.startAnimations([{
                    ref: w,
                    anim: POPAnimation/*l*/.createLinearAnimation(P)
                }, {
                    nodeHandle: this.state.getTappedNodeHandle(),
                    anim: POPAnimation/*l*/.createLinearAnimation(this.state.mode === I.Mode.partialWash ? x : T)
                }]))
            },
            handleKeyboardWillShow: function(global/*e*/) {
                if (this.state.getTappedNodeHandle) {
                    var require/*t*/ = this.getBarHeight();
                    this.refs[b].scrollResponderScrollNativeHandleToKeyboard(this.state.getTappedNodeHandle(), this.state.mode === I.Mode.partialWash ? require/*t*/ : 0), this.state.recentKeyboardMovement = global/*e*/, this.updateDockedInputLocation(require/*t*/)
                }
            },
            getInitialBarHeight: function() {
                return this.refs[R].getInitialBarHeight()
            },
            getBarHeight: function() {
                return this.refs[R].getBarHeight()
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
                this.refs[b].setNativeProps({
                    automaticallyAdjustContentInsets: global/*e*/
                })
            },
            initiateDockedInput: function(global/*e*/) {
                var require/*t*/ = global/*e*/.getTappedNodeHandle,
                    requireDynamic/*n*/ = global/*e*/.mode,
                    requireLazy/*r*/ = global/*e*/.initialText,
                    module/*i*/ = global/*e*/.comparisonTextForCanPost,
                    DocumentContent/*o*/ = global/*e*/.photoSource,
                    LayoutAnimation/*a*/ = global/*e*/.isEditing;
                this.setState({
                    getTappedNodeHandle: require/*t*/,
                    mode: requireDynamic/*n*/,
                    initialText: requireLazy/*r*/,
                    text: requireLazy/*r*/,
                    comparisonTextForCanPost: module/*i*/,
                    photoSource: DocumentContent/*o*/,
                    isEditing: LayoutAnimation/*a*/
                }), this.refs[b].setNativeProps({
                    scrollEnabled: !1
                }), this.refs[R].focusInput()
            },
            componentDidMount: function() {
                C.setMainScrollViewTag(this.refs[b].getNodeHandle())
            },
            componentDidUnmount: function() {
                C.setMainScrollViewTag(0)
            },
            handleTextChange: function(global/*e*/) {
                LayoutAnimation/*a*/.configureNext(THAnimations/*f*/.layout.inputButtons), this.setState({
                    text: global/*e*/
                })
            },
            handlePhotoChange: function(global/*e*/) {
                this.setState({
                    photoSource: global/*e*/
                })
            },
            getScrollResponder: function() {
                return this.refs[b]
            },
            cancelDockedInput: function() {
                this.refs[R].blurInput()
            },
            render: function() {
                var global/*e*/ = cloneWithProps/*y*/(this.props.scrollResponder, {
                    ref: b,
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
                return React/*c*/.createElement(View/*_*/, {
                    style: F.container
                }, global/*e*/, React/*c*/.createElement(View/*_*/, {
                    style: [F.inputWash, {
                        top: this.state.inputWashTop
                    }],
                    ref: w
                }, React/*c*/.createElement(THInputBarView/*g*/, {
                    canComment: !0,
                    canCommentInline: !0,
                    isEditing: this.state.isEditing,
                    photoSource: this.state.photoSource,
                    ref: R,
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
        F = StyleSheet/*d*/.create({
            container: {
                height: Dimensions/*p*/.get("window").height,
                width: Dimensions/*p*/.get("window").width,
                backgroundColor: THColors/*m*/.backgroundWash
            },
            inputWash: {
                height: 600,
                opacity: 0,
                position: "absolute",
                backgroundColor: THColors/*m*/.backgroundColor,
                right: 0,
                left: 0
            }
        });
    module/*i*/.exports = I
});