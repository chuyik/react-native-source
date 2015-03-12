__d("THStoryView",["FBAttachmentView","FBTextWithEntities.react","THColors","React","ReactGraphQL","Dimensions","StyleSheet","Text","THStoryHeaderView","THViewConstants","View"],function (e, t, n, r, i) {
    "use strict";
    var FBAttachmentView/*o*/ = t("FBAttachmentView"),
        a = t("FBTextWithEntities.react"),
        THColors/*s*/ = t("THColors"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        Dimensions/*c*/ = t("Dimensions"),
        StyleSheet/*p*/ = t("StyleSheet"),
        Text/*d*/ = t("Text"),
        THStoryHeaderView/*h*/ = t("THStoryHeaderView"),
        THViewConstants/*f*/ = t("THViewConstants"),
        View/*m*/ = t("View"),
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
                    story: function(e, t) {
                        return function(e, n, r, i) {
                            var FBAttachmentView/*o*/ = t.__GraphQL;
                            return new FBAttachmentView/*o*/.QueryFragment("THStoryView_story", "Story", [new FBAttachmentView/*o*/.Field("id"), new FBAttachmentView/*o*/.Field("message", null, [t.__frag(e)]), new FBAttachmentView/*o*/.Field("suffix", null, [t.__frag(n)]), new FBAttachmentView/*o*/.Field("attachments", [new FBAttachmentView/*o*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            })], [t.__frag(r)], null, null, null, {
                                plural: !0
                            })], [t.__frag(i)], {
                                scope: "THStoryView_story"
                            })
                        }(a.getQuery("text"), a.getQuery("text"), FBAttachmentView/*o*/.getQuery("attachment"), THStoryHeaderView/*h*/.getQuery("story"))
                    },
                    group: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THStoryView_group", "Group", [new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THStoryView_group"
                            })
                        }(THStoryHeaderView/*h*/.getQuery("group"))
                    }
                }
            },
            getMessage: function() {
                if (!this.props.story.message) return null;
                var e = null;
                return this.props.story.suffix && (e = [React/*l*/.createElement(Text/*d*/, null, " ", "—", " "), React/*l*/.createElement(a, {
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
                }), e))
            },
            getAttachments: function() {
                var e = this.props.story.attachments;
                if (!e || 0 === e.length) return null;
                var t = 0,
                    n = [];
                return e.forEach(function(e) {
                    -1 === e.style_list.indexOf("avatar_list") && n.push(React/*l*/.createElement(View/*m*/, {
                        style: this.getAttachmentStyle(e.style_list),
                        key: t++
                    }, React/*l*/.createElement(FBAttachmentView/*o*/, {
                        attachment: e,
                        navigator: this.props.navigator,
                        context: this.props.context,
                        maxPhotoWidth: this.getMaxPhotoWidth(e.style_list),
                        maxPhotoHeight: this.getMaxPhotoHeight(e.style_list)
                    })))
                }.bind(this)), 0 === n.length ? null : React/*l*/.createElement(View/*m*/, {
                    style: b.attachmentCollectionContainer
                }, n)
            },
            getAttachmentStyle: function(e) {
                for (var t = 0; t < e.length; t++)
                    if ("photo" === e[t] || "album" === e[t] || "video" === e[t]) return b.fullWidthAttachmentContainer;
                return b.attachmentContainer
            },
            getMaxPhotoWidth: function(e) {
                for (var t = Dimensions/*c*/.get("window").width, n = 0; n < e.length; n++)
                    if ("photo" === e[n] || "album" === e[n] || "video" === e[n]) return t;
                return t - 2 * g
            },
            getMaxPhotoHeight: function(e) {
                return this.getMaxPhotoWidth(e) * v
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
    i.exports = S
});