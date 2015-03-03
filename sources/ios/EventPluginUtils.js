__d("EventPluginUtils",["EventConstants","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*EventConstants/*r*/*/, module/*i*/) {
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

    function l(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/._dispatchListeners,
            requireLazy/*EventConstants/*r*/*/ = global/*e*/._dispatchIDs;
        if (__DEV__ && m(global/*e*/), invariant/*Array.isArray*/(requireDynamic/*n*/))
            for (var module/*i*/ = 0; module/*i*/ < requireDynamic/*n*/.length && !global/*e*/.isPropagationStopped(); module/*i*/++) require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/[module/*i*/], requireLazy/*EventConstants/*r*/*/[module/*i*/]);
        else requireDynamic/*n*/ && require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/, requireLazy/*EventConstants/*r*/*/)
    }

    function u(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        global/*e*/.currentTarget = y.Mount.getNode(requireDynamic/*n*/);
        var requireLazy/*EventConstants/*r*/*/ = require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/);
        return global/*e*/.currentTarget = null, requireLazy/*EventConstants/*r*/*/
    }

    function c(global/*e*/, require/*exports/*t*/*/) {
        l(global/*e*/, require/*exports/*t*/*/), global/*e*/._dispatchListeners = null, global/*e*/._dispatchIDs = null
    }

    function p(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs;
        if (__DEV__ && m(global/*e*/), invariant/*Array.isArray*/(require/*exports/*t*/*/)) {
            for (var requireLazy/*EventConstants/*r*/*/ = 0; requireLazy/*EventConstants/*r*/*/ < require/*exports/*t*/*/.length && !global/*e*/.isPropagationStopped(); requireLazy/*EventConstants/*r*/*/++)
                if (require/*exports/*t*/*/[requireLazy/*EventConstants/*r*/*/](global/*e*/, requireDynamic/*n*/[requireLazy/*EventConstants/*r*/*/])) return requireDynamic/*n*/[requireLazy/*EventConstants/*r*/*/]
        } else if (require/*exports/*t*/*/ && require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/)) return requireDynamic/*n*/;
        return null
    }

    function d(global/*e*/) {
        var require/*exports/*t*/*/ = p(global/*e*/);
        return global/*e*/._dispatchIDs = null, global/*e*/._dispatchListeners = null, require/*exports/*t*/*/
    }

    function h(global/*e*/) {
        __DEV__ && m(global/*e*/);
        var require/*exports/*t*/*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs;
        invariant/*Array.isArray*/(require/*exports/*t*/*/) && _(0, "executeDirectDispatch(...): Invalid `event`.");
        var requireLazy/*EventConstants/*r*/*/ = require/*exports/*t*/*/ ? require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/) : null;
        return global/*e*/._dispatchListeners = null, global/*e*/._dispatchIDs = null, requireLazy/*EventConstants/*r*/*/
    }

    function f(global/*e*/) {
        return !!global/*e*/._dispatchListeners
    }
    var m, g = require/*exports/*t*/*/("EventConstants"),
        _ = require/*exports/*t*/*/("invariant"),
        y = {
            Mount: null,
            injectMount: function(global/*e*/) {
                y.Mount = global/*e*/, __DEV__ && (global/*e*/ && global/*e*/.getNode || _(0, "EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode."))
            }
        },
        v = g.topLevelTypes;
    __DEV__ && (m = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/._dispatchListeners,
            requireDynamic/*n*/ = global/*e*/._dispatchIDs,
            requireLazy/*EventConstants/*r*/*/ = invariant/*Array.isArray*/(require/*exports/*t*/*/),
            module/*i*/ = invariant/*Array.isArray*/(requireDynamic/*n*/),
            o = module/*i*/ ? requireDynamic/*n*/.length : requireDynamic/*n*/ ? 1 : 0,
            a = requireLazy/*EventConstants/*r*/*/ ? require/*exports/*t*/*/.length : require/*exports/*t*/*/ ? 1 : 0;
        (module/*i*/ !== requireLazy/*EventConstants/*r*/*/ || o !== a) && _(0, "EventPluginUtils: Invalid `event`.")
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