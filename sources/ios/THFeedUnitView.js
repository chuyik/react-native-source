__d("THFeedUnitView",["FBSpinner","React","ReactGraphQL","Dimensions","RouteHandler","FBStoryMenu","NativeModules","StyleSheet","Text","THColors","THFeedbackView","THStoryView","TouchableWithoutFeedback","View","fbt","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBSpinner/*o*/ = require/*t*/("FBSpinner"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*l*/ = require/*t*/("Dimensions"),
        RouteHandler/*u*/ = require/*t*/("RouteHandler"),
        FBStoryMenu/*c*/ = require/*t*/("FBStoryMenu"),
        NativeModules/*p*/ = require/*t*/("NativeModules").RKTreehouseManager,
        StyleSheet/*d*/ = require/*t*/("StyleSheet"),
        Text/*h*/ = require/*t*/("Text"),
        THColors/*f*/ = require/*t*/("THColors"),
        THFeedbackView/*m*/ = require/*t*/("THFeedbackView"),
        THStoryView/*g*/ = require/*t*/("THStoryView"),
        TouchableWithoutFeedback/*_*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*y*/ = require/*t*/("View"),
        fbt/*v*/ = require/*t*/("fbt"),
        merge/*S*/ = require/*t*/("merge"),
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
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, FBSpinner/*o*/, React/*a*/) {
                            var ReactGraphQL/*s*/ = require/*t*/.__GraphQL;
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
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new ReactGraphQL/*s*/.Field("feedback", [new ReactGraphQL/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(FBSpinner/*o*/), require/*t*/.__frag(React/*a*/)], {
                                scope: "THFeedUnitView_story"
                            })
                        }(THStoryView/*g*/.getQuery("story"), THStoryView/*g*/.getQuery("story"), THFeedbackView/*m*/.getQuery("feedback"), THFeedbackView/*m*/.getQuery("feedback"), FBStoryMenu/*c*/.getQuery("story"), THFeedbackView/*m*/.getQuery("story"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("THFeedUnitView_group", "Group", [new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "THFeedUnitView_group"
                            })
                        }(FBStoryMenu/*c*/.getQuery("group"), THFeedbackView/*m*/.getQuery("group"), THStoryView/*g*/.getQuery("group"))
                    },
                    viewer: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THFeedUnitView_viewer", "Viewer", null, [require/*t*/.__frag(global/*e*/)], {
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
            getFeedback: function(global/*e*/) {
                return global/*e*/.feedback ? React/*a*/.createElement(THFeedbackView/*m*/, {
                    canCommentInline: this.props.canCommentInline,
                    story: global/*e*/,
                    feedback: global/*e*/.feedback,
                    onInputRequested: this.props.onInputRequested,
                    getFeedUnitHandle: this.getFeedUnitHandle,
                    group: this.props.group,
                    viewContext: this.props.viewContext,
                    viewer: this.props.viewer
                }) : React/*a*/.createElement(View/*y*/, {
                    style: C.feedback
                })
            },
            getAttachedStory: function(global/*e*/) {
                return global/*e*/.attached_story ? React/*a*/.createElement(TouchableWithoutFeedback/*_*/, {
                    onPress: RouteHandler/*u*/.getCallback({
                        typeList: [global/*e*/.attached_story.__type__.name],
                        params: {
                            id: global/*e*/.attached_story.id
                        }
                    })
                }, React/*a*/.createElement(View/*y*/, {
                    style: C.attachedStory
                }, React/*a*/.createElement(THStoryView/*g*/, {
                    story: global/*e*/.attached_story,
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
                var global/*e*/ = this.props.mock_story || this.props.story;
                return global/*e*/ ? React/*a*/.createElement(View/*y*/, {
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
                    story: global/*e*/,
                    viewer: this.props.viewer,
                    editPostCallback: this.editStory,
                    pinPostSource: R,
                    onPinUnpinStory: this.props.onPinUnpinStory
                })) : null
            },
            render: function() {
                var global/*e*/ = this.props.mock_story || this.props.story;
                return global/*e*/ ? this.state.isStoryReported ? React/*a*/.createElement(View/*y*/, {
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
                    story: global/*e*/,
                    navigator: this.props.navigator,
                    context: merge/*S*/(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    group: this.props.group,
                    viewContext: this.props.viewContext
                }), this.getAttachedStory(global/*e*/)), React/*a*/.createElement(View/*y*/, null, this.getFeedback(global/*e*/)), this.getStoryMenu()) : React/*a*/.createElement(View/*y*/, {
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
    module/*i*/.exports = w
});