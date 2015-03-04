__d("TextEditorCompositionState",["mixInEventEmitter"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        this.$TextEditorCompositionState_composing = global/*e*/
    }
    var mixInEventEmitter/*a*/ = require/*t*/("mixInEventEmitter");
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
    }), module/*i*/.exports = o
});