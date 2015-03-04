__d("POPAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        NativeModules/*a*/ = require/*t*/("NativeModules").RKPOPAnimationManager,
        createStrictShapeTypeChecker/*s*/ = require/*t*/("createStrictShapeTypeChecker"),
        getObjectValues/*l*/ = require/*t*/("getObjectValues"),
        invariant/*u*/ = require/*t*/("invariant"),
        merge/*c*/ = require/*t*/("merge"),
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
            createAnimation: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.allocateTagForAnimation();
                return __DEV__ && (m.attributeChecker({
                    attrs: require/*t*/
                }, "attrs", "POPAnimation.createAnimation"), m.attributeChecker({
                    attrs: {
                        type: global/*e*/
                    }
                }, "attrs", "POPAnimation.createAnimation")), NativeModules/*a*/.createAnimationInternal(requireDynamic/*n*/, global/*e*/, require/*t*/), requireDynamic/*n*/
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
        var g = merge/*c*/(NativeModules/*a*/.Properties, NativeModules/*a*/.Properties);
        for (var _ in g) m.Properties[_] !== NativeModules/*a*/.Properties[_] && invariant/*u*/(0, "POPAnimation doesn'require/*t*/ copy property " + _ + " correctly");
        var y = merge/*c*/(NativeModules/*a*/.Types, NativeModules/*a*/.Types);
        for (var _ in y) m.Types[_] !== NativeModules/*a*/.Types[_] && invariant/*u*/(0, "POPAnimation doesn'require/*t*/ copy type " + _ + " correctly")
    }
    module/*i*/.exports = m
});