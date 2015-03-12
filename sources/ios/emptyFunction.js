__d("emptyFunction",[],function (e, t, n, r, i) {
    function o(e) {
        return function() {
            return e
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
        thatReturnsArgument: function(e) {
            return e
        }
    }), i.exports = a
});