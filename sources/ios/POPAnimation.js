__d("POPAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("NativeModules").RKPOPAnimationManager,
        s = require/*t*/("createStrictShapeTypeChecker"),
        l = require/*t*/("getObjectValues"),
        u = require/*t*/("invariant"),
        c = require/*t*/("merge"),
        p = a.Types,
        d = a.Properties,
        h = {
            bounds: d.bounds,
            opacity: d.opacity,
            position: d.position,
            positionX: d.positionX,
            positionY: d.positionY,
            zPosition: d.zPosition,
            rotation: d.rotation,
            rotationX: d.rotationX,
            rotationY: d.rotationY,
            scaleX: d.scaleX,
            scaleXY: d.scaleXY,
            scaleY: d.scaleY,
            shadowColor: d.shadowColor,
            shadowOffset: d.shadowOffset,
            shadowOpacity: d.shadowOpacity,
            shadowRadius: d.shadowRadius,
            size: d.size,
            subscaleXY: d.subscaleXY,
            subtranslationX: d.subtranslationX,
            subtranslationXY: d.subtranslationXY,
            subtranslationY: d.subtranslationY,
            subtranslationZ: d.subtranslationZ,
            translationX: d.translationX,
            translationXY: d.translationXY,
            translationY: d.translationY,
            translationZ: d.translationZ
        },
        f = {
            decay: p.decay,
            easeIn: p.easeIn,
            easeInEaseOut: p.easeInEaseOut,
            easeOut: p.easeOut,
            linear: p.linear,
            spring: p.spring
        },
        m = {
            Types: f,
            Properties: h,
            attributeChecker: s({
                type: o.oneOf(l(f)),
                property: o.oneOf(l(h)),
                fromValue: o.any,
                toValue: o.any,
                duration: o.any,
                velocity: o.any,
                deceleration: o.any,
                springBounciness: o.any,
                dynamicsFriction: o.any,
                dynamicsMass: o.any,
                dynamicsTension: o.any
            }),
            lastUsedTag: 0,
            allocateTagForAnimation: function() {
                return ++this.lastUsedTag
            },
            createAnimation: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.allocateTagForAnimation();
                return __DEV__ && (m.attributeChecker({
                    attrs: require/*t*/
                }, "attrs", "POPAnimation.createAnimation"), m.attributeChecker({
                    attrs: {
                        type: global/*e*/
                    }
                }, "attrs", "POPAnimation.createAnimation")), a.createAnimationInternal(requireDynamic/*n*/, global/*e*/, require/*t*/), requireDynamic/*n*/
            },
            createSpringAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.spring, global/*e*/)
            },
            createDecayAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.decay, global/*e*/)
            },
            createLinearAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.linear, global/*e*/)
            },
            createEaseInAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.easeIn, global/*e*/)
            },
            createEaseOutAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.easeOut, global/*e*/)
            },
            createEaseInEaseOutAnimation: function(global/*e*/) {
                return this.createAnimation(this.Types.easeInEaseOut, global/*e*/)
            }
        };
    if (__DEV__) {
        var g = c(a.Properties, a.Properties);
        for (var _ in g) m.Properties[_] !== a.Properties[_] && u(0, "POPAnimation doesn'require/*t*/ copy property " + _ + " correctly");
        var y = c(a.Types, a.Types);
        for (var _ in y) m.Types[_] !== a.Types[_] && u(0, "POPAnimation doesn'require/*t*/ copy type " + _ + " correctly")
    }
    module/*i*/.exports = m
});