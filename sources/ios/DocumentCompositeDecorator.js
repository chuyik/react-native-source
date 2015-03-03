__d("DocumentCompositeDecorator",["fillArray"],function (global/*e*/, require/*fillArray/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        this.$DocumentCompositeDecorator_decorators = global/*e*/.slice(), exports/*this.$DocumentCompositeDecorator_componentMap*/ = {}
    }

    function a(global/*e*/, require/*fillArray/*t*/*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = require/*fillArray/*t*/*/; requireDynamic/*n*/ > requireLazy/*r*/; requireLazy/*r*/++)
            if (null != global/*e*/[requireLazy/*r*/]) return !1;
        return !0
    }

    function s(global/*e*/, require/*fillArray/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        for (var module/*i*/ = require/*fillArray/*t*/*/; requireDynamic/*n*/ > module/*i*/; module/*i*/++) global/*e*/[module/*i*/] = requireLazy/*r*/
    }
    var l = require/*fillArray/*t*/*/("fillArray");
    o.prototype.getDecorations = function(global/*e*/) {
        "use strict";
        var require/*fillArray/*t*/*/ = l(global/*e*/.getText().length, null),
            requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = exports/*this.$DocumentCompositeDecorator_componentMap*/;
        return this.$DocumentCompositeDecorator_decorators.forEach(function(module/*i*/) {
            var o = module/*i*/.getStrategy(),
                l = module/*i*/.getComponent();
            o(global/*e*/, function(global/*e*/, module/*i*/) {
                a(require/*fillArray/*t*/*/, global/*e*/, module/*i*/) && (requireLazy/*r*/[requireDynamic/*n*/] = l, s(require/*fillArray/*t*/*/, global/*e*/, module/*i*/, requireDynamic/*n*/), requireDynamic/*n*/++)
            })
        }), require/*fillArray/*t*/*/
    }, o.prototype.getComponentForKey = function(global/*e*/) {
        "use strict";
        return exports/*this.$DocumentCompositeDecorator_componentMap*/[global/*e*/]
    }, module/*i*/.exports = o
});