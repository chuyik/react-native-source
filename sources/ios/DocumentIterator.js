__d("DocumentIterator",["DocumentCharacters"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        this.$DocumentIterator_content = e, this.$DocumentIterator_decorator = t
    }
    var DocumentCharacters/*a*/ = t("DocumentCharacters"),
        s = DocumentCharacters/*a*/.BLOCK_DELIMITER;
    o.prototype.process = function(e, t, n) {
        "use strict";
        this.$DocumentIterator_blockFn = e, this.$DocumentIterator_decorationFn = t, this.$DocumentIterator_inlineFn = n, this.$DocumentIterator_text = this.$DocumentIterator_content.getText(), this.$DocumentIterator_inlines = this.$DocumentIterator_content.getInlineStyles(), this.$DocumentIterator_decorations = this.$DocumentIterator_decorator.getDecorations(this.$DocumentIterator_content), this.$DocumentIterator_processDocument()
    }, o.prototype.$DocumentIterator_processDocument = function() {
        "use strict";
        for (var e, t = this.$DocumentIterator_text.split(s), n = 0, r = 0; r < t.length; r++) e = n + t[r].length, this.$DocumentIterator_processBlock(n, e), n = e + s.length
    }, o.prototype.$DocumentIterator_processBlock = function(e, t) {
        "use strict";
        this.$DocumentIterator_blockFn.call(null, e, t), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_decorations, e, t, this.$DocumentIterator_processDecoration.bind(this))
    }, o.prototype.$DocumentIterator_processDecoration = function(e, t, n) {
        "use strict";
        this.$DocumentIterator_decorationFn.call(null, e, t, n), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_inlines, e, t, this.$DocumentIterator_processInline.bind(this))
    }, o.prototype.$DocumentIterator_processInline = function(e, t, n) {
        "use strict";
        this.$DocumentIterator_inlineFn.call(null, e, t, n)
    }, o.prototype.$DocumentIterator_iterateSequence = function(e, t, n, r) {
        "use strict";
        for (var i = t, o = t; n > o; o++) e[o] !== e[o + 1] && (r(i, o + 1, e[i]), i = o + 1);
        t === n ? r(t, n, null) : i !== n && r(i, n, e[i])
    }, i.exports = o
});