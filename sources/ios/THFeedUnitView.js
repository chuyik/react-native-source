__d("THFeedUnitView",["FBSpinner","React","ReactGraphQL","Dimensions","RouteHandler","FBStoryMenu","NativeModules","StyleSheet","Text","THColors","THFeedbackView","THStoryView","TouchableWithoutFeedback","View","fbt","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBSpinner"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactGraphQL"),
        l = require/*t*/("Dimensions"),
        u = require/*t*/("RouteHandler"),
        c = require/*t*/("FBStoryMenu"),
        p = require/*t*/("NativeModules").RKTreehouseManager,
        d = require/*t*/("StyleSheet"),
        h = require/*t*/("Text"),
        f = require/*t*/("THColors"),
        m = require/*t*/("THFeedbackView"),
        g = require/*t*/("THStoryView"),
        _ = require/*t*/("TouchableWithoutFeedback"),
        y = require/*t*/("View"),
        v = require/*t*/("fbt"),
        S = require/*t*/("merge"),
        b = "story_container",
        R = "treehouse_group_mall",
        w = a.createClass({
            displayName: "THFeedUnitView",
            propTypes: {
                story: a.PropTypes.object.isRequired,
                navigator: a.PropTypes.object,
                canCommentInline: a.PropTypes.bool,
                onStoryDeleted: a.PropTypes.func,
                onPinUnpinStory: a.PropTypes.func,
                viewContext: a.PropTypes.string
            },
            mixins: [s.Mixin],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
                            var s = require/*t*/.__GraphQL;
                            return new s.QueryFragment("THFeedUnitView_story", "Story", [new s.Field("id"), new s.Field("attached_story", [new s.Field("__type__", [new s.Field("name"), new s.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new s.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new s.Field("feedback", [new s.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new s.Field("feedback", [new s.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(module/*i*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(o), require/*t*/.__frag(a)], {
                                scope: "THFeedUnitView_story"
                            })
                        }(g.getQuery("story"), g.getQuery("story"), m.getQuery("feedback"), m.getQuery("feedback"), c.getQuery("story"), m.getQuery("story"))
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
                        }(c.getQuery("group"), m.getQuery("group"), g.getQuery("group"))
                    },
                    viewer: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THFeedUnitView_viewer", "Viewer", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "THFeedUnitView_viewer"
                            })
                        }(c.getQuery("viewer"))
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
                return global/*e*/.feedback ? a.createElement(m, {
                    canCommentInline: this.props.canCommentInline,
                    story: global/*e*/,
                    feedback: global/*e*/.feedback,
                    onInputRequested: this.props.onInputRequested,
                    getFeedUnitHandle: this.getFeedUnitHandle,
                    group: this.props.group,
                    viewContext: this.props.viewContext,
                    viewer: this.props.viewer
                }) : a.createElement(y, {
                    style: C.feedback
                })
            },
            getAttachedStory: function(global/*e*/) {
                return global/*e*/.attached_story ? a.createElement(_, {
                    onPress: u.getCallback({
                        typeList: [global/*e*/.attached_story.__type__.name],
                        params: {
                            id: global/*e*/.attached_story.id
                        }
                    })
                }, a.createElement(y, {
                    style: C.attachedStory
                }, a.createElement(g, {
                    story: global/*e*/.attached_story,
                    navigator: this.props.navigator,
                    context: S(this.props.context, {
                        isSubStory: !0
                    }),
                    group: this.props.group
                }))) : null
            },
            editStory: function() {
                p.editPost(this.props.story.id)
            },
            getStoryMenu: function() {
                var global/*e*/ = this.props.mock_story || this.props.story;
                return global/*e*/ ? a.createElement(y, {
                    pointerEvents: y.pointerEvents.boxNone,
                    style: C.menuContainer
                }, a.createElement(c, {
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
                return global/*e*/ ? this.state.isStoryReported ? a.createElement(y, {
                    ref: b
                }, a.createElement(y, {
                    style: C.reportedWrapper
                }, a.createElement(h, {
                    style: C.reportedText
                }, v({
                    type: "text",
                    texts: ["Thanks for letting us know"],
                    desc: "message thanking user for reporting story content"
                })))) : a.createElement(y, {
                    ref: b,
                    style: C.unitContainer
                }, a.createElement(y, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, a.createElement(g, {
                    story: global/*e*/,
                    navigator: this.props.navigator,
                    context: S(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    group: this.props.group,
                    viewContext: this.props.viewContext
                }), this.getAttachedStory(global/*e*/)), a.createElement(y, null, this.getFeedback(global/*e*/)), this.getStoryMenu()) : a.createElement(y, {
                    ref: b
                }, a.createElement(y, {
                    style: [C.storyWrapper, C.contentWrapper]
                }, a.createElement(y, {
                    style: C.spinner
                }, a.createElement(o, null))))
            }
        }),
        C = d.create({
            attachedStory: {
                overflow: "hidden",
                padding: 10,
                borderColor: f.divider,
                borderWidth: 1,
                borderRadius: 3,
                marginTop: 10
            },
            borderStyle: {
                backgroundColor: f.divider,
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
                left: l.get("window").width - 38,
                paddingTop: 14,
                paddingRight: 6
            },
            reportedText: {
                color: f.reportedText
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
                backgroundColor: f.backgroundColor
            }
        });
    module/*i*/.exports = w
});