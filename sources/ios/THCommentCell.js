__d("THCommentCell",["CommentDeleteAction","CommentEditAction","CommentMenu","FBAlertManager","FBTextEntity","FBTextWithEntities.react","GraphQLNodeStatus","POPAnimation","POPAnimationMixin","React","ReactGraphQL","StyleSheet","Text","THColors","THCommentAttachment","THCommentMetadata","THDockedInputContainer","THProfilePicture","THViewConstants","TouchableWithoutFeedback","UnicodeBidi","View","createDocumentFromTextWithEntities","documentContentsAreEqual","fbt","invariant","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var CommentDeleteAction/*o*/ = require/*t*/("CommentDeleteAction"),
        CommentEditAction/*a*/ = require/*t*/("CommentEditAction"),
        CommentMenu/*s*/ = require/*t*/("CommentMenu"),
        FBAlertManager/*l*/ = require/*t*/("FBAlertManager"),
        FBTextEntity/*u*/ = require/*t*/("FBTextEntity"),
        c = require/*t*/("FBTextWithEntities.react"),
        GraphQLNodeStatus/*p*/ = require/*t*/("GraphQLNodeStatus"),
        POPAnimation/*d*/ = require/*t*/("POPAnimation"),
        POPAnimationMixin/*h*/ = require/*t*/("POPAnimationMixin"),
        React/*f*/ = require/*t*/("React"),
        ReactGraphQL/*m*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*g*/ = require/*t*/("StyleSheet"),
        Text/*_*/ = require/*t*/("Text"),
        THColors/*y*/ = require/*t*/("THColors"),
        THCommentAttachment/*v*/ = require/*t*/("THCommentAttachment"),
        THCommentMetadata/*S*/ = require/*t*/("THCommentMetadata"),
        THDockedInputContainer/*b*/ = require/*t*/("THDockedInputContainer"),
        THProfilePicture/*R*/ = require/*t*/("THProfilePicture"),
        THViewConstants/*w*/ = require/*t*/("THViewConstants"),
        TouchableWithoutFeedback/*C*/ = require/*t*/("TouchableWithoutFeedback"),
        UnicodeBidi/*E*/ = require/*t*/("UnicodeBidi"),
        View/*D*/ = require/*t*/("View"),
        createDocumentFromTextWithEntities/*T*/ = require/*t*/("createDocumentFromTextWithEntities"),
        documentContentsAreEqual/*x*/ = require/*t*/("documentContentsAreEqual"),
        fbt/*P*/ = require/*t*/("fbt"),
        invariant/*I*/ = require/*t*/("invariant"),
        isEmpty/*F*/ = require/*t*/("isEmpty"),
        keyOf/*L*/ = require/*t*/("keyOf"),
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
                        }(THProfilePicture/*R*/.getQuery("actor"))
                    },
                    comment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, CommentDeleteAction/*o*/) {
                            var CommentEditAction/*a*/ = require/*t*/.__GraphQL;
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
                            })], [require/*t*/.__frag(requireLazy/*r*/)]), new CommentEditAction/*a*/.Field("feedback", [new CommentEditAction/*a*/.Field("id", null, null, null, null, null, {
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
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new CommentEditAction/*a*/.Field("attachments", [new CommentEditAction/*a*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new CommentEditAction/*a*/.Field("media", [new CommentEditAction/*a*/.Field("id"), new CommentEditAction/*a*/.Field("width"), new CommentEditAction/*a*/.Field("height"), new CommentEditAction/*a*/.Field("image", [new CommentEditAction/*a*/.Field("uri")])])], [require/*t*/.__frag(CommentDeleteAction/*o*/)], null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/)], {
                                scope: "THCommentCell_comment"
                            })
                        }(CommentMenu/*s*/.getQuery("comment"), THCommentMetadata/*S*/.getQuery("comment"), c.getQuery("text"), THProfilePicture/*R*/.getQuery("actor"), THCommentAttachment/*v*/.getQuery("attachment"))
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
                var global/*e*/ = this.props.comment;
                this.state.savedInitialText || (this.state.savedInitialText = createDocumentFromTextWithEntities/*T*/(global/*e*/.body)), this.handleCommentEditRequested(this.refs[k].getNativeNode, this.state.savedInitialText)
            },
            handleCommentEditRequested: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.comment,
                    requireLazy/*r*/ = requireDynamic/*n*/.attachments[0] && requireDynamic/*n*/.attachments[0].style_list && "photo" === requireDynamic/*n*/.attachments[0].style_list[0] && requireDynamic/*n*/.attachments[0].media && requireDynamic/*n*/.attachments[0].media.image;
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: global/*e*/,
                    mode: THDockedInputContainer/*b*/.Mode.partialWash,
                    initialText: require/*t*/,
                    comparisonTextForCanPost: this.state.savedInitialText,
                    photoSource: requireLazy/*r*/,
                    isEditing: !0
                }, this.handleCommentEditSubmit, this.handleCommentEditWillAbort), this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.partialFadeOut))
            },
            handleCommentEditSubmit: function(global/*e*/) {
                this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.fadeIn), function() {
                    CommentEditAction/*a*/.handleCommentEdit(this.props.comment.id, {
                        text: global/*e*/
                    }), this.setState({
                        savedInitialText: null
                    })
                }.bind(this))
            },
            handleCommentEditWillAbort: function(global/*e*/) {
                this.state.savedInitialText || (this.state.savedInitialText = global/*e*/.initialText), this.startAnimation(k, POPAnimation/*d*/.createLinearAnimation($.fadeIn)), documentContentsAreEqual/*x*/(global/*e*/.text, this.state.savedInitialText) || FBAlertManager/*l*/.alertWithArgs({
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
                }, this.handleDiscardEditConfirmation.bind(this, global/*e*/))
            },
            handleDiscardEditConfirmation: function(global/*e*/, require/*t*/) {
                return "discard" === require/*t*/ ? void this.setState({
                    savedInitialText: null
                }) : "cancel" === require/*t*/ ? void this.handleCommentEditRequested(global/*e*/.getTappedNodeHandle, global/*e*/.text) : void invariant/*I*/(0, "Unrecognized discard confirmation key: " + require/*t*/)
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
            handleDeleteConfirmation: function(global/*e*/) {
                "cancel" !== global/*e*/ && ("delete" !== global/*e*/ && invariant/*I*/(0, "Unrecognized delete confirmation key: " + global/*e*/), this.setState({
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
            handleDeleteFailure: function(global/*e*/) {
                console.error("Error deleting comment " + this.props.comment.id + ":\requireDynamic/*n*/   ", global/*e*/), this.startAnimation(k, {
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
                var global/*e*/ = this.props.comment;
                return isEmpty/*F*/(global/*e*/.attachments) ? null : React/*f*/.createElement(View/*D*/, {
                    style: G.attachmentContainer
                }, React/*f*/.createElement(THCommentAttachment/*v*/, {
                    attachment: global/*e*/.attachments[0]
                }))
            },
            render: function() {
                var global/*e*/ = this.props.comment,
                    require/*t*/ = [G.text];
                this.props.viewContext !== THViewConstants/*w*/.PERMALINK && this.props.lastViewTime && this.props.lastViewTime < global/*e*/.created_time && require/*t*/.push(G.newCommentTitle);
                var requireDynamic/*n*/, requireLazy/*r*/;
                if (global/*e*/.body) {
                    var module/*i*/ = null,
                        CommentDeleteAction/*o*/ = null;
                    this.props.viewContext !== THViewConstants/*w*/.PERMALINK && (module/*i*/ = M, CommentDeleteAction/*o*/ = Q), requireLazy/*r*/ = UnicodeBidi/*E*/.isDirectionRTL(global/*e*/.body.text) ? "\requireDynamic/*n*/" : "  ", requireDynamic/*n*/ = React/*f*/.createElement(c, {
                        key: "commentBody",
                        text: global/*e*/.body,
                        textStyle: G.text,
                        shouldTruncate: !this.props.showExpanded,
                        seeMoreStyle: G.seeMore,
                        maxLength: module/*i*/,
                        maxLines: CommentDeleteAction/*o*/
                    })
                } else requireDynamic/*n*/ = React/*f*/.createElement(Text/*_*/, null);
                var CommentEditAction/*a*/ = GraphQLNodeStatus/*p*/.isOptimistic(global/*e*/) ? G.posting : null;
                return React/*f*/.createElement(TouchableWithoutFeedback/*C*/, {
                    onPress: this.showMenu
                }, React/*f*/.createElement(View/*D*/, {
                    ref: k,
                    style: [G.container, CommentEditAction/*a*/]
                }, React/*f*/.createElement(THProfilePicture/*R*/, {
                    actor: global/*e*/.author,
                    height: A,
                    group: this.props.group
                }), React/*f*/.createElement(View/*D*/, {
                    style: G.textContainer
                }, React/*f*/.createElement(Text/*_*/, {
                    textStyle: G.text
                }, React/*f*/.createElement(FBTextEntity/*u*/, {
                    entity: global/*e*/.author,
                    style: G.title,
                    textStyle: require/*t*/,
                    text: global/*e*/.author.name
                }), requireLazy/*r*/, requireDynamic/*n*/), this.renderAttachment(), React/*f*/.createElement(View/*D*/, {
                    style: G.metadataContainer
                }, React/*f*/.createElement(THCommentMetadata/*S*/, {
                    comment: global/*e*/,
                    pendingText: this.getPendingText()
                }))), React/*f*/.createElement(CommentMenu/*s*/, {
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
    module/*i*/.exports = N
});