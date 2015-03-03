__d("FBPhotoViewerOverlay",["Image","React","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("React"),
        s = require/*t*/("StyleSheet"),
        l = require/*t*/("Text"),
        u = require/*t*/("TouchableBounce"),
        c = require/*t*/("View"),
        p = require/*t*/("fbt"),
        d = require/*t*/("ix"),
        h = a.createClass({
            displayName: "FBPhotoViewerOverlay",
            render: function() {
                return a.createElement(c, {
                    pointerEvents: c.pointerEvents.boxNone,
                    style: f.container
                }, a.createElement(u, {
                    onPress: this.props.onTapDone
                }, a.createElement(o, {
                    capInsets: {
                        left: 4,
                        top: 4,
                        right: 4,
                        bottom: 4
                    },
                    source: d("doneButtonBackground"),
                    style: f.doneContainer
                }, a.createElement(l, {
                    style: f.doneText
                }, p({
                    type: "text",
                    texts: ["Done"],
                    desc: "Done button for dismissing photo overlay"
                })))))
            }
        }),
        f = s.create({
            container: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "flex-end",
                position: "absolute"
            },
            doneContainer: {
                paddingVertical: 8,
                paddingHorizontal: 13,
                resizeMode: o.resizeMode.stretch,
                marginRight: 18,
                marginTop: 21
            },
            doneText: {
                color: "rgb(230, 230, 230)",
                fontSize: 14,
                fontWeight: "bold"
            }
        });
    module/*i*/.exports = h
});