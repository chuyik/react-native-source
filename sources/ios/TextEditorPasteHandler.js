__d("TextEditorPasteHandler",["DocumentCharacters","ComposedBlockType","ComposedInlineStyle","arrayContains","fillArray","getSafeBodyFromHTML"],function (e, t, n, r, i) {
    function o() {
        return {
            text: "",
            inlines: [],
            blocks: []
        }
    }

    function a() {
        return {
            text: y,
            inlines: [ComposedInlineStyle/*p*/.NONE],
            blocks: []
        }
    }

    function s() {
        return {
            text: _,
            inlines: [ComposedInlineStyle/*p*/.NONE],
            blocks: []
        }
    }

    function l(e) {
        return {
            text: m,
            inlines: [ComposedInlineStyle/*p*/.NONE],
            blocks: [e]
        }
    }
    var DocumentCharacters/*u*/ = t("DocumentCharacters"),
        ComposedBlockType/*c*/ = t("ComposedBlockType"),
        ComposedInlineStyle/*p*/ = t("ComposedInlineStyle"),
        arrayContains/*d*/ = t("arrayContains"),
        fillArray/*h*/ = t("fillArray"),
        getSafeBodyFromHTML/*f*/ = t("getSafeBodyFromHTML"),
        m = DocumentCharacters/*u*/.BLOCK_DELIMITER,
        g = "&nbsp;",
        _ = DocumentCharacters/*u*/.SOFT_NEWLINE,
        y = " ",
        v = ComposedBlockType/*c*/.UNSTYLED,
        S = ["ComposedInlineStyle/*p*/", "h1", "h2", "h3", "li", "blockquote"],
        b = {
            strong: ComposedInlineStyle/*p*/.BOLD,
            b: ComposedInlineStyle/*p*/.BOLD,
            em: ComposedInlineStyle/*p*/.ITALIC,
            i: ComposedInlineStyle/*p*/.ITALIC,
            DocumentCharacters/*u*/: ComposedInlineStyle/*p*/.UNDERLINE
        },
        R = {
            processBlockTag: function(e, t) {
                switch (e) {
                    case "h1":
                        return ComposedBlockType/*c*/.HEADER_ONE;
                    case "h2":
                        return ComposedBlockType/*c*/.HEADER_TWO;
                    case "li":
                        return "ol" === t ? ComposedBlockType/*c*/.ORDERED_LIST_ITEM : ComposedBlockType/*c*/.UNORDERED_LIST_ITEM;
                    case "blockquote":
                        return ComposedBlockType/*c*/.BLOCKQUOTE;
                    default:
                        return ComposedBlockType/*c*/.UNSTYLED
                }
            },
            processInlineTag: function(e, t) {
                var n = b[e],
                    r = !!(t & n);
                return n && !r && (t += n), t
            },
            joinChunks: function(e, t) {
                return e.text.slice(-1) === m && t.text.slice(0, 1) === m && (e.text = e.text.slice(0, -1), e.inlines.pop(), e.blocks.pop()), e.text.slice(-1) !== m || t.text !== y && t.text !== _ ? {
                    text: e.text + t.text,
                    inlines: e.inlines.concat(t.inlines),
                    blocks: e.blocks.concat(t.blocks)
                } : e
            },
            genFragment: function(e, t, n, r, i) {
                var DocumentCharacters/*u*/ = e.nodeName.toLowerCase(),
                    ComposedBlockType/*c*/ = !1;
                if ("#text" === DocumentCharacters/*u*/) {
                    var ComposedInlineStyle/*p*/ = e.textContent;
                    return "" === ComposedInlineStyle/*p*/.trim() ? a() : {
                        text: ComposedInlineStyle/*p*/,
                        inlines: fillArray/*h*/(ComposedInlineStyle/*p*/.length, t),
                        blocks: []
                    }
                }
                if ("br" === DocumentCharacters/*u*/) return s();
                var getSafeBodyFromHTML/*f*/, m = o();
                for (t = this.processInlineTag(DocumentCharacters/*u*/, t), ("ul" === DocumentCharacters/*u*/ || "ol" === DocumentCharacters/*u*/) && (n = DocumentCharacters/*u*/), !r && arrayContains/*d*/(i, DocumentCharacters/*u*/) && (m = l(this.processBlockTag(DocumentCharacters/*u*/, n)), r = !0, ComposedBlockType/*c*/ = !0), e = e.firstChild; e;) getSafeBodyFromHTML/*f*/ = this.genFragment(e, t, n, r, i), m = this.joinChunks(m, getSafeBodyFromHTML/*f*/), e = e.nextSibling;
                return ComposedBlockType/*c*/ && (m = this.joinChunks(m, l(v))), m
            },
            containsSemanticBlockMarkup: function(e) {
                return S.some(function(t) {
                    return -1 !== e.indexOf("<" + t)
                })
            },
            processHTML: function(e) {
                e = e.trim().split(m).join("").split(_).join(y).split(g).join(y);
                var t = getSafeBodyFromHTML/*f*/(e);
                if (!t) return null;
                var n = this.containsSemanticBlockMarkup(e) ? S : ["div"],
                    r = this.genFragment(t, 0, "ul", !1, n);
                return 0 === r.text.indexOf(m) && (r = {
                    text: r.text.slice(1),
                    inlines: r.inlines.slice(1),
                    blocks: r.blocks
                }), r.text.slice(-1) === m && (r.text = r.text.slice(0, -1), r.inlines = r.inlines.slice(0, -1), r.blocks.pop()), 0 === r.blocks.length && r.blocks.push(v), r.text.split(m).length === r.blocks.length + 1 && r.blocks.unshift(v), r
            },
            processText: function(e) {
                return {
                    text: e,
                    inlines: fillArray/*h*/(e.length, ComposedInlineStyle/*p*/.NONE),
                    blocks: fillArray/*h*/(e.split(m).length, v)
                }
            }
        };
    i.exports = R
});