__d("defaultRQLMutationCallback",["GraphQLStore"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        global/*e*/ ? GraphQLStore/*a*/.handleMutationRollback(requireLazy/*r*/) : require/*t*/ && GraphQLStore/*a*/.handleServerMutation(require/*t*/, requireDynamic/*n*/)
    }
    var GraphQLStore/*a*/ = require/*t*/("GraphQLStore");
    module/*i*/.exports = o
});