__d("THStoryHeaderView",["FBTextEntity","FBTextWithEntities.react","React","ReactGraphQL","StyleSheet","Text","THColors","THProfilePicture","TimeStamp","View","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBTextEntity"),
        exports/*a*/ = require/*t*/("FBTextWithEntities.react"),
        FBTextEntity/*s*/ = require/*t*/("React"),
        FBTextWithEntities.react/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*c*/ = require/*t*/("Text"),
        StyleSheet/*p*/ = require/*t*/("THColors"),
        Text/*d*/ = require/*t*/("THProfilePicture"),
        THColors/*h*/ = require/*t*/("TimeStamp"),
        THProfilePicture/*f*/ = require/*t*/("View"),
        TimeStamp/*m*/ = require/*t*/("fbt"),
        View/*g*/ = 36,
        fbt/*_*/ = FBTextEntity/*s*/.createClass({
            displayName: "THStoryHeaderView",
            propTypes: {
                story: FBTextEntity/*s*/.PropTypes.object.isRequired,
                context: FBTextEntity/*s*/.PropTypes.object.isRequired
            },
            mixins: [FBTextWithEntities.react/*l*/.Mixin],
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
                        }(exports/*a*/.getQuery("text"), Text/*d*/.getQuery("actor"))
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
                        }(Text/*d*/.getQuery("group"))
                    }
                }
            },
            getTitle: function() {
                var global/*e*/ = this.getActor(),
                    require/*t*/ = this.props.story,
                    requireDynamic/*n*/ = null;
                if (require/*t*/.title) requireDynamic/*n*/ = FBTextEntity/*s*/.createElement(exports/*a*/, {
                    shouldTruncate: !0,
                    key: "title",
                    text: this.props.story.title,
                    textStyle: y.text,
                    maxLength: 250,
                    maxLines: 10
                });
                else if (global/*e*/) {
                    var requireLazy/*r*/ = [];
                    requireLazy/*r*/.push(FBTextEntity/*s*/.createElement(o, {
                        entity: global/*e*/,
                        key: "actor",
                        text: global/*e*/.name
                    }));
                    var module/*i*/ = this.props.context.isGroupStream && !this.props.context.isSubStory;
                    !module/*i*/ && require/*t*/.to && (requireLazy/*r*/.push(FBTextEntity/*s*/.createElement(ReactGraphQL/*c*/, {
                        key: ">"
                    }, " ▸ ")), requireLazy/*r*/.push(FBTextEntity/*s*/.createElement(o, {
                        entity: require/*t*/.to,
                        key: "to",
                        text: require/*t*/.to.name
                    }))), requireDynamic/*n*/ = FBTextEntity/*s*/.createElement(ReactGraphQL/*c*/, {
                        style: y.text
                    }, requireLazy/*r*/)
                }
                return FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    key: "title"
                }, requireDynamic/*n*/)
            },
            getActor: function() {
                var global/*e*/ = this.props.story;
                return global/*e*/.actors && global/*e*/.actors[0] ? global/*e*/.actors[0] : null
            },
            getProfilePicture: function() {
                var global/*e*/ = this.getActor();
                return global/*e*/ ? FBTextEntity/*s*/.createElement(Text/*d*/, {
                    actor: this.getActor(),
                    height: View/*g*/,
                    group: this.props.group
                }) : null
            },
            getHeaderMetadata: function() {
                var global/*e*/ = this.props.story;
                if (!global/*e*/.creation_time) return null;
                var require/*t*/ = [];
                return require/*t*/.push(FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    style: y.timestampContainer
                }, FBTextEntity/*s*/.createElement(THColors/*h*/, {
                    style: y.metadataText,
                    time: global/*e*/.creation_time,
                    shorten: !0
                }))), this.props.story.edit_history && this.props.story.edit_history.count && (require/*t*/.push(FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    style: y.middotContainer
                }, FBTextEntity/*s*/.createElement(ReactGraphQL/*c*/, {
                    style: y.metadataText
                }, "·"))), require/*t*/.push(FBTextEntity/*s*/.createElement(ReactGraphQL/*c*/, {
                    style: y.metadataText
                }, TimeStamp/*m*/({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Indicator that exports/*a*/ post has been edited"
                })))), FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    style: y.metadataContainer
                }, require/*t*/)
            },
            render: function() {
                return FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    style: y.container
                }, this.getProfilePicture(), FBTextEntity/*s*/.createElement(THProfilePicture/*f*/, {
                    style: y.textContainer
                }, this.getTitle(), this.getHeaderMetadata()))
            }
        }),
        y = React/*u*/.create({
            container: {
                flexDirection: "row",
                marginRight: 22
            },
            metadataContainer: {
                flexDirection: "row"
            },
            metadataText: {
                color: StyleSheet/*p*/.feedbackFadedText,
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
    module/*i*/.exports = fbt/*_*/
});