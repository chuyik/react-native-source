__d("THPermalinkInputBarView",["Dimensions","DocumentContent","DockedInputView","LayoutAnimation","React","NativeModules","StyleSheet","THAnimations","THColors","THDockedInputContainer","THInputBarView","View","cloneWithProps","logError","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var Dimensions/*o*/ = t("Dimensions"),
        DocumentContent/*a*/ = t("DocumentContent"),
        DockedInputView/*s*/ = t("DockedInputView"),
        LayoutAnimation/*l*/ = t("LayoutAnimation"),
        React/*u*/ = t("React"),
        NativeModules/*c*/ = t("NativeModules").RKUIManager,
        StyleSheet/*p*/ = t("StyleSheet"),
        THAnimations/*d*/ = t("THAnimations"),
        THColors/*h*/ = t("THColors"),
        THDockedInputContainer/*f*/ = t("THDockedInputContainer"),
        THInputBarView/*m*/ = t("THInputBarView"),
        View/*g*/ = t("View"),
        cloneWithProps/*_*/ = t("cloneWithProps"),
        logError/*y*/ = t("logError"),
        keyOf/*v*/ = t("keyOf"),
        S = keyOf/*v*/({
            inputBar: null
        }),
        b = keyOf/*v*/({
            scrollResponder: null
        }),
        R = React/*u*/.createClass({
            displayName: "THPermalinkInputBarView",
            propTypes: {
                groupID: React/*u*/.PropTypes.string,
                dockParams: React/*u*/.PropTypes.object,
                initialText: React/*u*/.PropTypes.object,
                isEditing: React/*u*/.PropTypes.bool,
                onCommentSubmit: React/*u*/.PropTypes.func,
                onCommentEditSubmit: React/*u*/.PropTypes.func,
                scrollResponder: React/*u*/.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    dockParams: null,
                    initialText: new DocumentContent/*a*/,
                    isEditing: !1,
                    savedDraftText: new DocumentContent/*a*/
                }
            },
            getInitialState: function() {
                var e = this.props.dockParams;
                return {
                    getCommentHandle: e && e.getTappedNodeHandle,
                    keyboardHeight: 0,
                    permalinkHeight: Dimensions/*o*/.get("window").height,
                    photoSource: e && e.photoSource,
                    text: e && e.initialText
                }
            },
            focusInput: function() {
                this.refs[S].focusInput()
            },
            componentWillReceiveProps: function(e) {
                this.setState({
                    getCommentHandle: e.dockParams && e.dockParams.getTappedNodeHandle,
                    photoSource: e.dockParams && e.dockParams.photoSource,
                    text: e.dockParams && e.dockParams.initialText
                }), e.isEditing && this.focusInput()
            },
            resetInputBar: function() {
                this.setState({
                    getCommentHandle: null,
                    photoSource: null,
                    text: null
                })
            },
            scrollDockedInputBarToOffset: function(e, t, n, r) {
                var i = r,
                    Dimensions/*o*/ = this.state.getCommentHandle && this.state.getCommentHandle();
                Dimensions/*o*/ ? NativeModules/*c*/.measureLayout(Dimensions/*o*/, this.refs[b].getNodeHandle(), logError/*y*/, function(e, t, n, r) {
                    var Dimensions/*o*/ = i - t - r,
                        DocumentContent/*a*/ = i - Dimensions/*o*/ - this.state.permalinkHeight;
                    this.refs[b].scrollResponderScrollTo(0, DocumentContent/*a*/ + this.refs[S].getBarHeight())
                }.bind(this)) : this.refs[b].scrollResponderScrollTo(0, i - this.state.permalinkHeight + this.refs[S].getBarHeight())
            },
            handleKeyboardWillShow: function(e) {
                this.state.keyboardHeight = e.endCoordinates.height
            },
            handleKeyboardDidShow: function() {
                this.setState({
                    permalinkHeight: Dimensions/*o*/.get("window").height - this.state.keyboardHeight
                }, function() {
                    NativeModules/*c*/.measureLayout(this.refs[b].getInnerViewNode(), this.refs[b].getNodeHandle(), logError/*y*/, this.scrollDockedInputBarToOffset)
                }.bind(this))
            },
            handleKeyboardWillHide: function() {
                this.setState({
                    permalinkHeight: Dimensions/*o*/.get("window").height
                })
            },
            handleCommentSubmit: function(e, t) {
                this.props.isEditing ? this.props.onCommentEditSubmit && this.props.onCommentEditSubmit(e) : this.props.onCommentSubmit && this.props.onCommentSubmit(e, t), this.resetInputBar()
            },
            handleCommentAbort: function() {
                this.props.isEditing && (this.props.onCommentEditAbort && this.props.onCommentEditAbort({
                    getTappedNodeHandle: this.state.getCommentHandle,
                    initialText: this.props.initialText,
                    text: this.state.text
                }), this.resetInputBar()), this.refs[S].blurInput()
            },
            handlePhotoChange: function(e) {
                this.setState({
                    photoSource: e
                })
            },
            handleTextChange: function(e) {
                LayoutAnimation/*l*/.configureNext(THAnimations/*d*/.layout.inputButtons), this.setState({
                    text: e
                })
            },
            render: function() {
                var e = cloneWithProps/*_*/(this.props.scrollResponder, {
                        ref: b,
                        onKeyboardWillShow: this.handleKeyboardWillShow,
                        onKeyboardDidShow: this.handleKeyboardDidShow,
                        onKeyboardWillHide: this.handleKeyboardWillHide,
                        onKeyboardDidHide: this.handleKeyboardDidHide,
                        onScrollResponderKeyboardDismissed: this.handleCommentAbort
                    }),
                    t = [w.container, {
                        height: this.state.permalinkHeight
                    }];
                return React/*u*/.createElement(View/*g*/, {
                    style: t
                }, e, React/*u*/.createElement(DockedInputView/*s*/, null, React/*u*/.createElement(THInputBarView/*m*/, {
                    ref: S,
                    canCommentTrue: !0,
                    canCommentInline: !0,
                    comparisonTextForCanPost: this.props.initialText,
                    initialText: this.state.text,
                    isEditing: this.props.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onPhotoChange: this.handlePhotoChange,
                    onTextChange: this.handleTextChange,
                    paddingHorizontal: THDockedInputContainer/*f*/.contentPaddingHorizontal,
                    photoSource: this.state.photoSource,
                    showPlaceholder: !0
                })))
            }
        }),
        w = StyleSheet/*p*/.create({
            container: {
                width: Dimensions/*o*/.get("window").width,
                backgroundColor: THColors/*h*/.backgroundColor
            }
        });
    i.exports = R
});