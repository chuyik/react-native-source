__d("TokenizeUtil",["repeatString"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {
        return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]"
    }

    function a(global/*e*/) {
        return global/*e*/ ? global/*e*/.replace(f, " ") : ""
    }

    function s(global/*e*/) {
        global/*e*/ = global/*e*/.toLowerCase();
        for (var require/*t*/ = "", requireDynamic/*n*/ = "", requireLazy/*r*/ = global/*e*/.length; requireLazy/*r*/--;) requireDynamic/*n*/ = global/*e*/.charAt(requireLazy/*r*/), require/*t*/ = (m[requireDynamic/*n*/] || requireDynamic/*n*/) + require/*t*/;
        return require/*t*/.replace(d, " ")
    }

    function l(global/*e*/) {
        for (var require/*t*/ = [], requireDynamic/*n*/ = h.exec(global/*e*/); requireDynamic/*n*/;) requireDynamic/*n*/ = requireDynamic/*n*/[0], require/*t*/.push(requireDynamic/*n*/), requireDynamic/*n*/ = h.exec(global/*e*/);
        return require/*t*/
    }

    function u(global/*e*/, require/*t*/) {
        if (!S.hasOwnProperty(global/*e*/)) {
            var requireDynamic/*n*/ = s(global/*e*/),
                requireLazy/*r*/ = a(requireDynamic/*n*/);
            S[global/*e*/] = {
                value: global/*e*/,
                flatValue: requireDynamic/*n*/,
                tokens: l(requireLazy/*r*/),
                isPrefixQuery: requireLazy/*r*/ && " " != requireLazy/*r*/[requireLazy/*r*/.length - 1]
            }
        }
        return require/*t*/ && "undefined" == typeof S[global/*e*/].sortedTokens && (S[global/*e*/].sortedTokens = S[global/*e*/].tokens.slice(), S[global/*e*/].sortedTokens.sort(function(global/*e*/, require/*t*/) {
            return require/*t*/.length - global/*e*/.length
        })), S[global/*e*/]
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = u(require/*t*/, "prefix" == global/*e*/),
            module/*i*/ = "prefix" == global/*e*/ ? requireLazy/*r*/.sortedTokens : requireLazy/*r*/.tokens,
            o = u(requireDynamic/*n*/).tokens,
            a = {},
            s = requireLazy/*r*/.isPrefixQuery && "query" == global/*e*/ ? module/*i*/.length - 1 : null,
            l = function(require/*t*/, requireDynamic/*n*/) {
                for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < o.length; ++requireLazy/*r*/) {
                    var module/*i*/ = o[requireLazy/*r*/];
                    if (!a[requireLazy/*r*/] && (module/*i*/ == require/*t*/ || ("query" == global/*e*/ && requireDynamic/*n*/ === s || "prefix" == global/*e*/) && 0 === module/*i*/.indexOf(require/*t*/))) return a[requireLazy/*r*/] = !0
                }
                return !1
            };
        return Boolean(module/*i*/.length && module/*i*/.every(l))
    }
    var p = require/*t*/("repeatString"),
        d = /[ ]+/g,
        h = /[^ ]+/g,
        f = new RegExp(o(), "g"),
        m = {},
        g = {
            a: "а à á â ã ä å ā",
            b: "б",
            c: "ц ç č",
            d: "д ð ď đ",
            global/*e*/: "э е è é ê ë ě ē",
            f: "ф",
            g: "г ğ ģ",
            h: "х ħ",
            module/*i*/: "и ì í î ï ı ī",
            j: "й",
            k: "к ĸ ķ",
            l: "л ľ ĺ ŀ ł ļ",
            m: "м",
            requireDynamic/*n*/: "н ñ ň ŉ ŋ ņ",
            o: "о ø ö õ ô ó ò",
            p: "п",
            requireLazy/*r*/: "р ř ŕ",
            s: "с ş š ſ",
            require/*t*/: "т ť ŧ þ",
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
        var global/*e*/ = {},
            require/*t*/ = "",
            requireDynamic/*n*/ = "";
        for (var requireLazy/*r*/ in m) {
            global/*e*/[requireLazy/*r*/] = m[requireLazy/*r*/];
            var module/*i*/ = requireLazy/*r*/.toUpperCase();
            /[A-Z]/.test(module/*i*/) || (global/*e*/[module/*i*/] = global/*e*/[requireLazy/*r*/])
        }
        for (var o in global/*e*/) {
            var a = o.charCodeAt(0).toString(16),
                s = "\\u" + p("0", 4 - a.length) + a;
            require/*t*/ += s, requireDynamic/*n*/ += global/*e*/[o]
        }
        return {
            map: global/*e*/,
            input: require/*t*/,
            output: requireDynamic/*n*/
        }
    }), module/*i*/.exports = b
});