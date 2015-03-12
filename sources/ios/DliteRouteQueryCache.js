__d("DliteRouteQueryCache",["DliteRoute"],function (e, t, n, r, i) {
    "use strict";
    var o = (t("DliteRoute"), {
        get: function(e, t) {
            var n = t.getCacheKey();
            if (e.__queryCache) {
                var r = e.__queryCache[n];
                if (r) return r
            }
            return null
        },
        set: function(e, t, n) {
            var r = t.getCacheKey();
            e.__queryCache || (e.__queryCache = {}), e.__queryCache[r] = n
        }
    });
    i.exports = o
});