__d("FBFallbackAttachment",["FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StylePropType","StyleSheet","TouchableHighlight","Text","View"],function (e, t, n, r, i) {
    "use strict";
    var FIGColors/*o*/ = t("FIGColors"),
        Image/*a*/ = t("Image"),
        PixelRatio/*s*/ = t("PixelRatio"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        Dimensions/*c*/ = t("Dimensions"),
        RouteHandler/*p*/ = t("RouteHandler"),
        StylePropType/*d*/ = t("StylePropType"),
        StyleSheet/*h*/ = t("StyleSheet"),
        TouchableHighlight/*f*/ = t("TouchableHighlight"),
        Text/*m*/ = t("Text"),
        View/*g*/ = t("View"),
        _ = Dimensions/*c*/.get("window").width - 10,
        y = PixelRatio/*s*/.get(),
        v = 1,
        S = [_ * y, _ * y],
        b = [120 * y, 120 * y],
        R = [120 * y, 180 * y],
        w = React/*l*/.createClass({
            displayName: "FBFallbackAttachment",
            propTypes: {
                attachment: React/*l*/.PropTypes.object.isRequired,
                navigator: React/*l*/.PropTypes.object,
                titleMaxLines: React/*l*/.PropTypes.number,
                useLargeImage: React/*l*/.PropTypes.bool,
                subtitleMaxLines: React/*l*/.PropTypes.number,
                descriptionMaxLines: React/*l*/.PropTypes.number,
                containerStyle: StylePropType/*d*/,
                borderStyle: StylePropType/*d*/,
                imageLargeStyle: StylePropType/*d*/,
                imageSmallStyle: StylePropType/*d*/,
                textContainerStyle: StylePropType/*d*/,
                subtitleStyle: StylePropType/*d*/,
                descriptionStyle: StylePropType/*d*/,
                useSeparator: React/*l*/.PropTypes.bool
            },
            mixins: [ReactGraphQL/*u*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function(e, n, r, i, FIGColors/*o*/, Image/*a*/) {
                            var PixelRatio/*s*/ = t.__GraphQL;
                            return new PixelRatio/*s*/.QueryFragment("FBFallbackAttachment_attachment", "StoryAttachment", [new PixelRatio/*s*/.Field("description", [new PixelRatio/*s*/.Field("text")]), new PixelRatio/*s*/.Field("media", [new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [t.__var(e), t.__var(n)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill"])]), new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [t.__var(r), t.__var(i)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_portrait"), new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [t.__var(FIGColors/*o*/), t.__var(Image/*a*/)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_small")]), new PixelRatio/*s*/.Field("title"), new PixelRatio/*s*/.Field("url", null, null, [new PixelRatio/*s*/.Callv("site", ["mobile"])]), new PixelRatio/*s*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new PixelRatio/*s*/.Field("source")], null, {
                                scope: "FBFallbackAttachment_attachment"
                            })
                        }(S[0], S[1], R[0], R[1], b[0], b[1])
                    }
                }
            },
            getDefaultProps: function() {
                return {
                    titleMaxLines: 2,
                    useLargeImage: !0,
                    subtitleMaxLines: 1,
                    descriptionMaxLines: 3,
                    useSeparator: !0
                }
            },
            renderSubtitle: function(e) {
                var t = this.props.attachment,
                    n = t.source;
                return n || e || (n = t && t.description && t.description.text), n ? React/*l*/.createElement(Text/*m*/, {
                    style: [C.subtitle, this.props.subtitleStyle],
                    numberOfLines: this.props.subtitleMaxLines
                }, n) : null
            },
            renderDescription: function() {
                var e = this.props.attachment;
                if (this.props.descriptionMaxLength <= 0 || !e.description) return null;
                var t = e.description.text;
                return t ? React/*l*/.createElement(Text/*m*/, {
                    style: [C.description, this.props.descriptionStyle],
                    numberOfLines: this.props.descriptionMaxLines
                }, t) : null
            },
            renderText: function(e) {
                var t = this.props.attachment.title;
                if (!t) return null;
                var n = e ? this.renderDescription() : null;
                return React/*l*/.createElement(View/*g*/, {
                    style: [C.textContainer, this.props.textContainerStyle]
                }, React/*l*/.createElement(Text/*m*/, {
                    style: [C.title, this.props.titleStyle],
                    numberOfLines: this.props.titleMaxLines
                }, t), this.renderSubtitle(n), n)
            },
            render: function() {
                var e, t = this.props.attachment;
                t.media && t.media.image && t.media.image.uri && (e = t.media.image);
                var n = null,
                    r = null,
                    i = !1;
                if (!e || e.width < S[0] || e.width <= e.height || !this.props.useLargeImage) {
                    var FIGColors/*o*/, PixelRatio/*s*/;
                    i = !0, e && e.height > b[1] && e.width <= e.height && this.props.useLargeImage && t.media.image_portrait ? (PixelRatio/*s*/ = C.imageLargePortrait, FIGColors/*o*/ = React/*l*/.createElement(Image/*a*/, {
                        style: [C.imageBase, C.imageLargePortrait],
                        source: t.media.image_portrait
                    })) : e && t.media.image_small && (PixelRatio/*s*/ = [C.imageSmall, this.props.imageSmallStyle], FIGColors/*o*/ = React/*l*/.createElement(Image/*a*/, {
                        style: [C.imageBase, C.imageSmall, this.props.imageSmallStyle],
                        source: t.media.image_small
                    })), n = this.renderText(i);
                    var ReactGraphQL/*u*/ = n && FIGColors/*o*/ && this.props.useSeparator ? React/*l*/.createElement(View/*g*/, {
                        style: [C.separator, PixelRatio/*s*/, C.verticalSeparator]
                    }) : null;
                    r = React/*l*/.createElement(View/*g*/, {
                        style: [C.border, PixelRatio/*s*/, C.row, this.props.borderStyle]
                    }, FIGColors/*o*/, ReactGraphQL/*u*/, n)
                } else n = this.renderText(i), r = React/*l*/.createElement(View/*g*/, {
                    style: [C.border, this.props.borderStyle]
                }, React/*l*/.createElement(Image/*a*/, {
                    style: [C.imageBase, C.imageLarge, this.props.imageLargeStyle],
                    source: e
                }), React/*l*/.createElement(View/*g*/, {
                    style: [C.separator, C.horizontalSeparator]
                }), n);
                var Dimensions/*c*/ = n ? C.wrapper : null;
                return React/*l*/.createElement(View/*g*/, {
                    style: [C.container, this.props.containerStyle]
                }, React/*l*/.createElement(TouchableHighlight/*f*/, {
                    style: Dimensions/*c*/,
                    onPress: RouteHandler/*p*/.getCallback({
                        typeList: ["URL"],
                        params: t
                    })
                }, r))
            }
        }),
        C = StyleSheet/*h*/.create({
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    StyleSheet/*h*/: 1
                },
                marginBottom: 5,
                borderRadius: v
            },
            wrapper: {
                borderRadius: v
            },
            row: {
                flexDirection: "row",
                width: void 0
            },
            border: {
                backgroundColor: "white",
                borderWidth: .5,
                borderColor: FIGColors/*o*/.attachmentBorder,
                borderRadius: v,
                overflow: "hidden"
            },
            imageBase: {
                backgroundColor: "#f0f0f0"
            },
            imageLarge: {
                height: 180
            },
            imageLargePortrait: {
                width: R[0] / y,
                height: R[1] / y
            },
            imageSmall: {
                width: b[0] / y,
                height: b[1] / y
            },
            separator: {
                backgroundColor: FIGColors/*o*/.attachmentBorder
            },
            horizontalSeparator: {
                height: .5
            },
            verticalSeparator: {
                width: .5
            },
            textContainer: {
                backgroundColor: "white",
                paddingVertical: 8,
                paddingHorizontal: 10,
                flex: 1
            },
            title: {
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 3
            },
            subtitle: {
                fontSize: 11,
                color: FIGColors/*o*/.mediumText,
                marginBottom: 3
            },
            description: {
                fontSize: 11
            }
        });
    i.exports = w
});