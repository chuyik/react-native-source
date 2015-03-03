__d("THStoryView",["FBAttachmentView","FBTextWithEntities.react","THColors","React","ReactGraphQL","Dimensions","StyleSheet","Text","THStoryHeaderView","THViewConstants","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAttachmentView"),
        exports/*a*/ = require/*t*/("FBTextWithEntities.react"),
        FBAttachmentView/*s*/ = require/*t*/("THColors"),
        FBTextWithEntities.react/*l*/ = require/*t*/("React"),
        THColors/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*p*/ = require/*t*/("StyleSheet"),
        Dimensions/*d*/ = require/*t*/("Text"),
        StyleSheet/*h*/ = require/*t*/("THStoryHeaderView"),
        Text/*f*/ = require/*t*/("THViewConstants"),
        THStoryHeaderView/*m*/ = require/*t*/("View"),
        THViewConstants/*g*/ = 16,
        View/*_*/ = 500,
        y = 10,
        v = 1.5,
        S = FBTextWithEntities.react/*l*/.createClass({
            displayName: "THStoryView",
            propTypes: {
                story: FBTextWithEntities.react/*l*/.PropTypes.object.isRequired,
                navigator: FBTextWithEntities.react/*l*/.PropTypes.object,
                viewContext: FBTextWithEntities.react/*l*/.PropTypes.string
            },
            mixins: [THColors/*u*/.Mixin],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var o = require/*t*/.__GraphQL;
                            return new o.QueryFragment("THStoryView_story", "Story", [new o.Field("id"), new o.Field("message", null, [require/*t*/.__frag(global/*e*/)]), new o.Field("suffix", null, [require/*t*/.__frag(requireDynamic/*n*/)]), new o.Field("attachments", [new o.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(module/*i*/)], {
                                scope: "THStoryView_story"
                            })
                        }(exports/*a*/.getQuery("text"), exports/*a*/.getQuery("text"), o.getQuery("attachment"), StyleSheet/*h*/.getQuery("story"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THStoryView_group", "Group", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THStoryView_group"
                            })
                        }(StyleSheet/*h*/.getQuery("group"))
                    }
                }
            },
            getMessage: function() {
                if (!this.props.story.message) return null;
                var global/*e*/ = null;
                return this.props.story.suffix && (global/*e*/ = [FBTextWithEntities.react/*l*/.createElement(Dimensions/*d*/, null, " ", "—", " "), FBTextWithEntities.react/*l*/.createElement(exports/*a*/, {
                    text: this.props.story.suffix,
                    textStyle: b.textStyle
                })]), FBTextWithEntities.react/*l*/.createElement(THStoryHeaderView/*m*/, {
                    style: b.messageContainer
                }, FBTextWithEntities.react/*l*/.createElement(Dimensions/*d*/, {
                    style: b.textStyle
                }, FBTextWithEntities.react/*l*/.createElement(exports/*a*/, {
                    shouldTruncate: this.props.viewContext !== Text/*f*/.PERMALINK,
                    text: this.props.story.message,
                    maxLength: View/*_*/,
                    maxLines: y,
                    textStyle: b.textStyle,
                    seeMoreStyle: b.seeMore
                }), global/*e*/))
            },
            getAttachments: function() {
                var global/*e*/ = this.props.story.attachments;
                if (!global/*e*/ || 0 === global/*e*/.length) return null;
                var require/*t*/ = 0,
                    requireDynamic/*n*/ = [];
                return global/*e*/.forEach(function(global/*e*/) {
                    -1 === global/*e*/.style_list.indexOf("avatar_list") && requireDynamic/*n*/.push(FBTextWithEntities.react/*l*/.createElement(THStoryHeaderView/*m*/, {
                        style: this.getAttachmentStyle(global/*e*/.style_list),
                        key: require/*t*/++
                    }, FBTextWithEntities.react/*l*/.createElement(o, {
                        attachment: global/*e*/,
                        navigator: this.props.navigator,
                        context: this.props.context,
                        maxPhotoWidth: this.getMaxPhotoWidth(global/*e*/.style_list),
                        maxPhotoHeight: this.getMaxPhotoHeight(global/*e*/.style_list)
                    })))
                }.bind(this)), 0 === requireDynamic/*n*/.length ? null : FBTextWithEntities.react/*l*/.createElement(THStoryHeaderView/*m*/, {
                    style: b.attachmentCollectionContainer
                }, requireDynamic/*n*/)
            },
            getAttachmentStyle: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < global/*e*/.length; require/*t*/++)
                    if ("photo" === global/*e*/[require/*t*/] || "album" === global/*e*/[require/*t*/] || "video" === global/*e*/[require/*t*/]) return b.fullWidthAttachmentContainer;
                return b.attachmentContainer
            },
            getMaxPhotoWidth: function(global/*e*/) {
                for (var require/*t*/ = React/*c*/.get("window").width, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++)
                    if ("photo" === global/*e*/[requireDynamic/*n*/] || "album" === global/*e*/[requireDynamic/*n*/] || "video" === global/*e*/[requireDynamic/*n*/]) return require/*t*/;
                return require/*t*/ - 2 * THViewConstants/*g*/
            },
            getMaxPhotoHeight: function(global/*e*/) {
                return this.getMaxPhotoWidth(global/*e*/) * v
            },
            render: function() {
                return FBTextWithEntities.react/*l*/.createElement(THStoryHeaderView/*m*/, null, FBTextWithEntities.react/*l*/.createElement(StyleSheet/*h*/, {
                    story: this.props.story,
                    context: this.props.context,
                    group: this.props.group
                }), this.getMessage(), this.getAttachments())
            }
        }),
        b = ReactGraphQL/*p*/.create({
            attachmentCollectionContainer: {
                marginTop: 12
            },
            attachmentContainer: {
                marginTop: 2,
                marginLeft: 0,
                marginRight: 0
            },
            fullWidthAttachmentContainer: {
                marginTop: 12,
                marginLeft: -16,
                marginRight: -16
            },
            messageContainer: {
                marginTop: 11
            },
            seeMore: {
                color: FBAttachmentView/*s*/.feedbackFadedText
            },
            textStyle: {
                lineHeight: 20,
                fontSize: 15
            }
        });
    module/*i*/.exports = S
});