__d("DocumentOffsetCache",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return 0 > global/*e*/ ? 0 : global/*e*/
    }

    function a() {
        "use strict";
        this.reset()
    }
    a.prototype.reset = function() {
        "use strict";
        this.$DocumentOffsetCache_block = -1, this.$DocumentOffsetCache_decoration = -1, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_cachedOffsets = {}
    }, a.prototype.nextBlock = function(global/*e*/) {
        "use strict";
        this.$DocumentOffsetCache_block++, this.$DocumentOffsetCache_decoration = -1, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_recordOffset(global/*e*/)
    }, a.prototype.nextDecoration = function(global/*e*/) {
        "use strict";
        this.$DocumentOffsetCache_decoration++, this.$DocumentOffsetCache_leaf = -1, this.$DocumentOffsetCache_recordOffset(global/*e*/)
    }, a.prototype.nextLeaf = function(global/*e*/) {
        "use strict";
        this.$DocumentOffsetCache_leaf++, this.$DocumentOffsetCache_recordOffset(global/*e*/)
    }, a.prototype.getCurrentKey = function() {
        "use strict";
        return o(this.$DocumentOffsetCache_block) + "." + o(this.$DocumentOffsetCache_decoration) + "." + o(this.$DocumentOffsetCache_leaf)
    }, a.prototype.getOffset = function(global/*e*/) {
        "use strict";
        return this.$DocumentOffsetCache_cachedOffsets[global/*e*/]
    }, a.prototype.getKey = function(global/*e*/) {
        "use strict";
        var require/*t*/ = null,
            requireDynamic/*n*/ = null;
        for (var requireLazy/*r*/ in this.$DocumentOffsetCache_cachedOffsets) {
            var module/*i*/ = this.$DocumentOffsetCache_cachedOffsets[requireLazy/*r*/],
                o = global/*e*/ - module/*i*/;
            if (!(0 > o)) {
                if (0 === o) return requireLazy/*r*/;
                (require/*t*/ > o || null === require/*t*/) && (require/*t*/ = o, requireDynamic/*n*/ = requireLazy/*r*/)
            }
        }
        return requireDynamic/*n*/
    }, a.prototype.$DocumentOffsetCache_recordOffset = function(global/*e*/) {
        "use strict";
        this.$DocumentOffsetCache_cachedOffsets[this.getCurrentKey()] = global/*e*/
    }, module/*i*/.exports = a
});