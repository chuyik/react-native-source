__d("THFeedbackView",["LayoutAnimation","CommentAddAction","DocumentContent","FBLikersPopover","FBSeenByPopover","FBSpinner","FeedbackLikeAction","GraphQLConstants","GraphQLStoreDataHandler","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","THCommentCell","THDockedInputContainer","THInputBarView","THLikeSentence","THViewConstants","TimerMixin","TouchableBounce","TouchableWithoutFeedback","View","copyDocumentContent","fbt","invariant","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        exports/*a*/ = require/*t*/("CommentAddAction"),
        LayoutAnimation/*s*/ = require/*t*/("DocumentContent"),
        CommentAddAction/*l*/ = require/*t*/("FBLikersPopover"),
        DocumentContent/*u*/ = require/*t*/("FBSeenByPopover"),
        FBLikersPopover/*c*/ = require/*t*/("FBSpinner"),
        FBSeenByPopover/*p*/ = require/*t*/("FeedbackLikeAction"),
        FBSpinner/*d*/ = require/*t*/("GraphQLConstants"),
        FeedbackLikeAction/*h*/ = require/*t*/("GraphQLStoreDataHandler"),
        GraphQLConstants/*f*/ = require/*t*/("Image"),
        GraphQLStoreDataHandler/*m*/ = require/*t*/("NativeModulesDeprecated"),
        Image/*g*/ = require/*t*/("React"),
        NativeModulesDeprecated/*_*/ = require/*t*/("ReactGraphQL"),
        React/*y*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*v*/ = require/*t*/("Text"),
        StyleSheet/*S*/ = require/*t*/("THAnimations"),
        Text/*b*/ = require/*t*/("THColors"),
        THAnimations/*R*/ = require/*t*/("THSounds"),
        THColors/*w*/ = require/*t*/("THCommentCell"),
        THSounds/*C*/ = require/*t*/("THDockedInputContainer"),
        THCommentCell/*E*/ = require/*t*/("THInputBarView"),
        THDockedInputContainer/*D*/ = require/*t*/("THLikeSentence"),
        THInputBarView/*T*/ = require/*t*/("THViewConstants"),
        THLikeSentence/*x*/ = require/*t*/("TimerMixin"),
        THViewConstants/*P*/ = require/*t*/("TouchableBounce"),
        TimerMixin/*I*/ = require/*t*/("TouchableWithoutFeedback"),
        TouchableBounce/*F*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*L*/ = require/*t*/("copyDocumentContent"),
        View/*M*/ = require/*t*/("fbt"),
        copyDocumentContent/*Q*/ = require/*t*/("invariant"),
        fbt/*A*/ = require/*t*/("ix"),
        invariant/*k*/ = require/*t*/("keyOf"),
        ix/*O*/ = GraphQLStoreDataHandler/*m*/.RKTreehouseManager,
        keyOf/*N*/ = 10,
        G = 2,
        $ = invariant/*k*/({
            commentRef: null
        }),
        B = invariant/*k*/({
            likeRef: null
        }),
        H = invariant/*k*/({
            likersPopRef: null
        }),
        V = "replyBar",
        q = invariant/*k*/({
            seenByPopRef: null
        }),
        U = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.top_level_comments && global/*e*/.feedback.top_level_comments.edges || []
        },
        j = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.likers && void 0 !== global/*e*/.feedback.likers.count ? global/*e*/.feedback.likers.count : null
        },
        W = Image/*g*/.createClass({
            displayName: "THFeedbackView",
            propTypes: {
                feedback: Image/*g*/.PropTypes.object.isRequired,
                canCommentInline: Image/*g*/.PropTypes.bool,
                onInputRequested: Image/*g*/.PropTypes.func
            },
            mixins: [NativeModulesDeprecated/*_*/.Mixin, THLikeSentence/*x*/],
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
                        }(THColors/*w*/.getQuery("authorOptimisticPrefetch"))
                    },
                    feedback: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var exports/*a*/ = require/*t*/.__GraphQL;
                            return new exports/*a*/.QueryFragment("THFeedbackView_feedback", "Feedback", [new exports/*a*/.Field("id"), new exports/*a*/.Field("likers", [new exports/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new exports/*a*/.Field("does_viewer_like"), new exports/*a*/.Field("can_viewer_comment"), new exports/*a*/.Field("can_viewer_like"), new exports/*a*/.Field("seen_by", [new exports/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new exports/*a*/.Field("top_level_comments", [new exports/*a*/.Field("count"), new exports/*a*/.Field("edges", [new exports/*a*/.Field("node", [new exports/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(o)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new exports/*a*/.Field("cursor", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THFeedbackView_feedback_1"
                            }), new exports/*a*/.Field("last_view_time"), new exports/*a*/.Field("page_info", [new exports/*a*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new exports/*a*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new exports/*a*/.Callv("first", [require/*t*/.__var(module/*i*/)])], null, null, {
                                connection: !0
                            }), new exports/*a*/.Field("top_level_comments", [new exports/*a*/.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "THFeedbackView_feedback"
                            })
                        }(THColors/*w*/.getQuery("feedback"), CommentAddAction/*l*/.getQuery("feedback"), THDockedInputContainer/*D*/.getQuery("feedback"), requireDynamic/*n*/.comment_count, THColors/*w*/.getQuery("comment"))
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
                        }(THColors/*w*/.getQuery("group"))
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
                this.state.optimisticLikeValue || null === this.state.optimisticLikeValue && this.props.feedback.does_viewer_like ? (global/*e*/ = fbt/*A*/("thUFILikeSelectedIcon"), require/*t*/.push(K.likedStyling)) : this.props.feedback.can_viewer_like ? (global/*e*/ = fbt/*A*/("thUFILikeIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = fbt/*A*/("thUFILikeDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: [K.row, K.likeTextContainer]
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.likeButtonContainer
                }, Image/*g*/.createElement(GraphQLConstants/*f*/, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: B
                })), Image/*g*/.createElement(ReactGraphQL/*v*/, {
                    style: require/*t*/
                }, View/*M*/({
                    type: "text",
                    texts: ["Like"],
                    desc: "Like exports/*a*/ post"
                })));
                return this.props.feedback.can_viewer_like && (requireDynamic/*n*/ = Image/*g*/.createElement(THViewConstants/*P*/, {
                    onPress: this.onLikeTap,
                    onPressAnimationComplete: this.onLikeTapped
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            renderCommentButton: function() {
                var global/*e*/, require/*t*/ = [K.feedbackButtonText];
                this.props.feedback.can_viewer_comment && this.props.viewContext !== THInputBarView/*T*/.SEARCH ? (global/*e*/ = fbt/*A*/("thCommentIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = fbt/*A*/("thCommentDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: [K.likeTextContainer, K.row]
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.likeButtonContainer
                }, Image/*g*/.createElement(GraphQLConstants/*f*/, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: $
                })), Image/*g*/.createElement(ReactGraphQL/*v*/, {
                    style: require/*t*/
                }, View/*M*/({
                    type: "text",
                    texts: ["Comment"],
                    desc: "Comment on post"
                })));
                return this.props.feedback.can_viewer_comment && this.props.viewContext !== THInputBarView/*T*/.SEARCH && (requireDynamic/*n*/ = Image/*g*/.createElement(THViewConstants/*P*/, {
                    onPress: this.focusReplyInput
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            onLikeTap: function() {
                var global/*e*/ = this.props.feedback.top_level_comments.count > 0 ? StyleSheet/*S*/.layout.likeWithComment : StyleSheet/*S*/.layout.likeWithNoComments;
                o.configureNext(global/*e*/), this.setState({
                    optimisticLikeValue: !this.props.feedback.does_viewer_like
                }), this.props.feedback.does_viewer_like || ix/*O*/ && ix/*O*/.playSound(THAnimations/*R*/.likeMain)
            },
            onLikeTapped: function() {
                FBSeenByPopover/*p*/.handleLikeChange(this.props.feedback.id, !this.props.feedback.does_viewer_like), this.setState({
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
                if (null !== this.state.optimisticLikeValue && (this.state.optimisticLikeValue ? module/*i*/++ : module/*i*/--), !(module/*i*/ || requireLazy/*r*/ || o)) return Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.fillerMetadata
                });
                if (module/*i*/) {
                    var exports/*a*/ = 1 === module/*i*/ ? View/*M*/({
                        type: "text",
                        texts: ["1 Like"],
                        desc: "Singular like count"
                    }) : View/*M*/({
                        type: "text",
                        texts: ["{like_count} Likes"],
                        desc: "Plural like count"
                    }, [View/*M*/.param("like_count", module/*i*/)]);
                    global/*e*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackStatsContainer
                    }, Image/*g*/.createElement(TimerMixin/*I*/, {
                        onPress: this.showLikers
                    }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackCountWrapper
                    }, Image/*g*/.createElement(ReactGraphQL/*v*/, {
                        style: K.feedbackFadedText
                    }, exports/*a*/))), Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                if (requireLazy/*r*/) {
                    var LayoutAnimation/*s*/ = 1 === requireLazy/*r*/ ? View/*M*/({
                        type: "text",
                        texts: ["1 Comment"],
                        desc: "Singular comment count"
                    }) : View/*M*/({
                        type: "text",
                        texts: ["{comment_count} Comments"],
                        desc: "Plural comment count"
                    }, [View/*M*/.param("comment_count", requireLazy/*r*/)]);
                    require/*t*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackStatsContainer
                    }, Image/*g*/.createElement(TimerMixin/*I*/, {
                        key: "commentCountText",
                        onPress: this.showMoreComments
                    }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackCountWrapper
                    }, Image/*g*/.createElement(ReactGraphQL/*v*/, {
                        style: K.feedbackFadedText
                    }, LayoutAnimation/*s*/))), Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                if (o) {
                    var FBLikersPopover/*c*/ = View/*M*/({
                        type: "text",
                        texts: ["Seen by {seen_count}"],
                        desc: "Information for how many people have seen this story"
                    }, [View/*M*/.param("seen_count", o)]);
                    requireDynamic/*n*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackStatsContainer
                    }, Image/*g*/.createElement(TimerMixin/*I*/, {
                        onPress: this.showSeenBy
                    }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.feedbackCountWrapper
                    }, Image/*g*/.createElement(ReactGraphQL/*v*/, {
                        style: K.feedbackFadedText
                    }, FBLikersPopover/*c*/))), Image/*g*/.createElement(TouchableBounce/*F*/, {
                        style: K.horizontalSpace
                    }))
                }
                return Image/*g*/.createElement(TouchableBounce/*F*/, {
                    key: "likesBar",
                    style: [K.likesBar, K.contentContainer]
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.feedbackStatsContainer
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.feedbackStatsContainer
                }, global/*e*/, require/*t*/, requireDynamic/*n*/), Image/*g*/.createElement(CommentAddAction/*l*/, {
                    ref: H,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !ix/*O*/,
                    closeTextColor: Text/*b*/.groupsAccent
                }), Image/*g*/.createElement(DocumentContent/*u*/, {
                    ref: q,
                    feedback: this.props.feedback,
                    circularProfilePictures: !0,
                    closeOnRowPress: !ix/*O*/,
                    closeTextColor: Text/*b*/.groupsAccent
                })))
            },
            renderFeedbackButtons: function() {
                var global/*e*/, require/*t*/ = this.props.feedback.top_level_comments.count;
                return require/*t*/ && (global/*e*/ = Image/*g*/.createElement(TouchableBounce/*F*/, {
                    key: "divLikesBar",
                    style: [K.divider, K.row, K.contentContainer]
                })), Image/*g*/.createElement(TouchableBounce/*F*/, null, this.getFeedbackStats(), Image/*g*/.createElement(TouchableBounce/*F*/, {
                    key: "divMetadataBar",
                    style: K.divider
                }), Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.contentContainer
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.feedbackButtonsContainer
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.buttonContainer
                }, this.renderLikeButton()), Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.buttonContainer
                }, this.renderCommentButton()))), global/*e*/)
            },
            componentWillReceiveProps: function(global/*e*/) {
                var require/*t*/ = U(global/*e*/);
                if (this.state.showMoreCommentsSpinner) require/*t*/.length > U(this.props).length && (o.configureNext(StyleSheet/*S*/.layout.moreComments), this.setState({
                    showMoreCommentsSpinner: !1
                }));
                else {
                    var requireDynamic/*n*/ = require/*t*/.length > 0 && require/*t*/[0].cursor;
                    if (requireDynamic/*n*/ && requireDynamic/*n*/ !== FBSpinner/*d*/.DUMMY_CURSOR_ID && requireDynamic/*n*/ !== this.state.firstCursor) {
                        var requireLazy/*r*/ = U(this.props),
                            module/*i*/ = function(global/*e*/) {
                                if (FeedbackLikeAction/*h*/.isClientID(global/*e*/.node.id)) {
                                    var require/*t*/ = FeedbackLikeAction/*h*/.getServerIDForClientID(global/*e*/.node.id);
                                    return require/*t*/ ? require/*t*/ : global/*e*/.node.id
                                }
                                return global/*e*/.node.id
                            },
                            exports/*a*/ = requireLazy/*r*/.map(module/*i*/),
                            LayoutAnimation/*s*/ = require/*t*/.filter(function(global/*e*/) {
                                return -1 === exports/*a*/.indexOf(global/*e*/.node.id)
                            }).length;
                        this.setQueryParams({
                            comment_count: this.getCommentCountQueryParam() + LayoutAnimation/*s*/
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
                if (this.state.showMoreCommentsSpinner) return Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.showMoreContainer
                }, Image/*g*/.createElement(FBLikersPopover/*c*/, null));
                var requireLazy/*r*/, module/*i*/ = require/*t*/ - (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0);
                requireLazy/*r*/ = View/*M*/(1 === module/*i*/ ? {
                    type: "text",
                    texts: ["View previous comment"],
                    desc: "Singular text for affordance to show more comments."
                } : {
                    type: "text",
                    texts: ["View previous comments"],
                    desc: "Plural text for affordance to show more comments."
                });
                var o = [K.feedbackFadedText];
                if (this.props.viewContext !== THInputBarView/*T*/.PERMALINK) {
                    var exports/*a*/ = this.props.feedback.top_level_comment_counts.unread_count;
                    exports/*a*/ > (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0) && o.push(K.previousNewComments)
                }
                return Image/*g*/.createElement(TimerMixin/*I*/, {
                    key: "commentPager",
                    onPress: this.showMoreComments
                }, Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.showMoreContainer
                }, Image/*g*/.createElement(ReactGraphQL/*v*/, {
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
                        global/*e*/.push(Image/*g*/.createElement(THColors/*w*/, {
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
                return Image/*g*/.createElement(TouchableBounce/*F*/, {
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
                    comment_count: this.getCommentCountQueryParam() + keyOf/*N*/
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
                this._hasSavedInput() || this.props.viewContext === THInputBarView/*T*/.PERMALINK || global/*e*/ && 0 !== global/*e*/.length || this.setState({
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
                    mode: THSounds/*C*/.Mode.fullhide,
                    initialText: this.state.savedInput,
                    tappedTime: require/*t*/,
                    photoSource: requireLazy/*r*/
                }, this.handleCommentSubmit, this.handleCommentAbort)
            },
            handleInputRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/.tappedFeedUnitHandle = this.props.getFeedUnitHandle(), global/*e*/.tappedFeedUnitID = this.props.story.id, this.props.onInputRequested && this.props.onInputRequested(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                this.props.viewer && this.props.viewer.actor && this.props.viewer.actor.id || copyDocumentContent/*Q*/(0, "Attempting to submit exports/*a*/ comment without an author. THFeedbackView might have been passed down exports/*a*/ invalid viewer"), require/*t*/ && require/*t*/.style_list && "photo" === require/*t*/.style_list[0] ? exports/*a*/.handleAddPhotoComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/) : exports/*a*/.handleAddComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/), this.setQueryParams({
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
                }), global/*e*/.text && (global/*e*/.text instanceof LayoutAnimation/*s*/ || copyDocumentContent/*Q*/(0, "THFeedbackView.handleCommentAbort expected argument shape {text: DocumentContent}, got " + JSON.stringify(global/*e*/, null, "  ")), this.setState({
                    savedInput: TouchableWithoutFeedback/*L*/(global/*e*/.text),
                    photoSource: global/*e*/.photoSource
                }))
            },
            renderReplyBar: function() {
                if (!this.props.feedback.can_viewer_comment || this.props.viewContext === THInputBarView/*T*/.SEARCH || this.props.viewContext === THInputBarView/*T*/.PERMALINK) return null;
                var global/*e*/ = this._hasSavedInput(),
                    require/*t*/ = this.props.feedback.top_level_comments.edges;
                return global/*e*/ || this.state.overrideShowReplyBar || this.props.viewContext === THInputBarView/*T*/.PERMALINK || require/*t*/ && 0 !== require/*t*/.length ? Image/*g*/.createElement(TouchableBounce/*F*/, {
                    style: K.contentContainer
                }, Image/*g*/.createElement(THCommentCell/*E*/, {
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
                return this.props.feedback ? U(this.props) ? Image/*g*/.createElement(TouchableBounce/*F*/, null, this.renderFeedbackButtons(), this.renderComments(), this.renderReplyBar()) : Image/*g*/.createElement(TouchableBounce/*F*/, {
                    key: "loading"
                }, Image/*g*/.createElement(FBLikersPopover/*c*/, {
                    style: K.row
                })) : Image/*g*/.createElement(TouchableBounce/*F*/, null)
            },
            _hasSavedInput: function() {
                return this.state.savedInput && this.state.savedInput.getText().trim().length > 0
            }
        }),
        K = React/*y*/.create({
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
                marginHorizontal: THSounds/*C*/.contentPaddingHorizontal
            },
            disabledFeedbackText: {
                color: Text/*b*/.fadedText
            },
            divider: {
                backgroundColor: Text/*b*/.divider,
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
                color: Text/*b*/.feedbackFadedText,
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
                color: Text/*b*/.feedbackText
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
                color: Text/*b*/.groupsAccent
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
                color: Text/*b*/.groupsAccent
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