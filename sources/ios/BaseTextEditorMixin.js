__d("BaseTextEditorMixin",["DocumentCharacters","DocumentCommands","DocumentModifier","DocumentRemovableWord","emptyFunction","getActiveElement","getCurrentInlineStyle","getCurrentInlineStyleForOffset","getTextContentFromFiles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var DocumentCharacters/*o*/ = require/*t*/("DocumentCharacters"),
        DocumentCommands/*a*/ = require/*t*/("DocumentCommands"),
        DocumentModifier/*s*/ = require/*t*/("DocumentModifier"),
        DocumentRemovableWord/*l*/ = require/*t*/("DocumentRemovableWord"),
        emptyFunction/*u*/ = require/*t*/("emptyFunction"),
        getActiveElement/*c*/ = require/*t*/("getActiveElement"),
        getCurrentInlineStyle/*p*/ = require/*t*/("getCurrentInlineStyle"),
        getCurrentInlineStyleForOffset/*d*/ = require/*t*/("getCurrentInlineStyleForOffset"),
        getTextContentFromFiles/*h*/ = require/*t*/("getTextContentFromFiles"),
        f = DocumentCharacters/*o*/.BLOCK_DELIMITER,
        m = DocumentCharacters/*o*/.SOFT_NEWLINE,
        g = {
            getHandlerForCommand: function(global/*e*/) {
                switch (global/*e*/) {
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
            componentWillReceiveProps: function(global/*e*/) {
                var require/*t*/ = global/*e*/.documentContent,
                    requireDynamic/*n*/ = this.props.documentContent;
                if (require/*t*/ && requireDynamic/*n*/ != require/*t*/) this.props.selectionState.update(0, 0);
                else {
                    var requireLazy/*r*/ = requireDynamic/*n*/.getText().length;
                    this.props.selectionState.constrainLength(requireLazy/*r*/)
                }
            },
            onFocus: function() {
                this.props.selectionState.focus()
            },
            onBlur: function() {
                global/*e*/.getSelection && getActiveElement/*c*/() === document.body && global/*e*/.getSelection().removeAllRanges(), this.props.selectionState.blur()
            },
            onSelect: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                if (!this._blockSelectEvents) {
                    var requireLazy/*r*/ = this.props.selectionState;
                    null === global/*e*/ ? (requireLazy/*r*/.update(0, 0), requireLazy/*r*/.blur()) : requireDynamic/*n*/ ? this.updateDocument(global/*e*/, require/*t*/) : requireLazy/*r*/.update(global/*e*/, require/*t*/)
                }
            },
            updateDocument: function(global/*e*/, require/*t*/) {
                this.props.selectionState.update(global/*e*/, require/*t*/), this._blockSelectEvents = !0, this.forceUpdate(function() {
                    this.props.onChange && this.props.onChange(), this._blockSelectEvents = !1
                }.bind(this))
            },
            updateDocumentAndCollapseSelection: function(global/*e*/, require/*t*/) {
                this.updateDocument(require/*t*/, require/*t*/)
            },
            undo: function() {
                DocumentModifier/*s*/.undo(this.props.documentContent, this.updateDocument)
            },
            redo: function() {
                DocumentModifier/*s*/.redo(this.props.documentContent, this.updateDocument)
            },
            onKeyCommand: function(global/*e*/) {
                var require/*t*/ = this.getHandlerForCommand(global/*e*/);
                require/*t*/()
            },
            onCut: function(global/*e*/, require/*t*/) {
                DocumentModifier/*s*/.removeRange(this.props.documentContent, global/*e*/, require/*t*/, this.updateDocument)
            },
            onPasteFragment: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState;
                DocumentModifier/*s*/.insertFragment(this.props.documentContent, global/*e*/, require/*t*/.getStartOffset(), require/*t*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            _removeTextWithStrategy: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState,
                    requireDynamic/*n*/ = require/*t*/.getEndOffset();
                if (require/*t*/.isCollapsed()) {
                    var requireLazy/*r*/ = global/*e*/(requireDynamic/*n*/);
                    if (requireLazy/*r*/) {
                        var module/*i*/ = 0 > requireLazy/*r*/;
                        return void DocumentModifier/*s*/.removeRange(this.props.documentContent, module/*i*/ ? requireDynamic/*n*/ + requireLazy/*r*/ : requireDynamic/*n*/, module/*i*/ ? requireDynamic/*n*/ : requireDynamic/*n*/ + requireLazy/*r*/, this.updateDocumentAndCollapseSelection)
                    }
                }
                this._removeRange()
            },
            onDelete: function() {
                var global/*e*/ = this.props.selectionState;
                global/*e*/.isCollapsed() ? DocumentModifier/*s*/.removeCharacterForward(this.props.documentContent, global/*e*/.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onDeleteWord: function() {
                var global/*e*/ = this.props.selectionState.getStartOffset(),
                    require/*t*/ = this.props.documentContent;
                return global/*e*/ < require/*t*/.getText().length && require/*t*/.getEntities()[global/*e*/] ? void this.onDelete() : void this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = DocumentRemovableWord/*l*/.getForward(require/*t*/.slice(global/*e*/));
                    return requireDynamic/*n*/ ? requireDynamic/*n*/.length : null
                }.bind(this))
            },
            onDeleteToEndOfBlock: function() {
                this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = require/*t*/.indexOf(f, global/*e*/);
                    return -1 === requireDynamic/*n*/ ? requireDynamic/*n*/ = require/*t*/.length : requireDynamic/*n*/ === global/*e*/ && requireDynamic/*n*/++, requireDynamic/*n*/ - global/*e*/
                }.bind(this))
            },
            onBackspace: function() {
                var global/*e*/ = this.props.selectionState;
                global/*e*/.isCollapsed() ? DocumentModifier/*s*/.removeCharacterBackward(this.props.documentContent, global/*e*/.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onBackspaceWord: function() {
                var global/*e*/ = this.props.selectionState.getStartOffset(),
                    require/*t*/ = this.props.documentContent;
                return global/*e*/ > 0 && require/*t*/.getEntities()[global/*e*/ - 1] ? void this.onBackspace() : void this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = DocumentRemovableWord/*l*/.getBackward(require/*t*/.slice(0, global/*e*/));
                    return requireDynamic/*n*/ ? -requireDynamic/*n*/.length : null
                }.bind(this))
            },
            onBackspaceToEndOfBlock: function() {
                this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = require/*t*/.slice(0, global/*e*/).lastIndexOf(f);
                    return -1 === requireDynamic/*n*/ ? requireDynamic/*n*/ = 0 : global/*e*/ - 1 > requireDynamic/*n*/ && requireDynamic/*n*/++, requireDynamic/*n*/ - global/*e*/
                }.bind(this))
            },
            moveSelectionToStartOfBlock: function() {
                this._moveSelectionToBlockEndpoint(!0)
            },
            moveSelectionToEndOfBlock: function() {
                this._moveSelectionToBlockEndpoint(!1)
            },
            _moveSelectionToBlockEndpoint: function(global/*e*/) {
                for (var require/*t*/ = this.props.documentContent, requireDynamic/*n*/ = this.props.selectionState.getStartOffset(), requireLazy/*r*/ = require/*t*/.getText(), module/*i*/ = global/*e*/ ? requireLazy/*r*/.substr(0, requireDynamic/*n*/).split("").reverse().join("") : requireLazy/*r*/.substr(requireDynamic/*n*/), DocumentCharacters/*o*/ = module/*i*/.length, DocumentCommands/*a*/ = 0; DocumentCommands/*a*/ < module/*i*/.length; DocumentCommands/*a*/++)
                    if (module/*i*/[DocumentCommands/*a*/] === f || module/*i*/[DocumentCommands/*a*/] === m) {
                        DocumentCharacters/*o*/ = DocumentCommands/*a*/;
                        break
                    }
                if (DocumentCharacters/*o*/ > 0) {
                    var DocumentModifier/*s*/ = global/*e*/ ? requireDynamic/*n*/ - DocumentCharacters/*o*/ : requireDynamic/*n*/ + DocumentCharacters/*o*/;
                    require/*t*/.bumpVersion(), this.updateDocument(DocumentModifier/*s*/, DocumentModifier/*s*/)
                }
            },
            _removeRange: function() {
                var global/*e*/ = this.props.selectionState;
                DocumentModifier/*s*/.removeRange(this.props.documentContent, global/*e*/.getStartOffset(), global/*e*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onReturn: function(global/*e*/) {
                global/*e*/.shiftKey ? this.onInsertSoftNewline() : this.onInsertNewline()
            },
            onInsertSoftNewline: function() {
                this.onCharacters(m)
            },
            onInsertNewline: function() {
                this.onCharacters(f)
            },
            onTransposeCharacters: function() {
                var global/*e*/ = this.props.selectionState,
                    require/*t*/ = global/*e*/.getStartOffset(),
                    requireDynamic/*n*/ = this.props.documentContent.getText();
                global/*e*/.isCollapsed() && 0 !== require/*t*/ && require/*t*/ !== requireDynamic/*n*/.length && DocumentModifier/*s*/.moveText(this.props.documentContent, require/*t*/ - 1, require/*t*/, require/*t*/ + 1, this.updateDocumentAndCollapseSelection)
            },
            onCharacters: function(global/*e*/) {
                var require/*t*/, requireDynamic/*n*/ = this.props.selectionState;
                require/*t*/ = null != this.state.inlineStyleOverride ? this.state.inlineStyleOverride : getCurrentInlineStyle/*p*/(this.props.documentContent, requireDynamic/*n*/), DocumentModifier/*s*/.replaceText(this.props.documentContent, global/*e*/, require/*t*/, null, requireDynamic/*n*/.getStartOffset(), requireDynamic/*n*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onAlter: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this.props.selectionState.getEndOffset(),
                    module/*i*/ = global/*e*/,
                    DocumentCharacters/*o*/ = global/*e*/ + require/*t*/.length;
                DocumentModifier/*s*/.replaceText(this.props.documentContent, requireDynamic/*n*/, getCurrentInlineStyleForOffset/*d*/(this.props.documentContent, module/*i*/), null, module/*i*/, DocumentCharacters/*o*/, function() {
                    requireLazy/*r*/ !== module/*i*/ + requireDynamic/*n*/.length && (requireLazy/*r*/ += requireDynamic/*n*/.length - require/*t*/.length), this.updateDocument(requireLazy/*r*/, requireLazy/*r*/)
                }.bind(this))
            },
            onDropSelection: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState;
                DocumentModifier/*s*/.moveText(this.props.documentContent, require/*t*/.getStartOffset(), require/*t*/.getEndOffset(), global/*e*/, this.updateDocument)
            },
            onDropText: function(global/*e*/, require/*t*/) {
                this._insertTextAtOffset(global/*e*/, require/*t*/)
            },
            onDropFiles: function(global/*e*/, require/*t*/) {
                this.props.handleDroppedFiles && this.props.handleDroppedFiles(global/*e*/, require/*t*/) || getTextContentFromFiles/*h*/(require/*t*/, function(require/*t*/) {
                    require/*t*/ && this._insertTextAtOffset(global/*e*/, require/*t*/)
                }.bind(this))
            },
            onPasteFiles: function(global/*e*/) {
                if (!this.props.handlePastedFiles || !this.props.handlePastedFiles(global/*e*/)) {
                    var require/*t*/ = this.props.selectionState.getStartOffset();
                    getTextContentFromFiles/*h*/(global/*e*/, function(global/*e*/) {
                        global/*e*/ && this._insertTextAtOffset(require/*t*/, global/*e*/)
                    }.bind(this))
                }
            },
            _insertTextAtOffset: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.documentContent;
                DocumentModifier/*s*/.replaceText(requireDynamic/*n*/, require/*t*/, getCurrentInlineStyleForOffset/*d*/(requireDynamic/*n*/, global/*e*/), null, global/*e*/, global/*e*/, this.updateDocument)
            }
        };
    module/*i*/.exports = g
});