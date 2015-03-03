__d("ReactIOSEventEmitter",["EventPluginHub","ReactEventEmitterMixin","ReactIOSTagHandles","NodeHandle","EventConstants","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EventPluginHub"),
        a = require/*t*/("ReactEventEmitterMixin"),
        s = require/*t*/("ReactIOSTagHandles"),
        l = require/*t*/("NodeHandle"),
        u = require/*t*/("EventConstants"),
        c = require/*t*/("merge"),
        p = require/*t*/("warning"),
        d = u.topLevelTypes,
        h = {},
        f = function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) requireDynamic/*n*/.push(global/*e*/[require/*t*/[requireLazy/*r*/]]);
            return requireDynamic/*n*/
        },
        m = function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) {
                var module/*i*/ = require/*t*/[requireLazy/*r*/];
                requireDynamic/*n*/.push(global/*e*/[module/*i*/]), global/*e*/[module/*i*/] = null
            }
            for (var o = 0, a = 0; a < global/*e*/.length; a++) {
                var s = global/*e*/[a];
                null !== s && (global/*e*/[o++] = s)
            }
            return global/*e*/.length = o, requireDynamic/*n*/
        },
        g = c(a, {
            registrationNames: o.registrationNameModules,
            putListener: o.putListener,
            getListener: o.getListener,
            deleteListener: o.deleteListener,
            deleteAllListeners: o.deleteAllListeners,
            _receiveRootNodeIDEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = requireDynamic/*n*/ || h;
                g.handleTopLevel(require/*t*/, global/*e*/, global/*e*/, requireLazy/*r*/)
            },
            receiveEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = s.tagToRootNodeID[global/*e*/];
                g._receiveRootNodeIDEvent(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/)
            },
            receiveTouches: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                for (var requireLazy/*r*/ = global/*e*/ === d.topTouchEnd || global/*e*/ === d.topTouchCancel ? m(require/*t*/, requireDynamic/*n*/) : f(require/*t*/, requireDynamic/*n*/), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) {
                    var o = requireLazy/*r*/[module/*i*/];
                    o.changedTouches = requireLazy/*r*/, o.touches = require/*t*/;
                    var a = o,
                        u = null,
                        c = a.target;
                    if (null !== c && void 0 !== c) {
                        if (c < s.tagsStartAt) {
                            __DEV__ && 0 === module/*i*/ && p(!1, "A view is reporting that a touch occured on tag zero.");
                            continue
                        }
                        u = l.getRootNodeID(c)
                    }
                    g._receiveRootNodeIDEvent(u, global/*e*/, a)
                }
            }
        });
    module/*i*/.exports = g
});