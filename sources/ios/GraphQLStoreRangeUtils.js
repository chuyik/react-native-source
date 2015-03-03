__d("GraphQLStoreRangeUtils",["GraphQL_EXPERIMENTAL","GraphQLConstants"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("GraphQL_EXPERIMENTAL"),
        a = require/*t*/("GraphQLConstants"),
        s = {},
        l = {
            isRangeClientID: function(global/*e*/) {
                return !!s[global/*e*/]
            },
            getClientIDForRangeWithID: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = global/*e*/.getCalls().map(function(global/*e*/) {
                        return global/*e*/.toString(require/*t*/)
                    }).join(","),
                    module/*i*/ = requireDynamic/*n*/ + "_" + requireLazy/*r*/,
                    o = s[module/*i*/];
                return o || (s[module/*i*/] = {
                    dataID: requireDynamic/*n*/,
                    calls: global/*e*/.getCalls(),
                    callValues: require/*t*/
                }), module/*i*/
            },
            parseRangeClientID: function(global/*e*/) {
                return s[global/*e*/] || null
            },
            isRangeNode: function(global/*e*/) {
                if (!(global/*e*/ instanceof o.Field && global/*e*/.isLimitable())) return !1;
                if (global/*e*/.hasUnaliasedField(a.EDGES) || global/*e*/.hasUnaliasedField(a.PAGE_INFO)) return !0;
                var require/*t*/ = global/*e*/.getCalls();
                if (require/*t*/.length)
                    for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++)
                        if (require/*t*/[requireDynamic/*n*/].getName() in a.RANGE_CALLS) return !0;
                return !1
            },
            getStorageKeyForField: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/.getFieldName(),
                    requireLazy/*r*/ = global/*e*/.getCalls();
                return requireLazy/*r*/.length && (l.isRangeNode(global/*e*/) && (requireLazy/*r*/ = l.getFilterCalls(requireLazy/*r*/)), requireLazy/*r*/.length && (requireDynamic/*n*/ += "." + requireLazy/*r*/.map(function(global/*e*/) {
                    return global/*e*/.toString(require/*t*/)
                }).join("."))), requireDynamic/*n*/
            },
            getFilterCalls: function(global/*e*/) {
                for (var require/*t*/ = [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) a.RANGE_CALLS[global/*e*/[requireDynamic/*n*/].getName()] || require/*t*/.push(global/*e*/[requireDynamic/*n*/]);
                return require/*t*/
            }
        };
    module/*i*/.exports = l
});