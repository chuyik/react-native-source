__d("copyProperties",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
        if (global/*e*/ = global/*e*/ || {}, __DEV__ && a) throw new Error("Too many arguments passed to copyProperties");
        for (var s, l = [require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o], u = 0; l[u];) {
            s = l[u++];
            for (var c in s) global/*e*/[c] = s[c];
            s.hasOwnProperty && s.hasOwnProperty("toString") && "undefined" != typeof s.toString && global/*e*/.toString !== s.toString && (global/*e*/.toString = s.toString)
        }
        return global/*e*/
    }
    module/*i*/.exports = o
});