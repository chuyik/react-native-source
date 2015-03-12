__d("THFeedbackView",["LayoutAnimation","CommentAddAction","DocumentContent","FBLikersPopover","FBSeenByPopover","FBSpinner","FeedbackLikeAction","GraphQLConstants","GraphQLStoreDataHandler","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","THCommentCell","THDockedInputContainer","THInputBarView","THLikeSentence","THViewConstants","TimerMixin","TouchableBounce","TouchableWithoutFeedback","View","copyDocumentContent","fbt","invariant","ix","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var LayoutAnimation/*o*/ = t("LayoutAnimation"),
        CommentAddAction/*a*/ = t("CommentAddAction"),
        DocumentContent/*s*/ = t("DocumentContent"),
        FBLikersPopover/*l*/ = t("FBLikersPopover"),
        FBSeenByPopover/*u*/ = t("FBSeenByPopover"),
        FBSpinner/*c*/ = t("FBSpinner"),
        FeedbackLikeAction/*p*/ = t("FeedbackLikeAction"),
        GraphQLConstants/*d*/ = t("GraphQLConstants"),
        GraphQLStoreDataHandler/*h*/ = t("GraphQLStoreDataHandler"),
        Image/*f*/ = t("Image"),
        NativeModulesDeprecated/*m*/ = t("NativeModulesDeprecated"),
        React/*g*/ = t("React"),
        ReactGraphQL/*_*/ = t("ReactGraphQL"),
        StyleSheet/*y*/ = t("StyleSheet"),
        Text/*v*/ = t("Text"),
        THAnimations/*S*/ = t("THAnimations"),
        THColors/*b*/ = t("THColors"),
        THSounds/*R*/ = t("THSounds"),
        THCommentCell/*w*/ = t("THCommentCell"),
        THDockedInputContainer/*C*/ = t("THDockedInputContainer"),
        THInputBarView/*E*/ = t("THInputBarView"),
        THLikeSentence/*D*/ = t("THLikeSentence"),
        THViewConstants/*T*/ = t("THViewConstants"),
        TimerMixin/*x*/ = t("TimerMixin"),
        TouchableBounce/*P*/ = t("TouchableBounce"),
        TouchableWithoutFeedback/*I*/ = t("TouchableWithoutFeedback"),
        View/*F*/ = t("View"),
        copyDocumentContent/*L*/ = t("copyDocumentContent"),
        fbt/*M*/ = t("fbt"),
        invariant/*Q*/ = t("invariant"),
        ix/*A*/ = t("ix"),
        keyOf/*k*/ = t("keyOf"),
        O = NativeModulesDeprecated/*m*/.RKTreehouseManager,
        N = 10,
        G = 2,
        $ = keyOf/*k*/({
            commentRef: null
        }),
        B = keyOf/*k*/({
            likeRef: null
        }),
        H = keyOf/*k*/({
            likersPopRef: null
        }),
        V = "replyBar",
        q = keyOf/*k*/({
            seenByPopRef: null
        }),
        U = function(e) {
            return e.feedback && e.feedback.top_level_comments && e.feedback.top_level_comments.edges || []
        },
        j = function(e) {
            return e.feedback && e.feedback.likers && void 0 !== e.feedback.likers.count ? e.feedback.likers.count : null
        },
        W = React/*g*/.createClass({
            displayName: "THFeedbackView",
            propTypes: {
                feedback: React/*g*/.PropTypes.object.isRequired,
                canCommentInline: React/*g*/.PropTypes.bool,
                onInputRequested: React/*g*/.PropTypes.func
            },
            mixins: [ReactGraphQL/*_*/.Mixin, TimerMixin/*x*/],
            statics: {
                queryParams: {
                    comment_count: G
                },
                processQueryParams: function(e, t) {
                    var n = e.getData().defaultCommentCount || 0;
                    return t.comment_count < n ? {
                        comment_count: n
                    } : t
                },
                queries: {
                    viewer: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THFeedbackView_viewer", "Viewer", [new n.Field("actor", [new n.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [t.__frag(e)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "THFeedbackView_viewer"
                            })
                        }(THCommentCell/*w*/.getQuery("authorOptimisticPrefetch"))
                    },
                    feedback: function(e, t, n) {
                        return function(e, n, r, i, LayoutAnimation/*o*/) {
                            var CommentAddAction/*a*/ = t.__GraphQL;
                            return new CommentAddAction/*a*/.QueryFragment("THFeedbackView_feedback", "Feedback", [new CommentAddAction/*a*/.Field("id"), new CommentAddAction/*a*/.Field("likers", [new CommentAddAction/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new CommentAddAction/*a*/.Field("does_viewer_like"), new CommentAddAction/*a*/.Field("can_viewer_comment"), new CommentAddAction/*a*/.Field("can_viewer_like"), new CommentAddAction/*a*/.Field("seen_by", [new CommentAddAction/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new CommentAddAction/*a*/.Field("top_level_comments", [new CommentAddAction/*a*/.Field("count"), new CommentAddAction/*a*/.Field("edges", [new CommentAddAction/*a*/.Field("node", [new CommentAddAction/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [t.__frag(LayoutAnimation/*o*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new CommentAddAction/*a*/.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THFeedbackView_feedback_1"
                            }), new CommentAddAction/*a*/.Field("last_view_time"), new CommentAddAction/*a*/.Field("page_info", [new CommentAddAction/*a*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new CommentAddAction/*a*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new CommentAddAction/*a*/.Callv("first", [t.__var(i)])], null, null, {
                                connection: !0
                            }), new CommentAddAction/*a*/.Field("top_level_comments", [new CommentAddAction/*a*/.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                connection: !0
                            })], [t.__frag(e), t.__frag(n), t.__frag(r)], {
                                scope: "THFeedbackView_feedback"
                            })
                        }(THCommentCell/*w*/.getQuery("feedback"), FBLikersPopover/*l*/.getQuery("feedback"), THLikeSentence/*D*/.getQuery("feedback"), n.comment_count, THCommentCell/*w*/.getQuery("comment"))
                    },
                    story: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THFeedbackView_story", "Story", [new e.Field("id")], null, {
                                scope: "THFeedbackView_story"
                            })
                        }()
                    },
                    group: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THFeedbackView_group", "Group", [new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THFeedbackView_group"
                            })
                        }(THCommentCell/*w*/.getQuery("group"))
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
                var e = U(this.props);
                this.state.firstCursor = e.length > 0 && e[0].cursor
            },
            getCommentCountQueryParam: function() {
                return Math.max(this.queryParams.comment_count, this.context.route.getData().defaultCommentCount || 0)
            },
            renderLikeButton: function() {
                var e, t = [K.feedbackButtonText];
                this.state.optimisticLikeValue || null === this.state.optimisticLikeValue && this.props.feedback.does_viewer_like ? (e = ix/*A*/("thUFILikeSelectedIcon"), t.push(K.likedStyling)) : this.props.feedback.can_viewer_like ? (e = ix/*A*/("thUFILikeIcon"), t.push(K.feedbackTextStyling)) : (e = ix/*A*/("thUFILikeDisabledIcon"), t.push(K.disabledFeedbackText));
                var n = React/*g*/.createElement(View/*F*/, {
                    style: [K.row, K.likeTextContainer]
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.likeButtonContainer
                }, React/*g*/.createElement(Image/*f*/, {
                    source: e,
                    style: K.icon,
                    ref: B
                })), React/*g*/.createElement(Text/*v*/, {
                    style: t
                }, fbt/*M*/({
                    type: "text",
                    texts: ["Like"],
                    desc: "Like CommentAddAction/*a*/ post"
                })));
                return this.props.feedback.can_viewer_like && (n = React/*g*/.createElement(TouchableBounce/*P*/, {
                    onPress: this.onLikeTap,
                    onPressAnimationComplete: this.onLikeTapped
                }, n)), n
            },
            renderCommentButton: function() {
                var e, t = [K.feedbackButtonText];
                this.props.feedback.can_viewer_comment && this.props.viewContext !== THViewConstants/*T*/.SEARCH ? (e = ix/*A*/("thCommentIcon"), t.push(K.feedbackTextStyling)) : (e = ix/*A*/("thCommentDisabledIcon"), t.push(K.disabledFeedbackText));
                var n = React/*g*/.createElement(View/*F*/, {
                    style: [K.likeTextContainer, K.row]
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.likeButtonContainer
                }, React/*g*/.createElement(Image/*f*/, {
                    source: e,
                    style: K.icon,
                    ref: $
                })), React/*g*/.createElement(Text/*v*/, {
                    style: t
                }, fbt/*M*/({
                    type: "text",
                    texts: ["Comment"],
                    desc: "Comment on post"
                })));
                return this.props.feedback.can_viewer_comment && this.props.viewContext !== THViewConstants/*T*/.SEARCH && (n = React/*g*/.createElement(TouchableBounce/*P*/, {
                    onPress: this.focusReplyInput
                }, n)), n
            },
            onLikeTap: function() {
                var e = this.props.feedback.top_level_comments.count > 0 ? THAnimations/*S*/.layout.likeWithComment : THAnimations/*S*/.layout.likeWithNoComments;
                LayoutAnimation/*o*/.configureNext(e), this.setState({
                    optimisticLikeValue: !this.props.feedback.does_viewer_like
                }), this.props.feedback.does_viewer_like || O && O.playSound(THSounds/*R*/.likeMain)
            },
            onLikeTapped: function() {
                FeedbackLikeAction/*p*/.handleLikeChange(this.props.feedback.id, !this.props.feedback.does_viewer_like), this.setState({
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
                var e, t, n, r = this.props.feedback.top_level_comments.count,
                    i = j(this.props),
                    LayoutAnimation/*o*/ = this.props.feedback.seen_by.count;
                if (null !== this.state.optimisticLikeValue && (this.state.optimisticLikeValue ? i++ : i--), !(i || r || LayoutAnimation/*o*/)) return React/*g*/.createElement(View/*F*/, {
                    style: K.fillerMetadata
                });
                if (i) {
                    var CommentAddAction/*a*/ = 1 === i ? fbt/*M*/({
                        type: "text",
                        texts: ["1 Like"],
                        desc: "Singular like count"
                    }) : fbt/*M*/({
                        type: "text",
                        texts: ["{like_count} Likes"],
                        desc: "Plural like count"
                    }, [fbt/*M*/.param("like_count", i)]);
                    e = React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackStatsContainer
                    }, React/*g*/.createElement(TouchableWithoutFeedback/*I*/, {
                        onPress: this.showLikers
                    }, React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackCountWrapper
                    }, React/*g*/.createElement(Text/*v*/, {
                        style: K.feedbackFadedText
                    }, CommentAddAction/*a*/))), React/*g*/.createElement(View/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                if (r) {
                    var DocumentContent/*s*/ = 1 === r ? fbt/*M*/({
                        type: "text",
                        texts: ["1 Comment"],
                        desc: "Singular comment count"
                    }) : fbt/*M*/({
                        type: "text",
                        texts: ["{comment_count} Comments"],
                        desc: "Plural comment count"
                    }, [fbt/*M*/.param("comment_count", r)]);
                    t = React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackStatsContainer
                    }, React/*g*/.createElement(TouchableWithoutFeedback/*I*/, {
                        key: "commentCountText",
                        onPress: this.showMoreComments
                    }, React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackCountWrapper
                    }, React/*g*/.createElement(Text/*v*/, {
                        style: K.feedbackFadedText
                    }, DocumentContent/*s*/))), React/*g*/.createElement(View/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                if (LayoutAnimation/*o*/) {
                    var FBSpinner/*c*/ = fbt/*M*/({
                        type: "text",
                        texts: ["Seen by {seen_count}"],
                        desc: "Information for how many people have seen this story"
                    }, [fbt/*M*/.param("seen_count", LayoutAnimation/*o*/)]);
                    n = React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackStatsContainer
                    }, React/*g*/.createElement(TouchableWithoutFeedback/*I*/, {
                        onPress: this.showSeenBy
                    }, React/*g*/.createElement(View/*F*/, {
                        style: K.feedbackCountWrapper
                    }, React/*g*/.createElement(Text/*v*/, {
                        style: K.feedbackFadedText
                    }, FBSpinner/*c*/))), React/*g*/.createElement(View/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                return React/*g*/.createElement(View/*F*/, {
                    key: "likesBar",
                    style: [K.likesBar, K.contentContainer]
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.feedbackStatsContainer
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.feedbackStatsContainer
                }, e, t, n), React/*g*/.createElement(FBLikersPopover/*l*/, {
                    ref: H,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !O,
                    closeTextColor: THColors/*b*/.groupsAccent
                }), React/*g*/.createElement(FBSeenByPopover/*u*/, {
                    ref: q,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !O,
                    closeTextColor: THColors/*b*/.groupsAccent
                })))
            },
            renderFeedbackButtons: function() {
                var e, t = this.props.feedback.top_level_comments.count;
                return t && (e = React/*g*/.createElement(View/*F*/, {
                    key: "divLikesBar",
                    style: [K.divider, K.row, K.contentContainer]
                })), React/*g*/.createElement(View/*F*/, null, this.getFeedbackStats(), React/*g*/.createElement(View/*F*/, {
                    key: "divMetadataBar",
                    style: K.divider
                }), React/*g*/.createElement(View/*F*/, {
                    style: K.contentContainer
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.feedbackButtonsContainer
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.buttonContainer
                }, this.renderLikeButton()), React/*g*/.createElement(View/*F*/, {
                    style: K.buttonContainer
                }, this.renderCommentButton()))), e)
            },
            componentWillReceiveProps: function(e) {
                var t = U(e);
                if (this.state.showMoreCommentsSpinner) t.length > U(this.props).length && (LayoutAnimation/*o*/.configureNext(THAnimations/*S*/.layout.moreComments), this.setState({
                    showMoreCommentsSpinner: !1
                }));
                else {
                    var n = t.length > 0 && t[0].cursor;
                    if (n && n !== GraphQLConstants/*d*/.DUMMY_CURSOR_ID && n !== this.state.firstCursor) {
                        var r = U(this.props),
                            i = function(e) {
                                if (GraphQLStoreDataHandler/*h*/.isClientID(e.node.id)) {
                                    var t = GraphQLStoreDataHandler/*h*/.getServerIDForClientID(e.node.id);
                                    return t ? t : e.node.id
                                }
                                return e.node.id
                            },
                            CommentAddAction/*a*/ = r.map(i),
                            DocumentContent/*s*/ = t.filter(function(e) {
                                return -1 === CommentAddAction/*a*/.indexOf(e.node.id)
                            }).length;
                        this.setQueryParams({
                            comment_count: this.getCommentCountQueryParam() + DocumentContent/*s*/
                        }), this.setState({
                            firstCursor: n
                        })
                    }
                }
            },
            renderPaginator: function() {
                var e = this.props.feedback.top_level_comments,
                    t = this.props.feedback.top_level_comments.count,
                    n = e.edges;
                if (t <= (n && n.length || 0)) return null;
                if (this.state.showMoreCommentsSpinner) return React/*g*/.createElement(View/*F*/, {
                    style: K.showMoreContainer
                }, React/*g*/.createElement(FBSpinner/*c*/, null));
                var r, i = t - (n && n.length || 0);
                r = fbt/*M*/(1 === i ? {
                    type: "text",
                    texts: ["View previous comment"],
                    desc: "Singular text for affordance to show more comments."
                } : {
                    type: "text",
                    texts: ["View previous comments"],
                    desc: "Plural text for affordance to show more comments."
                });
                var LayoutAnimation/*o*/ = [K.feedbackFadedText];
                if (this.props.viewContext !== THViewConstants/*T*/.PERMALINK) {
                    var CommentAddAction/*a*/ = this.props.feedback.top_level_comment_counts.unread_count;
                    CommentAddAction/*a*/ > (n && n.length || 0) && LayoutAnimation/*o*/.push(K.previousNewComments)
                }
                return React/*g*/.createElement(TouchableWithoutFeedback/*I*/, {
                    key: "commentPager",
                    onPress: this.showMoreComments
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.showMoreContainer
                }, React/*g*/.createElement(Text/*v*/, {
                    style: LayoutAnimation/*o*/
                }, r)))
            },
            renderComments: function() {
                var e = [this.renderPaginator()],
                    t = this.props.feedback.top_level_comments,
                    n = t.edges;
                if (!n || 0 === n.length) return e;
                for (var r = n.length - 1; r >= 0; r--) {
                    var i = n[r].node;
                    if (i) {
                        var LayoutAnimation/*o*/ = this.state.hasExpanded && !this.state.collapsedComments[i.id];
                        e.push(React/*g*/.createElement(THCommentCell/*w*/, {
                            ref: i.id,
                            key: i.id,
                            comment: i,
                            feedback: this.props.feedback,
                            lastViewTime: t.last_view_time,
                            showExpanded: LayoutAnimation/*o*/,
                            onInputRequested: this.handleInputRequested,
                            onDeleteSuccess: this.handleDeleteSuccess,
                            group: this.props.group,
                            viewContext: this.props.viewContext
                        }))
                    } else console.warn("Unexpected falsey comment - #4643474")
                }
                return React/*g*/.createElement(View/*F*/, {
                    style: [K.contentContainer, K.commentsContainer],
                    removeClippedSubviews: !0
                }, e)
            },
            showMoreComments: function() {
                if (!this.state.hasExpanded) {
                    for (var e = {}, t = U(this.props), n = 0; n < t.length; n++) {
                        var r = t[n].node;
                        e[r.id] = !0
                    }
                    this.setState({
                        hasExpanded: !0,
                        collapsedComments: e
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
                var e = this.props.feedback.top_level_comments.edges;
                this._hasSavedInput() || this.props.viewContext === THViewConstants/*T*/.PERMALINK || e && 0 !== e.length || this.setState({
                    overrideShowReplyBar: !0
                }), this.requestAnimationFrame(function() {
                    this.refs[V] ? this.refs[V].handleInactiveInputPress() : this.handleCommentInputRequested(null)
                }.bind(this))
            },
            onChange: function(e) {
                this.setState({
                    text: e.nativeEvent.text
                })
            },
            handleCommentInputRequested: function(e) {
                var t = (new Date).getTime(),
                    n = this.props.getFeedUnitHandle(),
                    r = this.refs[V] && this.refs[V].getPhotoSource();
                this.props.onInputRequested && this.props.onInputRequested({
                    getTappedNodeHandle: e,
                    tappedFeedUnitHandle: n,
                    tappedFeedUnitID: this.props.story.id,
                    mode: THDockedInputContainer/*C*/.Mode.fullhide,
                    initialText: this.state.savedInput,
                    tappedTime: t,
                    photoSource: r
                }, this.handleCommentSubmit, this.handleCommentAbort)
            },
            handleInputRequested: function(e, t, n) {
                e.tappedFeedUnitHandle = this.props.getFeedUnitHandle(), e.tappedFeedUnitID = this.props.story.id, this.props.onInputRequested && this.props.onInputRequested(e, t, n)
            },
            handleCommentSubmit: function(e, t) {
                this.props.viewer && this.props.viewer.actor && this.props.viewer.actor.id || invariant/*Q*/(0, "Attempting to submit CommentAddAction/*a*/ comment without an author. THFeedbackView might have been passed down CommentAddAction/*a*/ invalid viewer"), t && t.style_list && "photo" === t.style_list[0] ? CommentAddAction/*a*/.handleAddPhotoComment(this.props.viewer.actor.id, this.props.feedback.id, e, t) : CommentAddAction/*a*/.handleAddComment(this.props.viewer.actor.id, this.props.feedback.id, e, t), this.setQueryParams({
                    comment_count: this.queryParams.comment_count + 1
                }), this.setState({
                    photoSource: null,
                    savedInput: null,
                    overrideShowReplyBar: !1
                })
            },
            handleCommentAbort: function(e) {
                this.setState({
                    overrideShowReplyBar: !1
                }), e.text && (e.text instanceof DocumentContent/*s*/ || invariant/*Q*/(0, "THFeedbackView.handleCommentAbort expected argument shape {text: DocumentContent}, got " + JSON.stringify(e, null, "  ")), this.setState({
                    savedInput: copyDocumentContent/*L*/(e.text),
                    photoSource: e.photoSource
                }))
            },
            renderReplyBar: function() {
                if (!this.props.feedback.can_viewer_comment || this.props.viewContext === THViewConstants/*T*/.SEARCH || this.props.viewContext === THViewConstants/*T*/.PERMALINK) return null;
                var e = this._hasSavedInput(),
                    t = this.props.feedback.top_level_comments.edges;
                return e || this.state.overrideShowReplyBar || this.props.viewContext === THViewConstants/*T*/.PERMALINK || t && 0 !== t.length ? React/*g*/.createElement(View/*F*/, {
                    style: K.contentContainer
                }, React/*g*/.createElement(THInputBarView/*E*/, {
                    key: "replyBar",
                    ref: V,
                    initialText: this.state.savedInput,
                    photoSource: this.state.photoSource,
                    canCommentInline: this.props.canCommentInline,
                    onCommentSubmit: this.handleCommentSubmit,
                    onCommentInputRequested: this.handleCommentInputRequested,
                    hideInputButtons: !e
                })) : null
            },
            render: function() {
                return this.props.feedback ? U(this.props) ? React/*g*/.createElement(View/*F*/, null, this.renderFeedbackButtons(), this.renderComments(), this.renderReplyBar()) : React/*g*/.createElement(View/*F*/, {
                    key: "loading"
                }, React/*g*/.createElement(FBSpinner/*c*/, {
                    style: K.row
                })) : React/*g*/.createElement(View/*F*/, null)
            },
            _hasSavedInput: function() {
                return this.state.savedInput && this.state.savedInput.getText().trim().length > 0
            }
        }),
        K = StyleSheet/*y*/.create({
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
                marginHorizontal: THDockedInputContainer/*C*/.contentPaddingHorizontal
            },
            disabledFeedbackText: {
                color: THColors/*b*/.fadedText
            },
            divider: {
                backgroundColor: THColors/*b*/.divider,
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
                color: THColors/*b*/.feedbackFadedText,
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
                color: THColors/*b*/.feedbackText
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
                color: THColors/*b*/.groupsAccent
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
                color: THColors/*b*/.groupsAccent
            },
            row: {
                marginBottom: 12
            },
            showMoreContainer: {
                marginTop: 4,
                height: 28
            }
        });
    i.exports = W
});