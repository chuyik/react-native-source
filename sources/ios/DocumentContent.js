__d("DocumentContent",["DocumentCharacters","fillArray","invariant","ComposedBlockType","ComposedInlineStyle"],function (e, t, n, r, i) {
    function o(e, t) {
        return t.length !== l(e) && invariant/*d*/(0, "Length of block array must match number of blocks in text."), t
    }

    function a(e, t) {
        return t.length != e.length && invariant/*d*/(0, "Length of inline style array must match text length."), t
    }

    function s(e, t) {
        return t.length !== e.length && invariant/*d*/(0, "Length of entity array must match text length."), t
    }

    function l(e, t) {
        return null != t && (e = e.substr(0, t)), e.split(h).length
    }

    function u(e, t, n, r) {
        "use strict";
        this.$DocumentContent_version = 1, this.$DocumentContent_text = e || "", this.$DocumentContent_inlines = t ? a(this.$DocumentContent_text, t) : fillArray/*p*/(this.$DocumentContent_text.length, ComposedInlineStyle/*m*/.NONE), this.$DocumentContent_blocks = n ? o(this.$DocumentContent_text, n) : fillArray/*p*/(l(this.$DocumentContent_text), ComposedBlockType/*f*/.UNSTYLED), this.$DocumentContent_entities = r ? s(this.$DocumentContent_text, r) : fillArray/*p*/(this.$DocumentContent_text.length, null), this.$DocumentContent_undoStack = [], this.$DocumentContent_redoStack = []
    }
    var DocumentCharacters/*c*/ = t("DocumentCharacters"),
        fillArray/*p*/ = t("fillArray"),
        invariant/*d*/ = t("invariant"),
        h = DocumentCharacters/*c*/.BLOCK_DELIMITER,
        ComposedBlockType/*f*/ = t("ComposedBlockType"),
        ComposedInlineStyle/*m*/ = t("ComposedInlineStyle");
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
    }, u.prototype.getBlockStylesAroundRange = function(e, t) {
        "use strict";
        var n = l(this.$DocumentContent_text, e) - 1,
            r = l(this.$DocumentContent_text, t);
        return this.$DocumentContent_blocks.slice(n, r)
    }, u.prototype.getEntities = function() {
        "use strict";
        return this.$DocumentContent_entities
    }, u.prototype.getFragment = function(e, t) {
        "use strict";
        return {
            text: this.$DocumentContent_text.slice(e, t),
            inlines: this.$DocumentContent_inlines.slice(e, t),
            blocks: this.getBlockStylesAroundRange(e, t),
            entities: this.$DocumentContent_entities.slice(e, t)
        }
    }, u.prototype.getData = function() {
        "use strict";
        return {
            text: this.$DocumentContent_text,
            inlines: this.$DocumentContent_inlines,
            blocks: this.$DocumentContent_blocks,
            entities: this.$DocumentContent_entities
        }
    }, u.prototype.update = function(e, t, n, r) {
        "use strict";
        s(e, r), a(e, t), o(e, n), this.$DocumentContent_text = e, this.$DocumentContent_inlines = t, this.$DocumentContent_blocks = n, this.$DocumentContent_entities = r, this.$DocumentContent_version++
    }, u.prototype.addForwardTransaction = function(e) {
        "use strict";
        this.$DocumentContent_undoStack.push(e), this.$DocumentContent_redoStack.length = 0
    }, u.prototype.getUndoDiffs = function() {
        "use strict";
        if (this.$DocumentContent_undoStack.length > 0) {
            var e = this.$DocumentContent_undoStack.pop();
            return this.$DocumentContent_redoStack.push(e), e
        }
        return []
    }, u.prototype.getRedoDiffs = function() {
        "use strict";
        if (this.$DocumentContent_redoStack.length > 0) {
            var e = this.$DocumentContent_redoStack.pop();
            return this.$DocumentContent_undoStack.push(e), e
        }
        return []
    }, i.exports = u
});