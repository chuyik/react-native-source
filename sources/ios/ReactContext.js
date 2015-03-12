__d("ReactContext",[],function (e, t, n, r, i) {
    "use strict";
    var o = {
        current: {},
        withContext: function(e, t) {
            var n, r = o.current;
            o.current = Object.assign({}, r, e);
            try {
                n = t()
            } finally {
                o.current = r
            }
            return n
        }
    };
    i.exports = o
});