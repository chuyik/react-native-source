__d("getTextWithEntitiesFromDocument",["ComposedEntityType","DocumentCharacters","DocumentEntity","UnicodeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (global/*e*/) {
            var requireLazy/*r*/ = DocumentEntity/*u*/.get(global/*e*/);
            if (requireLazy/*r*/.getType() === ComposedEntityType/*s*/.MENTION) {
                var module/*i*/ = requireLazy/*r*/.getData().id;
                return {
                    entity: {
                        id: module/*i*/
                    },
                    length: require/*t*/,
                    offset: requireDynamic/*n*/
                }
            }
        }
    }

    function a(global/*e*/) {
        for (var require/*t*/ = global/*e*/.getText().replace(d, function() {
                return h
            }), requireDynamic/*n*/ = global/*e*/.getEntities(), requireLazy/*r*/ = null, module/*i*/ = 0, a = [], ComposedEntityType/*s*/ = 0; ComposedEntityType/*s*/ < requireDynamic/*n*/.length; ComposedEntityType/*s*/++)
            if (requireDynamic/*n*/[ComposedEntityType/*s*/] != requireLazy/*r*/) {
                var DocumentCharacters/*l*/ = UnicodeUtils/*c*/.substr(require/*t*/, module/*i*/, ComposedEntityType/*s*/ - module/*i*/),
                    DocumentEntity/*u*/ = UnicodeUtils/*c*/.strlen(DocumentCharacters/*l*/);
                a.push(o(requireLazy/*r*/, DocumentEntity/*u*/, module/*i*/)), requireLazy/*r*/ = requireDynamic/*n*/[ComposedEntityType/*s*/], module/*i*/ += DocumentEntity/*u*/
            }
        var DocumentCharacters/*l*/ = UnicodeUtils/*c*/.substr(require/*t*/, module/*i*/);
        return a.push(o(requireLazy/*r*/, UnicodeUtils/*c*/.strlen(DocumentCharacters/*l*/), module/*i*/)), a = a.filter(function(global/*e*/) {
            return global/*e*/
        }), {
            text: require/*t*/,
            ranges: a
        }
    }
    var ComposedEntityType/*s*/ = require/*t*/("ComposedEntityType"),
        DocumentCharacters/*l*/ = require/*t*/("DocumentCharacters"),
        DocumentEntity/*u*/ = require/*t*/("DocumentEntity"),
        UnicodeUtils/*c*/ = require/*t*/("UnicodeUtils"),
        p = DocumentCharacters/*l*/.BLOCK_DELIMITER,
        d = new RegExp(p, "ig"),
        h = DocumentCharacters/*l*/.SOFT_NEWLINE;
    module/*i*/.exports = a
});