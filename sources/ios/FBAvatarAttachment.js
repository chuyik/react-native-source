__d("FBAvatarAttachment",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","intlNumUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBActorSubtitle/*o*/ = require/*t*/("FBActorSubtitle"),
        FIGColors/*a*/ = require/*t*/("FIGColors"),
        Image/*s*/ = require/*t*/("Image"),
        PixelRatio/*l*/ = require/*t*/("PixelRatio"),
        React/*u*/ = require/*t*/("React"),
        ReactGraphQL/*c*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*p*/ = require/*t*/("Dimensions"),
        RouteHandler/*d*/ = require/*t*/("RouteHandler"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        Text/*f*/ = require/*t*/("Text"),
        TouchableHighlight/*m*/ = require/*t*/("TouchableHighlight"),
        View/*g*/ = require/*t*/("View"),
        fbt/*_*/ = require/*t*/("fbt"),
        intlNumUtils/*y*/ = require/*t*/("intlNumUtils"),
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
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, FBActorSubtitle/*o*/) {
                            var FIGColors/*a*/ = require/*t*/.__GraphQL;
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
                            }), new FIGColors/*a*/.Field("cover_photo", [new FIGColors/*a*/.Field("photo", [new FIGColors/*a*/.Field("image", [new FIGColors/*a*/.Field("uri"), new FIGColors/*a*/.Field("height"), new FIGColors/*a*/.Field("width")], null, [new FIGColors/*a*/.Callv("size", [require/*t*/.__var(requireDynamic/*n*/), require/*t*/.__var(requireLazy/*r*/)]), new FIGColors/*a*/.Callv("sizing", ["cover-fill"])], "avatar_cover"), new FIGColors/*a*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })]), new FIGColors/*a*/.Field("profile_picture", [new FIGColors/*a*/.Field("uri"), new FIGColors/*a*/.Field("height"), new FIGColors/*a*/.Field("width")], null, [new FIGColors/*a*/.Callv("size", [require/*t*/.__var(module/*i*/), require/*t*/.__var(FBActorSubtitle/*o*/)])], "avatar_profile_pic"), new FIGColors/*a*/.Field("page_likers", [new FIGColors/*a*/.Field("count")], null, null, null, null, {
                                connection: !0
                            })], [require/*t*/.__frag(global/*e*/)], null, null, null, {
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
                var global/*e*/ = this.props.attachment.target;
                if (!global/*e*/) return null;
                var require/*t*/ = global/*e*/.__type__.name,
                    requireDynamic/*n*/ = null;
                switch (require/*t*/) {
                    case "Group":
                        global/*e*/.group_members && (requireDynamic/*n*/ = fbt/*_*/({
                            type: "text",
                            texts: ["{members_count} Members"],
                            desc: "Subtitle for group with members count"
                        }, [fbt/*_*/.param("members_count", global/*e*/.group_members.count)]));
                        break;
                    case "User":
                    case "Page":
                        return React/*u*/.createElement(FBActorSubtitle/*o*/, {
                            actor: global/*e*/,
                            textStyle: x.subtitle
                        });
                    default:
                        console.warn("Unspecialized FBAvatarAttachment type: " + require/*t*/)
                }
                return requireDynamic/*n*/ ? React/*u*/.createElement(Text/*f*/, {
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
                        var requireLazy/*r*/ = intlNumUtils/*y*/.formatNumberWithThousandDelimiters(global/*e*/.page_likers.count);
                        requireDynamic/*n*/ = fbt/*_*/({
                            type: "text",
                            texts: ["{num_likes_count} likes"],
                            desc: "Text displaying number of likes the page has"
                        }, [fbt/*_*/.param("num_likes_count", requireLazy/*r*/)])
                }
                return requireDynamic/*n*/ ? React/*u*/.createElement(Text/*f*/, {
                    style: x.metadataText
                }, requireDynamic/*n*/) : null
            },
            getSummary: function() {
                return this.props.attachment.title ? React/*u*/.createElement(View/*g*/, {
                    style: x.titleContainer
                }, React/*u*/.createElement(Text/*f*/, {
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
                return [React/*u*/.createElement(Image/*s*/, {
                    key: "image",
                    style: requireLazy/*r*/,
                    source: global/*e*/.cover_photo.photo.avatar_cover
                }), React/*u*/.createElement(View/*g*/, {
                    key: "separator",
                    style: x.separator
                })]
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ ? React/*u*/.createElement(View/*g*/, {
                    style: x.container
                }, React/*u*/.createElement(TouchableHighlight/*m*/, {
                    onPress: RouteHandler/*d*/.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            id: global/*e*/.id,
                            url: global/*e*/.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: x.wrapper
                }, React/*u*/.createElement(View/*g*/, {
                    style: x.border
                }, this.getCoverPhoto(global/*e*/), React/*u*/.createElement(View/*g*/, {
                    style: x.row
                }, React/*u*/.createElement(Image/*s*/, {
                    style: x.profilePic,
                    source: global/*e*/.avatar_profile_pic
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
    module/*i*/.exports = T
});