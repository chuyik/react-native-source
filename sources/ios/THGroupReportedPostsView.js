__d("THGroupReportedPostsView",["GraphQLConnectionView","NativeModules","React","ReactGraphQL","Dimensions","NativeModules","StyleSheet","THColors","THReportedPostUnitView","TimerMixin","View","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLConnectionView"),
        a = require/*t*/("NativeModules"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("Dimensions"),
        c = require/*t*/("NativeModules").RKTreehouseManager,
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("THColors"),
        h = require/*t*/("THReportedPostUnitView"),
        f = require/*t*/("TimerMixin"),
        m = require/*t*/("View"),
        g = require/*t*/("merge"),
        c = a.RKTreehouseManager,
        _ = s.createClass({
            displayName: "THGroupReportedPostsView",
            mixins: [l.Mixin, f],
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
                        }(h.getQuery("group"), requireDynamic/*n*/.count, h.getQuery("story"), o.getQuery("connection"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    numberOfStoriesModified: 0
                }
            },
            componentDidMount: function() {
                c && c.groupViewComponentDidUpdate && this.requestAnimationFrame(function() {
                    return this.isMounted() && c.groupViewComponentDidUpdate(this.props.group.id)
                }.bind(this))
            },
            componentDidUpdate: function() {
                this.updateNativeProperties()
            },
            updateNativeProperties: function() {
                console.log(this.props.propertyToUpdate), c && this.props.group && this.props.group.group_reported_stories && c.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.group_reported_stories.count - this.state.numberOfStoriesModified)
            },
            nodeViewFactory: function(global/*e*/) {
                return s.createElement(m, {
                    style: y.cell
                }, s.createElement(m, {
                    style: y.graySeparator
                }), s.createElement(m, {
                    style: y.divider
                }), s.createElement(h, {
                    group: this.props.group,
                    story: global/*e*/,
                    propertyToUpdate: this.props.propertyToUpdate,
                    navigator: {},
                    context: g(this.props.context, {
                        isEdgeStory: !!global/*e*/.attached_story
                    }),
                    updateChangedCount: this.updateChangedCount
                }), s.createElement(m, {
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
                return s.createElement(o, {
                    style: y.tableView,
                    nodeViewFactory: this.nodeViewFactory,
                    connection: global/*e*/,
                    navigator: {},
                    onUpdateQueryCount: this.updateQueryCount
                })
            }
        }),
        y = p.create({
            divider: {
                height: .5,
                backgroundColor: d.borderColor
            },
            graySeparator: {
                height: 5,
                backgroundColor: d.backgroundWash
            },
            tableView: {
                backgroundColor: d.backgroundWash,
                height: u.get("window").height,
                width: u.get("window").width
            },
            cell: {
                backgroundColor: "white"
            }
        });
    module/*i*/.exports = _
});