__d("FBAttachmentView",["FBAvatarAttachment","FBEventAttachment","FBFallbackAttachment","FBPhotoAttachment","FBPhotoCollage","FBPhotoModalViewer","FBPhotoViewerOverlay","FBQuestionAttachment","FBStickerAttachment","FBVideoAttachment","PixelRatio","React","ReactGraphQL","Dimensions","StylePropType","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBAvatarAttachment/*o*/ = require/*t*/("FBAvatarAttachment"),
        FBEventAttachment/*a*/ = require/*t*/("FBEventAttachment"),
        FBFallbackAttachment/*s*/ = require/*t*/("FBFallbackAttachment"),
        FBPhotoAttachment/*l*/ = require/*t*/("FBPhotoAttachment"),
        FBPhotoCollage/*u*/ = require/*t*/("FBPhotoCollage"),
        FBPhotoModalViewer/*c*/ = require/*t*/("FBPhotoModalViewer"),
        FBPhotoViewerOverlay/*p*/ = require/*t*/("FBPhotoViewerOverlay"),
        FBQuestionAttachment/*d*/ = require/*t*/("FBQuestionAttachment"),
        FBStickerAttachment/*h*/ = require/*t*/("FBStickerAttachment"),
        FBVideoAttachment/*f*/ = require/*t*/("FBVideoAttachment"),
        PixelRatio/*m*/ = require/*t*/("PixelRatio"),
        React/*g*/ = require/*t*/("React"),
        ReactGraphQL/*_*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*y*/ = require/*t*/("Dimensions"),
        StylePropType/*v*/ = require/*t*/("StylePropType"),
        isEmpty/*S*/ = require/*t*/("isEmpty"),
        keyOf/*b*/ = require/*t*/("keyOf"),
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
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, FBAvatarAttachment/*o*/, FBEventAttachment/*a*/, FBFallbackAttachment/*s*/, FBPhotoAttachment/*l*/) {
                            var FBPhotoCollage/*u*/ = require/*t*/.__GraphQL;
                            return new FBPhotoCollage/*u*/.QueryFragment("FBAttachmentView_attachment", "StoryAttachment", [new FBPhotoCollage/*u*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new FBPhotoCollage/*u*/.Field("target", [new FBPhotoCollage/*u*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FBPhotoCollage/*u*/.Field("media", [new FBPhotoCollage/*u*/.Field("id")]), new FBPhotoCollage/*u*/.Field("subattachments", [new FBPhotoCollage/*u*/.Field("media", [new FBPhotoCollage/*u*/.Field("id")])], null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/), require/*t*/.__frag(FBAvatarAttachment/*o*/), require/*t*/.__frag(FBEventAttachment/*a*/), require/*t*/.__frag(FBFallbackAttachment/*s*/), require/*t*/.__frag(FBPhotoAttachment/*l*/)], {
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
                var global/*e*/ = this.props.attachment;
                if (global/*e*/.style_list)
                    for (var require/*t*/ = 0; require/*t*/ < global/*e*/.style_list.length; ++require/*t*/) {
                        var requireDynamic/*n*/ = global/*e*/.style_list[require/*t*/];
                        if ("album" === requireDynamic/*n*/ && !isEmpty/*S*/(global/*e*/.subattachments)) return React/*g*/.createElement(FBPhotoCollage/*u*/, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoModalViewer/*c*/,
                            openedOverlayFactory: function() {
                                return React/*g*/.createElement(FBPhotoViewerOverlay/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("photo" === requireDynamic/*n*/ && global/*e*/.media) return React/*g*/.createElement(FBPhotoAttachment/*l*/, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoHeight: this.props.maxPhotoHeight,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoModalViewer/*c*/,
                            openedOverlayFactory: function() {
                                return React/*g*/.createElement(FBPhotoViewerOverlay/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("avatar" === requireDynamic/*n*/ && global/*e*/.target) return React/*g*/.createElement(FBAvatarAttachment/*o*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator,
                            maxPhotoWidth: this.props.maxPhotoWidth
                        });
                        if ("event" === requireDynamic/*n*/ && global/*e*/.target) return React/*g*/.createElement(FBEventAttachment/*a*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("question" === requireDynamic/*n*/ && global/*e*/.target) return React/*g*/.createElement(FBQuestionAttachment/*d*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("video" === requireDynamic/*n*/ && global/*e*/.media) return React/*g*/.createElement(FBVideoAttachment/*f*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("sticker" === requireDynamic/*n*/ && global/*e*/.media) return React/*g*/.createElement(FBStickerAttachment/*h*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        })
                    }
                return React/*g*/.createElement(FBFallbackAttachment/*s*/, {
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