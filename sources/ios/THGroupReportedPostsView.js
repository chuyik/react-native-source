__d("THGroupReportedPostsView",["GraphQLConnectionView","NativeModules","React","ReactGraphQL","Dimensions","NativeModules","StyleSheet","THColors","THReportedPostUnitView","TimerMixin","View","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLConnectionView"),
        exports/*a*/ = require/*t*/("NativeModules"),
        GraphQLConnectionView/*s*/ = require/*t*/("React"),
        NativeModules/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*View/*c*/*/ = require/*t*/("NativeModules").RKTreehouseManager,
        Dimensions/*p*/ = require/*t*/("StyleSheet"),
        NativeModules/*d*/ = require/*t*/("THColors"),
        StyleSheet/*h*/ = require/*t*/("THReportedPostUnitView"),
        THColors/*f*/ = require/*t*/("TimerMixin"),
        THReportedPostUnitView/*m*/ = require/*t*/("View"),
        TimerMixin/*g*/ = require/*t*/("merge"),
        ReactGraphQL/*View/*c*/*/ = exports/*a*/.RKTreehouseManager,
        merge/*_*/ = GraphQLConnectionView/*s*/.createClass({
            displayName: "THGroupReportedPostsView",
            mixins: [NativeModules/*l*/.Mixin, THColors/*f*/],
            statics: {
                queryParams: {
                    count: 5
                },
                queries: {
                    group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var o = require/*t*/.__GraphQL;
                            return new o.QueryFragment("THGroupReportedPostsView_group", "Group", [new o.Field("id"), new o.Field("group_reported_stories", [new o.Field("count"), new o.Field("edges", [new o.Field("node", [new o.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new o.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THGroupReportedPostsView_group_1"
                            }), new o.Field("page_info", [new o.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new o.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(module/*i*/)], [new o.Callv("first", [require/*t*/.__var(requireDynamic/*n*/)])], null, null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THGroupReportedPostsView_group"
                            })
                        }(StyleSheet/*h*/.getQuery("group"), requireDynamic/*n*/.count, StyleSheet/*h*/.getQuery("story"), o.getQuery("connection"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    numberOfStoriesModified: 0
                }
            },
            componentDidMount: function() {
                ReactGraphQL/*View/*c*/*/ && ReactGraphQL/*View/*c*/*/.groupViewComponentDidUpdate && this.requestAnimationFrame(function() {
                    return this.isMounted() && ReactGraphQL/*View/*c*/*/.groupViewComponentDidUpdate(this.props.group.id)
                }.bind(this))
            },
            componentDidUpdate: function() {
                this.updateNativeProperties()
            },
            updateNativeProperties: function() {
                console.log(this.props.propertyToUpdate), ReactGraphQL/*View/*c*/*/ && this.props.group && this.props.group.group_reported_stories && ReactGraphQL/*View/*c*/*/.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.group_reported_stories.count - this.state.numberOfStoriesModified)
            },
            nodeViewFactory: function(global/*e*/) {
                return GraphQLConnectionView/*s*/.createElement(THReportedPostUnitView/*m*/, {
                    style: y.cell
                }, GraphQLConnectionView/*s*/.createElement(THReportedPostUnitView/*m*/, {
                    style: y.graySeparator
                }), GraphQLConnectionView/*s*/.createElement(THReportedPostUnitView/*m*/, {
                    style: y.divider
                }), GraphQLConnectionView/*s*/.createElement(StyleSheet/*h*/, {
                    group: this.props.group,
                    story: global/*e*/,
                    propertyToUpdate: this.props.propertyToUpdate,
                    navigator: {},
                    context: TimerMixin/*g*/(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    updateChangedCount: this.updateChangedCount
                }), GraphQLConnectionView/*s*/.createElement(THReportedPostUnitView/*m*/, {
                    style: y.divider
                }))
            },
            updateQueryCount: function(global/*e*/) {
                this.setQueryParams({
                    count: global/*e*/
                })
            },
            updateChangedCount: function(global/*e*/) {
                this.setState({
                    numberOfStoriesModified: this.state.numberOfStoriesModified + global/*e*/
                })
            },
            render: function() {
                var global/*e*/ = this.props.group && this.props.group.group_reported_stories || {};
                return GraphQLConnectionView/*s*/.createElement(o, {
                    style: y.tableView,
                    nodeViewFactory: this.nodeViewFactory,
                    connection: global/*e*/,
                    navigator: {},
                    onUpdateQueryCount: this.updateQueryCount
                })
            }
        }),
        y = Dimensions/*p*/.create({
            divider: {
                height: .5,
                backgroundColor: NativeModules/*d*/.borderColor
            },
            graySeparator: {
                height: 5,
                backgroundColor: NativeModules/*d*/.backgroundWash
            },
            tableView: {
                backgroundColor: NativeModules/*d*/.backgroundWash,
                height: React/*u*/.get("window").height,
                width: React/*u*/.get("window").width
            },
            cell: {
                backgroundColor: "white"
            }
        });
    module/*i*/.exports = merge/*_*/
});