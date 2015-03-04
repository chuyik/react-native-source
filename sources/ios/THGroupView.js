__d("THGroupView",["LayoutAnimation","FBSpinner","FeedbackPoller","GraphQL_EXPERIMENTAL","GraphQLStore","Image","ListView","ListViewDataSource","NativeModules","React","ReactGraphQL","RCTDeviceEventEmitter","Dimensions","RCTNativeAppEventEmitter","StyleSheet","Subscribable","Text","THColors","THDockedInputContainer","THFeedbackView","THFeedUnitView","THPinnedPostView","TimerMixin","TouchableHighlight","View","deepDiffer","fbt","fetchRQL","invariant","isEmpty","ix","keyOf","merge","rql","uniqueKey"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict"; {
        var LayoutAnimation/*o*/ = require/*t*/("LayoutAnimation"),
            FBSpinner/*a*/ = require/*t*/("FBSpinner"),
            FeedbackPoller/*s*/ = require/*t*/("FeedbackPoller"),
            GraphQL_EXPERIMENTAL/*l*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
            GraphQLStore/*u*/ = require/*t*/("GraphQLStore"),
            Image/*c*/ = require/*t*/("Image"),
            ListView/*p*/ = require/*t*/("ListView"),
            ListViewDataSource/*d*/ = require/*t*/("ListViewDataSource"),
            NativeModules/*h*/ = require/*t*/("NativeModules"),
            React/*f*/ = require/*t*/("React"),
            ReactGraphQL/*m*/ = require/*t*/("ReactGraphQL"),
            RCTDeviceEventEmitter/*g*/ = require/*t*/("RCTDeviceEventEmitter"),
            Dimensions/*_*/ = require/*t*/("Dimensions"),
            RCTNativeAppEventEmitter/*y*/ = require/*t*/("RCTNativeAppEventEmitter"),
            StyleSheet/*v*/ = require/*t*/("StyleSheet"),
            Subscribable/*S*/ = require/*t*/("Subscribable"),
            Text/*b*/ = require/*t*/("Text"),
            THColors/*R*/ = require/*t*/("THColors"),
            THDockedInputContainer/*w*/ = require/*t*/("THDockedInputContainer"),
            THFeedbackView/*C*/ = require/*t*/("THFeedbackView"),
            THFeedUnitView/*E*/ = require/*t*/("THFeedUnitView"),
            THPinnedPostView/*D*/ = require/*t*/("THPinnedPostView"),
            TimerMixin/*T*/ = require/*t*/("TimerMixin"),
            x = (require/*t*/("TouchableHighlight"), require/*t*/("View")),
            deepDiffer/*P*/ = require/*t*/("deepDiffer"),
            fbt/*I*/ = require/*t*/("fbt"),
            fetchRQL/*F*/ = require/*t*/("fetchRQL"),
            invariant/*L*/ = require/*t*/("invariant"),
            isEmpty/*M*/ = require/*t*/("isEmpty"),
            ix/*Q*/ = require/*t*/("ix"),
            keyOf/*A*/ = require/*t*/("keyOf"),
            merge/*k*/ = require/*t*/("merge"),
            rql/*O*/ = require/*t*/("rql"),
            uniqueKey/*N*/ = require/*t*/("uniqueKey"),
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
                        viewer: function(global/*e*/, require/*t*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var LayoutAnimation/*o*/ = require/*t*/.__GraphQL;
                                return new LayoutAnimation/*o*/.QueryFragment("THGroupView_viewer", "Viewer", [new LayoutAnimation/*o*/.Field("__configs__", [new LayoutAnimation/*o*/.Field("edges", [new LayoutAnimation/*o*/.Field("node", [new LayoutAnimation/*o*/.Field("name"), new LayoutAnimation/*o*/.Field("enabled")])], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_viewer_1"
                                })], null, [new LayoutAnimation/*o*/.Callv("named", [require/*t*/.__var(requireDynamic/*n*/)], {
                                    varargs: 1
                                })], null, null, {
                                    connection: !0,
                                    nonLimitable: !0,
                                    nonFindable: !0
                                })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_viewer"
                                })
                            }(THFeedUnitView/*E*/.getQuery("viewer"), U, THFeedbackView/*C*/.getQuery("viewer"), THPinnedPostView/*D*/.getQuery("viewer"))
                        },
                        group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var LayoutAnimation/*o*/ = require/*t*/.__GraphQL;
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
                                }), new LayoutAnimation/*o*/.Field("creation_time")], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
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
                                })], null, [new LayoutAnimation/*o*/.Callv("first", [require/*t*/.__var(global/*e*/)])], null, null, {
                                    connection: !0
                                }), new LayoutAnimation/*o*/.Field("group_pinned_stories", [new LayoutAnimation/*o*/.Field("count")], null, null, null, null, {
                                    connection: !0
                                }), new LayoutAnimation/*o*/.Field("visibility"), new LayoutAnimation/*o*/.Field("viewer_join_state"), new LayoutAnimation/*o*/.Field("id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                })], [require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_group"
                                })
                            }(requireDynamic/*n*/.count, THFeedUnitView/*E*/.getQuery("story"), THPinnedPostView/*D*/.getQuery("group"), THFeedUnitView/*E*/.getQuery("group"))
                        }
                    },
                    navItemTitle: function() {
                        return "Group"
                    },
                    getFakeStoryView: function() {
                        var global/*e*/ = Dimensions/*_*/.get("window").width;
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
                                width: global/*e*/ - 60,
                                marginTop: 8
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), React/*f*/.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 60
                            }]
                        })))
                    },
                    getNewDataSource: function() {
                        return new ListViewDataSource/*d*/({
                            getRowData: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                                return global/*e*/[require/*t*/][requireDynamic/*n*/]
                            },
                            getSectionHeaderData: function(global/*e*/, require/*t*/) {
                                return global/*e*/[require/*t*/]
                            },
                            rowHasChanged: function(global/*e*/, require/*t*/) {
                                return global/*e*/.node !== require/*t*/.node || deepDiffer/*P*/(global/*e*/, require/*t*/)
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
                getUpdatedDataSource: function(global/*e*/) {
                    var require/*t*/ = [],
                        requireDynamic/*n*/ = [];
                    for (var requireLazy/*r*/ in global/*e*/) require/*t*/.push(requireLazy/*r*/), requireDynamic/*n*/.push(Object.keys(global/*e*/[requireLazy/*r*/]));
                    return this.state.dataSource.cloneWithRowsAndSections(global/*e*/)
                },
                getAdjacentKeys: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = {};
                    for (var LayoutAnimation/*o*/ in require/*t*/) {
                        if (requireLazy/*r*/) return module/*i*/[LayoutAnimation/*o*/] = LayoutAnimation/*o*/, module/*i*/;
                        LayoutAnimation/*o*/ === global/*e*/ && (requireDynamic/*n*/ && (module/*i*/[requireDynamic/*n*/] = requireDynamic/*n*/), requireLazy/*r*/ = !0), requireDynamic/*n*/ = LayoutAnimation/*o*/
                    }
                    return module/*i*/
                },
                clearPermalinkMode: function() {
                    if (this.refs[G].enableScrollResponderAutoInsets(!0), this.state.tappedUnitKey in this.state.listData.storiesSection) {
                        var global/*e*/ = this.state.listData.storiesSection,
                            require/*t*/ = this.getAdjacentKeys(this.state.tappedUnitKey, global/*e*/);
                        require/*t*/[this.state.tappedUnitKey] = this.state.tappedUnitKey;
                        var requireDynamic/*n*/ = {};
                        for (var requireLazy/*r*/ in global/*e*/) requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ in require/*t*/ ? merge/*k*/(global/*e*/[requireLazy/*r*/], {
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
                renderRow: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/, module/*i*/, LayoutAnimation/*o*/, FBSpinner/*a*/, FeedbackPoller/*s*/ = global/*e*/;
                    return "pinnedPostSection" === require/*t*/ ? requireLazy/*r*/ = React/*f*/.createElement(THPinnedPostView/*D*/, {
                        key: requireDynamic/*n*/,
                        group: this.props.group,
                        navigator: this.props.navigator,
                        onInputRequested: this.handleInputRequested,
                        onPinUnpinStory: this.onPinUnpinStory,
                        onDeletePinnedStory: this.onDeletePinnedStory,
                        viewer: this.props.viewer
                    }) : "storiesSection" === require/*t*/ ? (FeedbackPoller/*s*/.hideAll ? FBSpinner/*a*/ = K.hide : FeedbackPoller/*s*/.hideSeparator && (LayoutAnimation/*o*/ = K.hide), FeedbackPoller/*s*/.node.id === this.state.olderPostsDividerKey && (module/*i*/ = React/*f*/.createElement(x, {
                        style: [K.olderPostsHeader, LayoutAnimation/*o*/]
                    }, React/*f*/.createElement(Text/*b*/, {
                        style: K.olderPostsText
                    }, fbt/*I*/({
                        type: "text",
                        texts: ["OLDER POSTS"],
                        desc: "Header for older group posts"
                    })))), requireLazy/*r*/ = React/*f*/.createElement(THFeedUnitView/*E*/, {
                        onInputRequested: this.handleInputRequested,
                        story: FeedbackPoller/*s*/.node,
                        group: this.props.group,
                        viewer: this.props.viewer,
                        navigator: this.props.navigator,
                        key: requireDynamic/*n*/,
                        context: {
                            isGroupStream: !0
                        },
                        canCommentInline: !1,
                        onPinUnpinStory: this.onPinUnpinStory
                    })) : console.warn("Unrecognized sectionID: ", require/*t*/), this.state.initialInsertionComplete, React/*f*/.createElement(x, {
                        style: [K.backdrop, FBSpinner/*a*/]
                    }, React/*f*/.createElement(x, {
                        style: [K.divider, LayoutAnimation/*o*/]
                    }), React/*f*/.createElement(x, {
                        style: [K.grayPadding, LayoutAnimation/*o*/]
                    }), module/*i*/, React/*f*/.createElement(x, {
                        style: [K.divider, LayoutAnimation/*o*/]
                    }), requireLazy/*r*/)
                },
                isStoryUnread: function(global/*e*/) {
                    var require/*t*/ = global/*e*/.node.feedback.top_level_comment_counts;
                    if (!require/*t*/) return !1;
                    var requireDynamic/*n*/ = require/*t*/.last_view_time ? global/*e*/.node.creation_time > require/*t*/.last_view_time : !1;
                    return requireDynamic/*n*/ || require/*t*/.unread_count > 0
                },
                handleInputRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    this.setState({
                        submitCallback: require/*t*/,
                        abortCallback: requireDynamic/*n*/,
                        tappedFeedUnitHandle: global/*e*/.tappedFeedUnitHandle,
                        tappedUnitKey: uniqueKey/*N*/(global/*e*/.tappedFeedUnitID)
                    }), this.refs[G].initiateDockedInput(global/*e*/), B && B.logEventWithDuration && this.requestAnimationFrame(function() {
                        var require/*t*/ = ((new Date).getTime() - global/*e*/.tappedTime) / 1e3;
                        B.logEventWithDuration(j, require/*t*/)
                    })
                },
                handleDidDock: function() {
                    this.enablePermalinkMode()
                },
                enablePermalinkMode: function() {
                    this.state.tappedFeedUnitHandle && (this.refs[G].enableScrollResponderAutoInsets(!1), $.measureLayout(this.state.tappedFeedUnitHandle, this.refs[G].getScrollResponder().getNativeNode(), this.permalinkInsetsError, this.handleMeasureLayoutForPermalink))
                },
                handleMeasureLayoutForPermalink: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = this.refs[G];
                    $.getScrollViewContentSize(module/*i*/.getScrollResponder().getNativeNode(), function(global/*e*/) {
                        var requireDynamic/*n*/ = module/*i*/.getBarHeight() - module/*i*/.getInitialBarHeight(),
                            LayoutAnimation/*o*/ = this.state.keyboardHeight + requireDynamic/*n*/ + requireLazy/*r*/,
                            FBSpinner/*a*/ = LayoutAnimation/*o*/ + require/*t*/ - global/*e*/.height,
                            FeedbackPoller/*s*/ = Dimensions/*_*/.get("modalFullscreenView").height,
                            GraphQL_EXPERIMENTAL/*l*/ = q - require/*t*/,
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
                    this.clearPermalinkMode(), this.refs[G].cancelDockedInput()
                },
                handleDockedReplyBarHeightChange: function() {
                    this.enablePermalinkMode()
                },
                handleConfirmedNewPost: function() {
                    var global/*e*/ = this.props.group.admin_aware_group.group_stories.edges[0].cursor,
                        require/*t*/ = W.getQueriesForRoute(this.context.route),
                        requireDynamic/*n*/ = require/*t*/.group.getQuery().getUnaliasedFields("admin_aware_group")[0].getUnaliasedFields("group_stories")[0],
                        requireLazy/*r*/ = new GraphQL_EXPERIMENTAL/*l*/.QueryFragment("GroupStoriesFragment", "GroupStoriesConnection", requireDynamic/*n*/.getOwnFields(), requireDynamic/*n*/.getFragments()),
                        module/*i*/ = new GraphQL_EXPERIMENTAL/*l*/.QueryWithValues(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = rql/*O*/.__GraphQL;
                            return new module/*i*/.Query("node", [rql/*O*/.__var(global/*e*/)], [new module/*i*/.Field("admin_aware_group", [new module/*i*/.Field("group_stories", null, [rql/*O*/.__frag(requireLazy/*r*/)], [new module/*i*/.Callv("before", [rql/*O*/.__var(require/*t*/)]), new module/*i*/.Callv("first", [rql/*O*/.__var(requireDynamic/*n*/)])], null, null, {
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
                    fetchRQL/*F*/(module/*i*/).then(function(global/*e*/) {
                        if (global/*e*/.errors && global/*e*/.errors.length) console.error("Error from fetching new story: ", global/*e*/.errors[0]);
                        else {
                            var require/*t*/ = global/*e*/.response;
                            GraphQLStore/*u*/.handleUpdate(require/*t*/, module/*i*/);
                            var requireDynamic/*n*/ = require/*t*/[this.props.group.id],
                                requireLazy/*r*/ = Object.keys(requireDynamic/*n*/),
                                LayoutAnimation/*o*/ = requireDynamic/*n*/[requireLazy/*r*/[0]].edges.length;
                            this.setQueryParams({
                                count: this.queryParams.count + LayoutAnimation/*o*/
                            })
                        }
                    }.bind(this))
                },
                updateFeedbackPollerForRange: function() {},
                handleKeyboardWillShow: function(global/*e*/) {
                    var require/*t*/ = Dimensions/*_*/.get("modalFullscreenView").height - global/*e*/.endCoordinates.screenY;
                    require/*t*/ !== this.state.keyboardHeight && this.setState({
                        keyboardHeight: require/*t*/
                    })
                },
                componentWillMount: function() {
                    this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "handleConfirmedNewPost", this.handleConfirmedNewPost), this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "reloadFeedViewForGroup", this.reloadFeedViewForGroup), this.addListenerOn(RCTNativeAppEventEmitter/*y*/, "cancelComment", this.cancelComment), this.addListenerOn(RCTDeviceEventEmitter/*g*/, "keyboardWillShow", this.handleKeyboardWillShow), this._setupGroupStories(this.props)
                },
                componentWillReceiveProps: function(global/*e*/) {
                    this._setupGroupStories(global/*e*/)
                },
                componentDidUpdate: function() {
                    this.props.group && B && B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id)
                },
                componentDidMount: function() {
                    if (this.props.group) {
                        var global/*e*/ = this.refs[G].getScrollResponder();
                        global/*e*/.setNativeProps({
                            contentOffset: {
                                RCTNativeAppEventEmitter/*y*/: -this.props.topInset
                            }
                        }), B && this.requestAnimationFrame(function() {
                            B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id), B.logEventEnded && (B.logEventEnded(this.props.groupProfileLoadTTI), B.logEventEnded(this.props.groupPostNotifTTI))
                        }.bind(this)), this._pollingStories = {}, this.enablePollerIfNeeded(this.props)
                    }
                },
                componentWillUnmount: function() {
                    for (var global/*e*/ in this._pollingStories) FeedbackPoller/*s*/.unregister(global/*e*/)
                },
                enablePollerIfNeeded: function(global/*e*/) {
                    var require/*t*/ = global/*e*/.viewer && global/*e*/.viewer.__configs__ && global/*e*/.viewer.__configs__.edges;
                    if (require/*t*/) {
                        var requireDynamic/*n*/ = require/*t*/.filter(function(global/*e*/) {
                            return global/*e*/.node.name === U
                        });
                        isEmpty/*M*/(requireDynamic/*n*/) || FeedbackPoller/*s*/.enablePoller(requireDynamic/*n*/[0].node.enabled)
                    }
                },
                _onChangeVisibleRows: function(global/*e*/, require/*t*/) {
                    for (var requireDynamic/*n*/ in require/*t*/) {
                        var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/],
                            module/*i*/ = this.state.listData[requireDynamic/*n*/];
                        for (var LayoutAnimation/*o*/ in requireLazy/*r*/) {
                            var FBSpinner/*a*/ = module/*i*/[LayoutAnimation/*o*/];
                            if (FBSpinner/*a*/ && FBSpinner/*a*/.node && FBSpinner/*a*/.node.feedback) {
                                var GraphQL_EXPERIMENTAL/*l*/ = FBSpinner/*a*/.node.feedback.id;
                                requireLazy/*r*/[LayoutAnimation/*o*/] && !this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] ? (FeedbackPoller/*s*/.register(GraphQL_EXPERIMENTAL/*l*/), this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] = !0) : !requireLazy/*r*/[LayoutAnimation/*o*/] && this._pollingStories[GraphQL_EXPERIMENTAL/*l*/] && (FeedbackPoller/*s*/.unregister(GraphQL_EXPERIMENTAL/*l*/), delete this._pollingStories[GraphQL_EXPERIMENTAL/*l*/])
                            }
                        }
                    }
                },
                _setupGroupStories: function(global/*e*/) {
                    if (this.enablePollerIfNeeded(global/*e*/), global/*e*/.group && global/*e*/.group.admin_aware_group.group_stories) {
                        for (var require/*t*/, requireDynamic/*n*/ = global/*e*/.group.admin_aware_group.group_stories.edges, requireLazy/*r*/ = {}, module/*i*/ = this.state.olderPostsDividerKey, LayoutAnimation/*o*/ = 0; LayoutAnimation/*o*/ < requireDynamic/*n*/.length; LayoutAnimation/*o*/++) {
                            var FBSpinner/*a*/ = {
                                    node: requireDynamic/*n*/[LayoutAnimation/*o*/].node
                                },
                                FeedbackPoller/*s*/ = uniqueKey/*N*/(FBSpinner/*a*/.node.id);
                            this.state.tappedUnitKey ? FeedbackPoller/*s*/ === this.state.tappedUnitKey ? (require/*t*/ && (requireLazy/*r*/[require/*t*/].hideAll = !0), FBSpinner/*a*/.hideSeparator = !0) : require/*t*/ === this.state.tappedUnitKey && (FBSpinner/*a*/.hideAll = !0) : (FBSpinner/*a*/.hideAll = !1, FBSpinner/*a*/.hideSeparator = !1), null === module/*i*/ && require/*t*/ && this.isStoryUnread(requireLazy/*r*/[require/*t*/]) && !this.isStoryUnread(FBSpinner/*a*/) && (module/*i*/ = FBSpinner/*a*/.node.id), FBSpinner/*a*/.local_id = FeedbackPoller/*s*/, requireLazy/*r*/[FeedbackPoller/*s*/] = FBSpinner/*a*/, require/*t*/ = FeedbackPoller/*s*/
                        }
                        this.setState({
                            olderPostsDividerKey: module/*i*/
                        });
                        var GraphQL_EXPERIMENTAL/*l*/ = {};
                        if (global/*e*/.group.admin_aware_group.group_pinned_stories.count > 0 && !this.state.hidePinnedPostSection && ("MEMBER" === global/*e*/.group.admin_aware_group.viewer_join_state || "OPEN" === global/*e*/.group.admin_aware_group.visibility)) {
                            var GraphQLStore/*u*/ = uniqueKey/*N*/("PINNED_POST_KEY");
                            GraphQL_EXPERIMENTAL/*l*/[GraphQLStore/*u*/] = {}
                        }
                        var Image/*c*/ = {};
                        isEmpty/*M*/(GraphQL_EXPERIMENTAL/*l*/) || (Image/*c*/.pinnedPostSection = GraphQL_EXPERIMENTAL/*l*/), Image/*c*/.storiesSection = requireLazy/*r*/, this.setState({
                            listData: Image/*c*/,
                            dataSource: this.getUpdatedDataSource(Image/*c*/)
                        })
                    }
                },
                handleDockedCommentSubmit: function(global/*e*/, require/*t*/) {
                    this.clearPermalinkMode(), this.state.submitCallback(global/*e*/, require/*t*/)
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
                    if (!this.props.group) return React/*f*/.createElement(x, null);
                    var global/*e*/ = this.state.contentInsets;
                    null !== this.state.permalinkContentInsets && (global/*e*/ = this.state.permalinkContentInsets);
                    var require/*t*/ = React/*f*/.createElement(ListView/*p*/, {
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
                    return React/*f*/.createElement(THDockedInputContainer/*w*/, {
                        ref: G,
                        groupID: this.props.group.id,
                        scrollResponder: require/*t*/,
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
    module/*i*/.exports = W
});