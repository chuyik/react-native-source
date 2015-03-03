__d("THGroupPostSearchView",["Dimensions","GraphQLConnectionView","React","ReactGraphQL","StyleSheet","THColors","THFeedUnitView","THGroupView","THViewConstants","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Dimensions"),
        a = require/*t*/("GraphQLConnectionView"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("StyleSheet"),
        c = require/*t*/("THColors"),
        p = require/*t*/("THFeedUnitView"),
        d = require/*t*/("THGroupView"),
        h = require/*t*/("THViewConstants"),
        f = require/*t*/("View"),
        m = -65,
        g = s.createClass({
            displayName: "THGroupPostSearchView",
            mixins: [l.Mixin],
            statics: {
                queryParams: {
                    count: 5
                },
                queries: {
                    postsQuery: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("THGroupPostSearchView_postsQuery", "GraphSearchQuery", [new module/*i*/.Field("results", [new module/*i*/.Field("edges", [new module/*i*/.Field("node", [new module/*i*/.Field("id", null, null, null, null, null, {
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
                                edgesID: "THGroupPostSearchView_postsQuery_1"
                            }), new module/*i*/.Field("page_info", [new module/*i*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new module/*i*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], [new module/*i*/.Callv("first", [require/*t*/.__var(global/*e*/)])], null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "THGroupPostSearchView_postsQuery"
                            })
                        }(requireDynamic/*n*/.count, p.getQuery("story"), a.getQuery("connection"))
                    },
                    viewer: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THGroupPostSearchView_viewer", "Viewer", [new global/*e*/.Field("actor", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "THGroupPostSearchView_viewer"
                            })
                        }()
                    }
                }
            },
            nodeViewFactory: function(global/*e*/, require/*t*/) {
                return s.createElement(f, {
                    style: _.feedStory
                }, s.createElement(p, {
                    story: global/*e*/,
                    navigator: require/*t*/,
                    viewContext: h.SEARCH
                }))
            },
            updateQueryCount: function(global/*e*/) {
                this.setQueryParams({
                    count: global/*e*/
                })
            },
            getLoadingView: function() {
                return s.createElement(f, {
                    style: _.parentView
                }, d.getFakeStoryView())
            },
            render: function() {
                var global/*e*/ = this.props.postsQuery && this.props.postsQuery.results ? this.props.postsQuery.results : {};
                return s.createElement(a, {
                    nodeViewFactory: this.nodeViewFactory,
                    connection: global/*e*/,
                    navigator: {},
                    onUpdateQueryCount: this.updateQueryCount,
                    style: _.stream,
                    pageSize: 5,
                    contentInset: {
                        top: m
                    }
                })
            }
        }),
        _ = u.create({
            feedStory: {
                marginBottom: 11
            },
            parentView: {
                backgroundColor: c.backgroundColor,
                height: 200
            },
            stream: {
                backgroundColor: c.backgroundWash,
                height: o.get("window").height - 120,
                width: o.get("window").width
            }
        });
    module/*i*/.exports = g
});