__d("FBPhotoViewerOverlay",["Image","React","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        exports/*a*/ = require/*t*/("React"),
        Image/*s*/ = require/*t*/("StyleSheet"),
        React/*l*/ = require/*t*/("Text"),
        StyleSheet/*u*/ = require/*t*/("TouchableBounce"),
        Text/*c*/ = require/*t*/("View"),
        TouchableBounce/*p*/ = require/*t*/("fbt"),
        View/*d*/ = require/*t*/("ix"),
        fbt/*h*/ = exports/*a*/.createClass({
            displayName: "FBPhotoViewerOverlay",
            ix/*render*/: function() {
                return exports/*a*/.createElement(Text/*c*/, {
                    pointerEvents: Text/*c*/.pointerEvents.boxNone,
                    style: f.container
                }, exports/*a*/.createElement(StyleSheet/*u*/, {
                    onPress: this.props.onTapDone
                }, exports/*a*/.createElement(o, {
                    capInsets: {
                        left: 4,
                        top: 4,
                        right: 4,
                        bottom: 4
                    },
                    source: View/*d*/("doneButtonBackground"),
                    style: f.doneContainer
                }, exports/*a*/.createElement(React/*l*/, {
                    style: f.doneText
                }, TouchableBounce/*p*/({
                    type: "text",
                    texts: ["Done"],
                    desc: "Done button for dismissing photo overlay"
                })))))
            }
        }),
        f = Image/*s*/.create({
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
    module/*i*/.exports = fbt/*h*/
});