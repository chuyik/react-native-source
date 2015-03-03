__d("AbstractTextEditor.react",["AbstractTextEditorProps","ExecutionEnvironment","React","StyleSheet","Text","TextEditorBlock.react","TextEditorCompositionHandler","TextEditorCompositionState","TextEditorEditHandler","TextEditorDragHandler","TextEditorModes","TextInput","View","cx","extendArray","requestAnimationFrame","ComposedInlineStyle"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return function(require/*exports/*t*/*/) {
            var requireDynamic/*n*/ = this._handler && this._handler[global/*e*/];
            requireDynamic/*n*/ && requireDynamic/*n*/.call(this, require/*exports/*t*/*/)
        }
    }

    function a(global/*e*/) {
        switch (global/*e*/) {
            case TextEditorDragHandler/*_*/.EDIT:
                return TextEditorCompositionState/*m*/;
            case TextEditorDragHandler/*_*/.COMPOSITE:
                return TextEditorBlock.react/*h*/;
            case TextEditorDragHandler/*_*/.DRAG:
                return TextEditorEditHandler/*g*/;
            case TextEditorDragHandler/*_*/.CUT:
            case TextEditorDragHandler/*_*/.RENDER:
                return null
        }
    }
    var s = require/*exports/*t*/*/("AbstractTextEditorProps"),
        AbstractTextEditorProps/*l*/ = require/*exports/*t*/*/("ExecutionEnvironment"),
        ExecutionEnvironment/*u*/ = require/*exports/*t*/*/("React"),
        React/*c*/ = require/*exports/*t*/*/("StyleSheet"),
        StyleSheet/*p*/ = require/*exports/*t*/*/("Text"),
        Text/*d*/ = require/*exports/*t*/*/("TextEditorBlock.react"),
        TextEditorBlock.react/*h*/ = require/*exports/*t*/*/("TextEditorCompositionHandler"),
        TextEditorCompositionHandler/*f*/ = require/*exports/*t*/*/("TextEditorCompositionState"),
        TextEditorCompositionState/*m*/ = require/*exports/*t*/*/("TextEditorEditHandler"),
        TextEditorEditHandler/*g*/ = require/*exports/*t*/*/("TextEditorDragHandler"),
        TextEditorDragHandler/*_*/ = require/*exports/*t*/*/("TextEditorModes"),
        TextEditorModes/*y*/ = require/*exports/*t*/*/("TextInput"),
        TextInput/*v*/ = require/*exports/*t*/*/("View"),
        View/*S*/ = require/*exports/*t*/*/("cx"),
        cx/*b*/ = require/*exports/*t*/*/("extendArray"),
        extendArray/*R*/ = require/*exports/*t*/*/("requestAnimationFrame"),
        requestAnimationFrame/*w*/ = (require/*exports/*t*/*/("ComposedInlineStyle"), "cx/*b*/"),
        ComposedInlineStyle/*C*/ = "Text/*d*/",
        E = "AbstractTextEditorProps/*l*/",
        D = global/*e*/.MutationObserver || global/*e*/.WebKitMutationObserver,
        T = ExecutionEnvironment/*u*/.createClass({
            displayName: "AbstractTextEditor",
            propTypes: s.propTypes,
            getDefaultProps: s.getDefaultProps,
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
            _onTextInput: function(global/*e*/) {
                this.props.onTextInput && this.props.onTextInput(global/*e*/)
            },
            _renderContents: function() {
                function global/*e*/(global/*e*/, require/*exports/*t*/*/) {
                    var requireDynamic/*n*/ = global/*e*/ + (require/*exports/*t*/*/ ? require/*exports/*t*/*/.charCodeAt(0) : 0),
                        requireLazy/*r*/ = requireDynamic/*n*/;
                    return TextEditorCompositionHandler/*f*/.hasOwnProperty(requireLazy/*r*/) ? requireLazy/*r*/ += "-" + TextEditorCompositionHandler/*f*/[requireLazy/*r*/] ++ : TextEditorCompositionHandler/*f*/[requireLazy/*r*/] = 0, TextEditorBlock.react/*h*/[requireLazy/*r*/] = !0, requireLazy/*r*/
                }

                function require/*exports/*t*/*/(require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, o) {
                    module/*i*/ = [];
                    var a = this.props.BlockComponent || Text/*d*/,
                        StyleSheet/*p*/ = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                        TextEditorBlock.react/*h*/ = global/*e*/(requestAnimationFrame/*w*/, StyleSheet/*p*/);
                    React/*c*/.push(ExecutionEnvironment/*u*/.createElement(a, {
                        key: TextEditorBlock.react/*h*/,
                        offsetKey: require/*exports/*t*/*/,
                        text: StyleSheet/*p*/,
                        blockProps: this.props.blockProps,
                        blockStyleFn: this.props.blockStyleFn,
                        style: o,
                        direction: AbstractTextEditorProps/*l*/[React/*c*/.length]
                    }, module/*i*/))
                }

                function requireDynamic/*n*/(require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, AbstractTextEditorProps/*l*/) {
                    if (AbstractTextEditorProps/*l*/) {
                        o = [];
                        var React/*c*/ = this.props.documentView.getEntities()[requireDynamic/*n*/],
                            StyleSheet/*p*/ = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                            Text/*d*/ = global/*e*/(ComposedInlineStyle/*C*/, StyleSheet/*p*/);
                        module/*i*/.push(ExecutionEnvironment/*u*/.createElement(AbstractTextEditorProps/*l*/, {
                            key: Text/*d*/,
                            offsetKey: require/*exports/*t*/*/,
                            decoratorProps: this.props.decoratorProps,
                            documentView: a,
                            selectionState: this.props.selectionState,
                            entityKey: React/*c*/,
                            text: StyleSheet/*p*/
                        }, o))
                    } else o = module/*i*/
                }

                function requireLazy/*r*/(require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                        a = global/*e*/(E, module/*i*/);
                    o.push(ExecutionEnvironment/*u*/.createElement(StyleSheet/*p*/, {
                        key: a
                    }, module/*i*/))
                }
                var module/*i*/, o, a = this.props.documentView,
                    s = a.getText(),
                    AbstractTextEditorProps/*l*/ = a.getBlockDirections(),
                    React/*c*/ = [],
                    TextEditorBlock.react/*h*/ = {},
                    TextEditorCompositionHandler/*f*/ = {};
                return this.props.documentView.iterate(require/*exports/*t*/*/.bind(this), requireDynamic/*n*/.bind(this), requireLazy/*r*/.bind(this)), React/*c*/
            },
            _attachMutationObserver: function() {
                if (D) {
                    var global/*e*/ = [],
                        require/*exports/*t*/*/ = function() {
                            global/*e*/.length && (this._onCharacterData(global/*e*/), global/*e*/.length = 0)
                        }.bind(this);
                    this._mutationObserver = new D(function(requireDynamic/*n*/) {
                        this._guardAgainstRender || (0 === global/*e*/.length && extendArray/*R*/(require/*exports/*t*/*/), cx/*b*/(global/*e*/, requireDynamic/*n*/))
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
                var global/*e*/ = this.props.placeholder && !this.props.documentView.getText();
                return global/*e*/ ? ExecutionEnvironment/*u*/.createElement(AbstractTextEditorPlaceholder, {
                    text: this.props.placeholder,
                    selectionState: this.props.selectionState,
                    compositionState: this._compositionState
                }) : void 0
            },
            render: function() {
                return ExecutionEnvironment/*u*/.createElement(TextInput/*v*/, {
                    className: View/*S*/("AbstractTextEditor/root")
                }, ExecutionEnvironment/*u*/.createElement(TextInput/*v*/, {
                    className: View/*S*/("AbstractTextEditor/editorContainer"),
                    ref: "editorContainer"
                }, ExecutionEnvironment/*u*/.createElement(TextEditorModes/*y*/, {
                    multiline: !0,
                    lineHeight: 1,
                    autoFocus: this.props.autoFocus,
                    style: [x.textBox, this.props.textInputStyle],
                    ref: "editor",
                    role: "textbox",
                    className: View/*S*/("public/AbstractTextEditor/content"),
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
                var global/*e*/ = this.props.selectionState.hasFocus();
                if (!global/*e*/) {
                    if (!this.refs.editor.getDOMNode) return void this.refs.editor.focus();
                    var require/*exports/*t*/*/ = this.props.documentView.getText().length;
                    this.props.selectionState.update(require/*exports/*t*/*/, require/*exports/*t*/*/), this.forceUpdate()
                }
            },
            blur: function() {
                this.refs.editor.getDOMNode ? this.refs.editor.getDOMNode().blur() : this.refs.editor.blur()
            },
            componentDidMount: function() {
                this._renderedVersion = null, this._clonedEditor = null, this._guardAgainstRender = !1, this._handler = TextEditorCompositionState/*m*/;
                var global/*e*/ = this.props.documentView.getBlockDirections();
                this._renderedDirections = global/*e*/.join(""), AbstractTextEditorProps/*l*/.canUseDOM && this._attachMutationObserver()
            },
            shouldComponentUpdate: function(global/*e*/) {
                var require/*exports/*t*/*/ = global/*e*/.documentView.getBlockDirections();
                return !this._guardAgainstRender && (global/*e*/.documentView.getVersion() !== this._renderedVersion || require/*exports/*t*/*/.join("") !== this._renderedDirections || this.props.disabled !== global/*e*/.disabled || this.props.inputView !== global/*e*/.inputView)
            },
            componentWillUpdate: function() {
                this.setMode(TextEditorDragHandler/*_*/.RENDER)
            },
            componentDidUpdate: function() {
                this.exitCurrentMode(), this._renderedVersion = this.props.documentView.getVersion();
                var global/*e*/ = this.props.documentView.getBlockDirections();
                this._renderedDirections = global/*e*/.join("")
            },
            componentWillMount: function() {
                this._compositionState = new TextEditorCompositionHandler/*f*/(!1), this._selectionListener = this.props.selectionState.addListener("focus", this.focus)
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
            setMode: function(global/*e*/) {
                this._handler = a(global/*e*/)
            },
            exitCurrentMode: function() {
                this.setMode(TextEditorDragHandler/*_*/.EDIT)
            },
            captureEditorDOM: function() {
                this._clonedEditor = this.refs.editor.getDOMNode().cloneNode(!0)
            },
            restoreEditorDOM: function() {
                var global/*e*/ = this.refs.editorContainer.getDOMNode();
                global/*e*/.innerHTML = "", global/*e*/.appendChild(this._clonedEditor), this.focus(), this._clonedEditor = null
            },
            setRenderGuard: function() {
                this._guardAgainstRender = !0
            },
            removeRenderGuard: function() {
                this._guardAgainstRender = !1
            }
        }),
        x = React/*c*/.create({
            textBox: {
                backgroundColor: "transparent",
                fontSize: 14,
                height: 30
            }
        });
    module/*i*/.exports = T
});