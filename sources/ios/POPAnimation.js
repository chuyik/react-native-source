__d("POPAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","getObjectValues","invariant","merge"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        NativeModules/*a*/ = t("NativeModules").RKPOPAnimationManager,
        createStrictShapeTypeChecker/*s*/ = t("createStrictShapeTypeChecker"),
        getObjectValues/*l*/ = t("getObjectValues"),
        invariant/*u*/ = t("invariant"),
        merge/*c*/ = t("merge"),
        p = NativeModules/*a*/.Types,
        d = NativeModules/*a*/.Properties,
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
            attributeChecker: createStrictShapeTypeChecker/*s*/({
                type: ReactPropTypes/*o*/.oneOf(getObjectValues/*l*/(f)),
                property: ReactPropTypes/*o*/.oneOf(getObjectValues/*l*/(h)),
                fromValue: ReactPropTypes/*o*/.any,
                toValue: ReactPropTypes/*o*/.any,
                duration: ReactPropTypes/*o*/.any,
                velocity: ReactPropTypes/*o*/.any,
                deceleration: ReactPropTypes/*o*/.any,
                springBounciness: ReactPropTypes/*o*/.any,
                dynamicsFriction: ReactPropTypes/*o*/.any,
                dynamicsMass: ReactPropTypes/*o*/.any,
                dynamicsTension: ReactPropTypes/*o*/.any
            }),
            lastUsedTag: 0,
            allocateTagForAnimation: function() {
                return ++this.lastUsedTag
            },
            createAnimation: function(e, t) {
                var n = this.allocateTagForAnimation();
                return __DEV__ && (m.attributeChecker({
                    attrs: t
                }, "attrs", "POPAnimation.createAnimation"), m.attributeChecker({
                    attrs: {
                        type: e
                    }
                }, "attrs", "POPAnimation.createAnimation")), NativeModules/*a*/.createAnimationInternal(n, e, t), n
            },
            createSpringAnimation: function(e) {
                return this.createAnimation(this.Types.spring, e)
            },
            createDecayAnimation: function(e) {
                return this.createAnimation(this.Types.decay, e)
            },
            createLinearAnimation: function(e) {
                return this.createAnimation(this.Types.linear, e)
            },
            createEaseInAnimation: function(e) {
                return this.createAnimation(this.Types.easeIn, e)
            },
            createEaseOutAnimation: function(e) {
                return this.createAnimation(this.Types.easeOut, e)
            },
            createEaseInEaseOutAnimation: function(e) {
                return this.createAnimation(this.Types.easeInEaseOut, e)
            }
        };
    if (__DEV__) {
        var g = merge/*c*/(NativeModules/*a*/.Properties, NativeModules/*a*/.Properties);
        for (var _ in g) m.Properties[_] !== NativeModules/*a*/.Properties[_] && invariant/*u*/(0, "POPAnimation doesn't copy property " + _ + " correctly");
        var y = merge/*c*/(NativeModules/*a*/.Types, NativeModules/*a*/.Types);
        for (var _ in y) m.Types[_] !== NativeModules/*a*/.Types[_] && invariant/*u*/(0, "POPAnimation doesn't copy type " + _ + " correctly")
    }
    i.exports = m
});