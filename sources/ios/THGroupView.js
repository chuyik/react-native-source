__d("THGroupView",["LayoutAnimation","FBSpinner","FeedbackPoller","GraphQL_EXPERIMENTAL","GraphQLStore","Image","ListView","ListViewDataSource","NativeModules","React","ReactGraphQL","RCTDeviceEventEmitter","Dimensions","RCTNativeAppEventEmitter","StyleSheet","Subscribable","Text","THColors","THDockedInputContainer","THFeedbackView","THFeedUnitView","THPinnedPostView","TimerMixin","TouchableHighlight","View","deepDiffer","fbt","fetchRQL","invariant","isEmpty","ix","keyOf","merge","rql","uniqueKey"],function (global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict"; {
        var o = require/*TimerMixin/*t*/*/("LayoutAnimation"),
            exports/*a*/ = require/*TimerMixin/*t*/*/("FBSpinner"),
            LayoutAnimation/*s*/ = require/*TimerMixin/*t*/*/("FeedbackPoller"),
            FBSpinner/*l*/ = require/*TimerMixin/*t*/*/("GraphQL_EXPERIMENTAL"),
            FeedbackPoller/*u*/ = require/*TimerMixin/*t*/*/("GraphQLStore"),
            GraphQL_EXPERIMENTAL/*c*/ = require/*TimerMixin/*t*/*/("Image"),
            GraphQLStore/*p*/ = require/*TimerMixin/*t*/*/("ListView"),
            Image/*d*/ = require/*TimerMixin/*t*/*/("ListViewDataSource"),
            ListView/*h*/ = require/*TimerMixin/*t*/*/("NativeModules"),
            ListViewDataSource/*f*/ = require/*TimerMixin/*t*/*/("React"),
            NativeModules/*m*/ = require/*TimerMixin/*t*/*/("ReactGraphQL"),
            React/*g*/ = require/*TimerMixin/*t*/*/("RCTDeviceEventEmitter"),
            ReactGraphQL/*_*/ = require/*TimerMixin/*t*/*/("Dimensions"),
            RCTDeviceEventEmitter/*y*/ = require/*TimerMixin/*t*/*/("RCTNativeAppEventEmitter"),
            Dimensions/*v*/ = require/*TimerMixin/*t*/*/("StyleSheet"),
            RCTNativeAppEventEmitter/*S*/ = require/*TimerMixin/*t*/*/("Subscribable"),
            StyleSheet/*b*/ = require/*TimerMixin/*t*/*/("Text"),
            Subscribable/*R*/ = require/*TimerMixin/*t*/*/("THColors"),
            Text/*w*/ = require/*TimerMixin/*t*/*/("THDockedInputContainer"),
            THColors/*C*/ = require/*TimerMixin/*t*/*/("THFeedbackView"),
            THDockedInputContainer/*E*/ = require/*TimerMixin/*t*/*/("THFeedUnitView"),
            THFeedbackView/*D*/ = require/*TimerMixin/*t*/*/("THPinnedPostView"),
            THFeedUnitView/*T*/ = require/*TimerMixin/*t*/*/("TimerMixin"),
            THPinnedPostView/*x*/ = (require/*TimerMixin/*t*/*/("TouchableHighlight"), require/*TimerMixin/*t*/*/("View")),
            TouchableHighlight/*P*/ = require/*TimerMixin/*t*/*/("deepDiffer"),
            View/*I*/ = require/*TimerMixin/*t*/*/("fbt"),
            deepDiffer/*F*/ = require/*TimerMixin/*t*/*/("fetchRQL"),
            fbt/*L*/ = require/*TimerMixin/*t*/*/("invariant"),
            fetchRQL/*M*/ = require/*TimerMixin/*t*/*/("isEmpty"),
            invariant/*Q*/ = require/*TimerMixin/*t*/*/("ix"),
            isEmpty/*A*/ = require/*TimerMixin/*t*/*/("keyOf"),
            ix/*k*/ = require/*TimerMixin/*t*/*/("merge"),
            keyOf/*O*/ = require/*TimerMixin/*t*/*/("rql"),
            merge/*N*/ = require/*TimerMixin/*t*/*/("uniqueKey"),
            rql/*G*/ = isEmpty/*A*/({
                dockedReplyContainerRef: null
            }),
            $ = ListView/*h*/.RKUIManager,
            B = ListView/*h*/.RKTreehouseManager,
            H = 5,
            V = 36,
            q = 70,
            U = "gk_catalyst_th_live_update",
            j = "th_group_comment_tti",
            W = ListViewDataSource/*f*/.createClass({
                displayName: "THGroupView",
                propTypes: {
                    navigator: ListViewDataSource/*f*/.PropTypes.object,
                    topInset: ListViewDataSource/*f*/.PropTypes.number,
                    bottomInset: ListViewDataSource/*f*/.PropTypes.number
                },
                getDefaultProps: function() {
                    return {
                        topInset: 0,
                        bottomInset: 0
                    }
                },
                mixins: [NativeModules/*m*/.Mixin, RCTNativeAppEventEmitter/*S*/.Mixin, THFeedUnitView/*T*/],
                statics: {
                    queryParams: {
                        count: H
                    },
                    queries: {
                        viewer: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var o = require/*TimerMixin/*t*/*/.__GraphQL;
                                return new o.QueryFragment("THGroupView_viewer", "Viewer", [new o.Field("__configs__", [new o.Field("edges", [new o.Field("node", [new o.Field("name"), new o.Field("enabled")])], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_viewer_1"
                                })], null, [new o.Callv("named", [require/*TimerMixin/*t*/*/.__var(requireDynamic/*n*/)], {
                                    varargs: 1
                                })], null, null, {
                                    connection: !0,
                                    nonLimitable: !0,
                                    nonFindable: !0
                                })], [require/*TimerMixin/*t*/*/.__frag(global/*e*/), require/*TimerMixin/*t*/*/.__frag(requireLazy/*r*/), require/*TimerMixin/*t*/*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_viewer"
                                })
                            }(THDockedInputContainer/*E*/.getQuery("viewer"), U, THColors/*C*/.getQuery("viewer"), THFeedbackView/*D*/.getQuery("viewer"))
                        },
                        group: function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var o = require/*TimerMixin/*t*/*/.__GraphQL;
                                return new o.QueryFragment("THGroupView_group", "Group", [new o.Field("id"), new o.Field("admin_aware_group", [new o.Field("group_stories", [new o.Field("edges", [new o.Field("cursor", null, null, null, null, null, {
                                    requisite: !0
                                }), new o.Field("node", [new o.Field("id", null, null, null, null, null, {
                                    requisite: !0
                                }), new o.Field("feedback", [new o.Field("id", null, null, null, null, null, {
                                    requisite: !0
                                }), new o.Field("top_level_comments", [new o.Field("last_view_time"), new o.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                    connection: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                }), new o.Field("creation_time")], [require/*TimerMixin/*t*/*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                    rootCall: "node",
                                    pk: "id",
                                    requisite: !0
                                })], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_group_1"
                                }), new o.Field("page_info", [new o.Field("has_next_page", null, null, null, null, null, {
                                    requisite: !0
                                }), new o.Field("has_previous_page", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    requisite: !0
                                })], null, [new o.Callv("first", [require/*TimerMixin/*t*/*/.__var(global/*e*/)])], null, null, {
                                    connection: !0
                                }), new o.Field("group_pinned_stories", [new o.Field("count")], null, null, null, null, {
                                    connection: !0
                                }), new o.Field("visibility"), new o.Field("viewer_join_state"), new o.Field("id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                })], [require/*TimerMixin/*t*/*/.__frag(requireLazy/*r*/), require/*TimerMixin/*t*/*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_group"
                                })
                            }(requireDynamic/*n*/.count, THDockedInputContainer/*E*/.getQuery("story"), THFeedbackView/*D*/.getQuery("group"), THDockedInputContainer/*E*/.getQuery("group"))
                        }
                    },
                    navItemTitle: function() {
                        return "Group"
                    },
                    getFakeStoryView: function() {
                        var global/*e*/ = ReactGraphQL/*_*/.get("window").width;
                        return ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.backdrop
                        }, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.divider
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.grayPadding
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.divider
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.fakeStoryCell
                        }, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.fakeStoryHeader
                        }, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: K.fakeStoryProfilePicture
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, null, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: 120,
                                marginBottom: 10
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: 100
                            }]
                        }))), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 60,
                                marginTop: 8
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 60
                            }]
                        })))
                    },
                    getNewDataSource: function() {
                        return new Image/*d*/({
                            getRowData: function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/) {
                                return global/*e*/[require/*TimerMixin/*t*/*/][requireDynamic/*n*/]
                            },
                            getSectionHeaderData: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                                return global/*e*/[require/*TimerMixin/*t*/*/]
                            },
                            rowHasChanged: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                                return global/*e*/.node !== require/*TimerMixin/*t*/*/.node || TouchableHighlight/*P*/(global/*e*/, require/*TimerMixin/*t*/*/)
                            },
                            sectionHeaderHasChanged: TouchableHighlight/*P*/
                        })
                    }
                },
                getInitialState: function() {
                    return {
                        dataSource: W.getNewDataSource(),
                        listData: {},
                        submitCallback: null,
                        abortCallback: null,
                        hidePinnedPostSection: !1,
                        keyboardHeight: 0,
                        tappedFeedUnitHandle: null,
                        tappedUnitKey: null,
                        permalinkContentInsets: null,
                        contentInsets: {
                            top: this.props.topInset,
                            bottom: this.props.bottomInset
                        },
                        olderPostsDividerKey: null
                    }
                },
                getUpdatedDataSource: function(global/*e*/) {
                    var require/*TimerMixin/*t*/*/ = [],
                        requireDynamic/*n*/ = [];
                    for (var requireLazy/*r*/ in global/*e*/) require/*TimerMixin/*t*/*/.push(requireLazy/*r*/), requireDynamic/*n*/.push(Object.keys(global/*e*/[requireLazy/*r*/]));
                    return this.state.dataSource.cloneWithRowsAndSections(global/*e*/)
                },
                getAdjacentKeys: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                    var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = {};
                    for (var o in require/*TimerMixin/*t*/*/) {
                        if (requireLazy/*r*/) return module/*i*/[o] = o, module/*i*/;
                        o === global/*e*/ && (requireDynamic/*n*/ && (module/*i*/[requireDynamic/*n*/] = requireDynamic/*n*/), requireLazy/*r*/ = !0), requireDynamic/*n*/ = o
                    }
                    return module/*i*/
                },
                clearPermalinkMode: function() {
                    if (this.refs[rql/*G*/].enableScrollResponderAutoInsets(!0), this.state.tappedUnitKey in this.state.listData.storiesSection) {
                        var global/*e*/ = this.state.listData.storiesSection,
                            require/*TimerMixin/*t*/*/ = this.getAdjacentKeys(this.state.tappedUnitKey, global/*e*/);
                        require/*TimerMixin/*t*/*/[this.state.tappedUnitKey] = this.state.tappedUnitKey;
                        var requireDynamic/*n*/ = {};
                        for (var requireLazy/*r*/ in global/*e*/) requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ in require/*TimerMixin/*t*/*/ ? ix/*k*/(global/*e*/[requireLazy/*r*/], {
                            hideSeparator: !1,
                            hideAll: !1
                        }) : global/*e*/[requireLazy/*r*/];
                        var module/*i*/ = {};
                        this.state.listData.pinnedPostSection && (module/*i*/.pinnedPostSection = this.state.listData.pinnedPostSection), module/*i*/.storiesSection = requireDynamic/*n*/, this.setState({
                            listData: module/*i*/,
                            dataSource: this.getUpdatedDataSource(module/*i*/)
                        })
                    }
                    this.setState({
                        tappedFeedUnitHandle: null,
                        permalinkContentInsets: null,
                        tappedUnitKey: null
                    })
                },
                permalinkInsetsError: function(global/*e*/) {
                    console.error("Error calculating insets for the permalink mode: ", global/*e*/)
                },
                onSetInsetFailure: function() {
                    console.error("Unable to set contentInsets when focusing story")
                },
                renderFooter: function() {
                    return this.props.group && "CLOSED" === this.props.group.admin_aware_group.visibility && "MEMBER" !== this.props.group.admin_aware_group.viewer_join_state ? ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: K.nonMemberView
                    }, ListViewDataSource/*f*/.createElement(GraphQL_EXPERIMENTAL/*c*/, {
                        style: K.lockIcon,
                        source: invariant/*Q*/("thLockIcon")
                    }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: K.nonMemberTextContainer
                    }, ListViewDataSource/*f*/.createElement(StyleSheet/*b*/, {
                        style: K.nonMemberText
                    }, View/*I*/({
                        type: "text",
                        texts: ["Only members can see posts"],
                        desc: "Explanation for why no group stories are shown"
                    })))) : this.props.group && this.props.group.admin_aware_group.group_stories && !this.props.group.admin_aware_group.group_stories.page_info.has_next_page ? ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: K.tailLoadingIndicator
                    }, ListViewDataSource/*f*/.createElement(GraphQL_EXPERIMENTAL/*c*/, {
                        style: K.endDot,
                        source: invariant/*Q*/("newsfeedEnd")
                    })) : this.state.listData.storiesSection ? ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: K.tailLoadingIndicator
                    }, ListViewDataSource/*f*/.createElement(exports/*a*/, null)) : W.getFakeStoryView()
                },
                renderRow: function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/, module/*i*/, o, exports/*a*/, LayoutAnimation/*s*/ = global/*e*/;
                    return "pinnedPostSection" === require/*TimerMixin/*t*/*/ ? requireLazy/*r*/ = ListViewDataSource/*f*/.createElement(THFeedbackView/*D*/, {
                        key: requireDynamic/*n*/,
                        group: this.props.group,
                        navigator: this.props.navigator,
                        onInputRequested: this.handleInputRequested,
                        onPinUnpinStory: this.onPinUnpinStory,
                        onDeletePinnedStory: this.onDeletePinnedStory,
                        viewer: this.props.viewer
                    }) : "storiesSection" === require/*TimerMixin/*t*/*/ ? (LayoutAnimation/*s*/.hideAll ? exports/*a*/ = K.hide : LayoutAnimation/*s*/.hideSeparator && (o = K.hide), LayoutAnimation/*s*/.node.id === this.state.olderPostsDividerKey && (module/*i*/ = ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: [K.olderPostsHeader, o]
                    }, ListViewDataSource/*f*/.createElement(StyleSheet/*b*/, {
                        style: K.olderPostsText
                    }, View/*I*/({
                        type: "text",
                        texts: ["OLDER POSTS"],
                        desc: "Header for older group posts"
                    })))), requireLazy/*r*/ = ListViewDataSource/*f*/.createElement(THDockedInputContainer/*E*/, {
                        onInputRequested: this.handleInputRequested,
                        story: LayoutAnimation/*s*/.node,
                        group: this.props.group,
                        viewer: this.props.viewer,
                        navigator: this.props.navigator,
                        key: requireDynamic/*n*/,
                        context: {
                            isGroupStream: !0
                        },
                        canCommentInline: !1,
                        onPinUnpinStory: this.onPinUnpinStory
                    })) : console.warn("Unrecognized sectionID: ", require/*TimerMixin/*t*/*/), this.state.initialInsertionComplete, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: [K.backdrop, exports/*a*/]
                    }, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: [K.divider, o]
                    }), ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: [K.grayPadding, o]
                    }), module/*i*/, ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, {
                        style: [K.divider, o]
                    }), requireLazy/*r*/)
                },
                isStoryUnread: function(global/*e*/) {
                    var require/*TimerMixin/*t*/*/ = global/*e*/.node.feedback.top_level_comment_counts;
                    if (!require/*TimerMixin/*t*/*/) return !1;
                    var requireDynamic/*n*/ = require/*TimerMixin/*t*/*/.last_view_time ? global/*e*/.node.creation_time > require/*TimerMixin/*t*/*/.last_view_time : !1;
                    return requireDynamic/*n*/ || require/*TimerMixin/*t*/*/.unread_count > 0
                },
                handleInputRequested: function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/) {
                    this.setState({
                        submitCallback: require/*TimerMixin/*t*/*/,
                        abortCallback: requireDynamic/*n*/,
                        tappedFeedUnitHandle: global/*e*/.tappedFeedUnitHandle,
                        tappedUnitKey: merge/*N*/(global/*e*/.tappedFeedUnitID)
                    }), this.refs[rql/*G*/].initiateDockedInput(global/*e*/), B && B.logEventWithDuration && this.requestAnimationFrame(function() {
                        var require/*TimerMixin/*t*/*/ = ((new Date).getTime() - global/*e*/.tappedTime) / 1e3;
                        B.logEventWithDuration(j, require/*TimerMixin/*t*/*/)
                    })
                },
                handleDidDock: function() {
                    this.enablePermalinkMode()
                },
                enablePermalinkMode: function() {
                    this.state.tappedFeedUnitHandle && (this.refs[rql/*G*/].enableScrollResponderAutoInsets(!1), $.measureLayout(this.state.tappedFeedUnitHandle, this.refs[rql/*G*/].getScrollResponder().getNativeNode(), this.permalinkInsetsError, this.handleMeasureLayoutForPermalink))
                },
                handleMeasureLayoutForPermalink: function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = this.refs[rql/*G*/];
                    $.getScrollViewContentSize(module/*i*/.getScrollResponder().getNativeNode(), function(global/*e*/) {
                        var requireDynamic/*n*/ = module/*i*/.getBarHeight() - module/*i*/.getInitialBarHeight(),
                            o = this.state.keyboardHeight + requireDynamic/*n*/ + requireLazy/*r*/,
                            exports/*a*/ = o + require/*TimerMixin/*t*/*/ - global/*e*/.height,
                            LayoutAnimation/*s*/ = ReactGraphQL/*_*/.get("modalFullscreenView").height,
                            FBSpinner/*l*/ = q - require/*TimerMixin/*t*/*/,
                            FeedbackPoller/*u*/ = LayoutAnimation/*s*/ - o - q;
                        if (FeedbackPoller/*u*/ > 0 && (FBSpinner/*l*/ += FeedbackPoller/*u*/), this.state.tappedFeedUnitHandle && !this.state.permalinkContentInsets) this.requestAnimationFrame(this.enablePermalinkMode);
                        else if (this.state.tappedUnitKey in this.state.listData.storiesSection) {
                            var GraphQL_EXPERIMENTAL/*c*/ = this.state.listData.storiesSection,
                                GraphQLStore/*p*/ = this.getAdjacentKeys(this.state.tappedUnitKey, GraphQL_EXPERIMENTAL/*c*/),
                                Image/*d*/ = {};
                            for (var ListView/*h*/ in GraphQL_EXPERIMENTAL/*c*/) GraphQL_EXPERIMENTAL/*c*/[ListView/*h*/].node || fbt/*L*/(0, "Adjacent keys must have corresponding nodes."), Image/*d*/[ListView/*h*/] = ListView/*h*/ in GraphQLStore/*p*/ ? ix/*k*/(GraphQL_EXPERIMENTAL/*c*/[ListView/*h*/], {
                                hideSeparator: !1,
                                hideAll: !0
                            }) : GraphQL_EXPERIMENTAL/*c*/[ListView/*h*/];
                            Image/*d*/[this.state.tappedUnitKey] = ix/*k*/(GraphQL_EXPERIMENTAL/*c*/[this.state.tappedUnitKey], {
                                hideSeparator: !0,
                                hideAll: !1
                            });
                            var ListViewDataSource/*f*/ = {};
                            this.state.listData.pinnedPostSection && (ListViewDataSource/*f*/.pinnedPostSection = this.state.listData.pinnedPostSection), ListViewDataSource/*f*/.storiesSection = Image/*d*/, this.setState({
                                listData: ListViewDataSource/*f*/,
                                dataSource: this.getUpdatedDataSource(ListViewDataSource/*f*/)
                            })
                        }
                        this.setState({
                            permalinkContentInsets: {
                                top: FBSpinner/*l*/,
                                bottom: exports/*a*/
                            }
                        })
                    }.bind(this), this.onSetInsetFailure)
                },
                reloadFeedViewForGroup: function(global/*e*/) {
                    this.props.group.id === global/*e*/ && this.props.forceUpdate({})
                },
                onPinUnpinStory: function() {
                    this.setState({
                        hidePinnedPostSection: !1
                    })
                },
                onDeletePinnedStory: function() {
                    this.setState({
                        hidePinnedPostSection: !0
                    })
                },
                cancelComment: function() {
                    this.clearPermalinkMode(), this.refs[rql/*G*/].cancelDockedInput()
                },
                handleDockedReplyBarHeightChange: function() {
                    this.enablePermalinkMode()
                },
                handleConfirmedNewPost: function() {
                    var global/*e*/ = this.props.group.admin_aware_group.group_stories.edges[0].cursor,
                        require/*TimerMixin/*t*/*/ = W.getQueriesForRoute(this.context.route),
                        requireDynamic/*n*/ = require/*TimerMixin/*t*/*/.group.getQuery().getUnaliasedFields("admin_aware_group")[0].getUnaliasedFields("group_stories")[0],
                        requireLazy/*r*/ = new FBSpinner/*l*/.QueryFragment("GroupStoriesFragment", "GroupStoriesConnection", requireDynamic/*n*/.getOwnFields(), requireDynamic/*n*/.getFragments()),
                        module/*i*/ = new FBSpinner/*l*/.QueryWithValues(function(global/*e*/, require/*TimerMixin/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = keyOf/*O*/.__GraphQL;
                            return new module/*i*/.Query("node", [keyOf/*O*/.__var(global/*e*/)], [new module/*i*/.Field("admin_aware_group", [new module/*i*/.Field("group_stories", null, [keyOf/*O*/.__frag(requireLazy/*r*/)], [new module/*i*/.Callv("before", [keyOf/*O*/.__var(require/*TimerMixin/*t*/*/)]), new module/*i*/.Callv("first", [keyOf/*O*/.__var(requireDynamic/*n*/)])], null, null, {
                                connection: !0
                            }), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, "THGroupView_q0")
                        }(this.props.group.id, global/*e*/, this.queryParams.count, requireLazy/*r*/), {});
                    deepDiffer/*F*/(module/*i*/).then(function(global/*e*/) {
                        if (global/*e*/.errors && global/*e*/.errors.length) console.error("Error from fetching new story: ", global/*e*/.errors[0]);
                        else {
                            var require/*TimerMixin/*t*/*/ = global/*e*/.response;
                            FeedbackPoller/*u*/.handleUpdate(require/*TimerMixin/*t*/*/, module/*i*/);
                            var requireDynamic/*n*/ = require/*TimerMixin/*t*/*/[this.props.group.id],
                                requireLazy/*r*/ = Object.keys(requireDynamic/*n*/),
                                o = requireDynamic/*n*/[requireLazy/*r*/[0]].edges.length;
                            this.setQueryParams({
                                count: this.queryParams.count + o
                            })
                        }
                    }.bind(this))
                },
                updateFeedbackPollerForRange: function() {},
                handleKeyboardWillShow: function(global/*e*/) {
                    var require/*TimerMixin/*t*/*/ = ReactGraphQL/*_*/.get("modalFullscreenView").height - global/*e*/.endCoordinates.screenY;
                    require/*TimerMixin/*t*/*/ !== this.state.keyboardHeight && this.setState({
                        keyboardHeight: require/*TimerMixin/*t*/*/
                    })
                },
                componentWillMount: function() {
                    this.addListenerOn(RCTDeviceEventEmitter/*y*/, "handleConfirmedNewPost", this.handleConfirmedNewPost), this.addListenerOn(RCTDeviceEventEmitter/*y*/, "reloadFeedViewForGroup", this.reloadFeedViewForGroup), this.addListenerOn(RCTDeviceEventEmitter/*y*/, "cancelComment", this.cancelComment), this.addListenerOn(React/*g*/, "keyboardWillShow", this.handleKeyboardWillShow), this._setupGroupStories(this.props)
                },
                componentWillReceiveProps: function(global/*e*/) {
                    this._setupGroupStories(global/*e*/)
                },
                componentDidUpdate: function() {
                    this.props.group && B && B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id)
                },
                componentDidMount: function() {
                    if (this.props.group) {
                        var global/*e*/ = this.refs[rql/*G*/].getScrollResponder();
                        global/*e*/.setNativeProps({
                            contentOffset: {
                                RCTDeviceEventEmitter/*y*/: -this.props.topInset
                            }
                        }), B && this.requestAnimationFrame(function() {
                            B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id), B.logEventEnded && (B.logEventEnded(this.props.groupProfileLoadTTI), B.logEventEnded(this.props.groupPostNotifTTI))
                        }.bind(this)), this._pollingStories = {}, this.enablePollerIfNeeded(this.props)
                    }
                },
                componentWillUnmount: function() {
                    for (var global/*e*/ in this._pollingStories) LayoutAnimation/*s*/.unregister(global/*e*/)
                },
                enablePollerIfNeeded: function(global/*e*/) {
                    var require/*TimerMixin/*t*/*/ = global/*e*/.viewer && global/*e*/.viewer.__configs__ && global/*e*/.viewer.__configs__.edges;
                    if (require/*TimerMixin/*t*/*/) {
                        var requireDynamic/*n*/ = require/*TimerMixin/*t*/*/.filter(function(global/*e*/) {
                            return global/*e*/.node.name === U
                        });
                        fetchRQL/*M*/(requireDynamic/*n*/) || LayoutAnimation/*s*/.enablePoller(requireDynamic/*n*/[0].node.enabled)
                    }
                },
                _onChangeVisibleRows: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                    for (var requireDynamic/*n*/ in require/*TimerMixin/*t*/*/) {
                        var requireLazy/*r*/ = require/*TimerMixin/*t*/*/[requireDynamic/*n*/],
                            module/*i*/ = this.state.listData[requireDynamic/*n*/];
                        for (var o in requireLazy/*r*/) {
                            var exports/*a*/ = module/*i*/[o];
                            if (exports/*a*/ && exports/*a*/.node && exports/*a*/.node.feedback) {
                                var FBSpinner/*l*/ = exports/*a*/.node.feedback.id;
                                requireLazy/*r*/[o] && !this._pollingStories[FBSpinner/*l*/] ? (LayoutAnimation/*s*/.register(FBSpinner/*l*/), this._pollingStories[FBSpinner/*l*/] = !0) : !requireLazy/*r*/[o] && this._pollingStories[FBSpinner/*l*/] && (LayoutAnimation/*s*/.unregister(FBSpinner/*l*/), delete this._pollingStories[FBSpinner/*l*/])
                            }
                        }
                    }
                },
                _setupGroupStories: function(global/*e*/) {
                    if (this.enablePollerIfNeeded(global/*e*/), global/*e*/.group && global/*e*/.group.admin_aware_group.group_stories) {
                        for (var require/*TimerMixin/*t*/*/, requireDynamic/*n*/ = global/*e*/.group.admin_aware_group.group_stories.edges, requireLazy/*r*/ = {}, module/*i*/ = this.state.olderPostsDividerKey, o = 0; o < requireDynamic/*n*/.length; o++) {
                            var exports/*a*/ = {
                                    node: requireDynamic/*n*/[o].node
                                },
                                LayoutAnimation/*s*/ = merge/*N*/(exports/*a*/.node.id);
                            this.state.tappedUnitKey ? LayoutAnimation/*s*/ === this.state.tappedUnitKey ? (require/*TimerMixin/*t*/*/ && (requireLazy/*r*/[require/*TimerMixin/*t*/*/].hideAll = !0), exports/*a*/.hideSeparator = !0) : require/*TimerMixin/*t*/*/ === this.state.tappedUnitKey && (exports/*a*/.hideAll = !0) : (exports/*a*/.hideAll = !1, exports/*a*/.hideSeparator = !1), null === module/*i*/ && require/*TimerMixin/*t*/*/ && this.isStoryUnread(requireLazy/*r*/[require/*TimerMixin/*t*/*/]) && !this.isStoryUnread(exports/*a*/) && (module/*i*/ = exports/*a*/.node.id), exports/*a*/.local_id = LayoutAnimation/*s*/, requireLazy/*r*/[LayoutAnimation/*s*/] = exports/*a*/, require/*TimerMixin/*t*/*/ = LayoutAnimation/*s*/
                        }
                        this.setState({
                            olderPostsDividerKey: module/*i*/
                        });
                        var FBSpinner/*l*/ = {};
                        if (global/*e*/.group.admin_aware_group.group_pinned_stories.count > 0 && !this.state.hidePinnedPostSection && ("MEMBER" === global/*e*/.group.admin_aware_group.viewer_join_state || "OPEN" === global/*e*/.group.admin_aware_group.visibility)) {
                            var FeedbackPoller/*u*/ = merge/*N*/("PINNED_POST_KEY");
                            FBSpinner/*l*/[FeedbackPoller/*u*/] = {}
                        }
                        var GraphQL_EXPERIMENTAL/*c*/ = {};
                        fetchRQL/*M*/(FBSpinner/*l*/) || (GraphQL_EXPERIMENTAL/*c*/.pinnedPostSection = FBSpinner/*l*/), GraphQL_EXPERIMENTAL/*c*/.storiesSection = requireLazy/*r*/, this.setState({
                            listData: GraphQL_EXPERIMENTAL/*c*/,
                            dataSource: this.getUpdatedDataSource(GraphQL_EXPERIMENTAL/*c*/)
                        })
                    }
                },
                handleDockedCommentSubmit: function(global/*e*/, require/*TimerMixin/*t*/*/) {
                    this.clearPermalinkMode(), this.state.submitCallback(global/*e*/, require/*TimerMixin/*t*/*/)
                },
                handleDockedCommentAbort: function(global/*e*/) {
                    this.clearPermalinkMode(), this.state.abortCallback && this.state.abortCallback(global/*e*/)
                },
                hasMoreToLoad: function() {
                    return this.props.group && this.props.group.admin_aware_group.group_stories && this.props.group.admin_aware_group.group_stories.page_info.has_next_page
                },
                loadMoreIfNeeded: function() {
                    this.hasMoreToLoad() && this.setQueryParams({
                        count: this.queryParams.count + H
                    })
                },
                render: function() {
                    if (!this.props.group) return ListViewDataSource/*f*/.createElement(THPinnedPostView/*x*/, null);
                    var global/*e*/ = this.state.contentInsets;
                    null !== this.state.permalinkContentInsets && (global/*e*/ = this.state.permalinkContentInsets);
                    var require/*TimerMixin/*t*/*/ = ListViewDataSource/*f*/.createElement(GraphQLStore/*p*/, {
                        dataSource: this.state.dataSource,
                        renderRow: this.renderRow,
                        renderFooter: this.renderFooter,
                        onChangeVisibleRows: this._onChangeVisibleRows,
                        onEndReached: this.loadMoreIfNeeded,
                        onEndReachedDistance: 100,
                        showsVerticalScrollIndicator: !1,
                        contentInset: global/*e*/,
                        scrollIndicatorInsets: global/*e*/,
                        removeClippedSubviews: !0
                    });
                    return ListViewDataSource/*f*/.createElement(Text/*w*/, {
                        ref: rql/*G*/,
                        groupID: this.props.group.id,
                        scrollResponder: require/*TimerMixin/*t*/*/,
                        onDockedCommentSubmit: this.handleDockedCommentSubmit,
                        onDockedCommentAbort: this.handleDockedCommentAbort,
                        onDidDock: this.handleDidDock,
                        onHeightChange: this.handleDockedReplyBarHeightChange
                    })
                }
            }),
            K = Dimensions/*v*/.create({
                backdrop: {
                    backgroundColor: Subscribable/*R*/.backgroundColor,
                    overflow: "hidden"
                },
                divider: {
                    height: .5,
                    backgroundColor: Subscribable/*R*/.borderColor
                },
                endDot: {
                    width: 10,
                    height: 10
                },
                fakeStoryCell: {
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    paddingLeft: 16,
                    height: 140,
                    marginBottom: 30,
                    marginTop: 20,
                    backgroundColor: Subscribable/*R*/.backgroundColor
                },
                fakeStoryHeader: {
                    flexDirection: "row",
                    alignItems: "center"
                },
                fakeStoryProfilePicture: {
                    width: V,
                    height: V,
                    borderRadius: V / 2,
                    marginRight: 12,
                    backgroundColor: Subscribable/*R*/.fakeStoryTextBlock
                },
                fakeStoryTextBlock: {
                    height: 5,
                    backgroundColor: Subscribable/*R*/.fakeStoryTextBlock
                },
                grayPadding: {
                    height: 11,
                    backgroundColor: Subscribable/*R*/.backgroundWash
                },
                hide: {
                    opacity: 0
                },
                lockIcon: {
                    height: 30,
                    width: 30
                },
                nonMemberText: {
                    fontSize: 17,
                    color: Subscribable/*R*/.feedbackFadedText
                },
                nonMemberTextContainer: {
                    paddingTop: 10
                },
                nonMemberView: {
                    backgroundColor: Subscribable/*R*/.backgroundWash,
                    alignItems: "center",
                    paddingTop: 46
                },
                olderPostsHeader: {
                    alignItems: "center",
                    backgroundColor: Subscribable/*R*/.backgroundWash,
                    flexDirection: "row",
                    height: 24,
                    paddingLeft: 16
                },
                olderPostsText: {
                    color: Subscribable/*R*/.feedbackFadedText,
                    fontSize: 12
                },
                tailLoadingIndicator: {
                    backgroundColor: Subscribable/*R*/.backgroundWash,
                    paddingTop: 0,
                    height: 52,
                    justifyContent: "center",
                    alignItems: "center"
                }
            });
        ({
            layout: {
                renderPost: {
                    duration: .3,
                    create: {
                        type: o.Types.easeInEaseOut,
                        property: o.Properties.opacity
                    },
                    update: {
                        type: o.Types.easeInEaseOut
                    }
                }
            }
        })
    }
    module/*i*/.exports = W
});