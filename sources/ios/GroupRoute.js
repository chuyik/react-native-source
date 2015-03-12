__d("GroupRoute",["DliteRoute"],function (e, t, n, r, i) {
    "use strict";
    var DliteRoute/*o*/ = t("DliteRoute"),
        a = DliteRoute/*o*/.create({
            name: "GroupRoute",
            path: "/{group}",
            paramDefinitions: {
                group: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                group: function(e, t, n) {
                    return function(e, t) {
                        var r = n.__GraphQL;
                        return new r.Query("node", [n.__var(e)], [new r.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [n.__frag(t)], null, "GroupRoute_group")
                    }(e, t)
                }
            }
        });
    i.exports = a
});