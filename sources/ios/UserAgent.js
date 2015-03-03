__d("UserAgent",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        if (!b && (b = !0, "undefined" != typeof navigator)) {
            var global/*e*/ = navigator.userAgent,
                require/*exports/*t*/*/ = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(global/*e*/),
                requireDynamic/*n*/ = /(Mac OS X)|(Windows)|(Linux)/.exec(global/*e*/);
            if (_ = /\b(iPhone|iP[ao]d)/.exec(global/*e*/), y = /\b(iP[ao]d)/.exec(global/*e*/), m = /Android/module/*i*/.exec(global/*e*/), v = /FBAN\/\w+;/module/*i*/.exec(global/*e*/), S = /Mobile/module/*i*/.exec(global/*e*/), g = !!/Win64/.exec(global/*e*/), require/*exports/*t*/*/) {
                a = require/*exports/*t*/*/[1] ? parseFloat(require/*exports/*t*/*/[1]) : require/*exports/*t*/*/[5] ? parseFloat(require/*exports/*t*/*/[5]) : 0 / 0, a && document && document.documentMode && (a = document.documentMode);
                var requireLazy/*r*/ = /(?:Trident\/(\d+.\d+))/.exec(global/*e*/);
                p = requireLazy/*r*/ ? parseFloat(requireLazy/*r*/[1]) + 4 : a, s = require/*exports/*t*/*/[2] ? parseFloat(require/*exports/*t*/*/[2]) : 0 / 0, l = require/*exports/*t*/*/[3] ? parseFloat(require/*exports/*t*/*/[3]) : 0 / 0, u = require/*exports/*t*/*/[4] ? parseFloat(require/*exports/*t*/*/[4]) : 0 / 0, u ? (require/*exports/*t*/*/ = /(?:Chrome\/(\d+\.\d+))/.exec(global/*e*/), c = require/*exports/*t*/*/ && require/*exports/*t*/*/[1] ? parseFloat(require/*exports/*t*/*/[1]) : 0 / 0) : c = 0 / 0
            } else a = s = l = c = u = 0 / 0;
            if (requireDynamic/*n*/) {
                if (requireDynamic/*n*/[1]) {
                    var module/*i*/ = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(global/*e*/);
                    d = module/*i*/ ? parseFloat(module/*i*/[1].replace("_", ".")) : !0
                } else d = !1;
                h = !!requireDynamic/*n*/[2], f = !!requireDynamic/*n*/[3]
            } else d = h = f = !1
        }
    }
    var a, s, l, u, c, p, d, h, f, m, g, _, y, v, S, b = !1,
        R = {
            ie: function() {
                return o() || a
            },
            ieCompatibilityMode: function() {
                return o() || p > a
            },
            ie64: function() {
                return R.ie() && g
            },
            firefox: function() {
                return o() || s
            },
            opera: function() {
                return o() || l
            },
            webkit: function() {
                return o() || u
            },
            safari: function() {
                return R.webkit()
            },
            chrome: function() {
                return o() || c
            },
            windows: function() {
                return o() || h
            },
            osx: function() {
                return o() || d
            },
            linux: function() {
                return o() || f
            },
            iphone: function() {
                return o() || _
            },
            mobile: function() {
                return o() || _ || y || m || S
            },
            nativeApp: function() {
                return o() || v
            },
            android: function() {
                return o() || m
            },
            ipad: function() {
                return o() || y
            }
        };
    module/*i*/.exports = R
});