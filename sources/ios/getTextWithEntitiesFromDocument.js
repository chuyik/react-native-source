__d("getTextWithEntitiesFromDocument",["ComposedEntityType","DocumentCharacters","DocumentEntity","UnicodeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (global/*e*/) {
            var requireLazy/*r*/ = u.get(global/*e*/);
            if (requireLazy/*r*/.getType() === s.MENTION) {
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
            }), requireDynamic/*n*/ = global/*e*/.getEntities(), requireLazy/*r*/ = null, module/*i*/ = 0, a = [], s = 0; s < requireDynamic/*n*/.length; s++)
            if (requireDynamic/*n*/[s] != requireLazy/*r*/) {
                var l = c.substr(require/*t*/, module/*i*/, s - module/*i*/),
                    u = c.strlen(l);
                a.push(o(requireLazy/*r*/, u, module/*i*/)), requireLazy/*r*/ = requireDynamic/*n*/[s], module/*i*/ += u
            }
        var l = c.substr(require/*t*/, module/*i*/);
        return a.push(o(requireLazy/*r*/, c.strlen(l), module/*i*/)), a = a.filter(function(global/*e*/) {
            return global/*e*/
        }), {
            text: require/*t*/,
            ranges: a
        }
    }
    var s = require/*t*/("ComposedEntityType"),
        l = require/*t*/("DocumentCharacters"),
        u = require/*t*/("DocumentEntity"),
        c = require/*t*/("UnicodeUtils"),
        p = l.BLOCK_DELIMITER,
        d = new RegExp(p, "ig"),
        h = l.SOFT_NEWLINE;
    module/*i*/.exports = a
});