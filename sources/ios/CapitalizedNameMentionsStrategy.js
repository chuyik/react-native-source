__d("CapitalizedNameMentionsStrategy",["DocumentMentionsRegex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("DocumentMentionsRegex"),
        exports/*a*/ = 2,
        DocumentMentionsRegex/*s*/ = new RegExp("(?:" + o.NAME + "{" + exports/*a*/ + ",})$"),
        l = {
            findMentionableString: function(global/*e*/) {
                var require/*t*/ = DocumentMentionsRegex/*s*/.exec(global/*e*/);
                return null !== require/*t*/ ? {
                    matchingString: require/*t*/[0],
                    leadOffset: require/*t*/[0].length
                } : null
            }
        };
    module/*i*/.exports = l
});