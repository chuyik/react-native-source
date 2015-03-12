__d("BaseTextEditorMixin",["DocumentCharacters","DocumentCommands","DocumentModifier","DocumentRemovableWord","emptyFunction","getActiveElement","getCurrentInlineStyle","getCurrentInlineStyleForOffset","getTextContentFromFiles"],function (e, t, n, r, i) {
    var DocumentCharacters/*o*/ = t("DocumentCharacters"),
        DocumentCommands/*a*/ = t("DocumentCommands"),
        DocumentModifier/*s*/ = t("DocumentModifier"),
        DocumentRemovableWord/*l*/ = t("DocumentRemovableWord"),
        emptyFunction/*u*/ = t("emptyFunction"),
        getActiveElement/*c*/ = t("getActiveElement"),
        getCurrentInlineStyle/*p*/ = t("getCurrentInlineStyle"),
        getCurrentInlineStyleForOffset/*d*/ = t("getCurrentInlineStyleForOffset"),
        getTextContentFromFiles/*h*/ = t("getTextContentFromFiles"),
        f = DocumentCharacters/*o*/.BLOCK_DELIMITER,
        m = DocumentCharacters/*o*/.SOFT_NEWLINE,
        g = {
            getHandlerForCommand: function(e) {
                switch (e) {
                    case DocumentCommands/*a*/.UNDO:
                        return this.undo;
                    case DocumentCommands/*a*/.REDO:
                        return this.redo;
                    case DocumentCommands/*a*/.DELETE:
                        return this.onDelete;
                    case DocumentCommands/*a*/.DELETE_WORD:
                        return this.onDeleteWord;
                    case DocumentCommands/*a*/.DELETE_TO_END_OF_BLOCK:
                        return this.onDeleteToEndOfBlock;
                    case DocumentCommands/*a*/.BACKSPACE:
                        return this.onBackspace;
                    case DocumentCommands/*a*/.BACKSPACE_WORD:
                        return this.onBackspaceWord;
                    case DocumentCommands/*a*/.BACKSPACE_TO_END_OF_BLOCK:
                        return this.onBackspaceToEndOfBlock;
                    case DocumentCommands/*a*/.INSERT_BLOCK_DELIMITER:
                        return this.onInsertNewline;
                    case DocumentCommands/*a*/.TRANSPOSE_CHARACTERS:
                        return this.onTransposeCharacters;
                    case DocumentCommands/*a*/.MOVE_SELECTION_TO_START_OF_BLOCK:
                        return this.moveSelectionToStartOfBlock;
                    case DocumentCommands/*a*/.MOVE_SELECTION_TO_END_OF_BLOCK:
                        return this.moveSelectionToEndOfBlock;
                    default:
                        return emptyFunction/*u*/
                }
            },
            componentWillReceiveProps: function(e) {
                var t = e.documentContent,
                    n = this.props.documentContent;
                if (t && n != t) this.props.selectionState.update(0, 0);
                else {
                    var r = n.getText().length;
                    this.props.selectionState.constrainLength(r)
                }
            },
            onFocus: function() {
                this.props.selectionState.focus()
            },
            onBlur: function() {
                e.getSelection && getActiveElement/*c*/() === document.body && e.getSelection().removeAllRanges(), this.props.selectionState.blur()
            },
            onSelect: function(e, t, n) {
                if (!this._blockSelectEvents) {
                    var r = this.props.selectionState;
                    null === e ? (r.update(0, 0), r.blur()) : n ? this.updateDocument(e, t) : r.update(e, t)
                }
            },
            updateDocument: function(e, t) {
                this.props.selectionState.update(e, t), this._blockSelectEvents = !0, this.forceUpdate(function() {
                    this.props.onChange && this.props.onChange(), this._blockSelectEvents = !1
                }.bind(this))
            },
            updateDocumentAndCollapseSelection: function(e, t) {
                this.updateDocument(t, t)
            },
            undo: function() {
                DocumentModifier/*s*/.undo(this.props.documentContent, this.updateDocument)
            },
            redo: function() {
                DocumentModifier/*s*/.redo(this.props.documentContent, this.updateDocument)
            },
            onKeyCommand: function(e) {
                var t = this.getHandlerForCommand(e);
                t()
            },
            onCut: function(e, t) {
                DocumentModifier/*s*/.removeRange(this.props.documentContent, e, t, this.updateDocument)
            },
            onPasteFragment: function(e) {
                var t = this.props.selectionState;
                DocumentModifier/*s*/.insertFragment(this.props.documentContent, e, t.getStartOffset(), t.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            _removeTextWithStrategy: function(e) {
                var t = this.props.selectionState,
                    n = t.getEndOffset();
                if (t.isCollapsed()) {
                    var r = e(n);
                    if (r) {
                        var i = 0 > r;
                        return void DocumentModifier/*s*/.removeRange(this.props.documentContent, i ? n + r : n, i ? n : n + r, this.updateDocumentAndCollapseSelection)
                    }
                }
                this._removeRange()
            },
            onDelete: function() {
                var e = this.props.selectionState;
                e.isCollapsed() ? DocumentModifier/*s*/.removeCharacterForward(this.props.documentContent, e.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onDeleteWord: function() {
                var e = this.props.selectionState.getStartOffset(),
                    t = this.props.documentContent;
                return e < t.getText().length && t.getEntities()[e] ? void this.onDelete() : void this._removeTextWithStrategy(function(e) {
                    var t = this.props.documentContent.getText(),
                        n = DocumentRemovableWord/*l*/.getForward(t.slice(e));
                    return n ? n.length : null
                }.bind(this))
            },
            onDeleteToEndOfBlock: function() {
                this._removeTextWithStrategy(function(e) {
                    var t = this.props.documentContent.getText(),
                        n = t.indexOf(f, e);
                    return -1 === n ? n = t.length : n === e && n++, n - e
                }.bind(this))
            },
            onBackspace: function() {
                var e = this.props.selectionState;
                e.isCollapsed() ? DocumentModifier/*s*/.removeCharacterBackward(this.props.documentContent, e.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onBackspaceWord: function() {
                var e = this.props.selectionState.getStartOffset(),
                    t = this.props.documentContent;
                return e > 0 && t.getEntities()[e - 1] ? void this.onBackspace() : void this._removeTextWithStrategy(function(e) {
                    var t = this.props.documentContent.getText(),
                        n = DocumentRemovableWord/*l*/.getBackward(t.slice(0, e));
                    return n ? -n.length : null
                }.bind(this))
            },
            onBackspaceToEndOfBlock: function() {
                this._removeTextWithStrategy(function(e) {
                    var t = this.props.documentContent.getText(),
                        n = t.slice(0, e).lastIndexOf(f);
                    return -1 === n ? n = 0 : e - 1 > n && n++, n - e
                }.bind(this))
            },
            moveSelectionToStartOfBlock: function() {
                this._moveSelectionToBlockEndpoint(!0)
            },
            moveSelectionToEndOfBlock: function() {
                this._moveSelectionToBlockEndpoint(!1)
            },
            _moveSelectionToBlockEndpoint: function(e) {
                for (var t = this.props.documentContent, n = this.props.selectionState.getStartOffset(), r = t.getText(), i = e ? r.substr(0, n).split("").reverse().join("") : r.substr(n), DocumentCharacters/*o*/ = i.length, DocumentCommands/*a*/ = 0; DocumentCommands/*a*/ < i.length; DocumentCommands/*a*/++)
                    if (i[DocumentCommands/*a*/] === f || i[DocumentCommands/*a*/] === m) {
                        DocumentCharacters/*o*/ = DocumentCommands/*a*/;
                        break
                    }
                if (DocumentCharacters/*o*/ > 0) {
                    var DocumentModifier/*s*/ = e ? n - DocumentCharacters/*o*/ : n + DocumentCharacters/*o*/;
                    t.bumpVersion(), this.updateDocument(DocumentModifier/*s*/, DocumentModifier/*s*/)
                }
            },
            _removeRange: function() {
                var e = this.props.selectionState;
                DocumentModifier/*s*/.removeRange(this.props.documentContent, e.getStartOffset(), e.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onReturn: function(e) {
                e.shiftKey ? this.onInsertSoftNewline() : this.onInsertNewline()
            },
            onInsertSoftNewline: function() {
                this.onCharacters(m)
            },
            onInsertNewline: function() {
                this.onCharacters(f)
            },
            onTransposeCharacters: function() {
                var e = this.props.selectionState,
                    t = e.getStartOffset(),
                    n = this.props.documentContent.getText();
                e.isCollapsed() && 0 !== t && t !== n.length && DocumentModifier/*s*/.moveText(this.props.documentContent, t - 1, t, t + 1, this.updateDocumentAndCollapseSelection)
            },
            onCharacters: function(e) {
                var t, n = this.props.selectionState;
                t = null != this.state.inlineStyleOverride ? this.state.inlineStyleOverride : getCurrentInlineStyle/*p*/(this.props.documentContent, n), DocumentModifier/*s*/.replaceText(this.props.documentContent, e, t, null, n.getStartOffset(), n.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onAlter: function(e, t, n) {
                var r = this.props.selectionState.getEndOffset(),
                    i = e,
                    DocumentCharacters/*o*/ = e + t.length;
                DocumentModifier/*s*/.replaceText(this.props.documentContent, n, getCurrentInlineStyleForOffset/*d*/(this.props.documentContent, i), null, i, DocumentCharacters/*o*/, function() {
                    r !== i + n.length && (r += n.length - t.length), this.updateDocument(r, r)
                }.bind(this))
            },
            onDropSelection: function(e) {
                var t = this.props.selectionState;
                DocumentModifier/*s*/.moveText(this.props.documentContent, t.getStartOffset(), t.getEndOffset(), e, this.updateDocument)
            },
            onDropText: function(e, t) {
                this._insertTextAtOffset(e, t)
            },
            onDropFiles: function(e, t) {
                this.props.handleDroppedFiles && this.props.handleDroppedFiles(e, t) || getTextContentFromFiles/*h*/(t, function(t) {
                    t && this._insertTextAtOffset(e, t)
                }.bind(this))
            },
            onPasteFiles: function(e) {
                if (!this.props.handlePastedFiles || !this.props.handlePastedFiles(e)) {
                    var t = this.props.selectionState.getStartOffset();
                    getTextContentFromFiles/*h*/(e, function(e) {
                        e && this._insertTextAtOffset(t, e)
                    }.bind(this))
                }
            },
            _insertTextAtOffset: function(e, t) {
                var n = this.props.documentContent;
                DocumentModifier/*s*/.replaceText(n, t, getCurrentInlineStyleForOffset/*d*/(n, e), null, e, e, this.updateDocument)
            }
        };
    i.exports = g
});