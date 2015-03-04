__d("THGroupReportedPostsView",["GraphQLConnectionView","NativeModules","React","ReactGraphQL","Dimensions","NativeModules","StyleSheet","THColors","THReportedPostUnitView","TimerMixin","View","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLConnectionView/*o*/ = require/*t*/("GraphQLConnectionView"),
        NativeModules/*a*/ = require/*t*/("NativeModules"),
        React/*s*/ = require/*t*/("React"),
        ReactGraphQL/*l*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*u*/ = require/*t*/("Dimensions"),
        NativeModules/*c*/ = require/*t*/("NativeModules").RKTreehouseManager,
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        THColors/*d*/ = require/*t*/("THColors"),
        THReportedPostUnitView/*h*/ = require/*t*/("THReportedPostUnitView"),
        TimerMixin/*f*/ = require/*t*/("TimerMixin"),
        View/*m*/ = require/*t*/("View"),
        merge/*g*/ = require/*t*/("merge"),
        NativeModules/*c*/ = NativeModules/*a*/.RKTreehouseManager,
        _ = React/*s*/.createClass({
            displayName: "THGroupReportedPostsView",
            mixins: [ReactGraphQL/*l*/.Mixin, TimerMixin/*f*/],
            statics: {
                queryParams: {
                    count: 5
                },
                queries: {
                    group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var GraphQLConnectionView/*o*/ = require/*t*/.__GraphQL;
                            return new GraphQLConnectionView/*o*/.QueryFragment("THGroupReportedPostsView_group", "Group", [new GraphQLConnectionView/*o*/.Field("id"), new GraphQLConnectionView/*o*/.Field("group_reported_stories", [new GraphQLConnectionView/*o*/.Field("count"), new GraphQLConnectionView/*o*/.Field("edges", [new GraphQLConnectionView/*o*/.Field("node", [new GraphQLConnectionView/*o*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new GraphQLConnectionView/*o*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "THGroupReportedPostsView_group_1"
                            }), new GraphQLConnectionView/*o*/.Field("page_info", [new GraphQLConnectionView/*o*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new GraphQLConnectionView/*o*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(module/*i*/)], [new GraphQLConnectionView/*o*/.Callv("first", [require/*t*/.__var(requireDynamic/*n*/)])], null, null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THGroupReportedPostsView_group"
                            })
                        }(THReportedPostUnitView/*h*/.getQuery("group"), requireDynamic/*n*/.count, THReportedPostUnitView/*h*/.getQuery("story"), GraphQLConnectionView/*o*/.getQuery("connection"))
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
                console.log(this.props.propertyToUpdate), NativeModules/*c*/ && this.props.group && this.props.group.group_reported_stories && NativeModules/*c*/.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.group_reported_stories.count - this.state.numberOfStoriesModified)
            },
            nodeViewFactory: function(global/*e*/) {
                return React/*s*/.createElement(View/*m*/, {
                    style: y.cell
                }, React/*s*/.createElement(View/*m*/, {
                    style: y.graySeparator
                }), React/*s*/.createElement(View/*m*/, {
                    style: y.divider
                }), React/*s*/.createElement(THReportedPostUnitView/*h*/, {
                    group: this.props.group,
                    story: global/*e*/,
                    propertyToUpdate: this.props.propertyToUpdate,
                    navigator: {},
                    context: merge/*g*/(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    updateChangedCount: this.updateChangedCount
                }), React/*s*/.createElement(View/*m*/, {
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
                return React/*s*/.createElement(GraphQLConnectionView/*o*/, {
                    style: y.tableView,
                    nodeViewFactory: this.nodeViewFactory,
                    connection: global/*e*/,
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
    module/*i*/.exports = _
});