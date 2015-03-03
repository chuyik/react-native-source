__d("FBAttachmentView",["FBAvatarAttachment","FBEventAttachment","FBFallbackAttachment","FBPhotoAttachment","FBPhotoCollage","FBPhotoModalViewer","FBPhotoViewerOverlay","FBQuestionAttachment","FBStickerAttachment","FBVideoAttachment","PixelRatio","React","ReactGraphQL","Dimensions","StylePropType","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAvatarAttachment"),
        a = require/*t*/("FBEventAttachment"),
        s = require/*t*/("FBFallbackAttachment"),
        l = require/*t*/("FBPhotoAttachment"),
        u = require/*t*/("FBPhotoCollage"),
        c = require/*t*/("FBPhotoModalViewer"),
        p = require/*t*/("FBPhotoViewerOverlay"),
        d = require/*t*/("FBQuestionAttachment"),
        h = require/*t*/("FBStickerAttachment"),
        f = require/*t*/("FBVideoAttachment"),
        m = require/*t*/("PixelRatio"),
        g = require/*t*/("React"),
        _ = require/*t*/("ReactGraphQL"),
        y = require/*t*/("Dimensions"),
        v = require/*t*/("StylePropType"),
        S = require/*t*/("isEmpty"),
        b = require/*t*/("keyOf"),
        R = y.get("window").width - 10,
        w = m.get(),
        C = b({
            photoViewRef: null
        }),
        E = g.createClass({
            displayName: "FBAttachmentView",
            propTypes: {
                attachment: g.PropTypes.object.isRequired,
                navigator: g.PropTypes.object,
                titleMaxLines: g.PropTypes.number,
                maxPhotoHeight: g.PropTypes.number,
                maxPhotoWidth: g.PropTypes.number,
                useLargeImage: g.PropTypes.bool,
                subtitleMaxLines: g.PropTypes.number,
                descriptionMaxLines: g.PropTypes.number,
                borderStyle: v,
                imageLargeStyle: v,
                imageSmallStyle: v,
                textContainerStyle: v,
                subtitleStyle: v,
                descriptionStyle: v,
                containerStyle: v
            },
            getDefaultProps: function() {
                return {
                    maxPhotoHeight: R
                }
            },
            mixins: [_.Mixin],
            statics: {
                queryParams: {
                    imageLarge: [R * w, R * w]
                },
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s, l) {
                            var u = require/*t*/.__GraphQL;
                            return new u.QueryFragment("FBAttachmentView_attachment", "StoryAttachment", [new u.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new u.Field("target", [new u.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new u.Field("media", [new u.Field("id")]), new u.Field("subattachments", [new u.Field("media", [new u.Field("id")])], null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/), require/*t*/.__frag(o), require/*t*/.__frag(a), require/*t*/.__frag(s), require/*t*/.__frag(l)], {
                                scope: "FBAttachmentView_attachment"
                            })
                        }(o.getQuery("attachment"), a.getQuery("attachment"), d.getQuery("attachment"), l.getQuery("attachment"), u.getQuery("attachment"), h.getQuery("attachment"), f.getQuery("attachment"), s.getQuery("attachment"))
                    }
                }
            },
            onTapDone: function() {
                this.refs[C].close()
            },
            render: function() {
                var global/*e*/ = this.props.attachment;
                if (global/*e*/.style_list)
                    for (var require/*t*/ = 0; require/*t*/ < global/*e*/.style_list.length; ++require/*t*/) {
                        var requireDynamic/*n*/ = global/*e*/.style_list[require/*t*/];
                        if ("album" === requireDynamic/*n*/ && !S(global/*e*/.subattachments)) return g.createElement(u, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: c,
                            openedOverlayFactory: function() {
                                return g.createElement(p, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("photo" === requireDynamic/*n*/ && global/*e*/.media) return g.createElement(l, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoHeight: this.props.maxPhotoHeight,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: c,
                            openedOverlayFactory: function() {
                                return g.createElement(p, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("avatar" === requireDynamic/*n*/ && global/*e*/.target) return g.createElement(o, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator,
                            maxPhotoWidth: this.props.maxPhotoWidth
                        });
                        if ("event" === requireDynamic/*n*/ && global/*e*/.target) return g.createElement(a, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("question" === requireDynamic/*n*/ && global/*e*/.target) return g.createElement(d, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("video" === requireDynamic/*n*/ && global/*e*/.media) return g.createElement(f, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("sticker" === requireDynamic/*n*/ && global/*e*/.media) return g.createElement(h, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        })
                    }
                return g.createElement(s, {
                    attachment: global/*e*/,
                    navigator: this.props.navigator,
                    titleMaxLines: this.props.titleMaxLines,
                    useLargeImage: this.props.useLargeImage,
                    subtitleMaxLines: this.props.subtitleMaxLines,
                    descriptionMaxLines: this.props.descriptionMaxLines,
                    borderStyle: this.props.borderStyle,
                    imageSmallStyle: this.props.imageSmallStyle,
                    textContainerStyle: this.props.textContainerStyle,
                    subtitleStyle: this.props.subtitleStyle,
                    descriptionStyle: this.props.descriptionStyle,
                    containerStyle: this.props.containerStyle
                })
            }
        });
    module/*i*/.exports = E
});