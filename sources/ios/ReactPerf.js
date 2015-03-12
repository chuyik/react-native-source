__d("ReactPerf",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        return n
    }
    var a = {
        enableMeasure: !1,
        storedMeasure: o,
        measure: function(e, t, n) {
            if (__DEV__) {
                var r = null,
                    i = function() {
                        return a.enableMeasure ? (r || (r = a.storedMeasure(e, t, n)), r.apply(this, arguments)) : n.apply(this, arguments)
                    };
                return i.displayName = e + "_" + t, i
            }
            return n
        },
        injection: {
            injectMeasure: function(e) {
                a.storedMeasure = e
            }
        }
    };
    i.exports = a
});