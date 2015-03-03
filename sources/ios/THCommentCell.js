__d("THCommentCell",["CommentDeleteAction","CommentEditAction","CommentMenu","FBAlertManager","FBTextEntity","FBTextWithEntities.react","GraphQLNodeStatus","POPAnimation","POPAnimationMixin","React","ReactGraphQL","StyleSheet","Text","THColors","THCommentAttachment","THCommentMetadata","THDockedInputContainer","THProfilePicture","THViewConstants","TouchableWithoutFeedback","UnicodeBidi","View","createDocumentFromTextWithEntities","documentContentsAreEqual","fbt","invariant","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("CommentDeleteAction"),
        exports/*a*/ = require/*t*/("CommentEditAction"),
        CommentDeleteAction/*s*/ = require/*t*/("CommentMenu"),
        CommentEditAction/*l*/ = require/*t*/("FBAlertManager"),
        CommentMenu/*u*/ = require/*t*/("FBTextEntity"),
        FBAlertManager/*c*/ = require/*t*/("FBTextWithEntities.react"),
        FBTextEntity/*p*/ = require/*t*/("GraphQLNodeStatus"),
        FBTextWithEntities.react/*d*/ = require/*t*/("POPAnimation"),
        GraphQLNodeStatus/*h*/ = require/*t*/("POPAnimationMixin"),
        POPAnimation/*f*/ = require/*t*/("React"),
        POPAnimationMixin/*m*/ = require/*t*/("ReactGraphQL"),
        React/*g*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*_*/ = require/*t*/("Text"),
        StyleSheet/*y*/ = require/*t*/("THColors"),
        Text/*v*/ = require/*t*/("THCommentAttachment"),
        THColors/*S*/ = require/*t*/("THCommentMetadata"),
        THCommentAttachment/*b*/ = require/*t*/("THDockedInputContainer"),
        THCommentMetadata/*R*/ = require/*t*/("THProfilePicture"),
        THDockedInputContainer/*w*/ = require/*t*/("THViewConstants"),
        THProfilePicture/*C*/ = require/*t*/("TouchableWithoutFeedback"),
        THViewConstants/*E*/ = require/*t*/("UnicodeBidi"),
        TouchableWithoutFeedback/*D*/ = require/*t*/("View"),
        UnicodeBidi/*T*/ = require/*t*/("createDocumentFromTextWithEntities"),
        View/*x*/ = require/*t*/("documentContentsAreEqual"),
        createDocumentFromTextWithEntities/*P*/ = require/*t*/("fbt"),
        documentContentsAreEqual/*I*/ = require/*t*/("invariant"),
        fbt/*F*/ = require/*t*/("isEmpty"),
        invariant/*L*/ = require/*t*/("keyOf"),
        isEmpty/*M*/ = 250,
        keyOf/*Q*/ = 6,
        A = 24,
        k = invariant/*L*/({
            containerRef: null
        }),
        O = invariant/*L*/({
            menuRef: null
        }),
        N = POPAnimation/*f*/.createClass({
            displayName: "THCommentCell",
            propTypes: {
                lastViewTime: POPAnimation/*f*/.PropTypes.number,
                onInputRequested: POPAnimation/*f*/.PropTypes.func,
                onDeleteSuccess: POPAnimation/*f*/.PropTypes.func,
                showExpanded: POPAnimation/*f*/.PropTypes.bool,
                viewContext: POPAnimation/*f*/.PropTypes.string
            },
            mixins: [POPAnimationMixin/*m*/.Mixin, GraphQLNodeStatus/*h*/],
            statics: {
                queries: {
                    feedback: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THCommentCell_feedback", "Feedback", [new global/*e*/.Field("id")], null, {
                                scope: "THCommentCell_feedback"
                            })
                        }()
                    },
                    authorOptimisticPrefetch: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THCommentCell_authorOptimisticPrefetch", "Actor", [new requireDynamic/*n*/.Field("id"), new requireDynamic/*n*/.Field("name"), new requireDynamic/*n*/.Field("__type__", [new requireDynamic/*n*/.Field("name"), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THCommentCell_authorOptimisticPrefetch"
                            })
                        }(THCommentMetadata/*R*/.getQuery("actor"))
                    },
                    comment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var exports/*a*/ = require/*t*/.__GraphQL;
                            return new exports/*a*/.QueryFragment("THCommentCell_comment", "Comment", [new exports/*a*/.Field("id"), new exports/*a*/.Field("created_time"), new exports/*a*/.Field("body", [new exports/*a*/.Field("text"), new exports/*a*/.Field("ranges", [new exports/*a*/.Field("entity", [new exports/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new exports/*a*/.Field("__type__", [new exports/*a*/.Field("name"), new exports/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new exports/*a*/.Field("offset"), new exports/*a*/.Field("length")], null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)]), new exports/*a*/.Field("feedback", [new exports/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new exports/*a*/.Field("author", [new exports/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new exports/*a*/.Field("name"), new exports/*a*/.Field("__type__", [new exports/*a*/.Field("name"), new exports/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new exports/*a*/.Field("attachments", [new exports/*a*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new exports/*a*/.Field("media", [new exports/*a*/.Field("id"), new exports/*a*/.Field("width"), new exports/*a*/.Field("height"), new exports/*a*/.Field("image", [new exports/*a*/.Field("uri")])])], [require/*t*/.__frag(o)], null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/)], {
                                scope: "THCommentCell_comment"
                            })
                        }(CommentDeleteAction/*s*/.getQuery("comment"), THColors/*S*/.getQuery("comment"), FBAlertManager/*c*/.getQuery("text"), THCommentMetadata/*R*/.getQuery("actor"), Text/*v*/.getQuery("attachment"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THCommentCell_group", "Group", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THCommentCell_group"
                            })
                        }(THCommentMetadata/*R*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    pendingDelete: !1
                }
            },
            getPendingText: function() {
                return this.state.pendingDelete ? createDocumentFromTextWithEntities/*P*/({
                    type: "text",
                    texts: ["Deleting..."],
                    desc: "Indicator that exports/*a*/ comment is being deleted."
                }) : FBTextEntity/*p*/.isOptimistic(this.props.comment) ? createDocumentFromTextWithEntities/*P*/({
                    type: "text",
                    texts: ["Posting..."],
                    desc: "Comment posting to server."
                }) : null
            },
            handleEditBegin: function() {
                var global/*e*/ = this.props.comment;
                this.state.savedInitialText || (this.state.savedInitialText = UnicodeBidi/*T*/(global/*e*/.body)), this.handleCommentEditRequested(this.refs[k].getNativeNode, this.state.savedInitialText)
            },
            handleCommentEditRequested: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.comment,
                    requireLazy/*r*/ = requireDynamic/*n*/.attachments[0] && requireDynamic/*n*/.attachments[0].style_list && "photo" === requireDynamic/*n*/.attachments[0].style_list[0] && requireDynamic/*n*/.attachments[0].media && requireDynamic/*n*/.attachments[0].media.image;
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: global/*e*/,
                    mode: THCommentAttachment/*b*/.Mode.partialWash,
                    initialText: require/*t*/,
                    comparisonTextForCanPost: this.state.savedInitialText,
                    photoSource: requireLazy/*r*/,
                    isEditing: !0
                }, this.handleCommentEditSubmit, this.handleCommentEditWillAbort), this.startAnimation(k, FBTextWithEntities.react/*d*/.createLinearAnimation($.partialFadeOut))
            },
            handleCommentEditSubmit: function(global/*e*/) {
                this.startAnimation(k, FBTextWithEntities.react/*d*/.createLinearAnimation($.fadeIn), function() {
                    exports/*a*/.handleCommentEdit(this.props.comment.id, {
                        text: global/*e*/
                    }), this.setState({
                        savedInitialText: null
                    })
                }.bind(this))
            },
            handleCommentEditWillAbort: function(global/*e*/) {
                this.state.savedInitialText || (this.state.savedInitialText = global/*e*/.initialText), this.startAnimation(k, FBTextWithEntities.react/*d*/.createLinearAnimation($.fadeIn)), View/*x*/(global/*e*/.text, this.state.savedInitialText) || CommentEditAction/*l*/.alertWithArgs({
                    title: createDocumentFromTextWithEntities/*P*/({
                        type: "text",
                        texts: ["Alert"],
                        desc: "Title of confirmation message for aborting exports/*a*/ comment edit."
                    }),
                    message: createDocumentFromTextWithEntities/*P*/({
                        type: "text",
                        texts: ["Are you sure you want to discard your changes to this comment?"],
                        desc: "Confirmation message for aborting exports/*a*/ comment edit."
                    }),
                    buttons: [{
                        discard: createDocumentFromTextWithEntities/*P*/({
                            type: "text",
                            texts: ["Discard"],
                            desc: "Confirmation button for discarding exports/*a*/ comment edit."
                        })
                    }, {
                        cancel: createDocumentFromTextWithEntities/*P*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for discarding exports/*a*/ comment edit."
                        })
                    }]
                }, this.handleDiscardEditConfirmation.bind(this, global/*e*/))
            },
            handleDiscardEditConfirmation: function(global/*e*/, require/*t*/) {
                return "discard" === require/*t*/ ? void this.setState({
                    savedInitialText: null
                }) : "cancel" === require/*t*/ ? void this.handleCommentEditRequested(global/*e*/.getTappedNodeHandle, global/*e*/.text) : void documentContentsAreEqual/*I*/(0, "Unrecognized discard confirmation key: " + require/*t*/)
            },
            handleDelete: function() {
                CommentEditAction/*l*/.alertWithArgs({
                    title: createDocumentFromTextWithEntities/*P*/({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Title of confirmation message for deleting exports/*a*/ comment"
                    }),
                    message: createDocumentFromTextWithEntities/*P*/({
                        type: "text",
                        texts: ["You're about to delete this comment."],
                        desc: "Confirmation message for deleting exports/*a*/ comment."
                    }),
                    buttons: [{
                        "delete": createDocumentFromTextWithEntities/*P*/({
                            type: "text",
                            texts: ["Delete"],
                            desc: "Confirmation button for deleting exports/*a*/ comment."
                        })
                    }, {
                        cancel: createDocumentFromTextWithEntities/*P*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting exports/*a*/ comment."
                        })
                    }]
                }, this.handleDeleteConfirmation)
            },
            handleDeleteConfirmation: function(global/*e*/) {
                "cancel" !== global/*e*/ && ("delete" !== global/*e*/ && documentContentsAreEqual/*I*/(0, "Unrecognized delete confirmation key: " + global/*e*/), this.setState({
                    pendingDelete: !0
                }), this.startAnimation(k, {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: .3,
                    duration: .4
                }, function() {
                    o.deleteComment(this.props.comment.id, this.props.feedback.id, this.handleDeleteFailure, this.props.onDeleteSuccess)
                }.bind(this)))
            },
            handleDeleteFailure: function(global/*e*/) {
                console.error("Error deleting comment " + this.props.comment.id + ":\requireDynamic/*n*/   ", global/*e*/), this.startAnimation(k, {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: 1,
                    duration: .2
                }), this.setState({
                    pendingDelete: !1
                }), CommentEditAction/*l*/.alert(createDocumentFromTextWithEntities/*P*/({
                    type: "text",
                    texts: ["Failed to delete comment."],
                    desc: "Error message after exports/*a*/ failed delete"
                }))
            },
            renderAttachment: function() {
                var global/*e*/ = this.props.comment;
                return fbt/*F*/(global/*e*/.attachments) ? null : POPAnimation/*f*/.createElement(TouchableWithoutFeedback/*D*/, {
                    style: G.attachmentContainer
                }, POPAnimation/*f*/.createElement(Text/*v*/, {
                    attachment: global/*e*/.attachments[0]
                }))
            },
            render: function() {
                var global/*e*/ = this.props.comment,
                    require/*t*/ = [G.text];
                this.props.viewContext !== THDockedInputContainer/*w*/.PERMALINK && this.props.lastViewTime && this.props.lastViewTime < global/*e*/.created_time && require/*t*/.push(G.newCommentTitle);
                var requireDynamic/*n*/, requireLazy/*r*/;
                if (global/*e*/.body) {
                    var module/*i*/ = null,
                        o = null;
                    this.props.viewContext !== THDockedInputContainer/*w*/.PERMALINK && (module/*i*/ = isEmpty/*M*/, o = keyOf/*Q*/), requireLazy/*r*/ = THViewConstants/*E*/.isDirectionRTL(global/*e*/.body.text) ? "\requireDynamic/*n*/" : "  ", requireDynamic/*n*/ = POPAnimation/*f*/.createElement(FBAlertManager/*c*/, {
                        key: "commentBody",
                        text: global/*e*/.body,
                        textStyle: G.text,
                        shouldTruncate: !this.props.showExpanded,
                        seeMoreStyle: G.seeMore,
                        maxLength: module/*i*/,
                        maxLines: o
                    })
                } else requireDynamic/*n*/ = POPAnimation/*f*/.createElement(ReactGraphQL/*_*/, null);
                var exports/*a*/ = FBTextEntity/*p*/.isOptimistic(global/*e*/) ? G.posting : null;
                return POPAnimation/*f*/.createElement(THProfilePicture/*C*/, {
                    onPress: this.showMenu
                }, POPAnimation/*f*/.createElement(TouchableWithoutFeedback/*D*/, {
                    ref: k,
                    style: [G.container, exports/*a*/]
                }, POPAnimation/*f*/.createElement(THCommentMetadata/*R*/, {
                    actor: global/*e*/.author,
                    height: A,
                    group: this.props.group
                }), POPAnimation/*f*/.createElement(TouchableWithoutFeedback/*D*/, {
                    style: G.textContainer
                }, POPAnimation/*f*/.createElement(ReactGraphQL/*_*/, {
                    textStyle: G.text
                }, POPAnimation/*f*/.createElement(CommentMenu/*u*/, {
                    entity: global/*e*/.author,
                    style: G.title,
                    textStyle: require/*t*/,
                    text: global/*e*/.author.name
                }), requireLazy/*r*/, requireDynamic/*n*/), this.renderAttachment(), POPAnimation/*f*/.createElement(TouchableWithoutFeedback/*D*/, {
                    style: G.metadataContainer
                }, POPAnimation/*f*/.createElement(THColors/*S*/, {
                    comment: global/*e*/,
                    pendingText: this.getPendingText()
                }))), POPAnimation/*f*/.createElement(CommentDeleteAction/*s*/, {
                    ref: O,
                    comment: global/*e*/,
                    onDelete: this.handleDelete,
                    onEdit: this.handleEditBegin
                })))
            },
            showMenu: function() {
                this.refs[O].open()
            }
        }),
        G = React/*g*/.create({
            attachmentContainer: {
                marginTop: 10,
                marginBottom: 4
            },
            container: {
                backgroundColor: "#ffffff",
                flexDirection: "row",
                overflow: "hidden"
            },
            metadataContainer: {
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 8,
                marginTop: -2,
                backgroundColor: "transparent"
            },
            newCommentTitle: {
                color: StyleSheet/*y*/.groupsAccent
            },
            posting: {
                opacity: .4
            },
            seeMore: {
                color: StyleSheet/*y*/.feedbackFadedText
            },
            text: {
                fontSize: 13,
                lineHeight: 18
            },
            textContainer: {
                marginLeft: 10,
                flex: 1,
                marginTop: -2
            },
            title: {
                height: 16
            }
        }),
        $ = {
            fadeIn: {
                property: FBTextWithEntities.react/*d*/.Properties.opacity,
                toValue: 1,
                duration: .3
            },
            partialFadeOut: {
                property: FBTextWithEntities.react/*d*/.Properties.opacity,
                toValue: .5,
                duration: .3
            }
        };
    module/*i*/.exports = N
});