__d("TextEditorCompositionState",["mixInEventEmitter"],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        this.$TextEditorCompositionState_composing = e
    }
    var mixInEventEmitter/*a*/ = t("mixInEventEmitter");
    o.prototype.startSession = function() {
        "use strict";
        this.$TextEditorCompositionState_composing = !0, this.emit("change")
    }, o.prototype.continueSession = function() {
        "use strict";
        this.$TextEditorCompositionState_composing = !0
    }, o.prototype.pauseSession = function() {
        "use strict";
        this.$TextEditorCompositionState_composing = !1
    }, o.prototype.terminateSession = function() {
        "use strict";
        this.$TextEditorCompositionState_composing = !1, this.emit("change")
    }, o.prototype.inCompositionSession = function() {
        "use strict";
        return this.$TextEditorCompositionState_composing
    }, mixInEventEmitter/*a*/(o, {
        change: !0
    }), i.exports = o
});