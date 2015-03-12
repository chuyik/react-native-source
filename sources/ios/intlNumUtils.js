__d("intlNumUtils",["NumberFormatConfig","escapeRegex"],function (e, t, n, r, i) {
    function o(e, t, n, r, i) {
        n = n || "", r = r || ".", i = i || 0, e = void 0 === t || null === t ? e.toString() : "string" == typeof e ? c(e, t) : u(e, t);
        var o = e.split("."),
            a = o[0],
            s = o[1];
        if (Math.abs(parseInt(a, 10)).toString().length >= i)
            for (var l = "", p = "$1" + n + "$2$3";
                (l = a.replace(m, p)) != a;) a = l;
        var d = a;
        return s && (d += r + s), d
    }

    function a(e, t) {
        return o(e, t, "", NumberFormatConfig/*h*/.decimalSeparator, NumberFormatConfig/*h*/.minDigitsForThousandsSeparator)
    }

    function s(e, t) {
        return o(e, t, NumberFormatConfig/*h*/.numberDelimiter, NumberFormatConfig/*h*/.decimalSeparator, NumberFormatConfig/*h*/.minDigitsForThousandsSeparator)
    }

    function l(e, t, n) {
        var r = Math.floor(Math.log(e) / Math.LN10),
            i = e;
        n > r && (i = e * Math.pow(10, -r + n));
        var o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10) - n + 1),
            a = Math.round(i / o) * o;
        return n > r && (a /= Math.pow(10, -r + n)), s(a, t)
    }

    function u(e, t) {
        var n = Math.pow(10, t);
        if (e = Math.round(e * n) / n + "", !t) return e;
        var r = e.indexOf("."),
            i = 0; - 1 == r ? (e += ".", i = t) : i = t - (e.length - r - 1);
        for (var o = 0, a = i; a > o; o++) e += "0";
        return e
    }

    function c(e, t) {
        var n = e.indexOf("."),
            r = -1 === n ? e : e.slice(0, n),
            i = -1 === n ? "" : e.slice(n + 1);
        return t ? r + "." + _(i.slice(0, t), t - i.length) : r
    }

    function p(e, t) {
        if (e = e.split("").map(function(e) {
                return g.hasOwnProperty(e) ? g[e] : e
            }).join(""), e = e.trim().replace(/^[^\d]*\-/, ""), t) {
            var n = new RegExp(escapeRegex/*f*/(t) + "(\\d*).*", "i");
            e = e.replace(n, "$1")
        } else /^\u0002?(\d+,\d*){2,}$/.test(e) || /^\u0002?(\d+\.\d*){2,}$/.test(e) || (e = e.replace(/[\.,](\d*\D*)$/, "$1"));
        e = e.replace(/[^0-9\u0001\u0002]/g, "").replace("", ".").replace("", "-");
        var r = Number(e);
        return "" === e || isNaN(r) ? null : r
    }

    function d(e) {
        return p(e, NumberFormatConfig/*h*/.decimalSeparator)
    }
    var NumberFormatConfig/*h*/ = t("NumberFormatConfig"),
        escapeRegex/*f*/ = t("escapeRegex"),
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
        _ = function(e, t) {
            for (var n = 0; t > n; n++) e += "0";
            return e
        },
        y = {
            formatNumber: a,
            formatNumberRaw: o,
            formatNumberWithThousandDelimiters: s,
            formatNumberWithLimitedSigFig: l,
            parseNumber: d,
            parseNumberRaw: p,
            getFloatString: function(e, t, n) {
                var r = String(e),
                    i = r.split("."),
                    o = y.getIntegerString(i[0], t);
                return 1 === i.length ? o : o + n + i[1]
            },
            getIntegerString: function(e, t) {
                for (var n = String(e), r = /(\d+)(\d{3})/; r.test(n);) n = n.replace(r, "$1" + t + "$2");
                return n
            }
        };
    i.exports = y
});