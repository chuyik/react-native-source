__d("ClientIDs",["randomInt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("randomInt"),
        exports/*a*/ = {},
        randomInt/*s*/ = {
            getNewClientID: function() {
                var global/*e*/ = Date.now(),
                    require/*t*/ = global/*e*/ + ":" + (o(0, 4294967295) + 1);
                return exports/*a*/[require/*t*/] = !0, require/*t*/
            },
            isExistingClientID: function(global/*e*/) {
                return !!exports/*a*/[global/*e*/]
            }
        };
    module/*i*/.exports = randomInt/*s*/
});