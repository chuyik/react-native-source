__d("DocumentCompositeDecorator",["fillArray"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        this.$DocumentCompositeDecorator_decorators = global/*e*/.slice(), this.$DocumentCompositeDecorator_componentMap = {}
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = require/*t*/; requireDynamic/*n*/ > requireLazy/*r*/; requireLazy/*r*/++)
            if (null != global/*e*/[requireLazy/*r*/]) return !1;
        return !0
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        for (var module/*i*/ = require/*t*/; requireDynamic/*n*/ > module/*i*/; module/*i*/++) global/*e*/[module/*i*/] = requireLazy/*r*/
    }
    var fillArray/*l*/ = require/*t*/("fillArray");
    o.prototype.getDecorations = function(global/*e*/) {
        "use strict";
        var require/*t*/ = fillArray/*l*/(global/*e*/.getText().length, null),
            requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = this.$DocumentCompositeDecorator_componentMap;
        return this.$DocumentCompositeDecorator_decorators.forEach(function(module/*i*/) {
            var o = module/*i*/.getStrategy(),
                fillArray/*l*/ = module/*i*/.getComponent();
            o(global/*e*/, function(global/*e*/, module/*i*/) {
                a(require/*t*/, global/*e*/, module/*i*/) && (requireLazy/*r*/[requireDynamic/*n*/] = fillArray/*l*/, s(require/*t*/, global/*e*/, module/*i*/, requireDynamic/*n*/), requireDynamic/*n*/++)
            })
        }), require/*t*/
    }, o.prototype.getComponentForKey = function(global/*e*/) {
        "use strict";
        return this.$DocumentCompositeDecorator_componentMap[global/*e*/]
    }, module/*i*/.exports = o
});