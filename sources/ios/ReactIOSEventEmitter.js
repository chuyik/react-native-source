__d("ReactIOSEventEmitter",["EventPluginHub","ReactEventEmitterMixin","ReactIOSTagHandles","NodeHandle","EventConstants","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EventPluginHub"),
        exports/*a*/ = require/*t*/("ReactEventEmitterMixin"),
        EventPluginHub/*s*/ = require/*t*/("ReactIOSTagHandles"),
        ReactEventEmitterMixin/*l*/ = require/*t*/("NodeHandle"),
        ReactIOSTagHandles/*u*/ = require/*t*/("EventConstants"),
        NodeHandle/*c*/ = require/*t*/("merge"),
        EventConstants/*p*/ = require/*t*/("warning"),
        merge/*d*/ = ReactIOSTagHandles/*u*/.topLevelTypes,
        warning/*h*/ = {},
        f = function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) requireDynamic/*n*/.push(global/*e*/[require/*t*/[requireLazy/*r*/]]);
            return requireDynamic/*n*/
        },
        m = function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) {
                var module/*i*/ = require/*t*/[requireLazy/*r*/];
                requireDynamic/*n*/.push(global/*e*/[module/*i*/]), global/*e*/[module/*i*/] = null
            }
            for (var o = 0, exports/*a*/ = 0; exports/*a*/ < global/*e*/.length; exports/*a*/++) {
                var EventPluginHub/*s*/ = global/*e*/[exports/*a*/];
                null !== EventPluginHub/*s*/ && (global/*e*/[o++] = EventPluginHub/*s*/)
            }
            return global/*e*/.length = o, requireDynamic/*n*/
        },
        g = NodeHandle/*c*/(exports/*a*/, {
            registrationNames: o.registrationNameModules,
            putListener: o.putListener,
            getListener: o.getListener,
            deleteListener: o.deleteListener,
            deleteAllListeners: o.deleteAllListeners,
            _receiveRootNodeIDEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = requireDynamic/*n*/ || warning/*h*/;
                g.handleTopLevel(require/*t*/, global/*e*/, global/*e*/, requireLazy/*r*/)
            },
            receiveEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = EventPluginHub/*s*/.tagToRootNodeID[global/*e*/];
                g._receiveRootNodeIDEvent(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/)
            },
            receiveTouches: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                for (var requireLazy/*r*/ = global/*e*/ === merge/*d*/.topTouchEnd || global/*e*/ === merge/*d*/.topTouchCancel ? m(require/*t*/, requireDynamic/*n*/) : f(require/*t*/, requireDynamic/*n*/), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) {
                    var o = requireLazy/*r*/[module/*i*/];
                    o.changedTouches = requireLazy/*r*/, o.touches = require/*t*/;
                    var exports/*a*/ = o,
                        ReactIOSTagHandles/*u*/ = null,
                        NodeHandle/*c*/ = exports/*a*/.target;
                    if (null !== NodeHandle/*c*/ && void 0 !== NodeHandle/*c*/) {
                        if (NodeHandle/*c*/ < EventPluginHub/*s*/.tagsStartAt) {
                            __DEV__ && 0 === module/*i*/ && EventConstants/*p*/(!1, "A view is reporting that exports/*a*/ touch occured on tag zero.");
                            continue
                        }
                        ReactIOSTagHandles/*u*/ = ReactEventEmitterMixin/*l*/.getRootNodeID(NodeHandle/*c*/)
                    }
                    g._receiveRootNodeIDEvent(ReactIOSTagHandles/*u*/, global/*e*/, exports/*a*/)
                }
            }
        });
    module/*i*/.exports = g
});