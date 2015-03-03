__d("THAnimations",["LayoutAnimation","mergeDeep"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        a = require/*t*/("mergeDeep"),
        s = {
            duration: .3,
            create: {
                type: o.Types.easeInEaseOut,
                property: o.Properties.opacity
            },
            update: {
                type: o.Types.easeInEaseOut
            }
        },
        l = {
            layout: {
                like: s,
                likeWithComment: a(s, {
                    create: {
                        property: o.Properties.scaleXY
                    }
                }),
                likeWithNoComments: s,
                moreComments: s,
                openPinnedPost: s,
                photoCommentPreview: a(s, {
                    duration: .25,
                    create: {
                        type: o.Types.easeOut,
                        property: o.Properties.scaleXY
                    }
                }),
                inputButtons: a(s, {
                    duration: .25,
                    create: {
                        type: o.Types.easeOut
                    },
                    update: {
                        property: o.Properties.opacity
                    }
                })
            }
        };
    for (var u in l.layout) o.configChecker(l.layout, u, "Animation.create");
    module/*i*/.exports = l
});