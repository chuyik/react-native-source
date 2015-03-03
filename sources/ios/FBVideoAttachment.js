__d("FBVideoAttachment",["Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","TouchableHighlight","View","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        exports/*a*/ = require/*t*/("PixelRatio"),
        Image/*s*/ = require/*t*/("React"),
        PixelRatio/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*c*/ = require/*t*/("RouteHandler"),
        Dimensions/*p*/ = require/*t*/("StyleSheet"),
        RouteHandler/*d*/ = require/*t*/("TouchableHighlight"),
        StyleSheet/*h*/ = require/*t*/("View"),
        TouchableHighlight/*f*/ = require/*t*/("ix"),
        View/*m*/ = React/*u*/.get("window").width * exports/*a*/.get(),
        ix/*g*/ = 130 * exports/*a*/.get(),
        _ = 48,
        y = Image/*s*/.createClass({
            displayName: "FBVideoAttachment",
            propTypes: {
                attachment: Image/*s*/.PropTypes.object.isRequired,
                navigator: Image/*s*/.PropTypes.object
            },
            mixins: [PixelRatio/*l*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("FBVideoAttachment_attachment", "StoryAttachment", [new requireLazy/*r*/.Field("media", [new requireLazy/*r*/.Field("id"), new requireLazy/*r*/.Field("url", null, null, [new requireLazy/*r*/.Callv("site", ["mobile"])]), new requireLazy/*r*/.Field("image", [new requireLazy/*r*/.Field("uri"), new requireLazy/*r*/.Field("height"), new requireLazy/*r*/.Field("width")], null, [new requireLazy/*r*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new requireLazy/*r*/.Callv("sizing", ["cover-fill"])], "video_still"), new requireLazy/*r*/.Field("__type__", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })])], null, {
                                scope: "FBVideoAttachment_attachment"
                            })
                        }(View/*m*/, ix/*g*/)
                    }
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.media;
                if (!global/*e*/) return console.error("Tried to render an FBVideoAttachment without media!"), Image/*s*/.createElement(StyleSheet/*h*/, null);
                var require/*t*/ = global/*e*/.video_still,
                    requireDynamic/*n*/ = exports/*a*/.get(),
                    requireLazy/*r*/ = require/*t*/.height / requireDynamic/*n*/,
                    module/*i*/ = (requireLazy/*r*/ - _) / 2;
                return Image/*s*/.createElement(RouteHandler/*d*/, {
                    onPress: ReactGraphQL/*c*/.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            url: global/*e*/.url,
                            navigator: this.props.navigator,
                            id: global/*e*/.id
                        }
                    })
                }, Image/*s*/.createElement(StyleSheet/*h*/, null, Image/*s*/.createElement(o, {
                    style: [v.image, {
                        height: requireLazy/*r*/
                    }],
                    source: require/*t*/
                }), Image/*s*/.createElement(StyleSheet/*h*/, {
                    style: v.playIconContainer
                }, Image/*s*/.createElement(o, {
                    style: [v.playIcon, {
                        top: module/*i*/
                    }],
                    source: TouchableHighlight/*f*/("newsfeedVideoPlayIcon")
                }))))
            }
        }),
        v = Dimensions/*p*/.create({
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
    module/*i*/.exports = y
});