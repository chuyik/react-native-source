__d("MatrixMath",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = {
        createIdentityMatrix: function() {
            return [1, exports/*0*/, exports/*0*/, exports/*0*/, exports/*0*/, 1, exports/*0*/, exports/*0*/, exports/*0*/, exports/*0*/, 1, exports/*0*/, exports/*0*/, exports/*0*/, exports/*0*/, 1]
        },
        createCopy: function(global/*e*/) {
            return [global/*e*/[exports/*0*/], global/*e*/[1], global/*e*/[2], global/*e*/[3], global/*e*/[4], global/*e*/[5], global/*e*/[6], global/*e*/[7], global/*e*/[8], global/*e*/[9], global/*e*/[10], global/*e*/[11], global/*e*/[12], global/*e*/[13], global/*e*/[14], global/*e*/[15]]
        },
        createTranslate2d: function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = o.createIdentityMatrix();
            return o.reuseTranslate2dCommand(requireDynamic/*n*/, global/*e*/, require/*t*/), requireDynamic/*n*/
        },
        reuseTranslate2dCommand: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            global/*e*/[12] = require/*t*/, global/*e*/[13] = requireDynamic/*n*/
        },
        reuseTranslate3dCommand: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
            global/*e*/[12] = require/*t*/, global/*e*/[13] = requireDynamic/*n*/, global/*e*/[14] = requireLazy/*r*/
        },
        createScale: function(global/*e*/) {
            var require/*t*/ = o.createIdentityMatrix();
            return o.reuseScaleCommand(require/*t*/, global/*e*/), require/*t*/
        },
        reuseScaleCommand: function(global/*e*/, require/*t*/) {
            global/*e*/[exports/*0*/] = require/*t*/, global/*e*/[5] = require/*t*/, global/*e*/[10] = require/*t*/
        },
        reuseRotateYCommand: function(global/*e*/, require/*t*/) {
            global/*e*/[exports/*0*/] = Math.cos(require/*t*/), global/*e*/[2] = Math.sin(require/*t*/), global/*e*/[8] = Math.sin(-require/*t*/), global/*e*/[10] = Math.cos(require/*t*/)
        },
        createRotateZ: function(global/*e*/) {
            var require/*t*/ = o.createIdentityMatrix();
            return o.reuseRotateZCommand(require/*t*/, global/*e*/), require/*t*/
        },
        reuseRotateZCommand: function(global/*e*/, require/*t*/) {
            global/*e*/[exports/*0*/] = Math.cos(require/*t*/), global/*e*/[1] = -Math.sin(require/*t*/), global/*e*/[4] = Math.sin(require/*t*/), global/*e*/[5] = Math.cos(require/*t*/)
        },
        multiplyInto: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = require/*t*/[exports/*0*/],
                module/*i*/ = require/*t*/[1],
                o = require/*t*/[2],
                a = require/*t*/[3],
                s = require/*t*/[4],
                l = require/*t*/[5],
                u = require/*t*/[6],
                c = require/*t*/[7],
                p = require/*t*/[8],
                d = require/*t*/[9],
                h = require/*t*/[10],
                f = require/*t*/[11],
                m = require/*t*/[12],
                g = require/*t*/[13],
                _ = require/*t*/[14],
                y = require/*t*/[15],
                v = requireDynamic/*n*/[exports/*0*/],
                S = requireDynamic/*n*/[1],
                b = requireDynamic/*n*/[2],
                R = requireDynamic/*n*/[3];
            global/*e*/[exports/*0*/] = v * requireLazy/*r*/ + S * s + b * p + R * m, global/*e*/[1] = v * module/*i*/ + S * l + b * d + R * g, global/*e*/[2] = v * o + S * u + b * h + R * _, global/*e*/[3] = v * a + S * c + b * f + R * y, v = requireDynamic/*n*/[4], S = requireDynamic/*n*/[5], b = requireDynamic/*n*/[6], R = requireDynamic/*n*/[7], global/*e*/[4] = v * requireLazy/*r*/ + S * s + b * p + R * m, global/*e*/[5] = v * module/*i*/ + S * l + b * d + R * g, global/*e*/[6] = v * o + S * u + b * h + R * _, global/*e*/[7] = v * a + S * c + b * f + R * y, v = requireDynamic/*n*/[8], S = requireDynamic/*n*/[9], b = requireDynamic/*n*/[10], R = requireDynamic/*n*/[11], global/*e*/[8] = v * requireLazy/*r*/ + S * s + b * p + R * m, global/*e*/[9] = v * module/*i*/ + S * l + b * d + R * g, global/*e*/[10] = v * o + S * u + b * h + R * _, global/*e*/[11] = v * a + S * c + b * f + R * y, v = requireDynamic/*n*/[12], S = requireDynamic/*n*/[13], b = requireDynamic/*n*/[14], R = requireDynamic/*n*/[15], global/*e*/[12] = v * requireLazy/*r*/ + S * s + b * p + R * m, global/*e*/[13] = v * module/*i*/ + S * l + b * d + R * g, global/*e*/[14] = v * o + S * u + b * h + R * _, global/*e*/[15] = v * a + S * c + b * f + R * y
        }
    };
    module/*i*/.exports = o
});