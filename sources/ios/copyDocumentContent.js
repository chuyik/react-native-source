__d("copyDocumentContent",["DocumentContent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ ? new a(global/*e*/.getText(), global/*e*/.getInlineStyles().slice(0), global/*e*/.getBlockStyles().slice(0), global/*e*/.getEntities().slice(0)) : new a
    }
    var a = require/*t*/("DocumentContent");
    module/*i*/.exports = o
});