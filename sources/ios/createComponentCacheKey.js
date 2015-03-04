__d("createComponentCacheKey",["ReactInstanceMap","ReactInstanceHandles","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.getPublicInstance(),
            requireDynamic/*n*/ = require/*t*/.tagName || require/*t*/.constructor.displayName;
        return requireDynamic/*n*/ || invariant/*c*/(0, "Cannot create cache key for component without `displayName` or `tagName`."), requireDynamic/*n*/
    }

    function a(global/*e*/) {
        var require/*t*/ = global/*e*/._rootNodeID,
            requireDynamic/*n*/ = ReactInstanceHandles/*u*/.getReactRootIDFromNodeID(require/*t*/);
        return require/*t*/.substr(requireDynamic/*n*/.length)
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.mountComponent ? global/*e*/ : ReactInstanceMap/*l*/.get(global/*e*/);
        require/*t*/._rootNodeID || invariant/*c*/(0, "Cannot create cache key for component unless it is mounting or mounted.");
        var requireDynamic/*n*/ = [];
        do {
            var requireLazy/*r*/ = o(require/*t*/),
                module/*i*/ = a(require/*t*/);
            requireDynamic/*n*/.unshift("(" + requireLazy/*r*/ + ")" + module/*i*/), require/*t*/ = require/*t*/._currentElement._owner
        } while (require/*t*/);
        return requireDynamic/*n*/.join(":")
    }
    var ReactInstanceMap/*l*/ = require/*t*/("ReactInstanceMap"),
        ReactInstanceHandles/*u*/ = require/*t*/("ReactInstanceHandles"),
        invariant/*c*/ = require/*t*/("invariant");
    module/*i*/.exports = s
});