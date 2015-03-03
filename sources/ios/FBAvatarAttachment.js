__d("FBAvatarAttachment",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","intlNumUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBActorSubtitle"),
        a = require/*t*/("FIGColors"),
        s = require/*t*/("Image"),
        l = require/*t*/("PixelRatio"),
        u = require/*t*/("React"),
        c = require/*t*/("ReactGraphQL"),
        p = require/*t*/("Dimensions"),
        d = require/*t*/("RouteHandler"),
        h = require/*t*/("StyleSheet"),
        f = require/*t*/("Text"),
        m = require/*t*/("TouchableHighlight"),
        g = require/*t*/("View"),
        _ = require/*t*/("fbt"),
        y = require/*t*/("intlNumUtils"),
        v = p.get("window").width,
        S = 1.9,
        b = Math.floor(v / S),
        R = l.get(),
        w = v * R,
        C = b * R,
        E = 50 * R,
        D = 2,
        T = u.createClass({
            displayName: "FBAvatarAttachment",
            propTypes: {
                attachment: u.PropTypes.object.isRequired,
                navigator: u.PropTypes.object,
                maxPhotoWidth: u.PropTypes.number
            },
            mixins: [c.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var a = require/*t*/.__GraphQL;
                            return new a.QueryFragment("FBAvatarAttachment_attachment", "StoryAttachment", [new a.Field("target", [new a.Field("__type__", [new a.Field("name"), new a.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new a.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new a.Field("url", null, null, [new a.Callv("site", ["mobile"])]), new a.Field("name"), new a.Field("group_members", [new a.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new a.Field("cover_photo", [new a.Field("photo", [new a.Field("image", [new a.Field("uri"), new a.Field("height"), new a.Field("width")], null, [new a.Callv("size", [require/*t*/.__var(requireDynamic/*n*/), require/*t*/.__var(requireLazy/*r*/)]), new a.Callv("sizing", ["cover-fill"])], "avatar_cover"), new a.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })]), new a.Field("profile_picture", [new a.Field("uri"), new a.Field("height"), new a.Field("width")], null, [new a.Callv("size", [require/*t*/.__var(module/*i*/), require/*t*/.__var(o)])], "avatar_profile_pic"), new a.Field("page_likers", [new a.Field("count")], null, null, null, null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new a.Field("title")], null, {
                                scope: "FBAvatarAttachment_attachment"
                            })
                        }(o.getQuery("actor"), w, C, E, E)
                    }
                }
            },
            getSubtitle: function() {
                var global/*e*/ = this.props.attachment.target;
                if (!global/*e*/) return null;
                var require/*t*/ = global/*e*/.__type__.name,
                    requireDynamic/*n*/ = null;
                switch (require/*t*/) {
                    case "Group":
                        global/*e*/.group_members && (requireDynamic/*n*/ = _({
                            type: "text",
                            texts: ["{members_count} Members"],
                            desc: "Subtitle for group with members count"
                        }, [_.param("members_count", global/*e*/.group_members.count)]));
                        break;
                    case "User":
                    case "Page":
                        return u.createElement(o, {
                            actor: global/*e*/,
                            textStyle: x.subtitle
                        });
                    default:
                        console.warn("Unspecialized FBAvatarAttachment type: " + require/*t*/)
                }
                return requireDynamic/*n*/ ? u.createElement(f, {
                    style: x.subtitle
                }, requireDynamic/*n*/) : null
            },
            getMetadata: function() {
                var global/*e*/ = this.props.attachment.target;
                if (!global/*e*/) return null;
                var require/*t*/ = global/*e*/.__type__.name,
                    requireDynamic/*n*/ = null;
                switch (require/*t*/) {
                    case "Page":
                        var requireLazy/*r*/ = y.formatNumberWithThousandDelimiters(global/*e*/.page_likers.count);
                        requireDynamic/*n*/ = _({
                            type: "text",
                            texts: ["{num_likes_count} likes"],
                            desc: "Text displaying number of likes the page has"
                        }, [_.param("num_likes_count", requireLazy/*r*/)])
                }
                return requireDynamic/*n*/ ? u.createElement(f, {
                    style: x.metadataText
                }, requireDynamic/*n*/) : null
            },
            getSummary: function() {
                return this.props.attachment.title ? u.createElement(g, {
                    style: x.titleContainer
                }, u.createElement(f, {
                    style: x.title,
                    numberOfLines: 2
                }, this.props.attachment.title), this.getSubtitle(), this.getMetadata()) : null
            },
            getCoverPhoto: function(global/*e*/) {
                if (!global/*e*/ || !global/*e*/.cover_photo) return null;
                var require/*t*/ = this.props.maxPhotoWidth ? this.props.maxPhotoWidth : v,
                    requireDynamic/*n*/ = require/*t*/ / S,
                    requireLazy/*r*/ = {
                        width: require/*t*/,
                        height: requireDynamic/*n*/
                    };
                return [u.createElement(s, {
                    key: "image",
                    style: requireLazy/*r*/,
                    source: global/*e*/.cover_photo.photo.avatar_cover
                }), u.createElement(g, {
                    key: "separator",
                    style: x.separator
                })]
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ ? u.createElement(g, {
                    style: x.container
                }, u.createElement(m, {
                    onPress: d.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            id: global/*e*/.id,
                            url: global/*e*/.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: x.wrapper
                }, u.createElement(g, {
                    style: x.border
                }, this.getCoverPhoto(global/*e*/), u.createElement(g, {
                    style: x.row
                }, u.createElement(s, {
                    style: x.profilePic,
                    source: global/*e*/.avatar_profile_pic
                }), this.getSummary())))) : (console.error("Tried to render an FBAvatarAttachment without an avatar!"), u.createElement(g, null))
            }
        }),
        x = h.create({
            border: {
                backgroundColor: "white",
                borderWidth: .5,
                borderColor: a.attachmentBorder,
                borderRadius: D,
                overflow: "hidden"
            },
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    h: 1
                },
                marginBottom: 5,
                borderRadius: D
            },
            metadataText: {
                fontSize: 13,
                lineHeight: 13,
                color: a.lightText
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
                backgroundColor: a.attachmentBorder,
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
    module/*i*/.exports = T
});