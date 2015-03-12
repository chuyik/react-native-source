__d("MentionsInput.react",["AbstractMentionsTextEditor.react","DocumentCharacters","DocumentCompositeDecorator","DocumentContent","DocumentDecorator","ComposedEntityType","DocumentSelectionState","DocumentView","MentionSpan","MentionSpan","MentionsTextEditorMixin","ReactPropTypes","React","MentionSpan","View","cx","emptyFunction","getDefaultKeyBinding","getEntityMatcher","getHashtagMatches"],function (e, t, n, r, i) {
    "use strict";
    var o = t("AbstractMentionsTextEditor.react"),
        DocumentCharacters/*a*/ = t("DocumentCharacters"),
        DocumentCompositeDecorator/*s*/ = t("DocumentCompositeDecorator"),
        DocumentContent/*l*/ = t("DocumentContent"),
        DocumentDecorator/*u*/ = t("DocumentDecorator"),
        ComposedEntityType/*c*/ = t("ComposedEntityType"),
        DocumentSelectionState/*p*/ = t("DocumentSelectionState"),
        DocumentView/*d*/ = t("DocumentView"),
        MentionSpan/*h*/ = t("MentionSpan"),
        MentionSpan/*f*/ = t("MentionSpan"),
        MentionsTextEditorMixin/*m*/ = t("MentionsTextEditorMixin"),
        ReactPropTypes/*g*/ = t("ReactPropTypes"),
        React/*_*/ = t("React"),
        MentionSpan/*y*/ = t("MentionSpan"),
        View/*v*/ = t("View"),
        cx/*S*/ = t("cx"),
        emptyFunction/*b*/ = t("emptyFunction"),
        getDefaultKeyBinding/*R*/ = t("getDefaultKeyBinding"),
        getEntityMatcher/*w*/ = t("getEntityMatcher"),
        getHashtagMatches/*C*/ = t("getHashtagMatches"),
        E = emptyFunction/*b*/.thatReturns(""),
        D = emptyFunction/*b*/.thatReturns(""),
        T = ComposedEntityType/*c*/.MENTION,
        x = new DocumentCompositeDecorator/*s*/([new DocumentDecorator/*u*/(getEntityMatcher/*w*/(function(e) {
            var t = e.getData();
            return e.getType() === T && t && t.isWeak
        }), MentionSpan/*y*/), new DocumentDecorator/*u*/(getEntityMatcher/*w*/(function(e) {
            return e.getType() === T
        }), MentionSpan/*f*/), new DocumentDecorator/*u*/(getHashtagMatches/*C*/, MentionSpan/*h*/)]),
        P = React/*_*/.createClass({
            displayName: "MentionsInput",
            mixins: [MentionsTextEditorMixin/*m*/],
            propTypes: {
                documentContent: ReactPropTypes/*g*/.instanceOf(DocumentContent/*l*/).isRequired,
                selectionState: ReactPropTypes/*g*/.instanceOf(DocumentSelectionState/*p*/).isRequired,
                mentionsSource: ReactPropTypes/*g*/.object,
                typeaheadView: ReactPropTypes/*g*/.func.isRequired,
                typeaheadViewProps: ReactPropTypes/*g*/.object,
                spellCheck: ReactPropTypes/*g*/.bool,
                placeholder: ReactPropTypes/*g*/.string,
                placeholderTextColor: ReactPropTypes/*g*/.string,
                className: ReactPropTypes/*g*/.string,
                autoflip: ReactPropTypes/*g*/.bool,
                handleReturn: ReactPropTypes/*g*/.func,
                handleDroppedFiles: ReactPropTypes/*g*/.func,
                handlePastedFiles: ReactPropTypes/*g*/.func,
                onAddMention: ReactPropTypes/*g*/.func,
                onShowMentions: ReactPropTypes/*g*/.func,
                onChange: ReactPropTypes/*g*/.func,
                onInputFocus: ReactPropTypes/*g*/.func,
                onInputBlur: ReactPropTypes/*g*/.func,
                onFile: ReactPropTypes/*g*/.func,
                inputView: ReactPropTypes/*g*/.renderable
            },
            focus: function() {
                this.refs.textEditor.focus()
            },
            blur: function() {
                this.refs.textEditor.blur()
            },
            _onReturn: function(e) {
                this.props.handleReturn && this.props.handleReturn(e) || this.onCharacters(DocumentCharacters/*a*/.BLOCK_DELIMITER)
            },
            _onBlur: function(e) {
                this.onBlur(e), this.props.onInputBlur && this.props.onInputBlur(e)
            },
            _onFocus: function(e) {
                this.onFocus(e), this.props.onInputFocus && this.props.onInputFocus(e)
            },
            _onClick: function() {
                this.refs.textEditor.focus()
            },
            _onTextInput: function(e) {
                var t = e.nativeEvent,
                    n = t.range.start,
                    r = t.range.end,
                    i = t.text;
                0 === i.length && r - n === 1 && this.props.selectionState.isCollapsed() && this.props.selectionState.getStartOffset() === n + 1 ? this.onBackspace() : this.onAlter(n, t.previousText, i)
            },
            _getStateForDocument: function(e) {
                return {
                    documentView: new DocumentView/*d*/(e, x)
                }
            },
            componentWillReceiveProps: function(e) {
                this.props.documentContent !== e.documentContent && this.setState(this._getStateForDocument(e.documentContent))
            },
            getInitialState: function() {
                return this._getStateForDocument(this.props.documentContent)
            },
            render: function() {
                return React/*_*/.createElement(View/*v*/, {
                    style: this.props.style,
                    className: cx/*S*/("uiMentionsInput/root"),
                    onClick: this._onClick,
                    onFocus: this._onFocus
                }, React/*_*/.createElement(o, {
                    ref: "textEditor",
                    className: cx/*S*/("public/uiMentionsInput/input"),
                    documentView: this.state.documentView,
                    placeholder: this.props.placeholder,
                    placeholderTextColor: this.props.placeholderTextColor,
                    autoFocus: this.props.autoFocus,
                    selectionState: this.props.selectionState,
                    mentionsSource: this.props.mentionsSource,
                    typeaheadView: this.props.typeaheadView,
                    typeaheadViewProps: this.props.typeaheadViewProps,
                    keyBindingFn: getDefaultKeyBinding/*R*/,
                    blockStyleFn: E,
                    inlineStyleFn: D,
                    inputView: this.props.inputView,
                    textInputStyle: this.props.textInputStyle,
                    spellCheck: this.props.spellCheck,
                    autoflip: this.props.autoflip,
                    onShowMentions: this.onShowMentions,
                    onAddMention: this.onAddMention,
                    onCharacters: this.onCharacters,
                    onAlter: this.onAlter,
                    onCut: this.onCut,
                    onPasteFragment: this.onPasteFragment,
                    onDelete: this.onDelete,
                    onDropFiles: this.onDropFiles,
                    onDropSelection: this.onDropSelection,
                    onDropText: this.onDropText,
                    onKeyCommand: this.onKeyCommand,
                    onPasteFiles: this.onPasteFiles,
                    onSelect: this.onSelect,
                    onTextInput: this._onTextInput,
                    onReturn: this._onReturn,
                    onBlur: this._onBlur,
                    onFocus: this._onFocus,
                    onChange: this.props.onChange,
                    handleDroppedFiles: this.props.handleDroppedFiles,
                    handlePastedFiles: this.props.handlePastedFiles
                }))
            }
        });
    i.exports = P
});