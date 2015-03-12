__d("UserAgent",[],function (e, t, n, r, i) {
    function o() {
        if (!b && (b = !0, "undefined" != typeof navigator)) {
            var e = navigator.userAgent,
                t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
                n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
            if (_ = /\b(iPhone|iP[ao]d)/.exec(e), y = /\b(iP[ao]d)/.exec(e), m = /Android/i.exec(e), v = /FBAN\/\w+;/i.exec(e), S = /Mobile/i.exec(e), g = !!/Win64/.exec(e), t) {
                a = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : 0 / 0, a && document && document.documentMode && (a = document.documentMode);
                var r = /(?:Trident\/(\d+.\d+))/.exec(e);
                p = r ? parseFloat(r[1]) + 4 : a, s = t[2] ? parseFloat(t[2]) : 0 / 0, l = t[3] ? parseFloat(t[3]) : 0 / 0, u = t[4] ? parseFloat(t[4]) : 0 / 0, u ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), c = t && t[1] ? parseFloat(t[1]) : 0 / 0) : c = 0 / 0
            } else a = s = l = c = u = 0 / 0;
            if (n) {
                if (n[1]) {
                    var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                    d = i ? parseFloat(i[1].replace("_", ".")) : !0
                } else d = !1;
                h = !!n[2], f = !!n[3]
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
    i.exports = R
});