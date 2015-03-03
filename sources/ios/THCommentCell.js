__d("THCommentCell",["CommentDeleteAction","CommentEditAction","CommentMenu","FBAlertManager","FBTextEntity","FBTextWithEntities.react","GraphQLNodeStatus","POPAnimation","POPAnimationMixin","React","ReactGraphQL","StyleSheet","Text","THColors","THCommentAttachment","THCommentMetadata","THDockedInputContainer","THProfilePicture","THViewConstants","TouchableWithoutFeedback","UnicodeBidi","View","createDocumentFromTextWithEntities","documentContentsAreEqual","fbt","invariant","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("CommentDeleteAction"),
        a = require/*t*/("CommentEditAction"),
        s = require/*t*/("CommentMenu"),
        l = require/*t*/("FBAlertManager"),
        u = require/*t*/("FBTextEntity"),
        c = require/*t*/("FBTextWithEntities.react"),
        p = require/*t*/("GraphQLNodeStatus"),
        d = require/*t*/("POPAnimation"),
        h = require/*t*/("POPAnimationMixin"),
        f = require/*t*/("React"),
        m = require/*t*/("ReactGraphQL"),
        g = require/*t*/("StyleSheet"),
        _ = require/*t*/("Text"),
        y = require/*t*/("THColors"),
        v = require/*t*/("THCommentAttachment"),
        S = require/*t*/("THCommentMetadata"),
        b = require/*t*/("THDockedInputContainer"),
        R = require/*t*/("THProfilePicture"),
        w = require/*t*/("THViewConstants"),
        C = require/*t*/("TouchableWithoutFeedback"),
        E = require/*t*/("UnicodeBidi"),
        D = require/*t*/("View"),
        T = require/*t*/("createDocumentFromTextWithEntities"),
        x = require/*t*/("documentContentsAreEqual"),
        P = require/*t*/("fbt"),
        I = require/*t*/("invariant"),
        F = require/*t*/("isEmpty"),
        L = require/*t*/("keyOf"),
        M = 250,
        Q = 6,
        A = 24,
        k = L({
            containerRef: null
        }),
        O = L({
            menuRef: null
        }),
        N = f.createClass({
            displayName: "THCommentCell",
            propTypes: {
                lastViewTime: f.PropTypes.number,
                onInputRequested: f.PropTypes.func,
                onDeleteSuccess: f.PropTypes.func,
                showExpanded: f.PropTypes.bool,
                viewContext: f.PropTypes.string
            },
            mixins: [m.Mixin, h],
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
                        }(R.getQuery("actor"))
                    },
                    comment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var a = require/*t*/.__GraphQL;
                            return new a.QueryFragment("THCommentCell_comment", "Comment", [new a.Field("id"), new a.Field("created_time"), new a.Field("body", [new a.Field("text"), new a.Field("ranges", [new a.Field("entity", [new a.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new a.Field("__type__", [new a.Field("name"), new a.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new a.Field("offset"), new a.Field("length")], null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)]), new a.Field("feedback", [new a.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new a.Field("author", [new a.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new a.Field("name"), new a.Field("__type__", [new a.Field("name"), new a.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new a.Field("attachments", [new a.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new a.Field("media", [new a.Field("id"), new a.Field("width"), new a.Field("height"), new a.Field("image", [new a.Field("uri")])])], [require/*t*/.__frag(o)], null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/)], {
                                scope: "THCommentCell_comment"
                            })
                        }(s.getQuery("comment"), S.getQuery("comment"), c.getQuery("text"), R.getQuery("actor"), v.getQuery("attachment"))
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
                        }(R.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    pendingDelete: !1
                }
            },
            getPendingText: function() {
                return this.state.pendingDelete ? P({
                    type: "text",
                    texts: ["Deleting..."],
                    desc: "Indicator that a comment is being deleted."
                }) : p.isOptimistic(this.props.comment) ? P({
                    type: "text",
                    texts: ["Posting..."],
                    desc: "Comment posting to server."
                }) : null
            },
            handleEditBegin: function() {
                var global/*e*/ = this.props.comment;
                this.state.savedInitialText || (this.state.savedInitialText = T(global/*e*/.body)), this.handleCommentEditRequested(this.refs[k].getNativeNode, this.state.savedInitialText)
            },
            handleCommentEditRequested: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.comment,
                    requireLazy/*r*/ = requireDynamic/*n*/.attachments[0] && requireDynamic/*n*/.attachments[0].style_list && "photo" === requireDynamic/*n*/.attachments[0].style_list[0] && requireDynamic/*n*/.attachments[0].media && requireDynamic/*n*/.attachments[0].media.image;
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: global/*e*/,
                    mode: b.Mode.partialWash,
                    initialText: require/*t*/,
                    comparisonTextForCanPost: this.state.savedInitialText,
                    photoSource: requireLazy/*r*/,
                    isEditing: !0
                }, this.handleCommentEditSubmit, this.handleCommentEditWillAbort), this.startAnimation(k, d.createLinearAnimation($.partialFadeOut))
            },
            handleCommentEditSubmit: function(global/*e*/) {
                this.startAnimation(k, d.createLinearAnimation($.fadeIn), function() {
                    a.handleCommentEdit(this.props.comment.id, {
                        text: global/*e*/
                    }), this.setState({
                        savedInitialText: null
                    })
                }.bind(this))
            },
            handleCommentEditWillAbort: function(global/*e*/) {
                this.state.savedInitialText || (this.state.savedInitialText = global/*e*/.initialText), this.startAnimation(k, d.createLinearAnimation($.fadeIn)), x(global/*e*/.text, this.state.savedInitialText) || l.alertWithArgs({
                    title: P({
                        type: "text",
                        texts: ["Alert"],
                        desc: "Title of confirmation message for aborting a comment edit."
                    }),
                    message: P({
                        type: "text",
                        texts: ["Are you sure you want to discard your changes to this comment?"],
                        desc: "Confirmation message for aborting a comment edit."
                    }),
                    buttons: [{
                        discard: P({
                            type: "text",
                            texts: ["Discard"],
                            desc: "Confirmation button for discarding a comment edit."
                        })
                    }, {
                        cancel: P({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for discarding a comment edit."
                        })
                    }]
                }, this.handleDiscardEditConfirmation.bind(this, global/*e*/))
            },
            handleDiscardEditConfirmation: function(global/*e*/, require/*t*/) {
                return "discard" === require/*t*/ ? void this.setState({
                    savedInitialText: null
                }) : "cancel" === require/*t*/ ? void this.handleCommentEditRequested(global/*e*/.getTappedNodeHandle, global/*e*/.text) : void I(0, "Unrecognized discard confirmation key: " + require/*t*/)
            },
            handleDelete: function() {
                l.alertWithArgs({
                    title: P({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Title of confirmation message for deleting a comment"
                    }),
                    message: P({
                        type: "text",
                        texts: ["You're about to delete this comment."],
                        desc: "Confirmation message for deleting a comment."
                    }),
                    buttons: [{
                        "delete": P({
                            type: "text",
                            texts: ["Delete"],
                            desc: "Confirmation button for deleting a comment."
                        })
                    }, {
                        cancel: P({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting a comment."
                        })
                    }]
                }, this.handleDeleteConfirmation)
            },
            handleDeleteConfirmation: function(global/*e*/) {
                "cancel" !== global/*e*/ && ("delete" !== global/*e*/ && I(0, "Unrecognized delete confirmation key: " + global/*e*/), this.setState({
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
                }), l.alert(P({
                    type: "text",
                    texts: ["Failed to delete comment."],
                    desc: "Error message after a failed delete"
                }))
            },
            renderAttachment: function() {
                var global/*e*/ = this.props.comment;
                return F(global/*e*/.attachments) ? null : f.createElement(D, {
                    style: G.attachmentContainer
                }, f.createElement(v, {
                    attachment: global/*e*/.attachments[0]
                }))
            },
            render: function() {
                var global/*e*/ = this.props.comment,
                    require/*t*/ = [G.text];
                this.props.viewContext !== w.PERMALINK && this.props.lastViewTime && this.props.lastViewTime < global/*e*/.created_time && require/*t*/.push(G.newCommentTitle);
                var requireDynamic/*n*/, requireLazy/*r*/;
                if (global/*e*/.body) {
                    var module/*i*/ = null,
                        o = null;
                    this.props.viewContext !== w.PERMALINK && (module/*i*/ = M, o = Q), requireLazy/*r*/ = E.isDirectionRTL(global/*e*/.body.text) ? "\requireDynamic/*n*/" : "  ", requireDynamic/*n*/ = f.createElement(c, {
                        key: "commentBody",
                        text: global/*e*/.body,
                        textStyle: G.text,
                        shouldTruncate: !this.props.showExpanded,
                        seeMoreStyle: G.seeMore,
                        maxLength: module/*i*/,
                        maxLines: o
                    })
                } else requireDynamic/*n*/ = f.createElement(_, null);
                var a = p.isOptimistic(global/*e*/) ? G.posting : null;
                return f.createElement(C, {
                    onPress: this.showMenu
                }, f.createElement(D, {
                    ref: k,
                    style: [G.container, a]
                }, f.createElement(R, {
                    actor: global/*e*/.author,
                    height: A,
                    group: this.props.group
                }), f.createElement(D, {
                    style: G.textContainer
                }, f.createElement(_, {
                    textStyle: G.text
                }, f.createElement(u, {
                    entity: global/*e*/.author,
                    style: G.title,
                    textStyle: require/*t*/,
                    text: global/*e*/.author.name
                }), requireLazy/*r*/, requireDynamic/*n*/), this.renderAttachment(), f.createElement(D, {
                    style: G.metadataContainer
                }, f.createElement(S, {
                    comment: global/*e*/,
                    pendingText: this.getPendingText()
                }))), f.createElement(s, {
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
        G = g.create({
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
                color: y.groupsAccent
            },
            posting: {
                opacity: .4
            },
            seeMore: {
                color: y.feedbackFadedText
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
                property: d.Properties.opacity,
                toValue: 1,
                duration: .3
            },
            partialFadeOut: {
                property: d.Properties.opacity,
                toValue: .5,
                duration: .3
            }
        };
    module/*i*/.exports = N
});