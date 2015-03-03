__d("FIGColors",["cssVar","rgbToHex","hsvToHex"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("cssVar"),
        a = require/*t*/("rgbToHex"),
        s = require/*t*/("hsvToHex"),
        l = {
            accentBlue: a(88, 144, 255),
            attachmentBorder: "#cccccc",
            backgroundWash: a(233, 234, 237),
            blueGreyText: a(55, 62, 77),
            darkText: a(20, 24, 35),
            facebookBlue: a(59, 89, 152),
            green: a(70, 168, 0),
            lightBlueWashColor: a(236, 239, 245),
            lightDivider: a(200, 203, 208),
            lightGreyWash: a(246, 247, 248),
            lightText: a(173, 178, 187),
            linkText: a(78, 105, 162),
            mediumText: a(106, 113, 128),
            mobileWash: a(211, 214, 219),
            modalNavigationBarTint: a(246, 247, 248),
            navigationBarTint: s(156, 172, 128),
            red: a(218, 41, 41),
            selectedBlue: a(118, 165, 249),
            separator: a(242, 242, 242),
            tabBar: a(71, 124, 230),
            washColor: o("fbui-bluegray-5")
        };
    l.opaqueNavigationBarTint = l.facebookBlue, module/*i*/.exports = l
});