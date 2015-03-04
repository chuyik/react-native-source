__d("TextEditorEditHandler",["DataTransfer","DocumentCharacters","Keys","TextEditorModes","TextEditorPasteHandler","UserAgent","findAncestorOffsetKey","getChangedCharactersFromMutation","getDocumentSelection","isSelectionAtLeafStart"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return b && (global/*e*/ == v || global/*e*/ == S)
    }

    function a(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.selectionState;
        if (!requireDynamic/*n*/.isCollapsed()) {
            var requireLazy/*r*/ = requireDynamic/*n*/.getStartOffset(),
                module/*i*/ = requireDynamic/*n*/.getEndOffset();
            require/*t*/(global/*e*/.documentView.getFragment(requireLazy/*r*/, module/*i*/), requireLazy/*r*/, module/*i*/)
        }
    }
    var DataTransfer/*s*/ = require/*t*/("DataTransfer"),
        DocumentCharacters/*l*/ = require/*t*/("DocumentCharacters"),
        Keys/*u*/ = require/*t*/("Keys"),
        TextEditorModes/*c*/ = require/*t*/("TextEditorModes"),
        TextEditorPasteHandler/*p*/ = require/*t*/("TextEditorPasteHandler"),
        UserAgent/*d*/ = require/*t*/("UserAgent"),
        findAncestorOffsetKey/*h*/ = require/*t*/("findAncestorOffsetKey"),
        getChangedCharactersFromMutation/*f*/ = require/*t*/("getChangedCharactersFromMutation"),
        getDocumentSelection/*m*/ = require/*t*/("getDocumentSelection"),
        isSelectionAtLeafStart/*g*/ = require/*t*/("isSelectionAtLeafStart"),
        _ = DocumentCharacters/*l*/.BLOCK_DELIMITER,
        y = DocumentCharacters/*l*/.SOFT_NEWLINE,
        v = "'",
        S = "/",
        b = !!UserAgent/*d*/.firefox(),
        R = {
            onBeforeInput: function(global/*e*/) {
                var require/*t*/ = global/*e*/.data;
                if (require/*t*/) {
                    var requireDynamic/*n*/ = this.props.documentView,
                        requireLazy/*r*/ = this.props.selectionState;
                    if (requireLazy/*r*/.isCollapsed() && !isSelectionAtLeafStart/*g*/(requireDynamic/*n*/, requireLazy/*r*/)) {
                        var module/*i*/ = requireDynamic/*n*/.getFingerprint();
                        if (this.props.onCharacters(require/*t*/), !o(require/*t*/) && module/*i*/ === requireDynamic/*n*/.getFingerprint()) return void this.expectDuplicateMutation()
                    } else this.props.onCharacters(require/*t*/);
                    global/*e*/.preventDefault()
                }
            },
            onKeyDown: function(global/*e*/) {
                var require/*t*/ = global/*e*/.nativeEvent.keyCode;
                switch (require/*t*/) {
                    case Keys/*u*/.RETURN:
                        return global/*e*/.preventDefault(), void this.props.onReturn(global/*e*/);
                    case Keys/*u*/.ESC:
                        return global/*e*/.preventDefault(), void(this.props.onEscape && this.props.onEscape(global/*e*/));
                    case Keys/*u*/.TAB:
                        return void(this.props.onTab && this.props.onTab(global/*e*/));
                    case Keys/*u*/.UP:
                        return void(this.props.onUpArrow && this.props.onUpArrow(global/*e*/));
                    case Keys/*u*/.DOWN:
                        return void(this.props.onDownArrow && this.props.onDownArrow(global/*e*/))
                }
                var requireDynamic/*n*/ = this.props.keyBindingFn.call(null, global/*e*/);
                requireDynamic/*n*/ && (global/*e*/.preventDefault(), this.props.onKeyCommand(requireDynamic/*n*/))
            },
            normalizeAndHandleSelect: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                null !== global/*e*/ && null !== require/*t*/ && (require/*t*/ += this.props.documentView.getOffset(global/*e*/)), null !== requireDynamic/*n*/ && null !== requireLazy/*r*/ && (requireLazy/*r*/ += this.props.documentView.getOffset(requireDynamic/*n*/)), require/*t*/ && module/*i*/ && this.resetRenderedVersion(), this.props.onSelect(require/*t*/, requireLazy/*r*/, !!module/*i*/)
            },
            onSelect: function() {
                getDocumentSelection/*m*/(this.refs.editorContainer.getDOMNode().firstChild, R.normalizeAndHandleSelect.bind(this))
            },
            onBlur: function(global/*e*/) {
                this.props.onBlur(global/*e*/)
            },
            onFocus: function(global/*e*/) {
                this.props.onFocus(global/*e*/)
            },
            onCharacterData: function(global/*e*/) {
                var require/*t*/ = getChangedCharactersFromMutation/*f*/(global/*e*/);
                if (require/*t*/) {
                    var requireDynamic/*n*/ = findAncestorOffsetKey/*h*/(require/*t*/.node),
                        requireLazy/*r*/ = this.props.documentView.getOffset(requireDynamic/*n*/);
                    this.props.onAlter(requireLazy/*r*/ + require/*t*/.offset, require/*t*/.oldText, require/*t*/.newText)
                }
            },
            onDragStart: function() {
                this._internalDrag = !0, this.setMode(TextEditorModes/*c*/.DRAG)
            },
            onDragOver: function(global/*e*/) {
                this._internalDrag = !1, this.setMode(TextEditorModes/*c*/.DRAG), global/*e*/.preventDefault()
            },
            onCompositionStart: function() {
                this.setRenderGuard(), this.captureEditorDOM(), this.setMode(TextEditorModes/*c*/.COMPOSITE), this._compositionState.startSession()
            },
            onCut: function(global/*e*/) {
                return this.props.selectionState.isCollapsed() ? void global/*e*/.preventDefault() : (this.setRenderGuard(), this.captureEditorDOM(), void a(this.props, function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    this._clipboard = global/*e*/, this.setMode(TextEditorModes/*c*/.CUT), setTimeout(function() {
                        this.restoreEditorDOM(), this.removeRenderGuard(), this.exitCurrentMode(), this.props.onCut(require/*t*/, requireDynamic/*n*/)
                    }.bind(this), 0)
                }.bind(this)))
            },
            onCopy: function() {
                a(this.props, function(global/*e*/) {
                    this._clipboard = global/*e*/
                }.bind(this))
            },
            onPaste: function(global/*e*/) {
                global/*e*/.preventDefault();
                var require/*t*/ = new DataTransfer/*s*/(global/*e*/.clipboardData);
                if (!require/*t*/.isRichText()) {
                    var requireDynamic/*n*/ = require/*t*/.getFiles();
                    if (requireDynamic/*n*/.length > 0) return void(this.props.onPasteFiles && this.props.onPasteFiles(requireDynamic/*n*/))
                }
                var requireLazy/*r*/ = require/*t*/.getText();
                if (requireLazy/*r*/ && (requireLazy/*r*/ = requireLazy/*r*/.replace(new RegExp(y, "isSelectionAtLeafStart/*g*/"), _)), this._clipboard && requireLazy/*r*/ === this._clipboard.text) return void this.props.onPasteFragment(this._clipboard);
                var module/*i*/ = require/*t*/.getHTML();
                if (module/*i*/) {
                    var o = TextEditorPasteHandler/*p*/.processHTML(module/*i*/);
                    if (o) return void this.props.onPasteFragment(o)
                }
                this._clipboard = null, this.props.onPasteFragment(TextEditorPasteHandler/*p*/.processText(requireLazy/*r*/))
            }
        };
    module/*i*/.exports = R
});