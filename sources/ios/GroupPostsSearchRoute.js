__d("GroupPostsSearchRoute",["DliteRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        a = o.create({
            name: "GroupPostsSearchRoute",
            path: "/{postsQuery}",
            paramDefinitions: {
                postsQuery: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                postsQuery: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    return function(global/*e*/, require/*t*/) {
                        var requireLazy/*r*/ = requireDynamic/*n*/.__GraphQL;
                        return new requireLazy/*r*/.Query("graph_search_query", [requireDynamic/*n*/.__var(global/*e*/)], [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [requireDynamic/*n*/.__frag(require/*t*/)], null, "GroupPostsSearchRoute_postsQuery")
                    }(global/*e*/, require/*t*/)
                }
            }
        });
    module/*i*/.exports = a
});