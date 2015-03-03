__d("FBAttachmentView",["FBAvatarAttachment","FBEventAttachment","FBFallbackAttachment","FBPhotoAttachment","FBPhotoCollage","FBPhotoModalViewer","FBPhotoViewerOverlay","FBQuestionAttachment","FBStickerAttachment","FBVideoAttachment","PixelRatio","React","ReactGraphQL","Dimensions","StylePropType","isEmpty","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAvatarAttachment"),
        exports/*a*/ = require/*t*/("FBEventAttachment"),
        FBAvatarAttachment/*s*/ = require/*t*/("FBFallbackAttachment"),
        FBEventAttachment/*l*/ = require/*t*/("FBPhotoAttachment"),
        FBFallbackAttachment/*u*/ = require/*t*/("FBPhotoCollage"),
        FBPhotoAttachment/*c*/ = require/*t*/("FBPhotoModalViewer"),
        FBPhotoCollage/*p*/ = require/*t*/("FBPhotoViewerOverlay"),
        FBPhotoModalViewer/*d*/ = require/*t*/("FBQuestionAttachment"),
        FBPhotoViewerOverlay/*h*/ = require/*t*/("FBStickerAttachment"),
        FBQuestionAttachment/*f*/ = require/*t*/("FBVideoAttachment"),
        FBStickerAttachment/*m*/ = require/*t*/("PixelRatio"),
        FBVideoAttachment/*g*/ = require/*t*/("React"),
        PixelRatio/*_*/ = require/*t*/("ReactGraphQL"),
        React/*y*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*v*/ = require/*t*/("StylePropType"),
        Dimensions/*S*/ = require/*t*/("isEmpty"),
        StylePropType/*b*/ = require/*t*/("keyOf"),
        isEmpty/*R*/ = React/*y*/.get("window").width - 10,
        keyOf/*w*/ = FBStickerAttachment/*m*/.get(),
        C = StylePropType/*b*/({
            photoViewRef: null
        }),
        E = FBVideoAttachment/*g*/.createClass({
            displayName: "FBAttachmentView",
            propTypes: {
                attachment: FBVideoAttachment/*g*/.PropTypes.object.isRequired,
                navigator: FBVideoAttachment/*g*/.PropTypes.object,
                titleMaxLines: FBVideoAttachment/*g*/.PropTypes.number,
                maxPhotoHeight: FBVideoAttachment/*g*/.PropTypes.number,
                maxPhotoWidth: FBVideoAttachment/*g*/.PropTypes.number,
                useLargeImage: FBVideoAttachment/*g*/.PropTypes.bool,
                subtitleMaxLines: FBVideoAttachment/*g*/.PropTypes.number,
                descriptionMaxLines: FBVideoAttachment/*g*/.PropTypes.number,
                borderStyle: ReactGraphQL/*v*/,
                imageLargeStyle: ReactGraphQL/*v*/,
                imageSmallStyle: ReactGraphQL/*v*/,
                textContainerStyle: ReactGraphQL/*v*/,
                subtitleStyle: ReactGraphQL/*v*/,
                descriptionStyle: ReactGraphQL/*v*/,
                containerStyle: ReactGraphQL/*v*/
            },
            getDefaultProps: function() {
                return {
                    maxPhotoHeight: isEmpty/*R*/
                }
            },
            mixins: [PixelRatio/*_*/.Mixin],
            statics: {
                queryParams: {
                    imageLarge: [isEmpty/*R*/ * keyOf/*w*/, isEmpty/*R*/ * keyOf/*w*/]
                },
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, exports/*a*/, FBAvatarAttachment/*s*/, FBEventAttachment/*l*/) {
                            var FBFallbackAttachment/*u*/ = require/*t*/.__GraphQL;
                            return new FBFallbackAttachment/*u*/.QueryFragment("FBAttachmentView_attachment", "StoryAttachment", [new FBFallbackAttachment/*u*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            }), new FBFallbackAttachment/*u*/.Field("target", [new FBFallbackAttachment/*u*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new FBFallbackAttachment/*u*/.Field("media", [new FBFallbackAttachment/*u*/.Field("id")]), new FBFallbackAttachment/*u*/.Field("subattachments", [new FBFallbackAttachment/*u*/.Field("media", [new FBFallbackAttachment/*u*/.Field("id")])], null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(global/*e*/), require/*t*/.__frag(requireDynamic/*n*/), require/*t*/.__frag(requireLazy/*r*/), require/*t*/.__frag(module/*i*/), require/*t*/.__frag(o), require/*t*/.__frag(exports/*a*/), require/*t*/.__frag(FBAvatarAttachment/*s*/), require/*t*/.__frag(FBEventAttachment/*l*/)], {
                                scope: "FBAttachmentView_attachment"
                            })
                        }(o.getQuery("attachment"), exports/*a*/.getQuery("attachment"), FBPhotoModalViewer/*d*/.getQuery("attachment"), FBEventAttachment/*l*/.getQuery("attachment"), FBFallbackAttachment/*u*/.getQuery("attachment"), FBPhotoViewerOverlay/*h*/.getQuery("attachment"), FBQuestionAttachment/*f*/.getQuery("attachment"), FBAvatarAttachment/*s*/.getQuery("attachment"))
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
                        if ("album" === requireDynamic/*n*/ && !Dimensions/*S*/(global/*e*/.subattachments)) return FBVideoAttachment/*g*/.createElement(FBFallbackAttachment/*u*/, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoAttachment/*c*/,
                            openedOverlayFactory: function() {
                                return FBVideoAttachment/*g*/.createElement(FBPhotoCollage/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("photo" === requireDynamic/*n*/ && global/*e*/.media) return FBVideoAttachment/*g*/.createElement(FBEventAttachment/*l*/, {
                            ref: C,
                            attachment: global/*e*/,
                            maxPhotoHeight: this.props.maxPhotoHeight,
                            maxPhotoWidth: this.props.maxPhotoWidth,
                            modalViewer: FBPhotoAttachment/*c*/,
                            openedOverlayFactory: function() {
                                return FBVideoAttachment/*g*/.createElement(FBPhotoCollage/*p*/, {
                                    onTapDone: this.onTapDone
                                })
                            }.bind(this)
                        });
                        if ("avatar" === requireDynamic/*n*/ && global/*e*/.target) return FBVideoAttachment/*g*/.createElement(o, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator,
                            maxPhotoWidth: this.props.maxPhotoWidth
                        });
                        if ("event" === requireDynamic/*n*/ && global/*e*/.target) return FBVideoAttachment/*g*/.createElement(exports/*a*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("question" === requireDynamic/*n*/ && global/*e*/.target) return FBVideoAttachment/*g*/.createElement(FBPhotoModalViewer/*d*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("video" === requireDynamic/*n*/ && global/*e*/.media) return FBVideoAttachment/*g*/.createElement(FBQuestionAttachment/*f*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        });
                        if ("sticker" === requireDynamic/*n*/ && global/*e*/.media) return FBVideoAttachment/*g*/.createElement(FBPhotoViewerOverlay/*h*/, {
                            attachment: global/*e*/,
                            navigator: this.props.navigator
                        })
                    }
                return FBVideoAttachment/*g*/.createElement(FBAvatarAttachment/*s*/, {
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