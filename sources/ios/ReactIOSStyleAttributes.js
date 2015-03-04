__d("ReactIOSStyleAttributes",["TextStylePropTypes","ViewStylePropTypes","deepDiffer","keyMirror","matricesDiffer","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var TextStylePropTypes/*o*/ = require/*t*/("TextStylePropTypes"),
        ViewStylePropTypes/*a*/ = require/*t*/("ViewStylePropTypes"),
        deepDiffer/*s*/ = require/*t*/("deepDiffer"),
        keyMirror/*l*/ = require/*t*/("keyMirror"),
        matricesDiffer/*u*/ = require/*t*/("matricesDiffer"),
        merge/*c*/ = require/*t*/("merge"),
        p = merge/*c*/(keyMirror/*l*/(ViewStylePropTypes/*a*/), keyMirror/*l*/(TextStylePropTypes/*o*/));
    p.transformMatrix = {
        diff: matricesDiffer/*u*/
    }, p.shadowOffset = {
        diff: deepDiffer/*s*/
    }, module/*i*/.exports = p
});