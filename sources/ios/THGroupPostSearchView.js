__d("THGroupPostSearchView",["Dimensions","GraphQLConnectionView","React","ReactGraphQL","StyleSheet","THColors","THFeedUnitView","THGroupView","THViewConstants","View"],function (e, t, n, r, i) {
    "use strict";
    var Dimensions/*o*/ = t("Dimensions"),
        GraphQLConnectionView/*a*/ = t("GraphQLConnectionView"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        StyleSheet/*u*/ = t("StyleSheet"),
        THColors/*c*/ = t("THColors"),
        THFeedUnitView/*p*/ = t("THFeedUnitView"),
        THGroupView/*d*/ = t("THGroupView"),
        THViewConstants/*h*/ = t("THViewConstants"),
        View/*f*/ = t("View"),
        m = -65,
        g = React/*s*/.createClass({
            displayName: "THGroupPostSearchView",
            mixins: [ReactGraphQL/*l*/.Mixin],
            statics: {
                queryParams: {
                    count: 5
                },
                queries: {
                    postsQuery: function(e, t, n) {
                        return function(e, n, r) {
                            var i = t.__GraphQL;
                            return new i.QueryFragment("THGroupPostSearchView_postsQuery", "GraphSearchQuery", [new i.Field("results", [new i.Field("edges", [new i.Field("node", [new i.Field("id", null, null, null, null, null, {
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
                                edgesID: "THGroupPostSearchView_postsQuery_1"
                            }), new i.Field("page_info", [new i.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new i.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(r)], [new i.Callv("first", [t.__var(e)])], null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "THGroupPostSearchView_postsQuery"
                            })
                        }(n.count, THFeedUnitView/*p*/.getQuery("story"), GraphQLConnectionView/*a*/.getQuery("connection"))
                    },
                    viewer: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THGroupPostSearchView_viewer", "Viewer", [new e.Field("actor", [new e.Field("id", null, null, null, null, null, {
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
            nodeViewFactory: function(e, t) {
                return React/*s*/.createElement(View/*f*/, {
                    style: _.feedStory
                }, React/*s*/.createElement(THFeedUnitView/*p*/, {
                    story: e,
                    navigator: t,
                    viewContext: THViewConstants/*h*/.SEARCH
                }))
            },
            updateQueryCount: function(e) {
                this.setQueryParams({
                    count: e
                })
            },
            getLoadingView: function() {
                return React/*s*/.createElement(View/*f*/, {
                    style: _.parentView
                }, THGroupView/*d*/.getFakeStoryView())
            },
            render: function() {
                var e = this.props.postsQuery && this.props.postsQuery.results ? this.props.postsQuery.results : {};
                return React/*s*/.createElement(GraphQLConnectionView/*a*/, {
                    nodeViewFactory: this.nodeViewFactory,
                    connection: e,
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
        _ = StyleSheet/*u*/.create({
            feedStory: {
                marginBottom: 11
            },
            parentView: {
                backgroundColor: THColors/*c*/.backgroundColor,
                height: 200
            },
            stream: {
                backgroundColor: THColors/*c*/.backgroundWash,
                height: Dimensions/*o*/.get("window").height - 120,
                width: Dimensions/*o*/.get("window").width
            }
        });
    i.exports = g
});