__d("ReactOwner",["emptyObject","invariant"],function (e, t, n, r, i) {
    "use strict";
    var emptyObject/*o*/ = t("emptyObject"),
        invariant/*a*/ = t("invariant"),
        s = {
            isValidOwner: function(e) {
                return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
            },
            addComponentAsRefTo: function(e, t, n) {
                s.isValidOwner(n) || invariant/*a*/(0, "addComponentAsRefTo(...): Only invariant/*a*/ ReactOwner can have refs. This usually means that you're trying to add invariant/*a*/ ref to invariant/*a*/ component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of invariant/*a*/ new top-level component which will hold the ref."), n.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, n) {
                s.isValidOwner(n) || invariant/*a*/(0, "removeComponentAsRefFrom(...): Only invariant/*a*/ ReactOwner can have refs. This usually means that you're trying to remove invariant/*a*/ ref to invariant/*a*/ component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of invariant/*a*/ new top-level component which will hold the ref."), n.refs[t] === e && n.detachRef(t)
            },
            Mixin: {
                construct: function() {
                    this.refs = emptyObject/*o*/
                },
                attachRef: function(e, t) {
                    t.isOwnedBy(this) || invariant/*a*/(0, "attachRef(%s, ...): Only invariant/*a*/ component's owner can store invariant/*a*/ ref to it.", e);
                    var n = this.refs === emptyObject/*o*/ ? this.refs = {} : this.refs;
                    n[e] = t
                },
                detachRef: function(e) {
                    delete this.refs[e]
                }
            }
        };
    i.exports = s
});