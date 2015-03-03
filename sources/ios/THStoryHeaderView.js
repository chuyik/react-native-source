__d("THStoryHeaderView",["FBTextEntity","FBTextWithEntities.react","React","ReactGraphQL","StyleSheet","Text","THColors","THProfilePicture","TimeStamp","View","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBTextEntity"),
        a = require/*t*/("FBTextWithEntities.react"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("StyleSheet"),
        c = require/*t*/("Text"),
        p = require/*t*/("THColors"),
        d = require/*t*/("THProfilePicture"),
        h = require/*t*/("TimeStamp"),
        f = require/*t*/("View"),
        m = require/*t*/("fbt"),
        g = 36,
        _ = s.createClass({
            displayName: "THStoryHeaderView",
            propTypes: {
                story: s.PropTypes.object.isRequired,
                context: s.PropTypes.object.isRequired
            },
            mixins: [l.Mixin],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("THStoryHeaderView_story", "Story", [new requireLazy/*r*/.Field("id"), new requireLazy/*r*/.Field("title", null, [require/*t*/.__frag(global/*e*/)]), new requireLazy/*r*/.Field("edit_history", [new requireLazy/*r*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireLazy/*r*/.Field("creation_time"), new requireLazy/*r*/.Field("actors", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("__type__", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], [require/*t*/.__frag(requireDynamic/*n*/)], null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                plural: !0
                            }), new requireLazy/*r*/.Field("to", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("__type__", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
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
                        }(a.getQuery("text"), d.getQuery("actor"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THStoryHeaderView_group", "Group", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THStoryHeaderView_group"
                            })
                        }(d.getQuery("group"))
                    }
                }
            },
            getTitle: function() {
                var global/*e*/ = this.getActor(),
                    require/*t*/ = this.props.story,
                    requireDynamic/*n*/ = null;
                if (require/*t*/.title) requireDynamic/*n*/ = s.createElement(a, {
                    shouldTruncate: !0,
                    key: "title",
                    text: this.props.story.title,
                    textStyle: y.text,
                    maxLength: 250,
                    maxLines: 10
                });
                else if (global/*e*/) {
                    var requireLazy/*r*/ = [];
                    requireLazy/*r*/.push(s.createElement(o, {
                        entity: global/*e*/,
                        key: "actor",
                        text: global/*e*/.name
                    }));
                    var module/*i*/ = this.props.context.isGroupStream && !this.props.context.isSubStory;
                    !module/*i*/ && require/*t*/.to && (requireLazy/*r*/.push(s.createElement(c, {
                        key: ">"
                    }, " ▸ ")), requireLazy/*r*/.push(s.createElement(o, {
                        entity: require/*t*/.to,
                        key: "to",
                        text: require/*t*/.to.name
                    }))), requireDynamic/*n*/ = s.createElement(c, {
                        style: y.text
                    }, requireLazy/*r*/)
                }
                return s.createElement(f, {
                    key: "title"
                }, requireDynamic/*n*/)
            },
            getActor: function() {
                var global/*e*/ = this.props.story;
                return global/*e*/.actors && global/*e*/.actors[0] ? global/*e*/.actors[0] : null
            },
            getProfilePicture: function() {
                var global/*e*/ = this.getActor();
                return global/*e*/ ? s.createElement(d, {
                    actor: this.getActor(),
                    height: g,
                    group: this.props.group
                }) : null
            },
            getHeaderMetadata: function() {
                var global/*e*/ = this.props.story;
                if (!global/*e*/.creation_time) return null;
                var require/*t*/ = [];
                return require/*t*/.push(s.createElement(f, {
                    style: y.timestampContainer
                }, s.createElement(h, {
                    style: y.metadataText,
                    time: global/*e*/.creation_time,
                    shorten: !0
                }))), this.props.story.edit_history && this.props.story.edit_history.count && (require/*t*/.push(s.createElement(f, {
                    style: y.middotContainer
                }, s.createElement(c, {
                    style: y.metadataText
                }, "·"))), require/*t*/.push(s.createElement(c, {
                    style: y.metadataText
                }, m({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Indicator that a post has been edited"
                })))), s.createElement(f, {
                    style: y.metadataContainer
                }, require/*t*/)
            },
            render: function() {
                return s.createElement(f, {
                    style: y.container
                }, this.getProfilePicture(), s.createElement(f, {
                    style: y.textContainer
                }, this.getTitle(), this.getHeaderMetadata()))
            }
        }),
        y = u.create({
            container: {
                flexDirection: "row",
                marginRight: 22
            },
            metadataContainer: {
                flexDirection: "row"
            },
            metadataText: {
                color: p.feedbackFadedText,
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
    module/*i*/.exports = _
});