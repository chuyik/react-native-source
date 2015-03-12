__d("THDockedInputContainer",["DocumentContent","LayoutAnimation","NativeModulesDeprecated","POPAnimation","POPAnimationMixin","React","Dimensions","StyleSheet","Subscribable","THAnimations","THColors","THInputBarView","View","cloneWithProps","keyMirror","logError"],function (e, t, n, r, i) {
    "use strict";
    var DocumentContent/*o*/ = t("DocumentContent"),
        LayoutAnimation/*a*/ = t("LayoutAnimation"),
        NativeModulesDeprecated/*s*/ = t("NativeModulesDeprecated"),
        POPAnimation/*l*/ = t("POPAnimation"),
        POPAnimationMixin/*u*/ = t("POPAnimationMixin"),
        React/*c*/ = t("React"),
        Dimensions/*p*/ = t("Dimensions"),
        StyleSheet/*d*/ = t("StyleSheet"),
        Subscribable/*h*/ = t("Subscribable"),
        THAnimations/*f*/ = t("THAnimations"),
        THColors/*m*/ = t("THColors"),
        THInputBarView/*g*/ = t("THInputBarView"),
        View/*_*/ = t("View"),
        cloneWithProps/*y*/ = t("cloneWithProps"),
        keyMirror/*v*/ = t("keyMirror"),
        logError/*S*/ = t("logError"),
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
            handleKeyboardWillHide: function(e) {
                if (this.state.recentKeyboardMovement = e, this.state.getTappedNodeHandle) {
                    var t = [{
                            ref: w,
                            anim: POPAnimation/*l*/.createEaseOutAnimation(E)
                        }, {
                            ref: w,
                            anim: POPAnimation/*l*/.createLinearAnimation(T)
                        }],
                        n = this.state.getTappedNodeHandle();
                    n && (this.refs[b].scrollResponderScrollNativeHandleToKeyboard(n, this.state.mode === I.Mode.partialWash ? this.refs[R].getBarHeight() : 0), t.push({
                        nodeHandle: n,
                        anim: POPAnimation/*l*/.createLinearAnimation(P)
                    })), this.startAnimations(t, this.handleDockAnimateOutComplete, logError/*S*/), this.state.getTappedNodeHandle = null, this.refs[R].blurInput()
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
            handleKeyboardWillShow: function(e) {
                if (this.state.getTappedNodeHandle) {
                    var t = this.getBarHeight();
                    this.refs[b].scrollResponderScrollNativeHandleToKeyboard(this.state.getTappedNodeHandle(), this.state.mode === I.Mode.partialWash ? t : 0), this.state.recentKeyboardMovement = e, this.updateDockedInputLocation(t)
                }
            },
            getInitialBarHeight: function() {
                return this.refs[R].getInitialBarHeight()
            },
            getBarHeight: function() {
                return this.refs[R].getBarHeight()
            },
            handleInputBarHeightChange: function(e) {
                this.updateDockedInputLocation(e), this.props.onHeightChange && this.props.onHeightChange(e)
            },
            updateDockedInputLocation: function(e) {
                var t = this.state.recentKeyboardMovement.endCoordinates.screenY - e;
                this.setState({
                    inputWashTop: t
                })
            },
            enableScrollResponderAutoInsets: function(e) {
                this.refs[b].setNativeProps({
                    automaticallyAdjustContentInsets: e
                })
            },
            initiateDockedInput: function(e) {
                var t = e.getTappedNodeHandle,
                    n = e.mode,
                    r = e.initialText,
                    i = e.comparisonTextForCanPost,
                    DocumentContent/*o*/ = e.photoSource,
                    LayoutAnimation/*a*/ = e.isEditing;
                this.setState({
                    getTappedNodeHandle: t,
                    mode: n,
                    initialText: r,
                    text: r,
                    comparisonTextForCanPost: i,
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
            handleTextChange: function(e) {
                LayoutAnimation/*a*/.configureNext(THAnimations/*f*/.layout.inputButtons), this.setState({
                    text: e
                })
            },
            handlePhotoChange: function(e) {
                this.setState({
                    photoSource: e
                })
            },
            getScrollResponder: function() {
                return this.refs[b]
            },
            cancelDockedInput: function() {
                this.refs[R].blurInput()
            },
            render: function() {
                var e = cloneWithProps/*y*/(this.props.scrollResponder, {
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
                }, e, React/*c*/.createElement(View/*_*/, {
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
    i.exports = I
});