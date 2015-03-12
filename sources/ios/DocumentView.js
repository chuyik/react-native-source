__d("DocumentView",["DocumentIterator","DocumentOffsetCache","UnicodeBidi","createArrayFrom","emptyFunction"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        this.$DocumentView_content = e, this.$DocumentView_decorator = t, this.$DocumentView_currentFingerprint = [], this.$DocumentView_iteratedVersion = null, this.$DocumentView_blockDirections = [], this.$DocumentView_iterator = new DocumentIterator/*a*/(this.$DocumentView_content, this.$DocumentView_decorator), this.$DocumentView_offsets = new DocumentOffsetCache/*s*/(this.$DocumentView_iterator)
    }
    var DocumentIterator/*a*/ = t("DocumentIterator"),
        DocumentOffsetCache/*s*/ = t("DocumentOffsetCache"),
        UnicodeBidi/*l*/ = t("UnicodeBidi"),
        createArrayFrom/*u*/ = t("createArrayFrom"),
        emptyFunction/*c*/ = t("emptyFunction");
    o.prototype.getContent = function() {
        "use strict";
        return this.$DocumentView_content
    }, o.prototype.getText = function() {
        "use strict";
        return this.$DocumentView_content.getText()
    }, o.prototype.getEntities = function() {
        "use strict";
        return this.$DocumentView_content.getEntities()
    }, o.prototype.getFragment = function(e, t) {
        "use strict";
        return this.$DocumentView_content.getFragment(e, t)
    }, o.prototype.getVersion = function() {
        "use strict";
        return this.$DocumentView_content.getVersion()
    }, o.prototype.getBlockDirections = function() {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_blockDirections
    }, o.prototype.getFingerprint = function() {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_currentFingerprint.join(":")
    }, o.prototype.getOffset = function(e) {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_offsets.getOffset(e)
    }, o.prototype.getKey = function(e) {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_offsets.getKey(e)
    }, o.prototype.iterate = function(e, t, n) {
        "use strict";

        function r(t, n) {
            DocumentIterator/*a*/.nextBlock(t), p(t, n), e(DocumentIterator/*a*/.getCurrentKey(), t, n, createArrayFrom/*u*/[UnicodeBidi/*l*/++])
        }

        function i(e, n, r) {
            var i = null;
            DocumentIterator/*a*/.nextDecoration(e), null !== r && (emptyFunction/*c*/("D", r, n - e), i = DocumentOffsetCache/*s*/.getComponentForKey(r)), t(DocumentIterator/*a*/.getCurrentKey(), e, n, i)
        }

        function o(e, t, r) {
            DocumentIterator/*a*/.nextLeaf(e), emptyFunction/*c*/("L", r), n(DocumentIterator/*a*/.getCurrentKey(), e, t, r)
        }
        this.$DocumentView_iteratedVersion = this.getVersion(), this.$DocumentView_currentFingerprint.length = 0, this.$DocumentView_blockDirections.length = 0, this.$DocumentView_offsets.reset();
        var DocumentIterator/*a*/ = this.$DocumentView_offsets,
            DocumentOffsetCache/*s*/ = this.$DocumentView_decorator,
            UnicodeBidi/*l*/ = 0,
            createArrayFrom/*u*/ = this.$DocumentView_content.getBlockStyles(),
            emptyFunction/*c*/ = this.$DocumentView_recordFingerprint.bind(this),
            p = this.$DocumentView_recordBlockDirection.bind(this);
        this.$DocumentView_iterator.process(r, i, o)
    }, o.prototype.$DocumentView_fillCaches = function() {
        "use strict";
        this.$DocumentView_iteratedVersion !== this.getVersion() && this.iterate(emptyFunction/*c*/, emptyFunction/*c*/, emptyFunction/*c*/)
    }, o.prototype.$DocumentView_recordFingerprint = function() {
        "use strict";
        this.$DocumentView_currentFingerprint.push(createArrayFrom/*u*/(arguments).join("-"))
    }, o.prototype.$DocumentView_recordBlockDirection = function(e, t) {
        "use strict";
        var n = this.$DocumentView_content.getText().slice(e, t),
            r = this.$DocumentView_blockDirections,
            i = UnicodeBidi/*l*/.getDirection(n, r[r.length - 1]);
        this.$DocumentView_blockDirections.push(i)
    }, i.exports = o
});