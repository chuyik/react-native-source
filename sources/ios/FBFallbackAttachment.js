__d("FBFallbackAttachment",["FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StylePropType","StyleSheet","TouchableHighlight","Text","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FIGColors/*o*/ = require/*t*/("FIGColors"),
        Image/*a*/ = require/*t*/("Image"),
        PixelRatio/*s*/ = require/*t*/("PixelRatio"),
        React/*l*/ = require/*t*/("React"),
        ReactGraphQL/*u*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*c*/ = require/*t*/("Dimensions"),
        RouteHandler/*p*/ = require/*t*/("RouteHandler"),
        StylePropType/*d*/ = require/*t*/("StylePropType"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        TouchableHighlight/*f*/ = require/*t*/("TouchableHighlight"),
        Text/*m*/ = require/*t*/("Text"),
        View/*g*/ = require/*t*/("View"),
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
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, FIGColors/*o*/, Image/*a*/) {
                            var PixelRatio/*s*/ = require/*t*/.__GraphQL;
                            return new PixelRatio/*s*/.QueryFragment("FBFallbackAttachment_attachment", "StoryAttachment", [new PixelRatio/*s*/.Field("description", [new PixelRatio/*s*/.Field("text")]), new PixelRatio/*s*/.Field("media", [new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill"])]), new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [require/*t*/.__var(requireLazy/*r*/), require/*t*/.__var(module/*i*/)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_portrait"), new PixelRatio/*s*/.Field("image", [new PixelRatio/*s*/.Field("uri"), new PixelRatio/*s*/.Field("height"), new PixelRatio/*s*/.Field("width")], null, [new PixelRatio/*s*/.Callv("size", [require/*t*/.__var(FIGColors/*o*/), require/*t*/.__var(Image/*a*/)]), new PixelRatio/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_small")]), new PixelRatio/*s*/.Field("title"), new PixelRatio/*s*/.Field("url", null, null, [new PixelRatio/*s*/.Callv("site", ["mobile"])]), new PixelRatio/*s*/.Field("style_list", null, null, null, null, null, {
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
            renderSubtitle: function(global/*e*/) {
                var require/*t*/ = this.props.attachment,
                    requireDynamic/*n*/ = require/*t*/.source;
                return requireDynamic/*n*/ || global/*e*/ || (requireDynamic/*n*/ = require/*t*/ && require/*t*/.description && require/*t*/.description.text), requireDynamic/*n*/ ? React/*l*/.createElement(Text/*m*/, {
                    style: [C.subtitle, this.props.subtitleStyle],
                    numberOfLines: this.props.subtitleMaxLines
                }, requireDynamic/*n*/) : null
            },
            renderDescription: function() {
                var global/*e*/ = this.props.attachment;
                if (this.props.descriptionMaxLength <= 0 || !global/*e*/.description) return null;
                var require/*t*/ = global/*e*/.description.text;
                return require/*t*/ ? React/*l*/.createElement(Text/*m*/, {
                    style: [C.description, this.props.descriptionStyle],
                    numberOfLines: this.props.descriptionMaxLines
                }, require/*t*/) : null
            },
            renderText: function(global/*e*/) {
                var require/*t*/ = this.props.attachment.title;
                if (!require/*t*/) return null;
                var requireDynamic/*n*/ = global/*e*/ ? this.renderDescription() : null;
                return React/*l*/.createElement(View/*g*/, {
                    style: [C.textContainer, this.props.textContainerStyle]
                }, React/*l*/.createElement(Text/*m*/, {
                    style: [C.title, this.props.titleStyle],
                    numberOfLines: this.props.titleMaxLines
                }, require/*t*/), this.renderSubtitle(requireDynamic/*n*/), requireDynamic/*n*/)
            },
            render: function() {
                var global/*e*/, require/*t*/ = this.props.attachment;
                require/*t*/.media && require/*t*/.media.image && require/*t*/.media.image.uri && (global/*e*/ = require/*t*/.media.image);
                var requireDynamic/*n*/ = null,
                    requireLazy/*r*/ = null,
                    module/*i*/ = !1;
                if (!global/*e*/ || global/*e*/.width < S[0] || global/*e*/.width <= global/*e*/.height || !this.props.useLargeImage) {
                    var FIGColors/*o*/, PixelRatio/*s*/;
                    module/*i*/ = !0, global/*e*/ && global/*e*/.height > b[1] && global/*e*/.width <= global/*e*/.height && this.props.useLargeImage && require/*t*/.media.image_portrait ? (PixelRatio/*s*/ = C.imageLargePortrait, FIGColors/*o*/ = React/*l*/.createElement(Image/*a*/, {
                        style: [C.imageBase, C.imageLargePortrait],
                        source: require/*t*/.media.image_portrait
                    })) : global/*e*/ && require/*t*/.media.image_small && (PixelRatio/*s*/ = [C.imageSmall, this.props.imageSmallStyle], FIGColors/*o*/ = React/*l*/.createElement(Image/*a*/, {
                        style: [C.imageBase, C.imageSmall, this.props.imageSmallStyle],
                        source: require/*t*/.media.image_small
                    })), requireDynamic/*n*/ = this.renderText(module/*i*/);
                    var ReactGraphQL/*u*/ = requireDynamic/*n*/ && FIGColors/*o*/ && this.props.useSeparator ? React/*l*/.createElement(View/*g*/, {
                        style: [C.separator, PixelRatio/*s*/, C.verticalSeparator]
                    }) : null;
                    requireLazy/*r*/ = React/*l*/.createElement(View/*g*/, {
                        style: [C.border, PixelRatio/*s*/, C.row, this.props.borderStyle]
                    }, FIGColors/*o*/, ReactGraphQL/*u*/, requireDynamic/*n*/)
                } else requireDynamic/*n*/ = this.renderText(module/*i*/), requireLazy/*r*/ = React/*l*/.createElement(View/*g*/, {
                    style: [C.border, this.props.borderStyle]
                }, React/*l*/.createElement(Image/*a*/, {
                    style: [C.imageBase, C.imageLarge, this.props.imageLargeStyle],
                    source: global/*e*/
                }), React/*l*/.createElement(View/*g*/, {
                    style: [C.separator, C.horizontalSeparator]
                }), requireDynamic/*n*/);
                var Dimensions/*c*/ = requireDynamic/*n*/ ? C.wrapper : null;
                return React/*l*/.createElement(View/*g*/, {
                    style: [C.container, this.props.containerStyle]
                }, React/*l*/.createElement(TouchableHighlight/*f*/, {
                    style: Dimensions/*c*/,
                    onPress: RouteHandler/*p*/.getCallback({
                        typeList: ["URL"],
                        params: require/*t*/
                    })
                }, requireLazy/*r*/))
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
    module/*i*/.exports = w
});