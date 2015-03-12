__d("stacktrace-parser/lib/stacktrace-parser",[],function (e, t, n, r, i) {
    var o = "<unknown>",
        a = {
            parse: function(e) {
                for (var t, n, r = /^\s*at (?:(?:(?:Anonymous function)?|((?:\[object object\])?\S+(?: \[as \S+\])?)) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i, i = /^(?:\s*(\S*)(?:\((.*?)\))?@)?((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i, a = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = e.split("\n"), l = [], u = 0, c = s.length; c > u; ++u) {
                    if (t = i.exec(s[u])) n = {
                        file: t[3],
                        methodName: t[1] || o,
                        lineNumber: +t[4],
                        column: t[5] ? +t[5] : null
                    };
                    else if (t = r.exec(s[u])) n = {
                        file: t[2],
                        methodName: t[1] || o,
                        lineNumber: +t[3],
                        column: t[4] ? +t[4] : null
                    };
                    else {
                        if (!(t = a.exec(s[u]))) continue;
                        n = {
                            file: t[2],
                            methodName: t[1] || o,
                            lineNumber: +t[3],
                            column: t[4] ? +t[4] : null
                        }
                    }
                    l.push(n)
                }
                return l
            }
        };
    i.exports = a
});