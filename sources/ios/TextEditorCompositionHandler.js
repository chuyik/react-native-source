__d("TextEditorCompositionHandler",["Keys","isSelectionAtLeafStart"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var Keys/*o*/ = require/*t*/("Keys"),
        isSelectionAtLeafStart/*a*/ = require/*t*/("isSelectionAtLeafStart"),
        s = {
            onBeforeInput: function(global/*e*/) {
                this._textInputData = (this._textInputData || "") + global/*e*/.data
            },
            onCompositionStart: function() {
                this._compositionState.continueSession()
            },
            onCompositionEnd: function() {
                this._compositionState.pauseSession(), setTimeout(s.resolveComposition.bind(this), 0)
            },
            onKeyDown: function(global/*e*/) {
                (global/*e*/.which === Keys/*o*/.RIGHT || global/*e*/.which === Keys/*o*/.LEFT) && global/*e*/.preventDefault()
            },
            onKeyPress: function(global/*e*/) {
                global/*e*/.which === Keys/*o*/.RETURN && global/*e*/.preventDefault()
            },
            resolveComposition: function() {
                if (!this._compositionState.inCompositionSession()) {
                    var global/*e*/ = this._textInputData;
                    this._textInputData = "", this._compositionState.terminateSession();
                    var require/*t*/ = !global/*e*/ || isSelectionAtLeafStart/*a*/(this.props.documentView, this.props.selectionState);
                    require/*t*/ && this.restoreEditorDOM(), this.exitCurrentMode(), this.removeRenderGuard(), global/*e*/ ? this.props.onCharacters(global/*e*/) : require/*t*/ && (this.resetRenderedVersion(), this.forceUpdate())
                }
            }
        };
    module/*i*/.exports = s
});