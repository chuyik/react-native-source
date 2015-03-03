__d("TokenizeUtil",["repeatString"],function (global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*repeatString/*r*/*/, module/*i*/) {
    function o() {
        return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]"
    }

    function a(global/*e*/) {
        return global/*e*/ ? global/*e*/.replace(f, " ") : ""
    }

    function s(global/*e*/) {
        global/*e*/ = global/*e*/.toLowerCase();
        for (var require/*t*/ = "", requireDynamic/*exports/*n*/*/ = "", requireLazy/*repeatString/*r*/*/ = global/*e*/.length; requireLazy/*repeatString/*r*/*/--;) requireDynamic/*exports/*n*/*/ = global/*e*/.charAt(requireLazy/*repeatString/*r*/*/), require/*t*/ = (m[requireDynamic/*exports/*n*/*/] || requireDynamic/*exports/*n*/*/) + require/*t*/;
        return require/*t*/.replace(d, " ")
    }

    function l(global/*e*/) {
        for (var require/*t*/ = [], requireDynamic/*exports/*n*/*/ = h.exec(global/*e*/); requireDynamic/*exports/*n*/*/;) requireDynamic/*exports/*n*/*/ = requireDynamic/*exports/*n*/*/[0], require/*t*/.push(requireDynamic/*exports/*n*/*/), requireDynamic/*exports/*n*/*/ = h.exec(global/*e*/);
        return require/*t*/
    }

    function u(global/*e*/, require/*t*/) {
        if (!S.hasOwnProperty(global/*e*/)) {
            var requireDynamic/*exports/*n*/*/ = s(global/*e*/),
                requireLazy/*repeatString/*r*/*/ = a(requireDynamic/*exports/*n*/*/);
            S[global/*e*/] = {
                value: global/*e*/,
                flatValue: requireDynamic/*exports/*n*/*/,
                tokens: l(requireLazy/*repeatString/*r*/*/),
                isPrefixQuery: requireLazy/*repeatString/*r*/*/ && " " != requireLazy/*repeatString/*r*/*/[requireLazy/*repeatString/*r*/*/.length - 1]
            }
        }
        return require/*t*/ && "undefined" == typeof S[global/*e*/].sortedTokens && (S[global/*e*/].sortedTokens = S[global/*e*/].tokens.slice(), S[global/*e*/].sortedTokens.sort(function(global/*e*/, require/*t*/) {
            return require/*t*/.length - global/*e*/.length
        })), S[global/*e*/]
    }

    function c(global/*e*/, require/*t*/, requireDynamic/*exports/*n*/*/) {
        var requireLazy/*repeatString/*r*/*/ = u(require/*t*/, "prefix" == global/*e*/),
            module/*i*/ = "prefix" == global/*e*/ ? requireLazy/*repeatString/*r*/*/.sortedTokens : requireLazy/*repeatString/*r*/*/.tokens,
            o = u(requireDynamic/*exports/*n*/*/).tokens,
            a = {},
            s = requireLazy/*repeatString/*r*/*/.isPrefixQuery && "query" == global/*e*/ ? module/*i*/.length - 1 : null,
            l = function(require/*t*/, requireDynamic/*exports/*n*/*/) {
                for (var requireLazy/*repeatString/*r*/*/ = 0; requireLazy/*repeatString/*r*/*/ < o.length; ++requireLazy/*repeatString/*r*/*/) {
                    var module/*i*/ = o[requireLazy/*repeatString/*r*/*/];
                    if (!a[requireLazy/*repeatString/*r*/*/] && (module/*i*/ == require/*t*/ || ("query" == global/*e*/ && requireDynamic/*exports/*n*/*/ === s || "prefix" == global/*e*/) && 0 === module/*i*/.indexOf(require/*t*/))) return a[requireLazy/*repeatString/*r*/*/] = !0
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
            requireDynamic/*exports/*n*/*/: "н ñ ň ŉ ŋ ņ",
            o: "о ø ö õ ô ó ò",
            p: "п",
            requireLazy/*repeatString/*r*/*/: "р ř ŕ",
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
            requireDynamic/*exports/*n*/*/ = "";
        for (var requireLazy/*repeatString/*r*/*/ in m) {
            global/*e*/[requireLazy/*repeatString/*r*/*/] = m[requireLazy/*repeatString/*r*/*/];
            var module/*i*/ = requireLazy/*repeatString/*r*/*/.toUpperCase();
            /[A-Z]/.test(module/*i*/) || (global/*e*/[module/*i*/] = global/*e*/[requireLazy/*repeatString/*r*/*/])
        }
        for (var o in global/*e*/) {
            var a = o.charCodeAt(0).toString(16),
                s = "\\u" + p("0", 4 - a.length) + a;
            require/*t*/ += s, requireDynamic/*exports/*n*/*/ += global/*e*/[o]
        }
        return {
            map: global/*e*/,
            input: require/*t*/,
            output: requireDynamic/*exports/*n*/*/
        }
    }), module/*i*/.exports = b
});