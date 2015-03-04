__d("THInputBarView",["LayoutAnimation","Dimensions","DocumentContent","DocumentSelectionState","FIGColors","FBStickerInputView","Image","MentionsInput.react","MentionsInputTypeaheadView.react","NativeModulesDeprecated","React","StyleSheet","TimerMixin","Text","THAnimations","THColors","THCommentPhotoAttachmentPreview","THSounds","TouchableBounce","TouchableOpacity","TouchableHighlight","TouchableWithoutFeedback","View","clamp","copyDocumentContent","documentContentsAreEqual","fbt","getMentionsSearchSource","getTextWithEntitiesFromDocument","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var LayoutAnimation/*o*/ = require/*t*/("LayoutAnimation"),
        Dimensions/*a*/ = require/*t*/("Dimensions"),
        DocumentContent/*s*/ = require/*t*/("DocumentContent"),
        DocumentSelectionState/*l*/ = require/*t*/("DocumentSelectionState"),
        FIGColors/*u*/ = require/*t*/("FIGColors"),
        FBStickerInputView/*c*/ = require/*t*/("FBStickerInputView"),
        Image/*p*/ = require/*t*/("Image"),
        d = require/*t*/("MentionsInput.react"),
        h = require/*t*/("MentionsInputTypeaheadView.react"),
        NativeModulesDeprecated/*f*/ = require/*t*/("NativeModulesDeprecated"),
        React/*m*/ = require/*t*/("React"),
        StyleSheet/*g*/ = require/*t*/("StyleSheet"),
        TimerMixin/*_*/ = require/*t*/("TimerMixin"),
        Text/*y*/ = require/*t*/("Text"),
        THAnimations/*v*/ = require/*t*/("THAnimations"),
        THColors/*S*/ = require/*t*/("THColors"),
        THCommentPhotoAttachmentPreview/*b*/ = require/*t*/("THCommentPhotoAttachmentPreview"),
        THSounds/*R*/ = require/*t*/("THSounds"),
        TouchableBounce/*w*/ = require/*t*/("TouchableBounce"),
        TouchableOpacity/*C*/ = require/*t*/("TouchableOpacity"),
        TouchableHighlight/*E*/ = require/*t*/("TouchableHighlight"),
        TouchableWithoutFeedback/*D*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*T*/ = require/*t*/("View"),
        clamp/*x*/ = require/*t*/("clamp"),
        copyDocumentContent/*P*/ = require/*t*/("copyDocumentContent"),
        documentContentsAreEqual/*I*/ = require/*t*/("documentContentsAreEqual"),
        fbt/*F*/ = require/*t*/("fbt"),
        getMentionsSearchSource/*L*/ = require/*t*/("getMentionsSearchSource"),
        getTextWithEntitiesFromDocument/*M*/ = require/*t*/("getTextWithEntitiesFromDocument"),
        ix/*Q*/ = require/*t*/("ix"),
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
        K = function(global/*e*/) {
            return global/*e*/ + 2 * V + q
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
            handleChange: function(global/*e*/) {
                if (global/*e*/) {
                    var require/*t*/ = global/*e*/.nativeEvent.contentSize,
                        requireDynamic/*n*/ = clamp/*x*/(B, require/*t*/.height, H);
                    this.state.inputFieldHeight !== requireDynamic/*n*/ && (this.state.documentContent.bumpVersion(), this.setState({
                        inputFieldHeight: requireDynamic/*n*/
                    }), this.props.onHeightChange && this.props.onHeightChange(K(requireDynamic/*n*/)))
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
                var global/*e*/ = null;
                this.state.photoSource && (global/*e*/ = {
                    style_list: ["photo"],
                    media: {
                        image: this.state.photoSource
                    }
                }), A && A.playSound(THSounds/*R*/.commentCompleted), this.setState({
                    submittingComment: !0,
                    photoSource: null
                }), this.refs[G] && this.blurInput(), this.props.onCommentSubmit && this.requestAnimationFrame(function() {
                    var require/*t*/ = getTextWithEntitiesFromDocument/*M*/(this.state.documentContent);
                    require/*t*/ ? this.props.onCommentSubmit(require/*t*/, global/*e*/) : console.error("Should not be submitting empty comment.")
                }.bind(this))
            },
            handlePhotoPickerSelect: function(global/*e*/) {
                LayoutAnimation/*o*/.configureNext(THAnimations/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: global/*e*/
                }), this.props.onPhotoChange && this.props.onPhotoChange(global/*e*/)
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
            handleStickerCommentSubmit: function(global/*e*/) {
                A && A.playSound(THSounds/*R*/.commentCompleted), this.setState({
                    submittingComment: !0
                }), this.refs[G] && this.blurInput();
                var require/*t*/ = global/*e*/.nativeEvent.stickerFBID,
                    requireDynamic/*n*/ = getTextWithEntitiesFromDocument/*M*/(this.state.documentContent);
                if (requireDynamic/*n*/ && require/*t*/) {
                    var requireLazy/*r*/ = {
                        style_list: ["sticker"],
                        media: {
                            id: require/*t*/.toString()
                        }
                    };
                    this.props.onCommentSubmit(requireDynamic/*n*/, requireLazy/*r*/)
                } else console.error("Should not be submitting invalid sticker.")
            },
            componentWillReceiveProps: function(global/*e*/) {
                var require/*t*/ = this.props.initialText;
                this.props = global/*e*/, global/*e*/.initialText !== require/*t*/ && this.resetCommentField(), this.setState({
                    photoSource: this.props.photoSource
                })
            },
            resetCommentField: function() {
                var global/*e*/ = this.props.initialText || new DocumentContent/*s*/;
                this.state.documentContent.update(global/*e*/.getText(), global/*e*/.getInlineStyles().slice(0), global/*e*/.getBlockStyles().slice(0), global/*e*/.getEntities().slice(0)), this.setState({
                    submittingComment: !1
                })
            },
            removePhotoAttachment: function() {
                LayoutAnimation/*o*/.configureNext(THAnimations/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: null
                }), this.props.onPhotoChange && this.props.onPhotoChange(null)
            },
            renderPhotoAttachment: function() {
                var global/*e*/ = this.removePhotoAttachment;
                return this.state.photoSource && !this.props.canCommentInline && (global/*e*/ = null), this.state.photoSource && !this.props.isEditing ? React/*m*/.createElement(THCommentPhotoAttachmentPreview/*b*/, {
                    photoSource: this.state.photoSource,
                    onRemoveAttachment: global/*e*/,
                    style: Z.thumbnailPhoto,
                    wrapperStyle: Z.previewContainer
                }) : null
            },
            renderStickerButton: function() {
                if (this.props.isEditing) return null;
                var global/*e*/;
                global/*e*/ = ix/*Q*/(this.state.inputView === k ? "thSmileGlyphSelected" : "thSmileGlyphNormal");
                var require/*t*/ = React/*m*/.createElement(Image/*p*/, {
                        source: global/*e*/,
                        style: Z.icon
                    }),
                    requireDynamic/*n*/ = [Z.stickerButton];
                return (this.isPostButtonActive() || this.props.hideInputButtons) && requireDynamic/*n*/.push(Z.offscreenButton), React/*m*/.createElement(TouchableWithoutFeedback/*D*/, {
                    onPress: this.handleStickerKeyboardSwitch
                }, React/*m*/.createElement(View/*T*/, {
                    style: requireDynamic/*n*/
                }, require/*t*/))
            },
            renderCameraButton: function() {
                if (!this.props.canCommentInline || this.props.hideInputButtons || this.state.photoSource || this.props.isEditing) return null;
                var global/*e*/ = React/*m*/.createElement(Image/*p*/, {
                    source: ix/*Q*/("thCameraGlyph"),
                    style: Z.icon
                });
                return React/*m*/.createElement(TouchableOpacity/*C*/, {
                    onPress: this.handleCameraButtonPress
                }, React/*m*/.createElement(View/*T*/, {
                    style: Z.cameraButton
                }, global/*e*/))
            },
            renderPostButton: function() {
                var global/*e*/ = [Z.postButton],
                    require/*t*/ = Z.postButtonText,
                    requireDynamic/*n*/ = X,
                    requireLazy/*r*/ = this.handleCommentSubmit;
                return this.props.isEditing ? (requireDynamic/*n*/ = Y, this.isPostButtonActive() || (require/*t*/ = Z.inactivePostButtonText, requireLazy/*r*/ = null)) : (!this.isPostButtonActive() || this.props.hideInputButtons && !this.state.photoSource) && (global/*e*/.push(Z.offscreenButton), requireLazy/*r*/ = null), React/*m*/.createElement(TouchableBounce/*w*/, {
                    onPress: requireLazy/*r*/
                }, React/*m*/.createElement(View/*T*/, {
                    style: global/*e*/
                }, React/*m*/.createElement(Text/*y*/, {
                    style: require/*t*/
                }, requireDynamic/*n*/)))
            },
            isPostButtonActive: function() {
                var global/*e*/ = !this.state.documentContent.getText().trim();
                return this.props.isEditing ? !(this.state.submittingComment || global/*e*/ && !this.state.photoSource || documentContentsAreEqual/*I*/(this.props.comparisonTextForCanPost, this.state.documentContent)) : !this.state.submittingComment && (!global/*e*/ || this.state.photoSource)
            },
            render: function() {
                var global/*e*/ = null,
                    require/*t*/ = null;
                switch (this.state.inputView) {
                    case O:
                        global/*e*/ = null;
                        break;
                    case k:
                        global/*e*/ = React/*m*/.createElement(FBStickerInputView/*c*/, {
                            onStickerSelect: this.handleStickerCommentSubmit
                        }), require/*t*/ = React/*m*/.createElement(TouchableWithoutFeedback/*D*/, {
                            onPress: this.handleActiveInputPress
                        }, React/*m*/.createElement(View/*T*/, {
                            style: Z.inputFieldOverlay
                        }));
                        break;
                    default:
                        global/*e*/ = null
                }
                var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, LayoutAnimation/*o*/;
                this.props.canCommentInline ? (requireDynamic/*n*/ = THColors/*S*/.darkerDivider, requireLazy/*r*/ = W, module/*i*/ = this.state.inputFieldHeight, LayoutAnimation/*o*/ = View/*T*/.pointerEvents.unspecified) : (requireDynamic/*n*/ = THColors/*S*/.divider, requireLazy/*r*/ = j, module/*i*/ = B, LayoutAnimation/*o*/ = View/*T*/.pointerEvents.boxOnly);
                var Dimensions/*a*/ = [Z.commentBox, {
                        height: module/*i*/,
                        fontSize: requireLazy/*r*/
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
                        inputView: global/*e*/
                    });
                return React/*m*/.createElement(View/*T*/, {
                    ref: N
                }, React/*m*/.createElement(View/*T*/, {
                    key: "divReply",
                    style: [Z.divider, {
                        backgroundColor: requireDynamic/*n*/
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
                }, DocumentSelectionState/*l*/)), require/*t*/, this.renderCameraButton(), this.renderPostButton(), this.renderStickerButton()))
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
    module/*i*/.exports = J
});