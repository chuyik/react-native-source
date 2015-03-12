__d("THGroupView",["LayoutAnimation","FBSpinner","FeedbackPoller","GraphQL_EXPERIMENTAL","GraphQLStore","Image","ListView","ListViewDataSource","NativeModules","React","ReactGraphQL","RCTDeviceEventEmitter","Dimensions","RCTNativeAppEventEmitter","StyleSheet","Subscribable","Text","THColors","THDockedInputContainer","THFeedbackView","THFeedUnitView","THPinnedPostView","TimerMixin","TouchableHighlight","View","deepDiffer","fbt","fetchRQL","invariant","isEmpty","ix","keyOf","merge","rql","uniqueKey"],function (e, t, n, r, i) {
    "use strict"; {
        var LayoutAnimation/*o*/ = t("LayoutAnimation"),
            FBSpinner/*a*/ = t("FBSpinner"),
            FeedbackPoller/*s*/ = t("FeedbackPoller"),
            GraphQL_EXPERIMENTAL/*l*/ = t("GraphQL_EXPERIMENTAL"),
            GraphQLStore/*u*/ = t("GraphQLStore"),
            Image/*c*/ = t("Image"),
            ListView/*p*/ = t("ListView"),
            ListViewDataSource/*d*/ = t("ListViewDataSource"),
            NativeModules/*h*/ = t("NativeModules"),
            React/*f*/ = t("React"),
            ReactGraphQL/*m*/ = t("ReactGraphQL"),
            RCTDeviceEventEmitter/*g*/ = t("RCTDeviceEventEmitter"),
            Dimensions/*_*/ = t("Dimensions"),
            RCTNativeAppEventEmitter/*y*/ = t("RCTNativeAppEventEmitter"),
            StyleSheet/*v*/ = t("StyleSheet"),
            Subscribable/*S*/ = t("Subscribable"),
            Text/*b*/ = t("Text"),
            THColors/*R*/ = t("THColors"),
            THDockedInputContainer/*w*/ = t("THDockedInputContainer"),
            THFeedbackView/*C*/ = t("THFeedbackView"),
            THFeedUnitView/*E*/ = t("THFeedUnitView"),
            THPinnedPostView/*D*/ = t("THPinnedPostView"),
            TimerMixin/*T*/ = t("TimerMixin"),
            x = (t("TouchableHighlight"), t("View")),
            deepDiffer/*P*/ = t("deepDiffer"),
            fbt/*I*/ = t("fbt"),
            fetchRQL/*F*/ = t("fetchRQL"),
            invariant/*L*/ = t("invariant"),
            isEmpty/*M*/ = t("isEmpty"),
            ix/*Q*/ = t("ix"),
            keyOf/*A*/ = t("keyOf"),
            merge/*k*/ = t("merge"),
            rql/*O*/ = t("rql"),
            uniqueKey/*N*/ = t("uniqueKey"),
            G = keyOf/*A*/({
                dockedReplyContainerRef: null
            }),
            $ = NativeModules/*h*/.RKUIManager,
            B = NativeModules/*h*/.RKTreehouseManager,
            H = 5,
            V = 36,
            q = 70,
            U = "gk_catalyst_th_live_update",
            j = "th_group_comment_tti",
            W = React/*f*/.createClass({
                displayName: "THGroupView",
                propTypes: {
                    navigator: React/*f*/.PropTypes.object,
                    topInset: React/*f*/.PropTypes.number,
                    bottomInset: React/*f*/.PropTypes.number
                },
                getDefaultProps: function() {
                    return {
                        topInset: 0,
                        bottomInset: 0
                    }
                },
                mixins: [ReactGraphQL/*m*/.Mixin, Subscribable/*S*/.Mixin, TimerMixin/*T*/],
                statics: {
                    queryParams: {
                        count: H
                    },
                    queries: {
                        viewer: function(e, t) {
                            return function(e, n, r, i) {
                                var LayoutAnimation/*o*/ = t.__GraphQL;
                                return new LayoutAnimation/*o*/.QueryFragment("THGroupView_viewer", "Viewer", [new LayoutAnimation/*o*/.Field("__configs__", [new LayoutAnimation/*o*/.Field("edges", [new LayoutAnimation/*o*/.Field("node", [new LayoutAnimation/*o*/.Field("name"), new LayoutAnimation/*o*/.Field("enabled")])], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_viewer_1"
                                })], null, [new LayoutAnimation/*o*/.Callv("named", [t.__var(n)], {
                                    varargs: 1
                                })], null, null, {
                                    connection: !0,
                                    nonLimitable: !0,
                                    nonFindable: !0
                                })], [t.__frag(e), t.__frag(r), t.__frag(i)], {
                                    scope: "THGroupView_viewer"
                                })
                            }(THFeedUnitView/*E*/.getQuery("viewer"), U, THFeedbackView/*C*/.getQuery("viewer"), THPinnedPostView/*D*/.getQuery("viewer"))
                        },
                        group: function(e, t, n) {
                            return function(e, n, r, i) {
                                var LayoutAnimation/*o*/ = t.__GraphQL;
                                return new LayoutAnimation/*o*/.QueryFragment("THGroupView_group", "Group", [new LayoutAnimation/*o*/.Field("id"), new LayoutAnimation/*o*/.Field("admin_aware_group", [new LayoutAnimation/*o*/.Field("group_stories", [new LayoutAnimation/*o*/.Field("edges", [new LayoutAnimation/*o*/.Field("cursor", null, null, null, null, null, {
                                    requisite: !0
                                }), new LayoutAnimation/*o*/.Field("node", [new LayoutAnimation/*o*/.Field("id", null, null, null, null, null, {
                                    requisite: !0
                                }), new LayoutAnimation/*o*/.Field("feedback", [new LayoutAnimation/*o*/.Field("id", null, null, null, null, null, {
                                    requisite: !0
                                }), new LayoutAnimation/*o*/.Field("top_level_comments", [new LayoutAnimation/*o*/.Field("last_view_time"), new LayoutAnimation/*o*/.Field("unread_count")], null, null, "top_level_comment_counts", null, {
                                    connection: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                }), new LayoutAnimation/*o*/.Field("creation_time")], [t.__frag(n)], null, null, null, {
                                    rootCall: "node",
                                    pk: "id",
                                    requisite: !0
                                })], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_group_1"
                                }), new LayoutAnimation/*o*/.Field("page_info", [new LayoutAnimation/*o*/.Field("has_next_page", null, null, null, null, null, {
                                    requisite: !0
                                }), new LayoutAnimation/*o*/.Field("has_previous_page", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    requisite: !0
                                })], null, [new LayoutAnimation/*o*/.Callv("first", [t.__var(e)])], null, null, {
                                    connection: !0
                                }), new LayoutAnimation/*o*/.Field("group_pinned_stories", [new LayoutAnimation/*o*/.Field("count")], null, null, null, null, {
                                    connection: !0
                                }), new LayoutAnimation/*o*/.Field("visibility"), new LayoutAnimation/*o*/.Field("viewer_join_state"), new LayoutAnimation/*o*/.Field("id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                })], [t.__frag(r), t.__frag(i)], {
                                    scope: "THGroupView_group"
                                })
                            }(n.count, THFeedUnitView/*E*/.getQuery("story"), THPinnedPostView/*D*/.getQuery("group"), THFeedUnitView/*E*/.getQuery("group"))
                        }
                    },
                    navItemTitle: function() {
                        return "Group"
                    },
                    getFakeStoryView: function() {
                        var e = Dimensions/*_*/.get("window").width;
                        return React/*f*/.createElement(x, {
                            style: K.backdrop
                        }, React/*f*/.createElement(x, {
                            style: K.divider
                        }), React/*f*/.createElement(x, {
                            style: K.grayPadding
                        }), React/*f*/.createElement(x, {
                            style: K.divider
                        }), React/*f*/.createElement(x, {
                            style: K.fakeStoryCell
                        }, React/*f*/.createElement(x, {
                            style: K.fakeStoryHeader
                        }, React/*f*/.createElement(x, {
                            style: K.fakeStoryProfilePicture
                        }), React/*f*/.createElement(x, null, React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: 120,
                                marginBottom: 10
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: 100
                            }]
                        }))), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 60,
                                marginTop: 8
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 70
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 90
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 70
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 90
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: e - 60
                            }]
                        })))
                    },
                    getNewDataSource: function() {
                        return new ListViewDataSource/*d*/({
                            getRowData: function(e, t, n) {
                                return e[t][n]
                            },
                            getSectionHeaderData: function(e, t) {
                                return e[t]
                            },
                            rowHasChanged: function(e, t) {
                                return e.node !== t.node || deepDiffer/*P*/(e, t)
                            },
                            sectionHeaderHasChanged: deepDiffer/*P*/
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
                getUpdatedDataSource: function(e) {
                    var t = [],
                        n = [];
                    for (var r in e) t.push(r), n.push(Object.keys(e[r]));
                    return this.state.dataSource.cloneWithRowsAndSections(e)
                },
                getAdjacentKeys: function(e, t) {
                    var n, r, i = {};
                    for (var LayoutAnimation/*o*/ in t) {
                        if (r) return i[LayoutAnimation/*o*/] = LayoutAnimation/*o*/, i;
                        LayoutAnimation/*o*/ === e && (n && (i[n] = n), r = !0), n = LayoutAnimation/*o*/
                    }
                    return i
                },
                clearPermalinkMode: function() {
                    if (this.refs[G].enableScrollResponderAutoInsets(!0), this.state.tappedUnitKey in this.state.listData.storiesSection) {
                        var e = this.state.listData.storiesSection,
                            t = this.getAdjacentKeys(this.state.tappedUnitKey, e);
                        t[this.state.tappedUnitKey] = this.state.tappedUnitKey;
                        var n = {};
                        for (var r in e) n[r] = r in t ? merge/*k*/(e[r], {
                            hideSeparator: !1,
                            hideAll: !1
                        }) : e[r];
                        var i = {};
                        this.state.listData.pinnedPostSection && (i.pinnedPostSection = this.state.listData.pinnedPostSection), i.storiesSection = n, this.setState({
                            listData: i,
                            dataSource: this.getUpdatedDataSource(i)
                        })
                    }
                    this.setState({
                        tappedFeedUnitHandle: null,
                        permalinkContentInsets: null,
                        tappedUnitKey: null
                    })
                },
                permalinkInsetsError: function(e) {
                    console.error("Error calculating insets for the permalink mode: ", e)
                },
                onSetInsetFailure: function() {
                    console.error("Unable to set contentInsets when focusing story")
                },
                renderFooter: function() {
                    return this.props.group && "CLOSED" === this.props.group.admin_aware_group.visibility && "MEMBER" !== this.props.group.admin_aware_group.viewer_join_state ? React/*f*/.createElement(x, {
                        style: K.nonMemberView
                    }, React/*f*/.createElement(Image/*c*/, {
                        style: K.lockIcon,
                        source: ix/*Q*/("thLockIcon")
                    }), React/*f*/.createElement(x, {
                        style: K.nonMemberTextContainer
                    }, React/*f*/.createElement(Text/*b*/, {
                        style: K.nonMemberText
                    }, fbt/*I*/({
                        type: "text",
                        texts: ["Only members can see posts"],
                        desc: "Explanation for why no group stories are shown"
                    })))) : this.props.group && this.props.group.admin_aware_group.group_stories && !this.props.group.admin_aware_group.group_stories.page_info.has_next_page ? React/*f*/.createElement(x, {
                        style: K.tailLoadingIndicator
                    }, React/*f*/.createElement(Image/*c*/, {
                        style: K.endDot,
                        source: ix/*Q*/("newsfeedEnd")
                    })) : this.state.listData.storiesSection ? React/*f*/.createElement(x, {
                        style: K.tailLoadingIndicator
                    }, React/*f*/.createElement(FBSpinner/*a*/, null)) : W.getFakeStoryView()
                },
                renderRow: function(e, t, n) {
                    var r, i, LayoutAnimation/*o*/, FBSpinner/*a*/, FeedbackPoller/*s*/ = e;
                    return "pinnedPostSection" === t ? r = React/*f*/.createElement(THPinnedPostView/*D*/, {
                        key: n,
                        group: this.props.group,
                        navigator: this.props.navigator,
                        onInputRequested: this.handleInputRequested,
                        onPinUnpinStory: this.onPinUnpinStory,
                        onDeletePinnedStory: this.onDeletePinnedStory,
                        viewer: this.props.viewer
                    }) : "storiesSection" === t ? (FeedbackPoller/*s*/.hideAll ? FBSpinner/*a*/ = K.hide : FeedbackPoller/*s*/.hideSeparator && (LayoutAnimation/*o*/ = K.hide), FeedbackPoller/*s*/.node.id === this.state.olderPostsDividerKey && (i = React/*f*/.createElement(x, {
                        style: [K.olderPostsHeader, LayoutAnimation/*o*/]
                    }, React/*f*/.createElement(Text/*b*/, {
                        style: K.olderPostsText
                    }, fbt/*I*/({
                        type: "text",
                        texts: ["OLDER POSTS"],
                        desc: "Header for older group posts"
                    })))), r = React/*f*/.createElement(THFeedUnitView/*E*/, {
                        onInputRequested: this.handleInputRequested,
                        story: FeedbackPoller/*s*/.node,
                        group: this.props.group,
                        viewer: this.props.viewer,
                        navigator: this.props.navigator,
                        key: n,
                        context: {
                            isGroupStream: !0
                        },
                        canCommentInline: !1,
                        onPinUnpinStory: this.onPinUnpinStory
                    })) : console.warn("Unrecognized sectionID: ", t), this.state.initialInsertionComplete, React/*f*/.createElement(x, {
                        style: [K.backdrop, FBSpinner/*a*/]
                    }, React/*f*/.createElement(x, {
                        style: [K.divider, LayoutAnimation/*o*/]
                    }), React/*f*/.createElement(x, {
                        style: [K.grayPadding, LayoutAnimation/*o*/]
                    }), i, React/*f*/.createElement(x, {
                        style: [K.divider, LayoutAnimation/*o*/]
                    }), r)
                },
                isStoryUnread: function(e) {
                    var t = e.node.feedback.top_level_comment_counts;
                    if (!t) return !1;
                    var n = t.last_view_time ? e.node.creation_time > t.last_view_time : !1;
                    return n || t.unread_count > 0
                },
                handleInputRequested: function(e, t, n) {
                    this.setState({
                        submitCallback: t,
                        abortCallback: n,
                        tappedFeedUnitHandle: e.tappedFeedUnitHandle,
                        tappedUnitKey: uniqueKey/*N*/(e.tappedFeedUnitID)
                    }), this.refs[G].initiateDockedInput(e), B && B.logEventWithDuration && this.requestAnimationFrame(function() {
                        var t = ((new Date).getTime() - e.tappedTime) / 1e3;
                        B.logEventWithDuration(j, t)
                    })
                },
                handleDidDock: function() {
                    this.enablePermalinkMode()
                },
                enablePermalinkMode: function() {
                    this.state.tappedFeedUnitHandle && (this.refs[G].enableScrollResponderAutoInsets(!1), $.measureLayout(this.state.tappedFeedUnitHandle, this.refs[G].getScrollResponder().getNativeNode(), this.permalinkInsetsError, this.handleMeasureLayoutForPermalink))
                },
                handleMeasureLayoutForPermalink: function(e, t, n, r) {
                    var i = this.refs[G];
                    $.getScrollViewContentSize(i.getScrollResponder().getNativeNode(), function(e) {
                        var n = i.getBarHeight() - i.getInitialBarHeight(),
                            LayoutAnimation/*o*/ = this.state.keyboardHeight + n + r,
                            FBSpinner/*a*/ = LayoutAnimation/*o*/ + t - e.height,
                            FeedbackPoller/*s*/ = Dimensions/*_*/.get("modalFullscreenView").height,
                            GraphQL_EXPERIMENTAL/*l*/ = q - t,
                            GraphQLStore/*u*/ = FeedbackPoller/*s*/ - LayoutAnimation/*o*/ - q;
                        if (GraphQLStore/*u*/ > 0 && (GraphQL_EXPERIMENTAL/*l*/ += GraphQLStore/*u*/), this.state.tappedFeedUnitHandle && !this.state.permalinkContentInsets) this.requestAnimationFrame(this.enablePermalinkMode);
                        else if (this.state.tappedUnitKey in this.state.listData.storiesSection) {
                            var Image/*c*/ = this.state.listData.storiesSection,
                                ListView/*p*/ = this.getAdjacentKeys(this.state.tappedUnitKey, Image/*c*/),
                                ListViewDataSource/*d*/ = {};
                            for (var NativeModules/*h*/ in Image/*c*/) Image/*c*/[NativeModules/*h*/].node || invariant/*L*/(0, "Adjacent keys must have corresponding nodes."), ListViewDataSource/*d*/[NativeModules/*h*/] = NativeModules/*h*/ in ListView/*p*/ ? merge/*k*/(Image/*c*/[NativeModules/*h*/], {
                                hideSeparator: !1,
                                hideAll: !0
                            }) : Image/*c*/[NativeModules/*h*/];
                            ListViewDataSource/*d*/[this.state.tappedUnitKey] = merge/*k*/(Image/*c*/[this.state.tappedUnitKey], {
                                hideSeparator: !0,
                                hideAll: !1
                            });
                            var React/*f*/ = {};
                            this.state.listData.pinnedPostSection && (React/*f*/.pinnedPostSection = this.state.listData.pinnedPostSection), React/*f*/.storiesSection = ListViewDataSource/*d*/, this.setState({
                                listData: React/*f*/,
                                dataSource: this.getUpdatedDataSource(React/*f*/)
                            })
                        }
                        this.setState({
                            permalinkContentInsets: {
                                top: GraphQL_EXPERIMENTAL/*l*/,
                                bottom: FBSpinner/*a*/
                            }
                        })
                    }.bind(this), this.onSetInsetFailure)
                },
                reloadFeedViewForGroup: function(e) {
                    this.props.group.id === e && this.props.forceUpdate({})
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
                    this.clearPermalinkMode(), this.refs[G].cancelDockedInput()
                },
                handleDockedReplyBarHeightChange: function() {
                    this.enablePermalinkMode()
                },
                handleConfirmedNewPost: function() {
                    var e = this.props.group.admin_aware_group.group_stories.edges[0].cursor,
                        t = W.getQueriesForRoute(this.context.route),
                        n = t.group.getQuery().getUnaliasedFields("admin_aware_group")[0].getUnaliasedFields("group_stories")[0],
                        r = new GraphQL_EXPERIMENTAL/*l*/.QueryFragment("GroupStoriesFragment", "GroupStoriesConnection", n.getOwnFields(), n.getFragments()),
                        i = new GraphQL_EXPERIMENTAL/*l*/.QueryWithValues(function(e, t, n, r) {
                            var i = rql/*O*/.__GraphQL;
                            return new i.Query("node", [rql/*O*/.__var(e)], [new i.Field("admin_aware_group", [new i.Field("group_stories", null, [rql/*O*/.__frag(r)], [new i.Callv("before", [rql/*O*/.__var(t)]), new i.Callv("first", [rql/*O*/.__var(n)])], null, null, {
                                connection: !0
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, "THGroupView_q0")
                        }(this.props.group.id, e, this.queryParams.count, r), {});
                    fetchRQL/*F*/(i).then(function(e) {
                        if (e.errors && e.errors.length) console.error("Error from fetching new story: ", e.errors[0]);
                        else {
                            var t = e.response;
                            GraphQLStore/*u*/.handleUpdate(t, i);
                            var n = t[this.props.group.id],
                                r = Object.keys(n),
                                LayoutAnimation/*o*/ = n[r[0]].edges.length;
                            this.setQueryParams({
                                count: this.queryParams.count + LayoutAnimation/*o*/
                            })
                        }
                    }.bind(this))
                },
                updateFeedbackPollerForRange: function() {},
                handleKeyboardWillShow: function(e) {
                    var t = Dimensions/*_*/.get("modalFullscreenView").height - e.endCoordinates.screenY;
                    t !== this.state.keyboardHeight && this.setState({
                        keyboardHeight: t
                    })
                },
                componentWillMount: function() {
                    this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "handleConfirmedNewPost", this.handleConfirmedNewPost), this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "reloadFeedViewForGroup", this.reloadFeedViewForGroup), this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "cancelComment", this.cancelComment), this.addListenerOn(RCTDeviceEventEmitter/*g*/, "keyboardWillShow", this.handleKeyboardWillShow), this._setupGroupStories(this.props)
                },
                componentWillReceiveProps: function(e) {
                    this._setupGroupStories(e)
                },
                componentDidUpdate: function() {
                    this.props.group && B && B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id)
                },
                componentDidMount: function() {
                    if (this.props.group) {
                        var e = this.refs[G].getScrollResponder();
                        e.setNativeProps({
                            contentOffset: {
                                RCTNativeAppEventEmitter/*y*/: -this.props.topInset
                            }
                        }), B && this.requestAnimationFrame(function() {
                            B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id), B.logEventEnded && (B.logEventEnded(this.props.groupProfileLoadTTI), B.logEventEnded(this.props.groupPostNotifTTI))
                        }.bind(this)), this._pollingStories = {}, this.enablePollerIfNeeded(this.props)
                    }
                },
                componentWillUnmount: function() {
                    for (var e in this._pollingStories) FeedbackPoller/*s*/.unregister(e)
                },
                enablePollerIfNeeded: function(e) {
                    var t = e.viewer && e.viewer.__configs__ && e.viewer.__configs__.edges;
                    if (t) {
                        var n = t.filter(function(e) {
                            return e.node.name === U
                        });
                        isEmpty/*M*/(n) || FeedbackPoller/*s*/.enablePoller(n[0].node.enabled)
                    }
                },
                _onChangeVisibleRows: function(e, t) {
                    for (var n in t) {
                        var r = t[n],
                            i = this.state.listData[n];
                        for (var LayoutAnimation/*o*/ in r) {
                            var FBSpinner/*a*/ = i[LayoutAnimation/*o*/];
                            if (FBSpinner/*a*/ && FBSpinner/*a*/.node && FBSpinner/*a*/.node.feedback) {
                                var GraphQL_EXPERIMENTAL/*l*/ = FBSpinner/*a*/.node.feedback.id;
                                r[LayoutAnimation/*o*/] && !this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] ? (FeedbackPoller/*s*/.register(GraphQL_EXPERIMENTAL/*l*/), this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] = !0) : !r[LayoutAnimation/*o*/] && this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] && (FeedbackPoller/*s*/.unregister(GraphQL_EXPERIMENTAL/*l*/), delete this._pollingStories[GraphQL_EXPERIMENTAL/*l*/])
                            }
                        }
                    }
                },
                _setupGroupStories: function(e) {
                    if (this.enablePollerIfNeeded(e), e.group && e.group.admin_aware_group.group_stories) {
                        for (var t, n = e.group.admin_aware_group.group_stories.edges, r = {}, i = this.state.olderPostsDividerKey, LayoutAnimation/*o*/ = 0; LayoutAnimation/*o*/ < n.length; LayoutAnimation/*o*/++) {
                            var FBSpinner/*a*/ = {
                                    node: n[LayoutAnimation/*o*/].node
                                },
                                FeedbackPoller/*s*/ = uniqueKey/*N*/(FBSpinner/*a*/.node.id);
                            this.state.tappedUnitKey ? FeedbackPoller/*s*/ === this.state.tappedUnitKey ? (t && (r[t].hideAll = !0), FBSpinner/*a*/.hideSeparator = !0) : t === this.state.tappedUnitKey && (FBSpinner/*a*/.hideAll = !0) : (FBSpinner/*a*/.hideAll = !1, FBSpinner/*a*/.hideSeparator = !1), null === i && t && this.isStoryUnread(r[t]) && !this.isStoryUnread(FBSpinner/*a*/) && (i = FBSpinner/*a*/.node.id), FBSpinner/*a*/.local_id = FeedbackPoller/*s*/, r[FeedbackPoller/*s*/] = FBSpinner/*a*/, t = FeedbackPoller/*s*/
                        }
                        this.setState({
                            olderPostsDividerKey: i
                        });
                        var GraphQL_EXPERIMENTAL/*l*/ = {};
                        if (e.group.admin_aware_group.group_pinned_stories.count > 0 && !this.state.hidePinnedPostSection && ("MEMBER" === e.group.admin_aware_group.viewer_join_state || "OPEN" === e.group.admin_aware_group.visibility)) {
                            var GraphQLStore/*u*/ = uniqueKey/*N*/("PINNED_POST_KEY");
                            GraphQL_EXPERIMENTAL/*l*/[GraphQLStore/*u*/] = {}
                        }
                        var Image/*c*/ = {};
                        isEmpty/*M*/(GraphQL_EXPERIMENTAL/*l*/) || (Image/*c*/.pinnedPostSection = GraphQL_EXPERIMENTAL/*l*/), Image/*c*/.storiesSection = r, this.setState({
                            listData: Image/*c*/,
                            dataSource: this.getUpdatedDataSource(Image/*c*/)
                        })
                    }
                },
                handleDockedCommentSubmit: function(e, t) {
                    this.clearPermalinkMode(), this.state.submitCallback(e, t)
                },
                handleDockedCommentAbort: function(e) {
                    this.clearPermalinkMode(), this.state.abortCallback && this.state.abortCallback(e)
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
                    if (!this.props.group) return React/*f*/.createElement(x, null);
                    var e = this.state.contentInsets;
                    null !== this.state.permalinkContentInsets && (e = this.state.permalinkContentInsets);
                    var t = React/*f*/.createElement(ListView/*p*/, {
                        dataSource: this.state.dataSource,
                        renderRow: this.renderRow,
                        renderFooter: this.renderFooter,
                        onChangeVisibleRows: this._onChangeVisibleRows,
                        onEndReached: this.loadMoreIfNeeded,
                        onEndReachedDistance: 100,
                        showsVerticalScrollIndicator: !1,
                        contentInset: e,
                        scrollIndicatorInsets: e,
                        removeClippedSubviews: !0
                    });
                    return React/*f*/.createElement(THDockedInputContainer/*w*/, {
                        ref: G,
                        groupID: this.props.group.id,
                        scrollResponder: t,
                        onDockedCommentSubmit: this.handleDockedCommentSubmit,
                        onDockedCommentAbort: this.handleDockedCommentAbort,
                        onDidDock: this.handleDidDock,
                        onHeightChange: this.handleDockedReplyBarHeightChange
                    })
                }
            }),
            K = StyleSheet/*v*/.create({
                backdrop: {
                    backgroundColor: THColors/*R*/.backgroundColor,
                    overflow: "hidden"
                },
                divider: {
                    height: .5,
                    backgroundColor: THColors/*R*/.borderColor
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
                    backgroundColor: THColors/*R*/.backgroundColor
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
                    backgroundColor: THColors/*R*/.fakeStoryTextBlock
                },
                fakeStoryTextBlock: {
                    height: 5,
                    backgroundColor: THColors/*R*/.fakeStoryTextBlock
                },
                grayPadding: {
                    height: 11,
                    backgroundColor: THColors/*R*/.backgroundWash
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
                    color: THColors/*R*/.feedbackFadedText
                },
                nonMemberTextContainer: {
                    paddingTop: 10
                },
                nonMemberView: {
                    backgroundColor: THColors/*R*/.backgroundWash,
                    alignItems: "center",
                    paddingTop: 46
                },
                olderPostsHeader: {
                    alignItems: "center",
                    backgroundColor: THColors/*R*/.backgroundWash,
                    flexDirection: "row",
                    height: 24,
                    paddingLeft: 16
                },
                olderPostsText: {
                    color: THColors/*R*/.feedbackFadedText,
                    fontSize: 12
                },
                tailLoadingIndicator: {
                    backgroundColor: THColors/*R*/.backgroundWash,
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
                        type: LayoutAnimation/*o*/.Types.easeInEaseOut,
                        property: LayoutAnimation/*o*/.Properties.opacity
                    },
                    update: {
                        type: LayoutAnimation/*o*/.Types.easeInEaseOut
                    }
                }
            }
        })
    }
    i.exports = W
});