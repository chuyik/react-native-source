__d("THFeedUnitView",["FBSpinner","React","ReactGraphQL","Dimensions","RouteHandler","FBStoryMenu","NativeModules","StyleSheet","Text","THColors","THFeedbackView","THStoryView","TouchableWithoutFeedback","View","fbt","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBSpinner"),
        exports/*a*/ = require/*t*/("React"),
        FBSpinner/*s*/ = require/*t*/("ReactGraphQL"),
        React/*l*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*u*/ = require/*t*/("RouteHandler"),
        Dimensions/*c*/ = require/*t*/("FBStoryMenu"),
        RouteHandler/*p*/ = require/*t*/("NativeModules").RKTreehouseManager,
        FBStoryMenu/*d*/ = require/*t*/("StyleSheet"),
        NativeModules/*h*/ = require/*t*/("Text"),
        StyleSheet/*f*/ = require/*t*/("THColors"),
        Text/*m*/ = require/*t*/("THFeedbackView"),
        THColors/*g*/ = require/*t*/("THStoryView"),
        THFeedbackView/*_*/ = require/*t*/("TouchableWithoutFeedback"),
        THStoryView/*y*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*v*/ = require/*t*/("fbt"),
        View/*S*/ = require/*t*/("merge"),
        fbt/*b*/ = "story_container",
        merge/*R*/ = "treehouse_group_mall",
        w = exports/*a*/.createClass({
            displayName: "THFeedUnitView",
            propTypes: {
                story: exports/*a*/.PropTypes.object.isRequired,
                navigator: exports/*a*/.PropTypes.object,
                canCommentInline: exports/*a*/.PropTypes.bool,
                onStoryDeleted: exports/*a*/.PropTypes.func,
                onPinUnpinStory: exports/*a*/.PropTypes.func,
                viewContext: exports/*a*/.PropTypes.string
            },
            mixins: [FBSpinner/*s*/.Mixin],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, exports/*a*/) {
                            var FBSpinner/*s*/ = require/*t*/.__GraphQL;
                            return new FBSpinner/*s*/.QueryFragment("THFeedUnitView_story", "Story", [new FBSpinner/*s*/.Field("id"), new FBSpinner/*s*/.Field("attached_story", [new FBSpinner/*s*/.Field("__type__", [new FBSpinner/*s*/.Field("name"), new FBSpinner/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FBSpinner/*s*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new FBSpinner/*s*/.Field("feedback", [new FBSpinner/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FBSpinner/*s*/.Field("feedback", [new FBSpinner/*s*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(o), require/*t*/.__frag(exports/*a*/)], {
                                scope: "THFeedUnitView_story"
                            })
                        }(THColors/*g*/.getQuery("story"), THColors/*g*/.getQuery("story"), Text/*m*/.getQuery("feedback"), Text/*m*/.getQuery("feedback"), Dimensions/*c*/.getQuery("story"), Text/*m*/.getQuery("story"))
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
                        }(Dimensions/*c*/.getQuery("group"), Text/*m*/.getQuery("group"), THColors/*g*/.getQuery("group"))
                    },
                    viewer: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THFeedUnitView_viewer", "Viewer", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "THFeedUnitView_viewer"
                            })
                        }(Dimensions/*c*/.getQuery("viewer"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    isStoryReported: !1
                }
            },
            getFeedUnitHandle: function() {
                return this.refs[fbt/*b*/].getNodeHandle()
            },
            getFeedback: function(global/*e*/) {
                return global/*e*/.feedback ? exports/*a*/.createElement(Text/*m*/, {
                    canCommentInline: this.props.canCommentInline,
                    story: global/*e*/,
                    feedback: global/*e*/.feedback,
                    onInputRequested: this.props.onInputRequested,
                    getFeedUnitHandle: this.getFeedUnitHandle,
                    group: this.props.group,
                    viewContext: this.props.viewContext,
                    viewer: this.props.viewer
                }) : exports/*a*/.createElement(THStoryView/*y*/, {
                    style: C.feedback
                })
            },
            getAttachedStory: function(global/*e*/) {
                return global/*e*/.attached_story ? exports/*a*/.createElement(THFeedbackView/*_*/, {
                    onPress: ReactGraphQL/*u*/.getCallback({
                        typeList: [global/*e*/.attached_story.__type__.name],
                        params: {
                            id: global/*e*/.attached_story.id
                        }
                    })
                }, exports/*a*/.createElement(THStoryView/*y*/, {
                    style: C.attachedStory
                }, exports/*a*/.createElement(THColors/*g*/, {
                    story: global/*e*/.attached_story,
                    navigator: this.props.navigator,
                    context: View/*S*/(this.props.context, {
                        isSubStory: !0
                    }),
                    group: this.props.group
                }))) : null
            },
            editStory: function() {
                RouteHandler/*p*/.editPost(this.props.story.id)
            },
            getStoryMenu: function() {
                var global/*e*/ = this.props.mock_story || this.props.story;
                return global/*e*/ ? exports/*a*/.createElement(THStoryView/*y*/, {
                    pointerEvents: THStoryView/*y*/.pointerEvents.boxNone,
                    style: C.menuContainer
                }, exports/*a*/.createElement(Dimensions/*c*/, {
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
                    pinPostSource: merge/*R*/,
                    onPinUnpinStory: this.props.onPinUnpinStory
                })) : null
            },
            render: function() {
                var global/*e*/ = this.props.mock_story || this.props.story;
                return global/*e*/ ? this.state.isStoryReported ? exports/*a*/.createElement(THStoryView/*y*/, {
                    ref: fbt/*b*/
                }, exports/*a*/.createElement(THStoryView/*y*/, {
                    style: C.reportedWrapper
                }, exports/*a*/.createElement(NativeModules/*h*/, {
                    style: C.reportedText
                }, TouchableWithoutFeedback/*v*/({
                    type: "text",
                    texts: ["Thanks for letting us know"],
                    desc: "message thanking user for reporting story content"
                })))) : exports/*a*/.createElement(THStoryView/*y*/, {
                    ref: fbt/*b*/,
                    style: C.unitContainer
                }, exports/*a*/.createElement(THStoryView/*y*/, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, exports/*a*/.createElement(THColors/*g*/, {
                    story: global/*e*/,
                    navigator: this.props.navigator,
                    context: View/*S*/(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    group: this.props.group,
                    viewContext: this.props.viewContext
                }), this.getAttachedStory(global/*e*/)), exports/*a*/.createElement(THStoryView/*y*/, null, this.getFeedback(global/*e*/)), this.getStoryMenu()) : exports/*a*/.createElement(THStoryView/*y*/, {
                    ref: fbt/*b*/
                }, exports/*a*/.createElement(THStoryView/*y*/, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, exports/*a*/.createElement(THStoryView/*y*/, {
                    style: C.spinner
                }, exports/*a*/.createElement(o, null))))
            }
        }),
        C = FBStoryMenu/*d*/.create({
            attachedStory: {
                overflow: "hidden",
                padding: 10,
                borderColor: StyleSheet/*f*/.divider,
                borderWidth: 1,
                borderRadius: 3,
                marginTop: 10
            },
            borderStyle: {
                backgroundColor: StyleSheet/*f*/.divider,
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
                left: React/*l*/.get("window").width - 38,
                paddingTop: 14,
                paddingRight: 6
            },
            reportedText: {
                color: StyleSheet/*f*/.reportedText
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
                backgroundColor: StyleSheet/*f*/.backgroundColor
            }
        });
    module/*i*/.exports = w
});