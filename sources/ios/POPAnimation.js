__d("POPAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        exports/*a*/ = require/*t*/("NativeModules").RKPOPAnimationManager,
        ReactPropTypes/*s*/ = require/*t*/("createStrictShapeTypeChecker"),
        NativeModules/*l*/ = require/*t*/("getObjectValues"),
        createStrictShapeTypeChecker/*u*/ = require/*t*/("invariant"),
        getObjectValues/*c*/ = require/*t*/("merge"),
        invariant/*p*/ = exports/*a*/.Types,
        merge/*d*/ = exports/*a*/.Properties,
        h = {
            bounds: merge/*d*/.bounds,
            opacity: merge/*d*/.opacity,
            position: merge/*d*/.position,
            positionX: merge/*d*/.positionX,
            positionY: merge/*d*/.positionY,
            zPosition: merge/*d*/.zPosition,
            rotation: merge/*d*/.rotation,
            rotationX: merge/*d*/.rotationX,
            rotationY: merge/*d*/.rotationY,
            scaleX: merge/*d*/.scaleX,
            scaleXY: merge/*d*/.scaleXY,
            scaleY: merge/*d*/.scaleY,
            shadowColor: merge/*d*/.shadowColor,
            shadowOffset: merge/*d*/.shadowOffset,
            shadowOpacity: merge/*d*/.shadowOpacity,
            shadowRadius: merge/*d*/.shadowRadius,
            size: merge/*d*/.size,
            subscaleXY: merge/*d*/.subscaleXY,
            subtranslationX: merge/*d*/.subtranslationX,
            subtranslationXY: merge/*d*/.subtranslationXY,
            subtranslationY: merge/*d*/.subtranslationY,
            subtranslationZ: merge/*d*/.subtranslationZ,
            translationX: merge/*d*/.translationX,
            translationXY: merge/*d*/.translationXY,
            translationY: merge/*d*/.translationY,
            translationZ: merge/*d*/.translationZ
        },
        f = {
            decay: invariant/*p*/.decay,
            easeIn: invariant/*p*/.easeIn,
            easeInEaseOut: invariant/*p*/.easeInEaseOut,
            easeOut: invariant/*p*/.easeOut,
            linear: invariant/*p*/.linear,
            spring: invariant/*p*/.spring
        },
        m = {
            Types: f,
            Properties: h,
            attributeChecker: ReactPropTypes/*s*/({
                type: o.oneOf(NativeModules/*l*/(f)),
                property: o.oneOf(NativeModules/*l*/(h)),
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
                }, "attrs", "POPAnimation.createAnimation")), exports/*a*/.createAnimationInternal(requireDynamic/*n*/, global/*e*/, require/*t*/), requireDynamic/*n*/
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
        var g = getObjectValues/*c*/(exports/*a*/.Properties, exports/*a*/.Properties);
        for (var _ in g) m.Properties[_] !== exports/*a*/.Properties[_] && createStrictShapeTypeChecker/*u*/(0, "POPAnimation doesn'require/*t*/ copy property " + _ + " correctly");
        var y = getObjectValues/*c*/(exports/*a*/.Types, exports/*a*/.Types);
        for (var _ in y) m.Types[_] !== exports/*a*/.Types[_] && createStrictShapeTypeChecker/*u*/(0, "POPAnimation doesn'require/*t*/ copy type " + _ + " correctly")
    }
    module/*i*/.exports = m
});