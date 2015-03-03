__d("createReactIOSNativeComponentClass",["ReactElement","ReactLegacyElement","ReactIOSNativeComponent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactElement"),
        a = require/*t*/("ReactLegacyElement"),
        s = require/*t*/("ReactIOSNativeComponent"),
        l = function(global/*e*/) {
            var require/*t*/ = function() {};
            return require/*t*/.displayName = global/*e*/.uiViewClassName, require/*t*/.prototype = new s(global/*e*/), require/*t*/.prototype.constructor = require/*t*/, a.wrapFactory(o.createFactory(require/*t*/))
        };
    module/*i*/.exports = l
});