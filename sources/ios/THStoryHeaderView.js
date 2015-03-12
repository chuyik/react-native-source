__d("THStoryHeaderView",["FBTextEntity","FBTextWithEntities.react","React","ReactGraphQL","StyleSheet","Text","THColors","THProfilePicture","TimeStamp","View","fbt"],function (e, t, n, r, i) {
    "use strict";
    var FBTextEntity/*o*/ = t("FBTextEntity"),
        a = t("FBTextWithEntities.react"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        StyleSheet/*u*/ = t("StyleSheet"),
        Text/*c*/ = t("Text"),
        THColors/*p*/ = t("THColors"),
        THProfilePicture/*d*/ = t("THProfilePicture"),
        TimeStamp/*h*/ = t("TimeStamp"),
        View/*f*/ = t("View"),
        fbt/*m*/ = t("fbt"),
        g = 36,
        _ = React/*s*/.createClass({
            displayName: "THStoryHeaderView",
            propTypes: {
                story: React/*s*/.PropTypes.object.isRequired,
                context: React/*s*/.PropTypes.object.isRequired
            },
            mixins: [ReactGraphQL/*l*/.Mixin],
            statics: {
                queries: {
                    story: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("THStoryHeaderView_story", "Story", [new r.Field("id"), new r.Field("title", null, [t.__frag(e)]), new r.Field("edit_history", [new r.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new r.Field("creation_time"), new r.Field("actors", [new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new r.Field("name"), new r.Field("__type__", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [t.__frag(n)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                plural: !0
                            }), new r.Field("to", [new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new r.Field("name"), new r.Field("__type__", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "THStoryHeaderView_story"
                            })
                        }(a.getQuery("text"), THProfilePicture/*d*/.getQuery("actor"))
                    },
                    group: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THStoryHeaderView_group", "Group", [new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THStoryHeaderView_group"
                            })
                        }(THProfilePicture/*d*/.getQuery("group"))
                    }
                }
            },
            getTitle: function() {
                var e = this.getActor(),
                    t = this.props.story,
                    n = null;
                if (t.title) n = React/*s*/.createElement(a, {
                    shouldTruncate: !0,
                    key: "title",
                    text: this.props.story.title,
                    textStyle: y.text,
                    maxLength: 250,
                    maxLines: 10
                });
                else if (e) {
                    var r = [];
                    r.push(React/*s*/.createElement(FBTextEntity/*o*/, {
                        entity: e,
                        key: "actor",
                        text: e.name
                    }));
                    var i = this.props.context.isGroupStream && !this.props.context.isSubStory;
                    !i && t.to && (r.push(React/*s*/.createElement(Text/*c*/, {
                        key: ">"
                    }, " ▸ ")), r.push(React/*s*/.createElement(FBTextEntity/*o*/, {
                        entity: t.to,
                        key: "to",
                        text: t.to.name
                    }))), n = React/*s*/.createElement(Text/*c*/, {
                        style: y.text
                    }, r)
                }
                return React/*s*/.createElement(View/*f*/, {
                    key: "title"
                }, n)
            },
            getActor: function() {
                var e = this.props.story;
                return e.actors && e.actors[0] ? e.actors[0] : null
            },
            getProfilePicture: function() {
                var e = this.getActor();
                return e ? React/*s*/.createElement(THProfilePicture/*d*/, {
                    actor: this.getActor(),
                    height: g,
                    group: this.props.group
                }) : null
            },
            getHeaderMetadata: function() {
                var e = this.props.story;
                if (!e.creation_time) return null;
                var t = [];
                return t.push(React/*s*/.createElement(View/*f*/, {
                    style: y.timestampContainer
                }, React/*s*/.createElement(TimeStamp/*h*/, {
                    style: y.metadataText,
                    time: e.creation_time,
                    shorten: !0
                }))), this.props.story.edit_history && this.props.story.edit_history.count && (t.push(React/*s*/.createElement(View/*f*/, {
                    style: y.middotContainer
                }, React/*s*/.createElement(Text/*c*/, {
                    style: y.metadataText
                }, "·"))), t.push(React/*s*/.createElement(Text/*c*/, {
                    style: y.metadataText
                }, fbt/*m*/({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Indicator that a post has been edited"
                })))), React/*s*/.createElement(View/*f*/, {
                    style: y.metadataContainer
                }, t)
            },
            render: function() {
                return React/*s*/.createElement(View/*f*/, {
                    style: y.container
                }, this.getProfilePicture(), React/*s*/.createElement(View/*f*/, {
                    style: y.textContainer
                }, this.getTitle(), this.getHeaderMetadata()))
            }
        }),
        y = StyleSheet/*u*/.create({
            container: {
                flexDirection: "row",
                marginRight: 22
            },
            metadataContainer: {
                flexDirection: "row"
            },
            metadataText: {
                color: THColors/*p*/.feedbackFadedText,
                marginTop: 2,
                fontSize: 12
            },
            middotContainer: {
                marginRight: 2
            },
            text: {
                fontSize: 13,
                lineHeight: 16
            },
            textContainer: {
                flexDirection: "column",
                justifyContent: "center",
                marginTop: -1,
                marginLeft: 12,
                flex: 1
            },
            timestampContainer: {
                marginRight: 2
            }
        });
    i.exports = _
});