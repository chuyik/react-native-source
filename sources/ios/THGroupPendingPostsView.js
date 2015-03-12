__d("THGroupPendingPostsView",["GraphQLConnectionView","NativeModules","React","ReactGraphQL","Dimensions","NativeModules","StyleSheet","THColors","THPendingPostUnitView","TimerMixin","View","merge"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLConnectionView/*o*/ = t("GraphQLConnectionView"),
        NativeModules/*a*/ = t("NativeModules"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        Dimensions/*u*/ = t("Dimensions"),
        NativeModules/*c*/ = t("NativeModules").RKTreehouseManager,
        StyleSheet/*p*/ = t("StyleSheet"),
        THColors/*d*/ = t("THColors"),
        THPendingPostUnitView/*h*/ = t("THPendingPostUnitView"),
        TimerMixin/*f*/ = t("TimerMixin"),
        View/*m*/ = t("View"),
        merge/*g*/ = t("merge"),
        NativeModules/*c*/ = NativeModules/*a*/.RKTreehouseManager,
        _ = React/*s*/.createClass({
            displayName: "THGroupPendingPostsView",
            mixins: [ReactGraphQL/*l*/.Mixin, TimerMixin/*f*/],
            statics: {
                queryParams: {
                    count: 5
                },
                queries: {
                    group: function(e, t, n) {
                        return function(e, n, r, i) {
                            var GraphQLConnectionView/*o*/ = t.__GraphQL;
                            return new GraphQLConnectionView/*o*/.QueryFragment("THGroupPendingPostsView_group", "Group", [new GraphQLConnectionView/*o*/.Field("id"), new GraphQLConnectionView/*o*/.Field("group_pending_stories", [new GraphQLConnectionView/*o*/.Field("count"), new GraphQLConnectionView/*o*/.Field("edges", [new GraphQLConnectionView/*o*/.Field("node", [new GraphQLConnectionView/*o*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [t.__frag(r)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new GraphQLConnectionView/*o*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THGroupPendingPostsView_group_1"
                            }), new GraphQLConnectionView/*o*/.Field("page_info", [new GraphQLConnectionView/*o*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new GraphQLConnectionView/*o*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(i)], [new GraphQLConnectionView/*o*/.Callv("first", [t.__var(n)])], null, null, {
                                connection: !0
                            })], [t.__frag(e)], {
                                scope: "THGroupPendingPostsView_group"
                            })
                        }(THPendingPostUnitView/*h*/.getQuery("group"), n.count, THPendingPostUnitView/*h*/.getQuery("story"), GraphQLConnectionView/*o*/.getQuery("connection"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    numberOfStoriesModified: 0
                }
            },
            componentDidMount: function() {
                NativeModules/*c*/ && NativeModules/*c*/.groupViewComponentDidUpdate && this.requestAnimationFrame(function() {
                    return this.isMounted() && NativeModules/*c*/.groupViewComponentDidUpdate(this.props.group.id)
                }.bind(this))
            },
            componentDidUpdate: function() {
                this.updateNativeProperties()
            },
            updateNativeProperties: function() {
                NativeModules/*c*/ && this.props.group && this.props.group.group_pending_stories && NativeModules/*c*/.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.group_pending_stories.count - this.state.numberOfStoriesModified)
            },
            nodeViewFactory: function(e) {
                return React/*s*/.createElement(View/*m*/, {
                    style: y.cell
                }, React/*s*/.createElement(View/*m*/, {
                    style: y.graySeparator
                }), React/*s*/.createElement(View/*m*/, {
                    style: y.divider
                }), React/*s*/.createElement(THPendingPostUnitView/*h*/, {
                    group: this.props.group,
                    story: e,
                    propertyToUpdate: this.props.propertyToUpdate,
                    navigator: {},
                    context: merge/*g*/(this.props.context, {
                        isEdgeStory: !!e.attached_story
                    }),
                    updateChangedCount: this.updateChangedCount
                }), React/*s*/.createElement(View/*m*/, {
                    style: y.divider
                }))
            },
            updateQueryCount: function(e) {
                this.setQueryParams({
                    count: e
                })
            },
            updateChangedCount: function(e) {
                this.setState({
                    numberOfStoriesModified: this.state.numberOfStoriesModified + e
                })
            },
            render: function() {
                var e = this.props.group && this.props.group.group_pending_stories || {};
                return React/*s*/.createElement(GraphQLConnectionView/*o*/, {
                    style: y.tableView,
                    nodeViewFactory: this.nodeViewFactory,
                    connection: e,
                    navigator: {},
                    onUpdateQueryCount: this.updateQueryCount
                })
            }
        }),
        y = StyleSheet/*p*/.create({
            divider: {
                height: .5,
                backgroundColor: THColors/*d*/.borderColor
            },
            graySeparator: {
                height: 5,
                backgroundColor: THColors/*d*/.backgroundWash
            },
            tableView: {
                backgroundColor: THColors/*d*/.backgroundWash,
                height: Dimensions/*u*/.get("window").height,
                width: Dimensions/*u*/.get("window").width
            },
            cell: {
                backgroundColor: "white"
            }
        });
    i.exports = _
});