__d("copyDocumentContent",["DocumentContent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ ? new DocumentContent/*a*/(global/*e*/.getText(), global/*e*/.getInlineStyles().slice(0), global/*e*/.getBlockStyles().slice(0), global/*e*/.getEntities().slice(0)) : new DocumentContent/*a*/
    }
    var DocumentContent/*a*/ = require/*t*/("DocumentContent");
    module/*i*/.exports = o
});