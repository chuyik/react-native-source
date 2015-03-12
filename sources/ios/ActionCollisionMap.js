__d("ActionCollisionMap",["invariant"],function (e, t, n, r, i) {
    "use strict";
    var invariant/*o*/ = t("invariant"),
        a = {},
        s = {},
        l = {
            hasPendingActionForKey: function(e) {
                return !(!a[e] || !a[e].length)
            },
            appendActionForKey: function(e, t) {
                var n = t.getClientMutationID();
                l.existsInMap(n) && invariant/*o*/(0, "Cannot append an action that's already in the map"), s[n] = e;
                var r = a[e] || [];
                r.push(t), a[e] = r
            },
            getFirstActionForKey: function(e) {
                var t = a[e];
                return t && t.length ? t[0] : null
            },
            shiftActionForKey: function(e) {
                var t = a[e];
                t && t.length || invariant/*o*/(0, "Cannot shift unless there are actions");
                var n = t.shift();
                return 0 === t.length && delete a[e], delete s[n.getClientMutationID()], n
            },
            iterateOverActionsForKey: function(e, t) {
                var n = a[e] || [];
                n.forEach(t)
            },
            clearActionsForKey: function(e) {
                for (var t = a[e] || [], n = 0; n < t.length; n++) delete s[t[n].getClientMutationID()];
                delete a[e]
            },
            getKeyForClientMutationID: function(e) {
                return s[e] || null
            },
            existsInMap: function(e) {
                return !!l.getKeyForClientMutationID(e)
            }
        };
    i.exports = l
});