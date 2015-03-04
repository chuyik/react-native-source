__d("NativeMethodsMixin",["NativeModules","NativeModulesDeprecated","TextInputState","flattenStyle","invariant","mergeFast"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        if (void 0 !== require/*t*/.styles) {
            var requireDynamic/*n*/ = global/*e*/._owner || null,
                requireLazy/*r*/ = global/*e*/.constructor.displayName,
                module/*i*/ = "`styles` is not NativeModules/*a*/ supported property of `" + requireLazy/*r*/ + "`, did you mean `style` (singular)?";
            throw requireDynamic/*n*/ && requireDynamic/*n*/.constructor && requireDynamic/*n*/.constructor.displayName && (module/*i*/ += "\requireDynamic/*n*/\nCheck the `" + requireDynamic/*n*/.constructor.displayName + "` parent  component."), new Error(module/*i*/)
        }
    }
    var NativeModules/*a*/ = require/*t*/("NativeModules"),
        NativeModulesDeprecated/*s*/ = require/*t*/("NativeModulesDeprecated"),
        l = NativeModules/*a*/.RKUIManager,
        u = NativeModulesDeprecated/*s*/.RKUIManager,
        c = NativeModulesDeprecated/*s*/.RKPOPAnimationManager,
        TextInputState/*p*/ = require/*t*/("TextInputState"),
        flattenStyle/*d*/ = require/*t*/("flattenStyle"),
        invariant/*h*/ = require/*t*/("invariant"),
        mergeFast/*f*/ = require/*t*/("mergeFast"),
        m = function(global/*e*/, require/*t*/) {
            require/*t*/ || invariant/*h*/(0, global/*e*/ + ' must be called with NativeModules/*a*/ valid animation ID returned from POPAnimation.createAnimation, received: "' + require/*t*/ + '"')
        },
        g = {
            addAnimation: function(global/*e*/, require/*t*/) {
                m("addAnimation", global/*e*/), c.addAnimation(this.getNodeHandle(), global/*e*/, require/*t*/)
            },
            removeAnimation: function(global/*e*/) {
                m("removeAnimation", global/*e*/), c.removeAnimation(this.getNodeHandle(), global/*e*/)
            },
            measure: function(global/*e*/) {
                u.measure(this.getNodeHandle(), global/*e*/)
            },
            measureLayout: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                l.measureLayout(this.getNodeHandle(), global/*e*/, requireDynamic/*n*/, require/*t*/)
            },
            setNativeProps: function(global/*e*/) {
                var require/*t*/ = !0;
                for (var requireDynamic/*n*/ in global/*e*/)
                    if ("style" !== requireDynamic/*n*/) {
                        require/*t*/ = !1;
                        break
                    }
                var requireLazy/*r*/ = flattenStyle/*d*/(global/*e*/.style),
                    module/*i*/ = null;
                module/*i*/ = require/*t*/ ? requireLazy/*r*/ : requireLazy/*r*/ ? mergeFast/*f*/(global/*e*/, requireLazy/*r*/) : global/*e*/, u.updateView(this.getNodeHandle(), this.viewConfig.uiViewClassName, module/*i*/)
            },
            focus: function() {
                TextInputState/*p*/.focusTextInput(this.getNodeHandle())
            },
            blur: function() {
                TextInputState/*p*/.blurTextInput(this.getNodeHandle())
            }
        };
    __DEV__ && ((g.componentWillMount || g.componentWillReceiveProps) && invariant/*h*/(0, "Do not override existing functions."), g.componentWillMount = function() {
        o(this, this.props)
    }, g.componentWillReceiveProps = function(global/*e*/) {
        o(this, global/*e*/)
    }), module/*i*/.exports = g
});