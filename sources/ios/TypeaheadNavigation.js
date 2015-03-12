__d("TypeaheadNavigation",[],function (e, t, n, r, i) {
    var o = {
        moveUp: function(e, t, n) {
            var r = e.indexOf(t),
                i = -1 == r ? e.length - 1 : r - 1;
            n(-1 == i ? null : e[i])
        },
        moveDown: function(e, t, n) {
            var r = e.indexOf(t) + 1;
            n(r == e.length ? null : e[r])
        }
    };
    i.exports = o
});