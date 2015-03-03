__d("GroupPinPostAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*t*/("GraphQL_EXPERIMENTAL"), require/*t*/("GraphQLMutationAction")),
        a = require/*t*/("GraphQLMutationQueryCreator"),
        s = (require/*t*/("GraphQLMutatorHub"), require/*t*/("defaultRQLMutationCallback")),
        l = require/*t*/("rql"),
        u = {
            updatePinnedPost: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var u, c;
                requireDynamic/*n*/ ? (u = a.createQuery("group_pin_story", {
                    group: global/*e*/
                }), c = function(global/*e*/) {
                    var require/*t*/ = l.__GraphQL;
                    return new require/*t*/.Mutation("GroupPinPostAction_m0", "GroupPinStoryResponsePayload", new require/*t*/.Callv("group_pin_story", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [l.__frag(global/*e*/)])
                }(u)) : (u = a.createQuery("group_unpin_story", {
                    group: global/*e*/
                }), c = function(global/*e*/) {
                    var require/*t*/ = l.__GraphQL;
                    return new require/*t*/.Mutation("GroupPinPostAction_m1", "GroupUnpinStoryResponsePayload", new require/*t*/.Callv("group_unpin_story", [new require/*t*/.CallVariable("input")]), [new require/*t*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [l.__frag(global/*e*/)])
                }(u));
                var p = new o;
                p.runServerAction(c, {
                    group_id: global/*e*/,
                    story_id: require/*t*/,
                    source: requireLazy/*r*/
                }, function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    if (s(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/), global/*e*/) throw global/*e*/;
                    require/*t*/ && module/*i*/ && module/*i*/()
                })
            }
        };
    module/*i*/.exports = u
});