__d("TextInputState",["NativeModulesDeprecated"],function (e, t, n, r, i) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = t("NativeModulesDeprecated").RKUIManager,
        a = {
            _currentlyFocusedID: null,
            currentlyFocusedField: function() {
                return this._currentlyFocusedID
            },
            focusTextInput: function(e) {
                this._currentlyFocusedID != e && null != e && (this._currentlyFocusedID = e, NativeModulesDeprecated/*o*/.focus(e))
            },
            blurTextInput: function(e) {
                this._currentlyFocusedID == e && null != e && (this._currentlyFocusedID = null, NativeModulesDeprecated/*o*/.blur(e))
            }
        };
    i.exports = a
});