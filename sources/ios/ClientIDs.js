__d("ClientIDs",["randomInt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var randomInt/*o*/ = require/*t*/("randomInt"),
        a = {},
        s = {
            getNewClientID: function() {
                var global/*e*/ = Date.now(),
                    require/*t*/ = global/*e*/ + ":" + (randomInt/*o*/(0, 4294967295) + 1);
                return a[require/*t*/] = !0, require/*t*/
            },
            isExistingClientID: function(global/*e*/) {
                return !!a[global/*e*/]
            }
        };
    module/*i*/.exports = s
});