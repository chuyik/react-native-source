__d("LayoutAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("NativeModules").RKUIManager,
        s = require/*t*/("createStrictShapeTypeChecker"),
        l = require/*t*/("keyMirror"),
        u = l({
            spring: !0,
            linear: !0,
            easeInEaseOut: !0,
            easeIn: !0,
            easeOut: !0
        }),
        c = l({
            opacity: !0,
            scaleXY: !0
        }),
        p = s({
            duration: o.number,
            delay: o.number,
            springDamping: o.number,
            initialVelocity: o.number,
            type: o.oneOf(Object.keys(u)),
            property: o.oneOf(Object.keys(c))
        }),
        d = s({
            duration: o.number.isRequired,
            create: p,
            update: p,
            "delete": p
        }),
        h = {
            configureNext: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                d({
                    config: global/*e*/
                }, "config", "LayoutAnimation.configureNext"), a.configureNextLayoutAnimation(global/*e*/, require/*t*/, requireDynamic/*n*/)
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