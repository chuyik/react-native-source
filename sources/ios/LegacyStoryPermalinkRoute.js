__d("LegacyStoryPermalinkRoute",["DliteRoute"],function (e, t, n, r, i) {
    "use strict";
    var DliteRoute/*o*/ = t("DliteRoute"),
        a = DliteRoute/*o*/.create({
            name: "LegacyStoryPermalinkRoute",
            path: "/{story}",
            paramDefinitions: {
                story: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                viewer: function(e, t, n) {
                    return function(e) {
                        var t = n.__GraphQL;
                        return new t.Query("viewer", null, null, [n.__frag(e)], null, "LegacyStoryPermalinkRoute_viewer")
                    }(t)
                },
                story: function(e, t, n) {
                    return function(e, t) {
                        var r = n.__GraphQL;
                        return new r.Query("story", [n.__var(e)], [new r.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [n.__frag(t)], null, "LegacyStoryPermalinkRoute_story")
                    }(e, t)
                }
            }
        });
    i.exports = a
});