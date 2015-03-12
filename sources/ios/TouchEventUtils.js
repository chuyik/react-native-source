__d("TouchEventUtils",[],function (e, t, n, r, i) {
    var o = {
        extractSingleTouch: function(e) {
            var t = e.touches,
                n = e.changedTouches,
                r = t && t.length > 0,
                i = n && n.length > 0;
            return !r && i ? n[0] : r ? t[0] : e
        }
    };
    i.exports = o
});