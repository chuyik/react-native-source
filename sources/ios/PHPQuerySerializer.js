__d("PHPQuerySerializer",["invariant"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return a(global/*e*/, exports/*null*/)
    }

    function a(global/*e*/, require/*invariant/*t*/*/) {
        require/*invariant/*t*/*/ = require/*invariant/*t*/*/ || "";
        var requireDynamic/*n*/ = [];
        if (exports/*null*/ === global/*e*/ || void 0 === global/*e*/) requireDynamic/*n*/.push(s(require/*invariant/*t*/*/));
        else if ("object" == typeof global/*e*/) {
            ("nodeName" in global/*e*/ || "nodeType" in global/*e*/) && c(0, "PHPQuerySerializer serializing a DOM element, not good ...");
            for (var requireLazy/*r*/ in global/*e*/) global/*e*/.hasOwnProperty(requireLazy/*r*/) && void 0 !== global/*e*/[requireLazy/*r*/] && requireDynamic/*n*/.push(a(global/*e*/[requireLazy/*r*/], require/*invariant/*t*/*/ ? require/*invariant/*t*/*/ + "[" + requireLazy/*r*/ + "]" : requireLazy/*r*/))
        } else requireDynamic/*n*/.push(s(require/*invariant/*t*/*/) + "=" + s(global/*e*/));
        return requireDynamic/*n*/.join("&")
    }

    function s(global/*e*/) {
        return encodeURIComponent(global/*e*/).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }

    function l(global/*e*/) {
        if (!global/*e*/) return {};
        var require/*invariant/*t*/*/ = {};
        global/*e*/ = global/*e*/.replace(/%5B/gi, "[").replace(/%5D/gi, "]"), global/*e*/ = global/*e*/.split("&");
        for (var requireDynamic/*n*/ = Object.prototype.hasOwnProperty, requireLazy/*r*/ = 0, module/*i*/ = global/*e*/.length; module/*i*/ > requireLazy/*r*/; requireLazy/*r*/++) {
            var o = global/*e*/[requireLazy/*r*/].match(p);
            if (o) {
                var a = o[2].split(/\]\[|\[|\]/).slice(0, -1),
                    s = o[1],
                    l = u(o[3] || "");
                a[0] = s;
                for (var c = require/*invariant/*t*/*/, d = 0; d < a.length - 1; d++)
                    if (a[d]) {
                        if (!requireDynamic/*n*/.call(c, a[d])) {
                            var h = a[d + 1] && !a[d + 1].match(/^\d{1,3}$/) ? {} : [];
                            if (c[a[d]] = h, c[a[d]] !== h) return require/*invariant/*t*/*/
                        }
                        c = c[a[d]]
                    } else c.push(a[d + 1] && !a[d + 1].match(/^\d{1,3}$/) ? {} : []), c = c[c.length - 1];
                c instanceof Array && "" === a[a.length - 1] ? c.push(l) : c[a[a.length - 1]] = l
            } else {
                var f = global/*e*/[requireLazy/*r*/].split("=");
                require/*invariant/*t*/*/[u(f[0])] = void 0 === f[1] ? exports/*null*/ : u(f[1])
            }
        }
        return require/*invariant/*t*/*/
    }

    function u(global/*e*/) {
        return decodeURIComponent(global/*e*/.replace(/\+/g, " "))
    }
    var c = require/*invariant/*t*/*/("invariant"),
        p = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/,
        d = {
            serialize: o,
            encodeComponent: s,
            deserialize: l,
            decodeComponent: u
        };
    module/*i*/.exports = d
});