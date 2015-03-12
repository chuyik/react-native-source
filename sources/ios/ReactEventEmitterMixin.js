__d("ReactEventEmitterMixin",["EventPluginHub"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        EventPluginHub/*a*/.enqueueEvents(e), EventPluginHub/*a*/.processEventQueue()
    }
    var EventPluginHub/*a*/ = t("EventPluginHub"),
        s = {
            handleTopLevel: function(e, t, n, r) {
                var i = EventPluginHub/*a*/.extractEvents(e, t, n, r);
                o(i)
            }
        };
    i.exports = s
});