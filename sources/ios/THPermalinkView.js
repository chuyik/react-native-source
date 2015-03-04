__d("THPermalinkView",["CommentAddAction","DocumentContent","FeedbackPoller","POPAnimationMixin","React","ReactGraphQL","RCTNativeAppEventEmitter","NativeModules","ScrollView","StyleSheet","Subscribable","THColors","THFeedUnitView","THPermalinkInputBarView","THViewConstants","TimerMixin","View","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var CommentAddAction/*o*/ = require/*t*/("CommentAddAction"),
        DocumentContent/*a*/ = require/*t*/("DocumentContent"),
        FeedbackPoller/*s*/ = require/*t*/("FeedbackPoller"),
        POPAnimationMixin/*l*/ = require/*t*/("POPAnimationMixin"),
        React/*u*/ = require/*t*/("React"),
        ReactGraphQL/*c*/ = require/*t*/("ReactGraphQL"),
        RCTNativeAppEventEmitter/*p*/ = require/*t*/("RCTNativeAppEventEmitter"),
        NativeModules/*d*/ = require/*t*/("NativeModules").RKTreehouseManager,
        ScrollView/*h*/ = require/*t*/("ScrollView"),
        StyleSheet/*f*/ = require/*t*/("StyleSheet"),
        Subscribable/*m*/ = require/*t*/("Subscribable"),
        THColors/*g*/ = require/*t*/("THColors"),
        THFeedUnitView/*_*/ = require/*t*/("THFeedUnitView"),
        THPermalinkInputBarView/*y*/ = require/*t*/("THPermalinkInputBarView"),
        THViewConstants/*v*/ = require/*t*/("THViewConstants"),
        TimerMixin/*S*/ = require/*t*/("TimerMixin"),
        View/*b*/ = require/*t*/("View"),
        isEmpty/*R*/ = require/*t*/("isEmpty"),
        keyOf/*w*/ = require/*t*/("keyOf"),
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
                        }(E, THFeedUnitView/*_*/.getQuery("viewer"))
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
            enablePollerIfNeeded: function(global/*e*/) {
                var require/*t*/ = global/*e*/.viewer && global/*e*/.viewer.__configs__ && global/*e*/.viewer.__configs__.edges;
                if (require/*t*/) {
                    var requireDynamic/*n*/ = require/*t*/.filter(function(global/*e*/) {
                        return global/*e*/.node.name === E
                    });
                    isEmpty/*R*/(requireDynamic/*n*/) || FeedbackPoller/*s*/.enablePoller(requireDynamic/*n*/[0].node.enabled)
                }
            },
            onStoryDeleted: function() {
                NativeModules/*d*/ && NativeModules/*d*/.closeModalWindow()
            },
            reloadFeedViewForGroup: function(global/*e*/) {
                this.props.story.to && this.props.story.to.id === global/*e*/ && this.props.forceUpdate({})
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                require/*t*/ && require/*t*/.style_list && "photo" === require/*t*/.style_list[0] ? CommentAddAction/*o*/.handleAddPhotoComment(this.props.viewer.actor.id, this.props.story.feedback.id, global/*e*/, require/*t*/) : CommentAddAction/*o*/.handleAddComment(this.props.viewer.actor.id, this.props.story.feedback.id, global/*e*/, require/*t*/), this.setState({
                    dockParams: null
                })
            },
            handleCommentEditSubmit: function(global/*e*/) {
                this.state.commentEditSubmitCallback && this.state.commentEditSubmitCallback(global/*e*/), this.setState({
                    commentEditSubmitCallback: null,
                    commentEditAbortCallback: null,
                    initialText: new DocumentContent/*a*/,
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
                global/*e*/.isEditing ? this.handleCommentEditRequested(global/*e*/, require/*t*/, requireDynamic/*n*/) : this.refs[C].focusInput()
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
                if (!this.props.story) return React/*u*/.createElement(View/*b*/, null);
                var global/*e*/ = {
                        top: this.props.topInset,
                        bottom: this.props.bottomInset
                    },
                    require/*t*/ = this.props.story.to ? this.props.story.to.id : null,
                    requireDynamic/*n*/ = React/*u*/.createElement(THFeedUnitView/*_*/, {
                        onInputRequested: this.handleCommentInputRequested,
                        onStoryDeleted: this.onStoryDeleted,
                        story: this.props.story,
                        group: this.props.story.to,
                        viewer: this.props.viewer,
                        viewContext: THViewConstants/*v*/.PERMALINK
                    }),
                    requireLazy/*r*/ = React/*u*/.createElement(ScrollView/*h*/, {
                        automaticallyAdjustContentInsets: !0,
                        contentInset: global/*e*/,
                        contentOffset: {
                            THPermalinkInputBarView/*y*/: -global/*e*/.top
                        },
                        style: T.scrollView,
                        showsVerticalScrollIndicator: !0
                    }, requireDynamic/*n*/);
                return React/*u*/.createElement(THPermalinkInputBarView/*y*/, {
                    ref: C,
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
        T = StyleSheet/*f*/.create({
            scrollView: {
                backgroundColor: THColors/*g*/.backgroundColor
            }
        });
    module/*i*/.exports = D
});