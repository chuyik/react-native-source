__d("ReactEventEmitterMixin",["EventPluginHub"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        a.enqueueEvents(global/*e*/), exports/*a.processEventQueue*/()
    }
    var a = require/*t*/("EventPluginHub"),
        EventPluginHub/*s*/ = {
            handleTopLevel: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = a.extractEvents(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/);
                o(module/*i*/)
            }
        };
    module/*i*/.exports = EventPluginHub/*s*/
});