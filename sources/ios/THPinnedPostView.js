__d("THPinnedPostView",["LayoutAnimation","React","ReactGraphQL","StyleSheet","Text","THAnimations","THFeedUnitView","TouchableHighlight","View","fbt","isEmpty"],function (e, t, n, r, i) {
    "use strict";
    var LayoutAnimation/*o*/ = t("LayoutAnimation"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        StyleSheet/*l*/ = t("StyleSheet"),
        Text/*u*/ = t("Text"),
        THAnimations/*c*/ = t("THAnimations"),
        THFeedUnitView/*p*/ = t("THFeedUnitView"),
        TouchableHighlight/*d*/ = t("TouchableHighlight"),
        View/*h*/ = t("View"),
        fbt/*f*/ = t("fbt"),
        isEmpty/*m*/ = t("isEmpty"),
        g = React/*a*/.createClass({
            displayName: "THPinnedPostView",
            propTypes: {
                onDeletePinnedStory: React/*a*/.PropTypes.func,
                onPinUnpinStory: React/*a*/.PropTypes.func
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queryParams: {
                    showPinnedPost: !1
                },
                queries: {
                    viewer: function(e, t, n) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THPinnedPostView_viewer", "Viewer", null, [t.__frag(e)], {
                                scope: "THPinnedPostView_viewer"
                            })
                        }(THFeedUnitView/*p*/.getQuery("viewer").if(n.showPinnedPost))
                    },
                    group: function(e, t, n) {
                        return function(e, n, r) {
                            var i = t.__GraphQL;
                            return new i.QueryFragment("THPinnedPostView_group", "Group", [new i.Field("admin_aware_group", [new i.Field("group_pinned_stories", [new i.Field("count")], null, null, "pinned_story_unopened", null, {
                                connection: !0
                            }), new i.Field("group_pinned_stories", [new i.Field("count"), new i.Field("edges", [new i.Field("node", [new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(n)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new i.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THPinnedPostView_group_1"
                            }), new i.Field("page_info", [new i.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new i.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new i.Callv("if", [t.__var(e)]), new i.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(r)], {
                                scope: "THPinnedPostView_group"
                            })
                        }(n.showPinnedPost, THFeedUnitView/*p*/.getQuery("story"), THFeedUnitView/*p*/.getQuery("group").if(n.showPinnedPost))
                    }
                }
            },
            openPinnedPost: function() {
                this.setQueryParams({
                    showPinnedPost: !0
                })
            },
            render: function() {
                if (this.props.group.admin_aware_group.pinned_story_unopened && 0 === this.props.group.admin_aware_group.pinned_story_unopened.count) return React/*a*/.createElement(View/*h*/, null);
                var e = this.props.group.admin_aware_group.group_pinned_stories;
                if (e && isEmpty/*m*/(e.edges)) return React/*a*/.createElement(View/*h*/, null);
                if (e && e.edges && e.edges[0] && e.edges[0].node) {
                    var t = e.edges[0].node;
                    return LayoutAnimation/*o*/.configureNext(THAnimations/*c*/.layout.openPinnedPost), React/*a*/.createElement(THFeedUnitView/*p*/, {
                        onInputRequested: this.props.onInputRequested,
                        story: t,
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
                return React/*a*/.createElement(TouchableHighlight/*d*/, {
                    style: _.wrapper,
                    onPress: this.openPinnedPost
                }, React/*a*/.createElement(View/*h*/, {
                    style: _.pinnedPostCell,
                    onPress: this.viewPinnedPost
                }, React/*a*/.createElement(Text/*u*/, {
                    style: _.pinnedPostText
                }, fbt/*f*/({
                    type: "text",
                    texts: ["Show Pinned Post"],
                    desc: "Button to see the pinned post of React/*a*/ group"
                }))))
            }
        }),
        _ = StyleSheet/*l*/.create({
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
    i.exports = g
});