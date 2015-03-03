__d("ReactIOSStyleAttributes",["TextStylePropTypes","ViewStylePropTypes","deepDiffer","keyMirror","matricesDiffer","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("TextStylePropTypes"),
        a = require/*t*/("ViewStylePropTypes"),
        s = require/*t*/("deepDiffer"),
        l = require/*t*/("keyMirror"),
        u = require/*t*/("matricesDiffer"),
        c = require/*t*/("merge"),
        p = c(l(a), l(o));
    p.transformMatrix = {
        diff: u
    }, p.shadowOffset = {
        diff: s
    }, module/*i*/.exports = p
});