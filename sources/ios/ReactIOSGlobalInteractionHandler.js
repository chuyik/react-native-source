__d("ReactIOSGlobalInteractionHandler",["InteractionManager"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var InteractionManager/*o*/ = require/*t*/("InteractionManager"),
        a = null,
        s = {
            onChange: function(global/*e*/) {
                0 === global/*e*/ ? a && (InteractionManager/*o*/.clearInteractionHandle(a), a = null) : a || (a = InteractionManager/*o*/.createInteractionHandle())
            }
        };
    module/*i*/.exports = s
});