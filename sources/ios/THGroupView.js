__d("THGroupView",["LayoutAnimation","FBSpinner","FeedbackPoller","GraphQL_EXPERIMENTAL","GraphQLStore","Image","ListView","ListViewDataSource","NativeModules","React","ReactGraphQL","RCTDeviceEventEmitter","Dimensions","RCTNativeAppEventEmitter","StyleSheet","Subscribable","Text","THColors","THDockedInputContainer","THFeedbackView","THFeedUnitView","THPinnedPostView","TimerMixin","TouchableHighlight","View","deepDiffer","fbt","fetchRQL","invariant","isEmpty","ix","keyOf","merge","rql","uniqueKey"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict"; {
        var o = require/*t*/("LayoutAnimation"),
            a = require/*t*/("FBSpinner"),
            s = require/*t*/("FeedbackPoller"),
            l = require/*t*/("GraphQL_EXPERIMENTAL"),
            u = require/*t*/("GraphQLStore"),
            c = require/*t*/("Image"),
            p = require/*t*/("ListView"),
            d = require/*t*/("ListViewDataSource"),
            h = require/*t*/("NativeModules"),
            f = require/*t*/("React"),
            m = require/*t*/("ReactGraphQL"),
            g = require/*t*/("RCTDeviceEventEmitter"),
            _ = require/*t*/("Dimensions"),
            y = require/*t*/("RCTNativeAppEventEmitter"),
            v = require/*t*/("StyleSheet"),
            S = require/*t*/("Subscribable"),
            b = require/*t*/("Text"),
            R = require/*t*/("THColors"),
            w = require/*t*/("THDockedInputContainer"),
            C = require/*t*/("THFeedbackView"),
            E = require/*t*/("THFeedUnitView"),
            D = require/*t*/("THPinnedPostView"),
            T = require/*t*/("TimerMixin"),
            x = (require/*t*/("TouchableHighlight"), require/*t*/("View")),
            P = require/*t*/("deepDiffer"),
            I = require/*t*/("fbt"),
            F = require/*t*/("fetchRQL"),
            L = require/*t*/("invariant"),
            M = require/*t*/("isEmpty"),
            Q = require/*t*/("ix"),
            A = require/*t*/("keyOf"),
            k = require/*t*/("merge"),
            O = require/*t*/("rql"),
            N = require/*t*/("uniqueKey"),
            G = A({
                dockedReplyContainerRef: null
            }),
            $ = h.RKUIManager,
            B = h.RKTreehouseManager,
            H = 5,
            V = 36,
            q = 70,
            U = "gk_catalyst_th_live_update",
            j = "th_group_comment_tti",
            W = f.createClass({
                displayName: "THGroupView",
                propTypes: {
                    navigator: f.PropTypes.object,
                    topInset: f.PropTypes.number,
                    bottomInset: f.PropTypes.number
                },
                getDefaultProps: function() {
                    return {
                        topInset: 0,
                        bottomInset: 0
                    }
                },
                mixins: [m.Mixin, S.Mixin, T],
                statics: {
                    queryParams: {
                        count: H
                    },
                    queries: {
                        viewer: function(global/*e*/, require/*t*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var o = require/*t*/.__GraphQL;
                                return new o.QueryFragment("THGroupView_viewer", "Viewer", [new o.Field("__configs__", [new o.Field("edges", [new o.Field("node", [new o.Field("name"), new o.Field("enabled")])], null, null, null, null, {
                                    plural: !0,
                                    edgesID: "THGroupView_viewer_1"
                                })], null, [new o.Callv("named", [require/*t*/.__var(requireDynamic/*n*/)], {
                                    varargs: 1
                                })], null, null, {
                                    connection: !0,
                                    nonLimitable: !0,
                                    nonFindable: !0
                                })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_viewer"
                                })
                            }(E.getQuery("viewer"), U, C.getQuery("viewer"), D.getQuery("viewer"))
                        },
                        group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                            return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                                var o = require/*t*/.__GraphQL;
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
                                }), new o.Field("creation_time")], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
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
                                })], null, [new o.Callv("first", [require/*t*/.__var(global/*e*/)])], null, null, {
                                    connection: !0
                                }), new o.Field("group_pinned_stories", [new o.Field("count")], null, null, null, null, {
                                    connection: !0
                                }), new o.Field("visibility"), new o.Field("viewer_join_state"), new o.Field("id", null, null, null, null, null, {
                                    generated: !0,
                                    requisite: !0
                                })], null, null, null, null, {
                                    rootCall: "node",
                                    pk: "id"
                                })], [require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/)], {
                                    scope: "THGroupView_group"
                                })
                            }(requireDynamic/*n*/.count, E.getQuery("story"), D.getQuery("group"), E.getQuery("group"))
                        }
                    },
                    navItemTitle: function() {
                        return "Group"
                    },
                    getFakeStoryView: function() {
                        var global/*e*/ = _.get("window").width;
                        return f.createElement(x, {
                            style: K.backdrop
                        }, f.createElement(x, {
                            style: K.divider
                        }), f.createElement(x, {
                            style: K.grayPadding
                        }), f.createElement(x, {
                            style: K.divider
                        }), f.createElement(x, {
                            style: K.fakeStoryCell
                        }, f.createElement(x, {
                            style: K.fakeStoryHeader
                        }, f.createElement(x, {
                            style: K.fakeStoryProfilePicture
                        }), f.createElement(x, null, f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: 120,
                                marginBottom: 10
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: 100
                            }]
                        }))), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 60,
                                marginTop: 8
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 70
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 90
                            }]
                        }), f.createElement(x, {
                            style: [K.fakeStoryTextBlock, {
                                width: global/*e*/ - 60
                            }]
                        })))
                    },
                    getNewDataSource: function() {
                        return new d({
                            getRowData: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                                return global/*e*/[require/*t*/][requireDynamic/*n*/]
                            },
                            getSectionHeaderData: function(global/*e*/, require/*t*/) {
                                return global/*e*/[require/*t*/]
                            },
                            rowHasChanged: function(global/*e*/, require/*t*/) {
                                return global/*e*/.node !== require/*t*/.node || P(global/*e*/, require/*t*/)
                            },
                            sectionHeaderHasChanged: P
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
                    for (var o in require/*t*/) {
                        if (requireLazy/*r*/) return module/*i*/[o] = o, module/*i*/;
                        o === global/*e*/ && (requireDynamic/*n*/ && (module/*i*/[requireDynamic/*n*/] = requireDynamic/*n*/), requireLazy/*r*/ = !0), requireDynamic/*n*/ = o
                    }
                    return module/*i*/
                },
                clearPermalinkMode: function() {
                    if (this.refs[G].enableScrollResponderAutoInsets(!0), this.state.tappedUnitKey in this.state.listData.storiesSection) {
                        var global/*e*/ = this.state.listData.storiesSection,
                            require/*t*/ = this.getAdjacentKeys(this.state.tappedUnitKey, global/*e*/);
                        require/*t*/[this.state.tappedUnitKey] = this.state.tappedUnitKey;
                        var requireDynamic/*n*/ = {};
                        for (var requireLazy/*r*/ in global/*e*/) requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ in require/*t*/ ? k(global/*e*/[requireLazy/*r*/], {
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
                    return this.props.group && "CLOSED" === this.props.group.admin_aware_group.visibility && "MEMBER" !== this.props.group.admin_aware_group.viewer_join_state ? f.createElement(x, {
                        style: K.nonMemberView
                    }, f.createElement(c, {
                        style: K.lockIcon,
                        source: Q("thLockIcon")
                    }), f.createElement(x, {
                        style: K.nonMemberTextContainer
                    }, f.createElement(b, {
                        style: K.nonMemberText
                    }, I({
                        type: "text",
                        texts: ["Only members can see posts"],
                        desc: "Explanation for why no group stories are shown"
                    })))) : this.props.group && this.props.group.admin_aware_group.group_stories && !this.props.group.admin_aware_group.group_stories.page_info.has_next_page ? f.createElement(x, {
                        style: K.tailLoadingIndicator
                    }, f.createElement(c, {
                        style: K.endDot,
                        source: Q("newsfeedEnd")
                    })) : this.state.listData.storiesSection ? f.createElement(x, {
                        style: K.tailLoadingIndicator
                    }, f.createElement(a, null)) : W.getFakeStoryView()
                },
                renderRow: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    var requireLazy/*r*/, module/*i*/, o, a, s = global/*e*/;
                    return "pinnedPostSection" === require/*t*/ ? requireLazy/*r*/ = f.createElement(D, {
                        key: requireDynamic/*n*/,
                        group: this.props.group,
                        navigator: this.props.navigator,
                        onInputRequested: this.handleInputRequested,
                        onPinUnpinStory: this.onPinUnpinStory,
                        onDeletePinnedStory: this.onDeletePinnedStory,
                        viewer: this.props.viewer
                    }) : "storiesSection" === require/*t*/ ? (s.hideAll ? a = K.hide : s.hideSeparator && (o = K.hide), s.node.id === this.state.olderPostsDividerKey && (module/*i*/ = f.createElement(x, {
                        style: [K.olderPostsHeader, o]
                    }, f.createElement(b, {
                        style: K.olderPostsText
                    }, I({
                        type: "text",
                        texts: ["OLDER POSTS"],
                        desc: "Header for older group posts"
                    })))), requireLazy/*r*/ = f.createElement(E, {
                        onInputRequested: this.handleInputRequested,
                        story: s.node,
                        group: this.props.group,
                        viewer: this.props.viewer,
                        navigator: this.props.navigator,
                        key: requireDynamic/*n*/,
                        context: {
                            isGroupStream: !0
                        },
                        canCommentInline: !1,
                        onPinUnpinStory: this.onPinUnpinStory
                    })) : console.warn("Unrecognized sectionID: ", require/*t*/), this.state.initialInsertionComplete, f.createElement(x, {
                        style: [K.backdrop, a]
                    }, f.createElement(x, {
                        style: [K.divider, o]
                    }), f.createElement(x, {
                        style: [K.grayPadding, o]
                    }), module/*i*/, f.createElement(x, {
                        style: [K.divider, o]
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
                        tappedUnitKey: N(global/*e*/.tappedFeedUnitID)
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
                            o = this.state.keyboardHeight + requireDynamic/*n*/ + requireLazy/*r*/,
                            a = o + require/*t*/ - global/*e*/.height,
                            s = _.get("modalFullscreenView").height,
                            l = q - require/*t*/,
                            u = s - o - q;
                        if (u > 0 && (l += u), this.state.tappedFeedUnitHandle && !this.state.permalinkContentInsets) this.requestAnimationFrame(this.enablePermalinkMode);
                        else if (this.state.tappedUnitKey in this.state.listData.storiesSection) {
                            var c = this.state.listData.storiesSection,
                                p = this.getAdjacentKeys(this.state.tappedUnitKey, c),
                                d = {};
                            for (var h in c) c[h].node || L(0, "Adjacent keys must have corresponding nodes."), d[h] = h in p ? k(c[h], {
                                hideSeparator: !1,
                                hideAll: !0
                            }) : c[h];
                            d[this.state.tappedUnitKey] = k(c[this.state.tappedUnitKey], {
                                hideSeparator: !0,
                                hideAll: !1
                            });
                            var f = {};
                            this.state.listData.pinnedPostSection && (f.pinnedPostSection = this.state.listData.pinnedPostSection), f.storiesSection = d, this.setState({
                                listData: f,
                                dataSource: this.getUpdatedDataSource(f)
                            })
                        }
                        this.setState({
                            permalinkContentInsets: {
                                top: l,
                                bottom: a
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
                        requireLazy/*r*/ = new l.QueryFragment("GroupStoriesFragment", "GroupStoriesConnection", requireDynamic/*n*/.getOwnFields(), requireDynamic/*n*/.getFragments()),
                        module/*i*/ = new l.QueryWithValues(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = O.__GraphQL;
                            return new module/*i*/.Query("node", [O.__var(global/*e*/)], [new module/*i*/.Field("admin_aware_group", [new module/*i*/.Field("group_stories", null, [O.__frag(requireLazy/*r*/)], [new module/*i*/.Callv("before", [O.__var(require/*t*/)]), new module/*i*/.Callv("first", [O.__var(requireDynamic/*n*/)])], null, null, {
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
                    F(module/*i*/).then(function(global/*e*/) {
                        if (global/*e*/.errors && global/*e*/.errors.length) console.error("Error from fetching new story: ", global/*e*/.errors[0]);
                        else {
                            var require/*t*/ = global/*e*/.response;
                            u.handleUpdate(require/*t*/, module/*i*/);
                            var requireDynamic/*n*/ = require/*t*/[this.props.group.id],
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
                    var require/*t*/ = _.get("modalFullscreenView").height - global/*e*/.endCoordinates.screenY;
                    require/*t*/ !== this.state.keyboardHeight && this.setState({
                        keyboardHeight: require/*t*/
                    })
                },
                componentWillMount: function() {
                    this.addListenerOn(y, "handleConfirmedNewPost", this.handleConfirmedNewPost), this.addListenerOn(y, "reloadFeedViewForGroup", this.reloadFeedViewForGroup), this.addListenerOn(y, "cancelComment", this.cancelComment), this.addListenerOn(g, "keyboardWillShow", this.handleKeyboardWillShow), this._setupGroupStories(this.props)
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
                                y: -this.props.topInset
                            }
                        }), B && this.requestAnimationFrame(function() {
                            B.groupViewComponentDidUpdate && B.groupViewComponentDidUpdate(this.props.group.id), B.logEventEnded && (B.logEventEnded(this.props.groupProfileLoadTTI), B.logEventEnded(this.props.groupPostNotifTTI))
                        }.bind(this)), this._pollingStories = {}, this.enablePollerIfNeeded(this.props)
                    }
                },
                componentWillUnmount: function() {
                    for (var global/*e*/ in this._pollingStories) s.unregister(global/*e*/)
                },
                enablePollerIfNeeded: function(global/*e*/) {
                    var require/*t*/ = global/*e*/.viewer && global/*e*/.viewer.__configs__ && global/*e*/.viewer.__configs__.edges;
                    if (require/*t*/) {
                        var requireDynamic/*n*/ = require/*t*/.filter(function(global/*e*/) {
                            return global/*e*/.node.name === U
                        });
                        M(requireDynamic/*n*/) || s.enablePoller(requireDynamic/*n*/[0].node.enabled)
                    }
                },
                _onChangeVisibleRows: function(global/*e*/, require/*t*/) {
                    for (var requireDynamic/*n*/ in require/*t*/) {
                        var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/],
                            module/*i*/ = this.state.listData[requireDynamic/*n*/];
                        for (var o in requireLazy/*r*/) {
                            var a = module/*i*/[o];
                            if (a && a.node && a.node.feedback) {
                                var l = a.node.feedback.id;
                                requireLazy/*r*/[o] && !this._pollingStories[l] ? (s.register(l), this._pollingStories[l] = !0) : !requireLazy/*r*/[o] && this._pollingStories[l] && (s.unregister(l), delete this._pollingStories[l])
                            }
                        }
                    }
                },
                _setupGroupStories: function(global/*e*/) {
                    if (this.enablePollerIfNeeded(global/*e*/), global/*e*/.group && global/*e*/.group.admin_aware_group.group_stories) {
                        for (var require/*t*/, requireDynamic/*n*/ = global/*e*/.group.admin_aware_group.group_stories.edges, requireLazy/*r*/ = {}, module/*i*/ = this.state.olderPostsDividerKey, o = 0; o < requireDynamic/*n*/.length; o++) {
                            var a = {
                                    node: requireDynamic/*n*/[o].node
                                },
                                s = N(a.node.id);
                            this.state.tappedUnitKey ? s === this.state.tappedUnitKey ? (require/*t*/ && (requireLazy/*r*/[require/*t*/].hideAll = !0), a.hideSeparator = !0) : require/*t*/ === this.state.tappedUnitKey && (a.hideAll = !0) : (a.hideAll = !1, a.hideSeparator = !1), null === module/*i*/ && require/*t*/ && this.isStoryUnread(requireLazy/*r*/[require/*t*/]) && !this.isStoryUnread(a) && (module/*i*/ = a.node.id), a.local_id = s, requireLazy/*r*/[s] = a, require/*t*/ = s
                        }
                        this.setState({
                            olderPostsDividerKey: module/*i*/
                        });
                        var l = {};
                        if (global/*e*/.group.admin_aware_group.group_pinned_stories.count > 0 && !this.state.hidePinnedPostSection && ("MEMBER" === global/*e*/.group.admin_aware_group.viewer_join_state || "OPEN" === global/*e*/.group.admin_aware_group.visibility)) {
                            var u = N("PINNED_POST_KEY");
                            l[u] = {}
                        }
                        var c = {};
                        M(l) || (c.pinnedPostSection = l), c.storiesSection = requireLazy/*r*/, this.setState({
                            listData: c,
                            dataSource: this.getUpdatedDataSource(c)
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
                    if (!this.props.group) return f.createElement(x, null);
                    var global/*e*/ = this.state.contentInsets;
                    null !== this.state.permalinkContentInsets && (global/*e*/ = this.state.permalinkContentInsets);
                    var require/*t*/ = f.createElement(p, {
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
                    return f.createElement(w, {
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
            K = v.create({
                backdrop: {
                    backgroundColor: R.backgroundColor,
                    overflow: "hidden"
                },
                divider: {
                    height: .5,
                    backgroundColor: R.borderColor
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
                    backgroundColor: R.backgroundColor
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
                    backgroundColor: R.fakeStoryTextBlock
                },
                fakeStoryTextBlock: {
                    height: 5,
                    backgroundColor: R.fakeStoryTextBlock
                },
                grayPadding: {
                    height: 11,
                    backgroundColor: R.backgroundWash
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
                    color: R.feedbackFadedText
                },
                nonMemberTextContainer: {
                    paddingTop: 10
                },
                nonMemberView: {
                    backgroundColor: R.backgroundWash,
                    alignItems: "center",
                    paddingTop: 46
                },
                olderPostsHeader: {
                    alignItems: "center",
                    backgroundColor: R.backgroundWash,
                    flexDirection: "row",
                    height: 24,
                    paddingLeft: 16
                },
                olderPostsText: {
                    color: R.feedbackFadedText,
                    fontSize: 12
                },
                tailLoadingIndicator: {
                    backgroundColor: R.backgroundWash,
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