__d("FBQuestionAttachment",["FIGColors","React","ReactGraphQL","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","truncate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FIGColors/*o*/ = require/*t*/("FIGColors"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
        RouteHandler/*l*/ = require/*t*/("RouteHandler"),
        StyleSheet/*u*/ = require/*t*/("StyleSheet"),
        Text/*c*/ = require/*t*/("Text"),
        TouchableHighlight/*p*/ = require/*t*/("TouchableHighlight"),
        View/*d*/ = require/*t*/("View"),
        fbt/*h*/ = require/*t*/("fbt"),
        truncate/*f*/ = require/*t*/("truncate"),
        m = 24,
        g = React/*a*/.createClass({
            displayName: "FBQuestionAttachment",
            propTypes: {
                attachment: React/*a*/.PropTypes.object.isRequired,
                navigator: React/*a*/.PropTypes.object
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBQuestionAttachment_attachment", "StoryAttachment", [new global/*e*/.Field("target", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("options", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("text"), new global/*e*/.Field("voters", [new global/*e*/.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBQuestionAttachment_attachment_1"
                            }), new global/*e*/.Field("count"), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new global/*e*/.Callv("first", ["5"])], null, null, {
                                connection: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBQuestionAttachment_attachment"
                            })
                        }()
                    }
                }
            },
            renderOption: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = 200,
                    module/*i*/ = global/*e*/.voters.count,
                    FIGColors/*o*/ = truncate/*f*/(global/*e*/.text, m, {
                        breakOnWords: !1,
                        minDelta: 0
                    });
                return React/*a*/.createElement(View/*d*/, {
                    style: _.option,
                    key: "option" + requireDynamic/*n*/
                }, React/*a*/.createElement(View/*d*/, {
                    style: [_.barContainer, {
                        width: requireLazy/*r*/
                    }]
                }, React/*a*/.createElement(View/*d*/, {
                    style: [_.bar, {
                        width: .7 * requireLazy/*r*/ * module/*i*/ / require/*t*/
                    }]
                }), React/*a*/.createElement(Text/*c*/, {
                    style: _.text
                }, FIGColors/*o*/)), React/*a*/.createElement(View/*d*/, {
                    style: [_.barContainer, _.countBox]
                }, React/*a*/.createElement(Text/*c*/, {
                    style: _.countText
                }, "+" + module/*i*/)))
            },
            renderOptions: function() {
                var global/*e*/ = this.props.attachment.target.options.edges,
                    require/*t*/ = 0;
                return global/*e*/.map(function(global/*e*/) {
                    global/*e*/.node.voters.count > require/*t*/ && (require/*t*/ = global/*e*/.node.voters.count)
                }), global/*e*/.map(function(global/*e*/, requireDynamic/*n*/) {
                    return this.renderOption(global/*e*/.node, require/*t*/, requireDynamic/*n*/)
                }.bind(this))
            },
            renderViewMoreButton: function() {
                return this.props.attachment.target.options.count > 5 ? React/*a*/.createElement(View/*d*/, {
                    style: _.viewMore
                }, React/*a*/.createElement(Text/*c*/, null, fbt/*h*/({
                    type: "text",
                    texts: ["View More..."],
                    desc: "Button to view more options to React/*a*/ poll in React/*a*/ group"
                }))) : null
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ && global/*e*/.options ? React/*a*/.createElement(TouchableHighlight/*p*/, {
                    onPress: RouteHandler/*l*/.getCallback({
                        typeList: ["URL"],
                        params: {
                            url: global/*e*/.url,
                            navigator: this.props.navigator
                        }
                    })
                }, React/*a*/.createElement(View/*d*/, {
                    style: _.container
                }, this.renderOptions(), this.renderViewMoreButton())) : (console.error("Tried to render an FBQuestionAttachment without React/*a*/ target or options!"), React/*a*/.createElement(View/*d*/, null))
            }
        }),
        _ = StyleSheet/*u*/.create({
            container: {
                backgroundColor: "#ffffff",
                alignItems: "center"
            },
            option: {
                alignItems: "center",
                flexDirection: "row",
                marginVertical: 5
            },
            barContainer: {
                justifyContent: "center",
                paddingLeft: 5,
                marginRight: 5,
                height: 34,
                borderWidth: .5,
                borderColor: "#cccccc",
                borderRadius: 2
            },
            bar: {
                position: "absolute",
                left: 0,
                top: 0,
                height: 33,
                backgroundColor: "#eeeeee"
            },
            text: {
                containerBackgroundColor: "transparent",
                fontSize: 14,
                fontWeight: "bold"
            },
            countBox: {
                backgroundColor: "#eeeeee",
                width: 34,
                alignItems: "center",
                paddingLeft: 0
            },
            countText: {
                fontSize: 13,
                color: FIGColors/*o*/.mediumText
            },
            viewMore: {
                marginTop: 6
            }
        });
    module/*i*/.exports = g
});