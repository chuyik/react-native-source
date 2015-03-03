__d("DocumentContent",["DocumentCharacters","fillArray","invariant","ComposedBlockType","ComposedInlineStyle"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        return require/*t*/.length !== l(global/*e*/) && d(0, "Length of block array must match number of blocks in text."), require/*t*/
    }

    function a(global/*e*/, require/*t*/) {
        return require/*t*/.length != global/*e*/.length && d(0, "Length of inline style array must match text length."), require/*t*/
    }

    function s(global/*e*/, require/*t*/) {
        return require/*t*/.length !== global/*e*/.length && d(0, "Length of entity array must match text length."), require/*t*/
    }

    function l(global/*e*/, require/*t*/) {
        return null != require/*t*/ && (global/*e*/ = global/*e*/.substr(0, require/*t*/)), global/*e*/.split(h).length
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        "use strict";
        this.$DocumentContent_version = 1, this.$DocumentContent_text = global/*e*/ || "", this.$DocumentContent_inlines = require/*t*/ ? a(this.$DocumentContent_text, require/*t*/) : p(this.$DocumentContent_text.length, m.NONE), this.$DocumentContent_blocks = requireDynamic/*n*/ ? o(this.$DocumentContent_text, requireDynamic/*n*/) : p(l(this.$DocumentContent_text), f.UNSTYLED), this.$DocumentContent_entities = requireLazy/*r*/ ? s(this.$DocumentContent_text, requireLazy/*r*/) : p(this.$DocumentContent_text.length, null), this.$DocumentContent_undoStack = [], this.$DocumentContent_redoStack = []
    }
    var c = require/*t*/("DocumentCharacters"),
        p = require/*t*/("fillArray"),
        d = require/*t*/("invariant"),
        h = c.BLOCK_DELIMITER,
        f = require/*t*/("ComposedBlockType"),
        m = require/*t*/("ComposedInlineStyle");
    u.prototype.bumpVersion = function() {
        "use strict";
        this.$DocumentContent_version++
    }, u.prototype.getVersion = function() {
        "use strict";
        return "v" + this.$DocumentContent_version
    }, u.prototype.getText = function() {
        "use strict";
        return this.$DocumentContent_text
    }, u.prototype.getInlineStyles = function() {
        "use strict";
        return this.$DocumentContent_inlines
    }, u.prototype.getBlockStyles = function() {
        "use strict";
        return this.$DocumentContent_blocks
    }, u.prototype.getBlockStylesAroundRange = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = l(this.$DocumentContent_text, global/*e*/) - 1,
            requireLazy/*r*/ = l(this.$DocumentContent_text, require/*t*/);
        return this.$DocumentContent_blocks.slice(requireDynamic/*n*/, requireLazy/*r*/)
    }, u.prototype.getEntities = function() {
        "use strict";
        return this.$DocumentContent_entities
    }, u.prototype.getFragment = function(global/*e*/, require/*t*/) {
        "use strict";
        return {
            text: this.$DocumentContent_text.slice(global/*e*/, require/*t*/),
            inlines: this.$DocumentContent_inlines.slice(global/*e*/, require/*t*/),
            blocks: this.getBlockStylesAroundRange(global/*e*/, require/*t*/),
            entities: this.$DocumentContent_entities.slice(global/*e*/, require/*t*/)
        }
    }, u.prototype.getData = function() {
        "use strict";
        return {
            text: this.$DocumentContent_text,
            inlines: this.$DocumentContent_inlines,
            blocks: this.$DocumentContent_blocks,
            entities: this.$DocumentContent_entities
        }
    }, u.prototype.update = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        "use strict";
        s(global/*e*/, requireLazy/*r*/), a(global/*e*/, require/*t*/), o(global/*e*/, requireDynamic/*n*/), this.$DocumentContent_text = global/*e*/, this.$DocumentContent_inlines = require/*t*/, this.$DocumentContent_blocks = requireDynamic/*n*/, this.$DocumentContent_entities = requireLazy/*r*/, this.$DocumentContent_version++
    }, u.prototype.addForwardTransaction = function(global/*e*/) {
        "use strict";
        this.$DocumentContent_undoStack.push(global/*e*/), this.$DocumentContent_redoStack.length = 0
    }, u.prototype.getUndoDiffs = function() {
        "use strict";
        if (this.$DocumentContent_undoStack.length > 0) {
            var global/*e*/ = this.$DocumentContent_undoStack.pop();
            return this.$DocumentContent_redoStack.push(global/*e*/), global/*e*/
        }
        return []
    }, u.prototype.getRedoDiffs = function() {
        "use strict";
        if (this.$DocumentContent_redoStack.length > 0) {
            var global/*e*/ = this.$DocumentContent_redoStack.pop();
            return this.$DocumentContent_undoStack.push(global/*e*/), global/*e*/
        }
        return []
    }, module/*i*/.exports = u
});