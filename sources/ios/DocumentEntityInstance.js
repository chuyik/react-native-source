__d("DocumentEntityInstance",["ComposedEntityMutability","ComposedEntityType","arrayContains","getObjectValues","invariant"],function (e, t, n, r, i) {
    function o(e, t, n) {
        "use strict";
        arrayContains/*l*/(p, e) || invariant/*c*/(0, "Invalid DocumentEntityType."), arrayContains/*l*/(d, t) || invariant/*c*/(0, "Invalid ComposedEntityMutability type."), this.$DocumentEntityInstance_type = e, this.$DocumentEntityInstance_mutability = t, this.$DocumentEntityInstance_data = n
    }
    var ComposedEntityMutability/*a*/ = t("ComposedEntityMutability"),
        ComposedEntityType/*s*/ = t("ComposedEntityType"),
        arrayContains/*l*/ = t("arrayContains"),
        getObjectValues/*u*/ = t("getObjectValues"),
        invariant/*c*/ = t("invariant"),
        p = getObjectValues/*u*/(ComposedEntityType/*s*/),
        d = getObjectValues/*u*/(ComposedEntityMutability/*a*/);
    o.prototype.getType = function() {
        "use strict";
        return this.$DocumentEntityInstance_type
    }, o.prototype.getMutability = function() {
        "use strict";
        return this.$DocumentEntityInstance_mutability
    }, o.prototype.getData = function() {
        "use strict";
        return this.$DocumentEntityInstance_data
    }, o.prototype.replaceData = function(e) {
        "use strict";
        this.$DocumentEntityInstance_data = e
    }, i.exports = o
});