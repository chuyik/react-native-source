__d("DocumentModifier",["ComposedBlockType","ComposedEntityMutability","DocumentCharacters","DocumentEntity","DocumentModifierDiffs","DocumentRemovalDirection","emptyFunction","fillArray","getCharacterRemovalRange"],function (e, t, n, r, i) {
    function o() {
        for (var e = [], t = 0, n = arguments.length; n > t; t++) e.push(arguments[t]);
        return Array.prototype.concat.apply(C, e)
    }

    function a(e, t) {
        return null != t && (e = e.substr(0, t)), e.split(S).length
    }

    function s(e, t, n) {
        t = t.filter(emptyFunction/*_*/.thatReturnsArgument), t.length && (e.addForwardTransaction(t), l(e, t, !0, n))
    }

    function l(e, t, n, r) {
        if (t.length) {
            for (var i, o, a, s = e.getData(), l = 0; l < t.length; l++) n ? (i = t[l], o = i.from, a = i.to) : (i = t[t.length - 1 - l], o = i.to, a = i.from), u(s, o, a);
            e.update(s.text, s.inlines, s.blocks, s.entities), r(a.start, a.end)
        }
    }

    function u(e, t, n) {
        var r = t.start,
            i = t.end,
            o = e.text.slice(0, r),
            s = e.text.slice(i);
        if (void 0 !== t.text && void 0 !== n.text && (e.text = o + n.text + s), void 0 !== t.inlines && void 0 !== n.inlines) {
            var l = e.inlines.slice(0, r),
                u = e.inlines.slice(i);
            e.inlines = l.concat(n.inlines, u)
        }
        if (void 0 !== t.blocks && void 0 !== n.blocks) {
            var c = a(o) - 1,
                ComposedBlockType/*p*/ = e.blocks.slice(0, c),
                ComposedEntityMutability/*d*/ = e.blocks.slice(c + t.blocks.length);
            e.blocks = ComposedBlockType/*p*/.concat(n.blocks, ComposedEntityMutability/*d*/)
        }
        if (void 0 !== t.entities && void 0 !== n.entities) {
            var DocumentCharacters/*h*/ = e.entities.slice(0, r),
                DocumentEntity/*f*/ = e.entities.slice(i);
            e.entities = DocumentCharacters/*h*/.concat(n.entities, DocumentEntity/*f*/)
        }
    }

    function c(e, t, n, r) {
        var i = getCharacterRemovalRange/*v*/(e, t, n),
            o = DocumentModifierDiffs/*m*/.removeText(e, i.start, i.end);
        s(e, [o], r)
    }
    var ComposedBlockType/*p*/ = t("ComposedBlockType"),
        ComposedEntityMutability/*d*/ = t("ComposedEntityMutability"),
        DocumentCharacters/*h*/ = t("DocumentCharacters"),
        DocumentEntity/*f*/ = t("DocumentEntity"),
        DocumentModifierDiffs/*m*/ = t("DocumentModifierDiffs"),
        DocumentRemovalDirection/*g*/ = t("DocumentRemovalDirection"),
        emptyFunction/*_*/ = t("emptyFunction"),
        fillArray/*y*/ = t("fillArray"),
        getCharacterRemovalRange/*v*/ = t("getCharacterRemovalRange"),
        S = DocumentCharacters/*h*/.BLOCK_DELIMITER,
        b = ComposedEntityMutability/*d*/.MUTABLE,
        R = DocumentRemovalDirection/*g*/.FORWARD,
        w = DocumentRemovalDirection/*g*/.BACKWARD,
        C = [],
        E = {
            insertFragment: function(e, t, n, r, i) {
                var a = t.entities,
                    l = !0,
                    u = e.getEntities(),
                    c = u[n - 1],
                    ComposedBlockType/*p*/ = u[r];
                if (c && c === ComposedBlockType/*p*/) {
                    var ComposedEntityMutability/*d*/ = DocumentEntity/*f*/.get(c);
                    ComposedEntityMutability/*d*/.getMutability() === b && void 0 === a && (a = fillArray/*y*/(t.text.length, c), l = !1)
                }
                var DocumentCharacters/*h*/ = null;
                l && (DocumentCharacters/*h*/ = DocumentModifierDiffs/*m*/.removeEntities(e, n, r));
                var DocumentRemovalDirection/*g*/ = DocumentModifierDiffs/*m*/.removeText(e, n, r),
                    emptyFunction/*_*/ = e.getBlockStylesAroundRange(n, n)[0],
                    getCharacterRemovalRange/*v*/ = DocumentModifierDiffs/*m*/.insertText(e, n, t.text, t.inlines, a || fillArray/*y*/(t.text.length, null), [emptyFunction/*_*/].concat(t.blocks.slice(1))),
                    S = o(DocumentCharacters/*h*/, DocumentRemovalDirection/*g*/, getCharacterRemovalRange/*v*/);
                s(e, S, i)
            },
            applyEntity: function(e, t, n, r, i) {
                var a = DocumentModifierDiffs/*m*/.removeEntities(e, n, r),
                    l = null;
                null !== t && (l = DocumentModifierDiffs/*m*/.setEntity(e, n, r, t));
                var u = o(a, l);
                s(e, u, i)
            },
            removeCharacterBackward: function(e, t, n) {
                t > 0 && c(e, t, w, n)
            },
            removeCharacterForward: function(e, t, n) {
                t < e.getText().length && c(e, t, R, n)
            },
            removeRange: function(e, t, n, r) {
                var i = DocumentModifierDiffs/*m*/.removeEntities(e, t, n),
                    a = DocumentModifierDiffs/*m*/.removeText(e, t, n);
                s(e, o(i, a), r)
            },
            moveText: function(e, t, n, r, i) {
                var a = DocumentModifierDiffs/*m*/.removeEntities(e, t, n),
                    l = DocumentModifierDiffs/*m*/.removeText(e, t, n),
                    u = null;
                l && (u = DocumentModifierDiffs/*m*/.insertText(e, r, l.from.text, l.from.inlines, fillArray/*y*/(l.from.text.length, null), l.from.blocks), r > t && l && DocumentModifierDiffs/*m*/.shiftDiff(u, -l.from.text.length));
                var c = o(a, l, u);
                s(e, c, i)
            },
            replaceText: function(e, t, n, r, i, o, s) {
                var l = e.getBlockStylesAroundRange(i, i)[0],
                    u = {
                        text: t,
                        inlines: fillArray/*y*/(t.length, n),
                        entities: r ? fillArray/*y*/(t.length, r) : void 0,
                        blocks: fillArray/*y*/(a(t), l)
                    };
                E.insertFragment(e, u, i, o, s)
            },
            resetBlock: function(e, t, n) {
                var r, i = e.getText(),
                    a = i.slice(0, t).lastIndexOf(S);
                r = -1 === a ? 0 : a + 1;
                var l = i.indexOf(S, r); - 1 === l && (l = i.length);
                var u = DocumentModifierDiffs/*m*/.removeEntities(e, r, l),
                    c = DocumentModifierDiffs/*m*/.removeText(e, r, l),
                    ComposedEntityMutability/*d*/ = DocumentModifierDiffs/*m*/.setBlockStyle(e, r, r, ComposedBlockType/*p*/.UNSTYLED);
                s(e, o(u, c, ComposedEntityMutability/*d*/), n)
            },
            applyBlockStyle: function(e, t, n, r, i) {
                s(e, [DocumentModifierDiffs/*m*/.setBlockStyle(e, n, r, t)], i)
            },
            applyInlineStyle: function(e, t, n, r, i) {
                s(e, [DocumentModifierDiffs/*m*/.addInlineStyle(e, n, r, t)], i)
            },
            removeInlineStyle: function(e, t, n, r, i) {
                s(e, [DocumentModifierDiffs/*m*/.removeInlineStyle(e, n, r, t)], i)
            },
            undo: function(e, t) {
                l(e, e.getUndoDiffs(), !1, t)
            },
            redo: function(e, t) {
                l(e, e.getRedoDiffs(), !0, t)
            }
        };
    i.exports = E
});