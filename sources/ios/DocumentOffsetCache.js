__d("DocumentOffsetCache",[],function (e, t, n, r, i) {
    function o(e) {
        return 0 > e ? 0 : e
    }

    function a() {
        "use strict";
        this.reset()
    }
    a.prototype.reset = function() {
        "use strict";
        this.$DocumentOffsetCache_block = -1, this.$DocumentOffsetCache_decoration = -1, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_cachedOffsets = {}
    }, a.prototype.nextBlock = function(e) {
        "use strict";
        this.$DocumentOffsetCache_block++, this.$DocumentOffsetCache_decoration = -1, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_recordOffset(e)
    }, a.prototype.nextDecoration = function(e) {
        "use strict";
        this.$DocumentOffsetCache_decoration++, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_recordOffset(e)
    }, a.prototype.nextLeaf = function(e) {
        "use strict";
        this.$DocumentOffsetCache_leaf++, this.$DocumentOffsetCache_recordOffset(e)
    }, a.prototype.getCurrentKey = function() {
        "use strict";
        return o(this.$DocumentOffsetCache_block) + "." + o(this.$DocumentOffsetCache_decoration) + "." + o(this.$DocumentOffsetCache_leaf)
    }, a.prototype.getOffset = function(e) {
        "use strict";
        return this.$DocumentOffsetCache_cachedOffsets[e]
    }, a.prototype.getKey = function(e) {
        "use strict";
        var t = null,
            n = null;
        for (var r in this.$DocumentOffsetCache_cachedOffsets) {
            var i = this.$DocumentOffsetCache_cachedOffsets[r],
                o = e - i;
            if (!(0 > o)) {
                if (0 === o) return r;
                (t > o || null === t) && (t = o, n = r)
            }
        }
        return n
    }, a.prototype.$DocumentOffsetCache_recordOffset = function(e) {
        "use strict";
        this.$DocumentOffsetCache_cachedOffsets[this.getCurrentKey()] = e
    }, i.exports = a
});