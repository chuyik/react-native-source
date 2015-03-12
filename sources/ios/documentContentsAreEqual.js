__d("documentContentsAreEqual",["DocumentContent"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.getData(),
            r = t.getData();
        if (n.text !== r.text) return !1;
        if (!n.text) return !0;
        for (var i = 0; i < n.inlines.length; i++)
            if (n.inlines[i] !== r.inlines[i] || n.blocks[i] !== r.blocks[i] || n.entities[i] !== r.entities[i]) return !1;
        return !0
    }
    t("DocumentContent");
    i.exports = o
});