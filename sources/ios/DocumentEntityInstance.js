__d("DocumentEntityInstance",["ComposedEntityMutability","ComposedEntityType","arrayContains","getObjectValues","invariant"],function (global/*ComposedEntityType/*e*/*/, require/*exports/*getObjectValues/*t*/*/*/, requireDynamic/*ComposedEntityMutability/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*ComposedEntityType/*e*/*/, require/*exports/*getObjectValues/*t*/*/*/, requireDynamic/*ComposedEntityMutability/*n*/*/) {
        "use strict";
        arrayContains/*l*/(p, global/*ComposedEntityType/*e*/*/) || c(0, "Invalid DocumentEntityType."), arrayContains/*l*/(d, require/*exports/*getObjectValues/*t*/*/*/) || c(0, "Invalid ComposedEntityMutability type."), invariant/*this.$DocumentEntityInstance_type*/ = global/*ComposedEntityType/*e*/*/, this.$DocumentEntityInstance_mutability = require/*exports/*getObjectValues/*t*/*/*/, this.$DocumentEntityInstance_data = requireDynamic/*ComposedEntityMutability/*n*/*/
    }
    var a = require/*exports/*getObjectValues/*t*/*/*/("ComposedEntityMutability"),
        s = require/*exports/*getObjectValues/*t*/*/*/("ComposedEntityType"),
        arrayContains/*l*/ = require/*exports/*getObjectValues/*t*/*/*/("arrayContains"),
        u = require/*exports/*getObjectValues/*t*/*/*/("getObjectValues"),
        c = require/*exports/*getObjectValues/*t*/*/*/("invariant"),
        p = u(s),
        d = u(a);
    o.prototype.getType = function() {
        "use strict";
        return invariant/*this.$DocumentEntityInstance_type*/
    }, o.prototype.getMutability = function() {
        "use strict";
        return this.$DocumentEntityInstance_mutability
    }, o.prototype.getData = function() {
        "use strict";
        return this.$DocumentEntityInstance_data
    }, o.prototype.replaceData = function(global/*ComposedEntityType/*e*/*/) {
        "use strict";
        this.$DocumentEntityInstance_data = global/*ComposedEntityType/*e*/*/
    }, module/*i*/.exports = o
});