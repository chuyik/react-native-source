__d("DocumentEntity",["DocumentEntityInstance","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentEntityInstance"),
        exports/*a*/ = require/*t*/("invariant"),
        DocumentEntityInstance/*s*/ = {},
        invariant/*l*/ = 0,
        u = {
            create: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return u.add(new o(global/*e*/, require/*t*/, requireDynamic/*n*/))
            },
            add: function(global/*e*/) {
                return DocumentEntityInstance/*s*/[++invariant/*l*/] = global/*e*/, invariant/*l*/.toString()
            },
            get: function(global/*e*/) {
                var require/*t*/ = DocumentEntityInstance/*s*/[global/*e*/];
                return require/*t*/ || exports/*a*/(0, "Unknown DocumentEntity key."), require/*t*/
            }
        };
    module/*i*/.exports = u
});