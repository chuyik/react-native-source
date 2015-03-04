__d("DocumentModifier",["ComposedBlockType","ComposedEntityMutability","DocumentCharacters","DocumentEntity","DocumentModifierDiffs","DocumentRemovalDirection","emptyFunction","fillArray","getCharacterRemovalRange"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        for (var global/*e*/ = [], require/*t*/ = 0, requireDynamic/*n*/ = arguments.length; requireDynamic/*n*/ > require/*t*/; require/*t*/++) global/*e*/.push(arguments[require/*t*/]);
        return Array.prototype.concat.apply(C, global/*e*/)
    }

    function a(global/*e*/, require/*t*/) {
        return null != require/*t*/ && (global/*e*/ = global/*e*/.substr(0, require/*t*/)), global/*e*/.split(S).length
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        require/*t*/ = require/*t*/.filter(emptyFunction/*_*/.thatReturnsArgument), require/*t*/.length && (global/*e*/.addForwardTransaction(require/*t*/), l(global/*e*/, require/*t*/, !0, requireDynamic/*n*/))
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        if (require/*t*/.length) {
            for (var module/*i*/, o, a, s = global/*e*/.getData(), l = 0; l < require/*t*/.length; l++) requireDynamic/*n*/ ? (module/*i*/ = require/*t*/[l], o = module/*i*/.from, a = module/*i*/.to) : (module/*i*/ = require/*t*/[require/*t*/.length - 1 - l], o = module/*i*/.to, a = module/*i*/.from), u(s, o, a);
            global/*e*/.update(s.text, s.inlines, s.blocks, s.entities), requireLazy/*r*/(a.start, a.end)
        }
    }

    function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = require/*t*/.start,
            module/*i*/ = require/*t*/.end,
            o = global/*e*/.text.slice(0, requireLazy/*r*/),
            s = global/*e*/.text.slice(module/*i*/);
        if (void 0 !== require/*t*/.text && void 0 !== requireDynamic/*n*/.text && (global/*e*/.text = o + requireDynamic/*n*/.text + s), void 0 !== require/*t*/.inlines && void 0 !== requireDynamic/*n*/.inlines) {
            var l = global/*e*/.inlines.slice(0, requireLazy/*r*/),
                u = global/*e*/.inlines.slice(module/*i*/);
            global/*e*/.inlines = l.concat(requireDynamic/*n*/.inlines, u)
        }
        if (void 0 !== require/*t*/.blocks && void 0 !== requireDynamic/*n*/.blocks) {
            var c = a(o) - 1,
                ComposedBlockType/*p*/ = global/*e*/.blocks.slice(0, c),
                ComposedEntityMutability/*d*/ = global/*e*/.blocks.slice(c + require/*t*/.blocks.length);
            global/*e*/.blocks = ComposedBlockType/*p*/.concat(requireDynamic/*n*/.blocks, ComposedEntityMutability/*d*/)
        }
        if (void 0 !== require/*t*/.entities && void 0 !== requireDynamic/*n*/.entities) {
            var DocumentCharacters/*h*/ = global/*e*/.entities.slice(0, requireLazy/*r*/),
                DocumentEntity/*f*/ = global/*e*/.entities.slice(module/*i*/);
            global/*e*/.entities = DocumentCharacters/*h*/.concat(requireDynamic/*n*/.entities, DocumentEntity/*f*/)
        }
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = getCharacterRemovalRange/*v*/(global/*e*/, require/*t*/, requireDynamic/*n*/),
            o = DocumentModifierDiffs/*m*/.removeText(global/*e*/, module/*i*/.start, module/*i*/.end);
        s(global/*e*/, [o], requireLazy/*r*/)
    }
    var ComposedBlockType/*p*/ = require/*t*/("ComposedBlockType"),
        ComposedEntityMutability/*d*/ = require/*t*/("ComposedEntityMutability"),
        DocumentCharacters/*h*/ = require/*t*/("DocumentCharacters"),
        DocumentEntity/*f*/ = require/*t*/("DocumentEntity"),
        DocumentModifierDiffs/*m*/ = require/*t*/("DocumentModifierDiffs"),
        DocumentRemovalDirection/*g*/ = require/*t*/("DocumentRemovalDirection"),
        emptyFunction/*_*/ = require/*t*/("emptyFunction"),
        fillArray/*y*/ = require/*t*/("fillArray"),
        getCharacterRemovalRange/*v*/ = require/*t*/("getCharacterRemovalRange"),
        S = DocumentCharacters/*h*/.BLOCK_DELIMITER,
        b = ComposedEntityMutability/*d*/.MUTABLE,
        R = DocumentRemovalDirection/*g*/.FORWARD,
        w = DocumentRemovalDirection/*g*/.BACKWARD,
        C = [],
        E = {
            insertFragment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var a = require/*t*/.entities,
                    l = !0,
                    u = global/*e*/.getEntities(),
                    c = u[requireDynamic/*n*/ - 1],
                    ComposedBlockType/*p*/ = u[requireLazy/*r*/];
                if (c && c === ComposedBlockType/*p*/) {
                    var ComposedEntityMutability/*d*/ = DocumentEntity/*f*/.get(c);
                    ComposedEntityMutability/*d*/.getMutability() === b && void 0 === a && (a = fillArray/*y*/(require/*t*/.text.length, c), l = !1)
                }
                var DocumentCharacters/*h*/ = null;
                l && (DocumentCharacters/*h*/ = DocumentModifierDiffs/*m*/.removeEntities(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/));
                var DocumentRemovalDirection/*g*/ = DocumentModifierDiffs/*m*/.removeText(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/),
                    emptyFunction/*_*/ = global/*e*/.getBlockStylesAroundRange(requireDynamic/*n*/, requireDynamic/*n*/)[0],
                    getCharacterRemovalRange/*v*/ = DocumentModifierDiffs/*m*/.insertText(global/*e*/, requireDynamic/*n*/, require/*t*/.text, require/*t*/.inlines, a || fillArray/*y*/(require/*t*/.text.length, null), [emptyFunction/*_*/].concat(require/*t*/.blocks.slice(1))),
                    S = o(DocumentCharacters/*h*/, DocumentRemovalDirection/*g*/, getCharacterRemovalRange/*v*/);
                s(global/*e*/, S, module/*i*/)
            },
            applyEntity: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var a = DocumentModifierDiffs/*m*/.removeEntities(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/),
                    l = null;
                null !== require/*t*/ && (l = DocumentModifierDiffs/*m*/.setEntity(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, require/*t*/));
                var u = o(a, l);
                s(global/*e*/, u, module/*i*/)
            },
            removeCharacterBackward: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                require/*t*/ > 0 && c(global/*e*/, require/*t*/, w, requireDynamic/*n*/)
            },
            removeCharacterForward: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                require/*t*/ < global/*e*/.getText().length && c(global/*e*/, require/*t*/, R, requireDynamic/*n*/)
            },
            removeRange: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = DocumentModifierDiffs/*m*/.removeEntities(global/*e*/, require/*t*/, requireDynamic/*n*/),
                    a = DocumentModifierDiffs/*m*/.removeText(global/*e*/, require/*t*/, requireDynamic/*n*/);
                s(global/*e*/, o(module/*i*/, a), requireLazy/*r*/)
            },
            moveText: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var a = DocumentModifierDiffs/*m*/.removeEntities(global/*e*/, require/*t*/, requireDynamic/*n*/),
                    l = DocumentModifierDiffs/*m*/.removeText(global/*e*/, require/*t*/, requireDynamic/*n*/),
                    u = null;
                l && (u = DocumentModifierDiffs/*m*/.insertText(global/*e*/, requireLazy/*r*/, l.from.text, l.from.inlines, fillArray/*y*/(l.from.text.length, null), l.from.blocks), requireLazy/*r*/ > require/*t*/ && l && DocumentModifierDiffs/*m*/.shiftDiff(u, -l.from.text.length));
                var c = o(a, l, u);
                s(global/*e*/, c, module/*i*/)
            },
            replaceText: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, s) {
                var l = global/*e*/.getBlockStylesAroundRange(module/*i*/, module/*i*/)[0],
                    u = {
                        text: require/*t*/,
                        inlines: fillArray/*y*/(require/*t*/.length, requireDynamic/*n*/),
                        entities: requireLazy/*r*/ ? fillArray/*y*/(require/*t*/.length, requireLazy/*r*/) : void 0,
                        blocks: fillArray/*y*/(a(require/*t*/), l)
                    };
                E.insertFragment(global/*e*/, u, module/*i*/, o, s)
            },
            resetBlock: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/, module/*i*/ = global/*e*/.getText(),
                    a = module/*i*/.slice(0, require/*t*/).lastIndexOf(S);
                requireLazy/*r*/ = -1 === a ? 0 : a + 1;
                var l = module/*i*/.indexOf(S, requireLazy/*r*/); - 1 === l && (l = module/*i*/.length);
                var u = DocumentModifierDiffs/*m*/.removeEntities(global/*e*/, requireLazy/*r*/, l),
                    c = DocumentModifierDiffs/*m*/.removeText(global/*e*/, requireLazy/*r*/, l),
                    ComposedEntityMutability/*d*/ = DocumentModifierDiffs/*m*/.setBlockStyle(global/*e*/, requireLazy/*r*/, requireLazy/*r*/, ComposedBlockType/*p*/.UNSTYLED);
                s(global/*e*/, o(u, c, ComposedEntityMutability/*d*/), requireDynamic/*n*/)
            },
            applyBlockStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                s(global/*e*/, [DocumentModifierDiffs/*m*/.setBlockStyle(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, require/*t*/)], module/*i*/)
            },
            applyInlineStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                s(global/*e*/, [DocumentModifierDiffs/*m*/.addInlineStyle(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, require/*t*/)], module/*i*/)
            },
            removeInlineStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                s(global/*e*/, [DocumentModifierDiffs/*m*/.removeInlineStyle(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, require/*t*/)], module/*i*/)
            },
            undo: function(global/*e*/, require/*t*/) {
                l(global/*e*/, global/*e*/.getUndoDiffs(), !1, require/*t*/)
            },
            redo: function(global/*e*/, require/*t*/) {
                l(global/*e*/, global/*e*/.getRedoDiffs(), !0, require/*t*/)
            }
        };
    module/*i*/.exports = E
});