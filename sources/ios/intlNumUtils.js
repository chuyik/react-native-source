__d("intlNumUtils",["NumberFormatConfig","escapeRegex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        requireDynamic/*n*/ = requireDynamic/*n*/ || "", requireLazy/*r*/ = requireLazy/*r*/ || ".", module/*i*/ = module/*i*/ || 0, global/*e*/ = void 0 === require/*t*/ || null === require/*t*/ ? global/*e*/.toString() : "string" == typeof global/*e*/ ? c(global/*e*/, require/*t*/) : u(global/*e*/, require/*t*/);
        var o = global/*e*/.split("."),
            a = o[0],
            s = o[1];
        if (Math.abs(parseInt(a, 10)).toString().length >= module/*i*/)
            for (var l = "", p = "$1" + requireDynamic/*n*/ + "$2$3";
                (l = a.replace(m, p)) != a;) a = l;
        var d = a;
        return s && (d += requireLazy/*r*/ + s), d
    }

    function a(global/*e*/, require/*t*/) {
        return o(global/*e*/, require/*t*/, "", NumberFormatConfig/*h*/.decimalSeparator, NumberFormatConfig/*h*/.minDigitsForThousandsSeparator)
    }

    function s(global/*e*/, require/*t*/) {
        return o(global/*e*/, require/*t*/, NumberFormatConfig/*h*/.numberDelimiter, NumberFormatConfig/*h*/.decimalSeparator, NumberFormatConfig/*h*/.minDigitsForThousandsSeparator)
    }

    function l(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = Math.floor(Math.log(global/*e*/) / Math.LN10),
            module/*i*/ = global/*e*/;
        requireDynamic/*n*/ > requireLazy/*r*/ && (module/*i*/ = global/*e*/ * Math.pow(10, -requireLazy/*r*/ + requireDynamic/*n*/));
        var o = Math.pow(10, Math.floor(Math.log(module/*i*/) / Math.LN10) - requireDynamic/*n*/ + 1),
            a = Math.round(module/*i*/ / o) * o;
        return requireDynamic/*n*/ > requireLazy/*r*/ && (a /= Math.pow(10, -requireLazy/*r*/ + requireDynamic/*n*/)), s(a, require/*t*/)
    }

    function u(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = Math.pow(10, require/*t*/);
        if (global/*e*/ = Math.round(global/*e*/ * requireDynamic/*n*/) / requireDynamic/*n*/ + "", !require/*t*/) return global/*e*/;
        var requireLazy/*r*/ = global/*e*/.indexOf("."),
            module/*i*/ = 0; - 1 == requireLazy/*r*/ ? (global/*e*/ += ".", module/*i*/ = require/*t*/) : module/*i*/ = require/*t*/ - (global/*e*/.length - requireLazy/*r*/ - 1);
        for (var o = 0, a = module/*i*/; a > o; o++) global/*e*/ += "0";
        return global/*e*/
    }

    function c(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.indexOf("."),
            requireLazy/*r*/ = -1 === requireDynamic/*n*/ ? global/*e*/ : global/*e*/.slice(0, requireDynamic/*n*/),
            module/*i*/ = -1 === requireDynamic/*n*/ ? "" : global/*e*/.slice(requireDynamic/*n*/ + 1);
        return require/*t*/ ? requireLazy/*r*/ + "." + _(module/*i*/.slice(0, require/*t*/), require/*t*/ - module/*i*/.length) : requireLazy/*r*/
    }

    function p(global/*e*/, require/*t*/) {
        if (global/*e*/ = global/*e*/.split("").map(function(global/*e*/) {
                return g.hasOwnProperty(global/*e*/) ? g[global/*e*/] : global/*e*/
            }).join(""), global/*e*/ = global/*e*/.trim().replace(/^[^\d]*\-/, ""), require/*t*/) {
            var requireDynamic/*n*/ = new RegExp(escapeRegex/*f*/(require/*t*/) + "(\\d*).*", "module/*i*/");
            global/*e*/ = global/*e*/.replace(requireDynamic/*n*/, "$1")
        } else /^\u0002?(\d+,\d*){2,}$/.test(global/*e*/) || /^\u0002?(\d+\.\d*){2,}$/.test(global/*e*/) || (global/*e*/ = global/*e*/.replace(/[\.,](\d*\D*)$/, "$1"));
        global/*e*/ = global/*e*/.replace(/[^0-9\u0001\u0002]/g, "").replace("", ".").replace("", "-");
        var requireLazy/*r*/ = Number(global/*e*/);
        return "" === global/*e*/ || isNaN(requireLazy/*r*/) ? null : requireLazy/*r*/
    }

    function d(global/*e*/) {
        return p(global/*e*/, NumberFormatConfig/*h*/.decimalSeparator)
    }
    var NumberFormatConfig/*h*/ = require/*t*/("NumberFormatConfig"),
        escapeRegex/*f*/ = require/*t*/("escapeRegex"),
        m = /(\d)(\d\d\d)($|\D)/,
        g = {
            "،": ".",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٫": ".",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        },
        _ = function(global/*e*/, require/*t*/) {
            for (var requireDynamic/*n*/ = 0; require/*t*/ > requireDynamic/*n*/; requireDynamic/*n*/++) global/*e*/ += "0";
            return global/*e*/
        },
        y = {
            formatNumber: a,
            formatNumberRaw: o,
            formatNumberWithThousandDelimiters: s,
            formatNumberWithLimitedSigFig: l,
            parseNumber: d,
            parseNumberRaw: p,
            getFloatString: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = String(global/*e*/),
                    module/*i*/ = requireLazy/*r*/.split("."),
                    o = y.getIntegerString(module/*i*/[0], require/*t*/);
                return 1 === module/*i*/.length ? o : o + requireDynamic/*n*/ + module/*i*/[1]
            },
            getIntegerString: function(global/*e*/, require/*t*/) {
                for (var requireDynamic/*n*/ = String(global/*e*/), requireLazy/*r*/ = /(\d+)(\d{3})/; requireLazy/*r*/.test(requireDynamic/*n*/);) requireDynamic/*n*/ = requireDynamic/*n*/.replace(requireLazy/*r*/, "$1" + require/*t*/ + "$2");
                return requireDynamic/*n*/
            }
        };
    module/*i*/.exports = y
});