__d("TokenizeUtil",["repeatString"],function (e, t, n, r, i) {
    function o() {
        return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]"
    }

    function a(e) {
        return e ? e.replace(f, " ") : ""
    }

    function s(e) {
        e = e.toLowerCase();
        for (var t = "", n = "", r = e.length; r--;) n = e.charAt(r), t = (m[n] || n) + t;
        return t.replace(d, " ")
    }

    function l(e) {
        for (var t = [], n = h.exec(e); n;) n = n[0], t.push(n), n = h.exec(e);
        return t
    }

    function u(e, t) {
        if (!S.hasOwnProperty(e)) {
            var n = s(e),
                r = a(n);
            S[e] = {
                value: e,
                flatValue: n,
                tokens: l(r),
                isPrefixQuery: r && " " != r[r.length - 1]
            }
        }
        return t && "undefined" == typeof S[e].sortedTokens && (S[e].sortedTokens = S[e].tokens.slice(), S[e].sortedTokens.sort(function(e, t) {
            return t.length - e.length
        })), S[e]
    }

    function c(e, t, n) {
        var r = u(t, "prefix" == e),
            i = "prefix" == e ? r.sortedTokens : r.tokens,
            o = u(n).tokens,
            a = {},
            s = r.isPrefixQuery && "query" == e ? i.length - 1 : null,
            l = function(t, n) {
                for (var r = 0; r < o.length; ++r) {
                    var i = o[r];
                    if (!a[r] && (i == t || ("query" == e && n === s || "prefix" == e) && 0 === i.indexOf(t))) return a[r] = !0
                }
                return !1
            };
        return Boolean(i.length && i.every(l))
    }
    var repeatString/*p*/ = t("repeatString"),
        d = /[ ]+/g,
        h = /[^ ]+/g,
        f = new RegExp(o(), "g"),
        m = {},
        g = {
            a: "а à á â ã ä å ā",
            b: "б",
            c: "ц ç č",
            d: "д ð ď đ",
            e: "э е è é ê ë ě ē",
            f: "ф",
            g: "г ğ ģ",
            h: "х ħ",
            i: "и ì í î ï ı ī",
            j: "й",
            k: "к ĸ ķ",
            l: "л ľ ĺ ŀ ł ļ",
            m: "м",
            n: "н ñ ň ŉ ŋ ņ",
            o: "о ø ö õ ô ó ò",
            repeatString/*p*/: "п",
            r: "р ř ŕ",
            s: "с ş š ſ",
            t: "т ť ŧ þ",
            u: "у ю ü û ú ù ů ū",
            v: "в",
            y: "ы ÿ ý",
            z: "з ž",
            ae: "æ",
            oe: "œ",
            ts: "ц",
            ch: "ч",
            ij: "ĳ",
            sh: "ш",
            ss: "ß",
            ya: "я"
        };
    for (var _ in g)
        for (var y = g[_].split(" "), v = 0; v < y.length; v++) m[y[v]] = _;
    var S = {},
        b = {
            flatten: s,
            parse: u,
            getPunctuation: o,
            isExactMatch: c.bind(null, "exact"),
            isQueryMatch: c.bind(null, "query"),
            isPrefixMatch: c.bind(null, "prefix"),
            tokenize: l
        };
    __DEV__ && (b.generateFlattenInfo = function() {
        var e = {},
            t = "",
            n = "";
        for (var r in m) {
            e[r] = m[r];
            var i = r.toUpperCase();
            /[A-Z]/.test(i) || (e[i] = e[r])
        }
        for (var o in e) {
            var a = o.charCodeAt(0).toString(16),
                s = "\\u" + repeatString/*p*/("0", 4 - a.length) + a;
            t += s, n += e[o]
        }
        return {
            map: e,
            input: t,
            output: n
        }
    }), i.exports = b
});