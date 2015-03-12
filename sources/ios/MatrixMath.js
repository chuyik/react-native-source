__d("MatrixMath",[],function (e, t, n, r, i) {
    "use strict";
    var o = {
        createIdentityMatrix: function() {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        },
        createCopy: function(e) {
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
        },
        createTranslate2d: function(e, t) {
            var n = o.createIdentityMatrix();
            return o.reuseTranslate2dCommand(n, e, t), n
        },
        reuseTranslate2dCommand: function(e, t, n) {
            e[12] = t, e[13] = n
        },
        reuseTranslate3dCommand: function(e, t, n, r) {
            e[12] = t, e[13] = n, e[14] = r
        },
        createScale: function(e) {
            var t = o.createIdentityMatrix();
            return o.reuseScaleCommand(t, e), t
        },
        reuseScaleCommand: function(e, t) {
            e[0] = t, e[5] = t, e[10] = t
        },
        reuseRotateYCommand: function(e, t) {
            e[0] = Math.cos(t), e[2] = Math.sin(t), e[8] = Math.sin(-t), e[10] = Math.cos(t)
        },
        createRotateZ: function(e) {
            var t = o.createIdentityMatrix();
            return o.reuseRotateZCommand(t, e), t
        },
        reuseRotateZCommand: function(e, t) {
            e[0] = Math.cos(t), e[1] = -Math.sin(t), e[4] = Math.sin(t), e[5] = Math.cos(t)
        },
        multiplyInto: function(e, t, n) {
            var r = t[0],
                i = t[1],
                o = t[2],
                a = t[3],
                s = t[4],
                l = t[5],
                u = t[6],
                c = t[7],
                p = t[8],
                d = t[9],
                h = t[10],
                f = t[11],
                m = t[12],
                g = t[13],
                _ = t[14],
                y = t[15],
                v = n[0],
                S = n[1],
                b = n[2],
                R = n[3];
            e[0] = v * r + S * s + b * p + R * m, e[1] = v * i + S * l + b * d + R * g, e[2] = v * o + S * u + b * h + R * _, e[3] = v * a + S * c + b * f + R * y, v = n[4], S = n[5], b = n[6], R = n[7], e[4] = v * r + S * s + b * p + R * m, e[5] = v * i + S * l + b * d + R * g, e[6] = v * o + S * u + b * h + R * _, e[7] = v * a + S * c + b * f + R * y, v = n[8], S = n[9], b = n[10], R = n[11], e[8] = v * r + S * s + b * p + R * m, e[9] = v * i + S * l + b * d + R * g, e[10] = v * o + S * u + b * h + R * _, e[11] = v * a + S * c + b * f + R * y, v = n[12], S = n[13], b = n[14], R = n[15], e[12] = v * r + S * s + b * p + R * m, e[13] = v * i + S * l + b * d + R * g, e[14] = v * o + S * u + b * h + R * _, e[15] = v * a + S * c + b * f + R * y
        }
    };
    i.exports = o
});