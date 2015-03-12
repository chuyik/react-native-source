__d("ReactNativeComponent",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function createInstanceForTag(e, t, n) {
        var r = l[e];
        return null == r ? 
            (s || invariant/*a*/(0, "There is no registered component for the tag %s", e), new s(e, t)) : 
            n === e ? (s || invariant/*a*/(0, "There is no registered component for the tag %s", e), new s(e, t)) : 
            new r.type(t)
    }

    var invariant/*a*/ = t("invariant"),
        s = null,
        l = {},
        u = {
            injectGenericComponentClass: function(e) {
                s = e
            },
            injectComponentClasses: function(e) {
                Object.assign(l, e)
            }
        },
        c = {
            createInstanceForTag: createInstanceForTag,
            injection: u
        };
    i.exports = c
});
