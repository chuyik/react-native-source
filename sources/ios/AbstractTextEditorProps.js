__d("AbstractTextEditorProps",["DocumentSelectionState","DocumentView","ReactPropTypes"],function (e, t, n, r, i) {
    var DocumentSelectionState/*o*/ = t("DocumentSelectionState"),
        DocumentView/*a*/ = t("DocumentView"),
        ReactPropTypes/*s*/ = t("ReactPropTypes"),
        l = {
            propTypes: {
                documentView: ReactPropTypes/*s*/.instanceOf(DocumentView/*a*/).isRequired,
                selectionState: ReactPropTypes/*s*/.instanceOf(DocumentSelectionState/*o*/).isRequired,
                placeholder: ReactPropTypes/*s*/.string,
                blockStyleFn: ReactPropTypes/*s*/.func.isRequired,
                inlineStyleFn: ReactPropTypes/*s*/.func.isRequired,
                keyBindingFn: ReactPropTypes/*s*/.func.isRequired,
                spellCheck: ReactPropTypes/*s*/.bool,
                onReturn: ReactPropTypes/*s*/.func.isRequired,
                onEscape: ReactPropTypes/*s*/.func,
                onTab: ReactPropTypes/*s*/.func,
                onUpArrow: ReactPropTypes/*s*/.func,
                onDownArrow: ReactPropTypes/*s*/.func,
                onCharacters: ReactPropTypes/*s*/.func.isRequired,
                onAlter: ReactPropTypes/*s*/.func.isRequired,
                onCut: ReactPropTypes/*s*/.func.isRequired,
                onPasteFragment: ReactPropTypes/*s*/.func.isRequired,
                onPasteFiles: ReactPropTypes/*s*/.func,
                onDelete: ReactPropTypes/*s*/.func.isRequired,
                onDropSelection: ReactPropTypes/*s*/.func.isRequired,
                onDropText: ReactPropTypes/*s*/.func.isRequired,
                onDropFiles: ReactPropTypes/*s*/.func,
                onSelect: ReactPropTypes/*s*/.func.isRequired,
                onBlur: ReactPropTypes/*s*/.func.isRequired,
                onFocus: ReactPropTypes/*s*/.func.isRequired,
                inputView: ReactPropTypes/*s*/.renderable
            },
            getDefaultProps: function() {
                return {
                    spellCheck: !1
                }
            }
        };
    i.exports = l
});