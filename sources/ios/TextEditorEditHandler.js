__d("TextEditorEditHandler",["DataTransfer","DocumentCharacters","Keys","TextEditorModes","TextEditorPasteHandler","UserAgent","findAncestorOffsetKey","getChangedCharactersFromMutation","getDocumentSelection","isSelectionAtLeafStart"],function (e, t, n, r, i) {
    function o(e) {
        return b && (e == v || e == S)
    }

    function a(e, t) {
        var n = e.selectionState;
        if (!n.isCollapsed()) {
            var r = n.getStartOffset(),
                i = n.getEndOffset();
            t(e.documentView.getFragment(r, i), r, i)
        }
    }
    var DataTransfer/*s*/ = t("DataTransfer"),
        DocumentCharacters/*l*/ = t("DocumentCharacters"),
        Keys/*u*/ = t("Keys"),
        TextEditorModes/*c*/ = t("TextEditorModes"),
        TextEditorPasteHandler/*p*/ = t("TextEditorPasteHandler"),
        UserAgent/*d*/ = t("UserAgent"),
        findAncestorOffsetKey/*h*/ = t("findAncestorOffsetKey"),
        getChangedCharactersFromMutation/*f*/ = t("getChangedCharactersFromMutation"),
        getDocumentSelection/*m*/ = t("getDocumentSelection"),
        isSelectionAtLeafStart/*g*/ = t("isSelectionAtLeafStart"),
        _ = DocumentCharacters/*l*/.BLOCK_DELIMITER,
        y = DocumentCharacters/*l*/.SOFT_NEWLINE,
        v = "'",
        S = "/",
        b = !!UserAgent/*d*/.firefox(),
        R = {
            onBeforeInput: function(e) {
                var t = e.data;
                if (t) {
                    var n = this.props.documentView,
                        r = this.props.selectionState;
                    if (r.isCollapsed() && !isSelectionAtLeafStart/*g*/(n, r)) {
                        var i = n.getFingerprint();
                        if (this.props.onCharacters(t), !o(t) && i === n.getFingerprint()) return void this.expectDuplicateMutation()
                    } else this.props.onCharacters(t);
                    e.preventDefault()
                }
            },
            onKeyDown: function(e) {
                var t = e.nativeEvent.keyCode;
                switch (t) {
                    case Keys/*u*/.RETURN:
                        return e.preventDefault(), void this.props.onReturn(e);
                    case Keys/*u*/.ESC:
                        return e.preventDefault(), void(this.props.onEscape && this.props.onEscape(e));
                    case Keys/*u*/.TAB:
                        return void(this.props.onTab && this.props.onTab(e));
                    case Keys/*u*/.UP:
                        return void(this.props.onUpArrow && this.props.onUpArrow(e));
                    case Keys/*u*/.DOWN:
                        return void(this.props.onDownArrow && this.props.onDownArrow(e))
                }
                var n = this.props.keyBindingFn.call(null, e);
                n && (e.preventDefault(), this.props.onKeyCommand(n))
            },
            normalizeAndHandleSelect: function(e, t, n, r, i) {
                null !== e && null !== t && (t += this.props.documentView.getOffset(e)), null !== n && null !== r && (r += this.props.documentView.getOffset(n)), t && i && this.resetRenderedVersion(), this.props.onSelect(t, r, !!i)
            },
            onSelect: function() {
                getDocumentSelection/*m*/(this.refs.editorContainer.getDOMNode().firstChild, R.normalizeAndHandleSelect.bind(this))
            },
            onBlur: function(e) {
                this.props.onBlur(e)
            },
            onFocus: function(e) {
                this.props.onFocus(e)
            },
            onCharacterData: function(e) {
                var t = getChangedCharactersFromMutation/*f*/(e);
                if (t) {
                    var n = findAncestorOffsetKey/*h*/(t.node),
                        r = this.props.documentView.getOffset(n);
                    this.props.onAlter(r + t.offset, t.oldText, t.newText)
                }
            },
            onDragStart: function() {
                this._internalDrag = !0, this.setMode(TextEditorModes/*c*/.DRAG)
            },
            onDragOver: function(e) {
                this._internalDrag = !1, this.setMode(TextEditorModes/*c*/.DRAG), e.preventDefault()
            },
            onCompositionStart: function() {
                this.setRenderGuard(), this.captureEditorDOM(), this.setMode(TextEditorModes/*c*/.COMPOSITE), this._compositionState.startSession()
            },
            onCut: function(e) {
                return this.props.selectionState.isCollapsed() ? void e.preventDefault() : (this.setRenderGuard(), this.captureEditorDOM(), void a(this.props, function(e, t, n) {
                    this._clipboard = e, this.setMode(TextEditorModes/*c*/.CUT), setTimeout(function() {
                        this.restoreEditorDOM(), this.removeRenderGuard(), this.exitCurrentMode(), this.props.onCut(t, n)
                    }.bind(this), 0)
                }.bind(this)))
            },
            onCopy: function() {
                a(this.props, function(e) {
                    this._clipboard = e
                }.bind(this))
            },
            onPaste: function(e) {
                e.preventDefault();
                var t = new DataTransfer/*s*/(e.clipboardData);
                if (!t.isRichText()) {
                    var n = t.getFiles();
                    if (n.length > 0) return void(this.props.onPasteFiles && this.props.onPasteFiles(n))
                }
                var r = t.getText();
                if (r && (r = r.replace(new RegExp(y, "isSelectionAtLeafStart/*g*/"), _)), this._clipboard && r === this._clipboard.text) return void this.props.onPasteFragment(this._clipboard);
                var i = t.getHTML();
                if (i) {
                    var o = TextEditorPasteHandler/*p*/.processHTML(i);
                    if (o) return void this.props.onPasteFragment(o)
                }
                this._clipboard = null, this.props.onPasteFragment(TextEditorPasteHandler/*p*/.processText(r))
            }
        };
    i.exports = R
});