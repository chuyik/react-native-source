__d("DliteReactQueryParamCache",["createComponentCacheKey","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("createComponentCacheKey"),
        exports/*a*/ = require/*t*/("emptyFunction"),
        createComponentCacheKey/*s*/ = exports/*a*/,
        emptyFunction/*l*/ = {
            injectStorageStrategy: function(global/*e*/) {
                createComponentCacheKey/*s*/ = global/*e*/
            },
            set: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = createComponentCacheKey/*s*/();
                if (requireDynamic/*n*/) {
                    var requireLazy/*r*/ = o(global/*e*/);
                    requireDynamic/*n*/.addQueryParams(require/*t*/, requireLazy/*r*/)
                }
            },
            get: function(global/*e*/) {
                var require/*t*/ = createComponentCacheKey/*s*/(),
                    requireDynamic/*n*/ = null;
                if (require/*t*/ && require/*t*/.hasQueryParams()) {
                    var requireLazy/*r*/ = o(global/*e*/);
                    requireDynamic/*n*/ = require/*t*/.copyQueryParams(requireLazy/*r*/)
                }
                return requireDynamic/*n*/
            }
        };
    module/*i*/.exports = emptyFunction/*l*/
});