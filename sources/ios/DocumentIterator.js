__d("DocumentIterator",["DocumentCharacters"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        "use strict";
        this.$DocumentIterator_content = global/*e*/, this.$DocumentIterator_decorator = require/*t*/
    }
    var a = require/*t*/("DocumentCharacters"),
        s = a.BLOCK_DELIMITER;
    o.prototype.process = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_blockFn = global/*e*/, this.$DocumentIterator_decorationFn = require/*t*/, this.$DocumentIterator_inlineFn = requireDynamic/*n*/, this.$DocumentIterator_text = this.$DocumentIterator_content.getText(), this.$DocumentIterator_inlines = this.$DocumentIterator_content.getInlineStyles(), this.$DocumentIterator_decorations = this.$DocumentIterator_decorator.getDecorations(this.$DocumentIterator_content), this.$DocumentIterator_processDocument()
    }, o.prototype.$DocumentIterator_processDocument = function() {
        "use strict";
        for (var global/*e*/, require/*t*/ = this.$DocumentIterator_text.split(s), requireDynamic/*n*/ = 0, requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) global/*e*/ = requireDynamic/*n*/ + require/*t*/[requireLazy/*r*/].length, this.$DocumentIterator_processBlock(requireDynamic/*n*/, global/*e*/), requireDynamic/*n*/ = global/*e*/ + s.length
    }, o.prototype.$DocumentIterator_processBlock = function(global/*e*/, require/*t*/) {
        "use strict";
        this.$DocumentIterator_blockFn.call(null, global/*e*/, require/*t*/), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_decorations, global/*e*/, require/*t*/, this.$DocumentIterator_processDecoration.bind(this))
    }, o.prototype.$DocumentIterator_processDecoration = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_decorationFn.call(null, global/*e*/, require/*t*/, requireDynamic/*n*/), this.$DocumentIterator_iterateSequence(this.$DocumentIterator_inlines, global/*e*/, require/*t*/, this.$DocumentIterator_processInline.bind(this))
    }, o.prototype.$DocumentIterator_processInline = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        this.$DocumentIterator_inlineFn.call(null, global/*e*/, require/*t*/, requireDynamic/*n*/)
    }, o.prototype.$DocumentIterator_iterateSequence = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        "use strict";
        for (var module/*i*/ = require/*t*/, o = require/*t*/; requireDynamic/*n*/ > o; o++) global/*e*/[o] !== global/*e*/[o + 1] && (requireLazy/*r*/(module/*i*/, o + 1, global/*e*/[module/*i*/]), module/*i*/ = o + 1);
        require/*t*/ === requireDynamic/*n*/ ? requireLazy/*r*/(require/*t*/, requireDynamic/*n*/, null) : module/*i*/ !== requireDynamic/*n*/ && requireLazy/*r*/(module/*i*/, requireDynamic/*n*/, global/*e*/[module/*i*/])
    }, module/*i*/.exports = o
});