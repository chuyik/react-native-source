__d("defaultRQLMutationCallback",["GraphQLStore"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        global/*e*/ ? a.handleMutationRollback(requireLazy/*r*/) : require/*t*/ && a.handleServerMutation(require/*t*/, requireDynamic/*n*/)
    }
    var a = require/*t*/("GraphQLStore");
    module/*i*/.exports = o
});