__d("getActiveElement",[],function (e, t, n, r, i) {
    function o() {
        try {
            return document.activeElement || document.body
        } catch (e) {
            return document.body
        }
    }
    i.exports = o
});