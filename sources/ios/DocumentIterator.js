__d("DocumentIterator",["DocumentCharacters"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        this.$DocumentIterator_content = global/*e*/, DocumentCharacters/*this.$DocumentIterator_decorator*/ = require/*exports/*t*/*/
    }
    var a = require/*exports/*t*/*/("DocumentCharacters"),
        s = a.BLOCK_DELIMITER;
    o.prototype.process = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_blockFn = global/*e*/, this.$DocumentIterator_decorationFn = require/*exports/*t*/*/, this.$DocumentIterator_inlineFn = requireDynamic/*n*/, this.$DocumentIterator_text = this.$DocumentIterator_content.getText(), this.$DocumentIterator_inlines = this.$DocumentIterator_content.getInlineStyles(), this.$DocumentIterator_decorations = DocumentCharacters/*this.$DocumentIterator_decorator*/.getDecorations(this.$DocumentIterator_content), this.$DocumentIterator_processDocument()
    }, o.prototype.$DocumentIterator_processDocument = function() {
        "use strict";
        for (var global/*e*/, require/*exports/*t*/*/ = this.$DocumentIterator_text.split(s), requireDynamic/*n*/ = 0, requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*exports/*t*/*/.length; requireLazy/*r*/++) global/*e*/ = requireDynamic/*n*/ + require/*exports/*t*/*/[requireLazy/*r*/].length, this.$DocumentIterator_processBlock(requireDynamic/*n*/, global/*e*/), requireDynamic/*n*/ = global/*e*/ + s.length
    }, o.prototype.$DocumentIterator_processBlock = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        this.$DocumentIterator_blockFn.call(null, global/*e*/, require/*exports/*t*/*/), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_decorations, global/*e*/, require/*exports/*t*/*/, this.$DocumentIterator_processDecoration.bind(this))
    }, o.prototype.$DocumentIterator_processDecoration = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_decorationFn.call(null, global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_inlines, global/*e*/, require/*exports/*t*/*/, this.$DocumentIterator_processInline.bind(this))
    }, o.prototype.$DocumentIterator_processInline = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_inlineFn.call(null, global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/)
    }, o.prototype.$DocumentIterator_iterateSequence = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        "use strict";
        for (var module/*i*/ = require/*exports/*t*/*/, o = require/*exports/*t*/*/; requireDynamic/*n*/ > o; o++) global/*e*/[o] !== global/*e*/[o + 1] && (requireLazy/*r*/(module/*i*/, o + 1, global/*e*/[module/*i*/]), module/*i*/ = o + 1);
        require/*exports/*t*/*/ === requireDynamic/*n*/ ? requireLazy/*r*/(require/*exports/*t*/*/, requireDynamic/*n*/, null) : module/*i*/ !== requireDynamic/*n*/ && requireLazy/*r*/(module/*i*/, requireDynamic/*n*/, global/*e*/[module/*i*/])
    }, module/*i*/.exports = o
});