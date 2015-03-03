__d("THFeedbackView",["LayoutAnimation","CommentAddAction","DocumentContent","FBLikersPopover","FBSeenByPopover","FBSpinner","FeedbackLikeAction","GraphQLConstants","GraphQLStoreDataHandler","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","THCommentCell","THDockedInputContainer","THInputBarView","THLikeSentence","THViewConstants","TimerMixin","TouchableBounce","TouchableWithoutFeedback","View","copyDocumentContent","fbt","invariant","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        a = require/*t*/("CommentAddAction"),
        s = require/*t*/("DocumentContent"),
        l = require/*t*/("FBLikersPopover"),
        u = require/*t*/("FBSeenByPopover"),
        c = require/*t*/("FBSpinner"),
        p = require/*t*/("FeedbackLikeAction"),
        d = require/*t*/("GraphQLConstants"),
        h = require/*t*/("GraphQLStoreDataHandler"),
        f = require/*t*/("Image"),
        m = require/*t*/("NativeModulesDeprecated"),
        g = require/*t*/("React"),
        _ = require/*t*/("ReactGraphQL"),
        y = require/*t*/("StyleSheet"),
        v = require/*t*/("Text"),
        S = require/*t*/("THAnimations"),
        b = require/*t*/("THColors"),
        R = require/*t*/("THSounds"),
        w = require/*t*/("THCommentCell"),
        C = require/*t*/("THDockedInputContainer"),
        E = require/*t*/("THInputBarView"),
        D = require/*t*/("THLikeSentence"),
        T = require/*t*/("THViewConstants"),
        x = require/*t*/("TimerMixin"),
        P = require/*t*/("TouchableBounce"),
        I = require/*t*/("TouchableWithoutFeedback"),
        F = require/*t*/("View"),
        L = require/*t*/("copyDocumentContent"),
        M = require/*t*/("fbt"),
        Q = require/*t*/("invariant"),
        A = require/*t*/("ix"),
        k = require/*t*/("keyOf"),
        O = m.RKTreehouseManager,
        N = 10,
        G = 2,
        $ = k({
            commentRef: null
        }),
        B = k({
            likeRef: null
        }),
        H = k({
            likersPopRef: null
        }),
        V = "replyBar",
        q = k({
            seenByPopRef: null
        }),
        U = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.top_level_comments && global/*e*/.feedback.top_level_comments.edges || []
        },
        j = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.likers && void 0 !== global/*e*/.feedback.likers.count ? global/*e*/.feedback.likers.count : null
        },
        W = g.createClass({
            displayName: "THFeedbackView",
            propTypes: {
                feedback: g.PropTypes.object.isRequired,
                canCommentInline: g.PropTypes.bool,
                onInputRequested: g.PropTypes.func
            },
            mixins: [_.Mixin, x],
            statics: {
                queryParams: {
                    comment_count: G
                },
                processQueryParams: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = global/*e*/.getData().defaultCommentCount || 0;
                    return require/*t*/.comment_count < requireDynamic/*n*/ ? {
                        comment_count: requireDynamic/*n*/
                    } : require/*t*/
                },
                queries: {
                    viewer: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THFeedbackView_viewer", "Viewer", [new requireDynamic/*n*/.Field("actor", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "THFeedbackView_viewer"
                            })
                        }(w.getQuery("authorOptimisticPrefetch"))
                    },
                    feedback: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var a = require/*t*/.__GraphQL;
                            return new a.QueryFragment("THFeedbackView_feedback", "Feedback", [new a.Field("id"), new a.Field("likers", [new a.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new a.Field("does_viewer_like"), new a.Field("can_viewer_comment"), new a.Field("can_viewer_like"), new a.Field("seen_by", [new a.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new a.Field("top_level_comments", [new a.Field("count"), new a.Field("edges", [new a.Field("node", [new a.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(o)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new a.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THFeedbackView_feedback_1"
                            }), new a.Field("last_view_time"), new a.Field("page_info", [new a.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new a.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new a.Callv("first", [require/*t*/.__var(module/*i*/)])], null, null, {
                                connection: !0
                            }), new a.Field("top_level_comments", [new a.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "THFeedbackView_feedback"
                            })
                        }(w.getQuery("feedback"), l.getQuery("feedback"), D.getQuery("feedback"), requireDynamic/*n*/.comment_count, w.getQuery("comment"))
                    },
                    story: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THFeedbackView_story", "Story", [new global/*e*/.Field("id")], null, {
                                scope: "THFeedbackView_story"
                            })
                        }()
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THFeedbackView_group", "Group", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THFeedbackView_group"
                            })
                        }(w.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    collapsedComments: {},
                    hasExpanded: !1,
                    showMoreCommentsSpinner: !1,
                    firstCursor: null,
                    optimisticLikeValue: null,
                    overrideShowReplyBar: !1,
                    savedInput: null
                }
            },
            componentDidMount: function() {
                var global/*e*/ = U(this.props);
                this.state.firstCursor = global/*e*/.length > 0 && global/*e*/[0].cursor
            },
            getCommentCountQueryParam: function() {
                return Math.max(this.queryParams.comment_count, this.context.route.getData().defaultCommentCount || 0)
            },
            renderLikeButton: function() {
                var global/*e*/, require/*t*/ = [K.feedbackButtonText];
                this.state.optimisticLikeValue || null === this.state.optimisticLikeValue && this.props.feedback.does_viewer_like ? (global/*e*/ = A("thUFILikeSelectedIcon"), require/*t*/.push(K.likedStyling)) : this.props.feedback.can_viewer_like ? (global/*e*/ = A("thUFILikeIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = A("thUFILikeDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = g.createElement(F, {
                    style: [K.row, K.likeTextContainer]
                }, g.createElement(F, {
                    style: K.likeButtonContainer
                }, g.createElement(f, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: B
                })), g.createElement(v, {
                    style: require/*t*/
                }, M({
                    type: "text",
                    texts: ["Like"],
                    desc: "Like a post"
                })));
                return this.props.feedback.can_viewer_like && (requireDynamic/*n*/ = g.createElement(P, {
                    onPress: this.onLikeTap,
                    onPressAnimationComplete: this.onLikeTapped
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            renderCommentButton: function() {
                var global/*e*/, require/*t*/ = [K.feedbackButtonText];
                this.props.feedback.can_viewer_comment && this.props.viewContext !== T.SEARCH ? (global/*e*/ = A("thCommentIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = A("thCommentDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = g.createElement(F, {
                    style: [K.likeTextContainer, K.row]
                }, g.createElement(F, {
                    style: K.likeButtonContainer
                }, g.createElement(f, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: $
                })), g.createElement(v, {
                    style: require/*t*/
                }, M({
                    type: "text",
                    texts: ["Comment"],
                    desc: "Comment on post"
                })));
                return this.props.feedback.can_viewer_comment && this.props.viewContext !== T.SEARCH && (requireDynamic/*n*/ = g.createElement(P, {
                    onPress: this.focusReplyInput
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            onLikeTap: function() {
                var global/*e*/ = this.props.feedback.top_level_comments.count > 0 ? S.layout.likeWithComment : S.layout.likeWithNoComments;
                o.configureNext(global/*e*/), this.setState({
                    optimisticLikeValue: !this.props.feedback.does_viewer_like
                }), this.props.feedback.does_viewer_like || O && O.playSound(R.likeMain)
            },
            onLikeTapped: function() {
                p.handleLikeChange(this.props.feedback.id, !this.props.feedback.does_viewer_like), this.setState({
                    optimisticLikeValue: null
                })
            },
            showLikers: function() {
                this.refs[H].open()
            },
            showSeenBy: function() {
                this.refs[q].open()
            },
            getFeedbackStats: function() {
                var global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/ = this.props.feedback.top_level_comments.count,
                    module/*i*/ = j(this.props),
                    o = this.props.feedback.seen_by.count;
                if (null !== this.state.optimisticLikeValue && (this.state.optimisticLikeValue ? module/*i*/++ : module/*i*/--), !(module/*i*/ || requireLazy/*r*/ || o)) return g.createElement(F, {
                    style: K.fillerMetadata
                });
                if (module/*i*/) {
                    var a = 1 === module/*i*/ ? M({
                        type: "text",
                        texts: ["1 Like"],
                        desc: "Singular like count"
                    }) : M({
                        type: "text",
                        texts: ["{like_count} Likes"],
                        desc: "Plural like count"
                    }, [M.param("like_count", module/*i*/)]);
                    global/*e*/ = g.createElement(F, {
                        style: K.feedbackStatsContainer
                    }, g.createElement(I, {
                        onPress: this.showLikers
                    }, g.createElement(F, {
                        style: K.feedbackCountWrapper
                    }, g.createElement(v, {
                        style: K.feedbackFadedText
                    }, a))), g.createElement(F, {
                        style: K.horizontalSpace
                    }))
                }
                if (requireLazy/*r*/) {
                    var s = 1 === requireLazy/*r*/ ? M({
                        type: "text",
                        texts: ["1 Comment"],
                        desc: "Singular comment count"
                    }) : M({
                        type: "text",
                        texts: ["{comment_count} Comments"],
                        desc: "Plural comment count"
                    }, [M.param("comment_count", requireLazy/*r*/)]);
                    require/*t*/ = g.createElement(F, {
                        style: K.feedbackStatsContainer
                    }, g.createElement(I, {
                        key: "commentCountText",
                        onPress: this.showMoreComments
                    }, g.createElement(F, {
                        style: K.feedbackCountWrapper
                    }, g.createElement(v, {
                        style: K.feedbackFadedText
                    }, s))), g.createElement(F, {
                        style: K.horizontalSpace
                    }))
                }
                if (o) {
                    var c = M({
                        type: "text",
                        texts: ["Seen by {seen_count}"],
                        desc: "Information for how many people have seen this story"
                    }, [M.param("seen_count", o)]);
                    requireDynamic/*n*/ = g.createElement(F, {
                        style: K.feedbackStatsContainer
                    }, g.createElement(I, {
                        onPress: this.showSeenBy
                    }, g.createElement(F, {
                        style: K.feedbackCountWrapper
                    }, g.createElement(v, {
                        style: K.feedbackFadedText
                    }, c))), g.createElement(F, {
                        style: K.horizontalSpace
                    }))
                }
                return g.createElement(F, {
                    key: "likesBar",
                    style: [K.likesBar, K.contentContainer]
                }, g.createElement(F, {
                    style: K.feedbackStatsContainer
                }, g.createElement(F, {
                    style: K.feedbackStatsContainer
                }, global/*e*/, require/*t*/, requireDynamic/*n*/), g.createElement(l, {
                    ref: H,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !O,
                    closeTextColor: b.groupsAccent
                }), g.createElement(u, {
                    ref: q,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !O,
                    closeTextColor: b.groupsAccent
                })))
            },
            renderFeedbackButtons: function() {
                var global/*e*/, require/*t*/ = this.props.feedback.top_level_comments.count;
                return require/*t*/ && (global/*e*/ = g.createElement(F, {
                    key: "divLikesBar",
                    style: [K.divider, K.row, K.contentContainer]
                })), g.createElement(F, null, this.getFeedbackStats(), g.createElement(F, {
                    key: "divMetadataBar",
                    style: K.divider
                }), g.createElement(F, {
                    style: K.contentContainer
                }, g.createElement(F, {
                    style: K.feedbackButtonsContainer
                }, g.createElement(F, {
                    style: K.buttonContainer
                }, this.renderLikeButton()), g.createElement(F, {
                    style: K.buttonContainer
                }, this.renderCommentButton()))), global/*e*/)
            },
            componentWillReceiveProps: function(global/*e*/) {
                var require/*t*/ = U(global/*e*/);
                if (this.state.showMoreCommentsSpinner) require/*t*/.length > U(this.props).length && (o.configureNext(S.layout.moreComments), this.setState({
                    showMoreCommentsSpinner: !1
                }));
                else {
                    var requireDynamic/*n*/ = require/*t*/.length > 0 && require/*t*/[0].cursor;
                    if (requireDynamic/*n*/ && requireDynamic/*n*/ !== d.DUMMY_CURSOR_ID && requireDynamic/*n*/ !== this.state.firstCursor) {
                        var requireLazy/*r*/ = U(this.props),
                            module/*i*/ = function(global/*e*/) {
                                if (h.isClientID(global/*e*/.node.id)) {
                                    var require/*t*/ = h.getServerIDForClientID(global/*e*/.node.id);
                                    return require/*t*/ ? require/*t*/ : global/*e*/.node.id
                                }
                                return global/*e*/.node.id
                            },
                            a = requireLazy/*r*/.map(module/*i*/),
                            s = require/*t*/.filter(function(global/*e*/) {
                                return -1 === a.indexOf(global/*e*/.node.id)
                            }).length;
                        this.setQueryParams({
                            comment_count: this.getCommentCountQueryParam() + s
                        }), this.setState({
                            firstCursor: requireDynamic/*n*/
                        })
                    }
                }
            },
            renderPaginator: function() {
                var global/*e*/ = this.props.feedback.top_level_comments,
                    require/*t*/ = this.props.feedback.top_level_comments.count,
                    requireDynamic/*n*/ = global/*e*/.edges;
                if (require/*t*/ <= (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0)) return null;
                if (this.state.showMoreCommentsSpinner) return g.createElement(F, {
                    style: K.showMoreContainer
                }, g.createElement(c, null));
                var requireLazy/*r*/, module/*i*/ = require/*t*/ - (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0);
                requireLazy/*r*/ = M(1 === module/*i*/ ? {
                    type: "text",
                    texts: ["View previous comment"],
                    desc: "Singular text for affordance to show more comments."
                } : {
                    type: "text",
                    texts: ["View previous comments"],
                    desc: "Plural text for affordance to show more comments."
                });
                var o = [K.feedbackFadedText];
                if (this.props.viewContext !== T.PERMALINK) {
                    var a = this.props.feedback.top_level_comment_counts.unread_count;
                    a > (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0) && o.push(K.previousNewComments)
                }
                return g.createElement(I, {
                    key: "commentPager",
                    onPress: this.showMoreComments
                }, g.createElement(F, {
                    style: K.showMoreContainer
                }, g.createElement(v, {
                    style: o
                }, requireLazy/*r*/)))
            },
            renderComments: function() {
                var global/*e*/ = [this.renderPaginator()],
                    require/*t*/ = this.props.feedback.top_level_comments,
                    requireDynamic/*n*/ = require/*t*/.edges;
                if (!requireDynamic/*n*/ || 0 === requireDynamic/*n*/.length) return global/*e*/;
                for (var requireLazy/*r*/ = requireDynamic/*n*/.length - 1; requireLazy/*r*/ >= 0; requireLazy/*r*/--) {
                    var module/*i*/ = requireDynamic/*n*/[requireLazy/*r*/].node;
                    if (module/*i*/) {
                        var o = this.state.hasExpanded && !this.state.collapsedComments[module/*i*/.id];
                        global/*e*/.push(g.createElement(w, {
                            ref: module/*i*/.id,
                            key: module/*i*/.id,
                            comment: module/*i*/,
                            feedback: this.props.feedback,
                            lastViewTime: require/*t*/.last_view_time,
                            showExpanded: o,
                            onInputRequested: this.handleInputRequested,
                            onDeleteSuccess: this.handleDeleteSuccess,
                            group: this.props.group,
                            viewContext: this.props.viewContext
                        }))
                    } else console.warn("Unexpected falsey comment - #4643474")
                }
                return g.createElement(F, {
                    style: [K.contentContainer, K.commentsContainer],
                    removeClippedSubviews: !0
                }, global/*e*/)
            },
            showMoreComments: function() {
                if (!this.state.hasExpanded) {
                    for (var global/*e*/ = {}, require/*t*/ = U(this.props), requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
                        var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/].node;
                        global/*e*/[requireLazy/*r*/.id] = !0
                    }
                    this.setState({
                        hasExpanded: !0,
                        collapsedComments: global/*e*/
                    })
                }
                this.setQueryParams({
                    comment_count: this.getCommentCountQueryParam() + N
                }), this.setState({
                    showMoreCommentsSpinner: !0
                })
            },
            handleDeleteSuccess: function() {
                this.setQueryParams({
                    comment_count: this.getCommentCountQueryParam() - 1
                })
            },
            focusReplyInput: function() {
                var global/*e*/ = this.props.feedback.top_level_comments.edges;
                this._hasSavedInput() || this.props.viewContext === T.PERMALINK || global/*e*/ && 0 !== global/*e*/.length || this.setState({
                    overrideShowReplyBar: !0
                }), this.requestAnimationFrame(function() {
                    this.refs[V] ? this.refs[V].handleInactiveInputPress() : this.handleCommentInputRequested(null)
                }.bind(this))
            },
            onChange: function(global/*e*/) {
                this.setState({
                    text: global/*e*/.nativeEvent.text
                })
            },
            handleCommentInputRequested: function(global/*e*/) {
                var require/*t*/ = (new Date).getTime(),
                    requireDynamic/*n*/ = this.props.getFeedUnitHandle(),
                    requireLazy/*r*/ = this.refs[V] && this.refs[V].getPhotoSource();
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: global/*e*/,
                    tappedFeedUnitHandle: requireDynamic/*n*/,
                    tappedFeedUnitID: this.props.story.id,
                    mode: C.Mode.fullhide,
                    initialText: this.state.savedInput,
                    tappedTime: require/*t*/,
                    photoSource: requireLazy/*r*/
                }, this.handleCommentSubmit, this.handleCommentAbort)
            },
            handleInputRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/.tappedFeedUnitHandle = this.props.getFeedUnitHandle(), global/*e*/.tappedFeedUnitID = this.props.story.id, this.props.onInputRequested && this.props.onInputRequested(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                this.props.viewer && this.props.viewer.actor && this.props.viewer.actor.id || Q(0, "Attempting to submit a comment without an author. THFeedbackView might have been passed down a invalid viewer"), require/*t*/ && require/*t*/.style_list && "photo" === require/*t*/.style_list[0] ? a.handleAddPhotoComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/) : a.handleAddComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/), this.setQueryParams({
                    comment_count: this.queryParams.comment_count + 1
                }), this.setState({
                    photoSource: null,
                    savedInput: null,
                    overrideShowReplyBar: !1
                })
            },
            handleCommentAbort: function(global/*e*/) {
                this.setState({
                    overrideShowReplyBar: !1
                }), global/*e*/.text && (global/*e*/.text instanceof s || Q(0, "THFeedbackView.handleCommentAbort expected argument shape {text: DocumentContent}, got " + JSON.stringify(global/*e*/, null, "  ")), this.setState({
                    savedInput: L(global/*e*/.text),
                    photoSource: global/*e*/.photoSource
                }))
            },
            renderReplyBar: function() {
                if (!this.props.feedback.can_viewer_comment || this.props.viewContext === T.SEARCH || this.props.viewContext === T.PERMALINK) return null;
                var global/*e*/ = this._hasSavedInput(),
                    require/*t*/ = this.props.feedback.top_level_comments.edges;
                return global/*e*/ || this.state.overrideShowReplyBar || this.props.viewContext === T.PERMALINK || require/*t*/ && 0 !== require/*t*/.length ? g.createElement(F, {
                    style: K.contentContainer
                }, g.createElement(E, {
                    key: "replyBar",
                    ref: V,
                    initialText: this.state.savedInput,
                    photoSource: this.state.photoSource,
                    canCommentInline: this.props.canCommentInline,
                    onCommentSubmit: this.handleCommentSubmit,
                    onCommentInputRequested: this.handleCommentInputRequested,
                    hideInputButtons: !global/*e*/
                })) : null
            },
            render: function() {
                return this.props.feedback ? U(this.props) ? g.createElement(F, null, this.renderFeedbackButtons(), this.renderComments(), this.renderReplyBar()) : g.createElement(F, {
                    key: "loading"
                }, g.createElement(c, {
                    style: K.row
                })) : g.createElement(F, null)
            },
            _hasSavedInput: function() {
                return this.state.savedInput && this.state.savedInput.getText().trim().length > 0
            }
        }),
        K = y.create({
            buttonContainer: {
                flex: 1,
                flexDirection: "row",
                height: 32,
                justifyContent: "center"
            },
            commentsContainer: {
                marginBottom: 0
            },
            contentContainer: {
                marginHorizontal: C.contentPaddingHorizontal
            },
            disabledFeedbackText: {
                color: b.fadedText
            },
            divider: {
                backgroundColor: b.divider,
                height: .5
            },
            feedbackButtonsContainer: {
                paddingTop: 12,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
            },
            feedbackButtonText: {
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 13
            },
            feedbackCountWrapper: {
                justifyContent: "center"
            },
            feedbackFadedText: {
                color: b.feedbackFadedText,
                fontSize: 13
            },
            feedbackStatsContainer: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
            },
            fillerMetadata: {
                height: 20
            },
            feedbackTextStyling: {
                color: b.feedbackText
            },
            horizontalSpace: {
                marginHorizontal: 4
            },
            icon: {
                width: 18,
                height: 18
            },
            likeButtonContainer: {
                justifyContent: "center",
                paddingTop: 1,
                paddingRight: 5
            },
            likedStyling: {
                color: b.groupsAccent
            },
            likesBar: {
                height: 44,
                justifyContent: "space-between",
                flexDirection: "row"
            },
            likeTextContainer: {
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            },
            previousNewComments: {
                color: b.groupsAccent
            },
            row: {
                marginBottom: 12
            },
            showMoreContainer: {
                marginTop: 4,
                height: 28
            }
        });
    module/*i*/.exports = W
});