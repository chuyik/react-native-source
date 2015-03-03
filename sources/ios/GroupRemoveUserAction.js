__d("GroupRemoveUserAction",["GraphQLMutationAction","GraphQLMutationQueryCreator","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLMutationAction"),
        exports/*a*/ = require/*t*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*s*/ = require/*t*/("defaultRQLMutationCallback"),
        GraphQLMutationQueryCreator/*l*/ = require/*t*/("rql"),
        defaultRQLMutationCallback/*u*/ = "treehouse_group_mall",
        rql/*c*/ = {
            removeMemberFromGroup: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = exports/*a*/.createQuery("group_remove_member", {
                        group: require/*t*/
                    }),
                    module/*i*/ = function(global/*e*/) {
                        var require/*t*/ = GraphQLMutationQueryCreator/*l*/.__GraphQL;
                        return new require/*t*/.Mutation("GroupRemoveUserAction_m0", "GroupRemoveMemberResponsePayload", new require/*t*/.Callv("group_remove_member", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                            generated: !0,
                            requisite: !0
                        })], [GraphQLMutationQueryCreator/*l*/.__frag(global/*e*/)])
                    }(requireLazy/*r*/),
                    rql/*c*/ = new o;
                rql/*c*/.runServerAction(module/*i*/, {
                    group_id: require/*t*/,
                    user_id: global/*e*/,
                    source: defaultRQLMutationCallback/*u*/
                }, function(global/*e*/, require/*t*/) {
                    !global/*e*/ && requireDynamic/*n*/ && requireDynamic/*n*/(), GraphQLMutationAction/*s*/(global/*e*/, require/*t*/, module/*i*/)
                })
            }
        };
    module/*i*/.exports = rql/*c*/
});