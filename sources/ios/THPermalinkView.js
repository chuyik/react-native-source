__d("THPermalinkView",["CommentAddAction","DocumentContent","FeedbackPoller","POPAnimationMixin","React","ReactGraphQL","RCTNativeAppEventEmitter","NativeModules","ScrollView","StyleSheet","Subscribable","THColors","THFeedUnitView","THPermalinkInputBarView","THViewConstants","TimerMixin","View","isEmpty","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var CommentAddAction/*o*/ = t("CommentAddAction"),
        DocumentContent/*a*/ = t("DocumentContent"),
        FeedbackPoller/*s*/ = t("FeedbackPoller"),
        POPAnimationMixin/*l*/ = t("POPAnimationMixin"),
        React/*u*/ = t("React"),
        ReactGraphQL/*c*/ = t("ReactGraphQL"),
        RCTNativeAppEventEmitter/*p*/ = t("RCTNativeAppEventEmitter"),
        NativeModules/*d*/ = t("NativeModules").RKTreehouseManager,
        ScrollView/*h*/ = t("ScrollView"),
        StyleSheet/*f*/ = t("StyleSheet"),
        Subscribable/*m*/ = t("Subscribable"),
        THColors/*g*/ = t("THColors"),
        THFeedUnitView/*_*/ = t("THFeedUnitView"),
        THPermalinkInputBarView/*y*/ = t("THPermalinkInputBarView"),
        THViewConstants/*v*/ = t("THViewConstants"),
        TimerMixin/*S*/ = t("TimerMixin"),
        View/*b*/ = t("View"),
        isEmpty/*R*/ = t("isEmpty"),
        keyOf/*w*/ = t("keyOf"),
        C = keyOf/*w*/({
            permalinkInputBar: null
        }),
        E = "gk_catalyst_th_live_update",
        D = React/*u*/.createClass({
            displayName: "THPermalinkView",
            propTypes: {
                story: React/*u*/.PropTypes.object.isRequired,
                topInset: React/*u*/.PropTypes.number,
                bottomInset: React/*u*/.PropTypes.number
            },
            getDefaultProps: function() {
                return {
                    topInset: 0,
                    bottomInset: 0
                }
            },
            mixins: [POPAnimationMixin/*l*/, ReactGraphQL/*c*/.Mixin, Subscribable/*m*/.Mixin, TimerMixin/*S*/],
            statics: {
                queries: {
                    viewer: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("THPermalinkView_viewer", "Viewer", [new r.Field("actor", [new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("__configs__", [new r.Field("edges", [new r.Field("node", [new r.Field("name"), new r.Field("enabled")])], null, null, null, null, {
                                plural: !0,
                                edgesID: "THPermalinkView_viewer_1"
                            })], null, [new r.Callv("named", [t.__var(e)], {
                                varargs: 1
                            })], null, null, {
                                connection: !0,
                                nonLimitable: !0,
                                nonFindable: !0
                            })], [t.__frag(n)], {
                                scope: "THPermalinkView_viewer"
                            })
                        }(E, THFeedUnitView/*_*/.getQuery("viewer"))
                    },
                    story: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("THPermalinkView_story", "Story", [new r.Field("feedback", [new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("to", [new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [t.__frag(n)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THPermalinkView_story"
                            })
                        }(THFeedUnitView/*_*/.getQuery("story"), THFeedUnitView/*_*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    commentEditAbortCallback: null,
                    commentEditSubmitCallback: null,
                    initialText: new DocumentContent/*a*/
                }
            },
            componentWillMount: function() {
                this.addListenerOn(RCTNativeAppEventEmitter/*p*/, "reloadFeedViewForGroup", this.reloadFeedViewForGroup)
            },
            componentWillUnmount: function() {
                this.props.story && this.props.story.feedback && FeedbackPoller/*s*/.unregister(this.props.story.feedback.id)
            },
            componentDidMount: function() {
                this.enablePollerIfNeeded(this.props), this.props.story && this.props.story.feedback && FeedbackPoller/*s*/.register(this.props.story.feedback.id), NativeModules/*d*/ && (NativeModules/*d*/.groupViewComponentDidUpdate && this.props.story && this.props.story.to && this.requestAnimationFrame(function() {
                    return this.isMounted() && NativeModules/*d*/.groupViewComponentDidUpdate(this.props.story.to.id)
                }.bind(this)), NativeModules/*d*/.logEventEnded && this.requestAnimationFrame(function() {
                    NativeModules/*d*/.logEventEnded(this.props.groupPostNotifTTI)
                }.bind(this)))
            },
            enablePollerIfNeeded: function(e) {
                var t = e.viewer && e.viewer.__configs__ && e.viewer.__configs__.edges;
                if (t) {
                    var n = t.filter(function(e) {
                        return e.node.name === E
                    });
                    isEmpty/*R*/(n) || FeedbackPoller/*s*/.enablePoller(n[0].node.enabled)
                }
            },
            onStoryDeleted: function() {
                NativeModules/*d*/ && NativeModules/*d*/.closeModalWindow()
            },
            reloadFeedViewForGroup: function(e) {
                this.props.story.to && this.props.story.to.id === e && this.props.forceUpdate({})
            },
            handleCommentSubmit: function(e, t) {
                t && t.style_list && "photo" === t.style_list[0] ? CommentAddAction/*o*/.handleAddPhotoComment(this.props.viewer.actor.id, this.props.story.feedback.id, e, t) : CommentAddAction/*o*/.handleAddComment(this.props.viewer.actor.id, this.props.story.feedback.id, e, t), this.setState({
                    dockParams: null
                })
            },
            handleCommentEditSubmit: function(e) {
                this.state.commentEditSubmitCallback && this.state.commentEditSubmitCallback(e), this.setState({
                    commentEditSubmitCallback: null,
                    commentEditAbortCallback: null,
                    initialText: new DocumentContent/*a*/,
                    isEditing: !1
                })
            },
            handleCommentEditAbort: function(e) {
                this.state.commentEditAbortCallback && this.state.commentEditAbortCallback(e), this.setState({
                    commentEditSubmitCallback: null,
                    commentEditAbortCallback: null,
                    isEditing: !1
                })
            },
            handleCommentInputRequested: function(e, t, n) {
                e.isEditing ? this.handleCommentEditRequested(e, t, n) : this.refs[C].focusInput()
            },
            handleCommentEditRequested: function(e, t, n) {
                this.setState({
                    commentEditAbortCallback: n,
                    commentEditSubmitCallback: t,
                    dockParams: e,
                    initialText: e.comparisonTextForCanPost,
                    isEditing: !0
                })
            },
            render: function() {
                if (!this.props.story) return React/*u*/.createElement(View/*b*/, null);
                var e = {
                        top: this.props.topInset,
                        bottom: this.props.bottomInset
                    },
                    t = this.props.story.to ? this.props.story.to.id : null,
                    n = React/*u*/.createElement(THFeedUnitView/*_*/, {
                        onInputRequested: this.handleCommentInputRequested,
                        onStoryDeleted: this.onStoryDeleted,
                        story: this.props.story,
                        group: this.props.story.to,
                        viewer: this.props.viewer,
                        viewContext: THViewConstants/*v*/.PERMALINK
                    }),
                    r = React/*u*/.createElement(ScrollView/*h*/, {
                        automaticallyAdjustContentInsets: !0,
                        contentInset: e,
                        contentOffset: {
                            THPermalinkInputBarView/*y*/: -e.top
                        },
                        style: T.scrollView,
                        showsVerticalScrollIndicator: !0
                    }, n);
                return React/*u*/.createElement(THPermalinkInputBarView/*y*/, {
                    ref: C,
                    groupID: t,
                    dockParams: this.state.dockParams,
                    initialText: this.state.initialText,
                    isEditing: this.state.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onCommentEditSubmit: this.handleCommentEditSubmit,
                    onCommentEditAbort: this.handleCommentEditAbort,
                    scrollResponder: r
                })
            }
        }),
        T = StyleSheet/*f*/.create({
            scrollView: {
                backgroundColor: THColors/*g*/.backgroundColor
            }
        });
    i.exports = D
});