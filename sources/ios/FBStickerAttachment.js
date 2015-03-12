__d("FBStickerAttachment",["PixelRatio","React","ReactGraphQL","Sticker","StyleSheet","TouchableHighlight","View"],function (e, t, n, r, i) {
    "use strict";
    var PixelRatio/*o*/ = t("PixelRatio"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        Sticker/*l*/ = t("Sticker"),
        StyleSheet/*u*/ = t("StyleSheet"),
        TouchableHighlight/*c*/ = t("TouchableHighlight"),
        View/*p*/ = t("View"),
        d = PixelRatio/*o*/.get(),
        h = [60 * d, 60 * d],
        f = React/*a*/.createClass({
            displayName: "FBStickerAttachment",
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("FBStickerAttachment_attachment", "StoryAttachment", [new r.Field("media", [new r.Field("id"), new r.Field("image", [new r.Field("uri"), new r.Field("height"), new r.Field("width")], null, [new r.Callv("size", [t.__var(e), t.__var(n)]), new r.Callv("sizing", ["cover-fill-cropped"])])])], null, {
                                scope: "FBStickerAttachment_attachment"
                            })
                        }(h[0], h[1])
                    }
                }
            },
            render: function() {
                var e = this.props.attachment.media && this.props.attachment.media.image;
                if (!e) return console.error("Tried to render an FBStickerAttachment with no image!"), React/*a*/.createElement(View/*p*/, null);
                var t = {
                    width: e.width / d,
                    height: e.height / d
                };
                return React/*a*/.createElement(TouchableHighlight/*c*/, {
                    style: t,
                    activeOpacity: 1
                }, React/*a*/.createElement(Sticker/*l*/, {
                    fbid: this.props.attachment.media.id,
                    style: [m.stickerStyle, t]
                }))
            }
        }),
        m = StyleSheet/*u*/.create({
            stickerStyle: {
                backgroundColor: "white"
            }
        });
    i.exports = f
});