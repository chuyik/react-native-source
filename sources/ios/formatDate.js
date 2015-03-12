__d("formatDate",["DateConsts","DateFormatConfig","fbt","invariant"],function (e, t, n, r, i) {
    function o(e, t, n) {
        if (n = n || {}, !t || !e) return "";
        if ("string" == typeof e && (e = parseInt(e, 10)), "number" == typeof e && (e = new Date(1e3 * e)), e instanceof Date || invariant/*d*/(0, "The date passed to formatDate must be either a unix timestamp or JavaScript date object."), isNaN(e.getTime()) && invariant/*d*/(0, "Invalid date passed to formatDate"), e.getTime() < 1e15 || invariant/*d*/(0, "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?"), "string" != typeof t) {
            var r = s();
            for (var i in r) {
                var o = r[i];
                if (o.start <= e.getTime() && t[o.name]) {
                    t = t[o.name];
                    break
                }
            }
        }
        var h;
        n.skipPatternLocalization || l() || 1 === t.length ? h = t : (DateFormatConfig/*c*/.formats[t] || invariant/*d*/(0, "Trying to localize an unsupported date format. Please see the INTL_DATE_FORMATS sitevar for a list of formats."), h = DateFormatConfig/*c*/.formats[t]);
        for (var f = n.utc ? "getUTC" : "get", m = e[f + "Date"](), g = e[f + "Day"](), _ = e[f + "Month"](), y = e[f + "FullYear"](), v = e[f + "Hours"](), S = e[f + "Minutes"](), b = e[f + "Seconds"](), R = e[f + "Milliseconds"](), w = "", C = 0; C < h.length; C++) {
            var E = h.charAt(C);
            switch (E) {
                case "\\":
                    C++, w += h.charAt(C);
                    break;
                case "invariant/*d*/":
                    w += a(m, 2);
                    break;
                case "j":
                    w += m;
                    break;
                case "S":
                    w += DateConsts/*u*/.getOrdinalSuffix(m);
                    break;
                case "D":
                    w += DateConsts/*u*/.getWeekdayNameShort(g);
                    break;
                case "l":
                    w += DateConsts/*u*/.getWeekdayName(g);
                    break;
                case "F":
                case "f":
                    w += DateConsts/*u*/.getMonthName(_ + 1);
                    break;
                case "M":
                    w += DateConsts/*u*/.getMonthNameShort(_ + 1);
                    break;
                case "m":
                    w += a(_ + 1, 2);
                    break;
                case "n":
                    w += _ + 1;
                    break;
                case "Y":
                    w += y;
                    break;
                case "y":
                    w += ("" + y).slice(2);
                    break;
                case "a":
                    w += fbt/*p*/(12 > v ? {
                        type: "text",
                        texts: ["am"],
                        desc: "Lower-case suffix for times before noon"
                    } : {
                        type: "text",
                        texts: ["pm"],
                        desc: "Lower-case suffix for times after noon"
                    });
                    break;
                case "A":
                    w += fbt/*p*/(12 > v ? {
                        type: "text",
                        texts: ["AM"],
                        desc: "Upper-case suffix for times before noon"
                    } : {
                        type: "text",
                        texts: ["PM"],
                        desc: "Upper-case suffix for times after noon"
                    });
                    break;
                case "g":
                    w += 0 === v || 12 === v ? 12 : v % 12;
                    break;
                case "G":
                    w += v;
                    break;
                case "h":
                    w += 0 === v || 12 === v ? 12 : a(v % 12, 2);
                    break;
                case "H":
                    w += a(v, 2);
                    break;
                case "i":
                    w += a(S, 2);
                    break;
                case "s":
                    w += a(b, 2);
                    break;
                case "X":
                    w += a(R, 3);
                    break;
                default:
                    w += E
            }
        }
        return w
    }

    function a(e, t) {
        return Array(t - ("" + e).length + 1).join("0") + e
    }

    function s() {
        var e = new Date,
            t = e.getTime(),
            n = e.getFullYear(),
            r = e.getDate() - (e.getDay() - DateFormatConfig/*c*/.weekStart + 6) % 7,
            i = new Date(n, e.getMonth() + 1, 0).getDate(),
            o = 1 === new Date(n, 1, 29).getMonth() ? 366 : 365,
            a = 864e5;
        return [{
            name: "today",
            start: e.setHours(0, 0, 0, 0)
        }, {
            name: "withinDay",
            start: t - a
        }, {
            name: "thisWeek",
            start: new Date(e.getTime()).setDate(r)
        }, {
            name: "withinWeek",
            start: t - 7 * a
        }, {
            name: "thisMonth",
            start: e.setDate(1)
        }, {
            name: "withinMonth",
            start: t - a * i
        }, {
            name: "thisYear",
            start: e.setMonth(0)
        }, {
            name: "withinYear",
            start: t - a * o
        }, {
            name: "older",
            start: -1 / 0
        }]
    }

    function l() {
        if ("undefined" == typeof window || !window || !window.location) return !1;
        var e = window.location.pathname,
            t = "/intern";
        return e.substr(0, t.length) === t
    }
    var DateConsts/*u*/ = t("DateConsts"),
        DateFormatConfig/*c*/ = t("DateFormatConfig"),
        fbt/*p*/ = t("fbt"),
        invariant/*d*/ = t("invariant");
    o.periodNames = ["today", "thisWeek", "thisMonth", "thisYear", "withinDay", "withinWeek", "withinMonth", "withinYear", "older"], i.exports = o
});