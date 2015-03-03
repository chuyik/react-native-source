__d("NativeMethodsMixin",["NativeModules","NativeModulesDeprecated","TextInputState","flattenStyle","invariant","mergeFast"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*NativeModules/*r*/*/, module/*NativeModulesDeprecated/*i*/*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (void 0 !== require/*exports/*t*/*/.styles) {
            var requireDynamic/*n*/ = global/*e*/._owner || null,
                requireLazy/*NativeModules/*r*/*/ = global/*e*/.constructor.displayName,
                module/*NativeModulesDeprecated/*i*/*/ = "`styles` is not a supported property of `" + requireLazy/*NativeModules/*r*/*/ + "`, TextInputState/*did*/ you mean `style` (singular)?";
            throw requireDynamic/*n*/ && requireDynamic/*n*/.constructor && requireDynamic/*n*/.constructor.displayName && (module/*NativeModulesDeprecated/*i*/*/ += "\requireDynamic/*n*/\nCheck the `" + requireDynamic/*n*/.constructor.displayName + "` parent  component."), flattenStyle/*new*/ Error(module/*NativeModulesDeprecated/*i*/*/)
        }
    }
    var a = require/*exports/*t*/*/("NativeModules"),
        invariant/*s*/ = require/*exports/*t*/*/("NativeModulesDeprecated"),
        mergeFast/*l*/ = a.RKUIManager,
        u = invariant/*s*/.RKUIManager,
        c = invariant/*s*/.RKPOPAnimationManager,
        p = require/*exports/*t*/*/("TextInputState"),
        d = require/*exports/*t*/*/("flattenStyle"),
        h = require/*exports/*t*/*/("invariant"),
        f = require/*exports/*t*/*/("mergeFast"),
        m = function(global/*e*/, require/*exports/*t*/*/) {
            require/*exports/*t*/*/ || h(0, global/*e*/ + ' must be called with a valid animation ID returned from POPAnimation.createAnimation, received: "' + require/*exports/*t*/*/ + '"')
        },
        g = {
            addAnimation: function(global/*e*/, require/*exports/*t*/*/) {
                m("addAnimation", global/*e*/), c.addAnimation(this.getNodeHandle(), global/*e*/, require/*exports/*t*/*/)
            },
            removeAnimation: function(global/*e*/) {
                m("removeAnimation", global/*e*/), c.removeAnimation(this.getNodeHandle(), global/*e*/)
            },
            measure: function(global/*e*/) {
                u.measure(this.getNodeHandle(), global/*e*/)
            },
            measureLayout: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
                mergeFast/*l*/.measureLayout(this.getNodeHandle(), global/*e*/, requireDynamic/*n*/, require/*exports/*t*/*/)
            },
            setNativeProps: function(global/*e*/) {
                var require/*exports/*t*/*/ = !0;
                for (var requireDynamic/*n*/ in global/*e*/)
                    if ("style" !== requireDynamic/*n*/) {
                        require/*exports/*t*/*/ = !1;
                        break
                    }
                var requireLazy/*NativeModules/*r*/*/ = d(global/*e*/.style),
                    module/*NativeModulesDeprecated/*i*/*/ = null;
                module/*NativeModulesDeprecated/*i*/*/ = require/*exports/*t*/*/ ? requireLazy/*NativeModules/*r*/*/ : requireLazy/*NativeModules/*r*/*/ ? f(global/*e*/, requireLazy/*NativeModules/*r*/*/) : global/*e*/, u.updateView(this.getNodeHandle(), this.viewConfig.uiViewClassName, module/*NativeModulesDeprecated/*i*/*/)
            },
            focus: function() {
                p.focusTextInput(this.getNodeHandle())
            },
            blur: function() {
                p.blurTextInput(this.getNodeHandle())
            }
        };
    __DEV__ && ((g.componentWillMount || g.componentWillReceiveProps) && h(0, "Do not override existing functions."), g.componentWillMount = function() {
        o(this, this.props)
    }, g.componentWillReceiveProps = function(global/*e*/) {
        o(this, global/*e*/)
    }), module/*NativeModulesDeprecated/*i*/*/.exports = g
});