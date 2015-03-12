__d("DliteReactQueryParamCache",["createComponentCacheKey","emptyFunction"],function (e, t, n, r, i) {
    "use strict";
    var createComponentCacheKey/*o*/ = t("createComponentCacheKey"),
        emptyFunction/*a*/ = t("emptyFunction"),
        s = emptyFunction/*a*/,
        l = {
            injectStorageStrategy: function(e) {
                s = e
            },
            set: function(e, t) {
                var n = s();
                if (n) {
                    var r = createComponentCacheKey/*o*/(e);
                    n.addQueryParams(t, r)
                }
            },
            get: function(e) {
                var t = s(),
                    n = null;
                if (t && t.hasQueryParams()) {
                    var r = createComponentCacheKey/*o*/(e);
                    n = t.copyQueryParams(r)
                }
                return n
            }
        };
    i.exports = l
});