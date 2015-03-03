__d("DocumentEntityInstance",["ComposedEntityMutability","ComposedEntityType","arrayContains","getObjectValues","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        l(p, global/*e*/) || c(0, "Invalid DocumentEntityType."), l(d, require/*t*/) || c(0, "Invalid ComposedEntityMutability type."), this.$DocumentEntityInstance_type = global/*e*/, this.$DocumentEntityInstance_mutability = require/*t*/, this.$DocumentEntityInstance_data = requireDynamic/*n*/
    }
    var a = require/*t*/("ComposedEntityMutability"),
        s = require/*t*/("ComposedEntityType"),
        l = require/*t*/("arrayContains"),
        u = require/*t*/("getObjectValues"),
        c = require/*t*/("invariant"),
        p = u(s),
        d = u(a);
    o.prototype.getType = function() {
        "use strict";
        return this.$DocumentEntityInstance_type
    }, o.prototype.getMutability = function() {
        "use strict";
        return this.$DocumentEntityInstance_mutability
    }, o.prototype.getData = function() {
        "use strict";
        return this.$DocumentEntityInstance_data
    }, o.prototype.replaceData = function(global/*e*/) {
        "use strict";
        this.$DocumentEntityInstance_data = global/*e*/
    }, module/*i*/.exports = o
});