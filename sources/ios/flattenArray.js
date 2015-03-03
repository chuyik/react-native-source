__d("flattenArray",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        for (var require/*t*/ = global/*e*/.slice(), requireDynamic/*n*/ = []; require/*t*/.length;) {
            var requireLazy/*r*/ = require/*t*/.pop();
            Array.isArray(requireLazy/*r*/) ? Array.prototype.push.apply(require/*t*/, requireLazy/*r*/) : requireDynamic/*n*/.push(requireLazy/*r*/)
        }
        return requireDynamic/*n*/.reverse()
    }
    module/*i*/.exports = o
});