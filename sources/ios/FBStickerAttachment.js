__d("FBStickerAttachment",["PixelRatio","React","ReactGraphQL","Sticker","StyleSheet","TouchableHighlight","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("PixelRatio"),
        exports/*a*/ = require/*t*/("React"),
        PixelRatio/*s*/ = require/*t*/("ReactGraphQL"),
        React/*l*/ = require/*t*/("Sticker"),
        ReactGraphQL/*u*/ = require/*t*/("StyleSheet"),
        Sticker/*c*/ = require/*t*/("TouchableHighlight"),
        StyleSheet/*p*/ = require/*t*/("View"),
        TouchableHighlight/*d*/ = o.get(),
        View/*h*/ = [60 * TouchableHighlight/*d*/, 60 * TouchableHighlight/*d*/],
        f = exports/*a*/.createClass({
            displayName: "FBStickerAttachment",
            mixins: [PixelRatio/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("FBStickerAttachment_attachment", "StoryAttachment", [new requireLazy/*r*/.Field("media", [new requireLazy/*r*/.Field("id"), new requireLazy/*r*/.Field("image", [new requireLazy/*r*/.Field("uri"), new requireLazy/*r*/.Field("height"), new requireLazy/*r*/.Field("width")], null, [new requireLazy/*r*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new requireLazy/*r*/.Callv("sizing", ["cover-fill-cropped"])])])], null, {
                                scope: "FBStickerAttachment_attachment"
                            })
                        }(View/*h*/[0], View/*h*/[1])
                    }
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.media && this.props.attachment.media.image;
                if (!global/*e*/) return console.error("Tried to render an FBStickerAttachment with no image!"), exports/*a*/.createElement(StyleSheet/*p*/, null);
                var require/*t*/ = {
                    width: global/*e*/.width / TouchableHighlight/*d*/,
                    height: global/*e*/.height / TouchableHighlight/*d*/
                };
                return exports/*a*/.createElement(Sticker/*c*/, {
                    style: require/*t*/,
                    activeOpacity: 1
                }, exports/*a*/.createElement(React/*l*/, {
                    fbid: this.props.attachment.media.id,
                    style: [m.stickerStyle, require/*t*/]
                }))
            }
        }),
        m = ReactGraphQL/*u*/.create({
            stickerStyle: {
                backgroundColor: "white"
            }
        });
    module/*i*/.exports = f
});