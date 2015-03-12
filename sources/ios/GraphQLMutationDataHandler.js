__d("GraphQLMutationDataHandler",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = {
            getMutationType: function(e) {
                return e && 1 === Object.keys(e).length || invariant/*o*/(0, "malformed mutation result payload received"), Object.keys(e)[0]
            }
        };
    i.exports = a
});