__d("GroupRoute",["DliteRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        exports/*a*/ = o.create({
            name: "GroupRoute",
            DliteRoute/*path*/: "/{group}",
            paramDefinitions: {
                group: {
                    type: "String",
                    required: !0
                }
            },
            queries: {
                group: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    return function(global/*e*/, require/*t*/) {
                        var requireLazy/*r*/ = requireDynamic/*n*/.__GraphQL;
                        return new requireLazy/*r*/.Query("node", [requireDynamic/*n*/.__var(global/*e*/)], [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [requireDynamic/*n*/.__frag(require/*t*/)], null, "GroupRoute_group")
                    }(global/*e*/, require/*t*/)
                }
            }
        });
    module/*i*/.exports = exports/*a*/
});