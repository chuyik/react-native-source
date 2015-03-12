__d("ReactIOSGlobalInteractionHandler",["InteractionManager"],function (e, t, n, r, i) {
    "use strict";
    var InteractionManager/*o*/ = t("InteractionManager"),
        a = null,
        s = {
            onChange: function(e) {
                0 === e ? a && (InteractionManager/*o*/.clearInteractionHandle(a), a = null) : a || (a = InteractionManager/*o*/.createInteractionHandle())
            }
        };
    i.exports = s
});