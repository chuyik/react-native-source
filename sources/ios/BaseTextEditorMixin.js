__d("BaseTextEditorMixin",["DocumentCharacters","DocumentCommands","DocumentModifier","DocumentRemovableWord","emptyFunction","getActiveElement","getCurrentInlineStyle","getCurrentInlineStyleForOffset","getTextContentFromFiles"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentCharacters"),
        exports/*a*/ = require/*t*/("DocumentCommands"),
        DocumentCharacters/*s*/ = require/*t*/("DocumentModifier"),
        DocumentCommands/*l*/ = require/*t*/("DocumentRemovableWord"),
        DocumentModifier/*u*/ = require/*t*/("emptyFunction"),
        DocumentRemovableWord/*c*/ = require/*t*/("getActiveElement"),
        emptyFunction/*p*/ = require/*t*/("getCurrentInlineStyle"),
        getActiveElement/*d*/ = require/*t*/("getCurrentInlineStyleForOffset"),
        getCurrentInlineStyle/*h*/ = require/*t*/("getTextContentFromFiles"),
        getCurrentInlineStyleForOffset/*f*/ = o.BLOCK_DELIMITER,
        getTextContentFromFiles/*m*/ = o.SOFT_NEWLINE,
        g = {
            getHandlerForCommand: function(global/*e*/) {
                switch (global/*e*/) {
                    case exports/*a*/.UNDO:
                        return this.undo;
                    case exports/*a*/.REDO:
                        return this.redo;
                    case exports/*a*/.DELETE:
                        return this.onDelete;
                    case exports/*a*/.DELETE_WORD:
                        return this.onDeleteWord;
                    case exports/*a*/.DELETE_TO_END_OF_BLOCK:
                        return this.onDeleteToEndOfBlock;
                    case exports/*a*/.BACKSPACE:
                        return this.onBackspace;
                    case exports/*a*/.BACKSPACE_WORD:
                        return this.onBackspaceWord;
                    case exports/*a*/.BACKSPACE_TO_END_OF_BLOCK:
                        return this.onBackspaceToEndOfBlock;
                    case exports/*a*/.INSERT_BLOCK_DELIMITER:
                        return this.onInsertNewline;
                    case exports/*a*/.TRANSPOSE_CHARACTERS:
                        return this.onTransposeCharacters;
                    case exports/*a*/.MOVE_SELECTION_TO_START_OF_BLOCK:
                        return this.moveSelectionToStartOfBlock;
                    case exports/*a*/.MOVE_SELECTION_TO_END_OF_BLOCK:
                        return this.moveSelectionToEndOfBlock;
                    default:
                        return DocumentModifier/*u*/
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
                global/*e*/.getSelection && DocumentRemovableWord/*c*/() === document.body && global/*e*/.getSelection().removeAllRanges(), this.props.selectionState.blur()
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
                DocumentCharacters/*s*/.undo(this.props.documentContent, this.updateDocument)
            },
            redo: function() {
                DocumentCharacters/*s*/.redo(this.props.documentContent, this.updateDocument)
            },
            onKeyCommand: function(global/*e*/) {
                var require/*t*/ = this.getHandlerForCommand(global/*e*/);
                require/*t*/()
            },
            onCut: function(global/*e*/, require/*t*/) {
                DocumentCharacters/*s*/.removeRange(this.props.documentContent, global/*e*/, require/*t*/, this.updateDocument)
            },
            onPasteFragment: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState;
                DocumentCharacters/*s*/.insertFragment(this.props.documentContent, global/*e*/, require/*t*/.getStartOffset(), require/*t*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            _removeTextWithStrategy: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState,
                    requireDynamic/*n*/ = require/*t*/.getEndOffset();
                if (require/*t*/.isCollapsed()) {
                    var requireLazy/*r*/ = global/*e*/(requireDynamic/*n*/);
                    if (requireLazy/*r*/) {
                        var module/*i*/ = 0 > requireLazy/*r*/;
                        return void DocumentCharacters/*s*/.removeRange(this.props.documentContent, module/*i*/ ? requireDynamic/*n*/ + requireLazy/*r*/ : requireDynamic/*n*/, module/*i*/ ? requireDynamic/*n*/ : requireDynamic/*n*/ + requireLazy/*r*/, this.updateDocumentAndCollapseSelection)
                    }
                }
                this._removeRange()
            },
            onDelete: function() {
                var global/*e*/ = this.props.selectionState;
                global/*e*/.isCollapsed() ? DocumentCharacters/*s*/.removeCharacterForward(this.props.documentContent, global/*e*/.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onDeleteWord: function() {
                var global/*e*/ = this.props.selectionState.getStartOffset(),
                    require/*t*/ = this.props.documentContent;
                return global/*e*/ < require/*t*/.getText().length && require/*t*/.getEntities()[global/*e*/] ? void this.onDelete() : void this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = DocumentCommands/*l*/.getForward(require/*t*/.slice(global/*e*/));
                    return requireDynamic/*n*/ ? requireDynamic/*n*/.length : null
                }.bind(this))
            },
            onDeleteToEndOfBlock: function() {
                this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = require/*t*/.indexOf(getCurrentInlineStyleForOffset/*f*/, global/*e*/);
                    return -1 === requireDynamic/*n*/ ? requireDynamic/*n*/ = require/*t*/.length : requireDynamic/*n*/ === global/*e*/ && requireDynamic/*n*/++, requireDynamic/*n*/ - global/*e*/
                }.bind(this))
            },
            onBackspace: function() {
                var global/*e*/ = this.props.selectionState;
                global/*e*/.isCollapsed() ? DocumentCharacters/*s*/.removeCharacterBackward(this.props.documentContent, global/*e*/.getAnchorOffset(), this.updateDocumentAndCollapseSelection) : this._removeRange()
            },
            onBackspaceWord: function() {
                var global/*e*/ = this.props.selectionState.getStartOffset(),
                    require/*t*/ = this.props.documentContent;
                return global/*e*/ > 0 && require/*t*/.getEntities()[global/*e*/ - 1] ? void this.onBackspace() : void this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = DocumentCommands/*l*/.getBackward(require/*t*/.slice(0, global/*e*/));
                    return requireDynamic/*n*/ ? -requireDynamic/*n*/.length : null
                }.bind(this))
            },
            onBackspaceToEndOfBlock: function() {
                this._removeTextWithStrategy(function(global/*e*/) {
                    var require/*t*/ = this.props.documentContent.getText(),
                        requireDynamic/*n*/ = require/*t*/.slice(0, global/*e*/).lastIndexOf(getCurrentInlineStyleForOffset/*f*/);
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
                for (var require/*t*/ = this.props.documentContent, requireDynamic/*n*/ = this.props.selectionState.getStartOffset(), requireLazy/*r*/ = require/*t*/.getText(), module/*i*/ = global/*e*/ ? requireLazy/*r*/.substr(0, requireDynamic/*n*/).split("").reverse().join("") : requireLazy/*r*/.substr(requireDynamic/*n*/), o = module/*i*/.length, exports/*a*/ = 0; exports/*a*/ < module/*i*/.length; exports/*a*/++)
                    if (module/*i*/[exports/*a*/] === getCurrentInlineStyleForOffset/*f*/ || module/*i*/[exports/*a*/] === getTextContentFromFiles/*m*/) {
                        o = exports/*a*/;
                        break
                    }
                if (o > 0) {
                    var DocumentCharacters/*s*/ = global/*e*/ ? requireDynamic/*n*/ - o : requireDynamic/*n*/ + o;
                    require/*t*/.bumpVersion(), this.updateDocument(DocumentCharacters/*s*/, DocumentCharacters/*s*/)
                }
            },
            _removeRange: function() {
                var global/*e*/ = this.props.selectionState;
                DocumentCharacters/*s*/.removeRange(this.props.documentContent, global/*e*/.getStartOffset(), global/*e*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onReturn: function(global/*e*/) {
                global/*e*/.shiftKey ? this.onInsertSoftNewline() : this.onInsertNewline()
            },
            onInsertSoftNewline: function() {
                this.onCharacters(getTextContentFromFiles/*m*/)
            },
            onInsertNewline: function() {
                this.onCharacters(getCurrentInlineStyleForOffset/*f*/)
            },
            onTransposeCharacters: function() {
                var global/*e*/ = this.props.selectionState,
                    require/*t*/ = global/*e*/.getStartOffset(),
                    requireDynamic/*n*/ = this.props.documentContent.getText();
                global/*e*/.isCollapsed() && 0 !== require/*t*/ && require/*t*/ !== requireDynamic/*n*/.length && DocumentCharacters/*s*/.moveText(this.props.documentContent, require/*t*/ - 1, require/*t*/, require/*t*/ + 1, this.updateDocumentAndCollapseSelection)
            },
            onCharacters: function(global/*e*/) {
                var require/*t*/, requireDynamic/*n*/ = this.props.selectionState;
                require/*t*/ = null != this.state.inlineStyleOverride ? this.state.inlineStyleOverride : emptyFunction/*p*/(this.props.documentContent, requireDynamic/*n*/), DocumentCharacters/*s*/.replaceText(this.props.documentContent, global/*e*/, require/*t*/, null, requireDynamic/*n*/.getStartOffset(), requireDynamic/*n*/.getEndOffset(), this.updateDocumentAndCollapseSelection)
            },
            onAlter: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this.props.selectionState.getEndOffset(),
                    module/*i*/ = global/*e*/,
                    o = global/*e*/ + require/*t*/.length;
                DocumentCharacters/*s*/.replaceText(this.props.documentContent, requireDynamic/*n*/, getActiveElement/*d*/(this.props.documentContent, module/*i*/), null, module/*i*/, o, function() {
                    requireLazy/*r*/ !== module/*i*/ + requireDynamic/*n*/.length && (requireLazy/*r*/ += requireDynamic/*n*/.length - require/*t*/.length), this.updateDocument(requireLazy/*r*/, requireLazy/*r*/)
                }.bind(this))
            },
            onDropSelection: function(global/*e*/) {
                var require/*t*/ = this.props.selectionState;
                DocumentCharacters/*s*/.moveText(this.props.documentContent, require/*t*/.getStartOffset(), require/*t*/.getEndOffset(), global/*e*/, this.updateDocument)
            },
            onDropText: function(global/*e*/, require/*t*/) {
                this._insertTextAtOffset(global/*e*/, require/*t*/)
            },
            onDropFiles: function(global/*e*/, require/*t*/) {
                this.props.handleDroppedFiles && this.props.handleDroppedFiles(global/*e*/, require/*t*/) || getCurrentInlineStyle/*h*/(require/*t*/, function(require/*t*/) {
                    require/*t*/ && this._insertTextAtOffset(global/*e*/, require/*t*/)
                }.bind(this))
            },
            onPasteFiles: function(global/*e*/) {
                if (!this.props.handlePastedFiles || !this.props.handlePastedFiles(global/*e*/)) {
                    var require/*t*/ = this.props.selectionState.getStartOffset();
                    getCurrentInlineStyle/*h*/(global/*e*/, function(global/*e*/) {
                        global/*e*/ && this._insertTextAtOffset(require/*t*/, global/*e*/)
                    }.bind(this))
                }
            },
            _insertTextAtOffset: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.documentContent;
                DocumentCharacters/*s*/.replaceText(requireDynamic/*n*/, require/*t*/, getActiveElement/*d*/(requireDynamic/*n*/, global/*e*/), null, global/*e*/, global/*e*/, this.updateDocument)
            }
        };
    module/*i*/.exports = g
});