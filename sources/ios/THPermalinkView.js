__d("THPermalinkView",["CommentAddAction","DocumentContent","FeedbackPoller","POPAnimationMixin","React","ReactGraphQL","RCTNativeAppEventEmitter","NativeModules","ScrollView","StyleSheet","Subscribable","THColors","THFeedUnitView","THPermalinkInputBarView","THViewConstants","TimerMixin","View","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("CommentAddAction"),
        exports/*a*/ = require/*t*/("DocumentContent"),
        CommentAddAction/*s*/ = require/*t*/("FeedbackPoller"),
        DocumentContent/*l*/ = require/*t*/("POPAnimationMixin"),
        FeedbackPoller/*u*/ = require/*t*/("React"),
        POPAnimationMixin/*c*/ = require/*t*/("ReactGraphQL"),
        React/*p*/ = require/*t*/("RCTNativeAppEventEmitter"),
        ReactGraphQL/*d*/ = require/*t*/("NativeModules").RKTreehouseManager,
        RCTNativeAppEventEmitter/*h*/ = require/*t*/("ScrollView"),
        NativeModules/*f*/ = require/*t*/("StyleSheet"),
        ScrollView/*m*/ = require/*t*/("Subscribable"),
        StyleSheet/*g*/ = require/*t*/("THColors"),
        Subscribable/*_*/ = require/*t*/("THFeedUnitView"),
        THColors/*y*/ = require/*t*/("THPermalinkInputBarView"),
        THFeedUnitView/*v*/ = require/*t*/("THViewConstants"),
        THPermalinkInputBarView/*S*/ = require/*t*/("TimerMixin"),
        THViewConstants/*b*/ = require/*t*/("View"),
        TimerMixin/*R*/ = require/*t*/("isEmpty"),
        View/*w*/ = require/*t*/("keyOf"),
        isEmpty/*C*/ = View/*w*/({
            permalinkInputBar: null
        }),
        keyOf/*E*/ = "gk_catalyst_th_live_update",
        D = FeedbackPoller/*u*/.createClass({
            displayName: "THPermalinkView",
            propTypes: {
                story: FeedbackPoller/*u*/.PropTypes.object.isRequired,
                topInset: FeedbackPoller/*u*/.PropTypes.number,
                bottomInset: FeedbackPoller/*u*/.PropTypes.number
            },
            getDefaultProps: function() {
                return {
                    topInset: 0,
                    bottomInset: 0
                }
            },
            mixins: [DocumentContent/*l*/, POPAnimationMixin/*c*/.Mixin, ScrollView/*m*/.Mixin, THPermalinkInputBarView/*S*/],
            statics: {
                queries: {
                    viewer: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("THPermalinkView_viewer", "Viewer", [new requireLazy/*r*/.Field("actor", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("__configs__", [new requireLazy/*r*/.Field("edges", [new requireLazy/*r*/.Field("node", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("enabled")])], null, null, null, null, {
                                plural: !0,
                                edgesID: "THPermalinkView_viewer_1"
                            })], null, [new requireLazy/*r*/.Callv("named", [require/*t*/.__var(global/*e*/)], {
                                varargs: 1
                            })], null, null, {
                                connection: !0,
                                nonLimitable: !0,
                                nonFindable: !0
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], {
                                scope: "THPermalinkView_viewer"
                            })
                        }(keyOf/*E*/, Subscribable/*_*/.getQuery("viewer"))
                    },
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("THPermalinkView_story", "Story", [new requireLazy/*r*/.Field("feedback", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("to", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPermalinkView_story"
                            })
                        }(Subscribable/*_*/.getQuery("story"), Subscribable/*_*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    commentEditAbortCallback: null,
                    commentEditSubmitCallback: null,
                    initialText: new exports/*a*/
                }
            },
            componentWillMount: function() {
                this.addListenerOn(React/*p*/, "reloadFeedViewForGroup", this.reloadFeedViewForGroup)
            },
            componentWillUnmount: function() {
                this.props.story && this.props.story.feedback && CommentAddAction/*s*/.unregister(this.props.story.feedback.id)
            },
            componentDidMount: function() {
                this.enablePollerIfNeeded(this.props), this.props.story && this.props.story.feedback && CommentAddAction/*s*/.register(this.props.story.feedback.id), ReactGraphQL/*d*/ && (ReactGraphQL/*d*/.groupViewComponentDidUpdate && this.props.story && this.props.story.to && this.requestAnimationFrame(function() {
                    return this.isMounted() && ReactGraphQL/*d*/.groupViewComponentDidUpdate(this.props.story.to.id)
                }.bind(this)), ReactGraphQL/*d*/.logEventEnded && this.requestAnimationFrame(function() {
                    ReactGraphQL/*d*/.logEventEnded(this.props.groupPostNotifTTI)
                }.bind(this)))
            },
            enablePollerIfNeeded: function(global/*e*/) {
                var require/*t*/ = global/*e*/.viewer && global/*e*/.viewer.__configs__ && global/*e*/.viewer.__configs__.edges;
                if (require/*t*/) {
                    var requireDynamic/*n*/ = require/*t*/.filter(function(global/*e*/) {
                        return global/*e*/.node.name === keyOf/*E*/
                    });
                    TimerMixin/*R*/(requireDynamic/*n*/) || CommentAddAction/*s*/.enablePoller(requireDynamic/*n*/[0].node.enabled)
                }
            },
            onStoryDeleted: function() {
                ReactGraphQL/*d*/ && ReactGraphQL/*d*/.closeModalWindow()
            },
            reloadFeedViewForGroup: function(global/*e*/) {
                this.props.story.to && this.props.story.to.id === global/*e*/ && this.props.forceUpdate({})
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                require/*t*/ && require/*t*/.style_list && "photo" === require/*t*/.style_list[0] ? o.handleAddPhotoComment(this.props.viewer.actor.id, this.props.story.feedback.id, global/*e*/, require/*t*/) : o.handleAddComment(this.props.viewer.actor.id, this.props.story.feedback.id, global/*e*/, require/*t*/), this.setState({
                    dockParams: null
                })
            },
            handleCommentEditSubmit: function(global/*e*/) {
                this.state.commentEditSubmitCallback && this.state.commentEditSubmitCallback(global/*e*/), this.setState({
                    commentEditSubmitCallback: null,
                    commentEditAbortCallback: null,
                    initialText: new exports/*a*/,
                    isEditing: !1
                })
            },
            handleCommentEditAbort: function(global/*e*/) {
                this.state.commentEditAbortCallback && this.state.commentEditAbortCallback(global/*e*/), this.setState({
                    commentEditSubmitCallback: null,
                    commentEditAbortCallback: null,
                    isEditing: !1
                })
            },
            handleCommentInputRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                global/*e*/.isEditing ? this.handleCommentEditRequested(global/*e*/, require/*t*/, requireDynamic/*n*/) : this.refs[isEmpty/*C*/].focusInput()
            },
            handleCommentEditRequested: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                this.setState({
                    commentEditAbortCallback: requireDynamic/*n*/,
                    commentEditSubmitCallback: require/*t*/,
                    dockParams: global/*e*/,
                    initialText: global/*e*/.comparisonTextForCanPost,
                    isEditing: !0
                })
            },
            render: function() {
                if (!this.props.story) return FeedbackPoller/*u*/.createElement(THViewConstants/*b*/, null);
                var global/*e*/ = {
                        top: this.props.topInset,
                        bottom: this.props.bottomInset
                    },
                    require/*t*/ = this.props.story.to ? this.props.story.to.id : null,
                    requireDynamic/*n*/ = FeedbackPoller/*u*/.createElement(Subscribable/*_*/, {
                        onInputRequested: this.handleCommentInputRequested,
                        onStoryDeleted: this.onStoryDeleted,
                        story: this.props.story,
                        group: this.props.story.to,
                        viewer: this.props.viewer,
                        viewContext: THFeedUnitView/*v*/.PERMALINK
                    }),
                    requireLazy/*r*/ = FeedbackPoller/*u*/.createElement(RCTNativeAppEventEmitter/*h*/, {
                        automaticallyAdjustContentInsets: !0,
                        contentInset: global/*e*/,
                        contentOffset: {
                            THColors/*y*/: -global/*e*/.top
                        },
                        style: T.scrollView,
                        showsVerticalScrollIndicator: !0
                    }, requireDynamic/*n*/);
                return FeedbackPoller/*u*/.createElement(THColors/*y*/, {
                    ref: isEmpty/*C*/,
                    groupID: require/*t*/,
                    dockParams: this.state.dockParams,
                    initialText: this.state.initialText,
                    isEditing: this.state.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onCommentEditSubmit: this.handleCommentEditSubmit,
                    onCommentEditAbort: this.handleCommentEditAbort,
                    scrollResponder: requireLazy/*r*/
                })
            }
        }),
        T = NativeModules/*f*/.create({
            scrollView: {
                backgroundColor: StyleSheet/*g*/.backgroundColor
            }
        });
    module/*i*/.exports = D
});