__d("DliteAPIConfigDefaults",["NativeModules","URI"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModules/*o*/ = require/*t*/("NativeModules").DliteAPIConfig || {},
        URI/*a*/ = require/*t*/("URI");
    NativeModules/*o*/.graphBatchURI = new URI/*a*/(NativeModules/*o*/.graphBatchURI), NativeModules/*o*/.graphURI = new URI/*a*/(NativeModules/*o*/.graphURI), module/*i*/.exports = NativeModules/*o*/
});