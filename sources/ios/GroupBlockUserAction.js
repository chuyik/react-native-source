__d("GroupBlockUserAction",["GraphQLMutationAction","GraphQLMutationQueryCreator","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLMutationAction"),
        a = require/*t*/("GraphQLMutationQueryCreator"),
        s = require/*t*/("rql"),
        l = "treehouse_group_mall",
        u = {
            blockUserFromGroup: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = a.createQuery("group_block", {
                        group: require/*t*/
                    }),
                    module/*i*/ = function(global/*e*/) {
                        var require/*t*/ = s.__GraphQL;
                        return new require/*t*/.Mutation("GroupBlockUserAction_m0", "GroupBlockResponsePayload", new require/*t*/.Callv("group_block", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [s.__frag(global/*e*/)])
                    }(requireLazy/*r*/),
                    u = new o;
                u.runServerAction(module/*i*/, {
                    group_id: require/*t*/,
                    user_id: global/*e*/,
                    source: l
                }, function(global/*e*/) {
                    if (global/*e*/) throw global/*e*/;
                    requireDynamic/*n*/ && requireDynamic/*n*/()
                })
            }
        };
    module/*i*/.exports = u
});