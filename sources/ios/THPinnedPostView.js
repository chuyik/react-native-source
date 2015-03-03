__d("THPinnedPostView",["LayoutAnimation","React","ReactGraphQL","StyleSheet","Text","THAnimations","THFeedUnitView","TouchableHighlight","View","fbt","isEmpty"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactGraphQL"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("Text"),
        c = require/*t*/("THAnimations"),
        p = require/*t*/("THFeedUnitView"),
        d = require/*t*/("TouchableHighlight"),
        h = require/*t*/("View"),
        f = require/*t*/("fbt"),
        m = require/*t*/("isEmpty"),
        g = a.createClass({
            displayName: "THPinnedPostView",
            propTypes: {
                onDeletePinnedStory: a.PropTypes.func,
                onPinUnpinStory: a.PropTypes.func
            },
            mixins: [s.Mixin],
            statics: {
                queryParams: {
                    showPinnedPost: !1
                },
                queries: {
                    viewer: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THPinnedPostView_viewer", "Viewer", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPinnedPostView_viewer"
                            })
                        }(p.getQuery("viewer").if(requireDynamic/*n*/.showPinnedPost))
                    },
                    group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("THPinnedPostView_group", "Group", [new module/*i*/.Field("admin_aware_group", [new module/*i*/.Field("group_pinned_stories", [new module/*i*/.Field("count")], null, null, "pinned_story_unopened", null, {
                                connection: !0
                            }), new module/*i*/.Field("group_pinned_stories", [new module/*i*/.Field("count"), new module/*i*/.Field("edges", [new module/*i*/.Field("node", [new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new module/*i*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THPinnedPostView_group_1"
                            }), new module/*i*/.Field("page_info", [new module/*i*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new module/*i*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new module/*i*/.Callv("if", [require/*t*/.__var(global/*e*/)]), new module/*i*/.Callv("first", ["1"])], null, null, {
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
                            })], [require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "THPinnedPostView_group"
                            })
                        }(requireDynamic/*n*/.showPinnedPost, p.getQuery("story"), p.getQuery("group").if(requireDynamic/*n*/.showPinnedPost))
                    }
                }
            },
            openPinnedPost: function() {
                this.setQueryParams({
                    showPinnedPost: !0
                })
            },
            render: function() {
                if (this.props.group.admin_aware_group.pinned_story_unopened && 0 === this.props.group.admin_aware_group.pinned_story_unopened.count) return a.createElement(h, null);
                var global/*e*/ = this.props.group.admin_aware_group.group_pinned_stories;
                if (global/*e*/ && m(global/*e*/.edges)) return a.createElement(h, null);
                if (global/*e*/ && global/*e*/.edges && global/*e*/.edges[0] && global/*e*/.edges[0].node) {
                    var require/*t*/ = global/*e*/.edges[0].node;
                    return o.configureNext(c.layout.openPinnedPost), a.createElement(p, {
                        onInputRequested: this.props.onInputRequested,
                        story: require/*t*/,
                        group: this.props.group,
                        viewer: this.props.viewer,
                        navigator: this.props.navigator,
                        context: {
                            isGroupStream: !0
                        },
                        canCommentInline: !1,
                        onStoryDeleted: this.props.onDeletePinnedStory,
                        onPinUnpinStory: this.props.onPinUnpinStory
                    })
                }
                return a.createElement(d, {
                    style: _.wrapper,
                    onPress: this.openPinnedPost
                }, a.createElement(h, {
                    style: _.pinnedPostCell,
                    onPress: this.viewPinnedPost
                }, a.createElement(u, {
                    style: _.pinnedPostText
                }, f({
                    type: "text",
                    texts: ["Show Pinned Post"],
                    desc: "Button to see the pinned post of a group"
                }))))
            }
        }),
        _ = l.create({
            pinnedPostCell: {
                height: 44,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white"
            },
            pinnedPostText: {
                fontSize: 15,
                marginLeft: 16
            }
        });
    module/*i*/.exports = g
});