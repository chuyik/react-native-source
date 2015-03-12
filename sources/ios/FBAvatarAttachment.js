__d("FBAvatarAttachment",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","intlNumUtils"],function (e, t, n, r, i) {
    "use strict";
    var FBActorSubtitle/*o*/ = t("FBActorSubtitle"),
        FIGColors/*a*/ = t("FIGColors"),
        Image/*s*/ = t("Image"),
        PixelRatio/*l*/ = t("PixelRatio"),
        React/*u*/ = t("React"),
        ReactGraphQL/*c*/ = t("ReactGraphQL"),
        Dimensions/*p*/ = t("Dimensions"),
        RouteHandler/*d*/ = t("RouteHandler"),
        StyleSheet/*h*/ = t("StyleSheet"),
        Text/*f*/ = t("Text"),
        TouchableHighlight/*m*/ = t("TouchableHighlight"),
        View/*g*/ = t("View"),
        fbt/*_*/ = t("fbt"),
        intlNumUtils/*y*/ = t("intlNumUtils"),
        v = Dimensions/*p*/.get("window").width,
        S = 1.9,
        b = Math.floor(v / S),
        R = PixelRatio/*l*/.get(),
        w = v * R,
        C = b * R,
        E = 50 * R,
        D = 2,
        T = React/*u*/.createClass({
            displayName: "FBAvatarAttachment",
            propTypes: {
                attachment: React/*u*/.PropTypes.object.isRequired,
                navigator: React/*u*/.PropTypes.object,
                maxPhotoWidth: React/*u*/.PropTypes.number
            },
            mixins: [ReactGraphQL/*c*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function(e, n, r, i, FBActorSubtitle/*o*/) {
                            var FIGColors/*a*/ = t.__GraphQL;
                            return new FIGColors/*a*/.QueryFragment("FBAvatarAttachment_attachment", "StoryAttachment", [new FIGColors/*a*/.Field("target", [new FIGColors/*a*/.Field("__type__", [new FIGColors/*a*/.Field("name"), new FIGColors/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FIGColors/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new FIGColors/*a*/.Field("url", null, null, [new FIGColors/*a*/.Callv("site", ["mobile"])]), new FIGColors/*a*/.Field("name"), new FIGColors/*a*/.Field("group_members", [new FIGColors/*a*/.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new FIGColors/*a*/.Field("cover_photo", [new FIGColors/*a*/.Field("photo", [new FIGColors/*a*/.Field("image", [new FIGColors/*a*/.Field("uri"), new FIGColors/*a*/.Field("height"), new FIGColors/*a*/.Field("width")], null, [new FIGColors/*a*/.Callv("size", [t.__var(n), t.__var(r)]), new FIGColors/*a*/.Callv("sizing", ["cover-fill"])], "avatar_cover"), new FIGColors/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })]), new FIGColors/*a*/.Field("profile_picture", [new FIGColors/*a*/.Field("uri"), new FIGColors/*a*/.Field("height"), new FIGColors/*a*/.Field("width")], null, [new FIGColors/*a*/.Callv("size", [t.__var(i), t.__var(FBActorSubtitle/*o*/)])], "avatar_profile_pic"), new FIGColors/*a*/.Field("page_likers", [new FIGColors/*a*/.Field("count")], null, null, null, null, {
                                connection: !0
                            })], [t.__frag(e)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FIGColors/*a*/.Field("title")], null, {
                                scope: "FBAvatarAttachment_attachment"
                            })
                        }(FBActorSubtitle/*o*/.getQuery("actor"), w, C, E, E)
                    }
                }
            },
            getSubtitle: function() {
                var e = this.props.attachment.target;
                if (!e) return null;
                var t = e.__type__.name,
                    n = null;
                switch (t) {
                    case "Group":
                        e.group_members && (n = fbt/*_*/({
                            type: "text",
                            texts: ["{members_count} Members"],
                            desc: "Subtitle for group with members count"
                        }, [fbt/*_*/.param("members_count", e.group_members.count)]));
                        break;
                    case "User":
                    case "Page":
                        return React/*u*/.createElement(FBActorSubtitle/*o*/, {
                            actor: e,
                            textStyle: x.subtitle
                        });
                    default:
                        console.warn("Unspecialized FBAvatarAttachment type: " + t)
                }
                return n ? React/*u*/.createElement(Text/*f*/, {
                    style: x.subtitle
                }, n) : null
            },
            getMetadata: function() {
                var e = this.props.attachment.target;
                if (!e) return null;
                var t = e.__type__.name,
                    n = null;
                switch (t) {
                    case "Page":
                        var r = intlNumUtils/*y*/.formatNumberWithThousandDelimiters(e.page_likers.count);
                        n = fbt/*_*/({
                            type: "text",
                            texts: ["{num_likes_count} likes"],
                            desc: "Text displaying number of likes the page has"
                        }, [fbt/*_*/.param("num_likes_count", r)])
                }
                return n ? React/*u*/.createElement(Text/*f*/, {
                    style: x.metadataText
                }, n) : null
            },
            getSummary: function() {
                return this.props.attachment.title ? React/*u*/.createElement(View/*g*/, {
                    style: x.titleContainer
                }, React/*u*/.createElement(Text/*f*/, {
                    style: x.title,
                    numberOfLines: 2
                }, this.props.attachment.title), this.getSubtitle(), this.getMetadata()) : null
            },
            getCoverPhoto: function(e) {
                if (!e || !e.cover_photo) return null;
                var t = this.props.maxPhotoWidth ? this.props.maxPhotoWidth : v,
                    n = t / S,
                    r = {
                        width: t,
                        height: n
                    };
                return [React/*u*/.createElement(Image/*s*/, {
                    key: "image",
                    style: r,
                    source: e.cover_photo.photo.avatar_cover
                }), React/*u*/.createElement(View/*g*/, {
                    key: "separator",
                    style: x.separator
                })]
            },
            render: function() {
                var e = this.props.attachment.target;
                return e ? React/*u*/.createElement(View/*g*/, {
                    style: x.container
                }, React/*u*/.createElement(TouchableHighlight/*m*/, {
                    onPress: RouteHandler/*d*/.getCallback({
                        typeList: [e.__type__.name, "URL"],
                        params: {
                            id: e.id,
                            url: e.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: x.wrapper
                }, React/*u*/.createElement(View/*g*/, {
                    style: x.border
                }, this.getCoverPhoto(e), React/*u*/.createElement(View/*g*/, {
                    style: x.row
                }, React/*u*/.createElement(Image/*s*/, {
                    style: x.profilePic,
                    source: e.avatar_profile_pic
                }), this.getSummary())))) : (console.error("Tried to render an FBAvatarAttachment without an avatar!"), React/*u*/.createElement(View/*g*/, null))
            }
        }),
        x = StyleSheet/*h*/.create({
            border: {
                backgroundColor: "white",
                borderWidth: .5,
                borderColor: FIGColors/*a*/.attachmentBorder,
                borderRadius: D,
                overflow: "hidden"
            },
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    StyleSheet/*h*/: 1
                },
                marginBottom: 5,
                borderRadius: D
            },
            metadataText: {
                fontSize: 13,
                lineHeight: 13,
                color: FIGColors/*a*/.lightText
            },
            profilePic: {
                marginTop: 8,
                marginLeft: 8,
                marginBottom: 8,
                width: E / R,
                height: E / R
            },
            row: {
                alignItems: "center",
                flexDirection: "row"
            },
            separator: {
                backgroundColor: FIGColors/*a*/.attachmentBorder,
                height: .5
            },
            subtitle: {
                fontSize: 13,
                lineHeight: 13
            },
            title: {
                fontSize: 14,
                lineHeight: 14,
                fontWeight: "bold"
            },
            titleContainer: {
                padding: 8,
                flex: 1
            },
            wrapper: {
                borderRadius: D,
                overflow: "hidden"
            }
        });
    i.exports = T
});