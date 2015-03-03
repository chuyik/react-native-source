__d("FBFallbackAttachment",["FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StylePropType","StyleSheet","TouchableHighlight","Text","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        exports/*a*/ = require/*t*/("Image"),
        FIGColors/*s*/ = require/*t*/("PixelRatio"),
        Image/*l*/ = require/*t*/("React"),
        PixelRatio/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*p*/ = require/*t*/("RouteHandler"),
        Dimensions/*d*/ = require/*t*/("StylePropType"),
        RouteHandler/*h*/ = require/*t*/("StyleSheet"),
        StylePropType/*f*/ = require/*t*/("TouchableHighlight"),
        StyleSheet/*m*/ = require/*t*/("Text"),
        TouchableHighlight/*g*/ = require/*t*/("View"),
        Text/*_*/ = React/*c*/.get("window").width - 10,
        View/*y*/ = FIGColors/*s*/.get(),
        v = 1,
        S = [Text/*_*/ * View/*y*/, Text/*_*/ * View/*y*/],
        b = [120 * View/*y*/, 120 * View/*y*/],
        R = [120 * View/*y*/, 180 * View/*y*/],
        w = Image/*l*/.createClass({
            displayName: "FBFallbackAttachment",
            propTypes: {
                attachment: Image/*l*/.PropTypes.object.isRequired,
                navigator: Image/*l*/.PropTypes.object,
                titleMaxLines: Image/*l*/.PropTypes.number,
                useLargeImage: Image/*l*/.PropTypes.bool,
                subtitleMaxLines: Image/*l*/.PropTypes.number,
                descriptionMaxLines: Image/*l*/.PropTypes.number,
                containerStyle: Dimensions/*d*/,
                borderStyle: Dimensions/*d*/,
                imageLargeStyle: Dimensions/*d*/,
                imageSmallStyle: Dimensions/*d*/,
                textContainerStyle: Dimensions/*d*/,
                subtitleStyle: Dimensions/*d*/,
                descriptionStyle: Dimensions/*d*/,
                useSeparator: Image/*l*/.PropTypes.bool
            },
            mixins: [PixelRatio/*u*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, exports/*a*/) {
                            var FIGColors/*s*/ = require/*t*/.__GraphQL;
                            return new FIGColors/*s*/.QueryFragment("FBFallbackAttachment_attachment", "StoryAttachment", [new FIGColors/*s*/.Field("description", [new FIGColors/*s*/.Field("text")]), new FIGColors/*s*/.Field("media", [new FIGColors/*s*/.Field("image", [new FIGColors/*s*/.Field("uri"), new FIGColors/*s*/.Field("height"), new FIGColors/*s*/.Field("width")], null, [new FIGColors/*s*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new FIGColors/*s*/.Callv("sizing", ["cover-fill"])]), new FIGColors/*s*/.Field("image", [new FIGColors/*s*/.Field("uri"), new FIGColors/*s*/.Field("height"), new FIGColors/*s*/.Field("width")], null, [new FIGColors/*s*/.Callv("size", [require/*t*/.__var(requireLazy/*r*/), require/*t*/.__var(module/*i*/)]), new FIGColors/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_portrait"), new FIGColors/*s*/.Field("image", [new FIGColors/*s*/.Field("uri"), new FIGColors/*s*/.Field("height"), new FIGColors/*s*/.Field("width")], null, [new FIGColors/*s*/.Callv("size", [require/*t*/.__var(o), require/*t*/.__var(exports/*a*/)]), new FIGColors/*s*/.Callv("sizing", ["cover-fill-cropped"])], "image_small")]), new FIGColors/*s*/.Field("title"), new FIGColors/*s*/.Field("url", null, null, [new FIGColors/*s*/.Callv("site", ["mobile"])]), new FIGColors/*s*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new FIGColors/*s*/.Field("source")], null, {
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
                return requireDynamic/*n*/ || global/*e*/ || (requireDynamic/*n*/ = require/*t*/ && require/*t*/.description && require/*t*/.description.text), requireDynamic/*n*/ ? Image/*l*/.createElement(StyleSheet/*m*/, {
                    style: [C.subtitle, this.props.subtitleStyle],
                    numberOfLines: this.props.subtitleMaxLines
                }, requireDynamic/*n*/) : null
            },
            renderDescription: function() {
                var global/*e*/ = this.props.attachment;
                if (this.props.descriptionMaxLength <= 0 || !global/*e*/.description) return null;
                var require/*t*/ = global/*e*/.description.text;
                return require/*t*/ ? Image/*l*/.createElement(StyleSheet/*m*/, {
                    style: [C.description, this.props.descriptionStyle],
                    numberOfLines: this.props.descriptionMaxLines
                }, require/*t*/) : null
            },
            renderText: function(global/*e*/) {
                var require/*t*/ = this.props.attachment.title;
                if (!require/*t*/) return null;
                var requireDynamic/*n*/ = global/*e*/ ? this.renderDescription() : null;
                return Image/*l*/.createElement(TouchableHighlight/*g*/, {
                    style: [C.textContainer, this.props.textContainerStyle]
                }, Image/*l*/.createElement(StyleSheet/*m*/, {
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
                    var o, FIGColors/*s*/;
                    module/*i*/ = !0, global/*e*/ && global/*e*/.height > b[1] && global/*e*/.width <= global/*e*/.height && this.props.useLargeImage && require/*t*/.media.image_portrait ? (FIGColors/*s*/ = C.imageLargePortrait, o = Image/*l*/.createElement(exports/*a*/, {
                        style: [C.imageBase, C.imageLargePortrait],
                        source: require/*t*/.media.image_portrait
                    })) : global/*e*/ && require/*t*/.media.image_small && (FIGColors/*s*/ = [C.imageSmall, this.props.imageSmallStyle], o = Image/*l*/.createElement(exports/*a*/, {
                        style: [C.imageBase, C.imageSmall, this.props.imageSmallStyle],
                        source: require/*t*/.media.image_small
                    })), requireDynamic/*n*/ = this.renderText(module/*i*/);
                    var PixelRatio/*u*/ = requireDynamic/*n*/ && o && this.props.useSeparator ? Image/*l*/.createElement(TouchableHighlight/*g*/, {
                        style: [C.separator, FIGColors/*s*/, C.verticalSeparator]
                    }) : null;
                    requireLazy/*r*/ = Image/*l*/.createElement(TouchableHighlight/*g*/, {
                        style: [C.border, FIGColors/*s*/, C.row, this.props.borderStyle]
                    }, o, PixelRatio/*u*/, requireDynamic/*n*/)
                } else requireDynamic/*n*/ = this.renderText(module/*i*/), requireLazy/*r*/ = Image/*l*/.createElement(TouchableHighlight/*g*/, {
                    style: [C.border, this.props.borderStyle]
                }, Image/*l*/.createElement(exports/*a*/, {
                    style: [C.imageBase, C.imageLarge, this.props.imageLargeStyle],
                    source: global/*e*/
                }), Image/*l*/.createElement(TouchableHighlight/*g*/, {
                    style: [C.separator, C.horizontalSeparator]
                }), requireDynamic/*n*/);
                var React/*c*/ = requireDynamic/*n*/ ? C.wrapper : null;
                return Image/*l*/.createElement(TouchableHighlight/*g*/, {
                    style: [C.container, this.props.containerStyle]
                }, Image/*l*/.createElement(StylePropType/*f*/, {
                    style: React/*c*/,
                    onPress: ReactGraphQL/*p*/.getCallback({
                        typeList: ["URL"],
                        params: require/*t*/
                    })
                }, requireLazy/*r*/))
            }
        }),
        C = RouteHandler/*h*/.create({
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    RouteHandler/*h*/: 1
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
                borderColor: o.attachmentBorder,
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
                width: R[0] / View/*y*/,
                height: R[1] / View/*y*/
            },
            imageSmall: {
                width: b[0] / View/*y*/,
                height: b[1] / View/*y*/
            },
            separator: {
                backgroundColor: o.attachmentBorder
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
                color: o.mediumText,
                marginBottom: 3
            },
            description: {
                fontSize: 11
            }
        });
    module/*i*/.exports = w
});