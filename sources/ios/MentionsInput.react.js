__d("MentionsInput.react",["AbstractMentionsTextEditor.react","DocumentCharacters","DocumentCompositeDecorator","DocumentContent","DocumentDecorator","ComposedEntityType","DocumentSelectionState","DocumentView","MentionSpan","MentionSpan","MentionsTextEditorMixin","ReactPropTypes","React","MentionSpan","View","cx","emptyFunction","getDefaultKeyBinding","getEntityMatcher","getHashtagMatches"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("AbstractMentionsTextEditor.react"),
        exports/*a*/ = require/*t*/("DocumentCharacters"),
        AbstractMentionsTextEditor.react/*s*/ = require/*t*/("DocumentCompositeDecorator"),
        DocumentCharacters/*l*/ = require/*t*/("DocumentContent"),
        DocumentCompositeDecorator/*u*/ = require/*t*/("DocumentDecorator"),
        DocumentContent/*c*/ = require/*t*/("ComposedEntityType"),
        DocumentDecorator/*p*/ = require/*t*/("DocumentSelectionState"),
        ComposedEntityType/*d*/ = require/*t*/("DocumentView"),
        DocumentSelectionState/*h*/ = require/*t*/("MentionSpan"),
        DocumentView/*f*/ = require/*t*/("MentionSpan"),
        MentionSpan/*m*/ = require/*t*/("MentionsTextEditorMixin"),
        MentionSpan/*g*/ = require/*t*/("ReactPropTypes"),
        MentionsTextEditorMixin/*_*/ = require/*t*/("React"),
        ReactPropTypes/*y*/ = require/*t*/("MentionSpan"),
        React/*v*/ = require/*t*/("View"),
        MentionSpan/*S*/ = require/*t*/("cx"),
        View/*b*/ = require/*t*/("emptyFunction"),
        cx/*R*/ = require/*t*/("getDefaultKeyBinding"),
        emptyFunction/*w*/ = require/*t*/("getEntityMatcher"),
        getDefaultKeyBinding/*C*/ = require/*t*/("getHashtagMatches"),
        getEntityMatcher/*E*/ = View/*b*/.thatReturns(""),
        getHashtagMatches/*D*/ = View/*b*/.thatReturns(""),
        T = DocumentContent/*c*/.MENTION,
        x = new AbstractMentionsTextEditor.react/*s*/([new DocumentCompositeDecorator/*u*/(emptyFunction/*w*/(function(global/*e*/) {
            var require/*t*/ = global/*e*/.getData();
            return global/*e*/.getType() === T && require/*t*/ && require/*t*/.isWeak
        }), ReactPropTypes/*y*/), new DocumentCompositeDecorator/*u*/(emptyFunction/*w*/(function(global/*e*/) {
            return global/*e*/.getType() === T
        }), DocumentView/*f*/), new DocumentCompositeDecorator/*u*/(getDefaultKeyBinding/*C*/, DocumentSelectionState/*h*/)]),
        P = MentionsTextEditorMixin/*_*/.createClass({
            displayName: "MentionsInput",
            mixins: [MentionSpan/*m*/],
            propTypes: {
                documentContent: MentionSpan/*g*/.instanceOf(DocumentCharacters/*l*/).isRequired,
                selectionState: MentionSpan/*g*/.instanceOf(DocumentDecorator/*p*/).isRequired,
                mentionsSource: MentionSpan/*g*/.object,
                typeaheadView: MentionSpan/*g*/.func.isRequired,
                typeaheadViewProps: MentionSpan/*g*/.object,
                spellCheck: MentionSpan/*g*/.bool,
                placeholder: MentionSpan/*g*/.string,
                placeholderTextColor: MentionSpan/*g*/.string,
                className: MentionSpan/*g*/.string,
                autoflip: MentionSpan/*g*/.bool,
                handleReturn: MentionSpan/*g*/.func,
                handleDroppedFiles: MentionSpan/*g*/.func,
                handlePastedFiles: MentionSpan/*g*/.func,
                onAddMention: MentionSpan/*g*/.func,
                onShowMentions: MentionSpan/*g*/.func,
                onChange: MentionSpan/*g*/.func,
                onInputFocus: MentionSpan/*g*/.func,
                onInputBlur: MentionSpan/*g*/.func,
                onFile: MentionSpan/*g*/.func,
                inputView: MentionSpan/*g*/.renderable
            },
            focus: function() {
                this.refs.textEditor.focus()
            },
            blur: function() {
                this.refs.textEditor.blur()
            },
            _onReturn: function(global/*e*/) {
                this.props.handleReturn && this.props.handleReturn(global/*e*/) || this.onCharacters(exports/*a*/.BLOCK_DELIMITER)
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
                    documentView: new ComposedEntityType/*d*/(global/*e*/, x)
                }
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.documentContent !== global/*e*/.documentContent && this.setState(this._getStateForDocument(global/*e*/.documentContent))
            },
            getInitialState: function() {
                return this._getStateForDocument(this.props.documentContent)
            },
            render: function() {
                return MentionsTextEditorMixin/*_*/.createElement(React/*v*/, {
                    style: this.props.style,
                    className: MentionSpan/*S*/("uiMentionsInput/root"),
                    onClick: this._onClick,
                    onFocus: this._onFocus
                }, MentionsTextEditorMixin/*_*/.createElement(o, {
                    ref: "textEditor",
                    className: MentionSpan/*S*/("public/uiMentionsInput/input"),
                    documentView: this.state.documentView,
                    placeholder: this.props.placeholder,
                    placeholderTextColor: this.props.placeholderTextColor,
                    autoFocus: this.props.autoFocus,
                    selectionState: this.props.selectionState,
                    mentionsSource: this.props.mentionsSource,
                    typeaheadView: this.props.typeaheadView,
                    typeaheadViewProps: this.props.typeaheadViewProps,
                    keyBindingFn: cx/*R*/,
                    blockStyleFn: getEntityMatcher/*E*/,
                    inlineStyleFn: getHashtagMatches/*D*/,
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