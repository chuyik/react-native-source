__d("getTextWithEntitiesFromDocument",["ComposedEntityType","DocumentCharacters","DocumentEntity","UnicodeUtils"],function (e, t, n, r, i) {
    function o(e, t, n) {
        if (e) {
            var r = DocumentEntity/*u*/.get(e);
            if (r.getType() === ComposedEntityType/*s*/.MENTION) {
                var i = r.getData().id;
                return {
                    entity: {
                        id: i
                    },
                    length: t,
                    offset: n
                }
            }
        }
    }

    function a(e) {
        for (var t = e.getText().replace(d, function() {
                return h
            }), n = e.getEntities(), r = null, i = 0, a = [], ComposedEntityType/*s*/ = 0; ComposedEntityType/*s*/ < n.length; ComposedEntityType/*s*/++)
            if (n[ComposedEntityType/*s*/] != r) {
                var DocumentCharacters/*l*/ = UnicodeUtils/*c*/.substr(t, i, ComposedEntityType/*s*/ - i),
                    DocumentEntity/*u*/ = UnicodeUtils/*c*/.strlen(DocumentCharacters/*l*/);
                a.push(o(r, DocumentEntity/*u*/, i)), r = n[ComposedEntityType/*s*/], i += DocumentEntity/*u*/
            }
        var DocumentCharacters/*l*/ = UnicodeUtils/*c*/.substr(t, i);
        return a.push(o(r, UnicodeUtils/*c*/.strlen(DocumentCharacters/*l*/), i)), a = a.filter(function(e) {
            return e
        }), {
            text: t,
            ranges: a
        }
    }
    var ComposedEntityType/*s*/ = t("ComposedEntityType"),
        DocumentCharacters/*l*/ = t("DocumentCharacters"),
        DocumentEntity/*u*/ = t("DocumentEntity"),
        UnicodeUtils/*c*/ = t("UnicodeUtils"),
        p = DocumentCharacters/*l*/.BLOCK_DELIMITER,
        d = new RegExp(p, "ig"),
        h = DocumentCharacters/*l*/.SOFT_NEWLINE;
    i.exports = a
});