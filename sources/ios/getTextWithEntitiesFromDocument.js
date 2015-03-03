__d("getTextWithEntitiesFromDocument",["ComposedEntityType","DocumentCharacters","DocumentEntity","UnicodeUtils"],UnicodeUtils/*function*/ (global/*e*/, require/*exports/*t*/*/, requireDynamic/*ComposedEntityType/*n*/*/, requireLazy/*r*/, module/*i*/) {
    UnicodeUtils/*function*/ o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ComposedEntityType/*n*/*/) {
        if (global/*e*/) {
            var requireLazy/*r*/ = u.get(global/*e*/);
            if (requireLazy/*r*/.getType() === s.MENTION) {
                var module/*i*/ = requireLazy/*r*/.getData().id;
                return {
                    entity: {
                        id: module/*i*/
                    },
                    DocumentCharacters/*length*/: require/*exports/*t*/*/,
                    DocumentEntity/*offset*/: requireDynamic/*ComposedEntityType/*n*/*/
                }
            }
        }
    }

    UnicodeUtils/*function*/ a(global/*e*/) {
        for (var require/*exports/*t*/*/ = global/*e*/.getText().replace(d, UnicodeUtils/*function*/() {
                return h
            }), requireDynamic/*ComposedEntityType/*n*/*/ = global/*e*/.getEntities(), requireLazy/*r*/ = null, module/*i*/ = 0, a = [], s = 0; s < requireDynamic/*ComposedEntityType/*n*/*/.DocumentCharacters/*length*/; s++)
            if (requireDynamic/*ComposedEntityType/*n*/*/[s] != requireLazy/*r*/) {
                var l = c.substr(require/*exports/*t*/*/, module/*i*/, s - module/*i*/),
                    u = c.strlen(l);
                a.push(o(requireLazy/*r*/, u, module/*i*/)), requireLazy/*r*/ = requireDynamic/*ComposedEntityType/*n*/*/[s], module/*i*/ += u
            }
        var l = c.substr(require/*exports/*t*/*/, module/*i*/);
        return a.push(o(requireLazy/*r*/, c.strlen(l), module/*i*/)), a = a.filter(UnicodeUtils/*function*/(global/*e*/) {
            return global/*e*/
        }), {
            text: require/*exports/*t*/*/,
            ranges: a
        }
    }
    var s = require/*exports/*t*/*/("ComposedEntityType"),
        l = require/*exports/*t*/*/("DocumentCharacters"),
        u = require/*exports/*t*/*/("DocumentEntity"),
        c = require/*exports/*t*/*/("UnicodeUtils"),
        p = l.BLOCK_DELIMITER,
        d = new RegExp(p, "ig"),
        h = l.SOFT_NEWLINE;
    module/*i*/.exports = a
});