__d("THInputBarView",["LayoutAnimation","Dimensions","DocumentContent","DocumentSelectionState","FIGColors","FBStickerInputView","Image","MentionsInput.react","MentionsInputTypeaheadView.react","NativeModulesDeprecated","React","StyleSheet","TimerMixin","Text","THAnimations","THColors","THCommentPhotoAttachmentPreview","THSounds","TouchableBounce","TouchableOpacity","TouchableHighlight","TouchableWithoutFeedback","View","clamp","copyDocumentContent","documentContentsAreEqual","fbt","getMentionsSearchSource","getTextWithEntitiesFromDocument","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        exports/*a*/ = require/*t*/("Dimensions"),
        LayoutAnimation/*s*/ = require/*t*/("DocumentContent"),
        Dimensions/*l*/ = require/*t*/("DocumentSelectionState"),
        DocumentContent/*u*/ = require/*t*/("FIGColors"),
        DocumentSelectionState/*c*/ = require/*t*/("FBStickerInputView"),
        FIGColors/*p*/ = require/*t*/("Image"),
        FBStickerInputView/*d*/ = require/*t*/("MentionsInput.react"),
        Image/*h*/ = require/*t*/("MentionsInputTypeaheadView.react"),
        MentionsInput.react/*f*/ = require/*t*/("NativeModulesDeprecated"),
        MentionsInputTypeaheadView.react/*m*/ = require/*t*/("React"),
        NativeModulesDeprecated/*g*/ = require/*t*/("StyleSheet"),
        React/*_*/ = require/*t*/("TimerMixin"),
        StyleSheet/*y*/ = require/*t*/("Text"),
        TimerMixin/*v*/ = require/*t*/("THAnimations"),
        Text/*S*/ = require/*t*/("THColors"),
        THAnimations/*b*/ = require/*t*/("THCommentPhotoAttachmentPreview"),
        THColors/*R*/ = require/*t*/("THSounds"),
        THCommentPhotoAttachmentPreview/*w*/ = require/*t*/("TouchableBounce"),
        THSounds/*C*/ = require/*t*/("TouchableOpacity"),
        TouchableBounce/*E*/ = require/*t*/("TouchableHighlight"),
        TouchableOpacity/*D*/ = require/*t*/("TouchableWithoutFeedback"),
        TouchableHighlight/*T*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*x*/ = require/*t*/("clamp"),
        View/*P*/ = require/*t*/("copyDocumentContent"),
        clamp/*I*/ = require/*t*/("documentContentsAreEqual"),
        copyDocumentContent/*F*/ = require/*t*/("fbt"),
        documentContentsAreEqual/*L*/ = require/*t*/("getMentionsSearchSource"),
        fbt/*M*/ = require/*t*/("getTextWithEntitiesFromDocument"),
        getMentionsSearchSource/*Q*/ = require/*t*/("ix"),
        getTextWithEntitiesFromDocument/*A*/ = MentionsInput.react/*f*/.RKTreehouseManager,
        ix/*k*/ = "stickerInputView",
        O = "keyboardInputView",
        N = "inputRow",
        G = "inputField",
        $ = exports/*a*/.get("window").width,
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
        z = copyDocumentContent/*F*/({
            type: "text",
            texts: ["Write exports/*a*/ comment..."],
            desc: "Placeholder text for comment input"
        }),
        X = copyDocumentContent/*F*/({
            type: "text",
            texts: ["Post"],
            desc: "Post exports/*a*/ comment"
        }),
        Y = copyDocumentContent/*F*/({
            type: "text",
            texts: ["Update"],
            desc: "Button label to save edits made to exports/*a*/ comment"
        }),
        J = MentionsInputTypeaheadView.react/*m*/.createClass({
            displayName: "THInputBarView",
            mixins: [React/*_*/],
            propTypes: {
                canCommentInline: MentionsInputTypeaheadView.react/*m*/.PropTypes.bool,
                onCommentInputRequested: MentionsInputTypeaheadView.react/*m*/.PropTypes.func,
                onCommentSubmit: MentionsInputTypeaheadView.react/*m*/.PropTypes.func,
                initialText: MentionsInputTypeaheadView.react/*m*/.PropTypes.instanceOf(LayoutAnimation/*s*/),
                isEditing: MentionsInputTypeaheadView.react/*m*/.PropTypes.bool,
                comparisonTextForCanPost: MentionsInputTypeaheadView.react/*m*/.PropTypes.instanceOf(LayoutAnimation/*s*/),
                hideInputButtons: MentionsInputTypeaheadView.react/*m*/.PropTypes.bool,
                groupID: MentionsInputTypeaheadView.react/*m*/.PropTypes.string,
                paddingHorizontal: MentionsInputTypeaheadView.react/*m*/.PropTypes.number,
                photoSource: MentionsInputTypeaheadView.react/*m*/.PropTypes.object,
                showPlaceholder: MentionsInputTypeaheadView.react/*m*/.PropTypes.bool
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
                    initialText: new LayoutAnimation/*s*/,
                    hideInputButtons: !1,
                    comparisonTextForCanPost: null,
                    photoSource: null,
                    isEditing: !1
                }
            },
            getInitialState: function() {
                return {
                    documentContent: View/*P*/(this.props.initialText),
                    selectionState: new Dimensions/*l*/(0, 0),
                    submittingComment: !1,
                    inputFieldHeight: B,
                    mentionsSource: this.props.canCommentInline && documentContentsAreEqual/*L*/(this.props.groupID),
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
                        requireDynamic/*n*/ = TouchableWithoutFeedback/*x*/(B, require/*t*/.height, H);
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
                }), getTextWithEntitiesFromDocument/*A*/ && getTextWithEntitiesFromDocument/*A*/.playSound(THColors/*R*/.commentCompleted), this.setState({
                    submittingComment: !0,
                    photoSource: null
                }), this.refs[G] && this.blurInput(), this.props.onCommentSubmit && this.requestAnimationFrame(function() {
                    var require/*t*/ = fbt/*M*/(this.state.documentContent);
                    require/*t*/ ? this.props.onCommentSubmit(require/*t*/, global/*e*/) : console.error("Should not be submitting empty comment.")
                }.bind(this))
            },
            handlePhotoPickerSelect: function(global/*e*/) {
                o.configureNext(TimerMixin/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: global/*e*/
                }), this.props.onPhotoChange && this.props.onPhotoChange(global/*e*/)
            },
            handleCameraButtonPress: function() {
                getTextWithEntitiesFromDocument/*A*/ ? (getTextWithEntitiesFromDocument/*A*/.openPhotoPicker(this.handlePhotoPickerSelect), this.setState({
                    inputView: O
                })) : console.warn("Photo picker not available")
            },
            handleStickerKeyboardSwitch: function() {
                this.setState(this.state.inputView === O ? {
                    inputView: ix/*k*/
                } : {
                    inputView: O
                }), this.focusInput()
            },
            handleStickerCommentSubmit: function(global/*e*/) {
                getTextWithEntitiesFromDocument/*A*/ && getTextWithEntitiesFromDocument/*A*/.playSound(THColors/*R*/.commentCompleted), this.setState({
                    submittingComment: !0
                }), this.refs[G] && this.blurInput();
                var require/*t*/ = global/*e*/.nativeEvent.stickerFBID,
                    requireDynamic/*n*/ = fbt/*M*/(this.state.documentContent);
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
                var global/*e*/ = this.props.initialText || new LayoutAnimation/*s*/;
                this.state.documentContent.update(global/*e*/.getText(), global/*e*/.getInlineStyles().slice(0), global/*e*/.getBlockStyles().slice(0), global/*e*/.getEntities().slice(0)), this.setState({
                    submittingComment: !1
                })
            },
            removePhotoAttachment: function() {
                o.configureNext(TimerMixin/*v*/.layout.photoCommentPreview), this.setState({
                    photoSource: null
                }), this.props.onPhotoChange && this.props.onPhotoChange(null)
            },
            renderPhotoAttachment: function() {
                var global/*e*/ = this.removePhotoAttachment;
                return this.state.photoSource && !this.props.canCommentInline && (global/*e*/ = null), this.state.photoSource && !this.props.isEditing ? MentionsInputTypeaheadView.react/*m*/.createElement(THAnimations/*b*/, {
                    photoSource: this.state.photoSource,
                    onRemoveAttachment: global/*e*/,
                    style: Z.thumbnailPhoto,
                    wrapperStyle: Z.previewContainer
                }) : null
            },
            renderStickerButton: function() {
                if (this.props.isEditing) return null;
                var global/*e*/;
                global/*e*/ = getMentionsSearchSource/*Q*/(this.state.inputView === ix/*k*/ ? "thSmileGlyphSelected" : "thSmileGlyphNormal");
                var require/*t*/ = MentionsInputTypeaheadView.react/*m*/.createElement(FIGColors/*p*/, {
                        source: global/*e*/,
                        style: Z.icon
                    }),
                    requireDynamic/*n*/ = [Z.stickerButton];
                return (this.isPostButtonActive() || this.props.hideInputButtons) && requireDynamic/*n*/.push(Z.offscreenButton), MentionsInputTypeaheadView.react/*m*/.createElement(TouchableOpacity/*D*/, {
                    onPress: this.handleStickerKeyboardSwitch
                }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    style: requireDynamic/*n*/
                }, require/*t*/))
            },
            renderCameraButton: function() {
                if (!this.props.canCommentInline || this.props.hideInputButtons || this.state.photoSource || this.props.isEditing) return null;
                var global/*e*/ = MentionsInputTypeaheadView.react/*m*/.createElement(FIGColors/*p*/, {
                    source: getMentionsSearchSource/*Q*/("thCameraGlyph"),
                    style: Z.icon
                });
                return MentionsInputTypeaheadView.react/*m*/.createElement(THSounds/*C*/, {
                    onPress: this.handleCameraButtonPress
                }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    style: Z.cameraButton
                }, global/*e*/))
            },
            renderPostButton: function() {
                var global/*e*/ = [Z.postButton],
                    require/*t*/ = Z.postButtonText,
                    requireDynamic/*n*/ = X,
                    requireLazy/*r*/ = this.handleCommentSubmit;
                return this.props.isEditing ? (requireDynamic/*n*/ = Y, this.isPostButtonActive() || (require/*t*/ = Z.inactivePostButtonText, requireLazy/*r*/ = null)) : (!this.isPostButtonActive() || this.props.hideInputButtons && !this.state.photoSource) && (global/*e*/.push(Z.offscreenButton), requireLazy/*r*/ = null), MentionsInputTypeaheadView.react/*m*/.createElement(THCommentPhotoAttachmentPreview/*w*/, {
                    onPress: requireLazy/*r*/
                }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    style: global/*e*/
                }, MentionsInputTypeaheadView.react/*m*/.createElement(StyleSheet/*y*/, {
                    style: require/*t*/
                }, requireDynamic/*n*/)))
            },
            isPostButtonActive: function() {
                var global/*e*/ = !this.state.documentContent.getText().trim();
                return this.props.isEditing ? !(this.state.submittingComment || global/*e*/ && !this.state.photoSource || clamp/*I*/(this.props.comparisonTextForCanPost, this.state.documentContent)) : !this.state.submittingComment && (!global/*e*/ || this.state.photoSource)
            },
            render: function() {
                var global/*e*/ = null,
                    require/*t*/ = null;
                switch (this.state.inputView) {
                    case O:
                        global/*e*/ = null;
                        break;
                    case ix/*k*/:
                        global/*e*/ = MentionsInputTypeaheadView.react/*m*/.createElement(DocumentSelectionState/*c*/, {
                            onStickerSelect: this.handleStickerCommentSubmit
                        }), require/*t*/ = MentionsInputTypeaheadView.react/*m*/.createElement(TouchableOpacity/*D*/, {
                            onPress: this.handleActiveInputPress
                        }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                            style: Z.inputFieldOverlay
                        }));
                        break;
                    default:
                        global/*e*/ = null
                }
                var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o;
                this.props.canCommentInline ? (requireDynamic/*n*/ = Text/*S*/.darkerDivider, requireLazy/*r*/ = W, module/*i*/ = this.state.inputFieldHeight, o = TouchableHighlight/*T*/.pointerEvents.unspecified) : (requireDynamic/*n*/ = Text/*S*/.divider, requireLazy/*r*/ = j, module/*i*/ = B, o = TouchableHighlight/*T*/.pointerEvents.boxOnly);
                var exports/*a*/ = [Z.commentBox, {
                        height: module/*i*/,
                        fontSize: requireLazy/*r*/
                    }],
                    LayoutAnimation/*s*/ = this.state.documentContent.getText() || this.props.canCommentInline && !this.props.showPlaceholder ? null : z,
                    Dimensions/*l*/ = MentionsInputTypeaheadView.react/*m*/.createElement(FBStickerInputView/*d*/, {
                        ref: G,
                        documentContent: this.state.documentContent,
                        placeholder: LayoutAnimation/*s*/,
                        placeholderTextColor: Text/*S*/.feedbackFadedText,
                        selectionState: this.state.selectionState,
                        mentionsSource: this.state.mentionsSource || void 0,
                        typeaheadView: Image/*h*/,
                        textInputStyle: exports/*a*/,
                        onInputFocus: this.resetCommentField,
                        multiline: !0,
                        onChange: this.handleChange,
                        inputView: global/*e*/
                    });
                return MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    ref: N
                }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    key: "divReply",
                    style: [Z.divider, {
                        backgroundColor: requireDynamic/*n*/
                    }]
                }), MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    style: [Z.buttonsContainer, {
                        paddingHorizontal: this.props.paddingHorizontal
                    }]
                }, this.renderPhotoAttachment(), MentionsInputTypeaheadView.react/*m*/.createElement(TouchableBounce/*E*/, {
                    activeOpacity: 1,
                    style: Z.touchableInputWrapper,
                    onPress: this.handleInactiveInputPress
                }, MentionsInputTypeaheadView.react/*m*/.createElement(TouchableHighlight/*T*/, {
                    pointerEvents: o
                }, Dimensions/*l*/)), require/*t*/, this.renderCameraButton(), this.renderPostButton(), this.renderStickerButton()))
            }
        }),
        Z = NativeModulesDeprecated/*g*/.create({
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
                backgroundColor: Text/*S*/.backgroundColor,
                color: DocumentContent/*u*/.mediumText
            },
            divider: {
                height: q
            },
            postButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: Text/*S*/.groupsAccent
            },
            inactivePostButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: Text/*S*/.fadedText
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