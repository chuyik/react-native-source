__d("MentionsInput.react",["AbstractMentionsTextEditor.react","DocumentCharacters","DocumentCompositeDecorator","DocumentContent","DocumentDecorator","ComposedEntityType","DocumentSelectionState","DocumentView","MentionSpan","MentionSpan","MentionsTextEditorMixin","ReactPropTypes","React","MentionSpan","View","cx","emptyFunction","getDefaultKeyBinding","getEntityMatcher","getHashtagMatches"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("AbstractMentionsTextEditor.react"),
        DocumentCharacters/*a*/ = require/*t*/("DocumentCharacters"),
        DocumentCompositeDecorator/*s*/ = require/*t*/("DocumentCompositeDecorator"),
        DocumentContent/*l*/ = require/*t*/("DocumentContent"),
        DocumentDecorator/*u*/ = require/*t*/("DocumentDecorator"),
        ComposedEntityType/*c*/ = require/*t*/("ComposedEntityType"),
        DocumentSelectionState/*p*/ = require/*t*/("DocumentSelectionState"),
        DocumentView/*d*/ = require/*t*/("DocumentView"),
        MentionSpan/*h*/ = require/*t*/("MentionSpan"),
        MentionSpan/*f*/ = require/*t*/("MentionSpan"),
        MentionsTextEditorMixin/*m*/ = require/*t*/("MentionsTextEditorMixin"),
        ReactPropTypes/*g*/ = require/*t*/("ReactPropTypes"),
        React/*_*/ = require/*t*/("React"),
        MentionSpan/*y*/ = require/*t*/("MentionSpan"),
        View/*v*/ = require/*t*/("View"),
        cx/*S*/ = require/*t*/("cx"),
        emptyFunction/*b*/ = require/*t*/("emptyFunction"),
        getDefaultKeyBinding/*R*/ = require/*t*/("getDefaultKeyBinding"),
        getEntityMatcher/*w*/ = require/*t*/("getEntityMatcher"),
        getHashtagMatches/*C*/ = require/*t*/("getHashtagMatches"),
        E = emptyFunction/*b*/.thatReturns(""),
        D = emptyFunction/*b*/.thatReturns(""),
        T = ComposedEntityType/*c*/.MENTION,
        x = new DocumentCompositeDecorator/*s*/([new DocumentDecorator/*u*/(getEntityMatcher/*w*/(function(global/*e*/) {
            var require/*t*/ = global/*e*/.getData();
            return global/*e*/.getType() === T && require/*t*/ && require/*t*/.isWeak
        }), MentionSpan/*y*/), new DocumentDecorator/*u*/(getEntityMatcher/*w*/(function(global/*e*/) {
            return global/*e*/.getType() === T
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
            _onReturn: function(global/*e*/) {
                this.props.handleReturn && this.props.handleReturn(global/*e*/) || this.onCharacters(DocumentCharacters/*a*/.BLOCK_DELIMITER)
            },
            _onBlur: function(global/*e*/) {
                this.onBlur(global/*e*/), this.props.onInputBlur && this.props.onInputBlur(global/*e*/)
            },
            _onFocus: function(global/*e*/) {
                this.onFocus(global/*e*/), this.props.onInputFocus && this.props.onInputFocus(global/*e*/)
            },
            _onClick: function() {
                this.refs.textEditor.focus()
            },
            _onTextInput: function(global/*e*/) {
                var require/*t*/ = global/*e*/.nativeEvent,
                    requireDynamic/*n*/ = require/*t*/.range.start,
                    requireLazy/*r*/ = require/*t*/.range.end,
                    module/*i*/ = require/*t*/.text;
                0 === module/*i*/.length && requireLazy/*r*/ - requireDynamic/*n*/ === 1 && this.props.selectionState.isCollapsed() && this.props.selectionState.getStartOffset() === requireDynamic/*n*/ + 1 ? this.onBackspace() : this.onAlter(requireDynamic/*n*/, require/*t*/.previousText, module/*i*/)
            },
            _getStateForDocument: function(global/*e*/) {
                return {
                    documentView: new DocumentView/*d*/(global/*e*/, x)
                }
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.documentContent !== global/*e*/.documentContent && this.setState(this._getStateForDocument(global/*e*/.documentContent))
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
    module/*i*/.exports = P
});