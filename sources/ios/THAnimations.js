__d("THAnimations",["LayoutAnimation","mergeDeep"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        exports/*a*/ = require/*t*/("mergeDeep"),
        LayoutAnimation/*s*/ = {
            duration: .3,
            mergeDeep/*create*/: {
                type: o.Types.easeInEaseOut,
                property: o.Properties.opacity
            },
            update: {
                type: o.Types.easeInEaseOut
            }
        },
        l = {
            layout: {
                like: LayoutAnimation/*s*/,
                likeWithComment: exports/*a*/(LayoutAnimation/*s*/, {
                    mergeDeep/*create*/: {
                        property: o.Properties.scaleXY
                    }
                }),
                likeWithNoComments: LayoutAnimation/*s*/,
                moreComments: LayoutAnimation/*s*/,
                openPinnedPost: LayoutAnimation/*s*/,
                photoCommentPreview: exports/*a*/(LayoutAnimation/*s*/, {
                    duration: .25,
                    mergeDeep/*create*/: {
                        type: o.Types.easeOut,
                        property: o.Properties.scaleXY
                    }
                }),
                inputButtons: exports/*a*/(LayoutAnimation/*s*/, {
                    duration: .25,
                    mergeDeep/*create*/: {
                        type: o.Types.easeOut
                    },
                    update: {
                        property: o.Properties.opacity
                    }
                })
            }
        };
    for (var u in l.layout) o.configChecker(l.layout, u, "Animation.mergeDeep/*create*/");
    module/*i*/.exports = l
});