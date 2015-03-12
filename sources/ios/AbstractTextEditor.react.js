__d("AbstractTextEditor.react",["AbstractTextEditorProps","ExecutionEnvironment","React","StyleSheet","Text","TextEditorBlock.react","TextEditorCompositionHandler","TextEditorCompositionState","TextEditorEditHandler","TextEditorDragHandler","TextEditorModes","TextInput","View","cx","extendArray","requestAnimationFrame","ComposedInlineStyle"],function (e, t, n, r, i) {
    function o(e) {
        return function(t) {
            var n = this._handler && this._handler[e];
            n && n.call(this, t)
        }
    }

    function a(e) {
        switch (e) {
            case TextEditorModes/*_*/.EDIT:
                return TextEditorEditHandler/*m*/;
            case TextEditorModes/*_*/.COMPOSITE:
                return TextEditorCompositionHandler/*h*/;
            case TextEditorModes/*_*/.DRAG:
                return TextEditorDragHandler/*g*/;
            case TextEditorModes/*_*/.CUT:
            case TextEditorModes/*_*/.RENDER:
                return null
        }
    }
    var AbstractTextEditorProps/*s*/ = t("AbstractTextEditorProps"),
        ExecutionEnvironment/*l*/ = t("ExecutionEnvironment"),
        React/*u*/ = t("React"),
        StyleSheet/*c*/ = t("StyleSheet"),
        Text/*p*/ = t("Text"),
        d = t("TextEditorBlock.react"),
        TextEditorCompositionHandler/*h*/ = t("TextEditorCompositionHandler"),
        TextEditorCompositionState/*f*/ = t("TextEditorCompositionState"),
        TextEditorEditHandler/*m*/ = t("TextEditorEditHandler"),
        TextEditorDragHandler/*g*/ = t("TextEditorDragHandler"),
        TextEditorModes/*_*/ = t("TextEditorModes"),
        TextInput/*y*/ = t("TextInput"),
        View/*v*/ = t("View"),
        cx/*S*/ = t("cx"),
        extendArray/*b*/ = t("extendArray"),
        requestAnimationFrame/*R*/ = t("requestAnimationFrame"),
        w = (t("ComposedInlineStyle"), "extendArray/*b*/"),
        C = "d",
        E = "ExecutionEnvironment/*l*/",
        D = e.MutationObserver || e.WebKitMutationObserver,
        T = React/*u*/.createClass({
            displayName: "AbstractTextEditor",
            propTypes: AbstractTextEditorProps/*s*/.propTypes,
            getDefaultProps: AbstractTextEditorProps/*s*/.getDefaultProps,
            _onBlur: o("onBlur"),
            _onFocus: o("onFocus"),
            _onSelect: o("onSelect"),
            _onKeyDown: o("onKeyDown"),
            _onKeyUp: o("onKeyUp"),
            _onKeyPress: o("onKeyPress"),
            _onMouseDown: o("onMouseDown"),
            _onMouseUp: o("onMouseUp"),
            _onCharacterData: o("onCharacterData"),
            _onCompositionStart: o("onCompositionStart"),
            _onCompositionEnd: o("onCompositionEnd"),
            _onDragStart: o("onDragStart"),
            _onDragOver: o("onDragOver"),
            _onDragEnd: o("onDragEnd"),
            _onDrop: o("onDrop"),
            _onCut: o("onCut"),
            _onCopy: o("onCopy"),
            _onPaste: o("onPaste"),
            _onBeforeInput: o("onBeforeInput"),
            _onTextInput: function(e) {
                this.props.onTextInput && this.props.onTextInput(e)
            },
            _renderContents: function() {
                function e(e, t) {
                    var n = e + (t ? t.charCodeAt(0) : 0),
                        r = n;
                    return TextEditorCompositionState/*f*/.hasOwnProperty(r) ? r += "-" + TextEditorCompositionState/*f*/[r] ++ : TextEditorCompositionState/*f*/[r] = 0, TextEditorCompositionHandler/*h*/[r] = !0, r
                }

                function t(t, n, r, o) {
                    i = [];
                    var a = this.props.BlockComponent || d,
                        Text/*p*/ = AbstractTextEditorProps/*s*/.substr(n, r - n),
                        TextEditorCompositionHandler/*h*/ = e(w, Text/*p*/);
                    StyleSheet/*c*/.push(React/*u*/.createElement(a, {
                        key: TextEditorCompositionHandler/*h*/,
                        offsetKey: t,
                        text: Text/*p*/,
                        blockProps: this.props.blockProps,
                        blockStyleFn: this.props.blockStyleFn,
                        style: o,
                        direction: ExecutionEnvironment/*l*/[StyleSheet/*c*/.length]
                    }, i))
                }

                function n(t, n, r, ExecutionEnvironment/*l*/) {
                    if (ExecutionEnvironment/*l*/) {
                        o = [];
                        var StyleSheet/*c*/ = this.props.documentView.getEntities()[n],
                            Text/*p*/ = AbstractTextEditorProps/*s*/.substr(n, r - n),
                            d = e(C, Text/*p*/);
                        i.push(React/*u*/.createElement(ExecutionEnvironment/*l*/, {
                            key: d,
                            offsetKey: t,
                            decoratorProps: this.props.decoratorProps,
                            documentView: a,
                            selectionState: this.props.selectionState,
                            entityKey: StyleSheet/*c*/,
                            text: Text/*p*/
                        }, o))
                    } else o = i
                }

                function r(t, n, r) {
                    var i = AbstractTextEditorProps/*s*/.substr(n, r - n),
                        a = e(E, i);
                    o.push(React/*u*/.createElement(Text/*p*/, {
                        key: a
                    }, i))
                }
                var i, o, a = this.props.documentView,
                    AbstractTextEditorProps/*s*/ = a.getText(),
                    ExecutionEnvironment/*l*/ = a.getBlockDirections(),
                    StyleSheet/*c*/ = [],
                    TextEditorCompositionHandler/*h*/ = {},
                    TextEditorCompositionState/*f*/ = {};
                return this.props.documentView.iterate(t.bind(this), n.bind(this), r.bind(this)), StyleSheet/*c*/
            },
            _attachMutationObserver: function() {
                if (D) {
                    var e = [],
                        t = function() {
                            e.length && (this._onCharacterData(e), e.length = 0)
                        }.bind(this);
                    this._mutationObserver = new D(function(n) {
                        this._guardAgainstRender || (0 === e.length && requestAnimationFrame/*R*/(t), extendArray/*b*/(e, n))
                    }.bind(this)), this._mutationObserver && this._mutationObserver.observe(this.refs.editorContainer.getDOMNode(), {
                        characterDataOldValue: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            },
            _disconnectMutationObserver: function() {
                this._mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null)
            },
            _renderPlaceholder: function() {
                var e = this.props.placeholder && !this.props.documentView.getText();
                return e ? React/*u*/.createElement(AbstractTextEditorPlaceholder, {
                    text: this.props.placeholder,
                    selectionState: this.props.selectionState,
                    compositionState: this._compositionState
                }) : void 0
            },
            render: function() {
                return React/*u*/.createElement(View/*v*/, {
                    className: cx/*S*/("AbstractTextEditor/root")
                }, React/*u*/.createElement(View/*v*/, {
                    className: cx/*S*/("AbstractTextEditor/editorContainer"),
                    ref: "editorContainer"
                }, React/*u*/.createElement(TextInput/*y*/, {
                    multiline: !0,
                    lineHeight: 1,
                    autoFocus: this.props.autoFocus,
                    style: [x.textBox, this.props.textInputStyle],
                    ref: "editor",
                    role: "textbox",
                    className: cx/*S*/("public/AbstractTextEditor/content"),
                    placeholder: this.props.placeholder,
                    placeholderTextColor: this.props.placeholderTextColor,
                    onBlur: this._onBlur,
                    onFocus: this._onFocus,
                    onSelect: this._onSelect,
                    onMouseUp: this._onMouseUp,
                    onKeyDown: this._onKeyDown,
                    onKeyUp: this._onKeyUp,
                    onKeyPress: this._onKeyPress,
                    onCut: this._onCut,
                    onCopy: this._onCopy,
                    onPaste: this._onPaste,
                    onDragStart: this._onDragStart,
                    onDragOver: this._onDragOver,
                    onDragEnd: this._onDragEnd,
                    onDrop: this._onDrop,
                    onCompositionStart: this._onCompositionStart,
                    onCompositionEnd: this._onCompositionEnd,
                    onBeforeInput: this._onBeforeInput,
                    onTextInput: this._onTextInput,
                    onChange: this.props.onChange,
                    selectionState: this.props.selectionState,
                    spellCheck: this.props.spellCheck,
                    contentEditable: !this.props.disabled,
                    inputView: this.props.inputView
                }, this._renderContents())))
            },
            focus: function() {
                var e = this.props.selectionState.hasFocus();
                if (!e) {
                    if (!this.refs.editor.getDOMNode) return void this.refs.editor.focus();
                    var t = this.props.documentView.getText().length;
                    this.props.selectionState.update(t, t), this.forceUpdate()
                }
            },
            blur: function() {
                this.refs.editor.getDOMNode ? this.refs.editor.getDOMNode().blur() : this.refs.editor.blur()
            },
            componentDidMount: function() {
                this._renderedVersion = null, this._clonedEditor = null, this._guardAgainstRender = !1, this._handler = TextEditorEditHandler/*m*/;
                var e = this.props.documentView.getBlockDirections();
                this._renderedDirections = e.join(""), ExecutionEnvironment/*l*/.canUseDOM && this._attachMutationObserver()
            },
            shouldComponentUpdate: function(e) {
                var t = e.documentView.getBlockDirections();
                return !this._guardAgainstRender && (e.documentView.getVersion() !== this._renderedVersion || t.join("") !== this._renderedDirections || this.props.disabled !== e.disabled || this.props.inputView !== e.inputView)
            },
            componentWillUpdate: function() {
                this.setMode(TextEditorModes/*_*/.RENDER)
            },
            componentDidUpdate: function() {
                this.exitCurrentMode(), this._renderedVersion = this.props.documentView.getVersion();
                var e = this.props.documentView.getBlockDirections();
                this._renderedDirections = e.join("")
            },
            componentWillMount: function() {
                this._compositionState = new TextEditorCompositionState/*f*/(!1), this._selectionListener = this.props.selectionState.addListener("focus", this.focus)
            },
            componentWillUnmount: function() {
                this._disconnectMutationObserver(), this._selectionListener && (this._selectionListener.remove(), this._selectionListener = null)
            },
            expectDuplicateMutation: function() {
                this._renderedVersion = this.props.documentView.getVersion()
            },
            resetRenderedVersion: function() {
                this._renderedVersion = null, this._renderedDirections = null
            },
            setMode: function(e) {
                this._handler = a(e)
            },
            exitCurrentMode: function() {
                this.setMode(TextEditorModes/*_*/.EDIT)
            },
            captureEditorDOM: function() {
                this._clonedEditor = this.refs.editor.getDOMNode().cloneNode(!0)
            },
            restoreEditorDOM: function() {
                var e = this.refs.editorContainer.getDOMNode();
                e.innerHTML = "", e.appendChild(this._clonedEditor), this.focus(), this._clonedEditor = null
            },
            setRenderGuard: function() {
                this._guardAgainstRender = !0
            },
            removeRenderGuard: function() {
                this._guardAgainstRender = !1
            }
        }),
        x = StyleSheet/*c*/.create({
            textBox: {
                backgroundColor: "transparent",
                fontSize: 14,
                height: 30
            }
        });
    i.exports = T
});