__d("DocumentSelectionState",["mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        "use strict";
        this.$DocumentSelectionState_anchorOffset = global/*e*/, this.$DocumentSelectionState_focusOffset = require/*t*/, this.$DocumentSelectionState_hasFocus = !1
    }
    var mixInEventEmitter/*a*/ = require/*t*/("mixInEventEmitter");
    o.prototype.update = function(global/*e*/, require/*t*/) {
        "use strict";
        (this.$DocumentSelectionState_anchorOffset !== global/*e*/ || this.$DocumentSelectionState_focusOffset !== require/*t*/) && (this.$DocumentSelectionState_anchorOffset = global/*e*/, this.$DocumentSelectionState_focusOffset = require/*t*/, this.emit("update"))
    }, o.prototype.constrainLength = function(global/*e*/) {
        "use strict";
        this.update(Math.min(this.$DocumentSelectionState_anchorOffset, global/*e*/), Math.min(this.$DocumentSelectionState_focusOffset, global/*e*/))
    }, o.prototype.focus = function() {
        "use strict";
        this.$DocumentSelectionState_hasFocus || (this.$DocumentSelectionState_hasFocus = !0, this.emit("focus"))
    }, o.prototype.blur = function() {
        "use strict";
        this.$DocumentSelectionState_hasFocus && (this.$DocumentSelectionState_hasFocus = !1, this.emit("blur"))
    }, o.prototype.hasFocus = function() {
        "use strict";
        return this.$DocumentSelectionState_hasFocus
    }, o.prototype.isCollapsed = function() {
        "use strict";
        return this.$DocumentSelectionState_anchorOffset === this.$DocumentSelectionState_focusOffset
    }, o.prototype.isBackward = function() {
        "use strict";
        return this.$DocumentSelectionState_anchorOffset > this.$DocumentSelectionState_focusOffset
    }, o.prototype.getAnchorOffset = function() {
        "use strict";
        return this.$DocumentSelectionState_hasFocus ? this.$DocumentSelectionState_anchorOffset : null
    }, o.prototype.getFocusOffset = function() {
        "use strict";
        return this.$DocumentSelectionState_hasFocus ? this.$DocumentSelectionState_focusOffset : null
    }, o.prototype.getStartOffset = function() {
        "use strict";
        return this.$DocumentSelectionState_hasFocus ? Math.min(this.$DocumentSelectionState_anchorOffset, this.$DocumentSelectionState_focusOffset) : null
    }, o.prototype.getEndOffset = function() {
        "use strict";
        return this.$DocumentSelectionState_hasFocus ? Math.max(this.$DocumentSelectionState_anchorOffset, this.$DocumentSelectionState_focusOffset) : null
    }, o.prototype.overlaps = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.hasFocus() && this.getStartOffset() <= require/*t*/ && global/*e*/ <= this.getEndOffset()
    }, mixInEventEmitter/*a*/(o, {
        blur: !0,
        focus: !0,
        update: !0
    }), module/*i*/.exports = o
});