__d("THCommentCell",["CommentDeleteAction","CommentEditAction","CommentMenu","FBAlertManager","FBTextEntity","FBTextWithEntities.react","GraphQLNodeStatus","POPAnimation","POPAnimationMixin","React","ReactGraphQL","StyleSheet","Text","THColors","THCommentAttachment","THCommentMetadata","THDockedInputContainer","THProfilePicture","THViewConstants","TouchableWithoutFeedback","UnicodeBidi","View","createDocumentFromTextWithEntities","documentContentsAreEqual","fbt","invariant","isEmpty","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var CommentDeleteAction/*o*/ = t("CommentDeleteAction"),
        CommentEditAction/*a*/ = t("CommentEditAction"),
        CommentMenu/*s*/ = t("CommentMenu"),
        FBAlertManager/*l*/ = t("FBAlertManager"),
        FBTextEntity/*u*/ = t("FBTextEntity"),
        c = t("FBTextWithEntities.react"),
        GraphQLNodeStatus/*p*/ = t("GraphQLNodeStatus"),
        POPAnimation/*d*/ = t("POPAnimation"),
        POPAnimationMixin/*h*/ = t("POPAnimationMixin"),
        React/*f*/ = t("React"),
        ReactGraphQL/*m*/ = t("ReactGraphQL"),
        StyleSheet/*g*/ = t("StyleSheet"),
        Text/*_*/ = t("Text"),
        THColors/*y*/ = t("THColors"),
        THCommentAttachment/*v*/ = t("THCommentAttachment"),
        THCommentMetadata/*S*/ = t("THCommentMetadata"),
        THDockedInputContainer/*b*/ = t("THDockedInputContainer"),
        THProfilePicture/*R*/ = t("THProfilePicture"),
        THViewConstants/*w*/ = t("THViewConstants"),
        TouchableWithoutFeedback/*C*/ = t("TouchableWithoutFeedback"),
        UnicodeBidi/*E*/ = t("UnicodeBidi"),
        View/*D*/ = t("View"),
        createDocumentFromTextWithEntities/*T*/ = t("createDocumentFromTextWithEntities"),
        documentContentsAreEqual/*x*/ = t("documentContentsAreEqual"),
        fbt/*P*/ = t("fbt"),
        invariant/*I*/ = t("invariant"),
        isEmpty/*F*/ = t("isEmpty"),
        keyOf/*L*/ = t("keyOf"),
        M = 250,
        Q = 6,
        A = 24,
        k = keyOf/*L*/({
            containerRef: null
        }),
        O = keyOf/*L*/({
            menuRef: null
        }),
        N = React/*f*/.createClass({
            displayName: "THCommentCell",
            propTypes: {
                lastViewTime: React/*f*/.PropTypes.number,
                onInputRequested: React/*f*/.PropTypes.func,
                onDeleteSuccess: React/*f*/.PropTypes.func,
                showExpanded: React/*f*/.PropTypes.bool,
                viewContext: React/*f*/.PropTypes.string
            },
            mixins: [ReactGraphQL/*m*/.Mixin, POPAnimationMixin/*h*/],
            statics: {
                queries: {
                    feedback: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THCommentCell_feedback", "Feedback", [new e.Field("id")], null, {
                                scope: "THCommentCell_feedback"
                            })
                        }()
                    },
                    authorOptimisticPrefetch: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THCommentCell_authorOptimisticPrefetch", "Actor", [new n.Field("id"), new n.Field("name"), new n.Field("__type__", [new n.Field("name"), new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [t.__frag(e)], {
                                scope: "THCommentCell_authorOptimisticPrefetch"
                            })
                        }(THProfilePicture/*R*/.getQuery("actor"))
                    },
                    comment: function(e, t) {
                        return function(e, n, r, i, CommentDeleteAction/*o*/) {
                            var CommentEditAction/*a*/ = t.__GraphQL;
                            return new CommentEditAction/*a*/.QueryFragment("THCommentCell_comment", "Comment", [new CommentEditAction/*a*/.Field("id"), new CommentEditAction/*a*/.Field("created_time"), new CommentEditAction/*a*/.Field("body", [new CommentEditAction/*a*/.Field("text"), new CommentEditAction/*a*/.Field("ranges", [new CommentEditAction/*a*/.Field("entity", [new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new CommentEditAction/*a*/.Field("__type__", [new CommentEditAction/*a*/.Field("name"), new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new CommentEditAction/*a*/.Field("offset"), new CommentEditAction/*a*/.Field("length")], null, null, null, null, {
                                plural: !0
                            })], [t.__frag(r)]), new CommentEditAction/*a*/.Field("feedback", [new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new CommentEditAction/*a*/.Field("author", [new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new CommentEditAction/*a*/.Field("name"), new CommentEditAction/*a*/.Field("__type__", [new CommentEditAction/*a*/.Field("name"), new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [t.__frag(i)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new CommentEditAction/*a*/.Field("attachments", [new CommentEditAction/*a*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new CommentEditAction/*a*/.Field("media", [new CommentEditAction/*a*/.Field("id"), new CommentEditAction/*a*/.Field("width"), new CommentEditAction/*a*/.Field("height"), new CommentEditAction/*a*/.Field("image", [new CommentEditAction/*a*/.Field("uri")])])], [t.__frag(CommentDeleteAction/*o*/)], null, null, null, {
                                plural: !0
                            })], [t.__frag(e), t.__frag(n)], {
                                scope: "THCommentCell_comment"
                            })
                        }(CommentMenu/*s*/.getQuery("comment"), THCommentMetadata/*S*/.getQuery("comment"), c.getQuery("text"), THProfilePicture/*R*/.getQuery("actor"), THCommentAttachment/*v*/.getQuery("attachment"))
                    },
                    group: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THCommentCell_group", "Group", [new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THCommentCell_group"
                            })
                        }(THProfilePicture/*R*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    pendingDelete: !1
                }
            },
            getPendingText: function() {
                return this.state.pendingDelete ? fbt/*P*/({
                    type: "text",
                    texts: ["Deleting..."],
                    desc: "Indicator that CommentEditAction/*a*/ comment is being deleted."
                }) : GraphQLNodeStatus/*p*/.isOptimistic(this.props.comment) ? fbt/*P*/({
                    type: "text",
                    texts: ["Posting..."],
                    desc: "Comment posting to server."
                }) : null
            },
            handleEditBegin: function() {
                var e = this.props.comment;
                this.state.savedInitialText || (this.state.savedInitialText = createDocumentFromTextWithEntities/*T*/(e.body)), this.handleCommentEditRequested(this.refs[k].getNativeNode, this.state.savedInitialText)
            },
            handleCommentEditRequested: function(e, t) {
                var n = this.props.comment,
                    r = n.attachments[0] && n.attachments[0].style_list && "photo" === n.attachments[0].style_list[0] && n.attachments[0].media && n.attachments[0].media.image;
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: e,
                    mode: THDockedInputContainer/*b*/.Mode.partialWash,
                    initialText: t,
                    comparisonTextForCanPost: this.state.savedInitialText,
                    photoSource: r,
                    isEditing: !0
                }, this.handleCommentEditSubmit, this.handleCommentEditWillAbort), this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.partialFadeOut))
            },
            handleCommentEditSubmit: function(e) {
                this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.fadeIn), function() {
                    CommentEditAction/*a*/.handleCommentEdit(this.props.comment.id, {
                        text: e
                    }), this.setState({
                        savedInitialText: null
                    })
                }.bind(this))
            },
            handleCommentEditWillAbort: function(e) {
                this.state.savedInitialText || (this.state.savedInitialText = e.initialText), this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.fadeIn)), documentContentsAreEqual/*x*/(e.text, this.state.savedInitialText) || FBAlertManager/*l*/.alertWithArgs({
                    title: fbt/*P*/({
                        type: "text",
                        texts: ["Alert"],
                        desc: "Title of confirmation message for aborting CommentEditAction/*a*/ comment edit."
                    }),
                    message: fbt/*P*/({
                        type: "text",
                        texts: ["Are you sure you want to discard your changes to this comment?"],
                        desc: "Confirmation message for aborting CommentEditAction/*a*/ comment edit."
                    }),
                    buttons: [{
                        discard: fbt/*P*/({
                            type: "text",
                            texts: ["Discard"],
                            desc: "Confirmation button for discarding CommentEditAction/*a*/ comment edit."
                        })
                    }, {
                        cancel: fbt/*P*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for discarding CommentEditAction/*a*/ comment edit."
                        })
                    }]
                }, this.handleDiscardEditConfirmation.bind(this, e))
            },
            handleDiscardEditConfirmation: function(e, t) {
                return "discard" === t ? void this.setState({
                    savedInitialText: null
                }) : "cancel" === t ? void this.handleCommentEditRequested(e.getTappedNodeHandle, e.text) : void invariant/*I*/(0, "Unrecognized discard confirmation key: " + t)
            },
            handleDelete: function() {
                FBAlertManager/*l*/.alertWithArgs({
                    title: fbt/*P*/({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Title of confirmation message for deleting CommentEditAction/*a*/ comment"
                    }),
                    message: fbt/*P*/({
                        type: "text",
                        texts: ["You're about to delete this comment."],
                        desc: "Confirmation message for deleting CommentEditAction/*a*/ comment."
                    }),
                    buttons: [{
                        "delete": fbt/*P*/({
                            type: "text",
                            texts: ["Delete"],
                            desc: "Confirmation button for deleting CommentEditAction/*a*/ comment."
                        })
                    }, {
                        cancel: fbt/*P*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting CommentEditAction/*a*/ comment."
                        })
                    }]
                }, this.handleDeleteConfirmation)
            },
            handleDeleteConfirmation: function(e) {
                "cancel" !== e && ("delete" !== e && invariant/*I*/(0, "Unrecognized delete confirmation key: " + e), this.setState({
                    pendingDelete: !0
                }), this.startAnimation(k, {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: .3,
                    duration: .4
                }, function() {
                    CommentDeleteAction/*o*/.deleteComment(this.props.comment.id, this.props.feedback.id, this.handleDeleteFailure, this.props.onDeleteSuccess)
                }.bind(this)))
            },
            handleDeleteFailure: function(e) {
                console.error("Error deleting comment " + this.props.comment.id + ":\n   ", e), this.startAnimation(k, {
                    type: this.AnimationTypes.linear,
                    property: this.AnimationProperties.opacity,
                    toValue: 1,
                    duration: .2
                }), this.setState({
                    pendingDelete: !1
                }), FBAlertManager/*l*/.alert(fbt/*P*/({
                    type: "text",
                    texts: ["Failed to delete comment."],
                    desc: "Error message after CommentEditAction/*a*/ failed delete"
                }))
            },
            renderAttachment: function() {
                var e = this.props.comment;
                return isEmpty/*F*/(e.attachments) ? null : React/*f*/.createElement(View/*D*/, {
                    style: G.attachmentContainer
                }, React/*f*/.createElement(THCommentAttachment/*v*/, {
                    attachment: e.attachments[0]
                }))
            },
            render: function() {
                var e = this.props.comment,
                    t = [G.text];
                this.props.viewContext !== THViewConstants/*w*/.PERMALINK && this.props.lastViewTime && this.props.lastViewTime < e.created_time && t.push(G.newCommentTitle);
                var n, r;
                if (e.body) {
                    var i = null,
                        CommentDeleteAction/*o*/ = null;
                    this.props.viewContext !== THViewConstants/*w*/.PERMALINK && (i = M, CommentDeleteAction/*o*/ = Q), r = UnicodeBidi/*E*/.isDirectionRTL(e.body.text) ? "\n" : "  ", n = React/*f*/.createElement(c, {
                        key: "commentBody",
                        text: e.body,
                        textStyle: G.text,
                        shouldTruncate: !this.props.showExpanded,
                        seeMoreStyle: G.seeMore,
                        maxLength: i,
                        maxLines: CommentDeleteAction/*o*/
                    })
                } else n = React/*f*/.createElement(Text/*_*/, null);
                var CommentEditAction/*a*/ = GraphQLNodeStatus/*p*/.isOptimistic(e) ? G.posting : null;
                return React/*f*/.createElement(TouchableWithoutFeedback/*C*/, {
                    onPress: this.showMenu
                }, React/*f*/.createElement(View/*D*/, {
                    ref: k,
                    style: [G.container, CommentEditAction/*a*/]
                }, React/*f*/.createElement(THProfilePicture/*R*/, {
                    actor: e.author,
                    height: A,
                    group: this.props.group
                }), React/*f*/.createElement(View/*D*/, {
                    style: G.textContainer
                }, React/*f*/.createElement(Text/*_*/, {
                    textStyle: G.text
                }, React/*f*/.createElement(FBTextEntity/*u*/, {
                    entity: e.author,
                    style: G.title,
                    textStyle: t,
                    text: e.author.name
                }), r, n), this.renderAttachment(), React/*f*/.createElement(View/*D*/, {
                    style: G.metadataContainer
                }, React/*f*/.createElement(THCommentMetadata/*S*/, {
                    comment: e,
                    pendingText: this.getPendingText()
                }))), React/*f*/.createElement(CommentMenu/*s*/, {
                    ref: O,
                    comment: e,
                    onDelete: this.handleDelete,
                    onEdit: this.handleEditBegin
                })))
            },
            showMenu: function() {
                this.refs[O].open()
            }
        }),
        G = StyleSheet/*g*/.create({
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
                color: THColors/*y*/.groupsAccent
            },
            posting: {
                opacity: .4
            },
            seeMore: {
                color: THColors/*y*/.feedbackFadedText
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
                property: POPAnimation/*d*/.Properties.opacity,
                toValue: 1,
                duration: .3
            },
            partialFadeOut: {
                property: POPAnimation/*d*/.Properties.opacity,
                toValue: .5,
                duration: .3
            }
        };
    i.exports = N
});