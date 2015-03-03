__d("MentionsInput.react",["AbstractMentionsTextEditor.react","DocumentCharacters","DocumentCompositeDecorator","DocumentContent","DocumentDecorator","ComposedEntityType","DocumentSelectionState","DocumentView","MentionSpan","MentionSpan","MentionsTextEditorMixin","ReactPropTypes","React","MentionSpan","View","cx","emptyFunction","getDefaultKeyBinding","getEntityMatcher","getHashtagMatches"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("AbstractMentionsTextEditor.react"),
        a = require/*t*/("DocumentCharacters"),
        s = require/*t*/("DocumentCompositeDecorator"),
        l = require/*t*/("DocumentContent"),
        u = require/*t*/("DocumentDecorator"),
        c = require/*t*/("ComposedEntityType"),
        p = require/*t*/("DocumentSelectionState"),
        d = require/*t*/("DocumentView"),
        h = require/*t*/("MentionSpan"),
        f = require/*t*/("MentionSpan"),
        m = require/*t*/("MentionsTextEditorMixin"),
        g = require/*t*/("ReactPropTypes"),
        _ = require/*t*/("React"),
        y = require/*t*/("MentionSpan"),
        v = require/*t*/("View"),
        S = require/*t*/("cx"),
        b = require/*t*/("emptyFunction"),
        R = require/*t*/("getDefaultKeyBinding"),
        w = require/*t*/("getEntityMatcher"),
        C = require/*t*/("getHashtagMatches"),
        E = b.thatReturns(""),
        D = b.thatReturns(""),
        T = c.MENTION,
        x = new s([new u(w(function(global/*e*/) {
            var require/*t*/ = global/*e*/.getData();
            return global/*e*/.getType() === T && require/*t*/ && require/*t*/.isWeak
        }), y), new u(w(function(global/*e*/) {
            return global/*e*/.getType() === T
        }), f), new u(C, h)]),
        P = _.createClass({
            displayName: "MentionsInput",
            mixins: [m],
            propTypes: {
                documentContent: g.instanceOf(l).isRequired,
                selectionState: g.instanceOf(p).isRequired,
                mentionsSource: g.object,
                typeaheadView: g.func.isRequired,
                typeaheadViewProps: g.object,
                spellCheck: g.bool,
                placeholder: g.string,
                placeholderTextColor: g.string,
                className: g.string,
                autoflip: g.bool,
                handleReturn: g.func,
                handleDroppedFiles: g.func,
                handlePastedFiles: g.func,
                onAddMention: g.func,
                onShowMentions: g.func,
                onChange: g.func,
                onInputFocus: g.func,
                onInputBlur: g.func,
                onFile: g.func,
                inputView: g.renderable
            },
            focus: function() {
                this.refs.textEditor.focus()
            },
            blur: function() {
                this.refs.textEditor.blur()
            },
            _onReturn: function(global/*e*/) {
                this.props.handleReturn && this.props.handleReturn(global/*e*/) || this.onCharacters(a.BLOCK_DELIMITER)
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
                    documentView: new d(global/*e*/, x)
                }
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.props.documentContent !== global/*e*/.documentContent && this.setState(this._getStateForDocument(global/*e*/.documentContent))
            },
            getInitialState: function() {
                return this._getStateForDocument(this.props.documentContent)
            },
            render: function() {
                return _.createElement(v, {
                    style: this.props.style,
                    className: S("uiMentionsInput/root"),
                    onClick: this._onClick,
                    onFocus: this._onFocus
                }, _.createElement(o, {
                    ref: "textEditor",
                    className: S("public/uiMentionsInput/input"),
                    documentView: this.state.documentView,
                    placeholder: this.props.placeholder,
                    placeholderTextColor: this.props.placeholderTextColor,
                    autoFocus: this.props.autoFocus,
                    selectionState: this.props.selectionState,
                    mentionsSource: this.props.mentionsSource,
                    typeaheadView: this.props.typeaheadView,
                    typeaheadViewProps: this.props.typeaheadViewProps,
                    keyBindingFn: R,
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