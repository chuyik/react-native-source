__d("AbstractTextEditor.react",["AbstractTextEditorProps","ExecutionEnvironment","React","StyleSheet","Text","TextEditorBlock.react","TextEditorCompositionHandler","TextEditorCompositionState","TextEditorEditHandler","TextEditorDragHandler","TextEditorModes","TextInput","View","cx","extendArray","requestAnimationFrame","ComposedInlineStyle"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return function(require/*t*/) {
            var requireDynamic/*n*/ = this._handler && this._handler[global/*e*/];
            requireDynamic/*n*/ && requireDynamic/*n*/.call(this, require/*t*/)
        }
    }

    function a(global/*e*/) {
        switch (global/*e*/) {
            case _.EDIT:
                return m;
            case _.COMPOSITE:
                return h;
            case _.DRAG:
                return g;
            case _.CUT:
            case _.RENDER:
                return null
        }
    }
    var s = require/*t*/("AbstractTextEditorProps"),
        l = require/*t*/("ExecutionEnvironment"),
        u = require/*t*/("React"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("Text"),
        d = require/*t*/("TextEditorBlock.react"),
        h = require/*t*/("TextEditorCompositionHandler"),
        f = require/*t*/("TextEditorCompositionState"),
        m = require/*t*/("TextEditorEditHandler"),
        g = require/*t*/("TextEditorDragHandler"),
        _ = require/*t*/("TextEditorModes"),
        y = require/*t*/("TextInput"),
        v = require/*t*/("View"),
        S = require/*t*/("cx"),
        b = require/*t*/("extendArray"),
        R = require/*t*/("requestAnimationFrame"),
        w = (require/*t*/("ComposedInlineStyle"), "b"),
        C = "d",
        E = "l",
        D = global/*e*/.MutationObserver || global/*e*/.WebKitMutationObserver,
        T = u.createClass({
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
                function global/*e*/(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = global/*e*/ + (require/*t*/ ? require/*t*/.charCodeAt(0) : 0),
                        requireLazy/*r*/ = requireDynamic/*n*/;
                    return f.hasOwnProperty(requireLazy/*r*/) ? requireLazy/*r*/ += "-" + f[requireLazy/*r*/] ++ : f[requireLazy/*r*/] = 0, h[requireLazy/*r*/] = !0, requireLazy/*r*/
                }

                function require/*t*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, o) {
                    module/*i*/ = [];
                    var a = this.props.BlockComponent || d,
                        p = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                        h = global/*e*/(w, p);
                    c.push(u.createElement(a, {
                        key: h,
                        offsetKey: require/*t*/,
                        text: p,
                        blockProps: this.props.blockProps,
                        blockStyleFn: this.props.blockStyleFn,
                        style: o,
                        direction: l[c.length]
                    }, module/*i*/))
                }

                function requireDynamic/*n*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, l) {
                    if (l) {
                        o = [];
                        var c = this.props.documentView.getEntities()[requireDynamic/*n*/],
                            p = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                            d = global/*e*/(C, p);
                        module/*i*/.push(u.createElement(l, {
                            key: d,
                            offsetKey: require/*t*/,
                            decoratorProps: this.props.decoratorProps,
                            documentView: a,
                            selectionState: this.props.selectionState,
                            entityKey: c,
                            text: p
                        }, o))
                    } else o = module/*i*/
                }

                function requireLazy/*r*/(require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = s.substr(requireDynamic/*n*/, requireLazy/*r*/ - requireDynamic/*n*/),
                        a = global/*e*/(E, module/*i*/);
                    o.push(u.createElement(p, {
                        key: a
                    }, module/*i*/))
                }
                var module/*i*/, o, a = this.props.documentView,
                    s = a.getText(),
                    l = a.getBlockDirections(),
                    c = [],
                    h = {},
                    f = {};
                return this.props.documentView.iterate(require/*t*/.bind(this), requireDynamic/*n*/.bind(this), requireLazy/*r*/.bind(this)), c
            },
            _attachMutationObserver: function() {
                if (D) {
                    var global/*e*/ = [],
                        require/*t*/ = function() {
                            global/*e*/.length && (this._onCharacterData(global/*e*/), global/*e*/.length = 0)
                        }.bind(this);
                    this._mutationObserver = new D(function(requireDynamic/*n*/) {
                        this._guardAgainstRender || (0 === global/*e*/.length && R(require/*t*/), b(global/*e*/, requireDynamic/*n*/))
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
                return global/*e*/ ? u.createElement(AbstractTextEditorPlaceholder, {
                    text: this.props.placeholder,
                    selectionState: this.props.selectionState,
                    compositionState: this._compositionState
                }) : void 0
            },
            render: function() {
                return u.createElement(v, {
                    className: S("AbstractTextEditor/root")
                }, u.createElement(v, {
                    className: S("AbstractTextEditor/editorContainer"),
                    ref: "editorContainer"
                }, u.createElement(y, {
                    multiline: !0,
                    lineHeight: 1,
                    autoFocus: this.props.autoFocus,
                    style: [x.textBox, this.props.textInputStyle],
                    ref: "editor",
                    role: "textbox",
                    className: S("public/AbstractTextEditor/content"),
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
                    var require/*t*/ = this.props.documentView.getText().length;
                    this.props.selectionState.update(require/*t*/, require/*t*/), this.forceUpdate()
                }
            },
            blur: function() {
                this.refs.editor.getDOMNode ? this.refs.editor.getDOMNode().blur() : this.refs.editor.blur()
            },
            componentDidMount: function() {
                this._renderedVersion = null, this._clonedEditor = null, this._guardAgainstRender = !1, this._handler = m;
                var global/*e*/ = this.props.documentView.getBlockDirections();
                this._renderedDirections = global/*e*/.join(""), l.canUseDOM && this._attachMutationObserver()
            },
            shouldComponentUpdate: function(global/*e*/) {
                var require/*t*/ = global/*e*/.documentView.getBlockDirections();
                return !this._guardAgainstRender && (global/*e*/.documentView.getVersion() !== this._renderedVersion || require/*t*/.join("") !== this._renderedDirections || this.props.disabled !== global/*e*/.disabled || this.props.inputView !== global/*e*/.inputView)
            },
            componentWillUpdate: function() {
                this.setMode(_.RENDER)
            },
            componentDidUpdate: function() {
                this.exitCurrentMode(), this._renderedVersion = this.props.documentView.getVersion();
                var global/*e*/ = this.props.documentView.getBlockDirections();
                this._renderedDirections = global/*e*/.join("")
            },
            componentWillMount: function() {
                this._compositionState = new f(!1), this._selectionListener = this.props.selectionState.addListener("focus", this.focus)
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
                this.setMode(_.EDIT)
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
        x = c.create({
            textBox: {
                backgroundColor: "transparent",
                fontSize: 14,
                height: 30
            }
        });
    module/*i*/.exports = T
});