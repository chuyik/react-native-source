__d("randomInt",["invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*invariant/*n*/*/ = arguments.length;
        requireDynamic/*invariant/*n*/*/ > 0 && 2 >= requireDynamic/*invariant/*n*/*/ || a(0, "randomInt: expected 1 or 2 arguments but got %s.", requireDynamic/*invariant/*n*/*/), 1 === requireDynamic/*invariant/*n*/*/ && (require/*exports/*t*/*/ = global/*e*/, global/*e*/ = 0), require/*exports/*t*/*/ > global/*e*/ || a(0, "randomInt: expected max to be > min, got %s > %s", require/*exports/*t*/*/, global/*e*/);
        var requireLazy/*r*/ = this.random || Math.random;
        return Math.floor(global/*e*/ + requireLazy/*r*/() * (require/*exports/*t*/*/ - global/*e*/))
    }
    var a = require/*exports/*t*/*/("invariant");
    module/*i*/.exports = o
});