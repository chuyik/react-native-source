__d("TextInputState",["NativeModulesDeprecated"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModulesDeprecated").RKUIManager,
        exports/*a*/ = {
            _currentlyFocusedID: null,
            NativeModulesDeprecated/*currentlyFocusedField*/: function() {
                return this._currentlyFocusedID
            },
            focusTextInput: function(global/*e*/) {
                this._currentlyFocusedID != global/*e*/ && null != global/*e*/ && (this._currentlyFocusedID = global/*e*/, o.focus(global/*e*/))
            },
            blurTextInput: function(global/*e*/) {
                this._currentlyFocusedID == global/*e*/ && null != global/*e*/ && (this._currentlyFocusedID = null, o.blur(global/*e*/))
            }
        };
    module/*i*/.exports = exports/*a*/
});