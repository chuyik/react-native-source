__d("THInputBarView",["LayoutAnimation","Dimensions","DocumentContent","DocumentSelectionState","FIGColors","FBStickerInputView","Image","MentionsInput.react","MentionsInputTypeaheadView.react","NativeModulesDeprecated","React","StyleSheet","TimerMixin","Text","THAnimations","THColors","THCommentPhotoAttachmentPreview","THSounds","TouchableBounce","TouchableOpacity","TouchableHighlight","TouchableWithoutFeedback","View","clamp","copyDocumentContent","documentContentsAreEqual","fbt","getMentionsSearchSource","getTextWithEntitiesFromDocument","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        a = require/*t*/("Dimensions"),
        s = require/*t*/("DocumentContent"),
        l = require/*t*/("DocumentSelectionState"),
        u = require/*t*/("FIGColors"),
        c = require/*t*/("FBStickerInputView"),
        p = require/*t*/("Image"),
        d = require/*t*/("MentionsInput.react"),
        h = require/*t*/("MentionsInputTypeaheadView.react"),
        f = require/*t*/("NativeModulesDeprecated"),
        m = require/*t*/("React"),
        g = require/*t*/("StyleSheet"),
        _ = require/*t*/("TimerMixin"),
        y = require/*t*/("Text"),
        v = require/*t*/("THAnimations"),
        S = require/*t*/("THColors"),
        b = require/*t*/("THCommentPhotoAttachmentPreview"),
        R = require/*t*/("THSounds"),
        w = require/*t*/("TouchableBounce"),
        C = require/*t*/("TouchableOpacity"),
        E = require/*t*/("TouchableHighlight"),
        D = require/*t*/("TouchableWithoutFeedback"),
        T = require/*t*/("View"),
        x = require/*t*/("clamp"),
        P = require/*t*/("copyDocumentContent"),
        I = require/*t*/("documentContentsAreEqual"),
        F = require/*t*/("fbt"),
        L = require/*t*/("getMentionsSearchSource"),
        M = require/*t*/("getTextWithEntitiesFromDocument"),
        Q = require/*t*/("ix"),
        A = f.RKTreehouseManager,
        k = "stickerInputView",
        O = "keyboardInputView",
        N = "inputRow",
        G = "inputField",
        $ = a.get("window").width,
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
        z = F({
            type: "text",
            texts: ["Write a comment..."],
            desc: "Placeholder text for comment input"
        }),
        X = F({
            type: "text",
            texts: ["Post"],
            desc: "Post a comment"
        }),
        Y = F({
            type: "text",
            texts: ["Update"],
            desc: "Button label to save edits made to a comment"
        }),
        J = m.createClass({
            displayName: "THInputBarView",
            mixins: [_],
            propTypes: {
                canCommentInline: m.PropTypes.bool,
                onCommentInputRequested: m.PropTypes.func,
                onCommentSubmit: m.PropTypes.func,
                initialText: m.PropTypes.instanceOf(s),
                isEditing: m.PropTypes.bool,
                comparisonTextForCanPost: m.PropTypes.instanceOf(s),
                hideInputButtons: m.PropTypes.bool,
                groupID: m.PropTypes.string,
                paddingHorizontal: m.PropTypes.number,
                photoSource: m.PropTypes.object,
                showPlaceholder: m.PropTypes.bool
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
                    initialText: new s,
                    hideInputButtons: !1,
                    comparisonTextForCanPost: null,
                    photoSource: null,
                    isEditing: !1
                }
            },
            getInitialState: function() {
                return {
                    documentContent: P(this.props.initialText),
                    selectionState: new l(0, 0),
                    submittingComment: !1,
                    inputFieldHeight: B,
                    mentionsSource: this.props.canCommentInline && L(this.props.groupID),
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
                        requireDynamic/*n*/ = x(B, require/*t*/.height, H);
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
                }), A && A.playSound(R.commentCompleted), this.setState({
                    submittingComment: !0,
                    photoSource: null
                }), this.refs[G] && this.blurInput(), this.props.onCommentSubmit && this.requestAnimationFrame(function() {
                    var require/*t*/ = M(this.state.documentContent);
                    require/*t*/ ? this.props.onCommentSubmit(require/*t*/, global/*e*/) : console.error("Should not be submitting empty comment.")
                }.bind(this))
            },
            handlePhotoPickerSelect: function(global/*e*/) {
                o.configureNext(v.layout.photoCommentPreview), this.setState({
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
                A && A.playSound(R.commentCompleted), this.setState({
                    submittingComment: !0
                }), this.refs[G] && this.blurInput();
                var require/*t*/ = global/*e*/.nativeEvent.stickerFBID,
                    requireDynamic/*n*/ = M(this.state.documentContent);
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
                var global/*e*/ = this.props.initialText || new s;
                this.state.documentContent.update(global/*e*/.getText(), global/*e*/.getInlineStyles().slice(0), global/*e*/.getBlockStyles().slice(0), global/*e*/.getEntities().slice(0)), this.setState({
                    submittingComment: !1
                })
            },
            removePhotoAttachment: function() {
                o.configureNext(v.layout.photoCommentPreview), this.setState({
                    photoSource: null
                }), this.props.onPhotoChange && this.props.onPhotoChange(null)
            },
            renderPhotoAttachment: function() {
                var global/*e*/ = this.removePhotoAttachment;
                return this.state.photoSource && !this.props.canCommentInline && (global/*e*/ = null), this.state.photoSource && !this.props.isEditing ? m.createElement(b, {
                    photoSource: this.state.photoSource,
                    onRemoveAttachment: global/*e*/,
                    style: Z.thumbnailPhoto,
                    wrapperStyle: Z.previewContainer
                }) : null
            },
            renderStickerButton: function() {
                if (this.props.isEditing) return null;
                var global/*e*/;
                global/*e*/ = Q(this.state.inputView === k ? "thSmileGlyphSelected" : "thSmileGlyphNormal");
                var require/*t*/ = m.createElement(p, {
                        source: global/*e*/,
                        style: Z.icon
                    }),
                    requireDynamic/*n*/ = [Z.stickerButton];
                return (this.isPostButtonActive() || this.props.hideInputButtons) && requireDynamic/*n*/.push(Z.offscreenButton), m.createElement(D, {
                    onPress: this.handleStickerKeyboardSwitch
                }, m.createElement(T, {
                    style: requireDynamic/*n*/
                }, require/*t*/))
            },
            renderCameraButton: function() {
                if (!this.props.canCommentInline || this.props.hideInputButtons || this.state.photoSource || this.props.isEditing) return null;
                var global/*e*/ = m.createElement(p, {
                    source: Q("thCameraGlyph"),
                    style: Z.icon
                });
                return m.createElement(C, {
                    onPress: this.handleCameraButtonPress
                }, m.createElement(T, {
                    style: Z.cameraButton
                }, global/*e*/))
            },
            renderPostButton: function() {
                var global/*e*/ = [Z.postButton],
                    require/*t*/ = Z.postButtonText,
                    requireDynamic/*n*/ = X,
                    requireLazy/*r*/ = this.handleCommentSubmit;
                return this.props.isEditing ? (requireDynamic/*n*/ = Y, this.isPostButtonActive() || (require/*t*/ = Z.inactivePostButtonText, requireLazy/*r*/ = null)) : (!this.isPostButtonActive() || this.props.hideInputButtons && !this.state.photoSource) && (global/*e*/.push(Z.offscreenButton), requireLazy/*r*/ = null), m.createElement(w, {
                    onPress: requireLazy/*r*/
                }, m.createElement(T, {
                    style: global/*e*/
                }, m.createElement(y, {
                    style: require/*t*/
                }, requireDynamic/*n*/)))
            },
            isPostButtonActive: function() {
                var global/*e*/ = !this.state.documentContent.getText().trim();
                return this.props.isEditing ? !(this.state.submittingComment || global/*e*/ && !this.state.photoSource || I(this.props.comparisonTextForCanPost, this.state.documentContent)) : !this.state.submittingComment && (!global/*e*/ || this.state.photoSource)
            },
            render: function() {
                var global/*e*/ = null,
                    require/*t*/ = null;
                switch (this.state.inputView) {
                    case O:
                        global/*e*/ = null;
                        break;
                    case k:
                        global/*e*/ = m.createElement(c, {
                            onStickerSelect: this.handleStickerCommentSubmit
                        }), require/*t*/ = m.createElement(D, {
                            onPress: this.handleActiveInputPress
                        }, m.createElement(T, {
                            style: Z.inputFieldOverlay
                        }));
                        break;
                    default:
                        global/*e*/ = null
                }
                var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o;
                this.props.canCommentInline ? (requireDynamic/*n*/ = S.darkerDivider, requireLazy/*r*/ = W, module/*i*/ = this.state.inputFieldHeight, o = T.pointerEvents.unspecified) : (requireDynamic/*n*/ = S.divider, requireLazy/*r*/ = j, module/*i*/ = B, o = T.pointerEvents.boxOnly);
                var a = [Z.commentBox, {
                        height: module/*i*/,
                        fontSize: requireLazy/*r*/
                    }],
                    s = this.state.documentContent.getText() || this.props.canCommentInline && !this.props.showPlaceholder ? null : z,
                    l = m.createElement(d, {
                        ref: G,
                        documentContent: this.state.documentContent,
                        placeholder: s,
                        placeholderTextColor: S.feedbackFadedText,
                        selectionState: this.state.selectionState,
                        mentionsSource: this.state.mentionsSource || void 0,
                        typeaheadView: h,
                        textInputStyle: a,
                        onInputFocus: this.resetCommentField,
                        multiline: !0,
                        onChange: this.handleChange,
                        inputView: global/*e*/
                    });
                return m.createElement(T, {
                    ref: N
                }, m.createElement(T, {
                    key: "divReply",
                    style: [Z.divider, {
                        backgroundColor: requireDynamic/*n*/
                    }]
                }), m.createElement(T, {
                    style: [Z.buttonsContainer, {
                        paddingHorizontal: this.props.paddingHorizontal
                    }]
                }, this.renderPhotoAttachment(), m.createElement(E, {
                    activeOpacity: 1,
                    style: Z.touchableInputWrapper,
                    onPress: this.handleInactiveInputPress
                }, m.createElement(T, {
                    pointerEvents: o
                }, l)), require/*t*/, this.renderCameraButton(), this.renderPostButton(), this.renderStickerButton()))
            }
        }),
        Z = g.create({
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
                backgroundColor: S.backgroundColor,
                color: u.mediumText
            },
            divider: {
                height: q
            },
            postButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: S.groupsAccent
            },
            inactivePostButtonText: {
                fontSize: 17,
                fontWeight: "bold",
                color: S.fadedText
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