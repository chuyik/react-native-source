__d("createReactIOSNativeComponentClass",["ReactElement","ReactLegacyElement","ReactIOSNativeComponent"],function (e, t, n, r, i) {
    "use strict";
    var ReactElement/*o*/ = t("ReactElement"),
        ReactLegacyElement/*a*/ = t("ReactLegacyElement"),
        ReactIOSNativeComponent/*s*/ = t("ReactIOSNativeComponent"),
        l = function(e) {
            var t = function() {};
            return t.displayName = e.uiViewClassName, t.prototype = new ReactIOSNativeComponent/*s*/(e), t.prototype.constructor = t, ReactLegacyElement/*a*/.wrapFactory(ReactElement/*o*/.createFactory(t))
        };
    i.exports = l
});