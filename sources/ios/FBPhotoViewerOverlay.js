__d("FBPhotoViewerOverlay",["Image","React","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Image/*o*/ = require/*t*/("Image"),
        React/*a*/ = require/*t*/("React"),
        StyleSheet/*s*/ = require/*t*/("StyleSheet"),
        Text/*l*/ = require/*t*/("Text"),
        TouchableBounce/*u*/ = require/*t*/("TouchableBounce"),
        View/*c*/ = require/*t*/("View"),
        fbt/*p*/ = require/*t*/("fbt"),
        ix/*d*/ = require/*t*/("ix"),
        h = React/*a*/.createClass({
            displayName: "FBPhotoViewerOverlay",
            render: function() {
                return React/*a*/.createElement(View/*c*/, {
                    pointerEvents: View/*c*/.pointerEvents.boxNone,
                    style: f.container
                }, React/*a*/.createElement(TouchableBounce/*u*/, {
                    onPress: this.props.onTapDone
                }, React/*a*/.createElement(Image/*o*/, {
                    capInsets: {
                        left: 4,
                        top: 4,
                        right: 4,
                        bottom: 4
                    },
                    source: ix/*d*/("doneButtonBackground"),
                    style: f.doneContainer
                }, React/*a*/.createElement(Text/*l*/, {
                    style: f.doneText
                }, fbt/*p*/({
                    type: "text",
                    texts: ["Done"],
                    desc: "Done button for dismissing photo overlay"
                })))))
            }
        }),
        f = StyleSheet/*s*/.create({
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
                resizeMode: Image/*o*/.resizeMode.stretch,
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