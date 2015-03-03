__d("DocumentModifier",["ComposedBlockType","ComposedEntityMutability","DocumentCharacters","DocumentEntity","DocumentModifierDiffs","DocumentRemovalDirection","emptyFunction","fillArray","getCharacterRemovalRange"],function (global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        for (var global/*ComposedEntityMutability/*e*/*/ = [], require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ = 0, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/ = arguments.length; requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/ > require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/; require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/++) global/*ComposedEntityMutability/*e*/*/.push(arguments[require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/]);
        return Array.prototype.concat.apply(C, global/*ComposedEntityMutability/*e*/*/)
    }

    function a(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/) {
        return null != require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ && (global/*ComposedEntityMutability/*e*/*/ = global/*ComposedEntityMutability/*e*/*/.substr(0, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)), global/*ComposedEntityMutability/*e*/*/.split(S).length
    }

    function s(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/) {
        require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.filter(_.thatReturnsArgument), require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length && (global/*ComposedEntityMutability/*e*/*/.addForwardTransaction(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/), getCharacterRemovalRange/*l*/(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, !0, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/))
    }

    function getCharacterRemovalRange/*l*/(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/) {
        if (require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length) {
            for (var module/*i*/, o, a, s = global/*ComposedEntityMutability/*e*/*/.getData(), getCharacterRemovalRange/*l*/ = 0; getCharacterRemovalRange/*l*/ < require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length; getCharacterRemovalRange/*l*/++) requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/ ? (module/*i*/ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/[getCharacterRemovalRange/*l*/], o = module/*i*/.from, a = module/*i*/.to) : (module/*i*/ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/[require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length - 1 - getCharacterRemovalRange/*l*/], o = module/*i*/.to, a = module/*i*/.from), u(s, o, a);
            global/*ComposedEntityMutability/*e*/*/.update(s.text, s.inlines, s.blocks, s.entities), requireLazy/*r*/(a.start, a.end)
        }
    }

    function u(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/) {
        var requireLazy/*r*/ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.start,
            module/*i*/ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.end,
            o = global/*ComposedEntityMutability/*e*/*/.text.slice(0, requireLazy/*r*/),
            s = global/*ComposedEntityMutability/*e*/*/.text.slice(module/*i*/);
        if (void 0 !== require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.text && void 0 !== requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.text && (global/*ComposedEntityMutability/*e*/*/.text = o + requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.text + s), void 0 !== require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.inlines && void 0 !== requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.inlines) {
            var getCharacterRemovalRange/*l*/ = global/*ComposedEntityMutability/*e*/*/.inlines.slice(0, requireLazy/*r*/),
                u = global/*ComposedEntityMutability/*e*/*/.inlines.slice(module/*i*/);
            global/*ComposedEntityMutability/*e*/*/.inlines = getCharacterRemovalRange/*l*/.concat(requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.inlines, u)
        }
        if (void 0 !== require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.blocks && void 0 !== requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.blocks) {
            var c = a(o) - 1,
                p = global/*ComposedEntityMutability/*e*/*/.blocks.slice(0, c),
                d = global/*ComposedEntityMutability/*e*/*/.blocks.slice(c + require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.blocks.length);
            global/*ComposedEntityMutability/*e*/*/.blocks = p.concat(requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.blocks, d)
        }
        if (void 0 !== require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.entities && void 0 !== requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.entities) {
            var h = global/*ComposedEntityMutability/*e*/*/.entities.slice(0, requireLazy/*r*/),
                f = global/*ComposedEntityMutability/*e*/*/.entities.slice(module/*i*/);
            global/*ComposedEntityMutability/*e*/*/.entities = h.concat(requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/.entities, f)
        }
    }

    function c(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/) {
        var module/*i*/ = v(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/),
            o = m.removeText(global/*ComposedEntityMutability/*e*/*/, module/*i*/.start, module/*i*/.end);
        s(global/*ComposedEntityMutability/*e*/*/, [o], requireLazy/*r*/)
    }
    var p = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("ComposedBlockType"),
        d = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("ComposedEntityMutability"),
        h = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("DocumentCharacters"),
        f = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("DocumentEntity"),
        m = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("DocumentModifierDiffs"),
        g = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("DocumentRemovalDirection"),
        _ = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("emptyFunction"),
        y = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("fillArray"),
        v = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/("getCharacterRemovalRange"),
        S = h.BLOCK_DELIMITER,
        b = d.MUTABLE,
        R = g.FORWARD,
        w = g.BACKWARD,
        C = [],
        E = {
            insertFragment: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                var a = require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.entities,
                    getCharacterRemovalRange/*l*/ = !0,
                    u = global/*ComposedEntityMutability/*e*/*/.getEntities(),
                    c = u[requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/ - 1],
                    p = u[requireLazy/*r*/];
                if (c && c === p) {
                    var d = f.get(c);
                    d.getMutability() === b && void 0 === a && (a = y(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.text.length, c), getCharacterRemovalRange/*l*/ = !1)
                }
                var h = null;
                getCharacterRemovalRange/*l*/ && (h = m.removeEntities(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/));
                var g = m.removeText(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/),
                    _ = global/*ComposedEntityMutability/*e*/*/.getBlockStylesAroundRange(requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/)[0],
                    v = m.insertText(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.text, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.inlines, a || y(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.text.length, null), [_].concat(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.blocks.slice(1))),
                    S = o(h, g, v);
                s(global/*ComposedEntityMutability/*e*/*/, S, module/*i*/)
            },
            applyEntity: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                var a = m.removeEntities(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/),
                    getCharacterRemovalRange/*l*/ = null;
                null !== require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ && (getCharacterRemovalRange/*l*/ = m.setEntity(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/));
                var u = o(a, getCharacterRemovalRange/*l*/);
                s(global/*ComposedEntityMutability/*e*/*/, u, module/*i*/)
            },
            removeCharacterBackward: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/) {
                require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ > 0 && c(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, w, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/)
            },
            removeCharacterForward: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/) {
                require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ < global/*ComposedEntityMutability/*e*/*/.getText().length && c(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, R, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/)
            },
            removeRange: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/) {
                var module/*i*/ = m.removeEntities(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/),
                    a = m.removeText(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/);
                s(global/*ComposedEntityMutability/*e*/*/, o(module/*i*/, a), requireLazy/*r*/)
            },
            moveText: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                var a = m.removeEntities(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/),
                    getCharacterRemovalRange/*l*/ = m.removeText(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/),
                    u = null;
                getCharacterRemovalRange/*l*/ && (u = m.insertText(global/*ComposedEntityMutability/*e*/*/, requireLazy/*r*/, getCharacterRemovalRange/*l*/.from.text, getCharacterRemovalRange/*l*/.from.inlines, y(getCharacterRemovalRange/*l*/.from.text.length, null), getCharacterRemovalRange/*l*/.from.blocks), requireLazy/*r*/ > require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/ && getCharacterRemovalRange/*l*/ && m.shiftDiff(u, -getCharacterRemovalRange/*l*/.from.text.length));
                var c = o(a, getCharacterRemovalRange/*l*/, u);
                s(global/*ComposedEntityMutability/*e*/*/, c, module/*i*/)
            },
            replaceText: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/, o, s) {
                var getCharacterRemovalRange/*l*/ = global/*ComposedEntityMutability/*e*/*/.getBlockStylesAroundRange(module/*i*/, module/*i*/)[0],
                    u = {
                        text: require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/,
                        inlines: y(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/),
                        entities: requireLazy/*r*/ ? y(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/.length, requireLazy/*r*/) : void 0,
                        blocks: y(a(require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/), getCharacterRemovalRange/*l*/)
                    };
                E.insertFragment(global/*ComposedEntityMutability/*e*/*/, u, module/*i*/, o, s)
            },
            resetBlock: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/) {
                var requireLazy/*r*/, module/*i*/ = global/*ComposedEntityMutability/*e*/*/.getText(),
                    a = module/*i*/.slice(0, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/).lastIndexOf(S);
                requireLazy/*r*/ = -1 === a ? 0 : a + 1;
                var getCharacterRemovalRange/*l*/ = module/*i*/.indexOf(S, requireLazy/*r*/); - 1 === getCharacterRemovalRange/*l*/ && (getCharacterRemovalRange/*l*/ = module/*i*/.length);
                var u = m.removeEntities(global/*ComposedEntityMutability/*e*/*/, requireLazy/*r*/, getCharacterRemovalRange/*l*/),
                    c = m.removeText(global/*ComposedEntityMutability/*e*/*/, requireLazy/*r*/, getCharacterRemovalRange/*l*/),
                    d = m.setBlockStyle(global/*ComposedEntityMutability/*e*/*/, requireLazy/*r*/, requireLazy/*r*/, p.UNSTYLED);
                s(global/*ComposedEntityMutability/*e*/*/, o(u, c, d), requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/)
            },
            applyBlockStyle: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                s(global/*ComposedEntityMutability/*e*/*/, [m.setBlockStyle(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)], module/*i*/)
            },
            applyInlineStyle: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                s(global/*ComposedEntityMutability/*e*/*/, [m.addInlineStyle(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)], module/*i*/)
            },
            removeInlineStyle: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, module/*i*/) {
                s(global/*ComposedEntityMutability/*e*/*/, [m.removeInlineStyle(global/*ComposedEntityMutability/*e*/*/, requireDynamic/*ComposedBlockType/*emptyFunction/*n*/*/*/, requireLazy/*r*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)], module/*i*/)
            },
            undo: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/) {
                getCharacterRemovalRange/*l*/(global/*ComposedEntityMutability/*e*/*/, global/*ComposedEntityMutability/*e*/*/.getUndoDiffs(), !1, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)
            },
            redo: function(global/*ComposedEntityMutability/*e*/*/, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/) {
                getCharacterRemovalRange/*l*/(global/*ComposedEntityMutability/*e*/*/, global/*ComposedEntityMutability/*e*/*/.getRedoDiffs(), !0, require/*exports/*DocumentCharacters/*DocumentEntity/*DocumentRemovalDirection/*t*/*/*/*/*/)
            }
        };
    module/*i*/.exports = E
});