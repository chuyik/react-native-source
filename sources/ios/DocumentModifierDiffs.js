__d("DocumentModifierDiffs",["fillArray","flattenArray","getDocumentEntityRemovalDiffs"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = global/*e*/.getEntities().slice(require/*t*/, requireDynamic/*n*/),
            module/*i*/ = {};
        return requireLazy/*r*/.forEach(function(global/*e*/) {
            global/*e*/ && (module/*i*/[global/*e*/] = !0)
        }), Object.keys(module/*i*/)
    }
    var fillArray/*a*/ = require/*t*/("fillArray"),
        flattenArray/*s*/ = require/*t*/("flattenArray"),
        getDocumentEntityRemovalDiffs/*l*/ = require/*t*/("getDocumentEntityRemovalDiffs"),
        u = [],
        c = {
            removeText: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                if (require/*t*/ === requireDynamic/*n*/) return null;
                var requireLazy/*r*/ = global/*e*/.getBlockStylesAroundRange(require/*t*/, requireDynamic/*n*/);
                return {
                    from: {
                        text: global/*e*/.getText().slice(require/*t*/, requireDynamic/*n*/),
                        entities: global/*e*/.getEntities().slice(require/*t*/, requireDynamic/*n*/),
                        inlines: global/*e*/.getInlineStyles().slice(require/*t*/, requireDynamic/*n*/),
                        blocks: requireLazy/*r*/,
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    },
                    to: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: requireLazy/*r*/.slice(0, 1),
                        start: require/*t*/,
                        end: require/*t*/
                    }
                }
            },
            insertText: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                if (0 === requireDynamic/*n*/.length) return null;
                var fillArray/*a*/ = global/*e*/.getBlockStylesAroundRange(require/*t*/, require/*t*/);
                return {
                    from: {
                        text: "",
                        inlines: u,
                        entities: u,
                        blocks: fillArray/*a*/,
                        start: require/*t*/,
                        end: require/*t*/
                    },
                    to: {
                        text: requireDynamic/*n*/,
                        inlines: requireLazy/*r*/,
                        entities: module/*i*/,
                        blocks: fillArray/*a*/.concat(o.slice(1)),
                        start: require/*t*/,
                        end: require/*t*/ + requireDynamic/*n*/.length
                    }
                }
            },
            removeEntities: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                if (require/*t*/ === requireDynamic/*n*/) {
                    var requireLazy/*r*/ = global/*e*/.getEntities(),
                        module/*i*/ = requireLazy/*r*/[require/*t*/ - 1];
                    module/*i*/ && module/*i*/ === requireLazy/*r*/[require/*t*/] && require/*t*/--
                }
                var fillArray/*a*/ = o(global/*e*/, require/*t*/, requireDynamic/*n*/);
                return flattenArray/*s*/(fillArray/*a*/.map(function(requireLazy/*r*/) {
                    return getDocumentEntityRemovalDiffs/*l*/(global/*e*/, requireLazy/*r*/, require/*t*/, requireDynamic/*n*/)
                }))
            },
            setEntity: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                for (var module/*i*/ = global/*e*/.getEntities().slice(require/*t*/, requireDynamic/*n*/), o = !1, flattenArray/*s*/ = 0; flattenArray/*s*/ < module/*i*/.length; flattenArray/*s*/++)
                    if (module/*i*/[flattenArray/*s*/] !== requireLazy/*r*/) {
                        o = !0;
                        break
                    }
                return o ? {
                    from: {
                        entities: module/*i*/,
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    },
                    to: {
                        entities: fillArray/*a*/(requireDynamic/*n*/ - require/*t*/, requireLazy/*r*/),
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    }
                } : null
            },
            setBlockStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = global/*e*/.getBlockStylesAroundRange(require/*t*/, requireDynamic/*n*/);
                return {
                    from: {
                        blocks: module/*i*/,
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    },
                    to: {
                        blocks: fillArray/*a*/(module/*i*/.length, requireLazy/*r*/),
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    }
                }
            },
            removeInlineStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                return this._changeInlineStyle(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, !1)
            },
            addInlineStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                return this._changeInlineStyle(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, !0)
            },
            _changeInlineStyle: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var o = !1,
                    fillArray/*a*/ = global/*e*/.getInlineStyles().slice(require/*t*/, requireDynamic/*n*/),
                    flattenArray/*s*/ = fillArray/*a*/.map(function(global/*e*/) {
                        var require/*t*/ = module/*i*/ ? global/*e*/ | requireLazy/*r*/ : global/*e*/ & ~requireLazy/*r*/;
                        return o || require/*t*/ === global/*e*/ || (o = !0), require/*t*/
                    });
                return o ? {
                    from: {
                        inlines: fillArray/*a*/,
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    },
                    to: {
                        inlines: flattenArray/*s*/,
                        start: require/*t*/,
                        end: requireDynamic/*n*/
                    }
                } : void 0
            },
            shiftDiff: function(global/*e*/, require/*t*/) {
                global/*e*/.from.start += require/*t*/, global/*e*/.from.end += require/*t*/, global/*e*/.to.start += require/*t*/, global/*e*/.to.end += require/*t*/
            }
        };
    module/*i*/.exports = c
});