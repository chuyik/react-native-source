__d("LegacyStoryPermalinkRoute",["DliteRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        a = o.create({
            name: "LegacyStoryPermalinkRoute",
            path: "/{story}",
            paramDefinitions: {
                story: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                viewer: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    return function(global/*e*/) {
                        var require/*t*/ = requireDynamic/*n*/.__GraphQL;
                        return new require/*t*/.Query("viewer", null, null, [requireDynamic/*n*/.__frag(global/*e*/)], null, "LegacyStoryPermalinkRoute_viewer")
                    }(require/*t*/)
                },
                story: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    return function(global/*e*/, require/*t*/) {
                        var requireLazy/*r*/ = requireDynamic/*n*/.__GraphQL;
                        return new requireLazy/*r*/.Query("story", [requireDynamic/*n*/.__var(global/*e*/)], [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [requireDynamic/*n*/.__frag(require/*t*/)], null, "LegacyStoryPermalinkRoute_story")
                    }(global/*e*/, require/*t*/)
                }
            }
        });
    module/*i*/.exports = a
});