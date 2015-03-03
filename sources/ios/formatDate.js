__d("formatDate",["DateConsts","DateFormatConfig","fbt","invariant"],function (global/*fbt/*e*/*/, require/*exports/*t*/*/, requireDynamic/*DateConsts/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*fbt/*e*/*/, require/*exports/*t*/*/, requireDynamic/*DateConsts/*n*/*/) {
        if (requireDynamic/*DateConsts/*n*/*/ = requireDynamic/*DateConsts/*n*/*/ || {}, !require/*exports/*t*/*/ || !global/*fbt/*e*/*/) return "";
        if ("string" == typeof global/*fbt/*e*/*/ && (global/*fbt/*e*/*/ = parseInt(global/*fbt/*e*/*/, DateFormatConfig/*10*/)), "number" == typeof global/*fbt/*e*/*/ && (global/*fbt/*e*/*/ = new Date(1e3 * global/*fbt/*e*/*/)), global/*fbt/*e*/*/ instanceof Date || d(0, "The date passed to formatDate must be either a unix timestamp or JavaScript date object."), invariant/*isNaN*/(global/*fbt/*e*/*/.getTime()) && d(0, "Invalid date passed to formatDate"), global/*fbt/*e*/*/.getTime() < 1e15 || d(0, "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?"), "string" != typeof require/*exports/*t*/*/) {
            var requireLazy/*r*/ = s();
            for (var module/*i*/ in requireLazy/*r*/) {
                var o = requireLazy/*r*/[module/*i*/];
                if (o.start <= global/*fbt/*e*/*/.getTime() && require/*exports/*t*/*/[o.name]) {
                    require/*exports/*t*/*/ = require/*exports/*t*/*/[o.name];
                    break
                }
            }
        }
        var h;
        requireDynamic/*DateConsts/*n*/*/.skipPatternLocalization || l() || 1 === require/*exports/*t*/*/.length ? h = require/*exports/*t*/*/ : (c.formats[require/*exports/*t*/*/] || d(0, "Trying to localize an unsupported date format. Please see the INTL_DATE_FORMATS sitevar for a list of formats."), h = c.formats[require/*exports/*t*/*/]);
        for (var f = requireDynamic/*DateConsts/*n*/*/.utc ? "getUTC" : "get", m = global/*fbt/*e*/*/[f + "Date"](), g = global/*fbt/*e*/*/[f + "Day"](), _ = global/*fbt/*e*/*/[f + "Month"](), y = global/*fbt/*e*/*/[f + "FullYear"](), v = global/*fbt/*e*/*/[f + "Hours"](), S = global/*fbt/*e*/*/[f + "Minutes"](), b = global/*fbt/*e*/*/[f + "Seconds"](), R = global/*fbt/*e*/*/[f + "Milliseconds"](), w = "", C = 0; C < h.length; C++) {
            var E = h.charAt(C);
            switch (E) {
                case "\\":
                    C++, w += h.charAt(C);
                    break;
                case "d":
                    w += a(m, 2);
                    break;
                case "j":
                    w += m;
                    break;
                case "S":
                    w += u.getOrdinalSuffix(m);
                    break;
                case "D":
                    w += u.getWeekdayNameShort(g);
                    break;
                case "l":
                    w += u.getWeekdayName(g);
                    break;
                case "F":
                case "f":
                    w += u.getMonthName(_ + 1);
                    break;
                case "M":
                    w += u.getMonthNameShort(_ + 1);
                    break;
                case "m":
                    w += a(_ + 1, 2);
                    break;
                case "requireDynamic/*DateConsts/*n*/*/":
                    w += _ + 1;
                    break;
                case "Y":
                    w += y;
                    break;
                case "y":
                    w += ("" + y).slice(2);
                    break;
                case "a":
                    w += p(12 > v ? {
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
                    w += p(12 > v ? {
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
                case "module/*i*/":
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

    function a(global/*fbt/*e*/*/, require/*exports/*t*/*/) {
        return Array(require/*exports/*t*/*/ - ("" + global/*fbt/*e*/*/).length + 1).join("0") + global/*fbt/*e*/*/
    }

    function s() {
        var global/*fbt/*e*/*/ = new Date,
            require/*exports/*t*/*/ = global/*fbt/*e*/*/.getTime(),
            requireDynamic/*DateConsts/*n*/*/ = global/*fbt/*e*/*/.getFullYear(),
            requireLazy/*r*/ = global/*fbt/*e*/*/.getDate() - (global/*fbt/*e*/*/.getDay() - c.weekStart + 6) % 7,
            module/*i*/ = new Date(requireDynamic/*DateConsts/*n*/*/, global/*fbt/*e*/*/.getMonth() + 1, 0).getDate(),
            o = 1 === new Date(requireDynamic/*DateConsts/*n*/*/, 1, 29).getMonth() ? 366 : 365,
            a = 864e5;
        return [{
            name: "today",
            start: global/*fbt/*e*/*/.setHours(0, 0, 0, 0)
        }, {
            name: "withinDay",
            start: require/*exports/*t*/*/ - a
        }, {
            name: "thisWeek",
            start: new Date(global/*fbt/*e*/*/.getTime()).setDate(requireLazy/*r*/)
        }, {
            name: "withinWeek",
            start: require/*exports/*t*/*/ - 7 * a
        }, {
            name: "thisMonth",
            start: global/*fbt/*e*/*/.setDate(1)
        }, {
            name: "withinMonth",
            start: require/*exports/*t*/*/ - a * module/*i*/
        }, {
            name: "thisYear",
            start: global/*fbt/*e*/*/.setMonth(0)
        }, {
            name: "withinYear",
            start: require/*exports/*t*/*/ - a * o
        }, {
            name: "older",
            start: -1 / 0
        }]
    }

    function l() {
        if ("undefined" == typeof window || !window || !window.location) return !1;
        var global/*fbt/*e*/*/ = window.location.pathname,
            require/*exports/*t*/*/ = "/intern";
        return global/*fbt/*e*/*/.substr(0, require/*exports/*t*/*/.length) === require/*exports/*t*/*/
    }
    var u = require/*exports/*t*/*/("DateConsts"),
        c = require/*exports/*t*/*/("DateFormatConfig"),
        p = require/*exports/*t*/*/("fbt"),
        d = require/*exports/*t*/*/("invariant");
    o.periodNames = ["today", "thisWeek", "thisMonth", "thisYear", "withinDay", "withinWeek", "withinMonth", "withinYear", "older"], module/*i*/.exports = o
});