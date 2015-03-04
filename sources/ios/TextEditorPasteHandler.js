__d("TextEditorPasteHandler",["DocumentCharacters","ComposedBlockType","ComposedInlineStyle","arrayContains","fillArray","getSafeBodyFromHTML"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
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

    function l(global/*e*/) {
        return {
            text: m,
            inlines: [ComposedInlineStyle/*p*/.NONE],
            blocks: [global/*e*/]
        }
    }
    var DocumentCharacters/*u*/ = require/*t*/("DocumentCharacters"),
        ComposedBlockType/*c*/ = require/*t*/("ComposedBlockType"),
        ComposedInlineStyle/*p*/ = require/*t*/("ComposedInlineStyle"),
        arrayContains/*d*/ = require/*t*/("arrayContains"),
        fillArray/*h*/ = require/*t*/("fillArray"),
        getSafeBodyFromHTML/*f*/ = require/*t*/("getSafeBodyFromHTML"),
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
            module/*i*/: ComposedInlineStyle/*p*/.ITALIC,
            DocumentCharacters/*u*/: ComposedInlineStyle/*p*/.UNDERLINE
        },
        R = {
            processBlockTag: function(global/*e*/, require/*t*/) {
                switch (global/*e*/) {
                    case "h1":
                        return ComposedBlockType/*c*/.HEADER_ONE;
                    case "h2":
                        return ComposedBlockType/*c*/.HEADER_TWO;
                    case "li":
                        return "ol" === require/*t*/ ? ComposedBlockType/*c*/.ORDERED_LIST_ITEM : ComposedBlockType/*c*/.UNORDERED_LIST_ITEM;
                    case "blockquote":
                        return ComposedBlockType/*c*/.BLOCKQUOTE;
                    default:
                        return ComposedBlockType/*c*/.UNSTYLED
                }
            },
            processInlineTag: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = b[global/*e*/],
                    requireLazy/*r*/ = !!(require/*t*/ & requireDynamic/*n*/);
                return requireDynamic/*n*/ && !requireLazy/*r*/ && (require/*t*/ += requireDynamic/*n*/), require/*t*/
            },
            joinChunks: function(global/*e*/, require/*t*/) {
                return global/*e*/.text.slice(-1) === m && require/*t*/.text.slice(0, 1) === m && (global/*e*/.text = global/*e*/.text.slice(0, -1), global/*e*/.inlines.pop(), global/*e*/.blocks.pop()), global/*e*/.text.slice(-1) !== m || require/*t*/.text !== y && require/*t*/.text !== _ ? {
                    text: global/*e*/.text + require/*t*/.text,
                    inlines: global/*e*/.inlines.concat(require/*t*/.inlines),
                    blocks: global/*e*/.blocks.concat(require/*t*/.blocks)
                } : global/*e*/
            },
            genFragment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var DocumentCharacters/*u*/ = global/*e*/.nodeName.toLowerCase(),
                    ComposedBlockType/*c*/ = !1;
                if ("#text" === DocumentCharacters/*u*/) {
                    var ComposedInlineStyle/*p*/ = global/*e*/.textContent;
                    return "" === ComposedInlineStyle/*p*/.trim() ? a() : {
                        text: ComposedInlineStyle/*p*/,
                        inlines: fillArray/*h*/(ComposedInlineStyle/*p*/.length, require/*t*/),
                        blocks: []
                    }
                }
                if ("br" === DocumentCharacters/*u*/) return s();
                var getSafeBodyFromHTML/*f*/, m = o();
                for (require/*t*/ = this.processInlineTag(DocumentCharacters/*u*/, require/*t*/), ("ul" === DocumentCharacters/*u*/ || "ol" === DocumentCharacters/*u*/) && (requireDynamic/*n*/ = DocumentCharacters/*u*/), !requireLazy/*r*/ && arrayContains/*d*/(module/*i*/, DocumentCharacters/*u*/) && (m = l(this.processBlockTag(DocumentCharacters/*u*/, requireDynamic/*n*/)), requireLazy/*r*/ = !0, ComposedBlockType/*c*/ = !0), global/*e*/ = global/*e*/.firstChild; global/*e*/;) getSafeBodyFromHTML/*f*/ = this.genFragment(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/), m = this.joinChunks(m, getSafeBodyFromHTML/*f*/), global/*e*/ = global/*e*/.nextSibling;
                return ComposedBlockType/*c*/ && (m = this.joinChunks(m, l(v))), m
            },
            containsSemanticBlockMarkup: function(global/*e*/) {
                return S.some(function(require/*t*/) {
                    return -1 !== global/*e*/.indexOf("<" + require/*t*/)
                })
            },
            processHTML: function(global/*e*/) {
                global/*e*/ = global/*e*/.trim().split(m).join("").split(_).join(y).split(g).join(y);
                var require/*t*/ = getSafeBodyFromHTML/*f*/(global/*e*/);
                if (!require/*t*/) return null;
                var requireDynamic/*n*/ = this.containsSemanticBlockMarkup(global/*e*/) ? S : ["div"],
                    requireLazy/*r*/ = this.genFragment(require/*t*/, 0, "ul", !1, requireDynamic/*n*/);
                return 0 === requireLazy/*r*/.text.indexOf(m) && (requireLazy/*r*/ = {
                    text: requireLazy/*r*/.text.slice(1),
                    inlines: requireLazy/*r*/.inlines.slice(1),
                    blocks: requireLazy/*r*/.blocks
                }), requireLazy/*r*/.text.slice(-1) === m && (requireLazy/*r*/.text = requireLazy/*r*/.text.slice(0, -1), requireLazy/*r*/.inlines = requireLazy/*r*/.inlines.slice(0, -1), requireLazy/*r*/.blocks.pop()), 0 === requireLazy/*r*/.blocks.length && requireLazy/*r*/.blocks.push(v), requireLazy/*r*/.text.split(m).length === requireLazy/*r*/.blocks.length + 1 && requireLazy/*r*/.blocks.unshift(v), requireLazy/*r*/
            },
            processText: function(global/*e*/) {
                return {
                    text: global/*e*/,
                    inlines: fillArray/*h*/(global/*e*/.length, ComposedInlineStyle/*p*/.NONE),
                    blocks: fillArray/*h*/(global/*e*/.split(m).length, v)
                }
            }
        };
    module/*i*/.exports = R
});