__d("DocumentView",["DocumentIterator","DocumentOffsetCache","UnicodeBidi","createArrayFrom","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        "use strict";
        this.$DocumentView_content = global/*e*/, this.$DocumentView_decorator = require/*t*/, this.$DocumentView_currentFingerprint = [], this.$DocumentView_iteratedVersion = null, this.$DocumentView_blockDirections = [], this.$DocumentView_iterator = new a(this.$DocumentView_content, this.$DocumentView_decorator), this.$DocumentView_offsets = new s(this.$DocumentView_iterator)
    }
    var a = require/*t*/("DocumentIterator"),
        s = require/*t*/("DocumentOffsetCache"),
        l = require/*t*/("UnicodeBidi"),
        u = require/*t*/("createArrayFrom"),
        c = require/*t*/("emptyFunction");
    o.prototype.getContent = function() {
        "use strict";
        return this.$DocumentView_content
    }, o.prototype.getText = function() {
        "use strict";
        return this.$DocumentView_content.getText()
    }, o.prototype.getEntities = function() {
        "use strict";
        return this.$DocumentView_content.getEntities()
    }, o.prototype.getFragment = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.$DocumentView_content.getFragment(global/*e*/, require/*t*/)
    }, o.prototype.getVersion = function() {
        "use strict";
        return this.$DocumentView_content.getVersion()
    }, o.prototype.getBlockDirections = function() {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_blockDirections
    }, o.prototype.getFingerprint = function() {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_currentFingerprint.join(":")
    }, o.prototype.getOffset = function(global/*e*/) {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_offsets.getOffset(global/*e*/)
    }, o.prototype.getKey = function(global/*e*/) {
        "use strict";
        return this.$DocumentView_fillCaches(), this.$DocumentView_offsets.getKey(global/*e*/)
    }, o.prototype.iterate = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";

        function requireLazy/*r*/(require/*t*/, requireDynamic/*n*/) {
            a.nextBlock(require/*t*/), p(require/*t*/, requireDynamic/*n*/), global/*e*/(a.getCurrentKey(), require/*t*/, requireDynamic/*n*/, u[l++])
        }

        function module/*i*/(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
            var module/*i*/ = null;
            a.nextDecoration(global/*e*/), null !== requireLazy/*r*/ && (c("D", requireLazy/*r*/, requireDynamic/*n*/ - global/*e*/), module/*i*/ = s.getComponentForKey(requireLazy/*r*/)), require/*t*/(a.getCurrentKey(), global/*e*/, requireDynamic/*n*/, module/*i*/)
        }

        function o(global/*e*/, require/*t*/, requireLazy/*r*/) {
            a.nextLeaf(global/*e*/), c("L", requireLazy/*r*/), requireDynamic/*n*/(a.getCurrentKey(), global/*e*/, require/*t*/, requireLazy/*r*/)
        }
        this.$DocumentView_iteratedVersion = this.getVersion(), this.$DocumentView_currentFingerprint.length = 0, this.$DocumentView_blockDirections.length = 0, this.$DocumentView_offsets.reset();
        var a = this.$DocumentView_offsets,
            s = this.$DocumentView_decorator,
            l = 0,
            u = this.$DocumentView_content.getBlockStyles(),
            c = this.$DocumentView_recordFingerprint.bind(this),
            p = this.$DocumentView_recordBlockDirection.bind(this);
        this.$DocumentView_iterator.process(requireLazy/*r*/, module/*i*/, o)
    }, o.prototype.$DocumentView_fillCaches = function() {
        "use strict";
        this.$DocumentView_iteratedVersion !== this.getVersion() && this.iterate(c, c, c)
    }, o.prototype.$DocumentView_recordFingerprint = function() {
        "use strict";
        this.$DocumentView_currentFingerprint.push(u(arguments).join("-"))
    }, o.prototype.$DocumentView_recordBlockDirection = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = this.$DocumentView_content.getText().slice(global/*e*/, require/*t*/),
            requireLazy/*r*/ = this.$DocumentView_blockDirections,
            module/*i*/ = l.getDirection(requireDynamic/*n*/, requireLazy/*r*/[requireLazy/*r*/.length - 1]);
        this.$DocumentView_blockDirections.push(module/*i*/)
    }, module/*i*/.exports = o
});