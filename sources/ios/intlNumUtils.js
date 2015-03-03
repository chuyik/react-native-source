__d("intlNumUtils",["NumberFormatConfig","escapeRegex"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*NumberFormatConfig/*n*/*/, requireLazy/*escapeRegex/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*NumberFormatConfig/*n*/*/, requireLazy/*escapeRegex/*r*/*/, module/*i*/) {
        requireDynamic/*NumberFormatConfig/*n*/*/ = requireDynamic/*NumberFormatConfig/*n*/*/ || "", requireLazy/*escapeRegex/*r*/*/ = requireLazy/*escapeRegex/*r*/*/ || ".", module/*i*/ = module/*i*/ || 0, global/*e*/ = void 0 === require/*exports/*t*/*/ || null === require/*exports/*t*/*/ ? global/*e*/.toString() : "string" == typeof global/*e*/ ? c(global/*e*/, require/*exports/*t*/*/) : u(global/*e*/, require/*exports/*t*/*/);
        var o = global/*e*/.split("."),
            a = o[0],
            s = o[1];
        if (Math.abs(parseInt(a, 10)).toString().length >= module/*i*/)
            for (var l = "", p = "$1" + requireDynamic/*NumberFormatConfig/*n*/*/ + "$2$3";
                (l = a.replace(m, p)) != a;) a = l;
        var d = a;
        return s && (d += requireLazy/*escapeRegex/*r*/*/ + s), d
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        return o(global/*e*/, require/*exports/*t*/*/, "", h.decimalSeparator, h.minDigitsForThousandsSeparator)
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        return o(global/*e*/, require/*exports/*t*/*/, h.numberDelimiter, h.decimalSeparator, h.minDigitsForThousandsSeparator)
    }

    function l(global/*e*/, require/*exports/*t*/*/, requireDynamic/*NumberFormatConfig/*n*/*/) {
        var requireLazy/*escapeRegex/*r*/*/ = Math.floor(Math.log(global/*e*/) / Math.LN10),
            module/*i*/ = global/*e*/;
        requireDynamic/*NumberFormatConfig/*n*/*/ > requireLazy/*escapeRegex/*r*/*/ && (module/*i*/ = global/*e*/ * Math.pow(10, -requireLazy/*escapeRegex/*r*/*/ + requireDynamic/*NumberFormatConfig/*n*/*/));
        var o = Math.pow(10, Math.floor(Math.log(module/*i*/) / Math.LN10) - requireDynamic/*NumberFormatConfig/*n*/*/ + 1),
            a = Math.round(module/*i*/ / o) * o;
        return requireDynamic/*NumberFormatConfig/*n*/*/ > requireLazy/*escapeRegex/*r*/*/ && (a /= Math.pow(10, -requireLazy/*escapeRegex/*r*/*/ + requireDynamic/*NumberFormatConfig/*n*/*/)), s(a, require/*exports/*t*/*/)
    }

    function u(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*NumberFormatConfig/*n*/*/ = Math.pow(10, require/*exports/*t*/*/);
        if (global/*e*/ = Math.round(global/*e*/ * requireDynamic/*NumberFormatConfig/*n*/*/) / requireDynamic/*NumberFormatConfig/*n*/*/ + "", !require/*exports/*t*/*/) return global/*e*/;
        var requireLazy/*escapeRegex/*r*/*/ = global/*e*/.indexOf("."),
            module/*i*/ = 0; - 1 == requireLazy/*escapeRegex/*r*/*/ ? (global/*e*/ += ".", module/*i*/ = require/*exports/*t*/*/) : module/*i*/ = require/*exports/*t*/*/ - (global/*e*/.length - requireLazy/*escapeRegex/*r*/*/ - 1);
        for (var o = 0, a = module/*i*/; a > o; o++) global/*e*/ += "0";
        return global/*e*/
    }

    function c(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*NumberFormatConfig/*n*/*/ = global/*e*/.indexOf("."),
            requireLazy/*escapeRegex/*r*/*/ = -1 === requireDynamic/*NumberFormatConfig/*n*/*/ ? global/*e*/ : global/*e*/.slice(0, requireDynamic/*NumberFormatConfig/*n*/*/),
            module/*i*/ = -1 === requireDynamic/*NumberFormatConfig/*n*/*/ ? "" : global/*e*/.slice(requireDynamic/*NumberFormatConfig/*n*/*/ + 1);
        return require/*exports/*t*/*/ ? requireLazy/*escapeRegex/*r*/*/ + "." + _(module/*i*/.slice(0, require/*exports/*t*/*/), require/*exports/*t*/*/ - module/*i*/.length) : requireLazy/*escapeRegex/*r*/*/
    }

    function p(global/*e*/, require/*exports/*t*/*/) {
        if (global/*e*/ = global/*e*/.split("").map(function(global/*e*/) {
                return g.hasOwnProperty(global/*e*/) ? g[global/*e*/] : global/*e*/
            }).join(""), global/*e*/ = global/*e*/.trim().replace(/^[^\d]*\-/, ""), require/*exports/*t*/*/) {
            var requireDynamic/*NumberFormatConfig/*n*/*/ = new RegExp(f(require/*exports/*t*/*/) + "(\\d*).*", "module/*i*/");
            global/*e*/ = global/*e*/.replace(requireDynamic/*NumberFormatConfig/*n*/*/, "$1")
        } else /^\u0002?(\d+,\d*){2,}$/.test(global/*e*/) || /^\u0002?(\d+\.\d*){2,}$/.test(global/*e*/) || (global/*e*/ = global/*e*/.replace(/[\.,](\d*\D*)$/, "$1"));
        global/*e*/ = global/*e*/.replace(/[^0-9\u0001\u0002]/g, "").replace("", ".").replace("", "-");
        var requireLazy/*escapeRegex/*r*/*/ = Number(global/*e*/);
        return "" === global/*e*/ || isNaN(requireLazy/*escapeRegex/*r*/*/) ? null : requireLazy/*escapeRegex/*r*/*/
    }

    function d(global/*e*/) {
        return p(global/*e*/, h.decimalSeparator)
    }
    var h = require/*exports/*t*/*/("NumberFormatConfig"),
        f = require/*exports/*t*/*/("escapeRegex"),
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
        _ = function(global/*e*/, require/*exports/*t*/*/) {
            for (var requireDynamic/*NumberFormatConfig/*n*/*/ = 0; require/*exports/*t*/*/ > requireDynamic/*NumberFormatConfig/*n*/*/; requireDynamic/*NumberFormatConfig/*n*/*/++) global/*e*/ += "0";
            return global/*e*/
        },
        y = {
            formatNumber: a,
            formatNumberRaw: o,
            formatNumberWithThousandDelimiters: s,
            formatNumberWithLimitedSigFig: l,
            parseNumber: d,
            parseNumberRaw: p,
            getFloatString: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*NumberFormatConfig/*n*/*/) {
                var requireLazy/*escapeRegex/*r*/*/ = String(global/*e*/),
                    module/*i*/ = requireLazy/*escapeRegex/*r*/*/.split("."),
                    o = y.getIntegerString(module/*i*/[0], require/*exports/*t*/*/);
                return 1 === module/*i*/.length ? o : o + requireDynamic/*NumberFormatConfig/*n*/*/ + module/*i*/[1]
            },
            getIntegerString: function(global/*e*/, require/*exports/*t*/*/) {
                for (var requireDynamic/*NumberFormatConfig/*n*/*/ = String(global/*e*/), requireLazy/*escapeRegex/*r*/*/ = /(\d+)(\d{3})/; requireLazy/*escapeRegex/*r*/*/.test(requireDynamic/*NumberFormatConfig/*n*/*/);) requireDynamic/*NumberFormatConfig/*n*/*/ = requireDynamic/*NumberFormatConfig/*n*/*/.replace(requireLazy/*escapeRegex/*r*/*/, "$1" + require/*exports/*t*/*/ + "$2");
                return requireDynamic/*NumberFormatConfig/*n*/*/
            }
        };
    module/*i*/.exports = y
});