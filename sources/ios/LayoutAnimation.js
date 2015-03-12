__d("LayoutAnimation",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        NativeModules/*a*/ = t("NativeModules").RKUIManager,
        createStrictShapeTypeChecker/*s*/ = t("createStrictShapeTypeChecker"),
        keyMirror/*l*/ = t("keyMirror"),
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
            configureNext: function(e, t, n) {
                d({
                    config: e
                }, "config", "LayoutAnimation.configureNext"), NativeModules/*a*/.configureNextLayoutAnimation(e, t, n)
            },
            create: function(e, t, n) {
                return {
                    duration: e,
                    create: {
                        type: t,
                        property: n
                    },
                    update: {
                        type: t
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
    }, i.exports = h
});