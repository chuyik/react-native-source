__d("createReactIOSNativeComponentClass",["ReactElement","ReactLegacyElement","ReactIOSNativeComponent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactElement/*o*/ = require/*t*/("ReactElement"),
        ReactLegacyElement/*a*/ = require/*t*/("ReactLegacyElement"),
        ReactIOSNativeComponent/*s*/ = require/*t*/("ReactIOSNativeComponent"),
        l = function(global/*e*/) {
            var require/*t*/ = function() {};
            return require/*t*/.displayName = global/*e*/.uiViewClassName, require/*t*/.prototype = new ReactIOSNativeComponent/*s*/(global/*e*/), require/*t*/.prototype.constructor = require/*t*/, ReactLegacyElement/*a*/.wrapFactory(ReactElement/*o*/.createFactory(require/*t*/))
        };
    module/*i*/.exports = l
});