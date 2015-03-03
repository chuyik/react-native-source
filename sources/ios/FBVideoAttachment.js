__d("FBVideoAttachment",["Image","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","TouchableHighlight","View","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("PixelRatio"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("Dimensions"),
        c = require/*t*/("RouteHandler"),
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("TouchableHighlight"),
        h = require/*t*/("View"),
        f = require/*t*/("ix"),
        m = u.get("window").width * a.get(),
        g = 130 * a.get(),
        _ = 48,
        y = s.createClass({
            displayName: "FBVideoAttachment",
            propTypes: {
                attachment: s.PropTypes.object.isRequired,
                navigator: s.PropTypes.object
            },
            mixins: [l.Mixin],
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
                        }(m, g)
                    }
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.media;
                if (!global/*e*/) return console.error("Tried to render an FBVideoAttachment without media!"), s.createElement(h, null);
                var require/*t*/ = global/*e*/.video_still,
                    requireDynamic/*n*/ = a.get(),
                    requireLazy/*r*/ = require/*t*/.height / requireDynamic/*n*/,
                    module/*i*/ = (requireLazy/*r*/ - _) / 2;
                return s.createElement(d, {
                    onPress: c.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            url: global/*e*/.url,
                            navigator: this.props.navigator,
                            id: global/*e*/.id
                        }
                    })
                }, s.createElement(h, null, s.createElement(o, {
                    style: [v.image, {
                        height: requireLazy/*r*/
                    }],
                    source: require/*t*/
                }), s.createElement(h, {
                    style: v.playIconContainer
                }, s.createElement(o, {
                    style: [v.playIcon, {
                        top: module/*i*/
                    }],
                    source: f("newsfeedVideoPlayIcon")
                }))))
            }
        }),
        v = p.create({
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