__d("Promise",["ES6Promise","invariant","setImmediate","throwImmediate"],function (global/*throwImmediate/*e*/*/, require/*setImmediate/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*setImmediate/*t*/*/("ES6Promise"),
        exports/*a*/ = o.prototype,
        ES6Promise/*s*/ = require/*setImmediate/*t*/*/("invariant"),
        invariant/*l*/ = (require/*setImmediate/*t*/*/("setImmediate"), require/*setImmediate/*t*/*/("throwImmediate"));
    exports/*a*/.finally = function(global/*throwImmediate/*e*/*/) {
        return this.then(global/*throwImmediate/*e*/*/, global/*throwImmediate/*e*/*/)
    }, exports/*a*/.done = function(global/*throwImmediate/*e*/*/, require/*setImmediate/*t*/*/) {
        this.then(global/*throwImmediate/*e*/*/, require/*setImmediate/*t*/*/).then(null, invariant/*l*/)
    }, o.allObject = function(global/*throwImmediate/*e*/*/) {
        Array.isArray(global/*throwImmediate/*e*/*/) && ES6Promise/*s*/(0, "expected an object, got an array instead");
        var require/*setImmediate/*t*/*/ = Object.keys(global/*throwImmediate/*e*/*/);
        return o.all(require/*setImmediate/*t*/*/.map(function(require/*setImmediate/*t*/*/) {
            return global/*throwImmediate/*e*/*/[require/*setImmediate/*t*/*/]
        })).then(function(global/*throwImmediate/*e*/*/) {
            var requireDynamic/*n*/ = {};
            return global/*throwImmediate/*e*/*/.forEach(function(global/*throwImmediate/*e*/*/, requireLazy/*r*/) {
                requireDynamic/*n*/[require/*setImmediate/*t*/*/[requireLazy/*r*/]] = global/*throwImmediate/*e*/*/
            }), requireDynamic/*n*/
        })
    }, module/*i*/.exports = o
});