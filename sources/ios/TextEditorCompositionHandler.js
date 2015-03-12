__d("TextEditorCompositionHandler",["Keys","isSelectionAtLeafStart"],function (e, t, n, r, i) {
    var Keys/*o*/ = t("Keys"),
        isSelectionAtLeafStart/*a*/ = t("isSelectionAtLeafStart"),
        s = {
            onBeforeInput: function(e) {
                this._textInputData = (this._textInputData || "") + e.data
            },
            onCompositionStart: function() {
                this._compositionState.continueSession()
            },
            onCompositionEnd: function() {
                this._compositionState.pauseSession(), setTimeout(s.resolveComposition.bind(this), 0)
            },
            onKeyDown: function(e) {
                (e.which === Keys/*o*/.RIGHT || e.which === Keys/*o*/.LEFT) && e.preventDefault()
            },
            onKeyPress: function(e) {
                e.which === Keys/*o*/.RETURN && e.preventDefault()
            },
            resolveComposition: function() {
                if (!this._compositionState.inCompositionSession()) {
                    var e = this._textInputData;
                    this._textInputData = "", this._compositionState.terminateSession();
                    var t = !e || isSelectionAtLeafStart/*a*/(this.props.documentView, this.props.selectionState);
                    t && this.restoreEditorDOM(), this.exitCurrentMode(), this.removeRenderGuard(), e ? this.props.onCharacters(e) : t && (this.resetRenderedVersion(), this.forceUpdate())
                }
            }
        };
    i.exports = s
});