__d("FBStickerAttachment",["PixelRatio","React","ReactGraphQL","Sticker","StyleSheet","TouchableHighlight","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var PixelRatio/*o*/ = require/*t*/("PixelRatio"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
        Sticker/*l*/ = require/*t*/("Sticker"),
        StyleSheet/*u*/ = require/*t*/("StyleSheet"),
        TouchableHighlight/*c*/ = require/*t*/("TouchableHighlight"),
        View/*p*/ = require/*t*/("View"),
        d = PixelRatio/*o*/.get(),
        h = [60 * d, 60 * d],
        f = React/*a*/.createClass({
            displayName: "FBStickerAttachment",
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("FBStickerAttachment_attachment", "StoryAttachment", [new requireLazy/*r*/.Field("media", [new requireLazy/*r*/.Field("id"), new requireLazy/*r*/.Field("image", [new requireLazy/*r*/.Field("uri"), new requireLazy/*r*/.Field("height"), new requireLazy/*r*/.Field("width")], null, [new requireLazy/*r*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new requireLazy/*r*/.Callv("sizing", ["cover-fill-cropped"])])])], null, {
                                scope: "FBStickerAttachment_attachment"
                            })
                        }(h[0], h[1])
                    }
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.media && this.props.attachment.media.image;
                if (!global/*e*/) return console.error("Tried to render an FBStickerAttachment with no image!"), React/*a*/.createElement(View/*p*/, null);
                var require/*t*/ = {
                    width: global/*e*/.width / d,
                    height: global/*e*/.height / d
                };
                return React/*a*/.createElement(TouchableHighlight/*c*/, {
                    style: require/*t*/,
                    activeOpacity: 1
                }, React/*a*/.createElement(Sticker/*l*/, {
                    fbid: this.props.attachment.media.id,
                    style: [m.stickerStyle, require/*t*/]
                }))
            }
        }),
        m = StyleSheet/*u*/.create({
            stickerStyle: {
                backgroundColor: "white"
            }
        });
    module/*i*/.exports = f
});