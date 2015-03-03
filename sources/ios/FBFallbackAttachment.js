__d("FBFallbackAttachment",["FIGColors","Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StylePropType","StyleSheet","TouchableHighlight","Text","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        a = require/*t*/("Image"),
        s = require/*t*/("PixelRatio"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactGraphQL"),
        c = require/*t*/("Dimensions"),
        p = require/*t*/("RouteHandler"),
        d = require/*t*/("StylePropType"),
        h = require/*t*/("StyleSheet"),
        f = require/*t*/("TouchableHighlight"),
        m = require/*t*/("Text"),
        g = require/*t*/("View"),
        _ = c.get("window").width - 10,
        y = s.get(),
        v = 1,
        S = [_ * y, _ * y],
        b = [120 * y, 120 * y],
        R = [120 * y, 180 * y],
        w = l.createClass({
            displayName: "FBFallbackAttachment",
            propTypes: {
                attachment: l.PropTypes.object.isRequired,
                navigator: l.PropTypes.object,
                titleMaxLines: l.PropTypes.number,
                useLargeImage: l.PropTypes.bool,
                subtitleMaxLines: l.PropTypes.number,
                descriptionMaxLines: l.PropTypes.number,
                containerStyle: d,
                borderStyle: d,
                imageLargeStyle: d,
                imageSmallStyle: d,
                textContainerStyle: d,
                subtitleStyle: d,
                descriptionStyle: d,
                useSeparator: l.PropTypes.bool
            },
            mixins: [u.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a) {
                            var s = require/*t*/.__GraphQL;
                            return new s.QueryFragment("FBFallbackAttachment_attachment", "StoryAttachment", [new s.Field("description", [new s.Field("text")]), new s.Field("media", [new s.Field("image", [new s.Field("uri"), new s.Field("height"), new s.Field("width")], null, [new s.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new s.Callv("sizing", ["cover-fill"])]), new s.Field("image", [new s.Field("uri"), new s.Field("height"), new s.Field("width")], null, [new s.Callv("size", [require/*t*/.__var(requireLazy/*r*/), require/*t*/.__var(module/*i*/)]), new s.Callv("sizing", ["cover-fill-cropped"])], "image_portrait"), new s.Field("image", [new s.Field("uri"), new s.Field("height"), new s.Field("width")], null, [new s.Callv("size", [require/*t*/.__var(o), require/*t*/.__var(a)]), new s.Callv("sizing", ["cover-fill-cropped"])], "image_small")]), new s.Field("title"), new s.Field("url", null, null, [new s.Callv("site", ["mobile"])]), new s.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new s.Field("source")], null, {
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
                return requireDynamic/*n*/ || global/*e*/ || (requireDynamic/*n*/ = require/*t*/ && require/*t*/.description && require/*t*/.description.text), requireDynamic/*n*/ ? l.createElement(m, {
                    style: [C.subtitle, this.props.subtitleStyle],
                    numberOfLines: this.props.subtitleMaxLines
                }, requireDynamic/*n*/) : null
            },
            renderDescription: function() {
                var global/*e*/ = this.props.attachment;
                if (this.props.descriptionMaxLength <= 0 || !global/*e*/.description) return null;
                var require/*t*/ = global/*e*/.description.text;
                return require/*t*/ ? l.createElement(m, {
                    style: [C.description, this.props.descriptionStyle],
                    numberOfLines: this.props.descriptionMaxLines
                }, require/*t*/) : null
            },
            renderText: function(global/*e*/) {
                var require/*t*/ = this.props.attachment.title;
                if (!require/*t*/) return null;
                var requireDynamic/*n*/ = global/*e*/ ? this.renderDescription() : null;
                return l.createElement(g, {
                    style: [C.textContainer, this.props.textContainerStyle]
                }, l.createElement(m, {
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
                    var o, s;
                    module/*i*/ = !0, global/*e*/ && global/*e*/.height > b[1] && global/*e*/.width <= global/*e*/.height && this.props.useLargeImage && require/*t*/.media.image_portrait ? (s = C.imageLargePortrait, o = l.createElement(a, {
                        style: [C.imageBase, C.imageLargePortrait],
                        source: require/*t*/.media.image_portrait
                    })) : global/*e*/ && require/*t*/.media.image_small && (s = [C.imageSmall, this.props.imageSmallStyle], o = l.createElement(a, {
                        style: [C.imageBase, C.imageSmall, this.props.imageSmallStyle],
                        source: require/*t*/.media.image_small
                    })), requireDynamic/*n*/ = this.renderText(module/*i*/);
                    var u = requireDynamic/*n*/ && o && this.props.useSeparator ? l.createElement(g, {
                        style: [C.separator, s, C.verticalSeparator]
                    }) : null;
                    requireLazy/*r*/ = l.createElement(g, {
                        style: [C.border, s, C.row, this.props.borderStyle]
                    }, o, u, requireDynamic/*n*/)
                } else requireDynamic/*n*/ = this.renderText(module/*i*/), requireLazy/*r*/ = l.createElement(g, {
                    style: [C.border, this.props.borderStyle]
                }, l.createElement(a, {
                    style: [C.imageBase, C.imageLarge, this.props.imageLargeStyle],
                    source: global/*e*/
                }), l.createElement(g, {
                    style: [C.separator, C.horizontalSeparator]
                }), requireDynamic/*n*/);
                var c = requireDynamic/*n*/ ? C.wrapper : null;
                return l.createElement(g, {
                    style: [C.container, this.props.containerStyle]
                }, l.createElement(f, {
                    style: c,
                    onPress: p.getCallback({
                        typeList: ["URL"],
                        params: require/*t*/
                    })
                }, requireLazy/*r*/))
            }
        }),
        C = h.create({
            container: {
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    h: 1
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
                width: R[0] / y,
                height: R[1] / y
            },
            imageSmall: {
                width: b[0] / y,
                height: b[1] / y
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