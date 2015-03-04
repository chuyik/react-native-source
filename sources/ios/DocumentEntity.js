__d("DocumentEntity",["DocumentEntityInstance","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var DocumentEntityInstance/*o*/ = require/*t*/("DocumentEntityInstance"),
        invariant/*a*/ = require/*t*/("invariant"),
        s = {},
        l = 0,
        u = {
            create: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return u.add(new DocumentEntityInstance/*o*/(global/*e*/, require/*t*/, requireDynamic/*n*/))
            },
            add: function(global/*e*/) {
                return s[++l] = global/*e*/, l.toString()
            },
            get: function(global/*e*/) {
                var require/*t*/ = s[global/*e*/];
                return require/*t*/ || invariant/*a*/(0, "Unknown DocumentEntity key."), require/*t*/
            }
        };
    module/*i*/.exports = u
});