__d("ReactIOSStyleAttributes",["TextStylePropTypes","ViewStylePropTypes","deepDiffer","keyMirror","matricesDiffer","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("TextStylePropTypes"),
        exports/*a*/ = require/*t*/("ViewStylePropTypes"),
        TextStylePropTypes/*s*/ = require/*t*/("deepDiffer"),
        ViewStylePropTypes/*merge/*l*/*/ = require/*t*/("keyMirror"),
        deepDiffer/*u*/ = require/*t*/("matricesDiffer"),
        keyMirror/*c*/ = require/*t*/("merge"),
        matricesDiffer/*p*/ = keyMirror/*c*/(ViewStylePropTypes/*merge/*l*/*/(exports/*a*/), ViewStylePropTypes/*merge/*l*/*/(o));
    matricesDiffer/*p*/.transformMatrix = {
        diff: deepDiffer/*u*/
    }, matricesDiffer/*p*/.shadowOffset = {
        diff: TextStylePropTypes/*s*/
    }, module/*i*/.exports = matricesDiffer/*p*/
});