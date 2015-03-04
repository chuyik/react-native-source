__d("THStoryView",["FBAttachmentView","FBTextWithEntities.react","THColors","React","ReactGraphQL","Dimensions","StyleSheet","Text","THStoryHeaderView","THViewConstants","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBAttachmentView/*o*/ = require/*t*/("FBAttachmentView"),
        a = require/*t*/("FBTextWithEntities.react"),
        THColors/*s*/ = require/*t*/("THColors"),
        React/*l*/ = require/*t*/("React"),
        ReactGraphQL/*u*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*c*/ = require/*t*/("Dimensions"),
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        Text/*d*/ = require/*t*/("Text"),
        THStoryHeaderView/*h*/ = require/*t*/("THStoryHeaderView"),
        THViewConstants/*f*/ = require/*t*/("THViewConstants"),
        View/*m*/ = require/*t*/("View"),
        g = 16,
        _ = 500,
        y = 10,
        v = 1.5,
        S = React/*l*/.createClass({
            displayName: "THStoryView",
            propTypes: {
                story: React/*l*/.PropTypes.object.isRequired,
                navigator: React/*l*/.PropTypes.object,
                viewContext: React/*l*/.PropTypes.string
            },
            mixins: [ReactGraphQL/*u*/.Mixin],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var FBAttachmentView/*o*/ = require/*t*/.__GraphQL;
                            return new FBAttachmentView/*o*/.QueryFragment("THStoryView_story", "Story", [new FBAttachmentView/*o*/.Field("id"), new FBAttachmentView/*o*/.Field("message", null, [require/*t*/.__frag(global/*e*/)]), new FBAttachmentView/*o*/.Field("suffix", null, [require/*t*/.__frag(requireDynamic/*n*/)]), new FBAttachmentView/*o*/.Field("attachments", [new FBAttachmentView/*o*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(requireLazy/*r*/)], null, null, null, {
                                plural: !0
                            })], [require/*t*/.__frag(module/*i*/)], {
                                scope: "THStoryView_story"
                            })
                        }(a.getQuery("text"), a.getQuery("text"), FBAttachmentView/*o*/.getQuery("attachment"), THStoryHeaderView/*h*/.getQuery("story"))
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
                        }(THStoryHeaderView/*h*/.getQuery("group"))
                    }
                }
            },
            getMessage: function() {
                if (!this.props.story.message) return null;
                var global/*e*/ = null;
                return this.props.story.suffix && (global/*e*/ = [React/*l*/.createElement(Text/*d*/, null, " ", "—", " "), React/*l*/.createElement(a, {
                    text: this.props.story.suffix,
                    textStyle: b.textStyle
                })]), React/*l*/.createElement(View/*m*/, {
                    style: b.messageContainer
                }, React/*l*/.createElement(Text/*d*/, {
                    style: b.textStyle
                }, React/*l*/.createElement(a, {
                    shouldTruncate: this.props.viewContext !== THViewConstants/*f*/.PERMALINK,
                    text: this.props.story.message,
                    maxLength: _,
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
                    -1 === global/*e*/.style_list.indexOf("avatar_list") && requireDynamic/*n*/.push(React/*l*/.createElement(View/*m*/, {
                        style: this.getAttachmentStyle(global/*e*/.style_list),
                        key: require/*t*/++
                    }, React/*l*/.createElement(FBAttachmentView/*o*/, {
                        attachment: global/*e*/,
                        navigator: this.props.navigator,
                        context: this.props.context,
                        maxPhotoWidth: this.getMaxPhotoWidth(global/*e*/.style_list),
                        maxPhotoHeight: this.getMaxPhotoHeight(global/*e*/.style_list)
                    })))
                }.bind(this)), 0 === requireDynamic/*n*/.length ? null : React/*l*/.createElement(View/*m*/, {
                    style: b.attachmentCollectionContainer
                }, requireDynamic/*n*/)
            },
            getAttachmentStyle: function(global/*e*/) {
                for (var require/*t*/ = 0; require/*t*/ < global/*e*/.length; require/*t*/++)
                    if ("photo" === global/*e*/[require/*t*/] || "album" === global/*e*/[require/*t*/] || "video" === global/*e*/[require/*t*/]) return b.fullWidthAttachmentContainer;
                return b.attachmentContainer
            },
            getMaxPhotoWidth: function(global/*e*/) {
                for (var require/*t*/ = Dimensions/*c*/.get("window").width, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++)
                    if ("photo" === global/*e*/[requireDynamic/*n*/] || "album" === global/*e*/[requireDynamic/*n*/] || "video" === global/*e*/[requireDynamic/*n*/]) return require/*t*/;
                return require/*t*/ - 2 * g
            },
            getMaxPhotoHeight: function(global/*e*/) {
                return this.getMaxPhotoWidth(global/*e*/) * v
            },
            render: function() {
                return React/*l*/.createElement(View/*m*/, null, React/*l*/.createElement(THStoryHeaderView/*h*/, {
                    story: this.props.story,
                    context: this.props.context,
                    group: this.props.group
                }), this.getMessage(), this.getAttachments())
            }
        }),
        b = StyleSheet/*p*/.create({
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
                color: THColors/*s*/.feedbackFadedText
            },
            textStyle: {
                lineHeight: 20,
                fontSize: 15
            }
        });
    module/*i*/.exports = S
});