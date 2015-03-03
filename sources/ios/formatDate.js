__d("formatDate",["DateConsts","DateFormatConfig","fbt","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (requireDynamic/*n*/ = requireDynamic/*n*/ || {}, !require/*t*/ || !global/*e*/) return "";
        if ("string" == typeof global/*e*/ && (global/*e*/ = parseInt(global/*e*/, 10)), "number" == typeof global/*e*/ && (global/*e*/ = new Date(1e3 * global/*e*/)), global/*e*/ instanceof Date || d(0, "The date passed to formatDate must be either a unix timestamp or JavaScript date object."), isNaN(global/*e*/.getTime()) && d(0, "Invalid date passed to formatDate"), global/*e*/.getTime() < 1e15 || d(0, "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?"), "string" != typeof require/*t*/) {
            var requireLazy/*r*/ = s();
            for (var module/*i*/ in requireLazy/*r*/) {
                var o = requireLazy/*r*/[module/*i*/];
                if (o.start <= global/*e*/.getTime() && require/*t*/[o.name]) {
                    require/*t*/ = require/*t*/[o.name];
                    break
                }
            }
        }
        var h;
        requireDynamic/*n*/.skipPatternLocalization || l() || 1 === require/*t*/.length ? h = require/*t*/ : (c.formats[require/*t*/] || d(0, "Trying to localize an unsupported date format. Please see the INTL_DATE_FORMATS sitevar for a list of formats."), h = c.formats[require/*t*/]);
        for (var f = requireDynamic/*n*/.utc ? "getUTC" : "get", m = global/*e*/[f + "Date"](), g = global/*e*/[f + "Day"](), _ = global/*e*/[f + "Month"](), y = global/*e*/[f + "FullYear"](), v = global/*e*/[f + "Hours"](), S = global/*e*/[f + "Minutes"](), b = global/*e*/[f + "Seconds"](), R = global/*e*/[f + "Milliseconds"](), w = "", C = 0; C < h.length; C++) {
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
                case "requireDynamic/*n*/":
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

    function a(global/*e*/, require/*t*/) {
        return Array(require/*t*/ - ("" + global/*e*/).length + 1).join("0") + global/*e*/
    }

    function s() {
        var global/*e*/ = new Date,
            require/*t*/ = global/*e*/.getTime(),
            requireDynamic/*n*/ = global/*e*/.getFullYear(),
            requireLazy/*r*/ = global/*e*/.getDate() - (global/*e*/.getDay() - c.weekStart + 6) % 7,
            module/*i*/ = new Date(requireDynamic/*n*/, global/*e*/.getMonth() + 1, 0).getDate(),
            o = 1 === new Date(requireDynamic/*n*/, 1, 29).getMonth() ? 366 : 365,
            a = 864e5;
        return [{
            name: "today",
            start: global/*e*/.setHours(0, 0, 0, 0)
        }, {
            name: "withinDay",
            start: require/*t*/ - a
        }, {
            name: "thisWeek",
            start: new Date(global/*e*/.getTime()).setDate(requireLazy/*r*/)
        }, {
            name: "withinWeek",
            start: require/*t*/ - 7 * a
        }, {
            name: "thisMonth",
            start: global/*e*/.setDate(1)
        }, {
            name: "withinMonth",
            start: require/*t*/ - a * module/*i*/
        }, {
            name: "thisYear",
            start: global/*e*/.setMonth(0)
        }, {
            name: "withinYear",
            start: require/*t*/ - a * o
        }, {
            name: "older",
            start: -1 / 0
        }]
    }

    function l() {
        if ("undefined" == typeof window || !window || !window.location) return !1;
        var global/*e*/ = window.location.pathname,
            require/*t*/ = "/intern";
        return global/*e*/.substr(0, require/*t*/.length) === require/*t*/
    }
    var u = require/*t*/("DateConsts"),
        c = require/*t*/("DateFormatConfig"),
        p = require/*t*/("fbt"),
        d = require/*t*/("invariant");
    o.periodNames = ["today", "thisWeek", "thisMonth", "thisYear", "withinDay", "withinWeek", "withinMonth", "withinYear", "older"], module/*i*/.exports = o
});