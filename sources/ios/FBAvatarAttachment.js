__d("FBAvatarAttachment",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","intlNumUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBActorSubtitle"),
        exports/*a*/ = require/*t*/("FIGColors"),
        FBActorSubtitle/*s*/ = require/*t*/("Image"),
        FIGColors/*l*/ = require/*t*/("PixelRatio"),
        Image/*u*/ = require/*t*/("React"),
        PixelRatio/*c*/ = require/*t*/("ReactGraphQL"),
        React/*p*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*d*/ = require/*t*/("RouteHandler"),
        Dimensions/*h*/ = require/*t*/("StyleSheet"),
        RouteHandler/*f*/ = require/*t*/("Text"),
        StyleSheet/*m*/ = require/*t*/("TouchableHighlight"),
        Text/*g*/ = require/*t*/("View"),
        TouchableHighlight/*_*/ = require/*t*/("fbt"),
        View/*y*/ = require/*t*/("intlNumUtils"),
        fbt/*v*/ = React/*p*/.get("window").width,
        intlNumUtils/*S*/ = 1.9,
        b = Math.floor(fbt/*v*/ / intlNumUtils/*S*/),
        R = FIGColors/*l*/.get(),
        w = fbt/*v*/ * R,
        C = b * R,
        E = 50 * R,
        D = 2,
        T = Image/*u*/.createClass({
            displayName: "FBAvatarAttachment",
            propTypes: {
                attachment: Image/*u*/.PropTypes.object.isRequired,
                navigator: Image/*u*/.PropTypes.object,
                maxPhotoWidth: Image/*u*/.PropTypes.number
            },
            mixins: [PixelRatio/*c*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                            var exports/*a*/ = require/*t*/.__GraphQL;
                            return new exports/*a*/.QueryFragment("FBAvatarAttachment_attachment", "StoryAttachment", [new exports/*a*/.Field("target", [new exports/*a*/.Field("__type__", [new exports/*a*/.Field("name"), new exports/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new exports/*a*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new exports/*a*/.Field("url", null, null, [new exports/*a*/.Callv("site", ["mobile"])]), new exports/*a*/.Field("name"), new exports/*a*/.Field("group_members", [new exports/*a*/.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new exports/*a*/.Field("cover_photo", [new exports/*a*/.Field("photo", [new exports/*a*/.Field("image", [new exports/*a*/.Field("uri"), new exports/*a*/.Field("height"), new exports/*a*/.Field("width")], null, [new exports/*a*/.Callv("size", [require/*t*/.__var(requireDynamic/*n*/), require/*t*/.__var(requireLazy/*r*/)]), new exports/*a*/.Callv("sizing", ["cover-fill"])], "avatar_cover"), new exports/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })]), new exports/*a*/.Field("profile_picture", [new exports/*a*/.Field("uri"), new exports/*a*/.Field("height"), new exports/*a*/.Field("width")], null, [new exports/*a*/.Callv("size", [require/*t*/.__var(module/*i*/), require/*t*/.__var(o)])], "avatar_profile_pic"), new exports/*a*/.Field("page_likers", [new exports/*a*/.Field("count")], null, null, null, null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new exports/*a*/.Field("title")], null, {
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
                        global/*e*/.group_members && (requireDynamic/*n*/ = TouchableHighlight/*_*/({
                            type: "text",
                            texts: ["{members_count} Members"],
                            desc: "Subtitle for group with members count"
                        }, [TouchableHighlight/*_*/.param("members_count", global/*e*/.group_members.count)]));
                        break;
                    case "User":
                    case "Page":
                        return Image/*u*/.createElement(o, {
                            actor: global/*e*/,
                            textStyle: x.subtitle
                        });
                    default:
                        console.warn("Unspecialized FBAvatarAttachment type: " + require/*t*/)
                }
                return requireDynamic/*n*/ ? Image/*u*/.createElement(RouteHandler/*f*/, {
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
                        var requireLazy/*r*/ = View/*y*/.formatNumberWithThousandDelimiters(global/*e*/.page_likers.count);
                        requireDynamic/*n*/ = TouchableHighlight/*_*/({
                            type: "text",
                            texts: ["{num_likes_count} likes"],
                            desc: "Text displaying number of likes the page has"
                        }, [TouchableHighlight/*_*/.param("num_likes_count", requireLazy/*r*/)])
                }
                return requireDynamic/*n*/ ? Image/*u*/.createElement(RouteHandler/*f*/, {
                    style: x.metadataText
                }, requireDynamic/*n*/) : null
            },
            getSummary: function() {
                return this.props.attachment.title ? Image/*u*/.createElement(Text/*g*/, {
                    style: x.titleContainer
                }, Image/*u*/.createElement(RouteHandler/*f*/, {
                    style: x.title,
                    numberOfLines: 2
                }, this.props.attachment.title), this.getSubtitle(), this.getMetadata()) : null
            },
            getCoverPhoto: function(global/*e*/) {
                if (!global/*e*/ || !global/*e*/.cover_photo) return null;
                var require/*t*/ = this.props.maxPhotoWidth ? this.props.maxPhotoWidth : fbt/*v*/,
                    requireDynamic/*n*/ = require/*t*/ / intlNumUtils/*S*/,
                    requireLazy/*r*/ = {
                        width: require/*t*/,
                        height: requireDynamic/*n*/
                    };
                return [Image/*u*/.createElement(FBActorSubtitle/*s*/, {
                    key: "image",
                    style: requireLazy/*r*/,
                    source: global/*e*/.cover_photo.photo.avatar_cover
                }), Image/*u*/.createElement(Text/*g*/, {
                    key: "separator",
                    style: x.separator
                })]
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ ? Image/*u*/.createElement(Text/*g*/, {
                    style: x.container
                }, Image/*u*/.createElement(StyleSheet/*m*/, {
                    onPress: ReactGraphQL/*d*/.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            id: global/*e*/.id,
                            url: global/*e*/.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: x.wrapper
                }, Image/*u*/.createElement(Text/*g*/, {
                    style: x.border
                }, this.getCoverPhoto(global/*e*/), Image/*u*/.createElement(Text/*g*/, {
                    style: x.row
                }, Image/*u*/.createElement(FBActorSubtitle/*s*/, {
                    style: x.profilePic,
                    source: global/*e*/.avatar_profile_pic
                }), this.getSummary())))) : (console.error("Tried to render an FBAvatarAttachment without an avatar!"), Image/*u*/.createElement(Text/*g*/, null))
            }
        }),
        x = Dimensions/*h*/.create({
            border: {
                backgroundColor: "white",
                borderWidth: .5,
                borderColor: exports/*a*/.attachmentBorder,
                borderRadius: D,
                overflow: "hidden"
            },
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    Dimensions/*h*/: 1
                },
                marginBottom: 5,
                borderRadius: D
            },
            metadataText: {
                fontSize: 13,
                lineHeight: 13,
                color: exports/*a*/.lightText
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
                backgroundColor: exports/*a*/.attachmentBorder,
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