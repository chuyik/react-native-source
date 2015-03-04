__d("TextInputState",["NativeModulesDeprecated"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = require/*t*/("NativeModulesDeprecated").RKUIManager,
        a = {
            _currentlyFocusedID: null,
            currentlyFocusedField: function() {
                return this._currentlyFocusedID
            },
            focusTextInput: function(global/*e*/) {
                this._currentlyFocusedID != global/*e*/ && null != global/*e*/ && (this._currentlyFocusedID = global/*e*/, NativeModulesDeprecated/*o*/.focus(global/*e*/))
            },
            blurTextInput: function(global/*e*/) {
                this._currentlyFocusedID == global/*e*/ && null != global/*e*/ && (this._currentlyFocusedID = null, NativeModulesDeprecated/*o*/.blur(global/*e*/))
            }
        };
    module/*i*/.exports = a
});