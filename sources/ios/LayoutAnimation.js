__d("LayoutAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        NativeModules/*a*/ = require/*t*/("NativeModules").RKUIManager,
        createStrictShapeTypeChecker/*s*/ = require/*t*/("createStrictShapeTypeChecker"),
        keyMirror/*l*/ = require/*t*/("keyMirror"),
        u = keyMirror/*l*/({
            spring: !0,
            linear: !0,
            easeInEaseOut: !0,
            easeIn: !0,
            easeOut: !0
        }),
        c = keyMirror/*l*/({
            opacity: !0,
            scaleXY: !0
        }),
        p = createStrictShapeTypeChecker/*s*/({
            duration: ReactPropTypes/*o*/.number,
            delay: ReactPropTypes/*o*/.number,
            springDamping: ReactPropTypes/*o*/.number,
            initialVelocity: ReactPropTypes/*o*/.number,
            type: ReactPropTypes/*o*/.oneOf(Object.keys(u)),
            property: ReactPropTypes/*o*/.oneOf(Object.keys(c))
        }),
        d = createStrictShapeTypeChecker/*s*/({
            duration: ReactPropTypes/*o*/.number.isRequired,
            create: p,
            update: p,
            "delete": p
        }),
        h = {
            configureNext: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                d({
                    config: global/*e*/
                }, "config", "LayoutAnimation.configureNext"), NativeModules/*a*/.configureNextLayoutAnimation(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            create: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                return {
                    duration: global/*e*/,
                    create: {
                        type: require/*t*/,
                        property: requireDynamic/*n*/
                    },
                    update: {
                        type: require/*t*/
                    }
                }
            },
            Types: u,
            Properties: c,
            configChecker: d
        };
    h.Presets = {
        easeInEaseOut: h.create(.3, u.easeInEaseOut, c.opacity),
        linear: h.create(.5, u.linear, c.opacity),
        spring: {
            duration: .7,
            create: {
                type: u.linear,
                property: c.opacity
            },
            update: {
                type: u.spring,
                springDamping: .4
            }
        }
    }, module/*i*/.exports = h
});