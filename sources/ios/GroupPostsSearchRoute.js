__d("GroupPostsSearchRoute",["DliteRoute"],function (e, t, n, r, i) {
    "use strict";
    var DliteRoute/*o*/ = t("DliteRoute"),
        a = DliteRoute/*o*/.create({
            name: "GroupPostsSearchRoute",
            path: "/{postsQuery}",
            paramDefinitions: {
                postsQuery: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                postsQuery: function(e, t, n) {
                    return function(e, t) {
                        var r = n.__GraphQL;
                        return new r.Query("graph_search_query", [n.__var(e)], [new r.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [n.__frag(t)], null, "GroupPostsSearchRoute_postsQuery")
                    }(e, t)
                }
            }
        });
    i.exports = a
});