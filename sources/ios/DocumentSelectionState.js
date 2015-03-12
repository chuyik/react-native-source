__d("DocumentSelectionState",["mixInEventEmitter"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        this.$DocumentSelectionState_anchorOffset = e, this.$DocumentSelectionState_focusOffset = t, this.$DocumentSelectionState_hasFocus = !1
    }
    var mixInEventEmitter/*a*/ = t("mixInEventEmitter");
    o.prototype.update = function(e, t) {
        "use strict";
        (this.$DocumentSelectionState_anchorOffset !== e || this.$DocumentSelectionState_focusOffset !== t) && (this.$DocumentSelectionState_anchorOffset = e, this.$DocumentSelectionState_focusOffset = t, this.emit("update"))
    }, o.prototype.constrainLength = function(e) {
        "use strict";
        this.update(Math.min(this.$DocumentSelectionState_anchorOffset, e), Math.min(this.$DocumentSelectionState_focusOffset, e))
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
    }, o.prototype.overlaps = function(e, t) {
        "use strict";
        return this.hasFocus() && this.getStartOffset() <= t && e <= this.getEndOffset()
    }, mixInEventEmitter/*a*/(o, {
        blur: !0,
        focus: !0,
        update: !0
    }), i.exports = o
});