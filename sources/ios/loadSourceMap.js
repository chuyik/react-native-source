__d("loadSourceMap",["SourceMap"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        return void 0 !== a ? a : global/*e*/.RAW_SOURCE_MAP ? a = new s(global/*e*/.RAW_SOURCE_MAP) : null
    }
    var a, s = require/*t*/("SourceMap").SourceMapConsumer;
    module/*i*/.exports = o
});