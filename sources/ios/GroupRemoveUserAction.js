__d("GroupRemoveUserAction",["GraphQLMutationAction","GraphQLMutationQueryCreator","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLMutationAction/*o*/ = require/*t*/("GraphQLMutationAction"),
        GraphQLMutationQueryCreator/*a*/ = require/*t*/("GraphQLMutationQueryCreator"),
        defaultRQLMutationCallback/*s*/ = require/*t*/("defaultRQLMutationCallback"),
        rql/*l*/ = require/*t*/("rql"),
        u = "treehouse_group_mall",
        c = {
            removeMemberFromGroup: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = GraphQLMutationQueryCreator/*a*/.createQuery("group_remove_member", {
                        group: require/*t*/
                    }),
                    module/*i*/ = function(global/*e*/) {
                        var require/*t*/ = rql/*l*/.__GraphQL;
                        return new require/*t*/.Mutation("GroupRemoveUserAction_m0", "GroupRemoveMemberResponsePayload", new require/*t*/.Callv("group_remove_member", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [rql/*l*/.__frag(global/*e*/)])
                    }(requireLazy/*r*/),
                    c = new GraphQLMutationAction/*o*/;
                c.runServerAction(module/*i*/, {
                    group_id: require/*t*/,
                    user_id: global/*e*/,
                    source: u
                }, function(global/*e*/, require/*t*/) {
                    !global/*e*/ && requireDynamic/*n*/ && requireDynamic/*n*/(), defaultRQLMutationCallback/*s*/(global/*e*/, require/*t*/, module/*i*/)
                })
            }
        };
    module/*i*/.exports = c
});