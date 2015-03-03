__d("emptyFunction",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return function() {
            return global/*e*/
        }
    }

    function a() {}
    Object.assign(a, {
        thatReturns: o,
        thatReturnsFalse: o(!1),
        thatReturnsTrue: o(!0),
        thatReturnsNull: o(null),
        thatReturnsThis: function() {
            return this
        },
        thatReturnsArgument: function(global/*e*/) {
            return global/*e*/
        }
    }), module/*i*/.exports = a
});