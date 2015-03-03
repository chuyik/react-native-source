__d("GroupPinPostAction",["GraphQL_EXPERIMENTAL","GraphQLMutationAction","GraphQLMutationQueryCreator","GraphQLMutatorHub","defaultRQLMutationCallback","rql"],function (global/*e*/, require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = (require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("GraphQL_EXPERIMENTAL"), require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("GraphQLMutationAction")),
        GraphQL_EXPERIMENTAL/*a*/ = require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("GraphQLMutationQueryCreator"),
        GraphQLMutationAction/*s*/ = (require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("GraphQLMutatorHub"), require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("defaultRQLMutationCallback")),
        GraphQLMutatorHub/*l*/ = require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/("rql"),
        defaultRQLMutationCallback/*u*/ = {
            updatePinnedPost: function(global/*e*/, require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var defaultRQLMutationCallback/*u*/, c;
                requireDynamic/*n*/ ? (defaultRQLMutationCallback/*u*/ = GraphQL_EXPERIMENTAL/*a*/.createQuery("group_pin_story", {
                    group: global/*e*/
                }), c = function(global/*e*/) {
                    var require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/ = GraphQLMutatorHub/*l*/.__GraphQL;
                    return new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Mutation("GroupPinPostAction_m0", "GroupPinStoryResponsePayload", new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Callv("group_pin_story", [new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [GraphQLMutatorHub/*l*/.__frag(global/*e*/)])
                }(defaultRQLMutationCallback/*u*/)) : (defaultRQLMutationCallback/*u*/ = GraphQL_EXPERIMENTAL/*a*/.createQuery("group_unpin_story", {
                    group: global/*e*/
                }), c = function(global/*e*/) {
                    var require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/ = GraphQLMutatorHub/*l*/.__GraphQL;
                    return new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Mutation("GroupPinPostAction_m1", "GroupUnpinStoryResponsePayload", new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Callv("group_unpin_story", [new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.CallVariable("input")]), [new require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/.Field("client_mutation_id", null, null, null, null, null, {
                        generated: !0,
                        requisite: !0
                    })], [GraphQLMutatorHub/*l*/.__frag(global/*e*/)])
                }(defaultRQLMutationCallback/*u*/));
                var p = new o;
                p.runServerAction(c, {
                    group_id: global/*e*/,
                    story_id: require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/,
                    source: requireLazy/*r*/
                }, function(global/*e*/, require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    if (GraphQLMutationAction/*s*/(global/*e*/, require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/, requireDynamic/*n*/, requireLazy/*r*/), global/*e*/) throw global/*e*/;
                    require/*exports/*GraphQLMutationQueryCreator/*rql/*t*/*/*/*/ && module/*i*/ && module/*i*/()
                })
            }
        };
    module/*i*/.exports = defaultRQLMutationCallback/*u*/
});