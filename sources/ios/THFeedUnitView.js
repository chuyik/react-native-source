__d("THFeedUnitView",["FBSpinner","React","ReactGraphQL","Dimensions","RouteHandler","FBStoryMenu","NativeModules","StyleSheet","Text","THColors","THFeedbackView","THStoryView","TouchableWithoutFeedback","View","fbt","merge"],function (e, t, n, r, i) {
    "use strict";
    var FBSpinner/*o*/ = t("FBSpinner"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        Dimensions/*l*/ = t("Dimensions"),
        RouteHandler/*u*/ = t("RouteHandler"),
        FBStoryMenu/*c*/ = t("FBStoryMenu"),
        NativeModules/*p*/ = t("NativeModules").RKTreehouseManager,
        StyleSheet/*d*/ = t("StyleSheet"),
        Text/*h*/ = t("Text"),
        THColors/*f*/ = t("THColors"),
        THFeedbackView/*m*/ = t("THFeedbackView"),
        THStoryView/*g*/ = t("THStoryView"),
        TouchableWithoutFeedback/*_*/ = t("TouchableWithoutFeedback"),
        View/*y*/ = t("View"),
        fbt/*v*/ = t("fbt"),
        merge/*S*/ = t("merge"),
        b = "story_container",
        R = "treehouse_group_mall",
        w = React/*a*/.createClass({
            displayName: "THFeedUnitView",
            propTypes: {
                story: React/*a*/.PropTypes.object.isRequired,
                navigator: React/*a*/.PropTypes.object,
                canCommentInline: React/*a*/.PropTypes.bool,
                onStoryDeleted: React/*a*/.PropTypes.func,
                onPinUnpinStory: React/*a*/.PropTypes.func,
                viewContext: React/*a*/.PropTypes.string
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    story: function(e, t) {
                        return function(e, n, r, i, FBSpinner/*o*/, React/*a*/) {
                            var ReactGraphQL/*s*/ = t.__GraphQL;
                            return new ReactGraphQL/*s*/.QueryFragment("THFeedUnitView_story", "Story", [new ReactGraphQL/*s*/.Field("id"), new ReactGraphQL/*s*/.Field("attached_story", [new ReactGraphQL/*s*/.Field("__type__", [new ReactGraphQL/*s*/.Field("name"), new ReactGraphQL/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new ReactGraphQL/*s*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new ReactGraphQL/*s*/.Field("feedback", [new ReactGraphQL/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(r)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [t.__frag(n)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new ReactGraphQL/*s*/.Field("feedback", [new ReactGraphQL/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(i)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [t.__frag(e), t.__frag(FBSpinner/*o*/), t.__frag(React/*a*/)], {
                                scope: "THFeedUnitView_story"
                            })
                        }(THStoryView/*g*/.getQuery("story"), THStoryView/*g*/.getQuery("story"), THFeedbackView/*m*/.getQuery("feedback"), THFeedbackView/*m*/.getQuery("feedback"), FBStoryMenu/*c*/.getQuery("story"), THFeedbackView/*m*/.getQuery("story"))
                    },
                    group: function(e, t) {
                        return function(e, n, r) {
                            var i = t.__GraphQL;
                            return new i.QueryFragment("THFeedUnitView_group", "Group", [new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e), t.__frag(n), t.__frag(r)], {
                                scope: "THFeedUnitView_group"
                            })
                        }(FBStoryMenu/*c*/.getQuery("group"), THFeedbackView/*m*/.getQuery("group"), THStoryView/*g*/.getQuery("group"))
                    },
                    viewer: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THFeedUnitView_viewer", "Viewer", null, [t.__frag(e)], {
                                scope: "THFeedUnitView_viewer"
                            })
                        }(FBStoryMenu/*c*/.getQuery("viewer"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    isStoryReported: !1
                }
            },
            getFeedUnitHandle: function() {
                return this.refs[b].getNodeHandle()
            },
            getFeedback: function(e) {
                return e.feedback ? React/*a*/.createElement(THFeedbackView/*m*/, {
                    canCommentInline: this.props.canCommentInline,
                    story: e,
                    feedback: e.feedback,
                    onInputRequested: this.props.onInputRequested,
                    getFeedUnitHandle: this.getFeedUnitHandle,
                    group: this.props.group,
                    viewContext: this.props.viewContext,
                    viewer: this.props.viewer
                }) : React/*a*/.createElement(View/*y*/, {
                    style: C.feedback
                })
            },
            getAttachedStory: function(e) {
                return e.attached_story ? React/*a*/.createElement(TouchableWithoutFeedback/*_*/, {
                    onPress: RouteHandler/*u*/.getCallback({
                        typeList: [e.attached_story.__type__.name],
                        params: {
                            id: e.attached_story.id
                        }
                    })
                }, React/*a*/.createElement(View/*y*/, {
                    style: C.attachedStory
                }, React/*a*/.createElement(THStoryView/*g*/, {
                    story: e.attached_story,
                    navigator: this.props.navigator,
                    context: merge/*S*/(this.props.context, {
                        isSubStory: !0
                    }),
                    group: this.props.group
                }))) : null
            },
            editStory: function() {
                NativeModules/*p*/.editPost(this.props.story.id)
            },
            getStoryMenu: function() {
                var e = this.props.mock_story || this.props.story;
                return e ? React/*a*/.createElement(View/*y*/, {
                    pointerEvents: View/*y*/.pointerEvents.boxNone,
                    style: C.menuContainer
                }, React/*a*/.createElement(FBStoryMenu/*c*/, {
                    group: this.props.group,
                    onStoryDeleted: this.props.onStoryDeleted,
                    onStoryReported: function() {
                        this.setState({
                            isStoryReported: !0
                        })
                    }.bind(this),
                    story: e,
                    viewer: this.props.viewer,
                    editPostCallback: this.editStory,
                    pinPostSource: R,
                    onPinUnpinStory: this.props.onPinUnpinStory
                })) : null
            },
            render: function() {
                var e = this.props.mock_story || this.props.story;
                return e ? this.state.isStoryReported ? React/*a*/.createElement(View/*y*/, {
                    ref: b
                }, React/*a*/.createElement(View/*y*/, {
                    style: C.reportedWrapper
                }, React/*a*/.createElement(Text/*h*/, {
                    style: C.reportedText
                }, fbt/*v*/({
                    type: "text",
                    texts: ["Thanks for letting us know"],
                    desc: "message thanking user for reporting story content"
                })))) : React/*a*/.createElement(View/*y*/, {
                    ref: b,
                    style: C.unitContainer
                }, React/*a*/.createElement(View/*y*/, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, React/*a*/.createElement(THStoryView/*g*/, {
                    story: e,
                    navigator: this.props.navigator,
                    context: merge/*S*/(this.props.context, {
                        isEdgeStory: !!e.attached_story
                    }),
                    group: this.props.group,
                    viewContext: this.props.viewContext
                }), this.getAttachedStory(e)), React/*a*/.createElement(View/*y*/, null, this.getFeedback(e)), this.getStoryMenu()) : React/*a*/.createElement(View/*y*/, {
                    ref: b
                }, React/*a*/.createElement(View/*y*/, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, React/*a*/.createElement(View/*y*/, {
                    style: C.spinner
                }, React/*a*/.createElement(FBSpinner/*o*/, null))))
            }
        }),
        C = StyleSheet/*d*/.create({
            attachedStory: {
                overflow: "hidden",
                padding: 10,
                borderColor: THColors/*f*/.divider,
                borderWidth: 1,
                borderRadius: 3,
                marginTop: 10
            },
            borderStyle: {
                backgroundColor: THColors/*f*/.divider,
                height: .5
            },
            contentWrapper: {
                overflow: "hidden",
                paddingRight: 16
            },
            feedback: {
                marginTop: 14
            },
            menuContainer: {
                position: "absolute",
                backgroundColor: "transparent",
                top: 0,
                left: Dimensions/*l*/.get("window").width - 38,
                paddingTop: 14,
                paddingRight: 6
            },
            reportedText: {
                color: THColors/*f*/.reportedText
            },
            reportedWrapper: {
                paddingHorizontal: 16,
                paddingVertical: 10
            },
            spinner: {
                height: 200,
                justifyContent: "center",
                alignItems: "center"
            },
            storyWrapper: {
                paddingLeft: 16,
                paddingTop: 20
            },
            unitContainer: {
                backgroundColor: THColors/*f*/.backgroundColor
            }
        });
    i.exports = w
});