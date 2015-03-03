__d("DocumentModifierDiffs",["fillArray","flattenArray","getDocumentEntityRemovalDiffs"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/, module/*getDocumentEntityRemovalDiffs/*i*/*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/) {
        var requireLazy/*r*/ = global/*e*/.getEntities().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/),
            module/*getDocumentEntityRemovalDiffs/*i*/*/ = {};
        return requireLazy/*r*/.forEach(function(global/*e*/) {
            global/*e*/ && (module/*getDocumentEntityRemovalDiffs/*i*/*/[global/*e*/] = !0)
        }), Object.keys(module/*getDocumentEntityRemovalDiffs/*i*/*/)
    }
    var a = require/*exports/*t*/*/("fillArray"),
        s = require/*exports/*t*/*/("flattenArray"),
        l = require/*exports/*t*/*/("getDocumentEntityRemovalDiffs"),
        u = [],
        c = {
            removeText: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/) {
                if (require/*exports/*t*/*/ === requireDynamic/*fillArray/*flattenArray/*n*/*/*/) return null;
                var requireLazy/*r*/ = global/*e*/.getBlockStylesAroundRange(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/);
                return {
                    from: {
                        text: global/*e*/.getText().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/),
                        entities: global/*e*/.getEntities().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/),
                        inlines: global/*e*/.getInlineStyles().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/),
                        blocks: requireLazy/*r*/,
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    },
                    to: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: requireLazy/*r*/.slice(0, 1),
                        start: require/*exports/*t*/*/,
                        end: require/*exports/*t*/*/
                    }
                }
            },
            insertText: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/, module/*getDocumentEntityRemovalDiffs/*i*/*/, o) {
                if (0 === requireDynamic/*fillArray/*flattenArray/*n*/*/*/.length) return null;
                var a = global/*e*/.getBlockStylesAroundRange(require/*exports/*t*/*/, require/*exports/*t*/*/);
                return {
                    from: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: a,
                        start: require/*exports/*t*/*/,
                        end: require/*exports/*t*/*/
                    },
                    to: {
                        text: requireDynamic/*fillArray/*flattenArray/*n*/*/*/,
                        inlines: requireLazy/*r*/,
                        entities: module/*getDocumentEntityRemovalDiffs/*i*/*/,
                        blocks: a.concat(o.slice(1)),
                        start: require/*exports/*t*/*/,
                        end: require/*exports/*t*/*/ + requireDynamic/*fillArray/*flattenArray/*n*/*/*/.length
                    }
                }
            },
            removeEntities: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/) {
                if (require/*exports/*t*/*/ === requireDynamic/*fillArray/*flattenArray/*n*/*/*/) {
                    var requireLazy/*r*/ = global/*e*/.getEntities(),
                        module/*getDocumentEntityRemovalDiffs/*i*/*/ = requireLazy/*r*/[require/*exports/*t*/*/ - 1];
                    module/*getDocumentEntityRemovalDiffs/*i*/*/ && module/*getDocumentEntityRemovalDiffs/*i*/*/ === requireLazy/*r*/[require/*exports/*t*/*/] && require/*exports/*t*/*/--
                }
                var a = o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/);
                return s(a.map(function(requireLazy/*r*/) {
                    return l(global/*e*/, requireLazy/*r*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/)
                }))
            },
            setEntity: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/) {
                for (var module/*getDocumentEntityRemovalDiffs/*i*/*/ = global/*e*/.getEntities().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/), o = !1, s = 0; s < module/*getDocumentEntityRemovalDiffs/*i*/*/.length; s++)
                    if (module/*getDocumentEntityRemovalDiffs/*i*/*/[s] !== requireLazy/*r*/) {
                        o = !0;
                        break
                    }
                return o ? {
                    from: {
                        entities: module/*getDocumentEntityRemovalDiffs/*i*/*/,
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    },
                    to: {
                        entities: a(requireDynamic/*fillArray/*flattenArray/*n*/*/*/ - require/*exports/*t*/*/, requireLazy/*r*/),
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    }
                } : null
            },
            setBlockStyle: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/) {
                var module/*getDocumentEntityRemovalDiffs/*i*/*/ = global/*e*/.getBlockStylesAroundRange(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/);
                return {
                    from: {
                        blocks: module/*getDocumentEntityRemovalDiffs/*i*/*/,
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    },
                    to: {
                        blocks: a(module/*getDocumentEntityRemovalDiffs/*i*/*/.length, requireLazy/*r*/),
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    }
                }
            },
            removeInlineStyle: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/) {
                return this._changeInlineStyle(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/, !1)
            },
            addInlineStyle: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/) {
                return this._changeInlineStyle(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/, !0)
            },
            _changeInlineStyle: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/, requireLazy/*r*/, module/*getDocumentEntityRemovalDiffs/*i*/*/) {
                var o = !1,
                    a = global/*e*/.getInlineStyles().slice(require/*exports/*t*/*/, requireDynamic/*fillArray/*flattenArray/*n*/*/*/),
                    s = a.map(function(global/*e*/) {
                        var require/*exports/*t*/*/ = module/*getDocumentEntityRemovalDiffs/*i*/*/ ? global/*e*/ | requireLazy/*r*/ : global/*e*/ & ~requireLazy/*r*/;
                        return o || require/*exports/*t*/*/ === global/*e*/ || (o = !0), require/*exports/*t*/*/
                    });
                return o ? {
                    from: {
                        inlines: a,
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    },
                    to: {
                        inlines: s,
                        start: require/*exports/*t*/*/,
                        end: requireDynamic/*fillArray/*flattenArray/*n*/*/*/
                    }
                } : void 0
            },
            shiftDiff: function(global/*e*/, require/*exports/*t*/*/) {
                global/*e*/.from.start += require/*exports/*t*/*/, global/*e*/.from.end += require/*exports/*t*/*/, global/*e*/.to.start += require/*exports/*t*/*/, global/*e*/.to.end += require/*exports/*t*/*/
            }
        };
    module/*getDocumentEntityRemovalDiffs/*i*/*/.exports = c
});