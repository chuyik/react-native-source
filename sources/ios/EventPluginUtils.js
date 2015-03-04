__d("EventPluginUtils",["EventConstants","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ === v.topMouseUp || global/*e*/ === v.topTouchEnd || global/*e*/ === v.topTouchCancel
    }

    function a(global/*e*/) {
        return global/*e*/ === v.topMouseMove || global/*e*/ === v.topTouchMove
    }

    function s(global/*e*/) {
        return global/*e*/ === v.topMouseDown || global/*e*/ === v.topTouchStart
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/._dispatchListeners,
            requireLazy/*r*/ = global/*e*/._dispatchIDs;
        if (__DEV__ && m(global/*e*/), Array.isArray(requireDynamic/*n*/))
            for (var module/*i*/ = 0; module/*i*/ < requireDynamic/*n*/.length && !global/*e*/.isPropagationStopped(); module/*i*/++) require/*t*/(global/*e*/, requireDynamic/*n*/[module/*i*/], requireLazy/*r*/[module/*i*/]);
        else requireDynamic/*n*/ && require/*t*/(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/)
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/.currentTarget = y.Mount.getNode(requireDynamic/*n*/);
        var requireLazy/*r*/ = require/*t*/(global/*e*/, requireDynamic/*n*/);
        return global/*e*/.currentTarget = null, requireLazy/*r*/
    }

    function c(global/*e*/, require/*t*/) {
        l(global/*e*/, require/*t*/), global/*e*/._dispatchListeners = null, global/*e*/._dispatchIDs = null
    }

    function p(global/*e*/) {
        var require/*t*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs;
        if (__DEV__ && m(global/*e*/), Array.isArray(require/*t*/)) {
            for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length && !global/*e*/.isPropagationStopped(); requireLazy/*r*/++)
                if (require/*t*/[requireLazy/*r*/](global/*e*/, requireDynamic/*n*/[requireLazy/*r*/])) return requireDynamic/*n*/[requireLazy/*r*/]
        } else if (require/*t*/ && require/*t*/(global/*e*/, requireDynamic/*n*/)) return requireDynamic/*n*/;
        return null
    }

    function d(global/*e*/) {
        var require/*t*/ = p(global/*e*/);
        return global/*e*/._dispatchIDs = null, global/*e*/._dispatchListeners = null, require/*t*/
    }

    function h(global/*e*/) {
        __DEV__ && m(global/*e*/);
        var require/*t*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs;
        Array.isArray(require/*t*/) && invariant/*_*/(0, "executeDirectDispatch(...): Invalid `event`.");
        var requireLazy/*r*/ = require/*t*/ ? require/*t*/(global/*e*/, requireDynamic/*n*/) : null;
        return global/*e*/._dispatchListeners = null, global/*e*/._dispatchIDs = null, requireLazy/*r*/
    }

    function f(global/*e*/) {
        return !!global/*e*/._dispatchListeners
    }
    var m, EventConstants/*g*/ = require/*t*/("EventConstants"),
        invariant/*_*/ = require/*t*/("invariant"),
        y = {
            Mount: null,
            injectMount: function(global/*e*/) {
                y.Mount = global/*e*/, __DEV__ && (global/*e*/ && global/*e*/.getNode || invariant/*_*/(0, "EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode."))
            }
        },
        v = EventConstants/*g*/.topLevelTypes;
    __DEV__ && (m = function(global/*e*/) {
        var require/*t*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs,
            requireLazy/*r*/ = Array.isArray(require/*t*/),
            module/*i*/ = Array.isArray(requireDynamic/*n*/),
            o = module/*i*/ ? requireDynamic/*n*/.length : requireDynamic/*n*/ ? 1 : 0,
            a = requireLazy/*r*/ ? require/*t*/.length : require/*t*/ ? 1 : 0;
        (module/*i*/ !== requireLazy/*r*/ || o !== a) && invariant/*_*/(0, "EventPluginUtils: Invalid `event`.")
    });
    var S = {
        isEndish: o,
        isMoveish: a,
        isStartish: s,
        executeDirectDispatch: h,
        executeDispatch: u,
        executeDispatchesInOrder: c,
        executeDispatchesInOrderStopAtTrue: d,
        hasDispatches: f,
        injection: y,
        useTouchEvents: !1
    };
    module/*i*/.exports = S
});