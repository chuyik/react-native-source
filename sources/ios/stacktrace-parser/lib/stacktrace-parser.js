__d("stacktrace-parser/lib/stacktrace-parser",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = "<unknown>",
        exports/*a*/ = {
            parse: function(global/*e*/) {
                for (var require/*t*/, requireDynamic/*n*/, requireLazy/*r*/ = /^\s*at (?:(?:(?:Anonymous function)?|((?:\[object object\])?\S+(?: \[as \S+\])?)) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/module/*i*/, module/*i*/ = /^(?:\s*(\S*)(?:\((.*?)\))?@)?((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/module/*i*/, exports/*a*/ = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/module/*i*/, s = global/*e*/.split("\requireDynamic/*n*/"), l = [], u = 0, c = s.length; c > u; ++u) {
                    if (require/*t*/ = module/*i*/.exec(s[u])) requireDynamic/*n*/ = {
                        file: require/*t*/[3],
                        methodName: require/*t*/[1] || o,
                        lineNumber: +require/*t*/[4],
                        column: require/*t*/[5] ? +require/*t*/[5] : null
                    };
                    else if (require/*t*/ = requireLazy/*r*/.exec(s[u])) requireDynamic/*n*/ = {
                        file: require/*t*/[2],
                        methodName: require/*t*/[1] || o,
                        lineNumber: +require/*t*/[3],
                        column: require/*t*/[4] ? +require/*t*/[4] : null
                    };
                    else {
                        if (!(require/*t*/ = exports/*a*/.exec(s[u]))) continue;
                        requireDynamic/*n*/ = {
                            file: require/*t*/[2],
                            methodName: require/*t*/[1] || o,
                            lineNumber: +require/*t*/[3],
                            column: require/*t*/[4] ? +require/*t*/[4] : null
                        }
                    }
                    l.push(requireDynamic/*n*/)
                }
                return l
            }
        };
    module/*i*/.exports = exports/*a*/
});