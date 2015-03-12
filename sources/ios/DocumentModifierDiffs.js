__d("DocumentModifierDiffs",["fillArray","flattenArray","getDocumentEntityRemovalDiffs"],function (e, t, n, r, i) {
    function o(e, t, n) {
        var r = e.getEntities().slice(t, n),
            i = {};
        return r.forEach(function(e) {
            e && (i[e] = !0)
        }), Object.keys(i)
    }
    var fillArray/*a*/ = t("fillArray"),
        flattenArray/*s*/ = t("flattenArray"),
        getDocumentEntityRemovalDiffs/*l*/ = t("getDocumentEntityRemovalDiffs"),
        u = [],
        c = {
            removeText: function(e, t, n) {
                if (t === n) return null;
                var r = e.getBlockStylesAroundRange(t, n);
                return {
                    from: {
                        text: e.getText().slice(t, n),
                        entities: e.getEntities().slice(t, n),
                        inlines: e.getInlineStyles().slice(t, n),
                        blocks: r,
                        start: t,
                        end: n
                    },
                    to: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: r.slice(0, 1),
                        start: t,
                        end: t
                    }
                }
            },
            insertText: function(e, t, n, r, i, o) {
                if (0 === n.length) return null;
                var fillArray/*a*/ = e.getBlockStylesAroundRange(t, t);
                return {
                    from: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: fillArray/*a*/,
                        start: t,
                        end: t
                    },
                    to: {
                        text: n,
                        inlines: r,
                        entities: i,
                        blocks: fillArray/*a*/.concat(o.slice(1)),
                        start: t,
                        end: t + n.length
                    }
                }
            },
            removeEntities: function(e, t, n) {
                if (t === n) {
                    var r = e.getEntities(),
                        i = r[t - 1];
                    i && i === r[t] && t--
                }
                var fillArray/*a*/ = o(e, t, n);
                return flattenArray/*s*/(fillArray/*a*/.map(function(r) {
                    return getDocumentEntityRemovalDiffs/*l*/(e, r, t, n)
                }))
            },
            setEntity: function(e, t, n, r) {
                for (var i = e.getEntities().slice(t, n), o = !1, flattenArray/*s*/ = 0; flattenArray/*s*/ < i.length; flattenArray/*s*/++)
                    if (i[flattenArray/*s*/] !== r) {
                        o = !0;
                        break
                    }
                return o ? {
                    from: {
                        entities: i,
                        start: t,
                        end: n
                    },
                    to: {
                        entities: fillArray/*a*/(n - t, r),
                        start: t,
                        end: n
                    }
                } : null
            },
            setBlockStyle: function(e, t, n, r) {
                var i = e.getBlockStylesAroundRange(t, n);
                return {
                    from: {
                        blocks: i,
                        start: t,
                        end: n
                    },
                    to: {
                        blocks: fillArray/*a*/(i.length, r),
                        start: t,
                        end: n
                    }
                }
            },
            removeInlineStyle: function(e, t, n, r) {
                return this._changeInlineStyle(e, t, n, r, !1)
            },
            addInlineStyle: function(e, t, n, r) {
                return this._changeInlineStyle(e, t, n, r, !0)
            },
            _changeInlineStyle: function(e, t, n, r, i) {
                var o = !1,
                    fillArray/*a*/ = e.getInlineStyles().slice(t, n),
                    flattenArray/*s*/ = fillArray/*a*/.map(function(e) {
                        var t = i ? e | r : e & ~r;
                        return o || t === e || (o = !0), t
                    });
                return o ? {
                    from: {
                        inlines: fillArray/*a*/,
                        start: t,
                        end: n
                    },
                    to: {
                        inlines: flattenArray/*s*/,
                        start: t,
                        end: n
                    }
                } : void 0
            },
            shiftDiff: function(e, t) {
                e.from.start += t, e.from.end += t, e.to.start += t, e.to.end += t
            }
        };
    i.exports = c
});