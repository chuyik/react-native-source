__d("AbstractTextEditorProps",["DocumentSelectionState","DocumentView","ReactPropTypes"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentSelectionState"),
        exports/*a*/ = require/*t*/("DocumentView"),
        DocumentSelectionState/*s*/ = require/*t*/("ReactPropTypes"),
        DocumentView/*l*/ = {
            propTypes: {
                documentView: DocumentSelectionState/*s*/.instanceOf(exports/*a*/).isRequired,
                ReactPropTypes/*selectionState*/: DocumentSelectionState/*s*/.instanceOf(o).isRequired,
                placeholder: DocumentSelectionState/*s*/.string,
                blockStyleFn: DocumentSelectionState/*s*/.func.isRequired,
                inlineStyleFn: DocumentSelectionState/*s*/.func.isRequired,
                keyBindingFn: DocumentSelectionState/*s*/.func.isRequired,
                spellCheck: DocumentSelectionState/*s*/.bool,
                onReturn: DocumentSelectionState/*s*/.func.isRequired,
                onEscape: DocumentSelectionState/*s*/.func,
                onTab: DocumentSelectionState/*s*/.func,
                onUpArrow: DocumentSelectionState/*s*/.func,
                onDownArrow: DocumentSelectionState/*s*/.func,
                onCharacters: DocumentSelectionState/*s*/.func.isRequired,
                onAlter: DocumentSelectionState/*s*/.func.isRequired,
                onCut: DocumentSelectionState/*s*/.func.isRequired,
                onPasteFragment: DocumentSelectionState/*s*/.func.isRequired,
                onPasteFiles: DocumentSelectionState/*s*/.func,
                onDelete: DocumentSelectionState/*s*/.func.isRequired,
                onDropSelection: DocumentSelectionState/*s*/.func.isRequired,
                onDropText: DocumentSelectionState/*s*/.func.isRequired,
                onDropFiles: DocumentSelectionState/*s*/.func,
                onSelect: DocumentSelectionState/*s*/.func.isRequired,
                onBlur: DocumentSelectionState/*s*/.func.isRequired,
                onFocus: DocumentSelectionState/*s*/.func.isRequired,
                inputView: DocumentSelectionState/*s*/.renderable
            },
            getDefaultProps: function() {
                return {
                    spellCheck: !1
                }
            }
        };
    module/*i*/.exports = DocumentView/*l*/
});