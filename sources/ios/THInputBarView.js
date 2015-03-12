__d("THInputBarView",["LayoutAnimation","Dimensions","DocumentContent","DocumentSelectionState","FIGColors","FBStickerInputView","Image","MentionsInput.react","MentionsInputTypeaheadView.react","NativeModulesDeprecated","React","StyleSheet","TimerMixin","Text","THAnimations","THColors","THCommentPhotoAttachmentPreview","THSounds","TouchableBounce","TouchableOpacity","TouchableHighlight","TouchableWithoutFeedback","View","clamp","copyDocumentContent","documentContentsAreEqual","fbt","getMentionsSearchSource","getTextWithEntitiesFromDocument","ix"],function (e, t, n, r, i) {
    "use strict";
    var LayoutAnimation/*o*/ = t("LayoutAnimation"),
        Dimensions/*a*/ = t("Dimensions"),
        DocumentContent/*s*/ = t("DocumentContent"),
        DocumentSelectionState/*l*/ = t("DocumentSelectionState"),
        FIGColors/*u*/ = t("FIGColors"),
        FBStickerInputView/*c*/ = t("FBStickerInputView"),
        Image/*p*/ = t("Image"),
        d = t("MentionsInput.react"),
        h = t("MentionsInputTypeaheadView.react"),
        NativeModulesDeprecated/*f*/ = t("NativeModulesDeprecated"),
        React/*m*/ = t("React"),
        StyleSheet/*g*/ = t("StyleSheet"),
        TimerMixin/*_*/ = t("TimerMixin"),
        Text/*y*/ = t("Text"),
        THAnimations/*v*/ = t("THAnimations"),
        THColors/*S*/ = t("THColors"),
        THCommentPhotoAttachmentPreview/*b*/ = t("THCommentPhotoAttachmentPreview"),
        THSounds/*R*/ = t("THSounds"),
        TouchableBounce/*w*/ = t("TouchableBounce"),
        TouchableOpacity/*C*/ = t("TouchableOpacity"),
        TouchableHighlight/*E*/ = t("TouchableHighlight"),
        TouchableWithoutFeedback/*D*/ = t("TouchableWithoutFeedback"),
        View/*T*/ = t("View"),
        clamp/*x*/ = t("clamp"),
        copyDocumentContent/*P*/ = t("copyDocumentContent"),
        documentContentsAreEqual/*I*/ = t("documentContentsAreEqual"),
        fbt/*F*/ = t("fbt"),
        getMentionsSearchSource/*L*/ = t("getMentionsSearchSource"),
        getTextWithEntitiesFromDocument/*M*/ = t("getTextWithEntitiesFromDocument"),
        ix/*Q*/ = t("ix"),
        A = NativeModulesDeprecated/*f*/.RKTreehouseManager,
        k = "stickerInputView",
        O = "keyboardInputView",
        N = "inputRow",
        G = "inputField",
        $ = Dimensions/*a*/.get("window").width,
        B = 35,
        H = 100,
        V = 6,
        q = .5,
        U = 12,
        j = 13,
        W = 14,
        K = function(e) {
            return e + 2 * V + q
        },
        z = fbt/*F*/({
            type: "text",
            texts: ["Write Dimensions/*a*/ comment..."],
            desc: "Placeholder text for comment input"
        }),
        X = fbt/*F*/({
            type: "text",
            texts: ["Post"],
            desc: "Post Dimensions/*a*/ comment"
        }),
        Y = fbt/*F*/({
            type: "text",
            texts: ["Update"],
            desc: "Button label to save edits made to Dimensions/*a*/ comment"
        }),
        J = React/*m*/.createClass({
            displayName: "THInputBarView",
            mixins: [TimerMixin/*_*/],
            propTypes: {
                canCommentInline: React/*m*/.PropTypes.bool,
                onCommentInputRequested: React/*m*/.PropTypes.func,
                onCommentSubmit: React/*m*/.PropTypes.func,
                initialText: React/*m*/.PropTypes.instanceOf(DocumentContent/*s*/),
                isEditing: React/*m*/.PropTypes.bool,
                comparisonTextForCanPost: React/*m*/.PropTypes.instanceOf(DocumentContent/*s*/),
                hideInputButtons: React/*m*/.PropTypes.bool,
                groupID: React/*m*/.PropTypes.string,
                paddingHorizontal: React/*m*/.PropTypes.number,
                photoSource: React/*m*/.PropTypes.object,
                showPlaceholder: React/*m*/.PropTypes.bool
            },
            focusInput: function() {
                this.refs[G].focus()
            },
            blurInput: function() {
                this.refs[G].blur(), this.setState({
                    inputView: O
                })
            },
            getDefaultProps: function() {
                return {
                    initialText: new DocumentContent/*s*/,
                    hideInputButtons: !1,
                    comparisonTextForCanPost: null,
                    photoSource: null,
                    isEditing: !1
                }
            },
            getInitialState: function() {
                return {
                    documentContent: copyDocumentContent/*P*/(this.props.initialText),
                    selectionState: new DocumentSelectionState/*l*/(0, 0),
                    submittingComment: !1,
                    inputFieldHeight: B,
                    mentionsSource: this.props.canCommentInline && getMentionsSearchSource/*L*/(this.props.groupID),
                    inputView: O,
                    photoSource: this.props.photoSource
                }
            },
            getInitialBarHeight: function() {
                return K(B)
            },
            getBarHeight: function() {
                return K(this.state.inputFieldHeight)
            },
            getPhotoSource: function() {
                return this.state.photoSource ? this.state.photoSource : null
            },
            handleChange: function(e) {
                if (e) {
                    var t = e.nativeEvent.contentSize,
                        n = clamp/*x*/(B, t.height, H);
                    this.state.inputFieldHeight !== n && (this.state.documentContent.bumpVersion(), this.setState({
                        inputFieldHeight: n
                    }), this.props.onHeightChange && this.props.onHeightChange(K(n)))
                }
                this.props.onTextChange && this.props.onTextChange(this.state.documentContent)
            },
            handleActiveInputPress: function() {
                this.props.canCommentInline && this.setState({
                    inputView: O
                })
            },
            handleInactiveInputPress: function() {
                this.props.onCommentInputRequested && this.props.onCommentInputRequested(function() {
                    return this.isMounted() && this.refs[N].getNodeHandle()
                }.bind(this))
            },
            handleCommentSubmit: function() {
                var e = null;
                this.state.photoSource && (e = {
                    style_list: ["photo"],
                    media: {
                        image: this.state.photoSource
                    }
                }), A && A.playSound(THSounds/*R*/.commentCompleted), this.setState({
                    submittingComment: !0,
                    photoSource: null
                }), this.refs[G] && this.blurInput(), this.props.onCommentSubmit && this.requestAnimationFrame(function() {
                    var t = getTextWithEntitiesFromDocument/*M*/(this.state.documentContent);
                    t ? this.props.onCommentSubmit(t, e) : console.error("Should not be submitting empty comment.")
                }.bind(this))
            },
            handlePhotoPickerSelect: function(e) {
                LayoutAnimation/*o*/.configureNext(THAnimations/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: e
                }), this.props.onPhotoChange && this.props.onPhotoChange(e)
            },
            handleCameraButtonPress: function() {
                A ? (A.openPhotoPicker(this.handlePhotoPickerSelect), this.setState({
                    inputView: O
                })) : console.warn("Photo picker not available")
            },
            handleStickerKeyboardSwitch: function() {
                this.setState(this.state.inputView === O ? {
                    inputView: k
                } : {
                    inputView: O
                }), this.focusInput()
            },
            handleStickerCommentSubmit: function(e) {
                A && A.playSound(THSounds/*R*/.commentCompleted), this.setState({
                    submittingComment: !0
                }), this.refs[G] && this.blurInput();
                var t = e.nativeEvent.stickerFBID,
                    n = getTextWithEntitiesFromDocument/*M*/(this.state.documentContent);
                if (n && t) {
                    var r = {
                        style_list: ["sticker"],
                        media: {
                            id: t.toString()
                        }
                    };
                    this.props.onCommentSubmit(n, r)
                } else console.error("Should not be submitting invalid sticker.")
            },
            componentWillReceiveProps: function(e) {
                var t = this.props.initialText;
                this.props = e, e.initialText !== t && this.resetCommentField(), this.setState({
                    photoSource: this.props.photoSource
                })
            },
            resetCommentField: function() {
                var e = this.props.initialText || new DocumentContent/*s*/;
                this.state.documentContent.update(e.getText(), e.getInlineStyles().slice(0), e.getBlockStyles().slice(0), e.getEntities().slice(0)), this.setState({
                    submittingComment: !1
                })
            },
            removePhotoAttachment: function() {
                LayoutAnimation/*o*/.configureNext(THAnimations/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: null
                }), this.props.onPhotoChange && this.props.onPhotoChange(null)
            },
            renderPhotoAttachment: function() {
                var e = this.removePhotoAttachment;
                return this.state.photoSource && !this.props.canCommentInline && (e = null), this.state.photoSource && !this.props.isEditing ? React/*m*/.createElement(THCommentPhotoAttachmentPreview/*b*/, {
                    photoSource: this.state.photoSource,
                    onRemoveAttachment: e,
                    style: Z.thumbnailPhoto,
                    wrapperStyle: Z.previewContainer
                }) : null
            },
            renderStickerButton: function() {
                if (this.props.isEditing) return null;
                var e;
                e = ix/*Q*/(this.state.inputView === k ? "thSmileGlyphSelected" : "thSmileGlyphNormal");
                var t = React/*m*/.createElement(Image/*p*/, {
                        source: e,
                        style: Z.icon
                    }),
                    n = [Z.stickerButton];
                return (this.isPostButtonActive() || this.props.hideInputButtons) && n.push(Z.offscreenButton), React/*m*/.createElement(TouchableWithoutFeedback/*D*/, {
                    onPress: this.handleStickerKeyboardSwitch
                }, React/*m*/.createElement(View/*T*/, {
                    style: n
                }, t))
            },
            renderCameraButton: function() {
                if (!this.props.canCommentInline || this.props.hideInputButtons || this.state.photoSource || this.props.isEditing) return null;
                var e = React/*m*/.createElement(Image/*p*/, {
                    source: ix/*Q*/("thCameraGlyph"),
                    style: Z.icon
                });
                return React/*m*/.createElement(TouchableOpacity/*C*/, {
                    onPress: this.handleCameraButtonPress
                }, React/*m*/.createElement(View/*T*/, {
                    style: Z.cameraButton
                }, e))
            },
            renderPostButton: function() {
                var e = [Z.postButton],
                    t = Z.postButtonText,
                    n = X,
                    r = this.handleCommentSubmit;
                return this.props.isEditing ? (n = Y, this.isPostButtonActive() || (t = Z.inactivePostButtonText, r = null)) : (!this.isPostButtonActive() || this.props.hideInputButtons && !this.state.photoSource) && (e.push(Z.offscreenButton), r = null), React/*m*/.createElement(TouchableBounce/*w*/, {
                    onPress: r
                }, React/*m*/.createElement(View/*T*/, {
                    style: e
                }, React/*m*/.createElement(Text/*y*/, {
                    style: t
                }, n)))
            },
            isPostButtonActive: function() {
                var e = !this.state.documentContent.getText().trim();
                return this.props.isEditing ? !(this.state.submittingComment || e && !this.state.photoSource || documentContentsAreEqual/*I*/(this.props.comparisonTextForCanPost, this.state.documentContent)) : !this.state.submittingComment && (!e || this.state.photoSource)
            },
            render: function() {
                var e = null,
                    t = null;
                switch (this.state.inputView) {
                    case O:
                        e = null;
                        break;
                    case k:
                        e = React/*m*/.createElement(FBStickerInputView/*c*/, {
                            onStickerSelect: this.handleStickerCommentSubmit
                        }), t = React/*m*/.createElement(TouchableWithoutFeedback/*D*/, {
                            onPress: this.handleActiveInputPress
                        }, React/*m*/.createElement(View/*T*/, {
                            style: Z.inputFieldOverlay
                        }));
                        break;
                    default:
                        e = null
                }
                var n, r, i, LayoutAnimation/*o*/;
                this.props.canCommentInline ? (n = THColors/*S*/.darkerDivider, r = W, i = this.state.inputFieldHeight, LayoutAnimation/*o*/ = View/*T*/.pointerEvents.unspecified) : (n = THColors/*S*/.divider, r = j, i = B, LayoutAnimation/*o*/ = View/*T*/.pointerEvents.boxOnly);
                var Dimensions/*a*/ = [Z.commentBox, {
                        height: i,
                        fontSize: r
                    }],
                    DocumentContent/*s*/ = this.state.documentContent.getText() || this.props.canCommentInline && !this.props.showPlaceholder ? null : z,
                    DocumentSelectionState/*l*/ = React/*m*/.createElement(d, {
                        ref: G,
                        documentContent: this.state.documentContent,
                        placeholder: DocumentContent/*s*/,
                        placeholderTextColor: THColors/*S*/.feedbackFadedText,
                        selectionState: this.state.selectionState,
                        mentionsSource: this.state.mentionsSource || void 0,
                        typeaheadView: h,
                        textInputStyle: Dimensions/*a*/,
                        onInputFocus: this.resetCommentField,
                        multiline: !0,
                        onChange: this.handleChange,
                        inputView: e
                    });
                return React/*m*/.createElement(View/*T*/, {
                    ref: N
                }, React/*m*/.createElement(View/*T*/, {
                    key: "divReply",
                    style: [Z.divider, {
                        backgroundColor: n
                    }]
                }), React/*m*/.createElement(View/*T*/, {
                    style: [Z.buttonsContainer, {
                        paddingHorizontal: this.props.paddingHorizontal
                    }]
                }, this.renderPhotoAttachment(), React/*m*/.createElement(TouchableHighlight/*E*/, {
                    activeOpacity: 1,
                    style: Z.touchableInputWrapper,
                    onPress: this.handleInactiveInputPress
                }, React/*m*/.createElement(View/*T*/, {
                    pointerEvents: LayoutAnimation/*o*/
                }, DocumentSelectionState/*l*/)), t, this.renderCameraButton(), this.renderPostButton(), this.renderStickerButton()))
            }
        }),
        Z = StyleSheet/*g*/.create({
            touchableInputWrapper: {
                flex: 1
            },
            buttonsContainer: {
                paddingTop: V,
                paddingBottom: V,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: -4
            },
            commentBox: {
                backgroundColor: THColors/*S*/.backgroundColor,
                color: FIGColors/*u*/.mediumText
            },
            divider: {
                height: q
            },
            postButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: THColors/*S*/.groupsAccent
            },
            inactivePostButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: THColors/*S*/.fadedText
            },
            postButton: {
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                height: B,
                paddingLeft: U
            },
            stickerButton: {
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                height: B,
                paddingLeft: U
            },
            cameraButton: {
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                height: B,
                paddingHorizontal: U
            },
            offscreenButton: {
                left: $,
                position: "absolute",
                opacity: .5
            },
            inputFieldOverlay: {
                position: "absolute",
                height: B,
                left: 0,
                right: 0
            },
            icon: {
                width: 24,
                height: 24
            },
            previewContainer: {
                justifyContent: "center",
                alignItems: "center",
                height: B,
                paddingRight: 10
            },
            thumbnailPhoto: {
                height: B - 4,
                width: B - 4
            }
        });
    i.exports = J
});