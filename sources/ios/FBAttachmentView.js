__d("FBAttachmentView",["FBAvatarAttachment","FBEventAttachment","FBFallbackAttachment","FBPhotoAttachment","FBPhotoCollage","FBPhotoModalViewer","FBPhotoViewerOverlay","FBQuestionAttachment","FBStickerAttachment","FBVideoAttachment","PixelRatio","React","ReactGraphQL","Dimensions","StylePropType","isEmpty","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var FBAvatarAttachment/*o*/ = t("FBAvatarAttachment"),
        FBEventAttachment/*a*/ = t("FBEventAttachment"),
        FBFallbackAttachment/*s*/ = t("FBFallbackAttachment"),
        FBPhotoAttachment/*l*/ = t("FBPhotoAttachment"),
        FBPhotoCollage/*u*/ = t("FBPhotoCollage"),
        FBPhotoModalViewer/*c*/ = t("FBPhotoModalViewer"),
        FBPhotoViewerOverlay/*p*/ = t("FBPhotoViewerOverlay"),
        FBQuestionAttachment/*d*/ = t("FBQuestionAttachment"),
        FBStickerAttachment/*h*/ = t("FBStickerAttachment"),
        FBVideoAttachment/*f*/ = t("FBVideoAttachment"),
        PixelRatio/*m*/ = t("PixelRatio"),
        React/*g*/ = t("React"),
        ReactGraphQL/*_*/ = t("ReactGraphQL"),
        Dimensions/*y*/ = t("Dimensions"),
        StylePropType/*v*/ = t("StylePropType"),
        isEmpty/*S*/ = t("isEmpty"),
        keyOf/*b*/ = t("keyOf"),
        R = Dimensions/*y*/.get("window").width - 10,
        w = PixelRatio/*m*/.get(),
        C = keyOf/*b*/({
            photoViewRef: null
        }),
        E = React/*g*/.createClass({
            displayName: "FBAttachmentView",
            propTypes: {
                attachment: React/*g*/.PropTypes.object.isRequired,
                navigator: React/*g*/.PropTypes.object,
                titleMaxLines: React/*g*/.PropTypes.number,
                maxPhotoHeight: React/*g*/.PropTypes.number,
                maxPhotoWidth: React/*g*/.PropTypes.number,
                useLargeImage: React/*g*/.PropTypes.bool,
                subtitleMaxLines: React/*g*/.PropTypes.number,
                descriptionMaxLines: React/*g*/.PropTypes.number,
                borderStyle: StylePropType/*v*/,
                imageLargeStyle: StylePropType/*v*/,
                imageSmallStyle: StylePropType/*v*/,
                textContainerStyle: StylePropType/*v*/,
                subtitleStyle: StylePropType/*v*/,
                descriptionStyle: StylePropType/*v*/,
                containerStyle: StylePropType/*v*/
            },
            getDefaultProps: function() {
                return {
                    maxPhotoHeight: R
                }
            },
            mixins: [ReactGraphQL/*_*/.Mixin],
            statics: {
                queryParams: {
                    imageLarge: [R * w, R * w]
                },
                queries: {
                    attachment: function(e, t) {
                        return function(e, n, r, i, FBAvatarAttachment/*o*/, FBEventAttachment/*a*/, FBFallbackAttachment/*s*/, FBPhotoAttachment/*l*/) {
                            var FBPhotoCollage/*u*/ = t.__GraphQL;
                            return new FBPhotoCollage/*u*/.QueryFragment("FBAttachmentView_attachment", "StoryAttachment", [new FBPhotoCollage/*u*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new FBPhotoCollage/*u*/.Field("target", [new FBPhotoCollage/*u*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FBPhotoCollage/*u*/.Field("media", [new FBPhotoCollage/*u*/.Field("id")]), new FBPhotoCollage/*u*/.Field("subattachments", [new FBPhotoCollage/*u*/.Field("media", [new FBPhotoCollage/*u*/.Field("id")])], null, null, null, null, {
                                plural: !0
                            })], [t.__frag(e), t.__frag(n), t.__frag(r), t.__frag(i), t.__frag(FBAvatarAttachment/*o*/), t.__frag(FBEventAttachment/*a*/), t.__frag(FBFallbackAttachment/*s*/), t.__frag(FBPhotoAttachment/*l*/)], {
                                scope: "FBAttachmentView_attachment"
                            })
                        }(FBAvatarAttachment/*o*/.getQuery("attachment"), FBEventAttachment/*a*/.getQuery("attachment"), FBQuestionAttachment/*d*/.getQuery("attachment"), FBPhotoAttachment/*l*/.getQuery("attachment"), FBPhotoCollage/*u*/.getQuery("attachment"), FBStickerAttachment/*h*/.getQuery("attachment"), FBVideoAttachment/*f*/.getQuery("attachment"), FBFallbackAttachment/*s*/.getQuery("attachment"))
                    }
                }
            },
            onTapDone: function() {
                this.refs[C].close()
            },
            render: function() {
                var e = this.props.attachment;
                if (e.style_list)
                    for (var t = 0; t < e.style_list.length; ++t) {
                        var n = e.style_list[t];
                        if ("album" === n && !isEmpty/*S*/(e.subattachments)) return React/*g*/.createElement(FBPhotoCollage/*u*/, {
                            ref: C,
                            attachment: e,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoModalViewer/*c*/,
                            openedOverlayFactory: function() {
                                return React/*g*/.createElement(FBPhotoViewerOverlay/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("photo" === n && e.media) return React/*g*/.createElement(FBPhotoAttachment/*l*/, {
                            ref: C,
                            attachment: e,
                            maxPhotoHeight: this.props.maxPhotoHeight,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoModalViewer/*c*/,
                            openedOverlayFactory: function() {
                                return React/*g*/.createElement(FBPhotoViewerOverlay/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("avatar" === n && e.target) return React/*g*/.createElement(FBAvatarAttachment/*o*/, {
                            attachment: e,
                            navigator: this.props.navigator,
                            maxPhotoWidth: this.props.maxPhotoWidth
                        });
                        if ("event" === n && e.target) return React/*g*/.createElement(FBEventAttachment/*a*/, {
                            attachment: e,
                            navigator: this.props.navigator
                        });
                        if ("question" === n && e.target) return React/*g*/.createElement(FBQuestionAttachment/*d*/, {
                            attachment: e,
                            navigator: this.props.navigator
                        });
                        if ("video" === n && e.media) return React/*g*/.createElement(FBVideoAttachment/*f*/, {
                            attachment: e,
                            navigator: this.props.navigator
                        });
                        if ("sticker" === n && e.media) return React/*g*/.createElement(FBStickerAttachment/*h*/, {
                            attachment: e,
                            navigator: this.props.navigator
                        })
                    }
                return React/*g*/.createElement(FBFallbackAttachment/*s*/, {
                    attachment: e,
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
    i.exports = E
});