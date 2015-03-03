__d("TextEditorEditHandler",["DataTransfer","DocumentCharacters","Keys","TextEditorModes","TextEditorPasteHandler","UserAgent","findAncestorOffsetKey","getChangedCharactersFromMutation","getDocumentSelection","isSelectionAtLeafStart"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*Keys/*r*/*/, module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/) {
    function o(global/*e*/) {
        return b && (global/*e*/ == v || global/*e*/ == S)
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = global/*e*/.selectionState;
        if (!requireDynamic/*n*/.isCollapsed()) {
            var requireLazy/*Keys/*r*/*/ = requireDynamic/*n*/.getStartOffset(),
                module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/ = requireDynamic/*n*/.getEndOffset();
            require/*exports/*t*/*/(global/*e*/.documentView.getFragment(requireLazy/*Keys/*r*/*/, module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/), requireLazy/*Keys/*r*/*/, module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/)
        }
    }
    var s = require/*exports/*t*/*/("DataTransfer"),
        TextEditorPasteHandler/*l*/ = require/*exports/*t*/*/("DocumentCharacters"),
        UserAgent/*u*/ = require/*exports/*t*/*/("Keys"),
        findAncestorOffsetKey/*c*/ = require/*exports/*t*/*/("TextEditorModes"),
        getChangedCharactersFromMutation/*p*/ = require/*exports/*t*/*/("TextEditorPasteHandler"),
        getDocumentSelection/*d*/ = require/*exports/*t*/*/("UserAgent"),
        isSelectionAtLeafStart/*h*/ = require/*exports/*t*/*/("findAncestorOffsetKey"),
        f = require/*exports/*t*/*/("getChangedCharactersFromMutation"),
        m = require/*exports/*t*/*/("getDocumentSelection"),
        g = require/*exports/*t*/*/("isSelectionAtLeafStart"),
        _ = TextEditorPasteHandler/*l*/.BLOCK_DELIMITER,
        y = TextEditorPasteHandler/*l*/.SOFT_NEWLINE,
        v = "'",
        S = "/",
        b = !!getDocumentSelection/*d*/.firefox(),
        R = {
            onBeforeInput: function(global/*e*/) {
                var require/*exports/*t*/*/ = global/*e*/.data;
                if (require/*exports/*t*/*/) {
                    var requireDynamic/*n*/ = this.props.documentView,
                        requireLazy/*Keys/*r*/*/ = this.props.selectionState;
                    if (requireLazy/*Keys/*r*/*/.isCollapsed() && !g(requireDynamic/*n*/, requireLazy/*Keys/*r*/*/)) {
                        var module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/ = requireDynamic/*n*/.getFingerprint();
                        if (this.props.onCharacters(require/*exports/*t*/*/), !o(require/*exports/*t*/*/) && module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/ === requireDynamic/*n*/.getFingerprint()) return void this.expectDuplicateMutation()
                    } else this.props.onCharacters(require/*exports/*t*/*/);
                    global/*e*/.preventDefault()
                }
            },
            onKeyDown: function(global/*e*/) {
                var require/*exports/*t*/*/ = global/*e*/.nativeEvent.keyCode;
                switch (require/*exports/*t*/*/) {
                    case UserAgent/*u*/.RETURN:
                        return global/*e*/.preventDefault(), void this.props.onReturn(global/*e*/);
                    case UserAgent/*u*/.ESC:
                        return global/*e*/.preventDefault(), void(this.props.onEscape && this.props.onEscape(global/*e*/));
                    case UserAgent/*u*/.TAB:
                        return void(this.props.onTab && this.props.onTab(global/*e*/));
                    case UserAgent/*u*/.UP:
                        return void(this.props.onUpArrow && this.props.onUpArrow(global/*e*/));
                    case UserAgent/*u*/.DOWN:
                        return void(this.props.onDownArrow && this.props.onDownArrow(global/*e*/))
                }
                var requireDynamic/*n*/ = this.props.keyBindingFn.call(null, global/*e*/);
                requireDynamic/*n*/ && (global/*e*/.preventDefault(), this.props.onKeyCommand(requireDynamic/*n*/))
            },
            normalizeAndHandleSelect: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*Keys/*r*/*/, module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/) {
                null !== global/*e*/ && null !== require/*exports/*t*/*/ && (require/*exports/*t*/*/ += this.props.documentView.getOffset(global/*e*/)), null !== requireDynamic/*n*/ && null !== requireLazy/*Keys/*r*/*/ && (requireLazy/*Keys/*r*/*/ += this.props.documentView.getOffset(requireDynamic/*n*/)), require/*exports/*t*/*/ && module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/ && this.resetRenderedVersion(), this.props.onSelect(require/*exports/*t*/*/, requireLazy/*Keys/*r*/*/, !!module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/)
            },
            onSelect: function() {
                m(this.refs.editorContainer.getDOMNode().firstChild, R.normalizeAndHandleSelect.bind(this))
            },
            onBlur: function(global/*e*/) {
                this.props.onBlur(global/*e*/)
            },
            onFocus: function(global/*e*/) {
                this.props.onFocus(global/*e*/)
            },
            onCharacterData: function(global/*e*/) {
                var require/*exports/*t*/*/ = f(global/*e*/);
                if (require/*exports/*t*/*/) {
                    var requireDynamic/*n*/ = isSelectionAtLeafStart/*h*/(require/*exports/*t*/*/.node),
                        requireLazy/*Keys/*r*/*/ = this.props.documentView.getOffset(requireDynamic/*n*/);
                    this.props.onAlter(requireLazy/*Keys/*r*/*/ + require/*exports/*t*/*/.offset, require/*exports/*t*/*/.oldText, require/*exports/*t*/*/.newText)
                }
            },
            onDragStart: function() {
                this._internalDrag = !0, this.setMode(findAncestorOffsetKey/*c*/.DRAG)
            },
            onDragOver: function(global/*e*/) {
                this._internalDrag = !1, this.setMode(findAncestorOffsetKey/*c*/.DRAG), global/*e*/.preventDefault()
            },
            onCompositionStart: function() {
                this.setRenderGuard(), this.captureEditorDOM(), this.setMode(findAncestorOffsetKey/*c*/.COMPOSITE), this._compositionState.startSession()
            },
            onCut: function(global/*e*/) {
                return this.props.selectionState.isCollapsed() ? void global/*e*/.preventDefault() : (this.setRenderGuard(), this.captureEditorDOM(), void a(this.props, function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
                    this._clipboard = global/*e*/, this.setMode(findAncestorOffsetKey/*c*/.CUT), setTimeout(function() {
                        this.restoreEditorDOM(), this.removeRenderGuard(), this.exitCurrentMode(), this.props.onCut(require/*exports/*t*/*/, requireDynamic/*n*/)
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
                var require/*exports/*t*/*/ = new s(global/*e*/.clipboardData);
                if (!require/*exports/*t*/*/.isRichText()) {
                    var requireDynamic/*n*/ = require/*exports/*t*/*/.getFiles();
                    if (requireDynamic/*n*/.length > 0) return void(this.props.onPasteFiles && this.props.onPasteFiles(requireDynamic/*n*/))
                }
                var requireLazy/*Keys/*r*/*/ = require/*exports/*t*/*/.getText();
                if (requireLazy/*Keys/*r*/*/ && (requireLazy/*Keys/*r*/*/ = requireLazy/*Keys/*r*/*/.replace(new RegExp(y, "g"), _)), this._clipboard && requireLazy/*Keys/*r*/*/ === this._clipboard.text) return void this.props.onPasteFragment(this._clipboard);
                var module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/ = require/*exports/*t*/*/.getHTML();
                if (module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/) {
                    var o = getChangedCharactersFromMutation/*p*/.processHTML(module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/);
                    if (o) return void this.props.onPasteFragment(o)
                }
                this._clipboard = null, this.props.onPasteFragment(getChangedCharactersFromMutation/*p*/.processText(requireLazy/*Keys/*r*/*/))
            }
        };
    module/*DataTransfer/*DocumentCharacters/*TextEditorModes/*i*/*/*/*/.exports = R
});