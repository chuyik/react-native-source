__d("getHashtagMatches",["getHashtagRegex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, getHashtagRegex/*a*/ = global/*e*/.getText(); null !== (requireDynamic/*n*/ = s.exec(getHashtagRegex/*a*/));) requireLazy/*r*/ = requireDynamic/*n*/.index + requireDynamic/*n*/[1].length, module/*i*/ = requireDynamic/*n*/[2], o = requireDynamic/*n*/[3], require/*t*/(requireLazy/*r*/, requireLazy/*r*/ + module/*i*/.length + o.length)
    }
    var getHashtagRegex/*a*/ = require/*t*/("getHashtagRegex"),
        s = getHashtagRegex/*a*/();
    module/*i*/.exports = o
});