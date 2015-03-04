__d("ReactIOSEventEmitter",["EventPluginHub","ReactEventEmitterMixin","ReactIOSTagHandles","NodeHandle","EventConstants","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var EventPluginHub/*o*/ = require/*t*/("EventPluginHub"),
        ReactEventEmitterMixin/*a*/ = require/*t*/("ReactEventEmitterMixin"),
        ReactIOSTagHandles/*s*/ = require/*t*/("ReactIOSTagHandles"),
        NodeHandle/*l*/ = require/*t*/("NodeHandle"),
        EventConstants/*u*/ = require/*t*/("EventConstants"),
        merge/*c*/ = require/*t*/("merge"),
        warning/*p*/ = require/*t*/("warning"),
        d = EventConstants/*u*/.topLevelTypes,
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
            for (var EventPluginHub/*o*/ = 0, ReactEventEmitterMixin/*a*/ = 0; ReactEventEmitterMixin/*a*/ < global/*e*/.length; ReactEventEmitterMixin/*a*/++) {
                var ReactIOSTagHandles/*s*/ = global/*e*/[ReactEventEmitterMixin/*a*/];
                null !== ReactIOSTagHandles/*s*/ && (global/*e*/[EventPluginHub/*o*/++] = ReactIOSTagHandles/*s*/)
            }
            return global/*e*/.length = EventPluginHub/*o*/, requireDynamic/*n*/
        },
        g = merge/*c*/(ReactEventEmitterMixin/*a*/, {
            registrationNames: EventPluginHub/*o*/.registrationNameModules,
            putListener: EventPluginHub/*o*/.putListener,
            getListener: EventPluginHub/*o*/.getListener,
            deleteListener: EventPluginHub/*o*/.deleteListener,
            deleteAllListeners: EventPluginHub/*o*/.deleteAllListeners,
            _receiveRootNodeIDEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = requireDynamic/*n*/ || h;
                g.handleTopLevel(require/*t*/, global/*e*/, global/*e*/, requireLazy/*r*/)
            },
            receiveEvent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = ReactIOSTagHandles/*s*/.tagToRootNodeID[global/*e*/];
                g._receiveRootNodeIDEvent(requireLazy/*r*/, require/*t*/, requireDynamic/*n*/)
            },
            receiveTouches: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                for (var requireLazy/*r*/ = global/*e*/ === d.topTouchEnd || global/*e*/ === d.topTouchCancel ? m(require/*t*/, requireDynamic/*n*/) : f(require/*t*/, requireDynamic/*n*/), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) {
                    var EventPluginHub/*o*/ = requireLazy/*r*/[module/*i*/];
                    EventPluginHub/*o*/.changedTouches = requireLazy/*r*/, EventPluginHub/*o*/.touches = require/*t*/;
                    var ReactEventEmitterMixin/*a*/ = EventPluginHub/*o*/,
                        EventConstants/*u*/ = null,
                        merge/*c*/ = ReactEventEmitterMixin/*a*/.target;
                    if (null !== merge/*c*/ && void 0 !== merge/*c*/) {
                        if (merge/*c*/ < ReactIOSTagHandles/*s*/.tagsStartAt) {
                            __DEV__ && 0 === module/*i*/ && warning/*p*/(!1, "A view is reporting that ReactEventEmitterMixin/*a*/ touch occured on tag zero.");
                            continue
                        }
                        EventConstants/*u*/ = NodeHandle/*l*/.getRootNodeID(merge/*c*/)
                    }
                    g._receiveRootNodeIDEvent(EventConstants/*u*/, global/*e*/, ReactEventEmitterMixin/*a*/)
                }
            }
        });
    module/*i*/.exports = g
});