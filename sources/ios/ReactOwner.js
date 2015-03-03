__d("ReactOwner",["emptyObject","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("emptyObject"),
        exports/*a*/ = require/*t*/("invariant"),
        emptyObject/*s*/ = {
            isValidOwner: function(global/*e*/) {
                return !(!global/*e*/ || "function" != typeof global/*e*/.attachRef || "function" != typeof global/*e*/.detachRef)
            },
            invariant/*addComponentAsRefTo*/: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                emptyObject/*s*/.isValidOwner(requireDynamic/*n*/) || exports/*a*/(0, "invariant/*addComponentAsRefTo*/(...): Only exports/*a*/ ReactOwner can have refs. This usually means that you're trying to add exports/*a*/ ref to exports/*a*/ component that doesn'require/*t*/ have an owner (that is, was not created inside of another component'emptyObject/*s*/ `render` method). Try rendering this component inside of exports/*a*/ new top-level component which will hold the ref."), requireDynamic/*n*/.attachRef(require/*t*/, global/*e*/)
            },
            removeComponentAsRefFrom: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                emptyObject/*s*/.isValidOwner(requireDynamic/*n*/) || exports/*a*/(0, "removeComponentAsRefFrom(...): Only exports/*a*/ ReactOwner can have refs. This usually means that you're trying to remove exports/*a*/ ref to exports/*a*/ component that doesn'require/*t*/ have an owner (that is, was not created inside of another component'emptyObject/*s*/ `render` method). Try rendering this component inside of exports/*a*/ new top-level component which will hold the ref."), requireDynamic/*n*/.refs[require/*t*/] === global/*e*/ && requireDynamic/*n*/.detachRef(require/*t*/)
            },
            Mixin: {
                construct: function() {
                    this.refs = o
                },
                attachRef: function(global/*e*/, require/*t*/) {
                    require/*t*/.isOwnedBy(this) || exports/*a*/(0, "attachRef(%emptyObject/*s*/, ...): Only exports/*a*/ component'emptyObject/*s*/ owner can store exports/*a*/ ref to it.", global/*e*/);
                    var requireDynamic/*n*/ = this.refs === o ? this.refs = {} : this.refs;
                    requireDynamic/*n*/[global/*e*/] = require/*t*/
                },
                detachRef: function(global/*e*/) {
                    delete this.refs[global/*e*/]
                }
            }
        };
    module/*i*/.exports = emptyObject/*s*/
});