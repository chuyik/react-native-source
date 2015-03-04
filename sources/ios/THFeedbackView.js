__d("THFeedbackView",["LayoutAnimation","CommentAddAction","DocumentContent","FBLikersPopover","FBSeenByPopover","FBSpinner","FeedbackLikeAction","GraphQLConstants","GraphQLStoreDataHandler","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","THCommentCell","THDockedInputContainer","THInputBarView","THLikeSentence","THViewConstants","TimerMixin","TouchableBounce","TouchableWithoutFeedback","View","copyDocumentContent","fbt","invariant","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var LayoutAnimation/*o*/ = require/*t*/("LayoutAnimation"),
        CommentAddAction/*a*/ = require/*t*/("CommentAddAction"),
        DocumentContent/*s*/ = require/*t*/("DocumentContent"),
        FBLikersPopover/*l*/ = require/*t*/("FBLikersPopover"),
        FBSeenByPopover/*u*/ = require/*t*/("FBSeenByPopover"),
        FBSpinner/*c*/ = require/*t*/("FBSpinner"),
        FeedbackLikeAction/*p*/ = require/*t*/("FeedbackLikeAction"),
        GraphQLConstants/*d*/ = require/*t*/("GraphQLConstants"),
        GraphQLStoreDataHandler/*h*/ = require/*t*/("GraphQLStoreDataHandler"),
        Image/*f*/ = require/*t*/("Image"),
        NativeModulesDeprecated/*m*/ = require/*t*/("NativeModulesDeprecated"),
        React/*g*/ = require/*t*/("React"),
        ReactGraphQL/*_*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*y*/ = require/*t*/("StyleSheet"),
        Text/*v*/ = require/*t*/("Text"),
        THAnimations/*S*/ = require/*t*/("THAnimations"),
        THColors/*b*/ = require/*t*/("THColors"),
        THSounds/*R*/ = require/*t*/("THSounds"),
        THCommentCell/*w*/ = require/*t*/("THCommentCell"),
        THDockedInputContainer/*C*/ = require/*t*/("THDockedInputContainer"),
        THInputBarView/*E*/ = require/*t*/("THInputBarView"),
        THLikeSentence/*D*/ = require/*t*/("THLikeSentence"),
        THViewConstants/*T*/ = require/*t*/("THViewConstants"),
        TimerMixin/*x*/ = require/*t*/("TimerMixin"),
        TouchableBounce/*P*/ = require/*t*/("TouchableBounce"),
        TouchableWithoutFeedback/*I*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*F*/ = require/*t*/("View"),
        copyDocumentContent/*L*/ = require/*t*/("copyDocumentContent"),
        fbt/*M*/ = require/*t*/("fbt"),
        invariant/*Q*/ = require/*t*/("invariant"),
        ix/*A*/ = require/*t*/("ix"),
        keyOf/*k*/ = require/*t*/("keyOf"),
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
        U = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.top_level_comments && global/*e*/.feedback.top_level_comments.edges || []
        },
        j = function(global/*e*/) {
            return global/*e*/.feedback && global/*e*/.feedback.likers && void 0 !== global/*e*/.feedback.likers.count ? global/*e*/.feedback.likers.count : null
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
                        }(THCommentCell/*w*/.getQuery("authorOptimisticPrefetch"))
                    },
                    feedback: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, LayoutAnimation/*o*/) {
                            var CommentAddAction/*a*/ = require/*t*/.__GraphQL;
                            return new CommentAddAction/*a*/.QueryFragment("THFeedbackView_feedback", "Feedback", [new CommentAddAction/*a*/.Field("id"), new CommentAddAction/*a*/.Field("likers", [new CommentAddAction/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new CommentAddAction/*a*/.Field("does_viewer_like"), new CommentAddAction/*a*/.Field("can_viewer_comment"), new CommentAddAction/*a*/.Field("can_viewer_like"), new CommentAddAction/*a*/.Field("seen_by", [new CommentAddAction/*a*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new CommentAddAction/*a*/.Field("top_level_comments", [new CommentAddAction/*a*/.Field("count"), new CommentAddAction/*a*/.Field("edges", [new CommentAddAction/*a*/.Field("node", [new CommentAddAction/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(LayoutAnimation/*o*/)], null, null, null, {
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
                            })], null, [new CommentAddAction/*a*/.Callv("first", [require/*t*/.__var(module/*i*/)])], null, null, {
                                connection: !0
                            }), new CommentAddAction/*a*/.Field("top_level_comments", [new CommentAddAction/*a*/.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "THFeedbackView_feedback"
                            })
                        }(THCommentCell/*w*/.getQuery("feedback"), FBLikersPopover/*l*/.getQuery("feedback"), THLikeSentence/*D*/.getQuery("feedback"), requireDynamic/*n*/.comment_count, THCommentCell/*w*/.getQuery("comment"))
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
                var global/*e*/ = U(this.props);
                this.state.firstCursor = global/*e*/.length > 0 && global/*e*/[0].cursor
            },
            getCommentCountQueryParam: function() {
                return Math.max(this.queryParams.comment_count, this.context.route.getData().defaultCommentCount || 0)
            },
            renderLikeButton: function() {
                var global/*e*/, require/*t*/ = [K.feedbackButtonText];
                this.state.optimisticLikeValue || null === this.state.optimisticLikeValue && this.props.feedback.does_viewer_like ? (global/*e*/ = ix/*A*/("thUFILikeSelectedIcon"), require/*t*/.push(K.likedStyling)) : this.props.feedback.can_viewer_like ? (global/*e*/ = ix/*A*/("thUFILikeIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = ix/*A*/("thUFILikeDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = React/*g*/.createElement(View/*F*/, {
                    style: [K.row, K.likeTextContainer]
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.likeButtonContainer
                }, React/*g*/.createElement(Image/*f*/, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: B
                })), React/*g*/.createElement(Text/*v*/, {
                    style: require/*t*/
                }, fbt/*M*/({
                    type: "text",
                    texts: ["Like"],
                    desc: "Like CommentAddAction/*a*/ post"
                })));
                return this.props.feedback.can_viewer_like && (requireDynamic/*n*/ = React/*g*/.createElement(TouchableBounce/*P*/, {
                    onPress: this.onLikeTap,
                    onPressAnimationComplete: this.onLikeTapped
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            renderCommentButton: function() {
                var global/*e*/, require/*t*/ = [K.feedbackButtonText];
                this.props.feedback.can_viewer_comment && this.props.viewContext !== THViewConstants/*T*/.SEARCH ? (global/*e*/ = ix/*A*/("thCommentIcon"), require/*t*/.push(K.feedbackTextStyling)) : (global/*e*/ = ix/*A*/("thCommentDisabledIcon"), require/*t*/.push(K.disabledFeedbackText));
                var requireDynamic/*n*/ = React/*g*/.createElement(View/*F*/, {
                    style: [K.likeTextContainer, K.row]
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.likeButtonContainer
                }, React/*g*/.createElement(Image/*f*/, {
                    source: global/*e*/,
                    style: K.icon,
                    ref: $
                })), React/*g*/.createElement(Text/*v*/, {
                    style: require/*t*/
                }, fbt/*M*/({
                    type: "text",
                    texts: ["Comment"],
                    desc: "Comment on post"
                })));
                return this.props.feedback.can_viewer_comment && this.props.viewContext !== THViewConstants/*T*/.SEARCH && (requireDynamic/*n*/ = React/*g*/.createElement(TouchableBounce/*P*/, {
                    onPress: this.focusReplyInput
                }, requireDynamic/*n*/)), requireDynamic/*n*/
            },
            onLikeTap: function() {
                var global/*e*/ = this.props.feedback.top_level_comments.count > 0 ? THAnimations/*S*/.layout.likeWithComment : THAnimations/*S*/.layout.likeWithNoComments;
                LayoutAnimation/*o*/.configureNext(global/*e*/), this.setState({
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
                var global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/ = this.props.feedback.top_level_comments.count,
                    module/*i*/ = j(this.props),
                    LayoutAnimation/*o*/ = this.props.feedback.seen_by.count;
                if (null !== this.state.optimisticLikeValue && (this.state.optimisticLikeValue ? module/*i*/++ : module/*i*/--), !(module/*i*/ || requireLazy/*r*/ || LayoutAnimation/*o*/)) return React/*g*/.createElement(View/*F*/, {
                    style: K.fillerMetadata
                });
                if (module/*i*/) {
                    var CommentAddAction/*a*/ = 1 === module/*i*/ ? fbt/*M*/({
                        type: "text",
                        texts: ["1 Like"],
                        desc: "Singular like count"
                    }) : fbt/*M*/({
                        type: "text",
                        texts: ["{like_count} Likes"],
                        desc: "Plural like count"
                    }, [fbt/*M*/.param("like_count", module/*i*/)]);
                    global/*e*/ = React/*g*/.createElement(View/*F*/, {
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
                if (requireLazy/*r*/) {
                    var DocumentContent/*s*/ = 1 === requireLazy/*r*/ ? fbt/*M*/({
                        type: "text",
                        texts: ["1 Comment"],
                        desc: "Singular comment count"
                    }) : fbt/*M*/({
                        type: "text",
                        texts: ["{comment_count} Comments"],
                        desc: "Plural comment count"
                    }, [fbt/*M*/.param("comment_count", requireLazy/*r*/)]);
                    require/*t*/ = React/*g*/.createElement(View/*F*/, {
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
                    requireDynamic/*n*/ = React/*g*/.createElement(View/*F*/, {
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
                }, global/*e*/, require/*t*/, requireDynamic/*n*/), React/*g*/.createElement(FBLikersPopover/*l*/, {
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
                var global/*e*/, require/*t*/ = this.props.feedback.top_level_comments.count;
                return require/*t*/ && (global/*e*/ = React/*g*/.createElement(View/*F*/, {
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
                }, this.renderCommentButton()))), global/*e*/)
            },
            componentWillReceiveProps: function(global/*e*/) {
                var require/*t*/ = U(global/*e*/);
                if (this.state.showMoreCommentsSpinner) require/*t*/.length > U(this.props).length && (LayoutAnimation/*o*/.configureNext(THAnimations/*S*/.layout.moreComments), this.setState({
                    showMoreCommentsSpinner: !1
                }));
                else {
                    var requireDynamic/*n*/ = require/*t*/.length > 0 && require/*t*/[0].cursor;
                    if (requireDynamic/*n*/ && requireDynamic/*n*/ !== GraphQLConstants/*d*/.DUMMY_CURSOR_ID && requireDynamic/*n*/ !== this.state.firstCursor) {
                        var requireLazy/*r*/ = U(this.props),
                            module/*i*/ = function(global/*e*/) {
                                if (GraphQLStoreDataHandler/*h*/.isClientID(global/*e*/.node.id)) {
                                    var require/*t*/ = GraphQLStoreDataHandler/*h*/.getServerIDForClientID(global/*e*/.node.id);
                                    return require/*t*/ ? require/*t*/ : global/*e*/.node.id
                                }
                                return global/*e*/.node.id
                            },
                            CommentAddAction/*a*/ = requireLazy/*r*/.map(module/*i*/),
                            DocumentContent/*s*/ = require/*t*/.filter(function(global/*e*/) {
                                return -1 === CommentAddAction/*a*/.indexOf(global/*e*/.node.id)
                            }).length;
                        this.setQueryParams({
                            comment_count: this.getCommentCountQueryParam() + DocumentContent/*s*/
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
                if (this.state.showMoreCommentsSpinner) return React/*g*/.createElement(View/*F*/, {
                    style: K.showMoreContainer
                }, React/*g*/.createElement(FBSpinner/*c*/, null));
                var requireLazy/*r*/, module/*i*/ = require/*t*/ - (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0);
                requireLazy/*r*/ = fbt/*M*/(1 === module/*i*/ ? {
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
                    CommentAddAction/*a*/ > (requireDynamic/*n*/ && requireDynamic/*n*/.length || 0) && LayoutAnimation/*o*/.push(K.previousNewComments)
                }
                return React/*g*/.createElement(TouchableWithoutFeedback/*I*/, {
                    key: "commentPager",
                    onPress: this.showMoreComments
                }, React/*g*/.createElement(View/*F*/, {
                    style: K.showMoreContainer
                }, React/*g*/.createElement(Text/*v*/, {
                    style: LayoutAnimation/*o*/
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
                        var LayoutAnimation/*o*/ = this.state.hasExpanded && !this.state.collapsedComments[module/*i*/.id];
                        global/*e*/.push(React/*g*/.createElement(THCommentCell/*w*/, {
                            ref: module/*i*/.id,
                            key: module/*i*/.id,
                            comment: module/*i*/,
                            feedback: this.props.feedback,
                            lastViewTime: require/*t*/.last_view_time,
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
                this._hasSavedInput() || this.props.viewContext === THViewConstants/*T*/.PERMALINK || global/*e*/ && 0 !== global/*e*/.length || this.setState({
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
                    mode: THDockedInputContainer/*C*/.Mode.fullhide,
                    initialText: this.state.savedInput,
                    tappedTime: require/*t*/,
                    photoSource: requireLazy/*r*/
                }, this.handleCommentSubmit, this.handleCommentAbort)
            },
            handleInputRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/.tappedFeedUnitHandle = this.props.getFeedUnitHandle(), global/*e*/.tappedFeedUnitID = this.props.story.id, this.props.onInputRequested && this.props.onInputRequested(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                this.props.viewer && this.props.viewer.actor && this.props.viewer.actor.id || invariant/*Q*/(0, "Attempting to submit CommentAddAction/*a*/ comment without an author. THFeedbackView might have been passed down CommentAddAction/*a*/ invalid viewer"), require/*t*/ && require/*t*/.style_list && "photo" === require/*t*/.style_list[0] ? CommentAddAction/*a*/.handleAddPhotoComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/) : CommentAddAction/*a*/.handleAddComment(this.props.viewer.actor.id, this.props.feedback.id, global/*e*/, require/*t*/), this.setQueryParams({
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
                }), global/*e*/.text && (global/*e*/.text instanceof DocumentContent/*s*/ || invariant/*Q*/(0, "THFeedbackView.handleCommentAbort expected argument shape {text: DocumentContent}, got " + JSON.stringify(global/*e*/, null, "  ")), this.setState({
                    savedInput: copyDocumentContent/*L*/(global/*e*/.text),
                    photoSource: global/*e*/.photoSource
                }))
            },
            renderReplyBar: function() {
                if (!this.props.feedback.can_viewer_comment || this.props.viewContext === THViewConstants/*T*/.SEARCH || this.props.viewContext === THViewConstants/*T*/.PERMALINK) return null;
                var global/*e*/ = this._hasSavedInput(),
                    require/*t*/ = this.props.feedback.top_level_comments.edges;
                return global/*e*/ || this.state.overrideShowReplyBar || this.props.viewContext === THViewConstants/*T*/.PERMALINK || require/*t*/ && 0 !== require/*t*/.length ? React/*g*/.createElement(View/*F*/, {
                    style: K.contentContainer
                }, React/*g*/.createElement(THInputBarView/*E*/, {
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
    module/*i*/.exports = W
});