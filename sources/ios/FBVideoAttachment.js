__d("FBVideoAttachment",["Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","TouchableHighlight","View","ix"],function (e, t, n, r, i) {
    "use strict";
    var Image/*o*/ = t("Image"),
        PixelRatio/*a*/ = t("PixelRatio"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        Dimensions/*u*/ = t("Dimensions"),
        RouteHandler/*c*/ = t("RouteHandler"),
        StyleSheet/*p*/ = t("StyleSheet"),
        TouchableHighlight/*d*/ = t("TouchableHighlight"),
        View/*h*/ = t("View"),
        ix/*f*/ = t("ix"),
        m = Dimensions/*u*/.get("window").width * PixelRatio/*a*/.get(),
        g = 130 * PixelRatio/*a*/.get(),
        _ = 48,
        y = React/*s*/.createClass({
            displayName: "FBVideoAttachment",
            propTypes: {
                attachment: React/*s*/.PropTypes.object.isRequired,
                navigator: React/*s*/.PropTypes.object
            },
            mixins: [ReactGraphQL/*l*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("FBVideoAttachment_attachment", "StoryAttachment", [new r.Field("media", [new r.Field("id"), new r.Field("url", null, null, [new r.Callv("site", ["mobile"])]), new r.Field("image", [new r.Field("uri"), new r.Field("height"), new r.Field("width")], null, [new r.Callv("size", [t.__var(e), t.__var(n)]), new r.Callv("sizing", ["cover-fill"])], "video_still"), new r.Field("__type__", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })])], null, {
                                scope: "FBVideoAttachment_attachment"
                            })
                        }(m, g)
                    }
                }
            },
            render: function() {
                var e = this.props.attachment.media;
                if (!e) return console.error("Tried to render an FBVideoAttachment without media!"), React/*s*/.createElement(View/*h*/, null);
                var t = e.video_still,
                    n = PixelRatio/*a*/.get(),
                    r = t.height / n,
                    i = (r - _) / 2;
                return React/*s*/.createElement(TouchableHighlight/*d*/, {
                    onPress: RouteHandler/*c*/.getCallback({
                        typeList: [e.__type__.name, "URL"],
                        params: {
                            url: e.url,
                            navigator: this.props.navigator,
                            id: e.id
                        }
                    })
                }, React/*s*/.createElement(View/*h*/, null, React/*s*/.createElement(Image/*o*/, {
                    style: [v.image, {
                        height: r
                    }],
                    source: t
                }), React/*s*/.createElement(View/*h*/, {
                    style: v.playIconContainer
                }, React/*s*/.createElement(Image/*o*/, {
                    style: [v.playIcon, {
                        top: i
                    }],
                    source: ix/*f*/("newsfeedVideoPlayIcon")
                }))))
            }
        }),
        v = StyleSheet/*p*/.create({
            image: {
                backgroundColor: "#f0f0f0"
            },
            playIconContainer: {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
            },
            playIcon: {
                height: _,
                width: _,
                backgroundColor: "transparent"
            }
        });
    i.exports = y
});