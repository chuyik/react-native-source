__d("ReactIOSGlobalInteractionHandler",["InteractionManager"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("InteractionManager"),
        exports/*a*/ = null,
        InteractionManager/*s*/ = {
            onChange: function(global/*e*/) {
                0 === global/*e*/ ? exports/*a*/ && (o.clearInteractionHandle(exports/*a*/), exports/*a*/ = null) : exports/*a*/ || (exports/*a*/ = o.createInteractionHandle())
            }
        };
    module/*i*/.exports = InteractionManager/*s*/
});