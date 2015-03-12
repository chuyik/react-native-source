__d("defaultRQLMutationCallback",["GraphQLStore"],function (e, t, n, r, i) {
    function o(e, t, n, r) {
        e ? GraphQLStore/*a*/.handleMutationRollback(r) : t && GraphQLStore/*a*/.handleServerMutation(t, n)
    }
    var GraphQLStore/*a*/ = t("GraphQLStore");
    i.exports = o
});