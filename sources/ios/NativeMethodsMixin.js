__d("NativeMethodsMixin",["NativeModules","NativeModulesDeprecated","TextInputState","flattenStyle","invariant","mergeFast"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (void 0 !== t.styles) {
            var n = e._owner || null,
                r = e.constructor.displayName,
                i = "`styles` is not NativeModules/*a*/ supported property of `" + r + "`, did you mean `style` (singular)?";
            throw n && n.constructor && n.constructor.displayName && (i += "\n\nCheck the `" + n.constructor.displayName + "` parent  component."), new Error(i)
        }
    }
    var NativeModules/*a*/ = t("NativeModules"),
        NativeModulesDeprecated/*s*/ = t("NativeModulesDeprecated"),
        l = NativeModules/*a*/.RKUIManager,
        u = NativeModulesDeprecated/*s*/.RKUIManager,
        c = NativeModulesDeprecated/*s*/.RKPOPAnimationManager,
        TextInputState/*p*/ = t("TextInputState"),
        flattenStyle/*d*/ = t("flattenStyle"),
        invariant/*h*/ = t("invariant"),
        mergeFast/*f*/ = t("mergeFast"),
        m = function(e, t) {
            t || invariant/*h*/(0, e + ' must be called with NativeModules/*a*/ valid animation ID returned from POPAnimation.createAnimation, received: "' + t + '"')
        },
        g = {
            addAnimation: function(e, t) {
                m("addAnimation", e), c.addAnimation(this.getNodeHandle(), e, t)
            },
            removeAnimation: function(e) {
                m("removeAnimation", e), c.removeAnimation(this.getNodeHandle(), e)
            },
            measure: function(e) {
                u.measure(this.getNodeHandle(), e)
            },
            measureLayout: function(e, t, n) {
                l.measureLayout(this.getNodeHandle(), e, n, t)
            },
            setNativeProps: function(e) {
                var t = !0;
                for (var n in e)
                    if ("style" !== n) {
                        t = !1;
                        break
                    }
                var r = flattenStyle/*d*/(e.style),
                    i = null;
                i = t ? r : r ? mergeFast/*f*/(e, r) : e, u.updateView(this.getNodeHandle(), this.viewConfig.uiViewClassName, i)
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
    }, g.componentWillReceiveProps = function(e) {
        o(this, e)
    }), i.exports = g
});