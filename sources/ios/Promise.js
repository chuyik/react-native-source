__d("Promise",["ES6Promise","invariant","setImmediate","throwImmediate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var ES6Promise/*o*/ = require/*t*/("ES6Promise"),
        a = ES6Promise/*o*/.prototype,
        invariant/*s*/ = require/*t*/("invariant"),
        l = (require/*t*/("setImmediate"), require/*t*/("throwImmediate"));
    a.finally = function(global/*e*/) {
        return this.then(global/*e*/, global/*e*/)
    }, a.done = function(global/*e*/, require/*t*/) {
        this.then(global/*e*/, require/*t*/).then(null, l)
    }, ES6Promise/*o*/.allObject = function(global/*e*/) {
        Array.isArray(global/*e*/) && invariant/*s*/(0, "expected an object, got an array instead");
        var require/*t*/ = Object.keys(global/*e*/);
        return ES6Promise/*o*/.all(require/*t*/.map(function(require/*t*/) {
            return global/*e*/[require/*t*/]
        })).then(function(global/*e*/) {
            var requireDynamic/*n*/ = {};
            return global/*e*/.forEach(function(global/*e*/, requireLazy/*r*/) {
                requireDynamic/*n*/[require/*t*/[requireLazy/*r*/]] = global/*e*/
            }), requireDynamic/*n*/
        })
    }, module/*i*/.exports = ES6Promise/*o*/
});