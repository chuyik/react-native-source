__d("ReactIOSGlobalInteractionHandler",["InteractionManager"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("InteractionManager"),
        a = null,
        s = {
            onChange: function(global/*e*/) {
                0 === global/*e*/ ? a && (o.clearInteractionHandle(a), a = null) : a || (a = o.createInteractionHandle())
            }
        };
    module/*i*/.exports = s
});