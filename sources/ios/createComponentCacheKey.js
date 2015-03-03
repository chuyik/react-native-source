__d("createComponentCacheKey",["ReactInstanceMap","ReactInstanceHandles","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/, requireLazy/*r*/, module/*invariant/*i*/*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.getPublicInstance(),
            requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/ = require/*t*/.tagName || require/*t*/.constructor.displayName;
        return requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/ || c(0, "Cannot create cache key for component without `displayName` or `tagName`."), requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/
    }

    function a(global/*e*/) {
        var require/*t*/ = global/*e*/._rootNodeID,
            requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/ = u.getReactRootIDFromNodeID(require/*t*/);
        return require/*t*/.substr(requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/.length)
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.mountComponent ? global/*e*/ : l.get(global/*e*/);
        require/*t*/._rootNodeID || c(0, "Cannot create cache key for component unless it is mounting or mounted.");
        var requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/ = [];
        do {
            var requireLazy/*r*/ = o(require/*t*/),
                module/*invariant/*i*/*/ = a(require/*t*/);
            requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/.unshift("(" + requireLazy/*r*/ + ")" + module/*invariant/*i*/*/), require/*t*/ = require/*t*/._currentElement._owner
        } while (require/*t*/);
        return requireDynamic/*exports/*ReactInstanceMap/*ReactInstanceHandles/*n*/*/*/*/.join(":")
    }
    var l = require/*t*/("ReactInstanceMap"),
        u = require/*t*/("ReactInstanceHandles"),
        c = require/*t*/("invariant");
    module/*invariant/*i*/*/.exports = s
});