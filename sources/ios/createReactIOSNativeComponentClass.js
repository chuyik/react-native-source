__d("createReactIOSNativeComponentClass",["ReactElement","ReactLegacyElement","ReactIOSNativeComponent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactElement"),
        exports/*a*/ = require/*t*/("ReactLegacyElement"),
        ReactElement/*s*/ = require/*t*/("ReactIOSNativeComponent"),
        ReactLegacyElement/*l*/ = function(global/*e*/) {
            var require/*t*/ = function() {};
            return require/*t*/.displayName = global/*e*/.uiViewClassName, require/*t*/.prototype = new ReactElement/*s*/(global/*e*/), require/*t*/.prototype.constructor = require/*t*/, exports/*a*/.wrapFactory(o.createFactory(require/*t*/))
        };
    module/*i*/.exports = ReactLegacyElement/*l*/
});