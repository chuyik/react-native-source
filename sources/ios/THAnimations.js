__d("THAnimations",["LayoutAnimation","mergeDeep"],function (e, t, n, r, i) {
    "use strict";
    var LayoutAnimation/*o*/ = t("LayoutAnimation"),
        mergeDeep/*a*/ = t("mergeDeep"),
        s = {
            duration: .3,
            create: {
                type: LayoutAnimation/*o*/.Types.easeInEaseOut,
                property: LayoutAnimation/*o*/.Properties.opacity
            },
            update: {
                type: LayoutAnimation/*o*/.Types.easeInEaseOut
            }
        },
        l = {
            layout: {
                like: s,
                likeWithComment: mergeDeep/*a*/(s, {
                    create: {
                        property: LayoutAnimation/*o*/.Properties.scaleXY
                    }
                }),
                likeWithNoComments: s,
                moreComments: s,
                openPinnedPost: s,
                photoCommentPreview: mergeDeep/*a*/(s, {
                    duration: .25,
                    create: {
                        type: LayoutAnimation/*o*/.Types.easeOut,
                        property: LayoutAnimation/*o*/.Properties.scaleXY
                    }
                }),
                inputButtons: mergeDeep/*a*/(s, {
                    duration: .25,
                    create: {
                        type: LayoutAnimation/*o*/.Types.easeOut
                    },
                    update: {
                        property: LayoutAnimation/*o*/.Properties.opacity
                    }
                })
            }
        };
    for (var u in l.layout) LayoutAnimation/*o*/.configChecker(l.layout, u, "Animation.create");
    i.exports = l
});