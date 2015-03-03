__d("GraphQLStoreRangeUtils",["GraphQL_EXPERIMENTAL","GraphQLConstants"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("GraphQL_EXPERIMENTAL"),
        exports/*a*/ = require/*t*/("GraphQLConstants"),
        GraphQL_EXPERIMENTAL/*s*/ = {},
        GraphQLConstants/*l*/ = {
            isRangeClientID: function(global/*e*/) {
                return !!GraphQL_EXPERIMENTAL/*s*/[global/*e*/]
            },
            getClientIDForRangeWithID: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = global/*e*/.getCalls().map(function(global/*e*/) {
                        return global/*e*/.toString(require/*t*/)
                    }).join(","),
                    module/*i*/ = requireDynamic/*n*/ + "_" + requireLazy/*r*/,
                    o = GraphQL_EXPERIMENTAL/*s*/[module/*i*/];
                return o || (GraphQL_EXPERIMENTAL/*s*/[module/*i*/] = {
                    dataID: requireDynamic/*n*/,
                    calls: global/*e*/.getCalls(),
                    callValues: require/*t*/
                }), module/*i*/
            },
            parseRangeClientID: function(global/*e*/) {
                return GraphQL_EXPERIMENTAL/*s*/[global/*e*/] || null
            },
            isRangeNode: function(global/*e*/) {
                if (!(global/*e*/ instanceof o.Field && global/*e*/.isLimitable())) return !1;
                if (global/*e*/.hasUnaliasedField(exports/*a*/.EDGES) || global/*e*/.hasUnaliasedField(exports/*a*/.PAGE_INFO)) return !0;
                var require/*t*/ = global/*e*/.getCalls();
                if (require/*t*/.length)
                    for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++)
                        if (require/*t*/[requireDynamic/*n*/].getName() in exports/*a*/.RANGE_CALLS) return !0;
                return !1
            },
            getStorageKeyForField: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/.getFieldName(),
                    requireLazy/*r*/ = global/*e*/.getCalls();
                return requireLazy/*r*/.length && (GraphQLConstants/*l*/.isRangeNode(global/*e*/) && (requireLazy/*r*/ = GraphQLConstants/*l*/.getFilterCalls(requireLazy/*r*/)), requireLazy/*r*/.length && (requireDynamic/*n*/ += "." + requireLazy/*r*/.map(function(global/*e*/) {
                    return global/*e*/.toString(require/*t*/)
                }).join("."))), requireDynamic/*n*/
            },
            getFilterCalls: function(global/*e*/) {
                for (var require/*t*/ = [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) exports/*a*/.RANGE_CALLS[global/*e*/[requireDynamic/*n*/].getName()] || require/*t*/.push(global/*e*/[requireDynamic/*n*/]);
                return require/*t*/
            }
        };
    module/*i*/.exports = GraphQLConstants/*l*/
});