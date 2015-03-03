__d("FBCommentAttachment",["FBAttachmentView","FIGColors","React","ReactGraphQL","StyleSheet"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAttachmentView"),
        a = require/*t*/("FIGColors"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("StyleSheet"),
        c = 200,
        p = 240,
        d = s.createClass({
            displayName: "FBCommentAttachment",
            propTypes: {
                attachment: s.PropTypes.object.isRequired,
                backgroundColor: s.PropTypes.string.isRequired,
                maxPhotoHeight: s.PropTypes.number,
                maxPhotoWidth: s.PropTypes.number
            },
            mixins: [l.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("FBCommentAttachment_attachment", "StoryAttachment", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "FBCommentAttachment_attachment"
                            })
                        }(o.getQuery("attachment"))
                    }
                }
            },
            getDefaultProps: function() {
                return {
                    maxPhotoHeight: c,
                    maxPhotoWidth: p
                }
            },
            render: function() {
                return s.createElement(o, {
                    attachment: this.props.attachment,
                    navigator: this.props.navigator,
                    titleMaxLines: 1,
                    maxPhotoHeight: this.props.maxPhotoHeight,
                    maxPhotoWidth: this.props.maxPhotoWidth,
                    useLargeImage: !1,
                    subtitleMaxLines: 1,
                    descriptionMaxLines: 1,
                    borderStyle: [h.border, {
                        backgroundColor: this.props.backgroundColor
                    }],
                    containerStyle: h.containerStyle,
                    imageSmallStyle: h.imageSmall,
                    textContainerStyle: h.textContainer,
                    subtitleStyle: h.subtitle,
                    descriptionStyle: h.description,
                    useSeparator: !1
                })
            }
        }),
        h = u.create({
            border: {
                borderWidth: 0
            },
            imageSmall: {
                marginTop: 0,
                marginLeft: 0,
                marginBottom: 0,
                backgroundColor: null,
                height: 60,
                width: 60
            },
            textContainer: {
                backgroundColor: null,
                paddingVertical: 0,
                paddingHorizontal: 10
            },
            subtitle: {
                fontSize: 13,
                color: "#000000"
            },
            description: {
                fontSize: 13,
                color: a.mediumText
            },
            containerStyle: {
                borderRadius: 4,
                shadowOpacity: 0,
                overflow: "hidden"
            }
        });
    module/*i*/.exports = d
});