__d("loadSourceMap",["SourceMap"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        return void 0 !== a ? a : e.RAW_SOURCE_MAP ? a = new SourceMap/*s*/(e.RAW_SOURCE_MAP) : null
    }
    var a, SourceMap/*s*/ = t("SourceMap").SourceMapConsumer;
    i.exports = o
});