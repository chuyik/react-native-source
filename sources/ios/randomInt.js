__d("randomInt",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = arguments.length;
        requireDynamic/*n*/ > 0 && 2 >= requireDynamic/*n*/ || a(0, "randomInt: expected 1 or 2 arguments but got %s.", requireDynamic/*n*/), 1 === requireDynamic/*n*/ && (require/*t*/ = global/*e*/, global/*e*/ = 0), require/*t*/ > global/*e*/ || a(0, "randomInt: expected max to be > min, got %s > %s", require/*t*/, global/*e*/);
        var requireLazy/*r*/ = this.random || Math.random;
        return Math.floor(global/*e*/ + requireLazy/*r*/() * (require/*t*/ - global/*e*/))
    }
    var a = require/*t*/("invariant");
    module/*i*/.exports = o
});