__d("DliteAPIConfigDefaults",["NativeModules","URI"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("NativeModules").DliteAPIConfig || {},
        a = require/*t*/("URI");
    o.graphBatchURI = new a(o.graphBatchURI), o.graphURI = new a(o.graphURI), module/*i*/.exports = o
});