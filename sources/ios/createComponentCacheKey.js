__d("createComponentCacheKey",["ReactInstanceMap","ReactInstanceHandles","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = e.getPublicInstance(),
            n = t.tagName || t.constructor.displayName;
        return n || invariant/*c*/(0, "Cannot create cache key for component without `displayName` or `tagName`."), n
    }

    function a(e) {
        var t = e._rootNodeID,
            n = ReactInstanceHandles/*u*/.getReactRootIDFromNodeID(t);
        return t.substr(n.length)
    }

    function s(e) {
        var t = e.mountComponent ? e : ReactInstanceMap/*l*/.get(e);
        t._rootNodeID || invariant/*c*/(0, "Cannot create cache key for component unless it is mounting or mounted.");
        var n = [];
        do {
            var r = o(t),
                i = a(t);
            n.unshift("(" + r + ")" + i), t = t._currentElement._owner
        } while (t);
        return n.join(":")
    }
    var ReactInstanceMap/*l*/ = t("ReactInstanceMap"),
        ReactInstanceHandles/*u*/ = t("ReactInstanceHandles"),
        invariant/*c*/ = t("invariant");
    i.exports = s
});