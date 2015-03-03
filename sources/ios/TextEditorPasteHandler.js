__d("TextEditorPasteHandler",["DocumentCharacters","ComposedBlockType","ComposedInlineStyle","arrayContains","fillArray","getSafeBodyFromHTML"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        return {
            text: "",
            exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: [],
            DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: []
        }
    }

    function a() {
        return {
            text: y,
            exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: [p.NONE],
            DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: []
        }
    }

    function s() {
        return {
            text: _,
            exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: [p.NONE],
            DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: []
        }
    }

    function l(global/*e*/) {
        return {
            text: m,
            exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: [p.NONE],
            DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: [global/*e*/]
        }
    }
    var u = require/*t*/("DocumentCharacters"),
        c = require/*t*/("ComposedBlockType"),
        p = require/*t*/("ComposedInlineStyle"),
        d = require/*t*/("arrayContains"),
        h = require/*t*/("fillArray"),
        f = require/*t*/("getSafeBodyFromHTML"),
        m = u.BLOCK_DELIMITER,
        g = "&nbsp;",
        _ = u.SOFT_NEWLINE,
        y = " ",
        v = c.UNSTYLED,
        S = ["p", "h1", "h2", "h3", "li", "blockquote"],
        b = {
            strong: p.BOLD,
            b: p.BOLD,
            em: p.ITALIC,
            module/*i*/: p.ITALIC,
            u: p.UNDERLINE
        },
        R = {
            processBlockTag: function(global/*e*/, require/*t*/) {
                switch (global/*e*/) {
                    case "h1":
                        return c.HEADER_ONE;
                    case "h2":
                        return c.HEADER_TWO;
                    case "li":
                        return "ol" === require/*t*/ ? c.ORDERED_LIST_ITEM : c.UNORDERED_LIST_ITEM;
                    case "blockquote":
                        return c.BLOCKQUOTE;
                    default:
                        return c.UNSTYLED
                }
            },
            processInlineTag: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = b[global/*e*/],
                    requireLazy/*r*/ = !!(require/*t*/ & requireDynamic/*n*/);
                return requireDynamic/*n*/ && !requireLazy/*r*/ && (require/*t*/ += requireDynamic/*n*/), require/*t*/
            },
            joinChunks: function(global/*e*/, require/*t*/) {
                return global/*e*/.text.slice(-1) === m && require/*t*/.text.slice(0, 1) === m && (global/*e*/.text = global/*e*/.text.slice(0, -1), global/*e*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/.pop(), global/*e*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.pop()), global/*e*/.text.slice(-1) !== m || require/*t*/.text !== y && require/*t*/.text !== _ ? {
                    text: global/*e*/.text + require/*t*/.text,
                    exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: global/*e*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/.concat(require/*t*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/),
                    DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: global/*e*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.concat(require/*t*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/)
                } : global/*e*/
            },
            genFragment: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var u = global/*e*/.nodeName.toLowerCase(),
                    c = !1;
                if ("#text" === u) {
                    var p = global/*e*/.textContent;
                    return "" === p.trim() ? a() : {
                        text: p,
                        exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: h(p.length, require/*t*/),
                        DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: []
                    }
                }
                if ("br" === u) return s();
                var f, m = o();
                for (require/*t*/ = this.processInlineTag(u, require/*t*/), ("ul" === u || "ol" === u) && (requireDynamic/*n*/ = u), !requireLazy/*r*/ && d(module/*i*/, u) && (m = l(this.processBlockTag(u, requireDynamic/*n*/)), requireLazy/*r*/ = !0, c = !0), global/*e*/ = global/*e*/.firstChild; global/*e*/;) f = this.genFragment(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/), m = this.joinChunks(m, f), global/*e*/ = global/*e*/.nextSibling;
                return c && (m = this.joinChunks(m, l(v))), m
            },
            containsSemanticBlockMarkup: function(global/*e*/) {
                return S.some(function(require/*t*/) {
                    return -1 !== global/*e*/.indexOf("<" + require/*t*/)
                })
            },
            processHTML: function(global/*e*/) {
                global/*e*/ = global/*e*/.trim().split(m).join("").split(_).join(y).split(g).join(y);
                var require/*t*/ = f(global/*e*/);
                if (!require/*t*/) return null;
                var requireDynamic/*n*/ = this.containsSemanticBlockMarkup(global/*e*/) ? S : ["div"],
                    requireLazy/*r*/ = this.genFragment(require/*t*/, 0, "ul", !1, requireDynamic/*n*/);
                return 0 === requireLazy/*r*/.text.indexOf(m) && (requireLazy/*r*/ = {
                    text: requireLazy/*r*/.text.slice(1),
                    exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: requireLazy/*r*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/.slice(1),
                    DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/
                }), requireLazy/*r*/.text.slice(-1) === m && (requireLazy/*r*/.text = requireLazy/*r*/.text.slice(0, -1), requireLazy/*r*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/ = requireLazy/*r*/.exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/.slice(0, -1), requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.pop()), 0 === requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.length && requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.push(v), requireLazy/*r*/.text.split(m).length === requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.length + 1 && requireLazy/*r*/.DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/.unshift(v), requireLazy/*r*/
            },
            processText: function(global/*e*/) {
                return {
                    text: global/*e*/,
                    exports/*ComposedBlockType/*arrayContains/*getSafeBodyFromHTML/*inlines*/*/*/*/: h(global/*e*/.length, p.NONE),
                    DocumentCharacters/*ComposedInlineStyle/*fillArray/*blocks*/*/*/: h(global/*e*/.split(m).length, v)
                }
            }
        };
    module/*i*/.exports = R
});