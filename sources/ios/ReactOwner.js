__d("ReactOwner",["emptyObject","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("emptyObject"),
        a = require/*t*/("invariant"),
        s = {
            isValidOwner: function(global/*e*/) {
                return !(!global/*e*/ || "function" != typeof global/*e*/.attachRef || "function" != typeof global/*e*/.detachRef)
            },
            addComponentAsRefTo: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                s.isValidOwner(requireDynamic/*n*/) || a(0, "addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn'require/*t*/ have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."), requireDynamic/*n*/.attachRef(require/*t*/, global/*e*/)
            },
            removeComponentAsRefFrom: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                s.isValidOwner(requireDynamic/*n*/) || a(0, "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn'require/*t*/ have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."), requireDynamic/*n*/.refs[require/*t*/] === global/*e*/ && requireDynamic/*n*/.detachRef(require/*t*/)
            },
            Mixin: {
                construct: function() {
                    this.refs = o
                },
                attachRef: function(global/*e*/, require/*t*/) {
                    require/*t*/.isOwnedBy(this) || a(0, "attachRef(%s, ...): Only a component's owner can store a ref to it.", global/*e*/);
                    var requireDynamic/*n*/ = this.refs === o ? this.refs = {} : this.refs;
                    requireDynamic/*n*/[global/*e*/] = require/*t*/
                },
                detachRef: function(global/*e*/) {
                    delete this.refs[global/*e*/]
                }
            }
        };
    module/*i*/.exports = s
});