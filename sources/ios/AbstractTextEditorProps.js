__d("AbstractTextEditorProps",["DocumentSelectionState","DocumentView","ReactPropTypes"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentSelectionState"),
        a = require/*t*/("DocumentView"),
        s = require/*t*/("ReactPropTypes"),
        l = {
            propTypes: {
                documentView: s.instanceOf(a).isRequired,
                selectionState: s.instanceOf(o).isRequired,
                placeholder: s.string,
                blockStyleFn: s.func.isRequired,
                inlineStyleFn: s.func.isRequired,
                keyBindingFn: s.func.isRequired,
                spellCheck: s.bool,
                onReturn: s.func.isRequired,
                onEscape: s.func,
                onTab: s.func,
                onUpArrow: s.func,
                onDownArrow: s.func,
                onCharacters: s.func.isRequired,
                onAlter: s.func.isRequired,
                onCut: s.func.isRequired,
                onPasteFragment: s.func.isRequired,
                onPasteFiles: s.func,
                onDelete: s.func.isRequired,
                onDropSelection: s.func.isRequired,
                onDropText: s.func.isRequired,
                onDropFiles: s.func,
                onSelect: s.func.isRequired,
                onBlur: s.func.isRequired,
                onFocus: s.func.isRequired,
                inputView: s.renderable
            },
            getDefaultProps: function() {
                return {
                    spellCheck: !1
                }
            }
        };
    module/*i*/.exports = l
});