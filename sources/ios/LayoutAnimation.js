__d("LayoutAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        exports/*a*/ = require/*t*/("NativeModules").RKUIManager,
        ReactPropTypes/*s*/ = require/*t*/("createStrictShapeTypeChecker"),
        NativeModules/*l*/ = require/*t*/("keyMirror"),
        createStrictShapeTypeChecker/*u*/ = NativeModules/*l*/({
            spring: !0,
            keyMirror/*linear*/: !0,
            easeInEaseOut: !0,
            easeIn: !0,
            easeOut: !0
        }),
        c = NativeModules/*l*/({
            opacity: !0,
            scaleXY: !0
        }),
        p = ReactPropTypes/*s*/({
            duration: o.number,
            delay: o.number,
            springDamping: o.number,
            initialVelocity: o.number,
            type: o.oneOf(Object.keys(createStrictShapeTypeChecker/*u*/)),
            property: o.oneOf(Object.keys(c))
        }),
        d = ReactPropTypes/*s*/({
            duration: o.number.isRequired,
            create: p,
            update: p,
            "delete": p
        }),
        h = {
            configureNext: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                d({
                    config: global/*e*/
                }, "config", "LayoutAnimation.configureNext"), exports/*a*/.configureNextLayoutAnimation(global/*e*/, require/*t*/, requireDynamic/*n*/)
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
            Types: createStrictShapeTypeChecker/*u*/,
            Properties: c,
            configChecker: d
        };
    h.Presets = {
        easeInEaseOut: h.create(.3, createStrictShapeTypeChecker/*u*/.easeInEaseOut, c.opacity),
        keyMirror/*linear*/: h.create(.5, createStrictShapeTypeChecker/*u*/.keyMirror/*linear*/, c.opacity),
        spring: {
            duration: .7,
            create: {
                type: createStrictShapeTypeChecker/*u*/.keyMirror/*linear*/,
                property: c.opacity
            },
            update: {
                type: createStrictShapeTypeChecker/*u*/.spring,
                springDamping: .4
            }
        }
    }, module/*i*/.exports = h
});